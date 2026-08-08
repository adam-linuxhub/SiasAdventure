import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const adverbs: SkillContent = {

    skillId: "adverbs",

    title: "Adverbs",

    description:
        "Learn to identify adverbs, which describe how, when or where actions happen.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-adverbs-001",
        skillId: "adverbs",
        question: "Which word is an adverb?",
        stage: "recognise",
        hint: "Think about which word describes how something happens.",
        options: [
            "quickly",
            "dog",
            "run",
            "happy"
        ],

        explanation:
            "'Quickly' tells us how someone does something, so it is an adverb.",

        difficulty: 1,
        correctAnswer: "quickly",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-002",
        skillId: "adverbs",
        question: "Which word tells how someone walked?",
        stage: "recognise",
        hint: "Look for the word that tells how the walking happened.",
        options: [
            "slowly",
            "walk",
            "path",
            "boots"
        ],

        explanation:
            "'Slowly' tells us how the person walked.",

        difficulty: 1,
        correctAnswer: "slowly",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-003",
        skillId: "adverbs",
        question: "Which word is an adverb?",
        stage: "recognise",
        hint: "Adverbs often describe actions and many end in '-ly'.",
        options: [
            "carefully",
            "careful",
            "table",
            "jump"
        ],

        explanation:
            "'Carefully' tells us how an action is done.",

        difficulty: 1,
        correctAnswer: "carefully",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-004",
        skillId: "adverbs",
        question: "Which word tells how the baby slept?",
        stage: "recognise",
        hint: "Which word explains how the baby slept?",
        options: [
            "peacefully",
            "baby",
            "cot",
            "sleep"
        ],

        explanation:
            "'Peacefully' tells us how the baby slept.",

        difficulty: 1,
        correctAnswer: "peacefully",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-005",
        skillId: "adverbs",
        question: "Which word is an adverb?",
        stage: "recognise",
        hint: "Which word tells how someone sings?",
        options: [
            "loudly",
            "loud",
            "music",
            "sing"
        ],

        explanation:
            "'Loudly' describes how someone sings.",

        difficulty: 1,
        correctAnswer: "loudly",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-006",
        skillId: "adverbs",
        question: "Which word tells how the bird sang?",
        stage: "recognise",
        hint: "Find the word that describes how the bird sang.",
        options: [
            "beautifully",
            "bird",
            "song",
            "tree"
        ],

        explanation:
            "'Beautifully' tells us how the bird sang.",

        difficulty: 1,
        correctAnswer: "beautifully",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-007",
        skillId: "adverbs",
        question: "Which sentence contains an adverb?",
        stage: "recognise",
        hint: "Look for the sentence that tells how the rabbit hopped.",
        options: [
            "The rabbit hopped quickly.",
            "The rabbit hopped.",
            "The fluffy rabbit.",
            "A small rabbit."
        ],

        explanation:
            "'Quickly' is the adverb because it describes how the rabbit hopped.",

        difficulty: 1,
        correctAnswer: "The rabbit hopped quickly.",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-008",
        skillId: "adverbs",
        question: "Which word is an adverb?",
        stage: "recognise",
        hint: "Which word tells when something happened?",
        options: [
            "yesterday",
            "calendar",
            "day",
            "clock"
        ],

        explanation:
            "'Yesterday' can be used as an adverb because it tells us when something happened.",

        difficulty: 1,
        correctAnswer: "yesterday",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-009",
        skillId: "adverbs",
        question: "Which word is NOT an adverb?",
        stage: "recognise",
        hint: "Three words describe actions. One names a thing.",
        options: [
            "horse",
            "carefully",
            "quietly",
            "slowly"
        ],

        explanation:
            "'Horse' is a noun because it names an animal.",

        difficulty: 1,
        correctAnswer: "horse",
        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-adverbs-010",
        skillId: "adverbs",
        question: "Which word describes how someone smiled?",
        stage: "recognise",
        hint: "Find the word that tells how someone smiled.",
        options: [
            "cheerfully",
            "smile",
            "friend",
            "happy"
        ],

        explanation:
            "'Cheerfully' tells us how the person smiled.",

        difficulty: 1,
        correctAnswer: "cheerfully",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-011",
        skillId: "adverbs",
        question: "Which pair contains only adverbs?",
        stage: "recognise",
        hint: "Choose the pair where both words describe actions.",
        options: [
            "carefully, quietly",
            "dog, cat",
            "run, jump",
            "happy, sad"
        ],

        explanation:
            "'Carefully' and 'quietly' both describe actions.",

        difficulty: 2,
        correctAnswer: "carefully, quietly",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-012",
        skillId: "adverbs",
        question: "Which sentence contains two adverbs?",
        stage: "recognise",
        hint: "Look for one word telling how and another telling when.",
        options: [
            "Ella sang beautifully yesterday.",
            "Ella sang beautifully.",
            "Ella sang.",
            "Beautiful Ella sang."
        ],

        explanation:
            "'Beautifully' tells how Ella sang and 'yesterday' tells when she sang.",

        difficulty: 2,
        correctAnswer: "Ella sang beautifully yesterday.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-013",
        skillId: "adverbs",
        question: "Which word best completes the sentence? 'Please speak ____.'",
        stage: "recognise",
        hint: "The missing word should describe the verb 'speak'.",
        options: [
            "clearly",
            "clear",
            "voice",
            "speaker"
        ],

        explanation:
            "'Clearly' describes how someone should speak.",

        difficulty: 2,
        correctAnswer: "clearly",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-014",
        skillId: "adverbs",
        question: "In the sentence 'Tom carefully painted the fence.', which word is the adverb?",
        stage: "recognise",
        hint: "Ask yourself which word describes the painting.",
        options: [
            "carefully",
            "Tom",
            "painted",
            "fence"
        ],

        explanation:
            "'Carefully' describes how Tom painted.",

        difficulty: 2,
        correctAnswer: "carefully",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-015",
        skillId: "adverbs",
        question: "Which sentence uses an adverb correctly?",
        stage: "recognise",
        hint: "The adverb should describe how the puppy barked.",
        options: [
            "The puppy barked loudly.",
            "The loudly puppy barked.",
            "Loudly puppy barked.",
            "The puppy loudly."
        ],

        explanation:
            "'Loudly' correctly describes how the puppy barked.",

        difficulty: 2,
        correctAnswer: "The puppy barked loudly.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-016",
        skillId: "adverbs",
        question: "Which word tells when something happened?",
        stage: "recognise",
        hint: "Which word tells the time of the action?",
        options: [
            "today",
            "clock",
            "morning",
            "school"
        ],

        explanation:
            "'Today' tells us when something happened, so it is an adverb.",

        difficulty: 2,
        correctAnswer: "today",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-017",
        skillId: "adverbs",
        question: "Why do writers use adverbs?",
        stage: "recognise",
        hint: "Think about what extra information adverbs give about actions.",
        options: [
            "To give more information about verbs",
            "To replace nouns",
            "To join sentences",
            "To show speech"
        ],

        explanation:
            "Adverbs describe how, when or where actions happen.",

        difficulty: 2,
        correctAnswer: "To give more information about verbs",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-018",
        skillId: "adverbs",
        question: "Which word best completes the sentence? 'The children played ____.'",
        stage: "recognise",
        hint: "The missing word should tell how the children played.",
        options: [
            "happily",
            "happy",
            "children",
            "games"
        ],

        explanation:
            "'Happily' tells us how the children played.",

        difficulty: 2,
        correctAnswer: "happily",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-019",
        skillId: "adverbs",
        question: "Which sentence contains an adverb of time?",
        stage: "recognise",
        hint: "An adverb of time tells you when something happens.",
        options: [
            "We will visit Grandma tomorrow.",
            "Grandma baked cakes.",
            "The warm cakes.",
            "A happy family."
        ],

        explanation:
            "'Tomorrow' tells us when the visit will happen.",

        difficulty: 2,
        correctAnswer: "We will visit Grandma tomorrow.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    },

    {
        id: "eng-adverbs-020",
        skillId: "adverbs",
        question: "Which sentence uses adverbs correctly?",
        stage: "recognise",
        hint: "Look for words that tell both how and when.",
        options: [
            "Oliver quietly opened the door yesterday.",
            "Oliver quiet opened the door.",
            "Quietly Oliver door.",
            "Oliver opened quiet door."
        ],

        explanation:
            "'Quietly' tells how Oliver opened the door, and 'yesterday' tells when it happened.",

        difficulty: 2,
        correctAnswer: "Oliver quietly opened the door yesterday.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "adverbs"]
    }

    ]

};

export default adverbs;

export {

    adverbs

};