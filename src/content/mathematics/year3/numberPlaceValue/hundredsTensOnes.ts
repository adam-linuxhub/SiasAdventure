import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";


const hundredsTensOnes: SkillContent = {
    skillId: "hundreds-tens-ones",

    title: "Hundreds, Tens and Ones",

    description: "Recognise the value of digits in three-digit numbers.",
    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hto-001",
        skillId: "hundreds-tens-ones",
        stage: "recognise",

        question: "What is the value of the digit 4 in 345?",

        options: [
            "4",
            "40",
            "400",
            "345"
        ],

        correctAnswer: "40",

        explanation:
            "The 4 is in the tens column, so its value is 40."
    },

    {
        id: "hto-002",
        skillId: "hundreds-tens-ones",
        stage: "recognise",

        question: "What is the value of the digit 7 in 781?",

        options: [
            "7",
            "70",
            "700",
            "781"
        ],

        correctAnswer: "700",

        explanation:
            "The 7 is in the hundreds column, so its value is 700."
    },

    {
        id: "hto-003",
        skillId: "hundreds-tens-ones",
        stage: "recognise",

        question: "What is the value of the digit 9 in 529?",

        options: [
            "9",
            "90",
            "900",
            "529"
        ],

        correctAnswer: "9",

        explanation:
            "The 9 is in the ones column, so its value is 9."
    },

    {
    id: "hto-004",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "What is the value of the digit 6 in 264?",

    options: [
        "6",
        "60",
        "600",
        "264"
    ],

    correctAnswer: "60",

    explanation:
        "The 6 is in the tens column, so its value is 60."
},

{
    id: "hto-005",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "Which digit is worth 500 in the number 583?",

    options: [
        "5",
        "8",
        "3",
        "0"
    ],

    correctAnswer: "5",

    explanation:
        "The 5 is in the hundreds column, so it represents 500."
},

{
    id: "hto-006",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "Which digit is worth 2 in the number 742?",

    options: [
        "7",
        "4",
        "2",
        "0"
    ],

    correctAnswer: "2",

    explanation:
        "The 2 is in the ones column, so its value is 2."
    },

{
    id: "hto-007",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "What is the value of the digit 8 in 184?",

    options: [
        "8",
        "80",
        "800",
        "184"
    ],

    correctAnswer: "80",

    explanation:
        "The 8 is in the tens column, so its value is 80."
},

{
    id: "hto-008",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "What is the value of the digit 9 in 912?",

    options: [
        "9",
        "90",
        "900",
        "912"
    ],

    correctAnswer: "900",

    explanation:
        "The 9 is in the hundreds column, so its value is 900."
},

{
    id: "hto-009",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "Which digit is worth 30 in the number 638?",

    options: [
        "6",
        "3",
        "8",
        "0"
    ],

    correctAnswer: "3",

    explanation:
        "The 3 is in the tens column, so it represents 30."
},

{
    id: "hto-010",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "Which digit is worth 600 in the number 684?",

    options: [
        "6",
        "8",
        "4",
        "0"
    ],

    correctAnswer: "6",

    explanation:
        "The 6 is in the hundreds column, so it represents 600."
},

{
    id: "hto-011",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "Which digit is worth 5 in the number 375?",

    options: [
        "3",
        "7",
        "5",
        "0"
    ],

    correctAnswer: "5",

    explanation:
        "The 5 is in the ones column, so its value is 5."
},

{
    id: "hto-012",
    skillId: "hundreds-tens-ones",
    stage: "recognise",

    question: "What is the value of the digit 2 in 728?",

    options: [
        "2",
        "20",
        "200",
        "728"
    ],

    correctAnswer: "20",

    explanation:
        "The 2 is in the tens column, so its value is 20."
},

{
    id: "hto-013",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "In the number 462, which digit represents the hundreds?",

    options: [
        "4",
        "6",
        "2",
        "None of them"
    ],

    correctAnswer: "4",

    explanation:
        "The first digit in a three-digit number is the hundreds digit."
},

{
    id: "hto-014",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "In the number 462, which digit represents the tens?",

    options: [
        "4",
        "6",
        "2",
        "0"
    ],

    correctAnswer: "6",

    explanation:
        "The middle digit represents the tens."
},

{
    id: "hto-015",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "In the number 462, which digit represents the ones?",

    options: [
        "4",
        "6",
        "2",
        "None"
    ],

    correctAnswer: "2",

    explanation:
        "The last digit represents the ones."
},

{
    id: "hto-016",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "Which number has 5 hundreds, 3 tens and 8 ones?",

    options: [
        "538",
        "583",
        "358",
        "853"
    ],

    correctAnswer: "538",

    explanation:
        "5 hundreds = 500, 3 tens = 30 and 8 ones = 8."
},

