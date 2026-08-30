import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  SUBTRACTING FRACTIONS
==================================================*/

const subtractingFractions: SkillContent = {
    skillId: "subtracting-fractions",

    title: "Subtracting Fractions",

    description: "Subtract fractions with the same denominator, including subtracting from a whole.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "sf-001",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 4/5 - 1/5?",

            hint: "The denominators are the same, so subtract the numerators.",

            options: [
                "2/5",
                "3/5",
                "3/10",
                "4/5"
            ],

            correctAnswer: "3/5",

            explanation:
                "4/5 - 1/5 = 3/5."
        },

        {
            id: "sf-002",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 5/6 - 2/6?",

            hint: "Keep the denominator as 6 and subtract the numerators.",

            options: [
                "2/6",
                "3/6",
                "3/12",
                "4/6"
            ],

            correctAnswer: "3/6",

            explanation:
                "5/6 - 2/6 = 3/6."
        },

        {
            id: "sf-003",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3/4 - 1/4?",

            hint: "Subtract 1 from 3.",

            options: [
                "1/4",
                "2/4",
                "2/8",
                "3/4"
            ],

            correctAnswer: "2/4",

            explanation:
                "3/4 - 1/4 = 2/4."
        },

        {
            id: "sf-004",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 7/8 - 3/8?",

            hint: "The denominator stays at 8.",

            options: [
                "3/8",
                "4/8",
                "4/16",
                "5/8"
            ],

            correctAnswer: "4/8",

            explanation:
                "7/8 - 3/8 = 4/8."
        },

        {
            id: "sf-005",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 5/7 - 1/7?",

            hint: "Subtract the numerators.",

            options: [
                "3/7",
                "4/7",
                "4/14",
                "5/7"
            ],

            correctAnswer: "4/7",

            explanation:
                "5/7 - 1/7 = 4/7."
        },

        {
            id: "sf-006",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 6/10 - 2/10?",

            hint: "Both fractions are tenths.",

            options: [
                "3/10",
                "4/10",
                "4/20",
                "5/10"
            ],

            correctAnswer: "4/10",

            explanation:
                "6/10 - 2/10 = 4/10."
        },

        {
            id: "sf-007",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 5/9 - 2/9?",

            hint: "Subtract 2 from 5.",

            options: [
                "2/9",
                "3/9",
                "3/18",
                "4/9"
            ],

            correctAnswer: "3/9",

            explanation:
                "5/9 - 2/9 = 3/9."
        },

        {
            id: "sf-008",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 4/6 - 1/6?",

            hint: "There are four sixths to start with. Take away one sixth.",

            options: [
                "2/6",
                "3/6",
                "3/12",
                "4/6"
            ],

            correctAnswer: "3/6",

            explanation:
                "4/6 - 1/6 = 3/6."
        },

        {
            id: "sf-009",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 3/5 - 2/5?",

            hint: "Subtract the numerators and keep the denominator.",

            options: [
                "1/5",
                "2/5",
                "1/10",
                "3/5"
            ],

            correctAnswer: "1/5",

            explanation:
                "3/5 - 2/5 = 1/5."
        },

        {
            id: "sf-010",
            skillId: "subtracting-fractions",
            stage: "recognise",
            difficulty: 1,

            question: "What is 8/10 - 3/10?",

            hint: "Subtract 3 tenths from 8 tenths.",

            options: [
                "4/10",
                "5/10",
                "5/20",
                "6/10"
            ],

            correctAnswer: "5/10",

            explanation:
                "8/10 - 3/10 = 5/10."
        },
                {
            id: "sf-011",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 6/7 - 2/7?",

            hint: "The denominators are the same, so subtract the numerators.",

            options: [
                "3/7",
                "4/7",
                "4/14",
                "5/7"
            ],

            correctAnswer: "4/7",

            explanation:
                "6/7 - 2/7 = 4/7."
        },

        {
            id: "sf-012",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 7/8 - 2/8?",

            hint: "Keep the denominator at 8 and subtract the numerators.",

            options: [
                "4/8",
                "5/8",
                "5/16",
                "6/8"
            ],

            correctAnswer: "5/8",

            explanation:
                "7/8 - 2/8 = 5/8."
        },

        {
            id: "sf-013",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 5/6 - 3/6?",

            hint: "Subtract 3 from 5.",

            options: [
                "1/6",
                "2/6",
                "2/12",
                "3/6"
            ],

            correctAnswer: "2/6",

            explanation:
                "5/6 - 3/6 = 2/6."
        },

        {
            id: "sf-014",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 9/10 - 4/10?",

            hint: "These are both tenths. Subtract the number of tenths.",

            options: [
                "4/10",
                "5/10",
                "5/20",
                "6/10"
            ],

            correctAnswer: "5/10",

            explanation:
                "9/10 - 4/10 = 5/10."
        },

        {
            id: "sf-015",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 7/9 - 3/9?",

            hint: "Subtract the numerators and keep the denominator as 9.",

            options: [
                "3/9",
                "4/9",
                "4/18",
                "5/9"
            ],

            correctAnswer: "4/9",

            explanation:
                "7/9 - 3/9 = 4/9."
        },

        {
            id: "sf-016",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 4/5 - 2/5?",

            hint: "How many fifths remain after taking away two fifths?",

            options: [
                "1/5",
                "2/5",
                "2/10",
                "3/5"
            ],

            correctAnswer: "2/5",

            explanation:
                "4/5 - 2/5 = 2/5."
        },

        {
            id: "sf-017",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 8/8 - 3/8?",

            hint: "Eight eighths is one whole. Take away three eighths.",

            options: [
                "4/8",
                "5/8",
                "5/16",
                "6/8"
            ],

            correctAnswer: "5/8",

            explanation:
                "8/8 - 3/8 = 5/8."
        },

        {
            id: "sf-018",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "What is 6/10 - 4/10?",

            hint: "Subtract the numerators.",

            options: [
                "1/10",
                "2/10",
                "2/20",
                "3/10"
            ],

            correctAnswer: "2/10",

            explanation:
                "6/10 - 4/10 = 2/10."
        },

        {
            id: "sf-019",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "Sia has 5/8 of a chocolate bar. She eats 2/8 of it. How much is left?",

            hint: "Subtract the amount eaten from the amount Sia had.",

            options: [
                "2/8",
                "3/8",
                "3/16",
                "4/8"
            ],

            correctAnswer: "3/8",

            explanation:
                "5/8 - 2/8 = 3/8, so three eighths of the chocolate bar remain."
        },

        {
            id: "sf-020",
            skillId: "subtracting-fractions",
            stage: "understand",
            difficulty: 2,

            question: "A tank is 7/10 full. If 3/10 is used, what fraction remains?",

            hint: "Subtract the fraction used from the fraction that was full.",

            options: [
                "3/10",
                "4/10",
                "4/20",
                "5/10"
            ],

            correctAnswer: "4/10",

            explanation:
                "7/10 - 3/10 = 4/10, so four tenths remain."
        },
                {
            id: "sf-021",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 7/8 - 5/8?",

            hint: "Both fractions are eighths. Subtract the numerators.",

            options: [
                "1/8",
                "2/8",
                "2/16",
                "3/8"
            ],

            correctAnswer: "2/8",

            explanation:
                "7/8 - 5/8 = 2/8."
        },

        {
            id: "sf-022",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 9/10 - 6/10?",

            hint: "Subtract 6 tenths from 9 tenths.",

            options: [
                "2/10",
                "3/10",
                "3/20",
                "4/10"
            ],

            correctAnswer: "3/10",

            explanation:
                "9/10 - 6/10 = 3/10."
        },

        {
            id: "sf-023",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "A ribbon is 8/9 of a metre long. Sia cuts off 3/9 of a metre. How much ribbon remains?",

            hint: "Subtract the amount cut off from the original length.",

            options: [
                "4/9",
                "5/9",
                "5/18",
                "6/9"
            ],

            correctAnswer: "5/9",

            explanation:
                "8/9 - 3/9 = 5/9, so five ninths of a metre remain."
        },

        {
            id: "sf-024",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "A cake has 7/8 remaining. Sia eats 4/8 of the whole cake. What fraction remains?",

            hint: "Subtract four eighths from seven eighths.",

            options: [
                "2/8",
                "3/8",
                "3/16",
                "4/8"
            ],

            correctAnswer: "3/8",

            explanation:
                "7/8 - 4/8 = 3/8, so three eighths remain."
        },

        {
            id: "sf-025",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 6/7 - 4/7?",

            hint: "The denominator stays at 7.",

            options: [
                "1/7",
                "2/7",
                "2/14",
                "3/7"
            ],

            correctAnswer: "2/7",

            explanation:
                "6/7 - 4/7 = 2/7."
        },

        {
            id: "sf-026",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "A water bottle is 9/10 full. Sia drinks 2/10 of the bottle. What fraction is left?",

            hint: "Subtract the amount drunk from the amount that was in the bottle.",

            options: [
                "6/10",
                "7/10",
                "7/20",
                "8/10"
            ],

            correctAnswer: "7/10",

            explanation:
                "9/10 - 2/10 = 7/10, so seven tenths of the bottle remain."
        },

        {
            id: "sf-027",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "Which subtraction has an answer equal to 1/2?",

            hint: "Look for two fractions with the same denominator whose numerators differ by half that denominator.",

            options: [
                "5/8 - 1/8",
                "6/8 - 2/8",
                "7/8 - 3/8",
                "7/8 - 3/8"
            ],

            correctAnswer: "7/8 - 3/8",

            explanation:
                "7/8 - 3/8 = 4/8, and 4/8 is equivalent to 1/2."
        },

        {
            id: "sf-028",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "Sia has 10/10 of a chocolate bar. She gives away 3/10. What fraction remains?",

            hint: "Ten tenths is the whole bar.",

            options: [
                "6/10",
                "7/10",
                "7/20",
                "8/10"
            ],

            correctAnswer: "7/10",

            explanation:
                "10/10 - 3/10 = 7/10, so seven tenths remain."
        },

        {
            id: "sf-029",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "What is 8/8 - 5/8?",

            hint: "Eight eighths make one whole. Take away five eighths.",

            options: [
                "2/8",
                "3/8",
                "3/16",
                "4/8"
            ],

            correctAnswer: "3/8",

            explanation:
                "8/8 - 5/8 = 3/8."
        },

        {
            id: "sf-030",
            skillId: "subtracting-fractions",
            stage: "master",
            difficulty: 3,

            question: "A trail is divided into 6 equal sections. Sia has walked 5/6 of it and then walks back 2/6. How far along the trail is she now?",

            hint: "Subtract the two sixths from the five sixths.",

            options: [
                "2/6",
                "3/6",
                "3/12",
                "4/6"
            ],

            correctAnswer: "3/6",

            explanation:
                "5/6 - 2/6 = 3/6, so she is now three sixths along the trail."
        }

    ]
};

export default subtractingFractions;

export {
    subtractingFractions
};