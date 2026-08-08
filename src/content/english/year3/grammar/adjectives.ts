import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

 const adjectives: SkillContent = {

    skillId: "adjectives",

    title: "Adjectives",

    description:
        "Learn to identify adjectives, which describe nouns by giving more information about them.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-adj-001",
        skillId: "adjectives",
        question: "Which word is an adjective?",
        hint: "Look for the word that describes something.",
        stage: "recognise",
        options: [
            "happy",
            "dog",
            "run",
            "quickly"
        ],

        explanation:
            "'Happy' is an adjective because it describes a noun.",

        difficulty: 1,
        correctAnswer: "happy",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-002",
        skillId: "adjectives",
        question: "Which word describes the noun 'car'?",
        hint: "Choose the word that tells you what the car is like.",
        stage: "recognise",
        options: [
            "red",
            "drive",
            "garage",
            "carefully"
        ],

        explanation:
            "'Red' describes what the car is like, making it an adjective.",

        difficulty: 1,
        correctAnswer: "red",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-003",
        skillId: "adjectives",
        question: "Which word is an adjective?",
        hint: "An adjective describes a noun.",
        stage: "recognise",
        options: [
            "small",
            "house",
            "jump",
            "slowly"
        ],

        explanation:
            "'Small' describes the size of something.",

        difficulty: 1,
        correctAnswer: "small",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-004",
        skillId: "adjectives",
        question: "Which word tells us what the apple is like?",
        hint: "Which word gives more information about the apple?",
        stage: "recognise",
        options: [
            "juicy",
            "eat",
            "apple",
            "basket"
        ],

        explanation:
            "'Juicy' describes the apple.",

        difficulty: 1,
        correctAnswer: "juicy",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-005",
        skillId: "adjectives",
        question: "Which adjective describes a teddy bear?",
        hint: "Think about how a teddy bear feels.",
        stage: "recognise",
        options: [
            "soft",
            "hug",
            "toy",
            "sleep"
        ],

        explanation:
            "'Soft' tells us what the teddy bear feels like.",

        difficulty: 1,
        correctAnswer: "soft",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-006",
        skillId: "adjectives",
        question: "Which word is an adjective?",
        hint: "Find the word that describes the tree.",
        stage: "recognise",
        options: [
            "tall",
            "tree",
            "grow",
            "forest"
        ],

        explanation:
            "'Tall' describes the tree.",

        difficulty: 1,
        correctAnswer: "tall",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-007",
        skillId: "adjectives",
        question: "Which adjective describes the weather?",
        hint: "Which word tells you what the weather is like?",
        stage: "recognise",
        options: [
            "sunny",
            "shine",
            "cloud",
            "outside"
        ],

        explanation:
            "'Sunny' describes the weather.",

        difficulty: 1,
        correctAnswer: "sunny",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-008",
        skillId: "adjectives",
        question: "Which sentence contains an adjective?",
        hint: "Look for the word that describes the rabbit.",
        stage: "recognise",
        options: [
            "The fluffy rabbit hopped.",
            "The rabbit hopped.",
            "Hop quickly.",
            "Rabbits hop."
        ],

        explanation:
            "'Fluffy' is an adjective describing the rabbit.",

        difficulty: 1,
        correctAnswer: "The fluffy rabbit hopped.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-009",
        skillId: "adjectives",
        question: "Which word is NOT an adjective?",
        hint: "Adjectives describe; verbs show actions.",
        stage: "recognise",
        options: [
            "swim",
            "cold",
            "bright",
            "round"
        ],

        explanation:
            "'Swim' is a verb, not an adjective.",

        difficulty: 1,
        correctAnswer: "swim",
        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-adj-010",
        skillId: "adjectives",
        question: "Which adjective describes a lion?",
        hint: "Choose the word that describes the lion.",
        stage: "recognise",
        options: [
            "brave",
            "roar",
            "animal",
            "hunt"
        ],

        explanation:
            "'Brave' describes the lion.",

        difficulty: 1,
        correctAnswer: "brave",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-011",
        skillId: "adjectives",
        question: "Which pair contains only adjectives?",
        hint: "Both words should describe nouns.",
        stage: "recognise",
        options: [
            "old, noisy",
            "dog, cat",
            "run, jump",
            "quickly, slowly"
        ],

        explanation:
            "'Old' and 'noisy' both describe nouns.",

        difficulty: 2,
        correctAnswer: "old, noisy",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-012",
        skillId: "adjectives",
        question: "Which sentence contains two adjectives?",
        hint: "Count how many describing words are in the sentence.",
        stage: "recognise",
        options: [
            "The small brown dog barked.",
            "The dog barked.",
            "Dogs bark loudly.",
            "Run quickly home."
        ],

        explanation:
            "'Small' and 'brown' both describe the dog.",

        difficulty: 2,
        correctAnswer: "The small brown dog barked.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-013",
        skillId: "adjectives",
        question: "Which word best completes the sentence? 'The ____ elephant trumpeted.'",
        hint: "The missing word should describe the elephant.",
        stage: "recognise",
        options: [
            "enormous",
            "trumpeted",
            "elephant",
            "loudly"
        ],

        explanation:
            "'Enormous' is an adjective describing the elephant.",

        difficulty: 2,
        correctAnswer: "enormous",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-014",
        skillId: "adjectives",
        question: "Which adjective describes how something feels?",
        hint: "Think about words that describe texture.",
        stage: "recognise",
        options: [
            "rough",
            "touch",
            "hand",
            "hold"
        ],

        explanation:
            "'Rough' describes texture.",

        difficulty: 2,
        correctAnswer: "rough",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-015",
        skillId: "adjectives",
        question: "In the sentence 'The shiny coin sparkled.', which word is the adjective?",
        hint: "Which word tells you more about the coin?",
        stage: "recognise",
        options: [
            "shiny",
            "coin",
            "sparkled",
            "the"
        ],

        explanation:
            "'Shiny' describes the coin.",

        difficulty: 2,
        correctAnswer: "shiny",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-016",
        skillId: "adjectives",
        question: "Which sentence uses an adjective correctly?",
        hint: "An adjective should describe the noun.",
        stage: "recognise",
        options: [
            "The hungry fox searched for food.",
            "The fox searched hungry.",
            "Hungry searched fox.",
            "Fox hungry searched."
        ],

        explanation:
            "'Hungry' correctly describes the fox.",

        difficulty: 2,
        correctAnswer: "The hungry fox searched for food.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-017",
        skillId: "adjectives",
        question: "Which adjective best describes snow?",
        hint: "Think about the colour of snow.",
        stage: "recognise",
        options: [
            "white",
            "fall",
            "winter",
            "ice"
        ],

        explanation:
            "'White' describes the colour of snow.",

        difficulty: 2,
        correctAnswer: "white",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-018",
        skillId: "adjectives",
        question: "Which sentence contains an adjective describing size?",
        hint: "Look for the word that tells you the mouse's size.",
        stage: "recognise",
        options: [
            "The tiny mouse hid.",
            "The mouse hid.",
            "The mouse ran.",
            "Run after the mouse."
        ],

        explanation:
            "'Tiny' describes the size of the mouse.",

        difficulty: 2,
        correctAnswer: "The tiny mouse hid.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-019",
        skillId: "adjectives",
        question: "Why do writers use adjectives?",
        hint: "What job do adjectives do in a sentence?",
        stage: "recognise",
        options: [
            "To describe nouns in more detail",
            "To replace punctuation",
            "To join sentences together",
            "To show questions"
        ],

        explanation:
            "Adjectives make writing more interesting by describing people, places and things.",

        difficulty: 2,
        correctAnswer: "To describe nouns in more detail",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    },

    {
        id: "eng-adj-020",
        skillId: "adjectives",
        question: "Which sentence uses adjectives correctly?",
        hint: "See which sentence uses describing words before the noun.",
        stage: "recognise",
        options: [
            "The friendly little puppy wagged its tail.",
            "The puppy friendly wagged.",
            "Friendly wagged puppy.",
            "The wagged puppy little."
        ],

        explanation:
            "'Friendly' and 'little' are adjectives describing the puppy.",

        difficulty: 2,
        correctAnswer: "The friendly little puppy wagged its tail.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adjectives"]
    }

    ]

};

export default adjectives;

export {

    adjectives

};