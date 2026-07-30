import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const mountainsAndHills: SkillContent = {

    skillId: "mountainsAndHills",

    title: "Mountains and Hills",

    description:
        "Learn about mountains, hills and how they are different.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-mountains-001",
        skillId: "mountainsAndHills",
        question: "What is a mountain?",

        options: [
            "A very high area of land",
            "A river",
            "A forest",
            "A beach"
        ],

        explanation:
            "A mountain is a very high natural feature that rises above the land around it.",

        difficulty: 1,
        correctAnswer: "A very high area of land",
        estimatedSeconds: 15,

        tags: ["geography", "mountains"]
    },

    {
        id: "geo-mountains-002",
        skillId: "mountainsAndHills",
        question: "What is a hill?",

        options: [
            "An area of raised land that is lower than a mountain",
            "A deep lake",
            "A type of road",
            "A cave"
        ],

        explanation:
            "A hill is raised land but is usually lower and less steep than a mountain.",

        difficulty: 1,
        correctAnswer: "An area of raised land that is lower than a mountain",
        estimatedSeconds: 15,

        tags: ["geography", "hills"]
    },

    {
        id: "geo-mountains-003",
        skillId: "mountainsAndHills",
        question: "Which is usually taller?",

        options: [
            "A mountain",
            "A hill",
            "They are always the same height",
            "A river"
        ],

        explanation:
            "Mountains are usually much taller than hills.",

        difficulty: 1,
        correctAnswer: "A mountain",
        estimatedSeconds: 15,

        tags: ["geography", "comparison"]
    },

    {
        id: "geo-mountains-004",
        skillId: "mountainsAndHills",
        question: "Which of these is a natural feature?",

        options: [
            "Mountain",
            "Motorway",
            "Railway station",
            "Bridge"
        ],

        explanation:
            "Mountains are natural landforms.",

        difficulty: 1,
        correctAnswer: "Mountain",
        estimatedSeconds: 15,

        tags: ["geography", "physical-geography"]
    },

    {
        id: "geo-mountains-005",
        skillId: "mountainsAndHills",
        question: "What is the top of a mountain called?",

        options: [
            "Peak",
            "Mouth",
            "Source",
            "Bank"
        ],

        explanation:
            "The highest point of a mountain is called its peak or summit.",

        difficulty: 1,
        correctAnswer: "Peak",
        estimatedSeconds: 15,

        tags: ["geography", "mountains"]
    },

    {
        id: "geo-mountains-006",
        skillId: "mountainsAndHills",
        question: "Mountains are usually...",

        options: [
            "Steeper than hills",
            "Flatter than hills",
            "Underwater",
            "Made by people"
        ],

        explanation:
            "Mountains usually have steeper sides than hills.",

        difficulty: 1,
        correctAnswer: "Steeper than hills",
        estimatedSeconds: 15,

        tags: ["geography", "comparison"]
    },

    {
        id: "geo-mountains-007",
        skillId: "mountainsAndHills",
        question: "Which place is most likely to have mountains?",

        options: [
            "The countryside",
            "A shopping centre",
            "An airport",
            "A harbour"
        ],

        explanation:
            "Mountains are natural features often found in the countryside.",

        difficulty: 1,
        correctAnswer: "The countryside",
        estimatedSeconds: 15,

        tags: ["geography", "landforms"]
    },

    {
        id: "geo-mountains-008",
        skillId: "mountainsAndHills",
        question: "Which activity is often enjoyed on mountains?",

        options: [
            "Walking",
            "Driving trains",
            "Playing tennis indoors",
            "Shopping"
        ],

        explanation:
            "Many people enjoy walking and hiking in mountain areas.",

        difficulty: 1,
        correctAnswer: "Walking",
        estimatedSeconds: 20,

        tags: ["geography", "mountains"]
    },

    {
        id: "geo-mountains-009",
        skillId: "mountainsAndHills",
        question: "Which statement is true?",

        options: [
            "Hills are usually lower than mountains.",
            "All hills are taller than mountains.",
            "Mountains are built by people.",
            "Hills are rivers."
        ],

        explanation:
            "Hills are generally lower and less steep than mountains.",

        difficulty: 1,
        correctAnswer: "Hills are usually lower than mountains.",
        estimatedSeconds: 20,

        tags: ["geography", "comparison"]
    },

    {
        id: "geo-mountains-010",
        skillId: "mountainsAndHills",
        question: "Mountains and hills are examples of...",

        options: [
            "Landforms",
            "Buildings",
            "Roads",
            "Vehicles"
        ],

        explanation:
            "Landforms are natural features of the Earth's surface.",

        difficulty: 1,
        correctAnswer: "Landforms",
        estimatedSeconds: 20,

        tags: ["geography", "landforms"]
    },

    {
        id: "geo-mountains-011",
        skillId: "mountainsAndHills",
        question: "Why do mountains often have cooler weather than low land?",

        options: [
            "Higher places are usually colder.",
            "Mountains make ice every day.",
            "The sun never reaches mountains.",
            "Mountains are underwater."
        ],

        explanation:
            "The temperature usually becomes cooler as you go higher.",

        difficulty: 2,
        correctAnswer: "Higher places are usually colder.",
        estimatedSeconds: 20,

        tags: ["geography", "weather"]
    },

    {
        id: "geo-mountains-012",
        skillId: "mountainsAndHills",
        question: "Why do people visit mountains?",

        options: [
            "To enjoy the scenery and outdoor activities",
            "To see traffic lights",
            "To buy groceries",
            "To visit factories"
        ],

        explanation:
            "Mountains are popular for walking, climbing and enjoying nature.",

        difficulty: 2,
        correctAnswer: "To enjoy the scenery and outdoor activities",
        estimatedSeconds: 20,

        tags: ["geography", "tourism"]
    },

    {
        id: "geo-mountains-013",
        skillId: "mountainsAndHills",
        question: "How are hills different from mountains?",

        options: [
            "Hills are usually lower and less steep.",
            "Hills are always covered in snow.",
            "Hills are underwater.",
            "Hills are man-made."
        ],

        explanation:
            "Hills and mountains are both raised land, but hills are generally lower.",

        difficulty: 2,
        correctAnswer: "Hills are usually lower and less steep.",
        estimatedSeconds: 20,

        tags: ["geography", "comparison"]
    },

    {
        id: "geo-mountains-014",
        skillId: "mountainsAndHills",
        question: "Why are mountains important for wildlife?",

        options: [
            "They provide habitats for many plants and animals.",
            "Nothing can live on mountains.",
            "Only birds can live there.",
            "They stop plants from growing."
        ],

        explanation:
            "Different animals and plants are adapted to mountain environments.",

        difficulty: 2,
        correctAnswer: "They provide habitats for many plants and animals.",
        estimatedSeconds: 20,

        tags: ["geography", "wildlife"]
    },

    {
        id: "geo-mountains-015",
        skillId: "mountainsAndHills",
        question: "Which feature would you expect to find on a mountain?",

        options: [
            "A peak",
            "A harbour",
            "A runway",
            "A motorway service station"
        ],

        explanation:
            "The highest point of a mountain is called its peak.",

        difficulty: 2,
        correctAnswer: "A peak",
        estimatedSeconds: 20,

        tags: ["geography", "mountains"]
    },

    {
        id: "geo-mountains-016",
        skillId: "mountainsAndHills",
        question: "Which landform would usually be easier to climb?",

        options: [
            "A hill",
            "A mountain",
            "A cliff",
            "A volcano erupting"
        ],

        explanation:
            "Hills are usually lower and less steep than mountains.",

        difficulty: 2,
        correctAnswer: "A hill",
        estimatedSeconds: 20,

        tags: ["geography", "comparison"]
    },

    {
        id: "geo-mountains-017",
        skillId: "mountainsAndHills",
        question: "Why are mountains shown on maps?",

        options: [
            "They are important natural features.",
            "They change every day.",
            "They replace roads.",
            "They only exist in winter."
        ],

        explanation:
            "Maps show mountains to help people understand the landscape.",

        difficulty: 2,
        correctAnswer: "They are important natural features.",
        estimatedSeconds: 20,

        tags: ["geography", "maps"]
    },

    {
        id: "geo-mountains-018",
        skillId: "mountainsAndHills",
        question: "Which of these is most likely to be found on a mountain?",

        options: [
            "Rocky slopes",
            "Coral reef",
            "Harbour docks",
            "Underground station"
        ],

        explanation:
            "Many mountains have steep, rocky slopes.",

        difficulty: 2,
        correctAnswer: "Rocky slopes",
        estimatedSeconds: 20,

        tags: ["geography", "mountains"]
    },

    {
        id: "geo-mountains-019",
        skillId: "mountainsAndHills",
        question: "Which statement best compares hills and mountains?",

        options: [
            "Both are raised land, but mountains are usually higher.",
            "Mountains are always flat.",
            "Hills are always taller.",
            "Both are rivers."
        ],

        explanation:
            "Mountains and hills are both landforms, but mountains are generally higher and steeper.",

        difficulty: 2,
        correctAnswer: "Both are raised land, but mountains are usually higher.",
        estimatedSeconds: 20,

        tags: ["geography", "comparison"]
    },

    {
        id: "geo-mountains-020",
        skillId: "mountainsAndHills",
        question: "Which sentence best describes mountains and hills?",

        options: [
            "They are natural raised landforms that vary in height and shape.",
            "They are buildings made from stone.",
            "They are types of rivers.",
            "They are man-made parks."
        ],

        explanation:
            "Mountains and hills are natural features that shape the landscape.",

        difficulty: 2,
        correctAnswer: "They are natural raised landforms that vary in height and shape.",
        estimatedSeconds: 20,

        tags: ["geography", "physical-geography", "mountains", "hills"]
    }

    ]

};