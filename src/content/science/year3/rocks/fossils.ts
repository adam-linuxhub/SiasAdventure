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
                "A type of living rock found underground",
                "A newly formed plant growing in soil",
                "A kind of animal that lives inside rocks"
            ],

            explanation:
                "A fossil is the preserved remains or trace of a plant or animal that lived long ago.",

            hint:
                "Think about something from a plant or animal that has been preserved from the distant past.",

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
                "In clouds above the ground",
                "On the leaves of living trees",
                "Floating on the surface of rivers"
            ],

            explanation:
                "Most fossils are found inside sedimentary rocks.",

            hint:
                "Fossils can become protected when they are buried and surrounded by layers of rock.",

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
                "Cloud or rainbow",
                "Moon or distant planet",
                "Mountain or river"
            ],

            explanation:
                "Fossils can be formed from the remains or traces of both plants and animals.",

            hint:
                "Fossils provide clues about things that were once alive.",

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
                "A metal toy car",
                "A modern mobile phone"
            ],

            explanation:
                "Bones can sometimes become fossils after being buried and preserved for millions of years.",

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
                "What the weather will be tomorrow",
                "How modern buildings should be designed",
                "How quickly a modern car can travel"
            ],

            explanation:
                "Fossils help scientists learn about plants and animals from the distant past.",

            hint:
                "Fossils are clues left behind by living things that existed a very long time ago.",

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
                "A chef who studies food",
                "A pilot who flies aircraft",
                "A firefighter who tackles fires"
            ],

            explanation:
                "A palaeontologist studies fossils to learn about ancient life.",

            hint:
                "Choose the scientist whose work focuses on ancient plants, animals and their fossils.",

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
                "Domestic cat",
                "Wild rabbit",
                "Pet dog"
            ],

            explanation:
                "Many dinosaurs are known from fossil evidence because they lived millions of years ago.",

            hint:
                "Think of an animal that lived millions of years ago and is often studied through fossil evidence.",

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
                "Only a few days old",
                "Usually less than one month old",
                "About one year old"
            ],

            explanation:
                "Many fossils were formed millions of years ago.",

            hint:
                "Fossils come from a very distant part of Earth's history, long before humans existed.",

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
                "A rubber balloon",
                "A recently made paper aeroplane",
                "A frozen ice cube"
            ],

            explanation:
                "Shells are hard parts of living things that can sometimes be preserved as fossils.",

            hint:
                "Hard parts of ancient living things are more likely to leave fossil evidence.",

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
                "They make layers of rock grow",
                "They control changes in the weather",
                "They produce electricity underground"
            ],

            explanation:
                "Fossils give scientists evidence about living things and environments from Earth's past.",

            hint:
                "Scientists use fossils as clues to discover what Earth was like long ago.",

            difficulty: 1,
            correctAnswer: "They tell us about life in the past",
            estimatedSeconds: 20,

            tags: ["science", "rocks", "fossils"]
        },

        {
            id: "sci-fossils-011",
            skillId: "fossils",
            question: "How can a footprint become a fossil?",
            stage: "recognise",
            options: [
                "It can be preserved in rock",
                "It can grow into a new animal",
                "It can turn into fresh soil overnight",
                "It can become a living footprint"
            ],

            explanation:
                "A footprint can leave a trace in soft sediment that is later buried and preserved as rock.",

            hint:
                "A fossil does not always have to be part of an animal's body. Think about a mark or trace it could leave behind.",

            difficulty: 2,
            correctAnswer: "It can be preserved in rock",
            estimatedSeconds: 25,

            tags: ["science", "rocks", "fossils", "traces"]
        },

        {
            id: "sci-fossils-012",
            skillId: "fossils",
            question: "Why are fossils usually buried before they are preserved?",
            stage: "recognise",
            options: [
                "Burial can protect them from being destroyed",
                "Burial makes living animals grow larger",
                "Burial turns every fossil into a dinosaur",
                "Burial makes the fossil begin moving again"
            ],

            explanation:
                "Being buried by sediment can protect remains or traces from being destroyed and help them become preserved.",

            hint:
                "Think about what might happen to a bone or footprint if it was left exposed on the surface for a very long time.",

            difficulty: 2,
            correctAnswer: "Burial can protect them from being destroyed",
            estimatedSeconds: 25,

            tags: ["science", "rocks", "fossils", "preservation"]
        },

        {
            id: "sci-fossils-013",
            skillId: "fossils",
            question: "What might a fossilised leaf tell scientists?",
            stage: "recognise",
            options: [
                "Which plants lived in the past",
                "Exactly what the weather will be tomorrow",
                "Which modern animal ate the leaf",
                "How quickly today's trees will grow"
            ],

            explanation:
                "A fossilised leaf can provide evidence about plants that lived in an area long ago.",

            hint:
                "A fossilised leaf is evidence from an ancient plant. Think about what scientists could learn from it.",

            difficulty: 2,
            correctAnswer: "Which plants lived in the past",
            estimatedSeconds: 25,

            tags: ["science", "rocks", "fossils", "plants"]
        },

        {
            id: "sci-fossils-014",
            skillId: "fossils",
            question: "What can a fossil footprint show?",
            stage: "recognise",
            options: [
                "That an animal once moved through an area",
                "Exactly what the animal was thinking",
                "The animal's favourite food",
                "How the animal will behave today"
            ],

            explanation:
                "A fossil footprint is a trace that can show an animal once moved through an area.",

            hint:
                "A footprint is evidence of movement. Think about what scientists could learn from the shape and position of the prints.",

            difficulty: 2,
            correctAnswer: "That an animal once moved through an area",
            estimatedSeconds: 25,

            tags: ["science", "rocks", "fossils", "traces"]
        },
        {
    id: "sci-fossils-015",
    skillId: "fossils",
    question: "What do scientists compare when studying fossils?",
    stage: "recognise",
    options: [
        "Their shapes and sizes",
        "Their voices and sounds",
        "Their favourite foods",
        "Their feelings and emotions"
    ],

    explanation:
        "Comparing the shapes and sizes of fossils can help scientists identify the ancient living things they came from.",

    hint:
        "Scientists examine physical features that can be seen or measured. Think about the shape and size of a fossil.",

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
        "They predict when earthquakes will happen",
        "They prevent rocks from being worn away",
        "They create completely new types of rock"
    ],

    explanation:
        "Fossils provide evidence about plants and animals that lived millions of years ago.",

    hint:
        "Fossils are clues from long ago. Think about what they can tell us about ancient living things.",

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
        "Fish have learned to climb mountains",
        "The mountain must be underwater today",
        "The fossil cannot really be a fish"
    ],

    explanation:
        "Finding a fish fossil on land can provide evidence that the area was once covered by water, such as a sea.",

    hint:
        "Fish normally live in water. Think about what this fossil could tell us about the area millions of years ago.",

    difficulty: 2,
    correctAnswer: "The area was once covered by water",
    estimatedSeconds: 25,

    tags: ["science", "rocks", "fossils", "evidence"]
},

{
    id: "sci-fossils-018",
    skillId: "fossils",
    question: "Why are dinosaur fossils useful to scientists?",
    stage: "recognise",
    options: [
        "They provide evidence about animals that are now extinct",
        "They can sometimes hatch into living dinosaurs",
        "They prove that dinosaurs are still alive today",
        "They produce new rocks when they are discovered"
    ],

    explanation:
        "Dinosaur fossils provide evidence that helps scientists understand animals that are now extinct.",

    hint:
        "Dinosaurs no longer live on Earth. Think about how fossils can give us evidence about creatures from the past.",

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
        "They are living animals preserved inside rocks",
        "They can only form from animals that lived in water",
        "Every fossil is the preserved bone of a dinosaur"
    ],

    explanation:
        "Fossils provide evidence of ancient life and can come from many different plants, animals and traces.",

    hint:
        "Fossils can come from many kinds of ancient living things, not just dinosaurs.",

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
        "To discover planets beyond our Solar System",
        "To predict exactly what tomorrow's weather will be",
        "To find out how to make new rocks"
    ],

    explanation:
        "Fossils provide important evidence that helps scientists understand ancient life and Earth's history.",

    hint:
        "Think about the main clue fossils give us: they come from living things that existed a very long time ago.",

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