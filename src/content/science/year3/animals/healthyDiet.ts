import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const healthyDiet: SkillContent = {

    skillId: "healthyDiet",

    title: "Healthy Diet",

    description:
        "Learn why humans and other animals need the right types and amounts of food to stay healthy.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-healthy-diet-001",
        skillId: "healthyDiet",
        question: "Why do humans need food?",
        stage: "recognise",
        options: [
            "To stay healthy and have energy",
            "To change the weather",
            "To make sunlight",
            "To help plants grow"
        ],

        explanation:
            "Food gives our bodies energy and the nutrients needed to stay healthy.",

        difficulty: 1,
        correctAnswer: "To stay healthy and have energy",
        estimatedSeconds: 15,

        tags: [
            "science",
            "animals",
            "healthy-diet",
            "nutrition"
        ]
    },

    {
        id: "sci-healthy-diet-002",
        skillId: "healthyDiet",
        question: "Which food is a healthy snack?",
        stage: "recognise",
        options: [
            "An apple",
            "A bag of sweets",
            "A chocolate bar",
            "A fizzy drink"
        ],

        explanation:
            "Fruit is a healthy snack because it contains useful nutrients.",

        difficulty: 1,
        correctAnswer: "An apple",
        estimatedSeconds: 15,

        tags: [
            "science",
            "healthy-diet",
            "food"
        ]
    },

    {
        id: "sci-healthy-diet-003",
        skillId: "healthyDiet",
        question: "What helps keep your body healthy?",
        stage: "recognise",
        options: [
            "Eating a balanced diet",
            "Eating only sweets",
            "Skipping every meal",
            "Drinking only fizzy drinks"
        ],

        explanation:
            "A balanced diet includes different types of healthy foods.",

        difficulty: 1,
        correctAnswer: "Eating a balanced diet",
        estimatedSeconds: 15,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet"
        ]
    },

    {
        id: "sci-healthy-diet-004",
        skillId: "healthyDiet",
        question: "Which drink is usually the healthiest choice?",
        stage: "recognise",
        options: [
            "Water",
            "Fizzy drink",
            "Energy drink",
            "Sugary milkshake"
        ],

        explanation:
            "Water keeps your body hydrated without added sugar.",

        difficulty: 1,
        correctAnswer: "Water",
        estimatedSeconds: 15,

        tags: [
            "science",
            "healthy-diet",
            "water"
        ]
    },

    {
        id: "sci-healthy-diet-005",
        skillId: "healthyDiet",
        question: "Which food comes from the fruit group?",
        stage: "recognise",
        options: [
            "Banana",
            "Chicken",
            "Cheese",
            "Fish"
        ],

        explanation:
            "Bananas are fruit and are part of a healthy balanced diet.",

        difficulty: 1,
        correctAnswer: "Banana",
        estimatedSeconds: 15,

        tags: [
            "science",
            "healthy-diet",
            "fruit"
        ]
    },

    {
        id: "sci-healthy-diet-006",
        skillId: "healthyDiet",
        question: "Why is it important to eat different kinds of food?",
        stage: "recognise",
        options: [
            "Different foods provide different nutrients.",
            "So food tastes the same.",
            "To avoid drinking water.",
            "Because only fruit gives energy."
        ],

        explanation:
            "Our bodies need a variety of nutrients from different foods.",

        difficulty: 1,
        correctAnswer: "Different foods provide different nutrients.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "nutrition"
        ]
    },

    {
        id: "sci-healthy-diet-007",
        skillId: "healthyDiet",
        question: "Which meal is the healthiest?",
        stage: "recognise",
        options: [
            "Chicken, vegetables and rice",
            "Only sweets",
            "Only crisps",
            "Only chocolate"
        ],

        explanation:
            "A balanced meal contains different food groups.",

        difficulty: 1,
        correctAnswer: "Chicken, vegetables and rice",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet"
        ]
    },

    {
        id: "sci-healthy-diet-008",
        skillId: "healthyDiet",
        question: "Which food helps you eat a balanced diet?",
        stage: "recognise",
        options: [
            "Vegetables",
            "Sweets",
            "Chocolate",
            "Lollipops"
        ],

        explanation:
            "Vegetables are an important part of a healthy diet.",

        difficulty: 1,
        correctAnswer: "Vegetables",
        estimatedSeconds: 15,

        tags: [
            "science",
            "healthy-diet",
            "vegetables"
        ]
    },

    {
        id: "sci-healthy-diet-009",
        skillId: "healthyDiet",
        question: "What does a balanced diet include?",
        stage: "recognise",
        options: [
            "A variety of different healthy foods",
            "Only fruit",
            "Only meat",
            "Only cakes"
        ],

        explanation:
            "A balanced diet includes foods from different food groups.",

        difficulty: 1,
        correctAnswer: "A variety of different healthy foods",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet"
        ]
    },

    {
        id: "sci-healthy-diet-010",
        skillId: "healthyDiet",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Humans need the right types and amounts of food.",
            "Humans should only eat sugary foods.",
            "Water is not important.",
            "Vegetables are unhealthy."
        ],

        explanation:
            "Eating the right types and amounts of food helps people stay healthy.",

        difficulty: 1,
        correctAnswer: "Humans need the right types and amounts of food.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "nutrition"
        ]
    },
        {
        id: "sci-healthy-diet-011",
            skillId: "healthyDiet",
            question: "Why do people need a balanced diet?",
            stage: "recognise",
            options: [
            "To stay healthy and get the nutrients they need",
            "To make their bones disappear",
            "To stop drinking water",
            "To avoid eating fruit"
        ],

        explanation:
            "A balanced diet provides the nutrients your body needs to grow and stay healthy.",

        difficulty: 2,
            correctAnswer: "To stay healthy and get the nutrients they need",
            estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet",
            "nutrition"
        ]
    },

    {
        id: "sci-healthy-diet-012",
        skillId: "healthyDiet",
        question: "Which lunch is the healthiest?",
        stage: "recognise",
        options: [
            "A sandwich, carrot sticks, an apple and water",
            "Chocolate and fizzy drink",
            "Only crisps",
            "Only sweets"
        ],

        explanation:
            "A healthy lunch contains foods from different food groups and a healthy drink.",

        difficulty: 2,
        correctAnswer: "A sandwich, carrot sticks, an apple and water",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet"
        ]
    },

    {
        id: "sci-healthy-diet-013",
        skillId: "healthyDiet",
        question: "Which food should usually be eaten in smaller amounts?",
        stage: "recognise",
        options: [
            "Sweets",
            "Vegetables",
            "Fruit",
            "Wholemeal bread"
        ],

        explanation:
            "Foods high in sugar should usually be eaten less often than healthier foods.",

        difficulty: 2,
        correctAnswer: "Sweets",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "nutrition"
        ]
    },

    {
        id: "sci-healthy-diet-014",
        skillId: "healthyDiet",
        question: "Which food is a vegetable?",
        stage: "recognise",
        options: [
            "Broccoli",
            "Banana",
            "Chicken",
            "Cheese"
        ],

        explanation:
            "Broccoli is a vegetable and is an important part of a balanced diet.",

        difficulty: 2,
        correctAnswer: "Broccoli",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "vegetables"
        ]
    },

    {
        id: "sci-healthy-diet-015",
        skillId: "healthyDiet",
        question: "What is one reason to drink water every day?",
        stage: "recognise",
        options: [
            "It helps keep your body hydrated.",
            "It replaces all food.",
            "It makes your bones shorter.",
            "It stops you from exercising."
        ],

        explanation:
            "Water helps your body stay hydrated so it can work properly.",

        difficulty: 2,
        correctAnswer: "It helps keep your body hydrated.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "water"
        ]
    },

    {
        id: "sci-healthy-diet-016",
        skillId: "healthyDiet",
        question: "Which choice is part of a healthy lifestyle?",
        stage: "recognise",
        options: [
            "Eating a variety of healthy foods",
            "Eating sweets at every meal",
            "Never drinking water",
            "Skipping meals every day"
        ],

        explanation:
            "A healthy lifestyle includes eating a balanced variety of foods.",

        difficulty: 2,
        correctAnswer: "Eating a variety of healthy foods",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet"
        ]
    },

    {
        id: "sci-healthy-diet-017",
        skillId: "healthyDiet",
        question: "Which meal contains foods from different food groups?",
        stage: "recognise",
        options: [
            "Fish, potatoes and peas",
            "Only biscuits",
            "Only sweets",
            "Only crisps"
        ],

        explanation:
            "Healthy meals usually include foods from more than one food group.",

        difficulty: 2,
        correctAnswer: "Fish, potatoes and peas",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet"
        ]
    },

    {
        id: "sci-healthy-diet-018",
        skillId: "healthyDiet",
        question: "Why shouldn't people eat lots of sugary foods every day?",
        stage: "recognise",
        options: [
            "Too much sugar is not part of a balanced diet.",
            "Sugar helps vegetables grow.",
            "Sugar replaces water.",
            "Sugar makes muscles stronger than exercise."
        ],

        explanation:
            "Sugary foods are best eaten only in small amounts as part of a balanced diet.",

        difficulty: 2,
        correctAnswer: "Too much sugar is not part of a balanced diet.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "sugar"
        ]
    },

    {
        id: "sci-healthy-diet-019",
        skillId: "healthyDiet",
        question: "Which statement about healthy eating is correct?",
        stage: "recognise",
        options: [
            "Eating different healthy foods helps your body work well.",
            "Only fruit is needed.",
            "Only meat is needed.",
            "Only sweets are needed."
        ],

        explanation:
            "Different foods provide different nutrients that your body needs.",

        difficulty: 2,
        correctAnswer: "Eating different healthy foods helps your body work well.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "nutrition"
        ]
    },

    {
        id: "sci-healthy-diet-020",
        skillId: "healthyDiet",
        question: "What is the best summary of a healthy diet?",
        stage: "recognise",
        options: [
            "Eat a variety of foods in the right amounts and drink plenty of water.",
            "Eat only sweets.",
            "Drink fizzy drinks instead of water.",
            "Only eat one type of food."
        ],

        explanation:
            "A healthy diet includes a variety of foods, the right amounts and enough water.",

        difficulty: 2,
        correctAnswer: "Eat a variety of foods in the right amounts and drink plenty of water.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "healthy-diet",
            "balanced-diet",
            "nutrition",
            "water"
        ]
    }

    ]

};


export default healthyDiet;

export {

    healthyDiet

};
