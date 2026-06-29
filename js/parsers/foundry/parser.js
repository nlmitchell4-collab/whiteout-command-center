import { getWorker } from "../../ocr/tesseract.js";
import { normalizeImage } from "../../ocr/imagePreprocessor.js";
import { FOUNDRY_LAYOUT } from "./layout.js";

export async function processFoundry(files) {

    const worker = await getWorker();

    const results = [];

    for (const file of files) {

        const image = await normalizeImage(file);

        const anchorCanvas = cropAnchorRegion(image);

        const {
            data: { text }
        } = await worker.recognize(anchorCanvas);

        results.push({

            filename: file.name,

            anchorText: text,

            rowCount: 0

        });

    }

    return results;

}

function cropAnchorRegion(image) {

    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");

    const region = FOUNDRY_LAYOUT.anchorSearch;

    canvas.width = region.width;
    canvas.height = region.height;

    ctx.drawImage(

        image,

        region.x,
        region.y,
        region.width,
        region.height,

        0,
        0,
        region.width,
        region.height

    );

    return canvas;

}