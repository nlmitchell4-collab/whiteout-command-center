import { FOUNDRY_LAYOUT } from "./layout.js";

export function cropCanvas(source, region) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const scale =
        region.scale ?? 1;

    canvas.width = region.width * scale;
    canvas.height = region.height * scale;

    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
        source,
        region.x,
        region.y,
        region.width,
        region.height,
        0,
        0,
        canvas.width,
        canvas.height
    );

    if (region.numericOnly) {

        improveNumericContrast(canvas);

    }

    return canvas;

}

function improveNumericContrast(canvas) {
    const ctx = canvas.getContext("2d");
    const imageData =
        ctx.getImageData(0, 0, canvas.width, canvas.height);

    const data =
        imageData.data;

    for (let i = 0; i < data.length; i += 4) {

        const gray =
            0.299 * data[i] +
            0.587 * data[i + 1] +
            0.114 * data[i + 2];

        const value =
            gray > 150 ? 255 : 0;

        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255;

    }

    ctx.putImageData(imageData, 0, 0);
}

export function cropFoundryRows(image, anchor) {
    const rows = [];
    const scanStart =
        Math.max(
            FOUNDRY_LAYOUT.listTopFallback,
            (anchor?.bottom ?? 0) + FOUNDRY_LAYOUT.firstRowOffset
        );

    let lastRowY = -Infinity;

    for (
        let y = scanStart;
        y <= image.height - FOUNDRY_LAYOUT.rowHeight;
        y += 1
    ) {

        if (y - lastRowY < FOUNDRY_LAYOUT.minRowGap) continue;

        const score = getAvatarVariance(image, y);

        if (score < FOUNDRY_LAYOUT.avatarProbe.threshold) continue;

        const rowY = refineRowTop(image, y);

        rows.push({
            y: rowY,
            canvas: cropCanvas(image, {
                x: 0,
                y: rowY,
                width: image.width,
                height: Math.min(
                    FOUNDRY_LAYOUT.rowHeight,
                    image.height - rowY
                )
            })
        });

        lastRowY = rowY;
        y = rowY + FOUNDRY_LAYOUT.rowHeight - 1;

    }

    return rows;

}

function getAvatarVariance(image, y) {
    const probe = FOUNDRY_LAYOUT.avatarProbe;
    const ctx = image.getContext("2d");
    const imageData = ctx.getImageData(
        probe.x,
        y,
        probe.width,
        Math.min(probe.height, image.height - y)
    );

    const data = imageData.data;
    let sum = 0;
    let sumSquares = 0;
    let count = 0;

    for (let i = 0; i < data.length; i += 4) {

        const gray =
            0.299 * data[i] +
            0.587 * data[i + 1] +
            0.114 * data[i + 2];

        sum += gray;
        sumSquares += gray * gray;
        count += 1;

    }

    const mean = sum / count;
    const variance = (sumSquares / count) - (mean * mean);

    return Math.sqrt(Math.max(variance, 0));

}

function refineRowTop(image, y) {
    let bestY = y;
    let bestScore = -Infinity;

    for (
        let candidate = Math.max(0, y - 8);
        candidate <= Math.min(image.height - FOUNDRY_LAYOUT.rowHeight, y + 8);
        candidate += 1
    ) {

        const score = getAvatarVariance(image, candidate);

        if (score > bestScore) {

            bestScore = score;
            bestY = candidate;

        }

    }

    return bestY;

}
