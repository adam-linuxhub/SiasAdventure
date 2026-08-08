import {
MultipleChoiceActivity,
SkillContent
} from "../../../types";

const fossils: SkillContent = {

skillId: "fossils",

title: "Fossils",

description:
    "Learn how fossils are formed and what they can tell us about plants and animals that lived millions of years ago.",

version: 1,

activities: <MultipleChoiceActivity[]>[

{
    id: "sci-fossils-001",
    skillId: "fossils",
    question: "What is a fossil?",
    stage: "recognise",
    options: [
        "The preserved remains or trace of a living thing",
        "A type of living rock",
        "A new plant",
        "A kind of animal"
    ],

    explanation:
        "A fossil is the preserved remains or trace of a plant or animal that lived long ago.",

    hint:
        "Think about something from a plant or animal that has been kept from the distant past.",

    difficulty: 1,
    correctAnswer: "The preserved remains or trace of a living thing",
    estimatedSeconds: 15,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-002",
    skillId: "fossils",
    question: "Where are fossils usually found?",
    stage: "recognise",
    options: [
        "Inside rocks",
        "In clouds",
        "On tree leaves",
        "In rivers"
    ],

    explanation:
        "Most fossils are found inside sedimentary rocks.",

    hint:
        "Fossils are protected when they become part of layers of rock.",

    difficulty: 1,
    correctAnswer: "Inside rocks",
    estimatedSeconds: 15,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-003",
    skillId: "fossils",
    question: "A fossil can come from a...",
    stage: "recognise",
    options: [
        "Plant or animal",
        "Cloud",
        "Rainbow",
        "Moon"
    ],

    explanation:
        "Fossils can be formed from both plants and animals.",

    hint:
        "Fossils are clues about living things, not objects found in space or the sky.",

    difficulty: 1,
    correctAnswer: "Plant or animal",
    estimatedSeconds: 15,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-004",
    skillId: "fossils",
    question: "Which of these could become a fossil?",
    stage: "recognise",
    options: [
        "A dinosaur bone",
        "A plastic bottle",
        "A toy car",
        "A mobile phone"
    ],

    explanation:
        "Bones can sometimes become fossils after millions of years.",

    hint:
        "Look for something that was once part of a living creature.",

    difficulty: 1,
    correctAnswer: "A dinosaur bone",
    estimatedSeconds: 15,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-005",
    skillId: "fossils",
    question: "What can fossils teach us?",
    stage: "recognise",
    options: [
        "What living things were like long ago",
        "Tomorrow's weather",
        "How to build houses",
        "How fast cars can go"
    ],

    explanation:
        "Fossils help scientists learn about plants and animals from the distant past.",

    hint:
        "Fossils are like clues left behind by living things from long ago.",

    difficulty: 1,
    correctAnswer: "What living things were like long ago",
    estimatedSeconds: 15,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-006",
    skillId: "fossils",
    question: "Which scientist studies fossils?",
    stage: "recognise",
    options: [
        "A palaeontologist",
        "A chef",
        "A pilot",
        "A firefighter"
    ],

    explanation:
        "A palaeontologist studies fossils to learn about ancient life.",

    hint:
        "Choose the scientist whose job is to study ancient plants and animals.",

    difficulty: 1,
    correctAnswer: "A palaeontologist",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils", "scientists"]
},

{
    id: "sci-fossils-007",
    skillId: "fossils",
    question: "Which animal is often known from fossils?",
    stage: "recognise",
    options: [
        "Dinosaur",
        "Cat",
        "Rabbit",
        "Dog"
    ],

    explanation:
        "Many dinosaurs are known only because their fossils have been discovered.",

    hint:
        "Think of an animal that lived millions of years ago and is often studied through fossils.",

    difficulty: 1,
    correctAnswer: "Dinosaur",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils", "dinosaurs"]
},

{
    id: "sci-fossils-008",
    skillId: "fossils",
    question: "How old are many fossils?",
    stage: "recognise",
    options: [
        "Millions of years old",
        "One day old",
        "One week old",
        "One month old"
    ],

    explanation:
        "Many fossils were formed millions of years ago.",

    hint:
        "Fossils come from a very long time in Earth's history.",

    difficulty: 1,
    correctAnswer: "Millions of years old",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-009",
    skillId: "fossils",
    question: "Which of these might be found as a fossil?",
    stage: "recognise",
    options: [
        "A shell",
        "A balloon",
        "An ice cube",
        "A paper aeroplane"
    ],

    explanation:
        "Shells are one of the most common fossils found in rocks.",

    hint:
        "Hard parts of living things are more likely to leave fossil evidence.",

    difficulty: 1,
    correctAnswer: "A shell",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-010",
    skillId: "fossils",
    question: "Why are fossils important?",
    stage: "recognise",
    options: [
        "They tell us about life in the past",
        "They make rocks grow",
        "They change the weather",
        "They produce electricity"
    ],

    explanation:
        "Fossils give scientists clues about Earth's history.",

    hint:
        "Scientists use fossils to discover what Earth was like before humans.",

    difficulty: 1,
    correctAnswer: "They tell us about life in the past",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils"]
},

 {
    id: "sci-fossils-015",
    skillId: "fossils",
    question: "What do scientists compare when studying fossils?",
    stage: "recognise",
    options: [
        "Their shapes and sizes",
        "Their voices",
        "Their favourite foods",
        "Their feelings"
    ],

    explanation:
        "Comparing fossil shapes helps scientists identify ancient living things.",

    hint:
        "Scientists look at physical features of fossils to work out what they came from.",

    difficulty: 2,
    correctAnswer: "Their shapes and sizes",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-016",
    skillId: "fossils",
    question: "Why do fossils help us understand Earth's history?",
    stage: "recognise",
    options: [
        "They show what lived in the past",
        "They predict earthquakes",
        "They stop erosion",
        "They create new rocks"
    ],

    explanation:
        "Fossils provide evidence of life from millions of years ago.",

    hint:
        "Fossils are clues about living things that existed before people were around.",

    difficulty: 2,
    correctAnswer: "They show what lived in the past",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils", "history"]
},

{
    id: "sci-fossils-017",
    skillId: "fossils",
    question: "A fossil of a fish is found on a mountain. What might this suggest?",
    stage: "recognise",
    options: [
        "The area was once covered by water",
        "Fish can climb mountains",
        "The mountain is underwater today",
        "The fossil is not real"
    ],

    explanation:
        "Fish fossils found high on land can show that the area was once beneath the sea.",

    hint:
        "Think about where fish normally live and what the land may have been like long ago.",

    difficulty: 2,
    correctAnswer: "The area was once covered by water",
    estimatedSeconds: 25,

    tags: ["science", "rocks", "fossils", "evidence"]
},

{
    id: "sci-fossils-018",
    skillId: "fossils",
    question: "Why are dinosaur fossils exciting to scientists?",
    stage: "recognise",
    options: [
        "They provide evidence about animals that are now extinct",
        "They can hatch into dinosaurs",
        "They are still alive",
        "They make new rocks"
    ],

    explanation:
        "Dinosaur fossils help scientists understand extinct animals.",

    hint:
        "Dinosaur fossils are important because they tell us about creatures that no longer exist.",

    difficulty: 2,
    correctAnswer: "They provide evidence about animals that are now extinct",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils", "dinosaurs"]
},

{
    id: "sci-fossils-019",
    skillId: "fossils",
    question: "Which statement about fossils is true?",
    stage: "recognise",
    options: [
        "They provide evidence of past life",
        "They are living animals",
        "They only form in water",
        "They are all dinosaur bones"
    ],

    explanation:
        "Fossils include many different plants, animals and traces of ancient life.",

    hint:
        "Fossils can come from many types of living things and show what existed before.",

    difficulty: 2,
    correctAnswer: "They provide evidence of past life",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils"]
},

{
    id: "sci-fossils-020",
    skillId: "fossils",
    question: "What is the main reason scientists study fossils?",
    stage: "recognise",
    options: [
        "To learn about life on Earth long ago",
        "To discover new planets",
        "To predict tomorrow's weather",
        "To make new rocks"
    ],

    explanation:
        "Fossils are one of the best sources of evidence about ancient life on Earth.",

    hint:
        "Scientists study fossils to discover what plants and animals were like in the past.",

    difficulty: 2,
    correctAnswer: "To learn about life on Earth long ago",
    estimatedSeconds: 20,

    tags: ["science", "rocks", "fossils", "history"]
}

]
};

export default fossils;

export {
    fossils
};
