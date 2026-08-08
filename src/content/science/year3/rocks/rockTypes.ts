import {
MultipleChoiceActivity,
SkillContent
} from "../../../types";

const rockTypes: SkillContent = {

skillId: "rockTypes",

title: "Rock Types",

description:
    "Learn about different kinds of rocks and compare their appearance and properties.",

version: 1,

activities: <MultipleChoiceActivity[]>[

{
    id: "sci-rock-types-001",
    skillId: "rockTypes",
    question: "What is a rock?",
    stage: "recognise",
    options: [
        "A natural material found on Earth",
        "A type of plant",
        "A kind of animal",
        "A cloud in the sky"
    ],

    explanation:
        "Rocks are natural materials that make up much of the Earth's surface.",

    hint:
        "Think about things found naturally in the ground rather than things made by people.",

    difficulty: 1,
    correctAnswer: "A natural material found on Earth",
    estimatedSeconds: 15,

    tags: [
        "science",
        "rocks",
        "rock-types"
    ]
},

{
    id: "sci-rock-types-002",
    skillId: "rockTypes",
    question: "Which of these is a rock?",
    stage: "recognise",
    options: [
        "Granite",
        "Wood",
        "Plastic",
        "Glass"
    ],

    explanation:
        "Granite is a common type of rock.",

    hint:
        "Choose the material that is naturally formed inside the Earth.",

    difficulty: 1,
    correctAnswer: "Granite",
    estimatedSeconds: 15,

    tags: [
        "science",
        "rocks",
        "granite"
    ]
},

{
    id: "sci-rock-types-003",
    skillId: "rockTypes",
    question: "Which rock is often used for writing on blackboards?",
    stage: "recognise",
    options: [
        "Chalk",
        "Marble",
        "Granite",
        "Slate"
    ],

    explanation:
        "Chalk is a soft rock that has traditionally been used for writing on blackboards.",

    hint:
        "Think of the soft white material that can leave a mark when rubbed on a board.",

    difficulty: 1,
    correctAnswer: "Chalk",
    estimatedSeconds: 15,

    tags: [
        "science",
        "rocks",
        "chalk"
    ]
},

{
    id: "sci-rock-types-004",
    skillId: "rockTypes",
    question: "Which rock is often used for kitchen worktops?",
    stage: "recognise",
    options: [
        "Granite",
        "Chalk",
        "Clay",
        "Sand"
    ],

    explanation:
        "Granite is hard and durable, making it a popular choice for worktops.",

    hint:
        "A kitchen worktop needs a rock that is strong and does not scratch easily.",

    difficulty: 1,
    correctAnswer: "Granite",
    estimatedSeconds: 15,

    tags: [
        "science",
        "rocks",
        "granite"
    ]
},

{
    id: "sci-rock-types-005",
    skillId: "rockTypes",
    question: "Which word can describe a rock?",
    stage: "recognise",
    options: [
        "Hard",
        "Noisy",
        "Hungry",
        "Sleepy"
    ],

    explanation:
        "Rocks can be described using properties such as hard or soft.",

    hint:
        "Look for a word that describes how a rock feels when you touch it.",

    difficulty: 1,
    correctAnswer: "Hard",
    estimatedSeconds: 15,

    tags: [
        "science",
        "rocks",
        "properties"
    ]
},

{
    id: "sci-rock-types-006",
    skillId: "rockTypes",
    question: "Which rock is usually softer?",
    stage: "recognise",
    options: [
        "Chalk",
        "Granite",
        "Slate",
        "Marble"
    ],

    explanation:
        "Chalk is much softer than rocks such as granite or slate.",

    hint:
        "Think about which rock can easily be rubbed into a powder.",

    difficulty: 1,
    correctAnswer: "Chalk",
    estimatedSeconds: 15,

    tags: [
        "science",
        "rocks",
        "properties",
        "chalk"
    ]
},

{
    id: "sci-rock-types-007",
    skillId: "rockTypes",
    question: "Which rock is often used for roof tiles?",
    stage: "recognise",
    options: [
        "Slate",
        "Chalk",
        "Sand",
        "Clay"
    ],

    explanation:
        "Slate is strong and splits into flat sheets, making it useful for roof tiles.",

    hint:
        "Roof tiles are often flat pieces of a rock that can split into layers.",

    difficulty: 1,
    correctAnswer: "Slate",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "slate"
    ]
},

{
    id: "sci-rock-types-008",
    skillId: "rockTypes",
    question: "What can scientists compare when looking at rocks?",
    stage: "recognise",
    options: [
        "Their colour, texture and hardness",
        "Their favourite food",
        "Their age in years",
        "Their names"
    ],

    explanation:
        "Rocks can be compared by observing their properties, such as colour, texture and hardness.",

    hint:
        "Scientists examine features they can see and test on the rock.",

    difficulty: 1,
    correctAnswer: "Their colour, texture and hardness",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "properties"
    ]
},

