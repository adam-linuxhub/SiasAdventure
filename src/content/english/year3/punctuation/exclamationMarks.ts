import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const exclamationMarks: SkillContent = {

    skillId: "exclamationMarks",

    title: "Exclamation Marks",

    description:
        "Learn when to use exclamation marks to show strong feelings, excitement or surprise.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-exclaim-001",
        skillId: "exclamationMarks",
        question: "Which punctuation mark is an exclamation mark?",
        stage: "recognise",
        options: [
            "!",
            ".",
            "?",
            ","
        ],

        explanation:
            "An exclamation mark (!) shows strong feelings or excitement.",

        difficulty: 1,
        correctAnswer: "!",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-002",
        skillId: "exclamationMarks",
        question: "Which sentence uses an exclamation mark correctly?",
        stage: "recognise",
        options: [
            "What a beautiful rainbow!",
            "What a beautiful rainbow.",
            "What a beautiful rainbow?",
            "What a beautiful rainbow,"
        ],

        explanation:
            "The sentence shows excitement, so it ends with an exclamation mark.",

        difficulty: 1,
        correctAnswer: "What a beautiful rainbow!",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-003",
        skillId: "exclamationMarks",
        question: "Which sentence shows excitement?",
        stage: "recognise",
        options: [
            "We won the match!",
            "We won the match.",
            "Did we win the match?",
            "We won the match,"
        ],

        explanation:
            "The exclamation mark shows excitement.",

        difficulty: 1,
        correctAnswer: "We won the match!",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-004",
        skillId: "exclamationMarks",
        question: "Which punctuation mark should end this sentence? 'Watch out__'",
        stage: "recognise",
        options: [
            "!",
            ".",
            "?",
            ","
        ],

        explanation:
            "'Watch out!' is an urgent warning, so it needs an exclamation mark.",

        difficulty: 1,
        correctAnswer: "!",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-005",
        skillId: "exclamationMarks",
        question: "Which sentence uses an exclamation mark correctly?",
        stage: "recognise",
        options: [
            "What a clever idea!",
            "What a clever idea.",
            "What a clever idea?",
            "What a clever idea,"
        ],

        explanation:
            "An exclamation mark is used because the sentence expresses strong feeling.",

        difficulty: 1,
        correctAnswer: "What a clever idea!",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-006",
        skillId: "exclamationMarks",
        question: "When should you use an exclamation mark?",
        stage: "recognise",
        options: [
            "To show excitement or strong feelings",
            "At the end of every sentence",
            "Only after names",
            "To ask a question"
        ],

        explanation:
            "Exclamation marks are used for excitement, surprise or strong emotion.",

        difficulty: 1,
        correctAnswer: "To show excitement or strong feelings",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-007",
        skillId: "exclamationMarks",
        question: "Which sentence is an exclamation?",
        stage: "recognise",
        options: [
            "How amazing!",
            "How are you?",
            "I am amazing.",
            "Be amazing."
        ],

        explanation:
            "'How amazing!' expresses strong feeling.",

        difficulty: 1,
        correctAnswer: "How amazing!",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-008",
        skillId: "exclamationMarks",
        question: "Which sentence ends correctly?",
        stage: "recognise",
        options: [
            "Hooray!",
            "Hooray.",
            "Hooray?",
            "Hooray,"
        ],

        explanation:
            "'Hooray!' is an excited exclamation.",

        difficulty: 1,
        correctAnswer: "Hooray!",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-009",
        skillId: "exclamationMarks",
        question: "Which sentence does NOT need an exclamation mark?",
        stage: "recognise",
        options: [
            "I have a red bike.",
            "What a surprise!",
            "Stop!",
            "Fantastic!"
        ],

        explanation:
            "This is an ordinary statement, so it ends with a full stop.",

        difficulty: 1,
        correctAnswer: "I have a red bike.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-010",
        skillId: "exclamationMarks",
        question: "What does an exclamation mark help show?",
        stage: "recognise",
        options: [
            "Strong feelings",
            "A question",
            "A list",
            "A new paragraph"
        ],

        explanation:
            "Exclamation marks show excitement, surprise, fear or other strong emotions.",

        difficulty: 1,
        correctAnswer: "Strong feelings",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-011",
        skillId: "exclamationMarks",
        question: "Which sentence needs an exclamation mark?",
        stage: "recognise",
        options: [
            "Be careful",
            "Where are you?",
            "The bus is late.",
            "My bag is blue."
        ],

        explanation:
            "'Be careful!' is an urgent warning.",

        difficulty: 2,
        correctAnswer: "Be careful",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-012",
        skillId: "exclamationMarks",
        question: "Which sentence is punctuated correctly?",
        stage: "recognise",
        options: [
            "What a fantastic goal!",
            "What a fantastic goal?",
            "What a fantastic goal.",
            "What a fantastic goal,"
        ],

        explanation:
            "The sentence expresses excitement.",

        difficulty: 2,
        correctAnswer: "What a fantastic goal!",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-013",
        skillId: "exclamationMarks",
        question: "Why do writers use exclamation marks?",
        stage: "recognise",
        options: [
            "To show excitement, surprise or strong emotion",
            "To join two sentences",
            "To show possession",
            "To separate items in a list"
        ],

        explanation:
            "Exclamation marks make strong feelings clear to the reader.",

        difficulty: 2,
        correctAnswer: "To show excitement, surprise or strong emotion",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-014",
        skillId: "exclamationMarks",
        question: "Which sentence expresses surprise?",
        stage: "recognise",
        options: [
            "I can't believe it!",
            "I can't believe it.",
            "Can you believe it?",
            "Believe it."
        ],

        explanation:
            "The exclamation mark shows surprise.",

        difficulty: 2,
        correctAnswer: "I can't believe it!",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-015",
        skillId: "exclamationMarks",
        question: "Which sentence uses an exclamation mark correctly?",
        stage: "recognise",
        options: [
            "What a huge dinosaur!",
            "What a huge dinosaur?",
            "What a huge dinosaur.",
            "What a huge dinosaur,"
        ],

        explanation:
            "The sentence expresses amazement.",

        difficulty: 2,
        correctAnswer: "What a huge dinosaur!",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-016",
        skillId: "exclamationMarks",
        question: "Which punctuation mark belongs at the end of 'Help__'?",
        stage: "recognise",
        options: [
            "!",
            ".",
            "?",
            ","
        ],

        explanation:
            "'Help!' is a cry for help, so it needs an exclamation mark.",

        difficulty: 2,
        correctAnswer: "!",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-017",
        skillId: "exclamationMarks",
        question: "Which sentence shows joy?",
        stage: "recognise",
        options: [
            "We are going on holiday!",
            "We are going on holiday.",
            "Are we going on holiday?",
            "Pack your suitcase."
        ],

        explanation:
            "The exclamation mark shows happiness and excitement.",

        difficulty: 2,
        correctAnswer: "We are going on holiday!",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-018",
        skillId: "exclamationMarks",
        question: "Which sentence is NOT an exclamation?",
        stage: "recognise",
        options: [
            "The flowers are blooming.",
            "What beautiful flowers!",
            "Amazing!",
            "Look out!"
        ],

        explanation:
            "'The flowers are blooming.' is a simple statement.",

        difficulty: 2,
        correctAnswer: "The flowers are blooming.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-019",
        skillId: "exclamationMarks",
        question: "What feeling might 'Fantastic!' show?",
        stage: "recognise",
        options: [
            "Excitement",
            "A question",
            "Confusion",
            "A list"
        ],

        explanation:
            "'Fantastic!' expresses excitement or delight.",

        difficulty: 2,
        correctAnswer: "Excitement",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    },

    {
        id: "eng-exclaim-020",
        skillId: "exclamationMarks",
        question: "Which group of sentences is punctuated correctly?",
        stage: "recognise",
        options: [
            "Well done! What an exciting race!",
            "Well done. What an exciting race?",
            "Well done? What an exciting race.",
            "Well done, What an exciting race!"
        ],

        explanation:
            "Both sentences express strong feelings and correctly end with exclamation marks.",

        difficulty: 2,
        correctAnswer: "Well done! What an exciting race!",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "exclamation-marks"]
    }

    ]

};