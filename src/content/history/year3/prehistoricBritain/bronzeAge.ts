import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const bronzeAge: SkillContent = {

    skillId: "bronzeAge",

    title: "The Bronze Age",

    description:
        "Learn about life in Britain during the Bronze Age, including bronze tools, farming and trade.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-bronze-001",
        skillId: "bronzeAge",
        question: "Why is it called the Bronze Age?",
        stage: "recognise",
        options: [
            "People began making tools from bronze.",
            "Everything was coloured bronze.",
            "People lived in bronze houses.",
            "Bronze was used to grow crops."
        ],

        
        hint: "Focus on the discovery that changed everyday tools.",

        explanation:
            "The Bronze Age is named after the use of bronze to make tools and weapons.",

        difficulty: 1,
        correctAnswer: "People began making tools from bronze.",
        estimatedSeconds: 15,

        tags: ["history", "bronze-age"]
    },

    {
        id: "hist-bronze-002",
        skillId: "bronzeAge",
        question: "Bronze is made by mixing which two metals?",
        stage: "recognise",
        options: [
            "Copper and tin",
            "Iron and gold",
            "Silver and lead",
            "Copper and aluminium"
        ],

        
        hint: "Think about combining materials to create something new.",

        explanation:
            "Bronze is an alloy made by mixing copper and tin.",

        difficulty: 1,
        correctAnswer: "Copper and tin",
        estimatedSeconds: 15,

        tags: ["history", "bronze"]
    },

    {
        id: "hist-bronze-003",
        skillId: "bronzeAge",
        question: "Bronze tools were usually stronger than tools made from...",
        stage: "recognise",
        options: [
            "Stone",
            "Plastic",
            "Glass",
            "Paper"
        ],

        
        hint: "Compare this period with the one before it.",

        explanation:
            "Bronze tools were often stronger and lasted longer than stone tools.",

        difficulty: 1,
        correctAnswer: "Stone",
        estimatedSeconds: 15,

        tags: ["history", "tools"]
    },

    {
        id: "hist-bronze-004",
        skillId: "bronzeAge",
        question: "What did many Bronze Age people grow?",
        stage: "recognise",
        options: [
            "Crops",
            "Palm trees",
            "Rubber",
            "Cotton candy"
        ],

        
        hint: "Consider what farmers planted for food.",

        explanation:
            "Many Bronze Age people were farmers who grew crops.",

        difficulty: 1,
        correctAnswer: "Crops",
        estimatedSeconds: 15,

        tags: ["history", "farming"]
    },

    {
        id: "hist-bronze-005",
        skillId: "bronzeAge",
        question: "Which animals did Bronze Age farmers often keep?",
        stage: "recognise",
        options: [
            "Cattle and sheep",
            "Dinosaurs",
            "Penguins",
            "Elephants"
        ],

        
        hint: "Choose animals useful throughout the year.",

        explanation:
            "Cattle and sheep were commonly kept for food and other resources.",

        difficulty: 1,
        correctAnswer: "Cattle and sheep",
        estimatedSeconds: 15,

        tags: ["history", "farming"]
    },

    {
        id: "hist-bronze-006",
        skillId: "bronzeAge",
        question: "What is farming?",
        stage: "recognise",
        options: [
            "Growing crops and keeping animals",
            "Building castles",
            "Making computers",
            "Travelling by train"
        ],

        
        hint: "Think beyond crops to all food production.",

        explanation:
            "Farming means growing plants and raising animals for food.",

        difficulty: 1,
        correctAnswer: "Growing crops and keeping animals",
        estimatedSeconds: 15,

        tags: ["history", "farming"]
    },

    {
        id: "hist-bronze-007",
        skillId: "bronzeAge",
        question: "What is trade?",
        stage: "recognise",
        options: [
            "Buying, selling or exchanging goods",
            "Growing vegetables",
            "Building roads",
            "Writing books"
        ],

        
        hint: "How do people get things they cannot make?",

        explanation:
            "Trade means exchanging goods between people or groups.",

        difficulty: 1,
        correctAnswer: "Buying, selling or exchanging goods",
        estimatedSeconds: 15,

        tags: ["history", "trade"]
    },

    {
        id: "hist-bronze-008",
        skillId: "bronzeAge",
        question: "What material became more common during the Bronze Age?",
        stage: "recognise",
        options: [
            "Bronze",
            "Plastic",
            "Concrete",
            "Steel"
        ],

        
        hint: "Which material defines this historical period?",

        explanation:
            "Bronze became widely used for tools, weapons and jewellery.",

        difficulty: 1,
        correctAnswer: "Bronze",
        estimatedSeconds: 20,

        tags: ["history", "bronze"]
    },

    {
        id: "hist-bronze-009",
        skillId: "bronzeAge",
        question: "Which of these might a Bronze Age craftsperson make?",
        stage: "recognise",
        options: [
            "A bronze axe",
            "A laptop",
            "A bicycle",
            "A television"
        ],

        
        hint: "Imagine a skilled maker's workshop.",

        explanation:
            "Bronze was used to make useful tools such as axes.",

        difficulty: 1,
        correctAnswer: "A bronze axe",
        estimatedSeconds: 20,

        tags: ["history", "tools"]
    },

    {
        id: "hist-bronze-010",
        skillId: "bronzeAge",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "People used bronze to make many useful objects.",
            "People drove tractors.",
            "People used electricity.",
            "People built aeroplanes."
        ],

        
        hint: "Ignore options needing modern technology.",

        explanation:
            "Bronze was an important new material during this period.",

        difficulty: 1,
        correctAnswer: "People used bronze to make many useful objects.",
        estimatedSeconds: 20,

        tags: ["history", "bronze-age"]
    },

    {
        id: "hist-bronze-011",
        skillId: "bronzeAge",
        question: "Why was bronze useful for making tools?",
        stage: "recognise",
        options: [
            "It was stronger than stone.",
            "It floated on water.",
            "It was made from wood.",
            "It melted in the rain."
        ],

        
        hint: "Think about durability, not appearance.",

        explanation:
            "Bronze tools were tougher and lasted longer than stone tools.",

        difficulty: 2,
        correctAnswer: "It was stronger than stone.",
        estimatedSeconds: 20,

        tags: ["history", "tools"]
    },

    {
        id: "hist-bronze-012",
        skillId: "bronzeAge",
        question: "Why was farming important during the Bronze Age?",
        stage: "recognise",
        options: [
            "It provided a steady supply of food.",
            "It made electricity.",
            "It produced bronze.",
            "It built houses."
        ],

        
        hint: "Communities needed reliable food every year.",

        explanation:
            "Farming helped communities produce reliable food.",

        difficulty: 2,
        correctAnswer: "It provided a steady supply of food.",
        estimatedSeconds: 20,

        tags: ["history", "farming"]
    },

    {
        id: "hist-bronze-013",
        skillId: "bronzeAge",
        question: "Why did people trade with other groups?",
        stage: "recognise",
        options: [
            "To obtain things they did not have.",
            "To grow crops faster.",
            "To build castles.",
            "To invent cars."
        ],

        
        hint: "Exchange helps everyone access scarce resources.",

        explanation:
            "Trading allowed people to exchange useful materials and goods.",

        difficulty: 2,
        correctAnswer: "To obtain things they did not have.",
        estimatedSeconds: 20,

        tags: ["history", "trade"]
    },

    {
        id: "hist-bronze-014",
        skillId: "bronzeAge",
        question: "How did bronze improve everyday life?",
        stage: "recognise",
        options: [
            "It made stronger tools and weapons.",
            "It created electricity.",
            "It powered engines.",
            "It replaced farming."
        ],

        
        hint: "Better materials improve everyday tasks.",

        explanation:
            "Bronze made many everyday tools more effective.",

        difficulty: 2,
        correctAnswer: "It made stronger tools and weapons.",
        estimatedSeconds: 20,

        tags: ["history", "bronze"]
    },

    {
        id: "hist-bronze-015",
        skillId: "bronzeAge",
        question: "Which activity became more common as farming developed?",
        stage: "recognise",
        options: [
            "Living in settled communities",
            "Travelling by aeroplane",
            "Building skyscrapers",
            "Using computers"
        ],

        
        hint: "Farming encourages people to settle nearby.",

        explanation:
            "Farmers often settled in one place to look after crops and animals.",

        difficulty: 2,
        correctAnswer: "Living in settled communities",
        estimatedSeconds: 20,

        tags: ["history", "settlements"]
    },

    {
        id: "hist-bronze-016",
        skillId: "bronzeAge",
        question: "Why might a farmer keep sheep?",
        stage: "recognise",
        options: [
            "For wool, meat and milk",
            "To make bronze",
            "To build houses",
            "To pull trains"
        ],

        
        hint: "Animals provided more than just meat.",

        explanation:
            "Sheep provided useful materials and food.",

        difficulty: 2,
        correctAnswer: "For wool, meat and milk",
        estimatedSeconds: 20,

        tags: ["history", "farming"]
    },

    {
        id: "hist-bronze-017",
        skillId: "bronzeAge",
        question: "What does the word 'alloy' mean?",
        stage: "recognise",
        options: [
            "A mixture of metals",
            "A sharp stone",
            "A farming tool",
            "A type of crop"
        ],

        
        hint: "This word describes composition, not purpose.",

        explanation:
            "Bronze is an alloy because it is made by mixing copper and tin.",

        difficulty: 2,
        correctAnswer: "A mixture of metals",
        estimatedSeconds: 20,

        tags: ["history", "bronze"]
    },

    {
        id: "hist-bronze-018",
        skillId: "bronzeAge",
        question: "Why is the Bronze Age an important period in history?",
        stage: "recognise",
        options: [
            "People developed new materials and technologies.",
            "People invented the internet.",
            "People travelled into space.",
            "People built motorways."
        ],

        
        hint: "Major discoveries can reshape society.",

        explanation:
            "The discovery of bronze changed the way people lived and worked.",

        difficulty: 2,
        correctAnswer: "People developed new materials and technologies.",
        estimatedSeconds: 20,

        tags: ["history", "bronze-age"]
    },

    {
        id: "hist-bronze-019",
        skillId: "bronzeAge",
        question: "Which object would most likely belong to the Bronze Age?",
        stage: "recognise",
        options: [
            "Bronze sword",
            "Plastic bottle",
            "Steel bicycle",
            "Mobile phone"
        ],

        
        hint: "Eliminate anything invented much later.",

        explanation:
            "Bronze weapons and tools became common during this period.",

        difficulty: 2,
        correctAnswer: "Bronze sword",
        estimatedSeconds: 20,

        tags: ["history", "artefacts"]
    },

    {
        id: "hist-bronze-020",
        skillId: "bronzeAge",
        question: "Which sentence best describes the Bronze Age?",
        stage: "recognise",
        options: [
            "People used bronze tools, farmed the land and traded with others.",
            "People used electricity and cars.",
            "People lived only in castles.",
            "People stopped making tools."
        ],

        
        hint: "Pick the description that includes several key features.",

        explanation:
            "The Bronze Age was a time of improved tools, farming and growing communities.",

        difficulty: 2,
        correctAnswer: "People used bronze tools, farmed the land and traded with others.",
        estimatedSeconds: 20,

        tags: ["history", "bronze-age", "farming", "trade"]
    }

    ]

};


export default bronzeAge;

export {

    bronzeAge

};