{
    id: "hto-017",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "Which number has 8 hundreds, 0 tens and 6 ones?",

    options: [
        "860",
        "806",
        "86",
        "680"
    ],

    correctAnswer: "806",

    explanation:
        "8 hundreds, no tens and 6 ones makes 806."
},

{
    id: "hto-018",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "How many tens are there in 470?",

    options: [
        "4",
        "7",
        "47",
        "70"
    ],

    correctAnswer: "7",

    explanation:
        "The tens digit is 7, representing 70."
},

{
    id: "hto-019",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "How many hundreds are there in 931?",

    options: [
        "9",
        "3",
        "1",
        "93"
    ],

    correctAnswer: "9",

    explanation:
        "The hundreds digit is 9, representing 900."
},

{
    id: "hto-020",
    skillId: "hundreds-tens-ones",
    stage: "understand",

    question: "Which number is made from 2 hundreds, 9 tens and 4 ones?",

    options: [
        "294",
        "249",
        "924",
        "429"
    ],

    correctAnswer: "294",

    explanation:
        "200 + 90 + 4 = 294."
},
{
    id: "hto-021",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A school has 4 hundreds, 5 tens and 8 ones pupils. How many pupils is that?",

    options: [
        "458",
        "485",
        "548",
        "4058"
    ],

    correctAnswer: "458",

    explanation:
        "4 hundreds, 5 tens and 8 ones make 458."
},

{
    id: "hto-022",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A library has 623 books. What is the value of the digit 2?",

    options: [
        "2",
        "20",
        "200",
        "600"
    ],

    correctAnswer: "20",

    explanation:
        "The 2 is in the tens column, so its value is 20."
},

{
    id: "hto-023",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A toy shop has 731 toys. Which digit represents the ones?",

    options: [
        "7",
        "3",
        "1",
        "0"
    ],

    correctAnswer: "1",

    explanation:
        "The ones digit is the last digit."
},

{
    id: "hto-024",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A farmer counts 845 sheep. What is the value of the digit 8?",

    options: [
        "8",
        "80",
        "800",
        "845"
    ],

    correctAnswer: "800",

    explanation:
        "The 8 is in the hundreds column."
},

{
    id: "hto-025",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A train has carriage number 592. What is the value of the digit 9?",

    options: [
        "9",
        "90",
        "900",
        "592"
    ],

    correctAnswer: "90",

    explanation:
        "The 9 is in the tens column."
},

{
    id: "hto-026",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A builder has 306 bricks. Which digit shows there are no tens?",

    options: [
        "3",
        "0",
        "6",
        "None"
    ],

    correctAnswer: "0",

    explanation:
        "The middle digit is 0, meaning there are no tens."
},

{
    id: "hto-027",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A museum welcomed 714 visitors. Which digit represents the hundreds?",

    options: [
        "7",
        "1",
        "4",
        "0"
    ],

    correctAnswer: "7",

    explanation:
        "The first digit is the hundreds digit."
},

{
    id: "hto-028",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "A zoo has enclosure number 286. What is the value of the digit 6?",

    options: [
        "6",
        "60",
        "600",
        "286"
    ],

    correctAnswer: "6",

    explanation:
        "The 6 is in the ones column."
},

{
    id: "hto-029",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "Which number is made from 9 hundreds, 1 ten and 5 ones?",

    options: [
        "915",
        "951",
        "195",
        "905"
    ],

    correctAnswer: "915",

    explanation:
        "9 hundreds + 1 ten + 5 ones = 915."
},

{
    id: "hto-030",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "Which number is made from 6 hundreds, 4 tens and 2 ones?",

    options: [
        "642",
        "624",
        "462",
        "246"
    ],

    correctAnswer: "642",

    explanation:
        "6 hundreds + 4 tens + 2 ones = 642."
},

{
    id: "hto-031",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "Which number has 3 hundreds, 0 tens and 7 ones?",

    options: [
        "307",
        "370",
        "37",
        "703"
    ],

    correctAnswer: "307",

    explanation:
        "3 hundreds, no tens and 7 ones make 307."
},

{
    id: "hto-032",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "Which digit is worth 70 in the number 876?",

    options: [
        "8",
        "7",
        "6",
        "0"
    ],

    correctAnswer: "7",

    explanation:
        "The 7 is in the tens column, so it is worth 70."
},

{
    id: "hto-033",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "Which digit is worth 400 in the number 463?",

    options: [
        "4",
        "6",
        "3",
        "0"
    ],

    correctAnswer: "4",

    explanation:
        "The 4 is in the hundreds column."
},

