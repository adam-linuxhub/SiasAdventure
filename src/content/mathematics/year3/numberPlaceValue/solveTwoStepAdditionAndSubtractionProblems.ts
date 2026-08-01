import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const solveTwoStepAdditionAndSubtractionProblems: SkillContent = {
    skillId: "solve-two-step-addition-and-subtraction-problems",

    title: "Solve Two-Step Addition and Subtraction Problems",

    description: "Solve word problems involving two addition and subtraction steps.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "tsp-001",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "Ella has 24 stickers. She gets 15 more, then gives 8 away. How many stickers does she have now?",

    options: [
        "31",
        "39",
        "23",
        "32"
    ],

    correctAnswer: "31",

    explanation:
        "24 + 15 = 39. Then 39 − 8 = 31."
},

{
    id: "tsp-002",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "A library has 68 books. It buys 14 more books, then lends out 19 books. How many books does it have now?",

    options: [
        "63",
        "62",
        "61",
        "64"
    ],

    correctAnswer: "63",

    explanation:
        "68 + 14 = 82. Then 82 − 19 = 63."
},

{
    id: "tsp-003",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "Sam scores 17 points in the first game and 22 points in the second game. He loses 6 points for a penalty. What is his final score?",

    options: [
        "33",
        "39",
        "32",
        "35"
    ],

    correctAnswer: "33",

    explanation:
        "17 + 22 = 39. Then 39 − 6 = 33."
},

{
    id: "tsp-004",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "A baker makes 56 rolls. She bakes 18 more, then sells 25. How many rolls are left?",

    options: [
        "49",
        "48",
        "50",
        "47"
    ],

    correctAnswer: "49",

    explanation:
        "56 + 18 = 74. Then 74 − 25 = 49."
},

{
    id: "tsp-005",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "Tom saves £18. He receives another £12, then spends £9. How much money does he have left?",

    options: [
        "£21",
        "£20",
        "£22",
        "£19"
    ],

    correctAnswer: "£21",

    explanation:
        "£18 + £12 = £30. Then £30 − £9 = £21."
},

{
    id: "tsp-006",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "A bus has 37 passengers. Fifteen get on and then 11 get off. How many passengers are on the bus?",

    options: [
        "41",
        "40",
        "42",
        "43"
    ],

    correctAnswer: "41",

    explanation:
        "37 + 15 = 52. Then 52 − 11 = 41."
},

{
    id: "tsp-007",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "Lucy picks 28 apples. She picks 17 more, then gives 10 to her neighbour. How many apples does she have?",

    options: [
        "35",
        "36",
        "34",
        "37"
    ],

    correctAnswer: "35",

    explanation:
        "28 + 17 = 45. Then 45 − 10 = 35."
},

{
    id: "tsp-008",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "A class collects 43 cans on Monday and 18 on Tuesday. They recycle 20 cans. How many cans are left?",

    options: [
        "41",
        "40",
        "42",
        "39"
    ],

    correctAnswer: "41",

    explanation:
        "43 + 18 = 61. Then 61 − 20 = 41."
},

{
    id: "tsp-009",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "A toy shop has 74 kites. It sells 16 kites, then receives 25 more. How many kites does it have now?",

    options: [
        "83",
        "84",
        "82",
        "81"
    ],

    correctAnswer: "83",

    explanation:
        "74 − 16 = 58. Then 58 + 25 = 83."
},

{
    id: "tsp-010",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "Mia has 62 beads. She uses 19 beads and then buys 30 more. How many beads does she have now?",

    options: [
        "73",
        "72",
        "74",
        "71"
    ],

    correctAnswer: "73",

    explanation:
        "62 − 19 = 43. Then 43 + 30 = 73."
},

{
    id: "tsp-011",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "What should you do first in a two-step word problem?",

    options: [
        "Read the whole problem carefully.",
        "Always add first.",
        "Always subtract first.",
        "Guess the answer."
    ],

    correctAnswer: "Read the whole problem carefully.",

    explanation:
        "Read the problem carefully so you know which two calculations to do."
},

{
    id: "tsp-012",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "recognise",

    question: "How many calculations do you usually need in a two-step problem?",

    options: [
        "Two",
        "One",
        "Three",
        "Four"
    ],

    correctAnswer: "Two",

    explanation:
        "A two-step problem needs two calculations."
},

