import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const riversAndTheWaterCycle: SkillContent = {

    skillId: "riversAndTheWaterCycle",

    title: "Rivers and the Water Cycle",

    description:
        "Learn how rivers are connected to the water cycle, including evaporation, condensation and precipitation.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-wc-001",
        skillId: "riversAndTheWaterCycle",
        question:
            "What is the water cycle?",
        stage: "recognise",
        options: [
            "The continuous movement of water around Earth",
            "The journey of a train",
            "The movement of rocks only",
            "The changing of seasons"
        ],

        explanation:
            "The water cycle describes how water moves between the land, oceans and atmosphere.",

        difficulty: 1,
        correctAnswer: "The continuous movement of water around Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "water-cycle"]
    },

    {
        id: "geo-wc-002",
        skillId: "riversAndTheWaterCycle",
        question:
            "What happens during evaporation?",
        stage: "recognise",
        options: [
            "Water turns into water vapour",
            "Water freezes into ice",
            "Rain falls from clouds",
            "Water becomes soil"
        ],

        explanation:
            "Heat from the Sun causes liquid water to change into water vapour.",

        difficulty: 1,
        correctAnswer: "Water turns into water vapour",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-003",
        skillId: "riversAndTheWaterCycle",
        question:
            "What provides the energy for evaporation?",
        stage: "recognise",
        options: [
            "The Sun",
            "The Moon",
            "Rocks",
            "Wind only"
        ],

        explanation:
            "The Sun heats water and causes evaporation.",

        difficulty: 1,
        correctAnswer: "The Sun",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-004",
        skillId: "riversAndTheWaterCycle",
        question:
            "What is condensation?",
        stage: "recognise",
        options: [
            "When water vapour cools and forms tiny water droplets",
            "When rivers stop flowing",
            "When water disappears",
            "When soil dries"
        ],

        explanation:
            "Condensation happens when water vapour cools and turns into droplets.",

        difficulty: 1,
        correctAnswer: "When water vapour cools and forms tiny water droplets",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-005",
        skillId: "riversAndTheWaterCycle",
        question:
            "What forms when water droplets collect in the sky?",
        stage: "recognise",
        options: [
            "Clouds",
            "Mountains",
            "Rivers",
            "Lakes"
        ],

        explanation:
            "Clouds form when many tiny water droplets gather together.",

        difficulty: 1,
        correctAnswer: "Clouds",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-006",
        skillId: "riversAndTheWaterCycle",
        question:
            "What is precipitation?",
        stage: "recognise",
        options: [
            "Water falling from clouds as rain, snow or hail",
            "Water flowing uphill",
            "Water becoming a cloud",
            "Water underground only"
        ],

        explanation:
            "Precipitation is water that falls from clouds.",

        difficulty: 1,
        correctAnswer: "Water falling from clouds as rain, snow or hail",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-007",
        skillId: "riversAndTheWaterCycle",
        question:
            "How do rivers get water?",
        stage: "recognise",
        options: [
            "From rainfall and water flowing across land",
            "From underground machines",
            "From clouds directly only",
            "From buildings"
        ],

        explanation:
            "Rain and other water sources feed rivers.",

        difficulty: 1,
        correctAnswer: "From rainfall and water flowing across land",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-wc-008",
        skillId: "riversAndTheWaterCycle",
        question:
            "What happens to rainwater after it reaches the ground?",
        stage: "recognise",
        options: [
            "It can flow into rivers, lakes or soak into the soil",
            "It disappears forever",
            "It becomes sunlight",
            "It turns into rocks"
        ],

        explanation:
            "Water can collect in rivers or move into the ground.",

        difficulty: 1,
        correctAnswer: "It can flow into rivers, lakes or soak into the soil",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-009",
        skillId: "riversAndTheWaterCycle",
        question:
            "What is collection in the water cycle?",
        stage: "recognise",
        options: [
            "Water gathering in places such as rivers, lakes and oceans",
            "Water turning into vapour",
            "Clouds forming",
            "Rain falling"
        ],

        explanation:
            "Collection happens when water gathers together.",

        difficulty: 1,
        correctAnswer: "Water gathering in places such as rivers, lakes and oceans",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-010",
        skillId: "riversAndTheWaterCycle",
        question:
            "Why are rivers part of the water cycle?",
        stage: "recognise",
        options: [
            "They move collected water across the land",
            "They create clouds",
            "They stop rainfall",
            "They remove water from Earth"
        ],

        explanation:
            "Rivers transport water through the water cycle.",

        difficulty: 2,
        correctAnswer: "They move collected water across the land",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers", "water-cycle"]
    },

    {
        id: "geo-wc-011",
        skillId: "riversAndTheWaterCycle",
        question:
            "What happens when water vapour rises into the atmosphere?",
        stage: "recognise",
        options: [
            "It can cool and form clouds",
            "It becomes soil",
            "It becomes a river immediately",
            "It disappears permanently"
        ],

        explanation:
            "Cooling water vapour can form clouds through condensation.",

        difficulty: 2,
        correctAnswer: "It can cool and form clouds",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-012",
        skillId: "riversAndTheWaterCycle",
        question:
            "Why are rivers important for plants and animals?",
        stage: "recognise",
        options: [
            "They provide water needed for life",
            "They remove all habitats",
            "They prevent growth",
            "They stop rainfall"
        ],

        explanation:
            "Many living things depend on freshwater from rivers.",

        difficulty: 1,
        correctAnswer: "They provide water needed for life",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-wc-013",
        skillId: "riversAndTheWaterCycle",
        question:
            "What can happen to water in a river over time?",
        stage: "recognise",
        options: [
            "It can evaporate and return to the atmosphere",
            "It stops being water",
            "It becomes metal",
            "It leaves Earth forever"
        ],

        explanation:
            "River water can evaporate and continue through the water cycle.",

        difficulty: 2,
        correctAnswer: "It can evaporate and return to the atmosphere",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-014",
        skillId: "riversAndTheWaterCycle",
        question:
            "What causes rain to fall from clouds?",
        stage: "recognise",
        options: [
            "Water droplets become heavy and fall",
            "Clouds disappear instantly",
            "Rivers push clouds",
            "The ground moves"
        ],

        explanation:
            "When droplets become large and heavy, they fall as precipitation.",

        difficulty: 2,
        correctAnswer: "Water droplets become heavy and fall",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-015",
        skillId: "riversAndTheWaterCycle",
        question:
            "How does the water cycle continue?",
        stage: "recognise",
        options: [
            "Water keeps moving through evaporation, condensation and precipitation",
            "Water is used once and disappears",
            "Only rivers move water",
            "Only clouds contain water"
        ],

        explanation:
            "The water cycle is a continuous process.",

        difficulty: 2,
        correctAnswer: "Water keeps moving through evaporation, condensation and precipitation",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-016",
        skillId: "riversAndTheWaterCycle",
        question:
            "What happens when snow and ice melt?",
        stage: "recognise",
        options: [
            "They become liquid water",
            "They become clouds immediately",
            "They become rocks",
            "They disappear"
        ],

        explanation:
            "Melting changes solid water into liquid water.",

        difficulty: 1,
        correctAnswer: "They become liquid water",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-017",
        skillId: "riversAndTheWaterCycle",
        question:
            "Why do rivers often increase in size downstream?",
        stage: "recognise",
        options: [
            "More water joins them from rainfall and tributaries",
            "Water leaves them completely",
            "They become smaller",
            "They stop flowing"
        ],

        explanation:
            "Tributaries and rainfall add more water as rivers travel.",

        difficulty: 2,
        correctAnswer: "More water joins them from rainfall and tributaries",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-wc-018",
        skillId: "riversAndTheWaterCycle",
        question:
            "What is the connection between rainfall and rivers?",
        stage: "recognise",
        options: [
            "Rainfall provides water that can flow into rivers",
            "Rain stops rivers flowing",
            "Rain removes all water",
            "Rain creates mountains"
        ],

        explanation:
            "Rain is an important source of water for rivers.",

        difficulty: 1,
        correctAnswer: "Rainfall provides water that can flow into rivers",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-wc-019",
        skillId: "riversAndTheWaterCycle",
        question:
            "Which order shows part of the water cycle correctly?",
        stage: "recognise",
        options: [
            "Evaporation → condensation → precipitation",
            "Rain → Sun → snow",
            "River → mountain → rock",
            "Cloud → river → evaporation only"
        ],

        explanation:
            "Water evaporates, forms clouds through condensation and falls as precipitation.",

        difficulty: 2,
        correctAnswer: "Evaporation → condensation → precipitation",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "water-cycle"]
    },

    {
        id: "geo-wc-020",
        skillId: "riversAndTheWaterCycle",
        question:
            "Which sentence best describes rivers and the water cycle?",
        stage: "recognise",
        options: [
            "Rivers move water as part of Earth's continuous water cycle",
            "Rivers are separate from the water cycle",
            "Rivers create all water",
            "Rivers never change"
        ],

        explanation:
            "Rivers are an important part of how water moves around Earth.",

        difficulty: 2,
        correctAnswer: "Rivers move water as part of Earth's continuous water cycle",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "rivers", "water-cycle"]
    }

    ]

};


export default riversAndTheWaterCycle;

export {

    riversAndTheWaterCycle

};
