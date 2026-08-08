import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const angloSaxonLife: SkillContent = {

    skillId: "angloSaxonLife",

    title: "Daily Life of the Anglo-Saxons",

    description:
        "Learn about Anglo-Saxon villages, homes, farming, jobs, food and everyday life.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-asl-001",
        skillId: "angloSaxonLife",
        question:
            "Where did many Anglo-Saxons live?",
        stage: "recognise",
        options: [
            "In small villages",
            "In large modern cities",
            "In Roman pyramids",
            "On ships only"
        ],

        explanation:
            "Many Anglo-Saxons lived in small farming villages.",

        difficulty: 1,
        correctAnswer: "In small villages",
        estimatedSeconds: 20,

        hint: "Picture a typical community before large towns became common.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-002",
        skillId: "angloSaxonLife",
        question:
            "What were Anglo-Saxon houses often made from?",
        stage: "recognise",
        options: [
            "Wood, straw and mud",
            "Steel and glass",
            "Concrete",
            "Plastic"
        ],

        explanation:
            "Anglo-Saxon houses were often made from natural materials such as wood and thatch.",

        difficulty: 1,
        correctAnswer: "Wood, straw and mud",
        estimatedSeconds: 20,

        hint: "Think about materials people could gather nearby without factories.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-003",
        skillId: "angloSaxonLife",
        question:
            "What was the main job of many Anglo-Saxons?",
        stage: "recognise",
        options: [
            "Farming",
            "Building computers",
            "Flying planes",
            "Working in factories"
        ],

        explanation:
            "Farming was very important in Anglo-Saxon society.",

        difficulty: 1,
        correctAnswer: "Farming",
        estimatedSeconds: 20,

        hint: "Consider which job everyone depended on for food.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-004",
        skillId: "angloSaxonLife",
        question:
            "What did Anglo-Saxon farmers grow?",
        stage: "recognise",
        options: [
            "Crops such as wheat and barley",
            "Plastic plants",
            "Coffee beans only",
            "Tropical fruit only"
        ],

        explanation:
            "Farmers grew crops to provide food for their communities.",

        difficulty: 1,
        correctAnswer: "Crops such as wheat and barley",
        estimatedSeconds: 20,

        hint: "Think about crops that grow well in Britain's climate.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-005",
        skillId: "angloSaxonLife",
        question:
            "What animals did Anglo-Saxons keep?",
        stage: "recognise",
        options: [
            "Animals such as cows, sheep and pigs",
            "Dinosaurs",
            "Only wild animals",
            "Sea creatures"
        ],

        explanation:
            "Animals provided food, materials and help with farming.",

        difficulty: 1,
        correctAnswer: "Animals such as cows, sheep and pigs",
        estimatedSeconds: 20,

        hint: "Which animals provide more than one useful resource?",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-006",
        skillId: "angloSaxonLife",
        question:
            "What was the centre of many Anglo-Saxon villages?",
        stage: "recognise",
        options: [
            "The main hall",
            "A shopping centre",
            "A castle",
            "A railway station"
        ],

        explanation:
            "The hall was an important meeting and living place.",

        difficulty: 1,
        correctAnswer: "The main hall",
        estimatedSeconds: 20,

        hint: "Imagine where villagers gathered for important meetings.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-007",
        skillId: "angloSaxonLife",
        question:
            "What did Anglo-Saxons eat?",
        stage: "recognise",
        options: [
            "Bread, meat, fish and vegetables",
            "Pizza and chocolate",
            "Only fruit",
            "Only rice"
        ],

        explanation:
            "Their diet included food they could farm, hunt or gather.",

        difficulty: 1,
        correctAnswer: "Bread, meat, fish and vegetables",
        estimatedSeconds: 20,

        hint: "Think about foods people could grow, catch or raise themselves.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-008",
        skillId: "angloSaxonLife",
        question:
            "What material was commonly used for Anglo-Saxon clothing?",
        stage: "recognise",
        options: [
            "Wool and linen",
            "Plastic",
            "Nylon",
            "Metal"
        ],

        explanation:
            "Anglo-Saxons used materials available from sheep and plants.",

        difficulty: 1,
        correctAnswer: "Wool and linen",
        estimatedSeconds: 20,

        hint: "Consider fabrics available before synthetic materials existed.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-009",
        skillId: "angloSaxonLife",
        question:
            "What was a blacksmith's job?",
        stage: "recognise",
        options: [
            "Making objects from metal",
            "Growing crops",
            "Writing books",
            "Building ships only"
        ],

        explanation:
            "Blacksmiths made tools, weapons and other metal objects.",

        difficulty: 1,
        correctAnswer: "Making objects from metal",
        estimatedSeconds: 20,

        hint: "What skilled job needs fire and metal?",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-010",
        skillId: "angloSaxonLife",
        question:
            "Why were craftsmen important?",
        stage: "recognise",
        options: [
            "They made useful items for people",
            "They ruled every kingdom",
            "They built computers",
            "They stopped farming"
        ],

        explanation:
            "Craftsmen created tools, clothing and objects needed by communities.",

        difficulty: 1,
        correctAnswer: "They made useful items for people",
        estimatedSeconds: 20,

        hint: "Think about who supplied everyday tools for the village.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-011",
        skillId: "angloSaxonLife",
        question:
            "What was an Anglo-Saxon village usually surrounded by?",
        stage: "recognise",
        options: [
            "Fields and farmland",
            "Skyscrapers",
            "Motorways",
            "Factories"
        ],

        explanation:
            "Most Anglo-Saxon communities depended on farming.",

        difficulty: 2,
        correctAnswer: "Fields and farmland",
        estimatedSeconds: 20,

        hint: "What would farmers need surrounding their homes?",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-012",
        skillId: "angloSaxonLife",
        question:
            "Why was farming important to Anglo-Saxons?",
        stage: "recognise",
        options: [
            "It provided food and materials",
            "It created electricity",
            "It built roads",
            "It replaced villages"
        ],

        explanation:
            "Farming supported everyday life.",

        difficulty: 2,
        correctAnswer: "It provided food and materials",
        estimatedSeconds: 20,

        hint: "Consider everything farms provide besides meals.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-013",
        skillId: "angloSaxonLife",
        question:
            "What tools would Anglo-Saxon farmers use?",
        stage: "recognise",
        options: [
            "Simple farming tools",
            "Computers",
            "Cars",
            "Robots"
        ],

        explanation:
            "Anglo-Saxons used tools made from wood and metal.",

        difficulty: 2,
        correctAnswer: "Simple farming tools",
        estimatedSeconds: 20,

        hint: "Imagine working the land without engines or electricity.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-014",
        skillId: "angloSaxonLife",
        question:
            "Why did Anglo-Saxons build villages close together?",
        stage: "recognise",
        options: [
            "To live and work as a community",
            "To avoid all contact",
            "To build airports",
            "To copy modern cities"
        ],

        explanation:
            "Villages helped people cooperate and share resources.",

        difficulty: 2,
        correctAnswer: "To live and work as a community",
        estimatedSeconds: 20,

        hint: "Why is living close to neighbours useful?",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-015",
        skillId: "angloSaxonLife",
        question:
            "What does an archaeologist study?",
        stage: "recognise",
        options: [
            "Evidence from the past",
            "Future inventions",
            "Modern technology",
            "Weather forecasts"
        ],

        explanation:
            "Archaeologists study objects and remains left behind.",

        difficulty: 2,
        correctAnswer: "Evidence from the past",
        estimatedSeconds: 20,

        hint: "Who studies physical clues instead of written stories?",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-016",
        skillId: "angloSaxonLife",
        question:
            "What can Anglo-Saxon artefacts tell historians?",
        stage: "recognise",
        options: [
            "How people lived and worked",
            "What will happen next year",
            "How computers were built",
            "How modern cities developed"
        ],

        explanation:
            "Artefacts provide clues about life in the past.",

        difficulty: 2,
        correctAnswer: "How people lived and worked",
        estimatedSeconds: 20,

        hint: "Objects reveal daily routines without using words.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-017",
        skillId: "angloSaxonLife",
        question:
            "Which person would make tools and weapons?",
        stage: "recognise",
        options: [
            "A blacksmith",
            "A farmer",
            "A king only",
            "A fisherman"
        ],

        explanation:
            "Blacksmiths worked with metal to create useful objects.",

        difficulty: 2,
        correctAnswer: "A blacksmith",
        estimatedSeconds: 20,

        hint: "Who shapes heated metal into useful items?",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-018",
        skillId: "angloSaxonLife",
        question:
            "Why do historians study everyday Anglo-Saxon life?",
        stage: "recognise",
        options: [
            "To understand how ordinary people lived",
            "To change the past",
            "To create new inventions",
            "To predict the future"
        ],

        explanation:
            "Daily life helps us understand past societies.",

        difficulty: 2,
        correctAnswer: "To understand how ordinary people lived",
        estimatedSeconds: 20,

        hint: "Ordinary lives often explain more than famous battles.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-019",
        skillId: "angloSaxonLife",
        question:
            "Which statement about Anglo-Saxon villages is true?",
        stage: "recognise",
        options: [
            "They were communities with homes, farms and workers",
            "They had no people",
            "They were modern cities",
            "They were built underwater"
        ],

        explanation:
            "Anglo-Saxon villages were organised communities.",

        difficulty: 2,
        correctAnswer: "They were communities with homes, farms and workers",
        estimatedSeconds: 20,

        hint: "Think about what every successful village needed.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    },

    {
        id: "hist-asl-020",
        skillId: "angloSaxonLife",
        question:
            "Which sentence best describes Anglo-Saxon life?",
        stage: "recognise",
        options: [
            "People lived in villages, farmed and made goods",
            "People used modern technology",
            "People lived in skyscrapers",
            "People did not work"
        ],

        explanation:
            "Anglo-Saxon life was based around farming, crafts and communities.",

        difficulty: 2,
        correctAnswer: "People lived in villages, farmed and made goods",
        estimatedSeconds: 25,

        hint: "Combine homes, work and community into one picture.",

        tags: ["history", "year3", "anglo-saxons", "daily-life"]
    }

    ]

};


export default angloSaxonLife;

export {

    angloSaxonLife

};