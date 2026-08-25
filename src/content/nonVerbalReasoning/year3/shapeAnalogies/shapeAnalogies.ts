import type { NvrQuestion } from "../../nvrTypes";

const questions: NvrQuestion[] = [

{
    id: "nvr-sa-001",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "Compare the first two shapes. The circle changes into a square, so make the same shape change to the triangle.",
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
    explanation: "Start with the first pair: the blue solid circle changes into a blue solid square. The colour and fill stay the same; only the shape changes. Now use that same shape change on the blue solid triangle. It changes into the blue solid diamond, which is the third choice.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-002",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The triangle becomes a star. Make the same shape change to the circle.",
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
    explanation: "The first pair shows that a red solid triangle changes into a red solid star. The colour and fill do not change. Apply the same shape change to the red solid circle. The circle changes into a square, so the third choice is correct.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-003",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The shape and colour stay the same. Only the fill changes from solid to outline.",
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
    explanation: "Look at the first pair. The green circle stays a circle and stays green, but its fill changes from solid to outline. Apply that same rule to the green solid square. It becomes a green outlined square, which is the first choice.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-004",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The shape stays the same, but blue changes to red. Make that colour change to the square.",
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
    explanation: "The first pair shows a blue solid circle changing into a red solid circle. The shape and fill stay the same; only the colour changes from blue to red. So the blue solid square must also become a red solid square. That is the first choice.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-005",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The star gets bigger: small changes to large. Do the same to the small triangle.",
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
    explanation: "The first pair shows a small yellow solid star becoming a large yellow solid star. The shape, colour and fill stay the same; only the size changes from small to large. Apply that rule to the small yellow solid triangle. It becomes a large triangle, so the first choice is correct.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-006",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The arrow turns 90° clockwise. Turn the triangle by the same 90°.",
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
    explanation: "The arrow starts at 0° and turns to 90°, so it rotates 90° clockwise. The orange solid triangle also starts at 0°. Turning it 90° clockwise gives the orange solid triangle at 90°, which is the first choice.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-007",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The diamond becomes a heart. Find the choice where the square makes the same shape change.",
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
    explanation: "The first pair shows that the purple solid diamond changes into a purple solid heart. The colour and fill stay the same, so this is a shape change. Apply the same shape change to the purple solid square. It becomes a circle, which is the third choice.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-008",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The hexagon becomes a circle. Apply that same shape change to the star.",
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
    explanation: "The grey solid hexagon changes into a grey solid circle. Nothing except the shape changes. Apply the same shape change to the grey solid star. The star becomes a square, so the third choice is correct.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-009",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The circle changes into a triangle. Now make the same change to the square.",
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
    explanation: "The first pair shows a pink solid circle changing into a pink solid triangle. The colour and fill stay the same. Apply the same shape change to the pink solid square. It becomes a circle, which is the third choice.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-010",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The rectangle becomes an oval. Use the same shape change on the diamond.",
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
    explanation: "The brown solid rectangle changes into a brown solid oval. The colour and fill remain unchanged. Apply the same shape change to the brown solid diamond. It becomes a triangle, so the third choice is correct.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-011",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The circle becomes a star. Make that same shape change to the square.",
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
    explanation: "The first pair shows a green solid circle changing into a green solid star. The colour and fill stay the same. Applying that same shape change to the green solid square gives a diamond. The third choice is therefore correct.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-012",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The square stays blue, but its fill changes from solid to outline. Do the same to the triangle.",
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
    explanation: "The blue solid square becomes a blue outlined square. The shape and colour stay the same; only the fill changes. Therefore the blue solid triangle must become a blue outlined triangle. That is the first choice.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-013",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The diamond changes from red to yellow. Keep the circle the same shape and make the same colour change.",
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
    explanation: "The first pair shows a red solid diamond changing into a yellow solid diamond. The shape and fill stay the same; only the colour changes from red to yellow. So the red solid circle must become a yellow solid circle. The first choice is correct.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-014",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The heart grows from small to large. Apply the same size change to the small star.",
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
    explanation: "The pink solid heart changes from small to large. Its shape, colour and fill stay the same. Apply the same size change to the small pink solid star. It becomes a large star, which is the first choice.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-015",
    skillId: "shape-analogies",
    stage: "recognise",
    difficulty: 1,
    question: "Complete the analogy.",
    hint: "The arrow turns 90° clockwise. Turn the triangle by the same amount.",
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
    explanation: "The arrow turns from 90° to 180°, which is a 90° clockwise rotation. The triangle starts at 90° too, so turning it 90° clockwise gives 180°. The first choice shows the correct triangle.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-016",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The circle becomes a triangle. Apply that same shape change to the square.",
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
    explanation: "In the first pair, the purple solid circle changes into a purple solid triangle. The colour and fill stay the same, so the important change is the shape. Applying the same change to the purple solid square gives a star. The third choice is the purple solid star.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-017",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The circle changes from outline to solid. Keep the diamond's shape and colour the same and change its fill.",
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
    explanation: "The grey circle changes from outline to solid. Its shape and colour stay the same. Do exactly the same to the grey outlined diamond: change only its fill to solid. The first choice is therefore correct.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-018",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The triangle changes from green to blue. Keep the heart's shape and change its colour in the same way.",
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
    explanation: "The first pair shows green changing to blue while the shape and fill stay the same. Apply that colour change to the green solid heart. It becomes a blue solid heart, which is the first choice.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-019",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The circle gets smaller: large becomes small. Apply the same size change to the large square.",
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
    explanation: "The brown solid circle changes from large to small. The shape, colour and fill remain unchanged. Apply the same size change to the large brown solid square. It becomes a small square, which is the first choice.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-020",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The triangle turns 90° clockwise. Make the same turn to the arrow.",
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
    explanation: "The triangle starts at 180° and ends at 270°, so it turns 90° clockwise. The red solid arrow also starts at 180°. Turning it 90° clockwise gives 270°. That is the first choice.",
    tags: ["year3","shape-analogies","rotation"]
},
{
    id: "nvr-sa-021",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The star becomes a heart. Make the same shape change to the circle.",
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
    explanation: "The star changes to a heart. The colour and fill stay the same. Apply the same shape change to the circle. It becomes a triangle.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-022",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Solid changes to outline. Apply that change to the square.",
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
    explanation: "The diamond changes from solid to outline. Its shape and colour stay the same. The solid square must therefore become an outlined square.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-023",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Orange changes to purple. Make the same colour change to the triangle.",
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
    explanation: "The circle changes from orange to purple. The shape and fill stay the same. The orange triangle must also become purple.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-024",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "Small becomes large. Do the same to the small circle.",
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
    explanation: "The hexagon changes from small to large. The circle follows the same rule, so it becomes large.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-025",
    skillId: "shape-analogies",
    stage: "understand",
    difficulty: 2,
    question: "Complete the analogy.",
    hint: "The arrow turns 90° clockwise. Turn the triangle the same amount.",
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
    explanation: "The arrow turns from 270° to 0°, which is a 90° clockwise turn. The triangle also starts at 270°, so it must turn to 0°.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-026",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape changes and blue becomes red. Apply both changes.",
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
    explanation: "The circle becomes a square and blue becomes red. Apply both changes to the blue triangle. It becomes a red diamond.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-027",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Solid small becomes outline large. Apply both changes.",
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
    explanation: "The circle changes from solid and small to outline and large. The square must make the same two changes, giving an outlined large square.",
    tags: ["year3","shape-analogies","fill","size"]
},

{
    id: "nvr-sa-028",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The arrow becomes a triangle and turns 90°. Use the same rule.",
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
    explanation: "The arrow changes into a triangle and turns 90° clockwise. The second arrow is at 180°, so the matching triangle is at 270°.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-029",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "An outline shape becomes a solid shape. The shape changes too.",
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
    explanation: "The outline star becomes a solid heart. The outline diamond must make the same change, becoming a solid triangle.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-030",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape changes and solid becomes outline. Apply both changes.",
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
    explanation: "The rectangle changes into an oval and solid becomes outline. Apply both changes to the square. It becomes an outlined triangle.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-031",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Blue becomes red and solid becomes outline.",
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
    explanation: "The circle changes from blue solid to red outline. The square must make the same colour and fill changes, giving a red outlined square.",
    tags: ["year3","shape-analogies","colour","fill"]
},

{
    id: "nvr-sa-032",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The arrow becomes a triangle and turns 90°. Repeat that rule.",
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
    explanation: "The arrow changes into a triangle and rotates 90° clockwise. The second arrow is at 180°, so the matching triangle is at 270°.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-033",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Small outline becomes large solid. Make both changes.",
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
    explanation: "The star changes from outline small to solid large. The heart must make the same fill and size changes, becoming solid and large.",
    tags: ["year3","shape-analogies","size","fill"]
},

{
    id: "nvr-sa-034",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Red small becomes blue large. Apply both changes.",
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
    explanation: "The circle changes from red small to blue large. Apply the same colour and size changes to the red small triangle. It becomes blue and large.",
    tags: ["year3","shape-analogies","colour","size"]
},

{
    id: "nvr-sa-035",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape changes, but the rotation stays the same.",
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
    explanation: "The triangle changes to a diamond while staying at 90°. The arrow is at 180°, so it changes into a circle while staying at 180°.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-036",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Only the fill changes. Outline becomes solid.",
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
    explanation: "The hexagon changes from outline to solid without changing its shape or colour. The outlined circle must also become solid.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-037",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Green changes to yellow and the shape changes too.",
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
    explanation: "The green star becomes a yellow circle. Apply the same shape and colour changes to the green heart. It becomes a yellow diamond.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-038",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape changes, solid becomes outline, and 0° becomes 90°.",
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
    explanation: "The circle changes shape, becomes outlined, and turns from 0° to 90°. Apply all three changes to the triangle. It becomes a grey outlined diamond at 90°.",
    tags: ["year3","shape-analogies","rotation","fill"]
},

{
    id: "nvr-sa-039",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape changes, blue becomes red, and solid becomes outline.",
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
    explanation: "The diamond becomes a red outlined heart. Apply the same shape, colour and fill changes to the blue solid square. It becomes a red outlined circle.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-040",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The shape changes, outline becomes solid, and small becomes large.",
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
    explanation: "The rectangle becomes an oval, outline becomes solid, and small becomes large. Apply those same changes to the diamond. It becomes a solid large circle.",
    tags: ["year3","shape-analogies","size","fill"]
},
{
    id: "nvr-sa-041",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The arrow changes from blue to red and turns 90°. Apply both changes to the triangle.",
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
    explanation: "The arrow changes in two ways: blue becomes red, and 0° becomes 90°. The shape stays the same. Apply both changes to the blue triangle at 0°. It becomes a red triangle at 90°, which is the first choice.",
    tags: ["year3","shape-analogies","colour","rotation"]
},

{
    id: "nvr-sa-042",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The circle changes from outline large to solid small. Apply both changes to the square.",
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
    explanation: "The circle changes from outline to solid and from large to small. Its shape and colour stay the same. Apply those same two changes to the large outlined square. It becomes a small solid square, which is the first choice.",
    tags: ["year3","shape-analogies","fill","size"]
},

{
    id: "nvr-sa-043",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Purple solid becomes orange outline. The shape also changes. Apply all three changes.",
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
    explanation: "The hexagon changes into a star, purple becomes orange, and solid becomes outline. Apply those same three changes to the purple solid circle. It becomes an orange outlined triangle.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-044",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The triangle turns 90° clockwise. Apply the same rotation to the arrow.",
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
    explanation: "The triangle rotates from 90° to 180°, so it turns 90° clockwise. The arrow starts at 90° too. Turning it by the same 90° gives 180°, so the first choice is correct.",
    tags: ["year3","shape-analogies","rotation"]
},

{
    id: "nvr-sa-045",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The diamond becomes a large solid green circle. Check the shape, colour, fill and size one at a time.",
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
    explanation: "The diamond changes to a circle, blue changes to green, outline changes to solid, and small changes to large. Apply all four changes to the blue outlined small square. It becomes a green solid large heart.",
    tags: ["year3","shape-analogies","size","colour","fill"]
},

{
    id: "nvr-sa-046",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The heart becomes a star. Make the same shape change to the triangle.",
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
    explanation: "The first pair shows the heart changing into a star while the colour and fill stay the same. Apply the same shape change to the pink solid triangle. It becomes a square, which is the third choice.",
    tags: ["year3","shape-analogies"]
},

{
    id: "nvr-sa-047",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Yellow changes to purple while the shape and fill stay the same.",
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
    explanation: "The circle stays the same shape and solid fill, but yellow changes to purple. Apply the same colour change to the yellow solid diamond. It becomes a purple solid diamond, which is the first choice.",
    tags: ["year3","shape-analogies","colour"]
},

{
    id: "nvr-sa-048",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Solid changes to outline while the shape and colour stay the same.",
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
    explanation: "The star stays grey and stays a star, but its fill changes from solid to outline. Apply the same fill change to the solid grey heart. It becomes a grey outlined heart, which is the first choice.",
    tags: ["year3","shape-analogies","fill"]
},

{
    id: "nvr-sa-049",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "Medium becomes large. Keep the triangle's shape, colour and fill the same.",
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
    explanation: "The circle changes from medium to large while its shape, colour and fill stay the same. Apply the same size change to the medium orange solid triangle. It becomes a large triangle, which is the first choice.",
    tags: ["year3","shape-analogies","size"]
},

{
    id: "nvr-sa-050",
    skillId: "shape-analogies",
    stage: "master",
    difficulty: 3,
    question: "Complete the analogy.",
    hint: "The square becomes a circle, blue becomes red, outline becomes solid, and 0° becomes 90°. Apply all four changes to the diamond.",
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
    explanation: "The square changes into a circle, blue changes to red, outline changes to solid, and 0° changes to 90°. Apply all four rules to the blue outlined diamond at 0°. It becomes a red solid star at 90°, which is the third choice.",
    tags: ["year3","shape-analogies","rotation","colour","fill"]
}

];

export default questions;