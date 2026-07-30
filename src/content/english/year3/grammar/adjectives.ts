import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const adjectives: SkillContent = {

    skillId: "adjectives",

    title: "Adjectives",

    description:
        "Learn to identify adjectives, which describe nouns by giving more information about them.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-adj-001",

        question: "Which word is an adjective?",

        options: [
            "happy",
            "dog",
            "run",
            "quickly"
        ],

        answer: 0,

        explanation:
            "'Happy' is an adjective because it describes a noun.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-002",

        question: "Which word describes the noun 'car'?",

        options: [
            "red",
            "drive",
            "garage",
            "carefully"
        ],

        answer: 0,

        explanation:
            "'Red' describes what the car is like, making it an adjective.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-003",

        question: "Which word is an adjective?",

        options: [
            "small",
            "house",
            "jump",
            "slowly"
        ],

        answer: 0,

        explanation:
            "'Small' describes the size of something.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-004",

        question: "Which word tells us what the apple is like?",

        options: [
            "juicy",
            "eat",
            "apple",
            "basket"
        ],

        answer: 0,

        explanation:
            "'Juicy' describes the apple.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-005",

        question: "Which adjective describes a teddy bear?",

        options: [
            "soft",
            "hug",
            "toy",
            "sleep"
        ],

        answer: 0,

        explanation:
            "'Soft' tells us what the teddy bear feels like.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-006",

        question: "Which word is an adjective?",

        options: [
            "tall",
            "tree",
            "grow",
            "forest"
        ],

        answer: 0,

        explanation:
            "'Tall' describes the tree.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-007",

        question: "Which adjective describes the weather?",

        options: [
            "sunny",
            "shine",
            "cloud",
            "outside"
        ],

        answer: 0,

        explanation:
            "'Sunny' describes the weather.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-008",

        question: "Which sentence contains an adjective?",

        options: [
            "The fluffy rabbit hopped.",
            "The rabbit hopped.",
            "Hop quickly.",
            "Rabbits hop."
        ],

        answer: 0,

        explanation:
            "'Fluffy' is an adjective describing the rabbit.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-009",

        question: "Which word is NOT an adjective?",

        options: [
            "swim",
            "cold",
            "bright",
            "round"
        ],

        answer: 0,

        explanation:
            "'Swim' is a verb, not an adjective.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-adj-010",

        question: "Which adjective describes a lion?",

        options: [
            "brave",
            "roar",
            "animal",
            "hunt"
        ],

        answer: 0,

        explanation:
            "'Brave' describes the lion.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-011",

        question: "Which pair contains only adjectives?",

        options: [
            "old, noisy",
            "dog, cat",
            "run, jump",
            "quickly, slowly"
        ],

        answer: 0,

        explanation:
            "'Old' and 'noisy' both describe nouns.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-012",

        question: "Which sentence contains two adjectives?",

        options: [
            "The small brown dog barked.",
            "The dog barked.",
            "Dogs bark loudly.",
            "Run quickly home."
        ],

        answer: 0,

        explanation:
            "'Small' and 'brown' both describe the dog.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-013",

        question: "Which word best completes the sentence? 'The ____ elephant trumpeted.'",

        options: [
            "enormous",
            "trumpeted",
            "elephant",
            "loudly"
        ],

        answer: 0,

        explanation:
            "'Enormous' is an adjective describing the elephant.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-014",

        question: "Which adjective describes how something feels?",

        options: [
            "rough",
            "touch",
            "hand",
            "hold"
        ],

        answer: 0,

        explanation:
            "'Rough' describes texture.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-015",

        question: "In the sentence 'The shiny coin sparkled.', which word is the adjective?",

        options: [
            "shiny",
            "coin",
            "sparkled",
            "the"
        ],

        answer: 0,

        explanation:
            "'Shiny' describes the coin.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-016",

        question: "Which sentence uses an adjective correctly?",

        options: [
            "The hungry fox searched for food.",
            "The fox searched hungry.",
            "Hungry searched fox.",
            "Fox hungry searched."
        ],

        answer: 0,

        explanation:
            "'Hungry' correctly describes the fox.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-017",

        question: "Which adjective best describes snow?",

        options: [
            "white",
            "fall",
            "winter",
            "ice"
        ],

        answer: 0,

        explanation:
            "'White' describes the colour of snow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-018",

        question: "Which sentence contains an adjective describing size?",

        options: [
            "The tiny mouse hid.",
            "The mouse hid.",
            "The mouse ran.",
            "Run after the mouse."
        ],

        answer: 0,

        explanation:
            "'Tiny' describes the size of the mouse.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-019",

        question: "Why do writers use adjectives?",

        options: [
            "To describe nouns in more detail",
            "To replace punctuation",
            "To join sentences together",
            "To show questions"
        ],

        answer: 0,

        explanation:
            "Adjectives make writing more interesting by describing people, places and things.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-020",

        question: "Which sentence uses adjectives correctly?",

        options: [
            "The friendly little puppy wagged its tail.",
            "The puppy friendly wagged.",
            "Friendly wagged puppy.",
            "The wagged puppy little."
        ],

        answer: 0,

        explanation:
            "'Friendly' and 'little' are adjectives describing the puppy.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    }

    ]

};