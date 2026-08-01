import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const compareNumbersUsingSymbols: SkillContent = {
    skillId: "compare-numbers-using-symbols",

    title: "Compare Numbers Using Symbols",

    description: "Compare numbers using <, > and =.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "cns-001",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol makes this true? 45 □ 52",

    options: [
        "<",
        ">",
        "=",
        "≠"
    ],

    correctAnswer: "<",

    explanation:
        "45 is less than 52, so use <."
},

{
    id: "cns-002",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol makes this true? 83 □ 71",

    options: [
        ">",
        "<",
        "=",
        "≠"
    ],

    correctAnswer: ">",

    explanation:
        "83 is greater than 71, so use >."
},

{
    id: "cns-003",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol makes this true? 96 □ 96",

    options: [
        "=",
        ">",
        "<",
        "≠"
    ],

    correctAnswer: "=",

    explanation:
        "Both numbers are the same."
},

{
    id: "cns-004",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which comparison is correct?",

    options: [
        "28 < 31",
        "28 > 31",
        "28 = 31",
        "31 < 28"
    ],

    correctAnswer: "28 < 31",

    explanation:
        "28 is less than 31."
},

{
    id: "cns-005",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which comparison is correct?",

    options: [
        "74 > 69",
        "74 < 69",
        "74 = 69",
        "69 > 74"
    ],

    correctAnswer: "74 > 69",

    explanation:
        "74 is greater than 69."
},

{
    id: "cns-006",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol belongs? 100 □ 100",

    options: [
        "=",
        "<",
        ">",
        "≠"
    ],

    correctAnswer: "=",

    explanation:
        "The numbers are equal."
},

{
    id: "cns-007",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol makes this true? 208 □ 180",

    options: [
        ">",
        "<",
        "=",
        "≠"
    ],

    correctAnswer: ">",

    explanation:
        "208 is greater than 180."
},

{
    id: "cns-008",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol makes this true? 399 □ 401",

    options: [
        "<",
        ">",
        "=",
        "≠"
    ],

    correctAnswer: "<",

    explanation:
        "399 is less than 401."
},

{
    id: "cns-009",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which comparison is correct?",

    options: [
        "512 = 512",
        "512 > 512",
        "512 < 512",
        "511 = 512"
    ],

    correctAnswer: "512 = 512",

    explanation:
        "Both numbers are exactly the same."
},

{
    id: "cns-010",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol belongs? 640 □ 642",

    options: [
        "<",
        ">",
        "=",
        "≠"
    ],

    correctAnswer: "<",

    explanation:
        "640 is less than 642."
},

{
    id: "cns-011",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which pair is equal?",

    options: [
        "703 and 703",
        "703 and 730",
        "703 and 700",
        "703 and 733"
    ],

    correctAnswer: "703 and 703",

    explanation:
        "Equal numbers have the same value."
},

{
    id: "cns-012",
    skillId: "compare-numbers-using-symbols",
    stage: "recognise",

    question: "Which symbol makes this true? 999 □ 1000",

    options: [
        "<",
        ">",
        "=",
        "≠"
    ],

    correctAnswer: "<",

    explanation:
        "999 is one less than 1000."
},

{
    id: "cns-013",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Ella says 315 > 351. Is she correct?",

    options: [
        "No, 315 < 351",
        "Yes",
        "They are equal",
        "You cannot tell"
    ],

    correctAnswer: "No, 315 < 351",

    explanation:
        "315 is less than 351."
},

{
    id: "cns-014",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Which comparison is true?",

    options: [
        "480 > 408",
        "480 < 408",
        "480 = 408",
        "408 > 480"
    ],

    correctAnswer: "480 > 408",

    explanation:
        "480 is greater than 408."
},

{
    id: "cns-015",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Which symbol belongs? 726 □ 726",

    options: [
        "=",
        "<",
        ">",
        "≠"
    ],

    correctAnswer: "=",

    explanation:
        "Both numbers have exactly the same value."
},
{
    id: "cns-016",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Which symbol makes this true? 842 □ 824",

    options: [
        ">",
        "<",
        "=",
        "≠"
    ],

    correctAnswer: ">",

    explanation:
        "842 is greater than 824."
},

{
    id: "cns-017",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Which comparison is true?",

    options: [
        "607 < 670",
        "607 > 670",
        "607 = 670",
        "670 < 607"
    ],

    correctAnswer: "607 < 670",

    explanation:
        "607 is less than 670."
},

