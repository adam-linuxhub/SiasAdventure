import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const addAndSubtractUsingPartitioning: SkillContent = {
    skillId: "add-and-subtract-using-partitioning",

    title: "Add and Subtract Using Partitioning",

    description: "Use partitioning to add and subtract numbers mentally.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "asup-001",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "Partition 246, then add 30. What is the answer?",

    options: [
        "276",
        "266",
        "286",
        "236"
    ],

    correctAnswer: "276",

    explanation:
        "246 = 200 + 40 + 6. Adding 30 gives 200 + 70 + 6 = 276."
},

{
    id: "asup-002",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "Partition 385, then subtract 20. What is the answer?",

    options: [
        "365",
        "375",
        "355",
        "405"
    ],

    correctAnswer: "365",

    explanation:
        "385 = 300 + 80 + 5. Taking away 20 leaves 365."
},

{
    id: "asup-003",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "What is 421 + 6?",

    options: [
        "427",
        "426",
        "431",
        "417"
    ],

    correctAnswer: "427",

    explanation:
        "Add 6 ones to 421 to get 427."
},

{
    id: "asup-004",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "What is 654 - 4?",

    options: [
        "650",
        "640",
        "654",
        "660"
    ],

    correctAnswer: "650",

    explanation:
        "Subtract 4 ones from 654 to get 650."
},

{
    id: "asup-005",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "What is 320 + 50?",

    options: [
        "370",
        "360",
        "420",
        "350"
    ],

    correctAnswer: "370",

    explanation:
        "Add 5 tens to 320."
},

{
    id: "asup-006",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "What is 790 - 60?",

    options: [
        "730",
        "740",
        "760",
        "720"
    ],

    correctAnswer: "730",

    explanation:
        "Subtract 6 tens from 790."
},

{
    id: "asup-007",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "246 is 200 + 40 + 6. What is 246 + 40?",

    options: [
        "286",
        "276",
        "296",
        "266"
    ],

    correctAnswer: "286",

    explanation:
        "Adding 40 changes only the tens."
},

{
    id: "asup-008",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "538 is 500 + 30 + 8. What is 538 - 30?",

    options: [
        "508",
        "518",
        "528",
        "498"
    ],

    correctAnswer: "508",

    explanation:
        "Subtracting 30 removes 3 tens."
},

