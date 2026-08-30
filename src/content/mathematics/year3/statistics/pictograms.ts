import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  PICTOGRAMS
==================================================*/

const pictograms: SkillContent = {
    skillId: "pictograms",

    title: "Pictograms",

    description: "Read and interpret pictograms, including pictograms where each symbol represents more than one item.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "pic-001",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "What is a pictogram?",

            hint: "Think about a chart that uses pictures or symbols to show information.",

            options: [
                "A chart that uses pictures to represent data",
                "A number line",
                "A shape with four sides",
                "A clock showing the time"
            ],

            correctAnswer: "A chart that uses pictures to represent data",

            explanation:
                "A pictogram uses pictures or symbols to represent data."
        },

        {
            id: "pic-002",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. How many apples are shown?",

            hint: "Count the apple symbols in the apples row.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "There are 4 apple symbols. Each symbol represents 1 apple, so there are 4 apples."
        },

        {
            id: "pic-003",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. How many bananas are shown?",

            hint: "Count the banana symbols.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "There are 3 banana symbols. Each symbol represents 1 banana."
        },

        {
            id: "pic-004",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. How many grapes are shown?",

            hint: "Count the grape symbols in the bottom row.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "5",

            explanation:
                "There are 5 grape symbols. Each symbol represents 1 grape."
        },

        {
            id: "pic-005",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. Which fruit appears most often?",

            hint: "Compare the number of symbols in each row.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "Apples",
                "Bananas",
                "Oranges",
                "Grapes"
            ],

            correctAnswer: "Grapes",

            explanation:
                "There are 5 grape symbols, which is more than the 4 apples, 3 bananas and 4 oranges."
        },

        {
            id: "pic-006",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. Which two fruits have the same number?",

            hint: "Look for two rows with the same number of symbols.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "Apples and oranges",
                "Apples and bananas",
                "Bananas and grapes",
                "Oranges and grapes"
            ],

            correctAnswer: "Apples and oranges",

            explanation:
                "There are 4 apples and 4 oranges, so those two fruits have the same number."
        },

        {
            id: "pic-007",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. How many more grapes than bananas are shown?",

            hint: "There are 5 grapes and 3 bananas. Find the difference.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "There are 5 grapes and 3 bananas. 5 − 3 = 2, so there are 2 more grapes."
        },

        {
            id: "pic-008",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. How many apples and bananas are shown altogether?",

            hint: "Add the 4 apples and the 3 bananas.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "There are 4 apples and 3 bananas. 4 + 3 = 7 fruits altogether."
        },

        {
            id: "pic-009",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. How many oranges and grapes are shown altogether?",

            hint: "Add the number of oranges to the number of grapes.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "8",
                "9",
                "10",
                "11"
            ],

            correctAnswer: "9",

            explanation:
                "There are 4 oranges and 5 grapes. 4 + 5 = 9 fruits altogether."
        },

        {
            id: "pic-010",
            skillId: "pictograms",
            stage: "recognise",
            difficulty: 1,

            question: "In this pictogram, each fruit picture represents 1 fruit. How many fruits are shown altogether?",

            hint: "Add all four rows: apples, bananas, oranges and grapes.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "14",
                "15",
                "16",
                "17"
            ],

            correctAnswer: "16",

            explanation:
                "There are 4 apples, 3 bananas, 4 oranges and 5 grapes. 4 + 3 + 4 + 5 = 16 fruits altogether."
        },
                {
            id: "pic-011",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. How many books are represented by 3 symbols?",

            hint: "Each symbol represents 2 books. Multiply 3 by 2.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "4 books",
                "5 books",
                "6 books",
                "8 books"
            ],

            correctAnswer: "6 books",

            explanation:
                "Each symbol represents 2 books. 3 × 2 = 6 books."
        },

        {
            id: "pic-012",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. How many books are represented by 4 symbols?",

            hint: "There are 2 books for each symbol.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "6 books",
                "8 books",
                "10 books",
                "12 books"
            ],

            correctAnswer: "8 books",

            explanation:
                "Each symbol represents 2 books. 4 × 2 = 8 books."
        },

        {
            id: "pic-013",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. The green row has 4 symbols. How many books does it represent?",

            hint: "Multiply the 4 symbols by 2 books per symbol.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "6 books",
                "8 books",
                "10 books",
                "12 books"
            ],

            correctAnswer: "8 books",

            explanation:
                "There are 4 green book symbols. Each represents 2 books, so 4 × 2 = 8 books."
        },

        {
            id: "pic-014",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. Which row represents the greatest number of books?",

            hint: "Find the row with the greatest number of symbols.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "Blue",
                "Red",
                "Green",
                "Yellow"
            ],

            correctAnswer: "Green",

            explanation:
                "The green row has 4 symbols, while the blue and red rows have 3 and the yellow row has 2. Therefore, green represents the greatest number."
        },

        {
            id: "pic-015",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. How many books are represented by the yellow row?",

            hint: "Count the yellow symbols and remember that each one represents 2 books.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "2 books",
                "4 books",
                "6 books",
                "8 books"
            ],

            correctAnswer: "4 books",

            explanation:
                "The yellow row has 2 symbols. Each represents 2 books, so 2 × 2 = 4 books."
        },

        {
            id: "pic-016",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. How many more books does the green row represent than the yellow row?",

            hint: "Green has 4 symbols and yellow has 2 symbols. Find the difference in symbols, then use the key.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "2 books",
                "4 books",
                "6 books",
                "8 books"
            ],

            correctAnswer: "4 books",

            explanation:
                "Green has 4 symbols and yellow has 2 symbols. The difference is 2 symbols. Each symbol represents 2 books, so 2 × 2 = 4 books."
        },

        {
            id: "pic-017",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. How many books are represented by the blue and red rows altogether?",

            hint: "Both rows have 3 symbols. Find their total number of symbols first.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "8 books",
                "10 books",
                "12 books",
                "14 books"
            ],

            correctAnswer: "12 books",

            explanation:
                "The blue and red rows each have 3 symbols, giving 6 symbols altogether. 6 × 2 = 12 books."
        },

        {
            id: "pic-018",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. How many books are represented by all four rows altogether?",

            hint: "There are 3 + 3 + 4 + 2 symbols. Then multiply by 2.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "20 books",
                "22 books",
                "24 books",
                "26 books"
            ],

            correctAnswer: "24 books",

            explanation:
                "There are 3 + 3 + 4 + 2 = 12 symbols. Each represents 2 books, so 12 × 2 = 24 books."
        },

        {
            id: "pic-019",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "In this pictogram, each book symbol represents 2 books. How many symbols would be needed to represent 10 books?",

            hint: "Share 10 books into groups of 2.",

            image: "images/pictogram/pictogram_books.png",

            options: [
                "3 symbols",
                "4 symbols",
                "5 symbols",
                "6 symbols"
            ],

            correctAnswer: "5 symbols",

            explanation:
                "Each symbol represents 2 books. 10 ÷ 2 = 5, so 5 symbols represent 10 books."
        },

        {
            id: "pic-020",
            skillId: "pictograms",
            stage: "apply",
            difficulty: 2,

            question: "A pictogram uses one symbol to represent 5 children. How many children would 6 symbols represent?",

            hint: "Multiply the number of symbols by 5.",

            options: [
                "25 children",
                "30 children",
                "35 children",
                "40 children"
            ],

            correctAnswer: "30 children",

            explanation:
                "Each symbol represents 5 children. 6 × 5 = 30 children."
        },
                {
            id: "pic-021",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. The transport row has 5 bus symbols. How many children chose the bus?",

            hint: "Each bus symbol represents 5 children.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "20 children",
                "25 children",
                "30 children",
                "35 children"
            ],

            correctAnswer: "25 children",

            explanation:
                "There are 5 bus symbols and each symbol represents 5 children. 5 × 5 = 25 children."
        },

        {
            id: "pic-022",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. The bicycle row has 3 symbols. How many children chose the bicycle?",

            hint: "Multiply 3 symbols by 5 children per symbol.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "10 children",
                "15 children",
                "20 children",
                "25 children"
            ],

            correctAnswer: "15 children",

            explanation:
                "There are 3 bicycle symbols. Each represents 5 children, so 3 × 5 = 15 children."
        },

        {
            id: "pic-023",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. How many more children chose the bus than the car?",

            hint: "The bus has 5 symbols and the car has 2 symbols. Find the difference in symbols first.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "10 children",
                "15 children",
                "20 children",
                "25 children"
            ],

            correctAnswer: "15 children",

            explanation:
                "There are 5 bus symbols and 2 car symbols, a difference of 3 symbols. Each symbol represents 5 children, so 3 × 5 = 15 children."
        },

        {
            id: "pic-024",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. How many children chose the bicycle or car altogether?",

            hint: "There are 3 bicycle symbols and 2 car symbols. Add them before using the key.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "20 children",
                "25 children",
                "30 children",
                "35 children"
            ],

            correctAnswer: "25 children",

            explanation:
                "There are 3 bicycle symbols and 2 car symbols, giving 5 symbols altogether. 5 × 5 = 25 children."
        },

        {
            id: "pic-025",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. How many children are represented by all four transport rows?",

            hint: "There are 2 car, 3 bicycle, 5 bus and 1 train symbols.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "50 children",
                "55 children",
                "60 children",
                "65 children"
            ],

            correctAnswer: "55 children",

            explanation:
                "There are 2 + 3 + 5 + 1 = 11 symbols. Each symbol represents 5 children, so 11 × 5 = 55 children."
        },

        {
            id: "pic-026",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. How many symbols would represent 40 children?",

            hint: "Divide 40 children into groups of 5.",

            options: [
                "6 symbols",
                "7 symbols",
                "8 symbols",
                "9 symbols"
            ],

            correctAnswer: "8 symbols",

            explanation:
                "Each symbol represents 5 children. 40 ÷ 5 = 8, so 8 symbols are needed."
        },

        {
            id: "pic-027",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. Sia sees 4 symbols for one activity and 6 symbols for another. How many more children chose the second activity?",

            hint: "Find the difference between 6 and 4 symbols, then multiply by 5.",

            options: [
                "5 children",
                "10 children",
                "15 children",
                "20 children"
            ],

            correctAnswer: "10 children",

            explanation:
                "The difference is 6 − 4 = 2 symbols. Each symbol represents 5 children, so 2 × 5 = 10 children."
        },

        {
            id: "pic-028",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 10 children. A row contains 4 symbols. How many children does the row represent?",

            hint: "Multiply 4 symbols by 10 children per symbol.",

            options: [
                "30 children",
                "40 children",
                "50 children",
                "60 children"
            ],

            correctAnswer: "40 children",

            explanation:
                "Each symbol represents 10 children. 4 × 10 = 40 children."
        },

        {
            id: "pic-029",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 10 children. A row represents 70 children. How many symbols should it contain?",

            hint: "Share 70 children into groups of 10.",

            options: [
                "5 symbols",
                "6 symbols",
                "7 symbols",
                "8 symbols"
            ],

            correctAnswer: "7 symbols",

            explanation:
                "Each symbol represents 10 children. 70 ÷ 10 = 7, so the row needs 7 symbols."
        },

        {
            id: "pic-030",
            skillId: "pictograms",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 10 children. One category has 3 symbols and another has 7 symbols. How many children are represented altogether?",

            hint: "First add the symbols, then multiply by 10.",

            options: [
                "80 children",
                "90 children",
                "100 children",
                "110 children"
            ],

            correctAnswer: "100 children",

            explanation:
                "There are 3 + 7 = 10 symbols altogether. Each symbol represents 10 children, so 10 × 10 = 100 children."
        },
            ]
};

export default pictograms;

export {
    pictograms
};