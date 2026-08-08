import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const countInEights: SkillContent = {
    skillId: "count-in-eights",

    title: "Count in Eights",

    description: "Count forwards and backwards in eights.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "cie-001",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "What comes next? 8, 16, 24, 32, ...",

            hint:
                "Look at how much the numbers increase each time. Keep using the same jump to find the next number.",

            options: [
                "40",
                "36",
                "42",
                "48"
            ],

            correctAnswer: "40",

            explanation:
                "Add 8 each time."
        },

        {
            id: "cie-002",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Fill the gap. 16, 24, □, 40",

            hint:
                "The gap should be one jump of 8 after 24 and one jump of 8 before 40.",

            options: [
                "32",
                "30",
                "34",
                "36"
            ],

            correctAnswer: "32",

            explanation:
                "24 + 8 = 32."
        },

        {
            id: "cie-003",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Which sequence counts in eights?",

            hint:
                "Check the difference between every pair of neighbouring numbers. The correct sequence always changes by the same amount.",

            options: [
                "24, 32, 40, 48",
                "24, 30, 36, 42",
                "24, 28, 32, 36",
                "24, 40, 56, 72"
            ],

            correctAnswer: "24, 32, 40, 48",

            explanation:
                "Each number is 8 more than the previous one."
        },

        {
            id: "cie-004",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "What comes after 48 when counting in eights?",

            hint:
                "Imagine making one jump of 8 forward from 48 on a number line.",

            options: [
                "56",
                "54",
                "58",
                "64"
            ],

            correctAnswer: "56",

            explanation:
                "48 + 8 = 56."
        },

        {
            id: "cie-005",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Which number comes before 40 when counting in eights?",

            hint:
                "To find the previous number in the pattern, move backwards by one group of 8.",

            options: [
                "32",
                "36",
                "30",
                "24"
            ],

            correctAnswer: "32",

            explanation:
                "40 - 8 = 32."
        },

        {
            id: "cie-006",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Which number is missing? 40, □, 56",

            hint:
                "The missing number must be exactly halfway through two jumps of 8.",

            options: [
                "48",
                "46",
                "50",
                "52"
            ],

            correctAnswer: "48",

            explanation:
                "40, 48, 56 counts in eights."
        },

        {
            id: "cie-007",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "What comes next? 56, 64, 72, ...",

            hint:
                "Keep the counting pattern going by adding the same amount as before.",

            options: [
                "80",
                "78",
                "82",
                "88"
            ],

            correctAnswer: "80",

            explanation:
                "72 + 8 = 80."
        },

        {
            id: "cie-008",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Which sequence is correct?",

            hint:
                "Check whether every step is exactly 8. If one jump is different, the whole sequence is wrong.",

            options: [
                "8, 16, 24, 32",
                "8, 14, 20, 26",
                "8, 12, 16, 20",
                "8, 24, 40, 56"
            ],

            correctAnswer: "8, 16, 24, 32",

            explanation:
                "Each step increases by 8."
        },

        {
            id: "cie-009",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Which number does NOT belong?",

            hint:
                "See which numbers fit the 8-times table pattern. One number breaks the pattern.",

            options: [
                "34",
                "24",
                "32",
                "40"
            ],

            correctAnswer: "34",

            explanation:
                "24, 32 and 40 are all in the count-by-8 pattern."
        },

        {
            id: "cie-010",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Fill the gap. 72, 80, □, 96",

            hint:
                "Keep adding 8. The missing number should fit perfectly between 80 and 96.",

            options: [
                "88",
                "86",
                "90",
                "92"
            ],

            correctAnswer: "88",

            explanation:
                "80 + 8 = 88."
        },

        {
            id: "cie-011",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "What comes next? 80, 88, 96, ...",

            hint:
                "The pattern doesn't change. Add another group of 8 to continue it.",

            options: [
                "104",
                "102",
                "108",
                "112"
            ],

            correctAnswer: "104",

            explanation:
                "96 + 8 = 104."
        },

        {
            id: "cie-012",
            skillId: "count-in-eights",
            stage: "recognise",

            question: "Which sequence counts backwards in eights?",

            hint:
                "When counting backwards, every number should be 8 less than the one before it.",

            options: [
                "64, 56, 48, 40",
                "64, 58, 52, 46",
                "64, 60, 56, 52",
                "64, 48, 32, 16"
            ],

            correctAnswer: "64, 56, 48, 40",

            explanation:
                "Each number is 8 less than the previous one."
        },

        {
            id: "cie-013",
            skillId: "count-in-eights",
            stage: "understand",

            question: "Ella counted: 16, 24, 32, 41. Where did she make her mistake?",

            hint:
                "Check every jump. If she is counting in eights, each increase should be exactly the same.",

            options: [
                "41 should be 40",
                "32 should be 30",
                "24 should be 22",
                "16 should be 18"
            ],

            correctAnswer: "41 should be 40",

            explanation:
                "After 32 comes 40 when counting in eights."
        },

        {
            id: "cie-014",
            skillId: "count-in-eights",
            stage: "understand",

            question: "Which child counted correctly in eights?",

            hint:
                "Read each child's sequence and check whether every jump is exactly 8.",

            options: [
                "Sam: 40, 48, 56, 64",
                "Ben: 40, 46, 52, 58",
                "Ava: 40, 44, 48, 52",
                "Leo: 40, 50, 60, 70"
            ],

            correctAnswer: "Sam: 40, 48, 56, 64",

            explanation:
                "Sam adds 8 each time."
        },

        {
            id: "cie-015",
            skillId: "count-in-eights",
            stage: "understand",

            question: "Which number should replace the □? 88, 96, □, 112",

            hint:
                "The missing number should be one step of 8 after 96 and one step before 112.",

            options: [
                "104",
                "102",
                "100",
                "108"
            ],

            correctAnswer: "104",

            explanation:
                "96 + 8 = 104."
        },

        {
            id: "cie-016",
            skillId: "count-in-eights",
            stage: "understand",

            question: "What comes next? 104, 112, 120, ...",

            hint:
                "Keep repeating the same increase that has been used throughout the sequence.",

            options: [
                "128",
                "126",
                "130",
                "132"
            ],

            correctAnswer: "128",

            explanation:
                "Add 8 each time."
        },

        {
            id: "cie-017",
            skillId: "count-in-eights",
            stage: "understand",

            question: "Which number is missing? 48, 56, □, 72",

            hint:
                "Look for the number that keeps every jump equal to 8.",

            options: [
                "64",
                "62",
                "66",
                "68"
            ],

            correctAnswer: "64",

            explanation:
                "56 + 8 = 64."
        },

        {
            id: "cie-018",
            skillId: "count-in-eights",
            stage: "understand",

            question: "What number comes before 88 when counting in eights?",

            hint:
                "Move backwards one step in the pattern by taking away 8.",

            options: [
                "80",
                "82",
                "78",
                "84"
            ],

            correctAnswer: "80",

            explanation:
                "88 - 8 = 80."
        },

        {
            id: "cie-019",
            skillId: "count-in-eights",
            stage: "understand",

            question: "Which sequence counts backwards in eights?",

            hint:
                "Each number should be exactly 8 smaller than the previous one. Check every gap, not just the first.",

            options: [
                "96, 88, 80, 72",
                "96, 90, 84, 78",
                "96, 92, 88, 84",
                "96, 80, 64, 48"
            ],

            correctAnswer: "96, 88, 80, 72",

            explanation:
                "Each number is 8 less than the one before."
        },

