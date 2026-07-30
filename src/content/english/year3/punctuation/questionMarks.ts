import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const questionMarks: SkillContent = {

    skillId: "questionMarks",

    title: "Question Marks",

    description:
        "Learn when to use question marks at the end of sentences that ask questions.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-question-001",
        skillId: "questionMarks",
        question: "Which punctuation mark is a question mark?",
        stage: "recognise",
        options: [
            "?",
            ".",
            "!",
            ","
        ],

        explanation:
            "A question mark (?) is used at the end of a question.",

        difficulty: 1,
        correctAnswer: "?",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-002",
        skillId: "questionMarks",
        question: "Which sentence is a question?",
        stage: "recognise",
        options: [
            "Where is my coat?",
            "My coat is blue.",
            "Put on your coat.",
            "What a warm coat!"
        ],

        explanation:
            "Questions ask for information and end with a question mark.",

        difficulty: 1,
        correctAnswer: "Where is my coat?",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-003",
        skillId: "questionMarks",
        question: "Which punctuation mark should end this sentence? 'How old are you__'",
        stage: "recognise",
        options: [
            "?",
            ".",
            "!",
            ","
        ],

        explanation:
            "The sentence asks a question, so it needs a question mark.",

        difficulty: 1,
        correctAnswer: "?",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-004",
        skillId: "questionMarks",
        question: "Which sentence is punctuated correctly?",
        stage: "recognise",
        options: [
            "Can you swim?",
            "Can you swim.",
            "Can you swim!",
            "Can you swim,"
        ],

        explanation:
            "Questions end with a question mark.",

        difficulty: 1,
        correctAnswer: "Can you swim?",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-005",
        skillId: "questionMarks",
        question: "Which sentence asks a question?",
        stage: "recognise",
        options: [
            "What is your favourite colour?",
            "My favourite colour is blue.",
            "Paint the picture blue.",
            "What a lovely picture!"
        ],

        explanation:
            "This sentence asks for information.",

        difficulty: 1,
        correctAnswer: "What is your favourite colour?",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-006",
        skillId: "questionMarks",
        question: "When should you use a question mark?",
        stage: "recognise",
        options: [
            "At the end of a question",
            "At the end of every sentence",
            "After every noun",
            "Before a capital letter"
        ],

        explanation:
            "Question marks are only used at the end of questions.",

        difficulty: 1,
        correctAnswer: "At the end of a question",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-007",
        skillId: "questionMarks",
        question: "Which sentence is a question?",
        stage: "recognise",
        options: [
            "Have you finished your homework?",
            "I finished my homework.",
            "Finish your homework.",
            "What excellent homework!"
        ],

        explanation:
            "The sentence asks whether something has happened.",

        difficulty: 1,
        correctAnswer: "Have you finished your homework?",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-008",
        skillId: "questionMarks",
        question: "Which sentence ends correctly?",
        stage: "recognise",
        options: [
            "Do birds fly?",
            "Do birds fly.",
            "Do birds fly!",
            "Do birds fly,"
        ],

        explanation:
            "Questions should always end with a question mark.",

        difficulty: 1,
        correctAnswer: "Do birds fly?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-009",
        skillId: "questionMarks",
        question: "Which sentence is NOT a question?",
        stage: "recognise",
        options: [
            "The birds are flying.",
            "Where are the birds?",
            "Are the birds flying?",
            "Why are the birds flying?"
        ],

        explanation:
            "'The birds are flying.' is a statement, not a question.",

        difficulty: 1,
        correctAnswer: "The birds are flying.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-010",
        skillId: "questionMarks",
        question: "Choose the correctly punctuated sentence.",
        stage: "recognise",
        options: [
            "Who is at the door?",
            "Who is at the door.",
            "Who is at the door!",
            "Who is at the door,"
        ],

        explanation:
            "Questions end with a question mark.",

        difficulty: 1,
        correctAnswer: "Who is at the door?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-011",
        skillId: "questionMarks",
        question: "Which sentence needs a question mark?",
        stage: "recognise",
        options: [
            "What time does school start",
            "School starts at nine.",
            "Please sit down.",
            "What a busy day!"
        ],

        explanation:
            "The sentence asks a question and should end with a question mark.",

        difficulty: 2,
        correctAnswer: "What time does school start",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-012",
        skillId: "questionMarks",
        question: "Which sentence is punctuated correctly?",
        stage: "recognise",
        options: [
            "Why did the baby cry?",
            "Why did the baby cry.",
            "Why did the baby cry!",
            "Why did the baby cry,"
        ],

        explanation:
            "The sentence asks 'why', so it ends with a question mark.",

        difficulty: 2,
        correctAnswer: "Why did the baby cry?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-013",
        skillId: "questionMarks",
        question: "Which word often begins a question?",
        stage: "recognise",
        options: [
            "Where",
            "Because",
            "Quickly",
            "Blue"
        ],

        explanation:
            "Words such as who, what, where, when, why and how often begin questions.",

        difficulty: 2,
        correctAnswer: "Where",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-014",
        skillId: "questionMarks",
        question: "Why do we use question marks?",
        stage: "recognise",
        options: [
            "To show that a sentence asks something",
            "To end every sentence",
            "To show excitement",
            "To separate words"
        ],

        explanation:
            "Question marks tell readers that information is being asked for.",

        difficulty: 2,
        correctAnswer: "To show that a sentence asks something",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-015",
        skillId: "questionMarks",
        question: "Which sentence asks for information?",
        stage: "recognise",
        options: [
            "Which bus goes to the museum?",
            "The bus goes to the museum.",
            "Catch the bus.",
            "What a fast bus!"
        ],

        explanation:
            "The sentence asks which bus to take.",

        difficulty: 2,
        correctAnswer: "Which bus goes to the museum?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-016",
        skillId: "questionMarks",
        question: "Choose the correctly punctuated question.",
        stage: "recognise",
        options: [
            "Can penguins swim?",
            "Can penguins swim.",
            "Can penguins swim!",
            "Can penguins swim,"
        ],

        explanation:
            "Questions always end with a question mark.",

        difficulty: 2,
        correctAnswer: "Can penguins swim?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-017",
        skillId: "questionMarks",
        question: "Which punctuation mark belongs at the end of 'When is your birthday__'?",
        stage: "recognise",
        options: [
            "?",
            ".",
            "!",
            ","
        ],

        explanation:
            "The sentence asks a question.",

        difficulty: 2,
        correctAnswer: "?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-018",
        skillId: "questionMarks",
        question: "What usually happens if a sentence begins with 'Who'?",
        stage: "recognise",
        options: [
            "It is usually a question.",
            "It is always a command.",
            "It is always an exclamation.",
            "It is always a statement."
        ],

        explanation:
            "'Who' often begins a question asking about a person.",

        difficulty: 2,
        correctAnswer: "It is usually a question.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-019",
        skillId: "questionMarks",
        question: "Which pair are both questions?",
        stage: "recognise",
        options: [
            "Where are we going? Who is coming?",
            "We are going home. Who is coming?",
            "Come here. Where are we going?",
            "What a great day! We are going home."
        ],

        explanation:
            "Both sentences ask for information and end with question marks.",

        difficulty: 2,
        correctAnswer: "Where are we going? Who is coming?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    },

    {
        id: "eng-question-020",
        skillId: "questionMarks",
        question: "What does a question mark help the reader understand?",
        stage: "recognise",
        options: [
            "The writer is asking something.",
            "The writer is shouting.",
            "The sentence has a spelling mistake.",
            "The sentence is a command."
        ],

        explanation:
            "A question mark tells the reader that the sentence is asking for information.",

        difficulty: 2,
        correctAnswer: "The writer is asking something.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "question-marks"]
    }

    ]

};