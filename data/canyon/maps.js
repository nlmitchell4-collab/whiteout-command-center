import canyonMapUrl from "../../maps/canyon-map.jpg";

const OBJECTIVE_TYPES = {
    BASTION: {
        type: "bastion",
        priority: "home",
        value: 1800,
        unlockPhase: "opening"
    },
    AIRPORT: {
        type: "airport",
        priority: "high",
        value: 60,
        unlockPhase: "opening"
    },
    STRONGHOLD: {
        type: "stronghold",
        priority: "high",
        value: 600,
        unlockPhase: "opening"
    },
    POINT: {
        type: "point-building",
        priority: "medium",
        value: 180,
        unlockPhase: "opening"
    },
    FORTRESS: {
        type: "fortress",
        priority: "critical",
        value: 1800,
        unlockPhase: "fortress"
    },
    CITADEL: {
        type: "citadel",
        priority: "critical",
        value: 1800,
        bonusValue: 50000,
        unlockPhase: "citadel"
    }
};

const territoryCoordinates = {
    Stormrage: {
        S1: [7, 28],
        S2: [13, 24],
        S3: [13, 32],
        S4: [10, 40],
        S5: [21, 18],
        S6: [16, 30],
        S7: [16, 38],
        S8: [15, 48],
        S9: [28, 9],
        S10: [20, 30],
        S11: [20, 40],
        S12: [21, 52],
        S13: [36, 10],
        S14: [29, 20],
        S15: [25, 30],
        S16: [24, 39],
        S17: [25, 48],
        S18: [15, 58],
        S19: [46, 15],
        S20: [42, 20],
        S21: [29, 30],
        S22: [29, 39],
        S23: [31, 48],
        S24: [37, 28],
        S25: [35, 36],
        S26: [36, 44],
        S27: [31, 55],
        S28: [45, 27],
        S29: [39, 39],
        S30: [43, 35],
        S31: [40, 46]
    },
    Flameguard: {
        F1: [93, 29],
        F2: [89, 40],
        F3: [86, 32],
        F4: [86, 24],
        F5: [84, 48],
        F6: [82, 39],
        F7: [82, 30],
        F8: [78, 18],
        F9: [78, 58],
        F10: [78, 42],
        F11: [78, 30],
        F12: [69, 20],
        F13: [74, 64],
        F14: [74, 48],
        F15: [74, 39],
        F16: [75, 30],
        F17: [73, 24],
        F18: [62, 17],
        F19: [80, 66],
        F20: [68, 55],
        F21: [68, 47],
        F22: [70, 38],
        F23: [69, 28],
        F24: [64, 55],
        F25: [65, 44],
        F26: [64, 35],
        F27: [62, 27],
        F28: [64, 58],
        F29: [60, 38],
        F30: [59, 45],
        F31: [55, 35]
    },
    Iceguard: {
        I1: [48, 87],
        I2: [42, 80],
        I3: [50, 77],
        I4: [57, 80],
        I5: [43, 72],
        I6: [47, 74],
        I7: [54, 74],
        I8: [65, 75],
        I9: [31, 72],
        I10: [42, 68],
        I11: [57, 68],
        I12: [69, 72],
        I13: [26, 65],
        I14: [38, 65],
        I15: [49, 65],
        I16: [55, 65],
        I17: [64, 65],
        I18: [75, 66],
        I19: [15, 65],
        I20: [30, 58],
        I21: [40, 58],
        I22: [50, 58],
        I23: [61, 57],
        I24: [36, 51],
        I25: [44, 54],
        I26: [55, 54],
        I27: [66, 55],
        I28: [40, 49],
        I29: [50, 50],
        I30: [45, 48],
        I31: [55, 48]
    }
};

const objectiveTypeByNumber = {
    1: OBJECTIVE_TYPES.BASTION,
    13: OBJECTIVE_TYPES.STRONGHOLD,
    21: OBJECTIVE_TYPES.STRONGHOLD,
    22: OBJECTIVE_TYPES.STRONGHOLD,
    23: OBJECTIVE_TYPES.STRONGHOLD,
    24: OBJECTIVE_TYPES.FORTRESS,
    29: OBJECTIVE_TYPES.STRONGHOLD
};

const territoryPrefixes = {
    Flameguard: "F",
    Iceguard: "I",
    Stormrage: "S"
};

const territoryByPrefix = {
    f: "flameguard",
    i: "iceguard",
    s: "stormrage"
};

const blueTargetByHome = {
    Stormrage: "F",
    Flameguard: "I",
    Iceguard: "S"
};

const redTargetByHome = {
    Stormrage: "I",
    Flameguard: "S",
    Iceguard: "F"
};

function objectiveIdFromCode(code) {
    if (String(code) === "100") return "frozen-citadel";

    const match =
        String(code).toLowerCase().match(/^([fis])(\d+)$/);

    if (!match) return String(code).toLowerCase();

    return `${territoryByPrefix[match[1]]}-${match[2]}`;
}

