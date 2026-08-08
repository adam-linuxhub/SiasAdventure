import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const countInFifties: SkillContent = {
    skillId: "count-in-fifties",

    title: "Count in 50s",

    description: "Count forwards and backwards in steps of 50.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "cf-001",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "What comes next? 0, 50, 100, 150, ___",

            hint:
                "Look at how much the number increases each time. Keep the same jump after 150.",

            options: [
                "200",
                "180",
                "250",
                "210"
            ],

            correctAnswer: "200",

            explanation:
                "Count forwards in steps of 50."
        },

        {
            id: "cf-002",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "What comes next? 100, 150, 200, ___",

            hint:
                "The pattern always increases by the same amount. Add one more step of 50.",

            options: [
                "250",
                "240",
                "300",
                "225"
            ],

            correctAnswer: "250",

            explanation:
                "Add 50 each time."
        },

        {
            id: "cf-003",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "Which number is missing? 50, 100, ___, 200",

            hint:
                "The missing number should be halfway between 100 and 200 if each jump is 50.",

            options: [
                "150",
                "125",
                "250",
                "175"
            ],

            correctAnswer: "150",

            explanation:
                "The sequence increases by 50."
        },

        {
            id: "cf-004",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "Which sequence counts in 50s?",

            hint:
                "Check the gap between every pair of numbers. Only one sequence keeps the gap at exactly 50 all the way through.",

            options: [
                "200, 250, 300, 350",
                "200, 240, 280, 320",
                "200, 225, 250, 275",
                "200, 260, 320, 380"
            ],

            correctAnswer: "200, 250, 300, 350",

            explanation:
                "Each number increases by exactly 50."
        },

        {
            id: "cf-005",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "What comes after 350 when counting in 50s?",

            hint:
                "Move forward by one step in the counting pattern. One step is worth 50.",

            options: [
                "400",
                "390",
                "450",
                "360"
            ],

            correctAnswer: "400",

            explanation:
                "350 + 50 = 400."
        },

        {
            id: "cf-006",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "Which number comes before 250 when counting in 50s?",

            hint:
                "To find the previous number in the pattern, take away one jump of 50.",

            options: [
                "200",
                "150",
                "240",
                "210"
            ],

            correctAnswer: "200",

            explanation:
                "250 − 50 = 200."
        },

        {
            id: "cf-007",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "Which number is missing? 300, ___, 400",

            hint:
                "The missing number sits exactly one step of 50 after 300 and one step before 400.",

            options: [
                "350",
                "325",
                "375",
                "450"
            ],

            correctAnswer: "350",

            explanation:
                "Count in steps of 50."
        },

        {
            id: "cf-008",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "What comes next? 450, 500, ___",

            hint:
                "Keep following the same counting pattern with another increase of 50.",

            options: [
                "550",
                "600",
                "525",
                "540"
            ],

            correctAnswer: "550",

            explanation:
                "Add another 50."
        },

        {
            id: "cf-009",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "Which child counted correctly?",

            hint:
                "Read each list carefully and compare every jump. Only one adds exactly 50 every time.",

            options: [
                "100, 150, 200, 250",
                "100, 140, 190, 240",
                "100, 160, 220, 280",
                "100, 125, 175, 225"
            ],

            correctAnswer: "100, 150, 200, 250",

            explanation:
                "Each number increases by exactly 50."
        },

        {
            id: "cf-010",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "What comes next? 600, 650, 700, ___",

            hint:
                "The pattern doesn't change. Add one more group of 50 to the last number.",

            options: [
                "750",
                "720",
                "800",
                "740"
            ],

            correctAnswer: "750",

            explanation:
                "Keep adding 50."
        },

        {
            id: "cf-011",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "Which number does NOT belong?",

            hint:
                "Three numbers fit a count in fifties starting from 50. Find the odd one that breaks the pattern.",

            options: [
                "175",
                "50",
                "100",
                "150"
            ],

            correctAnswer: "175",

            explanation:
                "175 is not part of this counting-in-50s sequence."
        },

        {
            id: "cf-012",
            skillId: "count-in-fifties",
            stage: "recognise",

            question: "What comes after 750?",

            hint:
                "Continue the counting pattern with one more jump of 50.",

            options: [
                "800",
                "850",
                "780",
                "790"
            ],

            correctAnswer: "800",

            explanation:
                "750 + 50 = 800."
        },

        {
            id: "cf-013",
            skillId: "count-in-fifties",
            stage: "understand",

            question: "What comes before 500 when counting backwards in 50s?",

            hint:
                "Counting backwards means subtracting 50 each time instead of adding it.",

            options: [
                "450",
                "400",
                "480",
                "425"
            ],

            correctAnswer: "450",

            explanation:
                "Subtract 50."
        },

        {
            id: "cf-014",
            skillId: "count-in-fifties",
            stage: "understand",

            question: "Which sequence counts backwards in 50s?",

            hint:
                "Check whether each number is exactly 50 less than the one before it. One incorrect jump makes the sequence wrong.",

            options: [
                "400, 350, 300, 250",
                "400, 360, 320, 280",
                "400, 375, 350, 325",
                "400, 300, 250, 150"
            ],

            correctAnswer: "400, 350, 300, 250",

            explanation:
                "Each number decreases by exactly 50."
        },

        {
            id: "cf-015",
            skillId: "count-in-fifties",
            stage: "understand",

            question: "Which number is missing? 650, 600, ___, 500",

            hint:
                "The numbers are decreasing evenly. Keep subtracting 50 to find the missing value.",

            options: [
                "550",
                "575",
                "540",
                "525"
            ],

            correctAnswer: "550",

            explanation:
                "Count backwards by 50 each time."
        },

        {
            id: "cf-016",
            skillId: "count-in-fifties",
            stage: "understand",

            question: "What comes next? 250, 300, 350, ___",

            hint:
                "Notice the constant increase. Continue with one more jump of 50.",

            options: [
                "400",
                "375",
                "450",
                "390"
            ],

            correctAnswer: "400",

            explanation:
                "Keep adding 50."
        },

        {
            id: "cf-017",
            skillId: "count-in-fifties",
            stage: "understand",

            question: "Which number is missing? 900, ___, 800",

            hint:
                "The missing number should be one step of 50 below 900 and one step above 800.",

            options: [
                "850",
                "875",
                "840",
                "750"
            ],

            correctAnswer: "850",

            explanation:
                "Count backwards by 50."
        },

        {
            id: "cf-018",
            skillId: "count-in-fifties",
            stage: "understand",

            question: "Which sequence is correct?",

            hint:
                "Look at every gap between neighbouring numbers. The correct list keeps the gap at 50 throughout.",

            options: [
                "150, 200, 250, 300",
                "150, 210, 260, 310",
                "150, 175, 225, 275",
                "150, 190, 240, 290"
            ],

            correctAnswer: "150, 200, 250, 300",

            explanation:
                "Each number increases by exactly 50."
        },

        {
            id: "cf-019",
            skillId: "count-in-fifties",
            stage: "understand",

            question: "Which number comes before 950?",

            hint:
                "Find the previous number by moving back one step in the count-by-50 pattern.",

            options: [
                "900",
                "850",
                "925",
                "940"
            ],

            correctAnswer: "900",

            explanation:
                "950 − 50 = 900."
        },
{
    id: "cf-020",
    skillId: "count-in-fifties",
    stage: "understand",

    question: "Which number does NOT belong?",

    hint:
        "Three numbers fit a pattern of counting in 50s. Find the one that cannot be reached using jumps of 50.",

    options: [
        "425",
        "250",
        "300",
        "350"
    ],

    correctAnswer: "425",

    explanation:
        "425 is not part of a sequence counting in 50s."
},

