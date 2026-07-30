import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const mountainBasics: SkillContent = {

    skillId: "mountainBasics",

    title: "Mountain Basics",

    description:
        "Learn what mountains are, their features and how they are different from other landscapes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-mtn-001",

        question:
            "What is a mountain?",

        options: [
            "A large natural rise of land that is usually higher and steeper than a hill",
            "A flat area of land",
            "A type of river",
            "A man-made building"
        ],

        answer: 0,

        explanation:
            "Mountains are high areas of land with steep sides.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-002",

        question:
            "How are mountains usually measured?",

        options: [
            "By their height above sea level",
            "By their colour",
            "By the number of trees on them",
            "By their distance from towns"
        ],

        answer: 0,

        explanation:
            "The height of mountains is measured from sea level.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-003",

        question:
            "What is the highest point of a mountain called?",

        options: [
            "The summit",
            "The valley",
            "The foot",
            "The river"
        ],

        answer: 0,

        explanation:
            "The summit is the highest point of a mountain.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-004",

        question:
            "What is the bottom of a mountain called?",

        options: [
            "The foot",
            "The summit",
            "The peak",
            "The ridge"
        ],

        answer: 0,

        explanation:
            "The foot is the lowest part where a mountain begins.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-005",

        question:
            "What is a peak?",

        options: [
            "The pointed top of a mountain",
            "A river valley",
            "A flat field",
            "A type of weather"
        ],

        answer: 0,

        explanation:
            "A peak is the highest or pointed part of a mountain.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-006",

        question:
            "What is a mountain range?",

        options: [
            "A group of mountains together",
            "A single small hill",
            "A type of river",
            "A city near a mountain"
        ],

        answer: 0,

        explanation:
            "Mountain ranges are groups of connected mountains.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-007",

        question:
            "What is a valley?",

        options: [
            "Low land between hills or mountains",
            "The top of a mountain",
            "A type of cloud",
            "A steep cliff only"
        ],

        answer: 0,

        explanation:
            "Valleys are lower areas often found between mountains.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-008",

        question:
            "Why are mountain areas often colder than low land?",

        options: [
            "Temperature decreases at higher altitudes",
            "Mountains create cold water",
            "The Sun does not reach mountains",
            "Mountains are always covered in snow"
        ],

        answer: 0,

        explanation:
            "The higher the altitude, the colder the air usually becomes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-009",

        question:
            "What is altitude?",

        options: [
            "Height above sea level",
            "The age of a mountain",
            "The width of a valley",
            "The amount of rainfall"
        ],

        answer: 0,

        explanation:
            "Altitude describes how high a place is above sea level.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-010",

        question:
            "Why do some mountains have snow on their tops?",

        options: [
            "The temperature is colder at high altitudes",
            "Snow is painted there",
            "Mountains create snow",
            "Snow only falls on mountains"
        ],

        answer: 0,

        explanation:
            "High mountains are colder, so snow and ice can remain.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-011",

        question:
            "Which is an example of a famous mountain range?",

        options: [
            "The Himalayas",
            "The River Thames",
            "The Sahara Desert",
            "The Atlantic Ocean"
        ],

        answer: 0,

        explanation:
            "The Himalayas are a major mountain range in Asia.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-012",

        question:
            "What is a mountain landscape?",

        options: [
            "An area with mountains and related features",
            "A completely flat area",
            "A city street",
            "A type of weather"
        ],

        answer: 0,

        explanation:
            "A landscape includes the visible features of an area.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-013",

        question:
            "Why are mountains important habitats?",

        options: [
            "They provide homes for plants and animals",
            "Nothing can live there",
            "They have no ecosystems",
            "They prevent all life"
        ],

        answer: 0,

        explanation:
            "Many plants and animals are adapted to mountain environments.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "habitats"]
    },

    {
        id: "geo-mtn-014",

        question:
            "What is a cliff?",

        options: [
            "A steep rock face",
            "A flat field",
            "A river source",
            "A type of cloud"
        ],

        answer: 0,

        explanation:
            "Cliffs are steep sides of rock or land.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-015",

        question:
            "Why do people visit mountains?",

        options: [
            "For activities such as walking, climbing and sightseeing",
            "Because mountains are cities",
            "To avoid nature",
            "To build roads only"
        ],

        answer: 0,

        explanation:
            "Mountains are popular for recreation and tourism.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-016",

        question:
            "What is a ridge?",

        options: [
            "A long narrow area of high land",
            "The bottom of a valley",
            "A river mouth",
            "A flat lake"
        ],

        answer: 0,

        explanation:
            "A ridge is a raised line of land, often found on mountains.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-017",

        question:
            "How are mountains different from hills?",

        options: [
            "Mountains are generally higher and steeper",
            "Mountains are always smaller",
            "Hills are always snowy",
            "There is no difference"
        ],

        answer: 0,

        explanation:
            "Mountains are usually taller and steeper than hills.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-018",

        question:
            "What can glaciers do to mountains?",

        options: [
            "They can shape the landscape by moving ice",
            "They make mountains disappear instantly",
            "They create cities",
            "They stop erosion"
        ],

        answer: 0,

        explanation:
            "Moving ice can slowly change mountain landscapes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-019",

        question:
            "Why do mountains affect the weather?",

        options: [
            "They can change how air moves and where rain falls",
            "They control the Sun",
            "They create all weather",
            "They stop wind completely"
        ],

        answer: 0,

        explanation:
            "Mountains can influence rainfall and air movement.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-020",

        question:
            "Which sentence best describes mountains?",

        options: [
            "High areas of land with steep sides and unique features",
            "Flat areas with no slopes",
            "Only places covered in snow",
            "Human-made structures"
        ],

        answer: 0,

        explanation:
            "Mountains are natural high areas of land with steep slopes.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "mountains"]
    }

    ]

};