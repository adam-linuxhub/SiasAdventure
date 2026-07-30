import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const locatingCountries: SkillContent = {

    skillId: "locatingCountries",

    title: "Locating Countries",

    description:
        "Learn how to locate countries using maps, continents, oceans and hemispheres.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-lc-001",

        question:
            "What is a country?",

        options: [
            "An area of land with its own government and borders",
            "A type of ocean",
            "A weather event",
            "A mountain range"
        ],

        explanation:
            "Countries are areas of land with their own governments and boundaries.",

        difficulty: 1,
        correctAnswer: "An area of land with its own government and borders",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-002",

        question:
            "What do borders show on a map?",

        options: [
            "Where one country ends and another begins",
            "Where rivers flow",
            "Where clouds form",
            "Where mountains grow"
        ],

        explanation:
            "Borders separate different countries.",

        difficulty: 1,
        correctAnswer: "Where one country ends and another begins",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-003",

        question:
            "What can we use to find where a country is located?",

        options: [
            "A map or globe",
            "A thermometer",
            "A rain gauge",
            "A compass only"
        ],

        explanation:
            "Maps and globes show the locations of countries.",

        difficulty: 1,
        correctAnswer: "A map or globe",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-lc-004",

        question:
            "What is the equator?",

        options: [
            "An imaginary line around the middle of Earth",
            "A country border",
            "A mountain range",
            "An ocean current"
        ],

        explanation:
            "The equator divides Earth into the Northern and Southern Hemispheres.",

        difficulty: 1,
        correctAnswer: "An imaginary line around the middle of Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "equator"]
    },

    {
        id: "geo-lc-005",

        question:
            "What are the two halves of Earth divided by the equator called?",

        options: [
            "Northern and Southern Hemispheres",
            "Eastern and Western Oceans",
            "Land and Sea Zones",
            "Climate Regions"
        ],

        explanation:
            "The equator separates the Northern and Southern Hemispheres.",

        difficulty: 1,
        correctAnswer: "Northern and Southern Hemispheres",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "hemispheres"]
    },

    {
        id: "geo-lc-006",

        question:
            "Which hemisphere is the UK in?",

        options: [
            "Northern Hemisphere",
            "Southern Hemisphere",
            "Only the Eastern Hemisphere",
            "Only the Southern Hemisphere"
        ],

        explanation:
            "The UK is north of the equator.",

        difficulty: 1,
        correctAnswer: "Northern Hemisphere",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "uk"]
    },

    {
        id: "geo-lc-007",

        question:
            "Which continent is Brazil located in?",

        options: [
            "South America",
            "Africa",
            "Europe",
            "Asia"
        ],

        explanation:
            "Brazil is a country in South America.",

        difficulty: 1,
        correctAnswer: "South America",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-008",

        question:
            "Which continent is Japan located in?",

        options: [
            "Asia",
            "Africa",
            "Europe",
            "South America"
        ],

        explanation:
            "Japan is an island country in Asia.",

        difficulty: 1,
        correctAnswer: "Asia",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-009",

        question:
            "Which continent is Kenya located in?",

        options: [
            "Africa",
            "Europe",
            "Asia",
            "Australia"
        ],

        explanation:
            "Kenya is a country in eastern Africa.",

        difficulty: 1,
        correctAnswer: "Africa",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-010",

        question:
            "Which continent is Canada located in?",

        options: [
            "North America",
            "South America",
            "Europe",
            "Africa"
        ],

        explanation:
            "Canada is located in North America.",

        difficulty: 1,
        correctAnswer: "North America",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-011",

        question:
            "What is an atlas?",

        options: [
            "A book containing maps",
            "A weather instrument",
            "A type of animal",
            "A mountain feature"
        ],

        explanation:
            "An atlas contains collections of maps.",

        difficulty: 1,
        correctAnswer: "A book containing maps",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-lc-012",

        question:
            "What does a political map show?",

        options: [
            "Countries and their borders",
            "Only mountains",
            "Only rivers",
            "Weather patterns"
        ],

        explanation:
            "Political maps show countries, borders and cities.",

        difficulty: 2,
        correctAnswer: "Countries and their borders",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-lc-013",

        question:
            "What does a physical map show?",

        options: [
            "Natural features such as mountains and rivers",
            "Only country names",
            "Only roads",
            "Population numbers only"
        ],

        explanation:
            "Physical maps show features of the natural landscape.",

        difficulty: 2,
        correctAnswer: "Natural features such as mountains and rivers",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-lc-014",

        question:
            "Why are grid references used on maps?",

        options: [
            "To find exact locations",
            "To measure temperature",
            "To show weather",
            "To create borders"
        ],

        explanation:
            "Grid references help people locate specific places on maps.",

        difficulty: 2,
        correctAnswer: "To find exact locations",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps"]
    },

    {
        id: "geo-lc-015",

        question:
            "What is a capital city?",

        options: [
            "The main city where a country's government is based",
            "The biggest mountain",
            "A type of ocean",
            "A rural village"
        ],

        explanation:
            "Capital cities are important government centres.",

        difficulty: 1,
        correctAnswer: "The main city where a country's government is based",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-016",

        question:
            "What is the capital city of the UK?",

        options: [
            "London",
            "Manchester",
            "Edinburgh",
            "Cardiff"
        ],

        explanation:
            "London is the capital city of the United Kingdom.",

        difficulty: 1,
        correctAnswer: "London",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "uk"]
    },

    {
        id: "geo-lc-017",

        question:
            "Why do geographers locate countries?",

        options: [
            "To understand where places are in the world",
            "To move countries",
            "To change borders",
            "To stop travel"
        ],

        explanation:
            "Location knowledge helps us understand relationships between places.",

        difficulty: 1,
        correctAnswer: "To understand where places are in the world",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "countries"]
    },

    {
        id: "geo-lc-018",

        question:
            "Which tool helps show direction on Earth?",

        options: [
            "A compass",
            "A thermometer",
            "A rain gauge",
            "A ruler"
        ],

        explanation:
            "A compass helps identify directions such as north and south.",

        difficulty: 1,
        correctAnswer: "A compass",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "directions"]
    },

    {
        id: "geo-lc-019",

        question:
            "Why do countries have different climates?",

        options: [
            "Their locations and physical features are different",
            "All countries have the same climate",
            "Maps decide climate",
            "Borders control weather"
        ],

        explanation:
            "Location, latitude and physical features affect climate.",

        difficulty: 2,
        correctAnswer: "Their locations and physical features are different",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-lc-020",

        question:
            "Which sentence best describes locating countries?",

        options: [
            "Maps help us find countries, continents and their positions on Earth",
            "Countries cannot be mapped",
            "Only oceans can be located",
            "Maps do not show locations"
        ],

        explanation:
            "Maps and globes help us understand where places are located.",

        difficulty: 2,
        correctAnswer: "Maps help us find countries, continents and their positions on Earth",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "countries"]
    }

    ]

};