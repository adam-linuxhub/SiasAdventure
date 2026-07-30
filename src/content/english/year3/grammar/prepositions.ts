import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const prepositions: SkillContent = {

    skillId: "prepositions",

    title: "Prepositions",

    description:
        "Learn to identify prepositions that show where or when something happens.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-prep-001",

        question: "Which word is a preposition?",

        options: [
            "under",
            "cat",
            "run",
            "happy"
        ],

        explanation:
            "'Under' is a preposition because it tells us where something is.",

        difficulty: 1,
        correctAnswer: "under",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-002",

        question: "The ball is ____ the table.",

        options: [
            "under",
            "jump",
            "red",
            "quickly"
        ],

        explanation:
            "'Under' tells us where the ball is in relation to the table.",

        difficulty: 1,
        correctAnswer: "under",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-003",

        question: "Which word is a preposition?",

        options: [
            "behind",
            "dog",
            "walk",
            "green"
        ],

        explanation:
            "'Behind' shows the position of one thing compared with another.",

        difficulty: 1,
        correctAnswer: "behind",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-004",

        question: "The bird is ____ the tree.",

        options: [
            "in",
            "fly",
            "small",
            "nest"
        ],

        explanation:
            "'In' tells us where the bird is.",

        difficulty: 1,
        correctAnswer: "in",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-005",

        question: "Which word is a preposition?",

        options: [
            "between",
            "rabbit",
            "hop",
            "soft"
        ],

        explanation:
            "'Between' describes the position of something.",

        difficulty: 1,
        correctAnswer: "between",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-006",

        question: "The cat sat ____ the chair.",

        options: [
            "on",
            "sit",
            "fluffy",
            "cat"
        ],

        explanation:
            "'On' tells us where the cat sat.",

        difficulty: 1,
        correctAnswer: "on",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-007",

        question: "Which sentence contains a preposition?",

        options: [
            "The toy is inside the box.",
            "The toy is colourful.",
            "The toy rolled.",
            "The toy."
        ],

        explanation:
            "'Inside' is a preposition showing location.",

        difficulty: 1,
        correctAnswer: "The toy is inside the box.",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-008",

        question: "Which word tells where something is?",

        options: [
            "next to",
            "apple",
            "eat",
            "sweet"
        ],

        explanation:
            "'Next to' tells us the position of something.",

        difficulty: 1,
        correctAnswer: "next to",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-009",

        question: "Which word is NOT a preposition?",

        options: [
            "teacher",
            "above",
            "behind",
            "under"
        ],

        explanation:
            "'Teacher' is a noun, not a preposition.",

        difficulty: 1,
        correctAnswer: "teacher",
        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-prep-010",

        question: "Why do we use prepositions?",

        options: [
            "To show where or when something happens",
            "To describe nouns",
            "To replace verbs",
            "To join sentences"
        ],

        explanation:
            "Prepositions show relationships such as place or time.",

        difficulty: 1,
        correctAnswer: "To show where or when something happens",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-011",

        question: "Which word best completes the sentence? 'The shoes are ____ the bed.'",

        options: [
            "under",
            "jump",
            "blue",
            "run"
        ],

        explanation:
            "'Under' correctly shows the position of the shoes.",

        difficulty: 2,
        correctAnswer: "under",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-012",

        question: "Which sentence uses a preposition correctly?",

        options: [
            "The mouse hid behind the sofa.",
            "The mouse behind hid.",
            "Behind mouse sofa.",
            "The mouse hid sofa."
        ],

        explanation:
            "'Behind' correctly shows where the mouse hid.",

        difficulty: 2,
        correctAnswer: "The mouse hid behind the sofa.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-013",

        question: "In the sentence 'The book is on the desk.', which word is the preposition?",

        options: [
            "on",
            "book",
            "desk",
            "is"
        ],

        explanation:
            "'On' shows the relationship between the book and the desk.",

        difficulty: 2,
        correctAnswer: "on",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-014",

        question: "Which word tells when something happens?",

        options: [
            "before",
            "write",
            "story",
            "happy"
        ],

        explanation:
            "'Before' is a preposition that can show time.",

        difficulty: 2,
        correctAnswer: "before",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-015",

        question: "Which sentence contains two prepositions?",

        options: [
            "The cat slept under the table after lunch.",
            "The cat slept.",
            "The sleepy cat.",
            "The cat purred."
        ],

        explanation:
            "'Under' shows place and 'after' shows time.",

        difficulty: 2,
        correctAnswer: "The cat slept under the table after lunch.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-016",

        question: "Which preposition best completes the sentence? 'Stand ____ me.'",

        options: [
            "beside",
            "stand",
            "friendly",
            "child"
        ],

        explanation:
            "'Beside' tells where someone should stand.",

        difficulty: 2,
        correctAnswer: "beside",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-017",

        question: "Which sentence uses a preposition of place?",

        options: [
            "The ball rolled into the goal.",
            "The ball rolled.",
            "The round ball.",
            "The ball bounced."
        ],

        explanation:
            "'Into' shows where the ball moved.",

        difficulty: 2,
        correctAnswer: "The ball rolled into the goal.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-018",

        question: "Which preposition best completes the sentence? 'We arrived ____ lunchtime.'",

        options: [
            "before",
            "lunch",
            "arrived",
            "hungry"
        ],

        explanation:
            "'Before' shows the time relationship.",

        difficulty: 2,
        correctAnswer: "before",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-019",

        question: "Which sentence contains a preposition of time?",

        options: [
            "We will leave after dinner.",
            "We will leave soon.",
            "We left happily.",
            "We ate dinner."
        ],

        explanation:
            "'After' tells us when the action happens.",

        difficulty: 2,
        correctAnswer: "We will leave after dinner.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    },

    {
        id: "eng-prep-020",

        question: "Which sentence uses prepositions correctly?",

        options: [
            "Oliver hid behind the tree before lunch.",
            "Oliver behind hid tree.",
            "Behind Oliver tree.",
            "Oliver tree before."
        ],

        explanation:
            "'Behind' shows place and 'before' shows time.",

        difficulty: 2,
        correctAnswer: "Oliver hid behind the tree before lunch.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "prepositions"]
    }

    ]

};