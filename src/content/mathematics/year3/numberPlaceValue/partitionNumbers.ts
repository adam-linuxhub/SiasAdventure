import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const partitionNumbers: SkillContent = {
    skillId: "partition-numbers",

    title: "Partition Numbers",

    description: "Partition three-digit numbers into hundreds, tens and ones.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
    id: "pn-001",
    skillId: "partition-numbers",
    stage: "recognise",

    question: "Which shows 356 partitioned into hundreds, tens and ones?",

    options: [
        "300 + 50 + 6",
        "300 + 5 + 60",
        "30 + 50 + 6",
        "350 + 6"
    ],

    correctAnswer: "300 + 50 + 6",

    explanation:
        "356 has 3 hundreds, 5 tens and 6 ones."
},

{
    id: "pn-002",
    skillId: "partition-numbers",
    stage: "recognise",

    question: "How can 482 be partitioned?",

    options: [
        "400 + 80 + 2",
        "480 + 2",
        "40 + 80 + 2",
        "400 + 8 + 20"
    ],

    correctAnswer: "400 + 80 + 2",

    explanation:
        "482 is made from 4 hundreds, 8 tens and 2 ones."
},

{
    id: "pn-003",
    skillId: "partition-numbers",
    stage: "recognise",

    question: "Which number is shown by 700 + 20 + 9?",

    options: [
        "729",
        "792",
        "709",
        "720"
    ],

    correctAnswer: "729",

    explanation:
        "700 + 20 + 9 = 729."
},

{
    id: "pn-004",
    skillId: "partition-numbers",
    stage: "recognise",

    question: "Partition 614 into hundreds, tens and ones.",

    options: [
        "600 + 10 + 4",
        "600 + 14",
        "610 + 4",
        "60 + 10 + 4"
    ],

    correctAnswer: "600 + 10 + 4",

    explanation:
        "614 has 6 hundreds, 1 ten and 4 ones."
},

{
    id: "pn-005",
    skillId: "partition-numbers",
    stage: "recognise",

    question: "Which number is represented by 500 + 40 + 3?",

    options: [
        "543",
        "453",
        "534",
        "503"
    ],

    correctAnswer: "543",

    explanation:
        "500 + 40 + 3 = 543."
},

{
    id: "pn-006",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Complete the partition: 681 = 600 + ___ + 1",

    options: [
        "8",
        "80",
        "18",
        "800"
    ],

    correctAnswer: "80",

    explanation:
        "The tens part of 681 is 80."
},

{
    id: "pn-007",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Complete the partition: 437 = ___ + 30 + 7",

    options: [
        "400",
        "40",
        "430",
        "300"
    ],

    correctAnswer: "400",

    explanation:
        "437 has 4 hundreds."
},

{
    id: "pn-008",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Complete the partition: 905 = 900 + 0 + ___",

    options: [
        "5",
        "50",
        "500",
        "9"
    ],

    correctAnswer: "5",

    explanation:
        "905 has no tens and 5 ones."
},

{
    id: "pn-009",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Which statement about 248 is correct?",

    options: [
        "200 + 40 + 8",
        "200 + 4 + 80",
        "20 + 40 + 8",
        "240 + 8 + 0"
    ],

    correctAnswer: "200 + 40 + 8",

    explanation:
        "248 is partitioned into 200, 40 and 8."
},

{
    id: "pn-010",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Which partition is NOT correct?",

    options: [
        "372 = 300 + 70 + 2",
        "508 = 500 + 0 + 8",
        "641 = 600 + 4 + 10",
        "290 = 200 + 90 + 0"
    ],

    correctAnswer: "641 = 600 + 4 + 10",

    explanation:
        "641 should be partitioned as 600 + 40 + 1."
},

{
    id: "pn-011",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A library has 638 books. Which partition shows this number?",

    options: [
        "600 + 30 + 8",
        "600 + 3 + 80",
        "630 + 8",
        "60 + 30 + 8"
    ],

    correctAnswer: "600 + 30 + 8",

    explanation:
        "638 is 6 hundreds, 3 tens and 8 ones."
},

