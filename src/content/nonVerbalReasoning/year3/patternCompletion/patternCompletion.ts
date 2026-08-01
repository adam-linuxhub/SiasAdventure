/*==================================================
  SIA'S ADVENTURE
  YEAR 3
  NON-VERBAL REASONING

  PATTERN COMPLETION

==================================================*/

import type { NvrQuestion } from "../../nvrTypes";

const questions: NvrQuestion[] = [

{
    id: "nvr-pc-001",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Look at the shapes.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pattern is circle, square, triangle, star.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-002",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Look at the colours.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colours repeat red, green, blue, yellow.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-003",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Look at the fill.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates solid and outline.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-004",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Look at the size.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The sizes alternate small and large.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-005",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Look at the direction.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 180 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The arrow rotates 90° each time.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-006",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Follow the repeating shapes.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "orange", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pattern alternates star and heart.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-007",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Watch the colours.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colours alternate purple and yellow.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-008",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Look at the fill pattern.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "outline" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates outline and solid.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-009",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Look at the sizes.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The sizes alternate large and small.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-010",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Watch the arrow turn.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 270 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The arrow rotates another 90°.",
    tags: ["year3","pattern-completion","rotation"]
},
{
    id: "nvr-pc-011",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The shapes repeat in groups of three.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The three-shape pattern starts again with a circle.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-012",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Watch the colours carefully.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colours repeat red, green, blue, yellow.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-013",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The fill alternates.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "outline" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pattern alternates outline and solid.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-014",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Look at the sizes.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The size pattern repeats from small again.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-015",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Watch the rotation.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 180 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The triangle rotates another 90°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-016",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Two shapes repeat.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "pink", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pattern alternates heart and circle.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-017",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Look at the colour order.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "green", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "hexagon", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The next colour is red.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-018",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Solid then outline.",
    figures: [
        [
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-019",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Small, medium, large.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The size sequence repeats.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-020",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The arrow keeps turning.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 90 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "purple", fill: "solid", rotation: 90 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The arrow rotates another 90° clockwise.",
    tags: ["year3","pattern-completion","rotation"]
},
{
    id: "nvr-pc-021",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The shapes repeat in pairs.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pattern is circle, circle, square, square.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-022",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Watch both the colour and fill.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Both the colour and fill alternate.",
    tags: ["year3","pattern-completion","colour","fill"]
},

{
    id: "nvr-pc-023",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The size repeats.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The size sequence repeats from small.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-024",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The arrow keeps turning.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The arrow rotates 90° each step.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-025",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Two things are changing.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "outline" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates between solid and outline.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-026",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The shapes repeat.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pattern alternates hexagon and circle.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-027",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The colours repeat.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colours alternate yellow and green.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-028",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Follow the sizes.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "grey", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "grey", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "square", colour: "grey", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "grey", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "grey", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The sizes repeat large, medium, small.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-029",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Watch the rotation.",
    figures: [
        [
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 90 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 135 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 0 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The line rotates another 45°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-030",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at everything together.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "outline", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "outline", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "outline", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The whole pattern repeats every two figures.",
    tags: ["year3","pattern-completion","mixed"]
},
{
    id: "nvr-pc-031",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at both the shape and the colour.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pattern continues with a yellow star.",
    tags: ["year3","pattern-completion","shape","colour"]
},

{
    id: "nvr-pc-032",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Follow the fill pattern.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "pink", fill: "outline" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "pink", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "pink", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates solid and outline.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-033",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Watch the arrow rotate.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 135 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 180 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The arrow rotates another 45 degrees.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-034",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at the sizes.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The size sequence repeats from small.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-035",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The colours repeat.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colours follow a four-colour cycle.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-036",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at both shapes.",
    figures: [
        [
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "square", colour: "red", fill: "solid" }
            ]},
            { shapes: [
                { shape: "triangle", colour: "red", fill: "solid" },
                { shape: "star", colour: "red", fill: "solid" }
            ]},
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "square", colour: "red", fill: "solid" }
            ]},
            { shapes: [] }
        ],
        [
            { shapes: [
                { shape: "triangle", colour: "red", fill: "solid" },
                { shape: "star", colour: "red", fill: "solid" }
            ]},
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pair repeats.",
    tags: ["year3","pattern-completion","multiple-shapes"]
},

{
    id: "nvr-pc-037",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Everything alternates.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-038",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Watch the direction.",
    figures: [
        [
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid", rotation: 180 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The triangle alternates between up and down.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-039",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at every property.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "hexagon", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "hexagon", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "hexagon", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "hexagon", colour: "green", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "outline", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "Only the fill changes in the sequence.",
    tags: ["year3","pattern-completion","mixed"]
},

{
    id: "nvr-pc-040",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The whole pattern repeats.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The two-figure pattern repeats.",
    tags: ["year3","pattern-completion","mixed"]
},
{
    id: "nvr-pc-041",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The colours repeat.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The four colours repeat in order.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-042",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Watch the fill.",
    figures: [
        [
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "square", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "purple", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates between solid and outline.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-043",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at the sizes.",
    figures: [
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "large" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "solid", size: "small" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The size sequence repeats from the beginning.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-044",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The arrow keeps turning.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "orange", fill: "solid", rotation: 270 }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid", rotation: 270 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The arrow rotates another 90°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-045",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Two shapes repeat.",
    figures: [
        [
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "triangle", colour: "red", fill: "solid" }
            ]},
            { shapes: [
                { shape: "square", colour: "red", fill: "solid" },
                { shape: "star", colour: "red", fill: "solid" }
            ]},
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "triangle", colour: "red", fill: "solid" }
            ]},
            { shapes: [] }
        ],
        [
            { shapes: [
                { shape: "square", colour: "red", fill: "solid" },
                { shape: "star", colour: "red", fill: "solid" }
            ]},
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The pair repeats.",
    tags: ["year3","pattern-completion","multiple-shapes"]
},

{
    id: "nvr-pc-046",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Watch the colour sequence.",
    figures: [
        [
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "yellow", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The colour sequence continues with red.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-047",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The fill repeats.",
    figures: [
        [
            { shapes: [{ shape: "hexagon", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "hexagon", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "grey", fill: "outline" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "hexagon", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "grey", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The fill alternates outline and solid.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-048",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at the sizes.",
    figures: [
        [
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid", size: "small" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "heart", colour: "pink", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "circle", colour: "pink", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "pink", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "pink", fill: "solid", size: "large" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The size pattern starts again with large.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-049",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Watch the arrow.",
    figures: [
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 270 }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "outline", rotation: 0 }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The arrow completes another 90° turn.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-050",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Everything repeats.",
    figures: [
        [
            { shapes: [{ shape: "circle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid" }] },
            { shapes: [] }
        ],
        [
            { shapes: [{ shape: "star", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "yellow", fill: "solid" }] }
        ]
    ],
    answer: { row: 1, column: 0 },
    explanation: "The sequence continues with the next shape in the pattern.",
    tags: ["year3","pattern-completion","mixed"]
}

];

export default questions;