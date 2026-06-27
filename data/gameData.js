const gameData = {

  operation: {
    name: "Operation Iron Foundry",
    legion: "Legion 2",
    version: "0.1.0",
    readTime: "4 Minutes"
  },

  mission: {
    title: "Mission",
    description:
      "Build an early point advantage by controlling high-value objectives and combat buffs. Avoid unnecessary fights. Secure Prototype when it becomes the highest active-value objective while maintaining map control. Delay committing to Imperial until the final 10 minutes unless it can be captured without sacrificing more valuable objectives."
  },

  phases: [

    {
      id: "opening",
      title: "Opening",
      color: "green",

      objectives: [

        "Capture highest value opening buildings",
        "Secure Boiler",
        "Secure Workshop",
        "Secure Munitions",
        "Take Repairs if uncontested"

      ]
    },

    {
      id: "mid",

      title: "Mid Game",

      color: "yellow",

      objectives: [

        "Capture Mercenary Camp",
        "Capture Prototype",
        "Capture Transit Station",
        "Maintain Boilers and Workshops"

      ]
    },

    {
      id: "final",

      title: "Final 10 Minutes",

      color: "red",

      objectives: [

        "Hold Prototype",
        "Hold Transit Station",
        "Capture Imperial",
        "Ignore low value objectives"

      ]

    }

  ],

  doctrine: [

    "Buildings win Foundry.",
    "Capture before fighting.",
    "Prototype is the highest priority once active.",
    "Do not overcommit to Imperial early.",
    "Protect combat buff buildings.",
    "Reinforce before recapturing.",
    "Follow R4 instructions."

  ]

};