import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const addAndSubtractOnNumberLine: SkillContent = {
    skillId: "add-and-subtract-on-number-line",

    title: "Add and Subtract on a Number Line",

    description: "Use a number line to add and subtract numbers.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "asn-001",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "You start at 14 on a number line and jump forward 5. Where do you land?",

    options: [
        "19",
        "18",
        "20",
        "9"
    ],

    correctAnswer: "19",

    hint: "A forward jump means you count on. Start at 14 and move five steps to the right on the number line.",

    explanation:
        "Jumping forward means adding. 14 + 5 = 19."
},

{
    id: "asn-002",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "You start at 27 and jump back 6. Where do you land?",

    options: [
        "21",
        "22",
        "23",
        "20"
    ],

    correctAnswer: "21",

    hint: "Moving backwards means subtracting. Count back carefully from 27 one jump at a time if needed.",

    explanation:
        "Jumping back means subtracting. 27 − 6 = 21."
},

{
    id: "asn-003",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "Which calculation matches a jump from 35 to 42?",

    options: [
        "35 + 7",
        "35 + 5",
        "42 − 5",
        "42 + 7"
    ],

    correctAnswer: "35 + 7",

    hint: "Work out how many numbers lie between the start and finish. The jump size tells you what is being added.",

    explanation:
        "42 is 7 more than 35."
},

{
    id: "asn-004",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "You start at 50 and jump back 8. Where do you land?",

    options: [
        "42",
        "48",
        "58",
        "40"
    ],

    correctAnswer: "42",

    hint: "Begin at 50 and travel left eight spaces. Think of taking away rather than adding.",

    explanation:
        "50 − 8 = 42."
},

{
    id: "asn-005",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "Which number is 9 more than 18?",

    options: [
        "27",
        "26",
        "28",
        "29"
    ],

    correctAnswer: "27",

    hint: "Adding 9 is almost the same as adding 10, then taking 1 away.",

    explanation:
        "18 + 9 = 27."
},

{
    id: "asn-006",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "Which number is 4 less than 33?",

    options: [
        "29",
        "30",
        "28",
        "27"
    ],

    correctAnswer: "29",

    hint: "The phrase 'less than' tells you to count backwards from the starting number.",

    explanation:
        "33 − 4 = 29."
},

{
    id: "asn-007",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "You start at 41 and jump forward 10. Where do you land?",

    options: [
        "51",
        "50",
        "52",
        "31"
    ],

    correctAnswer: "51",

    hint: "Adding 10 changes the tens digit while the ones digit stays the same.",

    explanation:
        "41 + 10 = 51."
},

{
    id: "asn-008",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "You start at 64 and jump back 10. Where do you land?",

    options: [
        "54",
        "44",
        "74",
        "55"
    ],

    correctAnswer: "54",

    hint: "Subtracting 10 keeps the ones digit unchanged but reduces the tens by one.",

    explanation:
        "64 − 10 = 54."
},

{
    id: "asn-009",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "Which calculation matches moving from 22 to 30?",

    options: [
        "22 + 8",
        "22 + 6",
        "30 − 6",
        "30 + 8"
    ],

    correctAnswer: "22 + 8",

    hint: "Compare the start and end numbers to find the size of the jump before choosing the calculation.",

    explanation:
        "30 is 8 more than 22."
},

{
    id: "asn-010",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "You start at 90 and jump back 20. Where do you land?",

    options: [
        "70",
        "80",
        "60",
        "110"
    ],

    correctAnswer: "70",

    hint: "Two jumps of ten backwards are the same as one jump of twenty backwards.",

    explanation:
        "90 − 20 = 70."
},

{
    id: "asn-011",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "Which number is 6 more than 47?",

    options: [
        "53",
        "52",
        "54",
        "51"
    ],

    correctAnswer: "53",

    hint: "Count on six from 47, or add 3 to reach 50 and then add the remaining 3.",

    explanation:
        "47 + 6 = 53."
},

