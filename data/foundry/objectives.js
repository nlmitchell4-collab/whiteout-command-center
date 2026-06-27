// =========================================
// Whiteout Foundry Data
// Version 0.2
// =========================================

const currentPhase = "opening";

const foundryObjectives = [

{
    id: "boiler",
    name: "Boiler",
    team: "Boiler Team",
    row: 1,
    col: 4,

    phases: {
        opening: {
            priority: "Critical",
            strategy: "Capture immediately and defend.",
            why: "50% faster building capture."
        },
        mid: {
            priority: "High",
            strategy: "Maintain control.",
            why: "Supports fast recaptures."
        },
        final: {
            priority: "Medium",
            strategy: "Support higher objectives.",
            why: "Less valuable than Prototype."
        }
    }
},

{
    id: "workshop-west",
    name: "Workshop",
    team: "Workshop Team",
    row: 2,
    col: 2,

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Provides an important combat buff."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Prototype."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if convenient.",
            why:"Do not sacrifice Prototype."
        }
    }
},

{
    id:"workshop-east",
    name:"Workshop",
    team:"Workshop Team",
    row:2,
    col:6,

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Provides an important combat buff."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports Prototype."
        },
        final:{
            priority:"Medium",
            strategy:"Hold if convenient.",
            why:"Do not sacrifice Prototype."
        }
    }
},

{
    id:"prototype-west",
    name:"Prototype",
    team:"Prototype Team",
    row:3,
    col:2,

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Prepare rotation.",
            why:"Becomes a major objective."
        },
        mid:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Highest sustained point objective."
        },
        final:{
            priority:"Critical",
            strategy:"Hold at all costs.",
            why:"Never trade Prototype."
        }
    }
},

{
    id:"mercenary",
    name:"Mercenary Camp",
    team:"Rapid Response",
    row:3,
    col:4,

    phases:{
        opening:{
            priority:"Low",
            strategy:"Ignore.",
            why:"Locked."
        },
        mid:{
            priority:"High",
            strategy:"Capture when available.",
            why:"Creates pressure."
        },
        final:{
            priority:"Medium",
            strategy:"Maintain if uncontested.",
            why:"Useful but secondary."
        }
    }
},

{
    id:"prototype-east",
    name:"Prototype",
    team:"Prototype Team",
    row:3,
    col:6,

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Prepare rotation.",
            why:"Becomes a major objective."
        },
        mid:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Highest sustained point objective."
        },
        final:{
            priority:"Critical",
            strategy:"Hold at all costs.",
            why:"Never trade Prototype."
        }
    }
},

{
    id:"repair-west",
    name:"Repair",
    team:"Support",
    row:4,
    col:2,

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Extra points."
        },
        mid:{
            priority:"Medium",
            strategy:"Hold if uncontested.",
            why:"Useful support objective."
        },
        final:{
            priority:"Low",
            strategy:"Ignore if fighting Imperial.",
            why:"Lower priority."
        }
    }
},

{
    id:"imperial",
    name:"Imperial",
    team:"Imperial Team",
    row:4,
    col:4,

    phases:{
        opening:{
            priority:"Low",
            strategy:"Ignore.",
            why:"Locked."
        },
        mid:{
            priority:"Medium",
            strategy:"Contest only if favorable.",
            why:"Don't lose Prototype."
        },
        final:{
            priority:"Critical",
            strategy:"Primary objective.",
            why:"Highest late-game score."
        }
    }
},

{
    id:"repair-east",
    name:"Repair",
    team:"Support",
    row:4,
    col:6,

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if nearby.",
            why:"Extra points."
        },
        mid:{
            priority:"Medium",
            strategy:"Hold if uncontested.",
            why:"Useful support objective."
        },
        final:{
            priority:"Low",
            strategy:"Ignore if necessary.",
            why:"Imperial first."
        }
    }
},

{
    id:"workshop-south",
    name:"Workshop",
    team:"Workshop Team",
    row:5,
    col:3,

    phases:{
        opening:{
            priority:"High",
            strategy:"Capture early.",
            why:"Combat buff."
        },
        mid:{
            priority:"High",
            strategy:"Maintain control.",
            why:"Supports the center."
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
    name:"Repair",
    team:"Support",
    row:5,
    col:5,

    phases:{
        opening:{
            priority:"Medium",
            strategy:"Capture if available.",
            why:"Extra points."
        },
        mid:{
            priority:"Medium",
            strategy:"Hold if uncontested.",
            why:"Good filler."
        },
        final:{
            priority:"Low",
            strategy:"Ignore if needed.",
            why:"Lower value."
        }
    }
},

{
    id:"munitions",
    name:"Munitions",
    team:"Munitions Team",
    row:6,
    col:4,

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Major combat buff."
        },
        mid:{
            priority:"Critical",
            strategy:"Defend.",
            why:"Keep combat advantage."
        },
        final:{
            priority:"High",
            strategy:"Support Imperial.",
            why:"Important combat buff."
        }
    }
},

{
    id:"transit",
    name:"Transit Station",
    team:"Transit Team",
    row:7,
    col:4,

    phases:{
        opening:{
            priority:"Critical",
            strategy:"Capture immediately.",
            why:"Rapid reinforcement."
        },
        mid:{
            priority:"Critical",
            strategy:"Maintain control.",
            why:"Mobility wins fights."
        },
        final:{
            priority:"High",
            strategy:"Support Imperial.",
            why:"Fast rotations."
        }
    }
}

];