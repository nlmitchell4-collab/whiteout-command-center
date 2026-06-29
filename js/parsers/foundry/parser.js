import { getWorker } from "../../ocr/tesseract.js";
import { normalizeImage } from "../../ocr/imagePreprocessor.js";
import { FOUNDRY_LAYOUT } from "./layout.js";
import {
    cropCanvas,
    cropFoundryRows
} from "./cropper.js";

export async function processFoundry(files) {

    const worker = await getWorker();

    const results = [];

    for (const file of files) {

        const image = await normalizeImage(file);

        const anchorCanvas = cropAnchorRegion(image);

        const {
            data: anchorData
        } = await worker.recognize(anchorCanvas);

        const anchor =
            findAnchor(anchorData);

        const screenshotLegion =
            parseScreenshotLegion(anchorData.text);

        const rows =
            cropFoundryRows(image, anchor);

        const combatants = [];

        for (let index = 0; index < rows.length; index += 1) {

            const combatant =
                await parseCombatantRow(
                    worker,
                    rows[index],
                    file.name,
                    index,
                    screenshotLegion
                );

            if (combatant) {

                combatants.push(combatant);

            }

        }

        results.push({

            filename: file.name,

            anchorText: anchorData.text,

            anchorFound: Boolean(anchor),

            screenshotLegion,

            combatants,

            rowCount: rows.length

        });

    }

    return results;

}

function cropAnchorRegion(image) {

    return cropCanvas(image, FOUNDRY_LAYOUT.anchorSearch);

}

function findAnchor(anchorData) {
    const words =
        anchorData.words ?? [];

    const targetWords =
        FOUNDRY_LAYOUT.anchorText
            .toLowerCase()
            .split(/\s+/);

    for (let index = 0; index < words.length; index += 1) {

        const first =
            normalizeOcrText(words[index].text);

        const second =
            normalizeOcrText(words[index + 1]?.text ?? "");

        if (
            first.includes(targetWords[0]) &&
            second.includes(targetWords[1])
        ) {

            return {
                x: words[index].bbox.x0,
                y: Math.min(words[index].bbox.y0, words[index + 1].bbox.y0),
                bottom: Math.max(words[index].bbox.y1, words[index + 1].bbox.y1)
            };

        }

    }

    if (
        normalizeOcrText(anchorData.text)
            .includes(FOUNDRY_LAYOUT.anchorText.toLowerCase())
    ) {

        return {
            x: FOUNDRY_LAYOUT.anchorSearch.x,
            y: FOUNDRY_LAYOUT.listTopFallback - FOUNDRY_LAYOUT.firstRowOffset,
            bottom: FOUNDRY_LAYOUT.listTopFallback - FOUNDRY_LAYOUT.firstRowOffset
        };

    }

    return null;

}

async function parseCombatantRow(worker, row, filename, index, screenshotLegion) {
    const name =
        await recognizeRegion(worker, row.canvas, FOUNDRY_LAYOUT.regions.name);

    const power =
        await recognizeRegion(worker, row.canvas, FOUNDRY_LAYOUT.regions.power);

    const status =
        await recognizeRegion(worker, row.canvas, FOUNDRY_LAYOUT.regions.status);

    const engagement =
        await recognizeRegion(worker, row.canvas, FOUNDRY_LAYOUT.regions.engagement);

    const displayName =
        cleanName(name);

    const troopPower =
        parsePower(power);

    const legionAssignment =
        determineLegion(status, engagement, screenshotLegion);

    const cleanedEngagement =
        cleanStatus(engagement);

    if (
        !displayName ||
        troopPower === null ||
        troopPower <= 0 ||
        isHeaderName(displayName) ||
        isNoEngagement(cleanedEngagement)
    ) {

        return null;

    }

    return {
        id: createCombatantId(displayName),
        name: displayName,
        power: troopPower,
        legion: legionAssignment.legion,
        legionSource: legionAssignment.source,
        status: cleanStatus(status),
        engagement: cleanedEngagement,
        sourceFile: filename,
        sourceRow: index,
        sourceY: row.y
    };

}

async function recognizeRegion(worker, source, region) {
    if (region.numericOnly) {

        await worker.setParameters({
            tessedit_char_whitelist: "0123456789,.",
            tessedit_pageseg_mode: "7"
        });

    }

    const {
        data: { text }
    } = await worker.recognize(cropCanvas(source, region));

    if (region.numericOnly) {

        await worker.setParameters({
            tessedit_char_whitelist: "",
            tessedit_pageseg_mode: "3"
        });

    }

    return text;

}

function normalizeOcrText(value) {
    return String(value)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function cleanName(value) {
    return String(value)
        .replace(/[^\S\r\n]+/g, " ")
        .replace(/\n+/g, " ")
        .replace(/[^\p{L}\p{N}\s'._-]/gu, "")
        .trim();
}

function cleanStatus(value) {
    return String(value)
        .replace(/[^\S\r\n]+/g, " ")
        .replace(/\n+/g, " ")
        .trim();
}

function parsePower(value) {
    const candidates =
        String(value)
            .replace(/[oO]/g, "0")
            .replace(/[lI|]/g, "1")
            .match(/\d[\d,.\s]*/g) ?? [];

    const parsedCandidates =
        candidates
            .map(candidate => Number.parseInt(
                candidate.replace(/[^\d]/g, ""),
                10
            ))
            .filter(candidate =>
                Number.isFinite(candidate) &&
                candidate >= 100 &&
                candidate <= 100000000
            );

    if (parsedCandidates.length === 0) return null;

    return parsedCandidates
        .sort((a, b) => b - a)[0];
}

function parseScreenshotLegion(value) {
    const match =
        normalizeOcrText(value).match(/legion\s*(\d+)\s*combatants/);

    if (!match) return null;

    const legion =
        Number.parseInt(match[1], 10);

    return Number.isFinite(legion) ? legion : null;
}

function determineLegion(status, engagement, screenshotLegion) {
    const normalizedStatus =
        normalizeOcrText(status);

    const dispatchedMatch =
        normalizedStatus.match(/legion\s*(\d+)\s*dispatched/);

    if (dispatchedMatch) {

        const legion =
            Number.parseInt(dispatchedMatch[1], 10);

        return {
            legion: Number.isFinite(legion) ? legion : null,
            source: "dispatched-status"
        };

    }

    const normalizedAction =
        normalizeOcrText(engagement);

    if (
        screenshotLegion !== null &&
        (
            normalizedAction.includes("join") ||
            normalizedAction.includes("substitute")
        )
    ) {

        return {
            legion: screenshotLegion,
            source: "row-action"
        };

    }

    return {
        legion: null,
        source: "unknown"
    };
}

function isHeaderName(value) {
    return [
        "leader",
        "officers",
        "troop power",
        "join",
        "substitute"
    ].includes(normalizeOcrText(value));
}

function isNoEngagement(value) {
    const normalized =
        normalizeOcrText(value);

    return (
        normalized.includes("no engagement") ||
        normalized.includes("no engagements") ||
        normalized.includes("noengagement")
    );
}

function createCombatantId(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