{
    id: "asn-012",
    skillId: "add-and-subtract-on-number-line",
    stage: "recognise",

    question: "Which number is 7 less than 65?",

    options: [
        "58",
        "57",
        "59",
        "56"
    ],

    correctAnswer: "58",

    hint: "Break the subtraction into smaller steps if it helps—for example, back 5 then back 2.",

    explanation:
        "65 − 7 = 58."
},

{
    id: "asn-013",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "Ella starts at 18 and jumps forward 9. She says she lands on 27. Is she correct?",

    options: [
        "Yes",
        "No, she lands on 26.",
        "No, she lands on 28.",
        "No, she lands on 29."
    ],

    correctAnswer: "Yes",

    hint: "Don't guess whether Ella is right—do the jump yourself and compare her answer.",

    explanation:
        "18 + 9 = 27."
},

{
    id: "asn-014",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "Ben starts at 56 and jumps back 8. He says the answer is 49. Is he correct?",

    options: [
        "No, it is 48.",
        "Yes",
        "No, it is 47.",
        "No, it is 50."
    ],

    correctAnswer: "No, it is 48.",

    hint: "Check Ben's answer by counting back exactly eight spaces from 56, not seven.",

    explanation:
        "56 − 8 = 48."
},

{
    id: "asn-015",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "Which jump lands on 63?",

    options: [
        "Start at 55 and jump forward 8",
        "Start at 55 and jump forward 7",
        "Start at 63 and jump back 8",
        "Start at 53 and jump forward 8"
    ],

    correctAnswer: "Start at 55 and jump forward 8",

    hint: "Test each journey mentally. Only one finishes exactly on 63.",

    explanation:
        "55 + 8 = 63."
},

{
    id: "asn-016",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "You start at 48 and jump forward 7. Where do you land?",

    options: [
        "55",
        "54",
        "56",
        "57"
    ],

    correctAnswer: "55",

    hint: "Jump to the next multiple of ten first if that makes the counting easier.",

    explanation:
        "48 + 7 = 55."
},

{
    id: "asn-017",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "You start at 72 and jump back 9. Where do you land?",

    options: [
        "63",
        "61",
        "64",
        "62"
    ],

    correctAnswer: "63",

    hint: "Think of subtracting 10, then adding 1 back to adjust.",

    explanation:
        "72 − 9 = 63."
},

{
    id: "asn-018",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "Which calculation matches moving from 39 to 48 on a number line?",

    options: [
        "39 + 9",
        "39 + 8",
        "48 − 8",
        "48 + 9"
    ],

    correctAnswer: "39 + 9",

    hint: "Find the difference between the two numbers. That tells you the jump size.",

    explanation:
        "48 is 9 more than 39."
},

{
    id: "asn-019",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "You start at 81 and jump back 12. Where do you land?",

    options: [
        "69",
        "71",
        "68",
        "70"
    ],

    correctAnswer: "69",

    hint: "Split the jump into 10 and 2 to make the subtraction easier to track.",

    explanation:
        "81 − 12 = 69."
},

{
    id: "asn-020",
    skillId: "add-and-subtract-on-number-line",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Ella: Start at 35, jump forward 6, land on 41.",
        "Ben: Start at 35, jump forward 6, land on 40.",
        "Sam: Start at 35, jump forward 6, land on 42.",
        "Leo: Start at 35, jump forward 6, land on 39."
    ],

    correctAnswer: "Ella: Start at 35, jump forward 6, land on 41.",

    hint: "Ignore who said it first. Work out the result of 35 plus 6 and see which statement matches.",

    explanation:
        "35 + 6 = 41."
},

{
    id: "asn-021",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "A frog is on lily pad 26. It jumps forward 8 lily pads. Which lily pad does it land on?",

    options: [
        "34",
        "32",
        "36",
        "33"
    ],

    correctAnswer: "34",

    hint: "Picture the frog making eight equal jumps forwards. The landing pad is eight more than 26.",

    explanation:
        "26 + 8 = 34."
},

