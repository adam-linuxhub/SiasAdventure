import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const addAndSubtractThreeDigitNumbers: SkillContent = {
    skillId: "add-and-subtract-three-digit-numbers",

    title: "Add and Subtract Three-Digit Numbers",

    description: "Add and subtract three-digit numbers mentally.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "astdn-001",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 245 + 30?",

    options: [
        "275",
        "255",
        "285",
        "215"
    ],

    correctAnswer: "275",

    explanation:
        "Adding 30 means adding 3 tens. 245 + 30 = 275."
},

{
    id: "astdn-002",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 486 - 20?",

    options: [
        "466",
        "476",
        "386",
        "406"
    ],

    correctAnswer: "466",

    explanation:
        "Subtracting 20 means taking away 2 tens."
},

{
    id: "astdn-003",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 321 + 100?",

    options: [
        "421",
        "331",
        "221",
        "431"
    ],

    correctAnswer: "421",

    explanation:
        "Adding 100 increases the hundreds digit by 1."
},

{
    id: "astdn-004",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 754 - 100?",

    options: [
        "654",
        "744",
        "554",
        "664"
    ],

    correctAnswer: "654",

    explanation:
        "Subtracting 100 decreases the hundreds digit by 1."
},

{
    id: "astdn-005",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 630 + 40?",

    options: [
        "670",
        "640",
        "730",
        "660"
    ],

    correctAnswer: "670",

    explanation:
        "630 + 40 = 670."
},

{
    id: "astdn-006",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 590 - 50?",

    options: [
        "540",
        "550",
        "490",
        "530"
    ],

    correctAnswer: "540",

    explanation:
        "590 − 50 = 540."
},

{
    id: "astdn-007",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 418 + 60?",

    options: [
        "478",
        "468",
        "518",
        "458"
    ],

    correctAnswer: "478",

    explanation:
        "418 + 60 = 478."
},

{
    id: "astdn-008",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 862 - 40?",

    options: [
        "822",
        "842",
        "812",
        "802"
    ],

    correctAnswer: "822",

    explanation:
        "862 − 40 = 822."
},

