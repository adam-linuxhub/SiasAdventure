import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const readWriteNumbers: SkillContent = {
    skillId: "read-write-numbers",

    title: "Read and Write Numbers",

    description: "Read and write numbers to 1000 using numerals and words.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "rwn-001",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "Which number is 'three hundred and twenty-four'?",

            options: [
                "324",
                "342",
                "304",
                "234"
            ],

            correctAnswer: "324",

            hint: "Say the number in parts: 300, then 20, then 4. Look for a numeral with those three place values.",

            explanation:
                "Three hundred and twenty-four is written as 324."
        },

        {
            id: "rwn-002",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "How do you write 517 in words?",

            options: [
                "five hundred and seventeen",
                "five hundred and seventy",
                "five hundred and seven",
                "five hundred and seventy-one"
            ],

            correctAnswer: "five hundred and seventeen",

            hint: "Split 517 into 500 and 17. Make sure the tens and ones are read together as seventeen.",

            explanation:
                "517 is read as five hundred and seventeen."
        },

        {
            id: "rwn-003",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "Which number is 'nine hundred and one'?",

            options: [
                "901",
                "910",
                "991",
                "900"
            ],

            correctAnswer: "901",

            hint: "The tens digit is zero because there are no tens, only 9 hundreds and 1 one.",

            explanation:
                "Nine hundred and one is written as 901."
        },

        {
            id: "rwn-004",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "How do you write 640 in words?",

            options: [
                "six hundred and forty",
                "six hundred and fourteen",
                "six hundred forty-four",
                "sixty-four hundred"
            ],

            correctAnswer: "six hundred and forty",

            hint: "640 has 6 hundreds, 4 tens and no ones. Don't add extra ones at the end.",

            explanation:
                "640 is read as six hundred and forty."
        },

        {
            id: "rwn-005",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "Which number is 'four hundred and eighty-two'?",

            options: [
                "482",
                "428",
                "402",
                "842"
            ],

            correctAnswer: "482",

            hint: "The words tell you the hundreds first, then the tens, then the ones: 4, 8, 2.",

            explanation:
                "Four hundred and eighty-two is 482."
        },

        {
            id: "rwn-006",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "How do you write 275 in words?",

            options: [
                "two hundred and seventy-five",
                "two hundred and fifty-seven",
                "two hundred and seventy",
                "twenty-seven hundred and five"
            ],

            correctAnswer: "two hundred and seventy-five",

            hint: "Read 275 as 200 plus 75. Seventy-five is one number, not seventy and five separately.",

            explanation:
                "275 is read as two hundred and seventy-five."
        },

        {
            id: "rwn-007",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "Which number is 'one hundred and sixty-three'?",

            options: [
                "163",
                "136",
                "613",
                "103"
            ],

            correctAnswer: "163",

            hint: "Check each place value: 1 hundred, 6 tens and 3 ones.",

            explanation:
                "One hundred and sixty-three is 163."
        },

        {
            id: "rwn-008",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "How do you write 808 in words?",

            options: [
                "eight hundred and eight",
                "eight hundred and eighty",
                "eight hundred eight-eight",
                "eighty hundred and eight"
            ],

            correctAnswer: "eight hundred and eight",

            hint: "There are no tens in 808, so the middle digit is zero when you read it.",

            explanation:
                "808 is read as eight hundred and eight."
        },

        {
            id: "rwn-009",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "Which numeral matches 'seven hundred and ninety-six'?",

            options: [
                "796",
                "769",
                "706",
                "976"
            ],

            correctAnswer: "796",

            hint: "Ninety-six means 9 tens and 6 ones. Keep the hundreds digit as 7.",

            explanation:
                "Seven hundred and ninety-six is written as 796."
        },

        {
            id: "rwn-010",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "How do you write 999 in words?",

            options: [
                "nine hundred and ninety-nine",
                "nine hundred and ninety",
                "nine hundred and nine",
                "nine hundred ninety-nine hundred"
            ],

            correctAnswer: "nine hundred and ninety-nine",

            hint: "Each place value is a 9: hundreds, tens and ones.",

            explanation:
                "999 is read as nine hundred and ninety-nine."
        },

        {
            id: "rwn-011",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "Which word matches the numeral 450?",

            options: [
                "four hundred and fifty",
                "four hundred and fifteen",
                "four hundred and five",
                "forty-five hundred"
            ],

            correctAnswer: "four hundred and fifty",

            hint: "450 has 4 hundreds and 5 tens. There are no ones to say.",

            explanation:
                "450 is read as four hundred and fifty."
        },

        {
            id: "rwn-012",
            skillId: "read-write-numbers",
            stage: "recognise",

            question: "Which numeral matches 'two hundred and nine'?",

            options: [
                "209",
                "290",
                "299",
                "2009"
            ],

            correctAnswer: "209",

            hint: "Listen for the missing tens. Two hundred and nine has 0 tens.",

            explanation:
                "Two hundred and nine is written as 209."
        },

        {
            id: "rwn-013",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "Which number is written correctly in words?",

            options: [
                "318 — three hundred and eighteen",
                "318 — three hundred eighty-one",
                "318 — thirty-one hundred and eight",
                "318 — three hundred and eighty"
            ],

            correctAnswer: "318 — three hundred and eighteen",

            hint: "318 is made from 300 and 18, not 80 or 81.",

            explanation:
                "318 is read as three hundred and eighteen."
        },

        {
            id: "rwn-014",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "Which numeral matches 'five hundred and sixty-one'?",

            options: [
                "561",
                "516",
                "651",
                "506"
            ],

            correctAnswer: "561",

            hint: "The last two words are sixty-one, so the final digits should be 61.",

            explanation:
                "Five hundred and sixty-one is written as 561."
        },

        {
            id: "rwn-015",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "Which word matches the numeral 734?",

            options: [
                "seven hundred and thirty-four",
                "seven hundred and forty-three",
                "seven hundred and thirty",
                "seven hundred and three-four"
            ],

            correctAnswer: "seven hundred and thirty-four",

            hint: "Read the last two digits together: 34 is thirty-four, not forty-three.",

            explanation:
                "734 is read as seven hundred and thirty-four."
        },

        {
            id: "rwn-016",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "Which numeral matches 'eight hundred and twenty-three'?",

            options: [
                "823",
                "832",
                "803",
                "283"
            ],

            correctAnswer: "823",

            hint: "Twenty-three gives the final digits 23. Keep the hundreds digit as 8.",

            explanation:
                "Eight hundred and twenty-three is written as 823."
        },

        {
            id: "rwn-017",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "How do you write 406 in words?",

            options: [
                "four hundred and six",
                "four hundred and sixty",
                "forty hundred and six",
                "four hundred six hundred"
            ],

            correctAnswer: "four hundred and six",

            hint: "The zero in the tens place means you go straight from hundreds to ones.",

            explanation:
                "406 is read as four hundred and six."
        },

        {
            id: "rwn-018",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "Which numeral matches 'one hundred and ninety-four'?",

            options: [
                "194",
                "149",
                "914",
                "104"
            ],

            correctAnswer: "194",

            hint: "Ninety-four is 94, so place 1 in the hundreds column followed by 94.",

            explanation:
                "One hundred and ninety-four is written as 194."
        },

        {
            id: "rwn-019",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "Which number is written correctly in words?",

            options: [
                "560 — five hundred and sixty",
                "560 — five hundred and sixteen",
                "560 — fifty-six hundred",
                "560 — five sixty"
            ],

            correctAnswer: "560 — five hundred and sixty",

            hint: "560 has 5 hundreds and 6 tens. There are no ones to include.",

            explanation:
                "560 is read as five hundred and sixty."
        },

        {
            id: "rwn-020",
            skillId: "read-write-numbers",
            stage: "understand",

            question: "Which child is correct?",

            options: [
                "Ella says 708 is 'seven hundred and eight'.",
                "Max says 708 is 'seven hundred and eighty'.",
                "Ava says 708 is 'seventy hundred and eight'.",
                "Noah says 708 is 'seven hundred and eighteen'."
            ],

            correctAnswer: "Ella says 708 is 'seven hundred and eight'.",

            hint: "708 has 7 hundreds, 0 tens and 8 ones. The missing tens should not be spoken as eighty or eighteen.",

            explanation:
                "708 is read as seven hundred and eight."
        },

        {
            id: "rwn-021",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "A classroom has the number 315 on the door. How is this written in words?",

            options: [
                "three hundred and fifteen",
                "three hundred and fifty",
                "three hundred and five",
                "thirty-one hundred and five"
            ],

            correctAnswer: "three hundred and fifteen",

            hint: "Break 315 into 300 and 15. Fifteen is not the same as fifty.",

            explanation:
                "315 is written as three hundred and fifteen."
        },

        {
            id: "rwn-022",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "A book has 482 pages. Which is the correct way to read this number?",

            options: [
                "four hundred and eighty-two",
                "four hundred and twenty-eight",
                "forty-eight hundred and two",
                "four hundred and eighty"
            ],

            correctAnswer: "four hundred and eighty-two",

            hint: "Read the last two digits together. 82 is eighty-two, not twenty-eight.",

            explanation:
                "482 is read as four hundred and eighty-two."
        },

        {
            id: "rwn-023",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "Which house number matches 'nine hundred and thirty-six'?",

            options: [
                "936",
                "963",
                "906",
                "396"
            ],

            correctAnswer: "936",

            hint: "The words tell you the digits in order: 9 hundreds, then 36.",

            explanation:
                "Nine hundred and thirty-six is written as 936."
        },

        {
            id: "rwn-024",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "A football team scored 204 goals over several seasons. How is 204 written in words?",

            options: [
                "two hundred and four",
                "two hundred and forty",
                "twenty hundred and four",
                "two hundred and fourteen"
            ],

            correctAnswer: "two hundred and four",

            hint: "There are no tens in 204, only 2 hundreds and 4 ones.",

            explanation:
                "204 is read as two hundred and four."
        },

        {
            id: "rwn-025",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "Which pair matches correctly?",

            options: [
                "691 — six hundred and ninety-one",
                "691 — six hundred and nineteen",
                "691 — six hundred and ninety",
                "691 — nine hundred and sixty-one"
            ],

            correctAnswer: "691 — six hundred and ninety-one",

            hint: "The last two digits are 91. Make sure they are read as ninety-one, not nineteen.",

            explanation:
                "691 is read as six hundred and ninety-one."
        },

        {
            id: "rwn-026",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "Ben wrote 830 as 'eight hundred and thirty'. Is he correct?",

            options: [
                "Yes",
                "No, it is eight hundred and thirteen",
                "No, it is eighty-three",
                "No, it is eight hundred and three"
            ],

            correctAnswer: "Yes",

            hint: "830 has 8 hundreds, 3 tens and 0 ones. Check whether Ben included exactly those place values.",

            explanation:
                "830 is correctly written as eight hundred and thirty."
        },

        {
            id: "rwn-027",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "Which numeral matches 'five hundred and two'?",

            options: [
                "502",
                "520",
                "552",
                "250"
            ],

            correctAnswer: "502",

            hint: "The words don't mention any tens, so the middle digit should be zero.",

            explanation:
                "Five hundred and two is written as 502."
        },

        {
            id: "rwn-028",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "Which word matches the numeral 178?",

            options: [
                "one hundred and seventy-eight",
                "one hundred and eighty-seven",
                "one hundred and seventy",
                "seventeen hundred and eight"
            ],

            correctAnswer: "one hundred and seventy-eight",

            hint: "Read 178 as 100, then 78. Keep the digits 7 and 8 in the correct order.",

            explanation:
                "178 is read as one hundred and seventy-eight."
        },

        {
            id: "rwn-029",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "Which numeral matches 'three hundred and forty'?",

            options: [
                "340",
                "304",
                "430",
                "34"
            ],

            correctAnswer: "340",

            hint: "Forty means 4 tens. There are no ones at the end of this number.",

            explanation:
                "Three hundred and forty is written as 340."
        },

        {
            id: "rwn-030",
            skillId: "read-write-numbers",
            stage: "apply",

            question: "Which word is missing? 'Seven hundred and ___' = 756",

            options: [
                "fifty-six",
                "sixty-five",
                "five hundred and six",
                "fifteen"
            ],

            correctAnswer: "fifty-six",

            hint: "The last two digits of 756 are 56, so think about how 56 is read aloud.",

            explanation:
                "756 is read as seven hundred and fifty-six."
        },

        {
            id: "rwn-031",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which numeral matches 'six hundred and forty-eight'?",

            options: [
                "648",
                "684",
                "608",
                "468"
            ],

            correctAnswer: "648",

            hint: "Forty-eight becomes the final digits 48. Keep the 6 in the hundreds place.",

            explanation:
                "Six hundred and forty-eight is written as 648."
        },

        {
            id: "rwn-032",
            skillId: "read-write-numbers",
            stage: "master",

            question: "How do you write 905 in words?",

            options: [
                "nine hundred and five",
                "nine hundred and fifty",
                "nine hundred and fifteen",
                "ninety hundred and five"
            ],

            correctAnswer: "nine hundred and five",

            hint: "The zero in the tens place means you skip straight from hundreds to ones.",

            explanation:
                "905 is read as nine hundred and five."
        },

        {
            id: "rwn-033",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which number is written correctly?",

            options: [
                "287 — two hundred and eighty-seven",
                "287 — two hundred and seventy-eight",
                "287 — twenty-eight hundred and seven",
                "287 — two hundred and eighty"
            ],

            correctAnswer: "287 — two hundred and eighty-seven",

            hint: "Read 287 as 200 and 87. The last two digits are eighty-seven, not seventy-eight.",

            explanation:
                "287 is read as two hundred and eighty-seven."
        },

        {
            id: "rwn-034",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which child has written the number correctly?",

            options: [
                "Jack writes 431 as 'four hundred and thirty-one'.",
                "Mia writes 431 as 'four hundred and thirteen'.",
                "Leo writes 431 as 'forty-three hundred and one'.",
                "Grace writes 431 as 'four hundred and three-one'."
            ],

            correctAnswer: "Jack writes 431 as 'four hundred and thirty-one'.",

            hint: "431 is made of 4 hundreds, then 31. Check which child keeps those place values in the correct order.",

            explanation:
                "431 is read as four hundred and thirty-one."
        },

        {
            id: "rwn-035",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which numeral matches 'one hundred and ninety'?",

            options: [
                "190",
                "109",
                "910",
                "191"
            ],

            correctAnswer: "190",

            hint: "One hundred gives the first digit as 1. Ninety means 9 tens and 0 ones.",

            explanation:
                "One hundred and ninety is written as 190."
        },

        {
            id: "rwn-036",
            skillId: "read-write-numbers",
            stage: "master",

            question: "A bus has the number 672. How is this written in words?",

            options: [
                "six hundred and seventy-two",
                "six hundred and twenty-seven",
                "sixty-seven hundred and two",
                "six hundred and seventy"
            ],

            correctAnswer: "six hundred and seventy-two",

            hint: "Read 672 as 600 and 72. Keep the final digits in the same order.",

            explanation:
                "672 is read as six hundred and seventy-two."
        },

        {
            id: "rwn-037",
            skillId: "read-write-numbers",
            stage: "master",

            question: "A library book is numbered 358. Which is the correct way to read it?",

            options: [
                "three hundred and fifty-eight",
                "three hundred and eighty-five",
                "thirty-five hundred and eight",
                "three hundred and five-eight"
            ],

            correctAnswer: "three hundred and fifty-eight",

            hint: "The last two digits are 58, so they should be read as fifty-eight.",

            explanation:
                "358 is read as three hundred and fifty-eight."
        },

        {
            id: "rwn-038",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which pair matches correctly?",

            options: [
                "814 — eight hundred and fourteen",
                "814 — eight hundred and forty-one",
                "814 — eighty-one hundred and four",
                "814 — eight hundred and four"
            ],

            correctAnswer: "814 — eight hundred and fourteen",

            hint: "After 800, the remaining number is 14, not 41 or 4.",

            explanation:
                "814 is read as eight hundred and fourteen."
        },

        {
            id: "rwn-039",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which word is missing? 'Five hundred and ___' = 583",

            options: [
                "eighty-three",
                "thirty-eight",
                "eight hundred and three",
                "eighteen"
            ],

            correctAnswer: "eighty-three",

            hint: "Look only at the last two digits. 83 is read as eighty-three.",

            explanation:
                "583 is read as five hundred and eighty-three."
        },

        {
            id: "rwn-040",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which statement is correct?",

            options: [
                "709 is 'seven hundred and nine'.",
                "709 is 'seven hundred and ninety'.",
                "709 is 'seventy hundred and nine'.",
                "709 is 'seven hundred and nineteen'."
            ],

            correctAnswer: "709 is 'seven hundred and nine'.",

            hint: "The tens digit is zero, so only the hundreds and ones are spoken.",

            explanation:
                "709 is read as seven hundred and nine."
        },

        {
            id: "rwn-041",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which numeral matches 'two hundred and sixty-five'?",

            options: [
                "265",
                "256",
                "625",
                "205"
            ],

            correctAnswer: "265",

            hint: "Sixty-five becomes the final digits 65 after the 2 hundreds.",

            explanation:
                "Two hundred and sixty-five is written as 265."
        },

        {
            id: "rwn-042",
            skillId: "read-write-numbers",
            stage: "master",

            question: "How do you write 490 in words?",

            options: [
                "four hundred and ninety",
                "four hundred and nineteen",
                "forty-nine hundred",
                "four hundred and nine"
            ],

            correctAnswer: "four hundred and ninety",

            hint: "490 has 4 hundreds, 9 tens and no ones.",

            explanation:
                "490 is read as four hundred and ninety."
        },

        {
            id: "rwn-043",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which number has been written incorrectly?",

            options: [
                "542 — five hundred and twenty-four",
                "315 — three hundred and fifteen",
                "801 — eight hundred and one",
                "690 — six hundred and ninety"
            ],

            correctAnswer: "542 — five hundred and twenty-four",

            hint: "Compare the last two digits. 42 should not be read as twenty-four.",

            explanation:
                "542 should be read as five hundred and forty-two."
        },

        {
            id: "rwn-044",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which numeral matches 'nine hundred and eighty-eight'?",

            options: [
                "988",
                "898",
                "889",
                "980"
            ],

            correctAnswer: "988",

            hint: "The number ends with 88, so the last two digits should both be 8.",

            explanation:
                "Nine hundred and eighty-eight is written as 988."
        },

        {
            id: "rwn-045",
            skillId: "read-write-numbers",
            stage: "master",

            question: "A scorecard shows 157 points. How is this written in words?",

            options: [
                "one hundred and fifty-seven",
                "one hundred and seventy-five",
                "fifteen hundred and seven",
                "one hundred and fifty"
            ],

            correctAnswer: "one hundred and fifty-seven",

            hint: "157 is 100 plus 57. Fifty-seven keeps the digits 5 then 7.",

            explanation:
                "157 is read as one hundred and fifty-seven."
        },

        {
            id: "rwn-046",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which word matches the numeral 600?",

            options: [
                "six hundred",
                "six hundred and six",
                "sixty hundred",
                "six thousand"
            ],

            correctAnswer: "six hundred",

            hint: "The tens and ones are both zero, so only the hundreds need to be said.",

            explanation:
                "600 is read simply as six hundred."
        },

        {
            id: "rwn-047",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which numeral matches 'three hundred and three'?",

            options: [
                "303",
                "330",
                "333",
                "3003"
            ],

            correctAnswer: "303",

            hint: "There are no tens in this number, so the middle digit should be zero.",

            explanation:
                "Three hundred and three is written as 303."
        },

        {
            id: "rwn-048",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which sentence is correct?",

            options: [
                "940 is 'nine hundred and forty'.",
                "940 is 'nine hundred and fourteen'.",
                "940 is 'ninety-four hundred'.",
                "940 is 'nine hundred and four'."
            ],

            correctAnswer: "940 is 'nine hundred and forty'.",

            hint: "940 has 4 tens and 0 ones. Don't swap forty with fourteen.",

            explanation:
                "940 is read as nine hundred and forty."
        },

        {
            id: "rwn-049",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which numeral matches 'one thousand'?",

            options: [
                "1000",
                "100",
                "10000",
                "1100"
            ],

            correctAnswer: "1000",

            hint: "One thousand has a 1 followed by three zeros.",

            explanation:
                "One thousand is written as 1000."
        },

        {
            id: "rwn-050",
            skillId: "read-write-numbers",
            stage: "master",

            question: "Which pair matches correctly?",

            options: [
                "999 — nine hundred and ninety-nine",
                "999 — nine hundred and ninety",
                "999 — nine hundred and nine",
                "999 — ninety-nine hundred and nine"
            ],

            correctAnswer: "999 — nine hundred and ninety-nine",

            hint: "All three place values are 9, so the words should include hundreds, ninety and nine.",

            explanation:
                "999 is read as nine hundred and ninety-nine."
        }
    ]
};

export default readWriteNumbers;

export {
    readWriteNumbers
};