import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  STATISTICS PROBLEM SOLVING
==================================================*/

const statisticsProblems: SkillContent = {
    skillId: "statistics-problems",

    title: "Statistics Problem Solving",

    description: "Solve one-step and two-step problems involving tables, pictograms and bar charts.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "stat-001",
            skillId: "statistics-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A class records the number of fruit chosen by children. The pictogram shows 4 apples, 3 bananas, 4 oranges and 5 grapes. How many children chose fruit altogether?",

            hint: "Add the four numbers shown by the fruit symbols.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "14",
                "15",
                "16",
                "17"
            ],

            correctAnswer: "16",

            explanation:
                "There are 4 + 3 + 4 + 5 = 16 children altogether."
        },

        {
            id: "stat-002",
            skillId: "statistics-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A pictogram shows 4 apples and 3 bananas. How many more children chose apples than bananas?",

            hint: "Find the difference between 4 and 3.",

            image: "images/pictogram/pictogram_fruit.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "1",

            explanation:
                "There are 4 apple choices and 3 banana choices. 4 − 3 = 1."
        },

        {
            id: "stat-003",
            skillId: "statistics-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A pictogram uses one book symbol to represent 2 books. How many books are represented by 4 symbols?",

            hint: "Multiply 4 by 2.",

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
            id: "stat-004",
            skillId: "statistics-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A pictogram uses one symbol to represent 5 children. One category has 5 symbols and another has 3 symbols. How many children chose either category altogether?",

            hint: "Add the symbols first, then use the key.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "30 children",
                "35 children",
                "40 children",
                "45 children"
            ],

            correctAnswer: "40 children",

            explanation:
                "There are 5 + 3 = 8 symbols. Each represents 5 children, so 8 × 5 = 40 children."
        },

        {
            id: "stat-005",
            skillId: "statistics-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A bar chart shows 5 apples, 3 bananas, 4 oranges and 6 grapes. Which fruit was chosen the most?",

            hint: "Find the tallest bar.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "Apples",
                "Bananas",
                "Oranges",
                "Grapes"
            ],

            correctAnswer: "Grapes",

            explanation:
                "Grapes have a value of 6, which is the greatest value on the chart."
        },

        {
            id: "stat-006",
            skillId: "statistics-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A bar chart shows 5 apples and 4 oranges. How many pieces of fruit are these altogether?",

            hint: "Add the two values.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "There are 5 apples and 4 oranges. 5 + 4 = 9."
        },

        {
            id: "stat-007",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A sports chart shows 8 children choosing football and 6 choosing basketball. How many more children chose football?",

            hint: "Subtract the basketball value from the football value.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "There are 8 football choices and 6 basketball choices. 8 − 6 = 2."
        },

        {
            id: "stat-008",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A sports chart shows 8 children choosing football and 4 choosing rugby. How many children chose either football or rugby altogether?",

            hint: "Add the two chart values.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "10",
                "12",
                "14",
                "16"
            ],

            correctAnswer: "12",

            explanation:
                "There are 8 football choices and 4 rugby choices. 8 + 4 = 12."
        },

        {
            id: "stat-009",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A table records 10 pencils, 6 rulers, 8 erasers and 8 notebooks. How many more pencils are there than rulers?",

            hint: "Subtract the number of rulers from the number of pencils.",

            image: "images/pictogram/simple_table.png",

            options: [
                "2",
                "4",
                "6",
                "8"
            ],

            correctAnswer: "4",

            explanation:
                "There are 10 pencils and 6 rulers. 10 − 6 = 4."
        },

        {
            id: "stat-010",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A table records 10 pencils, 6 rulers, 8 erasers and 8 notebooks. How many pencils, erasers and notebooks are there altogether?",

            hint: "Add the three relevant values from the table.",

            image: "images/pictogram/simple_table.png",

            options: [
                "24",
                "25",
                "26",
                "27"
            ],

            correctAnswer: "26",

            explanation:
                "There are 10 pencils, 8 erasers and 8 notebooks. 10 + 8 + 8 = 26."
        },
                {
            id: "stat-011",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A pictogram uses 1 symbol to represent 5 children. The bus row has 5 symbols and the car row has 2 symbols. How many more children chose the bus?",

            hint: "Find the difference in symbols, then use the key.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "10 children",
                "15 children",
                "20 children",
                "25 children"
            ],

            correctAnswer: "15 children",

            explanation:
                "There are 5 bus symbols and 2 car symbols, a difference of 3 symbols. Each represents 5 children, so 3 × 5 = 15 children."
        },

        {
            id: "stat-012",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A pictogram uses 1 symbol to represent 5 children. The bicycle row has 3 symbols and the train row has 1 symbol. How many children chose these two types of transport altogether?",

            hint: "Add the symbols first, then multiply by 5.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "15 children",
                "20 children",
                "25 children",
                "30 children"
            ],

            correctAnswer: "20 children",

            explanation:
                "There are 3 + 1 = 4 symbols. Each represents 5 children, so 4 × 5 = 20 children."
        },

        {
            id: "stat-013",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A bar chart shows 15 ice creams and 20 doughnuts. How many more doughnuts than ice creams are shown?",

            hint: "Find the difference between 20 and 15.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "3",
                "5",
                "7",
                "10"
            ],

            correctAnswer: "5",

            explanation:
                "There are 20 doughnuts and 15 ice creams. 20 − 15 = 5."
        },

        {
            id: "stat-014",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A bar chart shows 25 cakes and 10 biscuits. How many cakes and biscuits are shown altogether?",

            hint: "Add the two values.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "30",
                "35",
                "40",
                "45"
            ],

            correctAnswer: "35",

            explanation:
                "There are 25 cakes and 10 biscuits. 25 + 10 = 35."
        },

        {
            id: "stat-015",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A bar chart shows 25 cakes, 15 ice creams, 20 doughnuts and 10 biscuits. How many items are shown altogether?",

            hint: "Add all four values.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "60",
                "65",
                "70",
                "75"
            ],

            correctAnswer: "70",

            explanation:
                "25 + 15 + 20 + 10 = 70 items altogether."
        },

        {
            id: "stat-016",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A table shows 8 ducks at Park A and 12 ducks at Park B. How many ducks were recorded altogether?",

            hint: "Add the two park totals.",

            image: "images/pictogram/larger_table.png",

            options: [
                "18",
                "20",
                "22",
                "24"
            ],

            correctAnswer: "20",

            explanation:
                "There were 8 ducks at Park A and 12 at Park B. 8 + 12 = 20 ducks."
        },

        {
            id: "stat-017",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A table shows 10 geese at Park A and 8 geese at Park B. How many more geese were recorded at Park A?",

            hint: "Subtract 8 from 10.",

            image: "images/pictogram/larger_table.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "There were 10 geese at Park A and 8 at Park B. 10 − 8 = 2."
        },

        {
            id: "stat-018",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A table shows 5 swans and 10 geese at Park A. How many of these birds were recorded altogether?",

            hint: "Add the two values.",

            image: "images/pictogram/larger_table.png",

            options: [
                "12",
                "15",
                "18",
                "20"
            ],

            correctAnswer: "15",

            explanation:
                "There were 5 swans and 10 geese. 5 + 10 = 15 birds."
        },

        {
            id: "stat-019",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "A table shows 6 coots at Park A and 9 at Park B. How many coots were recorded altogether?",

            hint: "Add the two coot values.",

            image: "images/pictogram/larger_table.png",

            options: [
                "13",
                "14",
                "15",
                "16"
            ],

            correctAnswer: "15",

            explanation:
                "There were 6 coots at Park A and 9 at Park B. 6 + 9 = 15."
        },

        {
            id: "stat-020",
            skillId: "statistics-problems",
            stage: "apply",
            difficulty: 2,

            question: "At Park A there are 8 ducks, 5 swans and 10 geese. How many birds are there altogether?",

            hint: "Add the three numbers.",

            image: "images/pictogram/larger_table.png",

            options: [
                "21",
                "22",
                "23",
                "24"
            ],

            correctAnswer: "23",

            explanation:
                "8 + 5 + 10 = 23 birds altogether."
        },
                {
            id: "stat-021",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. The bus row has 5 symbols and the bicycle row has 3 symbols. How many children chose the bus or bicycle altogether?",

            hint: "Add the two numbers of symbols first, then multiply by 5.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "35 children",
                "40 children",
                "45 children",
                "50 children"
            ],

            correctAnswer: "40 children",

            explanation:
                "There are 5 + 3 = 8 symbols. Each symbol represents 5 children, so 8 × 5 = 40 children."
        },

        {
            id: "stat-022",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 5 children. The bus row has 5 symbols and the car row has 2 symbols. If 5 children who chose the bus change their choice to car, how many children would then be represented by each row?",

            hint: "The bus loses 5 children and the car gains 5 children.",

            image: "images/pictogram/pictogram_transport.png",

            options: [
                "Bus 20, car 15",
                "Bus 20, car 10",
                "Bus 25, car 15",
                "Bus 15, car 20"
            ],

            correctAnswer: "Bus 20, car 15",

            explanation:
                "The bus starts with 25 children and loses 5, leaving 20. The car starts with 10 and gains 5, giving 15."
        },

        {
            id: "stat-023",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A bar chart shows 25 cakes, 15 ice creams, 20 doughnuts and 10 biscuits. How many more cakes and doughnuts are there than ice creams and biscuits?",

            hint: "Find each pair's total before finding the difference.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "15",
                "20",
                "25",
                "30"
            ],

            correctAnswer: "20",

            explanation:
                "Cakes and doughnuts total 25 + 20 = 45. Ice creams and biscuits total 15 + 10 = 25. The difference is 45 − 25 = 20."
        },

        {
            id: "stat-024",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A bar chart shows 8 football players, 6 basketball players, 10 tennis players and 4 rugby players. How many players chose tennis or rugby?",

            hint: "Add the tennis and rugby values.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "12",
                "14",
                "16",
                "18"
            ],

            correctAnswer: "14",

            explanation:
                "There are 10 tennis players and 4 rugby players. 10 + 4 = 14 players."
        },

        {
            id: "stat-025",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A table shows 8 ducks, 5 swans, 10 geese and 6 coots at Park A. How many more geese and coots are there than ducks and swans?",

            hint: "Find the total for each pair, then compare them.",

            image: "images/pictogram/larger_table.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "Geese and coots total 10 + 6 = 16. Ducks and swans total 8 + 5 = 13. 16 − 13 = 3."
        },

        {
            id: "stat-026",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A table shows 8 ducks, 5 swans, 10 geese and 6 coots at Park A. At Park B there are 12 ducks, 7 swans, 8 geese and 9 coots. How many birds were recorded altogether at both parks?",

            hint: "Find each park's total first, then add the two totals.",

            image: "images/pictogram/larger_table.png",

            options: [
                "60",
                "65",
                "70",
                "75"
            ],

            correctAnswer: "65",

            explanation:
                "Park A has 29 birds and Park B has 36 birds. 29 + 36 = 65 birds altogether."
        },

        {
            id: "stat-027",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A table shows 8 ducks at Park A and 12 at Park B. There are 5 swans at Park A and 7 at Park B. How many more ducks than swans were recorded altogether?",

            hint: "Find the total ducks and total swans before finding the difference.",

            image: "images/pictogram/larger_table.png",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "Ducks total 8 + 12 = 20. Swans total 5 + 7 = 12. The difference is 20 − 12 = 8."
        },

        {
            id: "stat-028",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A class records 10 pencils, 6 rulers, 8 erasers and 8 notebooks. The teacher gives each child one pencil and one eraser. How many children can receive both?",

            hint: "The number of children is limited by the item that has fewer available.",

            image: "images/pictogram/simple_table.png",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "There are 10 pencils but only 8 erasers. Therefore, at most 8 children can receive both one pencil and one eraser."
        },

        {
            id: "stat-029",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A pictogram uses 1 symbol to represent 10 children. One category has 4 symbols and another has 7 symbols. How many more children are in the second category?",

            hint: "Find the difference in symbols, then use the key.",

            options: [
                "20 children",
                "30 children",
                "40 children",
                "50 children"
            ],

            correctAnswer: "30 children",

            explanation:
                "The difference is 7 − 4 = 3 symbols. Each symbol represents 10 children, so 3 × 10 = 30 children."
        },

        {
            id: "stat-030",
            skillId: "statistics-problems",
            stage: "master",
            difficulty: 3,

            question: "A survey records 18 children choosing football, 12 choosing tennis and 10 choosing swimming. Later, 4 more children choose swimming. How many children are represented by the survey now?",

            hint: "First find the original total, then add the 4 new children.",

            options: [
                "40",
                "42",
                "44",
                "46"
            ],

            correctAnswer: "44",

            explanation:
                "The original total is 18 + 12 + 10 = 40. Four more children choose swimming, so 40 + 4 = 44."
        },
            ]
};

export default statisticsProblems;

export {
    statisticsProblems
};