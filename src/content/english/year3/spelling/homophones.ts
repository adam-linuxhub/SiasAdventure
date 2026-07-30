import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const homophones: SkillContent = {

    skillId: "homophones",

    title: "Homophones",

    description:
        "Learn to choose the correct homophone. Homophones sound the same but have different spellings and meanings.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-homo-001",
        skillId: "homophones",
        question: "Which word means 'in that place'?",

        options: [
            "there",
            "their",
            "they're",
            "thare"
        ],

        explanation:
            "'There' tells us where something is.",

        difficulty: 1,
        correctAnswer: "there",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-002",
        skillId: "homophones",
        question: "Which word shows that something belongs to people?",

        options: [
            "their",
            "there",
            "they're",
            "ther"
        ],

        explanation:
            "'Their' is used to show ownership.",

        difficulty: 1,
        correctAnswer: "their",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-003",
        skillId: "homophones",
        question: "Which word is short for 'they are'?",

        options: [
            "they're",
            "their",
            "there",
            "theyre"
        ],

        explanation:
            "'They're' is a contraction of 'they are'.",

        difficulty: 1,
        correctAnswer: "they're",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-004",
        skillId: "homophones",
        question: "Which word means the number 2?",

        options: [
            "two",
            "to",
            "too",
            "tow"
        ],

        explanation:
            "'Two' is the number 2.",

        difficulty: 1,
        correctAnswer: "two",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-005",
        skillId: "homophones",
        question: "Which word means 'also'?",

        options: [
            "too",
            "to",
            "two",
            "tou"
        ],

        explanation:
            "'Too' means 'also' or 'more than enough'.",

        difficulty: 1,
        correctAnswer: "too",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-006",
        skillId: "homophones",
        question: "Which word is used before a place or action?",

        options: [
            "to",
            "too",
            "two",
            "tow"
        ],

        explanation:
            "'To' is used before a destination or an action.",

        difficulty: 1,
        correctAnswer: "to",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-007",
        skillId: "homophones",
        question: "Which word means 'listen'?",

        options: [
            "hear",
            "here",
            "heer",
            "hir"
        ],

        explanation:
            "'Hear' means to listen with your ears.",

        difficulty: 1,
        correctAnswer: "hear",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-008",
        skillId: "homophones",
        question: "Which word means 'in this place'?",

        options: [
            "here",
            "hear",
            "heer",
            "hare"
        ],

        explanation:
            "'Here' means in this place.",

        difficulty: 1,
        correctAnswer: "here",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-009",
        skillId: "homophones",
        question: "Which word is an insect that makes honey?",

        options: [
            "bee",
            "be",
            "bea",
            "beee"
        ],

        explanation:
            "A bee is an insect that makes honey.",

        difficulty: 1,
        correctAnswer: "bee",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-010",
        skillId: "homophones",
        question: "Which word means 'to exist'?",

        options: [
            "be",
            "bee",
            "bea",
            "beee"
        ],

        explanation:
            "'Be' is a verb meaning to exist.",

        difficulty: 1,
        correctAnswer: "be",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-011",
        skillId: "homophones",
        question: "Complete the sentence: 'Please put your books over ______.'",

        options: [
            "there",
            "their",
            "they're",
            "ther"
        ],

        explanation:
            "'There' tells us where to put the books.",

        difficulty: 2,
        correctAnswer: "there",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-012",
        skillId: "homophones",
        question: "Complete the sentence: '______ going to the park later.'",

        options: [
            "They're",
            "Their",
            "There",
            "Ther"
        ],

        explanation:
            "'They're' means 'they are'.",

        difficulty: 2,
        correctAnswer: "They're",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-013",
        skillId: "homophones",
        question: "Complete the sentence: 'The children packed ______ lunches.'",

        options: [
            "their",
            "there",
            "they're",
            "ther"
        ],

        explanation:
            "'Their' shows that the lunches belong to the children.",

        difficulty: 2,
        correctAnswer: "their",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-014",
        skillId: "homophones",
        question: "Complete the sentence: 'I have ______ apples.'",

        options: [
            "two",
            "to",
            "too",
            "tow"
        ],

        explanation:
            "'Two' is the correct number.",

        difficulty: 2,
        correctAnswer: "two",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-015",
        skillId: "homophones",
        question: "Complete the sentence: 'Can I come ______?'",

        options: [
            "too",
            "to",
            "two",
            "tow"
        ],

        explanation:
            "'Too' means 'also'.",

        difficulty: 2,
        correctAnswer: "too",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-016",
        skillId: "homophones",
        question: "Complete the sentence: 'Let's go ______ the playground.'",

        options: [
            "to",
            "too",
            "two",
            "tow"
        ],

        explanation:
            "'To' is used before the destination.",

        difficulty: 2,
        correctAnswer: "to",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-017",
        skillId: "homophones",
        question: "Which sentence is correct?",

        options: [
            "I can hear the birds singing.",
            "I can here the birds singing.",
            "I can heer the birds singing.",
            "I can hare the birds singing."
        ],

        explanation:
            "'Hear' means to listen.",

        difficulty: 2,
        correctAnswer: "I can hear the birds singing.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-018",
        skillId: "homophones",
        question: "Which sentence is correct?",

        options: [
            "Please come here.",
            "Please come hear.",
            "Please come heer.",
            "Please come hare."
        ],

        explanation:
            "'Here' means this place.",

        difficulty: 2,
        correctAnswer: "Please come here.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-019",
        skillId: "homophones",
        question: "Which sentence is correct?",

        options: [
            "We went to see the sea.",
            "We went too see the sea.",
            "We went to sea the see.",
            "We went too sea the see."
        ],

        explanation:
            "'See' means to look at something, while 'sea' is the large body of salt water.",

        difficulty: 2,
        correctAnswer: "We went to see the sea.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    },

    {
        id: "eng-homo-020",
        skillId: "homophones",
        question: "Which sentence uses all the homophones correctly?",

        options: [
            "They're taking their dog over there.",
            "Their taking they're dog over there.",
            "There taking their dog over they're.",
            "They're taking there dog over their."
        ],

        explanation:
            "'They're' means 'they are', 'their' shows ownership, and 'there' tells us where something is.",

        difficulty: 2,
        correctAnswer: "They're taking their dog over there.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "homophones"]
    }

    ]

};