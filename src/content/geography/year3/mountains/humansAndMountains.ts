import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const humansAndMountains: SkillContent = {

    skillId: "humansAndMountains",

    title: "Humans and Mountains",

    description:
        "Learn how people live, work and travel in mountain environments and how mountains can be protected.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-hm-001",
        skillId: "humansAndMountains",
        question:
            "Why do some people live in mountain areas?",
        stage: "recognise",
        options: [
            "They can use the land for homes, farming and work",
            "Because mountains have no challenges",
            "Because mountains are always warm",
            "Because there are no natural resources"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "People live in mountains because they can use the land and resources available.",

        difficulty: 1,
        correctAnswer: "They can use the land for homes, farming and work",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "humans"]
    },

    {
        id: "geo-hm-002",
        skillId: "humansAndMountains",
        question:
            "Why can living in mountains be challenging?",
        stage: "recognise",
        options: [
            "Steep slopes, cold weather and difficult transport",
            "There is no land at all",
            "There is no weather",
            "Plants cannot grow anywhere"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Mountain environments can make travel and building more difficult.",

        difficulty: 1,
        correctAnswer: "Steep slopes, cold weather and difficult transport",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-003",
        skillId: "humansAndMountains",
        question:
            "How do people travel in mountain areas?",
        stage: "recognise",
        options: [
            "Using roads, paths and sometimes cable cars",
            "Only by swimming",
            "Only by flying",
            "By travelling underground"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Mountain transport often needs to adapt to steep and uneven land.",

        difficulty: 1,
        correctAnswer: "Using roads, paths and sometimes cable cars",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "transport"]
    },

    {
        id: "geo-hm-004",
        skillId: "humansAndMountains",
        question:
            "Why can building roads in mountains be difficult?",
        stage: "recognise",
        options: [
            "The land is steep and uneven",
            "There are no rocks",
            "The weather never changes",
            "Mountains are flat"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Steep slopes and difficult terrain make construction harder.",

        difficulty: 1,
        correctAnswer: "The land is steep and uneven",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-005",
        skillId: "humansAndMountains",
        question:
            "What is mountain farming?",
        stage: "recognise",
        options: [
            "Growing crops or keeping animals in mountain areas",
            "Building cities on mountains",
            "Removing all plants",
            "Creating rivers"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Some communities farm using land available in mountain regions.",

        difficulty: 1,
        correctAnswer: "Growing crops or keeping animals in mountain areas",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "farming"]
    },

    {
        id: "geo-hm-006",
        skillId: "humansAndMountains",
        question:
            "Why do farmers use terraces on mountain slopes?",
        stage: "recognise",
        options: [
            "To create flatter areas for growing crops",
            "To make mountains taller",
            "To stop all rainfall",
            "To remove soil"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Terraces help farmers grow crops on steep slopes.",

        difficulty: 2,
        correctAnswer: "To create flatter areas for growing crops",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "farming"]
    },

    {
        id: "geo-hm-007",
        skillId: "humansAndMountains",
        question:
            "Why do tourists visit mountains?",
        stage: "recognise",
        options: [
            "For activities such as walking, climbing and skiing",
            "To make mountains disappear",
            "To stop wildlife",
            "To avoid nature"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Tourism is an important activity in many mountain areas.",

        difficulty: 1,
        correctAnswer: "For activities such as walking, climbing and skiing",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "tourism"]
    },

    {
        id: "geo-hm-008",
        skillId: "humansAndMountains",
        question:
            "What is tourism?",
        stage: "recognise",
        options: [
            "People travelling to visit places",
            "Growing crops only",
            "Building roads",
            "Moving rocks"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Tourism involves people travelling for leisure or experiences.",

        difficulty: 1,
        correctAnswer: "People travelling to visit places",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "tourism"]
    },

    {
        id: "geo-hm-009",
        skillId: "humansAndMountains",
        question:
            "How can tourism help mountain communities?",
        stage: "recognise",
        options: [
            "It can provide jobs and income",
            "It removes all wildlife",
            "It stops farming",
            "It prevents visitors"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Tourism can support local businesses and jobs.",

        difficulty: 2,
        correctAnswer: "It can provide jobs and income",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "tourism"]
    },

    {
        id: "geo-hm-010",
        skillId: "humansAndMountains",
        question:
            "What is one problem caused by too many visitors?",
        stage: "recognise",
        options: [
            "Damage to the environment",
            "More mountains forming",
            "Less rainfall everywhere",
            "Rivers disappearing instantly"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Large numbers of visitors can harm fragile mountain environments.",

        difficulty: 2,
        correctAnswer: "Damage to the environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-011",
        skillId: "humansAndMountains",
        question:
            "Why should mountain environments be protected?",
        stage: "recognise",
        options: [
            "To protect plants, animals and landscapes",
            "To remove habitats",
            "To stop all visitors",
            "To prevent weather"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Mountain environments contain important ecosystems.",

        difficulty: 1,
        correctAnswer: "To protect plants, animals and landscapes",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-012",
        skillId: "humansAndMountains",
        question:
            "How can people protect mountains?",
        stage: "recognise",
        options: [
            "By reducing litter and caring for nature",
            "By leaving rubbish behind",
            "By destroying habitats",
            "By removing all plants"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Responsible behaviour helps protect mountain environments.",

        difficulty: 1,
        correctAnswer: "By reducing litter and caring for nature",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-013",
        skillId: "humansAndMountains",
        question:
            "Why are mountain plants and animals special?",
        stage: "recognise",
        options: [
            "Many are adapted to mountain conditions",
            "They cannot survive anywhere",
            "They do not need habitats",
            "They only live in cities"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Mountain species often have adaptations for cold and steep environments.",

        difficulty: 2,
        correctAnswer: "Many are adapted to mountain conditions",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-hm-014",
        skillId: "humansAndMountains",
        question:
            "What resource can mountains provide?",
        stage: "recognise",
        options: [
            "Water, minerals and energy",
            "Only buildings",
            "Only roads",
            "No resources"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Mountains provide many natural resources.",

        difficulty: 2,
        correctAnswer: "Water, minerals and energy",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "resources"]
    },

    {
        id: "geo-hm-015",
        skillId: "humansAndMountains",
        question:
            "Why do mountain communities need to adapt?",
        stage: "recognise",
        options: [
            "Because mountain conditions are different from lowland areas",
            "Because mountains never change",
            "Because there is no weather",
            "Because transport is always easy"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "People adapt their homes, farming and transport to mountain environments.",

        difficulty: 2,
        correctAnswer: "Because mountain conditions are different from lowland areas",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-016",
        skillId: "humansAndMountains",
        question:
            "What is conservation?",
        stage: "recognise",
        options: [
            "Protecting and caring for the environment",
            "Building more roads",
            "Removing wildlife",
            "Changing mountains"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Conservation means protecting natural environments.",

        difficulty: 2,
        correctAnswer: "Protecting and caring for the environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-017",
        skillId: "humansAndMountains",
        question:
            "Why are mountains important to people?",
        stage: "recognise",
        options: [
            "They provide resources, habitats and places to visit",
            "They have no value",
            "They cannot support life",
            "They prevent all activity"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Mountains are valuable natural environments.",

        difficulty: 2,
        correctAnswer: "They provide resources, habitats and places to visit",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-018",
        skillId: "humansAndMountains",
        question:
            "Which activity might happen in mountain areas?",
        stage: "recognise",
        options: [
            "Skiing",
            "Sailing across oceans only",
            "Building skyscrapers only",
            "Growing tropical forests"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Snowy mountains are popular for skiing and other activities.",

        difficulty: 1,
        correctAnswer: "Skiing",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-019",
        skillId: "humansAndMountains",
        question:
            "Why are mountain environments fragile?",
        stage: "recognise",
        options: [
            "Changes can damage ecosystems that recover slowly",
            "They cannot be affected",
            "They have no plants",
            "They are not natural"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "Mountain ecosystems can be sensitive to human impacts.",

        difficulty: 2,
        correctAnswer: "Changes can damage ecosystems that recover slowly",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-020",
        skillId: "humansAndMountains",
        question:
            "Which sentence best describes humans and mountains?",
        stage: "recognise",
        options: [
            "People live, work and visit mountains while protecting their environments",
            "People cannot use mountains",
            "Mountains have no importance",
            "Humans never affect mountains"
        ],

        hint: "Think about how mountains affect people or how people affect mountains.",
        explanation:
            "People depend on mountains while needing to protect them.",

        difficulty: 2,
        correctAnswer: "People live, work and visit mountains while protecting their environments",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "mountains"]
    }

    ]

};


export default humansAndMountains;

export {

    humansAndMountains

};
