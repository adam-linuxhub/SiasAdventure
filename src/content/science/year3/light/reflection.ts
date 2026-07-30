import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const reflection: SkillContent = {

    skillId: "reflection",

    title: "Reflection",

    description:
        "Learn that light is reflected from surfaces and that we see objects because light reflects into our eyes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-reflection-001",
        skillId: "reflection",
        question: "Why can we see most objects?",

        options: [
            "Light reflects from them into our eyes",
            "They make their own light",
            "They glow in the dark",
            "They produce electricity"
        ],

        explanation: "Most objects do not produce light. We see them because light reflects from them into our eyes.",

        difficulty: 1,
        correctAnswer: "Light reflects from them into our eyes",
        estimatedSeconds: 15,

        tags: ["science", "light", "reflection"]
    },

    {
        id: "sci-reflection-002",
        skillId: "reflection",
        question: "What happens when light hits a mirror?",

        options: [
            "It reflects",
            "It disappears",
            "It freezes",
            "It turns into sound"
        ],

        explanation: "Mirrors reflect almost all of the light that reaches them.",

        difficulty: 1,
        correctAnswer: "It reflects",
        estimatedSeconds: 15,

        tags: ["science", "light", "reflection", "mirrors"]
    },

    {
        id: "sci-reflection-003",
        skillId: "reflection",
        question: "Which object reflects light well?",

        options: [
            "A mirror",
            "A sponge",
            "A jumper",
            "A pillow"
        ],

        explanation: "Smooth, shiny surfaces like mirrors reflect light very well.",

        difficulty: 1,
        correctAnswer: "A mirror",
        estimatedSeconds: 15,

        tags: ["science", "reflection", "mirrors"]
    },

    {
        id: "sci-reflection-004",
        skillId: "reflection",
        question: "Which surface reflects the most light?",

        options: [
            "A shiny mirror",
            "A rough carpet",
            "A woolly jumper",
            "A muddy path"
        ],

        explanation: "Smooth, shiny surfaces reflect more light than rough surfaces.",

        difficulty: 1,
        correctAnswer: "A shiny mirror",
        estimatedSeconds: 15,

        tags: ["science", "reflection", "surfaces"]
    },

    {
        id: "sci-reflection-005",
        skillId: "reflection",
        question: "Can a book be seen because it reflects light?",

        options: [
            "Yes",
            "No",
            "Only at night",
            "Only in the rain"
        ],

        explanation: "Books do not make light. They reflect light into our eyes.",

        difficulty: 1,
        correctAnswer: "Yes",
        estimatedSeconds: 15,

        tags: ["science", "reflection", "seeing"]
    },

    {
        id: "sci-reflection-006",
        skillId: "reflection",
        question: "Which object makes its own light?",

        options: [
            "A candle",
            "A mirror",
            "A chair",
            "A book"
        ],

        explanation: "A candle is a light source. The other objects only reflect light.",

        difficulty: 1,
        correctAnswer: "A candle",
        estimatedSeconds: 15,

        tags: ["science", "light", "sources"]
    },

    {
        id: "sci-reflection-007",
        skillId: "reflection",
        question: "What do mirrors do?",

        options: [
            "Reflect light",
            "Absorb all light",
            "Create shadows",
            "Produce electricity"
        ],

        explanation: "Mirrors reflect light, allowing us to see images.",

        difficulty: 1,
        correctAnswer: "Reflect light",
        estimatedSeconds: 15,

        tags: ["science", "reflection", "mirrors"]
    },

    {
        id: "sci-reflection-008",
        skillId: "reflection",
        question: "Which surface would reflect the least light?",

        options: [
            "A dark, rough wall",
            "A shiny mirror",
            "A polished spoon",
            "A clean window"
        ],

        explanation: "Dark, rough surfaces reflect less light than smooth, shiny ones.",

        difficulty: 1,
        correctAnswer: "A dark, rough wall",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "surfaces"]
    },

    {
        id: "sci-reflection-009",
        skillId: "reflection",
        question: "Why can you see yourself in a mirror?",

        options: [
            "It reflects light from your body",
            "It makes a copy of you",
            "It produces its own picture",
            "It shines like the Sun"
        ],

        explanation: "The mirror reflects light from your body into your eyes.",

        difficulty: 1,
        correctAnswer: "It reflects light from your body",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "mirrors"]
    },

    {
        id: "sci-reflection-010",
        skillId: "reflection",
        question: "Which statement is true?",

        options: [
            "Most objects reflect light.",
            "Most objects make their own light.",
            "Mirrors absorb light.",
            "Books produce light."
        ],

        explanation: "Most objects are seen because they reflect light.",

        difficulty: 1,
        correctAnswer: "Most objects reflect light.",
        estimatedSeconds: 20,

        tags: ["science", "reflection"]
    },

    {
        id: "sci-reflection-011",
        skillId: "reflection",
        question: "Why is it harder to see a black jumper at night than a white one?",

        options: [
            "It reflects less light.",
            "It disappears.",
            "It becomes invisible.",
            "It produces darkness."
        ],

        explanation: "Dark objects usually reflect less light than lighter objects.",

        difficulty: 2,
        correctAnswer: "It reflects less light.",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "light"]
    },

    {
        id: "sci-reflection-012",
        skillId: "reflection",
        question: "Which material would make the best mirror?",

        options: [
            "Smooth polished glass",
            "Cardboard",
            "Fabric",
            "Sand"
        ],

        explanation: "Mirrors need smooth, shiny surfaces to reflect light clearly.",

        difficulty: 2,
        correctAnswer: "Smooth polished glass",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "mirrors"]
    },

    {
        id: "sci-reflection-013",
        skillId: "reflection",
        question: "Why can you still see a tree even though it is not a light source?",

        options: [
            "It reflects sunlight.",
            "It glows.",
            "It produces electricity.",
            "It shines at night."
        ],

        explanation: "Trees reflect light from the Sun into our eyes.",

        difficulty: 2,
        correctAnswer: "It reflects sunlight.",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "sunlight"]
    },

    {
        id: "sci-reflection-014",
        skillId: "reflection",
        question: "Which object reflects light the best?",

        options: [
            "A shiny metal spoon",
            "A wool blanket",
            "A muddy boot",
            "A cardboard box"
        ],

        explanation: "Smooth, shiny metal reflects light well.",

        difficulty: 2,
        correctAnswer: "A shiny metal spoon",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "surfaces"]
    },

    {
        id: "sci-reflection-015",
        skillId: "reflection",
        question: "What must happen before you can see an object?",

        options: [
            "Light must enter your eyes.",
            "The object must make sound.",
            "The object must move.",
            "The object must be warm."
        ],

        explanation: "We see objects when light reaches our eyes.",

        difficulty: 2,
        correctAnswer: "Light must enter your eyes.",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "seeing"]
    },

    {
        id: "sci-reflection-016",
        skillId: "reflection",
        question: "Why are road signs often shiny?",

        options: [
            "They reflect light from car headlights.",
            "They produce their own light.",
            "They absorb light.",
            "They stop shadows."
        ],

        explanation: "Reflective signs are easier to see at night because they reflect headlights.",

        difficulty: 2,
        correctAnswer: "They reflect light from car headlights.",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "everyday-life"]
    },

    {
        id: "sci-reflection-017",
        skillId: "reflection",
        question: "Which statement about mirrors is correct?",

        options: [
            "They reflect light into our eyes.",
            "They make sunlight.",
            "They create electricity.",
            "They absorb all light."
        ],

        explanation: "Mirrors are designed to reflect light very well.",

        difficulty: 2,
        correctAnswer: "They reflect light into our eyes.",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "mirrors"]
    },

    {
        id: "sci-reflection-018",
        skillId: "reflection",
        question: "Why is a shiny bicycle reflector useful?",

        options: [
            "It reflects light from car headlights.",
            "It creates its own light.",
            "It makes the bicycle faster.",
            "It stores sunlight."
        ],

        explanation: "Reflectors help drivers see cyclists more easily in the dark.",

        difficulty: 2,
        correctAnswer: "It reflects light from car headlights.",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "safety"]
    },

    {
        id: "sci-reflection-019",
        skillId: "reflection",
        question: "Which surface would give the clearest reflection?",

        options: [
            "A clean mirror",
            "A rough stone",
            "A brick wall",
            "A wool jumper"
        ],

        explanation: "A smooth mirror gives the clearest reflection.",

        difficulty: 2,
        correctAnswer: "A clean mirror",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "mirrors"]
    },

    {
        id: "sci-reflection-020",
        skillId: "reflection",
        question: "Which sentence best explains reflection?",

        options: [
            "Reflection happens when light bounces off a surface.",
            "Reflection happens when light disappears.",
            "Reflection makes objects produce light.",
            "Reflection only happens in mirrors."
        ],

        explanation: "Reflection is when light bounces off a surface. Mirrors reflect very well, but many other objects reflect light too.",

        difficulty: 2,
        correctAnswer: "Reflection happens when light bounces off a surface.",
        estimatedSeconds: 20,

        tags: ["science", "reflection", "light"]
    }

    ]

};