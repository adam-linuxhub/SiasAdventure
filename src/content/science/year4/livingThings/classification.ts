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
        skillId: "classification",
        question: "Why do scientists classify living things?",
        stage: "recognise",
        options: [
            "To group similar living things together",
            "To make them grow faster",
            "To change their colour",
            "To make new animals"
        ],

        explanation:
            "Classification helps scientists organise and study living things.",

        difficulty: 1,
        correctAnswer: "To group similar living things together",
        estimatedSeconds: 15,

        tags: ["science", "classification"]
    },

    {
        id: "sci-classification-002",
        skillId: "classification",
        question: "Which of these is a mammal?",
        stage: "recognise",
        options: [
            "Dog",
            "Goldfish",
            "Robin",
            "Frog"
        ],

        explanation:
            "Dogs are mammals because they have fur and feed their young with milk.",

        difficulty: 1,
        correctAnswer: "Dog",
        estimatedSeconds: 15,

        tags: ["science", "animals", "mammals"]
    },

    {
        id: "sci-classification-003",
        skillId: "classification",
        question: "Which of these is a bird?",
        stage: "recognise",
        options: [
            "Pigeon",
            "Snake",
            "Rabbit",
            "Shark"
        ],

        explanation:
            "Birds have feathers, beaks and lay eggs.",

        difficulty: 1,
        correctAnswer: "Pigeon",
        estimatedSeconds: 15,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-004",
        skillId: "classification",
        question: "Which of these is a fish?",
        stage: "recognise",
        options: [
            "Salmon",
            "Cat",
            "Duck",
            "Lizard"
        ],

        explanation:
            "Fish live in water, breathe through gills and have fins.",

        difficulty: 1,
        correctAnswer: "Salmon",
        estimatedSeconds: 15,

        tags: ["science", "fish"]
    },

    {
        id: "sci-classification-005",
        skillId: "classification",
        question: "Which of these is a reptile?",
        stage: "recognise",
        options: [
            "Snake",
            "Horse",
            "Penguin",
            "Frog"
        ],

        explanation:
            "Reptiles have dry, scaly skin.",

        difficulty: 1,
        correctAnswer: "Snake",
        estimatedSeconds: 15,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-006",
        skillId: "classification",
        question: "Which of these is an amphibian?",
        stage: "recognise",
        options: [
            "Frog",
            "Chicken",
            "Whale",
            "Bee"
        ],

        explanation:
            "Frogs are amphibians because they live part of their lives in water and part on land.",

        difficulty: 1,
        correctAnswer: "Frog",
        estimatedSeconds: 15,

        tags: ["science", "amphibians"]
    },

    {
        id: "sci-classification-007",
        skillId: "classification",
        question: "Which group does an oak tree belong to?",
        stage: "recognise",
        options: [
            "Plants",
            "Mammals",
            "Birds",
            "Fish"
        ],

        explanation:
            "Trees are plants.",

        difficulty: 1,
        correctAnswer: "Plants",
        estimatedSeconds: 15,

        tags: ["science", "plants"]
    },

    {
        id: "sci-classification-008",
        skillId: "classification",
        question: "Which feature do birds have?",
        stage: "recognise",
        options: [
            "Feathers",
            "Scales",
            "Fur",
            "Gills"
        ],

        explanation:
            "Feathers are unique to birds.",

        difficulty: 1,
        correctAnswer: "Feathers",
        estimatedSeconds: 20,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-009",
        skillId: "classification",
        question: "Which animal has scales?",
        stage: "recognise",
        options: [
            "Lizard",
            "Rabbit",
            "Robin",
            "Dog"
        ],

        explanation:
            "Lizards are reptiles with scales.",

        difficulty: 1,
        correctAnswer: "Lizard",
        estimatedSeconds: 20,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-010",
        skillId: "classification",
        question: "Scientists classify living things by looking at their...",
        stage: "recognise",
        options: [
            "Features",
            "Favourite foods",
            "Names",
            "Colours only"
        ],

        explanation:
            "Scientists group living things using their characteristics and features.",

        difficulty: 1,
        correctAnswer: "Features",
        estimatedSeconds: 20,

        tags: ["science", "classification"]
    },

    {
        id: "sci-classification-011",
        skillId: "classification",
        question: "A penguin has feathers and lays eggs. Which group does it belong to?",
        stage: "recognise",
        options: [
            "Birds",
            "Fish",
            "Mammals",
            "Reptiles"
        ],

        explanation:
            "Even though penguins cannot fly, they are birds.",

        difficulty: 2,
        correctAnswer: "Birds",
        estimatedSeconds: 20,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-012",
        skillId: "classification",
        question: "A whale feeds its babies milk. Which group does it belong to?",
        stage: "recognise",
        options: [
            "Mammals",
            "Fish",
            "Amphibians",
            "Reptiles"
        ],

        explanation:
            "Whales are mammals even though they live in water.",

        difficulty: 2,
        correctAnswer: "Mammals",
        estimatedSeconds: 20,

        tags: ["science", "mammals"]
    },

    {
        id: "sci-classification-013",
        skillId: "classification",
        question: "Why are bats classified as mammals instead of birds?",
        stage: "recognise",
        options: [
            "They have fur and feed their young milk.",
            "They have feathers.",
            "They lay eggs.",
            "They have scales."
        ],

        explanation:
            "Flying does not make an animal a bird.",

        difficulty: 2,
        correctAnswer: "They have fur and feed their young milk.",
        estimatedSeconds: 20,

        tags: ["science", "mammals"]
    },

    {
        id: "sci-classification-014",
        skillId: "classification",
        question: "Which pair belongs to the same group?",
        stage: "recognise",
        options: [
            "Snake and lizard",
            "Robin and frog",
            "Cat and salmon",
            "Whale and crocodile"
        ],

        explanation:
            "Both snakes and lizards are reptiles.",

        difficulty: 2,
        correctAnswer: "Snake and lizard",
        estimatedSeconds: 20,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-015",
        skillId: "classification",
        question: "A scientist discovers an animal with feathers and a beak. Which group is it most likely to belong to?",
        stage: "recognise",
        options: [
            "Birds",
            "Fish",
            "Reptiles",
            "Amphibians"
        ],

        explanation:
            "Feathers and a beak are key features of birds.",

        difficulty: 2,
        correctAnswer: "Birds",
        estimatedSeconds: 20,

        tags: ["science", "birds"]
    },

    {
        id: "sci-classification-016",
        skillId: "classification",
        question: "Which feature helps identify a fish?",
        stage: "recognise",
        options: [
            "Gills and fins",
            "Feathers",
            "Fur",
            "Six legs"
        ],

        explanation:
            "Fish breathe using gills and swim with fins.",

        difficulty: 2,
        correctAnswer: "Gills and fins",
        estimatedSeconds: 20,

        tags: ["science", "fish"]
    },

    {
        id: "sci-classification-017",
        skillId: "classification",
        question: "Why do scientists use classification?",
        stage: "recognise",
        options: [
            "It helps them identify and study living things.",
            "It makes animals stronger.",
            "It changes habitats.",
            "It helps plants grow."
        ],

        explanation:
            "Classification makes it easier to compare and study living organisms.",

        difficulty: 2,
        correctAnswer: "It helps them identify and study living things.",
        estimatedSeconds: 20,

        tags: ["science", "classification"]
    },

    {
        id: "sci-classification-018",
        skillId: "classification",
        question: "Which group would a crocodile belong to?",
        stage: "recognise",
        options: [
            "Reptiles",
            "Birds",
            "Fish",
            "Mammals"
        ],

        explanation:
            "Crocodiles are reptiles with scaly skin.",

        difficulty: 2,
        correctAnswer: "Reptiles",
        estimatedSeconds: 20,

        tags: ["science", "reptiles"]
    },

    {
        id: "sci-classification-019",
        skillId: "classification",
        question: "Which animal does NOT belong with the others?",
        stage: "recognise",
        options: [
            "Shark",
            "Trout",
            "Salmon",
            "Cod"
        ],

        explanation:
            "Sharks are fish, but unlike the others they have skeletons made mostly of cartilage rather than bone.",

        difficulty: 2,
        correctAnswer: "Shark",
        estimatedSeconds: 20,

        tags: ["science", "classification", "fish"]
    },

    {
        id: "sci-classification-020",
        skillId: "classification",
        question: "Which sentence best describes classification?",
        stage: "recognise",
        options: [
            "Scientists group living things by their shared features.",
            "Scientists group living things by their size only.",
            "Scientists group living things by their colour only.",
            "Scientists put every living thing into the same group."
        ],

        explanation:
            "Classification uses shared characteristics to organise living things.",

        difficulty: 2,
        correctAnswer: "Scientists group living things by their shared features.",
        estimatedSeconds: 20,

        tags: ["science", "classification", "living-things"]
    }

    ]

};