import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const stoneAge: SkillContent = {

    skillId: "stoneAge",

    title: "The Stone Age",

    description:
        "Learn about life in Britain during the Stone Age, including homes, tools, food and daily life.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-stoneage-001",
        skillId: "stoneAge",
        question: "Why is it called the Stone Age?",
        stage: "recognise",
        options: [
            "People made many tools from stone.",
            "Everything was made of stone.",
            "People lived inside stones.",
            "There were no trees."
        ],

        explanation:
            "The Stone Age gets its name because stone was the main material used to make tools.",

        difficulty: 1,
        correctAnswer: "People made many tools from stone.",
        estimatedSeconds: 15,

        tags: ["history", "stone-age"]
    },

    {
        id: "hist-stoneage-002",
        skillId: "stoneAge",
        question: "What material was commonly used to make tools during the Stone Age?",
        stage: "recognise",
        options: [
            "Stone",
            "Plastic",
            "Steel",
            "Glass"
        ],

        explanation:
            "Stone tools were strong and could be shaped into useful objects.",

        difficulty: 1,
        correctAnswer: "Stone",
        estimatedSeconds: 15,

        tags: ["history", "tools"]
    },

    {
        id: "hist-stoneage-003",
        skillId: "stoneAge",
        question: "Which country are we learning about during the Stone Age?",
        stage: "recognise",
        options: [
            "Britain",
            "Australia",
            "Brazil",
            "Japan"
        ],

        explanation:
            "Year 3 History focuses on life in prehistoric Britain.",

        difficulty: 1,
        correctAnswer: "Britain",
        estimatedSeconds: 15,

        tags: ["history", "britain"]
    },

    {
        id: "hist-stoneage-004",
        skillId: "stoneAge",
        question: "Where did many early Stone Age people live?",
        stage: "recognise",
        options: [
            "Caves",
            "Castles",
            "Skyscrapers",
            "Blocks of flats"
        ],

        explanation:
            "Many early Stone Age people used caves for shelter.",

        difficulty: 1,
        correctAnswer: "Caves",
        estimatedSeconds: 15,

        tags: ["history", "homes"]
    },

    {
        id: "hist-stoneage-005",
        skillId: "stoneAge",
        question: "What did Stone Age people hunt for food?",
        stage: "recognise",
        options: [
            "Wild animals",
            "Farm animals",
            "Dinosaurs",
            "Pets"
        ],

        explanation:
            "People hunted wild animals before farming became common.",

        difficulty: 1,
        correctAnswer: "Wild animals",
        estimatedSeconds: 15,

        tags: ["history", "food"]
    },

    {
        id: "hist-stoneage-006",
        skillId: "stoneAge",
        question: "Besides hunting, how else did Stone Age people find food?",
        stage: "recognise",
        options: [
            "Gathering berries, nuts and plants",
            "Shopping",
            "Ordering food",
            "Fishing only"
        ],

        explanation:
            "People gathered wild plants, berries and nuts as part of their diet.",

        difficulty: 1,
        correctAnswer: "Gathering berries, nuts and plants",
        estimatedSeconds: 15,

        tags: ["history", "food"]
    },

    {
        id: "hist-stoneage-007",
        skillId: "stoneAge",
        question: "Which of these was NOT around during the Stone Age?",
        stage: "recognise",
        options: [
            "Cars",
            "Stone tools",
            "Campfires",
            "Animals"
        ],

        explanation:
            "Cars were invented many thousands of years later.",

        difficulty: 1,
        correctAnswer: "Cars",
        estimatedSeconds: 15,

        tags: ["history"]
    },

    {
        id: "hist-stoneage-008",
        skillId: "stoneAge",
        question: "Why was fire important to Stone Age people?",
        stage: "recognise",
        options: [
            "It kept them warm and cooked food.",
            "It powered televisions.",
            "It charged batteries.",
            "It built houses."
        ],

        explanation:
            "Fire gave warmth, light and allowed food to be cooked.",

        difficulty: 1,
        correctAnswer: "It kept them warm and cooked food.",
        estimatedSeconds: 20,

        tags: ["history", "fire"]
    },

    {
        id: "hist-stoneage-009",
        skillId: "stoneAge",
        question: "What kind of clothes did many Stone Age people wear?",
        stage: "recognise",
        options: [
            "Animal skins",
            "School uniforms",
            "Plastic coats",
            "Denim jeans"
        ],

        explanation:
            "Animal skins helped keep people warm.",

        difficulty: 1,
        correctAnswer: "Animal skins",
        estimatedSeconds: 20,

        tags: ["history", "clothing"]
    },

    {
        id: "hist-stoneage-010",
        skillId: "stoneAge",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Stone Age people lived thousands of years ago.",
            "Stone Age people used computers.",
            "Stone Age people drove cars.",
            "Stone Age people built railways."
        ],

        explanation:
            "The Stone Age happened long before modern inventions.",

        difficulty: 1,
        correctAnswer: "Stone Age people lived thousands of years ago.",
        estimatedSeconds: 20,

        tags: ["history"]
    },

    {
        id: "hist-stoneage-011",
        skillId: "stoneAge",
        question: "Why did Stone Age people make tools from stone?",
        stage: "recognise",
        options: [
            "Stone was strong and could be shaped.",
            "Stone grew on trees.",
            "Stone floated on water.",
            "Stone was soft like cloth."
        ],

        explanation:
            "Stone could be shaped into useful cutting and hunting tools.",

        difficulty: 2,
        correctAnswer: "Stone was strong and could be shaped.",
        estimatedSeconds: 20,

        tags: ["history", "tools"]
    },

    {
        id: "hist-stoneage-012",
        skillId: "stoneAge",
        question: "Why was hunting important?",
        stage: "recognise",
        options: [
            "It provided food and animal skins.",
            "It helped build roads.",
            "It made metal tools.",
            "It produced electricity."
        ],

        explanation:
            "Animals provided meat for food and skins for clothing.",

        difficulty: 2,
        correctAnswer: "It provided food and animal skins.",
        estimatedSeconds: 20,

        tags: ["history", "food"]
    },

    {
        id: "hist-stoneage-013",
        skillId: "stoneAge",
        question: "Why was gathering berries and nuts useful?",
        stage: "recognise",
        options: [
            "It provided extra food.",
            "It made houses.",
            "It created fire.",
            "It made stone tools."
        ],

        explanation:
            "Gathering plants helped provide a balanced food supply.",

        difficulty: 2,
        correctAnswer: "It provided extra food.",
        estimatedSeconds: 20,

        tags: ["history", "food"]
    },

    {
        id: "hist-stoneage-014",
        skillId: "stoneAge",
        question: "Why did people use caves for shelter?",
        stage: "recognise",
        options: [
            "They gave protection from weather and animals.",
            "They had electricity.",
            "They contained furniture.",
            "They had glass windows."
        ],

        explanation:
            "Caves helped protect people from rain, wind and dangerous animals.",

        difficulty: 2,
        correctAnswer: "They gave protection from weather and animals.",
        estimatedSeconds: 20,

        tags: ["history", "homes"]
    },

    {
        id: "hist-stoneage-015",
        skillId: "stoneAge",
        question: "How did fire improve everyday life?",
        stage: "recognise",
        options: [
            "It gave warmth, light and cooked food.",
            "It powered engines.",
            "It made plastic.",
            "It built houses."
        ],

        explanation:
            "Fire made life safer and food easier to eat.",

        difficulty: 2,
        correctAnswer: "It gave warmth, light and cooked food.",
        estimatedSeconds: 20,

        tags: ["history", "fire"]
    },

    {
        id: "hist-stoneage-016",
        skillId: "stoneAge",
        question: "Which activity would a Stone Age child most likely do?",
        stage: "recognise",
        options: [
            "Help gather food",
            "Play video games",
            "Travel by bus",
            "Use a laptop"
        ],

        explanation:
            "Children often helped their families gather food and learn important skills.",

        difficulty: 2,
        correctAnswer: "Help gather food",
        estimatedSeconds: 20,

        tags: ["history", "daily-life"]
    },

    {
        id: "hist-stoneage-017",
        skillId: "stoneAge",
        question: "Why do historians study Stone Age tools?",
        stage: "recognise",
        options: [
            "They help us understand how people lived.",
            "They are still used today.",
            "They make electricity.",
            "They are magical."
        ],

        explanation:
            "Tools provide clues about everyday life in the past.",

        difficulty: 2,
        correctAnswer: "They help us understand how people lived.",
        estimatedSeconds: 20,

        tags: ["history", "evidence"]
    },

    {
        id: "hist-stoneage-018",
        skillId: "stoneAge",
        question: "What changed when people learned to control fire?",
        stage: "recognise",
        options: [
            "They could cook food and stay warm.",
            "They invented cars.",
            "They built castles.",
            "They made computers."
        ],

        explanation:
            "Fire was one of the biggest improvements in Stone Age life.",

        difficulty: 2,
        correctAnswer: "They could cook food and stay warm.",
        estimatedSeconds: 20,

        tags: ["history", "fire"]
    },

    {
        id: "hist-stoneage-019",
        skillId: "stoneAge",
        question: "Which item would you expect to find in a Stone Age settlement?",
        stage: "recognise",
        options: [
            "Stone axe",
            "Television",
            "Bicycle",
            "Mobile phone"
        ],

        explanation:
            "Stone axes were important tools used for hunting and building.",

        difficulty: 2,
        correctAnswer: "Stone axe",
        estimatedSeconds: 20,

        tags: ["history", "tools"]
    },

    {
        id: "hist-stoneage-020",
        skillId: "stoneAge",
        question: "Which sentence best describes life in the Stone Age?",
        stage: "recognise",
        options: [
            "People used stone tools, hunted, gathered food and lived without modern technology.",
            "People travelled by train and used electricity.",
            "People lived in skyscrapers.",
            "People bought food from supermarkets."
        ],

        explanation:
            "Stone Age people relied on nature and simple tools to survive.",

        difficulty: 2,
        correctAnswer: "People used stone tools, hunted, gathered food and lived without modern technology.",
        estimatedSeconds: 20,

        tags: ["history", "stone-age", "prehistory"]
    }

    ]

};


export default stoneAge;

export {

    stoneAge

};
