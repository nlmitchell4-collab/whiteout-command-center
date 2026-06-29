import { processEvent } from "../parsers/parserFactory.js";

export async function processScreenshots(event, files) {
    return processEvent(event, files);
}