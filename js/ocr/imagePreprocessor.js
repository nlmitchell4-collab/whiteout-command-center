export async function normalizeImage(file) {

    return new Promise((resolve) => {

        const img = new Image();

        img.onload = () => {

            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            const TARGET_WIDTH = 369;
            const scale = TARGET_WIDTH / img.width;

            canvas.width = TARGET_WIDTH;
            canvas.height = Math.round(img.height * scale);

            ctx.imageSmoothingEnabled = false;

            ctx.drawImage(
                img,
                0,
                0,
                canvas.width,
                canvas.height
            );

            const imageData = ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const data = imageData.data;

            // Convert to grayscale and increase contrast
            for (let i = 0; i < data.length; i += 4) {

    const gray =
        0.299 * data[i] +
        0.587 * data[i + 1] +
        0.114 * data[i + 2];

    data[i] = gray;
    data[i + 1] = gray;
    data[i + 2] = gray;

}

            ctx.putImageData(imageData, 0, 0);

            resolve(canvas);

        };

        img.src = URL.createObjectURL(file);

    });

}
export function detectCombatantRows(canvas) {

    console.log(
        "Canvas:",
        canvas.width,
        canvas.height
    );

    return [];

}