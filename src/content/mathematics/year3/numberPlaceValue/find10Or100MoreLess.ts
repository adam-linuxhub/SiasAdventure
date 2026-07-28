import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const find10Or100MoreLess: SkillContent = {
    skillId: "find-10-or-100-more-less",

    title: "Find 10 or 100 More or Less",

    description: "Find 10 more, 10 less, 100 more and 100 less than a number.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "f10100-001",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 10 more than 34?",

    options: [
        "44",
        "43",
        "54",
        "24"
    ],

    correctAnswer: "44",

    explanation:
        "Adding 10 increases the tens digit by 1."
},

{
    id: "f10100-002",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 10 less than 81?",

    options: [
        "71",
        "80",
        "91",
        "61"
    ],

    correctAnswer: "71",

    explanation:
        "Subtracting 10 decreases the tens digit by 1."
},

{
    id: "f10100-003",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 100 more than 245?",

    options: [
        "345",
        "255",
        "445",
        "145"
    ],

    correctAnswer: "345",

    explanation:
        "Adding 100 increases the hundreds digit by 1."
},

{
    id: "f10100-004",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 100 less than 678?",

    options: [
        "578",
        "668",
        "778",
        "568"
    ],

    correctAnswer: "578",

    explanation:
        "Subtracting 100 decreases the hundreds digit by 1."
},

{
    id: "f10100-005",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "Which number is 10 more than 156?",

    options: [
        "166",
        "165",
        "256",
        "146"
    ],

    correctAnswer: "166",

    explanation:
        "156 + 10 = 166."
},

{
    id: "f10100-006",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "Which number is 10 less than 203?",

    options: [
        "193",
        "201",
        "103",
        "213"
    ],

    correctAnswer: "193",

    explanation:
        "203 − 10 = 193."
},

{
    id: "f10100-007",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "Which number is 100 more than 509?",

    options: [
        "609",
        "519",
        "409",
        "709"
    ],

    correctAnswer: "609",

    explanation:
        "509 + 100 = 609."
},

{
    id: "f10100-008",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "Which number is 100 less than 420?",

    options: [
        "320",
        "410",
        "220",
        "520"
    ],

    correctAnswer: "320",

    explanation:
        "420 − 100 = 320."
},

{
    id: "f10100-009",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 10 more than 590?",

    options: [
        "600",
        "591",
        "690",
        "580"
    ],

    correctAnswer: "600",

    explanation:
        "590 + 10 = 600."
},

{
    id: "f10100-010",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 100 more than 800?",

    options: [
        "900",
        "810",
        "700",
        "1000"
    ],

    correctAnswer: "900",

    explanation:
        "800 + 100 = 900."
},

{
    id: "f10100-011",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 10 less than 470?",

    options: [
        "460",
        "360",
        "480",
        "469"
    ],

    correctAnswer: "460",

    explanation:
        "470 − 10 = 460."
},

{
    id: "f10100-012",
    skillId: "find-10-or-100-more-less",
    stage: "recognise",

    question: "What is 100 less than 901?",

    options: [
        "801",
        "891",
        "900",
        "701"
    ],

    correctAnswer: "801",

    explanation:
        "901 − 100 = 801."
},

{
    id: "f10100-013",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "Sam says 10 more than 438 is 448. Is Sam correct?",

    options: [
        "Yes",
        "No, it is 538",
        "No, it is 428",
        "No, it is 438"
    ],

    correctAnswer: "Yes",

    explanation:
        "438 + 10 = 448."
},

{
    id: "f10100-014",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "Ella says 100 less than 712 is 612. Is she correct?",

    options: [
        "Yes",
        "No, it is 702",
        "No, it is 812",
        "No, it is 602"
    ],

    correctAnswer: "Yes",

    explanation:
        "712 − 100 = 612."
},

{
    id: "f10100-015",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "Which calculation gives 365?",

    options: [
        "265 + 100",
        "355 + 10",
        "375 − 10",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "265 + 100 = 365, 355 + 10 = 365 and 375 − 10 = 365."
},
{
    id: "f10100-016",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "What is 10 more than 478?",

    options: [
        "488",
        "578",
        "468",
        "480"
    ],

    correctAnswer: "488",

    explanation:
        "Adding 10 changes the tens digit by 1."
},

{
    id: "f10100-017",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "What is 100 more than 639?",

    options: [
        "739",
        "649",
        "539",
        "729"
    ],

    correctAnswer: "739",

    explanation:
        "Adding 100 changes the hundreds digit by 1."
},

{
    id: "f10100-018",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "Which number is 10 less than 352?",

    options: [
        "342",
        "252",
        "362",
        "351"
    ],

    correctAnswer: "342",

    explanation:
        "352 − 10 = 342."
},

{
    id: "f10100-019",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "Which number is 100 less than 864?",

    options: [
        "764",
        "854",
        "964",
        "774"
    ],

    correctAnswer: "764",

    explanation:
        "864 − 100 = 764."
},

{
    id: "f10100-020",
    skillId: "find-10-or-100-more-less",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Ben: 10 more than 295 is 305.",
        "Ella: 10 more than 295 is 296.",
        "Sam: 10 more than 295 is 395.",
        "Leo: 10 more than 295 is 285."
    ],

    correctAnswer: "Ben: 10 more than 295 is 305.",

    explanation:
        "Adding 10 to 295 gives 305."
},

