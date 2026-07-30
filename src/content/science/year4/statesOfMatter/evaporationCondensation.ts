import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const evaporationCondensation: SkillContent = {

    skillId: "evaporationCondensation",

    title: "Evaporation and Condensation",

    description:
        "Learn how evaporation and condensation happen and where they occur in everyday life.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-evap-cond-001",

        question: "What is evaporation?",

        options: [
            "A liquid changing into a gas",
            "A gas changing into a liquid",
            "A solid changing into a liquid",
            "A liquid changing into a solid"
        ],

        answer: 0,

        explanation:
            "Evaporation is when a liquid changes into a gas.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-002",

        question: "What is condensation?",

        options: [
            "A gas changing into a liquid",
            "A liquid changing into a gas",
            "A solid changing into a liquid",
            "A liquid changing into a solid"
        ],

        answer: 0,

        explanation:
            "Condensation happens when a gas cools and becomes a liquid.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-evap-cond-003",

        question: "What happens to a puddle on a warm sunny day?",

        options: [
            "It evaporates.",
            "It freezes.",
            "It turns into ice.",
            "It becomes solid."
        ],

        answer: 0,

        explanation:
            "The water slowly evaporates into the air.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-004",

        question: "What forms on the outside of a cold drinks can?",

        options: [
            "Tiny drops of water",
            "Ice cubes",
            "Steam",
            "Smoke"
        ],

        answer: 0,

        explanation:
            "Water vapour in the air condenses into tiny liquid droplets.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-evap-cond-005",

        question: "Which process dries wet clothes?",

        options: [
            "Evaporation",
            "Condensation",
            "Freezing",
            "Melting"
        ],

        answer: 0,

        explanation:
            "The water in the clothes evaporates into the air.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-006",

        question: "What is water vapour?",

        options: [
            "Water in its gas state",
            "Frozen water",
            "Liquid water",
            "A type of cloud"
        ],

        answer: 0,

        explanation:
            "Water vapour is the invisible gas form of water.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "water-vapour"]
    },

    {
        id: "sci-evap-cond-007",

        question: "Which process needs cooling?",

        options: [
            "Condensation",
            "Evaporation",
            "Melting",
            "Boiling"
        ],

        answer: 0,

        explanation:
            "Condensation happens when a gas cools.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-evap-cond-008",

        question: "Which process happens when water is heated?",

        options: [
            "Evaporation",
            "Freezing",
            "Condensation",
            "Cooling"
        ],

        answer: 0,

        explanation:
            "Heating gives water enough energy to become water vapour.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-009",

        question: "What is most likely to happen to water left in a shallow dish?",

        options: [
            "It slowly evaporates.",
            "It freezes.",
            "It becomes thicker.",
            "It turns into a rock."
        ],

        answer: 0,

        explanation:
            "Over time, water evaporates into the air.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-010",

        question: "Which statement is true?",

        options: [
            "Evaporation and condensation are opposite processes.",
            "They both make solids.",
            "Both only happen below 0°C.",
            "Neither changes the state of matter."
        ],

        answer: 0,

        explanation:
            "Evaporation changes liquid to gas, while condensation changes gas to liquid.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "evaporation", "condensation"]
    },

    {
        id: "sci-evap-cond-011",

        question: "Why do wet clothes dry faster on a warm day?",

        options: [
            "Evaporation happens more quickly.",
            "The clothes freeze.",
            "Condensation increases.",
            "The water becomes solid."
        ],

        answer: 0,

        explanation:
            "Warmer temperatures increase the rate of evaporation.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-012",

        question: "Why do bathroom mirrors mist up after a hot shower?",

        options: [
            "Water vapour condenses on the cool mirror.",
            "The mirror melts.",
            "The mirror freezes.",
            "The glass evaporates."
        ],

        answer: 0,

        explanation:
            "Warm water vapour cools on the mirror and forms tiny droplets.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-evap-cond-013",

        question: "Which process changes water vapour back into liquid water?",

        options: [
            "Condensation",
            "Evaporation",
            "Melting",
            "Boiling"
        ],

        answer: 0,

        explanation:
            "Condensation changes a gas into a liquid.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-evap-cond-014",

        question: "What happens to water particles during evaporation?",

        options: [
            "They escape into the air as a gas.",
            "They become solid.",
            "They disappear completely.",
            "They change into oxygen."
        ],

        answer: 0,

        explanation:
            "During evaporation, water particles leave the liquid and become water vapour.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-015",

        question: "Which situation shows condensation?",

        options: [
            "Drops forming on a cold window",
            "A puddle drying",
            "Ice melting",
            "Butter melting"
        ],

        answer: 0,

        explanation:
            "Water vapour cools and forms liquid water on the window.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-evap-cond-016",

        question: "What can make evaporation happen faster?",

        options: [
            "Higher temperatures",
            "Lower temperatures",
            "Putting water in a freezer",
            "Making the water colder"
        ],

        answer: 0,

        explanation:
            "Heating gives water particles more energy to escape into the air.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-017",

        question: "A cold bottle is taken outside on a warm day. Why do water droplets appear on it?",

        options: [
            "Water vapour condenses on the cold surface.",
            "Water leaks through the bottle.",
            "The bottle melts.",
            "The air freezes."
        ],

        answer: 0,

        explanation:
            "The cold surface cools the nearby water vapour, causing condensation.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-evap-cond-018",

        question: "Why does a puddle disappear even if it never boils?",

        options: [
            "Evaporation can happen below boiling point.",
            "The water becomes solid.",
            "The water is absorbed by the Sun.",
            "The puddle turns into ice."
        ],

        answer: 0,

        explanation:
            "Evaporation happens at many temperatures, not just when water boils.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-evap-cond-019",

        question: "Which pair shows opposite changes of state?",

        options: [
            "Evaporation and condensation",
            "Melting and boiling",
            "Freezing and condensation",
            "Melting and evaporation"
        ],

        answer: 0,

        explanation:
            "One changes liquid to gas, the other changes gas to liquid.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "states-of-matter"]
    },

    {
        id: "sci-evap-cond-020",

        question: "Which sentence best describes evaporation and condensation?",

        options: [
            "Evaporation changes liquids into gases, while condensation changes gases back into liquids.",
            "Both processes turn liquids into solids.",
            "Both processes need freezing temperatures.",
            "Neither process changes the state of matter."
        ],

        answer: 0,

        explanation:
            "Evaporation and condensation are opposite changes of state involving liquids and gases.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "evaporation", "condensation", "states-of-matter"]
    }

    ]

};