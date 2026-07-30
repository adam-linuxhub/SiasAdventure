import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const classification: SkillContent = {

    skillId: "classification",

    title: "Classifying Living Things",

    description:
        "Learn how scientists group living things by looking at their features.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-classification-001",

        question: "Why do scientists classify living things?",

        options: [
            "To group similar living things together",
            "To make them grow faster",
            "To change their colour",
            "To make new animals"
        ],

        answer: 0,

        explanation:
            "Classification helps scientists organise and study living things.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "classification"]
    },

    {
        id: "sci-classification-002",

        question: "Which of these is a mammal?",

        options: [
            "Dog",
            "Goldfish",
            "Robin",
            "Frog"
        ],

        answer: 0,

        explanation:
            "Dogs are mammals because they have fur and feed their young with milk.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "animals", "mammals"]
    },

    {
        id: "sci-classification-003",

        question: "Which of these is a bird?",

        options: [
            "Pigeon",
            "Snake",
            "Rabbit",
            "Shark"
        ],

        answer: 0,

        explanation:
            "Birds have feathers, beaks and lay eggs.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-004",

        question: "Which of these is a fish?",

        options: [
            "Salmon",
            "Cat",
            "Duck",
            "Lizard"
        ],

        answer: 0,

        explanation:
            "Fish live in water, breathe through gills and have fins.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "fish"]
    },

    {
        id: "sci-classification-005",

        question: "Which of these is a reptile?",

        options: [
            "Snake",
            "Horse",
            "Penguin",
            "Frog"
        ],

        answer: 0,

        explanation:
            "Reptiles have dry, scaly skin.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-006",

        question: "Which of these is an amphibian?",

        options: [
            "Frog",
            "Chicken",
            "Whale",
            "Bee"
        ],

        answer: 0,

        explanation:
            "Frogs are amphibians because they live part of their lives in water and part on land.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "amphibians"]
    },

    {
        id: "sci-classification-007",

        question: "Which group does an oak tree belong to?",

        options: [
            "Plants",
            "Mammals",
            "Birds",
            "Fish"
        ],

        answer: 0,

        explanation:
            "Trees are plants.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "plants"]
    },

    {
        id: "sci-classification-008",

        question: "Which feature do birds have?",

        options: [
            "Feathers",
            "Scales",
            "Fur",
            "Gills"
        ],

        answer: 0,

        explanation:
            "Feathers are unique to birds.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-009",

        question: "Which animal has scales?",

        options: [
            "Lizard",
            "Rabbit",
            "Robin",
            "Dog"
        ],

        answer: 0,

        explanation:
            "Lizards are reptiles with scales.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-010",

        question: "Scientists classify living things by looking at their...",

        options: [
            "Features",
            "Favourite foods",
            "Names",
            "Colours only"
        ],

        answer: 0,

        explanation:
            "Scientists group living things using their characteristics and features.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "classification"]
    },

    {
        id: "sci-classification-011",

        question: "A penguin has feathers and lays eggs. Which group does it belong to?",

        options: [
            "Birds",
            "Fish",
            "Mammals",
            "Reptiles"
        ],

        answer: 0,

        explanation:
            "Even though penguins cannot fly, they are birds.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-012",

        question: "A whale feeds its babies milk. Which group does it belong to?",

        options: [
            "Mammals",
            "Fish",
            "Amphibians",
            "Reptiles"
        ],

        answer: 0,

        explanation:
            "Whales are mammals even though they live in water.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "mammals"]
    },

    {
        id: "sci-classification-013",

        question: "Why are bats classified as mammals instead of birds?",

        options: [
            "They have fur and feed their young milk.",
            "They have feathers.",
            "They lay eggs.",
            "They have scales."
        ],

        answer: 0,

        explanation:
            "Flying does not make an animal a bird.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "mammals"]
    },

    {
        id: "sci-classification-014",

        question: "Which pair belongs to the same group?",

        options: [
            "Snake and lizard",
            "Robin and frog",
            "Cat and salmon",
            "Whale and crocodile"
        ],

        answer: 0,

        explanation:
            "Both snakes and lizards are reptiles.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-015",

        question: "A scientist discovers an animal with feathers and a beak. Which group is it most likely to belong to?",

        options: [
            "Birds",
            "Fish",
            "Reptiles",
            "Amphibians"
        ],

        answer: 0,

        explanation:
            "Feathers and a beak are key features of birds.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-016",

        question: "Which feature helps identify a fish?",

        options: [
            "Gills and fins",
            "Feathers",
            "Fur",
            "Six legs"
        ],

        answer: 0,

        explanation:
            "Fish breathe using gills and swim with fins.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "fish"]
    },

    {
        id: "sci-classification-017",

        question: "Why do scientists use classification?",

        options: [
            "It helps them identify and study living things.",
            "It makes animals stronger.",
            "It changes habitats.",
            "It helps plants grow."
        ],

        answer: 0,

        explanation:
            "Classification makes it easier to compare and study living organisms.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "classification"]
    },

    {
        id: "sci-classification-018",

        question: "Which group would a crocodile belong to?",

        options: [
            "Reptiles",
            "Birds",
            "Fish",
            "Mammals"
        ],

        answer: 0,

        explanation:
            "Crocodiles are reptiles with scaly skin.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-019",

        question: "Which animal does NOT belong with the others?",

        options: [
            "Shark",
            "Trout",
            "Salmon",
            "Cod"
        ],

        answer: 0,

        explanation:
            "Sharks are fish, but unlike the others they have skeletons made mostly of cartilage rather than bone.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "classification", "fish"]
    },

    {
        id: "sci-classification-020",

        question: "Which sentence best describes classification?",

        options: [
            "Scientists group living things by their shared features.",
            "Scientists group living things by their size only.",
            "Scientists group living things by their colour only.",
            "Scientists put every living thing into the same group."
        ],

        answer: 0,

        explanation:
            "Classification uses shared characteristics to organise living things.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "classification", "living-things"]
    }

    ]

};