import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const sentenceTypes: SkillContent = {

    skillId: "sentenceTypes",

    title: "Sentence Types",

    description:
        "Learn to recognise statements, questions, commands and exclamations.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-sent-001",
        skillId: "sentenceTypes",
        question: "Which sentence is a statement?",
        stage: "recognise",
        options: [
            "The sun is shining.",
            "Is the sun shining?",
            "Close the door.",
            "What a sunny day!"
        ],

        explanation:
            "A statement tells us something and ends with a full stop.",

        difficulty: 1,
        correctAnswer: "The sun is shining.",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-002",
        skillId: "sentenceTypes",
        question: "Which sentence is a question?",
        stage: "recognise",
        options: [
            "Where is my book?",
            "My book is on the table.",
            "Pick up the book.",
            "What a great book!"
        ],

        explanation:
            "A question asks something and ends with a question mark.",

        difficulty: 1,
        correctAnswer: "Where is my book?",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-003",
        skillId: "sentenceTypes",
        question: "Which sentence is a command?",
        stage: "recognise",
        options: [
            "Wash your hands.",
            "I washed my hands.",
            "Did you wash your hands?",
            "What clean hands!"
        ],

        explanation:
            "A command tells someone to do something.",

        difficulty: 1,
        correctAnswer: "Wash your hands.",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-004",
        skillId: "sentenceTypes",
        question: "Which sentence is an exclamation?",
        stage: "recognise",
        options: [
            "What a beautiful rainbow!",
            "The rainbow is beautiful.",
            "Can you see the rainbow?",
            "Look at the rainbow."
        ],

        explanation:
            "An exclamation shows strong feeling or excitement.",

        difficulty: 1,
        correctAnswer: "What a beautiful rainbow!",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-005",
        skillId: "sentenceTypes",
        question: "A statement usually ends with a...",
        stage: "recognise",
        options: [
            "full stop",
            "question mark",
            "comma",
            "exclamation mark"
        ],

        explanation:
            "Most statements finish with a full stop.",

        difficulty: 1,
        correctAnswer: "full stop",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-006",
        skillId: "sentenceTypes",
        question: "A question usually ends with a...",
        stage: "recognise",
        options: [
            "question mark",
            "full stop",
            "comma",
            "colon"
        ],

        explanation:
            "Questions end with a question mark.",

        difficulty: 1,
        correctAnswer: "question mark",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-007",
        skillId: "sentenceTypes",
        question: "Which sentence tells someone what to do?",
        stage: "recognise",
        options: [
            "Put your coat away.",
            "Your coat is blue.",
            "Is this your coat?",
            "What a warm coat!"
        ],

        explanation:
            "A command tells someone what to do.",

        difficulty: 1,
        correctAnswer: "Put your coat away.",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-008",
        skillId: "sentenceTypes",
        question: "Which sentence shows excitement?",
        stage: "recognise",
        options: [
            "What an amazing goal!",
            "The goal was amazing.",
            "Who scored the goal?",
            "Kick the ball."
        ],

        explanation:
            "An exclamation shows excitement or strong feelings.",

        difficulty: 1,
        correctAnswer: "What an amazing goal!",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-009",
        skillId: "sentenceTypes",
        question: "Which of these is NOT a question?",
        stage: "recognise",
        options: [
            "I like pizza.",
            "Do you like pizza?",
            "Where is the pizza?",
            "Who ate the pizza?"
        ],

        explanation:
            "'I like pizza.' is a statement, not a question.",

        difficulty: 1,
        correctAnswer: "I like pizza.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-010",
        skillId: "sentenceTypes",
        question: "Which sentence is a statement?",
        stage: "recognise",
        options: [
            "Birds can fly.",
            "Can birds fly?",
            "Watch the birds.",
            "What colourful birds!"
        ],

        explanation:
            "A statement gives information.",

        difficulty: 1,
        correctAnswer: "Birds can fly.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-011",
        skillId: "sentenceTypes",
        question: "Which sentence is a command?",
        stage: "recognise",
        options: [
            "Please tidy your room.",
            "My room is tidy.",
            "Is your room tidy?",
            "What a tidy room!"
        ],

        explanation:
            "A command gives an instruction.",

        difficulty: 2,
        correctAnswer: "Please tidy your room.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-012",
        skillId: "sentenceTypes",
        question: "Which sentence is an exclamation?",
        stage: "recognise",
        options: [
            "How exciting this game is!",
            "This game is exciting.",
            "Is this game exciting?",
            "Play the game."
        ],

        explanation:
            "An exclamation expresses strong emotion.",

        difficulty: 2,
        correctAnswer: "How exciting this game is!",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-013",
        skillId: "sentenceTypes",
        question: "What type of sentence is 'Can you help me?'",
        stage: "recognise",
        options: [
            "Question",
            "Statement",
            "Command",
            "Exclamation"
        ],

        explanation:
            "It asks for information or help, so it is a question.",

        difficulty: 2,
        correctAnswer: "Question",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-014",
        skillId: "sentenceTypes",
        question: "What type of sentence is 'Please be quiet.'?",
        stage: "recognise",
        options: [
            "Command",
            "Statement",
            "Question",
            "Exclamation"
        ],

        explanation:
            "It politely tells someone what to do.",

        difficulty: 2,
        correctAnswer: "Command",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-015",
        skillId: "sentenceTypes",
        question: "What type of sentence is 'The train arrived on time.'?",
        stage: "recognise",
        options: [
            "Statement",
            "Question",
            "Command",
            "Exclamation"
        ],

        explanation:
            "It gives information, so it is a statement.",

        difficulty: 2,
        correctAnswer: "Statement",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-016",
        skillId: "sentenceTypes",
        question: "What type of sentence is 'What a clever idea!'?",
        stage: "recognise",
        options: [
            "Exclamation",
            "Statement",
            "Question",
            "Command"
        ],

        explanation:
            "It expresses strong feeling, making it an exclamation.",

        difficulty: 2,
        correctAnswer: "Exclamation",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-017",
        skillId: "sentenceTypes",
        question: "Which sentence is punctuated correctly as a question?",
        stage: "recognise",
        options: [
            "Have you finished your homework?",
            "Have you finished your homework.",
            "Have you finished your homework!",
            "Have you finished your homework,"
        ],

        explanation:
            "Questions should end with a question mark.",

        difficulty: 2,
        correctAnswer: "Have you finished your homework?",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-018",
        skillId: "sentenceTypes",
        question: "Which sentence is punctuated correctly as an exclamation?",
        stage: "recognise",
        options: [
            "What a fantastic show!",
            "What a fantastic show.",
            "What a fantastic show?",
            "What a fantastic show,"
        ],

        explanation:
            "Exclamations usually end with an exclamation mark.",

        difficulty: 2,
        correctAnswer: "What a fantastic show!",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-019",
        skillId: "sentenceTypes",
        question: "Why do we use different sentence types?",
        stage: "recognise",
        options: [
            "To communicate different meanings and purposes",
            "To make every sentence longer",
            "To avoid using punctuation",
            "To replace nouns"
        ],

        explanation:
            "Different sentence types help us ask, tell, instruct and express feelings clearly.",

        difficulty: 2,
        correctAnswer: "To communicate different meanings and purposes",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    },

    {
        id: "eng-sent-020",
        skillId: "sentenceTypes",
        question: "Which list contains all four sentence types?",
        stage: "recognise",
        options: [
            "Statement, Question, Command, Exclamation",
            "Noun, Verb, Adjective, Adverb",
            "Full Stop, Comma, Colon, Semicolon",
            "Letter, Word, Paragraph, Chapter"
        ],

        explanation:
            "The four main sentence types are statements, questions, commands and exclamations.",

        difficulty: 2,
        correctAnswer: "Statement, Question, Command, Exclamation",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "sentence-types"]
    }

    ]

};

export default sentenceTypes;

export {

    sentenceTypes

};