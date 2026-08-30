import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  ADDING FRACTIONS
==================================================*/

const addingFractions: SkillContent = {
    skillId: "adding-fractions",

    title: "Adding Fractions",

    description: "Add fractions with the same denominator, including fractions that make a whole.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "af-001",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/5 + 1/5?",

            hint: "The denominators are the same, so add the numerators.",

            options: [
                "1/5",
                "2/5",
                "2/10",
                "1/10"
            ],

            correctAnswer: "2/5",

            explanation:
                "One fifth plus one fifth is two fifths, so 1/5 + 1/5 = 2/5."
        },

        {
            id: "af-002",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 2/7 + 1/7?",

            hint: "Keep the denominator as 7 and add the numerators.",

            options: [
                "3/7",
                "2/14",
                "3/14",
                "1/7"
            ],

            correctAnswer: "3/7",

            explanation:
                "The denominators are both 7. Add the numerators: 2 + 1 = 3, giving 3/7."
        },

        {
            id: "af-003",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/4 + 2/4?",

            hint: "Add the numerators and keep the denominator unchanged.",

            options: [
                "2/4",
                "3/4",
                "3/8",
                "1/4"
            ],

            correctAnswer: "3/4",

            explanation:
                "1/4 + 2/4 = 3/4 because 1 + 2 = 3."
        },

        {
            id: "af-004",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 2/5 + 2/5?",

            hint: "Add the two numerators.",

            options: [
                "2/5",
                "4/5",
                "4/10",
                "3/5"
            ],

            correctAnswer: "4/5",

            explanation:
                "2/5 + 2/5 = 4/5."
        },

        {
            id: "af-005",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3/8 + 1/8?",

            hint: "The denominator stays at 8.",

            options: [
                "3/8",
                "4/8",
                "4/16",
                "5/8"
            ],

            correctAnswer: "4/8",

            explanation:
                "3/8 + 1/8 = 4/8."
        },

        {
            id: "af-006",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/6 + 2/6?",

            hint: "Add the numerators: 1 + 2.",

            options: [
                "2/6",
                "3/6",
                "3/12",
                "1/6"
            ],

            correctAnswer: "3/6",

            explanation:
                "1/6 + 2/6 = 3/6."
        },

        {
            id: "af-007",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 2/9 + 3/9?",

            hint: "The denominator remains 9.",

            options: [
                "4/9",
                "5/9",
                "5/18",
                "6/9"
            ],

            correctAnswer: "5/9",

            explanation:
                "2/9 + 3/9 = 5/9."
        },

        {
            id: "af-008",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3/10 + 2/10?",

            hint: "Add the numerators and keep the denominator.",

            options: [
                "4/10",
                "5/10",
                "5/20",
                "6/10"
            ],

            correctAnswer: "5/10",

            explanation:
                "3/10 + 2/10 = 5/10."
        },

        {
            id: "af-009",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 1/3 + 1/3?",

            hint: "There are two thirds altogether.",

            options: [
                "1/3",
                "2/3",
                "2/6",
                "3/3"
            ],

            correctAnswer: "2/3",

            explanation:
                "One third plus one third is two thirds, so the answer is 2/3."
        },

        {
            id: "af-010",
            skillId: "adding-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3/5 + 1/5?",

            hint: "Add 3 and 1 while keeping the denominator as 5.",

            options: [
                "3/5",
                "4/5",
                "4/10",
                "5/5"
            ],

            correctAnswer: "4/5",

            explanation:
                "3/5 + 1/5 = 4/5."
        },
                {
            id: "af-011",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 2/6 + 3/6?",

            hint: "The denominators are the same. Add the numerators.",

            options: [
                "4/6",
                "5/6",
                "5/12",
                "6/6"
            ],

            correctAnswer: "5/6",

            explanation:
                "2/6 + 3/6 = 5/6 because 2 + 3 = 5."
        },

        {
            id: "af-012",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/7 + 2/7?",

            hint: "Keep the denominator at 7.",

            options: [
                "4/7",
                "5/7",
                "5/14",
                "6/7"
            ],

            correctAnswer: "5/7",

            explanation:
                "3/7 + 2/7 = 5/7."
        },

        {
            id: "af-013",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 4/8 + 2/8?",

            hint: "Add the numerators while keeping the denominator unchanged.",

            options: [
                "5/8",
                "6/8",
                "6/16",
                "4/8"
            ],

            correctAnswer: "6/8",

            explanation:
                "4/8 + 2/8 = 6/8."
        },

        {
            id: "af-014",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/5 + 2/5?",

            hint: "How many fifths are there altogether?",

            options: [
                "4/5",
                "5/5",
                "5/10",
                "6/5"
            ],

            correctAnswer: "5/5",

            explanation:
                "3/5 + 2/5 = 5/5. Five fifths make one whole."
        },

        {
            id: "af-015",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 4/6 + 1/6?",

            hint: "Add the numerators: 4 + 1.",

            options: [
                "4/6",
                "5/6",
                "5/12",
                "6/6"
            ],

            correctAnswer: "5/6",

            explanation:
                "4/6 + 1/6 = 5/6."
        },

        {
            id: "af-016",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 5/8 + 2/8?",

            hint: "The denominator stays at 8.",

            options: [
                "6/8",
                "7/8",
                "7/16",
                "8/8"
            ],

            correctAnswer: "7/8",

            explanation:
                "5/8 + 2/8 = 7/8."
        },

        {
            id: "af-017",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 2/4 + 1/4?",

            hint: "Add the numerators and keep the denominator as 4.",

            options: [
                "2/4",
                "3/4",
                "3/8",
                "4/4"
            ],

            correctAnswer: "3/4",

            explanation:
                "2/4 + 1/4 = 3/4."
        },

        {
            id: "af-018",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 3/10 + 4/10?",

            hint: "Count the tenths altogether.",

            options: [
                "6/10",
                "7/10",
                "7/20",
                "8/10"
            ],

            correctAnswer: "7/10",

            explanation:
                "3/10 + 4/10 = 7/10."
        },

        {
            id: "af-019",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 1/4 + 3/4?",

            hint: "How many quarters make one whole?",

            options: [
                "3/4",
                "4/4",
                "4/8",
                "1/4"
            ],

            correctAnswer: "4/4",

            explanation:
                "1/4 + 3/4 = 4/4. Four quarters make one whole."
        },

        {
            id: "af-020",
            skillId: "adding-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Sia eats 2/8 of a cake and then eats another 3/8. How much of the cake has she eaten altogether?",

            hint: "Both amounts are eighths, so add the numerators.",

            options: [
                "4/8",
                "5/8",
                "5/16",
                "6/8"
            ],

            correctAnswer: "5/8",

            explanation:
                "2/8 + 3/8 = 5/8, so Sia has eaten five eighths of the cake."
        },
                {
            id: "af-021",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 5/6 + 1/6?",

            hint: "The denominators are the same. Add the numerators.",

            options: [
                "5/6",
                "6/6",
                "6/12",
                "1"
            ],

            correctAnswer: "6/6",

            explanation:
                "5/6 + 1/6 = 6/6. Six sixths make one whole."
        },

        {
            id: "af-022",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 3/8 + 3/8?",

            hint: "Add the numerators and keep the denominator as 8.",

            options: [
                "5/8",
                "6/8",
                "6/16",
                "7/8"
            ],

            correctAnswer: "6/8",

            explanation:
                "3/8 + 3/8 = 6/8."
        },

        {
            id: "af-023",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "A ribbon is divided into 10 equal parts. Sia uses 3/10 and then another 4/10. What fraction of the ribbon has she used?",

            hint: "Both amounts are tenths, so add the numerators.",

            options: [
                "6/10",
                "7/10",
                "7/20",
                "8/10"
            ],

            correctAnswer: "7/10",

            explanation:
                "3/10 + 4/10 = 7/10, so Sia has used seven tenths of the ribbon."
        },

        {
            id: "af-024",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "A jug is 2/5 full. Another 2/5 of the jug is added. How full is the jug now?",

            hint: "Add the two fractions because they have the same denominator.",

            options: [
                "3/5",
                "4/5",
                "4/10",
                "5/5"
            ],

            correctAnswer: "4/5",

            explanation:
                "2/5 + 2/5 = 4/5, so the jug is now four fifths full."
        },

        {
            id: "af-025",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 4/7 + 2/7?",

            hint: "Add 4 and 2 while keeping the denominator as 7.",

            options: [
                "5/7",
                "6/7",
                "6/14",
                "7/7"
            ],

            correctAnswer: "6/7",

            explanation:
                "4/7 + 2/7 = 6/7."
        },

        {
            id: "af-026",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "Sia walks 1/3 of a trail in the morning and another 1/3 in the afternoon. What fraction of the trail has she walked?",

            hint: "Add the two thirds together.",

            options: [
                "1/3",
                "2/3",
                "2/6",
                "3/3"
            ],

            correctAnswer: "2/3",

            explanation:
                "1/3 + 1/3 = 2/3, so Sia has walked two thirds of the trail."
        },

        {
            id: "af-027",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which addition has an answer equal to one whole?",

            hint: "One whole can be written as a fraction where the numerator and denominator are equal.",

            options: [
                "1/5 + 3/5",
                "2/6 + 3/6",
                "3/8 + 5/8",
                "2/7 + 4/7"
            ],

            correctAnswer: "3/8 + 5/8",

            explanation:
                "3/8 + 5/8 = 8/8, and eight eighths make one whole."
        },

        {
            id: "af-028",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "A cake has 8 equal slices. Sia eats 2/8 and her friend eats 3/8. What fraction of the cake has been eaten?",

            hint: "Add the number of eighths eaten.",

            options: [
                "4/8",
                "5/8",
                "5/16",
                "6/8"
            ],

            correctAnswer: "5/8",

            explanation:
                "2/8 + 3/8 = 5/8, so five eighths of the cake have been eaten."
        },

        {
            id: "af-029",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 4/5 + 1/5?",

            hint: "Add the numerators. What does five fifths represent?",

            options: [
                "4/5",
                "5/5",
                "5/10",
                "1/5"
            ],

            correctAnswer: "5/5",

            explanation:
                "4/5 + 1/5 = 5/5, which is one whole."
        },

        {
            id: "af-030",
            skillId: "adding-fractions",
            stage: "master",
            difficulty: 3,

            question: "A chocolate bar is divided into 6 equal pieces. Sia eats 1/6, then 2/6, then another 1/6. What fraction has she eaten altogether?",

            hint: "Add all three fractions because they have the same denominator.",

            options: [
                "3/6",
                "4/6",
                "4/18",
                "5/6"
            ],

            correctAnswer: "4/6",

            explanation:
                "1/6 + 2/6 + 1/6 = 4/6, so Sia has eaten four sixths of the chocolate bar."
        }

    ]
};

export default addingFractions;

export {
    addingFractions
};