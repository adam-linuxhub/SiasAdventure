import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const riverFeatures: SkillContent = {

    skillId: "riverFeatures",

    title: "River Features",

    description:
        "Learn about the different parts of a river, including waterfalls, meanders, erosion and deposition.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-rf-001",

        question:
            "What are the three main stages of a river?",

        options: [
            "Upper course, middle course and lower course",
            "Beginning, top and bottom",
            "Mountain, valley and sea",
            "Fast, slow and stopped"
        ],

        answer: 0,

        explanation:
            "Rivers are often described as having an upper, middle and lower course.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-002",

        question:
            "Where is the upper course of a river found?",

        options: [
            "Near the source in higher land",
            "Near the sea",
            "At the river mouth",
            "In a city only"
        ],

        answer: 0,

        explanation:
            "The upper course is near where the river begins.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-003",

        question:
            "What is the river usually like in the upper course?",

        options: [
            "Narrow and fast flowing",
            "Very wide and slow",
            "Completely still",
            "Always underground"
        ],

        answer: 0,

        explanation:
            "Upper courses are often steep, narrow and fast flowing.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-004",

        question:
            "What is a waterfall?",

        options: [
            "Water falling over a steep drop",
            "A river drying up",
            "A river changing colour",
            "A flooded field"
        ],

        answer: 0,

        explanation:
            "Waterfalls form where water flows over a steep drop.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-005",

        question:
            "What causes erosion?",

        options: [
            "Moving water wearing away rock and soil",
            "Plants growing",
            "Sunlight only",
            "Buildings being made"
        ],

        answer: 0,

        explanation:
            "Rivers can erode the land by carrying away material.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-006",

        question:
            "What happens during erosion?",

        options: [
            "Material is worn away and moved",
            "New mountains are created instantly",
            "Water disappears",
            "Rivers stop flowing"
        ],

        answer: 0,

        explanation:
            "Erosion is the process where land and rocks are worn away.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-007",

        question:
            "What is a meander?",

        options: [
            "A bend in a river",
            "The start of a river",
            "A waterfall",
            "A river bridge"
        ],

        answer: 0,

        explanation:
            "Meanders are curves or bends that develop in rivers.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-008",

        question:
            "Where are meanders commonly found?",

        options: [
            "In the middle and lower courses of rivers",
            "Only at river sources",
            "Inside mountains only",
            "Under the sea"
        ],

        answer: 0,

        explanation:
            "Meanders usually form as rivers become wider and slower.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-009",

        question:
            "What is deposition?",

        options: [
            "When a river drops material it is carrying",
            "When a river starts",
            "When water freezes",
            "When a river disappears"
        ],

        answer: 0,

        explanation:
            "Deposition happens when a river loses energy and drops sediment.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-010",

        question:
            "Where does deposition often happen?",

        options: [
            "Where the river slows down",
            "Only at the source",
            "On mountain tops",
            "Inside clouds"
        ],

        answer: 0,

        explanation:
            "Slow-moving water drops the sediment it carries.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-011",

        question:
            "What is the middle course of a river like?",

        options: [
            "Wider with more bends",
            "Always completely straight",
            "Only a small stream",
            "Without water"
        ],

        answer: 0,

        explanation:
            "The river becomes wider and develops more features in the middle course.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-012",

        question:
            "What is the lower course of a river like?",

        options: [
            "Wide and slower near the mouth",
            "Narrow and steep",
            "Always frozen",
            "Underground"
        ],

        answer: 0,

        explanation:
            "The lower course is where the river is widest before reaching its mouth.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-013",

        question:
            "What happens to a river as it travels downstream?",

        options: [
            "It usually becomes wider and deeper",
            "It becomes a mountain",
            "It stops immediately",
            "It loses all water"
        ],

        answer: 0,

        explanation:
            "Rivers usually become larger as more water joins them.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-014",

        question:
            "What is a valley?",

        options: [
            "Low land between hills or mountains",
            "A river source",
            "A type of cloud",
            "A bridge"
        ],

        answer: 0,

        explanation:
            "Rivers often flow through valleys.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-015",

        question:
            "How can rivers change landscapes?",

        options: [
            "By eroding and depositing material",
            "By stopping weather",
            "By creating buildings",
            "By removing gravity"
        ],

        answer: 0,

        explanation:
            "Rivers shape landscapes through erosion and deposition.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-016",

        question:
            "Why are rivers faster in the upper course?",

        options: [
            "They often flow down steep slopes",
            "They have no water",
            "They flow uphill",
            "They are wider"
        ],

        answer: 0,

        explanation:
            "Steeper slopes make water move faster.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-017",

        question:
            "What is an oxbow lake?",

        options: [
            "A curved lake formed from a cut-off meander",
            "A lake at a river source",
            "A frozen river",
            "A man-made road"
        ],

        answer: 0,

        explanation:
            "An oxbow lake forms when a meander becomes separated from the river.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-018",

        question:
            "Why do rivers have different features?",

        options: [
            "Water changes the land as it flows",
            "All rivers are identical",
            "People build every river",
            "Rivers never change"
        ],

        answer: 0,

        explanation:
            "Flowing water shapes rivers over time.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-019",

        question:
            "Which feature is found where a river ends?",

        options: [
            "The mouth",
            "The source",
            "A tributary",
            "A waterfall"
        ],

        answer: 0,

        explanation:
            "The mouth is where the river reaches another body of water.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-020",

        question:
            "Which sentence best describes a river's journey?",

        options: [
            "A river starts at its source, flows through the land and ends at its mouth",
            "A river starts at the sea and climbs mountains",
            "A river stays in one place",
            "A river only exists underground"
        ],

        answer: 0,

        explanation:
            "A river follows a journey from source to mouth.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "rivers"]
    }

    ]

};