import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const apostrophesContractions: SkillContent = {

    skillId: "apostrophesContractions",

    title: "Apostrophes for Contractions",

    description:
        "Learn how apostrophes show that letters have been left out when two words are shortened.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-aposcont-001",
        skillId: "apostrophesContractions",
        question: "What does an apostrophe do in a contraction?",

        options: [
            "Shows that letters have been left out",
            "Ends a sentence",
            "Separates items in a list",
            "Shows a question"
        ],

        explanation:
            "In contractions, an apostrophe replaces the missing letter or letters.",

        difficulty: 1,
        correctAnswer: "Shows that letters have been left out",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "contractions"]
    },

    {
        id: "eng-aposcont-002",
        skillId: "apostrophesContractions",
        question: "Which word is the correct contraction of 'do not'?",

        options: [
            "don't",
            "dont",
            "do'nt",
            "do not'"
        ],

        explanation:
            "'Don't' replaces the missing 'o' in 'not' with an apostrophe.",

        difficulty: 1,
        correctAnswer: "don't",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "contractions"]
    },

    {
        id: "eng-aposcont-003",
        skillId: "apostrophesContractions",
        question: "Which word is the correct contraction of 'cannot'?",

        options: [
            "can't",
            "cant",
            "ca'nt",
            "can't'"
        ],

        explanation:
            "'Can't' uses an apostrophe to replace the missing letters.",

        difficulty: 1,
        correctAnswer: "can't",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "contractions"]
    },

    {
        id: "eng-aposcont-004",
        skillId: "apostrophesContractions",
        question: "Which word is the contraction of 'I am'?",

        options: [
            "I'm",
            "Im",
            "I'm'",
            "I am'"
        ],

        explanation:
            "'I'm' replaces the missing 'a' in 'am' with an apostrophe.",

        difficulty: 1,
        correctAnswer: "I'm",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "contractions"]
    },

    {
        id: "eng-aposcont-005",
        skillId: "apostrophesContractions",
        question: "Which sentence is written correctly?",

        options: [
            "I'm going to the park.",
            "Im going to the park.",
            "I' m going to the park.",
            "I am' going to the park."
        ],

        explanation:
            "'I'm' is the correct contraction of 'I am'.",

        difficulty: 1,
        correctAnswer: "I'm going to the park.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-006",
        skillId: "apostrophesContractions",
        question: "Which word is the contraction of 'it is'?",

        options: [
            "it's",
            "its",
            "it,s",
            "it' s"
        ],

        explanation:
            "'It's' is short for 'it is'.",

        difficulty: 1,
        correctAnswer: "it's",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-007",
        skillId: "apostrophesContractions",
        question: "Which sentence uses a contraction correctly?",

        options: [
            "Don't run indoors.",
            "Dont run indoors.",
            "Do'nt run indoors.",
            "Don't' run indoors."
        ],

        explanation:
            "'Don't' is the correct contraction of 'do not'.",

        difficulty: 1,
        correctAnswer: "Don't run indoors.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-008",
        skillId: "apostrophesContractions",
        question: "Which word needs an apostrophe?",

        options: [
            "we'll",
            "well",
            "were",
            "went"
        ],

        explanation:
            "'We'll' is the contraction of 'we will'.",

        difficulty: 1,
        correctAnswer: "we'll",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-009",
        skillId: "apostrophesContractions",
        question: "Which contraction means 'you are'?",

        options: [
            "you're",
            "your",
            "youre",
            "you'r"
        ],

        explanation:
            "'You're' is short for 'you are'.",

        difficulty: 1,
        correctAnswer: "you're",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-010",
        skillId: "apostrophesContractions",
        question: "Why do writers use contractions?",

        options: [
            "To shorten two words into one",
            "To make sentences longer",
            "To ask questions",
            "To separate lists"
        ],

        explanation:
            "Contractions make writing and speaking sound more natural.",

        difficulty: 1,
        correctAnswer: "To shorten two words into one",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "contractions"]
    },

    {
        id: "eng-aposcont-011",
        skillId: "apostrophesContractions",
        question: "Which sentence is punctuated correctly?",

        options: [
            "We're ready to leave.",
            "Were ready to leave.",
            "Were ready to leave.",
            "We're' ready to leave."
        ],

        explanation:
            "'We're' is the contraction of 'we are'.",

        difficulty: 2,
        correctAnswer: "We're ready to leave.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-012",
        skillId: "apostrophesContractions",
        question: "Which contraction means 'they are'?",

        options: [
            "they're",
            "their",
            "there",
            "theyre"
        ],

        explanation:
            "'They're' is the contraction of 'they are'.",

        difficulty: 2,
        correctAnswer: "they're",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-013",
        skillId: "apostrophesContractions",
        question: "Which sentence is correct?",

        options: [
            "She's my best friend.",
            "Shes my best friend.",
            "She's' my best friend.",
            "She s my best friend."
        ],

        explanation:
            "'She's' is the contraction of 'she is'.",

        difficulty: 2,
        correctAnswer: "She's my best friend.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-014",
        skillId: "apostrophesContractions",
        question: "What letters are missing in 'isn't'?",

        options: [
            "o",
            "i",
            "n",
            "t"
        ],

        explanation:
            "'Isn't' is short for 'is not'. The apostrophe replaces the missing 'o'.",

        difficulty: 2,
        correctAnswer: "o",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-015",
        skillId: "apostrophesContractions",
        question: "Which contraction means 'he will'?",

        options: [
            "he'll",
            "hell",
            "hel'l",
            "he'll'"
        ],

        explanation:
            "'He'll' is the contraction of 'he will'.",

        difficulty: 2,
        correctAnswer: "he'll",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-016",
        skillId: "apostrophesContractions",
        question: "Which sentence uses contractions correctly?",

        options: [
            "You'll enjoy today's lesson.",
            "Youll enjoy today's lesson.",
            "You'll' enjoy today's lesson.",
            "You ll enjoy today's lesson."
        ],

        explanation:
            "'You'll' is the contraction of 'you will'.",

        difficulty: 2,
        correctAnswer: "You'll enjoy today's lesson.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-017",
        skillId: "apostrophesContractions",
        question: "Which contraction means 'we have'?",

        options: [
            "we've",
            "weve",
            "we'v",
            "we have'"
        ],

        explanation:
            "'We've' is the contraction of 'we have'.",

        difficulty: 2,
        correctAnswer: "we've",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-018",
        skillId: "apostrophesContractions",
        question: "Which sentence is written correctly?",

        options: [
            "They've finished their work.",
            "Theyve finished their work.",
            "They' ve finished their work.",
            "They've' finished their work."
        ],

        explanation:
            "'They've' is the correct contraction of 'they have'.",

        difficulty: 2,
        correctAnswer: "They've finished their work.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-019",
        skillId: "apostrophesContractions",
        question: "What does the apostrophe replace in a contraction?",

        options: [
            "Missing letters",
            "Missing words",
            "Capital letters",
            "Full stops"
        ],

        explanation:
            "An apostrophe marks where letters have been omitted.",

        difficulty: 2,
        correctAnswer: "Missing letters",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes"]
    },

    {
        id: "eng-aposcont-020",
        skillId: "apostrophesContractions",
        question: "Which sentence uses all contractions correctly?",

        options: [
            "I'm sure we'll finish because it's nearly done.",
            "Im sure well finish because its nearly done.",
            "I'm sure well finish because it's nearly done.",
            "Im sure we'll finish because its nearly done."
        ],

        explanation:
            "All three contractions—'I'm', 'we'll' and 'it's'—need apostrophes.",

        difficulty: 2,
        correctAnswer: "I'm sure we'll finish because it's nearly done.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "contractions"]
    }

    ]

};