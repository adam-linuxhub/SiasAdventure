import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const commasInLists: SkillContent = {

    skillId: "commasInLists",

    title: "Commas in Lists",

    description:
        "Learn how commas are used to separate items in a list.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-commalist-001",

        question: "What are commas used for in a list?",

        options: [
            "To separate the items",
            "To end a sentence",
            "To ask a question",
            "To show excitement"
        ],

        answer: 0,

        explanation:
            "Commas help separate each item in a list so it is easier to read.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas", "lists"]
    },

    {
        id: "eng-commalist-002",

        question: "Which sentence uses commas correctly?",

        options: [
            "I packed socks, shoes and a hat.",
            "I packed socks shoes and a hat.",
            "I packed, socks shoes and a hat.",
            "I packed socks shoes, and a hat."
        ],

        answer: 0,

        explanation:
            "Commas separate the items in the list. In British English, a comma is not usually placed before 'and'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas", "lists"]
    },

    {
        id: "eng-commalist-003",

        question: "Which sentence contains a list?",

        options: [
            "We saw lions, tigers and zebras.",
            "The lion roared loudly.",
            "Where is the lion?",
            "Run quickly!"
        ],

        answer: 0,

        explanation:
            "The sentence lists three animals.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-004",

        question: "How many commas are needed? 'I bought apples bananas and pears.'",

        options: [
            "1",
            "0",
            "2",
            "3"
        ],

        answer: 0,

        explanation:
            "One comma separates 'apples' and 'bananas'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-005",

        question: "Which sentence is punctuated correctly?",

        options: [
            "Ben likes football, swimming and cycling.",
            "Ben likes football swimming and cycling.",
            "Ben likes football, swimming, and cycling.",
            "Ben likes football swimming, and cycling."
        ],

        answer: 0,

        explanation:
            "In British English, commas separate the items before the final 'and'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-006",

        question: "Which punctuation mark separates items in a list?",

        options: [
            "Comma",
            "Question mark",
            "Full stop",
            "Exclamation mark"
        ],

        answer: 0,

        explanation:
            "Commas separate items in a list.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-007",

        question: "Which sentence has a correctly punctuated list?",

        options: [
            "The box contained crayons, pencils and rulers.",
            "The box contained crayons pencils and rulers.",
            "The box contained, crayons pencils and rulers.",
            "The box contained crayons pencils, and rulers."
        ],

        answer: 0,

        explanation:
            "Each item is separated with commas until the final 'and'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-008",

        question: "Which sentence contains three items in a list?",

        options: [
            "The cake had strawberries, cream and chocolate.",
            "The cake was delicious.",
            "The cake looked tasty.",
            "The cake disappeared quickly."
        ],

        answer: 0,

        explanation:
            "The sentence lists three ingredients.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-009",

        question: "Which sentence does NOT need commas in a list?",

        options: [
            "The dog barked loudly.",
            "I packed socks, shoes and boots.",
            "We ate apples, oranges and grapes.",
            "She bought pencils, pens and paper."
        ],

        answer: 0,

        explanation:
            "There is no list in this sentence.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "punctuation"]
    },

    {
        id: "eng-commalist-010",

        question: "Why do we use commas in lists?",

        options: [
            "To make lists easier to read",
            "To end a sentence",
            "To ask questions",
            "To replace capital letters"
        ],

        answer: 0,

        explanation:
            "Commas clearly separate each item in a list.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-011",

        question: "Which sentence is punctuated correctly?",

        options: [
            "Ella packed a torch, map, compass and water bottle.",
            "Ella packed a torch map compass and water bottle.",
            "Ella packed a torch, map compass and water bottle.",
            "Ella packed a torch map, compass, and water bottle."
        ],

        answer: 0,

        explanation:
            "Each item except the last is separated with a comma.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-012",

        question: "How many commas are needed? 'We visited France Spain Italy and Greece.'",

        options: [
            "2",
            "1",
            "3",
            "4"
        ],

        answer: 0,

        explanation:
            "Four countries need two commas before the final 'and'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-013",

        question: "Which sentence uses commas correctly?",

        options: [
            "The artist used red, blue, green and yellow paint.",
            "The artist used red blue green and yellow paint.",
            "The artist used red, blue green and yellow paint.",
            "The artist used red blue, green, and yellow paint."
        ],

        answer: 0,

        explanation:
            "Commas separate each colour before the final 'and'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-014",

        question: "Which sentence contains a correctly punctuated shopping list?",

        options: [
            "We bought milk, bread, eggs and cheese.",
            "We bought milk bread eggs and cheese.",
            "We bought milk, bread eggs and cheese.",
            "We bought milk bread, eggs, and cheese."
        ],

        answer: 0,

        explanation:
            "Each item is separated by commas before the final 'and'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-015",

        question: "Which sentence is easiest to read?",

        options: [
            "The garden had roses, tulips, daisies and lilies.",
            "The garden had roses tulips daisies and lilies.",
            "The garden had roses tulips, daisies and lilies.",
            "The garden had roses, tulips daisies and lilies."
        ],

        answer: 0,

        explanation:
            "Commas make long lists much clearer.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-016",

        question: "How many items are in this list? 'Pens, pencils, rulers and rubbers.'",

        options: [
            "4",
            "3",
            "2",
            "5"
        ],

        answer: 0,

        explanation:
            "The four items are pens, pencils, rulers and rubbers.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-017",

        question: "Which sentence needs commas added?",

        options: [
            "I ate pizza chips and salad.",
            "I ate pizza, chips and salad.",
            "I ate toast.",
            "I ate breakfast."
        ],

        answer: 0,

        explanation:
            "A comma should separate 'pizza' and 'chips'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas"]
    },

    {
        id: "eng-commalist-018",

        question: "Why is the word 'and' used in a list?",

        options: [
            "To introduce the final item",
            "To replace commas",
            "To begin every sentence",
            "To end the list with a full stop"
        ],

        answer: 0,

        explanation:
            "'And' joins the final item to the rest of the list.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-019",

        question: "Which list is punctuated correctly?",

        options: [
            "Cats, dogs, rabbits and hamsters",
            "Cats dogs rabbits and hamsters",
            "Cats, dogs rabbits and hamsters",
            "Cats dogs, rabbits, and hamsters"
        ],

        answer: 0,

        explanation:
            "The commas correctly separate the items before the final 'and'.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "lists"]
    },

    {
        id: "eng-commalist-020",

        question: "What is the main purpose of commas in lists?",

        options: [
            "To separate each item clearly",
            "To end a sentence",
            "To begin a paragraph",
            "To show excitement"
        ],

        answer: 0,

        explanation:
            "Commas make lists clear and easy to understand.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "punctuation", "commas", "lists"]
    }

    ]

};