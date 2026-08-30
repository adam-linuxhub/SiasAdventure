import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  MISSING NUMBER PROBLEMS
==================================================*/

const missingNumberProblems: SkillContent = {
    skillId: "missing-number-problems",

    title: "Missing Number Problems",

    description: "Find missing numbers in Year 3 multiplication and division calculations.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "mn-001",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? 3 × □ = 12",

            hint: "Think: 3 times what number makes 12?",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "3 × 4 = 12, so the missing number is 4."
        },

        {
            id: "mn-002",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? 4 × □ = 20",

            hint: "Think: 4 times what number makes 20?",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "4 × 5 = 20, so the missing number is 5."
        },

        {
            id: "mn-003",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? 8 × □ = 24",

            hint: "Think: 8 times what number makes 24?",

            options: [
                "2",
                "3",
                "4",
                "6"
            ],

            correctAnswer: "3",

            explanation:
                "8 × 3 = 24, so the missing number is 3."
        },

        {
            id: "mn-004",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? □ × 3 = 18",

            hint: "Think: what number multiplied by 3 makes 18?",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "6 × 3 = 18, so the missing number is 6."
        },

        {
            id: "mn-005",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? □ × 4 = 28",

            hint: "Think: what number multiplied by 4 makes 28?",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "7",

            explanation:
                "7 × 4 = 28, so the missing number is 7."
        },

        {
            id: "mn-006",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? □ × 8 = 32",

            hint: "Think: what number multiplied by 8 makes 32?",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "4 × 8 = 32, so the missing number is 4."
        },

         {
            id: "mn-007",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? 12 ÷ □ = 3",

            hint: "Think: 3 times what number makes 12?",

            options: [
                "2",
                "3",
                "4",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "12 ÷ 4 = 3, so the missing number is 4."
        },

        {
            id: "mn-008",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? 24 ÷ □ = 6",

            hint: "Think: 6 times what number makes 24?",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "24 ÷ 4 = 6, so the missing number is 4."
        },

        {
            id: "mn-009",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? 32 ÷ □ = 4",

            hint: "Think: 4 times what number makes 32?",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "32 ÷ 8 = 4, so the missing number is 8."
        },

        {
            id: "mn-010",
            skillId: "missing-number-problems",
            stage: "recognise",
            difficulty: 1,

            question: "What number is missing? □ ÷ 3 = 7",

            hint: "Use the related multiplication fact.",

            options: [
                "18",
                "21",
                "24",
                "27"
            ],

            correctAnswer: "21",

            explanation:
                "3 × 7 = 21, so 21 ÷ 3 = 7."
        },
                {
            id: "mn-011",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 3 × □ = 27",

            hint: "Think: 3 times what number makes 27?",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "3 × 9 = 27, so the missing number is 9."
        },

        {
            id: "mn-012",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 4 × □ = 32",

            hint: "Think: 4 times what number makes 32?",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "4 × 8 = 32, so the missing number is 8."
        },

        {
            id: "mn-013",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 8 × □ = 40",

            hint: "Think: 8 times what number makes 40?",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "5",

            explanation:
                "8 × 5 = 40, so the missing number is 5."
        },

        {
            id: "mn-014",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? □ × 3 = 24",

            hint: "Use the related division fact.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "24 ÷ 3 = 8, so 8 × 3 = 24."
        },

        {
            id: "mn-015",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? □ × 4 = 36",

            hint: "Think: how many groups of 4 make 36?",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "36 ÷ 4 = 9, so the missing number is 9."
        },

        {
            id: "mn-016",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? □ × 8 = 48",

            hint: "Think: how many 8s make 48?",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "48 ÷ 8 = 6, so the missing number is 6."
        },

        {
            id: "mn-017",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 21 ÷ □ = 3",

            hint: "Think about the multiplication fact that matches this division.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "7",

            explanation:
                "21 ÷ 7 = 3 because 7 × 3 = 21."
        },

        {
            id: "mn-018",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 28 ÷ □ = 4",

            hint: "Think: 4 times what number makes 28?",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "7",

            explanation:
                "28 ÷ 7 = 4 because 7 × 4 = 28."
        },

        {
            id: "mn-019",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 48 ÷ □ = 8",

            hint: "Think: 8 times what number makes 48?",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "48 ÷ 6 = 8 because 6 × 8 = 48."
        },

        {
            id: "mn-020",
            skillId: "missing-number-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has □ bags with 4 shells in each bag. She has 28 shells altogether. What number is missing?",

            hint: "Divide the total number of shells by the number in each bag.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "7",

            explanation:
                "28 ÷ 4 = 7, so Sia has 7 bags."
        },
                {
            id: "mn-021",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has □ bags with 8 shells in each bag. She has 48 shells altogether. What number is missing?",

            hint: "Divide the total number of shells by the number in each bag.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "48 ÷ 8 = 6, so Sia has 6 bags."
        },

        {
            id: "mn-022",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "A wizard has 4 boxes with □ stars in each box. There are 28 stars altogether. What number is missing?",

            hint: "Divide the total number of stars by the number of boxes.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "7",

            explanation:
                "28 ÷ 4 = 7, so there are 7 stars in each box."
        },

        {
            id: "mn-023",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "What number is missing? □ × 8 = 56",

            hint: "Think: how many 8s make 56?",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "56 ÷ 8 = 7, so 7 × 8 = 56."
        },

        {
            id: "mn-024",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "What number is missing? 36 ÷ □ = 9",

            hint: "Think: 9 times what number makes 36?",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "36 ÷ 4 = 9, so the missing number is 4."
        },

        {
            id: "mn-025",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "A game gives □ points for each of 8 treasures. Sia scores 32 points altogether. How many points does each treasure give?",

            hint: "Divide the total points by the number of treasures.",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "32 ÷ 8 = 4, so each treasure is worth 4 points."
        },

        {
            id: "mn-026",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "There are 3 rows with □ counters in each row. There are 27 counters altogether. What number is missing?",

            hint: "Divide the total counters by the number of rows.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "27 ÷ 3 = 9, so there are 9 counters in each row."
        },

        {
            id: "mn-027",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "What number is missing? 4 × □ + 4 = 36",

            hint: "First think about what number 4 × □ must make before the extra 4 is added.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "8",

            explanation:
                "36 − 4 = 32. Then 32 ÷ 4 = 8, so the missing number is 8."
        },

        {
            id: "mn-028",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "What number is missing? 3 × □ − 3 = 24",

            hint: "First add 3 to 24, then use the 3 times table.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "24 + 3 = 27. Then 27 ÷ 3 = 9, so the missing number is 9."
        },

        {
            id: "mn-029",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "A number is multiplied by 4 and then 4 is added. The answer is 32. What is the number?",

            hint: "Take away 4 first, then divide by 4.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "32 − 4 = 28. Then 28 ÷ 4 = 7, so the missing number is 7."
        },

        {
            id: "mn-030",
            skillId: "missing-number-problems",
            stage: "master",
            difficulty: 3,

            question: "A number is multiplied by 8 and then 8 is taken away. The answer is 40. What is the number?",

            hint: "Add 8 to 40 first, then divide by 8.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "40 + 8 = 48. Then 48 ÷ 8 = 6, so the missing number is 6."
        }

    ]
};

export default missingNumberProblems;

export {
    missingNumberProblems
};
