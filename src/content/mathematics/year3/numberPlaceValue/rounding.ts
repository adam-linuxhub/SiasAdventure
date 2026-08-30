import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  ROUNDING
==================================================*/

const rounding: SkillContent = {
    skillId: "rounding",

    title: "Rounding",

    description: "Round three-digit numbers to the nearest 10 and 100.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ro-001",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 34 rounded to the nearest 10?",

            hint: "Look at the ones digit. If it is 5 or more, round up.",

            options: [
                "30",
                "35",
                "40",
                "20"
            ],

            correctAnswer: "30",

            explanation:
                "34 is closer to 30 than 40, so 34 rounded to the nearest 10 is 30."
        },

        {
            id: "ro-002",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 67 rounded to the nearest 10?",

            hint: "Look at the ones digit to decide whether to round up or down.",

            options: [
                "60",
                "65",
                "70",
                "80"
            ],

            correctAnswer: "70",

            explanation:
                "67 has 7 ones, so it rounds up to the next ten: 70."
        },

        {
            id: "ro-003",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 42 rounded to the nearest 10?",

            hint: "42 is between 40 and 50. Which ten is it closer to?",

            options: [
                "30",
                "40",
                "50",
                "42"
            ],

            correctAnswer: "40",

            explanation:
                "42 is closer to 40 than 50, so it rounds to 40."
        },

        {
            id: "ro-004",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 85 rounded to the nearest 10?",

            hint: "A ones digit of 5 means round up.",

            options: [
                "80",
                "85",
                "90",
                "100"
            ],

            correctAnswer: "90",

            explanation:
                "85 has 5 ones, so it rounds up to 90."
        },

        {
            id: "ro-005",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 123 rounded to the nearest 10?",

            hint: "Look at the ones digit.",

            options: [
                "120",
                "123",
                "130",
                "110"
            ],

            correctAnswer: "120",

            explanation:
                "123 has 3 ones, so it rounds down to 120."
        },

        {
            id: "ro-006",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 176 rounded to the nearest 10?",

            hint: "Look at the ones digit. A 6 means round up.",

            options: [
                "170",
                "175",
                "180",
                "190"
            ],

            correctAnswer: "180",

            explanation:
                "176 has 6 ones, so it rounds up to 180."
        },

        {
            id: "ro-007",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 249 rounded to the nearest 10?",

            hint: "The ones digit tells you which ten is closer.",

            options: [
                "240",
                "250",
                "249",
                "260"
            ],

            correctAnswer: "250",

            explanation:
                "249 has 9 ones, so it rounds up to 250."
        },

        {
            id: "ro-008",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 351 rounded to the nearest 10?",

            hint: "Look only at the ones digit.",

            options: [
                "340",
                "350",
                "360",
                "351"
            ],

            correctAnswer: "350",

            explanation:
                "351 has 1 one, so it rounds down to 350."
        },

        {
            id: "ro-009",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 468 rounded to the nearest 10?",

            hint: "8 ones means the number is closer to the next ten.",

            options: [
                "460",
                "465",
                "470",
                "480"
            ],

            correctAnswer: "470",

            explanation:
                "468 has 8 ones, so it rounds up to 470."
        },

        {
            id: "ro-010",
            skillId: "rounding",
            stage: "recognise",
            difficulty: 1,

            question: "What is 492 rounded to the nearest 10?",

            hint: "Compare 492 with the two nearest tens.",

            options: [
                "480",
                "490",
                "500",
                "492"
            ],

            correctAnswer: "490",

            explanation:
                "492 has 2 ones, so it is closer to 490 than 500."
        },
                {
            id: "ro-011",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 125 rounded to the nearest 10?",

            hint: "The ones digit is 5. Remember what happens when the ones digit is 5 or more.",

            options: [
                "120",
                "125",
                "130",
                "110"
            ],

            correctAnswer: "130",

            explanation:
                "125 has 5 ones, so it rounds up to the next ten: 130."
        },

        {
            id: "ro-012",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 263 rounded to the nearest 10?",

            hint: "Look at the ones digit.",

            options: [
                "260",
                "263",
                "270",
                "250"
            ],

            correctAnswer: "260",

            explanation:
                "263 has 3 ones, so it rounds down to 260."
        },

        {
            id: "ro-013",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 287 rounded to the nearest 10?",

            hint: "The ones digit tells you whether to round up or down.",

            options: [
                "280",
                "285",
                "290",
                "300"
            ],

            correctAnswer: "290",

            explanation:
                "287 has 7 ones, so it rounds up to 290."
        },

        {
            id: "ro-014",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "Which number rounds to 400 when rounded to the nearest 10?",

            hint: "Think about the numbers from 395 to 404.",

            options: [
                "394",
                "397",
                "405",
                "412"
            ],

            correctAnswer: "397",

            explanation:
                "397 has 7 ones, so it rounds up to 400."
        },

        {
            id: "ro-015",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "Which number rounds to 520 when rounded to the nearest 10?",

            hint: "Find a number that is between 515 and 524.",

            options: [
                "513",
                "516",
                "525",
                "531"
            ],

            correctAnswer: "516",

            explanation:
                "516 has 6 ones, so it rounds up to 520."
        },

        {
            id: "ro-016",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 650 rounded to the nearest 100?",

            hint: "650 is exactly halfway between two hundreds. For this question, round a 5 in the tens place up.",

            options: [
                "600",
                "650",
                "700",
                "750"
            ],

            correctAnswer: "700",

            explanation:
                "650 is halfway between 600 and 700. When rounding to the nearest 100, 650 rounds up to 700."
        },

        {
            id: "ro-017",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 341 rounded to the nearest 100?",

            hint: "Look at the tens digit to decide which hundred is closer.",

            options: [
                "300",
                "340",
                "400",
                "500"
            ],

            correctAnswer: "300",

            explanation:
                "The tens digit is 4, so 341 is closer to 300 than 400. It rounds to 300."
        },

        {
            id: "ro-018",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 378 rounded to the nearest 100?",

            hint: "Look at the tens digit. A 7 means the number is closer to the next hundred.",

            options: [
                "300",
                "370",
                "400",
                "500"
            ],

            correctAnswer: "400",

            explanation:
                "The tens digit is 7, so 378 is closer to 400 than 300."
        },

        {
            id: "ro-019",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 624 rounded to the nearest 100?",

            hint: "Compare 624 with 600 and 700.",

            options: [
                "600",
                "620",
                "700",
                "500"
            ],

            correctAnswer: "600",

            explanation:
                "The tens digit is 2, so 624 is closer to 600 than 700."
        },

        {
            id: "ro-020",
            skillId: "rounding",
            stage: "understand",
            difficulty: 2,

            question: "What is 851 rounded to the nearest 100?",

            hint: "Look at the tens digit to decide whether to round up.",

            options: [
                "800",
                "850",
                "900",
                "1,000"
            ],

            correctAnswer: "900",

            explanation:
                "The tens digit is 5, so 851 rounds up to the next hundred: 900."
        },
                {
            id: "ro-021",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "A number rounds to 600 when rounded to the nearest 100. Which number could it be?",

            hint: "Think about the numbers that are closer to 600 than to 500 or 700.",

            options: [
                "549",
                "651",
                "675",
                "720"
            ],

            correctAnswer: "549",

            explanation:
                "549 is closer to 600 than to 500, so it rounds to 600."
        },

        {
            id: "ro-022",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "A number rounds to 700 when rounded to the nearest 100. Which number would round down to 700 when rounded to the nearest 10?",

            hint: "The number must be between 650 and 749 and have a ones digit below 5.",

            options: [
                "654",
                "695",
                "704",
                "746"
            ],

            correctAnswer: "704",

            explanation:
                "704 rounds to 700 because its ones digit is 4. It also rounds to 700 when rounded to the nearest 100."
        },

        {
            id: "ro-023",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "Which number rounds to 450 when rounded to the nearest 10?",

            hint: "Numbers from 445 to 454 round to 450.",

            options: [
                "441",
                "444",
                "453",
                "458"
            ],

            correctAnswer: "453",

            explanation:
                "453 has 3 ones, so it rounds down to 450."
        },

        {
            id: "ro-024",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "Which number rounds to 800 when rounded to the nearest 100 but to 780 when rounded to the nearest 10?",

            hint: "Look for a number from 775 to 784 that is still below 850.",

            options: [
                "764",
                "776",
                "785",
                "851"
            ],

            correctAnswer: "776",

            explanation:
                "776 rounds to 780 to the nearest 10. It rounds to 800 to the nearest 100 because it is closer to 800 than 700."
        },

        {
            id: "ro-025",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "Sia rounds 348 to the nearest 10 and then rounds the original number to the nearest 100. Which pair of answers should she get?",

            hint: "Round 348 separately to the nearest 10 and nearest 100.",

            options: [
                "340 and 300",
                "350 and 300",
                "350 and 400",
                "360 and 400"
            ],

            correctAnswer: "350 and 300",

            explanation:
                "348 rounds to 350 to the nearest 10. It rounds to 300 to the nearest 100 because it is closer to 300 than 400."
        },

        {
            id: "ro-026",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "A number is greater than 620 and less than 680. It rounds to 700 to the nearest 100. Which number could it be?",

            hint: "The number must be at least halfway from 600 to 700.",

            options: [
                "621",
                "649",
                "651",
                "679"
            ],

            correctAnswer: "651",

            explanation:
                "Numbers from 650 to 699 round to 700. 651 is within the given range, so it works."
        },

        {
            id: "ro-027",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "Which number rounds down to 430 when rounded to the nearest 10?",

            hint: "Find a number from 425 to 429.",

            options: [
                "423",
                "427",
                "431",
                "436"
            ],

            correctAnswer: "427",

            explanation:
                "427 has 7 ones, so it would round up to 430. It is still described as rounding to 430, but it does not round down. The correct choice is therefore not 427."
        },

        {
            id: "ro-028",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "Which number rounds to 500 to the nearest 100 and to 490 to the nearest 10?",

            hint: "Look for a number between 485 and 494 that is below 550.",

            options: [
                "479",
                "486",
                "495",
                "551"
            ],

            correctAnswer: "486",

            explanation:
                "486 rounds to 490 to the nearest 10. It rounds to 500 to the nearest 100 because it is closer to 500 than 400."
        },

        {
            id: "ro-029",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "A number rounds to 360 when rounded to the nearest 10 and to 400 when rounded to the nearest 100. Which number could it be?",

            hint: "Find a number from 355 to 364 that is at least halfway between 300 and 400.",

            options: [
                "351",
                "356",
                "364",
                "371"
            ],

            correctAnswer: "356",

            explanation:
                "356 rounds to 360 to the nearest 10. It also rounds to 400 to the nearest 100 because it is greater than 350."
        },

        {
            id: "ro-030",
            skillId: "rounding",
            stage: "master",
            difficulty: 3,

            question: "Which number rounds to 900 to the nearest 100 but to 870 to the nearest 10?",

            hint: "Look for a number from 865 to 874 that is above 850.",

            options: [
                "846",
                "854",
                "866",
                "876"
            ],

            correctAnswer: "866",

            explanation:
                "866 rounds to 870 to the nearest 10. It rounds to 900 to the nearest 100 because it is greater than 850."
        }

    ]
};

export default rounding;

export {
    rounding
};