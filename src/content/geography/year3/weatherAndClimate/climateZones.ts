import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const climateZones: SkillContent = {

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
        stage: "recognise",
        options: [
            "The usual weather conditions of a place over a long period of time",
            "The weather today only",
            "A type of map",
            "A river feature"
        ],

        explanation:
            "Climate describes the typical weather of a place over many years.",
        hint: "Focus on weather over many years, not a single day.",

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
        stage: "recognise",
        options: [
            "An area with a similar climate",
            "A type of mountain",
            "A river channel",
            "A country border"
        ],

        explanation:
            "Climate zones are areas that share similar weather patterns.",
        hint: "Think about places that share similar long-term weather.",

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
        stage: "recognise",
        options: [
            "Because of factors such as location, sunlight and altitude",
            "Because all places have the same weather",
            "Because maps create climates",
            "Because rivers control everything"
        ],

        explanation:
            "Location and physical factors affect the climate of a place.",
        hint: "Think about the main geography idea in the question and compare what makes each option different.",

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
        stage: "recognise",
        options: [
            "An imaginary line around the middle of Earth",
            "At the North Pole",
            "At the South Pole",
            "Under the oceans only"
        ],

        explanation:
            "The equator divides Earth into the Northern and Southern Hemispheres.",
        hint: "Picture where the equator is on a globe and how sunlight reaches Earth.",

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
        stage: "recognise",
        options: [
            "They receive more direct sunlight",
            "They are closer to mountains",
            "They have more rivers",
            "They have less air"
        ],

        explanation:
            "The Sun's rays are more direct near the equator, creating warmer temperatures.",
        hint: "Picture where the equator is on a globe and how sunlight reaches Earth.",

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
        stage: "recognise",
        options: [
            "Tropical climate",
            "Polar climate",
            "Arctic climate only",
            "Mountain climate only"
        ],

        explanation:
            "Areas near the equator usually have tropical climates.",
        hint: "Picture where the equator is on a globe and how sunlight reaches Earth.",

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
        stage: "recognise",
        options: [
            "Hot and often wet",
            "Very cold all year",
            "Always snowy",
            "Without rainfall"
        ],

        explanation:
            "Tropical regions are usually warm and may have lots of rainfall.",
        hint: "Imagine places close to the equator.",

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
        stage: "recognise",
        options: [
            "Polar climate",
            "Tropical climate",
            "Desert climate only",
            "Temperate climate"
        ],

        explanation:
            "Polar regions are extremely cold because they receive less direct sunlight.",
        hint: "Think about the main geography idea in the question and compare what makes each option different.",

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
        stage: "recognise",
        options: [
            "Very cold with ice and snow",
            "Hot and humid",
            "Warm with rainforests",
            "Always dry and hot"
        ],

        explanation:
            "Polar climates have very low temperatures and frozen landscapes.",
        hint: "Think about the coldest parts of Earth.",

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
        stage: "recognise",
        options: [
            "Temperate climate",
            "Polar climate",
            "Tropical climate",
            "Desert climate"
        ],

        explanation:
            "The UK has a temperate climate with mild temperatures and changing weather.",
        hint: "Think about the main geography idea in the question and compare what makes each option different.",

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
        stage: "recognise",
        options: [
            "Moderate temperatures with changing seasons",
            "Always freezing",
            "Always extremely hot",
            "No rainfall"
        ],

        explanation:
            "Temperate climates usually have seasonal changes.",
        hint: "Consider places with four changing seasons.",

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
        stage: "recognise",
        options: [
            "Very dry climate",
            "Polar climate",
            "Rainforest climate",
            "Ocean climate"
        ],

        explanation:
            "Deserts receive very little rainfall.",
        hint: "Think about rainfall rather than temperature alone.",

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
        stage: "recognise",
        options: [
            "Hot and very wet",
            "Cold and dry",
            "Frozen all year",
            "Without plants"
        ],

        explanation:
            "Rainforests are found in warm areas with high rainfall.",
        hint: "Think about both heat and rainfall.",

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
        stage: "recognise",
        options: [
            "They adapt to different conditions",
            "All environments are identical",
            "Climate has no effect",
            "Animals choose climates randomly"
        ],

        explanation:
            "Living things adapt to the conditions where they live.",
        hint: "Think about places that share similar long-term weather.",

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
        stage: "recognise",
        options: [
            "Polar",
            "Tropical",
            "Temperate",
            "Desert only"
        ],

        explanation:
            "Polar regions contain large areas of ice.",
        hint: "Think about places that share similar long-term weather.",

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
        stage: "recognise",
        options: [
            "To compare climates in different parts of Earth",
            "To show only roads",
            "To predict earthquakes",
            "To show population only"
        ],

        explanation:
            "Climate maps help geographers understand global patterns.",
        hint: "Think about places that share similar long-term weather.",

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
        stage: "recognise",
        options: [
            "Higher places are usually colder",
            "Higher places are always warmer",
            "Altitude has no effect",
            "Mountains create tropical climates"
        ],

        explanation:
            "Temperature generally decreases as altitude increases.",
        hint: "Focus on weather over many years, not a single day.",

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
        stage: "recognise",
        options: [
            "It affects how people live, work and grow food",
            "It has no effect",
            "It controls all decisions",
            "It stops settlements"
        ],

        explanation:
            "Climate influences homes, farming and lifestyles.",
        hint: "Consider everyday life such as homes, clothes and farming.",

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
        stage: "recognise",
        options: [
            "Patterns of weather around the world",
            "Only individual buildings",
            "Only roads",
            "Only rivers"
        ],

        explanation:
            "Climate zones show how climates are distributed across Earth.",
        hint: "Think about places that share similar long-term weather.",

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
        stage: "recognise",
        options: [
            "Areas of Earth with similar long-term weather patterns",
            "Places with the same buildings",
            "Only countries with mountains",
            "Areas that never change"
        ],

        explanation:
            "Climate zones group places with similar climate conditions.",
        hint: "Think about places that share similar long-term weather.",

        difficulty: 2,
        correctAnswer: "Areas of Earth with similar long-term weather patterns",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "climate"]
    }

    ]

};


export default climateZones;

export {

    climateZones

};
