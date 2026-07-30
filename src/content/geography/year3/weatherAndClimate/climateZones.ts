import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const climateZones: SkillContent = {

    skillId: "climateZones",

    title: "Climate Zones",

    description:
        "Learn about different climate zones around the world, including tropical, temperate and polar climates.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-cz-001",
        skillId: "climateZones",
        question:
            "What is climate?",

        options: [
            "The usual weather conditions of a place over a long period of time",
            "The weather today only",
            "A type of map",
            "A river feature"
        ],

        explanation:
            "Climate describes the typical weather of a place over many years.",

        difficulty: 1,
        correctAnswer: "The usual weather conditions of a place over a long period of time",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-002",
        skillId: "climateZones",
        question:
            "What is a climate zone?",

        options: [
            "An area with a similar climate",
            "A type of mountain",
            "A river channel",
            "A country border"
        ],

        explanation:
            "Climate zones are areas that share similar weather patterns.",

        difficulty: 1,
        correctAnswer: "An area with a similar climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-003",
        skillId: "climateZones",
        question:
            "Why do different places have different climates?",

        options: [
            "Because of factors such as location, sunlight and altitude",
            "Because all places have the same weather",
            "Because maps create climates",
            "Because rivers control everything"
        ],

        explanation:
            "Location and physical factors affect the climate of a place.",

        difficulty: 2,
        correctAnswer: "Because of factors such as location, sunlight and altitude",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-004",
        skillId: "climateZones",
        question:
            "Where is the equator?",

        options: [
            "An imaginary line around the middle of Earth",
            "At the North Pole",
            "At the South Pole",
            "Under the oceans only"
        ],

        explanation:
            "The equator divides Earth into the Northern and Southern Hemispheres.",

        difficulty: 1,
        correctAnswer: "An imaginary line around the middle of Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-005",
        skillId: "climateZones",
        question:
            "Why are places near the equator usually warmer?",

        options: [
            "They receive more direct sunlight",
            "They are closer to mountains",
            "They have more rivers",
            "They have less air"
        ],

        explanation:
            "The Sun's rays are more direct near the equator, creating warmer temperatures.",

        difficulty: 2,
        correctAnswer: "They receive more direct sunlight",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-006",
        skillId: "climateZones",
        question:
            "What type of climate is found near the equator?",

        options: [
            "Tropical climate",
            "Polar climate",
            "Arctic climate only",
            "Mountain climate only"
        ],

        explanation:
            "Areas near the equator usually have tropical climates.",

        difficulty: 1,
        correctAnswer: "Tropical climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-007",
        skillId: "climateZones",
        question:
            "What is a tropical climate usually like?",

        options: [
            "Hot and often wet",
            "Very cold all year",
            "Always snowy",
            "Without rainfall"
        ],

        explanation:
            "Tropical regions are usually warm and may have lots of rainfall.",

        difficulty: 1,
        correctAnswer: "Hot and often wet",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-008",
        skillId: "climateZones",
        question:
            "What climate is found near the North and South Poles?",

        options: [
            "Polar climate",
            "Tropical climate",
            "Desert climate only",
            "Temperate climate"
        ],

        explanation:
            "Polar regions are extremely cold because they receive less direct sunlight.",

        difficulty: 1,
        correctAnswer: "Polar climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-009",
        skillId: "climateZones",
        question:
            "What is a polar climate like?",

        options: [
            "Very cold with ice and snow",
            "Hot and humid",
            "Warm with rainforests",
            "Always dry and hot"
        ],

        explanation:
            "Polar climates have very low temperatures and frozen landscapes.",

        difficulty: 1,
        correctAnswer: "Very cold with ice and snow",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-010",
        skillId: "climateZones",
        question:
            "What type of climate does the UK have?",

        options: [
            "Temperate climate",
            "Polar climate",
            "Tropical climate",
            "Desert climate"
        ],

        explanation:
            "The UK has a temperate climate with mild temperatures and changing weather.",

        difficulty: 1,
        correctAnswer: "Temperate climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate", "uk"]
    },

    {
        id: "geo-cz-011",
        skillId: "climateZones",
        question:
            "What is a temperate climate like?",

        options: [
            "Moderate temperatures with changing seasons",
            "Always freezing",
            "Always extremely hot",
            "No rainfall"
        ],

        explanation:
            "Temperate climates usually have seasonal changes.",

        difficulty: 1,
        correctAnswer: "Moderate temperatures with changing seasons",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-012",
        skillId: "climateZones",
        question:
            "What climate is common in deserts?",

        options: [
            "Very dry climate",
            "Polar climate",
            "Rainforest climate",
            "Ocean climate"
        ],

        explanation:
            "Deserts receive very little rainfall.",

        difficulty: 1,
        correctAnswer: "Very dry climate",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-013",
        skillId: "climateZones",
        question:
            "What is a rainforest climate usually like?",

        options: [
            "Hot and very wet",
            "Cold and dry",
            "Frozen all year",
            "Without plants"
        ],

        explanation:
            "Rainforests are found in warm areas with high rainfall.",

        difficulty: 1,
        correctAnswer: "Hot and very wet",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-014",
        skillId: "climateZones",
        question:
            "Why do plants and animals vary between climate zones?",

        options: [
            "They adapt to different conditions",
            "All environments are identical",
            "Climate has no effect",
            "Animals choose climates randomly"
        ],

        explanation:
            "Living things adapt to the conditions where they live.",

        difficulty: 2,
        correctAnswer: "They adapt to different conditions",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-015",
        skillId: "climateZones",
        question:
            "Which climate zone would have ice sheets?",

        options: [
            "Polar",
            "Tropical",
            "Temperate",
            "Desert only"
        ],

        explanation:
            "Polar regions contain large areas of ice.",

        difficulty: 1,
        correctAnswer: "Polar",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-016",
        skillId: "climateZones",
        question:
            "Why are climate zones shown on world maps?",

        options: [
            "To compare climates in different parts of Earth",
            "To show only roads",
            "To predict earthquakes",
            "To show population only"
        ],

        explanation:
            "Climate maps help geographers understand global patterns.",

        difficulty: 2,
        correctAnswer: "To compare climates in different parts of Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "maps", "climate"]
    },

    {
        id: "geo-cz-017",
        skillId: "climateZones",
        question:
            "How does altitude affect climate?",

        options: [
            "Higher places are usually colder",
            "Higher places are always warmer",
            "Altitude has no effect",
            "Mountains create tropical climates"
        ],

        explanation:
            "Temperature generally decreases as altitude increases.",

        difficulty: 2,
        correctAnswer: "Higher places are usually colder",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-018",
        skillId: "climateZones",
        question:
            "Why is climate important for people?",

        options: [
            "It affects how people live, work and grow food",
            "It has no effect",
            "It controls all decisions",
            "It stops settlements"
        ],

        explanation:
            "Climate influences homes, farming and lifestyles.",

        difficulty: 2,
        correctAnswer: "It affects how people live, work and grow food",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-019",
        skillId: "climateZones",
        question:
            "What do climate zones help geographers understand?",

        options: [
            "Patterns of weather around the world",
            "Only individual buildings",
            "Only roads",
            "Only rivers"
        ],

        explanation:
            "Climate zones show how climates are distributed across Earth.",

        difficulty: 2,
        correctAnswer: "Patterns of weather around the world",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "climate"]
    },

    {
        id: "geo-cz-020",
        skillId: "climateZones",
        question:
            "Which sentence best describes climate zones?",

        options: [
            "Areas of Earth with similar long-term weather patterns",
            "Places with the same buildings",
            "Only countries with mountains",
            "Areas that never change"
        ],

        explanation:
            "Climate zones group places with similar climate conditions.",

        difficulty: 2,
        correctAnswer: "Areas of Earth with similar long-term weather patterns",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "climate"]
    }

    ]

};