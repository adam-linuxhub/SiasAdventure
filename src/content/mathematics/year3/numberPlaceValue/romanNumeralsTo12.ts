import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  ROMAN NUMERALS TO 12
==================================================*/

const romanNumeralsTo12: SkillContent = {
    skillId: "roman-numerals-to-12",

    title: "Roman Numerals to 12",

    description: "Recognise and read Roman numerals from I to XII and use them in familiar sequences and clock faces.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "rn-001",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "What number does the Roman numeral I represent?",

            hint: "I is the first Roman numeral.",

            options: [
                "1",
                "2",
                "5",
                "10"
            ],

            correctAnswer: "1",

            explanation:
                "The Roman numeral I represents the number 1."
        },

        {
            id: "rn-002",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "What number does the Roman numeral V represent?",

            hint: "V is used for five.",

            options: [
                "3",
                "4",
                "5",
                "10"
            ],

            correctAnswer: "5",

            explanation:
                "The Roman numeral V represents the number 5."
        },

        {
            id: "rn-003",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "What number does the Roman numeral X represent?",

            hint: "X represents ten.",

            options: [
                "5",
                "8",
                "10",
                "12"
            ],

            correctAnswer: "10",

            explanation:
                "The Roman numeral X represents the number 10."
        },

        {
            id: "rn-004",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "Which Roman numeral represents 2?",

            hint: "Two is written as two Is.",

            options: [
                "I",
                "II",
                "V",
                "X"
            ],

            correctAnswer: "II",

            explanation:
                "The number 2 is written as II in Roman numerals."
        },

        {
            id: "rn-005",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "Which Roman numeral represents 3?",

            hint: "Three is written using three Is.",

            options: [
                "II",
                "III",
                "IV",
                "VI"
            ],

            correctAnswer: "III",

            explanation:
                "The number 3 is written as III in Roman numerals."
        },

        {
            id: "rn-006",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "Which Roman numeral represents 4?",

            hint: "Four is written as one less than five.",

            options: [
                "III",
                "IV",
                "V",
                "VI"
            ],

            correctAnswer: "IV",

            explanation:
                "The number 4 is written as IV in Roman numerals."
        },

        {
            id: "rn-007",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "Which Roman numeral represents 6?",

            hint: "Start with V for five and add one.",

            options: [
                "IV",
                "V",
                "VI",
                "VII"
            ],

            correctAnswer: "VI",

            explanation:
                "VI represents 6 because V is 5 and I adds 1."
        },

        {
            id: "rn-008",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "Which Roman numeral represents 8?",

            hint: "Start with V and add three Is.",

            options: [
                "VII",
                "VIII",
                "IX",
                "X"
            ],

            correctAnswer: "VIII",

            explanation:
                "VIII represents 8 because V is 5 and III adds 3."
        },

        {
            id: "rn-009",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "Which Roman numeral represents 9?",

            hint: "Nine is one less than ten.",

            options: [
                "VIII",
                "IX",
                "X",
                "XI"
            ],

            correctAnswer: "IX",

            explanation:
                "The number 9 is written as IX in Roman numerals."
        },

        {
            id: "rn-010",
            skillId: "roman-numerals-to-12",
            stage: "recognise",
            difficulty: 1,

            question: "Which Roman numeral represents 12?",

            hint: "Start with X for ten and add two.",

            options: [
                "XI",
                "XII",
                "XIII",
                "IX"
            ],

            correctAnswer: "XII",

            explanation:
                "X represents 10 and II represents 2, so XII represents 12."
        },
                {
            id: "rn-011",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "What number does XII represent?",

            hint: "X is 10 and II is 2.",

            options: [
                "10",
                "11",
                "12",
                "14"
            ],

            correctAnswer: "12",

            explanation:
                "X represents 10 and II represents 2, so XII represents 12."
        },

        {
            id: "rn-012",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "Which Roman numeral represents 7?",

            hint: "Start with V for 5 and add two.",

            options: [
                "VI",
                "VII",
                "VIII",
                "IX"
            ],

            correctAnswer: "VII",

            explanation:
                "VII represents 7 because V is 5 and II adds 2."
        },

        {
            id: "rn-013",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "What number does IX represent?",

            hint: "IX is one less than X.",

            options: [
                "8",
                "9",
                "10",
                "11"
            ],

            correctAnswer: "9",

            explanation:
                "IX represents 9."
        },

        {
            id: "rn-014",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "Which Roman numeral comes immediately after VIII?",

            hint: "VIII represents 8. Think about the next number.",

            options: [
                "VII",
                "IX",
                "X",
                "XI"
            ],

            correctAnswer: "IX",

            explanation:
                "VIII represents 8, so the Roman numeral immediately after it is IX, which represents 9."
        },

        {
            id: "rn-015",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "Which Roman numeral comes immediately before VI?",

            hint: "VI represents 6. What number comes before 6?",

            options: [
                "III",
                "IV",
                "V",
                "VII"
            ],

            correctAnswer: "V",

            explanation:
                "VI represents 6, so the Roman numeral immediately before it is V, which represents 5."
        },

        {
            id: "rn-016",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "Which sequence is in the correct order from smallest to greatest?",

            hint: "Translate each Roman numeral into a number first.",

            options: [
                "III, V, VIII, XI",
                "V, III, VIII, XI",
                "III, VIII, V, XI",
                "XI, VIII, V, III"
            ],

            correctAnswer: "III, V, VIII, XI",

            explanation:
                "III is 3, V is 5, VIII is 8 and XI is 11, so the sequence is correctly ordered."
        },

        {
            id: "rn-017",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "What Roman numeral is missing? VIII, IX, ___, XI",

            hint: "Translate the numerals into numbers and find the missing number.",

            options: [
                "VII",
                "X",
                "XII",
                "VI"
            ],

            correctAnswer: "X",

            explanation:
                "VIII is 8, IX is 9, X is 10 and XI is 11. Therefore, X is missing."
        },

        {
            id: "rn-018",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "What Roman numeral is missing? IV, V, VI, ___, VIII",

            hint: "Count forwards one number at a time.",

            options: [
                "VII",
                "IX",
                "X",
                "III"
            ],

            correctAnswer: "VII",

            explanation:
                "IV is 4, V is 5, VI is 6, VII is 7 and VIII is 8."
        },

        {
            id: "rn-019",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "Which number is represented by XI?",

            hint: "X represents 10 and I adds one.",

            options: [
                "9",
                "10",
                "11",
                "12"
            ],

            correctAnswer: "11",

            explanation:
                "X represents 10 and I represents 1, so XI represents 11."
        },

        {
            id: "rn-020",
            skillId: "roman-numerals-to-12",
            stage: "understand",
            difficulty: 2,

            question: "Which Roman numeral would appear on a clock at number 4?",

            hint: "The number 4 has a special Roman numeral form.",

            options: [
                "III",
                "IV",
                "VI",
                "IX"
            ],

            correctAnswer: "IV",

            explanation:
                "The number 4 is written as IV in Roman numerals, so a clock face can show IV at four o'clock."
        },
                {
            id: "rn-021",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "A clock shows XII at the top. What number is directly opposite XII?",

            hint: "Think about the numbers on a clock face.",

            options: [
                "III",
                "VI",
                "IX",
                "X"
            ],

            correctAnswer: "VI",

            explanation:
                "XII is 12 at the top of a clock. The number directly opposite 12 is 6, which is written as VI."
        },

        {
            id: "rn-022",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "Sia reads a clock showing VIII. What number is this?",

            hint: "V represents 5 and III adds 3.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "VIII represents 8, so the clock shows 8 o'clock."
        },

        {
            id: "rn-023",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "Which Roman numeral is halfway around a clock from XII?",

            hint: "There are 12 numbers around a clock. Half of 12 is 6.",

            options: [
                "IV",
                "VI",
                "VIII",
                "X"
            ],

            correctAnswer: "VI",

            explanation:
                "Half of the 12 positions around a clock is 6. The Roman numeral for 6 is VI."
        },

        {
            id: "rn-024",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "A clock has Roman numerals. Which numeral should be between VII and IX?",

            hint: "Translate VII and IX into numbers first.",

            options: [
                "VI",
                "VIII",
                "X",
                "XI"
            ],

            correctAnswer: "VIII",

            explanation:
                "VII is 7 and IX is 9. The number between them is 8, written as VIII."
        },

        {
            id: "rn-025",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "Which pair shows the same value?",

            hint: "Translate both Roman numerals in each pair.",

            options: [
                "VI and VII",
                "VIII and VIII",
                "IX and XI",
                "X and XII"
            ],

            correctAnswer: "VIII and VIII",

            explanation:
                "Both VIII symbols represent 8, so this pair has the same value."
        },

        {
            id: "rn-026",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "A clock shows III. How many hours later will the hour hand point to VI?",

            hint: "Count the clock positions from III to VI.",

            options: [
                "2 hours",
                "3 hours",
                "4 hours",
                "6 hours"
            ],

            correctAnswer: "3 hours",

            explanation:
                "III represents 3 and VI represents 6. The difference is 3 hours."
        },

        {
            id: "rn-027",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "Which Roman numeral is 3 places after VIII when counting forwards?",

            hint: "VIII is 8. Count forward three numbers.",

            options: [
                "IX",
                "X",
                "XI",
                "XII"
            ],

            correctAnswer: "XI",

            explanation:
                "Starting at VIII (8), three places forward gives IX (9), X (10), then XI (11)."
        },

        {
            id: "rn-028",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "Which Roman numeral is 4 places before XII when counting backwards?",

            hint: "Start at XII and count backwards four numbers.",

            options: [
                "VI",
                "VII",
                "VIII",
                "IX"
            ],

            correctAnswer: "VIII",

            explanation:
                "Starting at XII (12), four places backwards gives XI (11), X (10), IX (9), then VIII (8)."
        },

        {
            id: "rn-029",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "A clock shows IX. What Roman numeral will the hour hand point to 3 hours later?",

            hint: "IX represents 9. Count forward three hours.",

            options: [
                "X",
                "XI",
                "XII",
                "VI"
            ],

            correctAnswer: "XII",

            explanation:
                "IX is 9. Three hours later is 12, which is written as XII."
        },

        {
            id: "rn-030",
            skillId: "roman-numerals-to-12",
            stage: "master",
            difficulty: 3,

            question: "Which Roman numeral completes this clock sequence? VI, VII, VIII, ___, X",

            hint: "Translate the sequence into ordinary numbers.",

            options: [
                "VII",
                "VIII",
                "IX",
                "XI"
            ],

            correctAnswer: "IX",

            explanation:
                "VI, VII, VIII represent 6, 7 and 8. The next number is 9, written as IX."

        }

    ]
};

export default romanNumeralsTo12;

export {
    romanNumeralsTo12
};