import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const readWriteNumbers: SkillContent = {
    skillId: "read-write-numbers",

    title: "Read and Write Numbers",

    description: "Read and write numbers to 1000 using numerals and words.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "rwn-001",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "Which number is 'three hundred and twenty-four'?",

    options: [
        "324",
        "342",
        "304",
        "234"
    ],

    correctAnswer: "324",

    explanation:
        "Three hundred and twenty-four is written as 324."
},

{
    id: "rwn-002",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "How do you write 517 in words?",

    options: [
        "five hundred and seventeen",
        "five hundred and seventy",
        "five hundred and seven",
        "five hundred and seventy-one"
    ],

    correctAnswer: "five hundred and seventeen",

    explanation:
        "517 is read as five hundred and seventeen."
},

{
    id: "rwn-003",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "Which number is 'nine hundred and one'?",

    options: [
        "901",
        "910",
        "991",
        "900"
    ],

    correctAnswer: "901",

    explanation:
        "Nine hundred and one is written as 901."
},

{
    id: "rwn-004",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "How do you write 640 in words?",

    options: [
        "six hundred and forty",
        "six hundred and fourteen",
        "six hundred forty-four",
        "sixty-four hundred"
    ],

    correctAnswer: "six hundred and forty",

    explanation:
        "640 is read as six hundred and forty."
},

{
    id: "rwn-005",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "Which number is 'four hundred and eighty-two'?",

    options: [
        "482",
        "428",
        "402",
        "842"
    ],

    correctAnswer: "482",

    explanation:
        "Four hundred and eighty-two is 482."
},

{
    id: "rwn-006",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "How do you write 275 in words?",

    options: [
        "two hundred and seventy-five",
        "two hundred and fifty-seven",
        "two hundred and seventy",
        "twenty-seven hundred and five"
    ],

    correctAnswer: "two hundred and seventy-five",

    explanation:
        "275 is read as two hundred and seventy-five."
},

{
    id: "rwn-007",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "Which number is 'one hundred and sixty-three'?",

    options: [
        "163",
        "136",
        "613",
        "103"
    ],

    correctAnswer: "163",

    explanation:
        "One hundred and sixty-three is 163."
},

{
    id: "rwn-008",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "How do you write 808 in words?",

    options: [
        "eight hundred and eight",
        "eight hundred and eighty",
        "eight hundred eight-eight",
        "eighty hundred and eight"
    ],

    correctAnswer: "eight hundred and eight",

    explanation:
        "808 is read as eight hundred and eight."
},

{
    id: "rwn-009",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "Which numeral matches 'seven hundred and ninety-six'?",

    options: [
        "796",
        "769",
        "706",
        "976"
    ],

    correctAnswer: "796",

    explanation:
        "Seven hundred and ninety-six is written as 796."
},

{
    id: "rwn-010",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "How do you write 999 in words?",

    options: [
        "nine hundred and ninety-nine",
        "nine hundred and ninety",
        "nine hundred and nine",
        "nine hundred ninety-nine hundred"
    ],

    correctAnswer: "nine hundred and ninety-nine",

    explanation:
        "999 is read as nine hundred and ninety-nine."
},

{
    id: "rwn-011",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "Which word matches the numeral 450?",

    options: [
        "four hundred and fifty",
        "four hundred and fifteen",
        "four hundred and five",
        "forty-five hundred"
    ],

    correctAnswer: "four hundred and fifty",

    explanation:
        "450 is read as four hundred and fifty."
},

{
    id: "rwn-012",
    skillId: "read-write-numbers",
    stage: "recognise",

    question: "Which numeral matches 'two hundred and nine'?",

    options: [
        "209",
        "290",
        "299",
        "2009"
    ],

    correctAnswer: "209",

    explanation:
        "Two hundred and nine is written as 209."
},

{
    id: "rwn-013",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "Which number is written correctly in words?",

    options: [
        "318 — three hundred and eighteen",
        "318 — three hundred eighty-one",
        "318 — thirty-one hundred and eight",
        "318 — three hundred and eighty"
    ],

    correctAnswer: "318 — three hundred and eighteen",

    explanation:
        "318 is read as three hundred and eighteen."
},