{
    id: "pn-012",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A school has 451 pupils. Which is the correct partition?",

    options: [
        "400 + 50 + 1",
        "450 + 1",
        "400 + 5 + 10",
        "40 + 50 + 1"
    ],

    correctAnswer: "400 + 50 + 1",

    explanation:
        "451 has 4 hundreds, 5 tens and 1 one."
},

{
    id: "pn-013",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A toy shop sold 726 toys. Complete the partition: 700 + 20 + ___",

    options: [
        "6",
        "60",
        "26",
        "2"
    ],

    correctAnswer: "6",

    explanation:
        "726 has 6 ones."
},

{
    id: "pn-014",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A museum welcomed 803 visitors. Which partition is correct?",

    options: [
        "800 + 0 + 3",
        "800 + 30 + 0",
        "80 + 0 + 3",
        "803 + 0 + 0"
    ],

    correctAnswer: "800 + 0 + 3",

    explanation:
        "803 has 8 hundreds, no tens and 3 ones."
},

{
    id: "pn-015",
    skillId: "partition-numbers",
    stage: "apply",

    question: "Which number matches the partition 900 + 60 + 4?",

    options: [
        "964",
        "946",
        "694",
        "904"
    ],

    correctAnswer: "964",

    explanation:
        "900 + 60 + 4 = 964."
},
{
    id: "pn-016",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Complete the partition: 752 = 700 + ___ + 2",

    options: [
        "5",
        "50",
        "500",
        "52"
    ],

    correctAnswer: "50",

    explanation:
        "752 has 5 tens, so the missing part is 50."
},

{
    id: "pn-017",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Complete the partition: 480 = 400 + ___ + 0",

    options: [
        "8",
        "80",
        "800",
        "40"
    ],

    correctAnswer: "80",

    explanation:
        "480 has 8 tens, so the missing part is 80."
},

{
    id: "pn-018",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Which partition is correct for 631?",

    options: [
        "600 + 30 + 1",
        "600 + 3 + 10",
        "630 + 0 + 1",
        "60 + 30 + 1"
    ],

    correctAnswer: "600 + 30 + 1",

    explanation:
        "631 has 6 hundreds, 3 tens and 1 one."
},

{
    id: "pn-019",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Which number is represented by 200 + 70 + 5?",

    options: [
        "275",
        "257",
        "725",
        "205"
    ],

    correctAnswer: "275",

    explanation:
        "200 + 70 + 5 = 275."
},

{
    id: "pn-020",
    skillId: "partition-numbers",
    stage: "understand",

    question: "Which partition is NOT correct?",

    options: [
        "416 = 400 + 10 + 6",
        "590 = 500 + 90 + 0",
        "732 = 700 + 30 + 2",
        "861 = 800 + 6 + 10"
    ],

    correctAnswer: "861 = 800 + 6 + 10",

    explanation:
        "861 should be partitioned as 800 + 60 + 1."
},

{
    id: "pn-021",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A baker made 684 cakes. Which partition shows this number?",

    options: [
        "600 + 80 + 4",
        "680 + 4",
        "600 + 8 + 40",
        "60 + 80 + 4"
    ],

    correctAnswer: "600 + 80 + 4",

    explanation:
        "684 has 6 hundreds, 8 tens and 4 ones."
},

{
    id: "pn-022",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A school counted 930 pencils. Which partition is correct?",

    options: [
        "900 + 30 + 0",
        "900 + 3 + 0",
        "930 + 0 + 0",
        "90 + 30 + 0"
    ],

    correctAnswer: "900 + 30 + 0",

    explanation:
        "930 has 9 hundreds, 3 tens and no ones."
},

{
    id: "pn-023",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A shop sold 507 toys. Which partition is correct?",

    options: [
        "500 + 0 + 7",
        "500 + 70 + 0",
        "507 + 0 + 0",
        "50 + 0 + 7"
    ],

    correctAnswer: "500 + 0 + 7",

    explanation:
        "507 has no tens."
},