{
    id: "hto-034",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "Which number has 1 hundred, 8 tens and 9 ones?",

    options: [
        "189",
        "198",
        "819",
        "981"
    ],

    correctAnswer: "189",

    explanation:
        "1 hundred + 8 tens + 9 ones = 189."
},

{
    id: "hto-035",
    skillId: "hundreds-tens-ones",
    stage: "apply",

    question: "What is the value of the digit 5 in 154?",

    options: [
        "5",
        "50",
        "500",
        "154"
    ],

    correctAnswer: "50",

    explanation:
        "The 5 is in the tens column, so its value is 50."
},
{
    id: "hto-036",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number has 5 hundreds, 2 tens and 9 ones?",

    options: [
        "529",
        "592",
        "259",
        "925"
    ],

    correctAnswer: "529",

    explanation:
        "5 hundreds + 2 tens + 9 ones = 529."
},

{
    id: "hto-037",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which digit is worth 300 in the number 368?",

    options: [
        "3",
        "6",
        "8",
        "0"
    ],

    correctAnswer: "3",

    explanation:
        "The 3 is in the hundreds column, so it is worth 300."
},

{
    id: "hto-038",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "What is the value of the digit 8 in 286?",

    options: [
        "8",
        "80",
        "800",
        "286"
    ],

    correctAnswer: "80",

    explanation:
        "The 8 is in the tens column, so its value is 80."
},

{
    id: "hto-039",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number is made from 7 hundreds, 4 tens and 0 ones?",

    options: [
        "740",
        "704",
        "470",
        "407"
    ],

    correctAnswer: "740",

    explanation:
        "7 hundreds + 4 tens + 0 ones = 740."
},

{
    id: "hto-040",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which digit has the greatest value in the number 682?",

    options: [
        "6",
        "8",
        "2",
        "They are all equal."
    ],

    correctAnswer: "6",

    explanation:
        "The 6 represents 600, which is the greatest value."
},

{
    id: "hto-041",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number has the digit 5 in the tens place?",

    options: [
        "452",
        "425",
        "245",
        "524"
    ],

    correctAnswer: "452",

    explanation:
        "In 452, the middle digit is 5, so it is worth 50."
},

{
    id: "hto-042",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number has the digit 9 in the ones place?",

    options: [
        "739",
        "793",
        "397",
        "973"
    ],

    correctAnswer: "739",

    explanation:
        "The ones digit is the last digit, which is 9."
},

{
    id: "hto-043",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number has 8 hundreds, 6 tens and 3 ones?",

    options: [
        "863",
        "836",
        "683",
        "368"
    ],

    correctAnswer: "863",

    explanation:
        "8 hundreds + 6 tens + 3 ones = 863."
},

{
    id: "hto-044",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "What is the value of the digit 1 in 915?",

    options: [
        "1",
        "10",
        "100",
        "1000"
    ],

    correctAnswer: "10",

    explanation:
        "The 1 is in the tens column, so its value is 10."
},

{
    id: "hto-045",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number has 4 hundreds, 0 tens and 8 ones?",

    options: [
        "408",
        "480",
        "840",
        "48"
    ],

    correctAnswer: "408",

    explanation:
        "4 hundreds + 0 tens + 8 ones = 408."
},

{
    id: "hto-046",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which digit is worth 60 in the number 764?",

    options: [
        "7",
        "6",
        "4",
        "0"
    ],

    correctAnswer: "6",

    explanation:
        "The 6 is in the tens column, so it represents 60."
},

{
    id: "hto-047",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "What is the value of the digit 2 in 254?",

    options: [
        "2",
        "20",
        "200",
        "2000"
    ],

    correctAnswer: "200",

    explanation:
        "The 2 is in the hundreds column, so its value is 200."
},

{
    id: "hto-048",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number is made from 9 hundreds, 9 tens and 9 ones?",

    options: [
        "999",
        "909",
        "990",
        "99"
    ],

    correctAnswer: "999",

    explanation:
        "9 hundreds + 9 tens + 9 ones = 999."
},

{
    id: "hto-049",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which digit is worth 5 in the number 875?",

    options: [
        "8",
        "7",
        "5",
        "0"
    ],

    correctAnswer: "5",

    explanation:
        "The 5 is in the ones column, so its value is 5."
},

{
    id: "hto-050",
    skillId: "hundreds-tens-ones",
    stage: "master",

    question: "Which number has 2 hundreds, 5 tens and 7 ones?",

    options: [
        "257",
        "275",
        "725",
        "527"
    ],

    correctAnswer: "257",

    explanation:
        "2 hundreds + 5 tens + 7 ones = 257."
}

    ]
};


export default hundredsTensOnes;

export {

    hundredsTensOnes

};
