import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const roundToNearest10: SkillContent = {
    skillId: "round-to-nearest-10",

    title: "Round to the Nearest 10",

    description: "Round numbers to the nearest multiple of 10.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "rnt-001",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 23 rounded to the nearest 10?",

            options: [
                "20",
                "30",
                "23",
                "10"
            ],

            correctAnswer: "20",

            hint: "23 is between 20 and 30. Compare how far it is from each multiple of 10.",

            explanation:
                "23 is closer to 20 than to 30."
        },

        {
            id: "rnt-002",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 47 rounded to the nearest 10?",

            options: [
                "50",
                "40",
                "47",
                "60"
            ],

            correctAnswer: "50",

            hint: "Look at the ones digit. Numbers ending in 5, 6, 7, 8 or 9 round up.",

            explanation:
                "47 is closer to 50 than to 40."
        },

        {
            id: "rnt-003",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 61 rounded to the nearest 10?",

            options: [
                "60",
                "70",
                "50",
                "61"
            ],

            correctAnswer: "60",

            hint: "61 is only just above 60. Check which multiple of 10 is nearest.",

            explanation:
                "61 is only 1 away from 60."
        },

        {
            id: "rnt-004",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 85 rounded to the nearest 10?",

            options: [
                "90",
                "80",
                "85",
                "70"
            ],

            correctAnswer: "90",

            hint: "A number ending in 5 sits exactly halfway, so use the rounding rule for halfway numbers.",

            explanation:
                "Numbers ending in 5 round up to the next multiple of 10."
        },

        {
            id: "rnt-005",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "Which multiple of 10 is 72 closest to?",

            options: [
                "70",
                "80",
                "60",
                "90"
            ],

            correctAnswer: "70",

            hint: "72 is between 70 and 80. Count how many steps away it is from each.",

            explanation:
                "72 is 2 away from 70 and 8 away from 80."
        },

        {
            id: "rnt-006",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "Which number rounds to 40?",

            options: [
                "43",
                "46",
                "48",
                "49"
            ],

            correctAnswer: "43",

            hint: "Numbers from 40 to 44 round down to 40. Numbers from 45 onwards round up.",

            explanation:
                "43 is closer to 40 than to 50."
        },

        {
            id: "rnt-007",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 99 rounded to the nearest 10?",

            options: [
                "100",
                "90",
                "99",
                "110"
            ],

            correctAnswer: "100",

            hint: "99 is just before the next multiple of 10. Decide which ten it is closest to.",

            explanation:
                "99 is just 1 away from 100."
        },

        {
            id: "rnt-008",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 14 rounded to the nearest 10?",

            options: [
                "10",
                "20",
                "14",
                "0"
            ],

            correctAnswer: "10",

            hint: "The ones digit is less than 5, so think about rounding down.",

            explanation:
                "14 is closer to 10 than to 20."
        },

        {
            id: "rnt-009",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "Which number rounds to 70?",

            options: [
                "68",
                "74",
                "76",
                "79"
            ],

            correctAnswer: "68",

            hint: "Numbers from 65 to 74 round to 70. Check which option fits that range.",

            explanation:
                "68 is closer to 70 than to 60."
        },

        {
            id: "rnt-010",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 30 rounded to the nearest 10?",

            options: [
                "30",
                "20",
                "40",
                "35"
            ],

            correctAnswer: "30",

            hint: "If a number is already a multiple of 10, it doesn't change when rounded.",

            explanation:
                "30 is already a multiple of 10."
        },

        {
            id: "rnt-011",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "Which number is exactly halfway between 40 and 50?",

            options: [
                "45",
                "44",
                "46",
                "50"
            ],

            correctAnswer: "45",

            hint: "Halfway means the same distance from both 40 and 50.",

            explanation:
                "45 is halfway, so it rounds up to 50."
        },

        {
            id: "rnt-012",
            skillId: "round-to-nearest-10",
            stage: "recognise",

            question: "What is 52 rounded to the nearest 10?",

            options: [
                "50",
                "60",
                "40",
                "52"
            ],

            correctAnswer: "50",

            hint: "Look at the ones digit. Is it less than 5 or at least 5?",

            explanation:
                "52 is closer to 50 than to 60."
        },

        {
            id: "rnt-013",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "Sam says 36 rounds to 30. Is Sam correct?",

            options: [
                "No, it rounds to 40.",
                "Yes",
                "No, it rounds to 20.",
                "No, it stays as 36."
            ],

            correctAnswer: "No, it rounds to 40.",

            hint: "Compare the distance from 36 to 30 and from 36 to 40 before deciding.",

            explanation:
                "36 is 4 away from 40 and 6 away from 30, so it rounds to 40."
        },

        {
            id: "rnt-014",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "Which number rounds to 90?",

            options: [
                "92",
                "84",
                "83",
                "81"
            ],

            correctAnswer: "92",

            hint: "To round to 90, the number must be closer to 90 than to either 80 or 100.",

            explanation:
                "92 is closer to 90 than to 100."
        },

        {
            id: "rnt-015",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "Which statement is true?",

            options: [
                "67 rounds to 70.",
                "67 rounds to 60.",
                "67 rounds to 80.",
                "67 stays as 67."
            ],

            correctAnswer: "67 rounds to 70.",

            hint: "The ones digit is 7, so decide whether that means rounding up or down.",

            explanation:
                "67 is closer to 70 than to 60."
        },

        {
            id: "rnt-016",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "What is 58 rounded to the nearest 10?",

            options: [
                "60",
                "50",
                "58",
                "70"
            ],

            correctAnswer: "60",

            hint: "58 is only a small distance from one of the neighbouring multiples of 10.",

            explanation:
                "58 is closer to 60 than to 50."
        },

        {
            id: "rnt-017",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "What is 81 rounded to the nearest 10?",

            options: [
                "80",
                "90",
                "70",
                "81"
            ],

            correctAnswer: "80",

            hint: "The ones digit is 1, so think about whether to stay with the lower or higher ten.",

            explanation:
                "81 is only 1 away from 80."
        },

        {
            id: "rnt-018",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "Which number rounds to 50?",

            options: [
                "54",
                "56",
                "58",
                "59"
            ],

            correctAnswer: "54",

            hint: "Numbers ending in 0–4 round down to the lower multiple of 10.",

            explanation:
                "54 is closer to 50 than to 60."
        },

        {
            id: "rnt-019",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "Which number is exactly halfway between 80 and 90?",

            options: [
                "85",
                "84",
                "86",
                "90"
            ],

            correctAnswer: "85",

            hint: "Find the number that is 5 more than 80 and 5 less than 90.",

            explanation:
                "85 is halfway, so it rounds up to 90."
        },

        {
            id: "rnt-020",
            skillId: "round-to-nearest-10",
            stage: "understand",

            question: "Ella says 42 rounds to 40. Is she correct?",

            options: [
                "Yes",
                "No, it rounds to 50.",
                "No, it rounds to 30.",
                "No, it stays as 42."
            ],

            correctAnswer: "Yes",

            hint: "42 is between 40 and 50. Work out which multiple of 10 is fewer steps away.",

            explanation:
                "42 is closer to 40 than to 50."
        },

        {
            id: "rnt-021",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "A race is 63 metres long. Rounded to the nearest 10 metres, how long is it?",

            options: [
                "60 metres",
                "70 metres",
                "63 metres",
                "50 metres"
            ],

            correctAnswer: "60 metres",

            hint: "63 has a ones digit smaller than 5, so think about the lower multiple of 10.",

            explanation:
                "63 is closer to 60 than to 70."
        },

        {
            id: "rnt-022",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "A jar contains 87 marbles. Rounded to the nearest 10, how many marbles is that?",

            options: [
                "90",
                "80",
                "100",
                "87"
            ],

            correctAnswer: "90",

            hint: "The ones digit is 7. Numbers ending in 5 or more round up.",

            explanation:
                "87 is closer to 90 than to 80."
        },

        {
            id: "rnt-023",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "Which child rounded correctly?",

            options: [
                "Sam says 74 rounds to 70.",
                "Ava says 74 rounds to 80.",
                "Leo says 74 rounds to 60.",
                "Mia says 74 rounds to 90."
            ],

            correctAnswer: "Sam says 74 rounds to 70.",

            hint: "74 is just below the halfway point of 75, so it stays closer to the lower ten.",

            explanation:
                "74 is 4 away from 70 and 6 away from 80."
        },

        {
            id: "rnt-024",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "A shop sold 95 ice creams. Rounded to the nearest 10, how many is that?",

            options: [
                "100",
                "90",
                "95",
                "80"
            ],

            correctAnswer: "100",

            hint: "95 is exactly halfway between two multiples of 10. Remember what happens at halfway.",

            explanation:
                "95 is halfway between 90 and 100, so it rounds up to 100."
        },

        {
            id: "rnt-025",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "Which number rounds to 30?",

            options: [
                "27",
                "36",
                "38",
                "35"
            ],

            correctAnswer: "27",

            hint: "Numbers from 25 to 34 round to 30. See which option belongs in that range.",

            explanation:
                "27 is closer to 30 than to 20."
        },

        {
            id: "rnt-026",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "A teacher counted 51 books. Rounded to the nearest 10, how many books is that?",

            options: [
                "50",
                "60",
                "40",
                "51"
            ],

            correctAnswer: "50",

            hint: "51 is only one more than a multiple of 10. Choose the nearest one.",

            explanation:
                "51 is just 1 away from 50."
        },

        {
            id: "rnt-027",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "Which number rounds to 100?",

            options: [
                "98",
                "94",
                "91",
                "89"
            ],

            correctAnswer: "98",

            hint: "Only numbers close enough to 100 will round up from the 90s. Compare each option with 100.",

            explanation:
                "98 is closer to 100 than to 90."
        },

        {
            id: "rnt-028",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "A bus carried 46 passengers. Rounded to the nearest 10, how many passengers is that?",

            options: [
                "50",
                "40",
                "46",
                "60"
            ],

            correctAnswer: "50",

            hint: "The ones digit is 6, so decide whether that means rounding up or down.",

            explanation:
                "46 is closer to 50 than to 40."
        },

        {
            id: "rnt-029",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "Which statement is correct?",

            options: [
                "39 rounds to 40.",
                "39 rounds to 30.",
                "39 rounds to 50.",
                "39 stays as 39."
            ],

            correctAnswer: "39 rounds to 40.",

            hint: "39 is almost at the next multiple of 10. Count the distance to 40 and to 30.",

            explanation:
                "39 is only 1 away from 40."
        },

        {
            id: "rnt-030",
            skillId: "round-to-nearest-10",
            stage: "apply",

            question: "Which number rounds to 80?",

            options: [
                "82",
                "74",
                "73",
                "71"
            ],

            correctAnswer: "82",

            hint: "To round to 80, the number must be closer to 80 than to 70 or 90.",

            explanation:
                "82 is closer to 80 than to 90."
        },

        {
            id: "rnt-031",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "What is 34 rounded to the nearest 10?",

            options: [
                "30",
                "40",
                "20",
                "34"
            ],

            correctAnswer: "30",

            hint: "The ones digit is 4, which is below the halfway point.",

            explanation:
                "34 is closer to 30 than to 40."
        },

        {
            id: "rnt-032",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "What is 76 rounded to the nearest 10?",

            options: [
                "80",
                "70",
                "76",
                "90"
            ],

            correctAnswer: "80",

            hint: "76 is above the halfway mark of 75, so think about the higher multiple of 10.",

            explanation:
                "76 is 4 away from 80 and 6 away from 70."
        },

        {
            id: "rnt-033",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which number rounds to 20?",

            options: [
                "22",
                "16",
                "15",
                "29"
            ],

            correctAnswer: "22",

            hint: "Numbers from 20 to 24 round to 20. Halfway numbers move up instead.",

            explanation:
                "22 is closer to 20 than to 30."
        },

        {
            id: "rnt-034",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which number rounds to 60?",

            options: [
                "64",
                "55",
                "54",
                "67"
            ],

            correctAnswer: "64",

            hint: "Look for a number that is still below the halfway point between 60 and 70.",

            explanation:
                "64 is closer to 60 than to 70."
        },

        {
            id: "rnt-035",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which number is exactly halfway between 10 and 20?",

            options: [
                "15",
                "14",
                "16",
                "20"
            ],

            correctAnswer: "15",

            hint: "Find the number that is 5 more than 10 and 5 less than 20.",

            explanation:
                "15 is halfway, so it rounds up to 20."
        },

        {
            id: "rnt-036",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "A class collected 44 cans for recycling. Rounded to the nearest 10, how many cans is that?",

            options: [
                "40",
                "50",
                "44",
                "30"
            ],

            correctAnswer: "40",

            hint: "44 is below the halfway point of 45, so compare it with the lower ten.",

            explanation:
                "44 is closer to 40 than to 50."
        },

        {
            id: "rnt-037",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "A concert had 88 people in the audience. Rounded to the nearest 10, how many people is that?",

            options: [
                "90",
                "80",
                "100",
                "88"
            ],

            correctAnswer: "90",

            hint: "88 is only a short distance from the next multiple of 10.",

            explanation:
                "88 is closer to 90 than to 80."
        },

        {
            id: "rnt-038",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which child rounded correctly?",

            options: [
                "Noah says 65 rounds to 70.",
                "Ella says 65 rounds to 60.",
                "Jack says 65 stays as 65.",
                "Ava says 65 rounds to 50."
            ],

            correctAnswer: "Noah says 65 rounds to 70.",

            hint: "65 is exactly halfway between two tens. Remember the rule for numbers ending in 5.",

            explanation:
                "Numbers ending in 5 round up to the next multiple of 10."
        },

        {
            id: "rnt-039",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which statement is true?",

            options: [
                "91 rounds to 90.",
                "91 rounds to 100.",
                "91 rounds to 80.",
                "91 stays as 91."
            ],

            correctAnswer: "91 rounds to 90.",

            hint: "91 is only one more than a multiple of 10. Choose the nearest ten.",

            explanation:
                "91 is only 1 away from 90."
        },

        {
            id: "rnt-040",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which sequence shows the rounded values correctly?",

            options: [
                "22 → 20, 47 → 50, 81 → 80",
                "22 → 30, 47 → 40, 81 → 90",
                "22 → 20, 47 → 40, 81 → 90",
                "22 → 30, 47 → 50, 81 → 80"
            ],

            correctAnswer: "22 → 20, 47 → 50, 81 → 80",

            hint: "Check each number one at a time instead of trying to judge the whole sequence at once.",

            explanation:
                "Each number has been rounded to the nearest multiple of 10."
        },

        {
            id: "rnt-041",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "A runner completed 53 laps. Rounded to the nearest 10, how many laps is that?",

            options: [
                "50",
                "60",
                "53",
                "40"
            ],

            correctAnswer: "50",

            hint: "53 has a ones digit below 5, so think about the lower multiple of 10.",

            explanation:
                "53 is closer to 50 than to 60."
        },

        {
            id: "rnt-042",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which number rounds to 100?",

            options: [
                "96",
                "94",
                "93",
                "92"
            ],

            correctAnswer: "96",

            hint: "Only numbers from 95 to 99 round up to 100.",

            explanation:
                "96 is closer to 100 than to 90."
        },

        {
            id: "rnt-043",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Mia says 28 rounds to 30. Is she correct?",

            options: [
                "Yes",
                "No, it rounds to 20.",
                "No, it rounds to 40.",
                "No, it stays as 28."
            ],

            correctAnswer: "Yes",

            hint: "Compare how far 28 is from 20 and from 30 before answering.",

            explanation:
                "28 is only 2 away from 30."
        },

        {
            id: "rnt-044",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which number would round to 50?",

            options: [
                "49",
                "44",
                "43",
                "42"
            ],

            correctAnswer: "49",

            hint: "Numbers from 45 to 54 round to 50. Which option is closest to 50?",

            explanation:
                "49 is just 1 away from 50."
        },

        {
            id: "rnt-045",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "A ticket sold for $74. Rounded to the nearest 10 dollars, what is the price?",

            options: [
                "$70",
                "$80",
                "$74",
                "$60"
            ],

            correctAnswer: "$70",

            hint: "74 is still below the halfway point of 75, so it stays nearer the lower ten.",

            explanation:
                "74 is closer to 70 than to 80."
        },

        {
            id: "rnt-046",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which number is NOT rounded correctly?",

            options: [
                "36 → 30",
                "52 → 50",
                "85 → 90",
                "99 → 100"
            ],

            correctAnswer: "36 → 30",

            hint: "Check each example by finding the nearest multiple of 10. One is closer to the higher ten.",

            explanation:
                "36 is closer to 40, so it should round to 40."
        },

        {
            id: "rnt-047",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "A box holds 19 balls. Rounded to the nearest 10, how many balls is that?",

            options: [
                "20",
                "10",
                "19",
                "30"
            ],

            correctAnswer: "20",

            hint: "19 is almost at the next multiple of 10. Count how many away it is.",

            explanation:
                "19 is just 1 away from 20."
        },

        {
            id: "rnt-048",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which number rounds to 0?",

            options: [
                "3",
                "6",
                "8",
                "9"
            ],

            correctAnswer: "3",

            hint: "Numbers from 0 to 4 round down to 0.",

            explanation:
                "3 is closer to 0 than to 10."
        },

        {
            id: "rnt-049",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which statement is correct?",

            options: [
                "45 rounds to 50.",
                "45 rounds to 40.",
                "45 stays as 45.",
                "45 rounds to 30."
            ],

            correctAnswer: "45 rounds to 50.",

            hint: "45 is exactly halfway between 40 and 50, so apply the halfway rule.",

            explanation:
                "Numbers ending in 5 round up to the next multiple of 10."
        },

        {
            id: "rnt-050",
            skillId: "round-to-nearest-10",
            stage: "master",

            question: "Which list has every number rounded correctly?",

            options: [
                "14 → 10, 35 → 40, 67 → 70",
                "14 → 20, 35 → 30, 67 → 60",
                "14 → 10, 35 → 30, 67 → 70",
                "14 → 20, 35 → 40, 67 → 60"
            ],

            correctAnswer: "14 → 10, 35 → 40, 67 → 70",

            hint: "Test each rounding separately. If one number is wrong, the whole list is wrong.",

            explanation:
                "14 rounds to 10, 35 rounds up to 40, and 67 rounds to 70."
        }
    ]
};

export default roundToNearest10;

export {
    roundToNearest10
};