function createRouteCodes(homeMap, homeNumbers, targetPrefix, targetNumbers) {
    const homePrefix =
        territoryPrefixes[homeMap].toLowerCase();

    return [
        ...homeNumbers.map(number => `${homePrefix}${number}`),
        ...targetNumbers.map(number => `${targetPrefix.toLowerCase()}${number}`)
    ];
}

function createHomeRouteCodes(homeMap, numbers) {
    const homePrefix =
        territoryPrefixes[homeMap].toLowerCase();

    return numbers.map(number => `${homePrefix}${number}`);
}

function routeIds(codes) {
    return codes.map(objectiveIdFromCode);
}

function createPhaseRoutesByMap(buildPhaseCodes) {
    return Object.fromEntries(
        Object.keys(territoryPrefixes).map(mapName => [
            mapName,
            Object.fromEntries(
                Object.entries(buildPhaseCodes(mapName)).map(([phase, codes]) => [
                    phase,
                    routeIds(codes)
                ])
            )
        ])
    );
}

const canyonRoutes = {
    Blue: {
        name: "Northern enemy push route",
        summary:
            "Pushes from the home northern path into the adjacent enemy territory, then pressures the enemy-side fortress chain before collapsing center.",
        phasesByMap: createPhaseRoutesByMap(homeMap => ({
            opening: createRouteCodes(
                homeMap,
                [2, 5, 9, 13, 19],
                blueTargetByHome[homeMap],
                [18, 12, 8, 4, 1]
            ),
            fortress: createRouteCodes(
                homeMap,
                [],
                blueTargetByHome[homeMap],
                [17, 23, 26, 29]
            ),
            citadel: [
                ...createHomeRouteCodes(homeMap, [19]),
                "100"
            ]
        }))
    },
    Green: {
        name: "Lower center route",
        summary:
            "Controls the lower center path, protects home-side connectors, and stages a clean Citadel collapse.",
        phasesByMap: createPhaseRoutesByMap(homeMap => ({
            opening: createHomeRouteCodes(homeMap, [3, 7, 11, 16, 23, 22, 27, 26]),
            fortress: createHomeRouteCodes(homeMap, [29, 30, 31]),
            citadel: [
                ...createHomeRouteCodes(homeMap, [29, 27, 31, 30]),
                "100"
            ]
        }))
    },
    Red: {
        name: "Southern enemy push route",
        summary:
            "Pushes from the home southern path into the adjacent enemy territory, then pressures the enemy-side fortress chain before collapsing center.",
        phasesByMap: createPhaseRoutesByMap(homeMap => ({
            opening: createRouteCodes(
                homeMap,
                [4, 8, 12, 18],
                redTargetByHome[homeMap],
                [19, 13, 9, 5, 2, 1]
            ),
            fortress: createRouteCodes(
                homeMap,
                [],
                redTargetByHome[homeMap],
                [14, 21, 25, 29]
            ),
            citadel: [
                ...createHomeRouteCodes(homeMap, [18, 24]),
                "100"
            ]
        }))
    },
    Yellow: {
        name: "Upper center route",
        summary:
            "Controls the upper center path, supports fortress timing, and links the team into the final Citadel collapse.",
        phasesByMap: createPhaseRoutesByMap(homeMap => ({
            opening: createHomeRouteCodes(homeMap, [3, 6, 10, 15, 21, 14, 25, 29, 30]),
            fortress: createHomeRouteCodes(homeMap, [24, 20, 28, 30]),
            citadel: [
                ...createHomeRouteCodes(homeMap, [28, 30, 31]),
                "100"
            ]
        }))
    }
};

function getObjectiveType(number) {
    if (objectiveTypeByNumber[number]) {
        return objectiveTypeByNumber[number];
    }

    return number % 2 === 0
        ? OBJECTIVE_TYPES.POINT
        : OBJECTIVE_TYPES.AIRPORT;
}

function createTerritoryObjectives(mapName, coordinates) {
    const prefix =
        territoryPrefixes[mapName];

    return Object.entries(coordinates).map(([label, [x, y]]) => {
        const number =
            Number.parseInt(label.slice(1), 10);

        const objectiveType =
            getObjectiveType(number);

        return {
            id: `${mapName.toLowerCase()}-${number}`,
            label,
            mapName,
            number,
            x,
            y,
            ...objectiveType,
            displayName: `${mapName} ${prefix}${number}`
        };
    });
}

export const canyonMaps = {
    full: {
        id: "full",
        name: "Lost Canyon",
        image: canyonMapUrl,
        routes: canyonRoutes,
        objectives: [
            ...createTerritoryObjectives("Stormrage", territoryCoordinates.Stormrage),
            ...createTerritoryObjectives("Flameguard", territoryCoordinates.Flameguard),
            ...createTerritoryObjectives("Iceguard", territoryCoordinates.Iceguard),
            {
                id: "frozen-citadel",
                label: "100",
                displayName: "Frozen Citadel",
                mapName: "Center",
                number: 100,
                x: 50,
                y: 38,
                ...OBJECTIVE_TYPES.CITADEL
            }
        ]
    }
};
