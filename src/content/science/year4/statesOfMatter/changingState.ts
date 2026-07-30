import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const changingState: SkillContent = {

    skillId: "changingState",

    title: "Changing State",

    description:
        "Learn how heating and cooling can change solids, liquids and gases into different states of matter.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-changing-state-001",
        skillId: "changingState",
        question: "What is it called when a solid turns into a liquid?",
        stage: "recognise",
        options: [
            "Melting",
            "Freezing",
            "Evaporating",
            "Condensing"
        ],

        explanation:
            "Melting happens when a solid is heated enough to become a liquid.",

        difficulty: 1,
        correctAnswer: "Melting",
        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "melting"]
    },

    {
        id: "sci-changing-state-002",
        skillId: "changingState",
        question: "What is it called when a liquid turns into a solid?",
        stage: "recognise",
        options: [
            "Freezing",
            "Melting",
            "Evaporating",
            "Condensing"
        ],

        explanation:
            "Freezing happens when a liquid is cooled enough to become a solid.",

        difficulty: 1,
        correctAnswer: "Freezing",
        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "freezing"]
    },

    {
        id: "sci-changing-state-003",
        skillId: "changingState",
        question: "Ice changing into water is an example of...",
        stage: "recognise",
        options: [
            "Melting",
            "Freezing",
            "Condensing",
            "Evaporating"
        ],

        explanation:
            "Ice melts when it is warmed.",

        difficulty: 1,
        correctAnswer: "Melting",
        estimatedSeconds: 15,

        tags: ["science", "melting"]
    },

    {
        id: "sci-changing-state-004",
        skillId: "changingState",
        question: "Water changing into ice is called...",
        stage: "recognise",
        options: [
            "Freezing",
            "Melting",
            "Boiling",
            "Condensing"
        ],

        explanation:
            "Water freezes when it becomes cold enough.",

        difficulty: 1,
        correctAnswer: "Freezing",
        estimatedSeconds: 15,

        tags: ["science", "freezing"]
    },

    {
        id: "sci-changing-state-005",
        skillId: "changingState",
        question: "What happens to water when it boils?",
        stage: "recognise",
        options: [
            "It changes into a gas.",
            "It changes into a solid.",
            "It disappears.",
            "It becomes ice."
        ],

        explanation:
            "Boiling changes liquid water into water vapour, which is a gas.",

        difficulty: 1,
        correctAnswer: "It changes into a gas.",
        estimatedSeconds: 15,

        tags: ["science", "boiling"]
    },

    {
        id: "sci-changing-state-006",
        skillId: "changingState",
        question: "What is water vapour?",
        stage: "recognise",
        options: [
            "A gas",
            "A liquid",
            "A solid",
            "A rock"
        ],

        explanation:
            "Water vapour is the gaseous form of water.",

        difficulty: 1,
        correctAnswer: "A gas",
        estimatedSeconds: 15,

        tags: ["science", "gases"]
    },

    {
        id: "sci-changing-state-007",
        skillId: "changingState",
        question: "Which process needs heating?",
        stage: "recognise",
        options: [
            "Melting",
            "Freezing",
            "Condensing",
            "Cooling"
        ],

        explanation:
            "Heating gives enough energy for a solid to melt.",

        difficulty: 1,
        correctAnswer: "Melting",
        estimatedSeconds: 15,

        tags: ["science", "heating"]
    },

    {
        id: "sci-changing-state-008",
        skillId: "changingState",
        question: "Which process needs cooling?",
        stage: "recognise",
        options: [
            "Freezing",
            "Boiling",
            "Melting",
            "Evaporating"
        ],

        explanation:
            "Cooling removes heat, allowing liquids to freeze.",

        difficulty: 1,
        correctAnswer: "Freezing",
        estimatedSeconds: 20,

        tags: ["science", "cooling"]
    },

    {
        id: "sci-changing-state-009",
        skillId: "changingState",
        question: "What happens when melted chocolate cools?",
        stage: "recognise",
        options: [
            "It becomes solid again.",
            "It becomes a gas.",
            "It disappears.",
            "It boils."
        ],

        explanation:
            "Cooling changes melted chocolate back into a solid.",

        difficulty: 1,
        correctAnswer: "It becomes solid again.",
        estimatedSeconds: 20,

        tags: ["science", "changing-state"]
    },

    {
        id: "sci-changing-state-010",
        skillId: "changingState",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Heating and cooling can change the state of matter.",
            "Matter can never change state.",
            "Only solids change state.",
            "Only gases change state."
        ],

        explanation:
            "Heating and cooling cause changes of state.",

        difficulty: 1,
        correctAnswer: "Heating and cooling can change the state of matter.",
        estimatedSeconds: 20,

        tags: ["science", "states-of-matter"]
    },

    {
        id: "sci-changing-state-011",
        skillId: "changingState",
        question: "Why does an ice cube melt on a warm day?",
        stage: "recognise",
        options: [
            "It gains heat from its surroundings.",
            "It loses all its water.",
            "It becomes colder.",
            "It turns into air."
        ],

        explanation:
            "Heat from the surroundings causes the ice to melt.",

        difficulty: 2,
        correctAnswer: "It gains heat from its surroundings.",
        estimatedSeconds: 20,

        tags: ["science", "melting"]
    },

    {
        id: "sci-changing-state-012",
        skillId: "changingState",
        question: "Why does water freeze in a freezer?",
        stage: "recognise",
        options: [
            "It loses heat.",
            "It gains heat.",
            "It absorbs light.",
            "It becomes heavier."
        ],

        explanation:
            "Cooling removes heat until the water freezes.",

        difficulty: 2,
        correctAnswer: "It loses heat.",
        estimatedSeconds: 20,

        tags: ["science", "freezing"]
    },

    {
        id: "sci-changing-state-013",
        skillId: "changingState",
        question: "Which sequence is correct?",
        stage: "recognise",
        options: [
            "Ice → Water → Water vapour",
            "Water → Ice → Water vapour",
            "Water vapour → Ice → Water",
            "Ice → Water vapour → Ice"
        ],

        explanation:
            "Heating changes ice to water, then water to water vapour.",

        difficulty: 2,
        correctAnswer: "Ice → Water → Water vapour",
        estimatedSeconds: 20,

        tags: ["science", "changing-state"]
    },

    {
        id: "sci-changing-state-014",
        skillId: "changingState",
        question: "What happens when water vapour cools?",
        stage: "recognise",
        options: [
            "It condenses into liquid water.",
            "It freezes into ice immediately.",
            "It disappears.",
            "It becomes a solid without becoming a liquid."
        ],

        explanation:
            "Condensation changes a gas back into a liquid.",

        difficulty: 2,
        correctAnswer: "It condenses into liquid water.",
        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-changing-state-015",
        skillId: "changingState",
        question: "What causes butter to melt in a hot pan?",
        stage: "recognise",
        options: [
            "Heating",
            "Cooling",
            "Wind",
            "Darkness"
        ],

        explanation:
            "Heat changes solid butter into a liquid.",

        difficulty: 2,
        correctAnswer: "Heating",
        estimatedSeconds: 20,

        tags: ["science", "melting"]
    },

    {
        id: "sci-changing-state-016",
        skillId: "changingState",
        question: "Which process changes a liquid into a gas?",
        stage: "recognise",
        options: [
            "Boiling",
            "Freezing",
            "Condensing",
            "Cooling"
        ],

        explanation:
            "Boiling changes a liquid into a gas.",

        difficulty: 2,
        correctAnswer: "Boiling",
        estimatedSeconds: 20,

        tags: ["science", "boiling"]
    },

    {
        id: "sci-changing-state-017",
        skillId: "changingState",
        question: "Why does melted ice cream become solid again in the freezer?",
        stage: "recognise",
        options: [
            "It loses heat and freezes.",
            "It gains heat.",
            "It evaporates.",
            "It condenses."
        ],

        explanation:
            "Cooling changes the liquid back into a solid.",

        difficulty: 2,
        correctAnswer: "It loses heat and freezes.",
        estimatedSeconds: 20,

        tags: ["science", "freezing"]
    },

    {
        id: "sci-changing-state-018",
        skillId: "changingState",
        question: "What is condensation?",
        stage: "recognise",
        options: [
            "A gas changing into a liquid",
            "A liquid changing into a gas",
            "A solid changing into a liquid",
            "A liquid changing into a solid"
        ],

        explanation:
            "Condensation happens when a gas cools into a liquid.",

        difficulty: 2,
        correctAnswer: "A gas changing into a liquid",
        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-changing-state-019",
        skillId: "changingState",
        question: "Which process happens when puddles slowly disappear on a warm day?",
        stage: "recognise",
        options: [
            "Evaporation",
            "Freezing",
            "Melting",
            "Condensation"
        ],

        explanation:
            "Evaporation changes liquid water into water vapour.",

        difficulty: 2,
        correctAnswer: "Evaporation",
        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-changing-state-020",
        skillId: "changingState",
        question: "Which sentence best describes changes of state?",
        stage: "recognise",
        options: [
            "Heating and cooling can change matter between solids, liquids and gases.",
            "Matter can only be a solid.",
            "Only water changes state.",
            "Changing state creates new materials."
        ],

        explanation:
            "Heating and cooling change the state of a material without creating a new substance.",

        difficulty: 2,
        correctAnswer: "Heating and cooling can change matter between solids, liquids and gases.",
        estimatedSeconds: 20,

        tags: ["science", "states-of-matter", "changing-state"]
    }

    ]

};