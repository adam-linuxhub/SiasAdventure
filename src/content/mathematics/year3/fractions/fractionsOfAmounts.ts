import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  FRACTIONS OF AMOUNTS
==================================================*/

const fractionsOfAmounts: SkillContent = {
    skillId: "fractions-of-amounts",

    title: "Fractions of Amounts",

    description: "Find simple unit and non-unit fractions of amounts using equal sharing.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "fo-001",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/2 of 10?",

            hint: "Halving means splitting the amount into 2 equal groups.",

            options: [
                "2",
                "5",
                "6",
                "10"
            ],

            correctAnswer: "5",

            explanation:
                "10 divided by 2 is 5, so 1/2 of 10 is 5."
        },

        {
            id: "fo-002",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/3 of 12?",

            hint: "Divide 12 into 3 equal groups.",

            options: [
                "3",
                "4",
                "6",
                "9"
            ],

            correctAnswer: "4",

            explanation:
                "12 divided by 3 is 4, so 1/3 of 12 is 4."
        },

        {
            id: "fo-003",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/4 of 20?",

            hint: "Divide 20 into 4 equal groups.",

            options: [
                "4",
                "5",
                "6",
                "10"
            ],

            correctAnswer: "5",

            explanation:
                "20 divided by 4 is 5, so 1/4 of 20 is 5."
        },

        {
            id: "fo-004",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/5 of 25?",

            hint: "Divide 25 into 5 equal groups.",

            options: [
                "4",
                "5",
                "10",
                "20"
            ],

            correctAnswer: "5",

            explanation:
                "25 divided by 5 is 5, so 1/5 of 25 is 5."
        },

        {
            id: "fo-005",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/10 of 40?",

            hint: "Divide the amount into 10 equal parts.",

            options: [
                "4",
                "5",
                "10",
                "20"
            ],

            correctAnswer: "4",

            explanation:
                "40 divided by 10 is 4, so 1/10 of 40 is 4."
        },

        {
            id: "fo-006",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/2 of 18?",

            hint: "Find half by dividing by 2.",

            options: [
                "8",
                "9",
                "10",
                "12"
            ],

            correctAnswer: "9",

            explanation:
                "18 divided by 2 is 9, so 1/2 of 18 is 9."
        },

        {
            id: "fo-007",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/3 of 21?",

            hint: "Share 21 equally into 3 groups.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "21 divided by 3 is 7, so 1/3 of 21 is 7."
        },

        {
            id: "fo-008",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/4 of 28?",

            hint: "Divide 28 into 4 equal parts.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "28 divided by 4 is 7, so 1/4 of 28 is 7."
        },

        {
            id: "fo-009",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/5 of 30?",

            hint: "Divide 30 into 5 equal groups.",

            options: [
                "5",
                "6",
                "7",
                "10"
            ],

            correctAnswer: "6",

            explanation:
                "30 divided by 5 is 6, so 1/5 of 30 is 6."
        },

        {
            id: "fo-010",
            skillId: "fractions-of-amounts",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/10 of 70?",

            hint: "Dividing by 10 gives one tenth.",

            options: [
                "6",
                "7",
                "8",
                "10"
            ],

            correctAnswer: "7",

            explanation:
                "70 divided by 10 is 7, so 1/10 of 70 is 7."
        },
                {
            id: "fo-011",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 2/3 of 18?",

            hint: "First find 1/3 of 18, then multiply that answer by 2.",

            options: [
                "6",
                "9",
                "12",
                "15"
            ],

            correctAnswer: "12",

            explanation:
                "1/3 of 18 is 6. Two thirds is twice that amount, so 2/3 of 18 is 12."
        },

        {
            id: "fo-012",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/4 of 20?",

            hint: "Find 1/4 first, then take three of those parts.",

            options: [
                "12",
                "15",
                "16",
                "18"
            ],

            correctAnswer: "15",

            explanation:
                "1/4 of 20 is 5. Three quarters is 3 × 5 = 15."
        },

        {
            id: "fo-013",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 2/5 of 25?",

            hint: "Find 1/5 of 25 first.",

            options: [
                "5",
                "8",
                "10",
                "15"
            ],

            correctAnswer: "10",

            explanation:
                "1/5 of 25 is 5. Therefore, 2/5 is 5 + 5 = 10."
        },

        {
            id: "fo-014",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/10 of 50?",

            hint: "Find one tenth of 50, then multiply by 3.",

            options: [
                "10",
                "12",
                "15",
                "20"
            ],

            correctAnswer: "15",

            explanation:
                "1/10 of 50 is 5. Three tenths is 3 × 5 = 15."
        },

        {
            id: "fo-015",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/5 of 30?",

            hint: "Find 1/5 of 30 first.",

            options: [
                "15",
                "18",
                "20",
                "25"
            ],

            correctAnswer: "18",

            explanation:
                "1/5 of 30 is 6. Three fifths is 3 × 6 = 18."
        },

        {
            id: "fo-016",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/4 of 28?",

            hint: "Find one quarter of 28, then take three quarters.",

            options: [
                "18",
                "20",
                "21",
                "24"
            ],

            correctAnswer: "21",

            explanation:
                "1/4 of 28 is 7. Three quarters is 3 × 7 = 21."
        },

        {
            id: "fo-017",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 2/3 of 24?",

            hint: "Divide 24 by 3, then multiply by 2.",

            options: [
                "12",
                "14",
                "16",
                "18"
            ],

            correctAnswer: "16",

            explanation:
                "1/3 of 24 is 8. Two thirds is 2 × 8 = 16."
        },

        {
            id: "fo-018",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 4/5 of 35?",

            hint: "Find one fifth of 35, then multiply by 4.",

            options: [
                "24",
                "26",
                "28",
                "30"
            ],

            correctAnswer: "28",

            explanation:
                "1/5 of 35 is 7. Four fifths is 4 × 7 = 28."
        },

        {
            id: "fo-019",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/10 of 80?",

            hint: "Find one tenth of 80 first.",

            options: [
                "18",
                "20",
                "24",
                "30"
            ],

            correctAnswer: "24",

            explanation:
                "1/10 of 80 is 8. Three tenths is 3 × 8 = 24."
        },

        {
            id: "fo-020",
            skillId: "fractions-of-amounts",
            stage: "understand",
            difficulty: 2,

            question: "Sia has 32 stickers. She gives 3/4 of them to her friends. How many stickers does she give away?",

            hint: "Find 1/4 of 32, then multiply by 3.",

            options: [
                "18",
                "20",
                "24",
                "26"
            ],

            correctAnswer: "24",

            explanation:
                "1/4 of 32 is 8. Three quarters is 3 × 8 = 24, so she gives away 24 stickers."
        },
                {
            id: "fo-021",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "What is 2/3 of 36?",

            hint: "Find 1/3 of 36 first, then multiply by 2.",

            options: [
                "18",
                "20",
                "24",
                "27"
            ],

            correctAnswer: "24",

            explanation:
                "1/3 of 36 is 12. Two thirds is 2 × 12 = 24."
        },

        {
            id: "fo-022",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "What is 3/4 of 36?",

            hint: "Find one quarter of 36, then take three of those quarters.",

            options: [
                "24",
                "27",
                "28",
                "30"
            ],

            correctAnswer: "27",

            explanation:
                "1/4 of 36 is 9. Three quarters is 3 × 9 = 27."
        },

        {
            id: "fo-023",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "A box contains 40 magical gems. Sia finds 3/5 of them. How many gems does she find?",

            hint: "Find 1/5 of 40 first.",

            options: [
                "20",
                "24",
                "25",
                "30"
            ],

            correctAnswer: "24",

            explanation:
                "1/5 of 40 is 8. Three fifths is 3 × 8 = 24."
        },

        {
            id: "fo-024",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "There are 45 stars in a collection. What is 2/5 of the stars?",

            hint: "Divide 45 by 5, then multiply by 2.",

            options: [
                "15",
                "18",
                "20",
                "25"
            ],

            correctAnswer: "18",

            explanation:
                "1/5 of 45 is 9. Two fifths is 2 × 9 = 18."
        },

        {
            id: "fo-025",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "A wizard has 48 potion bottles. He uses 3/8 of them. How many bottles does he use?",

            hint: "Find 1/8 of 48, then multiply by 3.",

            options: [
                "16",
                "18",
                "20",
                "24"
            ],

            correctAnswer: "18",

            explanation:
                "1/8 of 48 is 6. Three eighths is 3 × 6 = 18."
        },

        {
            id: "fo-026",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "Sia has 50 points. She spends 2/5 of her points. How many points does she spend?",

            hint: "Find one fifth of 50 first.",

            options: [
                "15",
                "20",
                "25",
                "30"
            ],

            correctAnswer: "20",

            explanation:
                "1/5 of 50 is 10. Two fifths is 2 × 10 = 20."
        },

        {
            id: "fo-027",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "A treasure chest contains 60 coins. Sia takes 3/10 of them. How many coins does she take?",

            hint: "Find one tenth of 60, then multiply by 3.",

            options: [
                "12",
                "15",
                "18",
                "20"
            ],

            correctAnswer: "18",

            explanation:
                "1/10 of 60 is 6. Three tenths is 3 × 6 = 18."
        },

        {
            id: "fo-028",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "There are 72 books on a shelf. What is 1/8 of the books?",

            hint: "Divide 72 into 8 equal groups.",

            options: [
                "8",
                "9",
                "10",
                "12"
            ],

            correctAnswer: "9",

            explanation:
                "72 divided by 8 is 9, so 1/8 of 72 is 9."
        },

        {
            id: "fo-029",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "A garden has 80 flowers. 3/4 of them are blue. How many blue flowers are there?",

            hint: "Find 1/4 of 80, then multiply by 3.",

            options: [
                "50",
                "60",
                "64",
                "70"
            ],

            correctAnswer: "60",

            explanation:
                "1/4 of 80 is 20. Three quarters is 3 × 20 = 60."
        },

        {
            id: "fo-030",
            skillId: "fractions-of-amounts",
            stage: "master",
            difficulty: 3,

            question: "Sia has 90 stars. She gives 2/3 of them to Wizzy. How many stars does Wizzy receive?",

            hint: "Find 1/3 of 90, then double it.",

            options: [
                "30",
                "45",
                "60",
                "70"
            ],

            correctAnswer: "60",

            explanation:
                "1/3 of 90 is 30. Two thirds is 2 × 30 = 60."

        }

    ]
};

export default fractionsOfAmounts;

export {
    fractionsOfAmounts
};