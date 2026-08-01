import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const addAndSubtractWithExchanging: SkillContent = {
    skillId: "add-and-subtract-with-exchanging",

    title: "Add and Subtract with Exchanging",

    description: "Add and subtract numbers by exchanging tens and ones.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "asae-001",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 38 + 7?",

    options: [
        "45",
        "44",
        "46",
        "47"
    ],

    correctAnswer: "45",

    explanation:
        "38 + 2 = 40, then +5 = 45."
},

{
    id: "asae-002",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 56 - 8?",

    options: [
        "48",
        "46",
        "49",
        "47"
    ],

    correctAnswer: "48",

    explanation:
        "56 − 6 = 50, then −2 = 48."
},

{
    id: "asae-003",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 79 + 5?",

    options: [
        "84",
        "83",
        "85",
        "74"
    ],

    correctAnswer: "84",

    explanation:
        "79 + 1 = 80, then +4 = 84."
},

{
    id: "asae-004",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 42 - 5?",

    options: [
        "37",
        "38",
        "36",
        "35"
    ],

    correctAnswer: "37",

    explanation:
        "42 − 2 = 40, then −3 = 37."
},

{
    id: "asae-005",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 68 + 4?",

    options: [
        "72",
        "71",
        "73",
        "74"
    ],

    correctAnswer: "72",

    explanation:
        "68 + 2 = 70, then +2 = 72."
},

{
    id: "asae-006",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 91 - 4?",

    options: [
        "87",
        "88",
        "86",
        "89"
    ],

    correctAnswer: "87",

    explanation:
        "91 − 1 = 90, then −3 = 87."
},

{
    id: "asae-007",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 47 + 6?",

    options: [
        "53",
        "52",
        "54",
        "51"
    ],

    correctAnswer: "53",

    explanation:
        "47 + 3 = 50, then +3 = 53."
},

{
    id: "asae-008",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 63 - 7?",

    options: [
        "56",
        "55",
        "57",
        "54"
    ],

    correctAnswer: "56",

    explanation:
        "63 − 3 = 60, then −4 = 56."
},

{
    id: "asae-009",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "Which calculation equals 62?",

    options: [
        "57 + 5",
        "70 - 8",
        "59 + 3",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation equals 62."
},

{
    id: "asae-010",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 28 + 5?",

    options: [
        "33",
        "32",
        "34",
        "35"
    ],

    correctAnswer: "33",

    explanation:
        "28 + 2 = 30, then +3 = 33."
},

{
    id: "asae-011",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 84 - 6?",

    options: [
        "78",
        "79",
        "77",
        "76"
    ],

    correctAnswer: "78",

    explanation:
        "84 − 4 = 80, then −2 = 78."
},

{
    id: "asae-012",
    skillId: "add-and-subtract-with-exchanging",
    stage: "recognise",

    question: "What is 95 + 8?",

    options: [
        "103",
        "102",
        "104",
        "101"
    ],

    correctAnswer: "103",

    explanation:
        "95 + 5 = 100, then +3 = 103."
},

{
    id: "asae-013",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "Ella says 49 + 6 = 55. Is she correct?",

    options: [
        "Yes",
        "No, it is 54.",
        "No, it is 56.",
        "No, it is 53."
    ],

    correctAnswer: "Yes",

    explanation:
        "49 + 1 = 50, then +5 = 55."
},

{
    id: "asae-014",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "Ben says 72 - 5 = 67. Is he correct?",

    options: [
        "Yes",
        "No, it is 68.",
        "No, it is 66.",
        "No, it is 69."
    ],

    correctAnswer: "Yes",

    explanation:
        "72 − 2 = 70, then −3 = 67."
},

{
    id: "asae-015",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "Which calculation bridges through the next ten?",

    options: [
        "58 + 4",
        "52 + 4",
        "41 + 3",
        "33 + 5"
    ],

    correctAnswer: "58 + 4",

    explanation:
        "58 + 4 crosses from the 50s into the 60s, so it bridges through the next ten."
},
{
    id: "asae-016",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "What is 67 + 8?",

    options: [
        "75",
        "74",
        "76",
        "73"
    ],

    correctAnswer: "75",

    explanation:
        "67 + 3 = 70, then +5 = 75."
},

{
    id: "asae-017",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "What is 53 - 7?",

    options: [
        "46",
        "47",
        "45",
        "48"
    ],

    correctAnswer: "46",

    explanation:
        "53 − 3 = 50, then −4 = 46."
},

{
    id: "asae-018",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "Which calculation crosses into the next hundred?",

    options: [
        "96 + 8",
        "81 + 7",
        "64 + 5",
        "73 + 6"
    ],

    correctAnswer: "96 + 8",

    explanation:
        "96 + 8 goes past 100, giving 104."
},

{
    id: "asae-019",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Ella: 88 + 5 = 93",
        "Ben: 88 + 5 = 92",
        "Sam: 88 + 5 = 94",
        "Leo: 88 + 5 = 95"
    ],

    correctAnswer: "Ella: 88 + 5 = 93",

    explanation:
        "88 + 2 = 90, then +3 = 93."
},