{
    id: "f10100-021",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "A library has 324 books. It receives 100 more books. How many books does it have now?",

    options: [
        "424",
        "334",
        "224",
        "524"
    ],

    correctAnswer: "424",

    explanation:
        "324 + 100 = 424."
},

{
    id: "f10100-022",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "A shop has 487 apples. It sells 10 apples. How many are left?",

    options: [
        "477",
        "387",
        "497",
        "478"
    ],

    correctAnswer: "477",

    explanation:
        "487 − 10 = 477."
},

{
    id: "f10100-023",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "A farmer has 615 sheep. Another 100 sheep arrive. How many sheep are there now?",

    options: [
        "715",
        "625",
        "515",
        "815"
    ],

    correctAnswer: "715",

    explanation:
        "615 + 100 = 715."
},

{
    id: "f10100-024",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "A train has travelled 540 miles. It travels 10 more miles. How far has it travelled?",

    options: [
        "550",
        "640",
        "530",
        "545"
    ],

    correctAnswer: "550",

    explanation:
        "540 + 10 = 550."
},

{
    id: "f10100-025",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "Which calculation equals 680?",

    options: [
        "580 + 100",
        "690 − 10",
        "670 + 10",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "580 + 100, 690 − 10 and 670 + 10 all equal 680."
},

{
    id: "f10100-026",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "Which number is both 100 more than 238 and 10 less than 348?",

    options: [
        "338",
        "248",
        "348",
        "228"
    ],

    correctAnswer: "338",

    explanation:
        "238 + 100 = 338 and 348 − 10 = 338."
},

{
    id: "f10100-027",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "A school has 702 pupils. Ten pupils move away. How many pupils are left?",

    options: [
        "692",
        "602",
        "712",
        "700"
    ],

    correctAnswer: "692",

    explanation:
        "702 − 10 = 692."
},

{
    id: "f10100-028",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "Which number is missing? 416, 426, □",

    options: [
        "436",
        "516",
        "416",
        "446"
    ],

    correctAnswer: "436",

    explanation:
        "Each number is 10 more than the one before."
},

{
    id: "f10100-029",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "Which number is missing? 320, 420, □",

    options: [
        "520",
        "430",
        "330",
        "620"
    ],

    correctAnswer: "520",

    explanation:
        "Each number is 100 more than the one before."
},

{
    id: "f10100-030",
    skillId: "find-10-or-100-more-less",
    stage: "apply",

    question: "Which child solved the question correctly? '100 less than 905'",

    options: [
        "Ella: 805",
        "Ben: 895",
        "Sam: 915",
        "Leo: 705"
    ],

    correctAnswer: "Ella: 805",

    explanation:
        "905 − 100 = 805."
},
{
    id: "f10100-031",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "What is 10 more than 689?",

    options: [
        "699",
        "789",
        "679",
        "690"
    ],

    correctAnswer: "699",

    explanation:
        "689 + 10 = 699."
},

{
    id: "f10100-032",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "What is 100 less than 950?",

    options: [
        "850",
        "940",
        "900",
        "840"
    ],

    correctAnswer: "850",

    explanation:
        "950 − 100 = 850."
},

{
    id: "f10100-033",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which calculation equals 512?",

    options: [
        "412 + 100",
        "522 − 10",
        "502 + 10",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "412 + 100 = 512, 522 − 10 = 512 and 502 + 10 = 512."
},

{
    id: "f10100-034",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Sam: 100 more than 481 is 581.",
        "Ella: 100 more than 481 is 491.",
        "Leo: 100 more than 481 is 381.",
        "Ben: 100 more than 481 is 5810."
    ],

    correctAnswer: "Sam: 100 more than 481 is 581.",

    explanation:
        "Adding 100 changes the hundreds digit from 4 to 5."
},

{
    id: "f10100-035",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which number is both 10 more than 790 and 100 less than 900?",

    options: [
        "800",
        "890",
        "700",
        "810"
    ],

    correctAnswer: "800",

    explanation:
        "790 + 10 = 800 and 900 − 100 = 800."
},

{
    id: "f10100-036",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "A museum has 635 visitors. Another 100 visitors arrive. How many visitors are there now?",

    options: [
        "735",
        "645",
        "535",
        "835"
    ],

    correctAnswer: "735",

    explanation:
        "635 + 100 = 735."
},

{
    id: "f10100-037",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "A shop has 812 toys. It sells 10 toys. How many toys are left?",

    options: [
        "802",
        "712",
        "822",
        "810"
    ],

    correctAnswer: "802",

    explanation:
        "812 − 10 = 802."
},

{
    id: "f10100-038",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which number does NOT belong?",

    options: [
        "545",
        "535",
        "555",
        "565"
    ],

    correctAnswer: "545",

    explanation:
        "535, 555 and 565 are each 10 apart. 545 does not fit that pattern."
},

{
    id: "f10100-039",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Complete the pattern: 218, 228, 238, □",

    options: [
        "248",
        "338",
        "240",
        "258"
    ],

    correctAnswer: "248",

    explanation:
        "Each number is 10 more than the previous one."
},

{
    id: "f10100-040",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Complete the pattern: 605, 705, 805, □",

    options: [
        "905",
        "815",
        "705",
        "1005"
    ],

    correctAnswer: "905",

    explanation:
        "Each number is 100 more than the previous one."
},

{
    id: "f10100-041",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "A stadium has 460 people inside. Another 100 people enter. Then 10 people leave. How many people are inside now?",

    options: [
        "550",
        "570",
        "560",
        "450"
    ],

    correctAnswer: "550",

    explanation:
        "460 + 100 = 560, then 560 − 10 = 550."
},

{
    id: "f10100-042",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "10 more than 999 is 1009.",
        "100 more than 999 is 1000.",
        "10 less than 999 is 899.",
        "100 less than 999 is 989."
    ],

    correctAnswer: "10 more than 999 is 1009.",

    explanation:
        "999 + 10 = 1009."
},

