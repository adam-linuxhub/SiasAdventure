import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";


export const hundredsTensOnes: SkillContent = {
    skillId: "hundreds-tens-ones",

    title: "Hundreds, Tens and Ones",

    description: "Recognise the value of digits in three-digit numbers.",
    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hto-001",
        skillId: "hundreds-tens-ones",
        stage: "recognise",

        question: "What is the value of the digit 4 in 345?",

        options: [
            "4",
            "40",
            "400",
            "345"
        ],

        correctAnswer: "40",

        explanation:
            "The 4 is in the tens column, so its value is 40."
    },

    {
        id: "hto-002",
        skillId: "hundreds-tens-ones",
        stage: "recognise",

        question: "What is the value of the digit 7 in 781?",

        options: [
            "7",
            "70",
            "700",
            "781"
        ],

        correctAnswer: "700",

        explanation:
            "The 7 is in the hundreds column, so its value is 700."
    },

    {
        id: "hto-003",
        skillId: "hundreds-tens-ones",
        stage: "recognise",

        question: "What is the value of the digit 9 in 529?",

        options: [
            "9",
            "90",
            "900",
            "529"
        ],

        correctAnswer: "9",

        explanation:
            "The 9 is in the ones column, so its value is 9."
    },

    {
    id: "hto-004",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "What is the value of the digit 6 in 264?",

    options: [
        "6",
        "60",
        "600",
        "264"
    ],

    correctAnswer: "60",

    explanation:
        "The 6 is in the tens column, so its value is 60."
},

{
    id: "hto-005",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "Which digit is worth 500 in the number 583?",

    options: [
        "5",
        "8",
        "3",
        "0"
    ],

    correctAnswer: "5",

    explanation:
        "The 5 is in the hundreds column, so it represents 500."
},

{
    id: "hto-006",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "Which digit is worth 2 in the number 742?",

    options: [
        "7",
        "4",
        "2",
        "0"
    ],

    correctAnswer: "2",

    explanation:
        "The 2 is in the ones column, so its value is 2."
    }

    ]
};