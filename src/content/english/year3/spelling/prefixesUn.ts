import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const prefixesUn: SkillContent = {

    skillId: "prefixesUn",

    title: "The Prefix un-",

    description:
        "Learn how the prefix 'un-' changes the meaning of a word to mean 'not' or 'the opposite of'.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-un-001",
        skillId: "prefixesUn",
        question: "What does the prefix 'un-' usually mean?",
        stage: "recognise",
        options: [
            "Not or the opposite of",
            "Very big",
            "Very small",
            "Again"
        ],

        explanation:
            "The prefix 'un-' usually changes a word to mean 'not' or 'the opposite of'.",

        difficulty: 1,
        correctAnswer: "Not or the opposite of",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-002",
        skillId: "prefixesUn",
        question: "Which word means 'not happy'?",
        stage: "recognise",
        options: [
            "unhappy",
            "rehappy",
            "prehappy",
            "mis happy"
        ],

        explanation:
            "'Unhappy' means not happy.",

        difficulty: 1,
        correctAnswer: "unhappy",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-003",
        skillId: "prefixesUn",
        question: "Which word means 'not kind'?",
        stage: "recognise",
        options: [
            "unkind",
            "rekind",
            "prekind",
            "kindly"
        ],

        explanation:
            "'Unkind' means not kind.",

        difficulty: 1,
        correctAnswer: "unkind",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-004",
        skillId: "prefixesUn",
        question: "Which word means 'not fair'?",
        stage: "recognise",
        options: [
            "unfair",
            "refair",
            "fairly",
            "prefair"
        ],

        explanation:
            "'Unfair' means something is not fair.",

        difficulty: 1,
        correctAnswer: "unfair",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-005",
        skillId: "prefixesUn",
        question: "Which word means 'not tidy'?",
        stage: "recognise",
        options: [
            "untidy",
            "retidy",
            "pretidy",
            "tidily"
        ],

        explanation:
            "'Untidy' means not tidy.",

        difficulty: 1,
        correctAnswer: "untidy",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-006",
        skillId: "prefixesUn",
        question: "Which word means 'not safe'?",
        stage: "recognise",
        options: [
            "unsafe",
            "resafe",
            "presafe",
            "safely"
        ],

        explanation:
            "'Unsafe' means not safe.",

        difficulty: 1,
        correctAnswer: "unsafe",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-007",
        skillId: "prefixesUn",
        question: "Choose the correctly spelled word.",
        stage: "recognise",
        options: [
            "unclean",
            "unclene",
            "unclan",
            "unclain"
        ],

        explanation:
            "'Unclean' is the correct spelling.",

        difficulty: 1,
        correctAnswer: "unclean",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-008",
        skillId: "prefixesUn",
        question: "Which word means 'not well'?",
        stage: "recognise",
        options: [
            "unwell",
            "rewell",
            "prewell",
            "welling"
        ],

        explanation:
            "'Unwell' means not feeling well.",

        difficulty: 1,
        correctAnswer: "unwell",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-009",
        skillId: "prefixesUn",
        question: "Which word starts with the prefix 'un-'?",
        stage: "recognise",
        options: [
            "unwrap",
            "wrap",
            "wrapper",
            "wrapping"
        ],

        explanation:
            "'Unwrap' means to remove the wrapping.",

        difficulty: 1,
        correctAnswer: "unwrap",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-010",
        skillId: "prefixesUn",
        question: "What does 'unlock' mean?",
        stage: "recognise",
        options: [
            "Open a lock",
            "Make a lock",
            "Paint a lock",
            "Hide a lock"
        ],

        explanation:
            "'Unlock' means to open something that has been locked.",

        difficulty: 1,
        correctAnswer: "Open a lock",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-011",
        skillId: "prefixesUn",
        question: "Complete the sentence: 'The room was very ______ after the party.'",
        stage: "recognise",
        options: [
            "untidy",
            "tidy",
            "tidily",
            "tidiness"
        ],

        explanation:
            "'Untidy' means not tidy.",

        difficulty: 2,
        correctAnswer: "untidy",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-012",
        skillId: "prefixesUn",
        question: "Complete the sentence: 'It is ______ to run across a busy road.'",
        stage: "recognise",
        options: [
            "unsafe",
            "safe",
            "safely",
            "safety"
        ],

        explanation:
            "'Unsafe' means not safe.",

        difficulty: 2,
        correctAnswer: "unsafe",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-013",
        skillId: "prefixesUn",
        question: "Which sentence uses an 'un-' word correctly?",
        stage: "recognise",
        options: [
            "The game was unfair because one team cheated.",
            "The game was fair because one team cheated.",
            "The game was fairness because one team cheated.",
            "The game was fairly because one team cheated."
        ],

        explanation:
            "'Unfair' means not fair.",

        difficulty: 2,
        correctAnswer: "The game was unfair because one team cheated.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-014",
        skillId: "prefixesUn",
        question: "Which word means the opposite of 'lock'?",
        stage: "recognise",
        options: [
            "unlock",
            "locking",
            "locker",
            "locked"
        ],

        explanation:
            "Adding 'un-' changes the meaning to the opposite.",

        difficulty: 2,
        correctAnswer: "unlock",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-015",
        skillId: "prefixesUn",
        question: "Which sentence is correct?",
        stage: "recognise",
        options: [
            "Sam felt unhappy when he lost his toy.",
            "Sam felt happy when he lost his toy.",
            "Sam felt happiness when he lost his toy.",
            "Sam felt happily when he lost his toy."
        ],

        explanation:
            "'Unhappy' means not happy.",

        difficulty: 2,
        correctAnswer: "Sam felt unhappy when he lost his toy.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-016",
        skillId: "prefixesUn",
        question: "Which word means the opposite of 'wrap'?",
        stage: "recognise",
        options: [
            "unwrap",
            "wrapped",
            "wrapper",
            "wrapping"
        ],

        explanation:
            "'Unwrap' means to remove the wrapping.",

        difficulty: 2,
        correctAnswer: "unwrap",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-017",
        skillId: "prefixesUn",
        question: "What happens when 'un-' is added to many words?",
        stage: "recognise",
        options: [
            "The meaning becomes the opposite.",
            "The word becomes longer but keeps the same meaning.",
            "The word becomes a question.",
            "The word becomes a noun."
        ],

        explanation:
            "The prefix 'un-' usually changes the meaning to the opposite.",

        difficulty: 2,
        correctAnswer: "The meaning becomes the opposite.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-018",
        skillId: "prefixesUn",
        question: "Which sentence contains an 'un-' word?",
        stage: "recognise",
        options: [
            "The puppy was unwell after eating too much.",
            "The puppy was well after eating too much.",
            "The puppy was wellness after eating too much.",
            "The puppy was welling after eating too much."
        ],

        explanation:
            "'Unwell' means not feeling well.",

        difficulty: 2,
        correctAnswer: "The puppy was unwell after eating too much.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-019",
        skillId: "prefixesUn",
        question: "Which word is formed by adding 'un-' to 'kind'?",
        stage: "recognise",
        options: [
            "unkind",
            "kindun",
            "rekind",
            "kindness"
        ],

        explanation:
            "'Unkind' means not kind.",

        difficulty: 2,
        correctAnswer: "unkind",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    },

    {
        id: "eng-un-020",
        skillId: "prefixesUn",
        question: "Which sentence uses the prefix 'un-' correctly?",
        stage: "recognise",
        options: [
            "Please unwrap your birthday present carefully.",
            "Please wrap your birthday present carefully after opening it.",
            "Please wrapper your birthday present carefully.",
            "Please wrapping your birthday present carefully."
        ],

        explanation:
            "'Unwrap' means to remove the wrapping from a present.",

        difficulty: 2,
        correctAnswer: "Please unwrap your birthday present carefully.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "prefixes", "un"]
    }

    ]

};


export default prefixesUn;

export {

    prefixesUn

};
