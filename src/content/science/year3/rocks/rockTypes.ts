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
        "A living thing that grows in soil",
        "A material made only inside factories",
        "A cloud formed high in the atmosphere"
    ],

    explanation:
        "Rocks are natural materials that make up much of the Earth's surface.",

    hint:
        "Think about something that occurs naturally in the ground rather than something made by people.",

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
        "Choose the material that forms naturally as rock inside the Earth.",

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
        "Think of the soft white material that leaves a mark when rubbed across a board.",

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
        "A kitchen worktop needs a rock that is strong and resistant to scratching.",

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
        "Look for a word that describes a physical property you could notice when handling a rock.",

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
        "Chalk is much softer than rocks such as granite, slate or marble.",

    hint:
        "Think about which rock can easily leave powder when it is rubbed against a surface.",

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
        "Slate is strong and can split into flat sheets, making it useful for roof tiles.",

    hint:
        "Roof tiles need a strong material that can form thin, flat pieces.",

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
        "Their names only",
        "Their ability to grow"
    ],

    explanation:
        "Rocks can be compared by observing properties such as colour, texture and hardness.",

    hint:
        "Scientists examine features they can see or test rather than things a rock cannot have.",

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
        "Marble can be polished until it becomes smooth and shiny, making it useful for statues and buildings.",

    hint:
        "Think of the rock often seen as a smooth, polished material in statues and impressive buildings.",

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
        "To help rocks grow larger",
        "To make rocks change colour",
        "To teach rocks how to move"
    ],

    explanation:
        "Looking at a rock's properties helps scientists identify and compare different types of rocks.",

    hint:
        "Observing a rock's features can help scientists tell one type from another.",

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
    id: "sci-rock-types-011",
    skillId: "rockTypes",
    question: "Which property describes how a rock feels when touched?",
    stage: "recognise",
    options: [
        "Texture",
        "Colour",
        "Weight",
        "Shape"
    ],

    explanation:
        "Texture describes how the surface of a rock feels, such as smooth, rough or grainy.",

    hint:
        "Think about whether a rock feels smooth, rough or grainy when you touch its surface.",

    difficulty: 2,
    correctAnswer: "Texture",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "properties"
    ]
},

{
    id: "sci-rock-types-012",
    skillId: "rockTypes",
    question: "Which rock would be most suitable for a strong kitchen worktop?",
    stage: "recognise",
    options: [
        "Granite",
        "Soft chalk",
        "Loose sand",
        "Powdery clay"
    ],

    explanation:
        "Granite is hard and durable, so it can be used for strong kitchen worktops.",

    hint:
        "A worktop needs to cope with heavy objects and everyday use. Think about a hard, durable rock.",

    difficulty: 2,
    correctAnswer: "Granite",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "granite",
        "uses"
    ]
},

{
    id: "sci-rock-types-013",
    skillId: "rockTypes",
    question: "Which rock can be split into thin, flat sheets?",
    stage: "recognise",
    options: [
        "Slate",
        "Granite",
        "Marble",
        "Chalk"
    ],

    explanation:
        "Slate naturally splits into thin, flat sheets, which makes it useful for roof tiles.",

    hint:
        "Think about the rock commonly used for roofs because it can form flat pieces.",

    difficulty: 2,
    correctAnswer: "Slate",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "slate",
        "properties"
    ]
},

{
    id: "sci-rock-types-014",
    skillId: "rockTypes",
    question: "Which rock is easiest to scratch because it is relatively soft?",
    stage: "recognise",
    options: [
        "Chalk",
        "Granite",
        "Marble",
        "Slate"
    ],

    explanation:
        "Chalk is relatively soft compared with rocks such as granite, marble and slate.",

    hint:
        "Think about the rock that is soft enough to leave a powdery mark when rubbed.",

    difficulty: 2,
    correctAnswer: "Chalk",
    estimatedSeconds: 20,

    tags: [
        "science",
        "rocks",
        "chalk",
        "properties"
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
        "Choose words that describe how a rock looks or feels rather than how a living thing behaves.",

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
        "It melts very easily in warm weather.",
        "It is softer than most building materials.",
        "It floats safely on water during heavy rain."
    ],

    explanation:
        "Slate is strong and naturally splits into flat sheets that can be used as roof tiles.",

    hint:
        "Roof tiles need to be strong and flat so they can protect a building from the weather.",

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
        "Soft clay",
        "Loose sand"
    ],

    explanation:
        "Granite is usually hard and can have a rough, grainy texture.",

    hint:
        "Think about the hard rock often used for buildings and kitchen worktops.",

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
        "Soft clay"
    ],

    explanation:
        "Marble can be polished to produce a smooth, shiny surface and is often used for statues and buildings.",

    hint:
        "Think of the rock often seen as a smooth, polished material in statues and decorative buildings.",

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
        "They all weigh exactly the same.",
        "They all have exactly the same colour.",
        "They all come from exactly the same place."
    ],

    explanation:
        "Different rocks have different properties, such as hardness and texture, which makes them suitable for different uses.",

    hint:
        "Think about why one rock might be suitable for a roof while another is better for a worktop.",

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
        "They ask the rocks where they formed.",
        "They see which rock grows the fastest.",
        "They test whether the rocks can move by themselves."
    ],

    explanation:
        "Scientists compare rocks by observing and testing their physical properties, such as colour, texture and hardness.",

    hint:
        "Scientists use features they can observe or test when comparing different rocks.",

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