import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const countInTwentyFives: SkillContent = {
    skillId: "count-in-twenty-fives",

    title: "Count in Twenty-Fives",

    description: "Count forwards and backwards in twenty-fives.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "citf-001",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Each number increases by the same amount. Find the difference between the first two numbers and repeat it.",

            question: "What comes next? 25, 50, 75, 100, ...",

            options: [
                "125",
                "120",
                "130",
                "150"
            ],

            correctAnswer: "125",

            explanation:
                "Add 25 each time."
        },

        {
            id: "citf-002",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "The missing number is one equal step after 75 and one equal step before 125.",

            question: "Fill the gap. 50, 75, □, 125",

            options: [
                "100",
                "95",
                "105",
                "110"
            ],

            correctAnswer: "100",

            explanation:
                "75 + 25 = 100."
        },

        {
            id: "citf-003",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Compare the gap between every pair of neighbouring numbers. Only one sequence always changes by 25.",

            question: "Which sequence counts in twenty-fives?",

            options: [
                "100, 125, 150, 175",
                "100, 120, 140, 160",
                "100, 110, 120, 130",
                "100, 150, 200, 250"
            ],

            correctAnswer: "100, 125, 150, 175",

            explanation:
                "Each number is 25 more than the previous one."
        },

        {
            id: "citf-004",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Take one more step of 25 from 200 in the counting pattern.",

            question: "What comes after 200 when counting in twenty-fives?",

            options: [
                "225",
                "220",
                "230",
                "250"
            ],

            correctAnswer: "225",

            explanation:
                "200 + 25 = 225."
        },

        {
            id: "citf-005",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "The word 'before' means move back one step, and each step is worth 25.",

            question: "Which number comes before 175 when counting in twenty-fives?",

            options: [
                "150",
                "155",
                "160",
                "165"
            ],

            correctAnswer: "150",

            explanation:
                "175 - 25 = 150."
        },

        {
            id: "citf-006",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Think about the number exactly halfway through this count-by-25 pattern.",

            question: "Which number is missing? 125, □, 175",

            options: [
                "150",
                "145",
                "155",
                "160"
            ],

            correctAnswer: "150",

            explanation:
                "125, 150, 175 counts in twenty-fives."
        },

        {
            id: "citf-007",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Keep the pattern going by adding the same amount to 275.",

            question: "What comes next? 225, 250, 275, ...",

            options: [
                "300",
                "290",
                "295",
                "325"
            ],

            correctAnswer: "300",

            explanation:
                "275 + 25 = 300."
        },

        {
            id: "citf-008",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Every jump should be exactly 25. Check each pair of neighbouring numbers.",

            question: "Which sequence is correct?",

            options: [
                "25, 50, 75, 100",
                "25, 45, 65, 85",
                "25, 35, 45, 55",
                "25, 75, 125, 175"
            ],

            correctAnswer: "25, 50, 75, 100",

            explanation:
                "Each step increases by 25."
        },

        {
            id: "citf-009",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Three numbers belong to the same counting pattern. Find the one that breaks the regular 25-step rhythm.",

            question: "Which number does NOT belong?",

            options: [
                "140",
                "100",
                "125",
                "150"
            ],

            correctAnswer: "140",

            explanation:
                "100, 125 and 150 are all in the count-by-25 pattern."
        },

        {
            id: "citf-010",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "The missing number is one step after 275 and one step before 325.",

            question: "Fill the gap. 250, 275, □, 325",

            options: [
                "300",
                "295",
                "310",
                "315"
            ],

            correctAnswer: "300",

            explanation:
                "275 + 25 = 300."
        },

        {
            id: "citf-011",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "Continue the pattern using one more equal increase of 25.",

            question: "What comes next? 300, 325, 350, ...",

            options: [
                "375",
                "360",
                "380",
                "400"
            ],

            correctAnswer: "375",

            explanation:
                "350 + 25 = 375."
        },

        {
            id: "citf-012",
            skillId: "count-in-twenty-fives",
            stage: "recognise",

            hint: "A backwards count should subtract 25 every time without changing the step size.",

            question: "Which sequence counts backwards in twenty-fives?",

            options: [
                "200, 175, 150, 125",
                "200, 180, 160, 140",
                "200, 190, 180, 170",
                "200, 150, 100, 50"
            ],

            correctAnswer: "200, 175, 150, 125",

            explanation:
                "Each number is 25 less than the previous one."
        },

        {
            id: "citf-013",
            skillId: "count-in-twenty-fives",
            stage: "understand",

            hint: "Check the final jump. If the pattern adds 25 each time, what should come after 125?",

            question: "Ella counted: 75, 100, 125, 155. Where did she make her mistake?",

            options: [
                "155 should be 150",
                "125 should be 120",
                "100 should be 105",
                "75 should be 70"
            ],

            correctAnswer: "155 should be 150",

            explanation:
                "After 125 comes 150 when counting in twenty-fives."
        },

        {
            id: "citf-014",
            skillId: "count-in-twenty-fives",
            stage: "understand",

            hint: "Read each child's numbers carefully and compare every increase, not just the first one.",

            question: "Which child counted correctly in twenty-fives?",

            options: [
                "Sam: 150, 175, 200, 225",
                "Ben: 150, 170, 190, 210",
                "Ava: 150, 180, 210, 240",
                "Leo: 150, 160, 170, 180"
            ],

            correctAnswer: "Sam: 150, 175, 200, 225",

            explanation:
                "Sam adds 25 each time."
        },

        {
            id: "citf-015",
            skillId: "count-in-twenty-fives",
            stage: "understand",

            hint: "The missing number should fit exactly between 325 and 375 in this pattern.",

            question: "Which number should replace the □? 300, 325, □, 375",

            options: [
                "350",
                "345",
                "355",
                "360"
            ],

            correctAnswer: "350",

            explanation:
                "325 + 25 = 350."
        },

        {
            id: "citf-016",
            skillId: "count-in-twenty-fives",
            stage: "understand",

            hint: "Keep making the same-sized jump from the last number in the sequence.",

            question: "What comes next? 375, 400, 425, ...",

            options: [
                "450",
                "440",
                "445",
                "475"
            ],

            correctAnswer: "450",

            explanation:
                "Add 25 each time."
        },

        {
            id: "citf-017",
            skillId: "count-in-twenty-fives",
            stage: "understand",

            hint: "The missing number is one step after 225 and one step before 275.",

            question: "Which number is missing? 200, 225, □, 275",

            options: [
                "250",
                "245",
                "255",
                "260"
            ],

            correctAnswer: "250",

            explanation:
                "225 + 25 = 250."
        },

        {
            id: "citf-018",
            skillId: "count-in-twenty-fives",
            stage: "understand",

            hint: "Move back one count of 25 from 325 to find the previous number.",

            question: "What number comes before 325 when counting in twenty-fives?",

            options: [
                "300",
                "305",
                "275",
                "310"
            ],

            correctAnswer: "300",

            explanation:
                "325 - 25 = 300."
        },

        {
            id: "citf-019",
            skillId: "count-in-twenty-fives",
            stage: "understand",

            hint: "Each number should be exactly 25 less than the one before it all the way through.",

            question: "Which sequence counts backwards in twenty-fives?",

            options: [
                "350, 325, 300, 275",
                "350, 330, 310, 290",
                "350, 340, 330, 320",
                "350, 300, 250, 200"
            ],

            correctAnswer: "350, 325, 300, 275",

            explanation:
                "Each number is 25 less than the one before."
        },

