import type { NvrQuestion } from "../../nvrTypes";

const questions: NvrQuestion[] = [

{
    id: "nvr-sc-001",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Ignore the colours. Check the shape of each figure in the top row.",
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
    explanation: "The top row contains three circles. The first answer is also a circle, so it matches the shape rule. The other choices are a square, triangle and star, so they do not belong.",
    tags: ["year3","shape-classification","shape"]
},

{
    id: "nvr-sc-002",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Ignore the shapes. Check the colour of every figure in the top row.",
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
    explanation: "Every figure in the top row is red. The first answer is also red, so it follows the colour rule. The other three diamonds are blue, green and yellow, so they do not match.",
    tags: ["year3","shape-classification","colour"]
},

{
    id: "nvr-sc-003",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Check whether the shapes are filled in or just outlined.",
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
    explanation: "All three shapes in the top row are outlined rather than filled. The first answer is an outlined star, so it follows the same rule. The other three choices are solid, so they do not belong.",
    tags: ["year3","shape-classification","fill"]
},

{
    id: "nvr-sc-004",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Compare the sizes of the three shapes in the top row.",
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
    explanation: "All three shapes in the top row are small. The first answer is a small star, so it matches the size rule. The other choices are large, so they do not belong.",
    tags: ["year3","shape-classification","size"]
},

{
    id: "nvr-sc-005",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Check which way each shape points. The top row points in the same direction.",
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
    explanation: "The shapes in the top row all point upwards. The first answer also points upwards, so it follows the direction rule. The other choices point right, down or left.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-006",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Ignore the colours and look only at the type of shape.",
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
    explanation: "The three figures in the top row are all stars. The first answer is also a star, so it matches the shape rule. The other choices are a circle, triangle and square.",
    tags: ["year3","shape-classification","shape"]
},

{
    id: "nvr-sc-007",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Ignore the different shapes. Look for the colour that all three top figures share.",
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
    explanation: "All three figures in the top row are purple. The first answer is a purple square, so it matches the colour rule. The other squares are red, blue and green.",
    tags: ["year3","shape-classification","colour"]
},

{
    id: "nvr-sc-008",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Check whether each shape is solid or outlined.",
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
    explanation: "Every figure in the top row is solid, with its inside filled in. The first answer is also solid, so it matches. The other three choices are outlined.",
    tags: ["year3","shape-classification","fill"]
},

{
    id: "nvr-sc-009",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Compare the sizes, not the different shapes or colours.",
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
    explanation: "All three top figures are large. The first answer is a large star, so it follows the size rule. The other three choices are small.",
    tags: ["year3","shape-classification","size"]
},

{
    id: "nvr-sc-010",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look at the direction of the shapes. All three top figures point the same way.",
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
    explanation: "The top row figures all point to the right. The first answer also points to the right, so it belongs. The other choices point in different directions.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-011",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Look only at the shape names. What shape appears three times in the top row?",
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
    explanation: "Every figure in the top row is a triangle. The first answer is also a triangle, so it follows the same rule. The other choices are a circle, square and star.",
    tags: ["year3","shape-classification","shape"]
},

{
    id: "nvr-sc-012",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Ignore the shapes. Find the colour that all three top figures have.",
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
    explanation: "The three top figures are all green. The first answer is a green diamond, so it matches the colour rule. The other diamonds are red, blue and yellow.",
    tags: ["year3","shape-classification","colour"]
},

{
    id: "nvr-sc-013",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Check whether the inside of each top-row shape is filled or empty.",
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
    explanation: "The top row contains only outlined shapes. The first answer is an outlined diamond, so it follows the same fill rule. The other three choices are solid.",
    tags: ["year3","shape-classification","fill"]
},

{
    id: "nvr-sc-014",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Compare the sizes of the three top-row figures.",
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
    explanation: "Every figure in the top row is large. The first answer is a large star, so it matches the size rule. The remaining choices are small.",
    tags: ["year3","shape-classification","size"]
},

{
    id: "nvr-sc-015",
    skillId: "shape-classification",
    stage: "recognise",
    difficulty: 1,
    question: "Which shape belongs with the top row?",
    hint: "Check which way the three top-row figures point.",
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
    explanation: "All three figures in the top row point downwards. The first answer also points downwards, so it follows the direction rule. The other choices point right, up or left.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-016",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Two things stay the same in every top-row figure: its shape and its fill.",
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
    explanation: "The top row always has a circle that is outlined. The first answer is an outlined circle, so it matches both rules. The second is solid, while the third and fourth are different shapes.",
    tags: ["year3","shape-classification","shape","fill"]
},

{
    id: "nvr-sc-017",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look for the two properties that never change: shape and size.",
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
    explanation: "Every top-row figure is a small triangle. The first answer is also a small triangle, so it matches both properties. The second is large, and the last two are different shapes.",
    tags: ["year3","shape-classification","shape","size"]
},

{
    id: "nvr-sc-018",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Compare the top-row figures one property at a time: shape, colour and fill.",
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
    explanation: "The top row shows a solid red square every time. The first answer is also a solid red square, so it matches shape, colour and fill. The other choices each change one of those properties.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-019",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Find the properties shared by every top-row figure. Check shape, fill and size.",
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
    explanation: "Every top-row figure is a large outlined star. The first answer is also a large outlined star, so it matches all three properties. The second is solid, the third is a circle and the fourth is small.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-020",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Check the shape, fill and direction together. Do not rely on just one property.",
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
    explanation: "The top row contains solid arrows pointing right. The first answer is a solid arrow pointing right, so it matches both the shape, fill and direction. The other choices fail one of these rules.",
    tags: ["year3","shape-classification","rotation"]
},
{
    id: "nvr-sc-021",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look for the two properties shared by every top-row figure: shape and fill.",
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
    explanation: "The top row contains outlined circles. The first answer is also an outlined circle, so it matches both rules. The second is solid, while the last two are different shapes.",
    tags: ["year3","shape-classification","shape","fill"]
},

{
    id: "nvr-sc-022",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Look for the two properties shared by every top-row figure: shape and size.",
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
    explanation: "Every top-row figure is a large square. The first answer is also a large square, so it matches both properties. The second is small, while the last two are different shapes.",
    tags: ["year3","shape-classification","shape","size"]
},

{
    id: "nvr-sc-023",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Check both the shape and the direction it points.",
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
    explanation: "The top row contains triangles pointing left. The first answer is also a left-pointing triangle, so it matches both rules. The second points in a different direction, and the last two are different shapes.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-024",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Find the two properties that stay the same: fill and size.",
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
    explanation: "Every top-row figure is outlined and small. The first answer is also outlined and small, so it matches both properties. Each other choice changes either the fill or the size.",
    tags: ["year3","shape-classification","fill","size"]
},

{
    id: "nvr-sc-025",
    skillId: "shape-classification",
    stage: "understand",
    difficulty: 2,
    question: "Which shape belongs with the top row?",
    hint: "Check the shape and fill of every figure in the top row.",
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
    explanation: "The top row contains solid hearts. The first answer is a solid heart, so it matches both the shape and fill. The second is outlined, while the last two are different shapes.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-026",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Find the properties shared by all three top figures. Check shape, fill and size.",
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
    explanation: "The rule is a large outlined circle. The first answer matches all three properties. The second is solid, the third is small and the fourth is a square.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-027",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check all four properties: shape, colour, fill and direction.",
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
    explanation: "The top row shows solid triangles pointing right. The first answer has the same shape, fill and direction. The colour is different, but colour changes across the top row, so it is not part of the rule.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-028",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Find the properties that all three top figures share, then test each answer.",
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
    explanation: "The top row contains small solid stars. The first answer is a small solid star, so it matches the complete rule. The second is large, the third is outlined and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-029",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check shape, fill and direction. Colour changes, so do not use it as the rule.",
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
    explanation: "The rule is an outlined arrow pointing upwards. The first answer matches the shape, fill and direction. The second is solid, the third points right and the fourth is a triangle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-030",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare shape, fill and size. Ignore colour because it changes in the top row.",
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
    explanation: "Every top-row figure is a medium solid diamond. The first answer matches the shape, fill and size. The second is large, the third is outlined and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-031",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at what both shapes have in common. The pair must contain the same two shapes.",
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
    explanation: "Every top-row figure contains exactly the same pair: a circle and a square. The first answer contains both shapes, so it matches the rule. The other choices are missing one or both shapes.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-032",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at both shapes in each pair. The same two shapes must appear together.",
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
    explanation: "Every top-row pair contains a triangle and a star. The first answer contains both, so it matches the pair rule. The other choices replace one of those shapes with a circle or square.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-033",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Count the shapes in each top-row figure. What number do you get every time?",
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
    explanation: "Every top-row figure contains two circles. The first answer also contains two circles, so it matches the number and type of shapes. The other choices contain only one shape.",
    tags: ["year3","shape-classification","counting"]
},

{
    id: "nvr-sc-034",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check all three properties: shape, fill and size.",
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
    explanation: "The top row contains small outlined squares. The first answer matches all three properties. The second is solid, the third is large and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-035",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check the shape, fill and direction. All three properties matter.",
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
    explanation: "The top row contains solid arrows pointing left. The first answer is a solid left-pointing arrow, so it matches the complete rule. The second points right, the third is a triangle and the fourth is outlined.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-036",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at the pair of shapes. Both shapes must be the same as the pair above.",
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
    explanation: "Every top-row pair contains a circle and a triangle. The first answer contains the same two shapes, so it belongs. The other choices contain a square or are missing one of the two shapes.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-037",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Two properties stay the same: the shape and whether it is filled.",
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
    explanation: "Every top-row figure is an outlined heart. The first answer is also an outlined heart, so it matches both rules. The second is solid, and the last two are different shapes.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-038",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check the shape, fill and direction of each top-row figure.",
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
    explanation: "The top row contains outlined triangles pointing right. The first answer matches all three properties. The second points down, the third is solid and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-039",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare shape, fill and size. The colour changes, so it is not part of the rule.",
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
    explanation: "Every top-row figure is a large solid diamond. The first answer matches the shape, fill and size. The second is outlined, the third is small and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-040",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Find everything that stays the same: shape, fill and size.",
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
    explanation: "The top row contains medium solid stars. The first answer is also a medium solid star, so it matches the complete rule. The second is large, the third is outlined and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},
{
    id: "nvr-sc-041",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at the pair in each top-row figure. Which two shapes are always together?",
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
    explanation: "Every top-row figure contains a circle and a star together. The first answer contains both a circle and a star, so it follows the same pair rule. The second has a square instead of a star, the third has a triangle instead of a circle, and the fourth has only one shape.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-042",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare the shape, fill and size of every top-row figure.",
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
    explanation: "The top row contains large outlined squares. The first answer is also a large outlined square, so it matches all three properties. The second is solid, the third is small and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-043",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at the direction of the arrows. Also check whether they are solid or outlined.",
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
    explanation: "The top row contains solid arrows pointing downwards. The first answer is a solid arrow pointing downwards, so it matches both parts of the rule. The second points a different way, the third is a triangle and the fourth is outlined.",
    tags: ["year3","shape-classification","rotation"]
},

{
    id: "nvr-sc-044",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare the two shapes in each top-row pair. The same pair must appear together.",
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
    explanation: "Every top-row pair contains a diamond and a heart. The first answer contains exactly those two shapes, so it matches the pair rule. The other choices contain a circle or are missing one of the required shapes.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-045",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check the shape, fill and size. Ignore colour because it changes in the top row.",
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
    explanation: "Every top-row figure is a small solid circle. The first answer matches the shape, fill and size, so it belongs. The second is outlined, the third is large and the fourth is a square.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-046",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at both shapes in each pair. Which two shapes always appear together?",
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
    explanation: "Every top-row pair contains a triangle and a circle. The first answer contains both of those shapes, so it matches the rule. The second and third replace one shape with a square, and the fourth is missing the circle.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-047",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check the star's shape, fill and direction. These properties stay the same.",
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
    explanation: "The top row contains outlined stars with the same rotation. The first answer is also an outlined star with that rotation, so it matches the complete rule. The second is solid, the third is rotated differently and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-048",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Compare the shape, fill and size. Colour is the property that changes.",
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
    explanation: "Every top-row figure is a medium solid hexagon. The first answer matches all three properties. The second is outlined, the third is large and the fourth is a circle.",
    tags: ["year3","shape-classification"]
},

{
    id: "nvr-sc-049",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Look at both shapes in each pair. The same two shapes must appear together.",
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
    explanation: "Every top-row pair contains a square and a star. The first answer contains both shapes, so it follows the same pair rule. The second has a circle instead of a star, the third has a triangle instead of a square, and the fourth has only one shape.",
    tags: ["year3","shape-classification","multiple-shapes"]
},

{
    id: "nvr-sc-050",
    skillId: "shape-classification",
    stage: "master",
    difficulty: 3,
    question: "Which shape belongs with the top row?",
    hint: "Check all three rules: shape, fill and direction.",
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
    explanation: "The top row contains outlined diamonds with the same rotation. The first answer is an outlined diamond with that same rotation, so it matches all three rules. The second is solid, the third is rotated differently and the fourth is a circle.",
    tags: ["year3","shape-classification"]
}

];

export default questions;