import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const checkAnswersUsingTheInverse: SkillContent = {
    skillId: "check-answers-using-the-inverse",

    title: "Check Answers Using the Inverse",

    description: "Use the inverse operation to check whether addition and subtraction answers are correct.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "cai-001",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "To check 36 + 24 = 60, which calculation should you do?",

    options: [
        "60 - 24 = 36",
        "60 + 24 = 84",
        "36 + 60 = 96",
        "24 - 36 = 12"
    ],

    correctAnswer: "60 - 24 = 36",

    explanation:
        "Subtraction is the inverse of addition, so subtract one addend from the total."
},

{
    id: "cai-002",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "To check 75 - 18 = 57, which calculation should you do?",

    options: [
        "57 + 18 = 75",
        "75 + 18 = 93",
        "57 - 18 = 39",
        "18 - 57 = 39"
    ],

    correctAnswer: "57 + 18 = 75",

    explanation:
        "Addition is the inverse of subtraction."
},

{
    id: "cai-003",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which operation checks an addition calculation?",

    options: [
        "Subtraction",
        "Addition",
        "Multiplication",
        "Division"
    ],

    correctAnswer: "Subtraction",

    explanation:
        "Use subtraction to check addition."
},

{
    id: "cai-004",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which operation checks a subtraction calculation?",

    options: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division"
    ],

    correctAnswer: "Addition",

    explanation:
        "Use addition to check subtraction."
},

{
    id: "cai-005",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which calculation correctly checks 41 + 27 = 68?",

    options: [
        "68 - 27 = 41",
        "68 + 27 = 95",
        "41 - 27 = 14",
        "27 + 68 = 95"
    ],

    correctAnswer: "68 - 27 = 41",

    explanation:
        "Subtract one number from the total to check the answer."
},

{
    id: "cai-006",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which calculation correctly checks 92 - 35 = 57?",

    options: [
        "57 + 35 = 92",
        "92 + 35 = 127",
        "57 - 35 = 22",
        "35 - 57 = -22"
    ],

    correctAnswer: "57 + 35 = 92",

    explanation:
        "Adding the answer and the number taken away should give the starting number."
},

{
    id: "cai-007",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "What is the inverse of addition?",

    options: [
        "Subtraction",
        "Multiplication",
        "Division",
        "Doubling"
    ],

    correctAnswer: "Subtraction",

    explanation:
        "Addition and subtraction are inverse operations."
},

{
    id: "cai-008",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "What is the inverse of subtraction?",

    options: [
        "Addition",
        "Multiplication",
        "Division",
        "Halving"
    ],

    correctAnswer: "Addition",

    explanation:
        "Addition undoes subtraction."
},

{
    id: "cai-009",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which calculation checks 53 + 16 = 69?",

    options: [
        "69 - 16 = 53",
        "69 + 16 = 85",
        "53 - 16 = 37",
        "16 + 69 = 85"
    ],

    correctAnswer: "69 - 16 = 53",

    explanation:
        "Subtract one part from the total."
},

{
    id: "cai-010",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which calculation checks 81 - 19 = 62?",

    options: [
        "62 + 19 = 81",
        "81 + 19 = 100",
        "62 - 19 = 43",
        "19 - 62 = 43"
    ],

    correctAnswer: "62 + 19 = 81",

    explanation:
        "Adding the difference and the number subtracted should equal the original number."
},

{
    id: "cai-011",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which number should you subtract from 84 to check 39 + 45 = 84?",

    options: [
        "45",
        "84",
        "39",
        "Either 39 or 45"
    ],

    correctAnswer: "Either 39 or 45",

    explanation:
        "Subtracting either addend from the total gives the other addend."
},

{
    id: "cai-012",
    skillId: "check-answers-using-the-inverse",
    stage: "recognise",

    question: "Which number should you add to 28 to check 73 - 28 = 45?",

    options: [
        "45",
        "73",
        "28",
        "17"
    ],

    correctAnswer: "45",

    explanation:
        "28 + 45 = 73, so the subtraction is correct."
},

{
    id: "cai-013",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Ella says, 'I always use subtraction to check addition.' Is she correct?",

    options: [
        "Yes",
        "No",
        "Only for subtraction",
        "Only for multiplication"
    ],

    correctAnswer: "Yes",

    explanation:
        "Subtraction is the inverse operation of addition."
},

{
    id: "cai-014",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Ben says, 'I check subtraction by adding.' Is Ben correct?",

    options: [
        "Yes",
        "No",
        "Only sometimes",
        "Only for addition"
    ],

    correctAnswer: "Yes",

    explanation:
        "Addition is the inverse of subtraction."
},

