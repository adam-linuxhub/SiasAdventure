import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const coasts: SkillContent = {

    skillId: "coasts",

    title: "Coasts",

    description:
        "Learn about coasts, beaches, cliffs and how land meets the sea.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-coasts-001",
        skillId: "coasts",
        question: "What is a coast?",
        stage: "recognise",
        options: [
            "The place where land meets the sea",
            "A large river",
            "A mountain range",
            "A forest"
        ],

        hint: "Think about where two different natural features meet.",
        explanation:
            "A coast is the area where the land meets the sea or ocean.",

        difficulty: 1,
        correctAnswer: "The place where land meets the sea",
        estimatedSeconds: 15,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-002",
        skillId: "coasts",
        question: "Which body of water is found next to a coast?",
        stage: "recognise",
        options: [
            "The sea",
            "A volcano",
            "A desert",
            "A cave"
        ],

        hint: "Imagine standing beside the shoreline.",
        explanation:
            "Coasts are found where the land meets the sea.",

        difficulty: 1,
        correctAnswer: "The sea",
        estimatedSeconds: 15,

        tags: ["geography", "sea"]
    },

    {
        id: "geo-coasts-003",
        skillId: "coasts",
        question: "Which of these is often found at the coast?",
        stage: "recognise",
        options: [
            "A beach",
            "A glacier",
            "A motorway",
            "A rainforest"
        ],

        hint: "Picture common places people visit by the sea.",
        explanation:
            "Many coasts have sandy or pebbly beaches.",

        difficulty: 1,
        correctAnswer: "A beach",
        estimatedSeconds: 15,

        tags: ["geography", "beaches"]
    },

    {
        id: "geo-coasts-004",
        skillId: "coasts",
        question: "What is a beach usually covered with?",
        stage: "recognise",
        options: [
            "Sand or pebbles",
            "Snow",
            "Concrete",
            "Grass only"
        ],

        hint: "Think about what beaches are naturally made from.",
        explanation:
            "Beaches are commonly made of sand, pebbles or a mixture of both.",

        difficulty: 1,
        correctAnswer: "Sand or pebbles",
        estimatedSeconds: 15,

        tags: ["geography", "beaches"]
    },

    {
        id: "geo-coasts-005",
        skillId: "coasts",
        question: "What is a cliff?",
        stage: "recognise",
        options: [
            "A steep rock face",
            "A type of river",
            "A small island",
            "A road"
        ],

        hint: "Look for a landform with very steep sides.",
        explanation:
            "A cliff is a steep face of rock or earth, often found by the sea.",

        difficulty: 1,
        correctAnswer: "A steep rock face",
        estimatedSeconds: 15,

        tags: ["geography", "cliffs"]
    },

    {
        id: "geo-coasts-006",
        skillId: "coasts",
        question: "Which of these is a natural feature?",
        stage: "recognise",
        options: [
            "Beach",
            "Pier",
            "Lighthouse",
            "Harbour wall"
        ],

        hint: "Decide which option was not built by people.",
        explanation:
            "A beach is a natural feature, while the others are built by people.",

        difficulty: 1,
        correctAnswer: "Beach",
        estimatedSeconds: 15,

        tags: ["geography", "physical-geography"]
    },

    {
        id: "geo-coasts-007",
        skillId: "coasts",
        question: "Which activity might people enjoy at the coast?",
        stage: "recognise",
        options: [
            "Swimming",
            "Skiing",
            "Rock climbing indoors",
            "Ice skating"
        ],

        hint: "Think about activities people do beside the sea.",
        explanation:
            "Many people enjoy swimming and other activities at the coast.",

        difficulty: 1,
        correctAnswer: "Swimming",
        estimatedSeconds: 15,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-008",
        skillId: "coasts",
        question: "Which colour is the sea usually shown on a map?",
        stage: "recognise",
        options: [
            "Blue",
            "Green",
            "Brown",
            "Red"
        ],

        hint: "Remember the usual map colour for water.",
        explanation:
            "Water is usually coloured blue on maps.",

        difficulty: 1,
        correctAnswer: "Blue",
        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-coasts-009",
        skillId: "coasts",
        question: "What does the sea do at the coast?",
        stage: "recognise",
        options: [
            "Meets the land",
            "Flows uphill",
            "Stops moving",
            "Turns into a river"
        ],

        hint: "Picture the boundary between sea and land.",
        explanation:
            "The coast is where the sea meets the land.",

        difficulty: 1,
        correctAnswer: "Meets the land",
        estimatedSeconds: 20,

        tags: ["geography", "sea"]
    },

    {
        id: "geo-coasts-010",
        skillId: "coasts",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Coasts are where land meets the sea.",
            "Every coast is covered in snow.",
            "Coasts are always mountains.",
            "People build all coasts."
        ],

        hint: "Choose the fact that is always true.",
        explanation:
            "Coasts are natural places where land meets the sea.",

        difficulty: 1,
        correctAnswer: "Coasts are where land meets the sea.",
        estimatedSeconds: 20,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-011",
        skillId: "coasts",
        question: "Why do many people visit the coast in summer?",
        stage: "recognise",
        options: [
            "To enjoy beaches and the sea",
            "To harvest crops",
            "To ski on snow",
            "To climb volcanoes"
        ],

        hint: "Think about why families enjoy seaside holidays.",
        explanation:
            "Many families visit the coast to enjoy the beach and seaside activities.",

        difficulty: 2,
        correctAnswer: "To enjoy beaches and the sea",
        estimatedSeconds: 20,

        tags: ["geography", "tourism"]
    },

    {
        id: "geo-coasts-012",
        skillId: "coasts",
        question: "Why are cliffs often found at the coast?",
        stage: "recognise",
        options: [
            "The sea can wear away the land over time",
            "People build them every year",
            "Rivers pile up rocks",
            "Trees grow into cliffs"
        ],

        hint: "Consider what waves do to rocks over many years.",
        explanation:
            "Waves can gradually wear away the land, forming cliffs.",

        difficulty: 2,
        correctAnswer: "The sea can wear away the land over time",
        estimatedSeconds: 20,

        tags: ["geography", "cliffs"]
    },

    {
        id: "geo-coasts-013",
        skillId: "coasts",
        question: "Why are coasts important for wildlife?",
        stage: "recognise",
        options: [
            "Many plants and animals live there",
            "Nothing can live there",
            "Only fish live there",
            "Only birds visit them"
        ],

        hint: "Think about habitats where sea and land meet.",
        explanation:
            "Coastal habitats support many different plants, birds and sea creatures.",

        difficulty: 2,
        correctAnswer: "Many plants and animals live there",
        estimatedSeconds: 20,

        tags: ["geography", "wildlife"]
    },

    {
        id: "geo-coasts-014",
        skillId: "coasts",
        question: "Which job might depend on the sea?",
        stage: "recognise",
        options: [
            "Fisher",
            "Astronaut",
            "Train driver",
            "Librarian"
        ],

        hint: "Which job relies on catching things from the sea?",
        explanation:
            "Fishers catch fish and other seafood from the sea.",

        difficulty: 2,
        correctAnswer: "Fisher",
        estimatedSeconds: 20,

        tags: ["geography", "jobs"]
    },

    {
        id: "geo-coasts-015",
        skillId: "coasts",
        question: "Why are many towns built on the coast?",
        stage: "recognise",
        options: [
            "People use the sea for transport, fishing and tourism",
            "The sea grows crops",
            "The coast never has rain",
            "There are no roads inland"
        ],

        hint: "Think about how coastal towns earn money.",
        explanation:
            "Coastal towns often grow because of fishing, transport and visitors.",

        difficulty: 2,
        correctAnswer: "People use the sea for transport, fishing and tourism",
        estimatedSeconds: 20,

        tags: ["geography", "settlements"]
    },

    {
        id: "geo-coasts-016",
        skillId: "coasts",
        question: "What shapes a coastline over many years?",
        stage: "recognise",
        options: [
            "Waves",
            "Traffic",
            "Street lights",
            "Buildings"
        ],

        hint: "Consider the natural force that changes coasts.",
        explanation:
            "Waves gradually change the shape of the coastline over time.",

        difficulty: 2,
        correctAnswer: "Waves",
        estimatedSeconds: 20,

        tags: ["geography", "waves"]
    },

    {
        id: "geo-coasts-017",
        skillId: "coasts",
        question: "Which natural feature is most likely to be found beside the sea?",
        stage: "recognise",
        options: [
            "Sand dunes",
            "Volcano",
            "Glacier",
            "Waterfall"
        ],

        hint: "Think about features created by wind and sand.",
        explanation:
            "Many beaches have sand dunes formed by wind blowing sand inland.",

        difficulty: 2,
        correctAnswer: "Sand dunes",
        estimatedSeconds: 20,

        tags: ["geography", "beaches"]
    },

    {
        id: "geo-coasts-018",
        skillId: "coasts",
        question: "Why are beaches popular places to visit?",
        stage: "recognise",
        options: [
            "People enjoy relaxing and playing by the sea",
            "They are always covered in snow",
            "Cars can drive on them safely",
            "They only exist in winter"
        ],

        hint: "Imagine why people choose beaches for a day out.",
        explanation:
            "Beaches are popular for swimming, games and relaxing.",

        difficulty: 2,
        correctAnswer: "People enjoy relaxing and playing by the sea",
        estimatedSeconds: 20,

        tags: ["geography", "tourism"]
    },

    {
        id: "geo-coasts-019",
        skillId: "coasts",
        question: "Which feature is a natural part of many coastlines?",
        stage: "recognise",
        options: [
            "Cliffs",
            "Motorway",
            "Shopping centre",
            "Airport"
        ],

        hint: "Choose a feature formed by nature, not construction.",
        explanation:
            "Many coastlines include cliffs, beaches and rocky shores.",

        difficulty: 2,
        correctAnswer: "Cliffs",
        estimatedSeconds: 20,

        tags: ["geography", "coasts"]
    },

    {
        id: "geo-coasts-020",
        skillId: "coasts",
        question: "Which sentence best describes a coast?",
        stage: "recognise",
        options: [
            "A natural place where land meets the sea, often with beaches or cliffs.",
            "A large mountain range.",
            "A deep forest.",
            "A man-made canal."
        ],

        hint: "Think about the main idea that defines a coast.",
        explanation:
            "Coasts are important physical features where land and sea meet.",

        difficulty: 2,
        correctAnswer: "A natural place where land meets the sea, often with beaches or cliffs.",
        estimatedSeconds: 20,

        tags: ["geography", "coasts", "physical-geography", "beaches", "cliffs"]
    }

    ]

};


export default coasts;

export {

    coasts

};
