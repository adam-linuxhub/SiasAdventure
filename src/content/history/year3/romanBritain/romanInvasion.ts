import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const romanInvasion: SkillContent = {

    skillId: "romanInvasion",

    title: "The Roman Invasion of Britain",

    description:
        "Learn why the Romans invaded Britain, who led the invasion and how Roman rule began.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-rom-001",
        skillId: "romanInvasion",
        question:
            "Who invaded Britain in AD 43?",
        stage: "recognise",
        options: [
            "The Romans",
            "The Vikings",
            "The Egyptians",
            "The Normans"
        ],

        explanation:
            "The Roman invasion of Britain began in AD 43 under Emperor Claudius.",

        difficulty: 1,
        correctAnswer: "The Romans",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-002",
        skillId: "romanInvasion",
        question:
            "Who was the Roman emperor when Britain was successfully invaded?",
        stage: "recognise",
        options: [
            "Emperor Claudius",
            "Julius Caesar",
            "Emperor Nero",
            "Alexander the Great"
        ],

        explanation:
            "Emperor Claudius ordered the successful invasion of Britain in AD 43.",

        difficulty: 1,
        correctAnswer: "Emperor Claudius",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-003",
        skillId: "romanInvasion",
        question:
            "In which year did the Roman invasion of Britain begin?",
        stage: "recognise",
        options: [
            "AD 43",
            "1066",
            "55 BC",
            "2020"
        ],

        explanation:
            "The Roman conquest of Britain began in AD 43.",

        difficulty: 1,
        correctAnswer: "AD 43",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-004",
        skillId: "romanInvasion",
        question:
            "Which Roman leader attempted to invade Britain before Claudius?",
        stage: "recognise",
        options: [
            "Julius Caesar",
            "Boudica",
            "King Arthur",
            "William the Conqueror"
        ],

        explanation:
            "Julius Caesar attempted invasions of Britain in 55 BC and 54 BC.",

        difficulty: 1,
        correctAnswer: "Julius Caesar",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-005",
        skillId: "romanInvasion",
        question:
            "Why did the Romans want to invade Britain?",
        stage: "recognise",
        options: [
            "For land, resources and power",
            "To build modern cities",
            "To escape the weather",
            "To learn English"
        ],

        explanation:
            "The Romans wanted to expand their empire and gain resources.",

        difficulty: 1,
        correctAnswer: "For land, resources and power",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-006",
        skillId: "romanInvasion",
        question:
            "What was the Roman Empire?",
        stage: "recognise",
        options: [
            "A large area ruled by Rome",
            "A small village",
            "A type of building",
            "A farming tool"
        ],

        explanation:
            "The Roman Empire controlled many lands across Europe and beyond.",

        difficulty: 1,
        correctAnswer: "A large area ruled by Rome",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-007",
        skillId: "romanInvasion",
        question:
            "Who lived in Britain before the Roman invasion?",
        stage: "recognise",
        options: [
            "The Celts",
            "The Romans",
            "The Vikings",
            "The Normans"
        ],

        explanation:
            "Celtic tribes lived in Britain before the Romans arrived.",

        difficulty: 1,
        correctAnswer: "The Celts",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-008",
        skillId: "romanInvasion",
        question:
            "How did some Britons resist the Romans?",
        stage: "recognise",
        options: [
            "They fought against the Roman army",
            "They joined every Roman army",
            "They left the planet",
            "They built Roman roads"
        ],

        explanation:
            "Some Celtic tribes resisted Roman control.",

        difficulty: 1,
        correctAnswer: "They fought against the Roman army",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-009",
        skillId: "romanInvasion",
        question:
            "What happened after the Romans conquered parts of Britain?",
        stage: "recognise",
        options: [
            "Britain became part of the Roman Empire",
            "Rome disappeared immediately",
            "Britain became Egypt",
            "All people left Britain"
        ],

        explanation:
            "Britain became a province of the Roman Empire.",

        difficulty: 1,
        correctAnswer: "Britain became part of the Roman Empire",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-010",
        skillId: "romanInvasion",
        question:
            "Why was the Roman army successful?",
        stage: "recognise",
        options: [
            "It was well trained and organised",
            "It had no leaders",
            "It avoided battles",
            "It used modern technology"
        ],

        explanation:
            "The Roman army was disciplined and highly organised.",

        difficulty: 1,
        correctAnswer: "It was well trained and organised",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-011",
        skillId: "romanInvasion",
        question:
            "What was the name of the Celtic queen who fought the Romans?",
        stage: "recognise",
        options: [
            "Boudica",
            "Cleopatra",
            "Victoria",
            "Elizabeth"
        ],

        explanation:
            "Boudica led a rebellion against Roman rule in Britain.",

        difficulty: 2,
        correctAnswer: "Boudica",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-012",
        skillId: "romanInvasion",
        question:
            "Why did Boudica rebel against the Romans?",
        stage: "recognise",
        options: [
            "She opposed Roman treatment and control",
            "She wanted to become Roman emperor",
            "She wanted to build roads",
            "She wanted to leave Britain"
        ],

        explanation:
            "Boudica led a rebellion against Roman rule.",

        difficulty: 2,
        correctAnswer: "She opposed Roman treatment and control",
        estimatedSeconds: 25,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-013",
        skillId: "romanInvasion",
        question:
            "What does invasion mean?",
        stage: "recognise",
        options: [
            "Entering a country with an army to take control",
            "Trading goods peacefully",
            "Building a house",
            "Growing crops"
        ],

        explanation:
            "An invasion happens when an army enters another land to conquer it.",

        difficulty: 2,
        correctAnswer: "Entering a country with an army to take control",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-014",
        skillId: "romanInvasion",
        question:
            "Why did Romans build forts in Britain?",
        stage: "recognise",
        options: [
            "To control and defend areas",
            "To grow crops",
            "To create schools only",
            "To avoid travelling"
        ],

        explanation:
            "Forts helped the Romans control conquered areas.",

        difficulty: 2,
        correctAnswer: "To control and defend areas",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-015",
        skillId: "romanInvasion",
        question:
            "Which statement about the Roman invasion is true?",
        stage: "recognise",
        options: [
            "The Romans took control of much of Britain",
            "The Romans never reached Britain",
            "The Romans arrived after the Vikings",
            "The Romans built modern cities"
        ],

        explanation:
            "The Roman invasion brought Britain into the Roman Empire.",

        difficulty: 2,
        correctAnswer: "The Romans took control of much of Britain",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-016",
        skillId: "romanInvasion",
        question:
            "Why do historians study the Roman invasion?",
        stage: "recognise",
        options: [
            "To understand how Britain changed in the past",
            "To predict the future",
            "To build Roman armies",
            "To change history"
        ],

        explanation:
            "Studying invasions helps us understand changes in societies.",

        difficulty: 2,
        correctAnswer: "To understand how Britain changed in the past",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-017",
        skillId: "romanInvasion",
        question:
            "What did Romans bring to Britain?",
        stage: "recognise",
        options: [
            "New buildings, roads and ways of life",
            "Cars and computers",
            "Modern electricity",
            "Air travel"
        ],

        explanation:
            "Roman rule changed Britain through new technology and culture.",

        difficulty: 2,
        correctAnswer: "New buildings, roads and ways of life",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-018",
        skillId: "romanInvasion",
        question:
            "What is an empire?",
        stage: "recognise",
        options: [
            "A group of lands controlled by one ruler",
            "A single building",
            "A type of weapon",
            "A farming method"
        ],

        explanation:
            "An empire is made up of territories ruled by a powerful leader or state.",

        difficulty: 2,
        correctAnswer: "A group of lands controlled by one ruler",
        estimatedSeconds: 20,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-019",
        skillId: "romanInvasion",
        question:
            "Which person was a Roman emperor?",
        stage: "recognise",
        options: [
            "Claudius",
            "Boudica",
            "William",
            "Alfred"
        ],

        explanation:
            "Claudius was the Roman emperor who ordered the invasion of Britain.",

        difficulty: 1,
        correctAnswer: "Claudius",
        estimatedSeconds: 15,

        tags: ["history", "year3", "roman-britain"]
    },

    {
        id: "hist-rom-020",
        skillId: "romanInvasion",
        question:
            "Which sentence best describes the Roman invasion of Britain?",
        stage: "recognise",
        options: [
            "Rome conquered Britain and made it part of its empire",
            "Britain conquered Rome",
            "The Vikings invaded Britain first",
            "The Romans had no effect on Britain"
        ],

        explanation:
            "The Roman conquest changed Britain for hundreds of years.",

        difficulty: 2,
        correctAnswer: "Rome conquered Britain and made it part of its empire",
        estimatedSeconds: 25,

        tags: ["history", "year3", "roman-britain"]
    }

    ]

};


export default romanInvasion;

export {

    romanInvasion

};
