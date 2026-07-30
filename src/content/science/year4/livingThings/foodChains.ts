import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const foodChains: SkillContent = {

    skillId: "foodChains",

    title: "Food Chains",

    description:
        "Learn how plants and animals depend on each other for food in simple food chains.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-food-chains-001",
        skillId: "foodChains",
        question: "What is a food chain?",
        stage: "recognise",
        options: [
            "A diagram showing who eats whom",
            "A chain made from food",
            "A list of plants",
            "A type of habitat"
        ],

        explanation:
            "A food chain shows how energy passes from one living thing to another.",

        difficulty: 1,
        correctAnswer: "A diagram showing who eats whom",
        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-002",
        skillId: "foodChains",
        question: "What is usually at the start of a food chain?",
        stage: "recognise",
        options: [
            "A plant",
            "A fox",
            "An owl",
            "A rabbit"
        ],

        explanation:
            "Plants make their own food using sunlight and begin most food chains.",

        difficulty: 1,
        correctAnswer: "A plant",
        estimatedSeconds: 15,

        tags: ["science", "food-chains", "plants"]
    },

    {
        id: "sci-food-chains-003",
        skillId: "foodChains",
        question: "Which animal eats plants?",
        stage: "recognise",
        options: [
            "Rabbit",
            "Fox",
            "Owl",
            "Snake"
        ],

        explanation:
            "Rabbits are herbivores because they eat plants.",

        difficulty: 1,
        correctAnswer: "Rabbit",
        estimatedSeconds: 15,

        tags: ["science", "food-chains", "herbivores"]
    },

    {
        id: "sci-food-chains-004",
        skillId: "foodChains",
        question: "Which animal might eat a rabbit?",
        stage: "recognise",
        options: [
            "Fox",
            "Grass",
            "Oak tree",
            "Carrot"
        ],

        explanation:
            "Foxes hunt rabbits for food.",

        difficulty: 1,
        correctAnswer: "Fox",
        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-005",
        skillId: "foodChains",
        question: "In the food chain grass → rabbit → fox, what does the rabbit eat?",
        stage: "recognise",
        options: [
            "Grass",
            "Fox",
            "Seeds",
            "Insects"
        ],

        explanation:
            "The rabbit eats the grass.",

        difficulty: 1,
        correctAnswer: "Grass",
        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-006",
        skillId: "foodChains",
        question: "In the food chain grass → rabbit → fox, what eats the rabbit?",
        stage: "recognise",
        options: [
            "Fox",
            "Grass",
            "Tree",
            "Flower"
        ],

        explanation:
            "The fox is the predator in this food chain.",

        difficulty: 1,
        correctAnswer: "Fox",
        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-007",
        skillId: "foodChains",
        question: "What do we call an animal that eats plants?",
        stage: "recognise",
        options: [
            "Herbivore",
            "Carnivore",
            "Omnivore",
            "Producer"
        ],

        explanation:
            "Herbivores eat plants.",

        difficulty: 1,
        correctAnswer: "Herbivore",
        estimatedSeconds: 15,

        tags: ["science", "herbivores"]
    },

    {
        id: "sci-food-chains-008",
        skillId: "foodChains",
        question: "What do we call an animal that eats other animals?",
        stage: "recognise",
        options: [
            "Carnivore",
            "Herbivore",
            "Producer",
            "Seed"
        ],

        explanation:
            "Carnivores eat other animals.",

        difficulty: 1,
        correctAnswer: "Carnivore",
        estimatedSeconds: 20,

        tags: ["science", "carnivores"]
    },

    {
        id: "sci-food-chains-009",
        skillId: "foodChains",
        question: "Which living thing is a producer?",
        stage: "recognise",
        options: [
            "Grass",
            "Fox",
            "Owl",
            "Snake"
        ],

        explanation:
            "Plants are producers because they make their own food.",

        difficulty: 1,
        correctAnswer: "Grass",
        estimatedSeconds: 20,

        tags: ["science", "producers"]
    },

    {
        id: "sci-food-chains-010",
        skillId: "foodChains",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Food chains begin with plants.",
            "Food chains always begin with foxes.",
            "Food chains begin with birds.",
            "Food chains never include plants."
        ],

        explanation:
            "Plants provide the energy for most food chains.",

        difficulty: 1,
        correctAnswer: "Food chains begin with plants.",
        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-011",
        skillId: "foodChains",
        question: "In the food chain grass → caterpillar → bird, what is the bird?",
        stage: "recognise",
        options: [
            "A carnivore",
            "A producer",
            "A herbivore",
            "A plant"
        ],

        explanation:
            "The bird eats another animal, so it is acting as a carnivore.",

        difficulty: 2,
        correctAnswer: "A carnivore",
        estimatedSeconds: 20,

        tags: ["science", "food-chains", "carnivores"]
    },

    {
        id: "sci-food-chains-012",
        skillId: "foodChains",
        question: "Why are plants called producers?",
        stage: "recognise",
        options: [
            "They make their own food.",
            "They eat animals.",
            "They hunt insects.",
            "They drink milk."
        ],

        explanation:
            "Plants produce their own food using sunlight.",

        difficulty: 2,
        correctAnswer: "They make their own food.",
        estimatedSeconds: 20,

        tags: ["science", "producers"]
    },

    {
        id: "sci-food-chains-013",
        skillId: "foodChains",
        question: "Which food chain is correct?",
        stage: "recognise",
        options: [
            "Grass → rabbit → fox",
            "Fox → rabbit → grass",
            "Rabbit → grass → fox",
            "Grass → fox → rabbit"
        ],

        explanation:
            "Food chains begin with a producer and show who eats whom.",

        difficulty: 2,
        correctAnswer: "Grass → rabbit → fox",
        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-014",
        skillId: "foodChains",
        question: "What might happen if all the rabbits disappeared from a habitat?",
        stage: "recognise",
        options: [
            "Foxes might have less food.",
            "Grass would disappear immediately.",
            "Trees would stop growing.",
            "Birds would become fish."
        ],

        explanation:
            "Removing one part of a food chain affects other living things.",

        difficulty: 2,
        correctAnswer: "Foxes might have less food.",
        estimatedSeconds: 20,

        tags: ["science", "food-chains", "habitats"]
    },

    {
        id: "sci-food-chains-015",
        skillId: "foodChains",
        question: "Which animal is a herbivore?",
        stage: "recognise",
        options: [
            "Caterpillar",
            "Owl",
            "Fox",
            "Snake"
        ],

        explanation:
            "Most caterpillars feed on leaves.",

        difficulty: 2,
        correctAnswer: "Caterpillar",
        estimatedSeconds: 20,

        tags: ["science", "herbivores"]
    },

    {
        id: "sci-food-chains-016",
        skillId: "foodChains",
        question: "Why is the arrow used in a food chain?",
        stage: "recognise",
        options: [
            "It shows the direction that food energy moves.",
            "It shows where the animals live.",
            "It shows which animal is biggest.",
            "It shows which animal runs fastest."
        ],

        explanation:
            "The arrow points from the food to the organism that eats it.",

        difficulty: 2,
        correctAnswer: "It shows the direction that food energy moves.",
        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-017",
        skillId: "foodChains",
        question: "Which food chain starts correctly?",
        stage: "recognise",
        options: [
            "Oak tree → caterpillar",
            "Bird → caterpillar",
            "Fox → rabbit",
            "Owl → mouse"
        ],

        explanation:
            "Food chains begin with a producer such as a plant.",

        difficulty: 2,
        correctAnswer: "Oak tree → caterpillar",
        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-018",
        skillId: "foodChains",
        question: "A mouse eats seeds and an owl eats the mouse. Which is the predator?",
        stage: "recognise",
        options: [
            "Owl",
            "Mouse",
            "Seeds",
            "Grass"
        ],

        explanation:
            "The predator is the animal that hunts another animal.",

        difficulty: 2,
        correctAnswer: "Owl",
        estimatedSeconds: 20,

        tags: ["science", "predators"]
    },

    {
        id: "sci-food-chains-019",
        skillId: "foodChains",
        question: "Which statement best explains why food chains are important?",
        stage: "recognise",
        options: [
            "They show how living things depend on each other for food.",
            "They show where animals sleep.",
            "They only describe plants.",
            "They explain the weather."
        ],

        explanation:
            "Food chains help us understand how energy moves through living things.",

        difficulty: 2,
        correctAnswer: "They show how living things depend on each other for food.",
        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-020",
        skillId: "foodChains",
        question: "Which sentence best describes a food chain?",
        stage: "recognise",
        options: [
            "A food chain shows how energy passes from plants to animals as living things eat one another.",
            "A food chain is a list of every animal in the world.",
            "A food chain only contains carnivores.",
            "A food chain always has four living things."
        ],

        explanation:
            "Food chains show feeding relationships and the movement of energy through living things.",

        difficulty: 2,
        correctAnswer: "A food chain shows how energy passes from plants to animals as living things eat one another.",
        estimatedSeconds: 20,

        tags: ["science", "food-chains", "producers", "consumers"]
    }

    ]

};