{
id: "citf-020",
skillId: "count-in-twenty-fives",
stage: "understand",

hint:
    "Check the difference between every pair of numbers. One child changes by 30 instead of keeping the jump at 25.",

question: "Which child made a mistake?",

options: [
    "Ella: 250, 275, 300, 330",
    "Sam: 250, 275, 300, 325",
    "Leo: 75, 100, 125, 150",
    "Ava: 400, 425, 450, 475"
],

correctAnswer: "Ella: 250, 275, 300, 330",

explanation:
    "After 300 comes 325, not 330."
},

{
id: "citf-021",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "Treat each gift card as one jump of 25. Count six equal jumps or use 25 × 6.",

question: "Each gift card is worth $25. What is the total value of 6 gift cards?",

options: [
    "$150",
    "$125",
    "$175",
    "$200"
],

correctAnswer: "$150",

explanation:
    "Count in twenty-fives six times: 25, 50, 75, 100, 125, 150."
},

{
id: "citf-022",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "One more level means adding one group of 25 to your current score.",

question: "A game gives 25 points each level. You start with 100 points. How many points after one more level?",

options: [
    "125",
    "120",
    "130",
    "150"
],

correctAnswer: "125",

explanation:
    "100 + 25 = 125."
},

{
id: "citf-023",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "Find the pattern first. Every number is exactly 25 more than the previous one.",

question: "Which number comes next? 425, 450, 475, ...",

options: [
    "500",
    "490",
    "525",
    "495"
],

correctAnswer: "500",

explanation:
    "475 + 25 = 500."
},

