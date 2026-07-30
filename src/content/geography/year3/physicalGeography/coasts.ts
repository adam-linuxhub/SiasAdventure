import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const coasts: SkillContent = {

    skillId: "coasts",

    title: "Coasts",

    description:
        "Learn about coasts, beaches, cliffs and how land meets the sea.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-coasts-001",

        question: "What is a coast?",

        options: [
            "The place where land meets the sea",
            "A large river",
            "A mountain range",
            "A forest"
        ],

        explanation:
            "A coast is the area where the land meets the sea or ocean.",

        difficulty: 1,
        correctAnswer: "The place where land meets the sea",
        estimatedSeconds: 15,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-002",

        question: "Which body of water is found next to a coast?",

        options: [
            "The sea",
            "A volcano",
            "A desert",
            "A cave"
        ],

        explanation:
            "Coasts are found where the land meets the sea.",

        difficulty: 1,
        correctAnswer: "The sea",
        estimatedSeconds: 15,

        tags: ["geography", "sea"]
    },

    {
        id: "geo-coasts-003",

        question: "Which of these is often found at the coast?",

        options: [
            "A beach",
            "A glacier",
            "A motorway",
            "A rainforest"
        ],

        explanation:
            "Many coasts have sandy or pebbly beaches.",

        difficulty: 1,
        correctAnswer: "A beach",
        estimatedSeconds: 15,

        tags: ["geography", "beaches"]
    },

    {
        id: "geo-coasts-004",

        question: "What is a beach usually covered with?",

        options: [
            "Sand or pebbles",
            "Snow",
            "Concrete",
            "Grass only"
        ],

        explanation:
            "Beaches are commonly made of sand, pebbles or a mixture of both.",

        difficulty: 1,
        correctAnswer: "Sand or pebbles",
        estimatedSeconds: 15,

        tags: ["geography", "beaches"]
    },

    {
        id: "geo-coasts-005",

        question: "What is a cliff?",

        options: [
            "A steep rock face",
            "A type of river",
            "A small island",
            "A road"
        ],

        explanation:
            "A cliff is a steep face of rock or earth, often found by the sea.",

        difficulty: 1,
        correctAnswer: "A steep rock face",
        estimatedSeconds: 15,

        tags: ["geography", "cliffs"]
    },

    {
        id: "geo-coasts-006",

        question: "Which of these is a natural feature?",

        options: [
            "Beach",
            "Pier",
            "Lighthouse",
            "Harbour wall"
        ],

        explanation:
            "A beach is a natural feature, while the others are built by people.",

        difficulty: 1,
        correctAnswer: "Beach",
        estimatedSeconds: 15,

        tags: ["geography", "physical-geography"]
    },

    {
        id: "geo-coasts-007",

        question: "Which activity might people enjoy at the coast?",

        options: [
            "Swimming",
            "Skiing",
            "Rock climbing indoors",
            "Ice skating"
        ],

        explanation:
            "Many people enjoy swimming and other activities at the coast.",

        difficulty: 1,
        correctAnswer: "Swimming",
        estimatedSeconds: 15,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-008",

        question: "Which colour is the sea usually shown on a map?",

        options: [
            "Blue",
            "Green",
            "Brown",
            "Red"
        ],

        explanation:
            "Water is usually coloured blue on maps.",

        difficulty: 1,
        correctAnswer: "Blue",
        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-coasts-009",

        question: "What does the sea do at the coast?",

        options: [
            "Meets the land",
            "Flows uphill",
            "Stops moving",
            "Turns into a river"
        ],

        explanation:
            "The coast is where the sea meets the land.",

        difficulty: 1,
        correctAnswer: "Meets the land",
        estimatedSeconds: 20,

        tags: ["geography", "sea"]
    },

    {
        id: "geo-coasts-010",

        question: "Which statement is true?",

        options: [
            "Coasts are where land meets the sea.",
            "Every coast is covered in snow.",
            "Coasts are always mountains.",
            "People build all coasts."
        ],

        explanation:
            "Coasts are natural places where land meets the sea.",

        difficulty: 1,
        correctAnswer: "Coasts are where land meets the sea.",
        estimatedSeconds: 20,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-011",

        question: "Why do many people visit the coast in summer?",

        options: [
            "To enjoy beaches and the sea",
            "To harvest crops",
            "To ski on snow",
            "To climb volcanoes"
        ],

        explanation:
            "Many families visit the coast to enjoy the beach and seaside activities.",

        difficulty: 2,
        correctAnswer: "To enjoy beaches and the sea",
        estimatedSeconds: 20,

        tags: ["geography", "tourism"]
    },

    {
        id: "geo-coasts-012",

        question: "Why are cliffs often found at the coast?",

        options: [
            "The sea can wear away the land over time",
            "People build them every year",
            "Rivers pile up rocks",
            "Trees grow into cliffs"
        ],

        explanation:
            "Waves can gradually wear away the land, forming cliffs.",

        difficulty: 2,
        correctAnswer: "The sea can wear away the land over time",
        estimatedSeconds: 20,

        tags: ["geography", "cliffs"]
    },

    {
        id: "geo-coasts-013",

        question: "Why are coasts important for wildlife?",

        options: [
            "Many plants and animals live there",
            "Nothing can live there",
            "Only fish live there",
            "Only birds visit them"
        ],

        explanation:
            "Coastal habitats support many different plants, birds and sea creatures.",

        difficulty: 2,
        correctAnswer: "Many plants and animals live there",
        estimatedSeconds: 20,

        tags: ["geography", "wildlife"]
    },

    {
        id: "geo-coasts-014",

        question: "Which job might depend on the sea?",

        options: [
            "Fisher",
            "Astronaut",
            "Train driver",
            "Librarian"
        ],

        explanation:
            "Fishers catch fish and other seafood from the sea.",

        difficulty: 2,
        correctAnswer: "Fisher",
        estimatedSeconds: 20,

        tags: ["geography", "jobs"]
    },

    {
        id: "geo-coasts-015",

        question: "Why are many towns built on the coast?",

        options: [
            "People use the sea for transport, fishing and tourism",
            "The sea grows crops",
            "The coast never has rain",
            "There are no roads inland"
        ],

        explanation:
            "Coastal towns often grow because of fishing, transport and visitors.",

        difficulty: 2,
        correctAnswer: "People use the sea for transport, fishing and tourism",
        estimatedSeconds: 20,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-coasts-016",

        question: "What shapes a coastline over many years?",

        options: [
            "Waves",
            "Traffic",
            "Street lights",
            "Buildings"
        ],

        explanation:
            "Waves gradually change the shape of the coastline over time.",

        difficulty: 2,
        correctAnswer: "Waves",
        estimatedSeconds: 20,

        tags: ["geography", "waves"]
    },

    {
        id: "geo-coasts-017",

        question: "Which natural feature is most likely to be found beside the sea?",

        options: [
            "Sand dunes",
            "Volcano",
            "Glacier",
            "Waterfall"
        ],

        explanation:
            "Many beaches have sand dunes formed by wind blowing sand inland.",

        difficulty: 2,
        correctAnswer: "Sand dunes",
        estimatedSeconds: 20,

        tags: ["geography", "beaches"]
    },

    {
        id: "geo-coasts-018",

        question: "Why are beaches popular places to visit?",

        options: [
            "People enjoy relaxing and playing by the sea",
            "They are always covered in snow",
            "Cars can drive on them safely",
            "They only exist in winter"
        ],

        explanation:
            "Beaches are popular for swimming, games and relaxing.",

        difficulty: 2,
        correctAnswer: "People enjoy relaxing and playing by the sea",
        estimatedSeconds: 20,

        tags: ["geography", "tourism"]
    },

    {
        id: "geo-coasts-019",

        question: "Which feature is a natural part of many coastlines?",

        options: [
            "Cliffs",
            "Motorway",
            "Shopping centre",
            "Airport"
        ],

        explanation:
            "Many coastlines include cliffs, beaches and rocky shores.",

        difficulty: 2,
        correctAnswer: "Cliffs",
        estimatedSeconds: 20,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-020",

        question: "Which sentence best describes a coast?",

        options: [
            "A natural place where land meets the sea, often with beaches or cliffs.",
            "A large mountain range.",
            "A deep forest.",
            "A man-made canal."
        ],

        explanation:
            "Coasts are important physical features where land and sea meet.",

        difficulty: 2,
        correctAnswer: "A natural place where land meets the sea, often with beaches or cliffs.",
        estimatedSeconds: 20,

        tags: ["geography", "coasts", "physical-geography", "beaches", "cliffs"]
    }

    ]

};