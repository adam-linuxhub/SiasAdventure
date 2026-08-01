import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const antonyms: SkillContent = {

    skillId: "antonyms",

    title: "Antonyms",

    description:
        "Learn about antonyms. Antonyms are words with opposite meanings.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-ant-001",
        skillId: "antonyms",
        question: "Which word is the opposite of 'hot'?",
        stage: "recognise",
        options: [
            "cold",
            "warm",
            "boiling",
            "dry"
        ],

        explanation:
            "'Cold' is the opposite (antonym) of 'hot'.",

        difficulty: 1,
        correctAnswer: "cold",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-002",
        skillId: "antonyms",
        question: "Which word is the opposite of 'big'?",
        stage: "recognise",
        options: [
            "small",
            "large",
            "wide",
            "tall"
        ],

        explanation:
            "'Small' is the opposite of 'big'.",

        difficulty: 1,
        correctAnswer: "small",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-003",
        skillId: "antonyms",
        question: "Which word is the opposite of 'happy'?",
        stage: "recognise",
        options: [
            "sad",
            "glad",
            "cheerful",
            "excited"
        ],

        explanation:
            "'Sad' is the opposite of 'happy'.",

        difficulty: 1,
        correctAnswer: "sad",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-004",
        skillId: "antonyms",
        question: "Which word is the opposite of 'fast'?",
        stage: "recognise",
        options: [
            "slow",
            "quick",
            "speedy",
            "rapid"
        ],

        explanation:
            "'Slow' is the opposite of 'fast'.",

        difficulty: 1,
        correctAnswer: "slow",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-005",
        skillId: "antonyms",
        question: "Which word is the opposite of 'up'?",
        stage: "recognise",
        options: [
            "down",
            "high",
            "above",
            "over"
        ],

        explanation:
            "'Down' is the opposite of 'up'.",

        difficulty: 1,
        correctAnswer: "down",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-006",
        skillId: "antonyms",
        question: "Which word is the opposite of 'day'?",
        stage: "recognise",
        options: [
            "night",
            "morning",
            "afternoon",
            "today"
        ],

        explanation:
            "'Night' is the opposite of 'day'.",

        difficulty: 1,
        correctAnswer: "night",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-007",
        skillId: "antonyms",
        question: "Which word is the opposite of 'full'?",
        stage: "recognise",
        options: [
            "empty",
            "filled",
            "packed",
            "heavy"
        ],

        explanation:
            "'Empty' is the opposite of 'full'.",

        difficulty: 1,
        correctAnswer: "empty",
        estimatedSeconds: 15,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-008",
        skillId: "antonyms",
        question: "Which word is the opposite of 'young'?",
        stage: "recognise",
        options: [
            "old",
            "new",
            "small",
            "tiny"
        ],

        explanation:
            "'Old' is the opposite of 'young'.",

        difficulty: 1,
        correctAnswer: "old",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-009",
        skillId: "antonyms",
        question: "Which word is the opposite of 'open'?",
        stage: "recognise",
        options: [
            "closed",
            "wide",
            "free",
            "clear"
        ],

        explanation:
            "'Closed' is the opposite of 'open'.",

        difficulty: 1,
        correctAnswer: "closed",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-010",
        skillId: "antonyms",
        question: "What are antonyms?",
        stage: "recognise",
        options: [
            "Words with opposite meanings",
            "Words with the same meaning",
            "Words that rhyme",
            "Words with silent letters"
        ],

        explanation:
            "Antonyms are words that have opposite meanings.",

        difficulty: 1,
        correctAnswer: "Words with opposite meanings",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-011",
        skillId: "antonyms",
        question: "Choose the antonym of 'early'.",
        stage: "recognise",
        options: [
            "late",
            "soon",
            "quick",
            "first"
        ],

        explanation:
            "'Late' is the opposite of 'early'.",

        difficulty: 2,
        correctAnswer: "late",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-012",
        skillId: "antonyms",
        question: "Choose the antonym of 'light' (not heavy).",
        stage: "recognise",
        options: [
            "heavy",
            "bright",
            "shiny",
            "soft"
        ],

        explanation:
            "When 'light' means 'not heavy', its antonym is 'heavy'.",

        difficulty: 2,
        correctAnswer: "heavy",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-013",
        skillId: "antonyms",
        question: "Which pair of words are antonyms?",
        stage: "recognise",
        options: [
            "happy and sad",
            "big and large",
            "quick and fast",
            "begin and start"
        ],

        explanation:
            "'Happy' and 'sad' have opposite meanings.",

        difficulty: 2,
        correctAnswer: "happy and sad",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-014",
        skillId: "antonyms",
        question: "Complete the sentence: 'The bucket was full, but now it is ______.'",
        stage: "recognise",
        options: [
            "empty",
            "full",
            "heavy",
            "wet"
        ],

        explanation:
            "'Empty' is the opposite of 'full'.",

        difficulty: 2,
        correctAnswer: "empty",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-015",
        skillId: "antonyms",
        question: "Which pair of words are antonyms?",
        stage: "recognise",
        options: [
            "up and down",
            "cold and chilly",
            "tiny and small",
            "finish and end"
        ],

        explanation:
            "'Up' and 'down' are opposites.",

        difficulty: 2,
        correctAnswer: "up and down",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-016",
        skillId: "antonyms",
        question: "Which word could replace 'slow' with its opposite?",
        stage: "recognise",
        options: [
            "fast",
            "careful",
            "steady",
            "quiet"
        ],

        explanation:
            "'Fast' is the opposite of 'slow'.",

        difficulty: 2,
        correctAnswer: "fast",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-017",
        skillId: "antonyms",
        question: "Which sentence uses antonyms correctly?",
        stage: "recognise",
        options: [
            "The kitten was small, but the dog was big.",
            "The kitten was small, but the dog was tiny.",
            "The kitten was happy, but the dog was cheerful.",
            "The kitten was quick, but the dog was fast."
        ],

        explanation:
            "'Small' and 'big' are opposite words.",

        difficulty: 2,
        correctAnswer: "The kitten was small, but the dog was big.",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-018",
        skillId: "antonyms",
        question: "Why do writers use antonyms?",
        stage: "recognise",
        options: [
            "To compare opposite ideas",
            "To make words rhyme",
            "To add punctuation",
            "To make words longer"
        ],

        explanation:
            "Antonyms help writers compare things by showing opposites.",

        difficulty: 2,
        correctAnswer: "To compare opposite ideas",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-019",
        skillId: "antonyms",
        question: "Choose the antonym of 'clean'.",
        stage: "recognise",
        options: [
            "dirty",
            "tidy",
            "fresh",
            "bright"
        ],

        explanation:
            "'Dirty' is the opposite of 'clean'.",

        difficulty: 2,
        correctAnswer: "dirty",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    },

    {
        id: "eng-ant-020",
        skillId: "antonyms",
        question: "Which sentence uses antonyms correctly?",
        stage: "recognise",
        options: [
            "The soup was hot, but the ice cream was cold.",
            "The soup was hot, but the tea was warm.",
            "The soup was hot, but the fire was hotter.",
            "The soup was hot, but the sun was bright."
        ],

        explanation:
            "'Hot' and 'cold' are antonyms with opposite meanings.",

        difficulty: 2,
        correctAnswer: "The soup was hot, but the ice cream was cold.",
        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "antonyms"]
    }

    ]

};


export default antonyms;

export {

    antonyms

};