{
id: "citf-024",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "The missing number sits between 300 and 350, so it should be halfway through one 25-step.",

question: "Which number completes the pattern? 250, 275, 300, □, 350",

options: [
    "325",
    "320",
    "330",
    "340"
],

correctAnswer: "325",

explanation:
    "300 + 25 = 325."
},

{
id: "citf-025",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "A backwards count in twenty-fives always subtracts 25, never 20, 10 or 50.",

question: "Which sequence is correct?",

options: [
    "500, 475, 450, 425",
    "500, 480, 460, 440",
    "500, 490, 480, 470",
    "500, 450, 400, 350"
],

correctAnswer: "500, 475, 450, 425",

explanation:
    "Each step goes back by 25."
},

{
id: "citf-026",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "Eight boxes means eight equal groups of 25. Skip-count by 25 eight times.",

question: "Each box holds 25 balls. How many balls are in 8 boxes?",

options: [
    "200",
    "175",
    "225",
    "250"
],

correctAnswer: "200",

explanation:
    "Count in twenty-fives eight times to reach 200."
},

{
id: "citf-027",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "Keep subtracting 25 from each number. The next value should continue the same rhythm.",

question: "Which number should replace the □? 400, 375, 350, □",

options: [
    "325",
    "330",
    "300",
    "350"
],

correctAnswer: "325",

explanation:
    "Count backwards by 25."
},

{
id: "citf-028",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "Numbers in this pattern end with either 00, 25, 50 or 75. Look for the odd ending.",

question: "Which number does NOT belong?",

options: [
    "240",
    "225",
    "250",
    "275"
],

correctAnswer: "240",

explanation:
    "225, 250 and 275 are all in the count-by-25 pattern."
},

{
id: "citf-029",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "Three more days means add 25 three separate times, not just once.",

question: "A hiker walks 25 miles each day. They have already walked 100 miles. How far have they walked after 3 more days?",

options: [
    "175 miles",
    "150 miles",
    "200 miles",
    "125 miles"
],

correctAnswer: "175 miles",

explanation:
    "100, 125, 150, 175. After 3 more days, they have walked 175 miles."
},

{
id: "citf-030",
skillId: "count-in-twenty-fives",
stage: "apply",

hint:
    "Read each child's numbers carefully and check whether every jump is exactly 25.",

question: "Which child counted correctly?",

options: [
    "Ben: 125, 150, 175, 200",
    "Ella: 125, 145, 165, 185",
    "Leo: 125, 155, 185, 215",
    "Ava: 125, 135, 160, 185"
],

correctAnswer: "Ben: 125, 150, 175, 200",

explanation:
    "Ben adds 25 each time."
},