{
    id: "tsp-013",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "A farmer has 85 sheep. He buys 12 more and later sells 18. How many sheep does he have now?",

    options: [
        "79",
        "80",
        "78",
        "81"
    ],

    correctAnswer: "79",

    explanation:
        "85 + 12 = 97. Then 97 − 18 = 79."
},

{
    id: "tsp-014",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "A train has 96 passengers. Twenty-two get off and then 17 get on. How many passengers are on the train?",

    options: [
        "91",
        "90",
        "92",
        "89"
    ],

    correctAnswer: "91",

    explanation:
        "96 − 22 = 74. Then 74 + 17 = 91."
},

{
    id: "tsp-015",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "Ben has 45 football cards. He buys 16 more and then gives 20 to his cousin. How many cards does he have left?",

    options: [
        "41",
        "40",
        "42",
        "39"
    ],

    correctAnswer: "41",

    explanation:
        "45 + 16 = 61. Then 61 − 20 = 41."
},
{
    id: "tsp-016",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "A shop has 125 apples. It sells 38 apples and then receives 24 more. How many apples does it have now?",

    options: [
        "111",
        "109",
        "113",
        "107"
    ],

    correctAnswer: "111",

    explanation:
        "125 − 38 = 87. Then 87 + 24 = 111."
},

{
    id: "tsp-017",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "A class has £42. They raise another £18 and then spend £25 on craft materials. How much money is left?",

    options: [
        "£35",
        "£34",
        "£36",
        "£33"
    ],

    correctAnswer: "£35",

    explanation:
        "£42 + £18 = £60. Then £60 − £25 = £35."
},

{
    id: "tsp-018",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "A football team scores 26 goals in the first half and 19 in the second half. Two goals are disallowed. What is the final score?",

    options: [
        "43",
        "45",
        "42",
        "44"
    ],

    correctAnswer: "43",

    explanation:
        "26 + 19 = 45. Then 45 − 2 = 43."
},

{
    id: "tsp-019",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "Which calculation should you do first? A library has 84 books. It buys 12 more and then lends out 15 books.",

    options: [
        "84 + 12",
        "96 − 15",
        "84 − 15",
        "12 + 15"
    ],

    correctAnswer: "84 + 12",

    explanation:
        "The books are bought before any are lent out."
},

{
    id: "tsp-020",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "understand",

    question: "Which calculation should you do first? A bus has 67 passengers. Nine get off and then 14 get on.",

    options: [
        "67 − 9",
        "58 + 14",
        "67 + 14",
        "14 − 9"
    ],

    correctAnswer: "67 − 9",

    explanation:
        "The passengers get off before others get on."
},

{
    id: "tsp-021",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "A baker makes 138 cupcakes. She sells 49 and then bakes 36 more. How many cupcakes does she have now?",

    options: [
        "125",
        "124",
        "126",
        "123"
    ],

    correctAnswer: "125",

    explanation:
        "138 − 49 = 89. Then 89 + 36 = 125."
},

{
    id: "tsp-022",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "A school library has 243 books. It buys 28 more and then throws away 17 damaged books. How many books does it have now?",

    options: [
        "254",
        "253",
        "255",
        "252"
    ],

    correctAnswer: "254",

    explanation:
        "243 + 28 = 271. Then 271 − 17 = 254."
},

{
    id: "tsp-023",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "Emma has 74 stickers. She gives 18 away and later receives 29 more. How many stickers does she have now?",

    options: [
        "85",
        "84",
        "86",
        "83"
    ],

    correctAnswer: "85",

    explanation:
        "74 − 18 = 56. Then 56 + 29 = 85."
},

{
    id: "tsp-024",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "A farmer collects 86 eggs in the morning and 47 in the afternoon. He sells 52 eggs. How many eggs are left?",

    options: [
        "81",
        "80",
        "82",
        "79"
    ],

    correctAnswer: "81",

    explanation:
        "86 + 47 = 133. Then 133 − 52 = 81."
},

{
    id: "tsp-025",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "Which child is correct?",

    options: [
        "Ella: 52 + 18 − 10 = 60",
        "Ben: 52 + 18 − 10 = 50",
        "Sam: 52 + 18 − 10 = 70",
        "Leo: 52 + 18 − 10 = 62"
    ],

    correctAnswer: "Ella: 52 + 18 − 10 = 60",

    explanation:
        "52 + 18 = 70. Then 70 − 10 = 60."
},