{
    id: "rwn-014",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "Which numeral matches 'five hundred and sixty-one'?",

    options: [
        "561",
        "516",
        "651",
        "506"
    ],

    correctAnswer: "561",

    explanation:
        "Five hundred and sixty-one is written as 561."
},

{
    id: "rwn-015",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "Which word matches the numeral 734?",

    options: [
        "seven hundred and thirty-four",
        "seven hundred and forty-three",
        "seven hundred and thirty",
        "seven hundred and three-four"
    ],

    correctAnswer: "seven hundred and thirty-four",

    explanation:
        "734 is read as seven hundred and thirty-four."
},
{
    id: "rwn-016",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "Which numeral matches 'eight hundred and twenty-three'?",

    options: [
        "823",
        "832",
        "803",
        "283"
    ],

    correctAnswer: "823",

    explanation:
        "Eight hundred and twenty-three is written as 823."
},

{
    id: "rwn-017",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "How do you write 406 in words?",

    options: [
        "four hundred and six",
        "four hundred and sixty",
        "forty hundred and six",
        "four hundred six hundred"
    ],

    correctAnswer: "four hundred and six",

    explanation:
        "406 is read as four hundred and six."
},

{
    id: "rwn-018",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "Which numeral matches 'one hundred and ninety-four'?",

    options: [
        "194",
        "149",
        "914",
        "104"
    ],

    correctAnswer: "194",

    explanation:
        "One hundred and ninety-four is written as 194."
},

{
    id: "rwn-019",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "Which number is written correctly in words?",

    options: [
        "560 — five hundred and sixty",
        "560 — five hundred and sixteen",
        "560 — fifty-six hundred",
        "560 — five sixty"
    ],

    correctAnswer: "560 — five hundred and sixty",

    explanation:
        "560 is read as five hundred and sixty."
},

{
    id: "rwn-020",
    skillId: "read-write-numbers",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Ella says 708 is 'seven hundred and eight'.",
        "Max says 708 is 'seven hundred and eighty'.",
        "Ava says 708 is 'seventy hundred and eight'.",
        "Noah says 708 is 'seven hundred and eighteen'."
    ],

    correctAnswer: "Ella says 708 is 'seven hundred and eight'.",

    explanation:
        "708 is read as seven hundred and eight."
},

{
    id: "rwn-021",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "A classroom has the number 315 on the door. How is this written in words?",

    options: [
        "three hundred and fifteen",
        "three hundred and fifty",
        "three hundred and five",
        "thirty-one hundred and five"
    ],

    correctAnswer: "three hundred and fifteen",

    explanation:
        "315 is written as three hundred and fifteen."
},

{
    id: "rwn-022",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "A book has 482 pages. Which is the correct way to read this number?",

    options: [
        "four hundred and eighty-two",
        "four hundred and twenty-eight",
        "forty-eight hundred and two",
        "four hundred and eighty"
    ],

    correctAnswer: "four hundred and eighty-two",

    explanation:
        "482 is read as four hundred and eighty-two."
},

{
    id: "rwn-023",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "Which house number matches 'nine hundred and thirty-six'?",

    options: [
        "936",
        "963",
        "906",
        "396"
    ],

    correctAnswer: "936",

    explanation:
        "Nine hundred and thirty-six is written as 936."
},

{
    id: "rwn-024",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "A football team scored 204 goals over several seasons. How is 204 written in words?",

    options: [
        "two hundred and four",
        "two hundred and forty",
        "twenty hundred and four",
        "two hundred and fourteen"
    ],

    correctAnswer: "two hundred and four",

    explanation:
        "204 is read as two hundred and four."
},

{
    id: "rwn-025",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "Which pair matches correctly?",

    options: [
        "691 — six hundred and ninety-one",
        "691 — six hundred and nineteen",
        "691 — six hundred and ninety",
        "691 — nine hundred and sixty-one"
    ],

    correctAnswer: "691 — six hundred and ninety-one",

    explanation:
        "691 is read as six hundred and ninety-one."
},

{
    id: "rwn-026",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "Ben wrote 830 as 'eight hundred and thirty'. Is he correct?",

    options: [
        "Yes",
        "No, it is eight hundred and thirteen",
        "No, it is eighty-three",
        "No, it is eight hundred and three"
    ],

    correctAnswer: "Yes",

    explanation:
        "830 is correctly written as eight hundred and thirty."
},