{
id: "citf-031",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Once you spot the +25 pattern, only one option continues it without changing the step size.",

question: "What comes next? 525, 550, 575, ...",

options: [
    "600",
    "590",
    "625",
    "595"
],

correctAnswer: "600",

explanation:
    "Add 25 to 575."
},

{
id: "citf-032",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "The missing number must be 25 more than 350 and 25 less than 400.",

question: "Which number is missing? 350, □, 400, 425",

options: [
    "375",
    "370",
    "380",
    "390"
],

correctAnswer: "375",

explanation:
    "350, 375, 400, 425 counts in twenty-fives."
},

{
id: "citf-033",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Compare the increase between every pair of numbers. Only one list never changes its step size.",

question: "Which sequence is correct?",

options: [
    "125, 150, 175, 200, 225",
    "125, 145, 165, 185, 205",
    "125, 135, 145, 155, 165",
    "125, 175, 225, 275, 325"
],

correctAnswer: "125, 150, 175, 200, 225",

explanation:
    "Each number is 25 more than the previous one."
},

{
id: "citf-034",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "A correct backwards count removes 25 every time. Watch for any jump that is too small or too large.",

question: "Which child counted backwards correctly?",

options: [
    "Sam: 300, 275, 250, 225",
    "Ella: 300, 280, 260, 240",
    "Leo: 300, 290, 280, 270",
    "Ava: 300, 250, 200, 150"
],

correctAnswer: "Sam: 300, 275, 250, 225",

explanation:
    "Sam subtracts 25 each time."
},

{
id: "citf-035",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Move back one step in the 25s pattern. The answer is exactly one jump before 500.",

question: "Which number comes before 500 when counting in twenty-fives?",

options: [
    "475",
    "480",
    "450",
    "490"
],

correctAnswer: "475",

explanation:
    "500 - 25 = 475."
},

{
id: "citf-036",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Twelve equal groups of 25 can be found by skip-counting or multiplying 25 by 12.",

question: "Each roll of stickers has 25 stickers. How many stickers are in 12 rolls?",

options: [
    "300",
    "275",
    "325",
    "350"
],

correctAnswer: "300",

explanation:
    "Count in twenty-fives twelve times to reach 300."
},

{
id: "citf-037",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Start at 100 and make four jumps of 25. Count each move carefully before choosing.",

question: "A lift goes up 25 floors each time. It starts on floor 100. Which floor is it on after 4 moves?",

options: [
    "200",
    "175",
    "225",
    "150"
],

correctAnswer: "200",

explanation:
    "100, 125, 150, 175, 200. After 4 moves it reaches floor 200."
},

{
id: "citf-038",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Numbers reached by counting in 25s always end in 00, 25, 50 or 75. Look for the different ending.",

question: "Which number does NOT belong?",

options: [
    "260",
    "250",
    "275",
    "300"
],

correctAnswer: "260",

explanation:
    "250, 275 and 300 are all in the count-by-25 pattern."
},

{
id: "citf-039",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Compare 225 with 200 by finding the difference between the two numbers.",

question: "Which statement is correct?",

options: [
    "225 is 25 more than 200.",
    "225 is 20 more than 200.",
    "225 is 25 less than 200.",
    "225 is 50 more than 200."
],

correctAnswer: "225 is 25 more than 200.",

explanation:
    "225 - 200 = 25."
},

{
id: "citf-040",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Check every gap in each pattern. Only one keeps the increase exactly the same all the way through.",

question: "Which pattern counts in twenty-fives all the way?",

options: [
    "200, 225, 250, 275, 300",
    "200, 220, 240, 260, 280",
    "200, 210, 220, 230, 240",
    "200, 250, 300, 350, 400"
],

correctAnswer: "200, 225, 250, 275, 300",

explanation:
    "Every step increases by 25."
},

