import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const skeletons: SkillContent = {

    skillId: "skeletons",

    title: "Skeletons",

    description:
        "Learn about the purpose of skeletons in humans and other animals.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

{
    id: "sci-skeletons-001",
    skillId: "skeletons",
    question: "What is a skeleton?",
    stage: "recognise",
    options: [
        "A framework of bones inside the body",
        "A type of muscle",
        "The skin covering the body",
        "The food an animal eats"
    ],

    hint:
        "Think about the hard structure inside your body that gives it shape and support.",

    explanation:
        "A skeleton is the framework of bones that supports the body.",

    difficulty: 1,
    correctAnswer: "A framework of bones inside the body",
    estimatedSeconds: 10,

    tags: [
        "science",
        "animals",
        "skeleton"
    ]
},

{
    id: "sci-skeletons-002",
    skillId: "skeletons",
    question: "What is one main job of a skeleton?",
    stage: "recognise",
    options: [
        "To support the body",
        "To digest food",
        "To pump blood",
        "To make oxygen"
    ],

    hint:
        "Without this job, your body would not keep its shape or stand upright.",

    explanation:
        "A skeleton gives the body shape and support.",

    difficulty: 1,
    correctAnswer: "To support the body",
    estimatedSeconds: 15,

    tags: [
        "science",
        "animals",
        "skeleton",
        "support"
    ]
},

{
    id: "sci-skeletons-003",
    skillId: "skeletons",
    question: "Which part of your body is protected by the skull?",
    stage: "recognise",
    options: [
        "The brain",
        "The stomach",
        "The lungs",
        "The hand"
    ],

    hint:
        "The skull surrounds the organ that controls your thoughts, senses and movements.",

    explanation:
        "The skull protects the brain from injury.",

    difficulty: 1,
    correctAnswer: "The brain",
    estimatedSeconds: 15,

    tags: [
        "science",
        "animals",
        "skeleton",
        "protection"
    ]
},

{
    id: "sci-skeletons-004",
    skillId: "skeletons",
    question: "Which body part helps protect your heart and lungs?",
    stage: "recognise",
    options: [
        "The rib cage",
        "The foot",
        "The jaw",
        "The fingers"
    ],

    hint:
        "Think about the curved bones that surround your chest.",

    explanation:
        "The rib cage surrounds and protects the heart and lungs.",

    difficulty: 1,
    correctAnswer: "The rib cage",
    estimatedSeconds: 15,

    tags: [
        "science",
        "animals",
        "skeleton",
        "protection"
    ]
},

{
    id: "sci-skeletons-005",
    skillId: "skeletons",
    question: "Why do humans need a skeleton?",
    stage: "recognise",
    options: [
        "To support, protect and help the body move",
        "To make food",
        "To breathe",
        "To digest food"
    ],

    hint:
        "Choose the answer that includes all of the skeleton's main jobs rather than just one body process.",

    explanation:
        "The skeleton supports the body, protects organs and works with muscles to help us move.",

    difficulty: 1,
    correctAnswer: "To support, protect and help the body move",
    estimatedSeconds: 15,

    tags: [
        "science",
        "humans",
        "skeleton"
    ]
},

{
    id: "sci-skeletons-006",
    skillId: "skeletons",
    question: "Which of these animals has a skeleton inside its body?",
    stage: "recognise",
    options: [
        "Dog",
        "Earthworm",
        "Jellyfish",
        "Slug"
    ],

    hint:
        "Look for the vertebrate—the animal with a backbone and internal bones.",

    explanation:
        "Dogs are vertebrates with an internal skeleton.",

    difficulty: 1,
    correctAnswer: "Dog",
    estimatedSeconds: 15,

    tags: [
        "science",
        "animals",
        "skeleton"
    ]
},

{
    id: "sci-skeletons-007",
    skillId: "skeletons",
    question: "What would happen if people had no skeleton?",
    stage: "recognise",
    options: [
        "They would not be able to stand upright.",
        "They would become taller.",
        "They would make their own food.",
        "Nothing would change."
    ],

    hint:
        "Imagine your body without any bones to give it shape or support.",

    explanation:
        "Without a skeleton, the body would not have support.",

    difficulty: 1,
    correctAnswer: "They would not be able to stand upright.",
    estimatedSeconds: 15,

    tags: [
        "science",
        "humans",
        "skeleton",
        "support"
    ]
},

{
    id: "sci-skeletons-008",
    skillId: "skeletons",
    question: "Which part of the skeleton protects the brain?",
    stage: "recognise",
    options: [
        "The skull",
        "The ribs",
        "The spine",
        "The leg bones"
    ],

    hint:
        "Choose the bone that forms a hard case around your head.",

    explanation:
        "The skull is a strong bone that protects the brain.",

    difficulty: 1,
    correctAnswer: "The skull",
    estimatedSeconds: 15,

    tags: [
        "science",
        "animals",
        "skeleton",
        "skull"
    ]
},

{
    id: "sci-skeletons-009",
    skillId: "skeletons",
    question: "Which statement is true?",
    stage: "recognise",
    options: [
        "Skeletons help animals move.",
        "Skeletons make food.",
        "Skeletons absorb water.",
        "Skeletons produce sunlight."
    ],

    hint:
        "Only one option describes something a skeleton actually does inside an animal's body.",

    explanation:
        "Skeletons work with muscles to help animals move.",

    difficulty: 1,
    correctAnswer: "Skeletons help animals move.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "movement",
        "skeleton"
    ]
},

