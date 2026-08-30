import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  COUNTING IN FIFTIES
==================================================*/

const countingInFifties: SkillContent = {
    skillId: "counting-in-fifties",

    title: "Counting in Fifties",

    description: "Count forwards and backwards in fifties from different starting points.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "counting-fifties-001",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 50, 100, 150, 200, ___",

            hint: "Find the amount added each time.",

            options: [
                "225",
                "250",
                "300",
                "205"
            ],

            correctAnswer: "250",

            explanation:
                "The sequence increases by 50 each time, so 200 + 50 = 250."
        },

        {
            id: "counting-fifties-002",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 300, 350, 400, 450, ___",

            hint: "Each step is the same size.",

            options: [
                "475",
                "500",
                "550",
                "460"
            ],

            correctAnswer: "500",

            explanation:
                "The sequence increases by 50 each time, so 450 + 50 = 500."
        },

        {
            id: "counting-fifties-003",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 600, 550, 500, 450, ___",

            hint: "This time the numbers are getting smaller.",

            options: [
                "350",
                "400",
                "425",
                "500"
            ],

            correctAnswer: "400",

            explanation:
                "The sequence decreases by 50 each time, so 450 - 50 = 400."
        },

        {
            id: "counting-fifties-004",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 75, 125, 175, 225, ___",

            hint: "Count forwards by 50.",

            options: [
                "250",
                "275",
                "300",
                "325"
            ],

            correctAnswer: "275",

            explanation:
                "Adding 50 to 225 gives 275."
        },

        {
            id: "counting-fifties-005",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 425, 475, 525, 575, ___",

            hint: "Add the same amount each time.",

            options: [
                "600",
                "625",
                "650",
                "675"
            ],

            correctAnswer: "625",

            explanation:
                "The sequence increases by 50 each time, so 575 + 50 = 625."
        },

        {
            id: "counting-fifties-006",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 800, 750, 700, 650, ___",

            hint: "Count backwards in fifties.",

            options: [
                "550",
                "600",
                "625",
                "700"
            ],

            correctAnswer: "600",

            explanation:
                "The sequence decreases by 50 each time, so 650 - 50 = 600."
        },

        {
            id: "counting-fifties-007",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 125, 175, 225, 275, ___",

            hint: "Each number is 50 greater than the one before it.",

            options: [
                "300",
                "315",
                "325",
                "350"
            ],

            correctAnswer: "325",

            explanation:
                "The sequence increases by 50, so 275 + 50 = 325."
        },

        {
            id: "counting-fifties-008",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 950, 900, 850, 800, ___",

            hint: "Subtract 50 each time.",

            options: [
                "700",
                "725",
                "750",
                "775"
            ],

            correctAnswer: "750",

            explanation:
                "The sequence decreases by 50 each time, so 800 - 50 = 750."
        },

        {
            id: "counting-fifties-009",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 225, 275, 325, 375, ___",

            hint: "Look for the constant step between the numbers.",

            options: [
                "400",
                "425",
                "450",
                "475"
            ],

            correctAnswer: "425",

            explanation:
                "The sequence increases by 50 each time, so 375 + 50 = 425."
        },

        {
            id: "counting-fifties-010",
            skillId: "counting-in-fifties",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 700, 650, 600, 550, ___",

            hint: "The sequence is counting backwards by the same amount.",

            options: [
                "450",
                "475",
                "500",
                "525"
            ],

            correctAnswer: "500",

            explanation:
                "The sequence decreases by 50 each time, so 550 - 50 = 500."
        },
                {
            id: "counting-fifties-011",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 150, 200, ___, 300, 350",

            hint: "Find the same increase between each pair of numbers.",

            options: [
                "225",
                "250",
                "275",
                "290"
            ],

            correctAnswer: "250",

            explanation:
                "The sequence increases by 50 each time: 150, 200, 250, 300, 350."
        },

        {
            id: "counting-fifties-012",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 725, 675, ___, 575, 525",

            hint: "The sequence is counting backwards in fifties.",

            options: [
                "600",
                "625",
                "650",
                "700"
            ],

            correctAnswer: "625",

            explanation:
                "The sequence decreases by 50 each time: 725, 675, 625, 575, 525."
        },

        {
            id: "counting-fifties-013",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "Which number comes two steps after 275 when counting in fifties?",

            hint: "Add 50 twice.",

            options: [
                "325",
                "350",
                "375",
                "425"
            ],

            correctAnswer: "375",

            explanation:
                "One step after 275 is 325. Two steps after 275 is 375."
        },

        {
            id: "counting-fifties-014",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "Which number comes three steps before 650 when counting backwards in fifties?",

            hint: "Subtract 50 three times.",

            options: [
                "450",
                "500",
                "525",
                "550"
            ],

            correctAnswer: "500",

            explanation:
                "Starting at 650, the three steps backwards are 600, 550 and 500."
        },

        {
            id: "counting-fifties-015",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "Which number is missing? 325, 375, 425, ___, 525",

            hint: "Each number increases by the same amount.",

            options: [
                "450",
                "475",
                "500",
                "550"
            ],

            correctAnswer: "475",

            explanation:
                "The sequence increases by 50 each time, so 425 + 50 = 475."
        },

        {
            id: "counting-fifties-016",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "Which number is 150 more than 250?",

            hint: "Count forwards in fifties three times.",

            options: [
                "350",
                "375",
                "400",
                "450"
            ],

            correctAnswer: "400",

            explanation:
                "Three fifties make 150. Starting at 250, the sequence goes 300, 350, 400."
        },

        {
            id: "counting-fifties-017",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "Which number is 100 less than 475?",

            hint: "Count backwards in fifties twice.",

            options: [
                "325",
                "350",
                "375",
                "425"
            ],

            correctAnswer: "375",

            explanation:
                "Two fifties make 100. Starting at 475, subtracting 50 twice gives 375."
        },

        {
            id: "counting-fifties-018",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "Which sequence is counting backwards correctly in fifties?",

            hint: "Check that exactly 50 is subtracted each time.",

            options: [
                "600, 550, 500, 450",
                "600, 500, 400, 300",
                "600, 560, 520, 480",
                "600, 525, 450, 375"
            ],

            correctAnswer: "600, 550, 500, 450",

            explanation:
                "600 - 50 = 550, 550 - 50 = 500 and 500 - 50 = 450."
        },

        {
            id: "counting-fifties-019",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "Which number comes between 425 and 525 when counting in fifties?",

            hint: "Continue the sequence from 425.",

            options: [
                "450",
                "475",
                "500",
                "510"
            ],

            correctAnswer: "500",

            explanation:
                "Counting in fifties from 425 gives 475, then 525. There is no 500 in that sequence."
        },

        {
            id: "counting-fifties-020",
            skillId: "counting-in-fifties",
            stage: "understand",
            difficulty: 2,

            question: "A sequence starts at 175 and counts forwards in fifties. What is the fourth number?",

            hint: "Remember that 175 is the first number.",

            options: [
                "275",
                "300",
                "325",
                "350"
            ],

            correctAnswer: "325",

            explanation:
                "The sequence is 175, 225, 275, 325. Therefore, the fourth number is 325."
        },
                {
            id: "counting-fifties-021",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "A sequence starts at 125 and increases by 50 each time. What is the sixth number?",

            hint: "Write the sequence carefully, remembering that 125 is the first number.",

            options: [
                "325",
                "350",
                "375",
                "425"
            ],

            correctAnswer: "375",

            explanation:
                "The sequence is 125, 175, 225, 275, 325, 375. Therefore, the sixth number is 375."
        },

        {
            id: "counting-fifties-022",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "A sequence starts at 875 and decreases by 50 each time. What is the fifth number?",

            hint: "Count backwards in fifties, starting with 875 as the first number.",

            options: [
                "625",
                "675",
                "700",
                "725"
            ],

            correctAnswer: "675",

            explanation:
                "The sequence is 875, 825, 775, 725, 675. Therefore, the fifth number is 675."
        },

        {
            id: "counting-fifties-023",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "Which number is exactly 200 more than 325 when counting in fifties?",

            hint: "Two hundred is four fifties. Count forwards four times.",

            options: [
                "475",
                "500",
                "525",
                "550"
            ],

            correctAnswer: "525",

            explanation:
                "Four fifties make 200. Starting at 325, the sequence is 375, 425, 475, 525."
        },

        {
            id: "counting-fifties-024",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "Which number is exactly 150 less than 725 when counting in fifties?",

            hint: "One hundred and fifty is three fifties. Count backwards three times.",

            options: [
                "525",
                "550",
                "575",
                "600"
            ],

            correctAnswer: "575",

            explanation:
                "Three fifties make 150. Starting at 725, subtracting 50 three times gives 575."
        },

        {
            id: "counting-fifties-025",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "A number sequence is 225, 275, 325, 375, 425. Which number is three places before 425?",

            hint: "Move backwards through the sequence one step at a time.",

            options: [
                "225",
                "275",
                "325",
                "375"
            ],

            correctAnswer: "275",

            explanation:
                "One place before 425 is 375, two places before is 325, and three places before is 275."
        },

        {
            id: "counting-fifties-026",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "Which number belongs in the box? 175, 225, □, 325, 375",

            hint: "Find the constant step between the numbers.",

            options: [
                "250",
                "260",
                "275",
                "300"
            ],

            correctAnswer: "275",

            explanation:
                "The sequence increases by 50 each time, so 225 + 50 = 275."
        },

        {
            id: "counting-fifties-027",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "A sequence counts backwards in fifties. Which number comes immediately before 500?",

            hint: "If the sequence is going backwards, add 50 to find the previous number.",

            options: [
                "450",
                "525",
                "550",
                "600"
            ],

            correctAnswer: "550",

            explanation:
                "The sequence is decreasing by 50, so the number immediately before 500 is 550."
        },

        {
            id: "counting-fifties-028",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "A sequence counts forwards in fifties. Which number comes immediately before 675?",

            hint: "Take 50 away from 675 to find the previous number.",

            options: [
                "575",
                "600",
                "625",
                "650"
            ],

            correctAnswer: "625",

            explanation:
                "The sequence increases by 50, so the number immediately before 675 is 625."
        },

        {
            id: "counting-fifties-029",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "A sequence starts at 250 and counts forwards in fifties. Which number is not in the sequence?",

            hint: "Write the sequence from 250 and check each choice.",

            options: [
                "300",
                "350",
                "425",
                "450"
            ],

            correctAnswer: "425",

            explanation:
                "The sequence is 250, 300, 350, 400, 450. Therefore, 425 is not in the sequence."
        },

        {
            id: "counting-fifties-030",
            skillId: "counting-in-fifties",
            stage: "master",
            difficulty: 3,

            question: "A sequence starts at 950 and counts backwards in fifties. Which number is the seventh number?",

            hint: "Write six steps backwards from 950, remembering that 950 is the first number.",

            options: [
                "650",
                "675",
                "700",
                "750"
            ],

            correctAnswer: "700",

            explanation:
                "The sequence is 950, 900, 850, 800, 750, 700, 650. Therefore, the seventh number is 650."
        }

    ]
};

export default countingInFifties;

export {
    countingInFifties
};