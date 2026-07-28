import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const countInHundreds: SkillContent = {
    skillId: "count-in-hundreds",

    title: "Count in Hundreds",

    description: "Count forwards and backwards in steps of 100.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "ch-001",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "What comes next? 0, 100, 200, ___",

    options: [
        "300",
        "250",
        "400",
        "350"
    ],

    correctAnswer: "300",

    explanation:
        "Count forwards in steps of 100."
},

{
    id: "ch-002",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "What comes next? 300, 400, 500, ___",

    options: [
        "600",
        "550",
        "700",
        "650"
    ],

    correctAnswer: "600",

    explanation:
        "Add 100 each time."
},

{
    id: "ch-003",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "Which number is missing? 100, 200, ___, 400",

    options: [
        "300",
        "250",
        "350",
        "500"
    ],

    correctAnswer: "300",

    explanation:
        "The sequence increases by 100."
},

{
    id: "ch-004",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "Which sequence counts in hundreds?",

    options: [
        "200, 300, 400, 500",
        "200, 250, 300, 350",
        "200, 400, 500, 600",
        "200, 320, 420, 520"
    ],

    correctAnswer: "200, 300, 400, 500",

    explanation:
        "Each number increases by exactly 100."
},

{
    id: "ch-005",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "What comes after 600 when counting in hundreds?",

    options: [
        "700",
        "650",
        "800",
        "750"
    ],

    correctAnswer: "700",

    explanation:
        "600 + 100 = 700."
},

{
    id: "ch-006",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "Which number comes before 500 when counting in hundreds?",

    options: [
        "400",
        "300",
        "450",
        "350"
    ],

    correctAnswer: "400",

    explanation:
        "500 − 100 = 400."
},

{
    id: "ch-007",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "Which number is missing? 500, ___, 700",

    options: [
        "600",
        "550",
        "650",
        "800"
    ],

    correctAnswer: "600",

    explanation:
        "Count forwards in hundreds."
},

{
    id: "ch-008",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "What comes next? 700, 800, ___",

    options: [
        "900",
        "850",
        "1000",
        "950"
    ],

    correctAnswer: "900",

    explanation:
        "Add another 100."
},

{
    id: "ch-009",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "Which child counted correctly?",

    options: [
        "100, 200, 300, 400",
        "100, 250, 350, 450",
        "100, 300, 400, 500",
        "100, 150, 250, 350"
    ],

    correctAnswer: "100, 200, 300, 400",

    explanation:
        "Each number increases by exactly 100."
},

{
    id: "ch-010",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "What comes next? 400, 500, 600, ___",

    options: [
        "700",
        "650",
        "800",
        "750"
    ],

    correctAnswer: "700",

    explanation:
        "Keep adding 100."
},

{
    id: "ch-011",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "Which number does NOT belong?",

    options: [
        "350",
        "100",
        "200",
        "300"
    ],

    correctAnswer: "350",

    explanation:
        "350 is not part of this sequence counting in hundreds."
},

{
    id: "ch-012",
    skillId: "count-in-hundreds",
    stage: "recognise",

    question: "What comes after 900?",

    options: [
        "1000",
        "950",
        "1100",
        "990"
    ],

    correctAnswer: "1000",

    explanation:
        "900 + 100 = 1000."
},

{
    id: "ch-013",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "What comes before 800 when counting backwards in hundreds?",

    options: [
        "700",
        "600",
        "750",
        "650"
    ],

    correctAnswer: "700",

    explanation:
        "Subtract 100."
},

{
    id: "ch-014",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "Which sequence counts backwards in hundreds?",

    options: [
        "900, 800, 700, 600",
        "900, 850, 750, 650",
        "900, 700, 600, 500",
        "900, 820, 720, 620"
    ],

    correctAnswer: "900, 800, 700, 600",

    explanation:
        "Each number decreases by exactly 100."
},

{
    id: "ch-015",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "Which number is missing? 1000, 900, ___, 700",

    options: [
        "800",
        "850",
        "750",
        "600"
    ],

    correctAnswer: "800",

    explanation:
        "Count backwards by 100 each time."
},
{
    id: "ch-016",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "What comes next? 200, 300, 400, ___",

    options: [
        "500",
        "450",
        "600",
        "550"
    ],

    correctAnswer: "500",

    explanation:
        "Keep adding 100."
},

{
    id: "ch-017",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "Which number is missing? 900, ___, 700",

    options: [
        "800",
        "850",
        "750",
        "600"
    ],

    correctAnswer: "800",

    explanation:
        "Count backwards by 100."
},