{
    id: "cie-020",
    skillId: "count-in-eights",
    stage: "understand",

    question: "Which child made a mistake?",

    hint:
        "Check each child's pattern one step at a time. Every jump should be exactly 8, so one sequence will break that rule.",

    options: [
        "Ella: 64, 72, 80, 89",
        "Sam: 64, 72, 80, 88",
        "Leo: 24, 32, 40, 48",
        "Ava: 96, 104, 112, 120"
    ],

    correctAnswer: "Ella: 64, 72, 80, 89",

    explanation:
        "After 80 comes 88, not 89."
},

{
    id: "cie-021",
    skillId: "count-in-eights",
    stage: "apply",

    question: "An octopus has 8 legs. How many legs do 6 octopuses have?",

    hint:
        "Start at 8 and count in eights until you have counted one group for each of the 6 octopuses.",

    options: [
        "48",
        "40",
        "56",
        "64"
    ],

    correctAnswer: "48",

    explanation:
        "Count in eights six times: 8, 16, 24, 32, 40, 48."
},

{
    id: "cie-022",
    skillId: "count-in-eights",
    stage: "apply",

    question: "A frog jumps 8 lily pads each time. It starts on 24. Where does it land after one jump?",

    hint:
        "One jump means moving forward by exactly one group of 8 from the starting number.",

    options: [
        "32",
        "30",
        "34",
        "40"
    ],

    correctAnswer: "32",

    explanation:
        "24 + 8 = 32."
},