{
    id: "cf-021",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "A shop sells gift cards in $50 amounts. Which amount comes after $200?",

    hint:
        "Each gift card increases the total by one fixed amount. Add one more $50 to $200.",

    options: [
        "$250",
        "$225",
        "$300",
        "$240"
    ],

    correctAnswer: "$250",

    explanation:
        "Add another $50."
},

{
    id: "cf-022",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "A bus travels 50 miles each hour. It has travelled 100, 150, 200... How far after the next hour?",

    hint:
        "The distance grows by the same amount every hour. Continue the pattern with one more 50-mile increase.",

    options: [
        "250 miles",
        "240 miles",
        "300 miles",
        "225 miles"
    ],

    correctAnswer: "250 miles",

    explanation:
        "The distance increases by 50 miles each hour."
},

{
    id: "cf-023",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "A library receives books in boxes of 50. It has 300 books. After one more box, how many books will it have?",

    hint:
        "One box adds exactly 50 books. Add a single box to the current total.",

    options: [
        "350",
        "325",
        "400",
        "330"
    ],

    correctAnswer: "350",

    explanation:
        "300 + 50 = 350."
},

{
    id: "cf-024",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "A scoreboard shows: 450, 500, ___, 600",

    hint:
        "The numbers increase by equal steps. The missing score should be 50 after 500 and 50 before 600.",

    options: [
        "550",
        "525",
        "650",
        "540"
    ],

    correctAnswer: "550",

    explanation:
        "The score increases by 50."
},

