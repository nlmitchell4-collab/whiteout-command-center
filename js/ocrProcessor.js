export async function processScreenshots(files) {

    const results = [];

    for (const file of files) {

        results.push({
            filename: file.name,
            status: "Pending OCR"
        });

    }

    return results;

}