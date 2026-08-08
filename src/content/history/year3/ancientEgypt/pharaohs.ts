import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const pharaohs: SkillContent = {

    skillId: "pharaohs",

    title: "Ancient Egyptian Pharaohs",

    description:
        "Learn about the role of pharaohs, their power and why they were important in Ancient Egyptian society.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-phar-001",
        skillId: "pharaohs",
        question:
            "What was a pharaoh?",
        stage: "recognise",
        options: [
            "The ruler of Ancient Egypt",
            "A farmer",
            "A type of building",
            "A river"
        ],

        hint:
            "Think about who had the highest authority over the whole country.",

        explanation:
            "A pharaoh was the king or ruler of Ancient Egypt.",

        difficulty: 1,
        correctAnswer: "The ruler of Ancient Egypt",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-002",
        skillId: "pharaohs",
        question:
            "Why were pharaohs important?",
        stage: "recognise",
        options: [
            "They ruled the country and made important decisions",
            "They only grew crops",
            "They built modern machines",
            "They were ordinary workers"
        ],

        hint:
            "Choose the job that involves leading a nation, not doing one everyday task.",

        explanation:
            "Pharaohs controlled many parts of Egyptian life, including laws and building projects.",

        difficulty: 1,
        correctAnswer: "They ruled the country and made important decisions",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-003",
        skillId: "pharaohs",
        question:
            "What title did Ancient Egyptian rulers use?",
        stage: "recognise",
        options: [
            "Pharaoh",
            "President",
            "Prime Minister",
            "Mayor"
        ],

        hint:
            "What special name did Egyptian kings use instead of modern titles?",

        explanation:
            "Ancient Egyptian kings were called pharaohs.",

        difficulty: 1,
        correctAnswer: "Pharaoh",
        estimatedSeconds: 15,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-004",
        skillId: "pharaohs",
        question:
            "Where did many pharaohs live?",
        stage: "recognise",
        options: [
            "In large palaces",
            "In small tents",
            "In caves",
            "On ships"
        ],

        hint:
            "A powerful ruler would live somewhere grand enough to govern a kingdom.",

        explanation:
            "Pharaohs lived in grand palaces because they were powerful rulers.",

        difficulty: 1,
        correctAnswer: "In large palaces",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-005",
        skillId: "pharaohs",
        question:
            "What did pharaohs often organise?",
        stage: "recognise",
        options: [
            "Large building projects",
            "Computer games",
            "Modern transport systems",
            "Space missions"
        ],

        hint:
            "Which option matches the famous pyramids and temples built in Ancient Egypt?",

        explanation:
            "Pharaohs ordered the construction of temples, pyramids and other buildings.",

        difficulty: 1,
        correctAnswer: "Large building projects",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-006",
        skillId: "pharaohs",
        question:
            "How did Egyptians view their pharaoh?",
        stage: "recognise",
        options: [
            "As a powerful and important leader",
            "As an ordinary farmer",
            "As a visitor from another country",
            "As a child with no power"
        ],

        hint:
            "Think about how ordinary people respected and obeyed their ruler.",

        explanation:
            "Pharaohs were seen as very powerful and important figures.",

        difficulty: 1,
        correctAnswer: "As a powerful and important leader",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-007",
        skillId: "pharaohs",
        question:
            "Which famous pharaoh's tomb was discovered in 1922?",
        stage: "recognise",
        options: [
            "Tutankhamun",
            "Julius Caesar",
            "Alexander the Great",
            "William the Conqueror"
        ],

        hint:
            "Remember the young king whose treasure-filled tomb amazed archaeologists.",

        explanation:
            "Tutankhamun's tomb was discovered by Howard Carter in 1922.",

        difficulty: 1,
        correctAnswer: "Tutankhamun",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-008",
        skillId: "pharaohs",
        question:
            "Why is Tutankhamun famous today?",
        stage: "recognise",
        options: [
            "His tomb contained many well-preserved treasures",
            "He invented the pyramid",
            "He discovered America",
            "He built the River Nile"
        ],

        hint:
            "Why do museums have so many objects linked to Tutankhamun?",

        explanation:
            "Tutankhamun's tomb gave historians many clues about Ancient Egypt.",

        difficulty: 1,
        correctAnswer: "His tomb contained many well-preserved treasures",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-009",
        skillId: "pharaohs",
        question:
            "What symbol showed the power of a pharaoh?",
        stage: "recognise",
        options: [
            "A crown",
            "A school uniform",
            "A football",
            "A bicycle"
        ],

        hint:
            "Rulers often wear something on their head to show authority.",

        explanation:
            "Crowns and other symbols showed the pharaoh's authority.",

        difficulty: 1,
        correctAnswer: "A crown",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-010",
        skillId: "pharaohs",
        question:
            "What did pharaohs help create?",
        stage: "recognise",
        options: [
            "Rules and organisation for society",
            "Modern computers",
            "Electric cars",
            "Television shows"
        ],

        hint:
            "A country needs laws and leadership. Which answer fits that role?",

        explanation:
            "Pharaohs controlled government and helped organise Egyptian society.",

        difficulty: 1,
        correctAnswer: "Rules and organisation for society",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-011",
        skillId: "pharaohs",
        question:
            "Why were pyramids connected with pharaohs?",
        stage: "recognise",
        options: [
            "They were built as tombs for some pharaohs",
            "They were houses for farmers",
            "They were schools",
            "They were markets"
        ],

        hint:
            "Pyramids were not homes. Think about what happened after a pharaoh died.",

        explanation:
            "Some pyramids were built as burial places for pharaohs.",

        difficulty: 2,
        correctAnswer: "They were built as tombs for some pharaohs",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-012",
        skillId: "pharaohs",
        question:
            "What is a ruler?",
        stage: "recognise",
        options: [
            "Someone who controls and leads a country",
            "Someone who grows crops",
            "Someone who writes stories",
            "Someone who builds toys"
        ],

        hint:
            "A ruler is someone who leads others and makes decisions for them.",

        explanation:
            "A ruler is a person who has power over a country or group.",

        difficulty: 2,
        correctAnswer: "Someone who controls and leads a country",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-013",
        skillId: "pharaohs",
        question:
            "Why did pharaohs need workers?",
        stage: "recognise",
        options: [
            "To build structures and run parts of society",
            "To replace the River Nile",
            "To create electricity",
            "To travel to space"
        ],

        hint:
            "Huge projects need many people working together under a leader.",

        explanation:
            "Large projects needed many skilled workers.",

        difficulty: 2,
        correctAnswer: "To build structures and run parts of society",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-014",
        skillId: "pharaohs",
        question:
            "Which statement about pharaohs is correct?",
        stage: "recognise",
        options: [
            "They had great power in Ancient Egypt",
            "They had no influence",
            "They were only entertainers",
            "They lived in modern times"
        ],

        hint:
            "Only one answer describes someone with the greatest authority.",

        explanation:
            "Pharaohs were the most powerful people in Ancient Egypt.",

        difficulty: 2,
        correctAnswer: "They had great power in Ancient Egypt",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-015",
        skillId: "pharaohs",
        question:
            "What might historians study to learn about pharaohs?",
        stage: "recognise",
        options: [
            "Tombs, statues and written records",
            "Modern newspapers",
            "Future technology",
            "Computer programmes"
        ],

        hint:
            "Historians learn from evidence left behind, not modern sources.",

        explanation:
            "Historians use evidence left behind from the past.",

        difficulty: 2,
        correctAnswer: "Tombs, statues and written records",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-016",
        skillId: "pharaohs",
        question:
            "Why were temples important in Ancient Egypt?",
        stage: "recognise",
        options: [
            "They were places connected with religion and worship",
            "They were football stadiums",
            "They were shopping centres",
            "They were farms"
        ],

        hint:
            "Think about where Ancient Egyptians went to worship their gods.",

        explanation:
            "Temples were important religious places.",

        difficulty: 2,
        correctAnswer: "They were places connected with religion and worship",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-017",
        skillId: "pharaohs",
        question:
            "A powerful leader is someone who:",
        stage: "recognise",
        options: [
            "Can make important decisions",
            "Has no responsibilities",
            "Never helps others",
            "Avoids all choices"
        ],

        hint:
            "A leader's power comes from making decisions for other people.",

        explanation:
            "Leaders make decisions and guide others.",

        difficulty: 2,
        correctAnswer: "Can make important decisions",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-018",
        skillId: "pharaohs",
        question:
            "Why do we remember famous pharaohs today?",
        stage: "recognise",
        options: [
            "They left evidence about Ancient Egyptian history",
            "They lived recently",
            "They invented modern cars",
            "They built computers"
        ],

        hint:
            "Why are ancient buildings and objects valuable to historians?",

        explanation:
            "Buildings, objects and records help us learn about pharaohs.",

        difficulty: 2,
        correctAnswer: "They left evidence about Ancient Egyptian history",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-019",
        skillId: "pharaohs",
        question:
            "Which word best describes a pharaoh?",
        stage: "recognise",
        options: [
            "Ruler",
            "Visitor",
            "Farmer",
            "Traveller"
        ],

        hint:
            "Choose the word that means king or queen of a country.",

        explanation:
            "A pharaoh was the ruler of Ancient Egypt.",

        difficulty: 1,
        correctAnswer: "Ruler",
        estimatedSeconds: 15,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    },

    {
        id: "hist-phar-020",
        skillId: "pharaohs",
        question:
            "Why are pharaohs important when studying Ancient Egypt?",
        stage: "recognise",
        options: [
            "They help us understand how Ancient Egypt was governed",
            "They explain modern technology",
            "They lived in the future",
            "They had no effect on society"
        ],

        hint:
            "Studying rulers helps us understand how a civilisation was organised.",

        explanation:
            "Pharaohs were central to Ancient Egyptian government and society.",

        difficulty: 2,
        correctAnswer: "They help us understand how Ancient Egypt was governed",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "pharaohs"]
    }

    ]

};


export default pharaohs;

export {

    pharaohs

};