{
    id: "asn-022",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "A climber is at 54 metres. They climb 9 more metres. How high are they now?",

    options: [
        "63 metres",
        "62 metres",
        "64 metres",
        "61 metres"
    ],

    correctAnswer: "63 metres",

    hint: "A climb increases the height. Try adding 10 first, then subtract 1 because the climb is only 9 metres.",

    explanation:
        "54 + 9 = 63."
},

{
    id: "asn-023",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "A lift is on floor 47. It goes down 5 floors. Which floor does it reach?",

    options: [
        "42",
        "43",
        "41",
        "44"
    ],

    correctAnswer: "42",

    hint: "Going down in a lift means the floor number becomes smaller. Count back five floors.",

    explanation:
        "47 − 5 = 42."
},

{
    id: "asn-024",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "A runner has completed 38 laps. They run 7 more laps. How many laps have they completed?",

    options: [
        "45",
        "44",
        "46",
        "47"
    ],

    correctAnswer: "45",

    hint: "The runner keeps all the laps already completed, then adds seven more to the total.",

    explanation:
        "38 + 7 = 45."
},

{
    id: "asn-025",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "Which calculation matches this journey? Start at 62 and finish at 54.",

    options: [
        "62 − 8",
        "62 + 8",
        "54 + 6",
        "54 − 8"
    ],

    correctAnswer: "62 − 8",

    hint: "The finish is smaller than the start, so the journey must be backwards. Find the size of that backward jump.",

    explanation:
        "Moving from 62 to 54 means subtracting 8."
},

{
    id: "asn-026",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "A snail crawls from 15 cm to 24 cm on a ruler. How far did it crawl?",

    options: [
        "9 cm",
        "8 cm",
        "10 cm",
        "11 cm"
    ],

    correctAnswer: "9 cm",

    hint: "You are finding the distance between two positions, not adding them together.",

    explanation:
        "24 − 15 = 9."
},

{
    id: "asn-027",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "Which number completes the journey? 29 → □ (jump forward 6)",

    options: [
        "35",
        "34",
        "36",
        "33"
    ],

    correctAnswer: "35",

    hint: "Imagine standing on 29 and taking six steps to the right. The box is where you finish.",

    explanation:
        "29 + 6 = 35."
},

{
    id: "asn-028",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "Which number completes the journey? 83 → □ (jump back 7)",

    options: [
        "76",
        "75",
        "77",
        "74"
    ],

    correctAnswer: "76",

    hint: "Seven back can be thought of as back five, then back two more.",

    explanation:
        "83 − 7 = 76."
},

{
    id: "asn-029",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "A game piece moves from square 41 to square 49. How many spaces did it move?",

    options: [
        "8",
        "7",
        "9",
        "10"
    ],

    correctAnswer: "8",

    hint: "Count the spaces travelled between the two numbers, rather than reading the finishing square.",

    explanation:
        "49 − 41 = 8."
},

{
    id: "asn-030",
    skillId: "add-and-subtract-on-number-line",
    stage: "apply",

    question: "Which child solved the problem correctly?",

    options: [
        "Ben: Start at 58, jump back 9, land on 49.",
        "Ella: Start at 58, jump back 9, land on 50.",
        "Sam: Start at 58, jump back 9, land on 48.",
        "Leo: Start at 58, jump back 9, land on 51."
    ],

    correctAnswer: "Ben: Start at 58, jump back 9, land on 49.",

    hint: "Work out the answer once yourself before looking at the children's answers.",

    explanation:
        "58 − 9 = 49."
},

{
    id: "asn-031",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "You start at 67 and jump forward 15. Where do you land?",

    options: [
        "82",
        "81",
        "83",
        "72"
    ],

    correctAnswer: "82",

    hint: "Split the jump into 10 and 5 to make the calculation easier to follow mentally.",

    explanation:
        "67 + 15 = 82."
},