{
    id: "rwn-027",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "Which numeral matches 'five hundred and two'?",

    options: [
        "502",
        "520",
        "552",
        "250"
    ],

    correctAnswer: "502",

    explanation:
        "Five hundred and two is written as 502."
},

{
    id: "rwn-028",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "Which word matches the numeral 178?",

    options: [
        "one hundred and seventy-eight",
        "one hundred and eighty-seven",
        "one hundred and seventy",
        "seventeen hundred and eight"
    ],

    correctAnswer: "one hundred and seventy-eight",

    explanation:
        "178 is read as one hundred and seventy-eight."
},

{
    id: "rwn-029",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "Which numeral matches 'three hundred and forty'?",

    options: [
        "340",
        "304",
        "430",
        "34"
    ],

    correctAnswer: "340",

    explanation:
        "Three hundred and forty is written as 340."
},

{
    id: "rwn-030",
    skillId: "read-write-numbers",
    stage: "apply",

    question: "Which word is missing? 'Seven hundred and ___' = 756",

    options: [
        "fifty-six",
        "sixty-five",
        "five hundred and six",
        "fifteen"
    ],

    correctAnswer: "fifty-six",

    explanation:
        "756 is read as seven hundred and fifty-six."
},
{
    id: "rwn-031",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which numeral matches 'six hundred and forty-eight'?",

    options: [
        "648",
        "684",
        "608",
        "468"
    ],

    correctAnswer: "648",

    explanation:
        "Six hundred and forty-eight is written as 648."
},

{
    id: "rwn-032",
    skillId: "read-write-numbers",
    stage: "master",

    question: "How do you write 905 in words?",

    options: [
        "nine hundred and five",
        "nine hundred and fifty",
        "nine hundred and fifteen",
        "ninety hundred and five"
    ],

    correctAnswer: "nine hundred and five",

    explanation:
        "905 is read as nine hundred and five."
},

{
    id: "rwn-033",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which number is written correctly?",

    options: [
        "287 — two hundred and eighty-seven",
        "287 — two hundred and seventy-eight",
        "287 — twenty-eight hundred and seven",
        "287 — two hundred and eighty"
    ],

    correctAnswer: "287 — two hundred and eighty-seven",

    explanation:
        "287 is read as two hundred and eighty-seven."
},

{
    id: "rwn-034",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which child has written the number correctly?",

    options: [
        "Jack writes 431 as 'four hundred and thirty-one'.",
        "Mia writes 431 as 'four hundred and thirteen'.",
        "Leo writes 431 as 'forty-three hundred and one'.",
        "Grace writes 431 as 'four hundred and three-one'."
    ],

    correctAnswer: "Jack writes 431 as 'four hundred and thirty-one'.",

    explanation:
        "431 is read as four hundred and thirty-one."
},

{
    id: "rwn-035",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which numeral matches 'one hundred and ninety'?",

    options: [
        "190",
        "109",
        "910",
        "191"
    ],

    correctAnswer: "190",

    explanation:
        "One hundred and ninety is written as 190."
},

{
    id: "rwn-036",
    skillId: "read-write-numbers",
    stage: "master",

    question: "A bus has the number 672. How is this written in words?",

    options: [
        "six hundred and seventy-two",
        "six hundred and twenty-seven",
        "sixty-seven hundred and two",
        "six hundred and seventy"
    ],

    correctAnswer: "six hundred and seventy-two",

    explanation:
        "672 is read as six hundred and seventy-two."
},

{
    id: "rwn-037",
    skillId: "read-write-numbers",
    stage: "master",

    question: "A library book is numbered 358. Which is the correct way to read it?",

    options: [
        "three hundred and fifty-eight",
        "three hundred and eighty-five",
        "thirty-five hundred and eight",
        "three hundred and five-eight"
    ],

    correctAnswer: "three hundred and fifty-eight",

    explanation:
        "358 is read as three hundred and fifty-eight."
},

{
    id: "rwn-038",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which pair matches correctly?",

    options: [
        "814 — eight hundred and fourteen",
        "814 — eight hundred and forty-one",
        "814 — eighty-one hundred and four",
        "814 — eight hundred and four"
    ],

    correctAnswer: "814 — eight hundred and fourteen",

    explanation:
        "814 is read as eight hundred and fourteen."
},