{
    id: "asae-020",
    skillId: "add-and-subtract-with-exchanging",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Ben: 61 - 9 = 52",
        "Ella: 61 - 9 = 53",
        "Sam: 61 - 9 = 51",
        "Leo: 61 - 9 = 54"
    ],

    correctAnswer: "Ben: 61 - 9 = 52",

    explanation:
        "61 − 1 = 60, then −8 = 52."
},

{
    id: "asae-021",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "A frog is on lily pad 48. It jumps forward 7 pads. Which lily pad does it land on?",

    options: [
        "55",
        "54",
        "56",
        "53"
    ],

    correctAnswer: "55",

    explanation:
        "48 + 2 = 50, then +5 = 55."
},

{
    id: "asae-022",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "A lift is on floor 62. It goes down 8 floors. Which floor does it reach?",

    options: [
        "54",
        "55",
        "53",
        "56"
    ],

    correctAnswer: "54",

    explanation:
        "62 − 2 = 60, then −6 = 54."
},

{
    id: "asae-023",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "A runner has completed 39 laps. They run 6 more laps. How many laps have they completed?",

    options: [
        "45",
        "44",
        "46",
        "43"
    ],

    correctAnswer: "45",

    explanation:
        "39 + 1 = 40, then +5 = 45."
},

{
    id: "asae-024",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "There are 74 children in a playground. Nine go home. How many children are left?",

    options: [
        "65",
        "66",
        "64",
        "63"
    ],

    correctAnswer: "65",

    explanation:
        "74 − 4 = 70, then −5 = 65."
},

{
    id: "asae-025",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "A train has travelled 97 miles. It travels 8 more miles. How far has it travelled altogether?",

    options: [
        "105 miles",
        "104 miles",
        "106 miles",
        "103 miles"
    ],

    correctAnswer: "105 miles",

    explanation:
        "97 + 3 = 100, then +5 = 105."
},

{
    id: "asae-026",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "A toy shop has 102 kites. It sells 6 kites. How many kites remain?",

    options: [
        "96",
        "97",
        "98",
        "95"
    ],

    correctAnswer: "96",

    explanation:
        "102 − 2 = 100, then −4 = 96."
},

{
    id: "asae-027",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "Which calculation gives 71?",

    options: [
        "65 + 6",
        "79 - 8",
        "68 + 3",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation equals 71."
},

{
    id: "asae-028",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "Which number is missing? 58 + □ = 64",

    options: [
        "6",
        "5",
        "7",
        "8"
    ],

    correctAnswer: "6",

    explanation:
        "58 + 6 = 64."
},

{
    id: "asae-029",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "Which number is missing? 81 - □ = 74",

    options: [
        "7",
        "6",
        "8",
        "9"
    ],

    correctAnswer: "7",

    explanation:
        "81 − 7 = 74."
},

{
    id: "asae-030",
    skillId: "add-and-subtract-with-exchanging",
    stage: "apply",

    question: "Which child solved the calculation correctly? '87 + 9'",

    options: [
        "Ben: 96",
        "Ella: 95",
        "Sam: 97",
        "Leo: 98"
    ],

    correctAnswer: "Ben: 96",

    explanation:
        "87 + 3 = 90, then +6 = 96."
},
{
    id: "asae-031",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "What is 78 + 9?",

    options: [
        "87",
        "86",
        "88",
        "89"
    ],

    correctAnswer: "87",

    explanation:
        "78 + 2 = 80, then +7 = 87."
},

{
    id: "asae-032",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "What is 104 - 8?",

    options: [
        "96",
        "95",
        "97",
        "94"
    ],

    correctAnswer: "96",

    explanation:
        "104 − 4 = 100, then −4 = 96."
},

{
    id: "asae-033",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which calculation equals 102?",

    options: [
        "97 + 5",
        "110 - 8",
        "94 + 8",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation equals 102."
},

{
    id: "asae-034",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Ella: 69 + 7 = 76",
        "Ben: 69 + 7 = 75",
        "Sam: 69 + 7 = 77",
        "Leo: 69 + 7 = 74"
    ],

    correctAnswer: "Ella: 69 + 7 = 76",

    explanation:
        "69 + 1 = 70, then +6 = 76."
},

{
    id: "asae-035",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Ben: 83 - 9 = 74",
        "Ella: 83 - 9 = 75",
        "Sam: 83 - 9 = 73",
        "Leo: 83 - 9 = 76"
    ],

    correctAnswer: "Ben: 83 - 9 = 74",

    explanation:
        "83 − 3 = 80, then −6 = 74."
},