{
    id: "sci-skeletons-010",
    skillId: "skeletons",
    question: "Which list gives three important jobs of a skeleton?",
    stage: "recognise",
    options: [
        "Support, protection and movement",
        "Digestion, breathing and hearing",
        "Making food, drinking and sleeping",
        "Growing leaves, flowers and fruit"
    ],

    hint:
        "Think about the three key roles you learn in science: holding you up, keeping organs safe and helping you move.",

    explanation:
        "The three main jobs of a skeleton are supporting the body, protecting organs and helping movement.",

    difficulty: 1,
    correctAnswer: "Support, protection and movement",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "skeleton",
        "support",
        "protection",
        "movement"
    ]
},
{
    id: "sci-skeletons-011",
    skillId: "skeletons",
    question: "What gives your body its shape?",
    stage: "recognise",
    options: [
        "Your skeleton",
        "Your hair",
        "Your skin",
        "Your clothes"
    ],

    hint:
        "Think about the hard framework inside your body that everything else is built around.",

    explanation:
        "The skeleton gives your body its shape and support.",

    difficulty: 2,
    correctAnswer: "Your skeleton",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "skeleton",
        "support"
    ]
},

{
    id: "sci-skeletons-012",
    skillId: "skeletons",
    question: "Which part of the skeleton protects the heart?",
    stage: "recognise",
    options: [
        "The rib cage",
        "The skull",
        "The arm bones",
        "The leg bones"
    ],

    hint:
        "Choose the bones that surround your chest rather than your head or limbs.",

    explanation:
        "The rib cage protects the heart and lungs.",

    difficulty: 2,
    correctAnswer: "The rib cage",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "skeleton",
        "protection"
    ]
},

{
    id: "sci-skeletons-013",
    skillId: "skeletons",
    question: "How does the skeleton help you move?",
    stage: "recognise",
    options: [
        "It works together with muscles.",
        "It makes food for the body.",
        "It pumps blood around the body.",
        "It helps you breathe."
    ],

    hint:
        "Bones cannot move by themselves—they need another body part to pull on them.",

    explanation:
        "Muscles pull on bones, allowing the body to move.",

    difficulty: 2,
    correctAnswer: "It works together with muscles.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "movement",
        "muscles",
        "skeleton"
    ]
},