{
    id: "ch-018",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "Which sequence is correct?",

    options: [
        "300, 400, 500, 600",
        "300, 350, 450, 550",
        "300, 500, 600, 700",
        "300, 420, 520, 620"
    ],

    correctAnswer: "300, 400, 500, 600",

    explanation:
        "Each number increases by exactly 100."
},

{
    id: "ch-019",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "Which number comes before 1000?",

    options: [
        "900",
        "800",
        "950",
        "990"
    ],

    correctAnswer: "900",

    explanation:
        "1000 − 100 = 900."
},

{
    id: "ch-020",
    skillId: "count-in-hundreds",
    stage: "understand",

    question: "Which number does NOT belong?",

    options: [
        "650",
        "300",
        "400",
        "500"
    ],

    correctAnswer: "650",

    explanation:
        "650 is not part of a sequence counting in hundreds."
},

{
    id: "ch-021",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "A library receives books in boxes of 100. It has 500 books. After one more box, how many books will it have?",

    options: [
        "600",
        "550",
        "700",
        "650"
    ],

    correctAnswer: "600",

    explanation:
        "500 + 100 = 600."
},

{
    id: "ch-022",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "A museum welcomes 100 visitors every hour. It has welcomed 300 visitors so far. How many after the next hour?",

    options: [
        "400",
        "350",
        "500",
        "450"
    ],

    correctAnswer: "400",

    explanation:
        "Add another 100 visitors."
},

{
    id: "ch-023",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "A scoreboard shows: 600, 700, ___, 900",

    options: [
        "800",
        "750",
        "850",
        "1000"
    ],

    correctAnswer: "800",

    explanation:
        "The score increases by 100."
},

{
    id: "ch-024",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "Which child counted correctly?",

    options: [
        "400, 500, 600, 700",
        "400, 450, 550, 650",
        "400, 600, 700, 800",
        "400, 520, 620, 720"
    ],

    correctAnswer: "400, 500, 600, 700",

    explanation:
        "Each number increases by exactly 100."
},

{
    id: "ch-025",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "A lift stops every 100 floors. It is on floor 200. Where will it stop next?",

    options: [
        "300",
        "250",
        "400",
        "350"
    ],

    correctAnswer: "300",

    explanation:
        "200 + 100 = 300."
},

{
    id: "ch-026",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "Which number is missing? 800, 700, ___, 500",

    options: [
        "600",
        "650",
        "550",
        "400"
    ],

    correctAnswer: "600",

    explanation:
        "Count backwards by 100."
},

{
    id: "ch-027",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "Which sequence counts backwards correctly?",

    options: [
        "700, 600, 500, 400",
        "700, 650, 550, 450",
        "700, 500, 400, 300",
        "700, 620, 520, 420"
    ],

    correctAnswer: "700, 600, 500, 400",

    explanation:
        "Each number decreases by exactly 100."
},

{
    id: "ch-028",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "Two jumps of 100 start at 300. Where do you land?",

    options: [
        "500",
        "400",
        "600",
        "700"
    ],

    correctAnswer: "500",

    explanation:
        "300 → 400 → 500."
},

{
    id: "ch-029",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "Which number comes after 700?",

    options: [
        "800",
        "750",
        "900",
        "850"
    ],

    correctAnswer: "800",

    explanation:
        "700 + 100 = 800."
},

{
    id: "ch-030",
    skillId: "count-in-hundreds",
    stage: "apply",

    question: "Which number belongs in the gap? 100, 200, ___, 400",

    options: [
        "300",
        "250",
        "350",
        "500"
    ],

    correctAnswer: "300",

    explanation:
        "Count forwards by 100 each time."
},
{
    id: "ch-031",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which sequence counts in hundreds all the way through?",

    options: [
        "200, 300, 400, 500, 600",
        "200, 300, 450, 550, 650",
        "200, 400, 500, 600, 700",
        "200, 320, 420, 520, 620"
    ],

    correctAnswer: "200, 300, 400, 500, 600",

    explanation:
        "Each number increases by exactly 100."
},

{
    id: "ch-032",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number is missing? 1000, 900, ___, 700",

    options: [
        "800",
        "850",
        "750",
        "600"
    ],

    correctAnswer: "800",

    explanation:
        "Count backwards by 100."
},

{
    id: "ch-033",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which child counted correctly?",

    options: [
        "300, 400, 500, 600, 700",
        "300, 450, 550, 650, 750",
        "300, 500, 600, 700, 800",
        "300, 350, 450, 550, 650"
    ],

    correctAnswer: "300, 400, 500, 600, 700",

    explanation:
        "Each number increases by exactly 100."
},

