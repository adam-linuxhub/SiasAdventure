import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  ORDERING NUMBERS
==================================================*/

const orderingNumbers: SkillContent = {
    skillId: "ordering-numbers",

    title: "Ordering Numbers",

    description: "Order three-digit numbers from smallest to greatest and from greatest to smallest using place value.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "on-001",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which list is in order from smallest to greatest?",

            hint: "Start with the smallest number and work upwards.",

            options: [
                "245, 254, 425",
                "254, 245, 425",
                "425, 254, 245",
                "245, 425, 254"
            ],

            correctAnswer: "245, 254, 425",

            explanation:
                "245 is smallest, then 254, and 425 is greatest."
        },

        {
            id: "on-002",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which list is in order from greatest to smallest?",

            hint: "Start with the greatest number and work downwards.",

            options: [
                "316, 361, 613",
                "613, 361, 316",
                "361, 613, 316",
                "613, 316, 361"
            ],

            correctAnswer: "613, 361, 316",

            explanation:
                "613 is greatest, followed by 361, then 316."
        },

        {
            id: "on-003",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Put these numbers in order from smallest to greatest: 520, 205, 502.",

            hint: "Compare the hundreds first.",

            options: [
                "205, 502, 520",
                "205, 520, 502",
                "502, 205, 520",
                "520, 502, 205"
            ],

            correctAnswer: "205, 502, 520",

            explanation:
                "205 has 2 hundreds, while 502 and 520 have 5 hundreds. Between 502 and 520, 502 is smaller."
        },

        {
            id: "on-004",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Put these numbers in order from greatest to smallest: 740, 704, 470.",

            hint: "Look at the hundreds digit first.",

            options: [
                "740, 704, 470",
                "704, 740, 470",
                "470, 704, 740",
                "740, 470, 704"
            ],

            correctAnswer: "740, 704, 470",

            explanation:
                "740 and 704 both have 7 hundreds. 740 has more tens, so it comes first. 470 has only 4 hundreds."
        },

        {
            id: "on-005",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number should come first when ordering these from smallest to greatest? 389, 298, 398",

            hint: "Compare the hundreds digits first.",

            options: [
                "389",
                "298",
                "398",
                "They are equal"
            ],

            correctAnswer: "298",

            explanation:
                "298 has 2 hundreds, while 389 and 398 have 3 hundreds. Therefore, 298 is smallest."
        },

        {
            id: "on-006",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number should come last when ordering these from smallest to greatest? 615, 651, 516",

            hint: "The last number will be the greatest.",

            options: [
                "615",
                "651",
                "516",
                "All are equal"
            ],

            correctAnswer: "651",

            explanation:
                "651 is greatest because it has 6 hundreds and 5 tens, which is more than the other choices."
        },

        {
            id: "on-007",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which list is in order from smallest to greatest?",

            hint: "Check each neighbouring pair from left to right.",

            options: [
                "407, 470, 704",
                "470, 407, 704",
                "704, 470, 407",
                "407, 704, 470"
            ],

            correctAnswer: "407, 470, 704",

            explanation:
                "407 is smallest, then 470, and 704 is greatest."
        },

        {
            id: "on-008",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Put these numbers in order from smallest to greatest: 126, 162, 216.",

            hint: "Compare the hundreds first, then the tens.",

            options: [
                "126, 162, 216",
                "162, 126, 216",
                "216, 162, 126",
                "126, 216, 162"
            ],

            correctAnswer: "126, 162, 216",

            explanation:
                "126 and 162 have 1 hundred, while 216 has 2 hundreds. Between 126 and 162, 126 is smaller."
        },

        {
            id: "on-009",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Which number should come first? 803, 380, 830",

            hint: "The smallest number comes first. Compare the hundreds.",

            options: [
                "803",
                "380",
                "830",
                "They are equal"
            ],

            correctAnswer: "380",

            explanation:
                "380 has 3 hundreds, while 803 and 830 both have 8 hundreds. Therefore, 380 is smallest."
        },

        {
            id: "on-010",
            skillId: "ordering-numbers",
            stage: "recognise",
            difficulty: 1,

            question: "Put these numbers in order from greatest to smallest: 925, 952, 295.",

            hint: "Find the greatest hundreds value first.",

            options: [
                "952, 925, 295",
                "925, 952, 295",
                "295, 925, 952",
                "952, 295, 925"
            ],

            correctAnswer: "952, 925, 295",

            explanation:
                "952 is greatest, followed by 925. 295 is smallest because it has only 2 hundreds."
        },
                {
            id: "on-011",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Put these numbers in order from smallest to greatest: 438, 348, 483.",

            hint: "Compare the hundreds digits first. If two match, compare the tens.",

            options: [
                "348, 438, 483",
                "438, 348, 483",
                "483, 438, 348",
                "348, 483, 438"
            ],

            correctAnswer: "348, 438, 483",

            explanation:
                "348 has 3 hundreds, so it is smallest. Between 438 and 483, 4 tens is less than 8 tens, so 438 comes before 483."
        },

        {
            id: "on-012",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Put these numbers in order from greatest to smallest: 562, 526, 652.",

            hint: "Start with the number that has the greatest hundreds digit.",

            options: [
                "652, 562, 526",
                "562, 652, 526",
                "526, 562, 652",
                "652, 526, 562"
            ],

            correctAnswer: "652, 562, 526",

            explanation:
                "652 has the greatest hundreds digit. Between 562 and 526, both have 5 hundreds, but 6 tens is greater than 2 tens."
        },

        {
            id: "on-013",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number belongs between 416 and 461 when the numbers are ordered from smallest to greatest?",

            hint: "The number must be greater than 416 but less than 461.",

            options: [
                "406",
                "426",
                "461",
                "481"
            ],

            correctAnswer: "426",

            explanation:
                "426 is greater than 416 and less than 461, so it belongs between them."
        },

        {
            id: "on-014",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Put these numbers in order from smallest to greatest: 705, 570, 750, 507.",

            hint: "First separate the numbers with 5 hundreds from those with 7 hundreds.",

            options: [
                "507, 570, 705, 750",
                "570, 507, 705, 750",
                "507, 705, 570, 750",
                "750, 705, 570, 507"
            ],

            correctAnswer: "507, 570, 705, 750",

            explanation:
                "507 is smaller than 570 because both have 5 hundreds but 0 tens is less than 7 tens. Then come 705 and 750."
        },

        {
            id: "on-015",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number should come third when these are ordered from smallest to greatest? 214, 421, 241, 412.",

            hint: "Put all four numbers in order before choosing the third one.",

            options: [
                "214",
                "241",
                "412",
                "421"
            ],

            correctAnswer: "412",

            explanation:
                "The correct order is 214, 241, 412, 421. Therefore, 412 is third."
        },

        {
            id: "on-016",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number should come second when these are ordered from greatest to smallest? 638, 683, 368, 836.",

            hint: "Find the two greatest numbers first.",

            options: [
                "638",
                "683",
                "368",
                "836"
            ],

            correctAnswer: "683",

            explanation:
                "The order from greatest to smallest is 836, 683, 638, 368. Therefore, 683 is second."
        },

        {
            id: "on-017",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which list is correctly ordered from smallest to greatest?",

            hint: "Check the hundreds, then the tens, then the ones.",

            options: [
                "329, 392, 923",
                "329, 923, 392",
                "392, 329, 923",
                "923, 392, 329"
            ],

            correctAnswer: "329, 392, 923",

            explanation:
                "329 is smaller than 392 because 2 tens is less than 9 tens. Both are smaller than 923 because they have fewer hundreds."
        },

        {
            id: "on-018",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Put these numbers in order from greatest to smallest: 804, 840, 408, 480.",

            hint: "Compare the hundreds first. Then compare the tens when the hundreds match.",

            options: [
                "840, 804, 480, 408",
                "804, 840, 480, 408",
                "480, 408, 840, 804",
                "840, 480, 804, 408"
            ],

            correctAnswer: "840, 804, 480, 408",

            explanation:
                "840 is greater than 804 because 4 tens is greater than 0 tens. Likewise, 480 is greater than 408."
        },

        {
            id: "on-019",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Which number should come first when ordering these from smallest to greatest? 609, 690, 609, 906.",

            hint: "Look for the smallest number. Remember that equal numbers can have the same position in an ordered list.",

            options: [
                "609",
                "690",
                "906",
                "They are all different"
            ],

            correctAnswer: "609",

            explanation:
                "609 is smaller than 690 and 906. There are two copies of 609, and both are equal."
        },

        {
            id: "on-020",
            skillId: "ordering-numbers",
            stage: "understand",
            difficulty: 2,

            question: "Four children write these numbers: 352, 325, 532 and 523. Who has the second greatest number?",

            hint: "Order all four numbers from greatest to smallest first.",

            options: [
                "352",
                "325",
                "532",
                "523"
            ],

            correctAnswer: "523",

            explanation:
                "From greatest to smallest, the numbers are 532, 523, 352, 325. Therefore, 523 is second greatest."
        },
                {
            id: "on-021",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "Four numbers are 418, 481, 814 and 841. Which number is second smallest?",

            hint: "Put all four numbers in order from smallest to greatest.",

            options: [
                "418",
                "481",
                "814",
                "841"
            ],

            correctAnswer: "481",

            explanation:
                "The numbers in order are 418, 481, 814, 841. Therefore, 481 is second smallest."
        },

        {
            id: "on-022",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "Put these numbers in order from smallest to greatest: 506, 560, 506, 650.",

            hint: "Remember that two numbers can be equal and still appear next to each other.",

            options: [
                "506, 506, 560, 650",
                "506, 560, 506, 650",
                "650, 560, 506, 506",
                "506, 650, 560, 506"
            ],

            correctAnswer: "506, 506, 560, 650",

            explanation:
                "The two 506s are equal and come first. Then comes 560, followed by 650."
        },

        {
            id: "on-023",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number is third when these are ordered from greatest to smallest? 729, 792, 279, 927.",

            hint: "Start with the greatest hundreds digit and work down.",

            options: [
                "729",
                "792",
                "279",
                "927"
            ],

            correctAnswer: "729",

            explanation:
                "The order is 927, 792, 729, 279. Therefore, 729 is third."
        },

        {
            id: "on-024",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which list puts these numbers in the correct order from smallest to greatest: 398, 389, 839, 893?",

            hint: "Compare the hundreds first. Then compare the tens when the hundreds match.",

            options: [
                "389, 398, 839, 893",
                "398, 389, 839, 893",
                "389, 839, 398, 893",
                "893, 839, 398, 389"
            ],

            correctAnswer: "389, 398, 839, 893",

            explanation:
                "389 comes before 398 because 8 tens is less than 9 tens. Among the 8-hundreds numbers, 839 comes before 893."
        },

        {
            id: "on-025",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "A teacher orders 405, 450 and 504 from smallest to greatest. Which number is in the middle?",

            hint: "The middle number has one number smaller and one number greater than it.",

            options: [
                "405",
                "450",
                "504",
                "None of them"
            ],

            correctAnswer: "450",

            explanation:
                "The numbers are already in order: 405, 450, 504. Therefore, 450 is in the middle."
        },

        {
            id: "on-026",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number should be added to this list so it stays in order? 320, 350, ___, 410",

            hint: "The missing number must be greater than 350 but less than 410.",

            options: [
                "305",
                "340",
                "380",
                "420"
            ],

            correctAnswer: "380",

            explanation:
                "380 is greater than 350 and less than 410, so it can fit between them."
        },

        {
            id: "on-027",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which number should be removed so the remaining numbers are in order from smallest to greatest? 214, 241, 421, 412",

            hint: "Look at the final two numbers. Which one is in the wrong position?",

            options: [
                "214",
                "241",
                "421",
                "412"
            ],

            correctAnswer: "421",

            explanation:
                "The correct order is 214, 241, 412, 421. Removing 421 leaves the other three already in order."
        },

        {
            id: "on-028",
            skillId: "number-sequences",
            stage: "master",
            difficulty: 3,

            question: "Four numbers are 675, 657, 756 and 765. Which number is second greatest?",

            hint: "Put the four numbers in order from greatest to smallest.",

            options: [
                "675",
                "657",
                "756",
                "765"
            ],

            correctAnswer: "756",

            explanation:
                "The order from greatest to smallest is 765, 756, 675, 657. Therefore, 756 is second greatest."
        },

        {
            id: "on-029",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "A number must be greater than 438 but smaller than 483. Which number could be placed between them?",

            hint: "The answer must be strictly between 438 and 483.",

            options: [
                "428",
                "438",
                "460",
                "483"
            ],

            correctAnswer: "460",

            explanation:
                "460 is greater than 438 and smaller than 483, so it can be placed between them."
        },

        {
            id: "on-030",
            skillId: "ordering-numbers",
            stage: "master",
            difficulty: 3,

            question: "Which list is correctly ordered from greatest to smallest?",

            hint: "Compare the hundreds first, then the tens and ones.",

            options: [
                "908, 890, 809, 809",
                "890, 908, 809, 809",
                "908, 809, 890, 809",
                "809, 809, 890, 908"
            ],

            correctAnswer: "908, 890, 809, 809",

            explanation:
                "908 is greatest, followed by 890. The two 809s are equal and come last."
        }

    ]
};

export default orderingNumbers;

export {
    orderingNumbers
};