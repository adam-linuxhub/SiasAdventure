import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  ANGLES
==================================================*/

const angles: SkillContent = {
    skillId: "angles",

    title: "Angles",

    description: "Recognise right angles, compare angles with a right angle, understand turns, and identify horizontal, vertical, parallel and perpendicular lines.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ang-001",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "Which angle is a right angle?",

            hint: "Look for the angle that makes a square corner.",

            image: "images/angles/right-angle.png",

            options: [
                "The angle shown",
                "A smaller angle",
                "A straight line",
                "A full turn"
            ],

            correctAnswer: "The angle shown",

            explanation:
                "The diagram shows a right angle. A right angle makes a square corner."
        },

        {
            id: "ang-002",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "What is true about the angle shown?",

            hint: "Compare the angle with a right angle.",

            image: "images/angles/smaller-angle.png",

            options: [
                "It is smaller than a right angle.",
                "It is exactly a right angle.",
                "It is greater than a right angle.",
                "It is a complete turn."
            ],

            correctAnswer: "It is smaller than a right angle.",

            explanation:
                "The angle shown is smaller than a right angle."
        },

        {
            id: "ang-003",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "What is true about the angle shown?",

            hint: "Compare the angle with a right angle.",

            image: "images/angles/greater-angle.png",

            options: [
                "It is smaller than a right angle.",
                "It is exactly a right angle.",
                "It is greater than a right angle.",
                "It has no angle."
            ],

            correctAnswer: "It is greater than a right angle.",

            explanation:
                "The angle shown is greater than a right angle."
        },

        {
            id: "ang-004",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "How many right angles make a quarter turn?",

            hint: "Think about turning from one direction to a direction at a square corner.",

            image: "images/angles/quarter-turn.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "1",

            explanation:
                "A quarter turn is one right angle."
        },

        {
            id: "ang-005",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "How many right angles make a half turn?",

            hint: "A half turn is two quarter turns.",

            image: "images/angles/half-turn.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "A half turn is two quarter turns, so it contains 2 right angles."
        },

        {
            id: "ang-006",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "How many right angles make three-quarters of a turn?",

            hint: "Three-quarter turn means three quarter turns.",

            image: "images/angles/three-quarter-turn.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "3",

            explanation:
                "Three-quarters of a turn is three quarter turns, so it contains 3 right angles."
        },

        {
            id: "ang-007",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "How many right angles make a complete turn?",

            hint: "Think about turning all the way around.",

            image: "images/angles/full-turn.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "4",

            explanation:
                "A complete turn is four quarter turns, so it contains 4 right angles."
        },

        {
            id: "ang-008",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "Which line is horizontal?",

            hint: "A horizontal line goes from left to right.",

            image: "images/angles/horizontal-line.png",

            options: [
                "The line shown",
                "A vertical line",
                "A curved line",
                "A diagonal line"
            ],

            correctAnswer: "The line shown",

            explanation:
                "The line shown is horizontal because it goes from left to right."
        },

        {
            id: "ang-009",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "Which line is vertical?",

            hint: "A vertical line goes up and down.",

            image: "images/angles/vertical-line.png",

            options: [
                "The line shown",
                "A horizontal line",
                "A curved line",
                "A diagonal line"
            ],

            correctAnswer: "The line shown",

            explanation:
                "The line shown is vertical because it goes up and down."
        },

        {
            id: "ang-010",
            skillId: "angles",
            stage: "recognise",
            difficulty: 1,

            question: "Which pair of lines are parallel?",

            hint: "Parallel lines stay the same distance apart and do not meet.",

            image: "images/angles/parallel-lines.png",

            options: [
                "The lines shown",
                "Two lines that cross",
                "Two lines that meet at a point",
                "Two curved lines"
            ],

            correctAnswer: "The lines shown",

            explanation:
                "The two lines shown are parallel because they stay the same distance apart and do not meet."
        },
                {
            id: "ang-011",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Which pair of lines are perpendicular?",

            hint: "Perpendicular lines meet to make a right angle.",

            image: "images/angles/perpendicular-lines.png",

            options: [
                "The lines shown",
                "Parallel lines",
                "Curved lines",
                "Lines that never meet"
            ],

            correctAnswer: "The lines shown",

            explanation:
                "The lines shown are perpendicular because they meet at a right angle."
        },

        {
            id: "ang-012",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Sia makes a quarter turn. How many right angles has she turned through?",

            hint: "A quarter turn is one right angle.",

            image: "images/angles/quarter-turn.png",

            options: [
                "1 right angle",
                "2 right angles",
                "3 right angles",
                "4 right angles"
            ],

            correctAnswer: "1 right angle",

            explanation:
                "A quarter turn is equal to one right angle."
        },

        {
            id: "ang-013",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Sia makes a half turn. How many quarter turns has she made?",

            hint: "Think of a half turn as two equal quarter turns.",

            image: "images/angles/half-turn.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "A half turn is made from two quarter turns."
        },

        {
            id: "ang-014",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Sia makes three quarter turns. What type of turn has she made?",

            hint: "Three quarter turns make three-quarters of a complete turn.",

            image: "images/angles/three-quarter-turn.png",

            options: [
                "A quarter turn",
                "A half turn",
                "A three-quarter turn",
                "A full turn"
            ],

            correctAnswer: "A three-quarter turn",

            explanation:
                "Three quarter turns together make a three-quarter turn."
        },

        {
            id: "ang-015",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Sia turns all the way around and finishes facing the same direction. What has she made?",

            hint: "Think about completing the whole circle.",

            image: "images/angles/full-turn.png",

            options: [
                "A quarter turn",
                "A half turn",
                "A three-quarter turn",
                "A full turn"
            ],

            correctAnswer: "A full turn",

            explanation:
                "Turning all the way around to face the original direction is a full turn."
        },

        {
            id: "ang-016",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Which statement describes parallel lines?",

            hint: "Think about what happens to the distance between the lines.",

            image: "images/angles/parallel-lines.png",

            options: [
                "They meet at one point.",
                "They stay the same distance apart.",
                "They always make a right angle.",
                "They form a curve."
            ],

            correctAnswer: "They stay the same distance apart.",

            explanation:
                "Parallel lines stay the same distance apart and do not meet."
        },

        {
            id: "ang-017",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Which description matches a vertical line?",

            hint: "Think about the direction from top to bottom.",

            image: "images/angles/vertical-line.png",

            options: [
                "It goes from left to right.",
                "It goes up and down.",
                "It curves around.",
                "It slopes from corner to corner."
            ],

            correctAnswer: "It goes up and down.",

            explanation:
                "A vertical line goes up and down."
        },

        {
            id: "ang-018",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "Which description matches a horizontal line?",

            hint: "Think about the direction from left to right.",

            image: "images/angles/horizontal-line.png",

            options: [
                "It goes up and down.",
                "It goes from left to right.",
                "It makes a complete turn.",
                "It forms a curved edge."
            ],

            correctAnswer: "It goes from left to right.",

            explanation:
                "A horizontal line goes from left to right."
        },

        {
            id: "ang-019",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "An angle is smaller than a right angle. Which statement is correct?",

            hint: "Compare its size with a square corner.",

            image: "images/angles/smaller-angle.png",

            options: [
                "It is less than a right angle.",
                "It is exactly a right angle.",
                "It is greater than a right angle.",
                "It is a full turn."
            ],

            correctAnswer: "It is less than a right angle.",

            explanation:
                "If an angle is smaller than a right angle, it is less than a right angle."
        },

        {
            id: "ang-020",
            skillId: "angles",
            stage: "apply",
            difficulty: 2,

            question: "An angle is greater than a right angle. Which statement is correct?",

            hint: "Think about whether the angle is wider or narrower than a square corner.",

            image: "images/angles/greater-angle.png",

            options: [
                "It is less than a right angle.",
                "It is exactly a right angle.",
                "It is greater than a right angle.",
                "It is not an angle."
            ],

            correctAnswer: "It is greater than a right angle.",

            explanation:
                "If an angle is greater than a right angle, it is wider than a right angle."
        },
                {
            id: "ang-021",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Sia starts facing north. She makes a quarter turn clockwise. Which direction is she facing?",

            hint: "A quarter turn is a right-angle turn. Imagine turning one direction to the right.",

            options: [
                "North",
                "East",
                "South",
                "West"
            ],

            correctAnswer: "East",

            explanation:
                "A quarter turn clockwise from north takes Sia to east."
        },

        {
            id: "ang-022",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Sia starts facing east. She makes a half turn. Which direction is she facing?",

            hint: "A half turn takes you to the opposite direction.",

            options: [
                "North",
                "East",
                "South",
                "West"
            ],

            correctAnswer: "West",

            explanation:
                "A half turn changes east to the opposite direction, west."
        },

        {
            id: "ang-023",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Sia makes one quarter turn and then another quarter turn. What has she made altogether?",

            hint: "Combine the two quarter turns.",

            image: "images/angles/half-turn.png",

            options: [
                "A quarter turn",
                "A half turn",
                "A three-quarter turn",
                "A full turn"
            ],

            correctAnswer: "A half turn",

            explanation:
                "Two quarter turns make one half turn."
        },

        {
            id: "ang-024",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Sia makes four quarter turns in the same direction. What happens?",

            hint: "Four quarter turns complete the whole journey around.",

            image: "images/angles/full-turn.png",

            options: [
                "She makes a quarter turn.",
                "She makes a half turn.",
                "She makes a full turn.",
                "She stops after three turns."
            ],

            correctAnswer: "She makes a full turn.",

            explanation:
                "Four quarter turns make one complete or full turn."
        },

        {
            id: "ang-025",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Which pair of lines is perpendicular?",

            hint: "Look for lines that meet to form a right angle.",

            image: "images/angles/perpendicular-lines.png",

            options: [
                "The lines shown",
                "Two lines that stay apart",
                "Two curved lines",
                "Two lines that run in the same direction"
            ],

            correctAnswer: "The lines shown",

            explanation:
                "Perpendicular lines meet at a right angle."
        },

        {
            id: "ang-026",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "A rectangle has four corners. What type of angle is at each corner?",

            hint: "Think about the square-corner shape made where the sides meet.",

            image: "images/angles/right-angle.png",

            options: [
                "A right angle",
                "A smaller angle",
                "A full turn",
                "A curved angle"
            ],

            correctAnswer: "A right angle",

            explanation:
                "Each corner of a rectangle is a right angle."
        },

        {
            id: "ang-027",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Sia turns three quarter turns clockwise. How many quarter turns does she need to make to complete a full turn?",

            hint: "A full turn contains four quarter turns.",

            image: "images/angles/three-quarter-turn.png",

            options: [
                "One more quarter turn",
                "Two more quarter turns",
                "Three more quarter turns",
                "Four more quarter turns"
            ],

            correctAnswer: "One more quarter turn",

            explanation:
                "A full turn is four quarter turns. After three, Sia needs one more quarter turn."
        },

        {
            id: "ang-028",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Which statement correctly compares the two angles shown?",

            hint: "Compare each angle with a right angle.",

            image: "images/angles/smaller-angle.png",

            options: [
                "The shown angle is smaller than a right angle.",
                "The shown angle is greater than a right angle.",
                "The shown angle is exactly a full turn.",
                "The shown angle is made from parallel lines."
            ],

            correctAnswer: "The shown angle is smaller than a right angle.",

            explanation:
                "The angle shown is narrower than a right angle, so it is smaller than a right angle."
        },

        {
            id: "ang-029",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Sia sees two lines that never meet and remain the same distance apart. What type of lines are they?",

            hint: "Think of two straight tracks that continue side by side.",

            image: "images/angles/parallel-lines.png",

            options: [
                "Perpendicular",
                "Parallel",
                "Vertical",
                "Curved"
            ],

            correctAnswer: "Parallel",

            explanation:
                "Lines that remain the same distance apart and never meet are parallel lines."
        },

        {
            id: "ang-030",
            skillId: "angles",
            stage: "master",
            difficulty: 3,

            question: "Sia starts facing north. She makes a half turn and then a quarter turn clockwise. Which direction is she facing?",

            hint: "First find the direction after the half turn. Then make one quarter turn clockwise.",

            image: "images/angles/half-turn.png",

            options: [
                "North",
                "East",
                "South",
                "West"
            ],

            correctAnswer: "West",

            explanation:
                "A half turn from north points south. One quarter turn clockwise from south points west."
        },
            ]
};

export default angles;

export {
    angles
};