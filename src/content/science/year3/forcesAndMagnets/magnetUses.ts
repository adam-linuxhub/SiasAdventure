import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const magnetUses: SkillContent = {

    skillId: "magnetUses",

    title: "Uses of Magnets",

    description:
        "Learn about the many ways magnets are used in everyday life and how they help us solve practical problems.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-magnet-uses-001",
        skillId: "magnetUses",
        question: "Which object commonly uses a magnet?",
        stage: "recognise",
        options: [
            "A fridge door",
            "A pillow",
            "A paper bag",
            "A towel"
        ],

        hint:
            "Think of something in the kitchen that uses a magnetic seal to stay shut.",

        explanation:
            "Magnets help keep many fridge doors closed.",

        difficulty: 1,
        correctAnswer: "A fridge door",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "everyday-life"]
    },

    {
        id: "sci-magnet-uses-002",
        skillId: "magnetUses",
        question: "Why do people put magnets on a fridge?",
        stage: "recognise",
        options: [
            "To hold notes or pictures",
            "To make food colder",
            "To make the fridge lighter",
            "To clean the shelves"
        ],

        hint:
            "Think about what you often see attached to a fridge door at home.",

        explanation:
            "Fridge magnets are useful for holding notes and photographs.",

        difficulty: 1,
        correctAnswer: "To hold notes or pictures",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "everyday-life"]
    },

    {
        id: "sci-magnet-uses-003",
        skillId: "magnetUses",
        question: "Which tool can use a magnet to pick up metal objects?",
        stage: "recognise",
        options: [
            "A magnetic pickup tool",
            "A paintbrush",
            "A sponge",
            "A watering can"
        ],

        hint:
            "Choose the tool designed specifically to attract metal rather than clean or paint.",

        explanation:
            "Magnetic pickup tools collect small metal objects without touching them.",

        difficulty: 1,
        correctAnswer: "A magnetic pickup tool",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "tools"]
    },

    {
        id: "sci-magnet-uses-004",
        skillId: "magnetUses",
        question: "Which object is most likely to use magnets to stay closed?",
        stage: "recognise",
        options: [
            "A cupboard door",
            "A balloon",
            "A paper plate",
            "A wooden spoon"
        ],

        hint:
            "Look for something with a door that needs to stay shut without a lock.",

        explanation:
            "Many cupboard doors use magnetic catches to keep them shut.",

        difficulty: 1,
        correctAnswer: "A cupboard door",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "everyday-life"]
    },

    {
        id: "sci-magnet-uses-005",
        skillId: "magnetUses",
        question: "Why might a scrapyard use a large magnet?",
        stage: "recognise",
        options: [
            "To lift metal",
            "To wash cars",
            "To paint machines",
            "To make electricity"
        ],

        hint:
            "Think about which materials a magnet can grab in a pile of scrap.",

        explanation:
            "Large electromagnets can lift heavy metal objects in scrapyards.",

        difficulty: 1,
        correctAnswer: "To lift metal",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "scrapyard"]
    },

    {
        id: "sci-magnet-uses-006",
        skillId: "magnetUses",
        question: "Which of these is a good use for a magnet?",
        stage: "recognise",
        options: [
            "Picking up paper clips",
            "Cutting wood",
            "Boiling water",
            "Inflating a tyre"
        ],

        hint:
            "Choose the job involving a small object that is usually made from steel.",

        explanation:
            "Magnets easily pick up steel paper clips.",

        difficulty: 1,
        correctAnswer: "Picking up paper clips",
        estimatedSeconds: 15,

        tags: ["science", "magnets"]
    },

    {
        id: "sci-magnet-uses-007",
        skillId: "magnetUses",
        question: "Which everyday object often contains a magnet?",
        stage: "recognise",
        options: [
            "A fridge magnet",
            "A paper cup",
            "A sock",
            "A pencil"
        ],

        hint:
            "One option is actually named after the material inside it.",

        explanation:
            "Fridge magnets are a common everyday use of magnets.",

        difficulty: 1,
        correctAnswer: "A fridge magnet",
        estimatedSeconds: 15,

        tags: ["science", "magnets", "everyday-life"]
    },

    {
        id: "sci-magnet-uses-008",
        skillId: "magnetUses",
        question: "Why are magnets useful for finding dropped paper clips?",
        stage: "recognise",
        options: [
            "They attract the metal paper clips",
            "They make them bigger",
            "They change their colour",
            "They melt them"
        ],

        hint:
            "Think about what paper clips are usually made from and what magnets do to that material.",

        explanation:
            "Paper clips are usually made from steel, which is magnetic.",

        difficulty: 1,
        correctAnswer: "They attract the metal paper clips",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "paper-clips"]
    },

    {
        id: "sci-magnet-uses-009",
        skillId: "magnetUses",
        question: "Which object would a magnet NOT help you pick up?",
        stage: "recognise",
        options: [
            "A wooden block",
            "A steel screw",
            "An iron nail",
            "A paper clip"
        ],

        hint:
            "Three objects contain magnetic metals. Choose the one made from a non-magnetic material.",

        explanation:
            "Wood is not attracted to magnets.",

        difficulty: 1,
        correctAnswer: "A wooden block",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "materials"]
    },

    {
        id: "sci-magnet-uses-010",
        skillId: "magnetUses",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Magnets have many useful everyday jobs.",
            "Magnets only belong in science lessons.",
            "Magnets attract every material.",
            "Magnets are never used at home."
        ],

        hint:
            "Think about all the places you might use or see magnets outside of school.",

        explanation:
            "Magnets are used in many everyday objects and tools.",

        difficulty: 1,
        correctAnswer: "Magnets have many useful everyday jobs.",
        estimatedSeconds: 20,

        tags: ["science", "magnets", "everyday-life"]
    },
{
    id: "sci-magnet-uses-011",
    skillId: "magnetUses",
    question: "Why are magnetic catches useful on cupboard doors?",
    stage: "recognise",
    options: [
        "They keep the doors closed",
        "They make the doors lighter",
        "They change the door colour",
        "They stop the wood growing"
    ],

    hint: "Think about what happens when you gently push a cupboard door shut.",

    explanation:
        "Magnetic catches hold cupboard doors shut until they are pulled open.",

    difficulty: 2,
    correctAnswer: "They keep the doors closed",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "home"]
},

