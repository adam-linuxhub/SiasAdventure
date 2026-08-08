import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const reflection: SkillContent = {

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
        stage: "recognise",
        options: [
            "Light reflects from them into our eyes",
            "They make their own light",
            "They glow in the dark",
            "They produce electricity"
        ],

        hint: "Most everyday objects don't create light, so think about what happens to light shining on them.",

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
        stage: "recognise",
        options: [
            "It reflects",
            "It disappears",
            "It freezes",
            "It turns into sound"
        ],

        hint: "Think about why you can see your face in a mirror.",

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
        stage: "recognise",
        options: [
            "A mirror",
            "A sponge",
            "A jumper",
            "A pillow"
        ],

        hint: "Choose the smoothest and shiniest surface.",

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
        stage: "recognise",
        options: [
            "A shiny mirror",
            "A rough carpet",
            "A woolly jumper",
            "A muddy path"
        ],

        hint: "Light reflects best from surfaces that are smooth rather than rough.",

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
        stage: "recognise",
        options: [
            "Yes",
            "No",
            "Only at night",
            "Only in the rain"
        ],

        hint: "A book doesn't glow, so how does light from a lamp help you see it?",

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
        stage: "recognise",
        options: [
            "A candle",
            "A mirror",
            "A chair",
            "A book"
        ],

        hint: "Only one object is actually a light source.",

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
        stage: "recognise",
        options: [
            "Reflect light",
            "Absorb all light",
            "Create shadows",
            "Produce electricity"
        ],

        hint: "Think about why you can see an image in a bathroom mirror.",

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
        stage: "recognise",
        options: [
            "A dark, rough wall",
            "A shiny mirror",
            "A polished spoon",
            "A clean window"
        ],

        hint: "Rough, dull surfaces scatter and absorb more light than shiny ones.",

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
        stage: "recognise",
        options: [
            "It reflects light from your body",
            "It makes a copy of you",
            "It produces its own picture",
            "It shines like the Sun"
        ],

        hint: "Light travels from you to the mirror and then back to your eyes.",

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
        stage: "recognise",
        options: [
            "Most objects reflect light.",
            "Most objects make their own light.",
            "Mirrors absorb light.",
            "Books produce light."
        ],

        hint: "Think about how you see ordinary objects like tables, books and chairs.",

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
    stage: "recognise",
    options: [
        "It reflects less light.",
        "It disappears.",
        "It becomes invisible.",
        "It produces darkness."
    ],

    hint: "Darker colours bounce less light back to your eyes than lighter colours.",

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
    stage: "recognise",
    options: [
        "Smooth polished glass",
        "Cardboard",
        "Fabric",
        "Sand"
    ],

    hint: "A good mirror needs a surface that is very smooth and shiny.",

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
    stage: "recognise",
    options: [
        "It reflects sunlight.",
        "It glows.",
        "It produces electricity.",
        "It shines at night."
    ],

    hint: "The tree doesn't make light—it sends existing light towards your eyes.",

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
    stage: "recognise",
    options: [
        "A shiny metal spoon",
        "A wool blanket",
        "A muddy boot",
        "A cardboard box"
    ],

    hint: "Smooth, shiny surfaces reflect much more light than rough ones.",

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
    stage: "recognise",
    options: [
        "Light must enter your eyes.",
        "The object must make sound.",
        "The object must move.",
        "The object must be warm."
    ],

    hint: "Think about where light has to travel before your brain can detect an object.",

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
    stage: "recognise",
    options: [
        "They reflect light from car headlights.",
        "They produce their own light.",
        "They absorb light.",
        "They stop shadows."
    ],

    hint: "At night, road signs rely on another light source to make them easy to see.",

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
    stage: "recognise",
    options: [
        "They reflect light into our eyes.",
        "They make sunlight.",
        "They create electricity.",
        "They absorb all light."
    ],

    hint: "Mirrors don't make light—they change the direction of existing light.",

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
    stage: "recognise",
    options: [
        "It reflects light from car headlights.",
        "It creates its own light.",
        "It makes the bicycle faster.",
        "It stores sunlight."
    ],

    hint: "A reflector works because another vehicle shines light onto it.",

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
    stage: "recognise",
    options: [
        "A clean mirror",
        "A rough stone",
        "A brick wall",
        "A wool jumper"
    ],

    hint: "A clear reflection needs the smoothest surface available.",

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
    stage: "recognise",
    options: [
        "Reflection happens when light bounces off a surface.",
        "Reflection happens when light disappears.",
        "Reflection makes objects produce light.",
        "Reflection only happens in mirrors."
    ],

    hint: "Think about what light does when it hits a mirror, wall or book.",

    explanation: "Reflection is when light bounces off a surface. Mirrors reflect very well, but many other objects reflect light too.",

    difficulty: 2,
    correctAnswer: "Reflection happens when light bounces off a surface.",
    estimatedSeconds: 20,

    tags: ["science", "reflection", "light"]
}

]

};

export default reflection;

export {

    reflection

};