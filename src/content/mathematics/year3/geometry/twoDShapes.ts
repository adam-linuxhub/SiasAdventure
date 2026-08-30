import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  2D SHAPES
==================================================*/

const twoDShapes: SkillContent = {
    skillId: "two-d-shapes",

    title: "2D Shapes",

    description: "Recognise, name, compare and describe common 2D shapes and their properties.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "2ds-001",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 3 sides?",

            hint: "Count the straight sides of each shape.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Triangle",

            explanation:
                "A triangle has 3 straight sides and 3 vertices."
        },

        {
            id: "2ds-002",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 4 equal sides?",

            hint: "Think about a shape where all four sides are the same length.",

            image: "images/twoDShapes/square.png",

            options: [
                "Rectangle",
                "Square",
                "Triangle",
                "Pentagon"
            ],

            correctAnswer: "Square",

            explanation:
                "A square has 4 equal sides and 4 vertices."
        },

        {
            id: "2ds-003",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 5 sides?",

            hint: "Count the sides of the shapes.",

            image: "images/twoDShapes/pentagon.png",

            options: [
                "Hexagon",
                "Octagon",
                "Pentagon",
                "Triangle"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon is a 2D shape with 5 straight sides."
        },

        {
            id: "2ds-004",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many sides does a hexagon have?",

            hint: "Count each straight side once.",

            image: "images/twoDShapes/hexagon.png",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "A hexagon has 6 straight sides."
        },

        {
            id: "2ds-005",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many sides does an octagon have?",

            hint: "Count around the outside of the shape.",

            image: "images/twoDShapes/octagon.png",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "An octagon has 8 straight sides."
        },

        {
            id: "2ds-006",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 4 sides?",

            hint: "Look for a shape with four straight sides.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "Triangle",
                "Pentagon",
                "Rectangle",
                "Hexagon"
            ],

            correctAnswer: "Rectangle",

            explanation:
                "A rectangle has 4 straight sides and 4 vertices."
        },

        {
            id: "2ds-007",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 6 sides?",

            hint: "A shape with 6 sides is called a hexagon.",

            options: [
                "Pentagon",
                "Hexagon",
                "Octagon",
                "Triangle"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A hexagon has 6 straight sides."
        },

        {
            id: "2ds-008",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 8 sides?",

            hint: "Count the sides or remember the name for an 8-sided polygon.",

            options: [
                "Octagon",
                "Hexagon",
                "Pentagon",
                "Rectangle"
            ],

            correctAnswer: "Octagon",

            explanation:
                "An octagon has 8 straight sides."
        },

        {
            id: "2ds-009",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 3 vertices?",

            hint: "Vertices are the corners where two sides meet.",

            options: [
                "Square",
                "Triangle",
                "Pentagon",
                "Octagon"
            ],

            correctAnswer: "Triangle",

            explanation:
                "A triangle has 3 sides and 3 vertices."
        },

        {
            id: "2ds-010",
            skillId: "two-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 5 vertices?",

            hint: "The number of vertices matches the number of sides in these polygons.",

            options: [
                "Pentagon",
                "Hexagon",
                "Triangle",
                "Octagon"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon has 5 sides and 5 vertices."
        },
                {
            id: "2ds-011",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Sia draws a shape with 6 straight sides. What is the shape called?",

            hint: "Use the number of sides to identify the shape.",

            options: [
                "Pentagon",
                "Hexagon",
                "Octagon",
                "Triangle"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A shape with 6 straight sides is called a hexagon."
        },

        {
            id: "2ds-012",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has exactly 4 vertices and 4 sides?",

            hint: "Look for a shape with four corners and four straight sides.",

            options: [
                "Triangle",
                "Pentagon",
                "Rectangle",
                "Hexagon"
            ],

            correctAnswer: "Rectangle",

            explanation:
                "A rectangle has exactly 4 sides and 4 vertices."
        },

        {
            id: "2ds-013",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "A shape has 5 sides and 5 vertices. Which shape could it be?",

            hint: "Think of the name for a 5-sided polygon.",

            options: [
                "Triangle",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon has 5 straight sides and 5 vertices."
        },

        {
            id: "2ds-014",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which pair of shapes both have 4 sides?",

            hint: "Count the sides of each shape in the pair.",

            options: [
                "Triangle and square",
                "Square and rectangle",
                "Pentagon and hexagon",
                "Hexagon and octagon"
            ],

            correctAnswer: "Square and rectangle",

            explanation:
                "Both a square and a rectangle have 4 straight sides."
        },

        {
            id: "2ds-015",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has more sides than a pentagon but fewer sides than an octagon?",

            hint: "A pentagon has 5 sides and an octagon has 8.",

            options: [
                "Triangle",
                "Square",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A hexagon has 6 sides, which is more than 5 and fewer than 8."
        },

        {
            id: "2ds-016",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has the greatest number of sides?",

            hint: "Count the sides rather than judging by the size of the picture.",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Octagon"
            ],

            correctAnswer: "Octagon",

            explanation:
                "An octagon has 8 sides, which is the greatest number in this group."
        },

        {
            id: "2ds-017",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which statement about a square is true?",

            hint: "Think about the number of sides and whether they are equal.",

            image: "images/twoDShapes/square.png",

            options: [
                "It has 3 sides.",
                "It has 4 equal sides.",
                "It has 5 sides.",
                "It has 6 vertices."
            ],

            correctAnswer: "It has 4 equal sides.",

            explanation:
                "A square has 4 sides, and all 4 sides are equal in length."
        },

        {
            id: "2ds-018",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape is the only one with 3 sides?",

            hint: "A triangle is the only common shape here with three sides.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "Triangle",
                "Square",
                "Hexagon",
                "Pentagon"
            ],

            correctAnswer: "Triangle",

            explanation:
                "A triangle has 3 straight sides. The other shapes have more than 3."
        },

        {
            id: "2ds-019",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "A shape has 8 sides. Which two facts must also be true?",

            hint: "For these polygons, the number of sides matches the number of vertices.",

            options: [
                "It has 3 vertices and is a triangle.",
                "It has 4 vertices and is a square.",
                "It has 5 vertices and is a pentagon.",
                "It has 8 vertices and is an octagon."
            ],

            correctAnswer: "It has 8 vertices and is an octagon.",

            explanation:
                "An octagon has 8 straight sides and 8 vertices."
        },

        {
            id: "2ds-020",
            skillId: "two-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Sia sorts shapes into a group with exactly 4 sides. Which shape belongs in her group?",

            hint: "Count the straight sides of each shape.",

            options: [
                "Triangle",
                "Rectangle",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Rectangle",

            explanation:
                "A rectangle has exactly 4 straight sides, so it belongs in the group."
        },
                {
            id: "2ds-021",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia chooses a shape with more than 4 sides but fewer than 7 sides. Which shape could she choose?",

            hint: "The number of sides must be 5 or 6.",

            options: [
                "Triangle",
                "Pentagon",
                "Octagon",
                "Square"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon has 5 sides. Five is more than 4 and fewer than 7."
        },

        {
            id: "2ds-022",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape has exactly 2 more sides than a square?",

            hint: "A square has 4 sides. Add 2 to 4.",

            options: [
                "Triangle",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A square has 4 sides. Two more than 4 is 6, and a hexagon has 6 sides."
        },

        {
            id: "2ds-023",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A shape has one more side than a pentagon. What shape is it?",

            hint: "A pentagon has 5 sides. Add one.",

            options: [
                "Triangle",
                "Square",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A pentagon has 5 sides. One more side makes 6 sides, which is a hexagon."
        },

        {
            id: "2ds-024",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which statement correctly compares a triangle and a hexagon?",

            hint: "Compare the number of straight sides each shape has.",

            options: [
                "They both have 4 sides.",
                "A triangle has more sides.",
                "A hexagon has more sides.",
                "They both have 8 sides."
            ],

            correctAnswer: "A hexagon has more sides.",

            explanation:
                "A triangle has 3 sides and a hexagon has 6 sides, so the hexagon has more."
        },

        {
            id: "2ds-025",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia has a group of shapes with 3, 5 and 6 sides. Which shape could she add without repeating a number of sides?",

            hint: "The new shape must have a different number of sides from 3, 5 and 6.",

            options: [
                "Triangle",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Octagon",

            explanation:
                "The group already has shapes with 3, 5 and 6 sides. An octagon has 8 sides, so it adds a new number."
        },

        {
            id: "2ds-026",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A shape has 4 sides. Another shape has twice as many sides. Which shape is the second one?",

            hint: "Double 4 to find the number of sides in the second shape.",

            options: [
                "Triangle",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Octagon",

            explanation:
                "Twice 4 is 8. A shape with 8 sides is an octagon."
        },

        {
            id: "2ds-027",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape could be described as having more sides than a hexagon but fewer than an octagon?",

            hint: "A hexagon has 6 sides and an octagon has 8.",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "None of these"
            ],

            correctAnswer: "None of these",

            explanation:
                "A shape with more than 6 sides but fewer than 8 sides would need 7 sides. None of the named shapes shown has 7 sides."
        },

        {
            id: "2ds-028",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia sorts these shapes by number of sides: triangle, square, pentagon and hexagon. Which order goes from fewest sides to most sides?",

            hint: "Count the sides of each shape and put the numbers in order.",

            options: [
                "Triangle, square, pentagon, hexagon",
                "Hexagon, pentagon, square, triangle",
                "Square, triangle, hexagon, pentagon",
                "Pentagon, triangle, square, hexagon"
            ],

            correctAnswer: "Triangle, square, pentagon, hexagon",

            explanation:
                "The shapes have 3, 4, 5 and 6 sides respectively, so this order goes from fewest to most."
        },

        {
            id: "2ds-029",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A shape has fewer than 8 sides and more than 5 sides. Which of these could be its number of sides?",

            hint: "The number must be greater than 5 but less than 8.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "The only whole number greater than 5 and less than 8 is 6."
        },

        {
            id: "2ds-030",
            skillId: "two-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia is thinking of a shape. It has more sides than a square, fewer sides than an octagon, and exactly 5 vertices. What shape is she thinking of?",

            hint: "The number of vertices is the key clue.",

            options: [
                "Triangle",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon has 5 vertices and 5 sides. It also has more sides than a square and fewer than an octagon."
        },
            ]
};

export default twoDShapes;

export {
    twoDShapes
};