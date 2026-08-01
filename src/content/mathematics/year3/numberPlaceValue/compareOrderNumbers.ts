import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const compareOrderNumbers: SkillContent = {
    skillId: "compare-order-numbers",

    title: "Compare and Order Numbers",

    description: "Compare and order three-digit numbers.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "con-001",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which number is greater?",

    options: [
        "348",
        "384",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "384",

    explanation:
        "Compare the tens digits. 8 tens is greater than 4 tens."
},

{
    id: "con-002",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which number is smaller?",

    options: [
        "527",
        "572",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "527",

    explanation:
        "Both have 5 hundreds. Compare the tens digits. 2 tens is smaller than 7 tens."
},

{
    id: "con-003",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which symbol makes the sentence true? 416 ___ 461",

    options: [
        "<",
        ">",
        "=",
        "+"
    ],

    correctAnswer: "<",

    explanation:
        "416 is less than 461."
},

{
    id: "con-004",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which symbol makes the sentence true? 803 ___ 803",

    options: [
        "=",
        "<",
        ">",
        "≠"
    ],

    correctAnswer: "=",

    explanation:
        "Both numbers are exactly the same."
},

{
    id: "con-005",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which number is greater?",

    options: [
        "691",
        "619",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "691",

    explanation:
        "Both have 6 hundreds. Compare the tens digits."
},

{
    id: "con-006",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which number is smaller?",

    options: [
        "945",
        "954",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "945",

    explanation:
        "Compare the tens digits. 4 tens is less than 5 tens."
},

{
    id: "con-007",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which symbol makes the sentence true? 278 ___ 275",

    options: [
        ">",
        "<",
        "=",
        "+"
    ],

    correctAnswer: ">",

    explanation:
        "278 is greater than 275."
},

{
    id: "con-008",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which number is greater?",

    options: [
        "408",
        "480",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "480",

    explanation:
        "Both have 4 hundreds. Compare the tens digits."
},

{
    id: "con-009",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which number is smaller?",

    options: [
        "731",
        "713",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "713",

    explanation:
        "Compare the tens digits first."
},

{
    id: "con-010",
    skillId: "compare-order-numbers",
    stage: "recognise",

    question: "Which symbol makes the sentence true? 600 ___ 599",

    options: [
        ">",
        "<",
        "=",
        "+"
    ],

    correctAnswer: ">",

    explanation:
        "600 is greater than 599."
},

{
    id: "con-011",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "A library has 483 books. A school has 438 books. Which has more books?",

    options: [
        "Library",
        "School",
        "They have the same",
        "Cannot tell"
    ],

    correctAnswer: "Library",

    explanation:
        "483 is greater than 438."
},

{
    id: "con-012",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "A zoo welcomed 756 visitors on Monday and 765 on Tuesday. Which day had more visitors?",

    options: [
        "Tuesday",
        "Monday",
        "Both days",
        "Cannot tell"
    ],

    correctAnswer: "Tuesday",

    explanation:
        "765 is greater than 756."
},

{
    id: "con-013",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "A shop sold 612 toys and another sold 621 toys. Which shop sold fewer toys?",

    options: [
        "612 toys",
        "621 toys",
        "Both sold the same",
        "Cannot tell"
    ],

    correctAnswer: "612 toys",

    explanation:
        "612 is less than 621."
},

{
    id: "con-014",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "A farmer counted 398 sheep and then 389 sheep. Which number is greater?",

    options: [
        "398",
        "389",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "398",

    explanation:
        "Compare the tens digits. 9 tens is greater than 8 tens."
},

{
    id: "con-015",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Which number is the greatest?",

    options: [
        "504",
        "540",
        "450",
        "405"
    ],

    correctAnswer: "540",

    explanation:
        "540 has 5 hundreds and 4 tens, making it the greatest."
},
{
    id: "con-016",
    skillId: "compare-order-numbers",
    stage: "understand",

    question: "Which list is in ascending order?",

    options: [
        "245, 254, 425",
        "425, 254, 245",
        "254, 245, 425",
        "425, 245, 254"
    ],

    correctAnswer: "245, 254, 425",

    explanation:
        "Ascending order means smallest to greatest."
},

{
    id: "con-017",
    skillId: "compare-order-numbers",
    stage: "understand",

    question: "Which list is in descending order?",

    options: [
        "891, 819, 198",
        "198, 819, 891",
        "819, 198, 891",
        "819, 891, 198"
    ],

    correctAnswer: "891, 819, 198",

    explanation:
        "Descending order means greatest to smallest."
},

{
    id: "con-018",
    skillId: "compare-order-numbers",
    stage: "understand",

    question: "Which number is the smallest?",

    options: [
        "372",
        "327",
        "273",
        "237"
    ],

    correctAnswer: "237",

    explanation:
        "237 has the smallest hundreds digit."
},

{
    id: "con-019",
    skillId: "compare-order-numbers",
    stage: "understand",

    question: "Which number is the greatest?",

    options: [
        "648",
        "684",
        "468",
        "486"
    ],

    correctAnswer: "684",

    explanation:
        "684 has the greatest value."
},

{
    id: "con-020",
    skillId: "compare-order-numbers",
    stage: "understand",

    question: "Which number belongs in the middle?",

    options: [
        "356",
        "365",
        "536",
        "653"
    ],

    correctAnswer: "365",

    explanation:
        "The numbers in order are 356, 365, 536, 653."
},

{
    id: "con-021",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Put these numbers in ascending order: 604, 640, 460",

    options: [
        "460, 604, 640",
        "604, 460, 640",
        "640, 604, 460",
        "460, 640, 604"
    ],

    correctAnswer: "460, 604, 640",

    explanation:
        "Start with the smallest hundreds digit."
},

{
    id: "con-022",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Put these numbers in descending order: 715, 751, 571",

    options: [
        "751, 715, 571",
        "715, 751, 571",
        "571, 715, 751",
        "751, 571, 715"
    ],

    correctAnswer: "751, 715, 571",

    explanation:
        "Descending order goes from greatest to smallest."
},

{
    id: "con-023",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Which number should come next? 345, 356, 367, ___",

    options: [
        "378",
        "377",
        "376",
        "379"
    ],

    correctAnswer: "378",

    explanation:
        "Each number increases by 11."
},

{
    id: "con-024",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Which number should come between 508 and 510?",

    options: [
        "509",
        "511",
        "500",
        "519"
    ],

    correctAnswer: "509",

    explanation:
        "509 comes between 508 and 510."
},

{
    id: "con-025",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "A school has classes with 312, 321 and 213 pupils. Which class has the fewest pupils?",

    options: [
        "213",
        "312",
        "321",
        "They are equal"
    ],

    correctAnswer: "213",

    explanation:
        "213 is the smallest number."
},

{
    id: "con-026",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "A library has 824, 842 and 428 books in three rooms. Which room has the most books?",

    options: [
        "842",
        "824",
        "428",
        "They are equal"
    ],

    correctAnswer: "842",

    explanation:
        "842 is the greatest number."
},

{
    id: "con-027",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Which list is in ascending order?",

    options: [
        "199, 299, 399",
        "399, 299, 199",
        "299, 199, 399",
        "399, 199, 299"
    ],

    correctAnswer: "199, 299, 399",

    explanation:
        "Ascending means smallest to greatest."
},

{
    id: "con-028",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Which list is in descending order?",

    options: [
        "960, 690, 609",
        "609, 690, 960",
        "690, 960, 609",
        "960, 609, 690"
    ],

    correctAnswer: "960, 690, 609",

    explanation:
        "Descending means greatest to smallest."
},

{
    id: "con-029",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Which number comes first in ascending order?",

    options: [
        "708",
        "780",
        "870",
        "807"
    ],

    correctAnswer: "708",

    explanation:
        "708 is the smallest number."
},

{
    id: "con-030",
    skillId: "compare-order-numbers",
    stage: "apply",

    question: "Which number comes last in descending order?",

    options: [
        "482",
        "428",
        "248",
        "824"
    ],

    correctAnswer: "248",

    explanation:
        "In descending order, the smallest number comes last."
},
{
    id: "con-031",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number is greatest?",

    options: [
        "846",
        "864",
        "684",
        "648"
    ],

    correctAnswer: "864",

    explanation:
        "All have similar digits, but 864 has the greatest value."
},

{
    id: "con-032",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which list is in ascending order?",

    options: [
        "318, 381, 813, 831",
        "831, 813, 381, 318",
        "381, 318, 813, 831",
        "318, 813, 381, 831"
    ],

    correctAnswer: "318, 381, 813, 831",

    explanation:
        "Ascending order means smallest to greatest."
},

{
    id: "con-033",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number should come first?",

    options: [
        "509",
        "590",
        "950",
        "905"
    ],

    correctAnswer: "509",

    explanation:
        "509 is the smallest number."
},

{
    id: "con-034",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which symbol makes the sentence true? 732 ___ 723",

    options: [
        ">",
        "<",
        "=",
        "+"
    ],

    correctAnswer: ">",

    explanation:
        "Both have 7 hundreds. Compare the tens digits."
},

{
    id: "con-035",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which list is NOT in descending order?",

    options: [
        "945, 954, 549",
        "954, 945, 549",
        "875, 857, 785",
        "700, 670, 607"
    ],

    correctAnswer: "945, 954, 549",

    explanation:
        "954 should come before 945."
},

{
    id: "con-036",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number belongs between 468 and 470?",

    options: [
        "469",
        "471",
        "467",
        "460"
    ],

    correctAnswer: "469",

    explanation:
        "469 is between 468 and 470."
},

{
    id: "con-037",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number is the smallest?",

    options: [
        "801",
        "810",
        "108",
        "180"
    ],

    correctAnswer: "108",

    explanation:
        "108 has the smallest hundreds digit."
},

{
    id: "con-038",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Put these numbers in descending order: 624, 642, 426",

    options: [
        "642, 624, 426",
        "624, 642, 426",
        "426, 624, 642",
        "642, 426, 624"
    ],

    correctAnswer: "642, 624, 426",

    explanation:
        "Compare the hundreds first, then the tens."
},

{
    id: "con-039",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number is greater than 598 but less than 602?",

    options: [
        "600",
        "603",
        "598",
        "602"
    ],

    correctAnswer: "600",

    explanation:
        "600 is greater than 598 and less than 602."
},

{
    id: "con-040",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which list is in ascending order?",

    options: [
        "407, 470, 704",
        "704, 470, 407",
        "470, 407, 704",
        "470, 704, 407"
    ],

    correctAnswer: "407, 470, 704",

    explanation:
        "The numbers increase from smallest to greatest."
},

{
    id: "con-041",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number comes last in ascending order?",

    options: [
        "275",
        "257",
        "725",
        "572"
    ],

    correctAnswer: "725",

    explanation:
        "725 is the greatest number."
},

{
    id: "con-042",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number is closest to 500?",

    options: [
        "498",
        "489",
        "512",
        "475"
    ],

    correctAnswer: "498",

    explanation:
        "498 is only 2 away from 500."
},

{
    id: "con-043",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which list is correctly ordered from greatest to smallest?",

    options: [
        "803, 380, 308",
        "380, 803, 308",
        "308, 380, 803",
        "803, 308, 380"
    ],

    correctAnswer: "803, 380, 308",

    explanation:
        "803 is greatest, followed by 380, then 308."
},

{
    id: "con-044",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which symbol makes the sentence true? 450 ___ 405",

    options: [
        ">",
        "<",
        "=",
        "+"
    ],

    correctAnswer: ">",

    explanation:
        "450 is greater than 405."
},

{
    id: "con-045",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number belongs between 719 and 721?",

    options: [
        "720",
        "722",
        "718",
        "710"
    ],

    correctAnswer: "720",

    explanation:
        "720 comes between 719 and 721."
},

{
    id: "con-046",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number is the greatest?",

    options: [
        "909",
        "990",
        "999",
        "909"
    ],

    correctAnswer: "999",

    explanation:
        "999 is greater than all the other numbers."
},

{
    id: "con-047",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which list is NOT in ascending order?",

    options: [
        "205, 250, 520",
        "315, 351, 513",
        "640, 604, 460",
        "708, 780, 807"
    ],

    correctAnswer: "640, 604, 460",

    explanation:
        "This list starts with the largest number instead of the smallest."
},

{
    id: "con-048",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number comes immediately before 600?",

    options: [
        "599",
        "601",
        "590",
        "598"
    ],

    correctAnswer: "599",

    explanation:
        "599 is one less than 600."
},

{
    id: "con-049",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Which number is greater?",

    options: [
        "671",
        "617",
        "They are equal",
        "Cannot tell"
    ],

    correctAnswer: "671",

    explanation:
        "Both have 6 hundreds. Compare the tens digits."
},

{
    id: "con-050",
    skillId: "compare-order-numbers",
    stage: "master",

    question: "Put these numbers in ascending order: 902, 920, 209",

    options: [
        "209, 902, 920",
        "902, 920, 209",
        "920, 902, 209",
        "209, 920, 902"
    ],

    correctAnswer: "209, 902, 920",

    explanation:
        "209 is the smallest, followed by 902 and then 920."
}
    ]
};


export default compareOrderNumbers;

export {

    compareOrderNumbers

};
