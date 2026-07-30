import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const wordFamilies: SkillContent = {

    skillId: "wordFamilies",

    title: "Word Families",

    description:
        "Learn how words in the same word family share the same root word but can have different endings or prefixes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-wf-001",

        question: "Which word belongs to the same word family as 'help'?",

        options: [
            "helper",
            "walk",
            "jump",
            "chair"
        ],

        answer: 0,

        explanation:
            "'Help' and 'helper' share the same root word.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-002",

        question: "Which word belongs to the same word family as 'play'?",

        options: [
            "player",
            "write",
            "sleep",
            "read"
        ],

        answer: 0,

        explanation:
            "'Play' and 'player' come from the same root word.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-003",

        question: "Which word belongs to the same word family as 'care'?",

        options: [
            "careful",
            "happy",
            "quiet",
            "slow"
        ],

        answer: 0,

        explanation:
            "'Care' is the root word of 'careful'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-004",

        question: "Which word belongs to the same word family as 'teach'?",

        options: [
            "teacher",
            "school",
            "lesson",
            "learn"
        ],

        answer: 0,

        explanation:
            "'Teacher' comes from the root word 'teach'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-005",

        question: "Which word belongs to the same word family as 'paint'?",

        options: [
            "painter",
            "colour",
            "brush",
            "draw"
        ],

        answer: 0,

        explanation:
            "'Paint' and 'painter' belong to the same word family.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-006",

        question: "Which word belongs to the same word family as 'read'?",

        options: [
            "reader",
            "book",
            "page",
            "library"
        ],

        answer: 0,

        explanation:
            "'Reader' is formed from the root word 'read'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-007",

        question: "What is the root word in 'helpful'?",

        options: [
            "help",
            "ful",
            "helper",
            "fully"
        ],

        answer: 0,

        explanation:
            "'Helpful' is made from the root word 'help' and the suffix '-ful'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-008",

        question: "What do words in the same word family share?",

        options: [
            "The same root word",
            "The same first letter",
            "The same number of letters",
            "The same ending"
        ],

        answer: 0,

        explanation:
            "Words in a word family all come from the same root word.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-009",

        question: "Which word belongs to the word family of 'farm'?",

        options: [
            "farmer",
            "garden",
            "tractor",
            "field"
        ],

        answer: 0,

        explanation:
            "'Farmer' comes from the root word 'farm'.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-010",

        question: "Which word belongs to the word family of 'kind'?",

        options: [
            "kindness",
            "friend",
            "happy",
            "gentle"
        ],

        answer: 0,

        explanation:
            "'Kindness' is formed from the root word 'kind'.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-011",

        question: "Which word does NOT belong to the word family of 'play'?",

        options: [
            "player",
            "playful",
            "replay",
            "game"
        ],

        answer: 3,

        explanation:
            "'Game' is related in meaning but does not share the root word 'play'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-012",

        question: "Which word belongs to the same family as 'careful'?",

        options: [
            "careless",
            "care",
            "carefully",
            "All of these"
        ],

        answer: 3,

        explanation:
            "'Care', 'careful', 'carefully' and 'careless' all share the same root word.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-013",

        question: "Complete the word family: help, helper, helpful, ______.",

        options: [
            "helpless",
            "helped",
            "helping",
            "All of these"
        ],

        answer: 3,

        explanation:
            "All of these words belong to the 'help' word family because they share the same root.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-014",

        question: "Which word belongs to the word family of 'teach'?",

        options: [
            "teacher",
            "teaching",
            "taught",
            "All of these"
        ],

        answer: 3,

        explanation:
            "All these words are part of the 'teach' word family.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-015",

        question: "The root word in 'carefully' is:",

        options: [
            "care",
            "careful",
            "fully",
            "carely"
        ],

        answer: 0,

        explanation:
            "The root word is 'care'. The suffixes '-ful' and '-ly' have been added.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-016",

        question: "Which word family does 'reader' belong to?",

        options: [
            "read",
            "write",
            "book",
            "story"
        ],

        answer: 0,

        explanation:
            "'Reader' comes from the root word 'read'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-017",

        question: "Why do words in the same family look similar?",

        options: [
            "They share the same root word",
            "They rhyme",
            "They all end with '-ing'",
            "They all begin with the same letter"
        ],

        answer: 0,

        explanation:
            "Words in a word family share the same root, so they often look and sound similar.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-018",

        question: "Which set is a word family?",

        options: [
            "kind, kindly, kindness, unkind",
            "cat, dog, rabbit, fish",
            "red, blue, green, yellow",
            "run, chair, happy, pencil"
        ],

        answer: 0,

        explanation:
            "All four words are built from the root word 'kind'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-019",

        question: "Which word is built from the root word 'play'?",

        options: [
            "playground",
            "football",
            "ball",
            "match"
        ],

        answer: 0,

        explanation:
            "'Playground' contains the root word 'play'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-020",

        question: "Why is learning word families useful?",

        options: [
            "It helps us understand and spell related words.",
            "It helps us count faster.",
            "It helps us write longer sentences.",
            "It helps us remember punctuation."
        ],

        answer: 0,

        explanation:
            "Knowing a root word helps you recognise, understand and spell many related words.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    }

    ]

};