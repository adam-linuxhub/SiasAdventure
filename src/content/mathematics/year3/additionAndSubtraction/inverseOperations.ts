import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  INVERSE OPERATIONS
==================================================*/

const inverseOperations: SkillContent = {
    skillId: "inverse-operations",

    title: "Inverse Operations",

    description: "Use addition and subtraction as inverse operations to check calculations and find missing numbers.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "io-001",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "Which subtraction can be used to check 7 + 5 = 12?",

            hint: "Use the total and take away one of the numbers that was added.",

            options: [
                "12 - 5 = 7",
                "12 - 7 = 6",
                "7 - 5 = 2",
                "5 + 7 = 11"
            ],

            correctAnswer: "12 - 5 = 7",

            explanation:
                "Addition and subtraction are inverse operations. The subtraction 12 - 5 = 7 checks that 7 + 5 = 12."
        },

        {
            id: "io-002",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "Which addition checks that 14 - 6 = 8?",

            hint: "Add the answer to the number that was subtracted.",

            options: [
                "8 + 6 = 14",
                "8 + 5 = 13",
                "14 + 6 = 20",
                "6 + 14 = 19"
            ],

            correctAnswer: "8 + 6 = 14",

            explanation:
                "To check 14 - 6 = 8, add 8 and 6. Since 8 + 6 = 14, the subtraction is correct."
        },

        {
            id: "io-003",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "If 9 + 4 = 13, which subtraction is its inverse?",

            hint: "Start with the total of 13.",

            options: [
                "13 - 4 = 9",
                "13 - 9 = 5",
                "9 - 4 = 5",
                "4 + 9 = 12"
            ],

            correctAnswer: "13 - 4 = 9",

            explanation:
                "The inverse of 9 + 4 = 13 is 13 - 4 = 9."
        },

        {
            id: "io-004",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "If 18 - 7 = 11, which addition checks the calculation?",

            hint: "Add the answer and the number taken away.",

            options: [
                "11 + 7 = 18",
                "11 + 6 = 17",
                "18 + 7 = 25",
                "7 + 18 = 24"
            ],

            correctAnswer: "11 + 7 = 18",

            explanation:
                "11 + 7 = 18, so the addition confirms that 18 - 7 = 11."
        },

        {
            id: "io-005",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "Which subtraction checks 23 + 15 = 38?",

            hint: "Use the total of 38 and subtract one addend.",

            options: [
                "38 - 15 = 23",
                "38 - 14 = 24",
                "23 - 15 = 8",
                "38 - 23 = 14"
            ],

            correctAnswer: "38 - 15 = 23",

            explanation:
                "38 - 15 = 23, so it checks that 23 + 15 = 38."
        },

        {
            id: "io-006",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "If 30 - 12 = 18, which addition is the inverse?",

            hint: "Add the difference to the number that was subtracted.",

            options: [
                "18 + 12 = 30",
                "18 + 11 = 29",
                "30 + 12 = 42",
                "12 + 30 = 41"
            ],

            correctAnswer: "18 + 12 = 30",

            explanation:
                "18 + 12 = 30, so this addition checks the subtraction."
        },

        {
            id: "io-007",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "Which equation is the inverse of 25 + 13 = 38?",

            hint: "Turn the addition into a subtraction using the total.",

            options: [
                "38 - 13 = 25",
                "38 - 12 = 26",
                "25 - 13 = 12",
                "38 + 13 = 51"
            ],

            correctAnswer: "38 - 13 = 25",

            explanation:
                "38 - 13 = 25 is the inverse subtraction of 25 + 13 = 38."
        },

        {
            id: "io-008",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "Which addition checks 45 - 20 = 25?",

            hint: "Add 20 to the answer 25.",

            options: [
                "25 + 20 = 45",
                "25 + 19 = 44",
                "45 + 20 = 65",
                "20 + 45 = 64"
            ],

            correctAnswer: "25 + 20 = 45",

            explanation:
                "25 + 20 = 45, so the addition checks that 45 - 20 = 25."
        },

        {
            id: "io-009",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "If 32 + 18 = 50, what number sentence checks the answer?",

            hint: "Subtract one addend from the total.",

            options: [
                "50 - 18 = 32",
                "50 - 17 = 33",
                "32 - 18 = 14",
                "50 + 18 = 68"
            ],

            correctAnswer: "50 - 18 = 32",

            explanation:
                "50 - 18 = 32, so the subtraction checks the addition."
        },

        {
            id: "io-010",
            skillId: "inverse-operations",
            stage: "recognise",
            difficulty: 1,

            question: "If 41 - 16 = 25, which addition should you use to check it?",

            hint: "Add the answer to the amount taken away.",

            options: [
                "25 + 16 = 41",
                "25 + 15 = 40",
                "41 + 16 = 57",
                "16 + 41 = 56"
            ],

            correctAnswer: "25 + 16 = 41",

            explanation:
                "25 + 16 = 41, so the addition confirms that 41 - 16 = 25."
        },
                {
            id: "io-011",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "Sia calculates 27 + 36 = 63. Which subtraction would correctly check her answer?",

            hint: "Start with the total and subtract one of the numbers that was added.",

            options: [
                "63 - 27 = 36",
                "63 - 26 = 37",
                "63 - 36 = 28",
                "27 - 36 = 9"
            ],

            correctAnswer: "63 - 27 = 36",

            explanation:
                "The inverse of 27 + 36 = 63 is 63 - 27 = 36. This checks that the addition is correct."
        },

        {
            id: "io-012",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "A pupil works out 72 - 35 = 37. Which addition checks the answer?",

            hint: "Add the answer to the number that was subtracted.",

            options: [
                "37 + 34 = 71",
                "37 + 35 = 72",
                "37 + 36 = 73",
                "35 + 72 = 107"
            ],

            correctAnswer: "37 + 35 = 72",

            explanation:
                "37 + 35 = 72, so the addition confirms that 72 - 35 = 37."
        },

        {
            id: "io-013",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "Which subtraction can be used to check 46 + 28 = 74?",

            hint: "Use 74 as the starting number.",

            options: [
                "74 - 28 = 46",
                "74 - 27 = 47",
                "74 - 46 = 29",
                "46 - 28 = 18"
            ],

            correctAnswer: "74 - 28 = 46",

            explanation:
                "74 - 28 = 46, so this subtraction checks that 46 + 28 = 74."
        },

        {
            id: "io-014",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "Tom calculates 91 - 47 = 44. Which addition should he use to check his answer?",

            hint: "Add the difference and the number taken away.",

            options: [
                "44 + 46 = 90",
                "44 + 47 = 91",
                "44 + 48 = 92",
                "47 + 91 = 138"
            ],

            correctAnswer: "44 + 47 = 91",

            explanation:
                "44 + 47 = 91, so the addition checks that 91 - 47 = 44."
        },

        {
            id: "io-015",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "The missing number is found using the inverse: 38 + ___ = 65. What is the missing number?",

            hint: "Use subtraction: 65 - 38.",

            options: [
                "26",
                "27",
                "28",
                "29"
            ],

            correctAnswer: "27",

            explanation:
                "Use the inverse operation: 65 - 38 = 27. Therefore, 38 + 27 = 65."
        },

        {
            id: "io-016",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "The missing number is found using the inverse: ___ + 24 = 58. What is the missing number?",

            hint: "Subtract 24 from the total of 58.",

            options: [
                "32",
                "33",
                "34",
                "35"
            ],

            correctAnswer: "34",

            explanation:
                "58 - 24 = 34, so the missing number is 34."
        },

        {
            id: "io-017",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "The missing number is found using the inverse: 83 - ___ = 29. What is the missing number?",

            hint: "The inverse tells you to add the answer to the missing number to get 83.",

            options: [
                "52",
                "53",
                "54",
                "55"
            ],

            correctAnswer: "54",

            explanation:
                "29 + 54 = 83, so 83 - 54 = 29. The missing number is 54."
        },

        {
            id: "io-018",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "Sia calculates 125 + 46 = 171. Which subtraction would check her answer?",

            hint: "Subtract one addend from the total.",

            options: [
                "171 - 45 = 126",
                "171 - 46 = 125",
                "171 - 47 = 124",
                "125 - 46 = 79"
            ],

            correctAnswer: "171 - 46 = 125",

            explanation:
                "171 - 46 = 125, so the subtraction checks that 125 + 46 = 171."
        },

        {
            id: "io-019",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "A calculation says 154 - 68 = 86. Which addition proves the calculation is correct?",

            hint: "Add 86 and 68.",

            options: [
                "86 + 67 = 153",
                "86 + 68 = 154",
                "86 + 69 = 155",
                "154 + 68 = 222"
            ],

            correctAnswer: "86 + 68 = 154",

            explanation:
                "86 + 68 = 154, so the addition confirms that 154 - 68 = 86."
        },

        {
            id: "io-020",
            skillId: "inverse-operations",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 142 points. She calculates that after losing some points she has 95 left. Which inverse calculation finds how many points she lost?",

            hint: "Subtract the amount left from the starting total.",

            options: [
                "142 - 94",
                "142 - 95",
                "142 - 96",
                "95 + 142"
            ],

            correctAnswer: "142 - 95",

            explanation:
                "142 - 95 = 47, so Sia lost 47 points."
        },
                {
            id: "io-021",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "Sia calculates 238 + 157 = 395. Which subtraction would correctly check her answer?",

            hint: "Start with 395 and subtract one of the numbers that was added.",

            options: [
                "395 - 157 = 238",
                "395 - 156 = 239",
                "395 - 158 = 237",
                "238 - 157 = 81"
            ],

            correctAnswer: "395 - 157 = 238",

            explanation:
                "395 - 157 = 238, so the subtraction confirms that 238 + 157 = 395."
        },

        {
            id: "io-022",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "A pupil says 426 - 189 = 237. Which addition checks the answer?",

            hint: "Add the answer to the amount that was subtracted.",

            options: [
                "237 + 188 = 425",
                "237 + 189 = 426",
                "237 + 190 = 427",
                "426 + 189 = 615"
            ],

            correctAnswer: "237 + 189 = 426",

            explanation:
                "237 + 189 = 426, so the addition proves that 426 - 189 = 237."
        },

        {
            id: "io-023",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "The equation is 347 + ___ = 512. Which calculation finds the missing number?",

            hint: "Use the inverse operation: subtract the known addend from the total.",

            options: [
                "512 - 346",
                "512 - 347",
                "512 - 348",
                "347 - 165"
            ],

            correctAnswer: "512 - 347",

            explanation:
                "512 - 347 = 165, so the missing number is 165."
        },

        {
            id: "io-024",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "The equation is 625 - ___ = 278. Which addition can be used to find the missing number?",

            hint: "Add the answer to the missing amount to make the starting number.",

            options: [
                "278 + 346",
                "278 + 347",
                "278 + 348",
                "625 + 278"
            ],

            correctAnswer: "278 + 347",

            explanation:
                "278 + 347 = 625, so the missing number is 347."
        },

        {
            id: "io-025",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "Which pair of calculations are inverse operations?",

            hint: "Look for an addition and subtraction that use the same three numbers.",

            options: [
                "156 + 42 = 198 and 198 - 42 = 156",
                "156 + 42 = 199 and 199 - 42 = 156",
                "198 - 42 = 155 and 155 + 42 = 197",
                "156 - 42 = 114 and 114 - 42 = 72"
            ],

            correctAnswer: "156 + 42 = 198 and 198 - 42 = 156",

            explanation:
                "156 + 42 = 198 and 198 - 42 = 156 use the same three numbers and undo each other."
        },

        {
            id: "io-026",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "A shop records 275 + 148 = 423. The manager wants to check the calculation. Which subtraction should be used?",

            hint: "Use the total, 423, and subtract one addend.",

            options: [
                "423 - 147 = 276",
                "423 - 148 = 275",
                "423 - 149 = 274",
                "275 - 148 = 127"
            ],

            correctAnswer: "423 - 148 = 275",

            explanation:
                "423 - 148 = 275, so this subtraction checks the original addition."
        },

        {
            id: "io-027",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "Sia says 503 - 276 = 227. How can she check whether her answer is correct?",

            hint: "Use addition to put the amount taken away back with the answer.",

            options: [
                "227 + 275 = 502",
                "227 + 276 = 503",
                "227 + 277 = 504",
                "503 + 276 = 779"
            ],

            correctAnswer: "227 + 276 = 503",

            explanation:
                "227 + 276 = 503, so the addition confirms that 503 - 276 = 227."
        },

        {
            id: "io-028",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "A calculation is missing a number: 184 + ___ = 450. What is the missing number?",

            hint: "Use the inverse operation and calculate 450 - 184.",

            options: [
                "264",
                "265",
                "266",
                "267"
            ],

            correctAnswer: "266",

            explanation:
                "450 - 184 = 266, so 184 + 266 = 450."
        },

        {
            id: "io-029",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "Which subtraction would help solve 275 + ___ = 600?",

            hint: "The total is 600 and the known addend is 275.",

            options: [
                "600 - 274",
                "600 - 275",
                "600 - 276",
                "275 - 600"
            ],

            correctAnswer: "600 - 275",

            explanation:
                "600 - 275 = 325, so the missing number is 325."
        },

        {
            id: "io-030",
            skillId: "inverse-operations",
            stage: "master",
            difficulty: 3,

            question: "A game gives Sia 185 points in one round and 246 points in another. She says her total is 431. Which subtraction proves that her answer is correct?",

            hint: "Start with the total and subtract either round's score.",

            options: [
                "431 - 185 = 246",
                "431 - 184 = 247",
                "431 - 186 = 245",
                "246 - 185 = 61"
            ],

            correctAnswer: "431 - 185 = 246",

            explanation:
                "431 - 185 = 246, so the subtraction confirms that 185 + 246 = 431."
        }

    ]
};

export default inverseOperations;

export {
    inverseOperations
};
