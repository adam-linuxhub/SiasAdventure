import {
MultipleChoiceActivity,
SkillContent
} from "../../../types";

const soil: SkillContent = {

skillId: "soil",

title: "Soil",

description:
    "Learn how soil is formed, the different types of soil and why soil is important for plants and living things.",

version: 1,

activities: <MultipleChoiceActivity[]>[

{
    id: "sci-soil-001",
    skillId: "soil",
    question: "What is soil?",
    stage: "recognise",
    options: [
        "A mixture of tiny pieces of rock, air, water and dead plants and animals",
        "Only tiny rocks",
        "Only sand",
        "Only water"
    ],

    explanation:
        "Soil is made from tiny rock particles, water, air and decayed living matter.",

    hint:
        "Soil is not just one material. Think about the different things mixed together underground.",

    difficulty: 1,
    correctAnswer: "A mixture of tiny pieces of rock, air, water and dead plants and animals",
    estimatedSeconds: 15,

    tags: ["science", "rocks", "soil"]
},

{
    id: "sci-soil-002",
    skillId: "soil",
    question: "Where do most plants grow?",
    stage: "recognise",
    options: [
        "In soil",
        "On clouds",
        "On ice",
        "In the sea"
    ],

    explanation:
        "Most plants grow in soil because it provides support, water and nutrients.",

    hint:
        "Think about where roots grow and where plants get support.",

    difficulty: 1,
    correctAnswer: "In soil",
    estimatedSeconds: 15,

    tags: ["science", "soil", "plants"]
},

{
    id: "sci-soil-003",
    skillId: "soil",
    question: "What helps to make soil over a long time?",
    stage: "recognise",
    options: [
        "Broken rocks",
        "Plastic",
        "Glass",
        "Metal"
    ],

    explanation:
        "Soil forms as rocks break down over many years.",

    hint:
        "Soil begins forming when larger natural materials slowly become smaller pieces.",

    difficulty: 1,
    correctAnswer: "Broken rocks",
    estimatedSeconds: 15,

    tags: ["science", "soil", "rocks"]
},

{
    id: "sci-soil-004",
    skillId: "soil",
    question: "Which of these is a type of soil?",
    stage: "recognise",
    options: [
        "Clay",
        "Concrete",
        "Brick",
        "Plastic"
    ],

    explanation:
        "Clay is one of the main types of soil.",

    hint:
        "Choose the material that can naturally be found as a soil type.",

    difficulty: 1,
    correctAnswer: "Clay",
    estimatedSeconds: 15,

    tags: ["science", "soil", "clay"]
},

{
    id: "sci-soil-005",
    skillId: "soil",
    question: "Which soil is made of large grains?",
    stage: "recognise",
    options: [
        "Sandy soil",
        "Clay soil",
        "Mud",
        "Compost"
    ],

    explanation:
        "Sandy soil contains larger grains than other soil types.",

    hint:
        "Think about the soil made from tiny pieces of sand that you can feel.",

    difficulty: 1,
    correctAnswer: "Sandy soil",
    estimatedSeconds: 15,

    tags: ["science", "soil", "sand"]
},

{
    id: "sci-soil-006",
    skillId: "soil",
    question: "Which soil feels sticky when it is wet?",
    stage: "recognise",
    options: [
        "Clay soil",
        "Sandy soil",
        "Rock",
        "Gravel"
    ],

    explanation:
        "Clay soil becomes sticky because its particles are very small.",

    hint:
        "Think of the type of soil used for making pottery that becomes sticky with water.",

    difficulty: 1,
    correctAnswer: "Clay soil",
    estimatedSeconds: 20,

    tags: ["science", "soil", "clay"]
},

{
    id: "sci-soil-007",
    skillId: "soil",
    question: "Why is soil important?",
    stage: "recognise",
    options: [
        "It helps plants grow",
        "It makes the Sun shine",
        "It creates rain",
        "It makes rocks float"
    ],

    explanation:
        "Plants depend on soil for support, water and nutrients.",

    hint:
        "Plants need soil because their roots use it for important resources.",

    difficulty: 1,
    correctAnswer: "It helps plants grow",
    estimatedSeconds: 20,

    tags: ["science", "soil", "plants"]
},

{
    id: "sci-soil-008",
    skillId: "soil",
    question: "Which living thing might live in soil?",
    stage: "recognise",
    options: [
        "Earthworm",
        "Shark",
        "Whale",
        "Dolphin"
    ],

    explanation:
        "Earthworms spend most of their lives in soil.",

    hint:
        "Look for the animal that moves through the ground rather than swimming.",

    difficulty: 1,
    correctAnswer: "Earthworm",
    estimatedSeconds: 20,

    tags: ["science", "soil", "living-things"]
},

{
    id: "sci-soil-009",
    skillId: "soil",
    question: "What can be found in healthy soil?",
    stage: "recognise",
    options: [
        "Tiny living organisms",
        "Only rocks",
        "Only water",
        "Only sand"
    ],

    explanation:
        "Healthy soil contains many tiny living organisms.",

    hint:
        "Good soil is a habitat for many very small creatures.",

    difficulty: 1,
    correctAnswer: "Tiny living organisms",
    estimatedSeconds: 20,

    tags: ["science", "soil", "living-things"]
},

{
    id: "sci-soil-010",
    skillId: "soil",
    question: "Why do roots grow into soil?",
    stage: "recognise",
    options: [
        "To take in water and nutrients",
        "To reach the clouds",
        "To make flowers float",
        "To find sunlight"
    ],

    explanation:
        "Roots absorb water and nutrients from the soil.",

    hint:
        "Roots are underground because they collect resources from the soil.",

    difficulty: 1,
    correctAnswer: "To take in water and nutrients",
    estimatedSeconds: 20,

    tags: ["science", "soil", "plants"]
},
{
    id: "sci-soil-015",
    skillId: "soil",
    question: "Which soil would be best for a cactus?",
    stage: "recognise",
    options: [
        "Sandy soil",
        "Clay soil",
        "Very wet soil",
        "Solid rock"
    ],

    explanation:
        "Cacti grow best in well-drained sandy soil.",

    hint:
        "Cacti are adapted to dry places, so choose soil that does not hold too much water.",

    difficulty: 2,
    correctAnswer: "Sandy soil",
    estimatedSeconds: 20,

    tags: ["science", "soil", "sand", "plants"]
},

{
    id: "sci-soil-016",
    skillId: "soil",
    question: "What do earthworms do that helps soil?",
    stage: "recognise",
    options: [
        "They mix and loosen it",
        "They turn it into rock",
        "They dry it out",
        "They remove all nutrients"
    ],

    explanation:
        "Earthworms improve soil by mixing it and allowing air and water to move through it.",

    hint:
        "Think about the tunnels earthworms make as they move through the ground.",

    difficulty: 2,
    correctAnswer: "They mix and loosen it",
    estimatedSeconds: 20,

    tags: ["science", "soil", "earthworms"]
},

{
    id: "sci-soil-017",
    skillId: "soil",
    question: "Why is air in soil important?",
    stage: "recognise",
    options: [
        "Plant roots need air to stay healthy",
        "It makes rocks grow",
        "It changes soil into sand",
        "It stops plants needing water"
    ],

    explanation:
        "Roots need air as well as water to grow properly.",

    hint:
        "Roots are living parts of plants and need oxygen from spaces in the soil.",

    difficulty: 2,
    correctAnswer: "Plant roots need air to stay healthy",
    estimatedSeconds: 20,

    tags: ["science", "soil", "plants"]
},

{
    id: "sci-soil-018",
    skillId: "soil",
    question: "Which statement about soil is true?",
    stage: "recognise",
    options: [
        "Different soils have different properties",
        "All soils are exactly the same",
        "Soil contains only rocks",
        "Plants do not need soil"
    ],

    explanation:
        "Clay, sandy and other soils have different properties.",

    hint:
        "Some soils drain water quickly while others hold water. This shows they are different.",

    difficulty: 2,
    correctAnswer: "Different soils have different properties",
    estimatedSeconds: 20,

    tags: ["science", "soil", "properties"]
},

{
    id: "sci-soil-019",
    skillId: "soil",
    question: "Why is healthy soil important for farming?",
    stage: "recognise",
    options: [
        "It helps crops grow well",
        "It makes rain fall",
        "It creates sunshine",
        "It stops seeds growing"
    ],

    explanation:
        "Healthy soil provides crops with water and nutrients.",

    hint:
        "Farmers grow plants, so they need soil that supports plant growth.",

    difficulty: 2,
    correctAnswer: "It helps crops grow well",
    estimatedSeconds: 20,

    tags: ["science", "soil", "farming"]
},

{
    id: "sci-soil-020",
    skillId: "soil",
    question: "Which sentence best describes soil?",
    stage: "recognise",
    options: [
        "It is a mixture that supports plants and many living things",
        "It is only broken rock",
        "It is only water",
        "It is a type of metal"
    ],

    explanation:
        "Soil is made from rock particles, water, air and organic matter, making it an important habitat for plants and animals.",

    hint:
        "The best answer should explain both what soil contains and why living things depend on it.",

    difficulty: 2,
    correctAnswer: "It is a mixture that supports plants and many living things",
    estimatedSeconds: 20,

    tags: ["science", "soil", "plants", "living-things"]
}

]
};

export default soil;

export {
    soil
};