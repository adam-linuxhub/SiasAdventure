import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  PERIMETER
==================================================*/

const perimeter: SkillContent = {
    skillId: "perimeter",

    title: "Perimeter",

    description: "Understand perimeter and calculate the perimeter of simple 2D shapes using known side lengths.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "per-001",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "What does the perimeter of a shape tell us?",

            hint: "Think about the distance all the way around the outside of a shape.",

            options: [
                "The distance around the outside",
                "The space inside the shape",
                "The number of corners",
                "The number of sides"
            ],

            correctAnswer: "The distance around the outside",

            explanation:
                "The perimeter is the total distance around the outside of a shape."
        },

        {
            id: "per-002",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A square has sides of 4 cm. What is its perimeter?",

            hint: "A square has 4 equal sides. Add the four side lengths.",

            image: "images/twoDShapes/square.png",

            options: [
                "8 cm",
                "12 cm",
                "16 cm",
                "20 cm"
            ],

            correctAnswer: "16 cm",

            explanation:
                "A square has 4 equal sides. 4 + 4 + 4 + 4 = 16 cm."
        },

        {
            id: "per-003",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A rectangle has sides of 5 cm and 3 cm. What is its perimeter?",

            hint: "A rectangle has two sides of each length.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "8 cm",
                "13 cm",
                "16 cm",
                "18 cm"
            ],

            correctAnswer: "16 cm",

            explanation:
                "The perimeter is 5 + 3 + 5 + 3 = 16 cm."
        },

        {
            id: "per-004",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A triangle has side lengths of 4 cm, 5 cm and 6 cm. What is its perimeter?",

            hint: "Add all three side lengths.",

            options: [
                "12 cm",
                "14 cm",
                "15 cm",
                "16 cm"
            ],

            correctAnswer: "15 cm",

            explanation:
                "The perimeter is 4 + 5 + 6 = 15 cm."
        },

        {
            id: "per-005",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A square has sides of 6 m. What is its perimeter?",

            hint: "Add four sides of 6 m.",

            image: "images/twoDShapes/square.png",

            options: [
                "18 m",
                "20 m",
                "24 m",
                "30 m"
            ],

            correctAnswer: "24 m",

            explanation:
                "A square has four equal sides. 6 + 6 + 6 + 6 = 24 m."
        },

        {
            id: "per-006",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A rectangle is 7 cm long and 2 cm wide. What is its perimeter?",

            hint: "Add 7 + 2 + 7 + 2.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "16 cm",
                "18 cm",
                "20 cm",
                "21 cm"
            ],

            correctAnswer: "18 cm",

            explanation:
                "The perimeter is 7 + 2 + 7 + 2 = 18 cm."
        },

        {
            id: "per-007",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A shape has side lengths of 3 cm, 4 cm, 5 cm and 6 cm. What is its perimeter?",

            hint: "Add every side length together.",

            options: [
                "16 cm",
                "17 cm",
                "18 cm",
                "19 cm"
            ],

            correctAnswer: "18 cm",

            explanation:
                "The perimeter is 3 + 4 + 5 + 6 = 18 cm."
        },

        {
            id: "per-008",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A square has a perimeter of 20 cm. How long is each side?",

            hint: "A square has 4 equal sides. Share the perimeter equally between them.",

            image: "images/twoDShapes/square.png",

            options: [
                "4 cm",
                "5 cm",
                "6 cm",
                "10 cm"
            ],

            correctAnswer: "5 cm",

            explanation:
                "A square has 4 equal sides. 20 ÷ 4 = 5 cm, so each side is 5 cm."
        },

        {
            id: "per-009",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "A rectangle has a perimeter of 18 cm. Its length is 6 cm. What is its width?",

            hint: "The two lengths use 12 cm altogether. Work out what is left for the two equal widths.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "2 cm",
                "3 cm",
                "4 cm",
                "6 cm"
            ],

            correctAnswer: "3 cm",

            explanation:
                "The two 6 cm sides total 12 cm. 18 − 12 = 6 cm remains for the two equal widths. 6 ÷ 2 = 3 cm."
        },

        {
            id: "per-010",
            skillId: "perimeter",
            stage: "recognise",
            difficulty: 1,

            question: "Which calculation finds the perimeter of a square with sides of 7 cm?",

            hint: "A square has four equal sides.",

            options: [
                "7 + 7",
                "7 + 7 + 7",
                "7 + 7 + 7 + 7",
                "7 × 7"
            ],

            correctAnswer: "7 + 7 + 7 + 7",

            explanation:
                "A square has four sides, so its perimeter is 7 + 7 + 7 + 7 = 28 cm."
        },
                {
            id: "per-011",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "A rectangle is 8 cm long and 5 cm wide. What is its perimeter?",

            hint: "Add both lengths and both widths.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "21 cm",
                "24 cm",
                "26 cm",
                "28 cm"
            ],

            correctAnswer: "26 cm",

            explanation:
                "The perimeter is 8 + 5 + 8 + 5 = 26 cm."
        },

        {
            id: "per-012",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "A square has a perimeter of 32 cm. How long is each side?",

            hint: "A square has 4 equal sides.",

            image: "images/twoDShapes/square.png",

            options: [
                "6 cm",
                "7 cm",
                "8 cm",
                "9 cm"
            ],

            correctAnswer: "8 cm",

            explanation:
                "32 ÷ 4 = 8, so each side of the square is 8 cm."
        },

        {
            id: "per-013",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "A rectangle has sides of 9 cm and 4 cm. What is its perimeter?",

            hint: "There are two 9 cm sides and two 4 cm sides.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "22 cm",
                "24 cm",
                "26 cm",
                "28 cm"
            ],

            correctAnswer: "26 cm",

            explanation:
                "The perimeter is 9 + 4 + 9 + 4 = 26 cm."
        },

        {
            id: "per-014",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "A square has sides of 9 m. What is its perimeter?",

            hint: "Multiply the side length by the number of sides.",

            image: "images/twoDShapes/square.png",

            options: [
                "27 m",
                "32 m",
                "36 m",
                "40 m"
            ],

            correctAnswer: "36 m",

            explanation:
                "A square has four equal sides. 4 × 9 = 36 m."
        },

        {
            id: "per-015",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "A rectangle has a length of 10 cm and a width of 3 cm. What is its perimeter?",

            hint: "Add 10 + 3 + 10 + 3.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "23 cm",
                "26 cm",
                "28 cm",
                "30 cm"
            ],

            correctAnswer: "26 cm",

            explanation:
                "The perimeter is 10 + 3 + 10 + 3 = 26 cm."
        },

        {
            id: "per-016",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "Sia walks around a square garden. Each side is 12 m long. How far does she walk?",

            hint: "She walks along all four sides.",

            image: "images/twoDShapes/square.png",

            options: [
                "36 m",
                "42 m",
                "48 m",
                "52 m"
            ],

            correctAnswer: "48 m",

            explanation:
                "The garden has four sides of 12 m. 4 × 12 = 48 m."
        },

        {
            id: "per-017",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "A rectangular picture frame is 11 cm long and 6 cm wide. What is the total length around the frame?",

            hint: "The total length around a shape is its perimeter.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "28 cm",
                "32 cm",
                "34 cm",
                "36 cm"
            ],

            correctAnswer: "34 cm",

            explanation:
                "The perimeter is 11 + 6 + 11 + 6 = 34 cm."
        },

        {
            id: "per-018",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "A rectangle has a perimeter of 24 cm. Its length is 8 cm. What is its width?",

            hint: "The two lengths total 16 cm. Work out what remains for the two widths.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "3 cm",
                "4 cm",
                "5 cm",
                "6 cm"
            ],

            correctAnswer: "4 cm",

            explanation:
                "The two lengths total 8 + 8 = 16 cm. 24 − 16 = 8 cm for both widths, so each width is 4 cm."
        },

                {
            id: "per-019",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has the greater perimeter: a square with sides of 7 cm or a rectangle measuring 8 cm by 5 cm?",

            hint: "Calculate both perimeters before comparing them.",

            options: [
                "The square",
                "The rectangle",
                "They have the same perimeter.",
                "There is not enough information."
            ],

            correctAnswer: "The square",

            explanation:
                "The square has a perimeter of 4 × 7 = 28 cm. The rectangle has a perimeter of 8 + 5 + 8 + 5 = 26 cm. Therefore, the square has the greater perimeter."
        },

        {
            id: "per-020",
            skillId: "perimeter",
            stage: "apply",
            difficulty: 2,

            question: "Sia has a rectangle with a perimeter of 30 cm. Its length is 9 cm. What is its width?",

            hint: "The two 9 cm sides use 18 cm. Find what remains for the two equal widths.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "5 cm",
                "6 cm",
                "7 cm",
                "8 cm"
            ],

            correctAnswer: "6 cm",

            explanation:
                "The two lengths total 9 + 9 = 18 cm. 30 − 18 = 12 cm remains for the two widths. 12 ÷ 2 = 6 cm."
        },
                {
            id: "per-021",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "A square has a perimeter of 36 cm. What is the length of one side?",

            hint: "A square has four equal sides.",

            image: "images/twoDShapes/square.png",

            options: [
                "7 cm",
                "8 cm",
                "9 cm",
                "10 cm"
            ],

            correctAnswer: "9 cm",

            explanation:
                "A square has four equal sides. 36 ÷ 4 = 9 cm."
        },

        {
            id: "per-022",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "A rectangle has a perimeter of 34 cm. Its length is 10 cm. What is its width?",

            hint: "The two lengths use 20 cm. Find what remains for the two equal widths.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "6 cm",
                "7 cm",
                "8 cm",
                "9 cm"
            ],

            correctAnswer: "7 cm",

            explanation:
                "The two lengths total 10 + 10 = 20 cm. 34 − 20 = 14 cm remains for the two widths. 14 ÷ 2 = 7 cm."
        },

        {
            id: "per-023",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "Sia walks around a rectangular garden that is 12 m long and 7 m wide. How far does she walk?",

            hint: "She walks around all four sides.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "34 m",
                "36 m",
                "38 m",
                "40 m"
            ],

            correctAnswer: "38 m",

            explanation:
                "The perimeter is 12 + 7 + 12 + 7 = 38 m."
        },

        {
            id: "per-024",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "A square has a perimeter of 40 cm. A rectangle has sides of 12 cm and 8 cm. Which statement is correct?",

            hint: "Find both perimeters before comparing them.",

            options: [
                "The square has the greater perimeter.",
                "The rectangle has the greater perimeter.",
                "They have the same perimeter.",
                "The square has twice the perimeter."
            ],

            correctAnswer: "They have the same perimeter.",

            explanation:
                "The square has perimeter 40 cm. The rectangle has perimeter 12 + 8 + 12 + 8 = 40 cm. They have the same perimeter."
        },

        {
            id: "per-025",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "A rectangle has a length of 14 cm and a width of 6 cm. Sia adds 2 cm to the length but leaves the width unchanged. What is the new perimeter?",

            hint: "The new length is 16 cm. Then calculate the new perimeter.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "40 cm",
                "42 cm",
                "44 cm",
                "46 cm"
            ],

            correctAnswer: "44 cm",

            explanation:
                "The new length is 16 cm. The new perimeter is 16 + 6 + 16 + 6 = 44 cm."
        },

        {
            id: "per-026",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "A square has sides of 11 cm. Sia walks around it twice. How far does she walk altogether?",

            hint: "First find the perimeter of the square, then double it.",

            image: "images/twoDShapes/square.png",

            options: [
                "66 cm",
                "77 cm",
                "88 cm",
                "99 cm"
            ],

            correctAnswer: "88 cm",

            explanation:
                "One perimeter is 4 × 11 = 44 cm. Walking around twice gives 44 × 2 = 88 cm."
        },

        {
            id: "per-027",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "A rectangle is 15 cm long and 5 cm wide. A square has sides of 10 cm. Which has the greater perimeter?",

            hint: "Calculate the perimeter of both shapes.",

            options: [
                "The rectangle",
                "The square",
                "They have the same perimeter.",
                "Neither shape has a perimeter."
            ],

            correctAnswer: "They have the same perimeter.",

            explanation:
                "The rectangle has perimeter 15 + 5 + 15 + 5 = 40 cm. The square has perimeter 4 × 10 = 40 cm. They have the same perimeter."
        },

        {
            id: "per-028",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "A rectangle has a perimeter of 42 cm. Its width is 8 cm. What is its length?",

            hint: "The two widths total 16 cm. Find what remains for the two equal lengths.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "11 cm",
                "12 cm",
                "13 cm",
                "14 cm"
            ],

            correctAnswer: "13 cm",

            explanation:
                "The two widths total 8 + 8 = 16 cm. 42 − 16 = 26 cm remains for the two lengths. 26 ÷ 2 = 13 cm."
        },

        {
            id: "per-029",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "Sia has 24 m of fencing. She uses all of it to make a square enclosure. How long is each side?",

            hint: "The four equal sides must total 24 m.",

            image: "images/twoDShapes/square.png",

            options: [
                "4 m",
                "5 m",
                "6 m",
                "8 m"
            ],

            correctAnswer: "6 m",

            explanation:
                "A square has four equal sides. 24 ÷ 4 = 6 m."
        },

        {
            id: "per-030",
            skillId: "perimeter",
            stage: "master",
            difficulty: 3,

            question: "Sia has a rectangle with a perimeter of 50 cm. The length is 15 cm. She increases the width by 3 cm. What is the new perimeter?",

            hint: "First find the original width. Then increase it by 3 cm and calculate the new perimeter.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "54 cm",
                "56 cm",
                "58 cm",
                "60 cm"
            ],

            correctAnswer: "56 cm",

            explanation:
                "The original two lengths total 30 cm, leaving 20 cm for the two widths. The original width is 10 cm. Increasing it by 3 cm gives 13 cm. The new perimeter is 15 + 13 + 15 + 13 = 56 cm."
        },
            ]
};

export default perimeter;

export {
    perimeter
};
