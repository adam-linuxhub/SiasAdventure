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

        question: "What is it called when a solid turns into a liquid?",

        options: [
            "Melting",
            "Freezing",
            "Evaporating",
            "Condensing"
        ],

        answer: 0,

        explanation:
            "Melting happens when a solid is heated enough to become a liquid.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "melting"]
    },

    {
        id: "sci-changing-state-002",

        question: "What is it called when a liquid turns into a solid?",

        options: [
            "Freezing",
            "Melting",
            "Evaporating",
            "Condensing"
        ],

        answer: 0,

        explanation:
            "Freezing happens when a liquid is cooled enough to become a solid.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "states-of-matter", "freezing"]
    },

    {
        id: "sci-changing-state-003",

        question: "Ice changing into water is an example of...",

        options: [
            "Melting",
            "Freezing",
            "Condensing",
            "Evaporating"
        ],

        answer: 0,

        explanation:
            "Ice melts when it is warmed.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "melting"]
    },

    {
        id: "sci-changing-state-004",

        question: "Water changing into ice is called...",

        options: [
            "Freezing",
            "Melting",
            "Boiling",
            "Condensing"
        ],

        answer: 0,

        explanation:
            "Water freezes when it becomes cold enough.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "freezing"]
    },

    {
        id: "sci-changing-state-005",

        question: "What happens to water when it boils?",

        options: [
            "It changes into a gas.",
            "It changes into a solid.",
            "It disappears.",
            "It becomes ice."
        ],

        answer: 0,

        explanation:
            "Boiling changes liquid water into water vapour, which is a gas.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "boiling"]
    },

    {
        id: "sci-changing-state-006",

        question: "What is water vapour?",

        options: [
            "A gas",
            "A liquid",
            "A solid",
            "A rock"
        ],

        answer: 0,

        explanation:
            "Water vapour is the gaseous form of water.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "gases"]
    },

    {
        id: "sci-changing-state-007",

        question: "Which process needs heating?",

        options: [
            "Melting",
            "Freezing",
            "Condensing",
            "Cooling"
        ],

        answer: 0,

        explanation:
            "Heating gives enough energy for a solid to melt.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "heating"]
    },

    {
        id: "sci-changing-state-008",

        question: "Which process needs cooling?",

        options: [
            "Freezing",
            "Boiling",
            "Melting",
            "Evaporating"
        ],

        answer: 0,

        explanation:
            "Cooling removes heat, allowing liquids to freeze.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "cooling"]
    },

    {
        id: "sci-changing-state-009",

        question: "What happens when melted chocolate cools?",

        options: [
            "It becomes solid again.",
            "It becomes a gas.",
            "It disappears.",
            "It boils."
        ],

        answer: 0,

        explanation:
            "Cooling changes melted chocolate back into a solid.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "changing-state"]
    },

    {
        id: "sci-changing-state-010",

        question: "Which statement is true?",

        options: [
            "Heating and cooling can change the state of matter.",
            "Matter can never change state.",
            "Only solids change state.",
            "Only gases change state."
        ],

        answer: 0,

        explanation:
            "Heating and cooling cause changes of state.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "states-of-matter"]
    },

    {
        id: "sci-changing-state-011",

        question: "Why does an ice cube melt on a warm day?",

        options: [
            "It gains heat from its surroundings.",
            "It loses all its water.",
            "It becomes colder.",
            "It turns into air."
        ],

        answer: 0,

        explanation:
            "Heat from the surroundings causes the ice to melt.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "melting"]
    },

    {
        id: "sci-changing-state-012",

        question: "Why does water freeze in a freezer?",

        options: [
            "It loses heat.",
            "It gains heat.",
            "It absorbs light.",
            "It becomes heavier."
        ],

        answer: 0,

        explanation:
            "Cooling removes heat until the water freezes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "freezing"]
    },

    {
        id: "sci-changing-state-013",

        question: "Which sequence is correct?",

        options: [
            "Ice → Water → Water vapour",
            "Water → Ice → Water vapour",
            "Water vapour → Ice → Water",
            "Ice → Water vapour → Ice"
        ],

        answer: 0,

        explanation:
            "Heating changes ice to water, then water to water vapour.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "changing-state"]
    },

    {
        id: "sci-changing-state-014",

        question: "What happens when water vapour cools?",

        options: [
            "It condenses into liquid water.",
            "It freezes into ice immediately.",
            "It disappears.",
            "It becomes a solid without becoming a liquid."
        ],

        answer: 0,

        explanation:
            "Condensation changes a gas back into a liquid.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-changing-state-015",

        question: "What causes butter to melt in a hot pan?",

        options: [
            "Heating",
            "Cooling",
            "Wind",
            "Darkness"
        ],

        answer: 0,

        explanation:
            "Heat changes solid butter into a liquid.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "melting"]
    },

    {
        id: "sci-changing-state-016",

        question: "Which process changes a liquid into a gas?",

        options: [
            "Boiling",
            "Freezing",
            "Condensing",
            "Cooling"
        ],

        answer: 0,

        explanation:
            "Boiling changes a liquid into a gas.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "boiling"]
    },

    {
        id: "sci-changing-state-017",

        question: "Why does melted ice cream become solid again in the freezer?",

        options: [
            "It loses heat and freezes.",
            "It gains heat.",
            "It evaporates.",
            "It condenses."
        ],

        answer: 0,

        explanation:
            "Cooling changes the liquid back into a solid.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "freezing"]
    },

    {
        id: "sci-changing-state-018",

        question: "What is condensation?",

        options: [
            "A gas changing into a liquid",
            "A liquid changing into a gas",
            "A solid changing into a liquid",
            "A liquid changing into a solid"
        ],

        answer: 0,

        explanation:
            "Condensation happens when a gas cools into a liquid.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "condensation"]
    },

    {
        id: "sci-changing-state-019",

        question: "Which process happens when puddles slowly disappear on a warm day?",

        options: [
            "Evaporation",
            "Freezing",
            "Melting",
            "Condensation"
        ],

        answer: 0,

        explanation:
            "Evaporation changes liquid water into water vapour.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "evaporation"]
    },

    {
        id: "sci-changing-state-020",

        question: "Which sentence best describes changes of state?",

        options: [
            "Heating and cooling can change matter between solids, liquids and gases.",
            "Matter can only be a solid.",
            "Only water changes state.",
            "Changing state creates new materials."
        ],

        answer: 0,

        explanation:
            "Heating and cooling change the state of a material without creating a new substance.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "states-of-matter", "changing-state"]
    }

    ]

};