{
    id: "sci-magnet-uses-012",
    skillId: "magnetUses",
    question: "Why would a mechanic use a magnetic tool?",
    stage: "recognise",
    options: [
        "To pick up dropped screws",
        "To paint an engine",
        "To wash the floor",
        "To sharpen pencils"
    ],

    hint: "Which option involves small metal objects that a magnet can attract?",

    explanation:
        "Magnetic tools help collect small metal parts that are difficult to reach.",

    difficulty: 2,
    correctAnswer: "To pick up dropped screws",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "tools"]
},

{
    id: "sci-magnet-uses-013",
    skillId: "magnetUses",
    question: "Which job is easiest with a magnet?",
    stage: "recognise",
    options: [
        "Collecting scattered paper clips",
        "Picking up leaves",
        "Collecting feathers",
        "Moving water"
    ],

    hint: "Choose the job that involves lots of small metal objects.",

    explanation:
        "Magnets can quickly collect magnetic metal objects.",

    difficulty: 2,
    correctAnswer: "Collecting scattered paper clips",
    estimatedSeconds: 20,

    tags: ["science", "magnets"]
},

{
    id: "sci-magnet-uses-014",
    skillId: "magnetUses",
    question: "Why do some bags have magnetic fasteners?",
    stage: "recognise",
    options: [
        "To help keep them closed",
        "To make them heavier",
        "To keep them warm",
        "To make them waterproof"
    ],

    hint: "Think about what a fastener is designed to do.",

    explanation:
        "Magnets provide an easy way to fasten and open some bags.",

    difficulty: 2,
    correctAnswer: "To help keep them closed",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "everyday-life"]
},

{
    id: "sci-magnet-uses-015",
    skillId: "magnetUses",
    question: "A child drops ten paper clips under a desk. Which tool would help most?",
    stage: "recognise",
    options: [
        "A magnet",
        "A sponge",
        "A paintbrush",
        "A ruler"
    ],

    hint: "Paper clips are made of metal, so which tool can collect many at once?",

    explanation:
        "A magnet can collect many paper clips at once.",

    difficulty: 2,
    correctAnswer: "A magnet",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "problem-solving"]
},

{
    id: "sci-magnet-uses-016",
    skillId: "magnetUses",
    question: "Why are large magnets useful in recycling centres?",
    stage: "recognise",
    options: [
        "They separate metal from other materials",
        "They melt rubbish",
        "They wash plastic",
        "They make paper"
    ],

    hint: "Recycling centres sort different materials into groups. Which material can magnets pick out?",

    explanation:
        "Large magnets help sort magnetic metals for recycling.",

    difficulty: 2,
    correctAnswer: "They separate metal from other materials",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "recycling"]
},

{
    id: "sci-magnet-uses-017",
    skillId: "magnetUses",
    question: "Which object would NOT be held to a fridge by a magnet?",
    stage: "recognise",
    options: [
        "A wooden block",
        "A shopping list",
        "A photograph",
        "A postcard"
    ],

    hint: "A fridge magnet holds paper against the metal fridge, but can it attract wood?",

    explanation:
        "Magnets hold paper items against the metal fridge, but they cannot attract wood.",

    difficulty: 2,
    correctAnswer: "A wooden block",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "materials"]
},

{
    id: "sci-magnet-uses-018",
    skillId: "magnetUses",
    question: "Why do magnetic toys work?",
    stage: "recognise",
    options: [
        "Their magnets attract or repel each other",
        "They are made from plastic",
        "They contain water",
        "They use sunlight"
    ],

    hint: "Think about the forces magnets can create when they come close together.",

    explanation:
        "Magnetic toys use the forces between magnets.",

    difficulty: 2,
    correctAnswer: "Their magnets attract or repel each other",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "toys"]
},

{
    id: "sci-magnet-uses-019",
    skillId: "magnetUses",
    question: "Which sentence is correct?",
    stage: "recognise",
    options: [
        "Magnets are useful because they attract some metals.",
        "Magnets attract every material.",
        "Magnets only work at school.",
        "Magnets can only attract paper clips."
    ],

    hint: "Look for the statement that is true in many different everyday situations.",

    explanation:
        "Magnets attract certain metals and have many practical uses.",

    difficulty: 2,
    correctAnswer: "Magnets are useful because they attract some metals.",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "uses"]
},

{
    id: "sci-magnet-uses-020",
    skillId: "magnetUses",
    question: "Which sentence best describes why magnets are useful?",
    stage: "recognise",
    options: [
        "They attract magnetic materials and help solve everyday problems.",
        "They make every object stick together.",
        "They only work in laboratories.",
        "They attract all materials equally."
    ],

    hint: "Think about what magnets really do and how people use that ability every day.",

    explanation:
        "Magnets are useful because they can attract magnetic materials in many everyday situations.",

    difficulty: 2,
    correctAnswer: "They attract magnetic materials and help solve everyday problems.",
    estimatedSeconds: 20,

    tags: ["science", "magnets", "everyday-life", "uses"]
}

]

};

export default magnetUses;

export {
    magnetUses
};