{
    id: "f10100-043",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which child made no mistakes?",

    options: [
        "Ben: 250 → 260 → 360",
        "Ella: 250 → 350 → 450",
        "Sam: 250 → 255 → 355",
        "Leo: 250 → 340 → 350"
    ],

    correctAnswer: "Ella: 250 → 350 → 450",

    explanation:
        "Ella correctly adds 100 each time."
},

{
    id: "f10100-044",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which number is 100 less than 1,000?",

    options: [
        "900",
        "990",
        "999",
        "800"
    ],

    correctAnswer: "900",

    explanation:
        "1,000 − 100 = 900."
},

{
    id: "f10100-045",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "A warehouse stores 905 boxes. It receives 10 more boxes. How many boxes are there now?",

    options: [
        "915",
        "1005",
        "895",
        "905"
    ],

    correctAnswer: "915",

    explanation:
        "905 + 10 = 915."
},

{
    id: "f10100-046",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which calculation is wrong?",

    options: [
        "725 + 10 = 740",
        "725 + 100 = 825",
        "725 − 10 = 715",
        "725 − 100 = 625"
    ],

    correctAnswer: "725 + 10 = 740",

    explanation:
        "725 + 10 = 735, not 740."
},

{
    id: "f10100-047",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which number is 10 less than 600?",

    options: [
        "590",
        "500",
        "610",
        "599"
    ],

    correctAnswer: "590",

    explanation:
        "600 − 10 = 590."
},

{
    id: "f10100-048",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which list shows adding 100 each time?",

    options: [
        "230, 330, 430, 530",
        "230, 240, 250, 260",
        "230, 320, 410, 500",
        "230, 430, 630, 830"
    ],

    correctAnswer: "230, 330, 430, 530",

    explanation:
        "Each number is exactly 100 more than the previous one."
},

{
    id: "f10100-049",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "What is missing? 860, 870, □, 890",

    options: [
        "880",
        "900",
        "970",
        "875"
    ],

    correctAnswer: "880",

    explanation:
        "Each step adds 10."
},

{
    id: "f10100-050",
    skillId: "find-10-or-100-more-less",
    stage: "master",

    question: "Which statement is correct?",

    options: [
        "100 less than 408 is 308.",
        "10 less than 408 is 298.",
        "100 more than 408 is 418.",
        "10 more than 408 is 508."
    ],

    correctAnswer: "100 less than 408 is 308.",

    explanation:
        "408 − 100 = 308."
},

    ]
};
