import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const readingFluency: SkillContent = {

    skillId: "readingFluency",

    title: "Reading Fluency",

    description:
        "Learn how to read smoothly, accurately and with expression by using punctuation and understanding meaning.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-flu-001",
        skillId: "readingFluency",
        question:
            "What does reading fluently mean?",
        stage: "recognise",
        options: [
            "Reading smoothly, accurately and with expression",
            "Reading as quickly as possible",
            "Skipping difficult words",
            "Reading without understanding"
        ],

        explanation:
            "Fluent readers read accurately, smoothly and understand what they are reading.",

        difficulty: 1,
        correctAnswer: "Reading smoothly, accurately and with expression",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-002",
        skillId: "readingFluency",
        question:
            "Why is it important to read with expression?",
        stage: "recognise",
        options: [
            "It helps show the meaning and feelings in the text",
            "It makes every word longer",
            "It means reading faster",
            "It removes punctuation"
        ],

        explanation:
            "Expression helps readers show emotions and understand the author's meaning.",

        difficulty: 1,
        correctAnswer: "It helps show the meaning and feelings in the text",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-003",
        skillId: "readingFluency",
        question:
            "What should you do when you see a full stop?",
        stage: "recognise",
        options: [
            "Pause briefly",
            "Keep reading without stopping",
            "Shout the next word",
            "Skip the sentence"
        ],

        explanation:
            "A full stop shows the end of a sentence and requires a pause.",

        difficulty: 1,
        correctAnswer: "Pause briefly",
        estimatedSeconds: 15,

        tags: ["english", "reading", "fluency", "punctuation"]
    },

    {
        id: "eng-flu-004",
        skillId: "readingFluency",
        question:
            "What should your voice do when reading a question?",
        stage: "recognise",
        options: [
            "Sound like you are asking something",
            "Always become louder",
            "Become silent",
            "Sound angry"
        ],

        explanation:
            "Questions usually have a questioning tone.",

        difficulty: 1,
        correctAnswer: "Sound like you are asking something",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-005",
        skillId: "readingFluency",
        question:
            "Why should readers avoid reading every word too quickly?",
        stage: "recognise",
        options: [
            "They might miss the meaning",
            "The book will disappear",
            "The words will change",
            "The story will end"
        ],

        explanation:
            "Reading too quickly can make it harder to understand the text.",

        difficulty: 1,
        correctAnswer: "They might miss the meaning",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-006",
        skillId: "readingFluency",
        question:
            "A fluent reader should:",
        stage: "recognise",
        options: [
            "Recognise many words automatically",
            "Stop after every word",
            "Ignore punctuation",
            "Only read pictures"
        ],

        explanation:
            "Recognising words quickly helps reading flow smoothly.",

        difficulty: 1,
        correctAnswer: "Recognise many words automatically",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-007",
        skillId: "readingFluency",
        question:
            "What does punctuation help a reader know?",
        stage: "recognise",
        options: [
            "When to pause and how the sentence should sound",
            "How many pages are in a book",
            "Who printed the book",
            "How old the book is"
        ],

        explanation:
            "Punctuation gives clues about pauses and expression.",

        difficulty: 1,
        correctAnswer: "When to pause and how the sentence should sound",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency", "punctuation"]
    },

    {
        id: "eng-flu-008",
        skillId: "readingFluency",
        question:
            "Which reader is most fluent?",
        stage: "recognise",
        options: [
            "A reader who reads smoothly and understands the text",
            "A reader who rushes and guesses words",
            "A reader who skips sentences",
            "A reader who ignores punctuation"
        ],

        explanation:
            "Fluency combines accuracy, speed and understanding.",

        difficulty: 1,
        correctAnswer: "A reader who reads smoothly and understands the text",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-009",
        skillId: "readingFluency",
        question:
            "What should you do if you do not know a word?",
        stage: "recognise",
        options: [
            "Try to sound it out and use clues",
            "Always skip it",
            "Change the word",
            "Stop reading forever"
        ],

        explanation:
            "Good readers use strategies to work out unfamiliar words.",

        difficulty: 1,
        correctAnswer: "Try to sound it out and use clues",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-010",
        skillId: "readingFluency",
        question:
            "Why do fluent readers practise reading regularly?",
        stage: "recognise",
        options: [
            "Practice helps reading become smoother",
            "Practice makes books shorter",
            "Practice removes all punctuation",
            "Practice changes the story"
        ],

        explanation:
            "Regular reading practice improves accuracy and confidence.",

        difficulty: 1,
        correctAnswer: "Practice helps reading become smoother",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-011",
        skillId: "readingFluency",
        question:
            "Which punctuation mark tells you to pause briefly?",
        stage: "recognise",
        options: [
            "Comma",
            "Question mark",
            "Full stop",
            "Exclamation mark"
        ],

        explanation:
            "A comma usually shows a short pause within a sentence.",

        difficulty: 2,
        correctAnswer: "Comma",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency", "punctuation"]
    },

    {
        id: "eng-flu-012",
        skillId: "readingFluency",
        question:
            "How should you read a character speaking angrily?",
        stage: "recognise",
        options: [
            "Use a voice that shows anger",
            "Read in a whisper",
            "Read without expression",
            "Ignore the character"
        ],

        explanation:
            "Good readers use expression to show the character's feelings.",

        difficulty: 2,
        correctAnswer: "Use a voice that shows anger",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-013",
        skillId: "readingFluency",
        question:
            "Why should you look at punctuation before reading aloud?",
        stage: "recognise",
        options: [
            "It helps you know how the sentence should sound",
            "It tells you the ending",
            "It tells you the author's name",
            "It tells you the page number"
        ],

        explanation:
            "Punctuation gives clues about pauses and expression.",

        difficulty: 2,
        correctAnswer: "It helps you know how the sentence should sound",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-014",
        skillId: "readingFluency",
        question:
            "Which is a sign of poor fluency?",
        stage: "recognise",
        options: [
            "Reading slowly word-by-word without understanding",
            "Reading smoothly",
            "Using expression",
            "Pausing correctly"
        ],

        explanation:
            "Fluent readers group words together and understand meaning.",

        difficulty: 2,
        correctAnswer: "Reading slowly word-by-word without understanding",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-015",
        skillId: "readingFluency",
        question:
            "What should you do when reading a surprising part of a story?",
        stage: "recognise",
        options: [
            "Use expression to show surprise",
            "Ignore the meaning",
            "Stop reading immediately",
            "Read faster"
        ],

        explanation:
            "Expression helps communicate the feeling of the text.",

        difficulty: 2,
        correctAnswer: "Use expression to show surprise",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-016",
        skillId: "readingFluency",
        question:
            "Which skill helps readers understand longer texts?",
        stage: "recognise",
        options: [
            "Reading fluently",
            "Skipping words",
            "Ignoring punctuation",
            "Reading only titles"
        ],

        explanation:
            "Fluency helps readers focus on meaning instead of decoding every word.",

        difficulty: 2,
        correctAnswer: "Reading fluently",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-017",
        skillId: "readingFluency",
        question:
            "When reading aloud, where should you pause?",
        stage: "recognise",
        options: [
            "At punctuation marks",
            "After every letter",
            "Whenever you feel bored",
            "Only at the end of a book"
        ],

        explanation:
            "Punctuation guides natural pauses.",

        difficulty: 2,
        correctAnswer: "At punctuation marks",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-018",
        skillId: "readingFluency",
        question:
            "What is the best way to improve reading fluency?",
        stage: "recognise",
        options: [
            "Read regularly and practise aloud",
            "Avoid reading difficult books",
            "Only watch videos",
            "Memorise every page"
        ],

        explanation:
            "Regular reading practice builds confidence and fluency.",

        difficulty: 2,
        correctAnswer: "Read regularly and practise aloud",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-019",
        skillId: "readingFluency",
        question:
            "Why do fluent readers group words together?",
        stage: "recognise",
        options: [
            "It helps them understand the meaning",
            "It makes sentences disappear",
            "It changes the story",
            "It removes punctuation"
        ],

        explanation:
            "Reading groups of words helps the reader understand ideas.",

        difficulty: 2,
        correctAnswer: "It helps them understand the meaning",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    },

    {
        id: "eng-flu-020",
        skillId: "readingFluency",
        question:
            "A good reader focuses on:",
        stage: "recognise",
        options: [
            "Accuracy, expression and understanding",
            "Only reading quickly",
            "Only reading loudly",
            "Only finishing the book"
        ],

        explanation:
            "Fluent reading combines accuracy, expression and comprehension.",

        difficulty: 2,
        correctAnswer: "Accuracy, expression and understanding",
        estimatedSeconds: 20,

        tags: ["english", "reading", "fluency"]
    }

    ]

};


export default readingFluency;

export {

    readingFluency

};
