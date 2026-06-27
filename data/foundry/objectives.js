// =========================================
// Foundry Objectives
// Version 0.1.10
// =========================================

const foundryObjectives = [

{
    id:"boiler",
    name:"Boiler",
    row:1,
    col:4,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"50% faster building capture."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Important mobility advantage."
        },
        final:{
            priority:"Medium",
            strategy:"Only defend if nearby.",
            why:"Imperial has higher value."
        }
    }
},

{
    id:"workshop-west",
    name:"Workshop",
    row:2,
    col:2,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Provides combat buffs."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Prototype."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if convenient.",
            why:"Secondary objective."
        }
    }
},

{
    id:"workshop-east",
    name:"Workshop",
    row:2,
    col:6,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Provides combat buffs."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Prototype."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if convenient.",
            why:"Secondary objective."
        }
    }
},

{
    id:"prototype-west",
    name:"Prototype",
    row:3,
    col:2,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"High scoring objective."
        },
        mid:{
            priority:"Critical",
            strategy:"Hold at all costs.",
            why:"Major source of points."
        },
        final:{
            priority:"Critical",
            strategy:"Never abandon unless ordered.",
            why:"Still one of the highest priorities."
        }
    }
},

{
    id:"mercenary",
    name:"Mercenary Camp",
    row:3,
    col:4,

    unlockPhase:"mid",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unavailable."
        },
        mid:{
            priority:"High",
            strategy:"Capture when available.",
            why:"Strong point income."
        },
        final:{
            priority:"Medium",
            strategy:"Maintain if uncontested.",
            why:"Support objective."
        }
    }
},

{
    id:"prototype-east",
    name:"Prototype",
    row:3,
    col:6,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"High scoring objective."
        },
        mid:{
            priority:"Critical",
            strategy:"Hold at all costs.",
            why:"Major source of points."
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
    name:"Repair Station",
    row:4,
    col:2,

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
            strategy:"Ignore if necessary.",
            why:"Imperial comes first."
        }
    }
},

{
    id:"imperial",
    name:"Imperial Institute",
    row:4,
    col:4,

    unlockPhase:"final",

    phases:{
        opening:{
            priority:"Low",
            strategy:"Locked.",
            why:"Unavailable."
        },
        mid:{
            priority:"Low",
            strategy:"Prepare to rotate.",
            why:"Still locked."
        },
        final:{
            priority:"Critical",
            strategy:"Primary objective.",
            why:"Highest scoring objective."
        }
    }
},

{
    id:"repair-east",
    name:"Repair Station",
    row:4,
    col:6,

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
            strategy:"Ignore if necessary.",
            why:"Imperial comes first."
        }
    }
},

{
    id:"workshop-south",
    name:"Workshop",
    row:5,
    col:3,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Provides combat buffs."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports center objectives."
        },
        final:{
            priority:"Medium",
            strategy:"Support Imperial.",
            why:"Secondary objective."
        }
    }
},

{
    id:"repair-south",
    name:"Repair Station",
    row:5,
    col:5,

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
            strategy:"Ignore if necessary.",
            why:"Imperial comes first."
        }
    }
},

{
    id:"munitions",
    name:"Munitions Factory",
    row:6,
    col:4,

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
            why:"Major combat buff."
        },
        final:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Important combat buff."
        }
    }
},

{
    id:"transit",
    name:"Transit Station",
    row:7,
    col:4,

    unlockPhase:"opening",

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Rapid reinforcement."
        },
        mid:{
            priority:"Critical",
            strategy:"Maintain control.",
            why:"Fast rotations."
        },
        final:{
            priority:"High",
            strategy:"Support Imperial.",
            why:"Excellent mobility."
        }
    }
}

];