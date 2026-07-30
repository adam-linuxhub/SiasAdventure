import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const sentenceTypes: SkillContent = {

    skillId: "sentenceTypes",

    title: "Sentence Types",

    description:
        "Learn to recognise statements, questions, commands and exclamations.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-sent-001",

        question: "Which sentence is a statement?",

        options: [
            "The sun is shining.",
            "Is the sun shining?",
            "Close the door.",
            "What a sunny day!"
        ],

        answer: 0,

        explanation:
            "A statement tells us something and ends with a full stop.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-002",

        question: "Which sentence is a question?",

        options: [
            "Where is my book?",
            "My book is on the table.",
            "Pick up the book.",
            "What a great book!"
        ],

        answer: 0,

        explanation:
            "A question asks something and ends with a question mark.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-003",

        question: "Which sentence is a command?",

        options: [
            "Wash your hands.",
            "I washed my hands.",
            "Did you wash your hands?",
            "What clean hands!"
        ],

        answer: 0,

        explanation:
            "A command tells someone to do something.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-004",

        question: "Which sentence is an exclamation?",

        options: [
            "What a beautiful rainbow!",
            "The rainbow is beautiful.",
            "Can you see the rainbow?",
            "Look at the rainbow."
        ],

        answer: 0,

        explanation:
            "An exclamation shows strong feeling or excitement.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-005",

        question: "A statement usually ends with a...",

        options: [
            "full stop",
            "question mark",
            "comma",
            "exclamation mark"
        ],

        answer: 0,

        explanation:
            "Most statements finish with a full stop.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-006",

        question: "A question usually ends with a...",

        options: [
            "question mark",
            "full stop",
            "comma",
            "colon"
        ],

        answer: 0,

        explanation:
            "Questions end with a question mark.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-007",

        question: "Which sentence tells someone what to do?",

        options: [
            "Put your coat away.",
            "Your coat is blue.",
            "Is this your coat?",
            "What a warm coat!"
        ],

        answer: 0,

        explanation:
            "A command tells someone what to do.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-008",

        question: "Which sentence shows excitement?",

        options: [
            "What an amazing goal!",
            "The goal was amazing.",
            "Who scored the goal?",
            "Kick the ball."
        ],

        answer: 0,

        explanation:
            "An exclamation shows excitement or strong feelings.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-009",

        question: "Which of these is NOT a question?",

        options: [
            "I like pizza.",
            "Do you like pizza?",
            "Where is the pizza?",
            "Who ate the pizza?"
        ],

        answer: 0,

        explanation:
            "'I like pizza.' is a statement, not a question.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-010",

        question: "Which sentence is a statement?",

        options: [
            "Birds can fly.",
            "Can birds fly?",
            "Watch the birds.",
            "What colourful birds!"
        ],

        answer: 0,

        explanation:
            "A statement gives information.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-011",

        question: "Which sentence is a command?",

        options: [
            "Please tidy your room.",
            "My room is tidy.",
            "Is your room tidy?",
            "What a tidy room!"
        ],

        answer: 0,

        explanation:
            "A command gives an instruction.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-012",

        question: "Which sentence is an exclamation?",

        options: [
            "How exciting this game is!",
            "This game is exciting.",
            "Is this game exciting?",
            "Play the game."
        ],

        answer: 0,

        explanation:
            "An exclamation expresses strong emotion.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-013",

        question: "What type of sentence is 'Can you help me?'",

        options: [
            "Question",
            "Statement",
            "Command",
            "Exclamation"
        ],

        answer: 0,

        explanation:
            "It asks for information or help, so it is a question.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-014",

        question: "What type of sentence is 'Please be quiet.'?",

        options: [
            "Command",
            "Statement",
            "Question",
            "Exclamation"
        ],

        answer: 0,

        explanation:
            "It politely tells someone what to do.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-015",

        question: "What type of sentence is 'The train arrived on time.'?",

        options: [
            "Statement",
            "Question",
            "Command",
            "Exclamation"
        ],

        answer: 0,

        explanation:
            "It gives information, so it is a statement.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-016",

        question: "What type of sentence is 'What a clever idea!'?",

        options: [
            "Exclamation",
            "Statement",
            "Question",
            "Command"
        ],

        answer: 0,

        explanation:
            "It expresses strong feeling, making it an exclamation.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-017",

        question: "Which sentence is punctuated correctly as a question?",

        options: [
            "Have you finished your homework?",
            "Have you finished your homework.",
            "Have you finished your homework!",
            "Have you finished your homework,"
        ],

        answer: 0,

        explanation:
            "Questions should end with a question mark.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-018",

        question: "Which sentence is punctuated correctly as an exclamation?",

        options: [
            "What a fantastic show!",
            "What a fantastic show.",
            "What a fantastic show?",
            "What a fantastic show,"
        ],

        answer: 0,

        explanation:
            "Exclamations usually end with an exclamation mark.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-019",

        question: "Why do we use different sentence types?",

        options: [
            "To communicate different meanings and purposes",
            "To make every sentence longer",
            "To avoid using punctuation",
            "To replace nouns"
        ],

        answer: 0,

        explanation:
            "Different sentence types help us ask, tell, instruct and express feelings clearly.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-020",

        question: "Which list contains all four sentence types?",

        options: [
            "Statement, Question, Command, Exclamation",
            "Noun, Verb, Adjective, Adverb",
            "Full Stop, Comma, Colon, Semicolon",
            "Letter, Word, Paragraph, Chapter"
        ],

        answer: 0,

        explanation:
            "The four main sentence types are statements, questions, commands and exclamations.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    }

    ]

};