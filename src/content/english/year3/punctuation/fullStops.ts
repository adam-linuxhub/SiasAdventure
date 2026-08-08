import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const fullStops: SkillContent = {

    skillId: "fullStops",

    title: "Full Stops",

    description:
        "Learn when to use full stops to end statements and complete sentences.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-fullstop-001",
        skillId: "fullStops",
        question: "Which punctuation mark is a full stop?",
        stage: "recognise",
        hint: "Look for the punctuation mark that ends a statement.",
        options: [
            ".",
            "?",
            "!",
            ","
        ],

        explanation:
            "A full stop (.) is used to end most statements.",

        difficulty: 1,
        correctAnswer: ".",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-002",
        skillId: "fullStops",
        question: "Which sentence ends correctly?",
        stage: "recognise",
        hint: "Statements usually end with a full stop.",
        options: [
            "The cat is asleep.",
            "The cat is asleep?",
            "The cat is asleep!",
            "The cat is asleep,"
        ],

        explanation:
            "A statement should end with a full stop.",

        difficulty: 1,
        correctAnswer: "The cat is asleep.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-003",
        skillId: "fullStops",
        question: "When should you use a full stop?",
        stage: "recognise",
        hint: "Think about what punctuation finishes a statement.",
        options: [
            "At the end of a statement",
            "At the end of every question",
            "After every word",
            "Before every sentence"
        ],

        explanation:
            "Most statements end with a full stop.",

        difficulty: 1,
        correctAnswer: "At the end of a statement",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-004",
        skillId: "fullStops",
        question: "Which sentence needs a full stop?",
        stage: "recognise",
        hint: "Is this sentence asking, shouting or telling?",
        options: [
            "I like ice cream",
            "Where is my bag?",
            "What a surprise!",
            "Can you help me?"
        ],

        explanation:
            "The sentence is a statement and should end with a full stop.",

        difficulty: 1,
        correctAnswer: "I like ice cream",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-005",
        skillId: "fullStops",
        question: "Choose the correctly punctuated sentence.",
        stage: "recognise",
        hint: "Simple statements end with a full stop.",
        options: [
            "The bird sang.",
            "The bird sang?",
            "The bird sang!",
            "The bird sang,"
        ],

        explanation:
            "A simple statement ends with a full stop.",

        difficulty: 1,
        correctAnswer: "The bird sang.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-006",
        skillId: "fullStops",
        question: "Which sentence is a statement?",
        stage: "recognise",
        hint: "Which sentence is just giving information?",
        options: [
            "The sun is shining.",
            "Is the sun shining?",
            "What a sunny day!",
            "Please open the window!"
        ],

        explanation:
            "Statements give information and usually end with a full stop.",

        difficulty: 1,
        correctAnswer: "The sun is shining.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-007",
        skillId: "fullStops",
        question: "Which sentence ends with the correct punctuation?",
        stage: "recognise",
        hint: "Does the sentence ask a question or tell something?",
        options: [
            "Ben played football.",
            "Ben played football?",
            "Ben played football!",
            "Ben played football,"
        ],

        explanation:
            "This is a statement, so it ends with a full stop.",

        difficulty: 1,
        correctAnswer: "Ben played football.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-008",
        skillId: "fullStops",
        question: "What does a full stop show?",
        stage: "recognise",
        hint: "A full stop shows a sentence has finished.",
        options: [
            "The sentence has finished.",
            "Someone is asking a question.",
            "Someone is shouting.",
            "There is a list."
        ],

        explanation:
            "A full stop shows that a statement has ended.",

        difficulty: 1,
        correctAnswer: "The sentence has finished.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-009",
        skillId: "fullStops",
        question: "Which punctuation mark should replace the blank? 'The dog barked__'",
        stage: "recognise",
        hint: "The sentence is simply telling you something.",
        options: [
            ".",
            "?",
            "!",
            ","
        ],

        explanation:
            "The sentence is a statement, so it needs a full stop.",

        difficulty: 1,
        correctAnswer: ".",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-010",
        skillId: "fullStops",
        question: "Which sentence is punctuated correctly?",
        stage: "recognise",
        hint: "Look for the ordinary statement.",
        options: [
            "My friend likes swimming.",
            "My friend likes swimming?",
            "My friend likes swimming!",
            "My friend likes swimming,"
        ],

        explanation:
            "Statements should end with a full stop.",

        difficulty: 1,
        correctAnswer: "My friend likes swimming.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-011",
        skillId: "fullStops",
        question: "Which sentence is missing a full stop?",
        stage: "recognise",
        hint: "One statement is missing its ending punctuation.",
        options: [
            "The rabbit hopped across the field",
            "The rabbit hopped across the field.",
            "Where is the rabbit?",
            "What a fast rabbit!"
        ],

        explanation:
            "The statement should end with a full stop.",

        difficulty: 2,
        correctAnswer: "The rabbit hopped across the field",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-012",
        skillId: "fullStops",
        question: "How many full stops are needed? 'Amy smiled She waved Goodbye everyone'",
        stage: "recognise",
        hint: "Count how many separate statements there are.",
        options: [
            "2",
            "1",
            "3",
            "0"
        ],

        explanation:
            "There are three statements, so two full stops are needed between them.",

        difficulty: 2,
        correctAnswer: "2",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-013",
        skillId: "fullStops",
        question: "Which sentence has the correct ending punctuation?",
        stage: "recognise",
        hint: "This sentence is not a question or exclamation.",
        options: [
            "The train arrived on time.",
            "The train arrived on time?",
            "The train arrived on time!",
            "The train arrived on time,"
        ],

        explanation:
            "A statement ends with a full stop.",

        difficulty: 2,
        correctAnswer: "The train arrived on time.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-014",
        skillId: "fullStops",
        question: "Why do we use full stops?",
        stage: "recognise",
        hint: "Why do readers need full stops?",
        options: [
            "To show the end of a statement",
            "To ask a question",
            "To show excitement",
            "To separate items in a list"
        ],

        explanation:
            "Full stops help readers know where one sentence ends and the next begins.",

        difficulty: 2,
        correctAnswer: "To show the end of a statement",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-015",
        skillId: "fullStops",
        question: "Which sentence uses a full stop correctly?",
        stage: "recognise",
        hint: "Is the sentence simply giving information?",
        options: [
            "Our class visited the museum.",
            "Our class visited the museum?",
            "Our class visited the museum!",
            "Our class visited the museum,"
        ],

        explanation:
            "This sentence simply gives information.",

        difficulty: 2,
        correctAnswer: "Our class visited the museum.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-016",
        skillId: "fullStops",
        question: "Choose the sentence that needs a full stop instead of a question mark.",
        stage: "recognise",
        hint: "Statements shouldn't end with question marks.",
        options: [
            "The cake tasted delicious?",
            "Where is the cake?",
            "Who baked the cake?",
            "When will we eat?"
        ],

        explanation:
            "It is a statement, not a question, so it should end with a full stop.",

        difficulty: 2,
        correctAnswer: "The cake tasted delicious?",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-017",
        skillId: "fullStops",
        question: "Which sentence contains correct punctuation?",
        stage: "recognise",
        hint: "Choose the sentence that ends like a statement.",
        options: [
            "The children played outside.",
            "The children played outside?",
            "The children played outside!",
            "The children played outside,"
        ],

        explanation:
            "A statement ends with a full stop.",

        difficulty: 2,
        correctAnswer: "The children played outside.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-018",
        skillId: "fullStops",
        question: "Which punctuation mark should end this sentence? 'Dad washed the car__'",
        stage: "recognise",
        hint: "Ask yourself if the sentence is just telling something.",
        options: [
            ".",
            "?",
            "!",
            ","
        ],

        explanation:
            "The sentence is a statement, so it needs a full stop.",

        difficulty: 2,
        correctAnswer: ".",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-019",
        skillId: "fullStops",
        question: "What happens if full stops are missing?",
        stage: "recognise",
        hint: "Full stops help readers know where to pause.",
        options: [
            "Sentences become harder to read.",
            "Words become nouns.",
            "Questions become commands.",
            "Adjectives disappear."
        ],

        explanation:
            "Without full stops, it is difficult to tell where one sentence ends and the next begins.",

        difficulty: 2,
        correctAnswer: "Sentences become harder to read.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    },

    {
        id: "eng-fullstop-020",
        skillId: "fullStops",
        question: "Which group of sentences is punctuated correctly?",
        stage: "recognise",
        hint: "Both sentences are ordinary statements.",
        options: [
            "The dog barked. The cat slept.",
            "The dog barked? The cat slept.",
            "The dog barked! The cat slept?",
            "The dog barked, The cat slept."
        ],

        explanation:
            "Both sentences are statements, so each ends with a full stop.",

        difficulty: 2,
        correctAnswer: "The dog barked. The cat slept.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "full-stops"]
    }

    ]

};


export default fullStops;

export {

    fullStops

};