{
    id: "sci-skeletons-014",
    skillId: "skeletons",
    question: "Which body part is protected by the rib cage?",
    stage: "recognise",
    options: [
        "The lungs",
        "The brain",
        "The eyes",
        "The feet"
    ],

    hint:
        "The rib cage surrounds the organs inside your chest, not those in your head or legs.",

    explanation:
        "The rib cage protects both the lungs and the heart.",

    difficulty: 2,
    correctAnswer: "The lungs",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "protection",
        "rib-cage"
    ]
},

{
    id: "sci-skeletons-015",
    skillId: "skeletons",
    question: "Which animal has an internal skeleton like a human?",
    stage: "recognise",
    options: [
        "Horse",
        "Snail",
        "Jellyfish",
        "Earthworm"
    ],

    hint:
        "Look for the vertebrate—the animal with a backbone and bones inside its body.",

    explanation:
        "A horse is a vertebrate with an internal skeleton.",

    difficulty: 2,
    correctAnswer: "Horse",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "vertebrates",
        "skeleton"
    ]
},

{
    id: "sci-skeletons-016",
    skillId: "skeletons",
    question: "Why is the skull made of strong bone?",
    stage: "recognise",
    options: [
        "To protect the brain",
        "To help you breathe",
        "To digest food",
        "To make blood"
    ],

    hint:
        "Think about the very important organ inside your head that needs a hard protective case.",

    explanation:
        "The brain is an important organ, so it is protected by the strong skull.",

    difficulty: 2,
    correctAnswer: "To protect the brain",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "skull",
        "protection"
    ]
},

{
    id: "sci-skeletons-017",
    skillId: "skeletons",
    question: "Which body part is NOT protected by the skull?",
    stage: "recognise",
    options: [
        "The heart",
        "The brain",
        "The cerebrum",
        "The cerebellum"
    ],

    hint:
        "Three options are all found inside your head. Choose the organ located in your chest.",

    explanation:
        "The heart is protected by the rib cage, not the skull.",

    difficulty: 2,
    correctAnswer: "The heart",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "skull",
        "protection"
    ]
},

{
    id: "sci-skeletons-018",
    skillId: "skeletons",
    question: "What would happen if your skeleton could not support your body?",
    stage: "recognise",
    options: [
        "You would struggle to stand or sit upright.",
        "You would grow taller.",
        "You would no longer need muscles.",
        "You could run faster."
    ],

    hint:
        "Imagine trying to stand if your body had no firm framework holding it up.",

    explanation:
        "The skeleton provides the support needed to hold the body upright.",

    difficulty: 2,
    correctAnswer: "You would struggle to stand or sit upright.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "support",
        "skeleton"
    ]
},

{
    id: "sci-skeletons-019",
    skillId: "skeletons",
    question: "Which statement about skeletons is correct?",
    stage: "recognise",
    options: [
        "They protect important organs and help movement.",
        "They make food using sunlight.",
        "They absorb water from the soil.",
        "They produce oxygen."
    ],

    hint:
        "Only one answer matches the real jobs of a skeleton in animals.",

    explanation:
        "Skeletons support the body, protect organs and work with muscles to help movement.",

    difficulty: 2,
    correctAnswer: "They protect important organs and help movement.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "skeleton",
        "movement",
        "protection"
    ]
},

{
    id: "sci-skeletons-020",
    skillId: "skeletons",
    question: "Which sentence best describes the purpose of a skeleton?",
    stage: "recognise",
    options: [
        "It supports the body, protects organs and helps movement.",
        "It makes food for the body.",
        "It absorbs nutrients from the soil.",
        "It pumps blood around the body."
    ],

    hint:
        "The correct answer should include all three main functions of a skeleton, not just one.",

    explanation:
        "The skeleton has three main jobs: support, protection and movement.",

    difficulty: 2,
    correctAnswer: "It supports the body, protects organs and helps movement.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "skeleton",
        "support",
        "protection",
        "movement"
    ]
},
    ]

};

export default skeletons;

export {
    skeletons
};