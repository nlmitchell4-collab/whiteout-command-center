import { processFoundry } from "./foundry/parser.js";

export async function processEvent(event, files) {

    switch (event) {

        case "foundry":
            return processFoundry(files);

        default:
            throw new Error(`${event} parser not implemented.`);

    }

}