{
    id: "tsp-026",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "Which child is correct?",

    options: [
        "Ben: 93 − 24 + 15 = 84",
        "Ella: 93 − 24 + 15 = 83",
        "Sam: 93 − 24 + 15 = 85",
        "Leo: 93 − 24 + 15 = 82"
    ],

    correctAnswer: "Ben: 93 − 24 + 15 = 84",

    explanation:
        "93 − 24 = 69. Then 69 + 15 = 84."
},

{
    id: "tsp-027",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "A toy shop has 156 toys. It sells 48 and then receives 21 more. How many toys does it have now?",

    options: [
        "129",
        "128",
        "130",
        "127"
    ],

    correctAnswer: "129",

    explanation:
        "156 − 48 = 108. Then 108 + 21 = 129."
},

{
    id: "tsp-028",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "A museum has 217 visitors. Thirty-four leave and then 19 arrive. How many visitors are there now?",

    options: [
        "202",
        "201",
        "203",
        "200"
    ],

    correctAnswer: "202",

    explanation:
        "217 − 34 = 183. Then 183 + 19 = 202."
},

{
    id: "tsp-029",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "Which operation comes second? A class has 46 books. It receives 18 more and then gives 12 to another class.",

    options: [
        "Subtraction",
        "Addition",
        "Multiplication",
        "Division"
    ],

    correctAnswer: "Subtraction",

    explanation:
        "After adding the new books, subtract the books that are given away."
},

{
    id: "tsp-030",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "apply",

    question: "Which operation comes second? A zoo has 154 visitors. Twenty-two leave and then 37 more arrive.",

    options: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division"
    ],

    correctAnswer: "Addition",

    explanation:
        "Visitors leave first, then more visitors arrive, so the second operation is addition."
},
{
    id: "tsp-031",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A school has 325 pencils. It buys 48 more and then gives 97 pencils to another school. How many pencils does it have now?",

    options: [
        "276",
        "286",
        "266",
        "278"
    ],

    correctAnswer: "276",

    explanation:
        "325 + 48 = 373. Then 373 − 97 = 276."
},

{
    id: "tsp-032",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A charity raises £185 on Friday and £126 on Saturday. It spends £94 on equipment. How much money is left?",

    options: [
        "£217",
        "£227",
        "£207",
        "£215"
    ],

    correctAnswer: "£217",

    explanation:
        "£185 + £126 = £311. Then £311 − £94 = £217."
},

{
    id: "tsp-033",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A train has 186 passengers. Thirty-eight get off and then 56 get on. How many passengers are on the train now?",

    options: [
        "204",
        "214",
        "194",
        "202"
    ],

    correctAnswer: "204",

    explanation:
        "186 − 38 = 148. Then 148 + 56 = 204."
},

{
    id: "tsp-034",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which calculation should you do first?",

    options: [
        "248 − 39",
        "209 + 27",
        "39 + 27",
        "248 + 27"
    ],

    correctAnswer: "248 − 39",

    explanation:
        "The problem says 39 are taken away before 27 are added."
},

{
    id: "tsp-035",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A farm has 248 chickens. It sells 63 chickens and later buys 41 more. How many chickens does it have now?",

    options: [
        "226",
        "225",
        "227",
        "224"
    ],

    correctAnswer: "226",

    explanation:
        "248 − 63 = 185. Then 185 + 41 = 226."
},

{
    id: "tsp-036",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Ella: 135 + 28 − 41 = 122",
        "Ben: 135 + 28 − 41 = 132",
        "Sam: 135 + 28 − 41 = 121",
        "Leo: 135 + 28 − 41 = 123"
    ],

    correctAnswer: "Ella: 135 + 28 − 41 = 122",

    explanation:
        "135 + 28 = 163. Then 163 − 41 = 122."
},

{
    id: "tsp-037",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Ben: 214 − 56 + 33 = 191",
        "Ella: 214 − 56 + 33 = 181",
        "Sam: 214 − 56 + 33 = 192",
        "Leo: 214 − 56 + 33 = 190"
    ],

    correctAnswer: "Ben: 214 − 56 + 33 = 191",

    explanation:
        "214 − 56 = 158. Then 158 + 33 = 191."
},

