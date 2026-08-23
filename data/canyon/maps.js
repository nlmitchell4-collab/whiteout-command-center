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
        S1: [5.0, 31.0],
        S2: [13.0, 24.7],
        S3: [12.6, 34.0],
        S4: [9.5, 42.2],
        S5: [21.2, 19.0],
        S6: [16.5, 28.5],
        S7: [16.4, 37.8],
        S8: [16.4, 46.5],
        S9: [28.4, 11.2],
        S10: [21.0, 27.8],
        S11: [19.2, 39.8],
        S12: [21.0, 50.0],
        S13: [37.1, 11.8],
        S14: [28.6, 19.6],
        S15: [24.7, 28.9],
        S16: [23.6, 38.4],
        S17: [25.0, 47.4],
        S18: [14.5, 58.4],
        S19: [46.5, 16.2],
        S20: [41.9, 19.4],
        S21: [28.8, 27.8],
        S22: [27.9, 37.2],
        S23: [29.5, 46.2],
        S24: [37.2, 25.0],
        S25: [33.7, 31.8],
        S26: [33.8, 40.8],
        S27: [31.5, 50.8],
        S28: [45.7, 25.0],
        S29: [38.8, 37.8],
        S30: [42.8, 34.4],
        S31: [39.8, 43.2]
    },
    Flameguard: {
        F1: [92.9, 31.5],
        F2: [87.4, 41.8],
        F3: [85.8, 34.7],
        F4: [83.3, 25.4],
        F5: [83.2, 47.3],
        F6: [82.0, 37.8],
        F7: [82.0, 28.6],
        F8: [77.5, 19.8],
        F9: [78.1, 54.4],
        F10: [77.7, 41.1],
        F11: [77.9, 29.5],
        F12: [69.1, 19.8],
        F13: [71.8, 58.9],
        F14: [74.5, 46.3],
        F15: [74.7, 37.3],
        F16: [74.8, 27.9],
        F17: [73.0, 24.0],
        F18: [61.6, 17.2],
        F19: [77.6, 66.3],
        F20: [68.3, 52.9],
        F21: [69.1, 44.0],
        F22: [70.8, 34.8],
        F23: [69.5, 27.5],
        F24: [64.3, 51.4],
        F25: [64.5, 42.8],
        F26: [64.8, 33.5],
        F27: [61.5, 25.8],
        F28: [63.4, 57.8],
        F29: [59.8, 37.1],
        F30: [59.8, 43.9],
        F31: [55.0, 35.2]
    },
    Iceguard: {
        I1: [49.0, 93.0],
        I2: [41.6, 88.2],
        I3: [49.3, 87.0],
        I4: [56.4, 88.2],
        I5: [36.0, 82.0],
        I6: [44.1, 82.0],
        I7: [53.8, 82.0],
        I8: [68.0, 82.0],
        I9: [31.5, 76.8],
        I10: [41.9, 78.8],
        I11: [62.0, 78.8],
        I12: [69.6, 76.8],
        I13: [25.7, 72.5],
        I14: [36.8, 73.6],
        I15: [48.0, 72.0],
        I16: [56.0, 72.0],
        I17: [64.0, 73.6],
        I18: [75.2, 72.5],
        I19: [14.5, 70.2],
        I20: [30.0, 65.8],
        I21: [40.4, 66.2],
        I22: [50.8, 66.0],
        I23: [61.8, 65.6],
        I24: [35.8, 59.5],
        I25: [44.8, 62.8],
        I26: [56.0, 62.8],
        I27: [66.8, 60.2],
        I28: [41.0, 56.8],
        I29: [50.0, 57.8],
        I30: [45.0, 53.5],
        I31: [55.0, 53.5]
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
    F: "flameguard",
    I: "iceguard",
    S: "stormrage"
};

