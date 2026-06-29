import { createWorker } from "tesseract.js";

let worker = null;

export async function getWorker() {

    if (worker) return worker;

    worker = await createWorker("eng");

    return worker;

}