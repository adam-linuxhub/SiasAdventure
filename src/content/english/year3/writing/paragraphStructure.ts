import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const paragraphStructure: SkillContent = {

    skillId: "paragraphStructure",

    title: "Paragraph Structure",

    description:
        "Learn how to organise writing into paragraphs by grouping related ideas and using clear structure.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-ps-001",
        skillId: "paragraphStructure",
        question:
            "What is a paragraph?",

        options: [
            "A group of sentences about the same idea",
            "One single word",
            "A punctuation mark",
            "A title only"
        ],

        explanation:
            "Paragraphs group sentences that are about the same topic or idea.",

        difficulty: 1,
        correctAnswer: "A group of sentences about the same idea",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-002",
        skillId: "paragraphStructure",
        question:
            "Why do writers use paragraphs?",

        options: [
            "To organise ideas and make writing easier to read",
            "To make writing confusing",
            "To remove all details",
            "To avoid using sentences"
        ],

        explanation:
            "Paragraphs help readers follow different ideas.",

        difficulty: 1,
        correctAnswer: "To organise ideas and make writing easier to read",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-003",
        skillId: "paragraphStructure",
        question:
            "Which sentence could be the topic sentence of a paragraph about pets?",

        options: [
            "Many people enjoy having pets at home.",
            "The dog's tail was brown.",
            "The cat slept yesterday.",
            "The bowl was blue."
        ],

        explanation:
            "A topic sentence introduces the main idea of the paragraph.",

        difficulty: 1,
        correctAnswer: "Many people enjoy having pets at home.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-004",
        skillId: "paragraphStructure",
        question:
            "What should sentences in the same paragraph usually do?",

        options: [
            "Talk about the same main idea",
            "Discuss completely different topics",
            "Have no connection",
            "Be only questions"
        ],

        explanation:
            "Paragraphs work best when ideas are connected.",

        difficulty: 1,
        correctAnswer: "Talk about the same main idea",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-005",
        skillId: "paragraphStructure",
        question:
            "Which group of sentences makes the best paragraph?",

        options: [
            "All sentences about looking after a dog",
            "Sentences about dogs, cars and holidays mixed together",
            "Random sentences with no connection",
            "Only one word"
        ],

        explanation:
            "A paragraph should focus on one main topic.",

        difficulty: 1,
        correctAnswer: "All sentences about looking after a dog",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-006",
        skillId: "paragraphStructure",
        question:
            "Where does a new paragraph usually begin?",

        options: [
            "When the writer starts a new idea",
            "After every word",
            "Before every punctuation mark",
            "Only at the end of a story"
        ],

        explanation:
            "A new paragraph helps show a change of idea or topic.",

        difficulty: 1,
        correctAnswer: "When the writer starts a new idea",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-007",
        skillId: "paragraphStructure",
        question:
            "Which sentence would fit in a paragraph about a school trip?",

        options: [
            "The class visited the museum and learned about history.",
            "My favourite food is pizza.",
            "The puppy chased the ball.",
            "The car needs fuel."
        ],

        explanation:
            "The sentence stays on the topic of the school trip.",

        difficulty: 1,
        correctAnswer: "The class visited the museum and learned about history.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-008",
        skillId: "paragraphStructure",
        question:
            "What is the purpose of a topic sentence?",

        options: [
            "To introduce the main idea",
            "To end the whole story",
            "To add random information",
            "To ask a question only"
        ],

        explanation:
            "Topic sentences tell the reader what the paragraph is about.",

        difficulty: 1,
        correctAnswer: "To introduce the main idea",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-009",
        skillId: "paragraphStructure",
        question:
            "A paragraph about animals should mostly include:",

        options: [
            "Information about animals",
            "Information about space only",
            "A shopping list",
            "Random ideas"
        ],

        explanation:
            "Paragraphs should keep related information together.",

        difficulty: 1,
        correctAnswer: "Information about animals",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-010",
        skillId: "paragraphStructure",
        question:
            "Why are paragraphs helpful for readers?",

        options: [
            "They make information easier to follow",
            "They remove the need for sentences",
            "They make every story the same",
            "They stop ideas developing"
        ],

        explanation:
            "Paragraphs create clear sections in writing.",

        difficulty: 1,
        correctAnswer: "They make information easier to follow",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-011",
        skillId: "paragraphStructure",
        question:
            "Which sentence would NOT belong in a paragraph about football?",

        options: [
            "My favourite cake is chocolate.",
            "The team scored two goals.",
            "The players trained every day.",
            "The match was exciting."
        ],

        explanation:
            "The cake sentence is about a different topic.",

        difficulty: 2,
        correctAnswer: "My favourite cake is chocolate.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-012",
        skillId: "paragraphStructure",
        question:
            "Put these ideas in the best order:\n\nA. The plants grew taller.\nB. I planted seeds.\nC. I watered them every day.",

        options: [
            "B → C → A",
            "A → B → C",
            "C → A → B",
            "B → A → C"
        ],

        explanation:
            "Planting comes first, then watering, then growth.",

        difficulty: 2,
        correctAnswer: "B → C → A",
        estimatedSeconds: 25,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-013",
        skillId: "paragraphStructure",
        question:
            "Which sentence would make a good ending to a paragraph about friendship?",

        options: [
            "Good friends support each other and have fun together.",
            "The weather was rainy.",
            "My shoes are blue.",
            "The book was heavy."
        ],

        explanation:
            "The sentence links back to the paragraph topic.",

        difficulty: 2,
        correctAnswer: "Good friends support each other and have fun together.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-014",
        skillId: "paragraphStructure",
        question:
            "Which words can help connect ideas in writing?",

        options: [
            "Firstly, next, finally",
            "Cat, dog, fish",
            "Red, blue, green",
            "One, two, three"
        ],

        explanation:
            "Sequencing words help organise writing.",

        difficulty: 2,
        correctAnswer: "Firstly, next, finally",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-015",
        skillId: "paragraphStructure",
        question:
            "A new paragraph is often needed when:",

        options: [
            "The focus changes to a new idea",
            "You write a longer word",
            "You use an adjective",
            "You use a full stop"
        ],

        explanation:
            "Changing ideas often requires a new paragraph.",

        difficulty: 2,
        correctAnswer: "The focus changes to a new idea",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-016",
        skillId: "paragraphStructure",
        question:
            "Which is the best structure for a simple story?",

        options: [
            "Beginning, middle, ending",
            "Ending, beginning, middle",
            "Random order",
            "Only an ending"
        ],

        explanation:
            "Stories usually have a clear beginning, middle and ending.",

        difficulty: 2,
        correctAnswer: "Beginning, middle, ending",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-017",
        skillId: "paragraphStructure",
        question:
            "Why should paragraphs contain related ideas?",

        options: [
            "It helps the reader understand the writing",
            "It makes writing longer",
            "It removes meaning",
            "It prevents creativity"
        ],

        explanation:
            "Organised ideas make writing clearer.",

        difficulty: 2,
        correctAnswer: "It helps the reader understand the writing",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-018",
        skillId: "paragraphStructure",
        question:
            "Which paragraph would be easiest to read?",

        options: [
            "A paragraph with a clear topic and supporting details",
            "A paragraph with random sentences",
            "A paragraph with no main idea",
            "A paragraph with one unfinished sentence"
        ],

        explanation:
            "Clear organisation helps readers understand information.",

        difficulty: 2,
        correctAnswer: "A paragraph with a clear topic and supporting details",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-019",
        skillId: "paragraphStructure",
        question:
            "What should supporting sentences do?",

        options: [
            "Give details about the main idea",
            "Change to a completely different topic",
            "Avoid explaining anything",
            "Only repeat the title"
        ],

        explanation:
            "Supporting sentences add information about the topic sentence.",

        difficulty: 2,
        correctAnswer: "Give details about the main idea",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    },

    {
        id: "eng-ps-020",
        skillId: "paragraphStructure",
        question:
            "Good paragraph structure helps writers:",

        options: [
            "Organise ideas clearly",
            "Remove all details",
            "Avoid planning",
            "Write without meaning"
        ],

        explanation:
            "Good structure helps writers communicate ideas effectively.",

        difficulty: 2,
        correctAnswer: "Organise ideas clearly",
        estimatedSeconds: 20,

        tags: ["english", "writing", "paragraphs"]
    }

    ]

};