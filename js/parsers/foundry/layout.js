export const FOUNDRY_LAYOUT = {

    // Image normalization
    targetWidth: 369,

    // OCR only this portion of the image to locate the anchor
    anchorSearch: {
        x: 0,
        y: 0,
        width: 369,
        height: 200
    },

    // Text we will search for
    anchorText: "Troop Power",

    // Distance from the anchor to the first combatant row
    firstRowOffset: 18,

    listTopFallback: 145,

    // Combatant row geometry
    rowHeight: 68,
    rowGap: 4,
    minRowGap: 24,

    avatarProbe: {
        x: 18,
        width: 60,
        height: 52,
        threshold: 18
    },

    // OCR regions within each combatant row
    regions: {

        name: {
            x: 78,
            y: 8,
            width: 175,
            height: 24
        },

        power: {
            x: 78,
            y: 31,
            width: 100,
            height: 22
        },

        status: {
            x: 78,
            y: 47,
            width: 190,
            height: 20
        },

        engagement: {
            x: 268,
            y: 27,
            width: 75,
            height: 34
        }

    }

};
