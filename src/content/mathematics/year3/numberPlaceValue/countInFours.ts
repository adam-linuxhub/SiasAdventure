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
