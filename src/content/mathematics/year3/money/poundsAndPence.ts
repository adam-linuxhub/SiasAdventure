import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  POUNDS AND PENCE
==================================================*/

const poundsAndPence: SkillContent = {
    skillId: "pounds-and-pence",

    title: "Pounds and Pence",

    description:
        "Recognise, compare and calculate amounts of money using pounds and pence.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "pp-001",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "How many pence are in £1?",

            hint: "Remember how pounds and pence are related.",

            options: [
                "10p",
                "50p",
                "100p",
                "1,000p"
            ],

            correctAnswer: "100p",

            explanation:
                "£1 is equal to 100 pence."
        },

        {
            id: "pp-002",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Which amount is equal to £2?",

            hint: "Think about how many pence are in one pound.",

            options: [
                "20p",
                "200p",
                "£20",
                "2p"
            ],

            correctAnswer: "200p",

            explanation:
                "£1 is 100p, so £2 is 200p."
        },

        {
            id: "pp-003",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Which amount is greater?",

            hint: "Convert the amounts into the same unit.",

            options: [
                "£1",
                "75p",
                "They are equal",
                "There is not enough information"
            ],

            correctAnswer: "£1",

            explanation:
                "£1 is 100p, which is greater than 75p."
        },

        {
            id: "pp-004",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Which amount is smaller?",

            hint: "Remember that £1 is 100p.",

            options: [
                "£2",
                "150p",
                "£1",
                "75p"
            ],

            correctAnswer: "75p",

            explanation:
                "75p is less than £1, 150p and £2."
        },

        {
            id: "pp-005",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "How many pence are in £5?",

            hint: "Multiply 100p by 5.",

            options: [
                "50p",
                "500p",
                "550p",
                "5,000p"
            ],

            correctAnswer: "500p",

            explanation:
                "£5 = 5 × 100p = 500p."
        },

        {
            id: "pp-006",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Which amount is the same as 250p?",

            hint: "100p makes £1.",

            options: [
                "£1 25p",
                "£2 5p",
                "£2 50p",
                "£25"
            ],

            correctAnswer: "£2 50p",

            explanation:
                "250p = 200p + 50p = £2 50p."
        },

        {
            id: "pp-007",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Which amount is equal to £3 40p?",

            hint: "Change the pounds into pence, then add the remaining pence.",

            options: [
                "304p",
                "340p",
                "350p",
                "430p"
            ],

            correctAnswer: "340p",

            explanation:
                "£3 = 300p. 300p + 40p = 340p."
        },

        {
            id: "pp-008",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Which amount is equal to 475p?",

            hint: "Separate the pounds from the remaining pence.",

            options: [
                "£4 25p",
                "£4 50p",
                "£4 75p",
                "£5 75p"
            ],

            correctAnswer: "£4 75p",

            explanation:
                "475p = 400p + 75p = £4 75p."
        },

        {
            id: "pp-009",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Which amount is closest to £5?",

            hint: "Compare the difference between each amount and £5.",

            options: [
                "£4 20p",
                "£4 50p",
                "£4 90p",
                "£5 50p"
            ],

            correctAnswer: "£4 90p",

            explanation:
                "£4 90p is only 10p away from £5, making it the closest."
        },

        {
            id: "pp-010",
            skillId: "pounds-and-pence",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has £2 and 30p. How much money does she have in pence?",

            hint: "Change £2 into pence and then add 30p.",

            options: [
                "203p",
                "230p",
                "250p",
                "320p"
            ],

            correctAnswer: "230p",

            explanation:
                "£2 = 200p. 200p + 30p = 230p."
        },
                {
            id: "pp-011",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "Sia has £3 and spends £1. How much money does she have left?",

            hint: "Subtract £1 from £3.",

            options: [
                "£1",
                "£2",
                "£2 50p",
                "£4"
            ],

            correctAnswer: "£2",

            explanation:
                "£3 − £1 = £2, so Sia has £2 left."
        },

        {
            id: "pp-012",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "A book costs £2 50p and a pencil costs 50p. How much do they cost altogether?",

            hint: "Add the two prices.",

            options: [
                "£2 50p",
                "£3",
                "£3 50p",
                "£4"
            ],

            correctAnswer: "£3",

            explanation:
                "£2 50p + 50p = £3."
        },

        {
            id: "pp-013",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "A toy costs £4. Sia pays with £5. How much change does she receive?",

            hint: "Find the difference between £5 and £4.",

            options: [
                "50p",
                "£1",
                "£1 50p",
                "£2"
            ],

            correctAnswer: "£1",

            explanation:
                "£5 − £4 = £1, so Sia receives £1 change."
        },

        {
            id: "pp-014",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "A notebook costs £1 20p. Sia buys two notebooks. How much does she spend?",

            hint: "Double £1 20p.",

            options: [
                "£2",
                "£2 20p",
                "£2 40p",
                "£3"
            ],

            correctAnswer: "£2 40p",

            explanation:
                "£1 20p + £1 20p = £2 40p."
        },

        {
            id: "pp-015",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "Sia has £5 and spends £2 30p. How much money remains?",

            hint: "Think of £5 as £4 100p before subtracting £2 30p.",

            options: [
                "£2 30p",
                "£2 50p",
                "£2 70p",
                "£3 30p"
            ],

            correctAnswer: "£2 70p",

            explanation:
                "£5 00p − £2 30p = £2 70p."
        },

        {
            id: "pp-016",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "A game costs £3 50p. Sia has £4. How much more money does she need?",

            hint: "Find the difference between £4 and £3 50p.",

            options: [
                "25p",
                "50p",
                "75p",
                "£1"
            ],

            correctAnswer: "50p",

            explanation:
                "£4 − £3 50p = 50p, so Sia needs another 50p."
        },

        {
            id: "pp-017",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "Three stickers cost 40p each. How much do they cost altogether?",

            hint: "Find 3 groups of 40p.",

            options: [
                "80p",
                "£1",
                "£1 20p",
                "£1 40p"
            ],

            correctAnswer: "£1 20p",

            explanation:
                "3 × 40p = 120p, which is £1 20p."
        },

        {
            id: "pp-018",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "A pencil costs 35p. How much do 4 pencils cost?",

            hint: "Multiply 35p by 4.",

            options: [
                "£1",
                "£1 20p",
                "£1 40p",
                "£1 60p"
            ],

            correctAnswer: "£1 40p",

            explanation:
                "35p × 4 = 140p, which is £1 40p."
        },

        {
            id: "pp-019",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "A book costs £2 75p. Sia pays with £5. How much change does she receive?",

            hint: "Subtract £2 75p from £5.",

            options: [
                "£2 15p",
                "£2 25p",
                "£2 35p",
                "£2 75p"
            ],

            correctAnswer: "£2 25p",

            explanation:
                "£5 00p − £2 75p = £2 25p."
        },

        {
            id: "pp-020",
            skillId: "pounds-and-pence",
            stage: "apply",
            difficulty: 2,

            question: "Sia buys a £1 50p notebook and a 75p pencil. How much does she spend altogether?",

            hint: "Add £1 50p and 75p.",

            options: [
                "£2",
                "£2 15p",
                "£2 25p",
                "£2 50p"
            ],

            correctAnswer: "£2 25p",

            explanation:
                "£1 50p + 75p = £2 25p."
        },
                {
            id: "pp-021",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "Sia has £5. She buys a book for £2 75p and a pencil for 60p. How much money does she have left?",

            hint: "Find the total cost first, then subtract it from £5.",

            options: [
                "£1 55p",
                "£1 65p",
                "£1 75p",
                "£2 05p"
            ],

            correctAnswer: "£1 65p",

            explanation:
                "£2 75p + 60p = £3 35p. £5 − £3 35p = £1 65p."
        },

        {
            id: "pp-022",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "A game costs £1 25p. How much do 4 games cost?",

            hint: "Multiply £1 25p by 4.",

            options: [
                "£4",
                "£4 25p",
                "£5",
                "£5 25p"
            ],

            correctAnswer: "£5",

            explanation:
                "£1 25p × 4 = £5."
        },

        {
            id: "pp-023",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "Sia has £10 and buys three items costing £2 40p, £1 75p and £3 20p. How much change does she receive?",

            hint: "Add the three prices before finding the change.",

            options: [
                "£2 55p",
                "£2 65p",
                "£2 75p",
                "£3 05p"
            ],

            correctAnswer: "£2 65p",

            explanation:
                "£2 40p + £1 75p + £3 20p = £7 35p. £10 − £7 35p = £2 65p."
        },

        {
            id: "pp-024",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "A shop sells pencils for 25p each. How many pencils can Sia buy with £2?",

            hint: "Change £2 into pence and divide by 25p.",

            options: [
                "6",
                "7",
                "8",
                "10"
            ],

            correctAnswer: "8",

            explanation:
                "£2 = 200p. 200p ÷ 25p = 8, so Sia can buy 8 pencils."
        },

        {
            id: "pp-025",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "Sia buys 3 notebooks at £1 40p each. How much does she spend?",

            hint: "Multiply £1 40p by 3.",

            options: [
                "£3 20p",
                "£3 80p",
                "£4 20p",
                "£4 40p"
            ],

            correctAnswer: "£4 20p",

            explanation:
                "£1 40p × 3 = £4 20p."
        },

        {
            id: "pp-026",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "A toy costs £6 50p. Sia has £10. She also spends £1 on a snack. How much money remains?",

            hint: "Find the total amount spent, then subtract it from £10.",

            options: [
                "£2 25p",
                "£2 50p",
                "£2 75p",
                "£3 50p"
            ],

            correctAnswer: "£2 50p",

            explanation:
                "£6 50p + £1 = £7 50p. £10 − £7 50p = £2 50p."
        },

        {
            id: "pp-027",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "Four identical badges cost £3 altogether. How much does each badge cost?",

            hint: "Share £3 equally between 4 badges.",

            options: [
                "50p",
                "75p",
                "80p",
                "£1"
            ],

            correctAnswer: "75p",

            explanation:
                "£3 = 300p. 300p ÷ 4 = 75p, so each badge costs 75p."
        },

        {
            id: "pp-028",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "Sia has £4 50p. She buys two items costing £1 25p each. How much money remains?",

            hint: "First find the cost of the two items.",

            options: [
                "£1 75p",
                "£2",
                "£2 25p",
                "£2 50p"
            ],

            correctAnswer: "£2",

            explanation:
                "£1 25p × 2 = £2 50p. £4 50p − £2 50p = £2."
        },

        {
            id: "pp-029",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "A book costs £3 60p. A second book costs £1 40p. Sia pays with £10. How much change does she receive?",

            hint: "Add the two prices first.",

            options: [
                "£4",
                "£4 50p",
                "£5",
                "£5 50p"
            ],

            correctAnswer: "£5",

            explanation:
                "£3 60p + £1 40p = £5. £10 − £5 = £5 change."
        },

        {
            id: "pp-030",
            skillId: "pounds-and-pence",
            stage: "master",
            difficulty: 3,

            question: "Sia has £8. She spends £2 50p on a game and £1 75p on a notebook. How much money does she have left?",

            hint: "Add the two amounts spent, then subtract from £8.",

            options: [
                "£3 50p",
                "£3 75p",
                "£4",
                "£4 25p"
            ],

            correctAnswer: "£3 75p",

            explanation:
                "£2 50p + £1 75p = £4 25p. £8 − £4 25p = £3 75p."
        }

    ]
};

export default poundsAndPence;

export {
    poundsAndPence
};