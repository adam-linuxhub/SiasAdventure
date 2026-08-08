import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const countInFours: SkillContent = {
    skillId: "count-in-fours",

    title: "Count in Fours",

    description: "Count forwards and backwards in fours.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "cif-001",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Look at how much the numbers increase each time. Keep using the same jump for the next number.",

            question: "What comes next? 4, 8, 12, 16, ...",

            options: [
                "20",
                "18",
                "22",
                "24"
            ],

            correctAnswer: "20",

            explanation:
                "Add 4 each time."
        },

        {
            id: "cif-002",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Find the pattern between 20, 24 and 28, then continue it with one more equal step.",

            question: "What comes next? 20, 24, 28, ...",

            options: [
                "32",
                "30",
                "34",
                "36"
            ],

            correctAnswer: "32",

            explanation:
                "The numbers increase by 4."
        },

        {
            id: "cif-003",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "The missing number must be 4 more than 12 and 4 less than 20.",

            question: "Fill the gap. 8, 12, □, 20",

            options: [
                "16",
                "15",
                "18",
                "14"
            ],

            correctAnswer: "16",

            explanation:
                "12 + 4 = 16."
        },

        {
            id: "cif-004",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Check the difference between every pair of neighbouring numbers. Only one sequence keeps the same gap throughout.",

            question: "Which sequence counts in fours?",

            options: [
                "16, 20, 24, 28",
                "16, 21, 26, 31",
                "16, 18, 20, 22",
                "16, 24, 32, 40"
            ],

            correctAnswer: "16, 20, 24, 28",

            explanation:
                "Each number is 4 more than the one before."
        },

        {
            id: "cif-005",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Move forward one place in the counting-by-fours pattern starting from 36.",

            question: "What comes after 36 when counting in fours?",

            options: [
                "40",
                "38",
                "42",
                "44"
            ],

            correctAnswer: "40",

            explanation:
                "36 + 4 = 40."
        },

        {
            id: "cif-006",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "The missing number should fit exactly halfway because it is one step after 24 and one step before 32.",

            question: "Which number is missing? 24, □, 32",

            options: [
                "28",
                "26",
                "30",
                "34"
            ],

            correctAnswer: "28",

            explanation:
                "24, 28, 32 counts in fours."
        },

        {
            id: "cif-007",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Continue the pattern using the same increase from 40 to 44 and from 44 to 48.",

            question: "What comes next? 40, 44, 48, ...",

            options: [
                "52",
                "50",
                "54",
                "56"
            ],

            correctAnswer: "52",

            explanation:
                "Add 4 to 48."
        },

        {
            id: "cif-008",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "The word 'before' means move backwards by one counting step, not forwards.",

            question: "Which number comes before 32 when counting in fours?",

            options: [
                "28",
                "30",
                "24",
                "26"
            ],

            correctAnswer: "28",

            explanation:
                "32 - 4 = 28."
        },

        {
            id: "cif-009",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Ignore the starting number and compare the gaps between each pair of numbers.",

            question: "Which sequence is correct?",

            options: [
                "12, 16, 20, 24",
                "12, 15, 18, 21",
                "12, 18, 24, 30",
                "12, 14, 18, 22"
            ],

            correctAnswer: "12, 16, 20, 24",

            explanation:
                "Each step is 4."
        },

        {
            id: "cif-010",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Keep counting with equal jumps of four from the last number shown.",

            question: "What comes next? 60, 64, 68, ...",

            options: [
                "72",
                "70",
                "74",
                "76"
            ],

            correctAnswer: "72",

            explanation:
                "68 + 4 = 72."
        },

        {
            id: "cif-011",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Three of the numbers fit perfectly into a counting-by-fours sequence. Find the one that breaks it.",

            question: "Which number does NOT belong?",

            options: [
                "26",
                "20",
                "24",
                "28"
            ],

            correctAnswer: "26",

            explanation:
                "20, 24 and 28 are all multiples of 4."
        },

        {
            id: "cif-012",
            skillId: "count-in-fours",
            stage: "recognise",

            hint: "Think of the missing number as the next stop after 48 when counting in fours.",

            question: "Fill the gap. 44, 48, □, 56",

            options: [
                "52",
                "50",
                "54",
                "58"
            ],

            correctAnswer: "52",

            explanation:
                "48 + 4 = 52."
        },

        {
            id: "cif-013",
            skillId: "count-in-fours",
            stage: "understand",

            hint: "Check each jump in Ella's counting. The first jump that isn't 4 shows where the mistake happened.",

            question: "Ella counted: 16, 20, 24, 29. Where did she make her mistake?",

            options: [
                "29 should be 28",
                "24 should be 25",
                "20 should be 21",
                "16 should be 18"
            ],

            correctAnswer: "29 should be 28",

            explanation:
                "After 24 comes 28 when counting in fours."
        },

        {
            id: "cif-014",
            skillId: "count-in-fours",
            stage: "understand",

            hint: "Read each child's numbers one step at a time. Only one child always adds exactly 4.",

            question: "Which child counted correctly in fours?",

            options: [
                "Sam: 32, 36, 40, 44",
                "Ben: 32, 35, 38, 41",
                "Ava: 32, 37, 42, 47",
                "Leo: 32, 34, 38, 42"
            ],

            correctAnswer: "Sam: 32, 36, 40, 44",

            explanation:
                "Sam adds 4 each time."
        },

        {
            id: "cif-015",
            skillId: "count-in-fours",
            stage: "understand",

            hint: "The missing number is exactly one counting step after 56 and one step before 64.",

            question: "Which number should replace the □? 52, 56, □, 64",

            options: [
                "60",
                "58",
                "62",
                "68"
            ],

            correctAnswer: "60",

            explanation:
                "56 + 4 = 60."
        },

        {
            id: "cif-016",
            skillId: "count-in-fours",
            stage: "understand",

            hint: "The pattern has already shown you the rule. Apply it one more time to the final number.",

            question: "What comes next? 68, 72, 76, ...",

            options: [
                "80",
                "78",
                "82",
                "84"
            ],

            correctAnswer: "80",

            explanation:
                "Add 4 each time."
        },

        {
            id: "cif-017",
            skillId: "count-in-fours",
            stage: "understand",

            hint: "Look for the number that fits neatly between 40 and 48 with equal jumps of four.",

            question: "Which number is missing? 36, 40, □, 48",

            options: [
                "44",
                "42",
                "46",
                "52"
            ],

            correctAnswer: "44",

            explanation:
                "40 + 4 = 44."
        },

        {
            id: "cif-018",
            skillId: "count-in-fours",
            stage: "understand",

            hint: "To find the previous number, move back one equal counting step instead of forwards.",

            question: "What number comes before 56 when counting in fours?",

            options: [
                "52",
                "54",
                "50",
                "48"
            ],

            correctAnswer: "52",

            explanation:
                "56 - 4 = 52."
        },

        {
            id: "cif-019",
            skillId: "count-in-fours",
            stage: "understand",

            hint: "A backwards pattern subtracts the same amount every time. Check that every jump is 4 less.",

            question: "Which sequence counts backwards in fours?",

            options: [
                "40, 36, 32, 28",
                "40, 35, 30, 25",
                "40, 38, 36, 34",
                "40, 32, 24, 16"
            ],

            correctAnswer: "40, 36, 32, 28",

            explanation:
                "Each number is 4 less than the one before."
        },

