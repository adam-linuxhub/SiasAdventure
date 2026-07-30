import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const riverFeatures: SkillContent = {

    skillId: "riverFeatures",

    title: "River Features",

    description:
        "Learn about the different parts of a river, including waterfalls, meanders, erosion and deposition.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-rf-001",
        skillId: "riverFeatures",
        question:
            "What are the three main stages of a river?",
        stage: "recognise",
        options: [
            "Upper course, middle course and lower course",
            "Beginning, top and bottom",
            "Mountain, valley and sea",
            "Fast, slow and stopped"
        ],

        explanation:
            "Rivers are often described as having an upper, middle and lower course.",

        difficulty: 1,
        correctAnswer: "Upper course, middle course and lower course",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-002",
        skillId: "riverFeatures",
        question:
            "Where is the upper course of a river found?",
        stage: "recognise",
        options: [
            "Near the source in higher land",
            "Near the sea",
            "At the river mouth",
            "In a city only"
        ],

        explanation:
            "The upper course is near where the river begins.",

        difficulty: 1,
        correctAnswer: "Near the source in higher land",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-003",
        skillId: "riverFeatures",
        question:
            "What is the river usually like in the upper course?",
        stage: "recognise",
        options: [
            "Narrow and fast flowing",
            "Very wide and slow",
            "Completely still",
            "Always underground"
        ],

        explanation:
            "Upper courses are often steep, narrow and fast flowing.",

        difficulty: 1,
        correctAnswer: "Narrow and fast flowing",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-004",
        skillId: "riverFeatures",
        question:
            "What is a waterfall?",
        stage: "recognise",
        options: [
            "Water falling over a steep drop",
            "A river drying up",
            "A river changing colour",
            "A flooded field"
        ],

        explanation:
            "Waterfalls form where water flows over a steep drop.",

        difficulty: 1,
        correctAnswer: "Water falling over a steep drop",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-005",
        skillId: "riverFeatures",
        question:
            "What causes erosion?",
        stage: "recognise",
        options: [
            "Moving water wearing away rock and soil",
            "Plants growing",
            "Sunlight only",
            "Buildings being made"
        ],

        explanation:
            "Rivers can erode the land by carrying away material.",

        difficulty: 2,
        correctAnswer: "Moving water wearing away rock and soil",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-006",
        skillId: "riverFeatures",
        question:
            "What happens during erosion?",
        stage: "recognise",
        options: [
            "Material is worn away and moved",
            "New mountains are created instantly",
            "Water disappears",
            "Rivers stop flowing"
        ],

        explanation:
            "Erosion is the process where land and rocks are worn away.",

        difficulty: 2,
        correctAnswer: "Material is worn away and moved",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-007",
        skillId: "riverFeatures",
        question:
            "What is a meander?",
        stage: "recognise",
        options: [
            "A bend in a river",
            "The start of a river",
            "A waterfall",
            "A river bridge"
        ],

        explanation:
            "Meanders are curves or bends that develop in rivers.",

        difficulty: 1,
        correctAnswer: "A bend in a river",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-008",
        skillId: "riverFeatures",
        question:
            "Where are meanders commonly found?",
        stage: "recognise",
        options: [
            "In the middle and lower courses of rivers",
            "Only at river sources",
            "Inside mountains only",
            "Under the sea"
        ],

        explanation:
            "Meanders usually form as rivers become wider and slower.",

        difficulty: 2,
        correctAnswer: "In the middle and lower courses of rivers",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-009",
        skillId: "riverFeatures",
        question:
            "What is deposition?",
        stage: "recognise",
        options: [
            "When a river drops material it is carrying",
            "When a river starts",
            "When water freezes",
            "When a river disappears"
        ],

        explanation:
            "Deposition happens when a river loses energy and drops sediment.",

        difficulty: 2,
        correctAnswer: "When a river drops material it is carrying",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-010",
        skillId: "riverFeatures",
        question:
            "Where does deposition often happen?",
        stage: "recognise",
        options: [
            "Where the river slows down",
            "Only at the source",
            "On mountain tops",
            "Inside clouds"
        ],

        explanation:
            "Slow-moving water drops the sediment it carries.",

        difficulty: 2,
        correctAnswer: "Where the river slows down",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-011",
        skillId: "riverFeatures",
        question:
            "What is the middle course of a river like?",
        stage: "recognise",
        options: [
            "Wider with more bends",
            "Always completely straight",
            "Only a small stream",
            "Without water"
        ],

        explanation:
            "The river becomes wider and develops more features in the middle course.",

        difficulty: 2,
        correctAnswer: "Wider with more bends",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-012",
        skillId: "riverFeatures",
        question:
            "What is the lower course of a river like?",
        stage: "recognise",
        options: [
            "Wide and slower near the mouth",
            "Narrow and steep",
            "Always frozen",
            "Underground"
        ],

        explanation:
            "The lower course is where the river is widest before reaching its mouth.",

        difficulty: 1,
        correctAnswer: "Wide and slower near the mouth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-013",
        skillId: "riverFeatures",
        question:
            "What happens to a river as it travels downstream?",
        stage: "recognise",
        options: [
            "It usually becomes wider and deeper",
            "It becomes a mountain",
            "It stops immediately",
            "It loses all water"
        ],

        explanation:
            "Rivers usually become larger as more water joins them.",

        difficulty: 2,
        correctAnswer: "It usually becomes wider and deeper",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-014",
        skillId: "riverFeatures",
        question:
            "What is a valley?",
        stage: "recognise",
        options: [
            "Low land between hills or mountains",
            "A river source",
            "A type of cloud",
            "A bridge"
        ],

        explanation:
            "Rivers often flow through valleys.",

        difficulty: 1,
        correctAnswer: "Low land between hills or mountains",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-015",
        skillId: "riverFeatures",
        question:
            "How can rivers change landscapes?",
        stage: "recognise",
        options: [
            "By eroding and depositing material",
            "By stopping weather",
            "By creating buildings",
            "By removing gravity"
        ],

        explanation:
            "Rivers shape landscapes through erosion and deposition.",

        difficulty: 2,
        correctAnswer: "By eroding and depositing material",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-016",
        skillId: "riverFeatures",
        question:
            "Why are rivers faster in the upper course?",
        stage: "recognise",
        options: [
            "They often flow down steep slopes",
            "They have no water",
            "They flow uphill",
            "They are wider"
        ],

        explanation:
            "Steeper slopes make water move faster.",

        difficulty: 2,
        correctAnswer: "They often flow down steep slopes",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-017",
        skillId: "riverFeatures",
        question:
            "What is an oxbow lake?",
        stage: "recognise",
        options: [
            "A curved lake formed from a cut-off meander",
            "A lake at a river source",
            "A frozen river",
            "A man-made road"
        ],

        explanation:
            "An oxbow lake forms when a meander becomes separated from the river.",

        difficulty: 2,
        correctAnswer: "A curved lake formed from a cut-off meander",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-018",
        skillId: "riverFeatures",
        question:
            "Why do rivers have different features?",
        stage: "recognise",
        options: [
            "Water changes the land as it flows",
            "All rivers are identical",
            "People build every river",
            "Rivers never change"
        ],

        explanation:
            "Flowing water shapes rivers over time.",

        difficulty: 2,
        correctAnswer: "Water changes the land as it flows",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-019",
        skillId: "riverFeatures",
        question:
            "Which feature is found where a river ends?",
        stage: "recognise",
        options: [
            "The mouth",
            "The source",
            "A tributary",
            "A waterfall"
        ],

        explanation:
            "The mouth is where the river reaches another body of water.",

        difficulty: 1,
        correctAnswer: "The mouth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "rivers"]
    },

    {
        id: "geo-rf-020",
        skillId: "riverFeatures",
        question:
            "Which sentence best describes a river's journey?",
        stage: "recognise",
        options: [
            "A river starts at its source, flows through the land and ends at its mouth",
            "A river starts at the sea and climbs mountains",
            "A river stays in one place",
            "A river only exists underground"
        ],

        explanation:
            "A river follows a journey from source to mouth.",

        difficulty: 2,
        correctAnswer: "A river starts at its source, flows through the land and ends at its mouth",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "rivers"]
    }

    ]

};