{
    id: "cai-015",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Why do we use inverse operations?",

    options: [
        "To check whether an answer is correct",
        "To make numbers bigger",
        "To make numbers smaller",
        "To avoid calculating"
    ],

    correctAnswer: "To check whether an answer is correct",

    explanation:
        "Inverse operations help us check our work."
},
{
    id: "cai-016",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Which calculation correctly checks 64 + 18 = 82?",

    options: [
        "82 - 18 = 64",
        "82 + 18 = 100",
        "64 - 18 = 46",
        "18 - 64 = 46"
    ],

    correctAnswer: "82 - 18 = 64",

    explanation:
        "Subtract one addend from the total to check the addition."
},

{
    id: "cai-017",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Which calculation correctly checks 94 - 27 = 67?",

    options: [
        "67 + 27 = 94",
        "94 + 27 = 121",
        "67 - 27 = 40",
        "27 - 67 = 40"
    ],

    correctAnswer: "67 + 27 = 94",

    explanation:
        "Add the difference and the number subtracted to check the answer."
},

{
    id: "cai-018",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Ella says 45 + 26 = 71. She checks by doing 71 - 45 = 26. Is she correct?",

    options: [
        "Yes",
        "No",
        "Only if she subtracts 26 first",
        "Only for subtraction questions"
    ],

    correctAnswer: "Yes",

    explanation:
        "71 − 45 = 26, so the addition is correct."
},

{
    id: "cai-019",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Ben says 83 - 29 = 54. He checks by doing 54 + 29 = 83. Is he correct?",

    options: [
        "Yes",
        "No",
        "Only if he subtracts again",
        "Only for addition questions"
    ],

    correctAnswer: "Yes",

    explanation:
        "Adding 54 and 29 gives 83, so the subtraction is correct."
},

{
    id: "cai-020",
    skillId: "check-answers-using-the-inverse",
    stage: "understand",

    question: "Which calculation would NOT check 38 + 17 = 55?",

    options: [
        "55 + 17 = 72",
        "55 - 17 = 38",
        "55 - 38 = 17",
        "38 + 17 = 55"
    ],

    correctAnswer: "55 + 17 = 72",

    explanation:
        "Adding again does not use the inverse operation."
},

{
    id: "cai-021",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "A pupil says 57 + 24 = 81. Which calculation checks the answer?",

    options: [
        "81 - 24 = 57",
        "81 + 24 = 105",
        "57 - 24 = 33",
        "24 - 57 = 33"
    ],

    correctAnswer: "81 - 24 = 57",

    explanation:
        "Subtract one addend from the total."
},

{
    id: "cai-022",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "A pupil says 96 - 38 = 58. Which calculation checks the answer?",

    options: [
        "58 + 38 = 96",
        "96 + 38 = 134",
        "58 - 38 = 20",
        "38 - 58 = 20"
    ],

    correctAnswer: "58 + 38 = 96",

    explanation:
        "Addition checks subtraction."
},

{
    id: "cai-023",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "Which subtraction checks 73 + 19 = 92?",

    options: [
        "92 - 19 = 73",
        "92 - 73 = 21",
        "73 - 19 = 54",
        "92 + 19 = 111"
    ],

    correctAnswer: "92 - 19 = 73",

    explanation:
        "Subtracting one part should give the other."
},

{
    id: "cai-024",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "Which addition checks 120 - 45 = 75?",

    options: [
        "75 + 45 = 120",
        "120 + 45 = 165",
        "75 - 45 = 30",
        "45 - 75 = 30"
    ],

    correctAnswer: "75 + 45 = 120",

    explanation:
        "Adding the answer and the number taken away gives the starting number."
},

{
    id: "cai-025",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "A child solved 68 + 15 = 83. Which check proves it is correct?",

    options: [
        "83 - 15 = 68",
        "83 + 15 = 98",
        "68 - 15 = 53",
        "15 - 68 = 53"
    ],

    correctAnswer: "83 - 15 = 68",

    explanation:
        "Use subtraction to check addition."
},

{
    id: "cai-026",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "A child solved 104 - 26 = 78. Which check proves it is correct?",

    options: [
        "78 + 26 = 104",
        "104 + 26 = 130",
        "78 - 26 = 52",
        "26 - 78 = 52"
    ],

    correctAnswer: "78 + 26 = 104",

    explanation:
        "Use addition to check subtraction."
},

{
    id: "cai-027",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "Which pair of calculations are inverse operations?",

    options: [
        "58 + 22 = 80 and 80 - 22 = 58",
        "58 + 22 = 80 and 80 + 22 = 102",
        "58 - 22 = 36 and 36 - 22 = 14",
        "58 + 22 = 80 and 58 + 80 = 138"
    ],

    correctAnswer: "58 + 22 = 80 and 80 - 22 = 58",

    explanation:
        "One calculation undoes the other."
},

