import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const wordFamilies: SkillContent = {

    skillId: "wordFamilies",

    title: "Word Families",

    description:
        "Learn how words in the same word family share the same root word but can have different endings or prefixes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-wf-001",
        skillId: "wordFamilies",
        question: "Which word belongs to the same word family as 'help'?",
        stage: "recognise",
        options: [
            "helper",
            "walk",
            "jump",
            "chair"
        ],

        explanation:
            "'Help' and 'helper' share the same root word.",

        difficulty: 1,
        correctAnswer: "helper",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-002",
        skillId: "wordFamilies",
        question: "Which word belongs to the same word family as 'play'?",
        stage: "recognise",
        options: [
            "player",
            "write",
            "sleep",
            "read"
        ],

        explanation:
            "'Play' and 'player' come from the same root word.",

        difficulty: 1,
        correctAnswer: "player",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-003",
        skillId: "wordFamilies",
        question: "Which word belongs to the same word family as 'care'?",
        stage: "recognise",
        options: [
            "careful",
            "happy",
            "quiet",
            "slow"
        ],

        explanation:
            "'Care' is the root word of 'careful'.",

        difficulty: 1,
        correctAnswer: "careful",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-004",
        skillId: "wordFamilies",
        question: "Which word belongs to the same word family as 'teach'?",
        stage: "recognise",
        options: [
            "teacher",
            "school",
            "lesson",
            "learn"
        ],

        explanation:
            "'Teacher' comes from the root word 'teach'.",

        difficulty: 1,
        correctAnswer: "teacher",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-005",
        skillId: "wordFamilies",
        question: "Which word belongs to the same word family as 'paint'?",
        stage: "recognise",
        options: [
            "painter",
            "colour",
            "brush",
            "draw"
        ],

        explanation:
            "'Paint' and 'painter' belong to the same word family.",

        difficulty: 1,
        correctAnswer: "painter",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-006",
        skillId: "wordFamilies",
        question: "Which word belongs to the same word family as 'read'?",
        stage: "recognise",
        options: [
            "reader",
            "book",
            "page",
            "library"
        ],

        explanation:
            "'Reader' is formed from the root word 'read'.",

        difficulty: 1,
        correctAnswer: "reader",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-007",
        skillId: "wordFamilies",
        question: "What is the root word in 'helpful'?",
        stage: "recognise",
        options: [
            "help",
            "ful",
            "helper",
            "fully"
        ],

        explanation:
            "'Helpful' is made from the root word 'help' and the suffix '-ful'.",

        difficulty: 1,
        correctAnswer: "help",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-008",
        skillId: "wordFamilies",
        question: "What do words in the same word family share?",
        stage: "recognise",
        options: [
            "The same root word",
            "The same first letter",
            "The same number of letters",
            "The same ending"
        ],

        explanation:
            "Words in a word family all come from the same root word.",

        difficulty: 1,
        correctAnswer: "The same root word",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-009",
        skillId: "wordFamilies",
        question: "Which word belongs to the word family of 'farm'?",
        stage: "recognise",
        options: [
            "farmer",
            "garden",
            "tractor",
            "field"
        ],

        explanation:
            "'Farmer' comes from the root word 'farm'.",

        difficulty: 1,
        correctAnswer: "farmer",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-010",
        skillId: "wordFamilies",
        question: "Which word belongs to the word family of 'kind'?",
        stage: "recognise",
        options: [
            "kindness",
            "friend",
            "happy",
            "gentle"
        ],

        explanation:
            "'Kindness' is formed from the root word 'kind'.",

        difficulty: 1,
        correctAnswer: "kindness",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-011",
        skillId: "wordFamilies",
        question: "Which word does NOT belong to the word family of 'play'?",
        stage: "recognise",
        options: [
            "player",
            "playful",
            "replay",
            "game"
        ],

        explanation:
            "'Game' is related in meaning but does not share the root word 'play'.",

        difficulty: 2,
        correctAnswer: "game",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-012",
        skillId: "wordFamilies",
        question: "Which word belongs to the same family as 'careful'?",
        stage: "recognise",
        options: [
            "careless",
            "care",
            "carefully",
            "All of these"
        ],

        explanation:
            "'Care', 'careful', 'carefully' and 'careless' all share the same root word.",

        difficulty: 2,
        correctAnswer: "All of these",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-013",
        skillId: "wordFamilies",
        question: "Complete the word family: help, helper, helpful, ______.",
        stage: "recognise",
        options: [
            "helpless",
            "helped",
            "helping",
            "All of these"
        ],

        explanation:
            "All of these words belong to the 'help' word family because they share the same root.",

        difficulty: 2,
        correctAnswer: "All of these",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-014",
        skillId: "wordFamilies",
        question: "Which word belongs to the word family of 'teach'?",
        stage: "recognise",
        options: [
            "teacher",
            "teaching",
            "taught",
            "All of these"
        ],

        explanation:
            "All these words are part of the 'teach' word family.",

        difficulty: 2,
        correctAnswer: "All of these",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-015",
        skillId: "wordFamilies",
        question: "The root word in 'carefully' is:",
        stage: "recognise",
        options: [
            "care",
            "careful",
            "fully",
            "carely"
        ],

        explanation:
            "The root word is 'care'. The suffixes '-ful' and '-ly' have been added.",

        difficulty: 2,
        correctAnswer: "care",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-016",
        skillId: "wordFamilies",
        question: "Which word family does 'reader' belong to?",
        stage: "recognise",
        options: [
            "read",
            "write",
            "book",
            "story"
        ],

        explanation:
            "'Reader' comes from the root word 'read'.",

        difficulty: 2,
        correctAnswer: "read",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-017",
        skillId: "wordFamilies",
        question: "Why do words in the same family look similar?",
        stage: "recognise",
        options: [
            "They share the same root word",
            "They rhyme",
            "They all end with '-ing'",
            "They all begin with the same letter"
        ],

        explanation:
            "Words in a word family share the same root, so they often look and sound similar.",

        difficulty: 2,
        correctAnswer: "They share the same root word",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-018",
        skillId: "wordFamilies",
        question: "Which set is a word family?",
        stage: "recognise",
        options: [
            "kind, kindly, kindness, unkind",
            "cat, dog, rabbit, fish",
            "red, blue, green, yellow",
            "run, chair, happy, pencil"
        ],

        explanation:
            "All four words are built from the root word 'kind'.",

        difficulty: 2,
        correctAnswer: "kind, kindly, kindness, unkind",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-019",
        skillId: "wordFamilies",
        question: "Which word is built from the root word 'play'?",
        stage: "recognise",
        options: [
            "playground",
            "football",
            "ball",
            "match"
        ],

        explanation:
            "'Playground' contains the root word 'play'.",

        difficulty: 2,
        correctAnswer: "playground",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    },

    {
        id: "eng-wf-020",
        skillId: "wordFamilies",
        question: "Why is learning word families useful?",
        stage: "recognise",
        options: [
            "It helps us understand and spell related words.",
            "It helps us count faster.",
            "It helps us write longer sentences.",
            "It helps us remember punctuation."
        ],

        explanation:
            "Knowing a root word helps you recognise, understand and spell many related words.",

        difficulty: 2,
        correctAnswer: "It helps us understand and spell related words.",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "word-families"]
    }

    ]

};