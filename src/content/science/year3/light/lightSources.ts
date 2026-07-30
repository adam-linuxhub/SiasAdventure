import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const lightSources: SkillContent = {

    skillId: "lightSources",

    title: "Light Sources",

    description:
        "Learn that we need light to see things, recognise different sources of light and understand that darkness is the absence of light.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-light-sources-001",
        question: "Why do we need light?",
        options: [
            "To see things",
            "To hear sounds",
            "To taste food",
            "To breathe"
        ],
        answer: 0,
        explanation: "We need light to see objects around us.",
        difficulty: 1,
        estimatedSeconds: 15,
        tags: ["science","light","seeing"]
    },

    {
        id: "sci-light-sources-002",
        question: "Which is a natural source of light?",
        options: [
            "The Sun",
            "The Moon",
            "A chair",
            "A book"
        ],
        answer: 0,
        explanation: "The Sun produces its own light.",
        difficulty: 1,
        estimatedSeconds: 15,
        tags: ["science","light","sources"]
    },

    {
        id: "sci-light-sources-003",
        question: "Which is a man-made source of light?",
        options: [
            "A torch",
            "A rock",
            "A tree",
            "A table"
        ],
        answer: 0,
        explanation: "A torch produces light using a battery.",
        difficulty: 1,
        estimatedSeconds: 15,
        tags: ["science","light","sources"]
    },

    {
        id: "sci-light-sources-004",
        question: "Which object does NOT produce its own light?",
        options: [
            "The Moon",
            "The Sun",
            "A candle",
            "A light bulb"
        ],
        answer: 0,
        explanation: "The Moon reflects light from the Sun but does not make its own light.",
        difficulty: 1,
        estimatedSeconds: 15,
        tags: ["science","light","moon"]
    },

    {
        id: "sci-light-sources-005",
        question: "What is darkness?",
        options: [
            "The absence of light",
            "A type of light",
            "A colour",
            "A shadow"
        ],
        answer: 0,
        explanation: "Darkness is what we have when there is very little or no light.",
        difficulty: 1,
        estimatedSeconds: 15,
        tags: ["science","light","darkness"]
    },

    {
        id: "sci-light-sources-006",
        question: "Which object gives off light?",
        options: [
            "A candle",
            "A mirror",
            "A football",
            "A pencil"
        ],
        answer: 0,
        explanation: "A burning candle produces its own light.",
        difficulty: 1,
        estimatedSeconds: 15,
        tags: ["science","light","sources"]
    },

    {
        id: "sci-light-sources-007",
        question: "What helps you see in a dark room?",
        options: [
            "Turning on a lamp",
            "Closing your eyes",
            "Putting on shoes",
            "Opening a book"
        ],
        answer: 0,
        explanation: "A lamp produces light, allowing you to see.",
        difficulty: 1,
        estimatedSeconds: 15,
        tags: ["science","light","seeing"]
    },

    {
        id: "sci-light-sources-008",
        question: "Which object reflects light instead of making it?",
        options: [
            "A mirror",
            "The Sun",
            "A torch",
            "A candle"
        ],
        answer: 0,
        explanation: "A mirror reflects light from another source.",
        difficulty: 1,
        estimatedSeconds: 20,
        tags: ["science","light","reflection"]
    },

    {
        id: "sci-light-sources-009",
        question: "Which source gives us light during the day?",
        options: [
            "The Sun",
            "A torch",
            "A candle",
            "A television"
        ],
        answer: 0,
        explanation: "The Sun is Earth's main natural source of light.",
        difficulty: 1,
        estimatedSeconds: 20,
        tags: ["science","light","sun"]
    },

    {
        id: "sci-light-sources-010",
        question: "Why is it difficult to see in complete darkness?",
        options: [
            "There is no light to reach your eyes",
            "Your eyes stop working",
            "Objects disappear",
            "The air becomes too dark"
        ],
        answer: 0,
        explanation: "Without light entering our eyes, we cannot see objects.",
        difficulty: 1,
        estimatedSeconds: 20,
        tags: ["science","light","seeing"]
    },

    {
        id: "sci-light-sources-011",
        question: "Which pair are both sources of light?",
        options: [
            "The Sun and a torch",
            "The Moon and a mirror",
            "A mirror and a book",
            "A rock and a tree"
        ],
        answer: 0,
        explanation: "Both the Sun and a torch produce their own light.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","sources"]
    },

    {
        id: "sci-light-sources-012",
        question: "Why can we see the Moon at night?",
        options: [
            "It reflects light from the Sun",
            "It produces its own light",
            "It glows because it is hot",
            "It shines because of stars"
        ],
        answer: 0,
        explanation: "The Moon reflects sunlight towards Earth.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","moon","reflection"]
    },

    {
        id: "sci-light-sources-013",
        question: "Which statement is true?",
        options: [
            "We need light to see objects.",
            "Light is only needed at night.",
            "Darkness helps us see better.",
            "The Moon makes its own light."
        ],
        answer: 0,
        explanation: "Light allows our eyes to detect objects.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","seeing"]
    },

    {
        id: "sci-light-sources-014",
        question: "Which object would help you most during a power cut?",
        options: [
            "A torch",
            "A cushion",
            "A spoon",
            "A ruler"
        ],
        answer: 0,
        explanation: "A torch is a portable source of light.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","sources"]
    },

    {
        id: "sci-light-sources-015",
        question: "Which is NOT a source of light?",
        options: [
            "A mirror",
            "A candle",
            "A light bulb",
            "The Sun"
        ],
        answer: 0,
        explanation: "A mirror only reflects light from another source.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","reflection"]
    },

    {
        id: "sci-light-sources-016",
        question: "A room has no windows or lights. What will it be like?",
        options: [
            "Dark",
            "Bright",
            "Sunny",
            "Shiny"
        ],
        answer: 0,
        explanation: "Without a source of light, the room will be dark.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","darkness"]
    },

    {
        id: "sci-light-sources-017",
        question: "Which object would be easiest to see in complete darkness?",
        options: [
            "A switched-on torch",
            "A book",
            "A football",
            "A shoe"
        ],
        answer: 0,
        explanation: "Objects that produce light can be seen in darkness.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","sources"]
    },

    {
        id: "sci-light-sources-018",
        question: "Why do shadows disappear when a room becomes completely dark?",
        options: [
            "There is no light to block",
            "The shadows hide",
            "Objects disappear",
            "The floor absorbs them"
        ],
        answer: 0,
        explanation: "Shadows need a light source. Without light, there are no shadows.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","shadows"]
    },

    {
        id: "sci-light-sources-019",
        question: "What is the main natural source of light for Earth?",
        options: [
            "The Sun",
            "The Moon",
            "The stars",
            "Lightning"
        ],
        answer: 0,
        explanation: "Almost all the natural light we use during the day comes from the Sun.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","sun"]
    },

    {
        id: "sci-light-sources-020",
        question: "Which sentence best describes light?",
        options: [
            "Light lets us see objects and comes from different sources.",
            "Light only comes from the Sun.",
            "The Moon is the brightest source of light.",
            "Darkness is a type of light."
        ],
        answer: 0,
        explanation: "Light can come from natural and man-made sources, allowing us to see the world around us.",
        difficulty: 2,
        estimatedSeconds: 20,
        tags: ["science","light","sources","seeing"]
    }

    ]

};