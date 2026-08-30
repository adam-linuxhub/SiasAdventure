import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  MULTIPLICATION PROBLEMS
==================================================*/

const multiplicationProblems: SkillContent = {
    skillId: "multiplication-problems",

    title: "Multiplication Problems",

    description: "Solve Year 3 problems involving multiplication using the 3, 4 and 8 times tables.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "mp-001",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 3 pencils in each pack. How many pencils are in 4 packs?",

            hint: "Think of 4 equal groups of 3.",

            options: [
                "9",
                "12",
                "15",
                "16"
            ],

            correctAnswer: "12",

            explanation:
                "There are 4 groups of 3 pencils. 4 × 3 = 12, so there are 12 pencils."
        },

        {
            id: "mp-002",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A shelf has 4 rows with 3 books in each row. How many books are there?",

            hint: "Multiply the number of rows by the number of books in each row.",

            options: [
                "10",
                "12",
                "14",
                "16"
            ],

            correctAnswer: "12",

            explanation:
                "There are 4 groups of 3 books. 4 × 3 = 12."
        },

        {
            id: "mp-003",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia finds 5 bags with 4 shells in each bag. How many shells does she find?",

            hint: "Think of 5 groups of 4.",

            options: [
                "16",
                "18",
                "20",
                "24"
            ],

            correctAnswer: "20",

            explanation:
                "There are 5 groups of 4 shells. 5 × 4 = 20."
        },

        {
            id: "mp-004",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 8 stars on each card. How many stars are on 3 cards?",

            hint: "Multiply 8 by the number of cards.",

            options: [
                "21",
                "24",
                "26",
                "28"
            ],

            correctAnswer: "24",

            explanation:
                "There are 3 groups of 8 stars. 3 × 8 = 24."
        },

        {
            id: "mp-005",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A game gives 4 points for each key collected. Sia collects 6 keys. How many points does she score?",

            hint: "Find 6 groups of 4 points.",

            options: [
                "20",
                "22",
                "24",
                "28"
            ],

            correctAnswer: "24",

            explanation:
                "Sia gets 4 points for each of 6 keys. 6 × 4 = 24 points."
        },

        {
            id: "mp-006",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 4 wheels on each cart. How many wheels are on 5 carts?",

            hint: "Think of 5 groups of 4.",

            options: [
                "16",
                "20",
                "24",
                "25"
            ],

            correctAnswer: "20",

            explanation:
                "There are 5 groups of 4 wheels. 5 × 4 = 20."
        },

        {
            id: "mp-007",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A wizard places 3 gems in each pouch. How many gems are in 7 pouches?",

            hint: "Multiply 7 by 3.",

            options: [
                "18",
                "20",
                "21",
                "24"
            ],

            correctAnswer: "21",

            explanation:
                "There are 7 groups of 3 gems. 7 × 3 = 21."
        },

        {
            id: "mp-008",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Each team has 8 children. How many children are in 4 teams?",

            hint: "Think of 4 groups of 8.",

            options: [
                "24",
                "28",
                "32",
                "36"
            ],

            correctAnswer: "32",

            explanation:
                "There are 4 groups of 8 children. 4 × 8 = 32."
        },

        {
            id: "mp-009",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 3 stickers on each page. How many stickers are on 8 pages?",

            hint: "Multiply 8 by 3.",

            options: [
                "21",
                "24",
                "27",
                "30"
            ],

            correctAnswer: "24",

            explanation:
                "There are 8 groups of 3 stickers. 8 × 3 = 24."
        },

        {
            id: "mp-010",
            skillId: "multiplication-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A box contains 4 rows of 4 counters. How many counters are in the box?",

            hint: "Four groups of four make one multiplication fact.",

            options: [
                "12",
                "14",
                "16",
                "20"
            ],

            correctAnswer: "16",

            explanation:
                "There are 4 groups of 4 counters. 4 × 4 = 16."
        },
                {
            id: "mp-011",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "A farmer plants 3 rows of 8 carrots. How many carrots does the farmer plant?",

            hint: "Find 3 groups of 8.",

            options: [
                "21",
                "24",
                "27",
                "30"
            ],

            correctAnswer: "24",

            explanation:
                "There are 3 groups of 8 carrots. 3 × 8 = 24."
        },

        {
            id: "mp-012",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "A shop packs 4 pencils in each box. How many pencils are in 7 boxes?",

            hint: "Multiply 7 by 4.",

            options: [
                "24",
                "26",
                "28",
                "32"
            ],

            correctAnswer: "28",

            explanation:
                "There are 7 groups of 4 pencils. 7 × 4 = 28."
        },

        {
            id: "mp-013",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia collects 6 groups of 3 magical stones. How many stones does she collect?",

            hint: "Think of 6 groups of 3.",

            options: [
                "15",
                "18",
                "21",
                "24"
            ],

            correctAnswer: "18",

            explanation:
                "There are 6 groups of 3 stones. 6 × 3 = 18."
        },

        {
            id: "mp-014",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "There are 8 chairs at each table. How many chairs are needed for 5 tables?",

            hint: "Find 5 groups of 8 chairs.",

            options: [
                "35",
                "40",
                "42",
                "45"
            ],

            correctAnswer: "40",

            explanation:
                "There are 5 groups of 8 chairs. 5 × 8 = 40."
        },

        {
            id: "mp-015",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "A treasure chest contains 4 rows of 6 coins. How many coins are in the chest?",

            hint: "Multiply the number of rows by the number of coins in each row.",

            options: [
                "20",
                "22",
                "24",
                "28"
            ],

            correctAnswer: "24",

            explanation:
                "There are 4 groups of 6 coins. 4 × 6 = 24."
        },

        {
            id: "mp-016",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "Each spell book has 3 bookmarks. How many bookmarks are needed for 9 spell books?",

            hint: "Think of 9 groups of 3.",

            options: [
                "24",
                "27",
                "30",
                "36"
            ],

            correctAnswer: "27",

            explanation:
                "There are 9 groups of 3 bookmarks. 9 × 3 = 27."
        },

        {
            id: "mp-017",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "A gardener puts 4 flowers in each of 8 pots. How many flowers are used?",

            hint: "Multiply 8 by 4.",

            options: [
                "28",
                "30",
                "32",
                "36"
            ],

            correctAnswer: "32",

            explanation:
                "There are 8 groups of 4 flowers. 8 × 4 = 32."
        },

        {
            id: "mp-018",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "A wizard has 7 shelves with 3 potions on each shelf. How many potions are there?",

            hint: "Find 7 groups of 3.",

            options: [
                "18",
                "21",
                "24",
                "28"
            ],

            correctAnswer: "21",

            explanation:
                "There are 7 groups of 3 potions. 7 × 3 = 21."
        },

        {
            id: "mp-019",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "A class makes 6 packs containing 4 cards each. How many cards do they use?",

            hint: "Multiply the number of packs by the cards in each pack.",

            options: [
                "20",
                "22",
                "24",
                "26"
            ],

            correctAnswer: "24",

            explanation:
                "There are 6 groups of 4 cards. 6 × 4 = 24."
        },

        {
            id: "mp-020",
            skillId: "multiplication-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia finds 8 boxes with 4 crystals in each box. She gives away 4 crystals. How many crystals does she have left?",

            hint: "First find the total, then take away 4.",

            options: [
                "24",
                "28",
                "32",
                "36"
            ],

            correctAnswer: "28",

            explanation:
                "There are 8 × 4 = 32 crystals to start with. After giving away 4, 32 − 4 = 28 crystals remain."
        },
                {
            id: "mp-021",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "A library puts 8 books on each of 6 shelves. How many books are on the shelves altogether?",

            hint: "Think of 6 equal groups of 8.",

            options: [
                "42",
                "46",
                "48",
                "54"
            ],

            correctAnswer: "48",

            explanation:
                "There are 6 groups of 8 books. 6 × 8 = 48, so there are 48 books."
        },

        {
            id: "mp-022",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia earns 4 points for each crystal she finds. She finds 7 crystals. How many points does she earn?",

            hint: "Multiply 7 by 4.",

            options: [
                "24",
                "28",
                "32",
                "36"
            ],

            correctAnswer: "28",

            explanation:
                "Sia earns 4 points for each of 7 crystals. 7 × 4 = 28 points."
        },

        {
            id: "mp-023",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "There are 3 rows of 8 seats in a hall. Then 4 more seats are added. How many seats are there now?",

            hint: "First find the number of seats in the 3 rows, then add 4.",

            options: [
                "24",
                "26",
                "28",
                "32"
            ],

            correctAnswer: "28",

            explanation:
                "The 3 rows contain 3 × 8 = 24 seats. Adding 4 gives 24 + 4 = 28 seats."
        },

        {
            id: "mp-024",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "A shop has 5 boxes with 8 pencils in each box. It sells 8 pencils. How many pencils are left?",

            hint: "Find the total number of pencils first.",

            options: [
                "30",
                "32",
                "34",
                "40"
            ],

            correctAnswer: "32",

            explanation:
                "There are 5 × 8 = 40 pencils. After selling 8, 40 − 8 = 32 pencils remain."
        },

        {
            id: "mp-025",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "A teacher gives 3 stickers to each of 8 children. How many stickers does she give out?",

            hint: "Think of 8 groups of 3 stickers.",

            options: [
                "21",
                "24",
                "27",
                "30"
            ],

            correctAnswer: "24",

            explanation:
                "There are 8 groups of 3 stickers. 8 × 3 = 24 stickers."
        },

        {
            id: "mp-026",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "A wizard has 4 shelves with 8 books on each shelf. He moves 4 books to another room. How many books remain?",

            hint: "First calculate the total number of books.",

            options: [
                "24",
                "28",
                "32",
                "36"
            ],

            correctAnswer: "28",

            explanation:
                "There are 4 × 8 = 32 books. After moving 4, 32 − 4 = 28 books remain."
        },

        {
            id: "mp-027",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia collects 6 bags containing 4 shells each. She then finds 3 more shells. How many shells does she have altogether?",

            hint: "Multiply first, then add the extra shells.",

            options: [
                "24",
                "26",
                "27",
                "30"
            ],

            correctAnswer: "27",

            explanation:
                "The 6 bags contain 6 × 4 = 24 shells. Adding 3 more gives 27 shells."
        },

        {
            id: "mp-028",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "A game has 8 levels. Each level gives 3 stars. Sia completes all the levels and then earns 4 bonus stars. How many stars does she have?",

            hint: "First find the stars from the levels, then add the bonus.",

            options: [
                "24",
                "26",
                "28",
                "32"
            ],

            correctAnswer: "28",

            explanation:
                "The levels give 8 × 3 = 24 stars. Adding 4 bonus stars gives 28 stars."
        },

        {
            id: "mp-029",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "There are 4 baskets with 6 apples in each basket. Two apples are taken from each basket. How many apples are left?",

            hint: "First find the total, then work out how many apples are taken away.",

            options: [
                "12",
                "16",
                "18",
                "24"
            ],

            correctAnswer: "16",

            explanation:
                "There are 4 × 6 = 24 apples. Two apples are taken from each of 4 baskets, so 4 × 2 = 8 apples are taken. 24 − 8 = 16 apples remain."
        },

        {
            id: "mp-030",
            skillId: "multiplication-problems",
            stage: "master",
            difficulty: 3,

            question: "A treasure room has 3 chests with 8 gems in each chest. Sia finds 4 more gems outside the chests. How many gems does she find altogether?",

            hint: "Find the gems in the chests first, then add the extra gems.",

            options: [
                "24",
                "28",
                "30",
                "32"
            ],

            correctAnswer: "28",

            explanation:
                "The chests contain 3 × 8 = 24 gems. Adding 4 more gives 28 gems altogether."
        }

    ]
};

export default multiplicationProblems;

export {
    multiplicationProblems
};