{
    id: "cns-018",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Sam says 490 = 490.",
        "Ava says 490 > 490.",
        "Leo says 490 < 490.",
        "Mia says 491 = 490."
    ],

    correctAnswer: "Sam says 490 = 490.",

    explanation:
        "Both numbers are the same, so they are equal."
},

{
    id: "cns-019",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Which symbol belongs? 305 □ 350",

    options: [
        "<",
        ">",
        "=",
        "≠"
    ],

    correctAnswer: "<",

    explanation:
        "305 is less than 350."
},

{
    id: "cns-020",
    skillId: "compare-numbers-using-symbols",
    stage: "understand",

    question: "Which comparison is NOT correct?",

    options: [
        "258 > 285",
        "258 < 285",
        "500 = 500",
        "901 > 899"
    ],

    correctAnswer: "258 > 285",

    explanation:
        "258 is less than 285, not greater."
},

{
    id: "cns-021",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "A red team scored 315 points. A blue team scored 351 points. Which comparison is correct?",

    options: [
        "315 < 351",
        "315 > 351",
        "315 = 351",
        "351 < 315"
    ],

    correctAnswer: "315 < 351",

    explanation:
        "351 is the greater score."
},

{
    id: "cns-022",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "A train travelled 680 miles. Another train travelled 608 miles. Which symbol belongs? 680 □ 608",

    options: [
        ">",
        "<",
        "=",
        "≠"
    ],

    correctAnswer: ">",

    explanation:
        "680 is greater than 608."
},

{
    id: "cns-023",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "Which number could go in the box? □ > 458",

    options: [
        "460",
        "450",
        "458",
        "357"
    ],

    correctAnswer: "460",

    explanation:
        "460 is greater than 458."
},

{
    id: "cns-024",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "Which number could go in the box? □ < 732",

    options: [
        "731",
        "740",
        "800",
        "732"
    ],

    correctAnswer: "731",

    explanation:
        "731 is less than 732."
},

{
    id: "cns-025",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "Which comparison is correct?",

    options: [
        "1000 > 999",
        "1000 < 999",
        "1000 = 999",
        "999 > 1000"
    ],

    correctAnswer: "1000 > 999",

    explanation:
        "1000 is one greater than 999."
},

{
    id: "cns-026",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "A book has 486 pages. Another has 468 pages. Which book has more pages?",

    options: [
        "486-page book",
        "468-page book",
        "They have the same number",
        "You cannot tell"
    ],

    correctAnswer: "486-page book",

    explanation:
        "486 is greater than 468."
},

{
    id: "cns-027",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "Which comparison is true?",

    options: [
        "705 > 570",
        "705 < 570",
        "705 = 570",
        "570 > 705"
    ],

    correctAnswer: "705 > 570",

    explanation:
        "705 has more hundreds than 570."
},

{
    id: "cns-028",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "Which symbol belongs? 999 □ 999",

    options: [
        "=",
        ">",
        "<",
        "≠"
    ],

    correctAnswer: "=",

    explanation:
        "Both numbers are exactly equal."
},

{
    id: "cns-029",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "Which number is greater than 625 but less than 630?",

    options: [
        "627",
        "620",
        "631",
        "625"
    ],

    correctAnswer: "627",

    explanation:
        "627 is greater than 625 and less than 630."
},

{
    id: "cns-030",
    skillId: "compare-numbers-using-symbols",
    stage: "apply",

    question: "Which comparison is correct?",

    options: [
        "803 > 380",
        "803 < 380",
        "803 = 380",
        "380 > 803"
    ],

    correctAnswer: "803 > 380",

    explanation:
        "803 has more hundreds than 380."
},
{
    id: "cns-031",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which comparison is correct?",

    options: [
        "489 < 498",
        "489 > 498",
        "489 = 498",
        "498 < 489"
    ],

    correctAnswer: "489 < 498",

    explanation:
        "489 is less than 498."
},

{
    id: "cns-032",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Ava says 610 > 601.",
        "Ben says 610 < 601.",
        "Chloe says 610 = 601.",
        "Ethan says 601 > 610."
    ],

    correctAnswer: "Ava says 610 > 601.",

    explanation:
        "610 is greater than 601."
},

{
    id: "cns-033",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which number could go in the box? □ = 742",

    options: [
        "742",
        "724",
        "740",
        "752"
    ],

    correctAnswer: "742",

    explanation:
        "Equal numbers have exactly the same value."
},

{
    id: "cns-034",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which comparison is NOT true?",

    options: [
        "910 < 901",
        "910 > 901",
        "200 = 200",
        "405 < 450"
    ],

    correctAnswer: "910 < 901",

    explanation:
        "910 is greater than 901."
},

