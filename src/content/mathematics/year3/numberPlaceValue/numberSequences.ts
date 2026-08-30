import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  NUMBER SEQUENCES
==================================================*/

const numberSequences: SkillContent = {
    skillId: "number-sequences",

    title: "Number Sequences",

    description: "Recognise and continue number sequences using consistent step sizes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ns-001",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 100, 200, 300, 400, ___",

            hint: "Look at how much the number increases each time.",

            options: [
                "450",
                "500",
                "600",
                "410"
            ],

            correctAnswer: "500",

            explanation:
                "The sequence increases by 100 each time: 100, 200, 300, 400, 500."
        },

        {
            id: "ns-002",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 25, 35, 45, 55, ___",

            hint: "Find the amount added each time.",

            options: [
                "60",
                "65",
                "70",
                "75"
            ],

            correctAnswer: "65",

            explanation:
                "The sequence increases by 10 each time, so 55 + 10 = 65."
        },

        {
            id: "ns-003",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 120, 130, 140, 150, ___",

            hint: "Compare two neighbouring numbers to find the step.",

            options: [
                "160",
                "155",
                "170",
                "165"
            ],

            correctAnswer: "160",

            explanation:
                "The sequence increases by 10 each time, so the next number after 150 is 160."
        },

        {
            id: "ns-004",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 7, 14, 21, 28, ___",

            hint: "Check how much is added from one number to the next.",

            options: [
                "34",
                "35",
                "36",
                "42"
            ],

            correctAnswer: "35",

            explanation:
                "The sequence increases by 7 each time: 7, 14, 21, 28, 35."
        },

        {
            id: "ns-005",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 500, 450, 400, 350, ___",

            hint: "This sequence is getting smaller. Find the amount taken away.",

            options: [
                "250",
                "275",
                "300",
                "325"
            ],

            correctAnswer: "300",

            explanation:
                "The sequence decreases by 50 each time, so 350 - 50 = 300."
        },

        {
            id: "ns-006",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 3, 11, 19, 27, ___",

            hint: "Find the difference between two neighbouring numbers.",

            options: [
                "34",
                "35",
                "36",
                "37"
            ],

            correctAnswer: "35",

            explanation:
                "Each number increases by 8, so 27 + 8 = 35."
        },

        {
            id: "ns-007",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 900, 800, 700, 600, ___",

            hint: "How much is taken away each time?",

            options: [
                "400",
                "450",
                "500",
                "550"
            ],

            correctAnswer: "500",

            explanation:
                "The sequence decreases by 100 each time, so 600 - 100 = 500."
        },

        {
            id: "ns-008",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 40, 80, 120, 160, ___",

            hint: "Find the same increase between each pair of numbers.",

            options: [
                "180",
                "200",
                "220",
                "240"
            ],

            correctAnswer: "200",

            explanation:
                "The sequence increases by 40 each time, so 160 + 40 = 200."
        },

        {
            id: "ns-009",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 275, 285, 295, 305, ___",

            hint: "Look carefully at the change in the tens place.",

            options: [
                "310",
                "315",
                "320",
                "325"
            ],

            correctAnswer: "315",

            explanation:
                "The sequence increases by 10 each time, so 305 + 10 = 315."
        },

        {
            id: "ns-010",
            skillId: "number-sequences",
            stage: "recognise",
            difficulty: 1,

            question: "What number comes next? 64, 72, 80, 88, ___",

            hint: "Find the difference between 64 and 72.",

            options: [
                "94",
                "96",
                "98",
                "100"
            ],

            correctAnswer: "96",

            explanation:
                "Each number increases by 8, so 88 + 8 = 96."
        },
                {
            id: "ns-011",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 150, 175, ___, 225, 250",

            hint: "Find the amount added between the numbers you can see.",

            options: [
                "195",
                "200",
                "205",
                "210"
            ],

            correctAnswer: "200",

            explanation:
                "The sequence increases by 25 each time: 150, 175, 200, 225, 250."
        },

        {
            id: "ns-012",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 480, 460, ___, 420, 400",

            hint: "Look at how much each number decreases.",

            options: [
                "430",
                "435",
                "440",
                "450"
            ],

            correctAnswer: "440",

            explanation:
                "The sequence decreases by 20 each time: 480, 460, 440, 420, 400."
        },

        {
            id: "ns-013",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "Which number does not fit? 12, 18, 24, 31, 36",

            hint: "Work out the rule connecting the other numbers.",

            options: [
                "18",
                "24",
                "31",
                "36"
            ],

            correctAnswer: "31",

            explanation:
                "The sequence should increase by 6: 12, 18, 24, 30, 36. So 31 does not fit."
        },

        {
            id: "ns-014",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "Which number should replace the box? 90, 120, 150, □, 210",

            hint: "Find the constant increase between the numbers.",

            options: [
                "170",
                "180",
                "190",
                "200"
            ],

            correctAnswer: "180",

            explanation:
                "Each number increases by 30, so the missing number is 150 + 30 = 180."
        },

        {
            id: "ns-015",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "A sequence starts at 30 and increases by 15 each time. What is the third number?",

            hint: "Start with 30, then add 15 twice.",

            options: [
                "45",
                "50",
                "60",
                "75"
            ],

            correctAnswer: "60",

            explanation:
                "The first number is 30. The second is 45 and the third is 60."
        },

        {
            id: "ns-016",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "A sequence starts at 300 and decreases by 25 each time. What is the fourth number?",

            hint: "Write the sequence one step at a time.",

            options: [
                "200",
                "225",
                "250",
                "275"
            ],

            correctAnswer: "225",

            explanation:
                "The sequence is 300, 275, 250, 225. Therefore, the fourth number is 225."
        },

        {
            id: "ns-017",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "Which number should replace the box? 205, 215, 225, □, 245",

            hint: "The sequence follows the same step each time.",

            options: [
                "230",
                "235",
                "240",
                "250"
            ],

            correctAnswer: "235",

            explanation:
                "The sequence increases by 10 each time, so 225 + 10 = 235."
        },

        {
            id: "ns-018",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "Which sequence follows a rule of adding 25 each time?",

            hint: "Check the difference between neighbouring numbers.",

            options: [
                "40, 65, 90, 115",
                "40, 60, 80, 100",
                "40, 70, 100, 130",
                "40, 75, 110, 145"
            ],

            correctAnswer: "40, 65, 90, 115",

            explanation:
                "65 - 40 = 25, 90 - 65 = 25 and 115 - 90 = 25."
        },

        {
            id: "ns-019",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "What is the missing number? 600, 550, 500, ___, 400, 350",

            hint: "The sequence is counting backwards by the same amount.",

            options: [
                "425",
                "450",
                "475",
                "480"
            ],

            correctAnswer: "450",

            explanation:
                "The sequence decreases by 50 each time, so the missing number is 500 - 50 = 450."
        },

        {
            id: "ns-020",
            skillId: "number-sequences",
            stage: "understand",
            difficulty: 2,

            question: "A sequence goes 75, 90, 105, 120. What is the rule?",

            hint: "Compare two numbers next to each other.",

            options: [
                "Add 10",
                "Add 15",
                "Add 20",
                "Add 25"
            ],

            correctAnswer: "Add 15",

            explanation:
                "Each number is 15 greater than the number before it."
        },
                {
            id: "ns-021",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "The sequence is 125, 150, 175, 200. What number is 3 steps after 200?",

            hint: "First find the rule, then continue the sequence three times.",

            options: [
                "250",
                "260",
                "275",
                "300"
            ],

            correctAnswer: "275",

            explanation:
                "The sequence increases by 25. Three steps after 200 are 225, 250 and 275."
        },

        {
            id: "ns-022",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "A sequence starts at 720 and decreases by 40 each time. Which number is in the sequence?",

            hint: "Keep subtracting 40 from 720.",

            options: [
                "580",
                "590",
                "600",
                "610"
            ],

            correctAnswer: "600",

            explanation:
                "The sequence is 720, 680, 640, 600. So 600 is in the sequence."
        },

        {
            id: "ns-023",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "The rule is to add 30 each time. If one number is 260, which number comes two places later?",

            hint: "Apply the rule twice.",

            options: [
                "290",
                "300",
                "310",
                "320"
            ],

            correctAnswer: "320",

            explanation:
                "One step after 260 is 290. Two steps after 260 is 320."
        },

        {
            id: "ns-024",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "Which number completes the sequence? 1, 4, 7, 10, ___, 16",

            hint: "Look at the difference between consecutive numbers.",

            options: [
                "12",
                "13",
                "14",
                "15"
            ],

            correctAnswer: "13",

            explanation:
                "The sequence increases by 3 each time: 1, 4, 7, 10, 13, 16."
        },

        {
            id: "ns-025",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "A sequence goes 950, 900, 850, 800. Which number would appear after two more steps?",

            hint: "Continue subtracting the same amount.",

            options: [
                "650",
                "700",
                "725",
                "750"
            ],

            correctAnswer: "700",

            explanation:
                "The sequence decreases by 50. After 800 come 750 and then 700."
        },

        {
            id: "ns-026",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "Three numbers in a sequence are 140, 160 and 180. What is the fifth number?",

            hint: "Find the rule, then count forward from 180.",

            options: [
                "200",
                "210",
                "220",
                "240"
            ],

            correctAnswer: "220",

            explanation:
                "The sequence increases by 20. After 180 come 200 and then 220, making 220 the fifth number."
        },

        {
            id: "ns-027",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "A sequence follows the rule 'subtract 25'. Which number could be the first number if the next two are 375 and 350?",

            hint: "Work backwards by adding 25.",

            options: [
                "400",
                "425",
                "450",
                "475"
            ],

            correctAnswer: "400",

            explanation:
                "If 375 follows the first number and 25 is subtracted, the first number must be 400."
        },

        {
            id: "ns-028",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "A sequence starts at 45 and adds 20 each time. Which number is not in the sequence?",

            hint: "Build the sequence from 45 until you reach the nearby choices.",

            options: [
                "65",
                "85",
                "105",
                "115"
            ],

            correctAnswer: "115",

            explanation:
                "The sequence is 45, 65, 85, 105, 125. Therefore, 115 is not in the sequence."
        },

        {
            id: "ns-029",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "The sequence is 210, 240, 270, 300. What number is 4 steps after 300?",

            hint: "The rule is to add 30. Continue it four times.",

            options: [
                "390",
                "400",
                "410",
                "420"
            ],

            correctAnswer: "420",

            explanation:
                "Four steps are 330, 360, 390 and 420. So the answer is 420."
        },

        {
            id: "ns-030",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "A sequence decreases by 35 each time. It begins 500, 465, 430. What is the fifth number?",

            hint: "Continue the sequence two more times.",

            options: [
                "350",
                "360",
                "365",
                "370"
            ],

            correctAnswer: "360",

            explanation:
                "After 430 come 395 and then 360. Therefore, the fifth number is 360."
        }

    ]
};

export default numberSequences;

export {
    numberSequences
};