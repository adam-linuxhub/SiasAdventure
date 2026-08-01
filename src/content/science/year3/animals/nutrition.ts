import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const nutrition: SkillContent = {

    skillId: "nutrition",

    title: "Nutrition",

    description:
        "Learn that animals, including humans, need the right types and amounts of food to stay healthy and cannot make their own food like plants.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-nutrition-001",
        skillId: "nutrition",
        question: "Why do animals need food?",
        stage: "recognise",
        options: [
            "To get energy and grow",
            "To make sunlight",
            "To make rain",
            "To grow roots"
        ],

        explanation:
            "Animals need food to provide energy, help them grow and stay healthy.",

        difficulty: 1,
        correctAnswer: "To get energy and grow",
        estimatedSeconds: 10,

        tags: [
            "science",
            "animals",
            "nutrition",
            "food"
        ]
    },

    {
        id: "sci-nutrition-002",
        skillId: "nutrition",
        question: "Which living thing can make its own food?",
        stage: "recognise",
        options: [
            "A plant",
            "A rabbit",
            "A dog",
            "A human"
        ],

        explanation:
            "Plants make their own food using sunlight. Animals cannot make their own food.",

        difficulty: 1,
        correctAnswer: "A plant",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "animals",
            "nutrition"
        ]
    },

    {
        id: "sci-nutrition-003",
        skillId: "nutrition",
        question: "Animals get their food by...",
        stage: "recognise",
        options: [
            "Eating plants or other animals",
            "Making it from sunlight",
            "Growing it inside their bodies",
            "Absorbing it through their roots"
        ],

        explanation:
            "Animals must eat plants, other animals or both to get food.",

        difficulty: 1,
        correctAnswer: "Eating plants or other animals",
        estimatedSeconds: 15,

        tags: [
            "science",
            "animals",
            "nutrition"
        ]
    },

    {
        id: "sci-nutrition-004",
        skillId: "nutrition",
        question: "Which of these is an animal?",
        stage: "recognise",
        options: [
            "Fox",
            "Oak tree",
            "Rose bush",
            "Grass"
        ],

        explanation:
            "A fox is an animal and must eat food to survive.",

        difficulty: 1,
        correctAnswer: "Fox",
        estimatedSeconds: 15,

        tags: [
            "science",
            "animals"
        ]
    },

    {
        id: "sci-nutrition-005",
        skillId: "nutrition",
        question: "What do humans need to stay healthy?",
        stage: "recognise",
        options: [
            "The right types and amounts of food",
            "Only sweets",
            "Only water",
            "Only fruit"
        ],

        explanation:
            "Humans need a balanced diet with different types of food.",

        difficulty: 1,
        correctAnswer: "The right types and amounts of food",
        estimatedSeconds: 15,

        tags: [
            "science",
            "humans",
            "nutrition"
        ]
    },

    {
        id: "sci-nutrition-006",
        skillId: "nutrition",
        question: "Which of these can NOT make its own food?",
        stage: "recognise",
        options: [
            "A cat",
            "A sunflower",
            "An oak tree",
            "Grass"
        ],

        explanation:
            "Cats are animals and must eat other living things for food.",

        difficulty: 1,
        correctAnswer: "A cat",
        estimatedSeconds: 15,

        tags: [
            "science",
            "animals",
            "nutrition"
        ]
    },

    {
        id: "sci-nutrition-007",
        skillId: "nutrition",
        question: "What happens if an animal does not get enough food?",
        stage: "recognise",
        options: [
            "It may become weak and unhealthy.",
            "It grows much faster.",
            "It makes its own food.",
            "Nothing changes."
        ],

        explanation:
            "Animals need enough food to provide energy and help them stay healthy.",

        difficulty: 1,
        correctAnswer: "It may become weak and unhealthy.",
        estimatedSeconds: 15,

        tags: [
            "science",
            "animals",
            "nutrition",
            "health"
        ]
    },

    {
        id: "sci-nutrition-008",
        skillId: "nutrition",
        question: "Which living thing gets energy from eating food?",
        stage: "recognise",
        options: [
            "A bird",
            "A tree",
            "A flower",
            "Grass"
        ],

        explanation:
            "Animals get energy by eating food, unlike plants which make their own food.",

        difficulty: 1,
        correctAnswer: "A bird",
        estimatedSeconds: 15,

        tags: [
            "science",
            "animals",
            "energy"
        ]
    },

    {
        id: "sci-nutrition-009",
        skillId: "nutrition",
        question: "Which of these is a healthy choice to eat regularly?",
        stage: "recognise",
        options: [
            "Fruit and vegetables",
            "Only sweets",
            "Only crisps",
            "Only chocolate"
        ],

        explanation:
            "Fruit and vegetables are part of a healthy, balanced diet.",

        difficulty: 1,
        correctAnswer: "Fruit and vegetables",
        estimatedSeconds: 20,

        tags: [
            "science",
            "nutrition",
            "healthy-eating"
        ]
    },

    {
        id: "sci-nutrition-010",
        skillId: "nutrition",
        question: "Which statement is correct?",
        stage: "recognise",
        options: [
            "Animals cannot make their own food.",
            "Animals make food using sunlight.",
            "Animals grow roots to absorb food.",
            "Animals do not need food."
        ],

        explanation:
            "Unlike plants, animals must obtain food by eating other living things.",

        difficulty: 1,
        correctAnswer: "Animals cannot make their own food.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "animals",
            "nutrition"
        ]
    },
        {
        id: "sci-nutrition-011",
            skillId: "nutrition",
            question: "Why do humans eat different types of food?",
            stage: "recognise",
            options: [
            "To stay healthy and get the nutrients they need",
            "To make their own sunlight",
            "To grow leaves",
            "To make soil"
        ],

        explanation:
            "Eating a variety of foods helps humans get the nutrients needed for good health.",

        difficulty: 2,
            correctAnswer: "To stay healthy and get the nutrients they need",
            estimatedSeconds: 20,

        tags: [
            "science",
            "humans",
            "nutrition",
            "healthy-eating"
        ]
    },

    {
        id: "sci-nutrition-012",
        skillId: "nutrition",
        question: "Which animal eats plants?",
        stage: "recognise",
        options: [
            "Rabbit",
            "Lion",
            "Shark",
            "Eagle"
        ],

        explanation:
            "Rabbits eat plants to get the energy and nutrients they need.",

        difficulty: 2,
        correctAnswer: "Rabbit",
        estimatedSeconds: 20,

        tags: [
            "science",
            "animals",
            "nutrition"
        ]
    },

    {
        id: "sci-nutrition-013",
        skillId: "nutrition",
        question: "Which animal mainly eats other animals?",
        stage: "recognise",
        options: [
            "Lion",
            "Cow",
            "Horse",
            "Rabbit"
        ],

        explanation:
            "Lions are carnivores and mainly eat other animals.",

        difficulty: 2,
        correctAnswer: "Lion",
        estimatedSeconds: 20,

        tags: [
            "science",
            "animals",
            "nutrition",
            "carnivore"
        ]
    },

    {
        id: "sci-nutrition-014",
        skillId: "nutrition",
        question: "Which food is a good source of energy?",
        stage: "recognise",
        options: [
            "Bread",
            "Plastic",
            "Paper",
            "Glass"
        ],

        explanation:
            "Foods such as bread provide energy for the body.",

        difficulty: 2,
        correctAnswer: "Bread",
        estimatedSeconds: 20,

        tags: [
            "science",
            "nutrition",
            "energy"
        ]
    },

    {
        id: "sci-nutrition-015",
        skillId: "nutrition",
        question: "Why do children need healthy food?",
        stage: "recognise",
        options: [
            "To help them grow and stay healthy",
            "To grow roots",
            "To make sunlight",
            "To change into adults overnight"
        ],

        explanation:
            "Healthy food provides the nutrients children need for growth and good health.",

        difficulty: 2,
        correctAnswer: "To help them grow and stay healthy",
        estimatedSeconds: 20,

        tags: [
            "science",
            "humans",
            "nutrition",
            "growth"
        ]
    },

    {
        id: "sci-nutrition-016",
        skillId: "nutrition",
        question: "Which of these is part of a balanced diet?",
        stage: "recognise",
        options: [
            "Eating a variety of foods",
            "Eating only sweets",
            "Eating only chips",
            "Eating only cake"
        ],

        explanation:
            "A balanced diet includes different types of foods in suitable amounts.",

        difficulty: 2,
        correctAnswer: "Eating a variety of foods",
        estimatedSeconds: 20,

        tags: [
            "science",
            "nutrition",
            "healthy-eating"
        ]
    },

    {
        id: "sci-nutrition-017",
        skillId: "nutrition",
        question: "What do all animals have in common?",
        stage: "recognise",
        options: [
            "They need food to survive",
            "They make their own food",
            "They have roots",
            "They make sunlight"
        ],

        explanation:
            "All animals depend on food for energy and survival.",

        difficulty: 2,
        correctAnswer: "They need food to survive",
        estimatedSeconds: 20,

        tags: [
            "science",
            "animals",
            "nutrition"
        ]
    },

    {
        id: "sci-nutrition-018",
        skillId: "nutrition",
        question: "Which meal would usually be the healthiest?",
        stage: "recognise",
        options: [
            "Chicken, vegetables and rice",
            "Only sweets",
            "Only crisps",
            "Only chocolate biscuits"
        ],

        explanation:
            "A healthy meal contains a variety of nutritious foods.",

        difficulty: 2,
        correctAnswer: "Chicken, vegetables and rice",
        estimatedSeconds: 20,

        tags: [
            "science",
            "nutrition",
            "healthy-eating"
        ]
    },

    {
        id: "sci-nutrition-019",
        skillId: "nutrition",
        question: "If an animal cannot find enough food, what is likely to happen?",
        stage: "recognise",
        options: [
            "It may lose energy and become unhealthy",
            "It will start making its own food",
            "It will grow much faster",
            "It will no longer need food"
        ],

        explanation:
            "Without enough food, animals have less energy and their health can suffer.",

        difficulty: 2,
        correctAnswer: "It may lose energy and become unhealthy",
        estimatedSeconds: 20,

        tags: [
            "science",
            "animals",
            "nutrition",
            "health"
        ]
    },

    {
        id: "sci-nutrition-020",
        skillId: "nutrition",
        question: "Which statement best explains nutrition?",
        stage: "recognise",
        options: [
            "Animals need the right types and amounts of food to stay healthy.",
            "Animals can survive without food.",
            "Animals make food using sunlight.",
            "Animals only need water."
        ],

        explanation:
            "Nutrition is about getting the right food to provide energy, growth and good health.",

        difficulty: 2,
        correctAnswer: "Animals need the right types and amounts of food to stay healthy.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "animals",
            "nutrition",
            "healthy-eating"
        ]
    },
        ]

};


export default nutrition;

export {

    nutrition

};
