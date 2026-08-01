import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const suffixesLy: SkillContent = {

    skillId: "suffixesLy",

    title: "The Suffix -ly",

    description:
        "Learn how adding the suffix '-ly' changes many adjectives into adverbs that describe how something happens.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-ly-001",
        skillId: "suffixesLy",
        question: "What does the suffix '-ly' often turn an adjective into?",
        stage: "recognise",
        options: [
            "An adverb",
            "A noun",
            "A verb",
            "A pronoun"
        ],

        explanation:
            "Adding '-ly' often changes an adjective into an adverb that tells us how something happens.",

        difficulty: 1,
        correctAnswer: "An adverb",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-002",
        skillId: "suffixesLy",
        question: "Which word is made by adding '-ly' to 'quick'?",
        stage: "recognise",
        options: [
            "quickly",
            "quicker",
            "quickest",
            "quickness"
        ],

        explanation:
            "'Quickly' tells us how someone does something.",

        difficulty: 1,
        correctAnswer: "quickly",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-003",
        skillId: "suffixesLy",
        question: "Which word is made by adding '-ly' to 'slow'?",
        stage: "recognise",
        options: [
            "slowly",
            "slower",
            "slowest",
            "slowness"
        ],

        explanation:
            "'Slowly' describes how an action happens.",

        difficulty: 1,
        correctAnswer: "slowly",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-004",
        skillId: "suffixesLy",
        question: "Which word is spelled correctly?",
        stage: "recognise",
        options: [
            "carefully",
            "carefuly",
            "carefulley",
            "carefullly"
        ],

        explanation:
            "'Carefully' is formed by adding '-ly' to 'careful'.",

        difficulty: 1,
        correctAnswer: "carefully",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-005",
        skillId: "suffixesLy",
        question: "Which word means 'in a happy way'?",
        stage: "recognise",
        options: [
            "happily",
            "happy",
            "happier",
            "happiness"
        ],

        explanation:
            "'Happily' describes doing something in a happy way.",

        difficulty: 1,
        correctAnswer: "happily",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-006",
        skillId: "suffixesLy",
        question: "Which word means 'in a loud way'?",
        stage: "recognise",
        options: [
            "loudly",
            "loud",
            "louder",
            "loudness"
        ],

        explanation:
            "'Loudly' describes how a sound is made.",

        difficulty: 1,
        correctAnswer: "loudly",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-007",
        skillId: "suffixesLy",
        question: "Which sentence uses an '-ly' word correctly?",
        stage: "recognise",
        options: [
            "The rabbit ran quickly.",
            "The rabbit ran quick.",
            "The rabbit ran quickest.",
            "The rabbit ran quickness."
        ],

        explanation:
            "'Quickly' tells us how the rabbit ran.",

        difficulty: 1,
        correctAnswer: "The rabbit ran quickly.",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-008",
        skillId: "suffixesLy",
        question: "Which word is formed from 'kind'?",
        stage: "recognise",
        options: [
            "kindly",
            "kindness",
            "kinder",
            "kindest"
        ],

        explanation:
            "'Kindly' means in a kind way.",

        difficulty: 1,
        correctAnswer: "kindly",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-009",
        skillId: "suffixesLy",
        question: "Which word ends with '-ly'?",
        stage: "recognise",
        options: [
            "softly",
            "soft",
            "softer",
            "softest"
        ],

        explanation:
            "'Softly' is an adverb ending in '-ly'.",

        difficulty: 1,
        correctAnswer: "softly",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-010",
        skillId: "suffixesLy",
        question: "What do many '-ly' words describe?",
        stage: "recognise",
        options: [
            "How something happens",
            "Who someone is",
            "Where something is",
            "How many there are"
        ],

        explanation:
            "Many adverbs ending in '-ly' describe how an action happens.",

        difficulty: 1,
        correctAnswer: "How something happens",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-011",
        skillId: "suffixesLy",
        question: "Complete the sentence: 'The baby slept ______.'",
        stage: "recognise",
        options: [
            "peacefully",
            "peaceful",
            "peace",
            "peaceness"
        ],

        explanation:
            "'Peacefully' tells us how the baby slept.",

        difficulty: 2,
        correctAnswer: "peacefully",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-012",
        skillId: "suffixesLy",
        question: "Complete the sentence: 'Please listen ______.'",
        stage: "recognise",
        options: [
            "carefully",
            "careful",
            "care",
            "carefulness"
        ],

        explanation:
            "'Carefully' explains how you should listen.",

        difficulty: 2,
        correctAnswer: "carefully",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-013",
        skillId: "suffixesLy",
        question: "Which sentence is correct?",
        stage: "recognise",
        options: [
            "The tortoise walked slowly.",
            "The tortoise walked slow.",
            "The tortoise walked slower.",
            "The tortoise walked slowness."
        ],

        explanation:
            "'Slowly' is the correct adverb.",

        difficulty: 2,
        correctAnswer: "The tortoise walked slowly.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-014",
        skillId: "suffixesLy",
        question: "Which word tells us how the girl smiled?",
        stage: "recognise",
        options: [
            "happily",
            "happy",
            "happiness",
            "happier"
        ],

        explanation:
            "'Happily' tells us how she smiled.",

        difficulty: 2,
        correctAnswer: "happily",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-015",
        skillId: "suffixesLy",
        question: "Which sentence uses an '-ly' word correctly?",
        stage: "recognise",
        options: [
            "The class worked quietly.",
            "The class worked quiet.",
            "The class worked quieter.",
            "The class worked quietness."
        ],

        explanation:
            "'Quietly' describes how the class worked.",

        difficulty: 2,
        correctAnswer: "The class worked quietly.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-016",
        skillId: "suffixesLy",
        question: "Which word is formed by adding '-ly' to 'brave'?",
        stage: "recognise",
        options: [
            "bravely",
            "braveness",
            "braver",
            "bravest"
        ],

        explanation:
            "'Bravely' means in a brave way.",

        difficulty: 2,
        correctAnswer: "bravely",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-017",
        skillId: "suffixesLy",
        question: "Which sentence uses the correct spelling?",
        stage: "recognise",
        options: [
            "The children played happily together.",
            "The children played happyly together.",
            "The children played happilly together.",
            "The children played happly together."
        ],

        explanation:
            "When adding '-ly' to 'happy', the 'y' changes to 'i' to make 'happily'.",

        difficulty: 2,
        correctAnswer: "The children played happily together.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-018",
        skillId: "suffixesLy",
        question: "Which sentence uses an adverb ending in '-ly'?",
        stage: "recognise",
        options: [
            "The puppy barked loudly.",
            "The puppy barked loud.",
            "The puppy barked louder.",
            "The puppy barked loudness."
        ],

        explanation:
            "'Loudly' describes how the puppy barked.",

        difficulty: 2,
        correctAnswer: "The puppy barked loudly.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-019",
        skillId: "suffixesLy",
        question: "Why do writers use many '-ly' words?",
        stage: "recognise",
        options: [
            "To describe how actions happen",
            "To ask questions",
            "To name people",
            "To join sentences"
        ],

        explanation:
            "Many '-ly' words are adverbs that describe actions.",

        difficulty: 2,
        correctAnswer: "To describe how actions happen",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    },

    {
        id: "eng-ly-020",
        skillId: "suffixesLy",
        question: "Which sentence contains two correctly spelled '-ly' words?",
        stage: "recognise",
        options: [
            "The birds sang beautifully and loudly.",
            "The birds sang beautifuly and loudly.",
            "The birds sang beautifully and loud.",
            "The birds sang beautiful and loudly."
        ],

        explanation:
            "'Beautifully' and 'loudly' are both correctly spelled adverbs ending in '-ly'.",

        difficulty: 2,
        correctAnswer: "The birds sang beautifully and loudly.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "suffixes", "ly"]
    }

    ]

};


export default suffixesLy;

export {

    suffixesLy

};
