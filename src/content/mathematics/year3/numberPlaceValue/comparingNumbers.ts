import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  COMPARING NUMBERS
==================================================*/

const comparingNumbers: SkillContent = {
    skillId: "comparing-numbers",

    title: "Comparing Numbers",

    description: "Compare three-digit numbers using place value and the symbols greater than, less than and equal to.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "cn-001",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is greater: 345 or 354?",

            hint: "Compare the hundreds first. If they are the same, compare the tens.",

            options: [
                "345",
                "354",
                "They are equal",
                "Neither number"
            ],

            correctAnswer: "354",

            explanation:
                "Both numbers have 3 hundreds, so compare the tens. 5 tens is greater than 4 tens, so 354 is greater."
        },

        {
            id: "cn-002",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is smaller: 621 or 612?",

            hint: "The hundreds are the same, so look at the tens.",

            options: [
                "621",
                "612",
                "They are equal",
                "Both are smaller"
            ],

            correctAnswer: "612",

            explanation:
                "Both numbers have 6 hundreds. 1 ten is less than 2 tens, so 612 is smaller."
        },

        {
            id: "cn-003",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is greater: 708 or 780?",

            hint: "Start by comparing the hundreds, then compare the tens.",

            options: [
                "708",
                "780",
                "They are equal",
                "Both are equal"
            ],

            correctAnswer: "780",

            explanation:
                "Both numbers have 7 hundreds. 8 tens is greater than 0 tens, so 780 is greater."
        },

        {
            id: "cn-004",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is smaller: 456 or 465?",

            hint: "Both numbers have the same hundreds. Compare the tens next.",

            options: [
                "456",
                "465",
                "They are equal",
                "Neither one"
            ],

            correctAnswer: "456",

            explanation:
                "Both numbers have 4 hundreds. 5 tens is less than 6 tens, so 456 is smaller."
        },

        {
            id: "cn-005",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is greater: 892 or 829?",

            hint: "The hundreds are the same, so compare the tens.",

            options: [
                "892",
                "829",
                "They are equal",
                "Neither number"
            ],

            correctAnswer: "892",

            explanation:
                "Both numbers have 8 hundreds. 9 tens is greater than 2 tens, so 892 is greater."
        },

        {
            id: "cn-006",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is smaller: 503 or 530?",

            hint: "Compare the hundreds first, then the tens.",

            options: [
                "503",
                "530",
                "They are equal",
                "Both numbers"
            ],

            correctAnswer: "503",

            explanation:
                "Both numbers have 5 hundreds. 0 tens is less than 3 tens, so 503 is smaller."
        },

        {
            id: "cn-007",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is greater: 276 or 267?",

            hint: "The hundreds are equal. Look at the tens digit.",

            options: [
                "276",
                "267",
                "They are equal",
                "Neither number"
            ],

            correctAnswer: "276",

            explanation:
                "Both numbers have 2 hundreds. 7 tens is greater than 6 tens, so 276 is greater."
        },

        {
            id: "cn-008",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is smaller: 641 or 614?",

            hint: "Compare the hundreds first. Then look at the tens.",

            options: [
                "641",
                "614",
                "They are equal",
                "Both are smaller"
            ],

            correctAnswer: "614",

            explanation:
                "Both numbers have 6 hundreds. 1 ten is less than 4 tens, so 614 is smaller."
        },

        {
            id: "cn-009",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is greater: 425 or 425?",

            hint: "Compare every digit in the two numbers.",

            options: [
                "The first 425",
                "The second 425",
                "They are equal",
                "Neither number"
            ],

            correctAnswer: "They are equal",

            explanation:
                "The numbers have exactly the same hundreds, tens and ones, so they are equal."
        },

        {
            id: "cn-010",
            skillId: "comparing-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number is smaller: 901 or 910?",

            hint: "The hundreds are the same. Compare the tens.",

            options: [
                "901",
                "910",
                "They are equal",
                "Neither number"
            ],

            correctAnswer: "901",

            explanation:
                "Both numbers have 9 hundreds. 0 tens is less than 1 ten, so 901 is smaller."
        },
                {
            id: "cn-011",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which symbol makes this statement correct? 438 □ 483",

            hint: "Compare the hundreds first. If they match, compare the tens.",

            options: [
                ">",
                "<",
                "=",
                "≠"
            ],

            correctAnswer: "<",

            explanation:
                "Both numbers have 4 hundreds, but 3 tens is less than 8 tens. Therefore, 438 is less than 483."
        },

        {
            id: "cn-012",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which symbol makes this statement correct? 672 □ 627",

            hint: "The hundreds are the same, so compare the tens.",

            options: [
                "<",
                ">",
                "=",
                "≠"
            ],

            correctAnswer: ">",

            explanation:
                "Both numbers have 6 hundreds. 7 tens is greater than 2 tens, so 672 is greater than 627."
        },

        {
            id: "cn-013",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which symbol makes this statement correct? 505 □ 550",

            hint: "Compare the hundreds first, then compare the tens.",

            options: [
                ">",
                "<",
                "=",
                "≠"
            ],

            correctAnswer: "<",

            explanation:
                "Both numbers have 5 hundreds. 0 tens is less than 5 tens, so 505 is less than 550."
        },

        {
            id: "cn-014",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number is closest to 600?",

            hint: "Find how far each number is from 600.",

            options: [
                "578",
                "589",
                "612",
                "625"
            ],

            correctAnswer: "589",

            explanation:
                "589 is 11 away from 600. The other numbers are further away, so 589 is closest."
        },

        {
            id: "cn-015",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number is greater than 470 but less than 480?",

            hint: "The number must be between 470 and 480.",

            options: [
                "467",
                "475",
                "480",
                "487"
            ],

            correctAnswer: "475",

            explanation:
                "475 is greater than 470 and less than 480."
        },

        {
            id: "cn-016",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number is less than 305?",

            hint: "Compare the hundreds first, then the tens and ones if needed.",

            options: [
                "350",
                "315",
                "305",
                "298"
            ],

            correctAnswer: "298",

            explanation:
                "298 is less than 305. The other choices are either equal to or greater than 305."
        },

        {
            id: "cn-017",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which statement is correct?",

            hint: "Compare the two numbers in each statement.",

            options: [
                "462 > 426",
                "518 < 501",
                "730 < 703",
                "284 = 248"
            ],

            correctAnswer: "462 > 426",

            explanation:
                "Both numbers have 4 hundreds, but 6 tens is greater than 2 tens. Therefore, 462 is greater than 426."
        },

        {
            id: "cn-018",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number is between 650 and 670?",

            hint: "Look for a number greater than 650 but less than 670.",

            options: [
                "645",
                "660",
                "670",
                "680"
            ],

            correctAnswer: "660",

            explanation:
                "660 is greater than 650 and less than 670, so it is between the two numbers."
        },

        {
            id: "cn-019",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which is the greatest number?",

            hint: "Compare the hundreds first. If they match, compare the tens.",

            options: [
                "398",
                "389",
                "408",
                "380"
            ],

            correctAnswer: "408",

            explanation:
                "408 has 4 hundreds, while the other numbers have only 3 hundreds. Therefore, 408 is greatest."
        },

        {
            id: "cn-020",
            skillId: "comparing-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which is the smallest number?",

            hint: "Compare the hundreds before looking at the other digits.",

            options: [
                "701",
                "710",
                "699",
                "709"
            ],

            correctAnswer: "699",

            explanation:
                "699 has 6 hundreds, while all the other numbers have 7 hundreds. Therefore, 699 is the smallest."
        },
                {
            id: "cn-021",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Sia has to choose the greater number. Which pair has 704 as the greater number?",

            hint: "Compare the hundreds first, then the tens and ones if necessary.",

            options: [
                "704 or 740",
                "704 or 699",
                "704 or 740",
                "704 or 749"
            ],

            correctAnswer: "704 or 699",

            explanation:
                "704 has 7 hundreds, while 699 has only 6 hundreds. Therefore, 704 is greater than 699."
        },

        {
            id: "cn-022",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number is greater than 538 but less than 548?",

            hint: "The number must be between the two given numbers.",

            options: [
                "528",
                "538",
                "543",
                "548"
            ],

            correctAnswer: "543",

            explanation:
                "543 is greater than 538 and less than 548, so it satisfies both conditions."
        },

        {
            id: "cn-023",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number is closest to 750?",

            hint: "Work out how far each number is from 750.",

            options: [
                "724",
                "738",
                "763",
                "779"
            ],

            correctAnswer: "738",

            explanation:
                "738 is 12 away from 750. The other numbers are further away, so 738 is closest."
        },

        {
            id: "cn-024",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which statement is true?",

            hint: "Compare the hundreds first, then the tens and ones.",

            options: [
                "596 > 659",
                "608 < 680",
                "721 < 712",
                "845 = 854"
            ],

            correctAnswer: "608 < 680",

            explanation:
                "Both numbers have 6 hundreds, but 0 tens is less than 8 tens. Therefore, 608 is less than 680."
        },

        {
            id: "cn-025",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "A number is greater than 620 but less than 630. Which could it be?",

            hint: "Find a number strictly between 620 and 630.",

            options: [
                "619",
                "620",
                "625",
                "630"
            ],

            correctAnswer: "625",

            explanation:
                "625 is greater than 620 and less than 630, so it fits both conditions."
        },

        {
            id: "cn-026",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number is closest to 500?",

            hint: "Compare the distance from 500 rather than just looking at the digits.",

            options: [
                "472",
                "491",
                "514",
                "528"
            ],

            correctAnswer: "491",

            explanation:
                "491 is 9 away from 500. The other numbers are further away, so 491 is closest."
        },

        {
            id: "cn-027",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number is greater than 399 but less than 410?",

            hint: "The answer must be above 399 and below 410.",

            options: [
                "398",
                "399",
                "405",
                "410"
            ],

            correctAnswer: "405",

            explanation:
                "405 is greater than 399 and less than 410, so it meets both conditions."
        },

        {
            id: "cn-028",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number is greatest: 690, 609, 699 or 689?",

            hint: "All the numbers have 6 hundreds. Compare their tens next.",

            options: [
                "690",
                "609",
                "699",
                "689"
            ],

            correctAnswer: "699",

            explanation:
                "All four numbers have 6 hundreds. 699 has 9 tens and 9 ones, making it greater than the other choices."
        },

        {
            id: "cn-029",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "A number is less than 725 but greater than 715. Which number could it be?",

            hint: "Look for a number strictly between 715 and 725.",

            options: [
                "705",
                "715",
                "720",
                "725"
            ],

            correctAnswer: "720",

            explanation:
                "720 is greater than 715 and less than 725, so it fits both conditions."
        },

        {
            id: "cn-030",
            skillId: "comparing-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number is closest to 900?",

            hint: "Find the number with the smallest difference from 900.",

            options: [
                "879",
                "892",
                "914",
                "925"
            ],

            correctAnswer: "892",

            explanation:
                "892 is 8 away from 900. The other choices are further away, so 892 is closest."
        }

    ]
};

export default comparingNumbers;

export {
    comparingNumbers
};