{
    id: "asup-009",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "Which calculation equals 462?",

    options: [
        "432 + 30",
        "482 - 20",
        "362 + 100",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation gives 462."
},

{
    id: "asup-010",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "What is 807 + 90?",

    options: [
        "897",
        "907",
        "887",
        "817"
    ],

    correctAnswer: "897",

    explanation:
        "Add 9 tens to 807."
},

{
    id: "asup-011",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "What is 936 - 6?",

    options: [
        "930",
        "936",
        "920",
        "940"
    ],

    correctAnswer: "930",

    explanation:
        "Subtract 6 ones."
},

{
    id: "asup-012",
    skillId: "add-and-subtract-using-partitioning",
    stage: "recognise",

    question: "What is 615 + 80?",

    options: [
        "695",
        "685",
        "705",
        "775"
    ],

    correctAnswer: "695",

    explanation:
        "615 + 80 = 695."
},

{
    id: "asup-013",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "Ella says 356 + 40 = 396. Is she correct?",

    options: [
        "Yes",
        "No, it is 366.",
        "No, it is 386.",
        "No, it is 406."
    ],

    correctAnswer: "Yes",

    explanation:
        "356 + 40 = 396."
},

{
    id: "asup-014",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "Ben partitions 742 into 700 + 40 + 2. Is he correct?",

    options: [
        "Yes",
        "No, it should be 700 + 42.",
        "No, it should be 740 + 20.",
        "No, it should be 700 + 4 + 20."
    ],

    correctAnswer: "Yes",

    explanation:
        "742 has 7 hundreds, 4 tens and 2 ones."
},

{
    id: "asup-015",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "Which partition helps solve 584 - 20 mentally?",

    options: [
        "500 + 80 + 4",
        "580 + 4",
        "500 + 84",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each partition correctly represents 584 and helps subtract 20 mentally."
},
{
    id: "asup-016",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "Partition 463, then add 20. What is the answer?",

    options: [
        "483",
        "473",
        "493",
        "443"
    ],

    correctAnswer: "483",

    explanation:
        "463 = 400 + 60 + 3. Adding 20 gives 400 + 80 + 3 = 483."
},

{
    id: "asup-017",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "Partition 728, then subtract 40. What is the answer?",

    options: [
        "688",
        "698",
        "708",
        "678"
    ],

    correctAnswer: "688",

    explanation:
        "728 = 700 + 20 + 8. Taking away 40 leaves 688."
},

{
    id: "asup-018",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "Which calculation changes only the ones digit?",

    options: [
        "582 + 7",
        "582 + 70",
        "582 + 100",
        "582 - 20"
    ],

    correctAnswer: "582 + 7",

    explanation:
        "Adding 7 changes only the ones."
},

{
    id: "asup-019",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "Which child is correct?",

    options: [
        "Ella: 631 - 30 = 601",
        "Ben: 631 - 30 = 611",
        "Sam: 631 - 30 = 591",
        "Leo: 631 - 30 = 621"
    ],

    correctAnswer: "Ella: 631 - 30 = 601",

    explanation:
        "Subtracting 30 removes 3 tens."
},

{
    id: "asup-020",
    skillId: "add-and-subtract-using-partitioning",
    stage: "understand",

    question: "What is 540 + 8?",

    options: [
        "548",
        "558",
        "5408",
        "538"
    ],

    correctAnswer: "548",

    explanation:
        "Add 8 ones to 540."
},

{
    id: "asup-021",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "A library has 348 books. It receives 40 more books. How many books does it have now?",

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
    id: "asup-022",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "A shop has 615 apples. It sells 20 apples. How many apples are left?",

    options: [
        "595",
        "605",
        "585",
        "625"
    ],

    correctAnswer: "595",

    explanation:
        "615 − 20 = 595."
},

{
    id: "asup-023",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "A school has 472 pupils. Forty new pupils join. How many pupils are there now?",

    options: [
        "512",
        "482",
        "572",
        "502"
    ],

    correctAnswer: "512",

    explanation:
        "472 + 40 = 512."
},

{
    id: "asup-024",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "A museum has 839 visitors. One hundred visitors leave. How many visitors remain?",

    options: [
        "739",
        "829",
        "639",
        "839"
    ],

    correctAnswer: "739",

    explanation:
        "839 − 100 = 739."
},

{
    id: "asup-025",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "Which calculation gives 754?",

    options: [
        "724 + 30",
        "774 - 20",
        "654 + 100",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation equals 754."
},

{
    id: "asup-026",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "Which number is 50 more than 426?",

    options: [
        "476",
        "466",
        "526",
        "436"
    ],

    correctAnswer: "476",

    explanation:
        "426 + 50 = 476."
},

{
    id: "asup-027",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "Which number is 8 less than 731?",

    options: [
        "723",
        "729",
        "721",
        "713"
    ],

    correctAnswer: "723",

    explanation:
        "731 − 8 = 723."
},

{
    id: "asup-028",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "Complete the pattern: 215, 235, 255, □",

    options: [
        "275",
        "265",
        "285",
        "295"
    ],

    correctAnswer: "275",

    explanation:
        "Each number is 20 more than the previous one."
},

{
    id: "asup-029",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "Complete the pattern: 980, 880, 780, □",

    options: [
        "680",
        "690",
        "700",
        "580"
    ],

    correctAnswer: "680",

    explanation:
        "Each number is 100 less than the previous one."
},

{
    id: "asup-030",
    skillId: "add-and-subtract-using-partitioning",
    stage: "apply",

    question: "Which child solved the calculation correctly? '580 + 40'",

    options: [
        "Ben: 620",
        "Ella: 610",
        "Sam: 630",
        "Leo: 600"
    ],

    correctAnswer: "Ben: 620",

    explanation:
        "580 + 40 = 620."
},
{
    id: "asup-031",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Partition 684, then add 30. What is the answer?",

    options: [
        "714",
        "704",
        "724",
        "694"
    ],

    correctAnswer: "714",

    explanation:
        "684 = 600 + 80 + 4. Adding 30 gives 600 + 110 + 4 = 714."
},

{
    id: "asup-032",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Partition 952, then subtract 50. What is the answer?",

    options: [
        "902",
        "912",
        "852",
        "942"
    ],

    correctAnswer: "902",

    explanation:
        "952 = 900 + 50 + 2. Taking away 50 leaves 902."
},

{
    id: "asup-033",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which calculation equals 840?",

    options: [
        "760 + 80",
        "860 - 20",
        "740 + 100",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each calculation equals 840."
},

{
    id: "asup-034",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which child is correct?",

    options: [
        "Ella: 507 + 90 = 597",
        "Ben: 507 + 90 = 587",
        "Sam: 507 + 90 = 607",
        "Leo: 507 + 90 = 577"
    ],

    correctAnswer: "Ella: 507 + 90 = 597",

    explanation:
        "Adding 90 means adding 9 tens."
},

{
    id: "asup-035",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which number is both 30 more than 648 and 100 less than 778?",

    options: [
        "678",
        "748",
        "668",
        "688"
    ],

    correctAnswer: "678",

    explanation:
        "648 + 30 = 678 and 778 − 100 = 678."
},

{
    id: "asup-036",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "A school has 586 pupils. Forty more pupils join. How many pupils are there now?",

    options: [
        "626",
        "616",
        "686",
        "606"
    ],

    correctAnswer: "626",

    explanation:
        "586 + 40 = 626."
},

{
    id: "asup-037",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "A library has 741 books. It removes 20 damaged books. How many books remain?",

    options: [
        "721",
        "731",
        "701",
        "741"
    ],

    correctAnswer: "721",

    explanation:
        "741 − 20 = 721."
},

{
    id: "asup-038",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which partition represents 863?",

    options: [
        "800 + 60 + 3",
        "860 + 30",
        "800 + 50 + 13",
        "700 + 160 + 3"
    ],

    correctAnswer: "800 + 60 + 3",

    explanation:
        "863 has 8 hundreds, 6 tens and 3 ones."
},

{
    id: "asup-039",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Complete the pattern: 452, 482, 512, □",

    options: [
        "542",
        "522",
        "552",
        "532"
    ],

    correctAnswer: "542",

    explanation:
        "Each number is 30 more than the previous one."
},

{
    id: "asup-040",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Complete the pattern: 905, 805, 705, □",

    options: [
        "605",
        "705",
        "505",
        "695"
    ],

    correctAnswer: "605",

    explanation:
        "Each number is 100 less than the previous one."
},

{
    id: "asup-041",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "A farmer has 420 apples. He picks 80 more, then sells 30. How many apples does he have now?",

    options: [
        "470",
        "500",
        "490",
        "460"
    ],

    correctAnswer: "470",

    explanation:
        "420 + 80 = 500, then 500 − 30 = 470."
},

{
    id: "asup-042",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which statement is true?",

    options: [
        "635 + 40 = 675",
        "635 - 40 = 615",
        "635 + 100 = 725",
        "635 - 100 = 545"
    ],

    correctAnswer: "635 + 40 = 675",

    explanation:
        "Adding 40 to 635 gives 675."
},

{
    id: "asup-043",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which child partitioned the number correctly?",

    options: [
        "Ella: 548 = 500 + 40 + 8",
        "Ben: 548 = 500 + 48",
        "Sam: 548 = 540 + 80",
        "Leo: 548 = 400 + 140 + 80"
    ],

    correctAnswer: "Ella: 548 = 500 + 40 + 8",

    explanation:
        "548 has 5 hundreds, 4 tens and 8 ones."
},

{
    id: "asup-044",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "What is 803 + 90?",

    options: [
        "893",
        "903",
        "883",
        "813"
    ],

    correctAnswer: "893",

    explanation:
        "803 + 90 = 893."
},

{
    id: "asup-045",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "What is 960 - 70?",

    options: [
        "890",
        "900",
        "880",
        "870"
    ],

    correctAnswer: "890",

    explanation:
        "960 − 70 = 890."
},

{
    id: "asup-046",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which calculation is wrong?",

    options: [
        "470 + 60 = 540",
        "470 - 40 = 430",
        "470 + 100 = 570",
        "470 - 100 = 370"
    ],

    correctAnswer: "470 + 60 = 540",

    explanation:
        "470 + 60 = 530, not 540."
},

{
    id: "asup-047",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "What is 718 + 20?",

    options: [
        "738",
        "728",
        "748",
        "718"
    ],

    correctAnswer: "738",

    explanation:
        "718 + 20 = 738."
},

{
    id: "asup-048",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which list shows adding 30 each time?",

    options: [
        "215, 245, 275, 305",
        "215, 235, 255, 265",
        "215, 245, 285, 315",
        "215, 225, 245, 265"
    ],

    correctAnswer: "215, 245, 275, 305",

    explanation:
        "Each number is 30 more than the previous one."
},

{
    id: "asup-049",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "What number is missing? 632, 672, □, 752",

    options: [
        "712",
        "702",
        "692",
        "722"
    ],

    correctAnswer: "712",

    explanation:
        "Each step adds 40."
},

{
    id: "asup-050",
    skillId: "add-and-subtract-using-partitioning",
    stage: "master",

    question: "Which statement is correct?",

    options: [
        "100 more than 639 is 739.",
        "30 more than 639 is 679.",
        "20 less than 639 is 629.",
        "90 less than 639 is 559."
    ],

    correctAnswer: "100 more than 639 is 739.",

    explanation:
        "639 + 100 = 739."
},

    ]
};