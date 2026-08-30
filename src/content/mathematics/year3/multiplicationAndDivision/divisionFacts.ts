import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  DIVISION FACTS
==================================================*/

const divisionFacts: SkillContent = {
    skillId: "division-facts",

    title: "Division Facts",

    description: "Recall and use division facts linked to the 3, 4 and 8 times tables.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "df-001",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 6 ÷ 3?",

            hint: "Think: how many groups of 3 make 6?",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "6 ÷ 3 = 2 because 2 groups of 3 make 6."
        },

        {
            id: "df-002",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 12 ÷ 4?",

            hint: "Think: how many 4s make 12?",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "12 ÷ 4 = 3 because 3 groups of 4 make 12."
        },

        {
            id: "df-003",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 16 ÷ 8?",

            hint: "Think: how many groups of 8 make 16?",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "16 ÷ 8 = 2 because 2 groups of 8 make 16."
        },

        {
            id: "df-004",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 15 ÷ 3?",

            hint: "Use the 3 times table to help.",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "5",

            explanation:
                "15 ÷ 3 = 5 because 5 × 3 = 15."
        },

        {
            id: "df-005",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 20 ÷ 4?",

            hint: "Use the 4 times table to help.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "20 ÷ 4 = 5 because 5 × 4 = 20."
        },

        {
            id: "df-006",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 24 ÷ 8?",

            hint: "Think: 8 multiplied by what gives 24?",

            options: [
                "2",
                "3",
                "4",
                "6"
            ],

            correctAnswer: "3",

            explanation:
                "24 ÷ 8 = 3 because 3 × 8 = 24."
        },

        {
            id: "df-007",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 21 ÷ 3?",

            hint: "Count in 3s until you reach 21.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "21 ÷ 3 = 7 because 7 × 3 = 21."
        },

        {
            id: "df-008",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 28 ÷ 4?",

            hint: "Think: 4 times what makes 28?",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "28 ÷ 4 = 7 because 7 × 4 = 28."
        },

        {
            id: "df-009",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 32 ÷ 8?",

            hint: "Think: 8 times what makes 32?",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "32 ÷ 8 = 4 because 4 × 8 = 32."
        },

        {
            id: "df-010",
            skillId: "division-facts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 30 ÷ 3?",

            hint: "Use the 3 times table.",

            options: [
                "8",
                "9",
                "10",
                "12"
            ],

            correctAnswer: "10",

            explanation:
                "30 ÷ 3 = 10 because 10 × 3 = 30."
        },
                {
            id: "df-011",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "What is 27 ÷ 3?",

            hint: "Think: 3 multiplied by what makes 27?",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "27 ÷ 3 = 9 because 9 × 3 = 27."
        },

        {
            id: "df-012",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "What is 32 ÷ 4?",

            hint: "Use the 4 times table to help.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "32 ÷ 4 = 8 because 8 × 4 = 32."
        },

        {
            id: "df-013",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "What is 40 ÷ 8?",

            hint: "Think: 8 multiplied by what makes 40?",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "40 ÷ 8 = 5 because 5 × 8 = 40."
        },

        {
            id: "df-014",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "There are 24 apples shared equally between 3 baskets. How many apples go in each basket?",

            hint: "Find how many groups of 3 are in 24.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "24 ÷ 3 = 8, so each basket gets 8 apples."
        },

        {
            id: "df-015",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 28 points and shares them equally between 4 rounds. How many points are in each round?",

            hint: "Divide 28 by 4.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "28 ÷ 4 = 7, so each round has 7 points."
        },

        {
            id: "df-016",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? 3 × □ = 24",

            hint: "Think about the related division fact.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "24 ÷ 3 = 8, so 3 × 8 = 24."
        },

        {
            id: "df-017",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "What number is missing? □ × 4 = 36",

            hint: "Think: how many 4s make 36?",

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
            id: "df-018",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "Which division has an answer of 6?",

            hint: "Check which calculation gives 6.",

            options: [
                "18 ÷ 3",
                "20 ÷ 4",
                "24 ÷ 3",
                "32 ÷ 4"
            ],

            correctAnswer: "18 ÷ 3",

            explanation:
                "18 ÷ 3 = 6. The other divisions give 5, 8 and 8."
        },

        {
            id: "df-019",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "A box has 40 counters. They are put into groups of 8. How many groups are made?",

            hint: "Find how many groups of 8 fit into 40.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "40 ÷ 8 = 5, so 5 groups are made."
        },

        {
            id: "df-020",
            skillId: "division-facts",
            stage: "apply",
            difficulty: 2,

            question: "Which is greater: 24 ÷ 3 or 24 ÷ 4?",

            hint: "Work out both divisions before comparing them.",

            options: [
                "24 ÷ 3",
                "24 ÷ 4",
                "They are equal",
                "There is not enough information"
            ],

            correctAnswer: "24 ÷ 3",

            explanation:
                "24 ÷ 3 = 8, while 24 ÷ 4 = 6. Therefore, 24 ÷ 3 is greater."
        },
                {
            id: "df-021",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "Sia has 32 shells and puts 4 shells in each bag. How many bags can she fill?",

            hint: "Find how many groups of 4 are in 32.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "32 ÷ 4 = 8, so Sia can fill 8 bags."
        },

        {
            id: "df-022",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "A wizard has 48 stars and puts 8 stars on each card. How many cards can he complete?",

            hint: "Think about how many groups of 8 are in 48.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "48 ÷ 8 = 6, so the wizard can complete 6 cards."
        },

                {
            id: "df-023",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "Which division gives an answer of 8?",

            hint: "Check each division carefully.",

            options: [
                "21 ÷ 3",
                "24 ÷ 3",
                "28 ÷ 4",
                "32 ÷ 8"
            ],

            correctAnswer: "24 ÷ 3",

            explanation:
                "24 ÷ 3 = 8. The other divisions give 7, 7 and 4."
        },

        {
            id: "df-024",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "There are 40 counters shared equally between 5 children. How many counters does each child receive?",

            hint: "Divide the total number of counters by the number of children.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "40 ÷ 5 = 8, so each child receives 8 counters."
        },

        {
            id: "df-025",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "Sia knows that 4 × 7 = 28. What is 28 ÷ 4?",

            hint: "Use the multiplication fact to find the related division fact.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "7",

            explanation:
                "Because 4 × 7 = 28, the related division fact is 28 ÷ 4 = 7."
        },

        {
            id: "df-026",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "A class has 24 children. They form equal teams of 3. How many teams are there?",

            hint: "Find how many groups of 3 are in 24.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "24 ÷ 3 = 8, so there are 8 teams."
        },

        {
            id: "df-027",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "Which pair of divisions has the same answer?",

            hint: "Work out both divisions in each pair.",

            options: [
                "24 ÷ 3 and 32 ÷ 4",
                "20 ÷ 4 and 24 ÷ 3",
                "28 ÷ 4 and 32 ÷ 4",
                "40 ÷ 8 and 27 ÷ 3"
            ],

            correctAnswer: "24 ÷ 3 and 32 ÷ 4",

            explanation:
                "24 ÷ 3 = 8 and 32 ÷ 4 = 8, so these two divisions have the same answer."
        },

        {
            id: "df-028",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "A game has 36 points to share equally between 4 players. How many points does each player get?",

            hint: "Divide 36 by 4.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "36 ÷ 4 = 9, so each player gets 9 points."
        },

        {
            id: "df-029",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "A number is divided by 8 to make 5. What is the number?",

            hint: "Think about the multiplication fact that matches the division.",

            options: [
                "32",
                "36",
                "40",
                "48"
            ],

            correctAnswer: "40",

            explanation:
                "40 ÷ 8 = 5, so the missing number is 40."
        },

        {
            id: "df-030",
            skillId: "division-facts",
            stage: "master",
            difficulty: 3,

            question: "A teacher has 32 stickers. She shares them equally between 4 children, then each child gives 2 stickers away. How many stickers does each child have left?",

            hint: "First divide 32 equally between 4 children, then subtract 2.",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "6",

            explanation:
                "32 ÷ 4 = 8, so each child starts with 8 stickers. Each gives away 2, leaving 6 stickers."
        }

    ]
};

export default divisionFacts;

export {
    divisionFacts
};