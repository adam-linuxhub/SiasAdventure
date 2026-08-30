import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  FRACTIONS PROBLEM SOLVING
==================================================*/

const fractionsProblemSolving: SkillContent = {
    skillId: "fractions-problem-solving",

    title: "Fractions Problem Solving",

    description: "Solve practical problems involving simple fractions, including finding fractions of quantities and recognising fractions in everyday situations.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "fps-001",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "There are 8 apples. Half of them are green. How many green apples are there?",

            hint: "Find half of 8 by sharing the apples into 2 equal groups.",

            options: [
                "2",
                "4",
                "6",
                "8"
            ],

            correctAnswer: "4",

            explanation:
                "Half of 8 is 4, so there are 4 green apples."
        },

        {
            id: "fps-002",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "A box contains 12 pencils. One third are red. How many pencils are red?",

            hint: "Divide 12 into 3 equal groups.",

            options: [
                "3",
                "4",
                "6",
                "9"
            ],

            correctAnswer: "4",

            explanation:
                "12 divided by 3 is 4, so one third of the pencils are 4 red pencils."
        },

        {
            id: "fps-003",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "There are 20 stars. One quarter are gold. How many stars are gold?",

            hint: "Find one quarter by dividing 20 into 4 equal groups.",

            options: [
                "4",
                "5",
                "6",
                "10"
            ],

            correctAnswer: "5",

            explanation:
                "20 divided by 4 is 5, so 5 stars are gold."
        },

        {
            id: "fps-004",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "A basket has 15 fruits. One fifth are oranges. How many oranges are there?",

            hint: "Divide 15 into 5 equal groups.",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "15 divided by 5 is 3, so there are 3 oranges."
        },

        {
            id: "fps-005",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "A class has 18 children. One half bring packed lunches. How many children bring packed lunches?",

            hint: "Find half of 18.",

            options: [
                "6",
                "8",
                "9",
                "12"
            ],

            correctAnswer: "9",

            explanation:
                "Half of 18 is 9, so 9 children bring packed lunches."
        },

        {
            id: "fps-006",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "A shelf holds 24 books. One third are adventure books. How many adventure books are there?",

            hint: "Divide 24 into 3 equal groups.",

            options: [
                "6",
                "8",
                "10",
                "12"
            ],

            correctAnswer: "8",

            explanation:
                "24 divided by 3 is 8, so there are 8 adventure books."
        },

        {
            id: "fps-007",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "A treasure chest contains 16 gems. One quarter are blue. How many blue gems are there?",

            hint: "Find one quarter of 16.",

            options: [
                "2",
                "4",
                "6",
                "8"
            ],

            correctAnswer: "4",

            explanation:
                "16 divided by 4 is 4, so there are 4 blue gems."
        },

        {
            id: "fps-008",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "There are 30 counters. One fifth are yellow. How many yellow counters are there?",

            hint: "Share 30 counters equally into 5 groups.",

            options: [
                "5",
                "6",
                "10",
                "15"
            ],

            correctAnswer: "6",

            explanation:
                "30 divided by 5 is 6, so 6 counters are yellow."
        },

        {
            id: "fps-009",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "A wizard has 21 magical cards. One third are silver. How many silver cards does he have?",

            hint: "Find one third of 21.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "21 divided by 3 is 7, so the wizard has 7 silver cards."
        },

        {
            id: "fps-010",
            skillId: "fractions-problem-solving",
            stage: "recognise",
            difficulty: 1,

            question: "A garden has 28 flowers. One quarter are purple. How many purple flowers are there?",

            hint: "Divide 28 into 4 equal groups.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "28 divided by 4 is 7, so there are 7 purple flowers."
        },
                {
            id: "fps-021",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "A treasure chest contains 60 gems. Sia finds 3/5 of them. How many gems does she find?",

            hint: "Find 1/5 of 60 first, then find 3/5.",

            options: [
                "30",
                "36",
                "40",
                "45"
            ],

            correctAnswer: "36",

            explanation:
                "1/5 of 60 is 12. Three fifths is 3 × 12 = 36."
        },

        {
            id: "fps-022",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "A school has 48 pupils in a year group. 3/8 of them join a club. How many pupils join the club?",

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
            id: "fps-023",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "Sia has 72 beads. She uses 2/3 of them to make a bracelet. How many beads does she use?",

            hint: "Find 1/3 of 72, then double it.",

            options: [
                "36",
                "42",
                "48",
                "54"
            ],

            correctAnswer: "48",

            explanation:
                "1/3 of 72 is 24. Two thirds is 2 × 24 = 48."
        },

        {
            id: "fps-024",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "A wizard has 80 magical cards. 3/4 are spell cards. How many are not spell cards?",

            hint: "First find 3/4 of 80. Then subtract that from the whole amount.",

            options: [
                "15",
                "20",
                "25",
                "60"
            ],

            correctAnswer: "20",

            explanation:
                "3/4 of 80 is 60. There are 80 cards altogether, so 80 - 60 = 20 cards are not spell cards."
        },

        {
            id: "fps-025",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "There are 90 flowers in a garden. 2/5 are red and the rest are yellow. How many are yellow?",

            hint: "Find 2/5 of 90, then subtract it from 90.",

            options: [
                "36",
                "45",
                "54",
                "60"
            ],

            correctAnswer: "54",

            explanation:
                "1/5 of 90 is 18, so 2/5 is 36. Therefore, 90 - 36 = 54 yellow flowers."
        },

        {
            id: "fps-026",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "A 40-page book has 3/5 of its pages left to read. How many pages has Sia already read?",

            hint: "If 3/5 is left, what fraction has already been read?",

            options: [
                "12 pages",
                "16 pages",
                "20 pages",
                "24 pages"
            ],

            correctAnswer: "16 pages",

            explanation:
                "If 3/5 is left, then 2/5 has been read. 1/5 of 40 is 8, so 2/5 is 16 pages."
        },

        {
            id: "fps-027",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "Sia has 36 sweets. She gives 1/3 to Hop and 1/6 to Hootie. How many sweets does she give away altogether?",

            hint: "Find 1/3 and 1/6 of 36 separately, then add them.",

            options: [
                "12",
                "15",
                "18",
                "24"
            ],

            correctAnswer: "18",

            explanation:
                "1/3 of 36 is 12 and 1/6 of 36 is 6. Together, she gives away 12 + 6 = 18 sweets."
        },

        {
            id: "fps-028",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "A class has 30 pupils. 1/5 are absent. Of the pupils who are present, 1/3 choose art. How many pupils choose art?",

            hint: "First find how many pupils are absent. Then find one third of those who are present.",

            options: [
                "6",
                "8",
                "10",
                "12"
            ],

            correctAnswer: "8",

            explanation:
                "1/5 of 30 is 6, so 24 pupils are present. One third of 24 is 8."
        },

        {
            id: "fps-029",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "A treasure map has 24 spaces. Sia travels 1/4 of the spaces in the morning and 1/3 in the afternoon. How many spaces does she travel altogether?",

            hint: "Find each fraction of 24, then add the two amounts.",

            options: [
                "12 spaces",
                "13 spaces",
                "14 spaces",
                "16 spaces"
            ],

            correctAnswer: "14 spaces",

            explanation:
                "1/4 of 24 is 6 and 1/3 of 24 is 8. Together, Sia travels 6 + 8 = 14 spaces."
        },

        {
            id: "fps-030",
            skillId: "fractions-problem-solving",
            stage: "master",
            difficulty: 3,

            question: "A box contains 60 magical tokens. 1/2 are gold and 1/5 are silver. The rest are bronze. How many tokens are bronze?",

            hint: "Find the gold and silver tokens first, then subtract both from 60.",

            options: [
                "15 tokens",
                "18 tokens",
                "20 tokens",
                "30 tokens"
            ],

            correctAnswer: "18 tokens",

            explanation:
                "Half of 60 is 30 and one fifth of 60 is 12. So 30 + 12 = 42 are gold or silver. 60 - 42 = 18 bronze tokens."
        }

    ]
};

export default fractionsProblemSolving;

export {
    fractionsProblemSolving
};