{
    id: "cf-025",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "Which child counted correctly?",

    hint:
        "Compare each jump carefully. Only one list increases by exactly 50 every time.",

    options: [
        "500, 550, 600, 650",
        "500, 540, 590, 640",
        "500, 560, 620, 680",
        "500, 525, 575, 625"
    ],

    correctAnswer: "500, 550, 600, 650",

    explanation:
        "Each number increases by 50."
},

{
    id: "cf-026",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "A lift stops every 50 feet. It has reached 350 feet. Where will it stop next?",

    hint:
        "The lift always moves the same distance between stops. Add one more 50-foot step.",

    options: [
        "400 feet",
        "375 feet",
        "450 feet",
        "390 feet"
    ],

    correctAnswer: "400 feet",

    explanation:
        "350 + 50 = 400."
},

{
    id: "cf-027",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "Which number is missing? 700, 650, ___, 550",

    hint:
        "The sequence is counting backwards. Keep subtracting 50 to find the missing number.",

    options: [
        "600",
        "625",
        "580",
        "500"
    ],

    correctAnswer: "600",

    explanation:
        "Count backwards by 50."
},

{
    id: "cf-028",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "Which sequence counts backwards correctly?",

    hint:
        "Each number should be exactly 50 less than the one before it. Check every step, not just the first.",

    options: [
        "450, 400, 350, 300",
        "450, 410, 370, 330",
        "450, 425, 375, 325",
        "450, 350, 300, 200"
    ],

    correctAnswer: "450, 400, 350, 300",

    explanation:
        "Each number decreases by 50."
},

{
    id: "cf-029",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "Which number comes after 850?",

    hint:
        "Move forward one place in the count-by-50 pattern from 850.",

    options: [
        "900",
        "890",
        "950",
        "875"
    ],

    correctAnswer: "900",

    explanation:
        "850 + 50 = 900."
},

{
    id: "cf-030",
    skillId: "count-in-fifties",
    stage: "apply",

    question: "Which number belongs in the gap? 150, 200, ___, 300",

    hint:
        "The missing number should keep the pattern of adding 50 between every pair of numbers.",

    options: [
        "250",
        "240",
        "260",
        "225"
    ],

    correctAnswer: "250",

    explanation:
        "Count forwards by 50 each time."
},

{
    id: "cf-031",
    skillId: "count-in-fifties",
    stage: "master",

    question: "Which sequence counts in 50s all the way through?",

    hint:
        "Check every gap in each sequence. One wrong jump means it is no longer counting in 50s.",

    options: [
        "350, 400, 450, 500, 550",
        "350, 400, 440, 490, 540",
        "350, 390, 440, 490, 540",
        "350, 450, 500, 600, 650"
    ],

    correctAnswer: "350, 400, 450, 500, 550",

    explanation:
        "Every number increases by exactly 50."
},

