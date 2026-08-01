import type { NvrQuestion } from "../../nvrTypes";

const questions: NvrQuestion[] = [

{
    id: "nvr-sa-001",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The first shape changes into the second shape. Apply the same change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Circle changes into square. Triangle changes into diamond.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-002",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Find the same change.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Triangle becomes star. Circle becomes square.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-003",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Look at the fill.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill changes from solid to outline.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-004",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Watch the colour.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Blue changes to red.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-005",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Watch the size.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Small changes to large.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-006",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Watch the rotation.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The shape rotates 90° clockwise.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-007",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Apply the same rule.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Diamond changes into heart. Square changes into circle.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-008",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Look at the change.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "grey", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "grey", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Hexagon changes into circle. Star changes into square.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-009",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Look at the first pair.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "pink", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Circle changes into triangle. Square changes into circle.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-010",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Apply the same transformation.",
    figures: [
        [
            { shapes: [{ shape: "rectangle", colour: "brown", fill: "solid" }] },
            { shapes: [{ shape: "oval", colour: "brown", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "brown", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "brown", fill: "solid" }] },
            { shapes: [{ shape: "oval", colour: "brown", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "brown", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "brown", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Rectangle changes into oval. Diamond changes into triangle.",
    tags: ["year3","shape-analogies"]
},
{
    id: "nvr-sa-011",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The shape changes but the colour stays the same.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Circle becomes star. Square becomes diamond.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-012",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Watch the fill.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "star", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill changes from solid to outline.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-013",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Look at the colours.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colour changes from red to yellow.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-014",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Look at the size.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "pink", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "pink", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "pink", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "pink", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "pink", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Small becomes large.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-015",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Watch the direction.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Each shape rotates 90° clockwise.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-016",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The same change happens twice.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Circle becomes triangle. Square becomes star.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-017",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the fill change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "grey", fill: "outline" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Outline becomes solid.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-018",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the colour change.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "green", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Green becomes blue.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-019",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the size change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "brown", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "brown", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "brown", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "brown", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "brown", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "brown", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "brown", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Large becomes small.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-020",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the rotation.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Each shape rotates 90° clockwise.",
    tags: ["year3","shape-analogies","rotation"]
},
{
    id: "nvr-sa-021",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Look at how the shape changes.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Star becomes heart. Circle becomes triangle.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-022",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the fill pattern.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Solid becomes outline.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-023",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the colour change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Orange changes to purple.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-024",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the size.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "hexagon", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Small becomes large.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-025",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Watch the rotation.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "grey", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "grey", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid", rotation: 270 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "grey", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Each shape rotates 90° clockwise.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-026",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Both the shape and the colour change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Circle changes to a red square. Triangle changes to a red diamond.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-027",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Both the fill and the size change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Solid small becomes outline large.",
    tags: ["year3","shape-analogies","fill","size"]
},

{
    id: "nvr-sa-028",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Shape and rotation both change.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Arrow becomes a triangle rotated 90° further.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-029",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Look at every property.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "outline" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Outline stars become solid hearts. Outline diamonds become solid triangles.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-030",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Apply exactly the same transformation.",
    figures: [
        [
            { shapes: [{ shape: "rectangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "oval", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "oval", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Rectangle becomes an outlined oval. Square becomes an outlined triangle.",
    tags: ["year3","shape-analogies","fill"]
},
{
    id: "nvr-sa-031",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The colour and fill both change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Blue solid becomes red outline.",
    tags: ["year3","shape-analogies","colour","fill"]
},

{
    id: "nvr-sa-032",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape rotates and changes.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Arrow becomes a triangle rotated a further 90°.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-033",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Watch the size and fill.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Outline small becomes solid large.",
    tags: ["year3","shape-analogies","size","fill"]
},

{
    id: "nvr-sa-034",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Look at the colour and size.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Red small becomes blue large.",
    tags: ["year3","shape-analogies","colour","size"]
},

{
    id: "nvr-sa-035",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape changes but the rotation stays.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid", rotation: 180 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Triangle becomes diamond. Arrow becomes circle.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-036",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Everything stays except the fill.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "orange", fill: "outline" }] },
            { shapes: [{ shape: "hexagon", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "outline" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Outline becomes solid.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-037",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Look at the shape and colour.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "green", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Green star becomes yellow circle. Green heart becomes yellow diamond.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-038",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Watch every property carefully.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "square", colour: "grey", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid", rotation: 0 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "grey", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "square", colour: "grey", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "star", colour: "grey", fill: "outline", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Every property changes in the same way.",
    tags: ["year3","shape-analogies","rotation","fill"]
},

{
    id: "nvr-sa-039",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Apply the same rule.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Diamond becomes a red outlined heart. Square becomes a red outlined circle.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-040",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Everything changes in the same way.",
    figures: [
        [
            { shapes: [{ shape: "rectangle", colour: "brown", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "oval", colour: "brown", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "brown", fill: "outline", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "brown", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "oval", colour: "brown", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "brown", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "brown", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Outlined small becomes solid large while the shape also changes.",
    tags: ["year3","shape-analogies","size","fill"]
},
{
    id: "nvr-sa-041",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Watch the colour and rotation.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colour changes to red and the shape rotates 90°.",
    tags: ["year3","shape-analogies","colour","rotation"]
},

{
    id: "nvr-sa-042",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Watch the fill and size.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Outline large becomes solid small.",
    tags: ["year3","shape-analogies","fill","size"]
},

{
    id: "nvr-sa-043",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Apply exactly the same change.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "orange", fill: "outline" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "orange", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Purple solid becomes orange outline while the shape changes.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-044",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Watch the rotation.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "red", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Each figure rotates another 90° clockwise.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-045",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Look at every property.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "blue", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "outline", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline", size: "small" }] },
            { shapes: [{ shape: "heart", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Every property changes in the same way.",
    tags: ["year3","shape-analogies","size","colour","fill"]
},

{
    id: "nvr-sa-046",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Focus on the shape transformation.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "pink", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "pink", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Heart becomes star. Triangle becomes square.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-047",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Look at the colour swap.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Yellow changes to purple.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-048",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Watch the fill.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "grey", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Solid becomes outline.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-049",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Watch the size change.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", size: "medium" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "square", colour: "orange", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "orange", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Medium becomes large.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-050",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Apply the same transformation one last time.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "outline", rotation: 0 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "solid", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 2 },
    explanation: "Every property changes in exactly the same way as the first pair.",
    tags: ["year3","shape-analogies","rotation","colour","fill"]
}

];

export default questions;