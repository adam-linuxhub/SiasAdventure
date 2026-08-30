import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  TABLES
==================================================*/

const tables: SkillContent = {
    skillId: "tables",

    title: "Tables",

    description: "Read and interpret information presented in tables and solve comparison, sum and difference problems.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "tab-001",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "What is a table used for?",

            hint: "Think about how rows and columns can organise information.",

            options: [
                "To organise information clearly",
                "To measure an angle",
                "To show the time",
                "To draw a 3D shape"
            ],

            correctAnswer: "To organise information clearly",

            explanation:
                "A table organises information into rows and columns so that it can be read and compared easily."
        },

        {
            id: "tab-002",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. How many pencils are there?",

            hint: "Find the row for pencils and read the number beside it.",

            image: "images/pictogram/simple_table.png",

            options: [
                "6",
                "8",
                "10",
                "12"
            ],

            correctAnswer: "10",

            explanation:
                "The pencils row shows 10 pencils."
        },

        {
            id: "tab-003",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. How many rulers are there?",

            hint: "Find the rulers row and read its value.",

            image: "images/pictogram/simple_table.png",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "6",

            explanation:
                "The rulers row shows 6 rulers."
        },

        {
            id: "tab-004",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. Which item has the greatest number?",

            hint: "Compare the numbers in the table.",

            image: "images/pictogram/simple_table.png",

            options: [
                "Pencils",
                "Rulers",
                "Erasers",
                "Notebooks"
            ],

            correctAnswer: "Pencils",

            explanation:
                "Pencils have the greatest value in the table."
        },

        {
            id: "tab-005",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. Which item has the smallest number?",

            hint: "Find the smallest number in the table.",

            image: "images/pictogram/simple_table.png",

            options: [
                "Pencils",
                "Rulers",
                "Erasers",
                "Notebooks"
            ],

            correctAnswer: "Rulers",

            explanation:
                "Rulers have the smallest value in the table."
        },

        {
            id: "tab-006",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. How many pencils and rulers are there altogether?",

            hint: "Add the number of pencils to the number of rulers.",

            image: "images/pictogram/simple_table.png",

            options: [
                "14",
                "16",
                "18",
                "20"
            ],

            correctAnswer: "16",

            explanation:
                "There are 10 pencils and 6 rulers. 10 + 6 = 16."
        },

        {
            id: "tab-007",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. How many more pencils than rulers are there?",

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
            id: "tab-008",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. How many erasers are there?",

            hint: "Find the erasers row and read the number.",

            image: "images/pictogram/simple_table.png",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "8",

            explanation:
                "The erasers row shows 8 erasers."
        },

        {
            id: "tab-009",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. How many erasers and rulers are there altogether?",

            hint: "Add the two values from the table.",

            image: "images/pictogram/simple_table.png",

            options: [
                "12",
                "14",
                "16",
                "18"
            ],

            correctAnswer: "14",

            explanation:
                "There are 8 erasers and 6 rulers. 8 + 6 = 14."
        },

        {
            id: "tab-010",
            skillId: "tables",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the table. How many items are there altogether?",

            hint: "Add all four numbers in the table.",

            image: "images/pictogram/simple_table.png",

            options: [
                "28",
                "30",
                "32",
                "34"
            ],

            correctAnswer: "32",

            explanation:
                "The four values are 10, 6, 8 and 8. 10 + 6 + 8 + 8 = 32."
        },
                {
            id: "tab-011",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. Which two items have the same number?",

            hint: "Look for two rows containing the same number.",

            image: "images/pictogram/simple_table.png",

            options: [
                "Pencils and rulers",
                "Pencils and erasers",
                "Rulers and notebooks",
                "Erasers and notebooks"
            ],

            correctAnswer: "Erasers and notebooks",

            explanation:
                "The erasers and notebooks rows both show 8."
        },

        {
            id: "tab-012",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. How many more pencils than erasers are there?",

            hint: "There are 10 pencils and 8 erasers. Find the difference.",

            image: "images/pictogram/simple_table.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "There are 10 pencils and 8 erasers. 10 − 8 = 2."
        },

        {
            id: "tab-013",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. How many rulers and notebooks are there altogether?",

            hint: "Add the number of rulers to the number of notebooks.",

            image: "images/pictogram/simple_table.png",

            options: [
                "12",
                "14",
                "16",
                "18"
            ],

            correctAnswer: "14",

            explanation:
                "There are 6 rulers and 8 notebooks. 6 + 8 = 14."
        },

        {
            id: "tab-014",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. How many more notebooks than rulers are there?",

            hint: "Subtract the number of rulers from the number of notebooks.",

            image: "images/pictogram/simple_table.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "There are 8 notebooks and 6 rulers. 8 − 6 = 2."
        },

        {
            id: "tab-015",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. Which item has twice as many as the rulers?",

            hint: "The rulers row shows 6. Find an item with 12.",

            image: "images/pictogram/simple_table.png",

            options: [
                "Pencils",
                "Rulers",
                "Erasers",
                "None of these"
            ],

            correctAnswer: "None of these",

            explanation:
                "The rulers value is 6, so twice as many would be 12. None of the other items has 12."
        },

        {
            id: "tab-016",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. Sia uses 3 pencils and 2 erasers. How many of these items does she use altogether?",

            hint: "Add the number of pencils she uses to the number of erasers.",

            image: "images/pictogram/simple_table.png",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "5",

            explanation:
                "Sia uses 3 pencils and 2 erasers. 3 + 2 = 5 items."
        },

        {
            id: "tab-017",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. There are 10 pencils. If 4 pencils are used, how many remain?",

            hint: "Subtract the pencils used from the original number.",

            image: "images/pictogram/simple_table.png",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "6",

            explanation:
                "There are 10 pencils and 4 are used. 10 − 4 = 6 pencils remain."
        },

        {
            id: "tab-018",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. There are 8 erasers. Sia gives 3 to a friend and then receives 2 more. How many erasers does she have now?",

            hint: "First subtract 3, then add 2.",

            image: "images/pictogram/simple_table.png",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "Sia starts with 8 erasers. 8 − 3 = 5. Then 5 + 2 = 7 erasers."
        },

        {
            id: "tab-019",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. How many pencils, rulers and erasers are there altogether?",

            hint: "Add the three values: 10, 6 and 8.",

            image: "images/pictogram/simple_table.png",

            options: [
                "22",
                "24",
                "26",
                "28"
            ],

            correctAnswer: "24",

            explanation:
                "There are 10 pencils, 6 rulers and 8 erasers. 10 + 6 + 8 = 24."
        },

        {
            id: "tab-020",
            skillId: "tables",
            stage: "apply",
            difficulty: 2,

            question: "Look at the table. How many more pencils are there than the total number of rulers and erasers?",

            hint: "First add the rulers and erasers, then compare the result with the pencils.",

            image: "images/pictogram/simple_table.png",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "4",

            explanation:
                "Rulers and erasers total 6 + 8 = 14. There are 10 pencils, so the difference is 14 − 10 = 4."
        },
                {
            id: "tab-021",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many ducks were recorded at Park B?",

            hint: "Find the ducks row and read the Park B column.",

            image: "images/pictogram/larger_table.png",

            options: [
                "8",
                "10",
                "12",
                "14"
            ],

            correctAnswer: "12",

            explanation:
                "The ducks row shows 12 in the Park B column."
        },

        {
            id: "tab-022",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many swans were recorded at Park A?",

            hint: "Find the swans row and read the Park A column.",

            image: "images/pictogram/larger_table.png",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "5",

            explanation:
                "The swans row shows 5 in the Park A column."
        },

        {
            id: "tab-023",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many geese were recorded at Park A?",

            hint: "Find the geese row and read the Park A column.",

            image: "images/pictogram/larger_table.png",

            options: [
                "8",
                "9",
                "10",
                "12"
            ],

            correctAnswer: "10",

            explanation:
                "The geese row shows 10 in the Park A column."
        },

        {
            id: "tab-024",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many coots were recorded at Park B?",

            hint: "Find the coots row and read the Park B column.",

            image: "images/pictogram/larger_table.png",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "9",

            explanation:
                "The coots row shows 9 in the Park B column."
        },

        {
            id: "tab-025",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many ducks were recorded altogether at both parks?",

            hint: "Add the Park A and Park B values for ducks.",

            image: "images/pictogram/larger_table.png",

            options: [
                "18",
                "19",
                "20",
                "21"
            ],

            correctAnswer: "20",

            explanation:
                "There were 8 ducks at Park A and 12 at Park B. 8 + 12 = 20."
        },

        {
            id: "tab-026",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many more ducks were recorded at Park B than Park A?",

            hint: "Subtract the Park A number from the Park B number for ducks.",

            image: "images/pictogram/larger_table.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "4",

            explanation:
                "There were 12 ducks at Park B and 8 at Park A. 12 − 8 = 4."
        },

        {
            id: "tab-027",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. Which animal had the greatest total number recorded across both parks?",

            hint: "Add the two park values for each animal and compare the totals.",

            image: "images/pictogram/larger_table.png",

            options: [
                "Ducks",
                "Swans",
                "Geese",
                "Coots"
            ],

            correctAnswer: "Ducks",

            explanation:
                "Ducks total 8 + 12 = 20. Swans total 12, geese total 18 and coots total 15. Ducks have the greatest total."
        },

        {
            id: "tab-028",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many birds were recorded at Park A altogether?",

            hint: "Add the four Park A values: 8, 5, 10 and 6.",

            image: "images/pictogram/larger_table.png",

            options: [
                "27",
                "28",
                "29",
                "30"
            ],

            correctAnswer: "29",

            explanation:
                "At Park A there were 8 ducks, 5 swans, 10 geese and 6 coots. 8 + 5 + 10 + 6 = 29."
        },

        {
            id: "tab-029",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many birds were recorded at Park B altogether?",

            hint: "Add the four Park B values: 12, 7, 8 and 9.",

            image: "images/pictogram/larger_table.png",

            options: [
                "34",
                "35",
                "36",
                "37"
            ],

            correctAnswer: "36",

            explanation:
                "At Park B there were 12 ducks, 7 swans, 8 geese and 9 coots. 12 + 7 + 8 + 9 = 36."
        },

        {
            id: "tab-030",
            skillId: "tables",
            stage: "master",
            difficulty: 3,

            question: "Look at the table. How many more birds were recorded at Park B than Park A altogether?",

            hint: "First find each park's total, then find the difference.",

            image: "images/pictogram/larger_table.png",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "7",

            explanation:
                "Park A has 29 birds altogether and Park B has 36. 36 − 29 = 7."
        },
            ]
};

export default tables;

export {
    tables
};