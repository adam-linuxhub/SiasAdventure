import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  MENTAL SUBTRACTION
==================================================*/

const mentalSubtraction: SkillContent = {
    skillId: "mental-subtraction",

    title: "Mental Subtraction",

    description: "Subtract numbers mentally using efficient Year 3 strategies.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ms-001",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 9 - 4?",

            hint: "Count backwards 4 from 9.",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "5",

            explanation:
                "9 - 4 = 5."
        },

        {
            id: "ms-002",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 15 - 3?",

            hint: "Count back 3 from 15.",

            options: [
                "11",
                "12",
                "13",
                "14"
            ],

            correctAnswer: "12",

            explanation:
                "15 - 3 = 12."
        },

        {
            id: "ms-003",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 20 - 7?",

            hint: "Count backwards 7 from 20.",

            options: [
                "12",
                "13",
                "14",
                "15"
            ],

            correctAnswer: "13",

            explanation:
                "20 - 7 = 13."
        },

        {
            id: "ms-004",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 34 - 4?",

            hint: "Subtract 4 from the ones digit.",

            options: [
                "28",
                "29",
                "30",
                "31"
            ],

            correctAnswer: "30",

            explanation:
                "34 - 4 = 30."
        },

        {
            id: "ms-005",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 42 - 8?",

            hint: "Count backwards 8 from 42.",

            options: [
                "33",
                "34",
                "35",
                "36"
            ],

            correctAnswer: "34",

            explanation:
                "42 - 8 = 34."
        },

        {
            id: "ms-006",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 50 - 20?",

            hint: "Take away two tens.",

            options: [
                "20",
                "30",
                "40",
                "60"
            ],

            correctAnswer: "30",

            explanation:
                "50 - 20 = 30."
        },

        {
            id: "ms-007",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 67 - 10?",

            hint: "Subtract one ten.",

            options: [
                "47",
                "57",
                "67",
                "77"
            ],

            correctAnswer: "57",

            explanation:
                "67 - 10 = 57."
        },

        {
            id: "ms-008",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 80 - 30?",

            hint: "Take away three tens from eight tens.",

            options: [
                "40",
                "50",
                "60",
                "70"
            ],

            correctAnswer: "50",

            explanation:
                "80 - 30 = 50."
        },

        {
            id: "ms-009",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 56 - 6?",

            hint: "Subtract 6 from the ones digit.",

            options: [
                "49",
                "50",
                "51",
                "52"
            ],

            correctAnswer: "50",

            explanation:
                "56 - 6 = 50."
        },

        {
            id: "ms-010",
            skillId: "mental-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 90 - 40?",

            hint: "Take away four tens.",

            options: [
                "40",
                "50",
                "60",
                "70"
            ],

            correctAnswer: "50",

            explanation:
                "90 - 40 = 50."
        },
                {
            id: "ms-011",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 32 - 7?",

            hint: "Subtract 2 first to reach 30, then subtract the remaining 5.",

            options: [
                "24",
                "25",
                "26",
                "27"
            ],

            correctAnswer: "25",

            explanation:
                "32 - 2 = 30, then 30 - 5 = 25. So 32 - 7 = 25."
        },

        {
            id: "ms-012",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 45 - 8?",

            hint: "Subtract 5 to reach 40, then subtract the remaining 3.",

            options: [
                "36",
                "37",
                "38",
                "39"
            ],

            correctAnswer: "37",

            explanation:
                "45 - 5 = 40, then 40 - 3 = 37."
        },

        {
            id: "ms-013",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 63 - 6?",

            hint: "Count backwards 6 from 63.",

            options: [
                "56",
                "57",
                "58",
                "59"
            ],

            correctAnswer: "57",

            explanation:
                "63 - 6 = 57."
        },

        {
            id: "ms-014",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 71 - 9?",

            hint: "Subtract 1 to reach 70, then subtract the remaining 8.",

            options: [
                "61",
                "62",
                "63",
                "64"
            ],

            correctAnswer: "62",

            explanation:
                "71 - 1 = 70, then 70 - 8 = 62."
        },

        {
            id: "ms-015",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 54 - 17?",

            hint: "Subtract 10 first, then subtract 7.",

            options: [
                "36",
                "37",
                "38",
                "39"
            ],

            correctAnswer: "37",

            explanation:
                "54 - 10 = 44, and 44 - 7 = 37."
        },

        {
            id: "ms-016",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 82 - 19?",

            hint: "Subtract 20, then add 1 back.",

            options: [
                "61",
                "62",
                "63",
                "64"
            ],

            correctAnswer: "63",

            explanation:
                "82 - 20 = 62. Adding 1 back gives 63, so 82 - 19 = 63."
        },

        {
            id: "ms-017",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 76 - 24?",

            hint: "Subtract 20 first, then subtract 4.",

            options: [
                "50",
                "51",
                "52",
                "53"
            ],

            correctAnswer: "52",

            explanation:
                "76 - 20 = 56, and 56 - 4 = 52."
        },

        {
            id: "ms-018",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 91 - 26?",

            hint: "Subtract 20, then subtract 6.",

            options: [
                "64",
                "65",
                "66",
                "67"
            ],

            correctAnswer: "65",

            explanation:
                "91 - 20 = 71, and 71 - 6 = 65."
        },

        {
            id: "ms-019",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 68 - 29?",

            hint: "Subtract 30, then add 1 back.",

            options: [
                "38",
                "39",
                "40",
                "41"
            ],

            correctAnswer: "39",

            explanation:
                "68 - 30 = 38. Adding 1 back gives 39."
        },

        {
            id: "ms-020",
            skillId: "mental-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 52 points and spends 18 points. How many points does she have left?",

            hint: "Subtract 20, then add 2 back.",

            options: [
                "32",
                "33",
                "34",
                "35"
            ],

            correctAnswer: "34",

            explanation:
                "52 - 20 = 32. Adding 2 back gives 34, so Sia has 34 points left."
        },
                {
            id: "ms-021",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 74 - 18?",

            hint: "Subtract 20, then add 2 back.",

            options: [
                "54",
                "55",
                "56",
                "57"
            ],

            correctAnswer: "56",

            explanation:
                "74 - 20 = 54. Adding 2 back gives 56, so 74 - 18 = 56."
        },

        {
            id: "ms-022",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 93 - 27?",

            hint: "Subtract 30, then add 3 back.",

            options: [
                "64",
                "65",
                "66",
                "67"
            ],

            correctAnswer: "66",

            explanation:
                "93 - 30 = 63. Adding 3 back gives 66."
        },

        {
            id: "ms-023",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 105 - 18?",

            hint: "Subtract 20, then add 2 back.",

            options: [
                "85",
                "86",
                "87",
                "88"
            ],

            correctAnswer: "87",

            explanation:
                "105 - 20 = 85. Adding 2 back gives 87."
        },

        {
            id: "ms-024",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 132 - 30?",

            hint: "Subtract three tens.",

            options: [
                "100",
                "102",
                "104",
                "106"
            ],

            correctAnswer: "102",

            explanation:
                "132 - 30 = 102."
        },

        {
            id: "ms-025",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 121 - 19?",

            hint: "Subtract 20, then add 1 back.",

            options: [
                "101",
                "102",
                "103",
                "104"
            ],

            correctAnswer: "102",

            explanation:
                "121 - 20 = 101. Adding 1 back gives 102."
        },

        {
            id: "ms-026",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "A shop has 95 apples and sells 28. How many apples remain?",

            hint: "Subtract 30, then add 2 back.",

            options: [
                "66",
                "67",
                "68",
                "69"
            ],

            correctAnswer: "67",

            explanation:
                "95 - 30 = 65. Adding 2 back gives 67, so 67 apples remain."
        },

        {
            id: "ms-027",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "Sia has 120 points and loses 35 points. How many points does she have left?",

            hint: "Subtract 30 first, then subtract 5.",

            options: [
                "84",
                "85",
                "86",
                "87"
            ],

            correctAnswer: "85",

            explanation:
                "120 - 30 = 90, and 90 - 5 = 85."
        },

        {
            id: "ms-028",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "A library has 150 books. 47 are borrowed. How many books are still there?",

            hint: "Subtract 50, then add 3 back.",

            options: [
                "102",
                "103",
                "104",
                "105"
            ],

            correctAnswer: "103",

            explanation:
                "150 - 50 = 100. Adding 3 back gives 103, so 103 books remain."
        },

        {
            id: "ms-029",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "Which calculation has the same answer as 72 - 19?",

            hint: "Use a nearby multiple of 10 to make the subtraction easier.",

            options: [
                "70 - 17",
                "71 - 18",
                "73 - 20",
                "75 - 20"
            ],

            correctAnswer: "70 - 17",

            explanation:
                "72 - 19 = 53. Also, 70 - 17 = 53, so they have the same answer."
        },

        {
            id: "ms-030",
            skillId: "mental-subtraction",
            stage: "master",
            difficulty: 3,

            question: "A game gives Sia 100 points. She uses 28 points and then uses another 17. How many points does she have left?",

            hint: "First find the total number of points used, then subtract it from 100.",

            options: [
                "54",
                "55",
                "56",
                "57"
            ],

            correctAnswer: "55",

            explanation:
                "Sia uses 28 + 17 = 45 points. Then 100 - 45 = 55, so she has 55 points left."
        }

    ]
};

export default mentalSubtraction;

export {
    mentalSubtraction
};