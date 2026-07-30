import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const fossils: SkillContent = {

    skillId: "fossils",

    title: "Fossils",

    description:
        "Learn how fossils are formed and what they can tell us about plants and animals that lived millions of years ago.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-fossils-001",

        question: "What is a fossil?",

        options: [
            "The preserved remains or trace of a living thing",
            "A type of living rock",
            "A new plant",
            "A kind of animal"
        ],

        explanation:
            "A fossil is the preserved remains or trace of a plant or animal that lived long ago.",

        difficulty: 1,
        correctAnswer: "The preserved remains or trace of a living thing",
        estimatedSeconds: 15,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-002",

        question: "Where are fossils usually found?",

        options: [
            "Inside rocks",
            "In clouds",
            "On tree leaves",
            "In rivers"
        ],

        explanation:
            "Most fossils are found inside sedimentary rocks.",

        difficulty: 1,
        correctAnswer: "Inside rocks",
        estimatedSeconds: 15,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-003",

        question: "A fossil can come from a...",

        options: [
            "Plant or animal",
            "Cloud",
            "Rainbow",
            "Moon"
        ],

        explanation:
            "Fossils can be formed from both plants and animals.",

        difficulty: 1,
        correctAnswer: "Plant or animal",
        estimatedSeconds: 15,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-004",

        question: "Which of these could become a fossil?",

        options: [
            "A dinosaur bone",
            "A plastic bottle",
            "A toy car",
            "A mobile phone"
        ],

        explanation:
            "Bones can sometimes become fossils after millions of years.",

        difficulty: 1,
        correctAnswer: "A dinosaur bone",
        estimatedSeconds: 15,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-005",

        question: "What can fossils teach us?",

        options: [
            "What living things were like long ago",
            "Tomorrow's weather",
            "How to build houses",
            "How fast cars can go"
        ],

        explanation:
            "Fossils help scientists learn about plants and animals from the distant past.",

        difficulty: 1,
        correctAnswer: "What living things were like long ago",
        estimatedSeconds: 15,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-006",

        question: "Which scientist studies fossils?",

        options: [
            "A palaeontologist",
            "A chef",
            "A pilot",
            "A firefighter"
        ],

        explanation:
            "A palaeontologist studies fossils to learn about ancient life.",

        difficulty: 1,
        correctAnswer: "A palaeontologist",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils", "scientists"]
    },

    {
        id: "sci-fossils-007",

        question: "Which animal is often known from fossils?",

        options: [
            "Dinosaur",
            "Cat",
            "Rabbit",
            "Dog"
        ],

        explanation:
            "Many dinosaurs are known only because their fossils have been discovered.",

        difficulty: 1,
        correctAnswer: "Dinosaur",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils", "dinosaurs"]
    },

    {
        id: "sci-fossils-008",

        question: "How old are many fossils?",

        options: [
            "Millions of years old",
            "One day old",
            "One week old",
            "One month old"
        ],

        explanation:
            "Many fossils were formed millions of years ago.",

        difficulty: 1,
        correctAnswer: "Millions of years old",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-009",

        question: "Which of these might be found as a fossil?",

        options: [
            "A shell",
            "A balloon",
            "An ice cube",
            "A paper aeroplane"
        ],

        explanation:
            "Shells are one of the most common fossils found in rocks.",

        difficulty: 1,
        correctAnswer: "A shell",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-010",

        question: "Why are fossils important?",

        options: [
            "They tell us about life in the past",
            "They make rocks grow",
            "They change the weather",
            "They produce electricity"
        ],

        explanation:
            "Fossils give scientists clues about Earth's history.",

        difficulty: 1,
        correctAnswer: "They tell us about life in the past",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-011",

        question: "A fossil is discovered inside a rock. What does this tell scientists?",

        options: [
            "A living thing existed there long ago",
            "The rock is alive",
            "The rock is growing",
            "The fossil was made yesterday"
        ],

        explanation:
            "Fossils show that plants or animals lived in that place long ago.",

        difficulty: 2,
        correctAnswer: "A living thing existed there long ago",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-012",

        question: "Which rock is most likely to contain fossils?",

        options: [
            "Sedimentary rock",
            "Molten rock",
            "Liquid rock",
            "Fresh lava"
        ],

        explanation:
            "Most fossils are found in sedimentary rocks.",

        difficulty: 2,
        correctAnswer: "Sedimentary rock",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils", "sedimentary"]
    },

    {
        id: "sci-fossils-013",

        question: "What can fossils tell us about an animal?",

        options: [
            "What it looked like",
            "Its favourite colour",
            "Its name",
            "Its birthday"
        ],

        explanation:
            "Scientists can learn about the shape and size of ancient animals from fossils.",

        difficulty: 2,
        correctAnswer: "What it looked like",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-014",

        question: "Which is most likely to become a fossil?",

        options: [
            "A hard shell",
            "A puddle",
            "A shadow",
            "Smoke"
        ],

        explanation:
            "Hard parts such as shells and bones are more likely to become fossils.",

        difficulty: 2,
        correctAnswer: "A hard shell",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-015",

        question: "What do scientists compare when studying fossils?",

        options: [
            "Their shapes and sizes",
            "Their voices",
            "Their favourite foods",
            "Their feelings"
        ],

        explanation:
            "Comparing fossil shapes helps scientists identify ancient living things.",

        difficulty: 2,
        correctAnswer: "Their shapes and sizes",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-016",

        question: "Why do fossils help us understand Earth's history?",

        options: [
            "They show what lived in the past",
            "They predict earthquakes",
            "They stop erosion",
            "They create new rocks"
        ],

        explanation:
            "Fossils provide evidence of life from millions of years ago.",

        difficulty: 2,
        correctAnswer: "They show what lived in the past",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils", "history"]
    },

    {
        id: "sci-fossils-017",

        question: "A fossil of a fish is found on a mountain. What might this suggest?",

        options: [
            "The area was once covered by water",
            "Fish can climb mountains",
            "The mountain is underwater today",
            "The fossil is not real"
        ],

        explanation:
            "Fish fossils found high on land can show that the area was once beneath the sea.",

        difficulty: 2,
        correctAnswer: "The area was once covered by water",
        estimatedSeconds: 25,

        tags: ["science", "rocks", "fossils", "evidence"]
    },

    {
        id: "sci-fossils-018",

        question: "Why are dinosaur fossils exciting to scientists?",

        options: [
            "They provide evidence about animals that are now extinct",
            "They can hatch into dinosaurs",
            "They are still alive",
            "They make new rocks"
        ],

        explanation:
            "Dinosaur fossils help scientists understand extinct animals.",

        difficulty: 2,
        correctAnswer: "They provide evidence about animals that are now extinct",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils", "dinosaurs"]
    },

    {
        id: "sci-fossils-019",

        question: "Which statement about fossils is true?",

        options: [
            "They provide evidence of past life",
            "They are living animals",
            "They only form in water",
            "They are all dinosaur bones"
        ],

        explanation:
            "Fossils include many different plants, animals and traces of ancient life.",

        difficulty: 2,
        correctAnswer: "They provide evidence of past life",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils"]
    },

    {
        id: "sci-fossils-020",

        question: "What is the main reason scientists study fossils?",

        options: [
            "To learn about life on Earth long ago",
            "To discover new planets",
            "To predict tomorrow's weather",
            "To make new rocks"
        ],

        explanation:
            "Fossils are one of the best sources of evidence about ancient life on Earth.",

        difficulty: 2,
        correctAnswer: "To learn about life on Earth long ago",
        estimatedSeconds: 20,

        tags: ["science", "rocks", "fossils", "history"]
    }

    ]

};