import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  MENTAL ADDITION
==================================================*/

const mentalAddition: SkillContent = {
    skillId: "mental-addition",

    title: "Mental Addition",

    description: "Add numbers mentally using efficient Year 3 strategies.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ma-001",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 7 + 5?",

            hint: "Start at 7 and count on 5.",

            options: [
                "11",
                "12",
                "13",
                "14"
            ],

            correctAnswer: "12",

            explanation:
                "7 + 5 = 12."
        },

        {
            id: "ma-002",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 14 + 3?",

            hint: "Count forward 3 from 14.",

            options: [
                "16",
                "17",
                "18",
                "19"
            ],

            correctAnswer: "17",

            explanation:
                "14 + 3 = 17."
        },

        {
            id: "ma-003",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 20 + 8?",

            hint: "Adding 8 to 20 gives the next number in the twenties.",

            options: [
                "26",
                "27",
                "28",
                "29"
            ],

            correctAnswer: "28",

            explanation:
                "20 + 8 = 28."
        },

        {
            id: "ma-004",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 32 + 6?",

            hint: "Add 6 to the ones digit.",

            options: [
                "36",
                "37",
                "38",
                "39"
            ],

            correctAnswer: "38",

            explanation:
                "32 + 6 = 38."
        },

        {
            id: "ma-005",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 41 + 7?",

            hint: "Count on 7 from 41.",

            options: [
                "47",
                "48",
                "49",
                "50"
            ],

            correctAnswer: "48",

            explanation:
                "41 + 7 = 48."
        },

        {
            id: "ma-006",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 25 + 10?",

            hint: "Adding 10 changes the tens digit.",

            options: [
                "30",
                "35",
                "40",
                "45"
            ],

            correctAnswer: "35",

            explanation:
                "25 + 10 = 35."
        },

        {
            id: "ma-007",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 36 + 20?",

            hint: "Add two tens to 36.",

            options: [
                "46",
                "56",
                "66",
                "76"
            ],

            correctAnswer: "56",

            explanation:
                "36 + 20 = 56."
        },

        {
            id: "ma-008",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 50 + 9?",

            hint: "Count 9 more than 50.",

            options: [
                "58",
                "59",
                "60",
                "61"
            ],

            correctAnswer: "59",

            explanation:
                "50 + 9 = 59."
        },

        {
            id: "ma-009",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 43 + 5?",

            hint: "Add 5 to the ones digit.",

            options: [
                "47",
                "48",
                "49",
                "50"
            ],

            correctAnswer: "48",

            explanation:
                "43 + 5 = 48."
        },

        {
            id: "ma-010",
            skillId: "mental-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 60 + 30?",

            hint: "Add three tens to six tens.",

            options: [
                "80",
                "90",
                "100",
                "110"
            ],

            correctAnswer: "90",

            explanation:
                "60 + 30 = 90."
        },
                {
            id: "ma-011",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 27 + 8?",

            hint: "Add 3 to reach 30, then add the remaining 5.",

            options: [
                "34",
                "35",
                "36",
                "37"
            ],

            correctAnswer: "35",

            explanation:
                "27 + 3 = 30, then 30 + 5 = 35. So 27 + 8 = 35."
        },

        {
            id: "ma-012",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 46 + 7?",

            hint: "Add 4 to reach 50, then add the remaining 3.",

            options: [
                "52",
                "53",
                "54",
                "55"
            ],

            correctAnswer: "53",

            explanation:
                "46 + 4 = 50, then 50 + 3 = 53. Therefore, 46 + 7 = 53."
        },

        {
            id: "ma-013",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 38 + 5?",

            hint: "Add 2 to make 40, then add the remaining 3.",

            options: [
                "42",
                "43",
                "44",
                "45"
            ],

            correctAnswer: "43",

            explanation:
                "38 + 2 = 40 and 40 + 3 = 43, so 38 + 5 = 43."
        },

        {
            id: "ma-014",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 54 + 9?",

            hint: "Add 6 to reach 60, then add the remaining 3.",

            options: [
                "61",
                "62",
                "63",
                "64"
            ],

            correctAnswer: "63",

            explanation:
                "54 + 6 = 60 and 60 + 3 = 63. Therefore, 54 + 9 = 63."
        },

        {
            id: "ma-015",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 35 + 16?",

            hint: "Add 10 first, then add the remaining 6.",

            options: [
                "49",
                "50",
                "51",
                "52"
            ],

            correctAnswer: "51",

            explanation:
                "35 + 10 = 45, and 45 + 6 = 51."
        },

        {
            id: "ma-016",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 42 + 19?",

            hint: "Add 20, then take away 1.",

            options: [
                "60",
                "61",
                "62",
                "63"
            ],

            correctAnswer: "61",

            explanation:
                "42 + 20 = 62. Taking away 1 gives 61, so 42 + 19 = 61."
        },

        {
            id: "ma-017",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 28 + 24?",

            hint: "Add the tens first, then the ones.",

            options: [
                "50",
                "51",
                "52",
                "53"
            ],

            correctAnswer: "52",

            explanation:
                "28 + 20 = 48, then 48 + 4 = 52."
        },

        {
            id: "ma-018",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 37 + 25?",

            hint: "Add 20 first, then add 5.",

            options: [
                "60",
                "61",
                "62",
                "63"
            ],

            correctAnswer: "62",

            explanation:
                "37 + 20 = 57, and 57 + 5 = 62."
        },

        {
            id: "ma-019",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 49 + 12?",

            hint: "Add 1 to make 50, then add the remaining 11.",

            options: [
                "60",
                "61",
                "62",
                "63"
            ],

            correctAnswer: "61",

            explanation:
                "49 + 1 = 50, then 50 + 11 = 61."
        },

        {
            id: "ma-020",
            skillId: "mental-addition",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 26 points and earns another 17 points. How many points does she have now?",

            hint: "Add 10 first, then add 7.",

            options: [
                "41",
                "42",
                "43",
                "44"
            ],

            correctAnswer: "43",

            explanation:
                "26 + 10 = 36, and 36 + 7 = 43. Sia has 43 points."
        },
                {
            id: "ma-021",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 67 + 18?",

            hint: "Add 3 to reach 70, then add the remaining 15.",

            options: [
                "84",
                "85",
                "86",
                "87"
            ],

            correctAnswer: "85",

            explanation:
                "67 + 3 = 70, then 70 + 15 = 85. So 67 + 18 = 85."
        },

        {
            id: "ma-022",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 58 + 27?",

            hint: "Add 2 to reach 60, then add the remaining 25.",

            options: [
                "84",
                "85",
                "86",
                "87"
            ],

            correctAnswer: "85",

            explanation:
                "58 + 2 = 60, and 60 + 25 = 85."
        },

        {
            id: "ma-023",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 76 + 19?",

            hint: "Add 20, then take away 1.",

            options: [
                "94",
                "95",
                "96",
                "97"
            ],

            correctAnswer: "95",

            explanation:
                "76 + 20 = 96. Taking away 1 gives 95."
        },

        {
            id: "ma-024",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 48 + 35?",

            hint: "Add 30 first, then add 5.",

            options: [
                "81",
                "82",
                "83",
                "84"
            ],

            correctAnswer: "83",

            explanation:
                "48 + 30 = 78, and 78 + 5 = 83."
        },

        {
            id: "ma-025",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 125 + 40?",

            hint: "Add four tens to 125.",

            options: [
                "155",
                "160",
                "165",
                "170"
            ],

            correctAnswer: "165",

            explanation:
                "125 + 40 = 165."
        },

        {
            id: "ma-026",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "A shop has 48 pencils and receives 27 more. How many pencils are there altogether?",

            hint: "Add 2 to 48 to make 50, then add the remaining 25.",

            options: [
                "74",
                "75",
                "76",
                "77"
            ],

            correctAnswer: "75",

            explanation:
                "48 + 2 = 50, then 50 + 25 = 75. There are 75 pencils altogether."
        },

        {
            id: "ma-027",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "Sia scores 36 points in one round and 29 points in another. What is her total score?",

            hint: "Add 1 to 29 to make 30, then add 36.",

            options: [
                "64",
                "65",
                "66",
                "67"
            ],

            correctAnswer: "65",

            explanation:
                "29 + 1 = 30, and 36 + 30 = 66. Then subtract the extra 1: 65."
        },

        {
            id: "ma-028",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "A library has 125 books on one shelf and 38 on another. How many books are there altogether?",

            hint: "Add 30 to 125, then add the remaining 8.",

            options: [
                "162",
                "163",
                "164",
                "165"
            ],

            correctAnswer: "163",

            explanation:
                "125 + 30 = 155, and 155 + 8 = 163."
        },

        {
            id: "ma-029",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "Which calculation has the same answer as 47 + 18?",

            hint: "Look for a calculation that uses a useful adjustment.",

            options: [
                "45 + 20",
                "46 + 20",
                "48 + 18",
                "50 + 18"
            ],

            correctAnswer: "45 + 20",

            explanation:
                "47 + 18 = 65. Also, 45 + 20 = 65, so the two calculations have the same answer."
        },

        {
            id: "ma-030",
            skillId: "mental-addition",
            stage: "master",
            difficulty: 3,

            question: "A game gives Sia 28 points for one challenge, 35 for another and 17 for a final challenge. What is her total score?",

            hint: "Look for numbers you can combine easily before adding the final amount.",

            options: [
                "79",
                "80",
                "81",
                "82"
            ],

            correctAnswer: "80",

            explanation:
                "28 + 35 = 63, and 63 + 17 = 80. Sia scores 80 points altogether."
        }

    ]
};

export default mentalAddition;

export {
    mentalAddition
};