// Edit Canyon routes here. Use S/F/I objective codes, or 100 for Frozen Citadel.
const canyonRoutePlans = {
    Blue: {
        name: "Northern enemy push route",
        summary:
            "Pushes from the home northern path into the adjacent enemy territory, then pressures the enemy-side fortress chain before collapsing center.",
        phasesByMap: {
            Stormrage: {
                opening: ["S2", "S5", "S9", "S13", "S19", "F18", "F12", "F8", "F4", "F1"],
                fortress: ["F18", "F17", "F23", "F26", "F29"],
                citadel: ["F18", "F30", "F31", "100"]
            },
            Iceguard: {
                opening: ["I2", "I5", "I9", "I13","I19", "S18", "S12", "S8", "S4", "S1"],
                fortress: ["S18", "S17", "S23", "S26", "S29"],
                citadel: ["S18", "S30", "S31", "100"]
            },
            Flameguard: {
                opening: ["F2", "F5", "F9", "F13", "F19", "I18", "I12", "I8", "I4", "I1"],
                fortress: ["F19", "I17", "I23", "I26", "I29"],
                citadel: ["I18", "I30", "I31", "100"]
            }
        }
    },
    Green: {
        name: "Lower center route",
        summary:
            "Controls the lower center path, protects home-side connectors, and stages a clean Citadel collapse.",
        phasesByMap: {
            Stormrage: {
                opening: ["S3", "S7", "S11", "S16", "S17", "S23", "S22", "S27", "S26", "S31"],
                fortress: ["S24", "S29", "S30", "S31", "S27", "S18"],
                citadel: ["S29", "S27", "S31", "S30", "S18", "S28"]
            },
            Iceguard: {
                opening: ["I3", "I7", "I11", "I16", "I17", "I23", "I22", "I27", "I26", "I31"],
                fortress: ["I24","I29", "I30", "I31", "I27", "I18"],
                citadel: ["I29", "I27", "I31", "I30", "I18", "I28" ]
            },
            Flameguard: {
                opening: ["F3", "F7", "F11", "F16", "F17", "F23", "F22", "F27", "F26", "F31"],
                fortress: ["F24", "F29", "F30", "F31", "F27", "F18"],
                citadel: ["F29", "F27", "F31", "F30", "F18", "F28"]
            }
        }
    },
    Red: {
        name: "Southern enemy push route",
        summary:
            "Pushes from the home southern path into the adjacent enemy territory, then pressures the enemy-side fortress chain before collapsing center.",
        phasesByMap: {
            Stormrage: {
                opening: ["S4", "S8", "S12", "S18", "I19", "I13", "I9", "I5", "I2", "I1"],
                fortress: ["I24", "I13", "I20", "I21", "I19", "I28"],
                citadel: ["I30", "I31", "100"]
            },
            Iceguard: {
                opening: ["I4", "I8", "I12", "I18", "F19", "F13", "F9", "F5", "F2", "F1"],
                fortress: ["F24", "F13", "F20", "F21", "F19","F28"],
                citadel: ["F30", "F31", "100"]
            },
            Flameguard: {
                opening: ["F4", "F8", "F12", "F18", "S19", "S13", "S9", "S5", "S2", "S1"],
                fortress: ["S24", "S13", "S20", "S21", "S19", "S28"],
                citadel: ["S30", "S31", "100"]
            }
        }
    },
    Yellow: {
        name: "Upper center route",
        summary:
            "Controls the upper center path, supports fortress timing, and links the team into the final Citadel collapse.",
        phasesByMap: {
            Stormrage: {
                opening: ["S3", "S6", "S10", "S15", "S21", "S14", "S25", "S29", "S30"],
                fortress: ["S24", "S19", "S20", "S28", "S29", "S31", "S30"],
                citadel: ["S19", "S28", "S29", "S30", "S31"]
            },
            Iceguard: {
                opening: ["I3", "I6", "I10", "I15", "I21", "I14", "I25", "I29", "I30"],
                fortress: ["I24", "I19", "I20", "I28", "I29", "I31", "I30"],
                citadel: ["I19","I28", "I29", "I30", "I31" ]
            },
            Flameguard: {
                opening: ["F3", "F6", "F10", "F15", "F21", "F14", "F25", "F29", "F30"],
                fortress: ["F24", "F19", "F20", "F28", "F29", "F31", "F30"],
                citadel: ["F19", "F28", "F29", "F30", "F31"]
            }
        }
    }
};

const canyonRoutes =
    normalizeRoutePlans(canyonRoutePlans);

function normalizeRoutePlans(routePlans) {
    return Object.fromEntries(
        Object.entries(routePlans).map(([teamName, route]) => [
            teamName,
            {
                ...route,
                phasesByMap: Object.fromEntries(
                    Object.entries(route.phasesByMap).map(([mapName, phases]) => [
                        mapName,
                        Object.fromEntries(
                            Object.entries(phases).map(([phaseName, codes]) => [
                                phaseName,
                                codes.map(objectiveIdFromCode)
                            ])
                        )
                    ])
                )
            }
        ])
    );
}

function objectiveIdFromCode(code) {
    if (String(code) === "100") return "frozen-citadel";

    const match =
        String(code).toUpperCase().match(/^([FIS])(\d+)$/);

    if (!match) return String(code).toLowerCase();

    return `${territoryByPrefix[match[1]]}-${match[2]}`;
}

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