{
    id: "pn-024",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A bus carried 346 passengers during the day. Complete the partition: 300 + 40 + ___",

    options: [
        "6",
        "60",
        "4",
        "46"
    ],

    correctAnswer: "6",

    explanation:
        "346 has 6 ones."
},

{
    id: "pn-025",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A library has 891 books. Which number is made from 800 + 90 + 1?",

    options: [
        "891",
        "819",
        "981",
        "890"
    ],

    correctAnswer: "891",

    explanation:
        "800 + 90 + 1 = 891."
},

{
    id: "pn-026",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A farmer counted 264 sheep. Which digit represents the tens?",

    options: [
        "2",
        "6",
        "4",
        "0"
    ],

    correctAnswer: "6",

    explanation:
        "The 6 is in the tens place."
},

{
    id: "pn-027",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A museum welcomed 715 visitors. Which partition is correct?",

    options: [
        "700 + 10 + 5",
        "700 + 1 + 50",
        "710 + 5",
        "70 + 10 + 5"
    ],

    correctAnswer: "700 + 10 + 5",

    explanation:
        "715 has 7 hundreds, 1 ten and 5 ones."
},

{
    id: "pn-028",
    skillId: "partition-numbers",
    stage: "apply",

    question: "Which number is represented by 300 + 40 + 9?",

    options: [
        "349",
        "394",
        "439",
        "309"
    ],

    correctAnswer: "349",

    explanation:
        "300 + 40 + 9 = 349."
},

{
    id: "pn-029",
    skillId: "partition-numbers",
    stage: "apply",

    question: "A classroom has 602 books. Which partition is correct?",

    options: [
        "600 + 0 + 2",
        "600 + 20 + 0",
        "602 + 0 + 0",
        "60 + 0 + 2"
    ],

    correctAnswer: "600 + 0 + 2",

    explanation:
        "602 has no tens and 2 ones."
},

{
    id: "pn-030",
    skillId: "partition-numbers",
    stage: "apply",

    question: "Which number matches the partition 100 + 90 + 8?",

    options: [
        "198",
        "189",
        "918",
        "109"
    ],

    correctAnswer: "198",

    explanation:
        "100 + 90 + 8 = 198."
},
{
    id: "pn-031",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition is correct for 458?",

    options: [
        "400 + 50 + 8",
        "450 + 80",
        "400 + 5 + 80",
        "40 + 50 + 8"
    ],

    correctAnswer: "400 + 50 + 8",

    explanation:
        "458 is partitioned into 400, 50 and 8."
},

{
    id: "pn-032",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number is shown by 900 + 30 + 7?",

    options: [
        "937",
        "973",
        "397",
        "930"
    ],

    correctAnswer: "937",

    explanation:
        "900 + 30 + 7 = 937."
},

{
    id: "pn-033",
    skillId: "partition-numbers",
    stage: "master",

    question: "Complete the partition: 684 = ___ + 80 + 4",

    options: [
        "600",
        "60",
        "680",
        "604"
    ],

    correctAnswer: "600",

    explanation:
        "684 has 6 hundreds."
},

{
    id: "pn-034",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition is NOT correct?",

    options: [
        "715 = 700 + 10 + 5",
        "264 = 200 + 60 + 4",
        "391 = 300 + 9 + 10",
        "840 = 800 + 40 + 0"
    ],

    correctAnswer: "391 = 300 + 9 + 10",

    explanation:
        "391 should be partitioned as 300 + 90 + 1."
},

{
    id: "pn-035",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number has 8 hundreds, 4 tens and 2 ones?",

    options: [
        "842",
        "824",
        "482",
        "804"
    ],

    correctAnswer: "842",

    explanation:
        "8 hundreds, 4 tens and 2 ones make 842."
},

{
    id: "pn-036",
    skillId: "partition-numbers",
    stage: "master",

    question: "Complete the partition: 903 = 900 + ___ + 3",

    options: [
        "0",
        "30",
        "3",
        "300"
    ],

    correctAnswer: "0",

    explanation:
        "903 has no tens."
},

{
    id: "pn-037",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number matches 500 + 20 + 6?",

    options: [
        "526",
        "562",
        "256",
        "520"
    ],

    correctAnswer: "526",

    explanation:
        "500 + 20 + 6 = 526."
},

