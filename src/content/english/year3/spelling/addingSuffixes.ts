import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const addingSuffixes: SkillContent = {

    skillId: "addingSuffixes",

    title: "Adding Suffixes",

    description:
        "Learn how to add common suffixes such as -ing, -ed, -er and -est to root words.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-suf-001",
        skillId: "addingSuffixes",
        question: "Which word is made by adding '-ing' to 'jump'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "jumping",
            "jumped",
            "jumper",
            "jumpest"
        ],

        explanation:
            "Adding '-ing' to 'jump' makes 'jumping'.",

        difficulty: 1,
        correctAnswer: "jumping",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-002",
        skillId: "addingSuffixes",
        question: "Which word is made by adding '-ed' to 'play'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "played",
            "playing",
            "player",
            "playest"
        ],

        explanation:
            "'Played' tells us the action happened in the past.",

        difficulty: 1,
        correctAnswer: "played",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-003",
        skillId: "addingSuffixes",
        question: "Which word means 'more tall'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "taller",
            "tallest",
            "talling",
            "talled"
        ],

        explanation:
            "Add '-er' when comparing two things.",

        difficulty: 1,
        correctAnswer: "taller",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-004",
        skillId: "addingSuffixes",
        question: "Which word means 'the most small'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "smallest",
            "smaller",
            "smalled",
            "smalling"
        ],

        explanation:
            "Add '-est' when something is the most.",

        difficulty: 1,
        correctAnswer: "smallest",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-005",
        skillId: "addingSuffixes",
        question: "Which word is correct?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "helping",
            "helpingg",
            "helpinged",
            "helpping"
        ],

        explanation:
            "'Helping' is formed by adding '-ing' to 'help'.",

        difficulty: 1,
        correctAnswer: "helping",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-006",
        skillId: "addingSuffixes",
        question: "Which word is correct?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "looked",
            "lookinged",
            "lookerest",
            "lookeded"
        ],

        explanation:
            "'Looked' is made by adding '-ed'.",

        difficulty: 1,
        correctAnswer: "looked",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-007",
        skillId: "addingSuffixes",
        question: "Which word is made by adding '-er' to 'fast'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "faster",
            "fastest",
            "fasting",
            "fasted"
        ],

        explanation:
            "'Faster' compares two people or things.",

        difficulty: 1,
        correctAnswer: "faster",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-008",
        skillId: "addingSuffixes",
        question: "Which word is made by adding '-est' to 'long'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "longest",
            "longer",
            "longing",
            "longed"
        ],

        explanation:
            "'Longest' means the most long.",

        difficulty: 1,
        correctAnswer: "longest",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-009",
        skillId: "addingSuffixes",
        question: "Which suffix tells us an action is happening now?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "-ing",
            "-ed",
            "-er",
            "-est"
        ],

        explanation:
            "The suffix '-ing' often describes an action happening now.",

        difficulty: 1,
        correctAnswer: "-ing",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-010",
        skillId: "addingSuffixes",
        question: "Which suffix often shows an action happened in the past?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "-ed",
            "-ing",
            "-er",
            "-est"
        ],

        explanation:
            "Many past tense verbs end in '-ed'.",

        difficulty: 1,
        correctAnswer: "-ed",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-011",
        skillId: "addingSuffixes",
        question: "Complete the sentence: 'The rabbit is ______ across the field.'",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "jumping",
            "jumped",
            "jumper",
            "jumpest"
        ],

        explanation:
            "'Jumping' describes an action happening now.",

        difficulty: 2,
        correctAnswer: "jumping",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-012",
        skillId: "addingSuffixes",
        question: "Complete the sentence: 'Yesterday we ______ football.'",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "played",
            "playing",
            "player",
            "playest"
        ],

        explanation:
            "'Played' shows the action happened in the past.",

        difficulty: 2,
        correctAnswer: "played",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-013",
        skillId: "addingSuffixes",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "Sam is helping his mum.",
            "Sam is helped his mum.",
            "Sam is helper his mum.",
            "Sam is helpest his mum."
        ],

        explanation:
            "'Helping' is the correct present participle.",

        difficulty: 2,
        correctAnswer: "Sam is helping his mum.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-014",
        skillId: "addingSuffixes",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "The blue whale is the largest animal.",
            "The blue whale is the larger animal.",
            "The blue whale is the largeing animal.",
            "The blue whale is the larged animal."
        ],

        explanation:
            "'Largest' compares one thing with all the others.",

        difficulty: 2,
        correctAnswer: "The blue whale is the largest animal.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-015",
        skillId: "addingSuffixes",
        question: "Which word correctly adds '-ing' to 'smile'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "smiling",
            "smileing",
            "smileding",
            "smiler"
        ],

        explanation:
            "When a root word ends with a silent 'e', we usually drop the 'e' before adding '-ing'.",

        difficulty: 2,
        correctAnswer: "smiling",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "drop-e"]
    },

    {
        id: "eng-suf-016",
        skillId: "addingSuffixes",
        question: "Which word correctly adds '-ed' to 'dance'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "danced",
            "danceed",
            "dancing",
            "dancer"
        ],

        explanation:
            "Words ending in 'e' usually just add 'd' to make the past tense.",

        difficulty: 2,
        correctAnswer: "danced",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ending-e"]
    },

    {
        id: "eng-suf-017",
        skillId: "addingSuffixes",
        question: "Which word correctly adds '-ing' to 'make'?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "making",
            "makeing",
            "maked",
            "maker"
        ],

        explanation:
            "Drop the silent 'e' before adding '-ing'.",

        difficulty: 2,
        correctAnswer: "making",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "drop-e"]
    },

    {
        id: "eng-suf-018",
        skillId: "addingSuffixes",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "Ella smiled at her friend.",
            "Ella smiled at her friend.",
            "Ella smileing at her friend.",
            "Ella smilesed at her friend."
        ],

        explanation:
            "'Smiled' is formed by adding 'd' because 'smile' ends in 'e'.",

        difficulty: 2,
        correctAnswer: "Ella smiled at her friend.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-019",
        skillId: "addingSuffixes",
        question: "Which word compares two runners?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "faster",
            "fastest",
            "fasting",
            "fasted"
        ],

        explanation:
            "Use '-er' when comparing two people or things.",

        difficulty: 2,
        correctAnswer: "faster",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes"]
    },

    {
        id: "eng-suf-020",
        skillId: "addingSuffixes",
        question: "Which sentence contains a correctly spelled suffix word?",
        stage: "recognise",
        hint: "Think about how the ending changes the root word.",
        options: [
            "The children were making a sandcastle.",
            "The children were makeing a sandcastle.",
            "The children were maked a sandcastle.",
            "The children were maker a sandcastle."
        ],

        explanation:
            "'Making' is correctly formed by dropping the final 'e' before adding '-ing'.",

        difficulty: 2,
        correctAnswer: "The children were making a sandcastle.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "drop-e"]
    }

    ]

};


export default addingSuffixes;

export {

    addingSuffixes

};