{
    id: "cie-023",
    skillId: "count-in-eights",
    stage: "apply",

    question: "Which number comes next? 120, 128, 136, ...",

    hint:
        "The pattern keeps increasing by the same amount. Continue it with one more jump of 8.",

    options: [
        "144",
        "140",
        "146",
        "148"
    ],

    correctAnswer: "144",

    explanation:
        "Add 8 to 136."
},

{
    id: "cie-024",
    skillId: "count-in-eights",
    stage: "apply",

    question: "Which number completes the pattern? 72, 80, 88, □, 104",

    hint:
        "The missing number should fit perfectly between 88 and 104 with equal jumps of 8 on both sides.",

    options: [
        "96",
        "94",
        "98",
        "100"
    ],

    correctAnswer: "96",

    explanation:
        "88 + 8 = 96."
},

{
    id: "cie-025",
    skillId: "count-in-eights",
    stage: "apply",

    question: "Which sequence is correct?",

    hint:
        "This time the numbers are getting smaller. Check that each step goes back by exactly 8.",

    options: [
        "112, 104, 96, 88",
        "112, 106, 100, 94",
        "112, 108, 104, 100",
        "112, 96, 80, 64"
    ],

    correctAnswer: "112, 104, 96, 88",

    explanation:
        "Each step goes back by 8."
},

{
    id: "cie-026",
    skillId: "count-in-eights",
    stage: "apply",

    question: "A spider has 8 legs. How many legs do 9 spiders have?",

    hint:
        "Count in eights nine times, or think of nine equal groups with 8 in each group.",

    options: [
        "72",
        "64",
        "80",
        "68"
    ],

    correctAnswer: "72",

    explanation:
        "Count in eights nine times to reach 72."
},

{
    id: "cie-027",
    skillId: "count-in-eights",
    stage: "apply",

    question: "Which number should replace the □? 160, 152, 144, □",

    hint:
        "The pattern is moving backwards. Subtract the same amount from each number to find the missing one.",

    options: [
        "136",
        "140",
        "138",
        "132"
    ],

    correctAnswer: "136",

    explanation:
        "Count backwards by 8."
},

{
    id: "cie-028",
    skillId: "count-in-eights",
    stage: "apply",

    question: "Which number does NOT belong?",

    hint:
        "Three numbers fit the count-by-8 pattern. Check which one cannot be reached by counting in eights.",

    options: [
        "74",
        "72",
        "80",
        "88"
    ],

    correctAnswer: "74",

    explanation:
        "72, 80 and 88 are all in the count-by-8 pattern."
},

{
    id: "cie-029",
    skillId: "count-in-eights",
    stage: "apply",

    question: "A climber climbs 8 metres every minute. Starting at 40 metres, where are they after 3 minutes?",

    hint:
        "Move forward one jump of 8 for each minute. Count three jumps from the starting height.",

    options: [
        "64 metres",
        "56 metres",
        "48 metres",
        "72 metres"
    ],

    correctAnswer: "64 metres",

    explanation:
        "40, 48, 56, 64. After 3 minutes the climber reaches 64 metres."
},

{
    id: "cie-030",
    skillId: "count-in-eights",
    stage: "apply",

    question: "Which child counted correctly?",

    hint:
        "Read each sequence carefully and check whether every increase is exactly 8. One child never changes the pattern.",

    options: [
        "Ben: 72, 80, 88, 96",
        "Ella: 72, 78, 86, 94",
        "Leo: 72, 82, 92, 102",
        "Ava: 72, 76, 84, 92"
    ],

    correctAnswer: "Ben: 72, 80, 88, 96",

    explanation:
        "Ben adds 8 each time."
},