{
    id: "pn-038",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition correctly shows 760?",

    options: [
        "700 + 60 + 0",
        "760 + 0 + 0",
        "700 + 6 + 0",
        "70 + 60 + 0"
    ],

    correctAnswer: "700 + 60 + 0",

    explanation:
        "760 has 7 hundreds, 6 tens and no ones."
},

{
    id: "pn-039",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number is represented by 100 + 80 + 5?",

    options: [
        "185",
        "158",
        "815",
        "180"
    ],

    correctAnswer: "185",

    explanation:
        "100 + 80 + 5 = 185."
},

{
    id: "pn-040",
    skillId: "partition-numbers",
    stage: "master",

    question: "Complete the partition: 541 = 500 + 40 + ___",

    options: [
        "1",
        "10",
        "4",
        "41"
    ],

    correctAnswer: "1",

    explanation:
        "541 has 1 one."
},

{
    id: "pn-041",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition shows 999?",

    options: [
        "900 + 90 + 9",
        "990 + 9",
        "900 + 9 + 90",
        "All of these"
    ],

    correctAnswer: "All of these",

    explanation:
        "Each partition totals 999."
},

{
    id: "pn-042",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number has 2 hundreds, no tens and 8 ones?",

    options: [
        "208",
        "280",
        "228",
        "820"
    ],

    correctAnswer: "208",

    explanation:
        "2 hundreds, 0 tens and 8 ones make 208."
},

{
    id: "pn-043",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition is correct for 305?",

    options: [
        "300 + 0 + 5",
        "300 + 50 + 0",
        "305 + 0 + 0",
        "30 + 0 + 5"
    ],

    correctAnswer: "300 + 0 + 5",

    explanation:
        "305 has no tens."
},

{
    id: "pn-044",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number is shown by 600 + 70 + 8?",

    options: [
        "678",
        "687",
        "768",
        "608"
    ],

    correctAnswer: "678",

    explanation:
        "600 + 70 + 8 = 678."
},

{
    id: "pn-045",
    skillId: "partition-numbers",
    stage: "master",

    question: "Complete the partition: 450 = 400 + ___ + 0",

    options: [
        "50",
        "5",
        "500",
        "40"
    ],

    correctAnswer: "50",

    explanation:
        "450 has 5 tens."
},

{
    id: "pn-046",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition is correct for 821?",

    options: [
        "800 + 20 + 1",
        "820 + 10",
        "800 + 2 + 10",
        "80 + 20 + 1"
    ],

    correctAnswer: "800 + 20 + 1",

    explanation:
        "821 has 8 hundreds, 2 tens and 1 one."
},

{
    id: "pn-047",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number matches 700 + 0 + 9?",

    options: [
        "709",
        "790",
        "7009",
        "719"
    ],

    correctAnswer: "709",

    explanation:
        "700 + 0 + 9 = 709."
},

{
    id: "pn-048",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition is correct for 163?",

    options: [
        "100 + 60 + 3",
        "160 + 3",
        "100 + 6 + 30",
        "10 + 60 + 3"
    ],

    correctAnswer: "100 + 60 + 3",

    explanation:
        "163 has 1 hundred, 6 tens and 3 ones."
},

{
    id: "pn-049",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which number has 9 hundreds, 5 tens and no ones?",

    options: [
        "950",
        "905",
        "590",
        "959"
    ],

    correctAnswer: "950",

    explanation:
        "9 hundreds, 5 tens and 0 ones make 950."
},

{
    id: "pn-050",
    skillId: "partition-numbers",
    stage: "master",

    question: "Which partition is correct for 412?",

    options: [
        "400 + 10 + 2",
        "410 + 2",
        "400 + 1 + 20",
        "40 + 10 + 2"
    ],

    correctAnswer: "400 + 10 + 2",

    explanation:
        "412 has 4 hundreds, 1 ten and 2 ones."
}
    ]
};


export default partitionNumbers;

export {

    partitionNumbers

};