{
id: "cif-020",
skillId: "count-in-fours",
stage: "understand",

hint: "Check the difference between each pair of numbers. One child changes the pattern on the final step.",

question: "Which child made a mistake?",

options: [
    "Ella: 48, 52, 56, 61",
    "Sam: 48, 52, 56, 60",
    "Leo: 20, 24, 28, 32",
    "Ava: 72, 76, 80, 84"
],

correctAnswer: "Ella: 48, 52, 56, 61",

explanation:
    "After 56 comes 60, not 61."
},

{
id: "cif-021",
skillId: "count-in-fours",
stage: "apply",

hint: "Each basket adds another 4 apples. Count nine equal groups or think of 9 lots of 4.",

question: "There are 4 apples in each basket. How many apples are in 9 baskets?",

options: [
    "36",
    "32",
    "40",
    "34"
],

correctAnswer: "36",

explanation:
    "Count in fours: 4, 8, 12, 16, 20, 24, 28, 32, 36."
},

{
id: "cif-022",
skillId: "count-in-fours",
stage: "apply",

hint: "One jump means moving forward exactly one counting step of four.",

question: "A frog jumps 4 lily pads each turn. It starts on 12. Where will it land after one jump?",

options: [
    "16",
    "15",
    "18",
    "20"
],

correctAnswer: "16",

explanation:
    "12 + 4 = 16."
},