{
    id: "rwn-039",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which word is missing? 'Five hundred and ___' = 583",

    options: [
        "eighty-three",
        "thirty-eight",
        "eight hundred and three",
        "eighteen"
    ],

    correctAnswer: "eighty-three",

    explanation:
        "583 is read as five hundred and eighty-three."
},

{
    id: "rwn-040",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which statement is correct?",

    options: [
        "709 is 'seven hundred and nine'.",
        "709 is 'seven hundred and ninety'.",
        "709 is 'seventy hundred and nine'.",
        "709 is 'seven hundred and nineteen'."
    ],

    correctAnswer: "709 is 'seven hundred and nine'.",

    explanation:
        "709 is read as seven hundred and nine."
},

{
    id: "rwn-041",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which numeral matches 'two hundred and sixty-five'?",

    options: [
        "265",
        "256",
        "625",
        "205"
    ],

    correctAnswer: "265",

    explanation:
        "Two hundred and sixty-five is written as 265."
},

{
    id: "rwn-042",
    skillId: "read-write-numbers",
    stage: "master",

    question: "How do you write 490 in words?",

    options: [
        "four hundred and ninety",
        "four hundred and nineteen",
        "forty-nine hundred",
        "four hundred and nine"
    ],

    correctAnswer: "four hundred and ninety",

    explanation:
        "490 is read as four hundred and ninety."
},

{
    id: "rwn-043",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which number has been written incorrectly?",

    options: [
        "542 — five hundred and twenty-four",
        "315 — three hundred and fifteen",
        "801 — eight hundred and one",
        "690 — six hundred and ninety"
    ],

    correctAnswer: "542 — five hundred and twenty-four",

    explanation:
        "542 should be read as five hundred and forty-two."
},

{
    id: "rwn-044",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which numeral matches 'nine hundred and eighty-eight'?",

    options: [
        "988",
        "898",
        "889",
        "980"
    ],

    correctAnswer: "988",

    explanation:
        "Nine hundred and eighty-eight is written as 988."
},

{
    id: "rwn-045",
    skillId: "read-write-numbers",
    stage: "master",

    question: "A scorecard shows 157 points. How is this written in words?",

    options: [
        "one hundred and fifty-seven",
        "one hundred and seventy-five",
        "fifteen hundred and seven",
        "one hundred and fifty"
    ],

    correctAnswer: "one hundred and fifty-seven",

    explanation:
        "157 is read as one hundred and fifty-seven."
},

{
    id: "rwn-046",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which word matches the numeral 600?",

    options: [
        "six hundred",
        "six hundred and six",
        "sixty hundred",
        "six thousand"
    ],

    correctAnswer: "six hundred",

    explanation:
        "600 is read simply as six hundred."
},

{
    id: "rwn-047",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which numeral matches 'three hundred and three'?",

    options: [
        "303",
        "330",
        "333",
        "3003"
    ],

    correctAnswer: "303",

    explanation:
        "Three hundred and three is written as 303."
},

{
    id: "rwn-048",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which sentence is correct?",

    options: [
        "940 is 'nine hundred and forty'.",
        "940 is 'nine hundred and fourteen'.",
        "940 is 'ninety-four hundred'.",
        "940 is 'nine hundred and four'."
    ],

    correctAnswer: "940 is 'nine hundred and forty'.",

    explanation:
        "940 is read as nine hundred and forty."
},

{
    id: "rwn-049",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which numeral matches 'one thousand'?",

    options: [
        "1000",
        "100",
        "10000",
        "1100"
    ],

    correctAnswer: "1000",

    explanation:
        "One thousand is written as 1000."
},

{
    id: "rwn-050",
    skillId: "read-write-numbers",
    stage: "master",

    question: "Which pair matches correctly?",

    options: [
        "999 — nine hundred and ninety-nine",
        "999 — nine hundred and ninety",
        "999 — nine hundred and nine",
        "999 — ninety-nine hundred and nine"
    ],

    correctAnswer: "999 — nine hundred and ninety-nine",

    explanation:
        "999 is read as nine hundred and ninety-nine."
}
    ]
};


export default readWriteNumbers;

export {

    readWriteNumbers

};
