import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const mountainBasics: SkillContent = {

    skillId: "mountainBasics",

    title: "Mountain Basics",

    description:
        "Learn what mountains are, their features and how they are different from other landscapes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-mtn-001",
        skillId: "mountainBasics",
        question:
            "What is a mountain?",
        stage: "recognise",
        options: [
            "A large natural rise of land that is usually higher and steeper than a hill",
            "A flat area of land",
            "A type of river",
            "A man-made building"
        ],

        explanation:
            "Mountains are high areas of land with steep sides.",

        difficulty: 1,
        correctAnswer: "A large natural rise of land that is usually higher and steeper than a hill",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-002",
        skillId: "mountainBasics",
        question:
            "How are mountains usually measured?",
        stage: "recognise",
        options: [
            "By their height above sea level",
            "By their colour",
            "By the number of trees on them",
            "By their distance from towns"
        ],

        explanation:
            "The height of mountains is measured from sea level.",

        difficulty: 1,
        correctAnswer: "By their height above sea level",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-003",
        skillId: "mountainBasics",
        question:
            "What is the highest point of a mountain called?",
        stage: "recognise",
        options: [
            "The summit",
            "The valley",
            "The foot",
            "The river"
        ],

        explanation:
            "The summit is the highest point of a mountain.",

        difficulty: 1,
        correctAnswer: "The summit",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-004",
        skillId: "mountainBasics",
        question:
            "What is the bottom of a mountain called?",
        stage: "recognise",
        options: [
            "The foot",
            "The summit",
            "The peak",
            "The ridge"
        ],

        explanation:
            "The foot is the lowest part where a mountain begins.",

        difficulty: 1,
        correctAnswer: "The foot",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-005",
        skillId: "mountainBasics",
        question:
            "What is a peak?",
        stage: "recognise",
        options: [
            "The pointed top of a mountain",
            "A river valley",
            "A flat field",
            "A type of weather"
        ],

        explanation:
            "A peak is the highest or pointed part of a mountain.",

        difficulty: 1,
        correctAnswer: "The pointed top of a mountain",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-006",
        skillId: "mountainBasics",
        question:
            "What is a mountain range?",
        stage: "recognise",
        options: [
            "A group of mountains together",
            "A single small hill",
            "A type of river",
            "A city near a mountain"
        ],

        explanation:
            "Mountain ranges are groups of connected mountains.",

        difficulty: 1,
        correctAnswer: "A group of mountains together",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-007",
        skillId: "mountainBasics",
        question:
            "What is a valley?",
        stage: "recognise",
        options: [
            "Low land between hills or mountains",
            "The top of a mountain",
            "A type of cloud",
            "A steep cliff only"
        ],

        explanation:
            "Valleys are lower areas often found between mountains.",

        difficulty: 1,
        correctAnswer: "Low land between hills or mountains",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-008",
        skillId: "mountainBasics",
        question:
            "Why are mountain areas often colder than low land?",
        stage: "recognise",
        options: [
            "Temperature decreases at higher altitudes",
            "Mountains create cold water",
            "The Sun does not reach mountains",
            "Mountains are always covered in snow"
        ],

        explanation:
            "The higher the altitude, the colder the air usually becomes.",

        difficulty: 2,
        correctAnswer: "Temperature decreases at higher altitudes",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-009",
        skillId: "mountainBasics",
        question:
            "What is altitude?",
        stage: "recognise",
        options: [
            "Height above sea level",
            "The age of a mountain",
            "The width of a valley",
            "The amount of rainfall"
        ],

        explanation:
            "Altitude describes how high a place is above sea level.",

        difficulty: 2,
        correctAnswer: "Height above sea level",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-010",
        skillId: "mountainBasics",
        question:
            "Why do some mountains have snow on their tops?",
        stage: "recognise",
        options: [
            "The temperature is colder at high altitudes",
            "Snow is painted there",
            "Mountains create snow",
            "Snow only falls on mountains"
        ],

        explanation:
            "High mountains are colder, so snow and ice can remain.",

        difficulty: 1,
        correctAnswer: "The temperature is colder at high altitudes",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-011",
        skillId: "mountainBasics",
        question:
            "Which is an example of a famous mountain range?",
        stage: "recognise",
        options: [
            "The Himalayas",
            "The River Thames",
            "The Sahara Desert",
            "The Atlantic Ocean"
        ],

        explanation:
            "The Himalayas are a major mountain range in Asia.",

        difficulty: 1,
        correctAnswer: "The Himalayas",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-012",
        skillId: "mountainBasics",
        question:
            "What is a mountain landscape?",
        stage: "recognise",
        options: [
            "An area with mountains and related features",
            "A completely flat area",
            "A city street",
            "A type of weather"
        ],

        explanation:
            "A landscape includes the visible features of an area.",

        difficulty: 1,
        correctAnswer: "An area with mountains and related features",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-013",
        skillId: "mountainBasics",
        question:
            "Why are mountains important habitats?",
        stage: "recognise",
        options: [
            "They provide homes for plants and animals",
            "Nothing can live there",
            "They have no ecosystems",
            "They prevent all life"
        ],

        explanation:
            "Many plants and animals are adapted to mountain environments.",

        difficulty: 1,
        correctAnswer: "They provide homes for plants and animals",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "habitats"]
    },

    {
        id: "geo-mtn-014",
        skillId: "mountainBasics",
        question:
            "What is a cliff?",
        stage: "recognise",
        options: [
            "A steep rock face",
            "A flat field",
            "A river source",
            "A type of cloud"
        ],

        explanation:
            "Cliffs are steep sides of rock or land.",

        difficulty: 2,
        correctAnswer: "A steep rock face",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-015",
        skillId: "mountainBasics",
        question:
            "Why do people visit mountains?",
        stage: "recognise",
        options: [
            "For activities such as walking, climbing and sightseeing",
            "Because mountains are cities",
            "To avoid nature",
            "To build roads only"
        ],

        explanation:
            "Mountains are popular for recreation and tourism.",

        difficulty: 1,
        correctAnswer: "For activities such as walking, climbing and sightseeing",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-016",
        skillId: "mountainBasics",
        question:
            "What is a ridge?",
        stage: "recognise",
        options: [
            "A long narrow area of high land",
            "The bottom of a valley",
            "A river mouth",
            "A flat lake"
        ],

        explanation:
            "A ridge is a raised line of land, often found on mountains.",

        difficulty: 2,
        correctAnswer: "A long narrow area of high land",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-017",
        skillId: "mountainBasics",
        question:
            "How are mountains different from hills?",
        stage: "recognise",
        options: [
            "Mountains are generally higher and steeper",
            "Mountains are always smaller",
            "Hills are always snowy",
            "There is no difference"
        ],

        explanation:
            "Mountains are usually taller and steeper than hills.",

        difficulty: 1,
        correctAnswer: "Mountains are generally higher and steeper",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-018",
        skillId: "mountainBasics",
        question:
            "What can glaciers do to mountains?",
        stage: "recognise",
        options: [
            "They can shape the landscape by moving ice",
            "They make mountains disappear instantly",
            "They create cities",
            "They stop erosion"
        ],

        explanation:
            "Moving ice can slowly change mountain landscapes.",

        difficulty: 2,
        correctAnswer: "They can shape the landscape by moving ice",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-019",
        skillId: "mountainBasics",
        question:
            "Why do mountains affect the weather?",
        stage: "recognise",
        options: [
            "They can change how air moves and where rain falls",
            "They control the Sun",
            "They create all weather",
            "They stop wind completely"
        ],

        explanation:
            "Mountains can influence rainfall and air movement.",

        difficulty: 2,
        correctAnswer: "They can change how air moves and where rain falls",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mtn-020",
        skillId: "mountainBasics",
        question:
            "Which sentence best describes mountains?",
        stage: "recognise",
        options: [
            "High areas of land with steep sides and unique features",
            "Flat areas with no slopes",
            "Only places covered in snow",
            "Human-made structures"
        ],

        explanation:
            "Mountains are natural high areas of land with steep slopes.",

        difficulty: 2,
        correctAnswer: "High areas of land with steep sides and unique features",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "mountains"]
    }

    ]

};


export default mountainBasics;

export {

    mountainBasics

};