{
    id: "cf-032",
    skillId: "count-in-fifties",
    stage: "master",

    question: "Which number is missing? 1000, 950, ___, 850",

    hint:
        "Keep moving backwards by equal steps of 50. The missing number sits between 950 and 850.",

    options: [
        "900",
        "925",
        "800",
        "875"
    ],

    correctAnswer: "900",

    explanation:
        "Count backwards by 50."
},

{
    id: "cf-033",
    skillId: "count-in-fifties",
    stage: "master",

    question: "Which child counted correctly?",

    hint:
        "Look at every increase in each list. Only one sequence keeps adding exactly 50 from start to finish.",

    options: [
        "250, 300, 350, 400, 450",
        "250, 290, 340, 390, 440",
        "250, 325, 375, 425, 475",
        "250, 350, 400, 500, 550"
    ],

    correctAnswer: "250, 300, 350, 400, 450",

    explanation:
        "Each number increases by exactly 50."
},

{
    id: "cf-034",
    skillId: "count-in-fifties",
    stage: "master",

    question: "Which number comes immediately before 700?",

    hint:
        "The previous number in a count-by-50 pattern is found by taking away one step of 50.",

    options: [
        "650",
        "600",
        "675",
        "750"
    ],

    correctAnswer: "650",

    explanation:
        "700 − 50 = 650."
},

{
id: "cf-035",
skillId: "count-in-fifties",
stage: "master",

hint: "Only numbers that fit a pattern of adding or subtracting exactly 50 belong. Test each option against that rule.",

question: "Which number does NOT belong?",

options: [
    "575",
    "450",
    "500",
    "550"
],

correctAnswer: "575",

explanation:
    "575 is not part of a sequence counting in 50s."
},

{
id: "cf-036",
skillId: "count-in-fifties",
stage: "master",

hint: "One minute means one more group enters. Don't overthink it—add a single group of 50.",

question: "A stadium lets in 50 people every minute. It has welcomed 600 people. How many after one more minute?",

options: [
    "650",
    "700",
    "625",
    "640"
],

correctAnswer: "650",

explanation:
    "Add another 50 people."
},

{
id: "cf-037",
skillId: "count-in-fifties",
stage: "master",

hint: "Each number is the previous one plus the same amount. Find that increase before filling the blank.",

question: "Complete the sequence: 150, 200, 250, ___, 350",

options: [
    "300",
    "275",
    "320",
    "400"
],

correctAnswer: "300",

explanation:
    "Count forwards by 50."
},

{
id: "cf-038",
skillId: "count-in-fifties",
stage: "master",

hint: "A correct backwards sequence loses exactly 50 every time. Check every gap, not just the first one.",

question: "Which sequence counts backwards correctly?",

options: [
    "800, 750, 700, 650",
    "800, 760, 720, 680",
    "800, 775, 725, 675",
    "800, 700, 650, 550"
],

correctAnswer: "800, 750, 700, 650",

explanation:
    "Each number decreases by exactly 50."
},

{
id: "cf-039",
skillId: "count-in-fifties",
stage: "master",

hint: "Move forward one place in the counting-by-50 pattern. Reaching the next thousand is expected here.",

question: "Which number comes after 950?",

options: [
    "1000",
    "975",
    "1050",
    "990"
],

correctAnswer: "1000",

explanation:
    "950 + 50 = 1000."
},

{
id: "cf-040",
skillId: "count-in-fifties",
stage: "master",

hint: "Read each sequence one jump at a time. One of them sneaks in a number that isn't 50 away from the previous one.",

question: "Which sequence has a mistake?",

options: [
    "300, 350, 390, 450",
    "300, 350, 400, 450",
    "500, 550, 600, 650",
    "650, 700, 750, 800"
],

correctAnswer: "300, 350, 390, 450",

explanation:
    "390 should be 400."
},

