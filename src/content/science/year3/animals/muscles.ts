import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const muscles: SkillContent = {

    skillId: "muscles",

    title: "Muscles",

    description:
        "Learn how muscles work with the skeleton to help humans and other animals move.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "sci-muscles-001",
            skillId: "muscles",
            question: "What do muscles help your body do?",
            stage: "recognise",
            options: [
                "Move",
                "Make food",
                "Grow leaves",
                "Absorb water"
            ],

            hint:
                "Think about what happens every time you walk, run or wave your hand.",

            explanation:
                "Muscles work with your skeleton to help your body move.",

            difficulty: 1,
            correctAnswer: "Move",
            estimatedSeconds: 10,

            tags: [
                "science",
                "animals",
                "muscles",
                "movement"
            ]
        },

        {
            id: "sci-muscles-002",
            skillId: "muscles",
            question: "Muscles work together with which part of the body?",
            stage: "recognise",
            options: [
                "The skeleton",
                "The hair",
                "The teeth",
                "The skin"
            ],

            hint:
                "Muscles need something strong to pull against to make movement happen.",

            explanation:
                "Muscles pull on bones to make the body move.",

            difficulty: 1,
            correctAnswer: "The skeleton",
            estimatedSeconds: 15,

            tags: [
                "science",
                "animals",
                "muscles",
                "skeleton"
            ]
        },

        {
            id: "sci-muscles-003",
            skillId: "muscles",
            question: "Which activity uses your muscles?",
            stage: "recognise",
            options: [
                "Running",
                "Sleeping",
                "Growing taller",
                "Digesting food"
            ],

            hint:
                "Choose the activity where you deliberately move your arms and legs.",

            explanation:
                "Running requires many muscles to work together with your skeleton.",

            difficulty: 1,
            correctAnswer: "Running",
            estimatedSeconds: 15,

            tags: [
                "science",
                "animals",
                "muscles",
                "movement"
            ]
        },

        {
            id: "sci-muscles-004",
            skillId: "muscles",
            question: "What happens when muscles pull on bones?",
            stage: "recognise",
            options: [
                "The body moves",
                "The bones disappear",
                "The muscles make food",
                "The skin changes colour"
            ],

            hint:
                "Muscles create action by pulling, not by changing the bones themselves.",

            explanation:
                "Muscles pull on bones to create movement at the joints.",

            difficulty: 1,
            correctAnswer: "The body moves",
            estimatedSeconds: 15,

            tags: [
                "science",
                "animals",
                "muscles",
                "movement"
            ]
        },

        {
            id: "sci-muscles-005",
            skillId: "muscles",
            question: "Which body part contains muscles?",
            stage: "recognise",
            options: [
                "Your arms",
                "Only your head",
                "Only your fingers",
                "Only your feet"
            ],

            hint:
                "Think about which body part bends and lifts objects using large muscles.",

            explanation:
                "Muscles are found all over your body, including your arms, legs and back.",

            difficulty: 1,
            correctAnswer: "Your arms",
            estimatedSeconds: 15,

            tags: [
                "science",
                "animals",
                "muscles"
            ]
        },

        {
            id: "sci-muscles-006",
            skillId: "muscles",
            question: "Why are muscles important?",
            stage: "recognise",
            options: [
                "They help us move",
                "They make sunlight",
                "They protect the brain",
                "They absorb water"
            ],

            hint:
                "Imagine trying to stand up or wave without muscles. What would you be unable to do?",

            explanation:
                "Without muscles, we would not be able to move our bodies.",

            difficulty: 1,
            correctAnswer: "They help us move",
            estimatedSeconds: 15,

            tags: [
                "science",
                "animals",
                "muscles",
                "movement"
            ]
        },

        {
            id: "sci-muscles-007",
            skillId: "muscles",
            question: "Which of these actions needs muscles?",
            stage: "recognise",
            options: [
                "Jumping",
                "Growing a flower",
                "Making rain",
                "Shining like the Sun"
            ],

            hint:
                "Only one option is something a person can do by moving their body.",

            explanation:
                "Jumping uses many muscles working together.",

            difficulty: 1,
            correctAnswer: "Jumping",
            estimatedSeconds: 15,

            tags: [
                "science",
                "animals",
                "muscles",
                "movement"
            ]
        },

        {
            id: "sci-muscles-008",
            skillId: "muscles",
            question: "What do muscles pull on to make you move?",
            stage: "recognise",
            options: [
                "Bones",
                "Hair",
                "Teeth",
                "Skin"
            ],

            hint:
                "Think about the hard parts inside your body that give it shape and support.",

            explanation:
                "Muscles pull on bones to create movement.",

            difficulty: 1,
            correctAnswer: "Bones",
            estimatedSeconds: 15,

            tags: [
                "science",
                "animals",
                "muscles",
                "bones"
            ]
        },

        {
            id: "sci-muscles-009",
            skillId: "muscles",
            question: "Which pair works together to help you move?",
            stage: "recognise",
            options: [
                "Muscles and skeleton",
                "Hair and nails",
                "Teeth and tongue",
                "Skin and ears"
            ],

            hint:
                "One part provides the pulling force while the other provides the framework.",

            explanation:
                "Movement happens because muscles pull on the skeleton.",

            difficulty: 1,
            correctAnswer: "Muscles and skeleton",
            estimatedSeconds: 20,

            tags: [
                "science",
                "animals",
                "muscles",
                "skeleton",
                "movement"
            ]
        },

        {
            id: "sci-muscles-010",
            skillId: "muscles",
            question: "Which statement is correct?",
            stage: "recognise",
            options: [
                "Muscles help animals move.",
                "Muscles make food.",
                "Muscles absorb minerals from the soil.",
                "Muscles protect the Sun."
            ],

            hint:
                "Only one statement describes the real job of muscles in animals.",

            explanation:
                "Muscles are used for movement in humans and many other animals.",

            difficulty: 1,
            correctAnswer: "Muscles help animals move.",
            estimatedSeconds: 20,

            tags: [
                "science",
                "animals",
                "muscles",
                "movement"
            ]
        },
        {
    id: "sci-muscles-011",
    skillId: "muscles",
    question: "Why do muscles need bones to help the body move?",
    stage: "recognise",
    options: [
        "Muscles pull on bones to create movement.",
        "Bones pull on muscles.",
        "Bones make muscles grow.",
        "Muscles move without bones."
    ],

    hint:
        "Muscles can only pull. Think about what they pull against to move your body.",

    explanation:
        "Muscles contract and pull on bones, allowing the body to move.",

    difficulty: 2,
    correctAnswer: "Muscles pull on bones to create movement.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "muscles",
        "bones",
        "movement"
    ]
},

