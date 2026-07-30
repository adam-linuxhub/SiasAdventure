import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const humanUsesOfRivers: SkillContent = {

    skillId: "humanUsesOfRivers",

    title: "Human Uses of Rivers",

    description:
        "Learn how people use rivers for water, farming, transport, energy and why rivers need protecting.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-hur-001",

        question:
            "Why are rivers important to humans?",

        options: [
            "They provide water and resources people need",
            "They stop all plants growing",
            "They prevent settlements",
            "They remove all wildlife"
        ],

        explanation:
            "Rivers provide water for drinking, farming and many other activities.",

        difficulty: 1,
        correctAnswer: "They provide water and resources people need",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "human-use"]
    },

    {
        id: "geo-hur-002",

        question:
            "How do people use river water?",

        options: [
            "For drinking and washing",
            "For making mountains",
            "For creating clouds",
            "For stopping rainfall"
        ],

        explanation:
            "People use freshwater from rivers for many everyday needs.",

        difficulty: 1,
        correctAnswer: "For drinking and washing",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-hur-003",

        question:
            "How do farmers use rivers?",

        options: [
            "To water crops and animals",
            "To build houses only",
            "To create roads",
            "To stop farming"
        ],

        explanation:
            "Farmers use river water for irrigation and livestock.",

        difficulty: 1,
        correctAnswer: "To water crops and animals",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "farming"]
    },

    {
        id: "geo-hur-004",

        question:
            "What is irrigation?",

        options: [
            "Supplying water to crops",
            "Building a bridge",
            "Cleaning a river",
            "Moving a village"
        ],

        explanation:
            "Irrigation provides crops with the water they need to grow.",

        difficulty: 2,
        correctAnswer: "Supplying water to crops",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "farming"]
    },

    {
        id: "geo-hur-005",

        question:
            "Why have many towns been built near rivers?",

        options: [
            "Rivers provide water and help transport goods",
            "Rivers prevent people living there",
            "Rivers make farming impossible",
            "Rivers have no benefits"
        ],

        explanation:
            "Rivers have helped people settle because they provide useful resources.",

        difficulty: 1,
        correctAnswer: "Rivers provide water and help transport goods",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "settlements"]
    },

    {
        id: "geo-hur-006",

        question:
            "How can rivers help with transport?",

        options: [
            "Boats can travel along them",
            "Cars drive inside them",
            "They create roads automatically",
            "They stop movement"
        ],

        explanation:
            "Rivers can be used as routes for boats and trade.",

        difficulty: 1,
        correctAnswer: "Boats can travel along them",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "transport"]
    },

    {
        id: "geo-hur-007",

        question:
            "What is hydroelectric power?",

        options: [
            "Electricity made using moving water",
            "Electricity from sunlight only",
            "Power from burning wood",
            "Energy from animals"
        ],

        explanation:
            "Hydroelectric power uses moving water to generate electricity.",

        difficulty: 2,
        correctAnswer: "Electricity made using moving water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "energy"]
    },

    {
        id: "geo-hur-008",

        question:
            "What structure can be used to create hydroelectric power?",

        options: [
            "A dam",
            "A house",
            "A road",
            "A bridge only"
        ],

        explanation:
            "Dams can control water flow to generate electricity.",

        difficulty: 2,
        correctAnswer: "A dam",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "energy"]
    },

    {
        id: "geo-hur-009",

        question:
            "What is pollution?",

        options: [
            "Harmful substances entering the environment",
            "Clean water flowing",
            "Plants growing",
            "Rain falling"
        ],

        explanation:
            "Pollution can damage rivers and the living things that depend on them.",

        difficulty: 1,
        correctAnswer: "Harmful substances entering the environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "environment"]
    },

    {
        id: "geo-hur-010",

        question:
            "What can cause river pollution?",

        options: [
            "Waste and chemicals entering the water",
            "Clean rainwater",
            "Fish swimming",
            "Plants growing"
        ],

        explanation:
            "Waste and chemicals can make rivers unhealthy.",

        difficulty: 1,
        correctAnswer: "Waste and chemicals entering the water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "environment"]
    },

    {
        id: "geo-hur-011",

        question:
            "Why should rivers be protected?",

        options: [
            "To keep water safe for people and wildlife",
            "To stop all animals living",
            "To remove plants",
            "To prevent rainfall"
        ],

        explanation:
            "Healthy rivers support ecosystems and people.",

        difficulty: 1,
        correctAnswer: "To keep water safe for people and wildlife",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "environment"]
    },

    {
        id: "geo-hur-012",

        question:
            "How can people help protect rivers?",

        options: [
            "By reducing litter and pollution",
            "By putting rubbish in rivers",
            "By wasting water",
            "By removing all plants"
        ],

        explanation:
            "Reducing pollution helps keep rivers clean.",

        difficulty: 1,
        correctAnswer: "By reducing litter and pollution",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "environment"]
    },

    {
        id: "geo-hur-013",

        question:
            "Why are rivers important for wildlife?",

        options: [
            "They provide habitats and water",
            "They remove all habitats",
            "They stop animals living",
            "They create pollution"
        ],

        explanation:
            "Many plants and animals depend on rivers.",

        difficulty: 1,
        correctAnswer: "They provide habitats and water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "wildlife"]
    },

    {
        id: "geo-hur-014",

        question:
            "What is a habitat?",

        options: [
            "A place where living things live",
            "A type of river",
            "A weather event",
            "A type of rock"
        ],

        explanation:
            "A habitat provides the conditions needed for living things.",

        difficulty: 1,
        correctAnswer: "A place where living things live",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-hur-015",

        question:
            "Why are rivers useful for trade?",

        options: [
            "Boats can transport goods",
            "They stop all movement",
            "They remove products",
            "They create factories"
        ],

        explanation:
            "Rivers have been used as transport routes for thousands of years.",

        difficulty: 2,
        correctAnswer: "Boats can transport goods",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "trade"]
    },

    {
        id: "geo-hur-016",

        question:
            "What might happen if a river becomes polluted?",

        options: [
            "Plants and animals may be harmed",
            "The river becomes a road",
            "All water disappears",
            "The river stops existing"
        ],

        explanation:
            "Pollution can damage river ecosystems.",

        difficulty: 2,
        correctAnswer: "Plants and animals may be harmed",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "environment"]
    },

    {
        id: "geo-hur-017",

        question:
            "Why do cities often develop near rivers?",

        options: [
            "Rivers provide water and support trade",
            "Rivers prevent people living there",
            "Rivers stop transport",
            "Rivers cannot be used"
        ],

        explanation:
            "Rivers have helped settlements grow throughout history.",

        difficulty: 2,
        correctAnswer: "Rivers provide water and support trade",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "settlements"]
    },

    {
        id: "geo-hur-018",

        question:
            "Which is a renewable source of energy from rivers?",

        options: [
            "Hydroelectric power",
            "Coal",
            "Plastic",
            "Petrol"
        ],

        explanation:
            "Moving water can be used as a renewable energy source.",

        difficulty: 2,
        correctAnswer: "Hydroelectric power",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "energy"]
    },

    {
        id: "geo-hur-019",

        question:
            "Why do people need to use water carefully?",

        options: [
            "Fresh water is a valuable resource",
            "Water has no importance",
            "Rivers never change",
            "All water is unlimited"
        ],

        explanation:
            "Fresh water is important and should be managed carefully.",

        difficulty: 2,
        correctAnswer: "Fresh water is a valuable resource",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-hur-020",

        question:
            "Which sentence best describes how humans use rivers?",

        options: [
            "People use rivers for water, farming, transport and energy",
            "People cannot use rivers",
            "Rivers are only for animals",
            "Rivers have no purpose"
        ],

        explanation:
            "Rivers are important resources for both humans and nature.",

        difficulty: 2,
        correctAnswer: "People use rivers for water, farming, transport and energy",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "rivers"]
    }

    ]

};