{
id: "cif-023",
skillId: "count-in-fours",
stage: "apply",

hint: "Look at the increase from 84 to 88 and from 88 to 92, then repeat it once more.",

question: "Which number comes next? 84, 88, 92, ...",

options: [
    "96",
    "94",
    "98",
    "100"
],

correctAnswer: "96",

explanation:
    "Add 4 to 92."
},

{
id: "cif-024",
skillId: "count-in-fours",
stage: "apply",

hint: "The missing number sits between 72 and 80, one equal counting step away from each.",

question: "Which number completes the pattern? 64, 68, 72, □, 80",

options: [
    "76",
    "74",
    "78",
    "82"
],

correctAnswer: "76",

explanation:
    "72 + 4 = 76."
},

{
id: "cif-025",
skillId: "count-in-fours",
stage: "apply",

hint: "Because the numbers are counting backwards, every new number should be 4 smaller than the last.",

question: "Which sequence is correct?",

options: [
    "92, 88, 84, 80",
    "92, 89, 86, 83",
    "92, 90, 88, 86",
    "92, 84, 76, 68"
],

correctAnswer: "92, 88, 84, 80",

explanation:
    "Each step goes back by 4."
},

{
id: "cif-026",
skillId: "count-in-fours",
stage: "apply",

hint: "Every toy costs the same amount, so keep adding 4 until you've counted eight toys.",

question: "A toy costs $4. How much do 8 toys cost?",

options: [
    "$32",
    "$28",
    "$36",
    "$40"
],

correctAnswer: "$32",

explanation:
    "Count in fours eight times: 4, 8, 12, 16, 20, 24, 28, 32."
},

{
id: "cif-027",
skillId: "count-in-fours",
stage: "apply",

hint: "The sequence is getting smaller. Take one more step backwards by four.",

question: "Which number should replace the □? 100, 96, 92, □",

options: [
    "88",
    "90",
    "86",
    "84"
],

correctAnswer: "88",

explanation:
    "Count backwards by 4."
},

{
id: "cif-028",
skillId: "count-in-fours",
stage: "apply",

hint: "See which numbers could appear naturally in a count of 4, 8, 12, 16... One doesn't fit the pattern.",

question: "Which number does NOT belong?",

options: [
    "58",
    "56",
    "60",
    "64"
],

correctAnswer: "58",

explanation:
    "56, 60 and 64 are all in the count-by-4 pattern."
},

{
id: "cif-029",
skillId: "count-in-fours",
stage: "apply",

hint: "The snail moves the same distance every minute. Count forward three equal jumps from 20.",

question: "A snail climbs 4 cm every minute. It starts at 20 cm. Where is it after 3 minutes?",

options: [
    "32 cm",
    "28 cm",
    "24 cm",
    "36 cm"
],

correctAnswer: "32 cm",

explanation:
    "20, 24, 28, 32. After 3 minutes it reaches 32 cm."
},

{
id: "cif-030",
skillId: "count-in-fours",
stage: "apply",

hint: "Compare each child's jumps between numbers. Only one child increases by exactly 4 every time.",

question: "Which child counted correctly?",

options: [
    "Ben: 52, 56, 60, 64",
    "Ella: 52, 55, 59, 63",
    "Leo: 52, 58, 64, 70",
    "Ava: 52, 54, 58, 62"
],

correctAnswer: "Ben: 52, 56, 60, 64",

explanation:
    "Ben adds 4 each time."
},

{
id: "cif-031",
skillId: "count-in-fours",
stage: "master",

hint: "Continue the pattern with one more increase of four from the final number shown.",

question: "What comes next? 108, 112, 116, ...",

options: [
    "120",
    "118",
    "122",
    "124"
],

correctAnswer: "120",

explanation:
    "Add 4 to 116."
},