{
    id: "sci-muscles-012",
    skillId: "muscles",
    question: "Which activity uses muscles?",
    stage: "recognise",
    options: [
        "Climbing a ladder",
        "Growing a flower",
        "Making sunlight",
        "Absorbing water"
    ],

    hint:
        "Choose the option where a person must lift and move their body using their arms and legs.",

    explanation:
        "Climbing uses many muscles working together with the skeleton.",

    difficulty: 2,
    correctAnswer: "Climbing a ladder",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "muscles",
        "movement"
    ]
},

{
    id: "sci-muscles-013",
    skillId: "muscles",
    question: "What happens when a muscle contracts?",
    stage: "recognise",
    options: [
        "It becomes shorter and pulls on a bone.",
        "It becomes longer and pushes a bone.",
        "It turns into bone.",
        "It makes food."
    ],

    hint:
        "Muscles create movement by tightening rather than pushing.",

    explanation:
        "A contracting muscle becomes shorter and pulls on a bone to create movement.",

    difficulty: 2,
    correctAnswer: "It becomes shorter and pulls on a bone.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "muscles",
        "movement"
    ]
},

{
    id: "sci-muscles-014",
    skillId: "muscles",
    question: "Which body parts work together to help you kick a ball?",
    stage: "recognise",
    options: [
        "Muscles and bones",
        "Hair and skin",
        "Teeth and tongue",
        "Eyes and ears"
    ],

    hint:
        "One part provides strength to pull, while the other acts as a firm framework.",

    explanation:
        "Your muscles pull on your bones to move your legs.",

    difficulty: 2,
    correctAnswer: "Muscles and bones",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "muscles",
        "bones"
    ]
},

