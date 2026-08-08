import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const egyptianCivilisation: SkillContent = {

    skillId: "egyptianCivilisation",

    title: "Ancient Egyptian Civilisation",

    description:
        "Learn about where Ancient Egypt was, the River Nile and how this civilisation developed.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-egy-001",
        skillId: "egyptianCivilisation",
        question:
            "Where was the Ancient Egyptian civilisation located?",
        stage: "recognise",
        options: [
            "North Africa",
            "South America",
            "Australia",
            "Northern Europe"
        ],

        hint:
            "Think about which part of Africa the pyramids and the Nile are found in.",


        explanation:
            "Ancient Egypt developed in North Africa, mainly around the River Nile.",

        difficulty: 1,
        correctAnswer: "North Africa",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-002",
        skillId: "egyptianCivilisation",
        question:
            "Which river was important to Ancient Egypt?",
        stage: "recognise",
        options: [
            "The River Nile",
            "The River Thames",
            "The River Amazon",
            "The River Rhine"
        ],

        hint:
            "Choose the river that flows through Egypt, not one from another continent.",


        explanation:
            "The River Nile provided water, food and transport for Ancient Egyptians.",

        difficulty: 1,
        correctAnswer: "The River Nile",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-003",
        skillId: "egyptianCivilisation",
        question:
            "Why was the River Nile important?",
        stage: "recognise",
        options: [
            "It helped people grow crops and survive",
            "It was used only for swimming",
            "It stopped people building towns",
            "It made the land dry"
        ],

        hint:
            "Think about what people need every day to grow food and stay alive.",


        explanation:
            "The Nile flooded and left fertile soil for farming.",

        difficulty: 1,
        correctAnswer: "It helped people grow crops and survive",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-004",
        skillId: "egyptianCivilisation",
        question:
            "What does the word 'civilisation' mean?",
        stage: "recognise",
        options: [
            "A society with organised people, buildings and systems",
            "A single person",
            "A type of animal",
            "A piece of jewellery"
        ],

        hint:
            "A civilisation is much bigger than one person or one building. Look for an organised society.",


        explanation:
            "A civilisation is a large organised society with its own culture and systems.",

        difficulty: 1,
        correctAnswer: "A society with organised people, buildings and systems",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-005",
        skillId: "egyptianCivilisation",
        question:
            "Ancient Egypt developed around which natural feature?",
        stage: "recognise",
        options: [
            "A river",
            "A mountain range",
            "A rainforest",
            "An ocean island"
        ],

        hint:
            "Early settlements grew beside a natural feature that supplied fresh water.",


        explanation:
            "The River Nile allowed farming and settlement.",

        difficulty: 1,
        correctAnswer: "A river",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-006",
        skillId: "egyptianCivilisation",
        question:
            "What did Ancient Egyptians use the Nile for?",
        stage: "recognise",
        options: [
            "Farming, transport and water",
            "Building roads only",
            "Making weapons only",
            "Avoiding all travel"
        ],

        hint:
            "Which option includes several everyday uses of a river rather than just one?",


        explanation:
            "The Nile supported many parts of Egyptian life.",

        difficulty: 1,
        correctAnswer: "Farming, transport and water",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-007",
        skillId: "egyptianCivilisation",
        question:
            "Which continent is Egypt in today?",
        stage: "recognise",
        options: [
            "Africa",
            "Asia",
            "Europe",
            "North America"
        ],

        hint:
            "Egypt is mostly in one continent—remember where it appears on a world map.",


        explanation:
            "Egypt is a country in North Africa.",

        difficulty: 1,
        correctAnswer: "Africa",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-008",
        skillId: "egyptianCivilisation",
        question:
            "Why did many people settle near the River Nile?",
        stage: "recognise",
        options: [
            "There was water and fertile land",
            "There were no plants",
            "The land could not be farmed",
            "It was always frozen"
        ],

        hint:
            "People settled where crops could grow, even though much of Egypt is desert.",


        explanation:
            "The Nile made farming possible in the surrounding desert.",

        difficulty: 1,
        correctAnswer: "There was water and fertile land",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-009",
        skillId: "egyptianCivilisation",
        question:
            "What was Ancient Egypt famous for building?",
        stage: "recognise",
        options: [
            "Pyramids",
            "Modern skyscrapers",
            "Motorways",
            "Castles"
        ],

        hint:
            "Think of the huge stone structures built for pharaohs.",


        explanation:
            "The pyramids are some of the most famous Ancient Egyptian structures.",

        difficulty: 1,
        correctAnswer: "Pyramids",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-010",
        skillId: "egyptianCivilisation",
        question:
            "Which statement about Ancient Egypt is true?",
        stage: "recognise",
        options: [
            "It was one of the world's earliest civilisations.",
            "It began only 100 years ago.",
            "It had no farming.",
            "It had no rulers."
        ],

        hint:
            "Cross out answers that describe modern times or impossible societies.",


        explanation:
            "Ancient Egypt was one of the earliest major civilisations.",

        difficulty: 1,
        correctAnswer: "It was one of the world's earliest civilisations.",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-011",
        skillId: "egyptianCivilisation",
        question:
            "Why did the Nile floods help farmers?",
        stage: "recognise",
        options: [
            "They left rich soil for growing crops",
            "They destroyed all plants",
            "They stopped farming",
            "They made the desert larger"
        ],

        hint:
            "Floods can help if they leave something behind for crops to grow in.",


        explanation:
            "Floodwater deposited fertile soil that helped crops grow.",

        difficulty: 2,
        correctAnswer: "They left rich soil for growing crops",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-012",
        skillId: "egyptianCivilisation",
        question:
            "What is a historian likely to study to learn about Ancient Egypt?",
        stage: "recognise",
        options: [
            "Ancient objects and written evidence",
            "Modern films only",
            "Future predictions",
            "Computer games"
        ],

        hint:
            "Historians rely on evidence left by people, not modern entertainment.",


        explanation:
            "Historians use evidence from the past to understand history.",

        difficulty: 2,
        correctAnswer: "Ancient objects and written evidence",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-013",
        skillId: "egyptianCivilisation",
        question:
            "Ancient Egyptian farmers mainly grew crops near:",
        stage: "recognise",
        options: [
            "The River Nile",
            "The middle of the desert",
            "High mountains",
            "Frozen lakes"
        ],

        hint:
            "Farmers need water nearby in a hot, dry country.",


        explanation:
            "The land near the Nile was best for farming.",

        difficulty: 2,
        correctAnswer: "The River Nile",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-014",
        skillId: "egyptianCivilisation",
        question:
            "Why was the desert around Egypt useful for protection?",
        stage: "recognise",
        options: [
            "It made it harder for enemies to attack",
            "It provided unlimited forests",
            "It created oceans",
            "It stopped all trade"
        ],

        hint:
            "A harsh landscape can stop armies travelling easily.",


        explanation:
            "The desert acted as a natural barrier around Egypt.",

        difficulty: 2,
        correctAnswer: "It made it harder for enemies to attack",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-015",
        skillId: "egyptianCivilisation",
        question:
            "What does 'ancient' mean?",
        stage: "recognise",
        options: [
            "Very old",
            "Very new",
            "Very small",
            "Very fast"
        ],

        hint:
            "'Ancient' describes something from a very long time ago.",


        explanation:
            "Ancient describes something from a long time ago.",

        difficulty: 1,
        correctAnswer: "Very old",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-016",
        skillId: "egyptianCivilisation",
        question:
            "Which helped Ancient Egypt become successful?",
        stage: "recognise",
        options: [
            "The River Nile and farming",
            "Modern technology",
            "Cars and roads",
            "Electricity"
        ],

        hint:
            "Choose the answer that combines geography with farming success.",


        explanation:
            "The Nile supported farming, travel and settlements.",

        difficulty: 2,
        correctAnswer: "The River Nile and farming",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-017",
        skillId: "egyptianCivilisation",
        question:
            "Ancient Egyptians used boats on the Nile mainly for:",
        stage: "recognise",
        options: [
            "Transporting people and goods",
            "Flying through the air",
            "Building houses",
            "Growing crops"
        ],

        hint:
            "Before roads, rivers were the easiest way to move heavy loads.",


        explanation:
            "The Nile was an important route for transport and trade.",

        difficulty: 2,
        correctAnswer: "Transporting people and goods",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-018",
        skillId: "egyptianCivilisation",
        question:
            "What can ruins tell historians?",
        stage: "recognise",
        options: [
            "Information about how people lived in the past",
            "What will happen tomorrow",
            "How to use modern technology",
            "Future inventions"
        ],

        hint:
            "Ruins are clues from the past, not predictions of the future.",


        explanation:
            "Ancient remains provide evidence about past societies.",

        difficulty: 2,
        correctAnswer: "Information about how people lived in the past",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-019",
        skillId: "egyptianCivilisation",
        question:
            "Why do historians study Ancient Egypt?",
        stage: "recognise",
        options: [
            "To understand people and life in the past",
            "To change history",
            "To create new inventions",
            "To predict the future"
        ],

        hint:
            "History is about learning from the past rather than changing it.",


        explanation:
            "History helps us understand how people lived and changed over time.",

        difficulty: 2,
        correctAnswer: "To understand people and life in the past",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt"]
    },

    {
        id: "hist-egy-020",
        skillId: "egyptianCivilisation",
        question:
            "Which sentence best describes Ancient Egypt?",
        stage: "recognise",
        options: [
            "An ancient civilisation that grew around the River Nile",
            "A modern city built recently",
            "A civilisation with no farming",
            "A place with no settlements"
        ],

        hint:
            "Look for the sentence that links Egypt with both the Nile and civilisation.",


        explanation:
            "Ancient Egypt developed around the Nile and became a powerful civilisation.",

        difficulty: 2,
        correctAnswer: "An ancient civilisation that grew around the River Nile",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt"]
    }

    ]

};


export default egyptianCivilisation;

export {

    egyptianCivilisation

};
