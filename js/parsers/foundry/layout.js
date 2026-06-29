export const FOUNDRY_LAYOUT = {

    // Image normalization
    targetWidth: 369,

    // OCR only this portion of the image to locate the anchor
    anchorSearch: {
        x: 0,
        y: 0,
        width: 369,
        height: 180
    },

    // Text we will search for
    anchorText: "Troop Power",

    // Distance from the anchor to the first combatant row
    firstRowOffset: 38,

    // Combatant row geometry
    rowHeight: 82,
    rowGap: 2,

    // OCR regions within each combatant row
    regions: {

        name: {
            x: 58,
            y: 0,
            width: 180,
            height: 28
        },

        power: {
            x: 58,
            y: 24,
            width: 140,
            height: 24
        },

        status: {
            x: 58,
            y: 48,
            width: 220,
            height: 24
        }

    }

};