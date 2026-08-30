import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const estimateAnswersToCalculations: SkillContent = {
    skillId: "estimate-answers-to-calculations",

    title: "Estimate Answers to Calculations",

    description: "Estimate the answers to addition and subtraction calculations by rounding numbers.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "eac-001",
            skillId: "estimate-answers-to-calculations",
            stage: "recognise",

            question: "About what is 48 + 31?",

            options: [
                "80",
                "70",
                "90",
                "60"
            ],

            correctAnswer: "80",

            hint: "Round each number to the nearest ten before adding. Think about whether 48 is closer to 40 or 50, and whether 31 is closer to 30 or 40.",

            explanation:
                "Round 48 to 50 and 31 to 30. 50 + 30 = 80."

        },

        {
            id: "eac-002",
            skillId: "estimate-answers-to-calculations",
            stage: "recognise",

            question: "About what is 62 - 18?",

            options: [
                "40",
                "50",
                "30",
                "60"
            ],

            correctAnswer: "40",

            hint: "Estimate by rounding both numbers to the nearest ten first. Then subtract the rounded numbers instead of the originals.",

            explanation:
                "Round 62 to 60 and 18 to 20. 60 − 20 = 40."

        },

        {
            id: "eac-003",
            skillId: "estimate-answers-to-calculations",
            stage: "recognise",

            question: "Round first, then estimate: 73 + 24",

            options: [
                "100",
                "90",
                "80",
                "110"
            ],

            correctAnswer: "100",

            hint: "Work out the rounded numbers yourself before looking at the options. If your estimate isn't listed, compare it with the choices and the explanation.",

            explanation:
                "73 rounds to 70 and 24 rounds to 20. 70 + 20 = 90. Wait—that isn't 100. Instead, 73 rounds to 70 and 24 rounds to 20, so the estimate is 90."

        },

        {
            id: "eac-016",
            skillId: "estimate-answers-to-calculations",
            stage: "understand",

            question: "Estimate 66 + 23.",

            options: [
                "90",
                "80",
                "100",
                "70"
            ],

            correctAnswer: "90",

            hint: "Look at the ones digits. A 6 rounds up to the next ten, while a 3 rounds down to the previous ten.",

            explanation:
                "66 rounds to 70 and 23 rounds to 20. 70 + 20 = 90."

        },

        {
            id: "eac-017",
            skillId: "estimate-answers-to-calculations",
            stage: "understand",

            question: "Estimate 82 - 39.",

            options: [
                "40",
                "50",
                "30",
                "60"
            ],

            correctAnswer: "40",

            hint: "Round the larger number and the smaller number separately before subtracting. Notice that 39 is only one away from the next ten.",

            explanation:
                "82 rounds to 80 and 39 rounds to 40. 80 − 40 = 40."

        },

        {
            id: "eac-018",
            skillId: "estimate-answers-to-calculations",
            stage: "understand",

            question: "Which calculation is best estimated by 90 + 20?",

            options: [
                "92 + 21",
                "84 + 33",
                "71 + 16",
                "95 + 44"
            ],

            correctAnswer: "92 + 21",

            hint: "Round both numbers in each option. Only one pair becomes exactly 90 and 20 after rounding.",

            explanation:
                "92 rounds to 90 and 21 rounds to 20."

        },

        {
            id: "eac-019",
            skillId: "estimate-answers-to-calculations",
            stage: "understand",

            question: "Which child estimated correctly?",

            options: [
                "Ella: 61 + 18 ≈ 80",
                "Ben: 61 + 18 ≈ 70",
                "Sam: 61 + 18 ≈ 90",
                "Leo: 61 + 18 ≈ 60"
            ],

            correctAnswer: "Ella: 61 + 18 ≈ 80",

            hint: "Ignore the children's answers at first. Estimate 61 + 18 yourself by rounding, then find the child whose estimate matches yours.",

            explanation:
                "61 rounds to 60 and 18 rounds to 20. 60 + 20 = 80."

        },
        {
            id: "eac-020",
            skillId: "estimate-answers-to-calculations",
            stage: "understand",

            question: "Which child estimated correctly?",

            options: [
                "Ben: 88 - 32 ≈ 60",
                "Ella: 88 - 32 ≈ 50",
                "Sam: 88 - 32 ≈ 40",
                "Leo: 88 - 32 ≈ 70"
            ],

            correctAnswer: "Ben: 88 - 32 ≈ 60",

            hint: "Don't compare the children's answers straight away. Round 88 and 32 to the nearest tens, subtract them, then see whose estimate matches.",

            explanation:
                "88 rounds to 90 and 32 rounds to 30. 90 − 30 = 60."

        },

        {
            id: "eac-021",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "About how many children are there altogether? 46 boys and 32 girls.",

            options: [
                "80",
                "70",
                "90",
                "60"
            ],

            correctAnswer: "80",

            hint: "This is an 'altogether' question, so estimate by adding. Round each group to the nearest ten before combining them.",

            explanation:
                "46 rounds to 50 and 32 rounds to 30. 50 + 30 = 80."

        },

        {
            id: "eac-022",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "A shop has 83 toys and sells 24. About how many toys are left?",

            options: [
                "60",
                "50",
                "70",
                "40"
            ],

            correctAnswer: "60",

            hint: "Because toys are sold, the number gets smaller. Round each number first, then subtract to find an estimate of what remains.",

            explanation:
                "83 rounds to 80 and 24 rounds to 20. 80 − 20 = 60."

        },

        {
            id: "eac-023",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "About how far did a cyclist travel? 57 miles on Saturday and 21 miles on Sunday.",

            options: [
                "80 miles",
                "70 miles",
                "90 miles",
                "60 miles"
            ],

            correctAnswer: "80 miles",

            hint: "The cyclist travelled on two different days, so combine the distances. Round each day's journey before adding.",

            explanation:
                "57 rounds to 60 and 21 rounds to 20. 60 + 20 = 80."

        },

        {
            id: "eac-024",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "A library had 74 books on a shelf. It moved 31 books. About how many books remain?",

            options: [
                "40",
                "50",
                "30",
                "60"
            ],

            correctAnswer: "40",

            hint: "Moving books away means fewer books are left. Estimate the starting amount and the number moved before subtracting.",

            explanation:
                "74 rounds to 70 and 31 rounds to 30. 70 − 30 = 40."

        },

        {
            id: "eac-025",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "Which estimate is closest to 52 + 27?",

            options: [
                "80",
                "70",
                "90",
                "60"
            ],

            correctAnswer: "80",

            hint: "Round each addend separately. One rounds down to the nearest ten and the other rounds up.",

            explanation:
                "52 rounds to 50 and 27 rounds to 30. 50 + 30 = 80."

        },

        {
            id: "eac-026",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "Which estimate is closest to 91 - 18?",

            options: [
                "70",
                "80",
                "60",
                "90"
            ],

            correctAnswer: "70",

            hint: "Round both numbers first. The answer should be a little smaller than the rounded larger number because you're taking away about two tens.",

            explanation:
                "91 rounds to 90 and 18 rounds to 20. 90 − 20 = 70."

        },

        {
            id: "eac-027",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "Estimate the total of 39 and 41.",

            options: [
                "80",
                "70",
                "90",
                "60"
            ],

            correctAnswer: "80",

            hint: "Notice that one number is just below a multiple of ten and the other is just above one. Round each before adding.",

            explanation:
                "39 rounds to 40 and 41 rounds to 40. 40 + 40 = 80."

        },

        {
            id: "eac-028",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "Estimate 67 - 31.",

            options: [
                "40",
                "30",
                "50",
                "20"
            ],

            correctAnswer: "40",

            hint: "Estimate by replacing each number with the nearest ten. Then subtract the rounded values instead of the exact ones.",

            explanation:
                "67 rounds to 70 and 31 rounds to 30. 70 − 30 = 40."

        },

        {
            id: "eac-029",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "Which pair of rounded numbers would you use to estimate 44 + 53?",

            options: [
                "40 + 50",
                "50 + 60",
                "40 + 60",
                "50 + 50"
            ],

            correctAnswer: "40 + 50",

            hint: "You are choosing the rounded numbers, not the answer. Round 44 and 53 separately before looking at the options.",

            explanation:
                "44 rounds to 40 and 53 rounds to 50."

        },

        {
            id: "eac-030",
            skillId: "estimate-answers-to-calculations",
            stage: "apply",

            question: "Which estimate is most sensible for 76 + 12?",

            options: [
                "90",
                "80",
                "100",
                "70"
            ],

            correctAnswer: "90",

            hint: "One number rounds to the nearest multiple of ten above it, while the other rounds down. Add those rounded values.",

            explanation:
                "76 rounds to 80 and 12 rounds to 10. 80 + 10 = 90."

        },

        {
            id: "eac-031",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Estimate 138 + 64.",

            options: [
                "200",
                "190",
                "210",
                "180"
            ],

            correctAnswer: "200",

            hint: "These numbers are larger, but the idea is the same. Round each to the nearest ten before adding.",

            explanation:
                "138 rounds to 140 and 64 rounds to 60. 140 + 60 = 200."

        },

        {
            id: "eac-032",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Estimate 247 - 91.",

            options: [
                "160",
                "150",
                "170",
                "140"
            ],

            correctAnswer: "160",

            hint: "Round each number to the nearest ten. Think about whether 247 is closer to 240 or 250 before subtracting.",

            explanation:
                "247 rounds to 250 and 91 rounds to 90. 250 − 90 = 160."

        },

        {
            id: "eac-033",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which calculation is best estimated by 150 + 70?",

            options: [
                "149 + 68",
                "162 + 81",
                "138 + 52",
                "174 + 91"
            ],

            correctAnswer: "149 + 68",

            hint: "Round both numbers in every option. Only one pair becomes exactly 150 and 70 after rounding.",

            explanation:
                "149 rounds to 150 and 68 rounds to 70."

        },

        {
            id: "eac-034",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Ella estimates 186 + 41 as 190 + 40 = 230. Is her estimate sensible?",

            options: [
                "Yes",
                "No, it should be about 180.",
                "No, it should be about 260.",
                "No, it should be about 140."
            ],

            correctAnswer: "Yes",

            hint: "Check whether both numbers have been rounded correctly before deciding if the estimated total makes sense.",

            explanation:
                "186 rounds to 190 and 41 rounds to 40, giving about 230."

        },
        {
            id: "eac-035",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Ben estimates 273 - 82 as 270 - 80 = 190. Is his estimate sensible?",

            options: [
                "Yes",
                "No, it should be about 170.",
                "No, it should be about 210.",
                "No, it should be about 250."
            ],

            correctAnswer: "Yes",

            hint: "Check each rounded number separately. If both numbers have been rounded correctly, test whether the subtraction gives a reasonable estimate.",

            explanation:
                "273 rounds to 270 and 82 rounds to 80. 270 − 80 = 190."

        },

        {
            id: "eac-036",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "A school has 154 pupils in one building and 73 in another. About how many pupils are there altogether?",

            options: [
                "230",
                "220",
                "210",
                "240"
            ],

            correctAnswer: "230",

            hint: "Estimate the number in each building first. One rounds down while the other rounds up before you add them together.",

            explanation:
                "154 rounds to 150 and 73 rounds to 80. 150 + 80 = 230."

        },

        {
            id: "eac-037",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "A library has 312 books. About 88 are borrowed. About how many books remain?",

            options: [
                "220",
                "200",
                "230",
                "210"
            ],

            correctAnswer: "220",

            hint: "Because books are borrowed, estimate by subtracting. Round both numbers to the nearest ten before finding what is left.",

            explanation:
                "312 rounds to 310 and 88 rounds to 90. 310 − 90 = 220."

        },

        {
            id: "eac-038",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which estimate is closest to 289 + 114?",

            options: [
                "400",
                "390",
                "420",
                "380"
            ],

            correctAnswer: "400",

            hint: "Round each number to the nearest ten. Think carefully about whether 289 is closer to 280 or 290.",

            explanation:
                "289 rounds to 290 and 114 rounds to 110. 290 + 110 = 400."

        },

        {
            id: "eac-039",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which estimate is closest to 406 - 193?",

            options: [
                "210",
                "200",
                "220",
                "190"
            ],

            correctAnswer: "210",

            hint: "Round each number before subtracting. Notice that one number rounds up to the next ten while the other also rounds up.",

            explanation:
                "406 rounds to 410 and 193 rounds to 200. 410 − 200 = 210."

        },

        {
            id: "eac-040",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which answer is unreasonable for 51 + 28?",

            options: [
                "160",
                "80",
                "70",
                "90"
            ],

            correctAnswer: "160",

            hint: "Estimate the sum first. Any sensible answer should be close to that estimate, not twice as large.",

            explanation:
                "51 + 28 is about 80, so 160 is far too large."

        },

        {
            id: "eac-041",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which answer is unreasonable for 97 - 39?",

            options: [
                "120",
                "60",
                "50",
                "70"
            ],

            correctAnswer: "120",

            hint: "When you subtract a positive number, the answer must be smaller than the starting number. Use that fact before estimating.",

            explanation:
                "Subtracting cannot give a larger answer than the starting number."

        },

        {
            id: "eac-042",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which pair of rounded numbers would you use to estimate 243 + 56?",

            options: [
                "240 + 60",
                "250 + 50",
                "200 + 60",
                "250 + 60"
            ],

            correctAnswer: "240 + 60",

            hint: "Round each number independently. Choose the option that matches both rounded values, not just one of them.",

            explanation:
                "243 rounds to 240 and 56 rounds to 60."

        },

        {
            id: "eac-043",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "A shop sold 179 apples in the morning and 42 in the afternoon. About how many apples were sold?",

            options: [
                "220",
                "210",
                "230",
                "200"
            ],

            correctAnswer: "220",

            hint: "Both groups of apples were sold, so estimate the total by rounding each amount before adding.",

            explanation:
                "179 rounds to 180 and 42 rounds to 40. 180 + 40 = 220."

        },

        {
            id: "eac-044",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "A farmer had 362 sheep. About 147 were moved to another field. About how many stayed behind?",

            options: [
                "220",
                "210",
                "230",
                "200"
            ],

            correctAnswer: "220",

            hint: "The sheep moved away are no longer in the original field. Round both numbers before subtracting to estimate those that remain.",

            explanation:
                "362 rounds to 360 and 147 rounds to 140. 360 − 140 = 220."

        },

        {
            id: "eac-045",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which estimate is closest to 495 + 108?",

            options: [
                "600",
                "590",
                "610",
                "580"
            ],

            correctAnswer: "600",

            hint: "Round each number to the nearest hundred or ten as shown by the choices. Pay attention to what 495 rounds to.",

            explanation:
                "495 rounds to 500 and 108 rounds to 100. 500 + 100 = 600."

        },

        {
            id: "eac-046",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which child made the best estimate?",

            options: [
                "Ella: 68 + 33 ≈ 100",
                "Ben: 68 + 33 ≈ 70",
                "Sam: 68 + 33 ≈ 130",
                "Leo: 68 + 33 ≈ 50"
            ],

            correctAnswer: "Ella: 68 + 33 ≈ 100",

            hint: "Ignore the children's guesses at first. Estimate the calculation yourself, then choose the child whose answer is closest.",

            explanation:
                "68 rounds to 70 and 33 rounds to 30. 70 + 30 = 100."

        },

        {
            id: "eac-047",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which child made the best estimate?",

            options: [
                "Ben: 152 - 61 ≈ 90",
                "Ella: 152 - 61 ≈ 70",
                "Sam: 152 - 61 ≈ 110",
                "Leo: 152 - 61 ≈ 50"
            ],

            correctAnswer: "Ben: 152 - 61 ≈ 90",

            hint: "Estimate the subtraction before reading the names. The correct child should have the same estimate that you calculated.",

            explanation:
                "152 rounds to 150 and 61 rounds to 60. 150 − 60 = 90."

        },

        {
            id: "eac-048",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Why do we estimate before calculating?",

            options: [
                "To check if an answer is sensible",
                "To make the exact answer",
                "To avoid using numbers",
                "To change the question"
            ],

            correctAnswer: "To check if an answer is sensible",

            hint: "Think about how estimation is used after solving a problem. It helps you judge whether your exact answer seems reasonable.",

            explanation:
                "Estimating helps you decide whether an exact answer is reasonable."

        },

        {
            id: "eac-049",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which estimate is closest to 618 - 197?",

            options: [
                "420",
                "400",
                "430",
                "410"
            ],

            correctAnswer: "420",

            hint: "Round both numbers to the nearest ten. One rounds up slightly, while the other becomes a multiple of one hundred.",

            explanation:
                "618 rounds to 620 and 197 rounds to 200. 620 − 200 = 420."

        },

        {
            id: "eac-050",
            skillId: "estimate-answers-to-calculations",
            stage: "master",

            question: "Which statement about estimating is correct?",

            options: [
                "Estimating gives a sensible approximate answer.",
                "Estimating always gives the exact answer.",
                "Estimating means guessing without thinking.",
                "Estimating can only be used for addition."
            ],

            correctAnswer: "Estimating gives a sensible approximate answer.",

            hint: "Think about what estimation is really for. It uses number knowledge and rounding to produce a close answer, not an exact one.",

            explanation:
                "Estimating uses rounding and number knowledge to find a close, sensible answer."

        },

    ]

};

export default estimateAnswersToCalculations;

export {
    estimateAnswersToCalculations
};