{
    id: "cns-035",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which number is less than 356?",

    options: [
        "355",
        "357",
        "360",
        "400"
    ],

    correctAnswer: "355",

    explanation:
        "355 is one less than 356."
},

{
    id: "cns-036",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "A library has 685 books. Another library has 658 books. Which comparison is correct?",

    options: [
        "685 > 658",
        "685 < 658",
        "685 = 658",
        "658 > 685"
    ],

    correctAnswer: "685 > 658",

    explanation:
        "685 is greater than 658."
},

{
    id: "cns-037",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which number could go in the box? 498 < □",

    options: [
        "500",
        "498",
        "490",
        "489"
    ],

    correctAnswer: "500",

    explanation:
        "500 is greater than 498."
},

{
    id: "cns-038",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which comparison is correct?",

    options: [
        "275 = 275",
        "275 > 275",
        "275 < 275",
        "274 = 275"
    ],

    correctAnswer: "275 = 275",

    explanation:
        "The numbers are exactly equal."
},

{
    id: "cns-039",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "801 > 799",
        "801 < 799",
        "801 = 799",
        "799 > 801"
    ],

    correctAnswer: "801 > 799",

    explanation:
        "801 is greater than 799."
},

{
    id: "cns-040",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which list is correct?",

    options: [
        "120 < 121, 560 = 560, 900 > 899",
        "120 > 121, 560 = 560, 900 > 899",
        "120 < 121, 560 < 560, 900 > 899",
        "120 < 121, 560 = 560, 900 < 899"
    ],

    correctAnswer: "120 < 121, 560 = 560, 900 > 899",

    explanation:
        "All three comparisons are true."
},

{
    id: "cns-041",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "A game scored 932 points yesterday and 923 today. Which day had the higher score?",

    options: [
        "Yesterday",
        "Today",
        "They scored the same",
        "You cannot tell"
    ],

    correctAnswer: "Yesterday",

    explanation:
        "932 is greater than 923."
},

{
    id: "cns-042",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which number could go in the box? □ < 501",

    options: [
        "500",
        "501",
        "510",
        "520"
    ],

    correctAnswer: "500",

    explanation:
        "500 is less than 501."
},

{
    id: "cns-043",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which comparison is true?",

    options: [
        "640 > 604",
        "640 < 604",
        "640 = 604",
        "604 > 640"
    ],

    correctAnswer: "640 > 604",

    explanation:
        "640 has more tens than 604."
},

{
    id: "cns-044",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which number is greater than 888?",

    options: [
        "889",
        "878",
        "880",
        "888"
    ],

    correctAnswer: "889",

    explanation:
        "889 is one greater than 888."
},

{
    id: "cns-045",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which comparison is incorrect?",

    options: [
        "702 < 720",
        "480 > 408",
        "350 = 350",
        "905 < 890"
    ],

    correctAnswer: "905 < 890",

    explanation:
        "905 is greater than 890."
},

{
    id: "cns-046",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which symbol belongs? 999 □ 998",

    options: [
        ">",
        "<",
        "=",
        "≠"
    ],

    correctAnswer: ">",

    explanation:
        "999 is greater than 998."
},

{
    id: "cns-047",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which child compared the numbers correctly?",

    options: [
        "Mia says 430 < 403.",
        "Leo says 430 > 403.",
        "Noah says 430 = 403.",
        "Ella says 403 > 430."
    ],

    correctAnswer: "Leo says 430 > 403.",

    explanation:
        "430 is greater than 403."
},

{
    id: "cns-048",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which number makes this true? □ > 999",

    options: [
        "1000",
        "999",
        "998",
        "990"
    ],

    correctAnswer: "1000",

    explanation:
        "1000 is greater than 999."
},

{
    id: "cns-049",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which comparison is correct?",

    options: [
        "456 < 465",
        "456 > 465",
        "456 = 465",
        "465 < 456"
    ],

    correctAnswer: "456 < 465",

    explanation:
        "456 is less than 465."
},

{
    id: "cns-050",
    skillId: "compare-numbers-using-symbols",
    stage: "master",

    question: "Which list has every comparison correct?",

    options: [
        "250 < 252, 801 > 798, 640 = 640",
        "250 > 252, 801 > 798, 640 = 640",
        "250 < 252, 801 < 798, 640 = 640",
        "250 < 252, 801 > 798, 640 > 640"
    ],

    correctAnswer: "250 < 252, 801 > 798, 640 = 640",

    explanation:
        "All three comparisons are correct."
},

    ]
};


export default compareNumbersUsingSymbols;

export {

    compareNumbersUsingSymbols

};
