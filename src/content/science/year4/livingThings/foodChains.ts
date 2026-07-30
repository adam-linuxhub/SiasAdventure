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

        question: "What is a food chain?",

        options: [
            "A diagram showing who eats whom",
            "A chain made from food",
            "A list of plants",
            "A type of habitat"
        ],

        answer: 0,

        explanation:
            "A food chain shows how energy passes from one living thing to another.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-002",

        question: "What is usually at the start of a food chain?",

        options: [
            "A plant",
            "A fox",
            "An owl",
            "A rabbit"
        ],

        answer: 0,

        explanation:
            "Plants make their own food using sunlight and begin most food chains.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "food-chains", "plants"]
    },

    {
        id: "sci-food-chains-003",

        question: "Which animal eats plants?",

        options: [
            "Rabbit",
            "Fox",
            "Owl",
            "Snake"
        ],

        answer: 0,

        explanation:
            "Rabbits are herbivores because they eat plants.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "food-chains", "herbivores"]
    },

    {
        id: "sci-food-chains-004",

        question: "Which animal might eat a rabbit?",

        options: [
            "Fox",
            "Grass",
            "Oak tree",
            "Carrot"
        ],

        answer: 0,

        explanation:
            "Foxes hunt rabbits for food.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-005",

        question: "In the food chain grass → rabbit → fox, what does the rabbit eat?",

        options: [
            "Grass",
            "Fox",
            "Seeds",
            "Insects"
        ],

        answer: 0,

        explanation:
            "The rabbit eats the grass.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-006",

        question: "In the food chain grass → rabbit → fox, what eats the rabbit?",

        options: [
            "Fox",
            "Grass",
            "Tree",
            "Flower"
        ],

        answer: 0,

        explanation:
            "The fox is the predator in this food chain.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-007",

        question: "What do we call an animal that eats plants?",

        options: [
            "Herbivore",
            "Carnivore",
            "Omnivore",
            "Producer"
        ],

        answer: 0,

        explanation:
            "Herbivores eat plants.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "herbivores"]
    },

    {
        id: "sci-food-chains-008",

        question: "What do we call an animal that eats other animals?",

        options: [
            "Carnivore",
            "Herbivore",
            "Producer",
            "Seed"
        ],

        answer: 0,

        explanation:
            "Carnivores eat other animals.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "carnivores"]
    },

    {
        id: "sci-food-chains-009",

        question: "Which living thing is a producer?",

        options: [
            "Grass",
            "Fox",
            "Owl",
            "Snake"
        ],

        answer: 0,

        explanation:
            "Plants are producers because they make their own food.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "producers"]
    },

    {
        id: "sci-food-chains-010",

        question: "Which statement is true?",

        options: [
            "Food chains begin with plants.",
            "Food chains always begin with foxes.",
            "Food chains begin with birds.",
            "Food chains never include plants."
        ],

        answer: 0,

        explanation:
            "Plants provide the energy for most food chains.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-011",

        question: "In the food chain grass → caterpillar → bird, what is the bird?",

        options: [
            "A carnivore",
            "A producer",
            "A herbivore",
            "A plant"
        ],

        answer: 0,

        explanation:
            "The bird eats another animal, so it is acting as a carnivore.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "food-chains", "carnivores"]
    },

    {
        id: "sci-food-chains-012",

        question: "Why are plants called producers?",

        options: [
            "They make their own food.",
            "They eat animals.",
            "They hunt insects.",
            "They drink milk."
        ],

        answer: 0,

        explanation:
            "Plants produce their own food using sunlight.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "producers"]
    },

    {
        id: "sci-food-chains-013",

        question: "Which food chain is correct?",

        options: [
            "Grass → rabbit → fox",
            "Fox → rabbit → grass",
            "Rabbit → grass → fox",
            "Grass → fox → rabbit"
        ],

        answer: 0,

        explanation:
            "Food chains begin with a producer and show who eats whom.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-014",

        question: "What might happen if all the rabbits disappeared from a habitat?",

        options: [
            "Foxes might have less food.",
            "Grass would disappear immediately.",
            "Trees would stop growing.",
            "Birds would become fish."
        ],

        answer: 0,

        explanation:
            "Removing one part of a food chain affects other living things.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "food-chains", "habitats"]
    },

    {
        id: "sci-food-chains-015",

        question: "Which animal is a herbivore?",

        options: [
            "Caterpillar",
            "Owl",
            "Fox",
            "Snake"
        ],

        answer: 0,

        explanation:
            "Most caterpillars feed on leaves.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "herbivores"]
    },

    {
        id: "sci-food-chains-016",

        question: "Why is the arrow used in a food chain?",

        options: [
            "It shows the direction that food energy moves.",
            "It shows where the animals live.",
            "It shows which animal is biggest.",
            "It shows which animal runs fastest."
        ],

        answer: 0,

        explanation:
            "The arrow points from the food to the organism that eats it.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-017",

        question: "Which food chain starts correctly?",

        options: [
            "Oak tree → caterpillar",
            "Bird → caterpillar",
            "Fox → rabbit",
            "Owl → mouse"
        ],

        answer: 0,

        explanation:
            "Food chains begin with a producer such as a plant.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-018",

        question: "A mouse eats seeds and an owl eats the mouse. Which is the predator?",

        options: [
            "Owl",
            "Mouse",
            "Seeds",
            "Grass"
        ],

        answer: 0,

        explanation:
            "The predator is the animal that hunts another animal.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "predators"]
    },

    {
        id: "sci-food-chains-019",

        question: "Which statement best explains why food chains are important?",

        options: [
            "They show how living things depend on each other for food.",
            "They show where animals sleep.",
            "They only describe plants.",
            "They explain the weather."
        ],

        answer: 0,

        explanation:
            "Food chains help us understand how energy moves through living things.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "food-chains"]
    },

    {
        id: "sci-food-chains-020",

        question: "Which sentence best describes a food chain?",

        options: [
            "A food chain shows how energy passes from plants to animals as living things eat one another.",
            "A food chain is a list of every animal in the world.",
            "A food chain only contains carnivores.",
            "A food chain always has four living things."
        ],

        answer: 0,

        explanation:
            "Food chains show feeding relationships and the movement of energy through living things.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "food-chains", "producers", "consumers"]
    }

    ]

};