{
    id: "cai-028",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "Which addition checks 150 - 73 = 77?",

    options: [
        "77 + 73 = 150",
        "150 + 73 = 223",
        "77 - 73 = 4",
        "73 - 77 = -4"
    ],

    correctAnswer: "77 + 73 = 150",

    explanation:
        "The inverse operation confirms the subtraction."
},

{
    id: "cai-029",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "Which subtraction checks 125 + 38 = 163?",

    options: [
        "163 - 38 = 125",
        "163 + 38 = 201",
        "125 - 38 = 87",
        "38 - 125 = -87"
    ],

    correctAnswer: "163 - 38 = 125",

    explanation:
        "Subtract one addend from the total."
},

{
    id: "cai-030",
    skillId: "check-answers-using-the-inverse",
    stage: "apply",

    question: "Which statement is true?",

    options: [
        "Inverse operations help us check answers.",
        "Inverse operations always change the answer.",
        "Inverse operations only work with multiplication.",
        "Inverse operations are another name for estimating."
    ],

    correctAnswer: "Inverse operations help us check answers.",

    explanation:
        "Inverse operations undo each other, making them useful for checking calculations."
},
{
    id: "cai-031",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Ella says 74 + 18 = 92. She checks by doing 92 - 18 = 74. Is her check correct?",

    options: [
        "Yes",
        "No",
        "Only if she adds instead",
        "Only if she subtracts 74 first"
    ],

    correctAnswer: "Yes",

    explanation:
        "Subtracting one addend from the total gives the other addend."
},

{
    id: "cai-032",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Ben says 125 - 47 = 78. He checks by doing 78 + 47 = 125. Is his check correct?",

    options: [
        "Yes",
        "No",
        "Only if he subtracts again",
        "Only if he doubles 78"
    ],

    correctAnswer: "Yes",

    explanation:
        "Adding the difference and the number subtracted gives the starting number."
},

{
    id: "cai-033",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which calculation correctly checks 156 + 38 = 194?",

    options: [
        "194 - 38 = 156",
        "194 + 38 = 232",
        "156 - 38 = 118",
        "38 - 156 = 118"
    ],

    correctAnswer: "194 - 38 = 156",

    explanation:
        "Subtract one addend from the total to check the addition."
},

{
    id: "cai-034",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which calculation correctly checks 203 - 68 = 135?",

    options: [
        "135 + 68 = 203",
        "203 + 68 = 271",
        "135 - 68 = 67",
        "68 - 135 = 67"
    ],

    correctAnswer: "135 + 68 = 203",

    explanation:
        "Addition is the inverse of subtraction."
},

{
    id: "cai-035",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which child has checked correctly?",

    options: [
        "Ella: 87 + 25 = 112, so 112 - 25 = 87",
        "Ben: 87 + 25 = 112, so 112 + 25 = 137",
        "Sam: 87 + 25 = 112, so 87 - 25 = 62",
        "Leo: 87 + 25 = 112, so 25 - 87 = 62"
    ],

    correctAnswer: "Ella: 87 + 25 = 112, so 112 - 25 = 87",

    explanation:
        "Subtraction correctly checks the addition."
},

{
    id: "cai-036",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which child has checked correctly?",

    options: [
        "Ben: 164 - 52 = 112, so 112 + 52 = 164",
        "Ella: 164 - 52 = 112, so 164 + 52 = 216",
        "Sam: 164 - 52 = 112, so 112 - 52 = 60",
        "Leo: 164 - 52 = 112, so 52 - 112 = -60"
    ],

    correctAnswer: "Ben: 164 - 52 = 112, so 112 + 52 = 164",

    explanation:
        "Addition correctly checks the subtraction."
},

{
    id: "cai-037",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which check shows that 63 + 29 = 93 is incorrect?",

    options: [
        "93 - 29 = 64",
        "93 + 29 = 122",
        "63 + 29 = 92",
        "29 - 63 = 34"
    ],

    correctAnswer: "93 - 29 = 64",

    explanation:
        "If the answer were correct, subtracting 29 would give 63. It gives 64 instead."
},

{
    id: "cai-038",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which check shows that 104 - 38 = 65 is incorrect?",

    options: [
        "65 + 38 = 103",
        "104 + 38 = 142",
        "65 - 38 = 27",
        "38 - 65 = -27"
    ],

    correctAnswer: "65 + 38 = 103",

    explanation:
        "The check should equal 104, but it equals 103."
},