{
    id: "asn-032",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "You start at 94 and jump back 18. Where do you land?",

    options: [
        "76",
        "74",
        "78",
        "75"
    ],

    correctAnswer: "76",

    hint: "Subtract 20 first, then add back 2 because the jump is only 18.",

    explanation:
        "94 − 18 = 76."
},

{
    id: "asn-033",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "A counter moves from 46 to 59. How many spaces does it move?",

    options: [
        "13",
        "12",
        "14",
        "15"
    ],

    correctAnswer: "13",

    hint: "This question asks for the size of the move, so compare the two numbers instead of adding them.",

    explanation:
        "59 − 46 = 13."
},

{
    id: "asn-034",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "A counter starts on 81 and lands on 67. How far did it move?",

    options: [
        "14",
        "13",
        "15",
        "16"
    ],

    correctAnswer: "14",

    hint: "The counter moved backwards. Find the difference between the starting and ending numbers to discover how far.",

    explanation:
        "81 − 67 = 14."
},

{
    id: "asn-035",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which jump lands on 96?",

    options: [
        "Start at 84 and jump forward 12",
        "Start at 84 and jump forward 10",
        "Start at 96 and jump back 10",
        "Start at 86 and jump forward 12"
    ],

    correctAnswer: "Start at 84 and jump forward 12",

    hint: "Check where each journey finishes. Only one reaches exactly 96 after the jump.",

    explanation:
        "84 + 12 = 96."
},

{
    id: "asn-036",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "A lift is on floor 28. It goes up 16 floors. Which floor does it reach?",

    options: [
        "44",
        "42",
        "46",
        "48"
    ],

    correctAnswer: "44",

    hint: "Going up increases the floor number. Add 10 first, then the remaining 6 floors.",

    explanation:
        "28 + 16 = 44."
},

{
    id: "asn-037",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "A diver is 35 metres below the surface. They swim up 18 metres. What number describes their new position?",

    options: [
        "17 metres below",
        "18 metres below",
        "53 metres below",
        "17 metres above"
    ],

    correctAnswer: "17 metres below",

    hint: "Swimming up reduces how far below the surface the diver is, but check whether they actually reach the surface.",

    explanation:
        "35 − 18 = 17, so the diver is still 17 metres below the surface."
},

{
    id: "asn-038",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which journey is correct?",

    options: [
        "53 → 61 (jump +8)",
        "53 → 60 (jump +8)",
        "53 → 62 (jump +8)",
        "53 → 59 (jump +8)"
    ],

    correctAnswer: "53 → 61 (jump +8)",

    hint: "A jump of +8 means the finishing number must be exactly eight greater than the starting number.",

    explanation:
        "53 + 8 = 61."
},

{
    id: "asn-039",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Ella: Start at 72, jump back 15, land on 57.",
        "Ben: Start at 72, jump back 15, land on 58.",
        "Sam: Start at 72, jump back 15, land on 56.",
        "Leo: Start at 72, jump back 15, land on 59."
    ],

    correctAnswer: "Ella: Start at 72, jump back 15, land on 57.",

    hint: "Subtract the full 15 yourself before deciding which child's answer is accurate.",

    explanation:
        "72 − 15 = 57."
},

{
    id: "asn-040",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which start number makes this true? □ + 14 = 65",

    options: [
        "51",
        "49",
        "52",
        "50"
    ],

    correctAnswer: "51",

    hint: "When the starting number is missing, work backwards from the total by undoing the addition.",

    explanation:
        "65 − 14 = 51."
},

{
    id: "asn-041",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which jump completes the journey from 48 to 70?",

    options: [
        "Forward 22",
        "Forward 20",
        "Forward 18",
        "Back 22"
    ],

    correctAnswer: "Forward 22",

    hint: "Find the difference between 48 and 70, then decide whether the jump goes forwards or backwards.",

    explanation:
        "70 − 48 = 22."
},

