import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const dailyLife: SkillContent = {

    skillId: "dailyLife",

    title: "Daily Life in Ancient Egypt",

    description:
        "Learn about homes, food, clothing, jobs and everyday life in Ancient Egypt.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-life-001",
        skillId: "dailyLife",
        question:
            "Where did many Ancient Egyptians live?",
        stage: "recognise",
        options: [
            "Near the River Nile",
            "On top of mountains",
            "In frozen lands",
            "Under the sea"
        ],

        hint:
            "Think about which place gave people fresh water and rich soil for farming.",


        explanation:
            "Many Egyptians lived near the Nile because it provided water and fertile land.",

        difficulty: 1,
        correctAnswer: "Near the River Nile",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-002",
        skillId: "dailyLife",
        question:
            "What was the main job of many Ancient Egyptians?",
        stage: "recognise",
        options: [
            "Farming",
            "Building computers",
            "Driving cars",
            "Flying planes"
        ],

        hint:
            "Which job helped feed almost everyone in Ancient Egypt?",


        explanation:
            "Farming was one of the most important jobs because people needed food.",

        difficulty: 1,
        correctAnswer: "Farming",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-003",
        skillId: "dailyLife",
        question:
            "What did Ancient Egyptian farmers grow?",
        stage: "recognise",
        options: [
            "Crops such as wheat and barley",
            "Plastic plants",
            "Modern vegetables only",
            "Metal trees"
        ],

        hint:
            "Choose real crops that grow from fields, not modern or impossible things.",


        explanation:
            "Farmers grew crops including wheat and barley near the Nile.",

        difficulty: 1,
        correctAnswer: "Crops such as wheat and barley",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-004",
        skillId: "dailyLife",
        question:
            "What were Ancient Egyptian homes often made from?",
        stage: "recognise",
        options: [
            "Mud bricks",
            "Steel",
            "Glass",
            "Concrete"
        ],

        hint:
            "Think about what builders could make from the muddy banks of the Nile.",


        explanation:
            "Mud bricks were commonly used because they were available and suitable for the climate.",

        difficulty: 1,
        correctAnswer: "Mud bricks",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-005",
        skillId: "dailyLife",
        question:
            "What did Ancient Egyptians wear?",
        stage: "recognise",
        options: [
            "Clothing made from linen",
            "Modern jeans",
            "Wool coats only",
            "Plastic suits"
        ],

        hint:
            "Hot weather needs light clothing made from plant fibres.",


        explanation:
            "Linen made from flax was commonly used for clothing.",

        difficulty: 1,
        correctAnswer: "Clothing made from linen",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-006",
        skillId: "dailyLife",
        question:
            "Why was farming important in Ancient Egypt?",
        stage: "recognise",
        options: [
            "It provided food for people",
            "It created electricity",
            "It built pyramids alone",
            "It replaced the Nile"
        ],

        hint:
            "Without farming, where would people's food come from?",


        explanation:
            "Farming provided food for Egyptian society.",

        difficulty: 1,
        correctAnswer: "It provided food for people",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-007",
        skillId: "dailyLife",
        question:
            "Which job would an Ancient Egyptian craftsman do?",
        stage: "recognise",
        options: [
            "Make objects such as pottery or jewellery",
            "Build computers",
            "Drive trains",
            "Design websites"
        ],

        hint:
            "A craftsman makes things by hand rather than using modern machines.",


        explanation:
            "Craftsmen made useful and decorative objects.",

        difficulty: 1,
        correctAnswer: "Make objects such as pottery or jewellery",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-008",
        skillId: "dailyLife",
        question:
            "What did scribes do in Ancient Egypt?",
        stage: "recognise",
        options: [
            "Write and record information",
            "Farm fields",
            "Build ships only",
            "Train animals"
        ],

        hint:
            "Scribes were among the few people who could read and write.",


        explanation:
            "Scribes were skilled writers who kept records.",

        difficulty: 1,
        correctAnswer: "Write and record information",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-009",
        skillId: "dailyLife",
        question:
            "Why were scribes important?",
        stage: "recognise",
        options: [
            "They recorded important information",
            "They controlled the weather",
            "They built the Nile",
            "They invented cars"
        ],

        hint:
            "Why would a kingdom need people to keep written records?",


        explanation:
            "Written records help historians understand Ancient Egypt.",

        difficulty: 1,
        correctAnswer: "They recorded important information",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-010",
        skillId: "dailyLife",
        question:
            "What was a common food in Ancient Egypt?",
        stage: "recognise",
        options: [
            "Bread",
            "Chocolate bars",
            "Pizza",
            "Potato crisps"
        ],

        hint:
            "Think of a simple food made from grain that people ate every day.",


        explanation:
            "Bread made from grains was an important part of the Egyptian diet.",

        difficulty: 1,
        correctAnswer: "Bread",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-011",
        skillId: "dailyLife",
        question:
            "Why did people live near the Nile?",
        stage: "recognise",
        options: [
            "It provided water and helped crops grow",
            "It had no water",
            "It was always frozen",
            "It was far from farms"
        ],

        hint:
            "The Nile gave more than water—what did it help people grow?",


        explanation:
            "The Nile supported everyday life through farming and water supply.",

        difficulty: 2,
        correctAnswer: "It provided water and helped crops grow",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-012",
        skillId: "dailyLife",
        question:
            "Which group had the highest status in Ancient Egyptian society?",
        stage: "recognise",
        options: [
            "The pharaoh and royal family",
            "Only farmers",
            "Only children",
            "Visitors from other countries"
        ],

        hint:
            "Who was considered the ruler of all Egypt?",


        explanation:
            "The pharaoh was at the top of the social structure.",

        difficulty: 2,
        correctAnswer: "The pharaoh and royal family",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-013",
        skillId: "dailyLife",
        question:
            "What did fishermen do in Ancient Egypt?",
        stage: "recognise",
        options: [
            "Caught fish from the Nile",
            "Built pyramids",
            "Wrote books",
            "Made clothing"
        ],

        hint:
            "What useful food could people catch from the Nile?",


        explanation:
            "The Nile provided fish as an important food source.",

        difficulty: 1,
        correctAnswer: "Caught fish from the Nile",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-014",
        skillId: "dailyLife",
        question:
            "Why were animals important in Ancient Egypt?",
        stage: "recognise",
        options: [
            "They provided food, materials and help with work",
            "They replaced people",
            "They built all pyramids",
            "They controlled Egypt"
        ],

        hint:
            "Animals could help families in several different ways each day.",


        explanation:
            "Animals were used for food, transport and farming.",

        difficulty: 2,
        correctAnswer: "They provided food, materials and help with work",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-015",
        skillId: "dailyLife",
        question:
            "What material was used for making papyrus?",
        stage: "recognise",
        options: [
            "A plant that grew near water",
            "Metal",
            "Stone",
            "Glass"
        ],

        hint:
            "Papyrus wasn't wood or stone—think of a plant growing by the river.",


        explanation:
            "Papyrus was made from a plant and used for writing.",

        difficulty: 2,
        correctAnswer: "A plant that grew near water",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-016",
        skillId: "dailyLife",
        question:
            "Why do historians study everyday life?",
        stage: "recognise",
        options: [
            "To understand how people lived in the past",
            "To change the past",
            "To predict the future",
            "To build new pyramids"
        ],

        hint:
            "Historians want to discover how ordinary people lived.",


        explanation:
            "Daily life evidence helps us understand ordinary people.",

        difficulty: 2,
        correctAnswer: "To understand how people lived in the past",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-017",
        skillId: "dailyLife",
        question:
            "Which person would be responsible for writing records?",
        stage: "recognise",
        options: [
            "A scribe",
            "A farmer",
            "A fisherman",
            "A builder"
        ],

        hint:
            "If someone wrote official documents, what job would they have?",


        explanation:
            "Scribes were trained writers and record keepers.",

        difficulty: 2,
        correctAnswer: "A scribe",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-018",
        skillId: "dailyLife",
        question:
            "What can objects from Ancient Egypt tell historians?",
        stage: "recognise",
        options: [
            "How people lived and worked",
            "What will happen tomorrow",
            "How modern machines work",
            "Future inventions"
        ],

        hint:
            "Objects from the past give clues about everyday life.",


        explanation:
            "Objects provide evidence about past societies.",

        difficulty: 2,
        correctAnswer: "How people lived and worked",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-019",
        skillId: "dailyLife",
        question:
            "Which statement about Ancient Egyptian society is true?",
        stage: "recognise",
        options: [
            "People had different jobs and roles",
            "Everyone did exactly the same job",
            "Nobody worked",
            "There were no farmers"
        ],

        hint:
            "A successful society needs many different kinds of workers.",


        explanation:
            "Ancient Egyptian society included farmers, craftsmen, scribes and rulers.",

        difficulty: 2,
        correctAnswer: "People had different jobs and roles",
        estimatedSeconds: 20,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    },

    {
        id: "hist-life-020",
        skillId: "dailyLife",
        question:
            "Which sentence best describes daily life in Ancient Egypt?",
        stage: "recognise",
        options: [
            "People farmed, worked, built and lived near the Nile",
            "People used modern technology",
            "People lived without water",
            "People had no jobs"
        ],

        hint:
            "Pick the sentence that includes several true facts about Egyptian life.",


        explanation:
            "The Nile shaped many parts of everyday Egyptian life.",

        difficulty: 2,
        correctAnswer: "People farmed, worked, built and lived near the Nile",
        estimatedSeconds: 25,

        tags: ["history", "year3", "ancient-egypt", "daily-life"]
    }

    ]

};


export default dailyLife;

export {

    dailyLife

};