{
    id: "cie-031",
    skillId: "count-in-eights",
    stage: "master",

    question: "What comes next? 144, 152, 160, ...",

    hint:
        "Keep following the same counting rule. One more jump of 8 gives the next number.",

    options: [
        "168",
        "166",
        "170",
        "172"
    ],

    correctAnswer: "168",

    explanation:
        "Add 8 to 160."
},

{
    id: "cie-032",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which number is missing? 96, □, 112, 120",

    hint:
        "The missing number should be one step after 96 and one step before 112 if every jump is 8.",

    options: [
        "104",
        "102",
        "106",
        "108"
    ],

    correctAnswer: "104",

    explanation:
        "96, 104, 112, 120 counts in eights."
},

{
    id: "cie-033",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which sequence is correct?",

    hint:
        "Don't just check the first jump. Make sure every gap between neighbouring numbers is exactly 8.",

    options: [
        "40, 48, 56, 64, 72",
        "40, 46, 52, 58, 64",
        "40, 44, 48, 52, 56",
        "40, 56, 72, 88, 104"
    ],

    correctAnswer: "40, 48, 56, 64, 72",

    explanation:
        "Each number is 8 more than the previous one."
},

{
    id: "cie-034",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which child counted backwards correctly?",

    hint:
        "Counting backwards means taking away 8 every time. Check each child's sequence one step at a time.",

    options: [
        "Sam: 80, 72, 64, 56",
        "Ella: 80, 74, 68, 62",
        "Leo: 80, 76, 72, 68",
        "Ava: 80, 64, 48, 32"
    ],

    correctAnswer: "Sam: 80, 72, 64, 56",

    explanation:
        "Sam subtracts 8 each time."
},
{
    id: "cie-035",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which number comes before 160 when counting in eights?",

    hint:
        "To find the previous number in this pattern, move back by one jump of 8 from 160.",

    options: [
        "152",
        "156",
        "148",
        "150"
    ],

    correctAnswer: "152",

    explanation:
        "160 - 8 = 152."
},

{
    id: "cie-036",
    skillId: "count-in-eights",
    stage: "master",

    question: "An octopus has 8 legs. How many legs do 12 octopuses have?",

    hint:
        "Count in eights until you have counted 12 groups, or think about 12 equal groups of 8 legs.",

    options: [
        "96",
        "88",
        "104",
        "84"
    ],

    correctAnswer: "96",

    explanation:
        "Count in eights twelve times to reach 96."
},

{
    id: "cie-037",
    skillId: "count-in-eights",
    stage: "master",

    question: "A lift goes up 8 floors each time. It starts on floor 16. Which floor is it on after 5 moves?",

    hint:
        "Each move adds one jump of 8. Count five jumps starting from floor 16.",

    options: [
        "56",
        "48",
        "40",
        "64"
    ],

    correctAnswer: "56",

    explanation:
        "16, 24, 32, 40, 48, 56. After 5 moves it reaches floor 56."
},

{
    id: "cie-038",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which number does NOT belong?",

    hint:
        "Three numbers fit perfectly into the count-by-8 pattern. Find the one that breaks the sequence.",

    options: [
        "82",
        "80",
        "88",
        "96"
    ],

    correctAnswer: "82",

    explanation:
        "80, 88 and 96 are all in the count-by-8 pattern."
},

{
    id: "cie-039",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which statement is correct?",

    hint:
        "Work out the difference between 64 and 72. That tells you which sentence is true.",

    options: [
        "72 is 8 more than 64.",
        "72 is 6 more than 64.",
        "72 is 8 less than 64.",
        "72 is 16 more than 64."
    ],

    correctAnswer: "72 is 8 more than 64.",

    explanation:
        "72 - 64 = 8."
},

{
    id: "cie-040",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which pattern counts in eights all the way?",

    hint:
        "Check every gap in each sequence. One incorrect jump means the whole pattern is wrong.",

    options: [
        "64, 72, 80, 88, 96",
        "64, 70, 76, 82, 88",
        "64, 68, 72, 76, 80",
        "64, 80, 96, 112, 128"
    ],

    correctAnswer: "64, 72, 80, 88, 96",

    explanation:
        "Every step increases by 8."
},

