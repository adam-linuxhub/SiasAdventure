import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const pronouns: SkillContent = {

    skillId: "pronouns",

    title: "Pronouns",

    description:
        "Learn to identify pronouns and use them instead of repeating nouns.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-pronouns-001",

        question: "Which word is a pronoun?",

        options: [
            "he",
            "boy",
            "run",
            "happy"
        ],

        answer: 0,

        explanation:
            "'He' is a pronoun because it can replace the name of a person.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-002",

        question: "Which word is a pronoun?",

        options: [
            "she",
            "girl",
            "jump",
            "quickly"
        ],

        answer: 0,

        explanation:
            "'She' is a pronoun used instead of a girl's name.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-003",

        question: "Which word is a pronoun?",

        options: [
            "it",
            "cat",
            "sleep",
            "soft"
        ],

        answer: 0,

        explanation:
            "'It' is a pronoun used for animals, objects or ideas.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-004",

        question: "Which word is a pronoun?",

        options: [
            "they",
            "children",
            "play",
            "park"
        ],

        answer: 0,

        explanation:
            "'They' is a pronoun that replaces more than one person or thing.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-005",

        question: "Which word can replace 'Oliver'?",

        options: [
            "he",
            "table",
            "run",
            "green"
        ],

        answer: 0,

        explanation:
            "'He' can replace the noun 'Oliver' in a sentence.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-006",

        question: "Which word can replace 'Emma'?",

        options: [
            "she",
            "happy",
            "jump",
            "book"
        ],

        answer: 0,

        explanation:
            "'She' can replace the noun 'Emma'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-007",

        question: "Which word can replace 'the dog'?",

        options: [
            "it",
            "bark",
            "brown",
            "garden"
        ],

        answer: 0,

        explanation:
            "'It' can replace a singular animal in simple sentences.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-008",

        question: "Which sentence contains a pronoun?",

        options: [
            "She laughed.",
            "The happy girl.",
            "A noisy classroom.",
            "Tall trees."
        ],

        answer: 0,

        explanation:
            "'She' is a pronoun.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-009",

        question: "Which word is NOT a pronoun?",

        options: [
            "teacher",
            "we",
            "they",
            "he"
        ],

        answer: 0,

        explanation:
            "'Teacher' is a noun, not a pronoun.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-pronouns-010",

        question: "Why do we use pronouns?",

        options: [
            "To avoid repeating nouns",
            "To replace punctuation",
            "To describe nouns",
            "To join sentences"
        ],

        answer: 0,

        explanation:
            "Pronouns make writing smoother by replacing repeated nouns.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-011",

        question: "Choose the best replacement: 'Lucy found Lucy's book. ____ picked it up.'",

        options: [
            "She",
            "Book",
            "Quickly",
            "Happy"
        ],

        answer: 0,

        explanation:
            "'She' replaces the repeated noun 'Lucy'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-012",

        question: "Which sentence uses a pronoun correctly?",

        options: [
            "Sam found the ball. He kicked it.",
            "Sam found the ball. Ball kicked Sam.",
            "Sam found. Ball it.",
            "He ball Sam."
        ],

        answer: 0,

        explanation:
            "'He' replaces Sam and 'it' replaces the ball.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-013",

        question: "Which pronoun can replace 'my friends'?",

        options: [
            "they",
            "he",
            "she",
            "it"
        ],

        answer: 0,

        explanation:
            "'They' is used for more than one person.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-014",

        question: "In the sentence 'The cat drank its milk.', which word is the pronoun?",

        options: [
            "its",
            "cat",
            "drank",
            "milk"
        ],

        answer: 0,

        explanation:
            "'Its' is a possessive pronoun showing the milk belongs to the cat.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-015",

        question: "Which sentence contains two pronouns?",

        options: [
            "They helped us.",
            "The children helped.",
            "Helpful children.",
            "Children helped friends."
        ],

        answer: 0,

        explanation:
            "'They' and 'us' are both pronouns.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-016",

        question: "Which pronoun could replace 'the bicycle'?",

        options: [
            "it",
            "they",
            "she",
            "we"
        ],

        answer: 0,

        explanation:
            "'It' is used for a single object.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-017",

        question: "Choose the best sentence.",

        options: [
            "Mia saw Ben. She waved to him.",
            "Mia saw Ben. Mia waved to Ben.",
            "Mia Ben waved.",
            "She Ben Mia."
        ],

        answer: 0,

        explanation:
            "Pronouns make the sentence smoother by avoiding repetition.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-018",

        question: "Which pronoun refers to the speaker?",

        options: [
            "I",
            "he",
            "she",
            "they"
        ],

        answer: 0,

        explanation:
            "'I' is the pronoun used by the person speaking.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-019",

        question: "Which pronoun refers to the person being spoken to?",

        options: [
            "you",
            "he",
            "she",
            "they"
        ],

        answer: 0,

        explanation:
            "'You' is the pronoun used for the person being spoken to.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-020",

        question: "Which sentence uses pronouns correctly?",

        options: [
            "Olivia and Noah played outside. They enjoyed it.",
            "Olivia and Noah played outside. Olivia and Noah enjoyed outside.",
            "They Olivia Noah.",
            "Outside they Olivia."
        ],

        answer: 0,

        explanation:
            "'They' replaces 'Olivia and Noah', and 'it' replaces the activity or situation.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    }

    ]

};