{
    id: "sci-muscles-015",
    skillId: "muscles",
    question: "Which statement about muscles is true?",
    stage: "recognise",
    options: [
        "Muscles help animals move.",
        "Muscles make sunlight.",
        "Muscles protect the brain.",
        "Muscles absorb minerals from the soil."
    ],

    hint:
        "Only one answer describes a job that muscles actually perform in animals.",

    explanation:
        "The main job of muscles is to work with bones to create movement.",

    difficulty: 2,
    correctAnswer: "Muscles help animals move.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "muscles"
    ]
},

{
    id: "sci-muscles-016",
    skillId: "muscles",
    question: "Why do people need muscles?",
    stage: "recognise",
    options: [
        "To move different parts of their body",
        "To make food",
        "To pump blood around the body",
        "To absorb water"
    ],

    hint:
        "Think about what would be impossible if your arms and legs could not move.",

    explanation:
        "Without muscles, people would not be able to move their arms, legs or body.",

    difficulty: 2,
    correctAnswer: "To move different parts of their body",
    estimatedSeconds: 20,

    tags: [
        "science",
        "humans",
        "muscles",
        "movement"
    ]
},

{
    id: "sci-muscles-017",
    skillId: "muscles",
    question: "Which action would be difficult without muscles?",
    stage: "recognise",
    options: [
        "Walking",
        "Sleeping",
        "Listening",
        "Thinking"
    ],

    hint:
        "Choose the activity that depends on your legs moving your whole body from place to place.",

    explanation:
        "Walking depends on muscles pulling on the bones in your legs.",

    difficulty: 2,
    correctAnswer: "Walking",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "movement",
        "muscles"
    ]
},

{
    id: "sci-muscles-018",
    skillId: "muscles",
    question: "Which body part do muscles pull on?",
    stage: "recognise",
    options: [
        "Bones",
        "Hair",
        "Nails",
        "Skin"
    ],

    hint:
        "Think about the hard parts inside your body that act like levers for movement.",

    explanation:
        "Muscles are attached to bones and pull on them to create movement.",

    difficulty: 2,
    correctAnswer: "Bones",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "bones",
        "muscles"
    ]
},

{
    id: "sci-muscles-019",
    skillId: "muscles",
    question: "A runner is sprinting. Which body systems are working together?",
    stage: "recognise",
    options: [
        "Muscles and skeleton",
        "Hair and nails",
        "Teeth and tongue",
        "Eyes and ears"
    ],

    hint:
        "Running needs both a force to pull and a framework to support the body.",

    explanation:
        "Running happens because muscles pull on the skeleton.",

    difficulty: 2,
    correctAnswer: "Muscles and skeleton",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "muscles",
        "skeleton",
        "movement"
    ]
},

{
    id: "sci-muscles-020",
    skillId: "muscles",
    question: "Which sentence best describes the job of muscles?",
    stage: "recognise",
    options: [
        "Muscles contract to pull on bones and help the body move.",
        "Muscles make food from sunlight.",
        "Muscles absorb water from the soil.",
        "Muscles protect the heart."
    ],

    hint:
        "Look for the answer that explains both what muscles do and how they create movement.",

    explanation:
        "Muscles work with the skeleton to produce movement throughout the body.",

    difficulty: 2,
    correctAnswer: "Muscles contract to pull on bones and help the body move.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "animals",
        "muscles",
        "movement",
        "skeleton"
    ]
}

]

};

export default muscles;

export {
    muscles
};