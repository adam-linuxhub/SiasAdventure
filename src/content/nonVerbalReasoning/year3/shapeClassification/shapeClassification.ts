import type { NvrQuestion } from "../../nvrTypes";

const questions: NvrQuestion[] = [

{
    id: "nvr-sc-001",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the shape.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "All the shapes in the top row are circles.",
    tags: ["year3","shape-classification","shape"]
},

{
    id: "nvr-sc-002",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the colour.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every shape in the top row is red.",
    tags: ["year3","shape-classification","colour"]
},

{
    id: "nvr-sc-003",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the fill.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "outline" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every shape in the top row is outlined.",
    tags: ["year3","shape-classification","fill"]
},

{
    id: "nvr-sc-004",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the size.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every shape in the top row is small.",
    tags: ["year3","shape-classification","size"]
},

{
    id: "nvr-sc-005",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the direction.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 0 }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every shape in the top row points upwards.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-006",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look carefully at the shape.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "orange", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The top row only contains stars.",
    tags: ["year3","shape-classification","shape"]
},

{
    id: "nvr-sc-007",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the colour.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every shape in the top row is purple.",
    tags: ["year3","shape-classification","colour"]
},

{
    id: "nvr-sc-008",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the fill.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every shape in the top row is solid.",
    tags: ["year3","shape-classification","fill"]
},

{
    id: "nvr-sc-009",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the size.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid", size: "large" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every shape in the top row is large.",
    tags: ["year3","shape-classification","size"]
},

{
    id: "nvr-sc-010",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the direction.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 0 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every figure in the top row points to the right.",
    tags: ["year3","shape-classification","rotation"]
},
{
    id: "nvr-sc-011",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the shape.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "All the figures in the top row are triangles.",
    tags: ["year3","shape-classification","shape"]
},

{
    id: "nvr-sc-012",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the colour.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "All the figures in the top row are green.",
    tags: ["year3","shape-classification","colour"]
},

{
    id: "nvr-sc-013",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the fill.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline" }] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every figure in the top row is outlined.",
    tags: ["year3","shape-classification","fill"]
},

{
    id: "nvr-sc-014",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the size.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "large" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every figure in the top row is large.",
    tags: ["year3","shape-classification","size"]
},

{
    id: "nvr-sc-015",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the direction.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 180 }] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "All the figures in the top row point downwards.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-016",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look for two matching properties.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "outline" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The rule is 'outlined circles'.",
    tags: ["year3","shape-classification","shape","fill"]
},

{
    id: "nvr-sc-017",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look for two matching properties.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "small" }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The rule is 'small triangles'.",
    tags: ["year3","shape-classification","shape","size"]
},

{
    id: "nvr-sc-018",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look carefully at every property.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches every property.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-019",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Find the matching rule.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "orange", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "star", colour: "blue", fill: "outline", size: "large" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "purple", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "outline", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure follows every rule.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-020",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look at everything, not just one property.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 90 }] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "outline", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The rule is 'solid arrows pointing right'.",
    tags: ["year3","shape-classification","rotation"]
},
{
    id: "nvr-sc-021",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look for two matching rules.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure is an outlined circle.",
    tags: ["year3","shape-classification","shape","fill"]
},

{
    id: "nvr-sc-022",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look at shape and size.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid", size: "large" }] }
        ],
        [
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure is a large square.",
    tags: ["year3","shape-classification","shape","size"]
},

{
    id: "nvr-sc-023",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look at the rotation.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 270 }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure points left like the others.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-024",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look for the same fill and size.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "outline", size: "small" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure is outlined and small.",
    tags: ["year3","shape-classification","fill","size"]
},

{
    id: "nvr-sc-025",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look at every property.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "green", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure is a solid heart.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-026",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Two properties must match.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "outline", size: "large" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches every property.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-027",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare all four properties.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 90 }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches the complete rule.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-028",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look for the matching combination.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "orange", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "blue", fill: "solid", size: "small" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "purple", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure satisfies every rule.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-029",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Everything matters.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "red", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 0 }] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "outline", rotation: 0 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches every feature.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-030",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare every property carefully.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid", size: "medium" }] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "outline", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "medium" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches the rule exactly.",
    tags: ["year3","shape-classification"]
},
{
    id: "nvr-sc-031",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look for the figure with two shapes.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }, { shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }, { shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }, { shape: "square", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every figure in the top row contains both a circle and a square.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-032",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare both shapes.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }, { shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }, { shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }, { shape: "star", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }, { shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }, { shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }, { shape: "star", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure contains both a triangle and a star.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-033",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at the number of shapes.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }, { shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }, { shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }, { shape: "circle", colour: "blue", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every figure in the top row contains two circles.",
    tags: ["year3","shape-classification","counting"]
},

{
    id: "nvr-sc-034",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Watch the size and fill.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "outline", size: "small" }] }
        ],
        [
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches every property.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-035",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare every detail.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 270 }] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "outline", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one arrow points left and is solid.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-036",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look for the matching pair.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }, { shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }, { shape: "triangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }, { shape: "triangle", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "triangle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }, { shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure contains both a circle and a triangle.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-037",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Two properties matter.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "blue", fill: "outline" }] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure is an outlined heart.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-038",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at the direction.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "outline", rotation: 90 }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "outline", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure points right and is outlined.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-039",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare every property.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid", size: "large" }] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches every property.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-040",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at all the rules together.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid", size: "medium" }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "medium" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure satisfies every rule.",
    tags: ["year3","shape-classification"]
},
{
    id: "nvr-sc-041",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look for the matching pair of shapes.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }, { shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }, { shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }, { shape: "star", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }, { shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure contains both a circle and a star.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-042",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare every property.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "red", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "outline", size: "large" }] }
        ],
        [
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches every property.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-043",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at the direction.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 180 }] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "yellow", fill: "outline", rotation: 180 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one arrow points down and is solid.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-044",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look for the matching pair.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }, { shape: "heart", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }, { shape: "heart", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }, { shape: "heart", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }, { shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }, { shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }, { shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure contains both a diamond and a heart.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-045",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare every feature.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", size: "small" }] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure follows every rule.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-046",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look carefully at both shapes.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }, { shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }, { shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }, { shape: "circle", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }, { shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }, { shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }, { shape: "square", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure contains both a triangle and a circle.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-047",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look for the matching combination.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "red", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "star", colour: "green", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "star", colour: "blue", fill: "outline", rotation: 90 }] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline", rotation: 180 }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches every property.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-048",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Everything matters.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "hexagon", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "hexagon", colour: "red", fill: "solid", size: "medium" }] }
        ],
        [
            { shapes: [{ shape: "hexagon", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "hexagon", colour: "yellow", fill: "outline", size: "medium" }] },
            { shapes: [{ shape: "hexagon", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "medium" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure satisfies the complete rule.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-049",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Find the figure with the same pair.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }, { shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }, { shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }, { shape: "star", colour: "red", fill: "solid" }] }
        ],
        [
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }, { shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }, { shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }, { shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure contains both a square and a star.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-050",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare every property before deciding.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "outline", rotation: 270 }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "outline", rotation: 270 }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "outline", rotation: 270 }] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "outline", rotation: 270 }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "outline", rotation: 180 }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "outline", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only one figure matches the complete rule.",
    tags: ["year3","shape-classification"]
}

];

export default questions;