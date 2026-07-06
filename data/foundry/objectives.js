// =========================================
// Foundry Objectives
// Version 0.1.12
// =========================================

export const foundryObjectives = [

{
    id: "boiler",
    name: "Boiler",

    x: 30,
    y: 5,

    unlockPhase: "opening",

    phases: {
        opening: {
            priority: "Critical",
            strategy: "Capture immediately.",
            why: "Building capture speed buff."
        },
        mid: {
            priority: "Critical",
            strategy: "Maintain control.",
            why: "Critical Phase 2 control objective."
        },
        final: {
            priority: "Critical",
            strategy: "Maintain control.",
            why: "Critical Phase 3 control objective."
        }
    }
},

{
    id: "repair-north",
    name: "North Repair",

    x: 58,
    y: 5,

    unlockPhase: "opening",

    phases: {
        opening:{
            priority:"Medium",
            strategy:"Capture if available.",
            why:"Extra points."
        },
        mid:{
            priority:"Low",
            strategy:"Rotate away unless needed.",
            why:"Lower Phase 2 priority."
        },
        final:{
            priority:"Medium",
            strategy:"Hold as a secondary objective.",
            why:"Medium Phase 3 support value."
        }
    }
},

{
    id:"workshop-northwest",
    name:"NW Workshop",

    x:20,
    y:15,

    unlockPhase:"final",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        mid:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if practical.",
            why:"Secondary objective."
        }
    }
},

{
    id:"mercenary",
    name:"Mercenary Camp",

    x:45,
    y:15,

    unlockPhase:"mid",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unavailable."
        },
        mid:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Critical Phase 2 objective."
        },
        final:{
            priority:"High",
            strategy:"Maintain control.",
            why:"High Phase 3 objective."
        }
    }
},

{
    id:"workshop-northeast",
    name:"NE Workshop",

    x:70,
    y:20,

    unlockPhase:"final",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        mid:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if practical.",
            why:"Secondary objective."
        }
    }
},

{
    id:"prototype-west",
    name:"West Prototype",

    x:20,
    y:30,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture immediately.",
            why:"High Phase 1 objective."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"High Phase 2 objective."
        },
        final:{
            priority:"High",
            strategy:"Maintain control if practical.",
            why:"Equal high-priority Prototype objective."
        }
    }
},

{
    id:"repair-west",
    name:"West Repair",

    x:10,
    y:40,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Additional points."
        },
        mid:{
            priority:"Low",
            strategy:"Rotate away unless needed.",
            why:"Lower Phase 2 priority."
        },
        final:{
            priority:"Medium",
            strategy:"Hold as a secondary objective.",
            why:"Medium Phase 3 support value."
        }
    }
},

{
    id:"imperial",
    name:"Imperial Foundry",

    x:45,
    y:35,

    unlockPhase:"mid",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unavailable."
        },
        mid:{
            priority:"High",
            strategy:"Capture and contest.",
            why:"High Phase 2 objective."
        },
        final:{
            priority:"Critical",
            strategy:"Primary objective.",
            why:"Highest value objective."
        }
    }
},

{
    id:"repair-east",
    name:"East Repair",

    x:80,
    y:35,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Additional points."
        },
        mid:{
            priority:"Low",
            strategy:"Rotate away unless needed.",
            why:"Lower Phase 2 priority."
        },
        final:{
            priority:"Medium",
            strategy:"Hold as a secondary objective.",
            why:"Medium Phase 3 support value."
        }
    }
},

{
    id:"prototype-east",
    name:"East Prototype",

    x:70,
    y:45,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture immediately.",
            why:"High Phase 1 objective."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"High Phase 2 objective."
        },
        final:{
            priority:"High",
            strategy:"Maintain control if practical.",
            why:"Equal high-priority Prototype objective."
        }
    }
},

{
    id:"workshop-southwest",
    name:"SW Workshop",

    x:26,
    y:55,

    unlockPhase:"final",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        mid:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if practical.",
            why:"Secondary objective."
        }
    }
},

{
    id:"workshop-southeast",
    name:"SE Workshop",

    x:61,
    y:60,

    unlockPhase:"final",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        mid:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unlocks in Phase 3."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if practical.",
            why:"Secondary objective."
        }
    }
},

{
    id:"munitions",
    name:"Munitions Factory",

    x:45,
    y:60,

    unlockPhase:"mid",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unavailable."
        },
        mid:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Powerful combat buff."
        },
        final:{
            priority:"High",
            strategy:"Maintain control.",
            why:"High Phase 3 objective."
        }
    }
},

{
    id:"repair-south",
    name:"South Repair",

    x:31,
    y:75,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Additional points."
        },
        mid:{
            priority:"Low",
            strategy:"Rotate away unless needed.",
            why:"Lower Phase 2 priority."
        },
        final:{
            priority:"Medium",
            strategy:"Hold as a secondary objective.",
            why:"Medium Phase 3 support value."
        }
    }
},

{
    id:"transit",
    name:"Transit Station",

    x:60,
    y:75,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Major mobility advantage."
        },
        mid:{
            priority:"Medium",
            strategy:"Hold if practical.",
            why:"Medium Phase 2 rotation value."
        },
        final:{
            priority:"Low",
            strategy:"Use only when needed for rotations.",
            why:"Lower Phase 3 priority."
        }
    }
}

];
