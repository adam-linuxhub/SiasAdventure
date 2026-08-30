import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  BAR CHARTS
==================================================*/

const barCharts: SkillContent = {
    skillId: "bar-charts",

    title: "Bar Charts",

    description: "Read and interpret bar charts, including charts with different scales.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "bar-001",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "What is a bar chart used for?",

            hint: "Think about how bars can show different amounts of data.",

            options: [
                "To display and compare data",
                "To measure the temperature",
                "To show the hands of a clock",
                "To name different shapes"
            ],

            correctAnswer: "To display and compare data",

            explanation:
                "A bar chart uses bars to display and compare amounts of data."
        },

        {
            id: "bar-002",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "On a bar chart, what does the height of a bar usually show?",

            hint: "The taller the bar, the greater the amount it represents.",

            options: [
                "The amount of data",
                "The colour of the category",
                "The name of the chart",
                "The number of letters in a word"
            ],

            correctAnswer: "The amount of data",

            explanation:
                "The height or length of a bar shows the amount represented by that category."
        },

        {
            id: "bar-003",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. Which fruit has the tallest bar?",

            hint: "Compare the heights of the four bars.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "Apple",
                "Banana",
                "Orange",
                "Grapes"
            ],

            correctAnswer: "Grapes",

            explanation:
                "The grapes bar is the tallest, so grapes have the greatest value."
        },

        {
            id: "bar-004",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. How many bananas are shown?",

            hint: "Read the height of the banana bar against the vertical scale.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "The banana bar reaches 3 on the vertical scale, so the chart shows 3 bananas."
        },

        {
            id: "bar-005",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. How many apples are shown?",

            hint: "Find the apple bar and read its height.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "4",
                "5",
                "6",
                "3"
            ],

            correctAnswer: "5",

            explanation:
                "The apple bar reaches 5 on the vertical scale."
        },

        {
            id: "bar-006",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. How many oranges are shown?",

            hint: "Read the height of the orange bar.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "4",

            explanation:
                "The orange bar reaches 4 on the vertical scale."
        },

        {
            id: "bar-007",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. How many more grapes than bananas are shown?",

            hint: "The grapes bar is 6 and the banana bar is 3. Find the difference.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "There are 6 grapes and 3 bananas. 6 − 3 = 3."
        },

        {
            id: "bar-008",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. How many apples and oranges are shown altogether?",

            hint: "Add the apple bar and the orange bar.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "8",
                "9",
                "10",
                "11"
            ],

            correctAnswer: "9",

            explanation:
                "There are 5 apples and 4 oranges. 5 + 4 = 9."
        },

        {
            id: "bar-009",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. Which fruit has the smallest value?",

            hint: "Find the shortest bar.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "Apple",
                "Banana",
                "Orange",
                "Grapes"
            ],

            correctAnswer: "Banana",

            explanation:
                "The banana bar is the shortest, with a value of 3."
        },

        {
            id: "bar-010",
            skillId: "bar-charts",
            stage: "recognise",
            difficulty: 1,

            question: "Look at the fruit bar chart. How many fruits are represented altogether?",

            hint: "Add the four bar values: 5, 3, 4 and 6.",

            image: "images/pictogram/bar_chart_fruit.png",

            options: [
                "16",
                "17",
                "18",
                "19"
            ],

            correctAnswer: "18",

            explanation:
                "There are 5 apples, 3 bananas, 4 oranges and 6 grapes. 5 + 3 + 4 + 6 = 18."
        },
                {
            id: "bar-011",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the sports bar chart. Which sport has the highest value?",

            hint: "Find the tallest bar.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "Football",
                "Basketball",
                "Tennis",
                "Rugby"
            ],

            correctAnswer: "Tennis",

            explanation:
                "The tennis bar is the tallest, reaching 10."
        },

        {
            id: "bar-012",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the sports bar chart. How many children chose football?",

            hint: "Read the football bar against the vertical scale.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "6",
                "8",
                "10",
                "12"
            ],

            correctAnswer: "8",

            explanation:
                "The football bar reaches 8 on the vertical scale."
        },

        {
            id: "bar-013",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the sports bar chart. How many children chose basketball?",

            hint: "Read the height of the basketball bar.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "6",

            explanation:
                "The basketball bar reaches 6 on the vertical scale."
        },

        {
            id: "bar-014",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the sports bar chart. How many more children chose tennis than rugby?",

            hint: "Tennis is 10 and rugby is 4. Find the difference.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "6",

            explanation:
                "There are 10 tennis choices and 4 rugby choices. 10 − 4 = 6."
        },

        {
            id: "bar-015",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the sports bar chart. How many children chose football and basketball altogether?",

            hint: "Add the football and basketball values.",

            image: "images/pictogram/bar_chart_sports.png",

            options: [
                "12",
                "14",
                "16",
                "18"
            ],

            correctAnswer: "14",

            explanation:
                "Football is 8 and basketball is 6. 8 + 6 = 14."
        },

        {
            id: "bar-016",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the food bar chart. What value does the ice cream bar show?",

            hint: "Read the bar using the scale on the vertical axis.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "10",
                "15",
                "20",
                "25"
            ],

            correctAnswer: "15",

            explanation:
                "The ice cream bar reaches 15 on the vertical scale."
        },

        {
            id: "bar-017",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the food bar chart. What value does the cake bar show?",

            hint: "Read the height of the cake bar. The scale increases by 5.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "15",
                "20",
                "25",
                "30"
            ],

            correctAnswer: "25",

            explanation:
                "The cake bar reaches 25 on the vertical scale."
        },

        {
            id: "bar-018",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the food bar chart. How many more cakes than biscuits are shown?",

            hint: "The cake value is 25 and the biscuit value is 10.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "10",
                "15",
                "20",
                "25"
            ],

            correctAnswer: "15",

            explanation:
                "There are 25 cakes and 10 biscuits. 25 − 10 = 15."
        },

        {
            id: "bar-019",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the food bar chart. How many ice creams and doughnuts are shown altogether?",

            hint: "Add the ice cream value of 15 to the doughnut value of 20.",

            image: "images/pictogram/bar_chart_food.png",

            options: [
                "30",
                "35",
                "40",
                "45"
            ],

            correctAnswer: "35",

            explanation:
                "There are 15 ice creams and 20 doughnuts. 15 + 20 = 35."
        },

        {
            id: "bar-020",
            skillId: "bar-charts",
            stage: "apply",
            difficulty: 2,

            question: "Look at the transport bar chart. Which transport method has the highest value?",

            hint: "Find the tallest bar.",

            image: "images/pictogram/bar_chart_transport.png",

            options: [
                "Car",
                "Bicycle",
                "Bus",
                "Train"
            ],

            correctAnswer: "Bicycle",

            explanation:
                "The bicycle bar is the tallest, reaching 50."
        },
                {
            id: "bar-021",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "Look at the transport bar chart. How many children chose the bicycle?",

            hint: "Read the height of the bicycle bar using the vertical scale.",

            image: "images/pictogram/bar_chart_transport.png",

            options: [
                "40",
                "45",
                "50",
                "55"
            ],

            correctAnswer: "50",

            explanation:
                "The bicycle bar reaches 50 on the vertical scale."
        },

        {
            id: "bar-022",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "Look at the transport bar chart. How many children chose the bus?",

            hint: "Find the bus bar and read its height from the scale.",

            image: "images/pictogram/bar_chart_transport.png",

            options: [
                "20",
                "30",
                "40",
                "50"
            ],

            correctAnswer: "40",

            explanation:
                "The bus bar reaches 40 on the vertical scale."
        },

        {
            id: "bar-023",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "Look at the transport bar chart. How many more children chose the bicycle than the bus?",

            hint: "The bicycle value is 50 and the bus value is 40.",

            image: "images/pictogram/bar_chart_transport.png",

            options: [
                "5",
                "10",
                "15",
                "20"
            ],

            correctAnswer: "10",

            explanation:
                "There are 50 bicycle choices and 40 bus choices. 50 − 40 = 10."
        },

        {
            id: "bar-024",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "Look at the transport bar chart. How many children chose the car and train altogether?",

            hint: "Read both bars, then add their values.",

            image: "images/pictogram/bar_chart_transport.png",

            options: [
                "40",
                "50",
                "60",
                "70"
            ],

            correctAnswer: "50",

            explanation:
                "The car represents 30 children and the train represents 20. 30 + 20 = 50."
        },

        {
            id: "bar-025",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "Look at the transport bar chart. How many children are represented by all four categories altogether?",

            hint: "Add the four values shown by the bars.",

            image: "images/pictogram/bar_chart_transport.png",

            options: [
                "120",
                "130",
                "140",
                "150"
            ],

            correctAnswer: "140",

            explanation:
                "The four values are 30, 50, 40 and 20. 30 + 50 + 40 + 20 = 140."
        },

        {
            id: "bar-026",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "A bar chart has a scale that increases by 10. A bar reaches the fourth marked interval. What value does it represent?",

            hint: "Count four groups of 10.",

            options: [
                "30",
                "40",
                "50",
                "60"
            ],

            correctAnswer: "40",

            explanation:
                "The scale increases by 10. Four intervals represent 4 × 10 = 40."
        },

        {
            id: "bar-027",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "A bar chart uses a scale of 5. One bar reaches 6 marked intervals. What value does it represent?",

            hint: "Multiply the number of intervals by 5.",

            options: [
                "25",
                "30",
                "35",
                "40"
            ],

            correctAnswer: "30",

            explanation:
                "Each interval represents 5. Six intervals represent 6 × 5 = 30."
        },

        {
            id: "bar-028",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "A bar chart uses a scale of 2. One bar represents 16 items. How many marked intervals high is the bar?",

            hint: "Divide the total by the value of each interval.",

            options: [
                "6 intervals",
                "7 intervals",
                "8 intervals",
                "9 intervals"
            ],

            correctAnswer: "8 intervals",

            explanation:
                "Each interval represents 2. 16 ÷ 2 = 8, so the bar is 8 intervals high."
        },

        {
            id: "bar-029",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "A bar chart shows 24 children in one category and 16 in another. How many more children are in the first category?",

            hint: "Find the difference between the two bar values.",

            options: [
                "6",
                "8",
                "10",
                "12"
            ],

            correctAnswer: "8",

            explanation:
                "The difference is 24 − 16 = 8 children."
        },

        {
            id: "bar-030",
            skillId: "bar-charts",
            stage: "master",
            difficulty: 3,

            question: "A bar chart shows 18 children choosing football, 12 choosing tennis and 10 choosing swimming. How many children are represented altogether?",

            hint: "Add all three bar values.",

            options: [
                "38",
                "40",
                "42",
                "44"
            ],

            correctAnswer: "40",

            explanation:
                "18 + 12 + 10 = 40 children altogether."
        },
            ]
};

export default barCharts;

export {
    barCharts
};