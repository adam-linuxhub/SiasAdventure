import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  FRACTIONS ON A NUMBER LINE
==================================================*/

const fractionsOnNumberLine: SkillContent = {
    skillId: "fractions-on-number-line",

    title: "Fractions on a Number Line",

    description: "Recognise and identify unit and non-unit fractions on number lines.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "fn-001",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "A number line from 0 to 1 is split into 2 equal parts. What fraction is at the first mark?",

            hint: "The whole has been split into 2 equal parts.",

            options: [
                "1/2",
                "1/3",
                "1/4",
                "2/2"
            ],

            correctAnswer: "1/2",

            explanation:
                "The whole is split into 2 equal parts, so the first mark represents one half, or 1/2."
        },

        {
            id: "fn-002",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "A number line from 0 to 1 is split into 4 equal parts. What fraction is at the first mark?",

            hint: "The denominator tells you how many equal parts make the whole.",

            options: [
                "1/2",
                "1/3",
                "1/4",
                "2/4"
            ],

            correctAnswer: "1/4",

            explanation:
                "The whole is divided into 4 equal parts, so the first mark is 1/4."
        },

        {
            id: "fn-003",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "A number line from 0 to 1 is split into 3 equal parts. What fraction is at the second mark?",

            hint: "Count how many thirds you have reached.",

            options: [
                "1/3",
                "2/3",
                "2/4",
                "3/3"
            ],

            correctAnswer: "2/3",

            explanation:
                "The second mark is two of the three equal parts, so it represents 2/3."
        },

        {
            id: "fn-004",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "A number line from 0 to 1 is split into 5 equal parts. What fraction is at the third mark?",

            hint: "Count the equal parts from zero.",

            options: [
                "2/5",
                "3/5",
                "3/4",
                "4/5"
            ],

            correctAnswer: "3/5",

            explanation:
                "The third mark represents three of the five equal parts, so it is 3/5."
        },

        {
            id: "fn-005",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction would be halfway between 0 and 1 on a number line?",

            hint: "Halfway means the whole has been divided into 2 equal parts.",

            options: [
                "1/3",
                "1/4",
                "1/2",
                "2/3"
            ],

            correctAnswer: "1/2",

            explanation:
                "Halfway between 0 and 1 is one half, written as 1/2."
        },

        {
            id: "fn-006",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction would be closest to 0 on a number line?",

            hint: "For fractions with the same numerator, a larger denominator makes the fraction smaller.",

            options: [
                "1/2",
                "1/3",
                "1/4",
                "1/5"
            ],

            correctAnswer: "1/5",

            explanation:
                "1/5 is the smallest of these fractions, so it is closest to 0."
        },

        {
            id: "fn-007",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction would be closest to 1?",

            hint: "Compare how much of the whole each fraction represents.",

            options: [
                "1/4",
                "2/4",
                "3/4",
                "1/2"
            ],

            correctAnswer: "3/4",

            explanation:
                "3/4 is the greatest of these fractions, so it is closest to 1."
        },

        {
            id: "fn-008",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "A number line is divided into 6 equal parts. What fraction is at the fourth mark?",

            hint: "The denominator is 6. Count four equal parts from 0.",

            options: [
                "3/6",
                "4/6",
                "4/5",
                "5/6"
            ],

            correctAnswer: "4/6",

            explanation:
                "Four of the six equal parts have been reached, so the fraction is 4/6."
        },

        {
            id: "fn-009",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "A number line is divided into 8 equal parts. What fraction is at the second mark?",

            hint: "Count two parts out of the eight equal parts.",

            options: [
                "1/8",
                "2/8",
                "2/6",
                "3/8"
            ],

            correctAnswer: "2/8",

            explanation:
                "The second mark represents two of the eight equal parts, so it is 2/8."
        },

        {
            id: "fn-010",
            skillId: "fractions-on-number-line",
            stage: "recognise",
            difficulty: 1,

            question: "Which fraction is at the final mark before 1 on a number line split into 5 equal parts?",

            hint: "The final mark before the whole is one part short of 5/5.",

            options: [
                "3/5",
                "4/5",
                "4/4",
                "5/5"
            ],

            correctAnswer: "4/5",

            explanation:
                "A fifths number line has marks at 1/5, 2/5, 3/5 and 4/5 before reaching 1."
        },
                {
            id: "fn-011",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "A number line from 0 to 1 is split into 8 equal parts. Which fraction is at the fifth mark?",

            hint: "The denominator is 8. Count five equal parts from 0.",

            options: [
                "4/8",
                "5/8",
                "5/6",
                "6/8"
            ],

            correctAnswer: "5/8",

            explanation:
                "The fifth mark represents five of the eight equal parts, so it is 5/8."
        },

        {
            id: "fn-012",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "A number line from 0 to 1 is split into 6 equal parts. Which fraction is at the third mark?",

            hint: "Count three equal parts from 0.",

            options: [
                "2/6",
                "3/6",
                "3/5",
                "4/6"
            ],

            correctAnswer: "3/6",

            explanation:
                "The third mark represents three of the six equal parts, so it is 3/6."
        },

        {
            id: "fn-013",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction would be halfway between 0 and 1 on a number line?",

            hint: "Halfway divides the whole into two equal parts.",

            options: [
                "2/5",
                "3/6",
                "2/3",
                "3/4"
            ],

            correctAnswer: "3/6",

            explanation:
                "3/6 represents three out of six equal parts. That is half of the whole, so it is halfway between 0 and 1."
        },

        {
            id: "fn-014",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is greater on a number line: 3/8 or 5/8?",

            hint: "The denominators are the same. Compare the numerators.",

            options: [
                "3/8",
                "5/8",
                "They are equal",
                "Neither fraction"
            ],

            correctAnswer: "5/8",

            explanation:
                "Both fractions are eighths. Five eighths is farther to the right on the number line than three eighths."
        },

        {
            id: "fn-015",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is smaller on a number line: 2/7 or 5/7?",

            hint: "The denominators are the same, so compare the numerators.",

            options: [
                "2/7",
                "5/7",
                "They are equal",
                "Neither fraction"
            ],

            correctAnswer: "2/7",

            explanation:
                "Two sevenths is less than five sevenths, so 2/7 is farther to the left."
        },

        {
            id: "fn-016",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "A number line is divided into 10 equal parts. What fraction is at the seventh mark?",

            hint: "Seven marks means seven parts out of the ten equal parts.",

            options: [
                "6/10",
                "7/10",
                "7/9",
                "8/10"
            ],

            correctAnswer: "7/10",

            explanation:
                "The seventh mark represents seven out of ten equal parts, so it is 7/10."
        },

        {
            id: "fn-017",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction comes immediately after 4/6 on a number line divided into sixths?",

            hint: "Move one sixth to the right.",

            options: [
                "3/6",
                "4/6",
                "5/6",
                "6/6"
            ],

            correctAnswer: "5/6",

            explanation:
                "Moving one sixth to the right from 4/6 gives 5/6."
        },

        {
            id: "fn-018",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction comes immediately before 6/8 on a number line divided into eighths?",

            hint: "Move one eighth to the left.",

            options: [
                "4/8",
                "5/8",
                "6/8",
                "7/8"
            ],

            correctAnswer: "5/8",

            explanation:
                "One eighth before 6/8 is 5/8."
        },

        {
            id: "fn-019",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "A point is halfway between 2/8 and 6/8. Which fraction is at the point?",

            hint: "Find the fraction exactly halfway between the two positions.",

            options: [
                "3/8",
                "4/8",
                "5/8",
                "6/8"
            ],

            correctAnswer: "4/8",

            explanation:
                "4/8 is halfway between 2/8 and 6/8 because it is two eighths from each."
        },

        {
            id: "fn-020",
            skillId: "fractions-on-number-line",
            stage: "understand",
            difficulty: 2,

            question: "Which fraction is closest to 1 on a number line divided into eighths?",

            hint: "Look for the fraction furthest to the right without reaching the whole.",

            options: [
                "5/8",
                "6/8",
                "7/8",
                "4/8"
            ],

            correctAnswer: "7/8",

            explanation:
                "7/8 is one eighth away from 1, so it is closest to 1."
        },
                {
            id: "fn-021",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "A number line is divided into 8 equal parts. A point is 3 steps to the right of 2/8. Which fraction is at the point?",

            hint: "Start at 2/8 and count three eighths to the right.",

            options: [
                "4/8",
                "5/8",
                "6/8",
                "7/8"
            ],

            correctAnswer: "5/8",

            explanation:
                "Starting at 2/8 and moving three eighths to the right gives 3/8, 4/8 and then 5/8."
        },

        {
            id: "fn-022",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "A point is 2/7 on a number line. Which fraction is 3 equal steps to the right?",

            hint: "Add three sevenths to 2/7.",

            options: [
                "4/7",
                "5/7",
                "6/7",
                "7/7"
            ],

            correctAnswer: "5/7",

            explanation:
                "Starting at 2/7, three steps give 3/7, 4/7 and 5/7."
        },

        {
            id: "fn-023",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "A point is at 7/10 on a number line. Which fraction is 2 steps to the left?",

            hint: "Subtract one tenth twice.",

            options: [
                "4/10",
                "5/10",
                "6/10",
                "8/10"
            ],

            correctAnswer: "5/10",

            explanation:
                "One step left from 7/10 is 6/10. A second step gives 5/10."
        },

        {
            id: "fn-024",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "A number line from 0 to 1 is divided into 12 equal parts. Which fraction is at the ninth mark?",

            hint: "The denominator is 12 because the whole is split into 12 equal parts.",

            options: [
                "7/12",
                "8/12",
                "9/12",
                "10/12"
            ],

            correctAnswer: "9/12",

            explanation:
                "The ninth mark represents nine of the twelve equal parts, so it is 9/12."
        },

        {
            id: "fn-025",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "Which fraction is exactly halfway between 1/4 and 3/4?",

            hint: "Find the position halfway between the two fractions.",

            options: [
                "1/3",
                "1/2",
                "2/3",
                "3/4"
            ],

            correctAnswer: "1/2",

            explanation:
                "The point halfway between 1/4 and 3/4 is 1/2."
        },

        {
            id: "fn-026",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "Which fraction is exactly halfway between 2/8 and 6/8?",

            hint: "The halfway point is equally far from both fractions.",

            options: [
                "3/8",
                "4/8",
                "5/8",
                "6/8"
            ],

            correctAnswer: "4/8",

            explanation:
                "4/8 is two eighths after 2/8 and two eighths before 6/8, so it is exactly halfway."
        },

        {
            id: "fn-027",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "A number line is divided into 6 equal parts. Which fraction is closest to 1 without reaching 1?",

            hint: "Look for the mark immediately before the whole.",

            options: [
                "4/6",
                "5/6",
                "6/6",
                "3/6"
            ],

            correctAnswer: "5/6",

            explanation:
                "5/6 is one sixth away from 1, so it is the closest fraction without reaching the whole."
        },

        {
            id: "fn-028",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "A point is at 3/5. Which fraction is the same distance from 0 as 3/5 is from 1?",

            hint: "Think about reflecting the point across the halfway point.",

            options: [
                "1/5",
                "2/5",
                "3/5",
                "4/5"
            ],

            correctAnswer: "2/5",

            explanation:
                "3/5 is two fifths away from 1. The fraction that is two fifths away from 0 is 2/5."
        },

        {
            id: "fn-029",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "Four fractions are marked on the same number line: 1/8, 3/8, 5/8 and 7/8. Which one is furthest to the right?",

            hint: "On a number line, the greatest fraction is furthest to the right.",

            options: [
                "1/8",
                "3/8",
                "5/8",
                "7/8"
            ],

            correctAnswer: "7/8",

            explanation:
                "7/8 is the greatest of the four fractions, so it is furthest to the right."
        },

        {
            id: "fn-030",
            skillId: "fractions-on-number-line",
            stage: "master",
            difficulty: 3,

            question: "A number line is divided into 10 equal parts. A point is 3 steps to the left of 9/10. Which fraction does it show?",

            hint: "Count backwards three tenths from 9/10.",

            options: [
                "5/10",
                "6/10",
                "7/10",
                "8/10"
            ],

            correctAnswer: "6/10",

            explanation:
                "Three steps left from 9/10 are 8/10, 7/10 and 6/10. Therefore, the point is at 6/10."
        }

    ]
};

export default fractionsOnNumberLine;

export {
    fractionsOnNumberLine
};