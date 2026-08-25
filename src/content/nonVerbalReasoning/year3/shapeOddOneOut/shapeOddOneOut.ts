import type { NvrQuestion } from "../../nvrTypes";

const questions: NvrQuestion[] = [
    {
        id: "nvr-soo-001",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Compare the type of shape in each box.",
        figures: [[
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because it contains a square. The other three boxes all contain blue circles.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-002",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Find the shape that does not appear three times.",
        figures: [[
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because it contains a diamond. The first three boxes all contain red triangles.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-003",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Compare the names of the shapes, not where they are placed.",
        figures: [[
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "green", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 1 },
        explanation: "The second box is different because it contains a hexagon. The other three boxes all contain green stars.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-004",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Three boxes contain exactly the same type of shape.",
        figures: [[
            { shapes: [{ shape: "square", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "square", colour: "orange", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because it contains an orange circle. The other three boxes contain orange squares.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-005",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Look for the shape that only appears once.",
        figures: [[
            { shapes: [{ shape: "pentagon", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "pentagon", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "pentagon", colour: "purple", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 1 },
        explanation: "The second box is different because it contains a purple triangle. The other three boxes all contain purple pentagons.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-006",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Check which shape is not repeated three times.",
        figures: [[
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because it contains a blue circle. The first three boxes all contain blue diamonds.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-007",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Three boxes have the same shape.",
        figures: [[
            { shapes: [{ shape: "hexagon", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "red", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because it contains a red star. The other three boxes all contain red hexagons.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-008",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Compare the shape in all four boxes.",
        figures: [[
            { shapes: [{ shape: "rectangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "rectangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "rectangle", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "oval", colour: "green", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because it contains a green oval. The other three boxes all contain green rectangles.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-009",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Ignore the colour and compare the shapes.",
        figures: [[
            { shapes: [{ shape: "cross", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "cross", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "arrow", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "cross", colour: "grey", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because it contains a grey arrow. The other three boxes all contain grey crosses.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-010",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which shape is different?",
        hint: "Three boxes contain the same shape. Find the one that does not.",
        figures: [[
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "yellow", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because it contains a yellow circle. The other three boxes all contain yellow hearts.",
        tags: ["year3","shape-odd-one-out"]
    },

    {
        id: "nvr-soo-011",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "The shape and colour stay the same. Check how each one is filled.",
        figures: [[
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its blue circle is outlined rather than filled in. The other three blue circles are solid.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-012",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "All four shapes are squares. Compare what is inside them.",
        figures: [[
            { shapes: [{ shape: "square", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its green square is solid. The other three green squares are outlines.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-013",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "The shape and colour are the same. Check the fill of each triangle.",
        figures: [[
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "outline" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 1 },
        explanation: "The second box is different because its red triangle is outlined. The other three red triangles are solid.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-014",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "Compare whether each diamond is filled or just outlined.",
        figures: [[
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "outline" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its purple diamond is outlined instead of solid. The other three diamonds are filled in.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-015",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "All four shapes are stars. Look at which one is filled in.",
        figures: [[
            { shapes: [{ shape: "star", colour: "orange", fill: "outline" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "outline" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "solid" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "outline" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its orange star is solid. The other three orange stars are outlines.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-016",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "Compare the inside of each blue hexagon.",
        figures: [[
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 1 },
        explanation: "The second box is different because its blue hexagon is an outline. The other three blue hexagons are solid.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-017",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "All four shapes are rectangles. Check whether each one is filled.",
        figures: [[
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "outline" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its grey rectangle is outlined. The other three grey rectangles are solid.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-018",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "Look inside each green cross and compare the fill.",
        figures: [[
            { shapes: [{ shape: "cross", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "cross", colour: "green", fill: "outline" }] },
            { shapes: [{ shape: "cross", colour: "green", fill: "solid" }] },
            { shapes: [{ shape: "cross", colour: "green", fill: "outline" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its green cross is solid. The other three green crosses are outlines.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-019",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "The hearts all have the same shape and colour. Check their fill.",
        figures: [[
            { shapes: [{ shape: "heart", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "solid" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "outline" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its red heart is outlined. The other three red hearts are solid.",
        tags: ["year3","shape-odd-one-out","fill"]
    },

    {
        id: "nvr-soo-020",
        skillId: "shape-odd-one-out",
        stage: "recognise",
        difficulty: 1,
        question: "Which figure is different?",
        hint: "All four shapes are yellow ovals. Compare how they are filled.",
        figures: [[
            { shapes: [{ shape: "oval", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "oval", colour: "yellow", fill: "outline" }] },
            { shapes: [{ shape: "oval", colour: "yellow", fill: "solid" }] },
            { shapes: [{ shape: "oval", colour: "yellow", fill: "outline" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its yellow oval is solid. The other three yellow ovals are outlines.",
        tags: ["year3","shape-odd-one-out","fill"]
    },
    {
        id: "nvr-soo-021",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare the size of all four circles.",
        figures: [[
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid", size: "medium" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its blue circle is small. The other three blue circles are medium-sized.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-022",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "All four shapes are squares. Compare their sizes.",
        figures: [[
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "square", colour: "green", fill: "solid", size: "large" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its green square is medium-sized. The other three green squares are large.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-023",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three triangles are the same size. Find the one that is not.",
        figures: [[
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "small" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its red triangle is large. The other three red triangles are small.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-024",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "The shape and colour match. Compare the size of each diamond.",
        figures: [[
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "medium" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its purple diamond is large. The other three purple diamonds are medium-sized.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-025",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three stars are the same size. Find the smaller one.",
        figures: [[
            { shapes: [{ shape: "star", colour: "orange", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "star", colour: "orange", fill: "solid", size: "large" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its orange star is small. The other three orange stars are large.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-026",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three hexagons are medium-sized. Find the one that is larger.",
        figures: [[
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "hexagon", colour: "blue", fill: "solid", size: "medium" }] }
        ]],
        answer: { row: 0, column: 1 },
        explanation: "The second box is different because its blue hexagon is large. The other three blue hexagons are medium-sized.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-027",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare the size of all four rectangles.",
        figures: [[
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "rectangle", colour: "grey", fill: "solid", size: "medium" }] }
        ]],
        answer: { row: 0, column: 1 },
        explanation: "The second box is different because its grey rectangle is small. The other three grey rectangles are medium-sized.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-028",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three crosses are large. Find the one that is smaller.",
        figures: [[
            { shapes: [{ shape: "cross", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "cross", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "cross", colour: "green", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "cross", colour: "green", fill: "solid", size: "small" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its green cross is small. The other three green crosses are large.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-029",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three hearts are medium-sized. Find the one that is larger.",
        figures: [[
            { shapes: [{ shape: "heart", colour: "red", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "heart", colour: "red", fill: "solid", size: "medium" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its red heart is large. The other three red hearts are medium-sized.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-030",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three ovals are small. Find the one that is a different size.",
        figures: [[
            { shapes: [{ shape: "oval", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "oval", colour: "yellow", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "oval", colour: "yellow", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "oval", colour: "yellow", fill: "solid", size: "small" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its yellow oval is medium-sized. The other three yellow ovals are small.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-031",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare which way each triangle points.",
        figures: [[
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "triangle", colour: "blue", fill: "solid", rotation: 0 }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its blue triangle is turned upside down and points down. The other three triangles point up.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-032",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare the direction in which each arrow points.",
        figures: [[
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 270 }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its green arrow points left. The other three green arrows point right.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-033",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare whether each rectangle is standing or lying down.",
        figures: [[
            { shapes: [{ shape: "rectangle", colour: "red", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "rectangle", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "rectangle", colour: "red", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "rectangle", colour: "red", fill: "solid", rotation: 0 }] }
        ]],
        answer: { row: 0, column: 1 },
        explanation: "The second box is different because its red rectangle is turned upright. The other three red rectangles are lying horizontally.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-034",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "The diamonds are turned in different directions. Find the one that does not match the other three.",
        figures: [[
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", rotation: 135 }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", rotation: 45 }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its purple diamond has been turned to a different angle. The other three diamonds have the same rotation.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-035",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare the direction of each line.",
        figures: [[
            { shapes: [{ shape: "line", colour: "grey", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "line", colour: "grey", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "line", colour: "grey", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "line", colour: "grey", fill: "solid", rotation: 0 }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its grey line is vertical. The other three grey lines are horizontal.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-036",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three arrows point down. Find the arrow pointing in another direction.",
        figures: [[
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 180 }] },
            { shapes: [{ shape: "arrow", colour: "orange", fill: "solid", rotation: 0 }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its orange arrow points up. The other three orange arrows point down.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-037",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare the direction each triangle points.",
        figures: [[
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "triangle", colour: "green", fill: "solid", rotation: 270 }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its green triangle points left. The other three green triangles point right.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-038",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare whether each rectangle is horizontal or vertical.",
        figures: [[
            { shapes: [{ shape: "rectangle", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "rectangle", colour: "blue", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "rectangle", colour: "blue", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "rectangle", colour: "blue", fill: "solid", rotation: 90 }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its blue rectangle is horizontal. The other three blue rectangles are vertical.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-039",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Three diamonds have the same direction. Find the one turned differently.",
        figures: [[
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid", rotation: 0 }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid", rotation: 90 }] },
            { shapes: [{ shape: "diamond", colour: "red", fill: "solid", rotation: 0 }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its red diamond has been turned by a different amount. The other three diamonds have the same rotation.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },

    {
        id: "nvr-soo-040",
        skillId: "shape-odd-one-out",
        stage: "understand",
        difficulty: 2,
        question: "Which figure is different?",
        hint: "Compare the angle of each line.",
        figures: [[
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 45 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 135 }] },
            { shapes: [{ shape: "line", colour: "black", fill: "solid", rotation: 45 }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its black line is at a different angle. The other three lines have the same angle.",
        tags: ["year3","shape-odd-one-out","rotation"]
    },
        {
        id: "nvr-soo-041",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "First compare the shapes. Then check how each one is filled.",
        figures: [[
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "outline" }] },
            { shapes: [{ shape: "square", colour: "blue", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because it contains a blue square. The other three boxes all contain blue circles. The outlined circle is still a circle, so its fill does not make it the odd one out.",
        tags: ["year3","shape-odd-one-out","shape","fill"]
    },

    {
        id: "nvr-soo-042",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Check the size first. The fill is also different in one box, so do not choose it just for that.",
        figures: [[
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "medium" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "outline", size: "medium" }] },
            { shapes: [{ shape: "triangle", colour: "red", fill: "solid", size: "small" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its red triangle is small. The first three triangles are medium-sized. The outlined triangle is still medium-sized, so it matches the others in size.",
        tags: ["year3","shape-odd-one-out","size","fill"]
    },

    {
        id: "nvr-soo-043",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Compare the arrow directions and then compare their sizes.",
        figures: [[
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 0, size: "medium" }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 0, size: "medium" }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 180, size: "medium" }] },
            { shapes: [{ shape: "arrow", colour: "green", fill: "solid", rotation: 0, size: "small" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its green arrow is small. The first three arrows are medium-sized. The third arrow points the opposite way, but it is still medium-sized, so it is not the odd one out.",
        tags: ["year3","shape-odd-one-out","rotation","size"]
    },

    {
        id: "nvr-soo-044",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Ignore the colour and compare the shape and size.",
        figures: [[
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "large" }] },
            { shapes: [{ shape: "diamond", colour: "purple", fill: "solid", size: "small" }] },
            { shapes: [{ shape: "square", colour: "purple", fill: "solid", size: "large" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because it contains a purple square. The other three boxes contain purple diamonds. The small diamond is still a diamond, so it is not the odd one out.",
        tags: ["year3","shape-odd-one-out","shape","size"]
    },

    {
        id: "nvr-soo-045",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Compare the fill and the direction of each rectangle.",
        figures: [[
            { shapes: [{ shape: "rectangle", colour: "orange", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "rectangle", colour: "orange", fill: "outline", rotation: 0 }] },
            { shapes: [{ shape: "rectangle", colour: "orange", fill: "outline", rotation: 90 }] },
            { shapes: [{ shape: "rectangle", colour: "orange", fill: "solid", rotation: 0 }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its orange rectangle is solid. The first three rectangles are outlines. The third rectangle is turned, but it is still an outline like the other two.",
        tags: ["year3","shape-odd-one-out","fill","rotation"]
    },

    {
        id: "nvr-soo-046",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Count how many shapes are inside each box.",
        figures: [[
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] },
            { shapes: [
                { shape: "circle", colour: "blue", fill: "solid" },
                { shape: "circle", colour: "blue", fill: "solid" }
            ]},
            { shapes: [{ shape: "circle", colour: "blue", fill: "solid" }] }
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because it contains two blue circles. Each of the other three boxes contains only one blue circle.",
        tags: ["year3","shape-odd-one-out","counting"]
    },

    {
        id: "nvr-soo-047",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Compare both shapes in each box. One pair has a different second shape.",
        figures: [[
            { shapes: [
                { shape: "square", colour: "green", fill: "solid" },
                { shape: "triangle", colour: "green", fill: "solid" }
            ]},
            { shapes: [
                { shape: "square", colour: "green", fill: "solid" },
                { shape: "triangle", colour: "green", fill: "solid" }
            ]},
            { shapes: [
                { shape: "square", colour: "green", fill: "solid" },
                { shape: "circle", colour: "green", fill: "solid" }
            ]},
            { shapes: [
                { shape: "square", colour: "green", fill: "solid" },
                { shape: "triangle", colour: "green", fill: "solid" }
            ]}
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its pair is a square and a circle. The other three boxes contain a square and a triangle. The first shape in every pair is the same.",
        tags: ["year3","shape-odd-one-out","multiple-shapes"]
    },

    {
        id: "nvr-soo-048",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "All four boxes contain a star. Compare the size of each star.",
        figures: [[
            { shapes: [
                { shape: "star", colour: "yellow", fill: "solid", size: "small" }
            ]},
            { shapes: [
                { shape: "star", colour: "yellow", fill: "solid", size: "small" }
            ]},
            { shapes: [
                { shape: "star", colour: "yellow", fill: "solid", size: "large" }
            ]},
            { shapes: [
                { shape: "star", colour: "yellow", fill: "solid", size: "small" }
            ]}
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its yellow star is large. The other three yellow stars are small.",
        tags: ["year3","shape-odd-one-out","size"]
    },

    {
        id: "nvr-soo-049",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Each box has two shapes. Compare the second shape in each pair.",
        figures: [[
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "square", colour: "red", fill: "solid" }
            ]},
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "square", colour: "red", fill: "solid" }
            ]},
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "triangle", colour: "red", fill: "solid" }
            ]},
            { shapes: [
                { shape: "circle", colour: "red", fill: "solid" },
                { shape: "square", colour: "red", fill: "solid" }
            ]}
        ]],
        answer: { row: 0, column: 2 },
        explanation: "The third box is different because its pair contains a circle and a triangle. The other three pairs contain a circle and a square. The first shape is the same in every box.",
        tags: ["year3","shape-odd-one-out","multiple-shapes"]
    },

    {
        id: "nvr-soo-050",
        skillId: "shape-odd-one-out",
        stage: "master",
        difficulty: 3,
        question: "Which figure is different?",
        hint: "Check the fill first, then check the direction and size.",
        figures: [[
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 90, size: "medium" }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 90, size: "medium" }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "outline", rotation: 270, size: "medium" }] },
            { shapes: [{ shape: "arrow", colour: "blue", fill: "solid", rotation: 90, size: "medium" }] }
        ]],
        answer: { row: 0, column: 3 },
        explanation: "The fourth box is different because its blue arrow is solid. The other three arrows are outlined. The third arrow points in a different direction, but it is still outlined and medium-sized like the other two.",
        tags: ["year3","shape-odd-one-out","rotation","fill"]
    },
];

export default questions;