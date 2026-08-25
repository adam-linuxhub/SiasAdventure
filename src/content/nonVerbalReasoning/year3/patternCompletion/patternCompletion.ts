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
    hint: "Look at the shapes from left to right. What shape comes after triangle?",
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
    explanation: "Read the first row from left to right: circle, square, triangle, then a missing shape. The second row shows that the sequence is circle, square, triangle, star. So the missing figure must be the blue solid star.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-002",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Ignore the shape because it stays the same. Follow the colours from left to right.",
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
    explanation: "The circle and its solid fill stay the same, but the colour changes in a repeating order: red, green, blue, yellow. After red, green and blue, the missing colour is yellow. So the answer is the solid yellow circle.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-003",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "The shape and colour stay the same. Look carefully at whether the inside is filled or empty.",
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
    explanation: "The square stays red throughout. Only the fill changes, alternating solid, outline, solid, outline. The first three figures are solid, outline, solid, so the missing fourth figure must be an outline red square.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-004",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Compare the size of each triangle. Is the size getting bigger, smaller, or alternating?",
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
    explanation: "The triangle stays green and solid, while its size alternates small, large, small, large. The first three sizes are small, large, small, so the missing fourth figure must be the large green triangle.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-005",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Follow the arrow one turn at a time. How many degrees does it rotate each time?",
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
    explanation: "The blue solid arrow turns 90° each time: 0°, 90°, 180°, then 270°. Therefore the missing fourth figure is the arrow rotated to 270°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-006",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "The two shapes take turns. Which shape appears first, and which appears second?",
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
    explanation: "The pattern alternates between star and heart: star, heart, star, heart. The first three figures already show star, heart, star, so the missing fourth figure must be the orange solid heart.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-007",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "The diamond stays the same shape. Follow its colours in order.",
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
    explanation: "The diamond stays solid, and its colours alternate purple, yellow, purple, yellow. The first three colours are purple, yellow, purple, so the missing fourth figure must be a yellow diamond.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-008",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "The circle stays grey. Check whether each circle is filled in or only has an outline.",
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
    explanation: "The shape and colour stay the same. The fill alternates outline, solid, outline, solid. Because the third figure is outline, the missing fourth figure must be the solid grey circle.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-009",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "The hexagon stays the same. Compare only its sizes from left to right.",
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
    explanation: "The blue solid hexagon alternates between large and small: large, small, large, small. Since the third figure is large, the missing fourth figure must be the small blue hexagon.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-010",
    skillId: "pattern-completion",
    stage: "recognise",
    difficulty: 1,
    question: "Which figure completes the pattern?",
    hint: "Track the direction of the arrow. It turns the same amount each time.",
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
    explanation: "The green solid arrow rotates 90° each time: 90°, 180°, 270°, then 360°. A 360° turn is the same direction as 0°, so the missing fourth figure is the arrow at 0°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-011",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Look for a group of shapes that repeats. Where does the group start again?",
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
    explanation: "The repeating group is circle, square, triangle. After the third shape, the group starts again with circle. Therefore the missing fourth figure must be the red solid circle.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-012",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The star stays the same shape. Write the colour order in your head and find the colour that comes next.",
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
    explanation: "The star stays solid, while the colours follow the cycle red, green, blue, yellow. After red, green and blue, the next colour is yellow. So the missing figure is the solid yellow star.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-013",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The diamond stays blue. Look only at the fill: filled or outline.",
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
    explanation: "The blue diamond alternates between outline and solid. The sequence is outline, solid, outline, so the next one must be solid. Therefore the missing figure is the solid blue diamond.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-014",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The circle stays green and solid. Watch its size move through the three sizes.",
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
    explanation: "The size sequence is small, medium, large, then it starts again at small. The first three figures are small, medium and large, so the missing fourth figure must be the small green solid circle.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-015",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The triangle turns by the same amount each time. Compare the first three directions.",
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
    explanation: "The orange solid triangle rotates 90° each time: 0°, 90°, 180°, then 270°. Therefore the missing fourth figure is the triangle rotated 270°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-016",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "There are two repeating shapes. Follow them in pairs: first shape, second shape, first shape...",
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
    explanation: "The pattern alternates heart, circle, heart, circle. The first three figures are heart, circle, heart, so the missing fourth figure must be the pink solid circle.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-017",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Ignore the shape because it stays the same. Follow the colour sequence and look for the colour that starts the cycle again.",
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
    explanation: "The colours follow a four-colour cycle: red, blue, yellow, green. The first three figures show blue, yellow, green, so the cycle must restart with red. The missing figure is the solid red hexagon.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-018",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The rectangle stays grey. Look at the fill of each rectangle and see which two states repeat.",
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
    explanation: "The fill alternates solid, outline, solid, outline. The first three rectangles are solid, outline, solid, so the missing fourth rectangle must be grey with an outline fill.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-019",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "The star stays yellow and solid. Watch the sizes in order: small, medium, large...",
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
    explanation: "The sizes follow a repeating three-step sequence: small, medium, large. After large, the sequence starts again with small. Therefore the missing figure is the small yellow solid star.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-020",
    skillId: "pattern-completion",
    stage: "understand",
    difficulty: 2,
    question: "Which figure completes the pattern?",
    hint: "Follow the arrow's direction. Each step makes the same clockwise turn.",
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
    explanation: "The purple solid arrow turns 90° clockwise each time: 270°, 0°, 90°, then 180°. Therefore the missing fourth figure must be the arrow rotated to 180°.",
    tags: ["year3","pattern-completion","rotation"]
},
{
    id: "nvr-pc-021",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look for pairs of the same shape. Which shape is repeated before the pattern moves on?",
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
    explanation: "The shapes occur in pairs: circle, circle, square, square. The first two positions are both circles, so positions three and four must both be squares. The missing figure is therefore the red solid square.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-022",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "There are two properties changing. Check the colour first, then check whether each shape is solid or outlined.",
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
    explanation: "The first row alternates between a red solid circle and a blue outlined circle. The sequence is red-solid, blue-outline, red-solid, so the missing figure must be the blue outlined circle.",
    tags: ["year3","pattern-completion","colour","fill"]
},

