import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  MONEY PROBLEMS
==================================================*/

const moneyProblems: SkillContent = {
    skillId: "money-problems",

    title: "Money Problems",

    description:
        "Solve Year 3 problems involving prices, totals, change and simple money calculations.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "money-problems-001",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A pencil costs 40p. How much do two pencils cost?",

            hint: "Find two groups of 40p.",

            options: [
                "60p",
                "70p",
                "80p",
                "90p"
            ],

            correctAnswer: "80p",

            explanation:
                "40p + 40p = 80p, so two pencils cost 80p."
        },

        {
            id: "money-problems-002",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A book costs £3. Sia pays with £5. How much change does she get?",

            hint: "Find the difference between £5 and £3.",

            options: [
                "£1",
                "£2",
                "£3",
                "£8"
            ],

            correctAnswer: "£2",

            explanation:
                "£5 − £3 = £2, so Sia gets £2 change."
        },

        {
            id: "money-problems-003",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A toy costs £2 50p. Which coins could pay for it exactly?",

            hint: "Look for a combination that totals 250p.",

            options: [
                "£1 and 50p",
                "£2 and 50p",
                "£2 and 20p",
                "£1 and 20p"
            ],

            correctAnswer: "£2 and 50p",

            explanation:
                "£2 + 50p = £2 50p, so those coins pay for the toy exactly."
        },

        {
            id: "money-problems-004",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has £4. She spends £1 50p. How much money remains?",

            hint: "Subtract £1 50p from £4.",

            options: [
                "£2",
                "£2 25p",
                "£2 50p",
                "£3"
            ],

            correctAnswer: "£2 50p",

            explanation:
                "£4 − £1 50p = £2 50p."
        },

        {
            id: "money-problems-005",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A sticker costs 25p. How much do four stickers cost?",

            hint: "Find four groups of 25p.",

            options: [
                "75p",
                "90p",
                "£1",
                "£1 25p"
            ],

            correctAnswer: "£1",

            explanation:
                "25p × 4 = 100p, which is £1."
        },

        {
            id: "money-problems-006",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A game costs £4 20p. A snack costs 80p. How much do they cost altogether?",

            hint: "Add the pounds and pence.",

            options: [
                "£4 80p",
                "£5",
                "£5 20p",
                "£5 80p"
            ],

            correctAnswer: "£5",

            explanation:
                "£4 20p + 80p = £5."
        },

        {
            id: "money-problems-007",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has £10. She buys a book for £6. How much money does she have left?",

            hint: "Subtract the cost of the book from £10.",

            options: [
                "£3",
                "£4",
                "£5",
                "£6"
            ],

            correctAnswer: "£4",

            explanation:
                "£10 − £6 = £4, so Sia has £4 left."
        },

        {
            id: "money-problems-008",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A pencil costs 30p and an eraser costs 20p. What is the total cost?",

            hint: "Add 30p and 20p.",

            options: [
                "40p",
                "50p",
                "60p",
                "70p"
            ],

            correctAnswer: "50p",

            explanation:
                "30p + 20p = 50p."
        },

        {
            id: "money-problems-009",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A toy costs £3 50p. Which amount of change would you get from £5?",

            hint: "Find the difference between £5 and £3 50p.",

            options: [
                "£1",
                "£1 25p",
                "£1 50p",
                "£2"
            ],

            correctAnswer: "£1 50p",

            explanation:
                "£5 − £3 50p = £1 50p."
        },

        {
            id: "money-problems-010",
            skillId: "money-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia buys two items costing £1 20p each. How much does she spend?",

            hint: "Double £1 20p.",

            options: [
                "£2",
                "£2 20p",
                "£2 40p",
                "£2 60p"
            ],

            correctAnswer: "£2 40p",

            explanation:
                "£1 20p + £1 20p = £2 40p."
        },
                {
            id: "money-problems-011",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "A book costs £2 40p and a pencil costs 60p. How much do they cost altogether?",

            hint: "Add the two prices.",

            options: [
                "£2 80p",
                "£3",
                "£3 20p",
                "£3 60p"
            ],

            correctAnswer: "£3",

            explanation:
                "£2 40p + 60p = £3."
        },

        {
            id: "money-problems-012",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has £5. She buys a game for £2 75p. How much change does she receive?",

            hint: "Find the difference between £5 and £2 75p.",

            options: [
                "£2",
                "£2 15p",
                "£2 25p",
                "£2 75p"
            ],

            correctAnswer: "£2 25p",

            explanation:
                "£5 00p − £2 75p = £2 25p."
        },

        {
            id: "money-problems-013",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "Three pencils cost 35p each. How much do they cost altogether?",

            hint: "Find three groups of 35p.",

            options: [
                "95p",
                "£1 05p",
                "£1 15p",
                "£1 25p"
            ],

            correctAnswer: "£1 05p",

            explanation:
                "35p × 3 = 105p, which is £1 05p."
        },

        {
            id: "money-problems-014",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "A notebook costs £1 50p. Sia buys two notebooks and a 50p pencil. How much does she spend?",

            hint: "Find the cost of the two notebooks first.",

            options: [
                "£3",
                "£3 25p",
                "£3 50p",
                "£4"
            ],

            correctAnswer: "£3 50p",

            explanation:
                "£1 50p × 2 = £3. Adding 50p gives £3 50p."
        },

        {
            id: "money-problems-015",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has £10. She buys a book for £3 50p and a game for £2 25p. How much money remains?",

            hint: "Add the two costs before finding the change.",

            options: [
                "£3 75p",
                "£4",
                "£4 25p",
                "£4 75p"
            ],

            correctAnswer: "£4 25p",

            explanation:
                "£3 50p + £2 25p = £5 75p. £10 − £5 75p = £4 25p."
        },

        {
            id: "money-problems-016",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "A sticker costs 20p. How many stickers can Sia buy with £1?",

            hint: "Change £1 into pence, then divide by 20p.",

            options: [
                "4",
                "5",
                "6",
                "10"
            ],

            correctAnswer: "5",

            explanation:
                "£1 = 100p. 100p ÷ 20p = 5, so Sia can buy 5 stickers."
        },

        {
            id: "money-problems-017",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "A toy costs £4 50p. Sia has £6. How much more money does she need?",

            hint: "Compare £6 with £4 50p.",

            options: [
                "£1",
                "£1 25p",
                "£1 50p",
                "£2"
            ],

            correctAnswer: "£1 50p",

            explanation:
                "£6 − £4 50p = £1 50p."
        },

        {
            id: "money-problems-018",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "Four badges cost 75p each. What is the total cost?",

            hint: "Find four groups of 75p.",

            options: [
                "£2 50p",
                "£3",
                "£3 50p",
                "£4"
            ],

            correctAnswer: "£3",

            explanation:
                "75p × 4 = 300p, which is £3."
        },

        {
            id: "money-problems-019",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "A book costs £2 80p. Sia pays with £5. How much change does she receive?",

            hint: "Subtract £2 80p from £5.",

            options: [
                "£2",
                "£2 10p",
                "£2 20p",
                "£2 80p"
            ],

            correctAnswer: "£2 20p",

            explanation:
                "£5 00p − £2 80p = £2 20p."
        },

        {
            id: "money-problems-020",
            skillId: "money-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia buys a £1 80p notebook and three 40p pencils. How much does she spend altogether?",

            hint: "Find the cost of the three pencils first.",

            options: [
                "£2 60p",
                "£2 80p",
                "£3",
                "£3 20p"
            ],

            correctAnswer: "£3",

            explanation:
                "3 × 40p = £1 20p. £1 80p + £1 20p = £3."
        },
                {
            id: "money-problems-021",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has £10. She buys a book for £2 75p, a game for £3 40p and a pencil for 85p. How much money does she have left?",

            hint: "Add all three prices before finding the change.",

            options: [
                "£2 90p",
                "£3",
                "£3 10p",
                "£3 20p"
            ],

            correctAnswer: "£3",

            explanation:
                "£2 75p + £3 40p + 85p = £7. £10 − £7 = £3."
        },

        {
            id: "money-problems-022",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "A notebook costs £1 25p. Sia buys 4 notebooks. How much does she spend?",

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
            id: "money-problems-023",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has £8. She buys two games costing £2 40p each. How much money remains?",

            hint: "Find the cost of both games first.",

            options: [
                "£2 80p",
                "£3 20p",
                "£3 40p",
                "£4 20p"
            ],

            correctAnswer: "£3 20p",

            explanation:
                "£2 40p × 2 = £4 80p. £8 − £4 80p = £3 20p."
        },

        {
            id: "money-problems-024",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "A shop sells pencils for 25p each. Sia has £2. How many pencils can she buy?",

            hint: "Change £2 into pence and divide by 25p.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "£2 = 200p. 200p ÷ 25p = 8, so Sia can buy 8 pencils."
        },

        {
            id: "money-problems-025",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "A book costs £3 60p and a game costs £2 40p. Sia pays with £10. How much change does she receive?",

            hint: "Add the two prices first.",

            options: [
                "£3",
                "£3 50p",
                "£4",
                "£4 50p"
            ],

            correctAnswer: "£4",

            explanation:
                "£3 60p + £2 40p = £6. £10 − £6 = £4."
        },

        {
            id: "money-problems-026",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "Three identical toys cost £6 altogether. How much does each toy cost?",

            hint: "Share £6 equally between 3 toys.",

            options: [
                "£1",
                "£2",
                "£3",
                "£4"
            ],

            correctAnswer: "£2",

            explanation:
                "£6 ÷ 3 = £2, so each toy costs £2."
        },

        {
            id: "money-problems-027",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia buys 3 stickers at 35p each and a notebook costing £1 50p. What is the total cost?",

            hint: "Find the cost of the stickers first.",

            options: [
                "£2 25p",
                "£2 45p",
                "£2 55p",
                "£2 75p"
            ],

            correctAnswer: "£2 55p",

            explanation:
                "3 × 35p = £1 05p. £1 05p + £1 50p = £2 55p."
        },

        {
            id: "money-problems-028",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "A game costs £4 75p. Sia has £10 and spends another £1 25p on a snack. How much money remains?",

            hint: "Add the game and snack costs first.",

            options: [
                "£3 50p",
                "£3 75p",
                "£4",
                "£4 25p"
            ],

            correctAnswer: "£4",

            explanation:
                "£4 75p + £1 25p = £6. £10 − £6 = £4."
        },

        {
            id: "money-problems-029",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "A shop sells notebooks for £1 50p each. Sia has £5. How many notebooks can she buy?",

            hint: "Try adding £1 50p repeatedly until you reach £5 without going over.",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "3 × £1 50p = £4 50p. Four notebooks would cost £6, so Sia can buy 3."
        },

               {
            id: "money-problems-030",
            skillId: "money-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has £12. She buys 2 games at £2 50p each and 3 pencils at 40p each. How much money does she have left?",

            hint: "Find the total cost of the games and pencils before subtracting from £12.",

            options: [
                "£5 20p",
                "£5 80p",
                "£6 20p",
                "£6 80p"
            ],

            correctAnswer: "£5 80p",

            explanation:
                "2 × £2 50p = £5. 3 × 40p = £1 20p. Total spent = £6 20p. £12 − £6 20p = £5 80p."
        }

    ]
};

export default moneyProblems;

export {
    moneyProblems
};