{
    id: "astdn-009",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "Which calculation equals 570?",

    options: [
        "520 + 50",
        "580 - 20",
        "470 + 100",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation gives 570."
},

{
    id: "astdn-010",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 700 + 200?",

    options: [
        "900",
        "800",
        "1,000",
        "720"
    ],

    correctAnswer: "900",

    explanation:
        "700 + 200 = 900."
},

{
    id: "astdn-011",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 905 - 300?",

    options: [
        "605",
        "705",
        "805",
        "905"
    ],

    correctAnswer: "605",

    explanation:
        "905 − 300 = 605."
},

{
    id: "astdn-012",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "recognise",

    question: "What is 276 + 20?",

    options: [
        "296",
        "286",
        "306",
        "256"
    ],

    correctAnswer: "296",

    explanation:
        "276 + 20 = 296."
},

{
    id: "astdn-013",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "Ella says 462 + 30 = 492. Is she correct?",

    options: [
        "Yes",
        "No, it is 482.",
        "No, it is 472.",
        "No, it is 502."
    ],

    correctAnswer: "Yes",

    explanation:
        "Adding 30 to 462 gives 492."
},

{
    id: "astdn-014",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "Ben says 810 - 100 = 710. Is he correct?",

    options: [
        "Yes",
        "No, it is 800.",
        "No, it is 610.",
        "No, it is 720."
    ],

    correctAnswer: "Yes",

    explanation:
        "810 − 100 = 710."
},

{
    id: "astdn-015",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "Which calculation equals 645?",

    options: [
        "615 + 30",
        "665 - 20",
        "545 + 100",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "615 + 30, 665 − 20 and 545 + 100 all equal 645."
},
{
    id: "astdn-016",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "What is 348 + 40?",

    options: [
        "388",
        "358",
        "448",
        "378"
    ],

    correctAnswer: "388",

    explanation:
        "348 + 40 = 388."
},

{
    id: "astdn-017",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "What is 725 - 50?",

    options: [
        "675",
        "685",
        "775",
        "625"
    ],

    correctAnswer: "675",

    explanation:
        "725 − 50 = 675."
},

{
    id: "astdn-018",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "What is 439 + 200?",

    options: [
        "639",
        "459",
        "539",
        "649"
    ],

    correctAnswer: "639",

    explanation:
        "Adding 200 increases the hundreds by 2."
},

{
    id: "astdn-019",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "What is 981 - 300?",

    options: [
        "681",
        "781",
        "971",
        "581"
    ],

    correctAnswer: "681",

    explanation:
        "981 − 300 = 681."
},

{
    id: "astdn-020",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Ella: 514 + 20 = 534",
        "Ben: 514 + 20 = 524",
        "Sam: 514 + 20 = 614",
        "Leo: 514 + 20 = 544"
    ],

    correctAnswer: "Ella: 514 + 20 = 534",

    explanation:
        "Adding 20 means adding 2 tens."
},

{
    id: "astdn-021",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "A library has 462 books. It buys 100 more books. How many books does it have now?",

    options: [
        "562",
        "472",
        "462",
        "662"
    ],

    correctAnswer: "562",

    explanation:
        "462 + 100 = 562."
},

{
    id: "astdn-022",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "A shop has 785 toys. It sells 30 toys. How many toys are left?",

    options: [
        "755",
        "775",
        "715",
        "765"
    ],

    correctAnswer: "755",

    explanation:
        "785 − 30 = 755."
},

{
    id: "astdn-023",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "A farmer has 318 sheep. Another 200 sheep arrive. How many sheep does the farmer have now?",

    options: [
        "518",
        "418",
        "338",
        "618"
    ],

    correctAnswer: "518",

    explanation:
        "318 + 200 = 518."
},

{
    id: "astdn-024",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "A school has 940 pupils. One hundred pupils move away. How many pupils remain?",

    options: [
        "840",
        "930",
        "940",
        "740"
    ],

    correctAnswer: "840",

    explanation:
        "940 − 100 = 840."
},

{
    id: "astdn-025",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "Which calculation equals 720?",

    options: [
        "620 + 100",
        "750 - 30",
        "700 + 20",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation gives 720."
},

{
    id: "astdn-026",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "Which number is both 100 more than 485 and 20 less than 605?",

    options: [
        "585",
        "505",
        "605",
        "565"
    ],

    correctAnswer: "585",

    explanation:
        "485 + 100 = 585 and 605 − 20 = 585."
},

{
    id: "astdn-027",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "A museum has 651 visitors. Thirty visitors leave. How many visitors are left?",

    options: [
        "621",
        "631",
        "611",
        "641"
    ],

    correctAnswer: "621",

    explanation:
        "651 − 30 = 621."
},

{
    id: "astdn-028",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "Which number is missing? 430, 460, □",

    options: [
        "490",
        "530",
        "470",
        "500"
    ],

    correctAnswer: "490",

    explanation:
        "Each number is 30 more than the previous one."
},

{
    id: "astdn-029",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "Which number is missing? 810, 710, □",

    options: [
        "610",
        "700",
        "510",
        "620"
    ],

    correctAnswer: "610",

    explanation:
        "Each number is 100 less than the previous one."
},

{
    id: "astdn-030",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "apply",

    question: "Which child solved the question correctly? '365 + 40'",

    options: [
        "Ben: 405",
        "Ella: 395",
        "Sam: 465",
        "Leo: 415"
    ],

    correctAnswer: "Ben: 405",

    explanation:
        "365 + 40 = 405."
},
{
    id: "astdn-031",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "What is 536 + 40?",

    options: [
        "576",
        "566",
        "636",
        "546"
    ],

    correctAnswer: "576",

    explanation:
        "536 + 40 = 576."
},

{
    id: "astdn-032",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "What is 843 - 200?",

    options: [
        "643",
        "623",
        "743",
        "843"
    ],

    correctAnswer: "643",

    explanation:
        "843 − 200 = 643."
},

{
    id: "astdn-033",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which calculation equals 760?",

    options: [
        "660 + 100",
        "780 - 20",
        "730 + 30",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation gives 760."
},

{
    id: "astdn-034",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Sam: 415 + 200 = 615",
        "Ella: 415 + 200 = 515",
        "Ben: 415 + 200 = 625",
        "Leo: 415 + 200 = 715"
    ],

    correctAnswer: "Sam: 415 + 200 = 615",

    explanation:
        "Adding 200 increases the hundreds digit by 2."
},

{
    id: "astdn-035",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which number is both 40 more than 530 and 100 less than 670?",

    options: [
        "570",
        "630",
        "560",
        "580"
    ],

    correctAnswer: "570",

    explanation:
        "530 + 40 = 570 and 670 − 100 = 570."
},

{
    id: "astdn-036",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "A zoo has 642 visitors. Another 200 visitors arrive. How many visitors are there now?",

    options: [
        "842",
        "662",
        "742",
        "942"
    ],

    correctAnswer: "842",

    explanation:
        "642 + 200 = 842."
},

{
    id: "astdn-037",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "A factory made 915 toys. It shipped 40 toys. How many toys are left?",

    options: [
        "875",
        "885",
        "815",
        "905"
    ],

    correctAnswer: "875",

    explanation:
        "915 − 40 = 875."
},

{
    id: "astdn-038",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which number does NOT belong?",

    options: [
        "515",
        "505",
        "605",
        "705"
    ],

    correctAnswer: "515",

    explanation:
        "505, 605 and 705 increase by 100 each time. 515 does not fit the pattern."
},

{
    id: "astdn-039",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Complete the pattern: 348, 388, 428, □",

    options: [
        "468",
        "448",
        "528",
        "458"
    ],

    correctAnswer: "468",

    explanation:
        "Each number is 40 more than the previous one."
},

{
    id: "astdn-040",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Complete the pattern: 960, 860, 760, □",

    options: [
        "660",
        "680",
        "650",
        "560"
    ],

    correctAnswer: "660",

    explanation:
        "Each number is 100 less than the previous one."
},

{
    id: "astdn-041",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "A school has 520 pupils. One hundred pupils join. Then 30 pupils leave. How many pupils are there now?",

    options: [
        "590",
        "650",
        "620",
        "490"
    ],

    correctAnswer: "590",

    explanation:
        "520 + 100 = 620, then 620 − 30 = 590."
},

{
    id: "astdn-042",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "840 - 40 = 800",
        "840 + 40 = 860",
        "840 - 100 = 760",
        "840 + 100 = 930"
    ],

    correctAnswer: "840 - 40 = 800",

    explanation:
        "840 − 40 = 800."
},

{
    id: "astdn-043",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which child made no mistakes?",

    options: [
        "Ben: 350 → 390 → 430",
        "Ella: 350 → 450 → 550",
        "Sam: 350 → 370 → 480",
        "Leo: 350 → 360 → 460"
    ],

    correctAnswer: "Ella: 350 → 450 → 550",

    explanation:
        "Ella correctly adds 100 each time."
},

{
    id: "astdn-044",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "What is 999 - 100?",

    options: [
        "899",
        "909",
        "999",
        "900"
    ],

    correctAnswer: "899",

    explanation:
        "999 − 100 = 899."
},

{
    id: "astdn-045",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "A warehouse stores 684 boxes. Forty more boxes arrive. How many boxes are there now?",

    options: [
        "724",
        "694",
        "784",
        "644"
    ],

    correctAnswer: "724",

    explanation:
        "684 + 40 = 724."
},

{
    id: "astdn-046",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which calculation is wrong?",

    options: [
        "540 + 30 = 580",
        "540 + 100 = 640",
        "540 - 40 = 500",
        "540 - 100 = 440"
    ],

    correctAnswer: "540 + 30 = 580",

    explanation:
        "540 + 30 = 570, not 580."
},

{
    id: "astdn-047",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "What is 620 - 50?",

    options: [
        "570",
        "560",
        "670",
        "520"
    ],

    correctAnswer: "570",

    explanation:
        "620 − 50 = 570."
},

{
    id: "astdn-048",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which list shows adding 200 each time?",

    options: [
        "150, 350, 550, 750",
        "150, 250, 350, 450",
        "150, 300, 450, 600",
        "150, 450, 750, 1050"
    ],

    correctAnswer: "150, 350, 550, 750",

    explanation:
        "Each number is 200 more than the previous one."
},

{
    id: "astdn-049",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "What is missing? 615, 655, □, 735",

    options: [
        "695",
        "675",
        "715",
        "755"
    ],

    correctAnswer: "695",

    explanation:
        "Each step adds 40."
},

{
    id: "astdn-050",
    skillId: "add-and-subtract-three-digit-numbers",
    stage: "master",

    question: "Which statement is correct?",

    options: [
        "100 more than 487 is 587.",
        "40 more than 487 is 517.",
        "100 less than 487 is 397.",
        "40 less than 487 is 457."
    ],

    correctAnswer: "100 more than 487 is 587.",

    explanation:
        "487 + 100 = 587."
},

    ]
};


export default addAndSubtractThreeDigitNumbers;

export {

    addAndSubtractThreeDigitNumbers

};