{
id: "citf-041",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Eleven rounds means eleven equal groups of 25. Think of repeated addition or multiplication.",

question: "A game awards 25 points each round. How many points after 11 rounds?",

options: [
    "275",
    "250",
    "300",
    "325"
],

correctAnswer: "275",

explanation:
    "Count in twenty-fives eleven times to reach 275."
},

{
id: "citf-042",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "The numbers are getting smaller by 25, so the missing number must be one step below 475.",

question: "Which number should replace the □? 500, 475, □, 425",

options: [
    "450",
    "445",
    "455",
    "440"
],

correctAnswer: "450",

explanation:
    "Count backwards by 25: 500, 475, 450, 425."
},

{
id: "citf-043",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Read each child's sequence and check every jump. One child never changes from adding 25.",

question: "Which child made no mistakes?",

options: [
    "Ben: 325, 350, 375, 400",
    "Ava: 325, 345, 365, 385",
    "Sam: 325, 355, 385, 415",
    "Leo: 325, 335, 360, 385"
],

correctAnswer: "Ben: 325, 350, 375, 400",

explanation:
    "Ben adds 25 each time."
},

{
id: "citf-044",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "The question asks for one jump forward, so add a single group of 25 to 625.",

question: "Which number comes 25 after 625?",

options: [
    "650",
    "645",
    "655",
    "675"
],

correctAnswer: "650",

explanation:
    "625 + 25 = 650."
},

{
id: "citf-045",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Ten hours means ten groups of 25 toys. Count by 25s or multiply.",

question: "A machine makes 25 toys every hour. How many toys after 10 hours?",

options: [
    "250",
    "225",
    "275",
    "300"
],

correctAnswer: "250",

explanation:
    "25 × 10 = 250, or count in twenty-fives ten times."
},

{
id: "citf-046",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Look for the sequence where one number breaks the +25 pattern before the next number continues.",

question: "Which sequence has a mistake?",

options: [
    "225, 250, 280, 300",
    "225, 250, 275, 300",
    "100, 125, 150, 175",
    "400, 425, 450, 475"
],

correctAnswer: "225, 250, 280, 300",

explanation:
    "After 250 should come 275, not 280."
},

{
id: "citf-047",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Move one place forward in the count-by-25 sequence starting from 675.",

question: "Which number comes after 675 when counting in twenty-fives?",

options: [
    "700",
    "695",
    "725",
    "750"
],

correctAnswer: "700",

explanation:
    "675 + 25 = 700."
},

{
id: "citf-048",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "A correct backwards list should lose exactly 25 each time. Compare each gap carefully.",

question: "Which list is in the correct order when counting backwards in twenty-fives?",

options: [
    "250, 225, 200, 175, 150",
    "250, 230, 210, 190, 170",
    "250, 240, 230, 220, 210",
    "250, 200, 150, 100, 50"
],

correctAnswer: "250, 225, 200, 175, 150",

explanation:
    "Subtract 25 each time."
},

{
id: "citf-049",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "The missing number sits exactly halfway between 700 and 750 when counting in 25s.",

question: "What is the missing number? 700, □, 750",

options: [
    "725",
    "720",
    "730",
    "735"
],

correctAnswer: "725",

explanation:
    "700 + 25 = 725."
},

{
id: "citf-050",
skillId: "count-in-twenty-fives",
stage: "master",

hint:
    "Ignore the first number and compare every jump. Only one list increases by 25 every single time.",

question: "Which list shows counting in twenty-fives correctly?",

options: [
    "75, 100, 125, 150, 175, 200",
    "75, 95, 115, 135, 155, 175",
    "75, 85, 95, 105, 115, 125",
    "75, 125, 175, 225, 275, 325"
],

correctAnswer: "75, 100, 125, 150, 175, 200",

explanation:
    "Each number is 25 more than the previous one."
},

]
};

export default countInTwentyFives;

export {
    countInTwentyFives
};