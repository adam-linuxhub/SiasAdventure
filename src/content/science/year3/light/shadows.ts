import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const shadows: SkillContent = {

    skillId: "shadows",

    title: "Shadows",

    description:
        "Learn how shadows are formed when light is blocked and investigate how the size and position of shadows can change.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-shadows-001",

        question: "What causes a shadow?",

        options: [
            "An object blocking light",
            "The wind blowing",
            "Rain falling",
            "The object making light"
        ],

        answer: 0,

        explanation:
            "A shadow forms when an opaque object blocks light.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-002",

        question: "When do you usually see your shadow outside?",

        options: [
            "On a sunny day",
            "During heavy rain at night",
            "Inside a closed cupboard",
            "Underwater"
        ],

        answer: 0,

        explanation:
            "Sunlight creates shadows when it is blocked.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-003",

        question: "What does a shadow look like?",

        options: [
            "A dark shape",
            "A bright light",
            "A colourful rainbow",
            "A reflection"
        ],

        answer: 0,

        explanation:
            "A shadow is a dark area where light is blocked.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-004",

        question: "What do you need to make a shadow?",

        options: [
            "A light source and an object",
            "Only a mirror",
            "Only water",
            "Only darkness"
        ],

        answer: 0,

        explanation:
            "A shadow forms when an object blocks light from a light source.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-005",

        question: "Which object could make a shadow?",

        options: [
            "A book",
            "A beam of light",
            "A rainbow",
            "The air"
        ],

        answer: 0,

        explanation:
            "A book blocks light and creates a shadow.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-006",

        question: "What happens to a shadow if the light is switched off?",

        options: [
            "The shadow disappears",
            "The shadow gets brighter",
            "The shadow becomes colourful",
            "Nothing changes"
        ],

        answer: 0,

        explanation:
            "Without a light source there is no shadow.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-007",

        question: "Which light source can make shadows outside during the day?",

        options: [
            "The Sun",
            "The Moon",
            "A mirror",
            "A cloud"
        ],

        answer: 0,

        explanation:
            "The Sun is the main source of light during the day.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "light", "sun", "shadows"]
    },

    {
        id: "sci-shadows-008",

        question: "Why is a shadow dark?",

        options: [
            "Light is blocked",
            "It is painted black",
            "It absorbs colour",
            "It makes darkness"
        ],

        answer: 0,

        explanation:
            "The shadow is dark because light cannot reach that area.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-009",

        question: "Where does a shadow appear?",

        options: [
            "On the side opposite the light source",
            "Inside the light source",
            "Above the Sun",
            "Inside the object"
        ],

        answer: 0,

        explanation:
            "The shadow forms behind the object from the light source.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-010",

        question: "Which statement is true?",

        options: [
            "Shadows are formed when light is blocked.",
            "Shadows produce light.",
            "Shadows are reflections.",
            "Shadows can only happen at night."
        ],

        answer: 0,

        explanation:
            "Blocking light creates a shadow.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-011",

        question: "What happens if you move closer to a torch while making a shadow?",

        options: [
            "Your shadow gets bigger",
            "Your shadow disappears",
            "Your shadow gets brighter",
            "Nothing changes"
        ],

        answer: 0,

        explanation:
            "Moving closer to the light source usually makes the shadow larger.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-012",

        question: "What happens if you move further away from a torch?",

        options: [
            "Your shadow gets smaller",
            "Your shadow becomes colourful",
            "Your shadow disappears immediately",
            "The torch stops shining"
        ],

        answer: 0,

        explanation:
            "Moving away from the light source usually makes the shadow smaller.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-013",

        question: "Which investigation changes the size of a shadow?",

        options: [
            "Moving the object nearer to the light",
            "Changing the colour of the object",
            "Closing your eyes",
            "Painting the wall"
        ],

        answer: 0,

        explanation:
            "The distance between the object and the light source affects shadow size.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "investigation", "shadows"]
    },

    {
        id: "sci-shadows-014",

        question: "Why does your shadow change during the day?",

        options: [
            "The Sun appears to move across the sky",
            "Your body changes size",
            "The ground moves",
            "The air changes colour"
        ],

        answer: 0,

        explanation:
            "As the Sun's position changes, the position and length of shadows change.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "sun", "shadows"]
    },

    {
        id: "sci-shadows-015",

        question: "When is your shadow usually shortest outside?",

        options: [
            "Around the middle of the day",
            "Early morning",
            "Late evening",
            "At midnight"
        ],

        answer: 0,

        explanation:
            "When the Sun is highest in the sky, shadows are usually shortest.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "sun", "shadows"]
    },

    {
        id: "sci-shadows-016",

        question: "What happens if there are two torches shining on one object?",

        options: [
            "More than one shadow may appear",
            "No shadow appears",
            "The object glows",
            "The torches switch off"
        ],

        answer: 0,

        explanation:
            "Each light source can create its own shadow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-017",

        question: "Why can't a shadow exist without light?",

        options: [
            "A shadow is created when light is blocked",
            "Shadows make light",
            "Shadows are made of air",
            "Shadows only appear in mirrors"
        ],

        answer: 0,

        explanation:
            "No light means there is nothing to block, so no shadow forms.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-018",

        question: "A child moves a toy closer to a lamp. What happens to its shadow?",

        options: [
            "It becomes larger",
            "It disappears",
            "It becomes lighter",
            "It changes colour"
        ],

        answer: 0,

        explanation:
            "Objects nearer the light source usually produce larger shadows.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-019",

        question: "What is the best way to investigate shadows?",

        options: [
            "Change one thing at a time",
            "Change everything together",
            "Use no light source",
            "Close your eyes"
        ],

        answer: 0,

        explanation:
            "A fair test changes only one variable at a time.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "working-scientifically", "investigation", "shadows"]
    },

    {
        id: "sci-shadows-020",

        question: "Which sentence best explains how shadows are formed?",

        options: [
            "A shadow forms when an opaque object blocks light from a light source.",
            "Shadows make light disappear.",
            "Shadows are reflections in mirrors.",
            "Shadows only happen at night."
        ],

        answer: 0,

        explanation:
            "Shadows are created whenever light is blocked by an opaque object.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "light", "shadows", "light-source"]
    }

    ]

};