{
    id: "sci-rock-types-009",
    skillId: "rockTypes",
    question: "Which rock is smooth and often polished for buildings and statues?",
    stage: "recognise",
    options: [
        "Marble",
        "Chalk",
        "Clay",
        "Sand"
    ],

    explanation:
        "Marble can be polished until it is smooth and shiny.",

    hint:
        "Think of a rock often used for shiny statues and fancy buildings.",

    difficulty: 1,
    correctAnswer: "Marble",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "marble"
    ]
},

{
    id: "sci-rock-types-010",
    skillId: "rockTypes",
    question: "Why do scientists observe the properties of rocks?",
    stage: "recognise",
    options: [
        "To identify and compare them",
        "To help rocks grow",
        "To make the rocks change colour",
        "To teach rocks to move"
    ],

    explanation:
        "Looking at a rock's properties helps scientists identify and compare different types of rocks.",

    hint:
        "Looking closely at rocks helps scientists tell different rocks apart.",

    difficulty: 1,
    correctAnswer: "To identify and compare them",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "properties",
        "rock-types"
    ]
},

  {
    id: "sci-rock-types-015",
    skillId: "rockTypes",
    question: "Which pair of words could describe a rock?",
    stage: "recognise",
    options: [
        "Hard and rough",
        "Hungry and noisy",
        "Fast and slow",
        "Happy and sad"
    ],

    explanation:
        "Scientists describe rocks using properties such as hardness and texture.",

    hint:
        "Choose words that describe how a rock looks or feels, not how a living thing behaves.",

    difficulty: 2,
    correctAnswer: "Hard and rough",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "properties"
    ]
},

{
    id: "sci-rock-types-016",
    skillId: "rockTypes",
    question: "Why is slate often used on roofs?",
    stage: "recognise",
    options: [
        "It is strong and splits into flat pieces.",
        "It melts easily.",
        "It is very soft.",
        "It floats on water."
    ],

    explanation:
        "Slate is strong and naturally splits into flat sheets that make good roof tiles.",

    hint:
        "Roof tiles need to be strong and flat so they can protect buildings.",

    difficulty: 2,
    correctAnswer: "It is strong and splits into flat pieces.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "slate",
        "uses"
    ]
},

{
    id: "sci-rock-types-017",
    skillId: "rockTypes",
    question: "A rock feels rough and very hard. Which rock could it be?",
    stage: "recognise",
    options: [
        "Granite",
        "Chalk",
        "Clay",
        "Sand"
    ],

    explanation:
        "Granite is usually hard and often has a rough texture before it is polished.",

    hint:
        "Think of the rock commonly used for strong buildings and worktops.",

    difficulty: 2,
    correctAnswer: "Granite",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "granite",
        "properties"
    ]
},

{
    id: "sci-rock-types-018",
    skillId: "rockTypes",
    question: "Which rock can be polished to make it smooth and shiny?",
    stage: "recognise",
    options: [
        "Marble",
        "Chalk",
        "Sand",
        "Clay"
    ],

    explanation:
        "Marble is often polished for use in buildings and statues.",

    hint:
        "Look for the rock that is often used for decorative statues and shiny surfaces.",

    difficulty: 2,
    correctAnswer: "Marble",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "marble"
    ]
},

{
    id: "sci-rock-types-019",
    skillId: "rockTypes",
    question: "Why do different rocks have different uses?",
    stage: "recognise",
    options: [
        "They have different properties.",
        "They all weigh the same.",
        "They all have the same colour.",
        "They all come from the same place."
    ],

    explanation:
        "The properties of a rock, such as hardness and texture, affect how it can be used.",

    hint:
        "A rock's features decide what jobs it is suitable for.",

    difficulty: 2,
    correctAnswer: "They have different properties.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "properties",
        "uses"
    ]
},

{
    id: "sci-rock-types-020",
    skillId: "rockTypes",
    question: "Which sentence best describes how scientists compare rocks?",
    stage: "recognise",
    options: [
        "They observe properties such as colour, texture and hardness.",
        "They ask the rocks where they came from.",
        "They see which rock grows the fastest.",
        "They check whether the rocks can move."
    ],

    explanation:
        "Scientists identify and compare rocks by observing their physical properties.",

    hint:
        "Scientists use things they can see or test when comparing materials.",

    difficulty: 2,
    correctAnswer: "They observe properties such as colour, texture and hardness.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "rock-types",
        "properties"
    ]
}

]
};

export default rockTypes;

export {
    rockTypes
};