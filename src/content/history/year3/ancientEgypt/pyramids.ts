import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const pyramids: SkillContent = {

    skillId: "pyramids",

    title: "Ancient Egyptian Pyramids",

    description:
        "Learn why pyramids were built, how they were made and why they are important historical evidence.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-pyr-001",
        skillId: "pyramids",
        question:
            "Why were many pyramids built in Ancient Egypt?",
        stage: "recognise",
        options: [
            "As tombs for pharaohs",
            "As houses for farmers",
            "As schools",
            "As marketplaces"
        ],

        hint:
            "Think about why a powerful ruler would need a special resting place after death.",

        explanation:
            "Many pyramids were built as burial places for pharaohs.",

        difficulty: 1,
        correctAnswer: "As tombs for pharaohs",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-002",
        skillId: "pyramids",
        question:
            "What is a tomb?",
        stage: "recognise",
        options: [
            "A place where someone is buried",
            "A place where crops grow",
            "A type of boat",
            "A type of clothing"
        ],

        hint:
            "A tomb is connected with what happens after someone dies, not where they live.",

        explanation:
            "A tomb is a place where a person's body is placed after death.",

        difficulty: 1,
        correctAnswer: "A place where someone is buried",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-003",
        skillId: "pyramids",
        question:
            "What shape are Egyptian pyramids famous for?",
        stage: "recognise",
        options: [
            "A triangular shape with a wide base",
            "A circular shape",
            "A flat shape",
            "A spiral shape"
        ],

        hint:
            "Picture the famous pyramids with wide bottoms and sides that meet at one point.",

        explanation:
            "Egyptian pyramids have a square base and sloping triangular sides.",

        difficulty: 1,
        correctAnswer: "A triangular shape with a wide base",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-004",
        skillId: "pyramids",
        question:
            "What were pyramids mostly made from?",
        stage: "recognise",
        options: [
            "Large stone blocks",
            "Wood",
            "Glass",
            "Plastic"
        ],

        hint:
            "Choose the material strong enough to support a huge structure for thousands of years.",

        explanation:
            "Ancient Egyptians used huge blocks of stone to build pyramids.",

        difficulty: 1,
        correctAnswer: "Large stone blocks",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-005",
        skillId: "pyramids",
        question:
            "Why are pyramids important to historians?",
        stage: "recognise",
        options: [
            "They provide evidence about Ancient Egyptian life",
            "They are modern buildings",
            "They show how cars were made",
            "They were built recently"
        ],

        hint:
            "Historians learn from clues left behind by people in the past.",

        explanation:
            "Pyramids give historians clues about Ancient Egyptian beliefs, skills and society.",

        difficulty: 1,
        correctAnswer: "They provide evidence about Ancient Egyptian life",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-006",
        skillId: "pyramids",
        question:
            "Which famous pyramid is located at Giza?",
        stage: "recognise",
        options: [
            "The Great Pyramid",
            "The London Pyramid",
            "The Roman Pyramid",
            "The Nile Tower"
        ],

        hint:
            "Think of the most famous pyramid tourists visit near Cairo.",

        explanation:
            "The Great Pyramid of Giza is one of the most famous Ancient Egyptian structures.",

        difficulty: 1,
        correctAnswer: "The Great Pyramid",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-007",
        skillId: "pyramids",
        question:
            "Who were pyramids often built for?",
        stage: "recognise",
        options: [
            "Pharaohs",
            "School children",
            "Merchants",
            "Soldiers only"
        ],

        hint:
            "Who was important enough to have a huge royal tomb built?",

        explanation:
            "Pyramids were often built as royal tombs for pharaohs.",

        difficulty: 1,
        correctAnswer: "Pharaohs",
        estimatedSeconds: 15,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-008",
        skillId: "pyramids",
        question:
            "What do pyramids tell us about Ancient Egyptians?",
        stage: "recognise",
        options: [
            "They had advanced building skills",
            "They could not build structures",
            "They did not use tools",
            "They avoided working together"
        ],

        hint:
            "What does building something so enormous tell us about the builders?",

        explanation:
            "Building pyramids required planning, organisation and skill.",

        difficulty: 1,
        correctAnswer: "They had advanced building skills",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-009",
        skillId: "pyramids",
        question:
            "Why did Egyptians build tombs for pharaohs?",
        stage: "recognise",
        options: [
            "They believed in an afterlife",
            "They wanted homes for workers",
            "They needed farms",
            "They wanted schools"
        ],

        hint:
            "This question is about Egyptian beliefs, not practical needs.",

        explanation:
            "Ancient Egyptians had strong beliefs about life after death.",

        difficulty: 1,
        correctAnswer: "They believed in an afterlife",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-010",
        skillId: "pyramids",
        question:
            "Building pyramids required:",
        stage: "recognise",
        options: [
            "Many workers and careful planning",
            "Only one person",
            "Modern machines",
            "No preparation"
        ],

        hint:
            "Could one person build a pyramid alone?",

        explanation:
            "Pyramids were huge projects requiring organisation.",

        difficulty: 1,
        correctAnswer: "Many workers and careful planning",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-011",
        skillId: "pyramids",
        question:
            "How did Ancient Egyptians move large stone blocks?",
        stage: "recognise",
        options: [
            "Using tools, ramps and teamwork",
            "Using cars",
            "Using aeroplanes",
            "Using computers"
        ],

        hint:
            "Remove any answers that use modern inventions.",

        explanation:
            "Historians believe Egyptians used methods such as ramps and organised labour.",

        difficulty: 2,
        correctAnswer: "Using tools, ramps and teamwork",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-012",
        skillId: "pyramids",
        question:
            "What does a pyramid show about Ancient Egyptian society?",
        stage: "recognise",
        options: [
            "People could organise large projects",
            "People worked alone",
            "People had no leaders",
            "People avoided building"
        ],

        hint:
            "What does completing a huge building project require from a society?",

        explanation:
            "Large pyramids required cooperation and planning.",

        difficulty: 2,
        correctAnswer: "People could organise large projects",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-013",
        skillId: "pyramids",
        question:
            "What might be found inside an Ancient Egyptian tomb?",
        stage: "recognise",
        options: [
            "Burial objects and treasures",
            "Modern technology",
            "Cars",
            "Books from today"
        ],

        hint:
            "What valuable items were buried with important people?",

        explanation:
            "Tombs often contained objects buried with the dead.",

        difficulty: 2,
        correctAnswer: "Burial objects and treasures",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-014",
        skillId: "pyramids",
        question:
            "Why were pyramids built to last a long time?",
        stage: "recognise",
        options: [
            "They were made from strong stone",
            "They were made from paper",
            "They were moved every year",
            "They were underwater"
        ],

        hint:
            "Which material survives thousands of years in the desert?",

        explanation:
            "Stone structures can survive for thousands of years.",

        difficulty: 2,
        correctAnswer: "They were made from strong stone",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-015",
        skillId: "pyramids",
        question:
            "What can archaeologists learn from pyramids?",
        stage: "recognise",
        options: [
            "How Ancient Egyptians lived and worked",
            "How modern cities are built",
            "Future inventions",
            "Space travel"
        ],

        hint:
            "Archaeologists study physical remains to understand past lives.",

        explanation:
            "Archaeologists study remains to understand the past.",

        difficulty: 2,
        correctAnswer: "How Ancient Egyptians lived and worked",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-016",
        skillId: "pyramids",
        question:
            "Which statement is true about the Great Pyramid of Giza?",
        stage: "recognise",
        options: [
            "It is one of the most famous ancient structures in the world",
            "It was built recently",
            "It is made from wood",
            "It was a modern palace"
        ],

        hint:
            "Which statement describes an ancient wonder rather than something modern?",

        explanation:
            "The Great Pyramid is an important Ancient Egyptian monument.",

        difficulty: 2,
        correctAnswer: "It is one of the most famous ancient structures in the world",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-017",
        skillId: "pyramids",
        question:
            "Why do historians use evidence from pyramids?",
        stage: "recognise",
        options: [
            "To learn about the past",
            "To change history",
            "To build modern houses",
            "To predict the future"
        ],

        hint:
            "Evidence helps us discover what already happened.",

        explanation:
            "Historical evidence helps us understand past societies.",

        difficulty: 2,
        correctAnswer: "To learn about the past",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-018",
        skillId: "pyramids",
        question:
            "A pyramid is an example of:",
        stage: "recognise",
        options: [
            "Ancient Egyptian architecture",
            "Modern technology",
            "A natural feature",
            "A type of animal"
        ],

        hint:
            "Architecture means buildings designed and built by people.",

        explanation:
            "Pyramids are examples of buildings created by Ancient Egyptians.",

        difficulty: 2,
        correctAnswer: "Ancient Egyptian architecture",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-019",
        skillId: "pyramids",
        question:
            "Why are pyramids still studied today?",
        stage: "recognise",
        options: [
            "They reveal information about Ancient Egypt",
            "They are new buildings",
            "They are used as houses",
            "They were built last year"
        ],

        hint:
            "Why do people still visit and study pyramids today?",

        explanation:
            "Pyramids provide valuable evidence about the past.",

        difficulty: 2,
        correctAnswer: "They reveal information about Ancient Egypt",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    },

    {
        id: "hist-pyr-020",
        skillId: "pyramids",
        question:
            "Which sentence best describes pyramids?",
        stage: "recognise",
        options: [
            "Large stone tombs built by Ancient Egyptians",
            "Modern houses made of metal",
            "Buildings from the future",
            "Small wooden shelters"
        ],

        hint:
            "Pick the description that includes both what pyramids were made of and their purpose.",

        explanation:
            "Pyramids were large stone structures, often built as royal tombs.",

        difficulty: 2,
        correctAnswer: "Large stone tombs built by Ancient Egyptians",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pyramids"]
    }

    ]

};


export default pyramids;

export {

    pyramids

};
