// =========================================
// Foundry Objectives
// Version 0.1.11
// =========================================

const foundryObjectives = [

{
    id: "boiler",
    name: "Boiler",

    x: 32,
    y: 14,

    unlockPhase: "opening",

    phases: {
        opening: {
            priority: "Critical",
            strategy: "Capture immediately.",
            why: "Building capture speed buff."
        },
        mid: {
            priority: "High",
            strategy: "Maintain control.",
            why: "Still valuable throughout the match."
        },
        final: {
            priority: "Medium",
            strategy: "Defend only if nearby.",
            why: "Imperial takes priority."
        }
    }
},

{
    id: "repair-north",
    name: "North Repair",

    x: 58,
    y: 15,

    unlockPhase: "opening",

    phases: {
        opening:{
            priority:"Medium",
            strategy:"Capture if available.",
            why:"Extra points."
        },
        mid:{
            priority:"Medium",
            strategy:"Maintain if uncontested.",
            why:"Secondary objective."
        },
        final:{
            priority:"Low",
            strategy:"Abandon if needed.",
            why:"Imperial comes first."
        }
    }
},

{
    id:"workshop-northwest",
    name:"NW Workshop",

    x:28,
    y:28,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Combat buffs."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Prototype."
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

    x:46,
    y:31,

    unlockPhase:"mid",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unavailable."
        },
        mid:{
            priority:"High",
            strategy:"Capture immediately.",
            why:"High point value."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if uncontested.",
            why:"Support objective."
        }
    }
},

{
    id:"workshop-northeast",
    name:"NE Workshop",

    x:64,
    y:29,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Combat buffs."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Prototype."
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

    x:15,
    y:47,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Major scoring objective."
        },
        mid:{
            priority:"Critical",
            strategy:"Hold at all costs.",
            why:"Excellent point generation."
        },
        final:{
            priority:"Critical",
            strategy:"Never abandon unless ordered.",
            why:"Still one of the highest priorities."
        }
    }
},

{
    id:"repair-west",
    name:"West Repair",

    x:6,
    y:63,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Additional points."
        },
        mid:{
            priority:"Medium",
            strategy:"Maintain if uncontested.",
            why:"Useful support."
        },
        final:{
            priority:"Low",
            strategy:"Ignore if needed.",
            why:"Imperial first."
        }
    }
},

{
    id:"imperial",
    name:"Imperial Institute",

    x:47,
    y:52,

    unlockPhase:"final",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unavailable."
        },
        mid:{
            priority:"Low",
            strategy:"Prepare rotation.",
            why:"Unlocks in Final."
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

    x:90,
    y:46,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Additional points."
        },
        mid:{
            priority:"Medium",
            strategy:"Maintain if uncontested.",
            why:"Useful support."
        },
        final:{
            priority:"Low",
            strategy:"Ignore if needed.",
            why:"Imperial first."
        }
    }
},

{
    id:"prototype-east",
    name:"East Prototype",

    x:80,
    y:60,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Major scoring objective."
        },
        mid:{
            priority:"Critical",
            strategy:"Hold at all costs.",
            why:"Excellent point generation."
        },
        final:{
            priority:"Critical",
            strategy:"Never abandon unless ordered.",
            why:"Still one of the highest priorities."
        }
    }
},

{
    id:"workshop-southwest",
    name:"SW Workshop",

    x:26,
    y:73,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Combat buffs."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Transit."
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
    y:71,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Combat buffs."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Transit."
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
    y:84,

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
            why:"Strong late-game buff."
        }
    }
},

{
    id:"repair-south",
    name:"South Repair",

    x:31,
    y:95,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Additional points."
        },
        mid:{
            priority:"Medium",
            strategy:"Maintain if uncontested.",
            why:"Useful support."
        },
        final:{
            priority:"Low",
            strategy:"Ignore if needed.",
            why:"Imperial first."
        }
    }
},

{
    id:"transit",
    name:"Transit Station",

    x:60,
    y:96,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Major mobility advantage."
        },
        mid:{
            priority:"Critical",
            strategy:"Maintain control.",
            why:"Fast rotations."
        },
        final:{
            priority:"High",
            strategy:"Support Imperial.",
            why:"Quick reinforcement."
        }
    }
}

];