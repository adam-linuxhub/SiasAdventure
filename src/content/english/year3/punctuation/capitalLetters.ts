import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const capitalLetters: SkillContent = {

    skillId: "capitalLetters",

    title: "Capital Letters",

    description:
        "Learn when to use capital letters at the beginning of sentences and for names, places, days and months.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-capitals-001",

        question: "Which sentence starts with a capital letter?",

        options: [
            "The dog is sleeping.",
            "the dog is sleeping.",
            "the Dog is sleeping.",
            "the dog Is sleeping."
        ],

        answer: 0,

        explanation:
            "Every sentence should begin with a capital letter.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-002",

        question: "Which word should begin with a capital letter?",

        options: [
            "Emma",
            "school",
            "table",
            "garden"
        ],

        answer: 0,

        explanation:
            "People's names always begin with a capital letter.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-003",

        question: "Which sentence is written correctly?",

        options: [
            "My name is Jack.",
            "My name is jack.",
            "my name is Jack.",
            "my name is jack."
        ],

        answer: 0,

        explanation:
            "The sentence starts with a capital letter and 'Jack' is a name.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-004",

        question: "Which day of the week needs a capital letter?",

        options: [
            "Monday",
            "school",
            "afternoon",
            "playtime"
        ],

        answer: 0,

        explanation:
            "Days of the week always begin with capital letters.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-005",

        question: "Which month begins with a capital letter?",

        options: [
            "July",
            "summer",
            "holiday",
            "week"
        ],

        answer: 0,

        explanation:
            "Months of the year always begin with capital letters.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-006",

        question: "Which sentence is correct?",

        options: [
            "We visited London.",
            "We visited london.",
            "we visited London.",
            "we visited london."
        ],

        answer: 0,

        explanation:
            "'London' is a place name and must begin with a capital letter.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-007",

        question: "Why do we use a capital letter at the start of a sentence?",

        options: [
            "To show where a new sentence begins",
            "To show a question",
            "To end a sentence",
            "To join two words"
        ],

        answer: 0,

        explanation:
            "Capital letters help readers see the beginning of each sentence.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-008",

        question: "Which sentence is punctuated correctly?",

        options: [
            "My friend Olivia likes reading.",
            "my friend Olivia likes reading.",
            "My friend olivia likes reading.",
            "my friend olivia likes reading."
        ],

        answer: 0,

        explanation:
            "The sentence begins with a capital letter and 'Olivia' is a name.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-009",

        question: "Which word does NOT need a capital letter in the middle of a sentence?",

        options: [
            "apple",
            "Tuesday",
            "England",
            "Sam"
        ],

        answer: 0,

        explanation:
            "'Apple' is a common noun, so it does not need a capital letter.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-010",

        question: "Which sentence is correct?",

        options: [
            "Ben and Mia played football.",
            "ben and Mia played football.",
            "Ben and mia played football.",
            "ben and mia played football."
        ],

        answer: 0,

        explanation:
            "The sentence starts with a capital letter and both names begin with capitals.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-011",

        question: "Which sentence uses capital letters correctly?",

        options: [
            "On Friday we visited Edinburgh.",
            "On friday we visited Edinburgh.",
            "On Friday we visited edinburgh.",
            "on Friday we visited Edinburgh."
        ],

        answer: 0,

        explanation:
            "'Friday' and 'Edinburgh' both need capital letters, and the sentence begins with one too.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-012",

        question: "Which sentence is correct?",

        options: [
            "My birthday is in December.",
            "My birthday is in december.",
            "my birthday is in December.",
            "my birthday is in december."
        ],

        answer: 0,

        explanation:
            "'December' is a month and needs a capital letter.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-013",

        question: "Which sentence needs one more capital letter?",

        options: [
            "We went to paris.",
            "We went to Paris.",
            "The bus arrived.",
            "I like swimming."
        ],

        answer: 0,

        explanation:
            "'Paris' is a place name and should begin with a capital letter.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-014",

        question: "Which sentence is written correctly?",

        options: [
            "Sophie lives in Scotland.",
            "Sophie lives in scotland.",
            "sophie lives in Scotland.",
            "sophie lives in scotland."
        ],

        answer: 0,

        explanation:
            "People's names and countries begin with capital letters.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-015",

        question: "Which sentence is correct?",

        options: [
            "We have PE on Wednesday.",
            "We have PE on wednesday.",
            "we have PE on Wednesday.",
            "we have PE on wednesday."
        ],

        answer: 0,

        explanation:
            "The sentence starts with a capital letter and 'Wednesday' always begins with one.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-016",

        question: "Why do names begin with capital letters?",

        options: [
            "To show they are special names of people or places",
            "To make them longer",
            "To show a question",
            "To replace punctuation"
        ],

        answer: 0,

        explanation:
            "Proper nouns, such as names of people and places, begin with capital letters.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-017",

        question: "Which sentence uses every capital letter correctly?",

        options: [
            "Lucy visited Cardiff on Saturday.",
            "Lucy visited cardiff on Saturday.",
            "lucy visited Cardiff on Saturday.",
            "Lucy visited Cardiff on saturday."
        ],

        answer: 0,

        explanation:
            "The sentence, person's name, city and day all begin with capital letters.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-018",

        question: "Which word should always begin with a capital letter?",

        options: [
            "January",
            "winter",
            "snow",
            "holiday"
        ],

        answer: 0,

        explanation:
            "Months of the year always start with capital letters.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-019",

        question: "Which sentence is written correctly?",

        options: [
            "Our teacher is Mrs Brown.",
            "Our teacher is mrs Brown.",
            "our teacher is Mrs Brown.",
            "our teacher is mrs brown."
        ],

        answer: 0,

        explanation:
            "The sentence begins with a capital letter, and titles and surnames use capitals.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-020",

        question: "What do capital letters help readers do?",

        options: [
            "Spot the beginning of sentences and important names",
            "Find adjectives",
            "Identify verbs",
            "Count syllables"
        ],

        answer: 0,

        explanation:
            "Capital letters show where sentences begin and highlight proper nouns.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    }

    ]

};