{
id: "cif-032",
skillId: "count-in-fours",
stage: "master",

hint: "The missing value should be one counting step after 80 and one counting step before 88.",

question: "Which number is missing? 80, □, 88, 92",

options: [
    "84",
    "82",
    "86",
    "90"
],

correctAnswer: "84",

explanation:
    "80, 84, 88, 92 counts in fours."
},

{
id: "cif-033",
skillId: "count-in-fours",
stage: "master",

hint: "Focus on the gap between neighbouring numbers rather than the numbers themselves.",

question: "Which sequence is correct?",

options: [
    "36, 40, 44, 48, 52",
    "36, 41, 46, 51, 56",
    "36, 38, 40, 42, 44",
    "36, 44, 52, 60, 68"
],

correctAnswer: "36, 40, 44, 48, 52",

explanation:
    "Each number is 4 more than the previous one."
},

{
id: "cif-034",
skillId: "count-in-fours",
stage: "master",

hint: "A correct backwards count removes the same amount every step. Check every subtraction carefully.",

question: "Which child counted backwards correctly?",

options: [
    "Sam: 64, 60, 56, 52",
    "Ella: 64, 61, 58, 55",
    "Leo: 64, 62, 60, 58",
    "Ava: 64, 56, 48, 40"
],

correctAnswer: "Sam: 64, 60, 56, 52",

explanation:
    "Sam subtracts 4 each time."
},

{
id: "cif-035",
skillId: "count-in-fours",
stage: "master",

hint: "To find the number before 100, take one counting step backwards. Each step is worth 4.",

question: "Which number comes before 100 when counting in fours?",

options: [
    "96",
    "98",
    "94",
    "92"
],

correctAnswer: "96",

explanation:
    "100 - 4 = 96."
},

{
id: "cif-036",
skillId: "count-in-fours",
stage: "master",

hint: "Each spider contributes the same number of legs. Count eleven equal groups of 4 or use multiplication.",

question: "A spider has 4 legs. How many legs do 11 spiders have?",

options: [
    "44",
    "40",
    "48",
    "42"
],

correctAnswer: "44",

explanation:
    "Count in fours eleven times to reach 44."
},

{
id: "cif-037",
skillId: "count-in-fours",
stage: "master",

hint: "Each lift move adds 4 floors. Count five jumps from floor 8, remembering the starting floor isn't the first move.",

question: "A lift goes up 4 floors each time. It starts on floor 8. Which floor is it on after 5 moves?",

options: [
    "28",
    "24",
    "20",
    "32"
],

correctAnswer: "28",

explanation:
    "8, 12, 16, 20, 24, 28. After 5 moves it reaches floor 28."
},

{
id: "cif-038",
skillId: "count-in-fours",
stage: "master",

hint: "Three numbers fit perfectly into a count-by-4 pattern. Find the one that sits off the pattern.",

question: "Which number does NOT belong?",

options: [
    "74",
    "72",
    "76",
    "80"
],

correctAnswer: "74",

explanation:
    "72, 76 and 80 are all in the count-by-4 pattern."
},

{
id: "cif-039",
skillId: "count-in-fours",
stage: "master",

hint: "Compare 60 and 64 by finding the difference before choosing the correct statement.",

question: "Which statement is correct?",

options: [
    "64 is 4 more than 60.",
    "64 is 5 more than 60.",
    "64 is 4 less than 60.",
    "64 is 8 more than 60."
],

correctAnswer: "64 is 4 more than 60.",

explanation:
    "64 - 60 = 4."
},

{
id: "cif-040",
skillId: "count-in-fours",
stage: "master",

hint: "Check every gap in each pattern. A correct sequence never changes from adding 4 each time.",

question: "Which pattern counts in fours all the way?",

options: [
    "48, 52, 56, 60, 64",
    "48, 53, 58, 63, 68",
    "48, 50, 54, 58, 62",
    "48, 56, 64, 72, 80"
],

correctAnswer: "48, 52, 56, 60, 64",

explanation:
    "Every step increases by 4."
},

{
id: "cif-041",
skillId: "count-in-fours",
stage: "master",

hint: "Every round earns the same number of points. Count twelve groups of 4 or multiply 12 by 4.",

question: "A game awards 4 points each round. How many points after 12 rounds?",

options: [
    "48",
    "44",
    "52",
    "40"
],

correctAnswer: "48",

explanation:
    "Count in fours twelve times to reach 48."
},