{
    id: "tsp-038",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A cinema sells 248 tickets in the afternoon and 136 tickets in the evening. Twenty-nine people ask for refunds. How many tickets were sold altogether after the refunds?",

    options: [
        "355",
        "365",
        "345",
        "354"
    ],

    correctAnswer: "355",

    explanation:
        "248 + 136 = 384. Then 384 − 29 = 355."
},

{
    id: "tsp-039",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which operation comes second if you first add two amounts together and then remove some?",

    options: [
        "Subtraction",
        "Addition",
        "Multiplication",
        "Division"
    ],

    correctAnswer: "Subtraction",

    explanation:
        "After finding the total, subtract the amount removed."
},

{
    id: "tsp-040",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which operation comes second if you first subtract an amount and then receive more?",

    options: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division"
    ],

    correctAnswer: "Addition",

    explanation:
        "Receiving more means adding."
},

{
    id: "tsp-041",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A library has 412 books. It buys 38 more books and then lends out 125 books. How many books does it have now?",

    options: [
        "325",
        "315",
        "335",
        "324"
    ],

    correctAnswer: "325",

    explanation:
        "412 + 38 = 450. Then 450 − 125 = 325."
},

{
    id: "tsp-042",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which answer is reasonable? A shop has 180 balloons, sells 42 and then receives 25 more.",

    options: [
        "163",
        "247",
        "113",
        "42"
    ],

    correctAnswer: "163",

    explanation:
        "180 − 42 = 138. Then 138 + 25 = 163."
},

{
    id: "tsp-043",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A sports club has 154 footballs. It buys 36 more and then gives 48 to local schools. How many footballs remain?",

    options: [
        "142",
        "132",
        "144",
        "140"
    ],

    correctAnswer: "142",

    explanation:
        "154 + 36 = 190. Then 190 − 48 = 142."
},

{
    id: "tsp-044",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A class raises £96 from a cake sale and £74 from a raffle. They spend £85 on new books. How much money is left?",

    options: [
        "£85",
        "£95",
        "£75",
        "£84"
    ],

    correctAnswer: "£85",

    explanation:
        "£96 + £74 = £170. Then £170 − £85 = £85."
},

{
    id: "tsp-045",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which sentence describes a two-step problem?",

    options: [
        "First add, then subtract.",
        "Only add once.",
        "Only subtract once.",
        "Multiply two numbers."
    ],

    correctAnswer: "First add, then subtract.",

    explanation:
        "Many two-step problems require two different calculations."
},

{
    id: "tsp-046",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A toy shop has 278 toys. It sells 89 toys and later receives 54 more. How many toys does it have now?",

    options: [
        "243",
        "244",
        "242",
        "245"
    ],

    correctAnswer: "243",

    explanation:
        "278 − 89 = 189. Then 189 + 54 = 243."
},

{
    id: "tsp-047",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "Read the whole problem before calculating.",
        "Always do addition first.",
        "Always subtract first.",
        "Ignore the second step."
    ],

    correctAnswer: "Read the whole problem before calculating.",

    explanation:
        "Understanding the full problem helps you choose the correct order of calculations."
},

{
    id: "tsp-048",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A zoo has 385 visitors. Eighty-two visitors leave and then 47 more arrive. How many visitors are there now?",

    options: [
        "350",
        "340",
        "360",
        "349"
    ],

    correctAnswer: "350",

    explanation:
        "385 − 82 = 303. Then 303 + 47 = 350."
},

{
    id: "tsp-049",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "A school has 286 reading books. It buys 39 more and then throws away 18 damaged books. How many reading books does it have now?",

    options: [
        "307",
        "297",
        "317",
        "308"
    ],

    correctAnswer: "307",

    explanation:
        "286 + 39 = 325. Then 325 − 18 = 307."
},

{
    id: "tsp-050",
    skillId: "solve-two-step-addition-and-subtraction-problems",
    stage: "master",

    question: "What is the best way to solve a two-step word problem?",

    options: [
        "Work through each step in the correct order.",
        "Add all the numbers together.",
        "Subtract all the numbers.",
        "Guess which operation to use."
    ],

    correctAnswer: "Work through each step in the correct order.",

    explanation:
        "Read carefully, choose the correct operations, and solve one step at a time."

},

    ]
};


export default solveTwoStepAdditionAndSubtractionProblems;

export {

    solveTwoStepAdditionAndSubtractionProblems

};
