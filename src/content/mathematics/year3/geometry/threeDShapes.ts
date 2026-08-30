import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  3D SHAPES
==================================================*/

const threeDShapes: SkillContent = {
    skillId: "three-d-shapes",

    title: "3D Shapes",

    description: "Recognise, name, compare and describe common 3D shapes and their properties.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "3ds-001",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which 3D shape has 6 square faces?",

            hint: "Think of a shape like a small building block with all its faces the same size.",

            image: "images/threeDShapes/cube.png",

            options: [
                "Cube",
                "Cone",
                "Sphere",
                "Cylinder"
            ],

            correctAnswer: "Cube",

            explanation:
                "A cube has 6 square faces, 12 edges and 8 vertices."
        },

        {
            id: "3ds-002",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which 3D shape has no flat faces?",

            hint: "Think of a shape that is completely curved.",

            image: "images/threeDShapes/sphere.png",

            options: [
                "Cube",
                "Sphere",
                "Cuboid",
                "Cylinder"
            ],

            correctAnswer: "Sphere",

            explanation:
                "A sphere has one curved surface and no flat faces."
        },

        {
            id: "3ds-003",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which 3D shape has 2 circular faces?",

            hint: "Look for a shape with a circle at the top and another at the bottom.",

            image: "images/threeDShapes/cylinder.png",

            options: [
                "Cone",
                "Sphere",
                "Cylinder",
                "Cube"
            ],

            correctAnswer: "Cylinder",

            explanation:
                "A cylinder has 2 circular flat faces and one curved surface."
        },

        {
            id: "3ds-004",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which 3D shape has one circular face and one vertex?",

            hint: "Think of a shape with a round base and a single point.",

            image: "images/threeDShapes/cone.png",

            options: [
                "Sphere",
                "Cylinder",
                "Cone",
                "Cuboid"
            ],

            correctAnswer: "Cone",

            explanation:
                "A cone has one circular flat face and one vertex where its curved surface comes to a point."
        },

        {
            id: "3ds-005",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape is like a box but does not have to have all its edges the same length?",

            hint: "Think of a rectangular box.",

            image: "images/threeDShapes/cuboid.png",

            options: [
                "Cube",
                "Cuboid",
                "Sphere",
                "Cone"
            ],

            correctAnswer: "Cuboid",

            explanation:
                "A cuboid has 6 rectangular faces. Its edges do not all have to be the same length."
        },

        {
            id: "3ds-006",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape has 5 vertices?",

            hint: "Count the points where the edges meet.",

            image: "images/threeDShapes/pyramid.png",

            options: [
                "Cube",
                "Sphere",
                "Pyramid",
                "Cylinder"
            ],

            correctAnswer: "Pyramid",

            explanation:
                "A square-based pyramid has 5 vertices: 4 around its base and 1 at the top."
        },

        {
            id: "3ds-007",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which 3D shape has 2 triangular faces?",

            hint: "Look for a solid with a triangle at each end.",

            image: "images/threeDShapes/prism.png",

            options: [
                "Cube",
                "Triangular prism",
                "Cylinder",
                "Pyramid"
            ],

            correctAnswer: "Triangular prism",

            explanation:
                "A triangular prism has 2 triangular faces and 3 rectangular faces."
        },

        {
            id: "3ds-008",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many faces does a cube have?",

            hint: "Count the flat surfaces around the cube.",

            image: "images/threeDShapes/cube.png",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "A cube has 6 square faces."
        },

        {
            id: "3ds-009",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "How many vertices does a cuboid have?",

            hint: "Vertices are the corners where edges meet.",

            image: "images/threeDShapes/cuboid.png",

            options: [
                "6",
                "8",
                "10",
                "12"
            ],

            correctAnswer: "8",

            explanation:
                "A cuboid has 8 vertices, or corners."
        },

        {
            id: "3ds-010",
            skillId: "three-d-shapes",
            stage: "recognise",
            difficulty: 1,

            question: "Which shape can roll because it has a completely curved surface?",

            hint: "Think about a ball.",

            image: "images/threeDShapes/sphere.png",

            options: [
                "Sphere",
                "Cube",
                "Pyramid",
                "Cuboid"
            ],

            correctAnswer: "Sphere",

            explanation:
                "A sphere has a completely curved surface, so it can roll in any direction."
        },
                {
            id: "3ds-011",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "A cube has 6 faces. What shape are all of its faces?",

            hint: "Think about the flat surfaces of a cube.",

            image: "images/threeDShapes/cube.png",

            options: [
                "Circles",
                "Triangles",
                "Squares",
                "Rectangles"
            ],

            correctAnswer: "Squares",

            explanation:
                "A cube has 6 faces, and every face is a square."
        },

        {
            id: "3ds-012",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which 3D shape has a curved surface and two flat circular faces?",

            hint: "Think of a shape like a tin can.",

            image: "images/threeDShapes/cylinder.png",

            options: [
                "Cone",
                "Cylinder",
                "Sphere",
                "Pyramid"
            ],

            correctAnswer: "Cylinder",

            explanation:
                "A cylinder has one curved surface and two flat circular faces."
        },

        {
            id: "3ds-013",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has one vertex at its top and a circular face at its bottom?",

            hint: "Think of a shape that comes to one point.",

            image: "images/threeDShapes/cone.png",

            options: [
                "Sphere",
                "Cylinder",
                "Cone",
                "Cube"
            ],

            correctAnswer: "Cone",

            explanation:
                "A cone has one circular flat face and one vertex at the point."
        },

        {
            id: "3ds-014",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "How many edges does a cube have?",

            hint: "Count the line segments where two faces meet.",

            image: "images/threeDShapes/cube.png",

            options: [
                "8",
                "10",
                "12",
                "14"
            ],

            correctAnswer: "12",

            explanation:
                "A cube has 12 edges. Each edge is where two square faces meet."
        },

        {
            id: "3ds-015",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has 6 rectangular faces?",

            hint: "Think of a box that has rectangular faces.",

            image: "images/threeDShapes/cuboid.png",

            options: [
                "Cuboid",
                "Sphere",
                "Cone",
                "Pyramid"
            ],

            correctAnswer: "Cuboid",

            explanation:
                "A cuboid has 6 rectangular faces."
        },

        {
            id: "3ds-016",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "A triangular prism has 5 faces. How many of those faces are triangles?",

            hint: "A prism has the same shaped face at each end.",

            image: "images/threeDShapes/prism.png",

            options: [
                "1",
                "2",
                "3",
                "5"
            ],

            correctAnswer: "2",

            explanation:
                "A triangular prism has 2 triangular faces and 3 rectangular faces."
        },

        {
            id: "3ds-017",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which 3D shape has 8 vertices and 12 edges?",

            hint: "Think about a solid with 6 square or rectangular faces.",

            options: [
                "Cube",
                "Cone",
                "Sphere",
                "Cylinder"
            ],

            correctAnswer: "Cube",

            explanation:
                "A cube has 8 vertices and 12 edges."
        },

        {
            id: "3ds-018",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has a circular face but no vertices?",

            hint: "A vertex is a corner. Think about a shape with curved sides and no corners.",

            options: [
                "Cone",
                "Cylinder",
                "Pyramid",
                "Cube"
            ],

            correctAnswer: "Cylinder",

            explanation:
                "A cylinder has two circular faces and no vertices."
        },

        {
            id: "3ds-019",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "A square-based pyramid has 5 faces. What are the shapes of its faces?",

            hint: "Think about the square base and the four faces meeting at the top.",

            image: "images/threeDShapes/pyramid.png",

            options: [
                "5 squares",
                "1 square and 4 triangles",
                "2 squares and 3 triangles",
                "5 triangles"
            ],

            correctAnswer: "1 square and 4 triangles",

            explanation:
                "A square-based pyramid has 1 square base and 4 triangular faces."
        },

        {
            id: "3ds-020",
            skillId: "three-d-shapes",
            stage: "apply",
            difficulty: 2,

            question: "Which shape has fewer faces than a cube and has one circular face?",

            hint: "A cube has 6 faces. Look for a shape with a circular flat face.",

            options: [
                "Cone",
                "Cuboid",
                "Cube",
                "Triangular prism"
            ],

            correctAnswer: "Cone",

            explanation:
                "A cone has 1 circular flat face, which is fewer than the 6 faces of a cube."
        },
                {
            id: "3ds-021",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia has a shape with 6 faces. All 6 faces are squares. What shape is it?",

            hint: "Think about a solid made from six identical square faces.",

            image: "images/threeDShapes/cube.png",

            options: [
                "Cuboid",
                "Cube",
                "Cylinder",
                "Pyramid"
            ],

            correctAnswer: "Cube",

            explanation:
                "A cube has 6 faces, and all 6 of those faces are squares."
        },

        {
            id: "3ds-022",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia sees a shape with 2 circular faces and no vertices. Which shape is it?",

            hint: "Look for the shape with two flat circles and no corners.",

            image: "images/threeDShapes/cylinder.png",

            options: [
                "Cone",
                "Sphere",
                "Cylinder",
                "Cube"
            ],

            correctAnswer: "Cylinder",

            explanation:
                "A cylinder has 2 circular faces and no vertices."
        },

        {
            id: "3ds-023",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A shape has one circular face and one vertex. Which shape matches both clues?",

            hint: "The circular face is the base, and the vertex is the single point.",

            image: "images/threeDShapes/cone.png",

            options: [
                "Sphere",
                "Cylinder",
                "Cone",
                "Cuboid"
            ],

            correctAnswer: "Cone",

            explanation:
                "A cone has one circular flat face and one vertex."
        },

        {
            id: "3ds-024",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape has 6 faces, 8 vertices and 12 edges?",

            hint: "These three numbers describe a familiar box-like solid.",

            options: [
                "Cube",
                "Cone",
                "Sphere",
                "Cylinder"
            ],

            correctAnswer: "Cube",

            explanation:
                "A cube has 6 faces, 8 vertices and 12 edges."
        },

        {
            id: "3ds-025",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A solid has 5 faces: 2 triangles and 3 rectangles. What is it?",

            hint: "A prism has matching faces at its two ends.",

            image: "images/threeDShapes/prism.png",

            options: [
                "Square pyramid",
                "Triangular prism",
                "Cube",
                "Cylinder"
            ],

            correctAnswer: "Triangular prism",

            explanation:
                "A triangular prism has 2 triangular faces and 3 rectangular faces."
        },

        {
            id: "3ds-026",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape has 5 faces, including 4 triangular faces and 1 square face?",

            hint: "Think of a solid with a square base and a point above it.",

            image: "images/threeDShapes/pyramid.png",

            options: [
                "Cube",
                "Triangular prism",
                "Square pyramid",
                "Cuboid"
            ],

            correctAnswer: "Square pyramid",

            explanation:
                "A square-based pyramid has 1 square base and 4 triangular faces."
        },

        {
            id: "3ds-027",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia sorts shapes into two groups. Group A has shapes with a curved surface. Which shape belongs in Group A?",

            hint: "Look for a shape that has a curved surface rather than only flat faces.",

            options: [
                "Cube",
                "Cuboid",
                "Sphere",
                "Pyramid"
            ],

            correctAnswer: "Sphere",

            explanation:
                "A sphere has a completely curved surface. The cube, cuboid and pyramid have flat faces."
        },

        {
            id: "3ds-028",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "A shape has 8 vertices. Which shape could it be?",

            hint: "Think about which familiar solid has 8 corners.",

            options: [
                "Cone",
                "Cylinder",
                "Cube",
                "Sphere"
            ],

            correctAnswer: "Cube",

            explanation:
                "A cube has 8 vertices. A cone has 1, while a cylinder and sphere have none."
        },

        {
            id: "3ds-029",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Which shape has both flat faces and a curved surface?",

            hint: "Look for a shape that has circular flat ends and a curved side.",

            options: [
                "Sphere",
                "Cylinder",
                "Cube",
                "Pyramid"
            ],

            correctAnswer: "Cylinder",

            explanation:
                "A cylinder has 2 flat circular faces and 1 curved surface."
        },

                {
            id: "3ds-030",
            skillId: "three-d-shapes",
            stage: "master",
            difficulty: 3,

            question: "Sia finds a solid with 5 faces. It has 2 triangular faces and 3 rectangular faces. Which solid is it?",

            hint: "Think about a prism whose ends are triangles.",

            image: "images/threeDShapes/prism.png",

            options: [
                "Cube",
                "Square pyramid",
                "Triangular prism",
                "Cylinder"
            ],

            correctAnswer: "Triangular prism",

            explanation:
                "A triangular prism has 5 faces: 2 triangular faces and 3 rectangular faces."
        },
            ]
};

export default threeDShapes;

export {
    threeDShapes
};