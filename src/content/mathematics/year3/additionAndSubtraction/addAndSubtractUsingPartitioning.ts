import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const addAndSubtractUsingPartitioning: SkillContent = {
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

    hint: "Split 246 into hundreds, tens and ones. Only the tens part changes when you add 30.",

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

    hint: "Think of 385 as 300, 80 and 5. Removing 20 only affects the tens part.",

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

    hint: "Only the ones digit changes because you're adding six ones.",

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

    hint: "Subtract four ones while keeping the hundreds and tens the same.",

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

    hint: "Add five tens to the tens part without changing the hundreds.",

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

    hint: "Take away six tens. The hundreds stay the same.",

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

    hint: "Increase only the tens part from 40 to 80 while keeping the hundreds and ones unchanged.",

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

    hint: "Remove the three tens but leave the hundreds and ones exactly as they are.",

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

    hint: "Work through each calculation mentally before deciding whether they all reach the same answer.",

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

    hint: "Adding 90 means adding nine tens, not nine ones.",

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

    hint: "Only the ones digit changes when six ones are taken away.",

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

    hint: "Add eight tens while leaving the hundreds and ones untouched.",

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

    hint: "Ignore Ella's answer first and add four tens yourself.",

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

    hint: "Check the value of each digit separately: hundreds, tens and ones.",

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

    hint: "Different partitions can represent the same number. Check whether each one still equals 584.",

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

    hint: "Break the number into 400, 60 and 3. Only the tens part changes.",

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

    hint: "Subtract four tens from the tens part without changing the hundreds or ones.",

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

    hint: "Look for the calculation that only adds or subtracts ones, not tens or hundreds.",

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

    hint: "Subtract three tens yourself before checking each child's answer.",

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

    hint: "The hundreds and tens stay the same. Only add eight to the ones place.",

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

    hint: "Receiving 40 books means adding four tens while the hundreds and ones remain unchanged.",

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

    hint: "Selling 20 removes two tens. Don't change the hundreds or ones.",

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

    hint: "Think of 472 as 400 + 70 + 2, then increase only the tens by 40.",

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

    hint: "Subtracting 100 only changes the hundreds digit. The tens and ones stay the same.",

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

    hint: "Solve each calculation separately and check whether every one finishes on exactly the same number.",

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

    hint: "Adding 50 means adding five tens without changing the hundreds or ones.",

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

    hint: "Take away eight ones. You will need to cross from 31 ones down into the twenties.",

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

    hint: "Compare each pair of numbers to find the constant increase before extending the pattern.",

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

    hint: "Notice that only the hundreds value changes by the same amount each time.",

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

    hint: "Work out the answer yourself before reading the children's responses.",

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

    hint: "Split 684 into 600, 80 and 4. Add the extra three tens before recombining the parts.",

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

    hint: "Remove the entire tens part while leaving the hundreds and ones untouched.",

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

    hint: "Calculate each expression mentally. If every route arrives at 840, choose the combined option.",

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

    hint: "Adding 90 changes the tens value by nine tens, not the hundreds or ones.",

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

    hint: "Work out each clue separately. The correct answer must satisfy both conditions, not just one.",

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

    hint: "Adding 40 changes only the tens value. The hundreds and ones stay the same.",

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

    hint: "Removing 20 means taking away two tens while leaving the hundreds and ones unchanged.",

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

    hint: "A standard partition separates the number into hundreds, tens and ones using place value.",

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

    hint: "Find the difference between consecutive numbers before extending the sequence.",

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

    hint: "Notice that exactly one hundred is removed at every step.",

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

    hint: "Solve the story in order: first increase the total, then reduce it.",

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

    hint: "Check each calculation mentally rather than assuming the first one is correct.",

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

    hint: "A correct place value partition has separate hundreds, tens and ones with no overlaps.",

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

    hint: "Add nine tens to 803. The ones digit does not change.",

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

    hint: "Subtract seven tens while keeping the hundreds digit unchanged.",

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

    hint: "Evaluate every calculation carefully. Only one contains an arithmetic mistake.",

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

    hint: "Adding 20 increases the tens by two without changing the hundreds or ones.",

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

    hint: "Compare the gap between every neighbouring pair. The difference must stay the same throughout.",

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

    hint: "Find the constant increase between the first two numbers and continue using the same step.",

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

    hint: "Test each statement one at a time instead of choosing the one that looks most reasonable.",

    explanation:
        "639 + 100 = 739."
},

    ]
};

export default addAndSubtractUsingPartitioning;

export {
    addAndSubtractUsingPartitioning
};