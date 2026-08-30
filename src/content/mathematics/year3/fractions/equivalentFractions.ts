import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  EQUIVALENT FRACTIONS
==================================================*/

const equivalentFractions: SkillContent = {
    skillId: "equivalent-fractions",

    title: "Equivalent Fractions",

    description: "Recognise and identify simple equivalent fractions using visual and numerical relationships.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ef-001",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 1/2?",

            hint: "Think of another fraction that represents the same amount as one half.",

            options: [
                "1/3",
                "2/4",
                "2/5",
                "3/5"
            ],

            correctAnswer: "2/4",

            explanation:
                "2/4 is equivalent to 1/2 because two out of four equal parts is the same amount as one out of two."
        },

        {
            id: "ef-002",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 1/3?",

            hint: "Multiply both the numerator and denominator by the same number.",

            options: [
                "2/6",
                "2/5",
                "3/6",
                "3/8"
            ],

            correctAnswer: "2/6",

            explanation:
                "1/3 is equivalent to 2/6 because both the numerator and denominator have been multiplied by 2."
        },

        {
            id: "ef-003",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 1/4?",

            hint: "Double both parts of the fraction.",

            options: [
                "2/6",
                "2/8",
                "3/8",
                "4/12"
            ],

            correctAnswer: "2/8",

            explanation:
                "1/4 is equivalent to 2/8 because both parts have been multiplied by 2."
        },

        {
            id: "ef-004",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 2/3?",

            hint: "Multiply both parts by the same number.",

            options: [
                "3/6",
                "4/6",
                "4/9",
                "6/8"
            ],

            correctAnswer: "4/6",

            explanation:
                "2/3 is equivalent to 4/6 because both the numerator and denominator have been doubled."
        },

        {
            id: "ef-005",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 3/4?",

            hint: "Multiply both numerator and denominator by 2.",

            options: [
                "5/8",
                "6/8",
                "6/10",
                "8/12"
            ],

            correctAnswer: "6/8",

            explanation:
                "3/4 is equivalent to 6/8 because both parts have been multiplied by 2."
        },

        {
            id: "ef-006",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 2/5?",

            hint: "Double the numerator and denominator.",

            options: [
                "3/10",
                "4/10",
                "4/12",
                "5/10"
            ],

            correctAnswer: "4/10",

            explanation:
                "2/5 is equivalent to 4/10 because both numerator and denominator have been multiplied by 2."
        },

        {
            id: "ef-007",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 3/5?",

            hint: "Multiply both parts by the same number.",

            options: [
                "5/10",
                "6/10",
                "6/12",
                "9/20"
            ],

            correctAnswer: "6/10",

            explanation:
                "3/5 is equivalent to 6/10 because both numerator and denominator have been doubled."
        },

        {
            id: "ef-008",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 1/6?",

            hint: "Double both the numerator and denominator.",

            options: [
                "2/10",
                "2/12",
                "3/12",
                "3/18"
            ],

            correctAnswer: "2/12",

            explanation:
                "1/6 is equivalent to 2/12 because both parts have been multiplied by 2."
        },

        {
            id: "ef-009",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 4/5?",

            hint: "Multiply both parts by 2.",

            options: [
                "6/10",
                "8/10",
                "8/12",
                "9/10"
            ],

            correctAnswer: "8/10",

            explanation:
                "4/5 is equivalent to 8/10 because both numerator and denominator have been doubled."
        },

        {
            id: "ef-010",
            skillId: "equivalent-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is equivalent to 2/7?",

            hint: "Multiply both numerator and denominator by 2.",

            options: [
                "3/14",
                "4/14",
                "4/16",
                "5/14"
            ],

            correctAnswer: "4/14",

            explanation:
                "2/7 is equivalent to 4/14 because both parts have been multiplied by 2."
        },
                {
            id: "ef-011",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is equivalent to 3/6?",

            hint: "Think about simplifying the fraction by dividing the numerator and denominator by the same number.",

            options: [
                "1/2",
                "1/3",
                "2/3",
                "3/4"
            ],

            correctAnswer: "1/2",

            explanation:
                "3/6 can be simplified by dividing both 3 and 6 by 3. This gives 1/2."
        },

        {
            id: "ef-012",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is equivalent to 4/8?",

            hint: "Divide the numerator and denominator by the same number.",

            options: [
                "1/2",
                "1/3",
                "2/3",
                "3/4"
            ],

            correctAnswer: "1/2",

            explanation:
                "4/8 can be simplified by dividing both 4 and 8 by 4. This gives 1/2."
        },

        {
            id: "ef-013",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is equivalent to 6/10?",

            hint: "Look for a common factor of 6 and 10.",

            options: [
                "2/5",
                "3/5",
                "3/4",
                "4/5"
            ],

            correctAnswer: "3/5",

            explanation:
                "6/10 can be simplified by dividing both numbers by 2, giving 3/5."
        },

        {
            id: "ef-014",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is equivalent to 8/12?",

            hint: "Find a number that divides both 8 and 12.",

            options: [
                "1/2",
                "2/3",
                "3/4",
                "4/5"
            ],

            correctAnswer: "2/3",

            explanation:
                "8/12 can be simplified by dividing both numbers by 4, giving 2/3."
        },

        {
            id: "ef-015",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is equivalent to 5/10?",

            hint: "Both numbers can be divided by the same number.",

            options: [
                "1/2",
                "1/3",
                "2/5",
                "3/5"
            ],

            correctAnswer: "1/2",

            explanation:
                "5/10 can be simplified by dividing both numerator and denominator by 5, giving 1/2."
        },

        {
            id: "ef-016",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 1/2 = 3/□",

            hint: "Ask what number multiplied by 2 gives 6.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "To change 1/2 into an equivalent fraction with numerator 3, multiply both parts by 3. The denominator becomes 6."
        },

        {
            id: "ef-017",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 2/3 = 6/□",

            hint: "The numerator has been multiplied by 3.",

            options: [
                "6",
                "8",
                "9",
                "12"
            ],

            correctAnswer: "9",

            explanation:
                "2 has been multiplied by 3 to make 6, so multiply 3 by 3 to get 9."
        },

        {
            id: "ef-018",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 3/4 = □/8",

            hint: "The denominator has been doubled.",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "6",

            explanation:
                "The denominator has changed from 4 to 8, so it has been doubled. Double the numerator 3 to get 6."
        },

        {
            id: "ef-019",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What number is missing? 2/5 = 8/□",

            hint: "The numerator has been multiplied by 4.",

            options: [
                "10",
                "15",
                "20",
                "25"
            ],

            correctAnswer: "20",

            explanation:
                "2 has been multiplied by 4 to make 8, so 5 must also be multiplied by 4. The denominator is 20."
        },

        {
            id: "ef-020",
            skillId: "equivalent-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Which pair of fractions is equivalent?",

            hint: "Simplify each pair or compare their values.",

            options: [
                "2/4 and 1/2",
                "2/3 and 3/5",
                "3/4 and 2/5",
                "1/3 and 2/5"
            ],

            correctAnswer: "2/4 and 1/2",

            explanation:
                "2/4 simplifies to 1/2, so these two fractions are equivalent."
        },
                {
            id: "ef-021",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which fraction is equivalent to 4/6?",

            hint: "Find a fraction with the same value by dividing both parts by the same number.",

            options: [
                "1/2",
                "2/3",
                "3/4",
                "4/5"
            ],

            correctAnswer: "2/3",

            explanation:
                "4/6 can be simplified by dividing both 4 and 6 by 2, giving 2/3."
        },

        {
            id: "ef-022",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which fraction is equivalent to 3/8?",

            hint: "Multiply both the numerator and denominator by the same number.",

            options: [
                "5/16",
                "6/16",
                "6/20",
                "9/16"
            ],

            correctAnswer: "6/16",

            explanation:
                "Multiplying both 3 and 8 by 2 gives 6/16, so the fractions are equivalent."
        },

        {
            id: "ef-023",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "What number is missing? 4/5 = 12/□",

            hint: "The numerator has been multiplied by 3.",

            options: [
                "10",
                "12",
                "15",
                "20"
            ],

            correctAnswer: "15",

            explanation:
                "4 has been multiplied by 3 to make 12, so 5 must also be multiplied by 3. The missing denominator is 15."
        },

        {
            id: "ef-024",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "What number is missing? 5/6 = □/18",

            hint: "The denominator has been multiplied by 3.",

            options: [
                "10",
                "12",
                "15",
                "16"
            ],

            correctAnswer: "15",

            explanation:
                "6 has been multiplied by 3 to make 18, so multiply 5 by 3 to get 15."
        },

        {
            id: "ef-025",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which fraction is equivalent to 6/9?",

            hint: "Find a number that divides both 6 and 9.",

            options: [
                "1/2",
                "2/3",
                "3/4",
                "4/5"
            ],

            correctAnswer: "2/3",

            explanation:
                "6/9 can be simplified by dividing both numbers by 3, giving 2/3."
        },

        {
            id: "ef-026",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which pair of fractions are equivalent?",

            hint: "Check whether the same multiplier can be used for the numerator and denominator.",

            options: [
                "2/5 and 4/10",
                "2/5 and 4/8",
                "3/4 and 6/10",
                "1/3 and 3/5"
            ],

            correctAnswer: "2/5 and 4/10",

            explanation:
                "Multiplying both 2 and 5 by 2 gives 4/10, so 2/5 and 4/10 are equivalent."
        },

        {
            id: "ef-027",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "Sia says that 3/6 and 4/8 are equivalent. Is she correct?",

            hint: "Simplify both fractions and compare their values.",

            options: [
                "Yes, both equal 1/2",
                "No, 3/6 is greater",
                "No, 4/8 is greater",
                "No, they have different denominators"
            ],

            correctAnswer: "Yes, both equal 1/2",

            explanation:
                "3/6 simplifies to 1/2 and 4/8 also simplifies to 1/2. Therefore, Sia is correct."
        },

        {
            id: "ef-028",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which fraction is equivalent to 9/12?",

            hint: "Divide the numerator and denominator by their common factor.",

            options: [
                "2/3",
                "3/4",
                "4/5",
                "5/6"
            ],

            correctAnswer: "3/4",

            explanation:
                "9/12 can be simplified by dividing both numbers by 3, giving 3/4."
        },

        {
            id: "ef-029",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "What number is missing? 2/3 = 10/□",

            hint: "The numerator has been multiplied by 5.",

            options: [
                "12",
                "15",
                "18",
                "20"
            ],

            correctAnswer: "15",

            explanation:
                "2 has been multiplied by 5 to make 10, so 3 must also be multiplied by 5. The denominator is 15."
        },

        {
            id: "ef-030",
            skillId: "equivalent-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which statement about equivalent fractions is true?",

            hint: "Equivalent fractions look different but represent the same amount.",

            options: [
                "Their denominators must always be equal",
                "They represent the same value",
                "Their numerators must always be equal",
                "They must always have the same digits"
            ],

            correctAnswer: "They represent the same value",

            explanation:
                "Equivalent fractions may have different numerators and denominators, but they represent the same value."

        }

    ]
};

export default equivalentFractions;

export {
    equivalentFractions
};