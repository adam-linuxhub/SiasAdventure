import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const commasInLists: SkillContent = {

    skillId: "commasInLists",

    title: "Commas in Lists",

    description:
        "Learn how commas are used to separate items in a list.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-commalist-001",
        skillId: "commasInLists",
        question: "What are commas used for in a list?",
        stage: "recognise",
        options: [
            "To separate the items",
            "To end a sentence",
            "To ask a question",
            "To show excitement"
        ],

        explanation:
            "Commas help separate each item in a list so it is easier to read.",

        difficulty: 1,
        correctAnswer: "To separate the items",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas", "lists"]
    },

    {
        id: "eng-commalist-002",
        skillId: "commasInLists",
        question: "Which sentence uses commas correctly?",
        stage: "recognise",
        options: [
            "I packed socks, shoes and a hat.",
            "I packed socks shoes and a hat.",
            "I packed, socks shoes and a hat.",
            "I packed socks shoes, and a hat."
        ],

        explanation:
            "Commas separate the items in the list. In British English, a comma is not usually placed before 'and'.",

        difficulty: 1,
        correctAnswer: "I packed socks, shoes and a hat.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas", "lists"]
    },

    {
        id: "eng-commalist-003",
        skillId: "commasInLists",
        question: "Which sentence contains a list?",
        stage: "recognise",
        options: [
            "We saw lions, tigers and zebras.",
            "The lion roared loudly.",
            "Where is the lion?",
            "Run quickly!"
        ],

        explanation:
            "The sentence lists three animals.",

        difficulty: 1,
        correctAnswer: "We saw lions, tigers and zebras.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-004",
        skillId: "commasInLists",
        question: "How many commas are needed? 'I bought apples bananas and pears.'",
        stage: "recognise",
        options: [
            "1",
            "0",
            "2",
            "3"
        ],

        explanation:
            "One comma separates 'apples' and 'bananas'.",

        difficulty: 1,
        correctAnswer: "1",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-005",
        skillId: "commasInLists",
        question: "Which sentence is punctuated correctly?",
        stage: "recognise",
        options: [
            "Ben likes football, swimming and cycling.",
            "Ben likes football swimming and cycling.",
            "Ben likes football, swimming, and cycling.",
            "Ben likes football swimming, and cycling."
        ],

        explanation:
            "In British English, commas separate the items before the final 'and'.",

        difficulty: 1,
        correctAnswer: "Ben likes football, swimming and cycling.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-006",
        skillId: "commasInLists",
        question: "Which punctuation mark separates items in a list?",
        stage: "recognise",
        options: [
            "Comma",
            "Question mark",
            "Full stop",
            "Exclamation mark"
        ],

        explanation:
            "Commas separate items in a list.",

        difficulty: 1,
        correctAnswer: "Comma",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-007",
        skillId: "commasInLists",
        question: "Which sentence has a correctly punctuated list?",
        stage: "recognise",
        options: [
            "The box contained crayons, pencils and rulers.",
            "The box contained crayons pencils and rulers.",
            "The box contained, crayons pencils and rulers.",
            "The box contained crayons pencils, and rulers."
        ],

        explanation:
            "Each item is separated with commas until the final 'and'.",

        difficulty: 1,
        correctAnswer: "The box contained crayons, pencils and rulers.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-008",
        skillId: "commasInLists",
        question: "Which sentence contains three items in a list?",
        stage: "recognise",
        options: [
            "The cake had strawberries, cream and chocolate.",
            "The cake was delicious.",
            "The cake looked tasty.",
            "The cake disappeared quickly."
        ],

        explanation:
            "The sentence lists three ingredients.",

        difficulty: 1,
        correctAnswer: "The cake had strawberries, cream and chocolate.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-009",
        skillId: "commasInLists",
        question: "Which sentence does NOT need commas in a list?",
        stage: "recognise",
        options: [
            "The dog barked loudly.",
            "I packed socks, shoes and boots.",
            "We ate apples, oranges and grapes.",
            "She bought pencils, pens and paper."
        ],

        explanation:
            "There is no list in this sentence.",

        difficulty: 1,
        correctAnswer: "The dog barked loudly.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation"]
    },

    {
        id: "eng-commalist-010",
        skillId: "commasInLists",
        question: "Why do we use commas in lists?",
        stage: "recognise",
        options: [
            "To make lists easier to read",
            "To end a sentence",
            "To ask questions",
            "To replace capital letters"
        ],

        explanation:
            "Commas clearly separate each item in a list.",

        difficulty: 1,
        correctAnswer: "To make lists easier to read",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-011",
        skillId: "commasInLists",
        question: "Which sentence is punctuated correctly?",
        stage: "recognise",
        options: [
            "Ella packed a torch, map, compass and water bottle.",
            "Ella packed a torch map compass and water bottle.",
            "Ella packed a torch, map compass and water bottle.",
            "Ella packed a torch map, compass, and water bottle."
        ],

        explanation:
            "Each item except the last is separated with a comma.",

        difficulty: 2,
        correctAnswer: "Ella packed a torch, map, compass and water bottle.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-012",
        skillId: "commasInLists",
        question: "How many commas are needed? 'We visited France Spain Italy and Greece.'",
        stage: "recognise",
        options: [
            "2",
            "1",
            "3",
            "4"
        ],

        explanation:
            "Four countries need two commas before the final 'and'.",

        difficulty: 2,
        correctAnswer: "2",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-013",
        skillId: "commasInLists",
        question: "Which sentence uses commas correctly?",
        stage: "recognise",
        options: [
            "The artist used red, blue, green and yellow paint.",
            "The artist used red blue green and yellow paint.",
            "The artist used red, blue green and yellow paint.",
            "The artist used red blue, green, and yellow paint."
        ],

        explanation:
            "Commas separate each colour before the final 'and'.",

        difficulty: 2,
        correctAnswer: "The artist used red, blue, green and yellow paint.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-014",
        skillId: "commasInLists",
        question: "Which sentence contains a correctly punctuated shopping list?",
        stage: "recognise",
        options: [
            "We bought milk, bread, eggs and cheese.",
            "We bought milk bread eggs and cheese.",
            "We bought milk, bread eggs and cheese.",
            "We bought milk bread, eggs, and cheese."
        ],

        explanation:
            "Each item is separated by commas before the final 'and'.",

        difficulty: 2,
        correctAnswer: "We bought milk, bread, eggs and cheese.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-015",
        skillId: "commasInLists",
        question: "Which sentence is easiest to read?",
        stage: "recognise",
        options: [
            "The garden had roses, tulips, daisies and lilies.",
            "The garden had roses tulips daisies and lilies.",
            "The garden had roses tulips, daisies and lilies.",
            "The garden had roses, tulips daisies and lilies."
        ],

        explanation:
            "Commas make long lists much clearer.",

        difficulty: 2,
        correctAnswer: "The garden had roses, tulips, daisies and lilies.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-016",
        skillId: "commasInLists",
        question: "How many items are in this list? 'Pens, pencils, rulers and rubbers.'",
        stage: "recognise",
        options: [
            "4",
            "3",
            "2",
            "5"
        ],

        explanation:
            "The four items are pens, pencils, rulers and rubbers.",

        difficulty: 2,
        correctAnswer: "4",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-017",
        skillId: "commasInLists",
        question: "Which sentence needs commas added?",
        stage: "recognise",
        options: [
            "I ate pizza chips and salad.",
            "I ate pizza, chips and salad.",
            "I ate toast.",
            "I ate breakfast."
        ],

        explanation:
            "A comma should separate 'pizza' and 'chips'.",

        difficulty: 2,
        correctAnswer: "I ate pizza chips and salad.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-018",
        skillId: "commasInLists",
        question: "Why is the word 'and' used in a list?",
        stage: "recognise",
        options: [
            "To introduce the final item",
            "To replace commas",
            "To begin every sentence",
            "To end the list with a full stop"
        ],

        explanation:
            "'And' joins the final item to the rest of the list.",

        difficulty: 2,
        correctAnswer: "To introduce the final item",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-019",
        skillId: "commasInLists",
        question: "Which list is punctuated correctly?",
        stage: "recognise",
        options: [
            "Cats, dogs, rabbits and hamsters",
            "Cats dogs rabbits and hamsters",
            "Cats, dogs rabbits and hamsters",
            "Cats dogs, rabbits, and hamsters"
        ],

        explanation:
            "The commas correctly separate the items before the final 'and'.",

        difficulty: 2,
        correctAnswer: "Cats, dogs, rabbits and hamsters",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-020",
        skillId: "commasInLists",
        question: "What is the main purpose of commas in lists?",
        stage: "recognise",
        options: [
            "To separate each item clearly",
            "To end a sentence",
            "To begin a paragraph",
            "To show excitement"
        ],

        explanation:
            "Commas make lists clear and easy to understand.",

        difficulty: 2,
        correctAnswer: "To separate each item clearly",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas", "lists"]
    }

    ]

};