{
id: "cf-041",
skillId: "count-in-fifties",
stage: "master",

hint: "Each stop is one jump of 50 feet. Count two equal jumps from the current floor.",

question: "A lift stops every 50 feet. It stops at 450 feet. Where will it stop two stops later?",

options: [
    "550 feet",
    "500 feet",
    "600 feet",
    "525 feet"
],

correctAnswer: "550 feet",

explanation:
    "450 → 500 → 550."
},

{
id: "cf-042",
skillId: "count-in-fifties",
stage: "master",

hint: "Halfway means the distance to 300 and the distance to 400 are exactly the same.",

question: "Which number is halfway between 300 and 400?",

options: [
    "350",
    "325",
    "375",
    "340"
],

correctAnswer: "350",

explanation:
    "350 is exactly halfway between 300 and 400."
},

{
id: "cf-043",
skillId: "count-in-fifties",
stage: "master",

hint: "The pattern is moving backwards. Continue by making one more subtraction of 50.",

question: "Complete the sequence: 900, 850, 800, ___",

options: [
    "750",
    "700",
    "775",
    "780"
],

correctAnswer: "750",

explanation:
    "Count backwards by 50."
},

{
id: "cf-044",
skillId: "count-in-fifties",
stage: "master",

hint: "Ignore how long the sequence is and focus on the difference between neighbouring numbers.",

question: "Which sequence is in the correct order?",

options: [
    "50, 100, 150, 200, 250",
    "50, 90, 140, 190, 240",
    "50, 75, 125, 175, 225",
    "50, 110, 160, 210, 260"
],

correctAnswer: "50, 100, 150, 200, 250",

explanation:
    "Each number increases by 50."
},

{
id: "cf-045",
skillId: "count-in-fifties",
stage: "master",

hint: "There is room for exactly one number between 500 and 600 when counting in steps of 50.",

question: "Which number belongs in the gap? 500, ___, 600",

options: [
    "550",
    "525",
    "650",
    "575"
],

correctAnswer: "550",

explanation:
    "550 is halfway between 500 and 600 when counting in 50s."
},

{
id: "cf-046",
skillId: "count-in-fifties",
stage: "master",

hint: "The word 'before' tells you to move backwards one place in the counting pattern.",

question: "Which number comes before 150?",

options: [
    "100",
    "50",
    "125",
    "140"
],

correctAnswer: "100",

explanation:
    "Subtract 50."
},

{
id: "cf-047",
skillId: "count-in-fifties",
stage: "master",

hint: "The runner adds the same distance each time. Extend the pattern by one identical increase.",

question: "A runner reaches 200 metres, then 250 metres, then 300 metres. What distance comes next?",

options: [
    "350 metres",
    "325 metres",
    "400 metres",
    "360 metres"
],

correctAnswer: "350 metres",

explanation:
    "The distance increases by 50 metres each time."
},

{
id: "cf-048",
skillId: "count-in-fifties",
stage: "master",

hint: "The missing number should be exactly halfway because it is one equal counting step from both neighbours.",

question: "Which number is missing? 450, ___, 550",

options: [
    "500",
    "475",
    "525",
    "600"
],

correctAnswer: "500",

explanation:
    "450 + 50 = 500."
},

{
id: "cf-049",
skillId: "count-in-fifties",
stage: "master",

hint: "Think of the next multiple in a sequence that increases by 50 each turn.",

question: "Which number comes after 400?",

options: [
    "450",
    "425",
    "500",
    "440"
],

correctAnswer: "450",

explanation:
    "400 + 50 = 450."
},

{
id: "cf-050",
skillId: "count-in-fifties",
stage: "master",

hint: "A correct counting pattern never changes its step size. Check every jump from one number to the next.",

question: "Which sequence is correct?",

options: [
    "650, 700, 750, 800, 850",
    "650, 690, 740, 790, 840",
    "650, 725, 775, 825, 875",
    "650, 750, 800, 900, 950"
],

correctAnswer: "650, 700, 750, 800, 850",

explanation:
    "Every number increases by exactly 50."
}

]
};

export default countInFifties;

export {
    countInFifties
};