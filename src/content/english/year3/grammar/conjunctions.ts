import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const conjunctions: SkillContent = {

    skillId: "conjunctions",

    title: "Conjunctions",

    description:
        "Learn how conjunctions join words, phrases and sentences together.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-conj-001",
        skillId: "conjunctions",
        question: "Which word is a conjunction?",
        stage: "recognise",
        options: [
            "and",
            "dog",
            "run",
            "happy"
        ],

        explanation:
            "'And' is a conjunction because it joins words or ideas together.",

        difficulty: 1,
        correctAnswer: "and",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-002",
        skillId: "conjunctions",
        question: "Which conjunction joins two choices?",
        stage: "recognise",
        options: [
            "or",
            "cat",
            "quickly",
            "blue"
        ],

        explanation:
            "'Or' is used when choosing between two or more options.",

        difficulty: 1,
        correctAnswer: "or",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-003",
        skillId: "conjunctions",
        question: "Which conjunction shows a reason?",
        stage: "recognise",
        options: [
            "because",
            "jump",
            "garden",
            "green"
        ],

        explanation:
            "'Because' explains why something happened.",

        difficulty: 1,
        correctAnswer: "because",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-004",
        skillId: "conjunctions",
        question: "Which word joins two ideas together?",
        stage: "recognise",
        options: [
            "and",
            "rabbit",
            "sleep",
            "soft"
        ],

        explanation:
            "Conjunctions join words, phrases or clauses.",

        difficulty: 1,
        correctAnswer: "and",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-005",
        skillId: "conjunctions",
        question: "Choose the correct conjunction: 'Tea ____ coffee?'",
        stage: "recognise",
        options: [
            "or",
            "because",
            "and",
            "but"
        ],

        explanation:
            "'Or' is used when offering a choice.",

        difficulty: 1,
        correctAnswer: "or",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-006",
        skillId: "conjunctions",
        question: "Which word is a conjunction?",
        stage: "recognise",
        options: [
            "but",
            "book",
            "walk",
            "small"
        ],

        explanation:
            "'But' joins ideas that are different or opposite.",

        difficulty: 1,
        correctAnswer: "but",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-007",
        skillId: "conjunctions",
        question: "Which sentence uses 'and' correctly?",
        stage: "recognise",
        options: [
            "Sam and Mia played.",
            "Sam and played.",
            "And Sam played.",
            "Played and."
        ],

        explanation:
            "'And' joins the two names together.",

        difficulty: 1,
        correctAnswer: "Sam and Mia played.",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-008",
        skillId: "conjunctions",
        question: "Which sentence uses 'but' correctly?",
        stage: "recognise",
        options: [
            "It was raining, but we still played.",
            "It was but raining.",
            "But it raining.",
            "It but was."
        ],

        explanation:
            "'But' joins two contrasting ideas.",

        difficulty: 1,
        correctAnswer: "It was raining, but we still played.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-009",
        skillId: "conjunctions",
        question: "Which word is NOT a conjunction?",
        stage: "recognise",
        options: [
            "house",
            "and",
            "or",
            "because"
        ],

        explanation:
            "'House' is a noun, not a conjunction.",

        difficulty: 1,
        correctAnswer: "house",
        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-conj-010",
        skillId: "conjunctions",
        question: "Why do we use conjunctions?",
        stage: "recognise",
        options: [
            "To join words and ideas",
            "To describe nouns",
            "To replace verbs",
            "To end sentences"
        ],

        explanation:
            "Conjunctions help connect ideas and make sentences flow smoothly.",

        difficulty: 1,
        correctAnswer: "To join words and ideas",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-011",
        skillId: "conjunctions",
        question: "Choose the best conjunction: 'I stayed inside ____ it was raining.'",
        stage: "recognise",
        options: [
            "because",
            "and",
            "or",
            "but"
        ],

        explanation:
            "'Because' explains the reason for staying inside.",

        difficulty: 2,
        correctAnswer: "because",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-012",
        skillId: "conjunctions",
        question: "Choose the best conjunction: 'Would you like an apple ____ a banana?'",
        stage: "recognise",
        options: [
            "or",
            "because",
            "and",
            "but"
        ],

        explanation:
            "'Or' introduces a choice.",

        difficulty: 2,
        correctAnswer: "or",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-013",
        skillId: "conjunctions",
        question: "Choose the best conjunction: 'The dog barked ____ wagged its tail.'",
        stage: "recognise",
        options: [
            "and",
            "because",
            "or",
            "but"
        ],

        explanation:
            "'And' joins two actions together.",

        difficulty: 2,
        correctAnswer: "and",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-014",
        skillId: "conjunctions",
        question: "Choose the best conjunction: 'The soup was hot, ____ I still ate it.'",
        stage: "recognise",
        options: [
            "but",
            "because",
            "and",
            "or"
        ],

        explanation:
            "'But' shows a contrast between the two ideas.",

        difficulty: 2,
        correctAnswer: "but",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-015",
        skillId: "conjunctions",
        question: "Which sentence uses a conjunction correctly?",
        stage: "recognise",
        options: [
            "Ella smiled because she was happy.",
            "Ella because smiled.",
            "Because Ella happy.",
            "Ella was because."
        ],

        explanation:
            "'Because' correctly introduces the reason.",

        difficulty: 2,
        correctAnswer: "Ella smiled because she was happy.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-016",
        skillId: "conjunctions",
        question: "Which sentence contains two conjunctions?",
        stage: "recognise",
        options: [
            "Ben and Ava played because it was sunny.",
            "Ben played outside.",
            "The sunny park.",
            "Happy children laughed."
        ],

        explanation:
            "'And' joins the names and 'because' explains the reason.",

        difficulty: 2,
        correctAnswer: "Ben and Ava played because it was sunny.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-017",
        skillId: "conjunctions",
        question: "Which conjunction joins opposite ideas?",
        stage: "recognise",
        options: [
            "but",
            "and",
            "because",
            "or"
        ],

        explanation:
            "'But' connects ideas that contrast with each other.",

        difficulty: 2,
        correctAnswer: "but",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-018",
        skillId: "conjunctions",
        question: "Which conjunction joins similar ideas?",
        stage: "recognise",
        options: [
            "and",
            "but",
            "because",
            "or"
        ],

        explanation:
            "'And' joins ideas that go together.",

        difficulty: 2,
        correctAnswer: "and",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-019",
        skillId: "conjunctions",
        question: "Which conjunction gives a choice?",
        stage: "recognise",
        options: [
            "or",
            "and",
            "because",
            "but"
        ],

        explanation:
            "'Or' is used when choosing between alternatives.",

        difficulty: 2,
        correctAnswer: "or",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    },

    {
        id: "eng-conj-020",
        skillId: "conjunctions",
        question: "Which sentence uses conjunctions correctly?",
        stage: "recognise",
        options: [
            "Oliver finished his homework and then played because he had time.",
            "Oliver homework because.",
            "And Oliver because played.",
            "Oliver played but because."
        ],

        explanation:
            "'And' joins two actions, while 'because' explains the reason.",

        difficulty: 2,
        correctAnswer: "Oliver finished his homework and then played because he had time.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "conjunctions"]
    }

    ]

};

export default conjunctions;

export {

    conjunctions

};