import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const readingFluency: SkillContent = {

    skillId: "readingFluency",

    title: "Reading Fluency",

    description:
        "Learn how to read smoothly, accurately and with expression by using punctuation and understanding meaning.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-flu-001",

        question:
            "What does reading fluently mean?",

        options: [
            "Reading smoothly, accurately and with expression",
            "Reading as quickly as possible",
            "Skipping difficult words",
            "Reading without understanding"
        ],

        answer: 0,

        explanation:
            "Fluent readers read accurately, smoothly and understand what they are reading.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-002",

        question:
            "Why is it important to read with expression?",

        options: [
            "It helps show the meaning and feelings in the text",
            "It makes every word longer",
            "It means reading faster",
            "It removes punctuation"
        ],

        answer: 0,

        explanation:
            "Expression helps readers show emotions and understand the author's meaning.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-003",

        question:
            "What should you do when you see a full stop?",

        options: [
            "Pause briefly",
            "Keep reading without stopping",
            "Shout the next word",
            "Skip the sentence"
        ],

        answer: 0,

        explanation:
            "A full stop shows the end of a sentence and requires a pause.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "reading", "fluency", "punctuation"]
    },

    {
        id: "eng-flu-004",

        question:
            "What should your voice do when reading a question?",

        options: [
            "Sound like you are asking something",
            "Always become louder",
            "Become silent",
            "Sound angry"
        ],

        answer: 0,

        explanation:
            "Questions usually have a questioning tone.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-005",

        question:
            "Why should readers avoid reading every word too quickly?",

        options: [
            "They might miss the meaning",
            "The book will disappear",
            "The words will change",
            "The story will end"
        ],

        answer: 0,

        explanation:
            "Reading too quickly can make it harder to understand the text.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-006",

        question:
            "A fluent reader should:",

        options: [
            "Recognise many words automatically",
            "Stop after every word",
            "Ignore punctuation",
            "Only read pictures"
        ],

        answer: 0,

        explanation:
            "Recognising words quickly helps reading flow smoothly.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-007",

        question:
            "What does punctuation help a reader know?",

        options: [
            "When to pause and how the sentence should sound",
            "How many pages are in a book",
            "Who printed the book",
            "How old the book is"
        ],

        answer: 0,

        explanation:
            "Punctuation gives clues about pauses and expression.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency", "punctuation"]
    },

    {
        id: "eng-flu-008",

        question:
            "Which reader is most fluent?",

        options: [
            "A reader who reads smoothly and understands the text",
            "A reader who rushes and guesses words",
            "A reader who skips sentences",
            "A reader who ignores punctuation"
        ],

        answer: 0,

        explanation:
            "Fluency combines accuracy, speed and understanding.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-009",

        question:
            "What should you do if you do not know a word?",

        options: [
            "Try to sound it out and use clues",
            "Always skip it",
            "Change the word",
            "Stop reading forever"
        ],

        answer: 0,

        explanation:
            "Good readers use strategies to work out unfamiliar words.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-010",

        question:
            "Why do fluent readers practise reading regularly?",

        options: [
            "Practice helps reading become smoother",
            "Practice makes books shorter",
            "Practice removes all punctuation",
            "Practice changes the story"
        ],

        answer: 0,

        explanation:
            "Regular reading practice improves accuracy and confidence.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-011",

        question:
            "Which punctuation mark tells you to pause briefly?",

        options: [
            "Comma",
            "Question mark",
            "Full stop",
            "Exclamation mark"
        ],

        answer: 0,

        explanation:
            "A comma usually shows a short pause within a sentence.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency", "punctuation"]
    },

    {
        id: "eng-flu-012",

        question:
            "How should you read a character speaking angrily?",

        options: [
            "Use a voice that shows anger",
            "Read in a whisper",
            "Read without expression",
            "Ignore the character"
        ],

        answer: 0,

        explanation:
            "Good readers use expression to show the character's feelings.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-013",

        question:
            "Why should you look at punctuation before reading aloud?",

        options: [
            "It helps you know how the sentence should sound",
            "It tells you the ending",
            "It tells you the author's name",
            "It tells you the page number"
        ],

        answer: 0,

        explanation:
            "Punctuation gives clues about pauses and expression.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-014",

        question:
            "Which is a sign of poor fluency?",

        options: [
            "Reading slowly word-by-word without understanding",
            "Reading smoothly",
            "Using expression",
            "Pausing correctly"
        ],

        answer: 0,

        explanation:
            "Fluent readers group words together and understand meaning.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-015",

        question:
            "What should you do when reading a surprising part of a story?",

        options: [
            "Use expression to show surprise",
            "Ignore the meaning",
            "Stop reading immediately",
            "Read faster"
        ],

        answer: 0,

        explanation:
            "Expression helps communicate the feeling of the text.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-016",

        question:
            "Which skill helps readers understand longer texts?",

        options: [
            "Reading fluently",
            "Skipping words",
            "Ignoring punctuation",
            "Reading only titles"
        ],

        answer: 0,

        explanation:
            "Fluency helps readers focus on meaning instead of decoding every word.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-017",

        question:
            "When reading aloud, where should you pause?",

        options: [
            "At punctuation marks",
            "After every letter",
            "Whenever you feel bored",
            "Only at the end of a book"
        ],

        answer: 0,

        explanation:
            "Punctuation guides natural pauses.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-018",

        question:
            "What is the best way to improve reading fluency?",

        options: [
            "Read regularly and practise aloud",
            "Avoid reading difficult books",
            "Only watch videos",
            "Memorise every page"
        ],

        answer: 0,

        explanation:
            "Regular reading practice builds confidence and fluency.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-019",

        question:
            "Why do fluent readers group words together?",

        options: [
            "It helps them understand the meaning",
            "It makes sentences disappear",
            "It changes the story",
            "It removes punctuation"
        ],

        answer: 0,

        explanation:
            "Reading groups of words helps the reader understand ideas.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-020",

        question:
            "A good reader focuses on:",

        options: [
            "Accuracy, expression and understanding",
            "Only reading quickly",
            "Only reading loudly",
            "Only finishing the book"
        ],

        answer: 0,

        explanation:
            "Fluent reading combines accuracy, expression and comprehension.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    }

    ]

};