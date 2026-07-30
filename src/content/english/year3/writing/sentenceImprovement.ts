import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const sentenceImprovement: SkillContent = {

    skillId: "sentenceImprovement",

    title: "Improving Sentences",

    description:
        "Learn how to improve writing by adding detail, choosing stronger words and making sentences more interesting.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-si-001",

        question:
            "Which sentence is more interesting?",

        options: [
            "The enormous dog ran across the field.",
            "The dog ran.",
            "A dog.",
            "The ran dog."
        ],

        explanation:
            "Adding describing words gives the reader more information.",

        difficulty: 1,
        correctAnswer: "The enormous dog ran across the field.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-002",

        question:
            "Improve this sentence:\n\nThe bird flew.",

        options: [
            "The colourful bird flew gracefully through the sky.",
            "The bird.",
            "Bird flew.",
            "The flew bird."
        ],

        explanation:
            "The improved sentence adds detail about the bird and its action.",

        difficulty: 1,
        correctAnswer: "The colourful bird flew gracefully through the sky.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-003",

        question:
            "Which word is a stronger verb than 'went'?",

        options: [
            "raced",
            "was",
            "said",
            "looked"
        ],

        explanation:
            "'Raced' gives a clearer picture than the general word 'went'.",

        difficulty: 1,
        correctAnswer: "raced",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-004",

        question:
            "Improve this sentence:\n\nThe cat sat.",

        options: [
            "The fluffy cat curled up quietly on the soft cushion.",
            "The cat.",
            "The sat cat.",
            "Cat sat."
        ],

        explanation:
            "Adding details helps the reader imagine what is happening.",

        difficulty: 1,
        correctAnswer: "The fluffy cat curled up quietly on the soft cushion.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-005",

        question:
            "Which adjective improves this sentence?\n\nThe house had a door.",

        options: [
            "wooden",
            "went",
            "quickly",
            "jumped"
        ],

        explanation:
            "'Wooden' describes the door and adds detail.",

        difficulty: 1,
        correctAnswer: "wooden",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-006",

        question:
            "Why do writers add detail to sentences?",

        options: [
            "To help readers create a clearer picture",
            "To make writing confusing",
            "To remove meaning",
            "To shorten every sentence"
        ],

        explanation:
            "Details help readers understand and imagine the writing.",

        difficulty: 1,
        correctAnswer: "To help readers create a clearer picture",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-007",

        question:
            "Which sentence uses the strongest verb?",

        options: [
            "The lion roared loudly.",
            "The lion made a sound.",
            "The lion did something.",
            "The lion was there."
        ],

        explanation:
            "'Roared' is more precise and interesting than 'made a sound'.",

        difficulty: 1,
        correctAnswer: "The lion roared loudly.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-008",

        question:
            "Improve this sentence:\n\nThe boy walked.",

        options: [
            "The tired boy slowly walked home after school.",
            "The boy.",
            "Walked boy.",
            "The walked."
        ],

        explanation:
            "The improved sentence explains more about the action.",

        difficulty: 1,
        correctAnswer: "The tired boy slowly walked home after school.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-009",

        question:
            "Which word makes this sentence more descriptive?\n\nThe flower grew.",

        options: [
            "beautiful",
            "grew",
            "the",
            "a"
        ],

        explanation:
            "'Beautiful' describes the flower.",

        difficulty: 1,
        correctAnswer: "beautiful",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-010",

        question:
            "A good writer chooses words that are:",

        options: [
            "Interesting and precise",
            "Always the longest",
            "The same every time",
            "Random"
        ],

        explanation:
            "Precise words make writing clearer and more effective.",

        difficulty: 1,
        correctAnswer: "Interesting and precise",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-011",

        question:
            "Which sentence creates the clearest image?",

        options: [
            "The tiny golden butterfly fluttered gently above the flowers.",
            "The butterfly moved.",
            "The butterfly was there.",
            "Something flew."
        ],

        explanation:
            "Specific details help the reader picture the scene.",

        difficulty: 2,
        correctAnswer: "The tiny golden butterfly fluttered gently above the flowers.",
        estimatedSeconds: 25,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-012",

        question:
            "Replace the weak verb:\n\nThe dog went across the garden.",

        options: [
            "The dog raced across the garden.",
            "The dog was across the garden.",
            "The dog did across the garden.",
            "The dog gardened."
        ],

        explanation:
            "'Raced' is a stronger and more descriptive verb.",

        difficulty: 2,
        correctAnswer: "The dog raced across the garden.",
        estimatedSeconds: 25,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-013",

        question:
            "Which sentence uses an adverb to improve the writing?",

        options: [
            "The girl sang beautifully.",
            "The girl sang.",
            "The girl.",
            "The singing girl."
        ],

        explanation:
            "'Beautifully' explains how the girl sang.",

        difficulty: 2,
        correctAnswer: "The girl sang beautifully.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-014",

        question:
            "Improve this sentence:\n\nThe storm came.",

        options: [
            "The powerful storm crashed across the dark sky.",
            "The storm.",
            "Came storm.",
            "The came."
        ],

        explanation:
            "The improved sentence adds descriptive language.",

        difficulty: 2,
        correctAnswer: "The powerful storm crashed across the dark sky.",
        estimatedSeconds: 25,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-015",

        question:
            "Which word choice is most precise?",

        options: [
            "whispered",
            "talked",
            "said",
            "did"
        ],

        explanation:
            "'Whispered' gives a more exact description of speaking quietly.",

        difficulty: 2,
        correctAnswer: "whispered",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-016",

        question:
            "Why are powerful verbs useful?",

        options: [
            "They make actions clearer for the reader",
            "They remove all details",
            "They make sentences incorrect",
            "They replace punctuation"
        ],

        explanation:
            "Strong verbs help readers understand exactly what happens.",

        difficulty: 2,
        correctAnswer: "They make actions clearer for the reader",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-017",

        question:
            "Which sentence has the most detail?",

        options: [
            "The old wooden ship sailed across the rough sea.",
            "The ship sailed.",
            "The ship moved.",
            "A ship."
        ],

        explanation:
            "The sentence includes adjectives and a stronger description.",

        difficulty: 2,
        correctAnswer: "The old wooden ship sailed across the rough sea.",
        estimatedSeconds: 25,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-018",

        question:
            "What should you check when improving a sentence?",

        options: [
            "Does it make the meaning clearer?",
            "Is every word the same length?",
            "Does it have no punctuation?",
            "Is it as short as possible?"
        ],

        explanation:
            "Good improvements make writing clearer and more interesting.",

        difficulty: 2,
        correctAnswer: "Does it make the meaning clearer?",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-019",

        question:
            "Which sentence is the best improvement?",

        options: [
            "The excited children raced happily towards the playground.",
            "The children.",
            "Children went.",
            "The children did."
        ],

        explanation:
            "The sentence gives detail about who, what and how.",

        difficulty: 2,
        correctAnswer: "The excited children raced happily towards the playground.",
        estimatedSeconds: 25,

        tags: ["english", "writing", "sentence-improvement"]
    },

    {
        id: "eng-si-020",

        question:
            "Good writers improve sentences by:",

        options: [
            "Adding useful details and choosing better words",
            "Adding random words",
            "Removing all verbs",
            "Making every sentence identical"
        ],

        explanation:
            "Improved writing uses precise vocabulary and clear details.",

        difficulty: 2,
        correctAnswer: "Adding useful details and choosing better words",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentence-improvement"]
    }

    ]

};