{
    id: "nvr-pc-023",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The triangle stays the same colour and fill. Follow its three sizes in order.",
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
    explanation: "The size sequence is small, medium, large, then it starts again with small. The missing fourth figure must therefore be a small green solid triangle.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-024",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The arrow turns by the same amount each time. Follow the directions carefully.",
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
    explanation: "The arrow rotates 90° clockwise each time: 0°, 90°, 180°, 270°. The missing figure is therefore the orange solid arrow at 270°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-025",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The fill changes every time. Check whether the colour or shape actually changes in the first row.",
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
    explanation: "The shape and colour stay purple, while the fill alternates solid, outline, solid, outline. Therefore the missing figure is the purple outlined diamond.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-026",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Two shapes alternate. Find the two shapes that belong to the repeating pair.",
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
    explanation: "The pattern alternates hexagon, circle, hexagon, circle. Since the third figure is a hexagon, the missing fourth figure must be the blue solid circle.",
    tags: ["year3","pattern-completion","shape"]
},

{
    id: "nvr-pc-027",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The star stays the same. Follow the colours and look for the repeating pair.",
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
    explanation: "The colours alternate yellow, green, yellow, green. The star remains solid throughout, so the missing figure is the solid green star.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-028",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Ignore the shape and colour. Follow the three sizes from largest to smallest.",
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
    explanation: "The sizes follow large, medium, small and then repeat. After the small square, the next figure must be large. The missing figure is therefore the large grey solid square.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-029",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The line turns by the same amount each time. Count the degrees between the first three positions.",
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
    explanation: "The line rotates 45° each time: 0°, 45°, 90°, then 135°. Therefore the missing figure is the black solid line at 135°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-030",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Several properties change, but start by comparing the first and third figures. What is repeated?",
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
    explanation: "The first and third figures are identical: both are small, blue, solid circles. This shows a two-figure repeating pattern. Therefore the fourth figure must match the second: a medium red outlined circle.",
    tags: ["year3","pattern-completion","mixed"]
},

{
    id: "nvr-pc-031",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at the shape and colour together. What happens when you compare the first three figures with the next row?",
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
    explanation: "The first row shows a sequence of different shapes and colours, and the second row provides the choices. The continuation required here is a yellow star, which is the first figure in the second row.",
    tags: ["year3","pattern-completion","shape","colour"]
},

{
    id: "nvr-pc-032",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The heart stays pink. Watch the fill alternate between filled and outline.",
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
    explanation: "The pink heart alternates solid, outline, solid, outline. Therefore the missing fourth figure must be the pink outlined heart.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-033",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The arrow turns by 45° each time. Continue the turn after 135°.",
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
    explanation: "The arrow rotates 45° at each step: 45°, 90°, 135°, then 180°. Therefore the missing figure is the green solid arrow at 180°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-034",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The diamond stays purple and solid. Follow the repeating size sequence.",
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
    explanation: "The sizes follow small, medium, large and then start again with small. So after the large diamond, the missing figure must be the small purple solid diamond.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-035",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The circle stays the same. Write the colour sequence: blue, red, green... What comes next?",
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
    explanation: "The colour cycle is blue, red, green, yellow. The first three figures are blue, red and green, so the missing fourth figure must be the yellow solid circle.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-036",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Look at the two shapes in each figure. Are the pairs repeating in the same order?",
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
    explanation: "The first and third figures are the same pair: circle and square. Therefore the pattern repeats every two figures. The fourth figure must match the second figure: a red solid triangle and star.",
    tags: ["year3","pattern-completion","multiple-shapes"]
},