{
    id: "cie-041",
    skillId: "count-in-eights",
    stage: "master",

    question: "A game awards 8 points each round. How many points after 11 rounds?",

    hint:
        "Each round gives another group of 8 points. Count 11 groups or use repeated addition.",

    options: [
        "88",
        "80",
        "96",
        "84"
    ],

    correctAnswer: "88",

    explanation:
        "Count in eights eleven times to reach 88."
},

{
    id: "cie-042",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which number should replace the □? 176, 168, □, 152",

    hint:
        "The numbers are getting smaller by the same amount. Continue subtracting 8 each step.",

    options: [
        "160",
        "162",
        "158",
        "156"
    ],

    correctAnswer: "160",

    explanation:
        "Count backwards by 8: 176, 168, 160, 152."
},

{
    id: "cie-043",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which child made no mistakes?",

    hint:
        "Read each child's sequence carefully. The correct one increases by exactly 8 every single time.",

    options: [
        "Ben: 104, 112, 120, 128",
        "Ava: 104, 110, 116, 122",
        "Sam: 104, 114, 124, 134",
        "Leo: 104, 108, 116, 124"
    ],

    correctAnswer: "Ben: 104, 112, 120, 128",

    explanation:
        "Ben adds 8 each time."
},

{
    id: "cie-044",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which number comes 8 after 184?",

    hint:
        "Move forward by one jump of 8 from 184 to find the next number in the pattern.",

    options: [
        "192",
        "190",
        "194",
        "196"
    ],

    correctAnswer: "192",

    explanation:
        "184 + 8 = 192."
},

{
    id: "cie-045",
    skillId: "count-in-eights",
    stage: "master",

    question: "A machine makes 8 toys every hour. How many toys after 10 hours?",

    hint:
        "There are 10 equal groups of 8 toys. Count in eights or think of 8 added together 10 times.",

    options: [
        "80",
        "72",
        "88",
        "96"
    ],

    correctAnswer: "80",

    explanation:
        "8 × 10 = 80, or count in eights ten times."
},

{
    id: "cie-046",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which sequence has a mistake?",

    hint:
        "Check every jump between numbers. The incorrect sequence has one jump that is not 8.",

    options: [
        "72, 80, 89, 96",
        "72, 80, 88, 96",
        "24, 32, 40, 48",
        "96, 104, 112, 120"
    ],

    correctAnswer: "72, 80, 89, 96",

    explanation:
        "After 80 should come 88, not 89."
},

{
    id: "cie-047",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which number comes after 192 when counting in eights?",

    hint:
        "Continue the counting pattern with one more jump of 8 from 192.",

    options: [
        "200",
        "198",
        "204",
        "208"
    ],

    correctAnswer: "200",

    explanation:
        "192 + 8 = 200."
},

{
    id: "cie-048",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which list is in the correct order when counting backwards in eights?",

    hint:
        "Every number should be exactly 8 less than the one before it. Check all the gaps, not just the first.",

    options: [
        "64, 56, 48, 40, 32",
        "64, 58, 52, 46, 40",
        "64, 60, 56, 52, 48",
        "64, 48, 32, 16, 0"
    ],

    correctAnswer: "64, 56, 48, 40, 32",

    explanation:
        "Subtract 8 each time."
},

{
    id: "cie-049",
    skillId: "count-in-eights",
    stage: "master",

    question: "What is the missing number? 200, □, 216",

    hint:
        "The missing number is one jump of 8 after 200 and one jump before 216.",

    options: [
        "208",
        "204",
        "212",
        "224"
    ],

    correctAnswer: "208",

    explanation:
        "200 + 8 = 208."
},

{
    id: "cie-050",
    skillId: "count-in-eights",
    stage: "master",

    question: "Which list shows counting in eights correctly?",

    hint:
        "Check that every neighbouring pair of numbers differs by exactly 8 all the way through the list.",

    options: [
        "24, 32, 40, 48, 56, 64",
        "24, 30, 36, 42, 48, 54",
        "24, 28, 32, 36, 40, 44",
        "24, 40, 56, 72, 88, 104"
    ],

    correctAnswer: "24, 32, 40, 48, 56, 64",

    explanation:
        "Each number is 8 more than the previous one."
},

]
};

export default countInEights;

export {
    countInEights
};