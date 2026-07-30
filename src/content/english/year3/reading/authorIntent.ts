import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const authorIntent: SkillContent = {

    skillId: "authorIntent",

    title: "Author Intent",

    description:
        "Learn how to identify why an author has written a text: to inform, entertain, persuade or explain.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-ai-001",

        question:
            "Why might an author write a text?",

        options: [
            "To inform, entertain, persuade or explain",
            "To make every word longer",
            "To use as many letters as possible",
            "To avoid sharing ideas"
        ],

        answer: 0,

        explanation:
            "Authors write for different purposes, including informing, entertaining, persuading and explaining.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-002",

        question:
            "A newspaper article explaining yesterday's weather was written to:",

        options: [
            "Inform",
            "Entertain",
            "Tell a joke",
            "Create a story"
        ],

        answer: 0,

        explanation:
            "The article gives facts about the weather, so it is written to inform.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-003",

        question:
            "A funny story about a talking animal was probably written to:",

        options: [
            "Entertain",
            "Persuade",
            "Give instructions",
            "Advertise"
        ],

        answer: 0,

        explanation:
            "Funny stories are usually written to entertain readers.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-004",

        question:
            "An advert saying 'Buy this amazing toy today!' was written to:",

        options: [
            "Persuade",
            "Inform",
            "Explain",
            "Tell a story"
        ],

        answer: 0,

        explanation:
            "The advert is trying to convince people to buy something.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-005",

        question:
            "A book explaining how volcanoes erupt was written to:",

        options: [
            "Explain",
            "Entertain",
            "Persuade",
            "Make readers laugh"
        ],

        answer: 0,

        explanation:
            "The book explains how something happens.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-006",

        question:
            "A recipe is usually written to:",

        options: [
            "Give instructions",
            "Tell a joke",
            "Persuade people",
            "Create a character"
        ],

        answer: 0,

        explanation:
            "Recipes explain how to make something step by step.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-007",

        question:
            "A fairy tale about a princess and a dragon is mainly written to:",

        options: [
            "Entertain",
            "Give scientific facts",
            "Advertise a product",
            "Explain a process"
        ],

        answer: 0,

        explanation:
            "Stories are usually written to entertain readers.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-008",

        question:
            "A leaflet explaining how to recycle is written to:",

        options: [
            "Inform",
            "Entertain",
            "Create suspense",
            "Tell a fantasy story"
        ],

        answer: 0,

        explanation:
            "The leaflet provides information about recycling.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-009",

        question:
            "Which words are clues that a text may be trying to persuade you?",

        options: [
            "You should, best, amazing, must",
            "Once upon a time",
            "Yesterday, last week",
            "First, next, finally"
        ],

        answer: 0,

        explanation:
            "Persuasive texts often use words that encourage people to agree or take action.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-010",

        question:
            "Why is it useful to know an author's purpose?",

        options: [
            "It helps you understand the text better",
            "It helps you count words",
            "It changes the ending",
            "It makes reading faster every time"
        ],

        answer: 0,

        explanation:
            "Knowing why a text was written helps readers understand its meaning.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-011",

        question:
            "A website explaining facts about dinosaurs is most likely written to:",

        options: [
            "Inform",
            "Entertain only",
            "Persuade people to buy dinosaurs",
            "Tell a fictional story"
        ],

        answer: 0,

        explanation:
            "Fact websites are usually written to give information.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-012",

        question:
            "A poster saying 'Join our clean-up day and help save the planet!' is written to:",

        options: [
            "Persuade",
            "Explain a science experiment",
            "Tell a story",
            "Describe a character"
        ],

        answer: 0,

        explanation:
            "The poster encourages people to take action.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-013",

        question:
            "A science book explaining the water cycle is written mainly to:",

        options: [
            "Explain",
            "Entertain",
            "Sell toys",
            "Create a mystery"
        ],

        answer: 0,

        explanation:
            "The purpose is to explain how the water cycle works.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-014",

        question:
            "A joke book is mainly written to:",

        options: [
            "Entertain",
            "Inform",
            "Explain",
            "Persuade"
        ],

        answer: 0,

        explanation:
            "Joke books are designed to make readers laugh.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-015",

        question:
            "Which feature suggests a text is meant to inform?",

        options: [
            "Facts and information",
            "Funny characters",
            "A call to buy something",
            "A made-up adventure"
        ],

        answer: 0,

        explanation:
            "Informative texts usually contain facts.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-016",

        question:
            "A travel brochure saying 'Visit the beautiful beaches of Spain!' is trying to:",

        options: [
            "Persuade people to visit",
            "Explain how beaches form",
            "Tell a fantasy story",
            "Give a weather report"
        ],

        answer: 0,

        explanation:
            "Travel brochures often persuade people to visit places.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-017",

        question:
            "A set of instructions for building a model plane is written to:",

        options: [
            "Explain how to do something",
            "Tell a joke",
            "Entertain with a story",
            "Persuade people to fly"
        ],

        answer: 0,

        explanation:
            "Instructions explain steps to complete a task.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-018",

        question:
            "A character in a story feeling nervous before a race helps the author to:",

        options: [
            "Entertain and engage the reader",
            "Give a set of instructions",
            "Advertise a product",
            "Share only facts"
        ],

        answer: 0,

        explanation:
            "Story details are used to entertain and involve readers.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-019",

        question:
            "Which question helps you find an author's purpose?",

        options: [
            "Why did the author write this text?",
            "How many letters are in the title?",
            "What is the longest word?",
            "How many pages are there?"
        ],

        answer: 0,

        explanation:
            "The author's purpose is the reason the text was written.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-020",

        question:
            "A good reader should think about:",

        options: [
            "The author's reason for writing",
            "Only the pictures",
            "Only the first sentence",
            "Only difficult words"
        ],

        answer: 0,

        explanation:
            "Understanding author intent helps readers understand texts more deeply.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    }

    ]

};