{
    id: "nvr-pc-037",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Check both the fill and the shape. What property is actually changing in the first row?",
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
    explanation: "The yellow star stays the same shape and colour. Only its fill changes: outline, solid, outline, solid. Therefore the missing figure is the solid yellow star.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-038",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The triangle points in two alternating directions. Look at the rotation of the first three triangles.",
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
    explanation: "The triangle alternates between 0° and 180°: up, down, up, down. Therefore the missing fourth figure must be the blue solid triangle at 180°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-039",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Several properties are shown, but compare the first three figures carefully. Which property actually changes?",
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
    explanation: "The shape, colour and size stay the same in the first row. Only the fill changes, alternating solid, outline, solid, outline. Therefore the missing figure is the large green outlined hexagon.",
    tags: ["year3","pattern-completion","mixed"]
},

{
    id: "nvr-pc-040",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Compare the first and third figures. If they are the same, what should the fourth figure look like?",
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
    explanation: "The first and third figures are identical: both are red solid circles. This means the pattern alternates between the first figure and the second figure. Therefore the missing fourth figure must be the blue outlined square.",
    tags: ["year3","pattern-completion","mixed"]
},
{
    id: "nvr-pc-041",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The circle stays the same shape. Follow the four colours in their repeating order.",
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
    explanation: "The circle stays solid and the colours repeat in this order: red, green, blue, yellow. The first three colours are red, green and blue, so the missing fourth colour must be yellow. The answer is the solid yellow circle.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-042",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The purple square stays the same. Look at the fill: solid, outline, solid...",
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
    explanation: "The shape and colour stay the same. Only the fill changes, alternating solid, outline, solid, outline. Therefore the missing fourth figure is the purple square with an outline.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-043",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The star stays yellow and solid. Follow the sizes from small to large, then start again.",
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
    explanation: "The sizes repeat small, medium, large. After the large star, the sequence starts again with small. So the missing figure is the small yellow solid star.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-044",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The arrow turns by 90° each time. Continue the sequence after 180°.",
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
    explanation: "The arrow rotates 90° each time: 0°, 90°, 180°, then 270°. Therefore the missing fourth figure is the orange solid arrow pointing at 270°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-045",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Treat the two-shape figures as pairs. Which pair appears first, and which pair appears second?",
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
    explanation: "The first pair is circle and triangle. The second pair is square and star. Then the first pair appears again: circle and triangle. So the missing fourth figure must repeat the second pair: a red solid square and star.",
    tags: ["year3","pattern-completion","multiple-shapes"]
},

{
    id: "nvr-pc-046",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The diamond stays the same shape and fill. Follow the colour sequence and find where it starts again.",
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
    explanation: "The colours follow a repeating cycle: red, blue, green, yellow. The first three figures are blue, green and yellow, so the cycle must restart with red. The missing figure is the solid red diamond.",
    tags: ["year3","pattern-completion","colour"]
},

{
    id: "nvr-pc-047",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The hexagon stays grey. Look only at its fill and follow the alternating pattern.",
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
    explanation: "The grey hexagon alternates between outline and solid: outline, solid, outline, solid. Therefore the missing fourth figure must be the solid grey hexagon.",
    tags: ["year3","pattern-completion","fill"]
},

{
    id: "nvr-pc-048",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "The heart stays pink and solid. Follow the sizes from large to small.",
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
    explanation: "The size sequence is large, medium, small, then it starts again with large. Therefore the missing fourth figure must be the large pink solid heart.",
    tags: ["year3","pattern-completion","size"]
},

{
    id: "nvr-pc-049",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "Follow the arrow through its four directions. It turns by the same amount each time.",
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
    explanation: "The blue outlined arrow rotates 90° each time: 90°, 180°, 270°, then 360°. A 360° turn brings it back to 0°, so the missing figure is the blue outlined arrow at 0°.",
    tags: ["year3","pattern-completion","rotation"]
},

{
    id: "nvr-pc-050",
    skillId: "pattern-completion",
    stage: "master",
    difficulty: 3,
    question: "Which figure completes the pattern?",
    hint: "There are several properties changing. Compare the pattern carefully and identify which figure should come next in the sequence.",
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
    explanation: "The sequence of shapes continues through circle, square, triangle and then star. The fill alternates solid, outline, solid, so the next fill is outline. The missing figure is therefore the yellow outlined star.",
    tags: ["year3","pattern-completion","mixed"]
}

];

export default questions;