{
    id: "ch-034",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number comes immediately before 600?",

    options: [
        "500",
        "400",
        "550",
        "650"
    ],

    correctAnswer: "500",

    explanation:
        "600 − 100 = 500."
},

{
    id: "ch-035",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number does NOT belong?",

    options: [
        "650",
        "300",
        "400",
        "500"
    ],

    correctAnswer: "650",

    explanation:
        "650 is not part of a sequence counting in hundreds."
},

{
    id: "ch-036",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "A stadium lets in 100 people every minute. It has welcomed 700 people. How many after one more minute?",

    options: [
        "800",
        "750",
        "900",
        "850"
    ],

    correctAnswer: "800",

    explanation:
        "Add another 100 people."
},

{
    id: "ch-037",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Complete the sequence: 100, 200, 300, ___, 500",

    options: [
        "400",
        "350",
        "450",
        "600"
    ],

    correctAnswer: "400",

    explanation:
        "Count forwards by 100."
},

{
    id: "ch-038",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which sequence counts backwards correctly?",

    options: [
        "900, 800, 700, 600",
        "900, 850, 750, 650",
        "900, 700, 600, 500",
        "900, 820, 720, 620"
    ],

    correctAnswer: "900, 800, 700, 600",

    explanation:
        "Each number decreases by exactly 100."
},

{
    id: "ch-039",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number comes after 900?",

    options: [
        "1000",
        "950",
        "1100",
        "990"
    ],

    correctAnswer: "1000",

    explanation:
        "900 + 100 = 1000."
},

{
    id: "ch-040",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which sequence has a mistake?",

    options: [
        "300, 400, 450, 600",
        "300, 400, 500, 600",
        "500, 600, 700, 800",
        "700, 800, 900, 1000"
    ],

    correctAnswer: "300, 400, 450, 600",

    explanation:
        "450 should be 500."
},

{
    id: "ch-041",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Three jumps of 100 start at 200. Where do you land?",

    options: [
        "500",
        "400",
        "600",
        "300"
    ],

    correctAnswer: "500",

    explanation:
        "200 → 300 → 400 → 500."
},

{
    id: "ch-042",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "A warehouse stores boxes in groups of 100. It has 400 boxes. After two more groups, how many boxes will there be?",

    options: [
        "600",
        "500",
        "700",
        "800"
    ],

    correctAnswer: "600",

    explanation:
        "400 + 100 + 100 = 600."
},

{
    id: "ch-043",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Complete the sequence: 900, 800, 700, ___",

    options: [
        "600",
        "500",
        "650",
        "750"
    ],

    correctAnswer: "600",

    explanation:
        "Count backwards by 100."
},

{
    id: "ch-044",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which sequence is in the correct order?",

    options: [
        "100, 200, 300, 400, 500",
        "100, 250, 350, 450, 550",
        "100, 300, 400, 500, 600",
        "100, 180, 280, 380, 480"
    ],

    correctAnswer: "100, 200, 300, 400, 500",

    explanation:
        "Each number increases by 100."
},

{
    id: "ch-045",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number belongs in the gap? 500, ___, 700",

    options: [
        "600",
        "550",
        "650",
        "800"
    ],

    correctAnswer: "600",

    explanation:
        "600 is between 500 and 700 when counting in hundreds."
},

{
    id: "ch-046",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number comes before 300?",

    options: [
        "200",
        "100",
        "250",
        "350"
    ],

    correctAnswer: "200",

    explanation:
        "Subtract 100."
},

{
    id: "ch-047",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "A balloon rises 100 metres each minute. It is at 500 metres. Where will it be after two more minutes?",

    options: [
        "700 metres",
        "600 metres",
        "800 metres",
        "900 metres"
    ],

    correctAnswer: "700 metres",

    explanation:
        "500 → 600 → 700."
},

{
    id: "ch-048",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number is missing? 400, ___, 600",

    options: [
        "500",
        "450",
        "550",
        "700"
    ],

    correctAnswer: "500",

    explanation:
        "400 + 100 = 500."
},

{
    id: "ch-049",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which number comes after 100?",

    options: [
        "200",
        "150",
        "300",
        "250"
    ],

    correctAnswer: "200",

    explanation:
        "100 + 100 = 200."
},

{
    id: "ch-050",
    skillId: "count-in-hundreds",
    stage: "master",

    question: "Which sequence is correct?",

    options: [
        "500, 600, 700, 800, 900",
        "500, 650, 750, 850, 950",
        "500, 700, 800, 900, 1000",
        "500, 550, 650, 750, 850"
    ],

    correctAnswer: "500, 600, 700, 800, 900",

    explanation:
        "Every number increases by exactly 100."
}
    ]
};