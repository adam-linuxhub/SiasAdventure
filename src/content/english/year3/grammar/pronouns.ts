import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const pronouns: SkillContent = {

    skillId: "pronouns",

    title: "Pronouns",

    description:
        "Learn to identify pronouns and use them instead of repeating nouns.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-pronouns-001",
        skillId: "pronouns",
        question: "Which word is a pronoun?",
        stage: "recognise",
        hint: "Pronouns can replace people's names.",
        options: [
            "he",
            "boy",
            "run",
            "happy"
        ],

        explanation:
            "'He' is a pronoun because it can replace the name of a person.",

        difficulty: 1,
        correctAnswer: "he",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-002",
        skillId: "pronouns",
        question: "Which word is a pronoun?",
        stage: "recognise",
        hint: "Look for the word that can stand instead of a girl's name.",
        options: [
            "she",
            "girl",
            "jump",
            "quickly"
        ],

        explanation:
            "'She' is a pronoun used instead of a girl's name.",

        difficulty: 1,
        correctAnswer: "she",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-003",
        skillId: "pronouns",
        question: "Which word is a pronoun?",
        stage: "recognise",
        hint: "Which word can replace the name of a thing or animal?",
        options: [
            "it",
            "cat",
            "sleep",
            "soft"
        ],

        explanation:
            "'It' is a pronoun used for animals, objects or ideas.",

        difficulty: 1,
        correctAnswer: "it",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-004",
        skillId: "pronouns",
        question: "Which word is a pronoun?",
        stage: "recognise",
        hint: "Think about the word used for more than one person.",
        options: [
            "they",
            "children",
            "play",
            "park"
        ],

        explanation:
            "'They' is a pronoun that replaces more than one person or thing.",

        difficulty: 1,
        correctAnswer: "they",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-005",
        skillId: "pronouns",
        question: "Which word can replace 'Oliver'?",
        stage: "recognise",
        hint: "Which word could replace Oliver in a sentence?",
        options: [
            "he",
            "table",
            "run",
            "green"
        ],

        explanation:
            "'He' can replace the noun 'Oliver' in a sentence.",

        difficulty: 1,
        correctAnswer: "he",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-006",
        skillId: "pronouns",
        question: "Which word can replace 'Emma'?",
        stage: "recognise",
        hint: "Choose the word that could replace Emma.",
        options: [
            "she",
            "happy",
            "jump",
            "book"
        ],

        explanation:
            "'She' can replace the noun 'Emma'.",

        difficulty: 1,
        correctAnswer: "she",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-007",
        skillId: "pronouns",
        question: "Which word can replace 'the dog'?",
        stage: "recognise",
        hint: "What word could replace 'the dog'?",
        options: [
            "it",
            "bark",
            "brown",
            "garden"
        ],

        explanation:
            "'It' can replace a singular animal in simple sentences.",

        difficulty: 1,
        correctAnswer: "it",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-008",
        skillId: "pronouns",
        question: "Which sentence contains a pronoun?",
        stage: "recognise",
        hint: "Find the sentence that uses a word instead of a name.",
        options: [
            "She laughed.",
            "The happy girl.",
            "A noisy classroom.",
            "Tall trees."
        ],

        explanation:
            "'She' is a pronoun.",

        difficulty: 1,
        correctAnswer: "She laughed.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-009",
        skillId: "pronouns",
        question: "Which word is NOT a pronoun?",
        stage: "recognise",
        hint: "Three words replace nouns. One is a naming word.",
        options: [
            "teacher",
            "we",
            "they",
            "he"
        ],

        explanation:
            "'Teacher' is a noun, not a pronoun.",

        difficulty: 1,
        correctAnswer: "teacher",
        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-pronouns-010",
        skillId: "pronouns",
        question: "Why do we use pronouns?",
        stage: "recognise",
        hint: "Think about why writers use pronouns.",
        options: [
            "To avoid repeating nouns",
            "To replace punctuation",
            "To describe nouns",
            "To join sentences"
        ],

        explanation:
            "Pronouns make writing smoother by replacing repeated nouns.",

        difficulty: 1,
        correctAnswer: "To avoid repeating nouns",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-011",
        skillId: "pronouns",
        question: "Choose the best replacement: 'Lucy found Lucy's book. ____ picked it up.'",
        stage: "recognise",
        hint: "Replace the repeated name with a pronoun.",
        options: [
            "She",
            "Book",
            "Quickly",
            "Happy"
        ],

        explanation:
            "'She' replaces the repeated noun 'Lucy'.",

        difficulty: 2,
        correctAnswer: "She",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-012",
        skillId: "pronouns",
        question: "Which sentence uses a pronoun correctly?",
        stage: "recognise",
        hint: "Look for words that replace both Sam and the ball.",
        options: [
            "Sam found the ball. He kicked it.",
            "Sam found the ball. Ball kicked Sam.",
            "Sam found. Ball it.",
            "He ball Sam."
        ],

        explanation:
            "'He' replaces Sam and 'it' replaces the ball.",

        difficulty: 2,
        correctAnswer: "Sam found the ball. He kicked it.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-013",
        skillId: "pronouns",
        question: "Which pronoun can replace 'my friends'?",
        stage: "recognise",
        hint: "The answer should refer to more than one person.",
        options: [
            "they",
            "he",
            "she",
            "it"
        ],

        explanation:
            "'They' is used for more than one person.",

        difficulty: 2,
        correctAnswer: "they",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-014",
        skillId: "pronouns",
        question: "In the sentence 'The cat drank its milk.', which word is the pronoun?",
        stage: "recognise",
        hint: "Which word replaces the noun to show ownership?",
        options: [
            "its",
            "cat",
            "drank",
            "milk"
        ],

        explanation:
            "'Its' is a possessive pronoun showing the milk belongs to the cat.",

        difficulty: 2,
        correctAnswer: "its",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-015",
        skillId: "pronouns",
        question: "Which sentence contains two pronouns?",
        stage: "recognise",
        hint: "Can you spot two words that replace nouns?",
        options: [
            "They helped us.",
            "The children helped.",
            "Helpful children.",
            "Children helped friends."
        ],

        explanation:
            "'They' and 'us' are both pronouns.",

        difficulty: 2,
        correctAnswer: "They helped us.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-016",
        skillId: "pronouns",
        question: "Which pronoun could replace 'the bicycle'?",
        stage: "recognise",
        hint: "The bicycle is one object.",
        options: [
            "it",
            "they",
            "she",
            "we"
        ],

        explanation:
            "'It' is used for a single object.",

        difficulty: 2,
        correctAnswer: "it",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-017",
        skillId: "pronouns",
        question: "Choose the best sentence.",
        stage: "recognise",
        hint: "Choose the sentence that avoids repeating names.",
        options: [
            "Mia saw Ben. She waved to him.",
            "Mia saw Ben. Mia waved to Ben.",
            "Mia Ben waved.",
            "She Ben Mia."
        ],

        explanation:
            "Pronouns make the sentence smoother by avoiding repetition.",

        difficulty: 2,
        correctAnswer: "Mia saw Ben. She waved to him.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-018",
        skillId: "pronouns",
        question: "Which pronoun refers to the speaker?",
        stage: "recognise",
        hint: "Which pronoun does the speaker use for themselves?",
        options: [
            "I",
            "he",
            "she",
            "they"
        ],

        explanation:
            "'I' is the pronoun used by the person speaking.",

        difficulty: 2,
        correctAnswer: "I",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-019",
        skillId: "pronouns",
        question: "Which pronoun refers to the person being spoken to?",
        stage: "recognise",
        hint: "Which pronoun is used when talking to someone?",
        options: [
            "you",
            "he",
            "she",
            "they"
        ],

        explanation:
            "'You' is the pronoun used for the person being spoken to.",

        difficulty: 2,
        correctAnswer: "you",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    },

    {
        id: "eng-pronouns-020",
        skillId: "pronouns",
        question: "Which sentence uses pronouns correctly?",
        stage: "recognise",
        hint: "Look for pronouns replacing both people and the activity.",
        options: [
            "Olivia and Noah played outside. They enjoyed it.",
            "Olivia and Noah played outside. Olivia and Noah enjoyed outside.",
            "They Olivia Noah.",
            "Outside they Olivia."
        ],

        explanation:
            "'They' replaces 'Olivia and Noah', and 'it' replaces the activity or situation.",

        difficulty: 2,
        correctAnswer: "Olivia and Noah played outside. They enjoyed it.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "pronouns"]
    }

    ]

};

export default pronouns;

export {

    pronouns

};