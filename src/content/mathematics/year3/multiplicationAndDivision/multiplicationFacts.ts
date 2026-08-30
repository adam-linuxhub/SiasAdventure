import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  MULTIPLICATION FACTS
==================================================*/

const multiplicationFacts: SkillContent = {
    skillId: "multiplication-facts",

    title: "Multiplication Facts",

    description: "Recall and use multiplication facts for the 3, 4 and 8 times tables.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "mf-001",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3 × 2?",

            hint: "Think of two groups of 3.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "3 × 2 means two groups of 3. 3 + 3 = 6."
        },

        {
            id: "mf-002",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 4 × 3?",

            hint: "Count in 4s three times.",

            options: [
                "10",
                "11",
                "12",
                "13"
            ],

            correctAnswer: "12",

            explanation:
                "4 × 3 = 12 because 4 + 4 + 4 = 12."
        },

        {
            id: "mf-003",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 8 × 2?",

            hint: "Count in 8s twice.",

            options: [
                "14",
                "15",
                "16",
                "18"
            ],

            correctAnswer: "16",

            explanation:
                "8 × 2 = 16 because 8 + 8 = 16."
        },

        {
            id: "mf-004",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3 × 5?",

            hint: "Count in 3s five times.",

            options: [
                "12",
                "15",
                "18",
                "20"
            ],

            correctAnswer: "15",

            explanation:
                "3 × 5 = 15 because 3 + 3 + 3 + 3 + 3 = 15."
        },

        {
            id: "mf-005",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 4 × 5?",

            hint: "Think of five groups of 4.",

            options: [
                "18",
                "20",
                "22",
                "24"
            ],

            correctAnswer: "20",

            explanation:
                "4 × 5 = 20 because five groups of 4 make 20."
        },

        {
            id: "mf-006",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 8 × 3?",

            hint: "Count in 8s three times.",

            options: [
                "21",
                "22",
                "24",
                "26"
            ],

            correctAnswer: "24",

            explanation:
                "8 × 3 = 24 because 8 + 8 + 8 = 24."
        },

        {
            id: "mf-007",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3 × 7?",

            hint: "Use the 3 times table.",

            options: [
                "18",
                "20",
                "21",
                "24"
            ],

            correctAnswer: "21",

            explanation:
                "3 × 7 = 21."
        },

        {
            id: "mf-008",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 4 × 6?",

            hint: "Use the 4 times table.",

            options: [
                "20",
                "22",
                "24",
                "26"
            ],

            correctAnswer: "24",

            explanation:
                "4 × 6 = 24."
        },

        {
            id: "mf-009",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 8 × 4?",

            hint: "Count in 8s four times.",

            options: [
                "28",
                "30",
                "32",
                "34"
            ],

            correctAnswer: "32",

            explanation:
                "8 × 4 = 32."
        },

        {
            id: "mf-010",
            skillId: "multiplication-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3 × 10?",

            hint: "Ten groups of 3 make how many?",

            options: [
                "27",
                "30",
                "33",
                "36"
            ],

            correctAnswer: "30",

            explanation:
                "3 × 10 = 30."
        },
                {
            id: "mf-011",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "What is 3 × 8?",

            hint: "Use the 3 times table and count in 3s.",

            options: [
                "21",
                "24",
                "27",
                "30"
            ],

            correctAnswer: "24",

            explanation:
                "3 × 8 = 24 because 3 added together 8 times makes 24."
        },

        {
            id: "mf-012",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "What is 4 × 7?",

            hint: "Use the 4 times table.",

            options: [
                "24",
                "26",
                "28",
                "30"
            ],

            correctAnswer: "28",

            explanation:
                "4 × 7 = 28."
        },

        {
            id: "mf-013",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "What is 8 × 5?",

            hint: "Count in 8s five times.",

            options: [
                "35",
                "38",
                "40",
                "42"
            ],

            correctAnswer: "40",

            explanation:
                "8 × 5 = 40."
        },

        {
            id: "mf-014",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "There are 4 apples in each basket. How many apples are in 6 baskets?",

            hint: "Multiply 4 by the number of baskets.",

            options: [
                "20",
                "24",
                "28",
                "32"
            ],

            correctAnswer: "24",

            explanation:
                "There are 6 groups of 4 apples. 6 × 4 = 24, so there are 24 apples."
        },

        {
            id: "mf-015",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "Sia earns 3 points for each star. How many points does she earn for 9 stars?",

            hint: "Use 9 groups of 3.",

            options: [
                "24",
                "27",
                "30",
                "33"
            ],

            correctAnswer: "27",

            explanation:
                "There are 9 groups of 3 points. 9 × 3 = 27."
        },

        {
            id: "mf-016",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 4 × □ = 32",

            hint: "Think: how many 4s make 32?",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "8 groups of 4 make 32, so the missing number is 8."
        },

        {
            id: "mf-017",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 8 × □ = 48",

            hint: "Count in 8s until you reach 48.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "8 × 6 = 48, so the missing number is 6."
        },

                 {
            id: "mf-018",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "Which multiplication has the same answer as 3 × 7?",

            hint: "Work out 3 × 7 first, then compare the products.",

            options: [
                "3 × 6",
                "4 × 5",
                "7 × 3",
                "5 × 5"
            ],

            correctAnswer: "7 × 3",

            explanation:
                "3 × 7 = 21. Multiplication can be done in either order, so 7 × 3 also equals 21."
        },

        {
            id: "mf-019",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "A box holds 8 crayons. How many crayons are in 4 boxes?",

            hint: "Think of 4 groups of 8.",

            options: [
                "24",
                "28",
                "32",
                "36"
            ],

            correctAnswer: "32",

            explanation:
                "There are 4 groups of 8 crayons. 4 × 8 = 32."
        },

        {
            id: "mf-020",
            skillId: "multiplication-facts",
            stage: "apply",
            difficulty: 2,

            question: "Which is greater: 3 × 8 or 4 × 5?",

            hint: "Work out both calculations before comparing them.",

            options: [
                "3 × 8",
                "4 × 5",
                "They are equal",
                "There is not enough information"
            ],

            correctAnswer: "3 × 8",

            explanation:
                "3 × 8 = 24 and 4 × 5 = 20. Therefore, 3 × 8 is greater."
        },
                {
            id: "mf-021",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "Sia has 7 bags with 4 shells in each bag. How many shells does she have altogether?",

            hint: "Think of 7 equal groups of 4.",

            options: [
                "24",
                "26",
                "28",
                "30"
            ],

            correctAnswer: "28",

            explanation:
                "There are 7 groups of 4 shells. 7 × 4 = 28, so Sia has 28 shells."
        },

        {
            id: "mf-022",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "A wizard puts 8 stars on each of 6 cards. How many stars are used?",

            hint: "Multiply 8 by the number of cards.",

            options: [
                "40",
                "48",
                "54",
                "56"
            ],

            correctAnswer: "48",

            explanation:
                "There are 6 groups of 8 stars. 6 × 8 = 48, so 48 stars are used."
        },

        {
            id: "mf-023",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "Which multiplication gives an answer of 32?",

            hint: "Check each multiplication using your times-table facts.",

            options: [
                "3 × 8",
                "4 × 8",
                "5 × 6",
                "8 × 5"
            ],

            correctAnswer: "4 × 8",

            explanation:
                "4 × 8 = 32. The other calculations give different answers."
        },

        {
            id: "mf-024",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "A tray has 5 rows with 8 counters in each row. How many counters are there?",

            hint: "Five rows of 8 make a multiplication calculation.",

            options: [
                "35",
                "38",
                "40",
                "45"
            ],

            correctAnswer: "40",

            explanation:
                "There are 5 groups of 8 counters. 5 × 8 = 40."
        },

        {
            id: "mf-025",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "Sia knows that 4 × 6 = 24. What is 6 × 4?",

            hint: "Changing the order of the factors does not change the product.",

            options: [
                "20",
                "22",
                "24",
                "26"
            ],

            correctAnswer: "24",

            explanation:
                "6 × 4 has the same product as 4 × 6. Both equal 24."
        },

        {
            id: "mf-026",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "There are 3 teams with 8 children in each team. How many children are there altogether?",

            hint: "Use 3 groups of 8.",

            options: [
                "21",
                "24",
                "27",
                "32"
            ],

            correctAnswer: "24",

            explanation:
                "There are 3 groups of 8 children. 3 × 8 = 24."
        },

        {
            id: "mf-027",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "Which pair of calculations has the same answer?",

            hint: "Work out each pair and compare the products.",

            options: [
                "3 × 6 and 4 × 5",
                "4 × 7 and 3 × 9",
                "8 × 4 and 6 × 5",
                "3 × 8 and 4 × 6"
            ],

            correctAnswer: "3 × 8 and 4 × 6",

            explanation:
                "3 × 8 = 24 and 4 × 6 = 24. The two calculations have the same answer."
        },

        {
            id: "mf-028",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "A game gives 4 points for each treasure found. Sia finds 8 treasures. How many points does she score?",

            hint: "Find 8 groups of 4 points.",

            options: [
                "28",
                "30",
                "32",
                "36"
            ],

            correctAnswer: "32",

            explanation:
                "Sia gets 4 points for each of 8 treasures. 8 × 4 = 32 points."
        },

        {
            id: "mf-029",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "A number is multiplied by 3 to make 27. What is the number?",

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
            id: "mf-030",
            skillId: "multiplication-facts",
            stage: "master",
            difficulty: 3,

            question: "A teacher has 4 packs of stickers. Each pack has 8 stickers. She gives away 4 stickers. How many stickers are left?",

            hint: "First find the total number of stickers, then subtract the stickers given away.",

            options: [
                "26",
                "28",
                "30",
                "32"
            ],

            correctAnswer: "28",

            explanation:
                "There are 4 × 8 = 32 stickers to start with. After giving away 4, 32 − 4 = 28 stickers remain."
        }

    ]
};

export default multiplicationFacts;

export {
    multiplicationFacts
};