{
    id: "asn-042",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which calculation is correct?",

    options: [
        "89 − 17 = 72",
        "89 − 17 = 71",
        "89 + 17 = 72",
        "89 + 17 = 106"
    ],

    correctAnswer: "89 − 17 = 72",

    hint: "Estimate first. Taking away 17 should leave a number in the low seventies, not increase the total.",

    explanation:
        "Jump back 17 from 89 to reach 72."
},

{
    id: "asn-043",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "A runner is at 135 metres. They run forward 25 metres. Where are they now?",

    options: [
        "160 metres",
        "150 metres",
        "155 metres",
        "170 metres"
    ],

    correctAnswer: "160 metres",

    hint: "Break the distance into 20 metres and 5 metres to make the addition easier.",

    explanation:
        "135 + 25 = 160."
},

{
    id: "asn-044",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "A game token moves back 32 spaces from 94. Which square does it land on?",

    options: [
        "62",
        "64",
        "60",
        "63"
    ],

    correctAnswer: "62",

    hint: "Subtract 30 first, then subtract the final 2 spaces.",

    explanation:
        "94 − 32 = 62."
},

{
    id: "asn-045",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which calculation matches a jump from 76 to 91?",

    options: [
        "76 + 15",
        "76 + 14",
        "91 − 14",
        "91 + 15"
    ],

    correctAnswer: "76 + 15",

    hint: "Compare the start and finish to find the size of the increase before choosing the equation.",

    explanation:
        "91 is 15 more than 76."
},

{
    id: "asn-046",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which child made a mistake?",

    options: [
        "Ben: 43 + 18 = 61",
        "Ella: 58 − 16 = 42",
        "Sam: 72 + 11 = 83",
        "Leo: 90 − 25 = 66"
    ],

    correctAnswer: "Leo: 90 − 25 = 66",

    hint: "Check each calculation one at a time. Three are correct, so look for the single result that doesn't work.",

    explanation:
        "90 − 25 = 65, not 66."
},

{
    id: "asn-047",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "What number is halfway between 38 and 50 on a number line?",

    options: [
        "44",
        "43",
        "45",
        "42"
    ],

    correctAnswer: "44",

    hint: "The halfway point is the same distance from both numbers. Check which option is equally far from 38 and 50.",

    explanation:
        "44 is 6 more than 38 and 6 less than 50."
},

{
    id: "asn-048",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which journey shows two jumps that total 15?",

    options: [
        "Jump 10, then jump 5",
        "Jump 8, then jump 6",
        "Jump 7, then jump 7",
        "Jump 9, then jump 5"
    ],

    correctAnswer: "Jump 10, then jump 5",

    hint: "Add the two jump sizes together for each option instead of looking at them separately.",

    explanation:
        "10 + 5 = 15."
},

{
    id: "asn-049",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "A frog jumps from 22 to 37 using equal jumps of 5. Where does it land after the second jump?",

    options: [
        "32",
        "27",
        "37",
        "42"
    ],

    correctAnswer: "32",

    hint: "Don't jump all the way to the end. Stop after the second jump and see where the frog is.",

    explanation:
        "22 → 27 → 32. After the second jump, the frog lands on 32."
},

{
    id: "asn-050",
    skillId: "add-and-subtract-on-number-line",
    stage: "master",

    question: "Which statement is correct?",

    options: [
        "Start at 48, jump forward 17, land on 65.",
        "Start at 48, jump forward 17, land on 64.",
        "Start at 48, jump back 17, land on 65.",
        "Start at 48, jump back 17, land on 31."
    ],

    correctAnswer: "Start at 48, jump forward 17, land on 65.",

    hint: "Pay attention to both the direction of the jump and the finishing number—both must be correct.",

    explanation:
        "48 + 17 = 65."
},

    ]
};

export default addAndSubtractOnNumberLine;

export {
    addAndSubtractOnNumberLine
};