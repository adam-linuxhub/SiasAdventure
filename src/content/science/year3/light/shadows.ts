import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const shadows: SkillContent = {

    skillId: "shadows",

    title: "Shadows",

    description:
        "Learn how shadows are formed when light is blocked and investigate how the size and position of shadows can change.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-shadows-001",
        skillId: "shadows",
        question: "What causes a shadow?",
        stage: "recognise",
        options: [
            "An object blocking light",
            "The wind blowing",
            "Rain falling",
            "The object making light"
        ],

        explanation:
            "A shadow forms when an opaque object blocks light.",

        difficulty: 1,
        correctAnswer: "An object blocking light",
        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-002",
        skillId: "shadows",
        question: "When do you usually see your shadow outside?",
        stage: "recognise",
        options: [
            "On a sunny day",
            "During heavy rain at night",
            "Inside a closed cupboard",
            "Underwater"
        ],

        explanation:
            "Sunlight creates shadows when it is blocked.",

        difficulty: 1,
        correctAnswer: "On a sunny day",
        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-003",
        skillId: "shadows",
        question: "What does a shadow look like?",
        stage: "recognise",
        options: [
            "A dark shape",
            "A bright light",
            "A colourful rainbow",
            "A reflection"
        ],

        explanation:
            "A shadow is a dark area where light is blocked.",

        difficulty: 1,
        correctAnswer: "A dark shape",
        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-004",
        skillId: "shadows",
        question: "What do you need to make a shadow?",
        stage: "recognise",
        options: [
            "A light source and an object",
            "Only a mirror",
            "Only water",
            "Only darkness"
        ],

        explanation:
            "A shadow forms when an object blocks light from a light source.",

        difficulty: 1,
        correctAnswer: "A light source and an object",
        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-005",
        skillId: "shadows",
        question: "Which object could make a shadow?",
        stage: "recognise",
        options: [
            "A book",
            "A beam of light",
            "A rainbow",
            "The air"
        ],

        explanation:
            "A book blocks light and creates a shadow.",

        difficulty: 1,
        correctAnswer: "A book",
        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-006",
        skillId: "shadows",
        question: "What happens to a shadow if the light is switched off?",
        stage: "recognise",
        options: [
            "The shadow disappears",
            "The shadow gets brighter",
            "The shadow becomes colourful",
            "Nothing changes"
        ],

        explanation:
            "Without a light source there is no shadow.",

        difficulty: 1,
        correctAnswer: "The shadow disappears",
        estimatedSeconds: 15,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-007",
        skillId: "shadows",
        question: "Which light source can make shadows outside during the day?",
        stage: "recognise",
        options: [
            "The Sun",
            "The Moon",
            "A mirror",
            "A cloud"
        ],

        explanation:
            "The Sun is the main source of light during the day.",

        difficulty: 1,
        correctAnswer: "The Sun",
        estimatedSeconds: 15,

        tags: ["science", "light", "sun", "shadows"]
    },

    {
        id: "sci-shadows-008",
        skillId: "shadows",
        question: "Why is a shadow dark?",
        stage: "recognise",
        options: [
            "Light is blocked",
            "It is painted black",
            "It absorbs colour",
            "It makes darkness"
        ],

        explanation:
            "The shadow is dark because light cannot reach that area.",

        difficulty: 1,
        correctAnswer: "Light is blocked",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-009",
        skillId: "shadows",
        question: "Where does a shadow appear?",
        stage: "recognise",
        options: [
            "On the side opposite the light source",
            "Inside the light source",
            "Above the Sun",
            "Inside the object"
        ],

        explanation:
            "The shadow forms behind the object from the light source.",

        difficulty: 1,
        correctAnswer: "On the side opposite the light source",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-010",
        skillId: "shadows",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Shadows are formed when light is blocked.",
            "Shadows produce light.",
            "Shadows are reflections.",
            "Shadows can only happen at night."
        ],

        explanation:
            "Blocking light creates a shadow.",

        difficulty: 1,
        correctAnswer: "Shadows are formed when light is blocked.",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-011",
        skillId: "shadows",
        question: "What happens if you move closer to a torch while making a shadow?",
        stage: "recognise",
        options: [
            "Your shadow gets bigger",
            "Your shadow disappears",
            "Your shadow gets brighter",
            "Nothing changes"
        ],

        explanation:
            "Moving closer to the light source usually makes the shadow larger.",

        difficulty: 2,
        correctAnswer: "Your shadow gets bigger",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-012",
        skillId: "shadows",
        question: "What happens if you move further away from a torch?",
        stage: "recognise",
        options: [
            "Your shadow gets smaller",
            "Your shadow becomes colourful",
            "Your shadow disappears immediately",
            "The torch stops shining"
        ],

        explanation:
            "Moving away from the light source usually makes the shadow smaller.",

        difficulty: 2,
        correctAnswer: "Your shadow gets smaller",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-013",
        skillId: "shadows",
        question: "Which investigation changes the size of a shadow?",
        stage: "recognise",
        options: [
            "Moving the object nearer to the light",
            "Changing the colour of the object",
            "Closing your eyes",
            "Painting the wall"
        ],

        explanation:
            "The distance between the object and the light source affects shadow size.",

        difficulty: 2,
        correctAnswer: "Moving the object nearer to the light",
        estimatedSeconds: 20,

        tags: ["science", "light", "investigation", "shadows"]
    },

    {
        id: "sci-shadows-014",
        skillId: "shadows",
        question: "Why does your shadow change during the day?",
        stage: "recognise",
        options: [
            "The Sun appears to move across the sky",
            "Your body changes size",
            "The ground moves",
            "The air changes colour"
        ],

        explanation:
            "As the Sun's position changes, the position and length of shadows change.",

        difficulty: 2,
        correctAnswer: "The Sun appears to move across the sky",
        estimatedSeconds: 20,

        tags: ["science", "light", "sun", "shadows"]
    },

    {
        id: "sci-shadows-015",
        skillId: "shadows",
        question: "When is your shadow usually shortest outside?",
        stage: "recognise",
        options: [
            "Around the middle of the day",
            "Early morning",
            "Late evening",
            "At midnight"
        ],

        explanation:
            "When the Sun is highest in the sky, shadows are usually shortest.",

        difficulty: 2,
        correctAnswer: "Around the middle of the day",
        estimatedSeconds: 20,

        tags: ["science", "light", "sun", "shadows"]
    },

    {
        id: "sci-shadows-016",
        skillId: "shadows",
        question: "What happens if there are two torches shining on one object?",
        stage: "recognise",
        options: [
            "More than one shadow may appear",
            "No shadow appears",
            "The object glows",
            "The torches switch off"
        ],

        explanation:
            "Each light source can create its own shadow.",

        difficulty: 2,
        correctAnswer: "More than one shadow may appear",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-017",
        skillId: "shadows",
        question: "Why can't a shadow exist without light?",
        stage: "recognise",
        options: [
            "A shadow is created when light is blocked",
            "Shadows make light",
            "Shadows are made of air",
            "Shadows only appear in mirrors"
        ],

        explanation:
            "No light means there is nothing to block, so no shadow forms.",

        difficulty: 2,
        correctAnswer: "A shadow is created when light is blocked",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-018",
        skillId: "shadows",
        question: "A child moves a toy closer to a lamp. What happens to its shadow?",
        stage: "recognise",
        options: [
            "It becomes larger",
            "It disappears",
            "It becomes lighter",
            "It changes colour"
        ],

        explanation:
            "Objects nearer the light source usually produce larger shadows.",

        difficulty: 2,
        correctAnswer: "It becomes larger",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows"]
    },

    {
        id: "sci-shadows-019",
        skillId: "shadows",
        question: "What is the best way to investigate shadows?",
        stage: "recognise",
        options: [
            "Change one thing at a time",
            "Change everything together",
            "Use no light source",
            "Close your eyes"
        ],

        explanation:
            "A fair test changes only one variable at a time.",

        difficulty: 2,
        correctAnswer: "Change one thing at a time",
        estimatedSeconds: 20,

        tags: ["science", "working-scientifically", "investigation", "shadows"]
    },

    {
        id: "sci-shadows-020",
        skillId: "shadows",
        question: "Which sentence best explains how shadows are formed?",
        stage: "recognise",
        options: [
            "A shadow forms when an opaque object blocks light from a light source.",
            "Shadows make light disappear.",
            "Shadows are reflections in mirrors.",
            "Shadows only happen at night."
        ],

        explanation:
            "Shadows are created whenever light is blocked by an opaque object.",

        difficulty: 2,
        correctAnswer: "A shadow forms when an opaque object blocks light from a light source.",
        estimatedSeconds: 20,

        tags: ["science", "light", "shadows", "light-source"]
    }

    ]

};


export default shadows;

export {

    shadows

};