{
id: "cif-042",
skillId: "count-in-fours",
stage: "master",

hint: "The numbers are getting smaller by 4. Fill in the missing step before reaching 108.",

question: "Which number should replace the □? 120, 116, □, 108",

options: [
    "112",
    "114",
    "110",
    "104"
],

correctAnswer: "112",

explanation:
    "Count backwards by 4: 120, 116, 112, 108."
},

{
id: "cif-043",
skillId: "count-in-fours",
stage: "master",

hint: "Check each child's jumps one by one. Only one sequence keeps adding exactly 4 without changing.",

question: "Which child made no mistakes?",

options: [
    "Ben: 88, 92, 96, 100",
    "Ava: 88, 91, 95, 99",
    "Sam: 88, 94, 100, 106",
    "Leo: 88, 90, 94, 98"
],

correctAnswer: "Ben: 88, 92, 96, 100",

explanation:
    "Ben adds 4 each time."
},

{
id: "cif-044",
skillId: "count-in-fours",
stage: "master",

hint: "The question asks for one counting step after 132, so move forward by exactly 4.",

question: "Which number comes 4 after 132?",

options: [
    "136",
    "134",
    "138",
    "140"
],

correctAnswer: "136",

explanation:
    "132 + 4 = 136."
},

{
id: "cif-045",
skillId: "count-in-fours",
stage: "master",

hint: "The machine produces the same number every hour. Count ten equal groups of 4 or multiply.",

question: "A machine makes 4 toys every hour. How many toys after 10 hours?",

options: [
    "40",
    "36",
    "44",
    "48"
],

correctAnswer: "40",

explanation:
    "4 × 10 = 40, or count in fours ten times."
},

{
id: "cif-046",
skillId: "count-in-fours",
stage: "master",

hint: "Read each sequence carefully. One list contains a number that breaks the +4 pattern.",

question: "Which sequence has a mistake?",

options: [
    "52, 56, 61, 64",
    "52, 56, 60, 64",
    "20, 24, 28, 32",
    "84, 88, 92, 96"
],

correctAnswer: "52, 56, 61, 64",

explanation:
    "After 56 should come 60, not 61."
},

{
id: "cif-047",
skillId: "count-in-fours",
stage: "master",

hint: "196 is the current number. Take one more counting step of 4, even if it reaches a new hundred.",

question: "Which number comes after 196 when counting in fours?",

options: [
    "200",
    "198",
    "202",
    "204"
],

correctAnswer: "200",

explanation:
    "196 + 4 = 200."
},

{
id: "cif-048",
skillId: "count-in-fours",
stage: "master",

hint: "A backwards count removes 4 each time. Compare every pair of neighbouring numbers, not just the first pair.",

question: "Which list is in the correct order when counting backwards in fours?",

options: [
    "40, 36, 32, 28, 24",
    "40, 37, 34, 31, 28",
    "40, 38, 36, 34, 32",
    "40, 32, 24, 16, 8"
],

correctAnswer: "40, 36, 32, 28, 24",

explanation:
    "Subtract 4 each time."
},

{
id: "cif-049",
skillId: "count-in-fours",
stage: "master",

hint: "The missing number is exactly one count of 4 after 144 and one count of 4 before 152.",

question: "What is the missing number? 144, □, 152",

options: [
    "148",
    "146",
    "150",
    "154"
],

correctAnswer: "148",

explanation:
    "144 + 4 = 148."
},

{
id: "cif-050",
skillId: "count-in-fours",
stage: "master",

hint: "Don't just look at the first jump. Make sure every gap in the sequence is exactly 4.",

question: "Which list shows counting in fours correctly?",

options: [
    "16, 20, 24, 28, 32, 36",
    "16, 21, 26, 31, 36, 41",
    "16, 18, 20, 22, 24, 26",
    "16, 24, 32, 40, 48, 56"
],

correctAnswer: "16, 20, 24, 28, 32, 36",

explanation:
    "Each number is 4 more than the previous one."
},

]
};

export default countInFours;

export {
    countInFours
};