{
    id: "cai-039",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which number is missing? □ + 27 = 81. Check: 81 - 27 = □",

    options: [
        "54",
        "53",
        "55",
        "56"
    ],

    correctAnswer: "54",

    explanation:
        "81 − 27 = 54, so the missing number is 54."
},

{
    id: "cai-040",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which number is missing? 140 - □ = 78. Check: 78 + □ = 140",

    options: [
        "62",
        "61",
        "63",
        "64"
    ],

    correctAnswer: "62",

    explanation:
        "78 + 62 = 140."
},

{
    id: "cai-041",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "A shop sold 48 toys on Saturday and 37 on Sunday. A child says the total is 85. Which check should they use?",

    options: [
        "85 - 37 = 48",
        "85 + 37 = 122",
        "48 - 37 = 11",
        "37 - 48 = 11"
    ],

    correctAnswer: "85 - 37 = 48",

    explanation:
        "Subtract one part from the total to check the addition."
},

{
    id: "cai-042",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "A library had 132 books. It lent out 47 books. A child says 85 books remain. Which check should they use?",

    options: [
        "85 + 47 = 132",
        "132 + 47 = 179",
        "85 - 47 = 38",
        "47 - 85 = -38"
    ],

    correctAnswer: "85 + 47 = 132",

    explanation:
        "Add the books left and the books lent out."
},

{
    id: "cai-043",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Why is the inverse operation useful?",

    options: [
        "It checks whether an answer is correct.",
        "It always makes calculations quicker.",
        "It changes addition into multiplication.",
        "It avoids using numbers."
    ],

    correctAnswer: "It checks whether an answer is correct.",

    explanation:
        "Inverse operations undo each other, making them useful for checking."
},

{
    id: "cai-044",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which pair are inverse calculations?",

    options: [
        "142 + 36 = 178 and 178 - 36 = 142",
        "142 + 36 = 178 and 178 + 36 = 214",
        "142 - 36 = 106 and 106 - 36 = 70",
        "142 + 36 = 178 and 36 + 178 = 214"
    ],

    correctAnswer: "142 + 36 = 178 and 178 - 36 = 142",

    explanation:
        "The subtraction undoes the addition."
},

{
    id: "cai-045",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "You can subtract either addend from the total to check an addition.",
        "You must always subtract the larger addend.",
        "You cannot use subtraction to check addition.",
        "Checking only works with small numbers."
    ],

    correctAnswer: "You can subtract either addend from the total to check an addition.",

    explanation:
        "Subtracting either addend should give the other."
},

{
    id: "cai-046",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "To check subtraction, add the answer to the number that was taken away.",
        "To check subtraction, subtract again.",
        "To check subtraction, double the answer.",
        "Subtraction cannot be checked."
    ],

    correctAnswer: "To check subtraction, add the answer to the number that was taken away.",

    explanation:
        "Adding the difference and the amount taken away should equal the starting number."
},

{
    id: "cai-047",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "A child solved 96 + 28 = 124. Which inverse calculation proves the answer is correct?",

    options: [
        "124 - 28 = 96",
        "124 + 28 = 152",
        "96 - 28 = 68",
        "28 - 96 = -68"
    ],

    correctAnswer: "124 - 28 = 96",

    explanation:
        "Subtracting one addend should give the other."
},

{
    id: "cai-048",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "A child solved 215 - 89 = 126. Which inverse calculation proves the answer is correct?",

    options: [
        "126 + 89 = 215",
        "215 + 89 = 304",
        "126 - 89 = 37",
        "89 - 126 = -37"
    ],

    correctAnswer: "126 + 89 = 215",

    explanation:
        "Adding the answer and the number subtracted should return to 215."
},

{
    id: "cai-049",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "Which answer is easiest to trust?",

    options: [
        "An answer that has been checked using the inverse operation.",
        "The first answer written down.",
        "The largest answer.",
        "An answer with the most digits."
    ],

    correctAnswer: "An answer that has been checked using the inverse operation.",

    explanation:
        "Checking with the inverse operation helps you find mistakes."
},

{
    id: "cai-050",
    skillId: "check-answers-using-the-inverse",
    stage: "master",

    question: "What is the main purpose of using inverse operations?",

    options: [
        "To check that calculations are correct.",
        "To make every answer larger.",
        "To avoid solving calculations.",
        "To round numbers."
    ],

    correctAnswer: "To check that calculations are correct.",

    explanation:
        "Inverse operations undo each other, making them an excellent way to check calculations."

},

    ]
};


export default checkAnswersUsingTheInverse;

export {

    checkAnswersUsingTheInverse

};
