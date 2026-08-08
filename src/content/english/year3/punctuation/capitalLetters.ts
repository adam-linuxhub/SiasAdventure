import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const capitalLetters: SkillContent = {

    skillId: "capitalLetters",

    title: "Capital Letters",

    description:
        "Learn when to use capital letters at the beginning of sentences and for names, places, days and months.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-capitals-001",
        skillId: "capitalLetters",
        question: "Which sentence starts with a capital letter?",
        stage: "recognise",
        hint: "Every sentence begins with a capital letter.",
        options: [
            "The dog is sleeping.",
            "the dog is sleeping.",
            "the Dog is sleeping.",
            "the dog Is sleeping."
        ],

        explanation:
            "Every sentence should begin with a capital letter.",

        difficulty: 1,
        correctAnswer: "The dog is sleeping.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-002",
        skillId: "capitalLetters",
        question: "Which word should begin with a capital letter?",
        stage: "recognise",
        hint: "People's names always start with capitals.",
        options: [
            "Emma",
            "school",
            "table",
            "garden"
        ],

        explanation:
            "People's names always begin with a capital letter.",

        difficulty: 1,
        correctAnswer: "Emma",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-003",
        skillId: "capitalLetters",
        question: "Which sentence is written correctly?",
        stage: "recognise",
        hint: "Check the start of the sentence and the name.",
        options: [
            "My name is Jack.",
            "My name is jack.",
            "my name is Jack.",
            "my name is jack."
        ],

        explanation:
            "The sentence starts with a capital letter and 'Jack' is a name.",

        difficulty: 1,
        correctAnswer: "My name is Jack.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-004",
        skillId: "capitalLetters",
        question: "Which day of the week needs a capital letter?",
        stage: "recognise",
        hint: "Days of the week always need capitals.",
        options: [
            "Monday",
            "school",
            "afternoon",
            "playtime"
        ],

        explanation:
            "Days of the week always begin with capital letters.",

        difficulty: 1,
        correctAnswer: "Monday",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-005",
        skillId: "capitalLetters",
        question: "Which month begins with a capital letter?",
        stage: "recognise",
        hint: "Months always begin with capital letters.",
        options: [
            "July",
            "summer",
            "holiday",
            "week"
        ],

        explanation:
            "Months of the year always begin with capital letters.",

        difficulty: 1,
        correctAnswer: "July",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-006",
        skillId: "capitalLetters",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Place names need capital letters too.",
        options: [
            "We visited London.",
            "We visited london.",
            "we visited London.",
            "we visited london."
        ],

        explanation:
            "'London' is a place name and must begin with a capital letter.",

        difficulty: 1,
        correctAnswer: "We visited London.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-007",
        skillId: "capitalLetters",
        question: "Why do we use a capital letter at the start of a sentence?",
        stage: "recognise",
        hint: "Think about why sentences begin with capitals.",
        options: [
            "To show where a new sentence begins",
            "To show a question",
            "To end a sentence",
            "To join two words"
        ],

        explanation:
            "Capital letters help readers see the beginning of each sentence.",

        difficulty: 1,
        correctAnswer: "To show where a new sentence begins",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-008",
        skillId: "capitalLetters",
        question: "Which sentence is punctuated correctly?",
        stage: "recognise",
        hint: "Check both the sentence and the person's name.",
        options: [
            "My friend Olivia likes reading.",
            "my friend Olivia likes reading.",
            "My friend olivia likes reading.",
            "my friend olivia likes reading."
        ],

        explanation:
            "The sentence begins with a capital letter and 'Olivia' is a name.",

        difficulty: 1,
        correctAnswer: "My friend Olivia likes reading.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-009",
        skillId: "capitalLetters",
        question: "Which word does NOT need a capital letter in the middle of a sentence?",
        stage: "recognise",
        hint: "Common nouns usually don't need capitals.",
        options: [
            "apple",
            "Tuesday",
            "England",
            "Sam"
        ],

        explanation:
            "'Apple' is a common noun, so it does not need a capital letter.",

        difficulty: 1,
        correctAnswer: "apple",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-010",
        skillId: "capitalLetters",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Make sure both names start with capitals.",
        options: [
            "Ben and Mia played football.",
            "ben and Mia played football.",
            "Ben and mia played football.",
            "ben and mia played football."
        ],

        explanation:
            "The sentence starts with a capital letter and both names begin with capitals.",

        difficulty: 1,
        correctAnswer: "Ben and Mia played football.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-011",
        skillId: "capitalLetters",
        question: "Which sentence uses capital letters correctly?",
        stage: "recognise",
        hint: "Check the day, place and start of the sentence.",
        options: [
            "On Friday we visited Edinburgh.",
            "On friday we visited Edinburgh.",
            "On Friday we visited edinburgh.",
            "on Friday we visited Edinburgh."
        ],

        explanation:
            "'Friday' and 'Edinburgh' both need capital letters, and the sentence begins with one too.",

        difficulty: 2,
        correctAnswer: "On Friday we visited Edinburgh.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-012",
        skillId: "capitalLetters",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Months of the year always use capitals.",
        options: [
            "My birthday is in December.",
            "My birthday is in december.",
            "my birthday is in December.",
            "my birthday is in december."
        ],

        explanation:
            "'December' is a month and needs a capital letter.",

        difficulty: 2,
        correctAnswer: "My birthday is in December.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-013",
        skillId: "capitalLetters",
        question: "Which sentence needs one more capital letter?",
        stage: "recognise",
        hint: "Which place name needs a capital letter?",
        options: [
            "We went to paris.",
            "We went to Paris.",
            "The bus arrived.",
            "I like swimming."
        ],

        explanation:
            "'Paris' is a place name and should begin with a capital letter.",

        difficulty: 2,
        correctAnswer: "We went to paris.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-014",
        skillId: "capitalLetters",
        question: "Which sentence is written correctly?",
        stage: "recognise",
        hint: "People and countries are proper nouns.",
        options: [
            "Sophie lives in Scotland.",
            "Sophie lives in scotland.",
            "sophie lives in Scotland.",
            "sophie lives in scotland."
        ],

        explanation:
            "People's names and countries begin with capital letters.",

        difficulty: 2,
        correctAnswer: "Sophie lives in Scotland.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-015",
        skillId: "capitalLetters",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Days of the week begin with capitals.",
        options: [
            "We have PE on Wednesday.",
            "We have PE on wednesday.",
            "we have PE on Wednesday.",
            "we have PE on wednesday."
        ],

        explanation:
            "The sentence starts with a capital letter and 'Wednesday' always begins with one.",

        difficulty: 2,
        correctAnswer: "We have PE on Wednesday.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-016",
        skillId: "capitalLetters",
        question: "Why do names begin with capital letters?",
        stage: "recognise",
        hint: "Proper nouns are special names.",
        options: [
            "To show they are special names of people or places",
            "To make them longer",
            "To show a question",
            "To replace punctuation"
        ],

        explanation:
            "Proper nouns, such as names of people and places, begin with capital letters.",

        difficulty: 2,
        correctAnswer: "To show they are special names of people or places",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-017",
        skillId: "capitalLetters",
        question: "Which sentence uses every capital letter correctly?",
        stage: "recognise",
        hint: "Check every name, place and day carefully.",
        options: [
            "Lucy visited Cardiff on Saturday.",
            "Lucy visited cardiff on Saturday.",
            "lucy visited Cardiff on Saturday.",
            "Lucy visited Cardiff on saturday."
        ],

        explanation:
            "The sentence, person's name, city and day all begin with capital letters.",

        difficulty: 2,
        correctAnswer: "Lucy visited Cardiff on Saturday.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-018",
        skillId: "capitalLetters",
        question: "Which word should always begin with a capital letter?",
        stage: "recognise",
        hint: "Think about which words are months.",
        options: [
            "January",
            "winter",
            "snow",
            "holiday"
        ],

        explanation:
            "Months of the year always start with capital letters.",

        difficulty: 2,
        correctAnswer: "January",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-019",
        skillId: "capitalLetters",
        question: "Which sentence is written correctly?",
        stage: "recognise",
        hint: "Titles and surnames need capitals.",
        options: [
            "Our teacher is Mrs Brown.",
            "Our teacher is mrs Brown.",
            "our teacher is Mrs Brown.",
            "our teacher is mrs brown."
        ],

        explanation:
            "The sentence begins with a capital letter, and titles and surnames use capitals.",

        difficulty: 2,
        correctAnswer: "Our teacher is Mrs Brown.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    },

    {
        id: "eng-capitals-020",
        skillId: "capitalLetters",
        question: "What do capital letters help readers do?",
        stage: "recognise",
        hint: "Capital letters help readers spot important information.",
        options: [
            "Spot the beginning of sentences and important names",
            "Find adjectives",
            "Identify verbs",
            "Count syllables"
        ],

        explanation:
            "Capital letters show where sentences begin and highlight proper nouns.",

        difficulty: 2,
        correctAnswer: "Spot the beginning of sentences and important names",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "capital-letters"]
    }

    ]

};


export default capitalLetters;

export {

    capitalLetters

};