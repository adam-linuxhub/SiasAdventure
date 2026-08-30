import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  PROPERTIES OF 2D SHAPES
==================================================*/

const propertiesOf2DShapes: SkillContent = {
    skillId: "properties-of-2d-shapes",

    title: "Properties of 2D Shapes",

    description: "Identify and compare 2D shapes using their sides, vertices and other properties.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "p2d-001",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many sides does a triangle have?",

            hint: "Count the straight sides around the shape.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "A triangle has 3 straight sides."
        },

        {
            id: "p2d-002",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many sides does a square have?",

            hint: "Count all the straight sides around the square.",

            image: "images/twoDShapes/square.png",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "A square has 4 equal straight sides."
        },

        {
            id: "p2d-003",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many sides does a pentagon have?",

            hint: "The name gives you a clue. Count the sides of the shape.",

            image: "images/twoDShapes/pentagon.png",

            options: [
                "4",
                "5",
                "6",
                "7"
            ],

            correctAnswer: "5",

            explanation:
                "A pentagon has 5 straight sides."
        },

        {
            id: "p2d-004",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many sides does a hexagon have?",

            hint: "Count the straight sides around the shape.",

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
            id: "p2d-005",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many sides does an octagon have?",

            hint: "Count each straight side around the shape.",

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
            id: "p2d-006",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many vertices does a triangle have?",

            hint: "A vertex is a corner where two sides meet.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "A triangle has 3 vertices, one at each corner."
        },

        {
            id: "p2d-007",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many vertices does a rectangle have?",

            hint: "Count the corners of the rectangle.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "A rectangle has 4 vertices."
        },

        {
            id: "p2d-008",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 5 sides?",

            hint: "Look for the shape with five straight sides.",

            image: "images/twoDShapes/pentagon.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon has 5 sides."
        },

        {
            id: "p2d-009",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 6 sides?",

            hint: "Count the sides of each possible shape.",

            image: "images/twoDShapes/hexagon.png",

            options: [
                "Pentagon",
                "Hexagon",
                "Octagon",
                "Triangle"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A hexagon has 6 sides."
        },

        {
            id: "p2d-010",
            skillId: "properties-of-2d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 8 sides?",

            hint: "Look for the shape with eight straight sides.",

            image: "images/twoDShapes/octagon.png",

            options: [
                "Hexagon",
                "Pentagon",
                "Octagon",
                "Square"
            ],

            correctAnswer: "Octagon",

            explanation:
                "An octagon has 8 sides."
        },
                {
            id: "p2d-011",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which statement is true about a square?",

            hint: "Think about its four sides and four corners.",

            image: "images/twoDShapes/square.png",

            options: [
                "It has 3 equal sides.",
                "It has 4 equal sides.",
                "It has 5 equal sides.",
                "It has 6 equal sides."
            ],

            correctAnswer: "It has 4 equal sides.",

            explanation:
                "A square has 4 equal sides and 4 vertices."
        },

        {
            id: "p2d-012",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which statement is true about a rectangle?",

            hint: "Think about its opposite sides.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "It has 4 equal sides.",
                "It has 2 pairs of equal sides.",
                "It has 3 sides.",
                "It has 5 vertices."
            ],

            correctAnswer: "It has 2 pairs of equal sides.",

            explanation:
                "A rectangle has 4 sides and 4 vertices. Its opposite sides are equal in length."
        },

        {
            id: "p2d-013",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has exactly 3 sides and 3 vertices?",

            hint: "Look for the shape with three straight sides.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Triangle",

            explanation:
                "A triangle has exactly 3 sides and 3 vertices."
        },

               {
            id: "p2d-014",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has 4 equal sides and 4 vertices?",

            hint: "Look for the four-sided shape where every side is the same length.",

            image: "images/twoDShapes/square.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Square",

            explanation:
                "A square has 4 equal sides and 4 vertices."
        },

        {
            id: "p2d-015",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has more sides: a pentagon or a hexagon?",

            hint: "A pentagon has 5 sides. A hexagon has 6.",

            options: [
                "Pentagon",
                "Hexagon",
                "They have the same number.",
                "Neither has sides."
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A pentagon has 5 sides and a hexagon has 6, so the hexagon has more sides."
        },

        {
            id: "p2d-016",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has fewer sides than an octagon but more sides than a square?",

            hint: "A square has 4 sides and an octagon has 8 sides.",

            options: [
                "Triangle",
                "Pentagon",
                "Octagon",
                "None of these"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon has 5 sides, which is more than 4 and fewer than 8."
        },

        {
            id: "p2d-017",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Sia chooses a shape with 6 equal sides. Which shape is she most likely describing?",

            hint: "Think about the shape whose name tells you it has six sides.",

            image: "images/twoDShapes/hexagon.png",

            options: [
                "Triangle",
                "Square",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A hexagon has 6 sides. If all six sides are equal, it is a regular hexagon."
        },

        {
            id: "p2d-018",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has the greatest number of sides?",

            hint: "Compare the number of sides of the four shapes.",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Octagon"
            ],

            correctAnswer: "Octagon",

            explanation:
                "An octagon has 8 sides, which is more than the 3, 4 and 5 sides of the other shapes."
        },

        {
            id: "p2d-019",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "A regular polygon has 5 equal sides. What is its name?",

            hint: "The name of the polygon tells you how many sides it has.",

            image: "images/twoDShapes/pentagon.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A pentagon has 5 sides. If all five sides are equal, it is a regular pentagon."
        },

        {
            id: "p2d-020",
            skillId: "properties-of-2d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Sia sorts shapes by their number of vertices. Which shape belongs in the group with 8 vertices?",

            hint: "A vertex is a corner. Find the shape with 8 corners.",

            image: "images/twoDShapes/octagon.png",

            options: [
                "Triangle",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Octagon",

            explanation:
                "An octagon has 8 sides and 8 vertices."
        },
                {
            id: "p2d-021",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia describes a shape as having 4 equal sides and 4 vertices. Which shape could she mean?",

            hint: "Think about the 2D shape with four equal sides.",

            image: "images/twoDShapes/square.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Square",

            explanation:
                "A square has 4 equal sides and 4 vertices."
        },

        {
            id: "p2d-022",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A shape has 4 sides, 4 vertices and 2 pairs of equal opposite sides. Which shape is being described?",

            hint: "Think about a four-sided shape whose opposite sides match.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "Triangle",
                "Rectangle",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Rectangle",

            explanation:
                "A rectangle has 4 sides and 4 vertices, with opposite sides equal in length."
        },

        {
            id: "p2d-023",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape has exactly one more side than a square?",

            hint: "A square has 4 sides. Add one more.",

            options: [
                "Triangle",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "A square has 4 sides. A pentagon has 5 sides, which is exactly one more."
        },

        {
            id: "p2d-024",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape has exactly one more side than a pentagon?",

            hint: "A pentagon has 5 sides. Add one more.",

            options: [
                "Square",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A pentagon has 5 sides. One more side makes 6, so the shape is a hexagon."
        },

        {
            id: "p2d-025",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape has exactly 3 more sides than a triangle?",

            hint: "A triangle has 3 sides. Add three more.",

            options: [
                "Square",
                "Pentagon",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A triangle has 3 sides. Three more gives 6 sides, so the answer is a hexagon."
        },

        {
            id: "p2d-026",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia has a regular polygon with 8 equal sides. What is the polygon called?",

            hint: "A regular polygon has all its sides equal. Look at the name for an 8-sided polygon.",

            image: "images/twoDShapes/octagon.png",

            options: [
                "Pentagon",
                "Hexagon",
                "Octagon",
                "Triangle"
            ],

            correctAnswer: "Octagon",

            explanation:
                "An octagon has 8 sides. If all 8 sides are equal, it is a regular octagon."
        },

        {
            id: "p2d-027",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia sorts a triangle, square, pentagon and hexagon from fewest sides to most sides. Which shape is third?",

            hint: "The numbers of sides are 3, 4, 5 and 6.",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Pentagon",

            explanation:
                "The order is triangle (3), square (4), pentagon (5), hexagon (6). The pentagon is third."
        },

        {
            id: "p2d-028",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A shape has more than 5 sides but fewer than 8 sides. Which shape from the options fits?",

            hint: "Look for a shape with 6 or 7 sides.",

            options: [
                "Triangle",
                "Square",
                "Hexagon",
                "Octagon"
            ],

            correctAnswer: "Hexagon",

            explanation:
                "A hexagon has 6 sides. Six is more than 5 and fewer than 8."
        },

        {
            id: "p2d-029",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia has a shape with 4 sides. She knows that all four sides are equal. Which shape could it be?",

            hint: "Think of the familiar four-sided shape with four equal sides.",

            image: "images/twoDShapes/square.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Hexagon"
            ],

            correctAnswer: "Square",

            explanation:
                "A square has 4 equal sides and 4 vertices."
        },

        {
            id: "p2d-030",
            skillId: "properties-of-2d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia has four shapes: triangle, square, pentagon and octagon. Which shape has the greatest number of vertices?",

            hint: "A polygon has the same number of vertices as sides.",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Octagon"
            ],

            correctAnswer: "Octagon",

            explanation:
                "An octagon has 8 vertices, which is more than the 3, 4 and 5 vertices of the other shapes."
        },
    ]
};

export default propertiesOf2DShapes;

export {
    propertiesOf2DShapes
};