{
    id: "asae-036",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "A baker has baked 88 buns. She bakes 7 more. How many buns does she have now?",

    options: [
        "95",
        "94",
        "96",
        "97"
    ],

    correctAnswer: "95",

    explanation:
        "88 + 2 = 90, then +5 = 95."
},

{
    id: "asae-037",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "A bus has 71 passengers. Eight passengers get off. How many passengers remain?",

    options: [
        "63",
        "64",
        "62",
        "65"
    ],

    correctAnswer: "63",

    explanation:
        "71 − 1 = 70, then −7 = 63."
},

{
    id: "asae-038",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "A game score is 98. You earn 6 more points. What is your new score?",

    options: [
        "104",
        "103",
        "105",
        "102"
    ],

    correctAnswer: "104",

    explanation:
        "98 + 2 = 100, then +4 = 104."
},

{
    id: "asae-039",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "There are 123 stickers. Nine are used. How many stickers are left?",

    options: [
        "114",
        "115",
        "113",
        "116"
    ],

    correctAnswer: "114",

    explanation:
        "123 − 3 = 120, then −6 = 114."
},

{
    id: "asae-040",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which calculation crosses a hundred boundary?",

    options: [
        "97 + 8",
        "54 + 6",
        "61 - 3",
        "42 + 5"
    ],

    correctAnswer: "97 + 8",

    explanation:
        "97 + 8 crosses from the 90s into the hundreds."
},

{
    id: "asae-041",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which number is missing? □ + 8 = 74",

    options: [
        "66",
        "65",
        "67",
        "68"
    ],

    correctAnswer: "66",

    explanation:
        "66 + 8 = 74."
},

{
    id: "asae-042",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which number is missing? 92 - □ = 85",

    options: [
        "7",
        "6",
        "8",
        "9"
    ],

    correctAnswer: "7",

    explanation:
        "92 − 7 = 85."
},

{
    id: "asae-043",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "A child has 56 marbles. They win 8 more, then lose 5. How many marbles do they have now?",

    options: [
        "59",
        "58",
        "60",
        "61"
    ],

    correctAnswer: "59",

    explanation:
        "56 + 8 = 64, then 64 − 5 = 59."
},

{
    id: "asae-044",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which calculation is wrong?",

    options: [
        "48 + 7 = 56",
        "72 - 8 = 64",
        "95 + 6 = 101",
        "83 - 4 = 79"
    ],

    correctAnswer: "48 + 7 = 56",

    explanation:
        "48 + 7 = 55, not 56."
},

{
    id: "asae-045",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "What is 89 + 4?",

    options: [
        "93",
        "92",
        "94",
        "95"
    ],

    correctAnswer: "93",

    explanation:
        "89 + 1 = 90, then +3 = 93."
},

{
    id: "asae-046",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "What is 70 - 8?",

    options: [
        "62",
        "63",
        "61",
        "64"
    ],

    correctAnswer: "62",

    explanation:
        "70 − 8 = 62."
},

{
    id: "asae-047",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which journey is correct?",

    options: [
        "96 → 100 → 103",
        "96 → 99 → 103",
        "96 → 101 → 103",
        "96 → 100 → 102"
    ],

    correctAnswer: "96 → 100 → 103",

    explanation:
        "Add 4 to reach 100, then add 3 more to reach 103."
},

{
    id: "asae-048",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which calculation uses bridging through ten?",

    options: [
        "57 + 6",
        "42 + 5",
        "31 + 4",
        "65 + 2"
    ],

    correctAnswer: "57 + 6",

    explanation:
        "57 + 6 crosses from the 50s into the 60s."
},

{
    id: "asae-049",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "99 + 5 = 104",
        "99 + 5 = 103",
        "99 - 5 = 95",
        "99 - 5 = 93"
    ],

    correctAnswer: "99 + 5 = 104",

    explanation:
        "99 + 1 = 100, then +4 = 104."
},

{
    id: "asae-050",
    skillId: "add-and-subtract-with-exchanging",
    stage: "master",

    question: "Which strategy is best for solving 68 + 7 mentally?",

    options: [
        "Add 2 to make 70, then add 5.",
        "Add all 7 at once without thinking.",
        "Subtract 7 first, then add it back.",
        "Round to 100 first."
    ],

    correctAnswer: "Add 2 to make 70, then add 5.",

    explanation:
        "Bridging to the next ten makes the calculation easier: 68 + 2 = 70, then +5 = 75."
},

    ]
};


export default addAndSubtractWithExchanging;

export {

    addAndSubtractWithExchanging

};
