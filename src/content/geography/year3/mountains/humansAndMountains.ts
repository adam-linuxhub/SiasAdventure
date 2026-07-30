import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const humansAndMountains: SkillContent = {

    skillId: "humansAndMountains",

    title: "Humans and Mountains",

    description:
        "Learn how people live, work and travel in mountain environments and how mountains can be protected.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-hm-001",

        question:
            "Why do some people live in mountain areas?",

        options: [
            "They can use the land for homes, farming and work",
            "Because mountains have no challenges",
            "Because mountains are always warm",
            "Because there are no natural resources"
        ],

        answer: 0,

        explanation:
            "People live in mountains because they can use the land and resources available.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "humans"]
    },

    {
        id: "geo-hm-002",

        question:
            "Why can living in mountains be challenging?",

        options: [
            "Steep slopes, cold weather and difficult transport",
            "There is no land at all",
            "There is no weather",
            "Plants cannot grow anywhere"
        ],

        answer: 0,

        explanation:
            "Mountain environments can make travel and building more difficult.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-003",

        question:
            "How do people travel in mountain areas?",

        options: [
            "Using roads, paths and sometimes cable cars",
            "Only by swimming",
            "Only by flying",
            "By travelling underground"
        ],

        answer: 0,

        explanation:
            "Mountain transport often needs to adapt to steep and uneven land.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "transport"]
    },

    {
        id: "geo-hm-004",

        question:
            "Why can building roads in mountains be difficult?",

        options: [
            "The land is steep and uneven",
            "There are no rocks",
            "The weather never changes",
            "Mountains are flat"
        ],

        answer: 0,

        explanation:
            "Steep slopes and difficult terrain make construction harder.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-005",

        question:
            "What is mountain farming?",

        options: [
            "Growing crops or keeping animals in mountain areas",
            "Building cities on mountains",
            "Removing all plants",
            "Creating rivers"
        ],

        answer: 0,

        explanation:
            "Some communities farm using land available in mountain regions.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "farming"]
    },

    {
        id: "geo-hm-006",

        question:
            "Why do farmers use terraces on mountain slopes?",

        options: [
            "To create flatter areas for growing crops",
            "To make mountains taller",
            "To stop all rainfall",
            "To remove soil"
        ],

        answer: 0,

        explanation:
            "Terraces help farmers grow crops on steep slopes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "farming"]
    },

    {
        id: "geo-hm-007",

        question:
            "Why do tourists visit mountains?",

        options: [
            "For activities such as walking, climbing and skiing",
            "To make mountains disappear",
            "To stop wildlife",
            "To avoid nature"
        ],

        answer: 0,

        explanation:
            "Tourism is an important activity in many mountain areas.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "tourism"]
    },

    {
        id: "geo-hm-008",

        question:
            "What is tourism?",

        options: [
            "People travelling to visit places",
            "Growing crops only",
            "Building roads",
            "Moving rocks"
        ],

        answer: 0,

        explanation:
            "Tourism involves people travelling for leisure or experiences.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "tourism"]
    },

    {
        id: "geo-hm-009",

        question:
            "How can tourism help mountain communities?",

        options: [
            "It can provide jobs and income",
            "It removes all wildlife",
            "It stops farming",
            "It prevents visitors"
        ],

        answer: 0,

        explanation:
            "Tourism can support local businesses and jobs.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "tourism"]
    },

    {
        id: "geo-hm-010",

        question:
            "What is one problem caused by too many visitors?",

        options: [
            "Damage to the environment",
            "More mountains forming",
            "Less rainfall everywhere",
            "Rivers disappearing instantly"
        ],

        answer: 0,

        explanation:
            "Large numbers of visitors can harm fragile mountain environments.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-011",

        question:
            "Why should mountain environments be protected?",

        options: [
            "To protect plants, animals and landscapes",
            "To remove habitats",
            "To stop all visitors",
            "To prevent weather"
        ],

        answer: 0,

        explanation:
            "Mountain environments contain important ecosystems.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-012",

        question:
            "How can people protect mountains?",

        options: [
            "By reducing litter and caring for nature",
            "By leaving rubbish behind",
            "By destroying habitats",
            "By removing all plants"
        ],

        answer: 0,

        explanation:
            "Responsible behaviour helps protect mountain environments.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-013",

        question:
            "Why are mountain plants and animals special?",

        options: [
            "Many are adapted to mountain conditions",
            "They cannot survive anywhere",
            "They do not need habitats",
            "They only live in cities"
        ],

        answer: 0,

        explanation:
            "Mountain species often have adaptations for cold and steep environments.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-hm-014",

        question:
            "What resource can mountains provide?",

        options: [
            "Water, minerals and energy",
            "Only buildings",
            "Only roads",
            "No resources"
        ],

        answer: 0,

        explanation:
            "Mountains provide many natural resources.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "resources"]
    },

    {
        id: "geo-hm-015",

        question:
            "Why do mountain communities need to adapt?",

        options: [
            "Because mountain conditions are different from lowland areas",
            "Because mountains never change",
            "Because there is no weather",
            "Because transport is always easy"
        ],

        answer: 0,

        explanation:
            "People adapt their homes, farming and transport to mountain environments.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-016",

        question:
            "What is conservation?",

        options: [
            "Protecting and caring for the environment",
            "Building more roads",
            "Removing wildlife",
            "Changing mountains"
        ],

        answer: 0,

        explanation:
            "Conservation means protecting natural environments.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-017",

        question:
            "Why are mountains important to people?",

        options: [
            "They provide resources, habitats and places to visit",
            "They have no value",
            "They cannot support life",
            "They prevent all activity"
        ],

        answer: 0,

        explanation:
            "Mountains are valuable natural environments.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-018",

        question:
            "Which activity might happen in mountain areas?",

        options: [
            "Skiing",
            "Sailing across oceans only",
            "Building skyscrapers only",
            "Growing tropical forests"
        ],

        answer: 0,

        explanation:
            "Snowy mountains are popular for skiing and other activities.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-hm-019",

        question:
            "Why are mountain environments fragile?",

        options: [
            "Changes can damage ecosystems that recover slowly",
            "They cannot be affected",
            "They have no plants",
            "They are not natural"
        ],

        answer: 0,

        explanation:
            "Mountain ecosystems can be sensitive to human impacts.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hm-020",

        question:
            "Which sentence best describes humans and mountains?",

        options: [
            "People live, work and visit mountains while protecting their environments",
            "People cannot use mountains",
            "Mountains have no importance",
            "Humans never affect mountains"
        ],

        answer: 0,

        explanation:
            "People depend on mountains while needing to protect them.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "mountains"]
    }

    ]

};