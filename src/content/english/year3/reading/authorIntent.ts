import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const authorIntent: SkillContent = {

    skillId: "authorIntent",

    title: "Author Intent",

    description:
        "Learn how to identify why an author has written a text: to inform, entertain, persuade or explain.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-ai-001",
        skillId: "authorIntent",
        question:
            "Why might an author write a text?",
        stage: "recognise",
        options: [
            "To inform, entertain, persuade or explain",
            "To make every word longer",
            "To use as many letters as possible",
            "To avoid sharing ideas"
        ],

        explanation:
            "Authors write for different purposes, including informing, entertaining, persuading and explaining.",

        difficulty: 1,
        correctAnswer: "To inform, entertain, persuade or explain",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-002",
        skillId: "authorIntent",
        question:
            "A newspaper article explaining yesterday's weather was written to:",
        stage: "recognise",
        options: [
            "Inform",
            "Entertain",
            "Tell a joke",
            "Create a story"
        ],

        explanation:
            "The article gives facts about the weather, so it is written to inform.",

        difficulty: 1,
        correctAnswer: "Inform",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-003",
        skillId: "authorIntent",
        question:
            "A funny story about a talking animal was probably written to:",
        stage: "recognise",
        options: [
            "Entertain",
            "Persuade",
            "Give instructions",
            "Advertise"
        ],

        explanation:
            "Funny stories are usually written to entertain readers.",

        difficulty: 1,
        correctAnswer: "Entertain",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-004",
        skillId: "authorIntent",
        question:
            "An advert saying 'Buy this amazing toy today!' was written to:",
        stage: "recognise",
        options: [
            "Persuade",
            "Inform",
            "Explain",
            "Tell a story"
        ],

        explanation:
            "The advert is trying to convince people to buy something.",

        difficulty: 1,
        correctAnswer: "Persuade",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-005",
        skillId: "authorIntent",
        question:
            "A book explaining how volcanoes erupt was written to:",
        stage: "recognise",
        options: [
            "Explain",
            "Entertain",
            "Persuade",
            "Make readers laugh"
        ],

        explanation:
            "The book explains how something happens.",

        difficulty: 1,
        correctAnswer: "Explain",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-006",
        skillId: "authorIntent",
        question:
            "A recipe is usually written to:",
        stage: "recognise",
        options: [
            "Give instructions",
            "Tell a joke",
            "Persuade people",
            "Create a character"
        ],

        explanation:
            "Recipes explain how to make something step by step.",

        difficulty: 1,
        correctAnswer: "Give instructions",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-007",
        skillId: "authorIntent",
        question:
            "A fairy tale about a princess and a dragon is mainly written to:",
        stage: "recognise",
        options: [
            "Entertain",
            "Give scientific facts",
            "Advertise a product",
            "Explain a process"
        ],

        explanation:
            "Stories are usually written to entertain readers.",

        difficulty: 1,
        correctAnswer: "Entertain",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-008",
        skillId: "authorIntent",
        question:
            "A leaflet explaining how to recycle is written to:",
        stage: "recognise",
        options: [
            "Inform",
            "Entertain",
            "Create suspense",
            "Tell a fantasy story"
        ],

        explanation:
            "The leaflet provides information about recycling.",

        difficulty: 1,
        correctAnswer: "Inform",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-009",
        skillId: "authorIntent",
        question:
            "Which words are clues that a text may be trying to persuade you?",
        stage: "recognise",
        options: [
            "You should, best, amazing, must",
            "Once upon a time",
            "Yesterday, last week",
            "First, next, finally"
        ],

        explanation:
            "Persuasive texts often use words that encourage people to agree or take action.",

        difficulty: 1,
        correctAnswer: "You should, best, amazing, must",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-010",
        skillId: "authorIntent",
        question:
            "Why is it useful to know an author's purpose?",
        stage: "recognise",
        options: [
            "It helps you understand the text better",
            "It helps you count words",
            "It changes the ending",
            "It makes reading faster every time"
        ],

        explanation:
            "Knowing why a text was written helps readers understand its meaning.",

        difficulty: 1,
        correctAnswer: "It helps you understand the text better",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-011",
        skillId: "authorIntent",
        question:
            "A website explaining facts about dinosaurs is most likely written to:",
        stage: "recognise",
        options: [
            "Inform",
            "Entertain only",
            "Persuade people to buy dinosaurs",
            "Tell a fictional story"
        ],

        explanation:
            "Fact websites are usually written to give information.",

        difficulty: 2,
        correctAnswer: "Inform",
        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-012",
        skillId: "authorIntent",
        question:
            "A poster saying 'Join our clean-up day and help save the planet!' is written to:",
        stage: "recognise",
        options: [
            "Persuade",
            "Explain a science experiment",
            "Tell a story",
            "Describe a character"
        ],

        explanation:
            "The poster encourages people to take action.",

        difficulty: 2,
        correctAnswer: "Persuade",
        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-013",
        skillId: "authorIntent",
        question:
            "A science book explaining the water cycle is written mainly to:",
        stage: "recognise",
        options: [
            "Explain",
            "Entertain",
            "Sell toys",
            "Create a mystery"
        ],

        explanation:
            "The purpose is to explain how the water cycle works.",

        difficulty: 2,
        correctAnswer: "Explain",
        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-014",
        skillId: "authorIntent",
        question:
            "A joke book is mainly written to:",
        stage: "recognise",
        options: [
            "Entertain",
            "Inform",
            "Explain",
            "Persuade"
        ],

        explanation:
            "Joke books are designed to make readers laugh.",

        difficulty: 2,
        correctAnswer: "Entertain",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-015",
        skillId: "authorIntent",
        question:
            "Which feature suggests a text is meant to inform?",
        stage: "recognise",
        options: [
            "Facts and information",
            "Funny characters",
            "A call to buy something",
            "A made-up adventure"
        ],

        explanation:
            "Informative texts usually contain facts.",

        difficulty: 2,
        correctAnswer: "Facts and information",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-016",
        skillId: "authorIntent",
        question:
            "A travel brochure saying 'Visit the beautiful beaches of Spain!' is trying to:",
        stage: "recognise",
        options: [
            "Persuade people to visit",
            "Explain how beaches form",
            "Tell a fantasy story",
            "Give a weather report"
        ],

        explanation:
            "Travel brochures often persuade people to visit places.",

        difficulty: 2,
        correctAnswer: "Persuade people to visit",
        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-017",
        skillId: "authorIntent",
        question:
            "A set of instructions for building a model plane is written to:",
        stage: "recognise",
        options: [
            "Explain how to do something",
            "Tell a joke",
            "Entertain with a story",
            "Persuade people to fly"
        ],

        explanation:
            "Instructions explain steps to complete a task.",

        difficulty: 2,
        correctAnswer: "Explain how to do something",
        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-018",
        skillId: "authorIntent",
        question:
            "A character in a story feeling nervous before a race helps the author to:",
        stage: "recognise",
        options: [
            "Entertain and engage the reader",
            "Give a set of instructions",
            "Advertise a product",
            "Share only facts"
        ],

        explanation:
            "Story details are used to entertain and involve readers.",

        difficulty: 2,
        correctAnswer: "Entertain and engage the reader",
        estimatedSeconds: 25,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-019",
        skillId: "authorIntent",
        question:
            "Which question helps you find an author's purpose?",
        stage: "recognise",
        options: [
            "Why did the author write this text?",
            "How many letters are in the title?",
            "What is the longest word?",
            "How many pages are there?"
        ],

        explanation:
            "The author's purpose is the reason the text was written.",

        difficulty: 2,
        correctAnswer: "Why did the author write this text?",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    },

    {
        id: "eng-ai-020",
        skillId: "authorIntent",
        question:
            "A good reader should think about:",
        stage: "recognise",
        options: [
            "The author's reason for writing",
            "Only the pictures",
            "Only the first sentence",
            "Only difficult words"
        ],

        explanation:
            "Understanding author intent helps readers understand texts more deeply.",

        difficulty: 2,
        correctAnswer: "The author's reason for writing",
        estimatedSeconds: 20,

        tags: ["english", "reading", "author-intent"]
    }

    ]

};