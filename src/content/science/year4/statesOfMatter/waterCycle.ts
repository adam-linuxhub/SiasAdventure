import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const waterCycle: SkillContent = {

    skillId: "waterCycle",

    title: "The Water Cycle",

    description:
        "Learn how water moves around Earth through evaporation, condensation, precipitation and collection.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-water-cycle-001",

        question: "What is the water cycle?",

        options: [
            "The continuous movement of water around Earth",
            "A machine that cleans water",
            "A type of cloud",
            "A way of making ice"
        ],

        explanation:
            "The water cycle describes how water moves between Earth's surface and the atmosphere.",

        difficulty: 1,
        correctAnswer: "The continuous movement of water around Earth",
        estimatedSeconds: 15,

        tags: ["science", "water-cycle"]
    },

    {
        id: "sci-water-cycle-002",

        question: "What happens when the Sun warms water in lakes and oceans?",

        options: [
            "Evaporation",
            "Freezing",
            "Condensation",
            "Melting"
        ],

        explanation:
            "Heat from the Sun causes water to evaporate into water vapour.",

        difficulty: 1,
        correctAnswer: "Evaporation",
        estimatedSeconds: 15,

        tags: ["science", "water-cycle", "evaporation"]
    },

    {
        id: "sci-water-cycle-003",

        question: "What are clouds mostly made of?",

        options: [
            "Tiny water droplets",
            "Smoke",
            "Dust only",
            "Oxygen"
        ],

        explanation:
            "Clouds form from tiny droplets of water created by condensation.",

        difficulty: 1,
        correctAnswer: "Tiny water droplets",
        estimatedSeconds: 15,

        tags: ["science", "clouds"]
    },

    {
        id: "sci-water-cycle-004",

        question: "What is condensation?",

        options: [
            "Water vapour cooling into liquid water",
            "Ice melting",
            "Water freezing",
            "A liquid becoming a gas"
        ],

        explanation:
            "Condensation happens when water vapour cools and becomes tiny liquid droplets.",

        difficulty: 1,
        correctAnswer: "Water vapour cooling into liquid water",
        estimatedSeconds: 15,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-water-cycle-005",

        question: "What is precipitation?",

        options: [
            "Rain, snow, sleet or hail falling from clouds",
            "Water evaporating",
            "Clouds forming",
            "The Sun heating water"
        ],

        explanation:
            "Precipitation is water falling from clouds back to Earth.",

        difficulty: 1,
        correctAnswer: "Rain, snow, sleet or hail falling from clouds",
        estimatedSeconds: 15,

        tags: ["science", "precipitation"]
    },

    {
        id: "sci-water-cycle-006",

        question: "Which is an example of precipitation?",

        options: [
            "Rain",
            "Steam",
            "Fog",
            "Water vapour"
        ],

        explanation:
            "Rain is one form of precipitation.",

        difficulty: 1,
        correctAnswer: "Rain",
        estimatedSeconds: 15,

        tags: ["science", "precipitation"]
    },

    {
        id: "sci-water-cycle-007",

        question: "Where does rainwater often collect?",

        options: [
            "Rivers, lakes and oceans",
            "The Moon",
            "Clouds only",
            "The Sun"
        ],

        explanation:
            "Water collects in rivers, lakes and oceans before the cycle begins again.",

        difficulty: 1,
        correctAnswer: "Rivers, lakes and oceans",
        estimatedSeconds: 15,

        tags: ["science", "collection"]
    },

    {
        id: "sci-water-cycle-008",

        question: "What provides the energy for the water cycle?",

        options: [
            "The Sun",
            "The Moon",
            "The wind",
            "Trees"
        ],

        explanation:
            "The Sun provides the heat that drives evaporation.",

        difficulty: 1,
        correctAnswer: "The Sun",
        estimatedSeconds: 20,

        tags: ["science", "water-cycle"]
    },

    {
        id: "sci-water-cycle-009",

        question: "What happens after water evaporates?",

        options: [
            "It cools and forms clouds.",
            "It immediately becomes ice.",
            "It disappears forever.",
            "It becomes soil."
        ],

        explanation:
            "Water vapour rises, cools and condenses into clouds.",

        difficulty: 1,
        correctAnswer: "It cools and forms clouds.",
        estimatedSeconds: 20,

        tags: ["science", "water-cycle"]
    },

    {
        id: "sci-water-cycle-010",

        question: "Which statement is true?",

        options: [
            "The water cycle happens over and over again.",
            "Water is used only once.",
            "Rainwater disappears forever.",
            "Clouds are made of rock."
        ],

        explanation:
            "The water cycle is continuous.",

        difficulty: 1,
        correctAnswer: "The water cycle happens over and over again.",
        estimatedSeconds: 20,

        tags: ["science", "water-cycle"]
    },

    {
        id: "sci-water-cycle-011",

        question: "Why do clouds form high in the sky?",

        options: [
            "Water vapour cools and condenses there.",
            "Clouds are made by birds.",
            "The Sun freezes the water.",
            "Rain pushes water upwards."
        ],

        explanation:
            "As water vapour rises, it cools and condenses into tiny droplets.",

        difficulty: 2,
        correctAnswer: "Water vapour cools and condenses there.",
        estimatedSeconds: 20,

        tags: ["science", "clouds", "condensation"]
    },

    {
        id: "sci-water-cycle-012",

        question: "Why does rain fall from clouds?",

        options: [
            "Water droplets become too heavy to stay in the cloud.",
            "Clouds melt.",
            "The Sun pushes the rain down.",
            "The wind freezes the clouds."
        ],

        explanation:
            "When droplets join together and become heavy enough, they fall as precipitation.",

        difficulty: 2,
        correctAnswer: "Water droplets become too heavy to stay in the cloud.",
        estimatedSeconds: 20,

        tags: ["science", "precipitation"]
    },

    {
        id: "sci-water-cycle-013",

        question: "Which sequence is correct?",

        options: [
            "Evaporation → Condensation → Precipitation → Collection",
            "Condensation → Collection → Evaporation → Rain",
            "Collection → Rain → Condensation → Evaporation",
            "Precipitation → Evaporation → Collection → Condensation"
        ],

        explanation:
            "These are the main stages of the water cycle.",

        difficulty: 2,
        correctAnswer: "Evaporation → Condensation → Precipitation → Collection",
        estimatedSeconds: 20,

        tags: ["science", "water-cycle"]
    },

    {
        id: "sci-water-cycle-014",

        question: "What happens to rainwater after it reaches the ground?",

        options: [
            "It flows into rivers, lakes or oceans, or soaks into the ground.",
            "It disappears forever.",
            "It immediately becomes snow.",
            "It turns into air."
        ],

        explanation:
            "Collected water eventually returns to the water cycle.",

        difficulty: 2,
        correctAnswer: "It flows into rivers, lakes or oceans, or soaks into the ground.",
        estimatedSeconds: 20,

        tags: ["science", "collection"]
    },

    {
        id: "sci-water-cycle-015",

        question: "Which process changes liquid water into water vapour?",

        options: [
            "Evaporation",
            "Condensation",
            "Freezing",
            "Precipitation"
        ],

        explanation:
            "Evaporation changes liquid water into a gas.",

        difficulty: 2,
        correctAnswer: "Evaporation",
        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-water-cycle-016",

        question: "Why is the Sun important in the water cycle?",

        options: [
            "It provides the heat needed for evaporation.",
            "It makes rain fall.",
            "It creates clouds from rock.",
            "It freezes rivers."
        ],

        explanation:
            "Without heat from the Sun, evaporation would not happen as part of the water cycle.",

        difficulty: 2,
        correctAnswer: "It provides the heat needed for evaporation.",
        estimatedSeconds: 20,

        tags: ["science", "water-cycle"]
    },

    {
        id: "sci-water-cycle-017",

        question: "Which stage happens just before rain falls?",

        options: [
            "Condensation",
            "Collection",
            "Evaporation",
            "Freezing"
        ],

        explanation:
            "Clouds form by condensation before precipitation occurs.",

        difficulty: 2,
        correctAnswer: "Condensation",
        estimatedSeconds: 20,

        tags: ["science", "condensation", "precipitation"]
    },

    {
        id: "sci-water-cycle-018",

        question: "Why is the water cycle described as a cycle?",

        options: [
            "Because it repeats continuously.",
            "Because it only happens once each year.",
            "Because water disappears at the end.",
            "Because it always starts with rain."
        ],

        explanation:
            "Water is constantly recycled through evaporation, condensation, precipitation and collection.",

        difficulty: 2,
        correctAnswer: "Because it repeats continuously.",
        estimatedSeconds: 20,

        tags: ["science", "water-cycle"]
    },

    {
        id: "sci-water-cycle-019",

        question: "Which part of the water cycle returns water to rivers and lakes?",

        options: [
            "Precipitation",
            "Evaporation",
            "Condensation",
            "Heating"
        ],

        explanation:
            "Rain and other forms of precipitation return water to Earth's surface.",

        difficulty: 2,
        correctAnswer: "Precipitation",
        estimatedSeconds: 20,

        tags: ["science", "precipitation"]
    },

    {
        id: "sci-water-cycle-020",

        question: "Which sentence best describes the water cycle?",

        options: [
            "Water is continuously recycled through evaporation, condensation, precipitation and collection.",
            "Water is used once and disappears.",
            "Clouds are made only of steam.",
            "Rain is created directly by the Sun."
        ],

        explanation:
            "The water cycle is a continuous process that moves water around Earth.",

        difficulty: 2,
        correctAnswer: "Water is continuously recycled through evaporation, condensation, precipitation and collection.",
        estimatedSeconds: 20,

        tags: ["science", "water-cycle", "evaporation", "condensation", "precipitation"]
    }

    ]

};