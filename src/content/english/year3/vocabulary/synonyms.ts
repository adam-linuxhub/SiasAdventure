import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const synonyms: SkillContent = {

    skillId: "synonyms",

    title: "Synonyms",

    description:
        "Learn about synonyms. Synonyms are words that have the same or very similar meanings.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-syn-001",
        skillId: "synonyms",
        question: "Which word is a synonym for 'big'?",
        stage: "recognise",
        options: [
            "large",
            "tiny",
            "short",
            "slow"
        ],

        explanation:
            "'Big' and 'large' have similar meanings, so they are synonyms.",

        difficulty: 1,
        correctAnswer: "large",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-002",
        skillId: "synonyms",
        question: "Which word is a synonym for 'happy'?",
        stage: "recognise",
        options: [
            "glad",
            "angry",
            "sad",
            "worried"
        ],

        explanation:
            "'Happy' and 'glad' have similar meanings.",

        difficulty: 1,
        correctAnswer: "glad",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-003",
        skillId: "synonyms",
        question: "Which word is a synonym for 'small'?",
        stage: "recognise",
        options: [
            "tiny",
            "huge",
            "wide",
            "tall"
        ],

        explanation:
            "'Small' and 'tiny' mean almost the same thing.",

        difficulty: 1,
        correctAnswer: "tiny",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-004",
        skillId: "synonyms",
        question: "Which word is a synonym for 'quick'?",
        stage: "recognise",
        options: [
            "fast",
            "slow",
            "late",
            "quiet"
        ],

        explanation:
            "'Quick' and 'fast' have similar meanings.",

        difficulty: 1,
        correctAnswer: "fast",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-005",
        skillId: "synonyms",
        question: "Which word is a synonym for 'begin'?",
        stage: "recognise",
        options: [
            "start",
            "stop",
            "finish",
            "rest"
        ],

        explanation:
            "'Begin' and 'start' mean the same thing.",

        difficulty: 1,
        correctAnswer: "start",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-006",
        skillId: "synonyms",
        question: "Which word is a synonym for 'finish'?",
        stage: "recognise",
        options: [
            "end",
            "begin",
            "open",
            "build"
        ],

        explanation:
            "'Finish' and 'end' have similar meanings.",

        difficulty: 1,
        correctAnswer: "end",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-007",
        skillId: "synonyms",
        question: "Which word is a synonym for 'smart'?",
        stage: "recognise",
        options: [
            "clever",
            "lazy",
            "slow",
            "noisy"
        ],

        explanation:
            "'Smart' and 'clever' have similar meanings.",

        difficulty: 1,
        correctAnswer: "clever",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-008",
        skillId: "synonyms",
        question: "Which word is a synonym for 'look'?",
        stage: "recognise",
        options: [
            "see",
            "hear",
            "touch",
            "smell"
        ],

        explanation:
            "'Look' and 'see' can have similar meanings in many situations.",

        difficulty: 1,
        correctAnswer: "see",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-009",
        skillId: "synonyms",
        question: "Which word is a synonym for 'shout'?",
        stage: "recognise",
        options: [
            "yell",
            "whisper",
            "listen",
            "laugh"
        ],

        explanation:
            "'Shout' and 'yell' both mean to speak very loudly.",

        difficulty: 1,
        correctAnswer: "yell",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-010",
        skillId: "synonyms",
        question: "What are synonyms?",
        stage: "recognise",
        options: [
            "Words with the same or similar meanings",
            "Words with opposite meanings",
            "Words that rhyme",
            "Words with silent letters"
        ],

        explanation:
            "Synonyms are words that have the same or nearly the same meaning.",

        difficulty: 1,
        correctAnswer: "Words with the same or similar meanings",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-011",
        skillId: "synonyms",
        question: "Choose the best synonym for 'cold'.",
        stage: "recognise",
        options: [
            "chilly",
            "hot",
            "warm",
            "boiling"
        ],

        explanation:
            "'Cold' and 'chilly' have similar meanings.",

        difficulty: 2,
        correctAnswer: "chilly",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-012",
        skillId: "synonyms",
        question: "Choose the best synonym for 'beautiful'.",
        stage: "recognise",
        options: [
            "pretty",
            "ugly",
            "dirty",
            "old"
        ],

        explanation:
            "'Beautiful' and 'pretty' have similar meanings.",

        difficulty: 2,
        correctAnswer: "pretty",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-013",
        skillId: "synonyms",
        question: "Complete the sentence: 'The rabbit was _____.'",
        stage: "recognise",
        options: [
            "quick",
            "fast",
            "slow",
            "late"
        ],

        explanation:
            "'Fast' is a synonym for 'quick' and fits the sentence well.",

        difficulty: 2,
        correctAnswer: "fast",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-014",
        skillId: "synonyms",
        question: "Which pair of words are synonyms?",
        stage: "recognise",
        options: [
            "happy and glad",
            "big and tiny",
            "hot and cold",
            "up and down"
        ],

        explanation:
            "'Happy' and 'glad' have similar meanings.",

        difficulty: 2,
        correctAnswer: "happy and glad",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-015",
        skillId: "synonyms",
        question: "Which pair of words are synonyms?",
        stage: "recognise",
        options: [
            "start and begin",
            "open and close",
            "fast and slow",
            "day and night"
        ],

        explanation:
            "'Start' and 'begin' mean the same thing.",

        difficulty: 2,
        correctAnswer: "start and begin",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-016",
        skillId: "synonyms",
        question: "Which word could replace 'large' without changing the meaning?",
        stage: "recognise",
        options: [
            "big",
            "small",
            "short",
            "tiny"
        ],

        explanation:
            "'Big' is a synonym for 'large'.",

        difficulty: 2,
        correctAnswer: "big",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-017",
        skillId: "synonyms",
        question: "Which word could replace 'end'?",
        stage: "recognise",
        options: [
            "finish",
            "begin",
            "open",
            "build"
        ],

        explanation:
            "'Finish' is a synonym for 'end'.",

        difficulty: 2,
        correctAnswer: "finish",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-018",
        skillId: "synonyms",
        question: "Choose the best synonym for 'quiet'.",
        stage: "recognise",
        options: [
            "silent",
            "noisy",
            "loud",
            "busy"
        ],

        explanation:
            "'Quiet' and 'silent' have similar meanings.",

        difficulty: 2,
        correctAnswer: "silent",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-019",
        skillId: "synonyms",
        question: "Which sentence uses a synonym correctly?",
        stage: "recognise",
        options: [
            "The large elephant was huge.",
            "The large elephant was tiny.",
            "The large elephant was little.",
            "The large elephant was short."
        ],

        explanation:
            "'Large' and 'huge' have similar meanings.",

        difficulty: 2,
        correctAnswer: "The large elephant was huge.",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    },

    {
        id: "eng-syn-020",
        skillId: "synonyms",
        question: "Why do writers use synonyms?",
        stage: "recognise",
        options: [
            "To make writing more interesting and avoid repeating the same words",
            "To make words longer",
            "To change questions into statements",
            "To add punctuation"
        ],

        explanation:
            "Using synonyms helps writers make their writing more varied and interesting.",

        difficulty: 2,
        correctAnswer: "To make writing more interesting and avoid repeating the same words",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "synonyms"]
    }

    ]

};


export default synonyms;

export {

    synonyms

};
