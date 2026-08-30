import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  SYMMETRY
==================================================*/

const symmetry: SkillContent = {
    skillId: "symmetry",

    title: "Symmetry",

    description: "Recognise lines of symmetry and identify whether 2D shapes and patterns are symmetrical.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "sym-001",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "What is a line of symmetry?",

            hint: "Think about a line that divides a shape into two matching parts.",

            options: [
                "A line that divides a shape into two matching halves",
                "A line that makes a shape longer",
                "A line around the outside of a shape",
                "A line that adds another side"
            ],

            correctAnswer: "A line that divides a shape into two matching halves",

            explanation:
                "A line of symmetry divides a shape or pattern into two matching halves."
        },

        {
            id: "sym-002",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 4 lines of symmetry?",

            hint: "Think about a shape that can be folded in half in four different ways.",

            image: "images/twoDShapes/square.png",

            options: [
                "Triangle",
                "Square",
                "Pentagon",
                "Rectangle"
            ],

            correctAnswer: "Square",

            explanation:
                "A square has 4 lines of symmetry."
        },

        {
            id: "sym-003",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "How many lines of symmetry does a square have?",

            hint: "Think about its two vertical or horizontal halves and its two diagonal halves.",

            image: "images/twoDShapes/square.png",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "4",

            explanation:
                "A square has 4 lines of symmetry: two through the middle and two diagonals."
        },

        {
            id: "sym-004",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "How many lines of symmetry does a rectangle have?",

            hint: "A rectangle can be folded in half through its middle in two different directions.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "A rectangle has 2 lines of symmetry."
        },

        {
            id: "sym-005",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "Which statement describes a symmetrical shape?",

            hint: "Imagine folding the shape along its line of symmetry.",

            options: [
                "Both halves match.",
                "The two halves are different sizes.",
                "One half has more sides.",
                "The shape has no corners."
            ],

            correctAnswer: "Both halves match.",

            explanation:
                "A symmetrical shape has matching parts on either side of its line or lines of symmetry."
        },

        {
            id: "sym-006",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has no line of symmetry?",

            hint: "Look for the shape that cannot be folded so that its two halves match.",

            options: [
                "A square",
                "A rectangle",
                "A regular hexagon",
                "A scalene triangle"
            ],

            correctAnswer: "A scalene triangle",

            explanation:
                "A scalene triangle has no line of symmetry because all of its sides and angles are different."
        },

        {
            id: "sym-007",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "A line divides a shape into two matching halves. What is the line called?",

            hint: "It has a special name connected with symmetry.",

            options: [
                "A parallel line",
                "A line of symmetry",
                "A curved line",
                "A number line"
            ],

            correctAnswer: "A line of symmetry",

            explanation:
                "A line that divides a shape into two matching halves is called a line of symmetry."
        },

        {
            id: "sym-008",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has exactly 1 line of symmetry?",

            hint: "Think about a triangle with two equal sides.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "An equilateral triangle",
                "An isosceles triangle",
                "A square",
                "A regular hexagon"
            ],

            correctAnswer: "An isosceles triangle",

            explanation:
                "An isosceles triangle has exactly 1 line of symmetry."
        },

        {
            id: "sym-009",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "What happens when a symmetrical shape is folded along its line of symmetry?",

            hint: "Think about whether the two sides would fit together.",

            options: [
                "The two halves match.",
                "Only one corner matches.",
                "The halves become different shapes.",
                "The shape doubles in size."
            ],

            correctAnswer: "The two halves match.",

            explanation:
                "When a symmetrical shape is folded along its line of symmetry, the two halves match exactly."
        },

        {
            id: "sym-010",
            skillId: "symmetry",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has the most lines of symmetry?",

            hint: "Compare the number of ways each shape can be divided into matching halves.",

            options: [
                "A square",
                "A rectangle",
                "A scalene triangle",
                "A regular octagon"
            ],

            correctAnswer: "A regular octagon",

            explanation:
                "A regular octagon has 8 lines of symmetry, more than the square's 4, rectangle's 2 and scalene triangle's 0."
        },
                {
            id: "sym-011",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "How many lines of symmetry does an equilateral triangle have?",

            hint: "An equilateral triangle has three equal sides and three equal corners.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "3",

            explanation:
                "An equilateral triangle has 3 lines of symmetry, one from each vertex to the midpoint of the opposite side."
        },

        {
            id: "sym-012",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "Which statement about a regular pentagon is correct?",

            hint: "A regular pentagon has five equal sides and five equal angles.",

            image: "images/twoDShapes/pentagon.png",

            options: [
                "It has 1 line of symmetry.",
                "It has 3 lines of symmetry.",
                "It has 5 lines of symmetry.",
                "It has no lines of symmetry."
            ],

            correctAnswer: "It has 5 lines of symmetry.",

            explanation:
                "A regular pentagon has 5 lines of symmetry."
        },

        {
            id: "sym-013",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "Which statement about a regular hexagon is correct?",

            hint: "A regular hexagon has six equal sides and six equal angles.",

            image: "images/twoDShapes/hexagon.png",

            options: [
                "It has 2 lines of symmetry.",
                "It has 4 lines of symmetry.",
                "It has 6 lines of symmetry.",
                "It has 8 lines of symmetry."
            ],

            correctAnswer: "It has 6 lines of symmetry.",

            explanation:
                "A regular hexagon has 6 lines of symmetry."
        },

        {
            id: "sym-014",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "Which statement about a regular octagon is correct?",

            hint: "For a regular polygon, the number of lines of symmetry matches the number of sides.",

            image: "images/twoDShapes/octagon.png",

            options: [
                "It has 4 lines of symmetry.",
                "It has 6 lines of symmetry.",
                "It has 8 lines of symmetry.",
                "It has 10 lines of symmetry."
            ],

            correctAnswer: "It has 8 lines of symmetry.",

            explanation:
                "A regular octagon has 8 lines of symmetry."
        },

        {
            id: "sym-015",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "A square has 4 lines of symmetry. How many lines of symmetry does a rectangle have if it is not a square?",

            hint: "Think about the two ways a rectangle can be folded into matching halves.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "2",

            explanation:
                "A rectangle that is not a square has 2 lines of symmetry."
        },

        {
            id: "sym-016",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "Sia draws a line from the top vertex of an isosceles triangle to the midpoint of its base. What does this line do?",

            hint: "An isosceles triangle has two equal sides. Think about how the line divides it.",

            image: "images/twoDShapes/triangle.png",

            options: [
                "It creates two matching halves.",
                "It creates three equal shapes.",
                "It makes the triangle a rectangle.",
                "It removes the line of symmetry."
            ],

            correctAnswer: "It creates two matching halves.",

            explanation:
                "In an isosceles triangle, this line creates two matching halves and is the line of symmetry."
        },

        {
            id: "sym-017",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "A shape has 4 lines of symmetry. Which shape could it be?",

            hint: "Think about the familiar four-sided shape with four lines of symmetry.",

            image: "images/twoDShapes/square.png",

            options: [
                "A square",
                "A scalene triangle",
                "A rectangle that is not a square",
                "A general pentagon"
            ],

            correctAnswer: "A square",

            explanation:
                "A square has 4 lines of symmetry."
        },

        {
            id: "sym-018",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "Sia folds a square exactly along one of its lines of symmetry. What should happen?",

            hint: "The two parts on either side of the fold should match.",

            image: "images/twoDShapes/square.png",

            options: [
                "The two halves should match.",
                "Only one corner should match.",
                "The two halves should be different sizes.",
                "The shape should become a triangle."
            ],

            correctAnswer: "The two halves should match.",

            explanation:
                "A line of symmetry divides a shape into two matching halves."
        },

        {
            id: "sym-019",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has more lines of symmetry: a regular pentagon or a regular hexagon?",

            hint: "A regular pentagon has 5 lines of symmetry and a regular hexagon has 6.",

            options: [
                "The regular pentagon",
                "The regular hexagon",
                "They have the same number.",
                "Neither has a line of symmetry."
            ],

            correctAnswer: "The regular hexagon",

            explanation:
                "A regular pentagon has 5 lines of symmetry, while a regular hexagon has 6. Therefore, the regular hexagon has more."
        },

        {
            id: "sym-020",
            skillId: "symmetry",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has exactly 2 lines of symmetry?",

            hint: "Think about a rectangle that is not a square.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "A scalene triangle",
                "A rectangle that is not a square",
                "A regular pentagon",
                "A square"
            ],

            correctAnswer: "A rectangle that is not a square",

            explanation:
                "A rectangle that is not a square has exactly 2 lines of symmetry."
        },
                {
            id: "sym-021",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "A regular polygon has 6 lines of symmetry. How many sides does it have?",

            hint: "For a regular polygon, the number of lines of symmetry is the same as the number of sides.",

            image: "images/twoDShapes/hexagon.png",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "A regular polygon with 6 lines of symmetry has 6 sides, so it is a regular hexagon."
        },

        {
            id: "sym-022",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "A regular polygon has 8 sides. How many lines of symmetry does it have?",

            hint: "For a regular polygon, each side contributes to a line of symmetry.",

            image: "images/twoDShapes/octagon.png",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "8",

            explanation:
                "A regular octagon has 8 lines of symmetry."
        },

        {
            id: "sym-023",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "Which statement is true about a regular pentagon?",

            hint: "A regular pentagon has five equal sides and five lines of symmetry.",

            image: "images/twoDShapes/pentagon.png",

            options: [
                "It has 5 sides and 5 lines of symmetry.",
                "It has 5 sides and 2 lines of symmetry.",
                "It has 4 sides and 5 lines of symmetry.",
                "It has 6 sides and 6 lines of symmetry."
            ],

            correctAnswer: "It has 5 sides and 5 lines of symmetry.",

            explanation:
                "A regular pentagon has 5 sides and 5 lines of symmetry."
        },

        {
            id: "sym-024",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "Sia says, 'Every rectangle has 4 lines of symmetry.' Is she correct?",

            hint: "Think about the difference between a square and a rectangle that is not a square.",

            image: "images/twoDShapes/rectangle.png",

            options: [
                "Yes, every rectangle has 4.",
                "No, a rectangle that is not a square has 2.",
                "No, every rectangle has 1.",
                "Yes, because every rectangle has 8."
            ],

            correctAnswer: "No, a rectangle that is not a square has 2.",

            explanation:
                "A rectangle that is not a square has 2 lines of symmetry. A square has 4."
        },

        {
            id: "sym-025",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "Sia says, 'A scalene triangle has a line of symmetry.' Is she correct?",

            hint: "A scalene triangle has three sides of different lengths.",

            options: [
                "Yes, it has 1 line.",
                "Yes, it has 2 lines.",
                "No, it has no lines of symmetry.",
                "No, it has 3 lines."
            ],

            correctAnswer: "No, it has no lines of symmetry.",

            explanation:
                "A scalene triangle has no lines of symmetry because its sides and angles are all different."
        },

        {
            id: "sym-026",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "A regular hexagon has 6 lines of symmetry. A regular pentagon has 5. How many more lines of symmetry does the hexagon have?",

            hint: "Subtract the smaller number from the larger number.",

            options: [
                "1",
                "2",
                "3",
                "4"
            ],

            correctAnswer: "1",

            explanation:
                "6 − 5 = 1, so the regular hexagon has one more line of symmetry."
        },

        {
            id: "sym-027",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "Sia wants to draw a shape with exactly 4 lines of symmetry. Which shape should she choose?",

            hint: "Think of the four-sided shape with four lines of symmetry.",

            options: [
                "A square",
                "A rectangle that is not a square",
                "A scalene triangle",
                "A general pentagon"
            ],

            correctAnswer: "A square",

            explanation:
                "A square has exactly 4 lines of symmetry."
        },

        {
            id: "sym-028",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "Sia draws one half of a symmetrical shape on one side of a vertical line. What should she do on the other side?",

            hint: "The second half should be a matching reflection of the first.",

            options: [
                "Draw a matching reflected half.",
                "Draw a completely different shape.",
                "Add an extra corner.",
                "Leave the other side twice as large."
            ],

            correctAnswer: "Draw a matching reflected half.",

            explanation:
                "To complete a vertically symmetrical shape, the other side must be the matching reflection of the first half."
        },

        {
            id: "sym-029",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "Which pair of shapes both have more than 3 lines of symmetry?",

            hint: "Count the lines of symmetry for each possible shape.",

            options: [
                "Square and regular pentagon",
                "Rectangle and scalene triangle",
                "Triangle and rectangle",
                "Scalene triangle and pentagon"
            ],

            correctAnswer: "Square and regular pentagon",

            explanation:
                "A square has 4 lines of symmetry and a regular pentagon has 5. Both have more than 3."
        },

        {
            id: "sym-030",
            skillId: "symmetry",
            stage: "master",
            difficulty: 3,

            question: "Sia compares a square, a regular pentagon and a regular hexagon. Which shape has the greatest number of lines of symmetry?",

            hint: "Their numbers of lines of symmetry are 4, 5 and 6.",

            options: [
                "Square",
                "Regular pentagon",
                "Regular hexagon",
                "They all have the same number."
            ],

            correctAnswer: "Regular hexagon",

            explanation:
                "The square has 4 lines of symmetry, the regular pentagon has 5, and the regular hexagon has 6. Therefore, the regular hexagon has the greatest number."
        },
            ]
};

export default symmetry;

export {
    symmetry
};