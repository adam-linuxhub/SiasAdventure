import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const inference: SkillContent = {

    skillId: "inference",

    title: "Inference",

    description:
        "Learn how to use clues in a text to work out information that is not directly stated.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-inf-001",
        skillId: "inference",
        question:
            "Read the passage:\n\nElla put on her coat, scarf and gloves before leaving the house.\n\nWhat is the weather probably like?",
        stage: "recognise",
        options: [
            "Cold",
            "Hot",
            "Windy",
            "Stormy"
        ],

        explanation:
            "The text doesn't say it is cold, but wearing a coat, scarf and gloves gives us that clue.",

        difficulty: 1,
        correctAnswer: "Cold",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-002",
        skillId: "inference",
        question:
            "Read the passage:\n\nBen rubbed his eyes and let out a big yawn.\n\nHow is Ben probably feeling?",
        stage: "recognise",
        options: [
            "Tired",
            "Hungry",
            "Excited",
            "Angry"
        ],

        explanation:
            "Yawning and rubbing your eyes are clues that someone is tired.",

        difficulty: 1,
        correctAnswer: "Tired",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-003",
        skillId: "inference",
        question:
            "Read the passage:\n\nSophie held an umbrella while raindrops splashed into puddles.\n\nWhat is the weather probably like?",
        stage: "recognise",
        options: [
            "Rainy",
            "Sunny",
            "Snowy",
            "Foggy"
        ],

        explanation:
            "Umbrellas, raindrops and puddles all suggest it is raining.",

        difficulty: 1,
        correctAnswer: "Rainy",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-004",
        skillId: "inference",
        question:
            "Read the passage:\n\nJack smiled from ear to ear after scoring the winning goal.\n\nHow is Jack probably feeling?",
        stage: "recognise",
        options: [
            "Happy",
            "Scared",
            "Confused",
            "Bored"
        ],

        explanation:
            "Smiling after scoring the winning goal suggests Jack feels happy.",

        difficulty: 1,
        correctAnswer: "Happy",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-005",
        skillId: "inference",
        question:
            "Read the passage:\n\nThe puppy wagged its tail and jumped around when Mia came home.\n\nHow does the puppy probably feel?",
        stage: "recognise",
        options: [
            "Excited",
            "Sleepy",
            "Cross",
            "Frightened"
        ],

        explanation:
            "Wagging its tail and jumping are clues that the puppy is excited.",

        difficulty: 1,
        correctAnswer: "Excited",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-006",
        skillId: "inference",
        question:
            "Read the passage:\n\nTom covered his ears when the fireworks began.\n\nWhy did Tom cover his ears?",
        stage: "recognise",
        options: [
            "The fireworks were loud.",
            "He was hungry.",
            "He was reading.",
            "He was cold."
        ],

        explanation:
            "People often cover their ears when sounds are very loud.",

        difficulty: 1,
        correctAnswer: "The fireworks were loud.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-007",
        skillId: "inference",
        question:
            "Read the passage:\n\nThe ice cream dripped down Ava's hand before she could finish it.\n\nWhat can you infer?",
        stage: "recognise",
        options: [
            "The weather was warm.",
            "It was snowing.",
            "It was bedtime.",
            "The shop was closed."
        ],

        explanation:
            "Ice cream melts quickly in warm weather.",

        difficulty: 1,
        correctAnswer: "The weather was warm.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-008",
        skillId: "inference",
        question:
            "Read the passage:\n\nLeo looked everywhere before finding his homework under the sofa.\n\nHow did Leo probably feel before he found it?",
        stage: "recognise",
        options: [
            "Worried",
            "Proud",
            "Sleepy",
            "Hungry"
        ],

        explanation:
            "Looking everywhere suggests Leo was worried he had lost it.",

        difficulty: 1,
        correctAnswer: "Worried",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-009",
        skillId: "inference",
        question:
            "Read the passage:\n\nThe audience clapped loudly when the play finished.\n\nWhat can you infer?",
        stage: "recognise",
        options: [
            "They enjoyed the play.",
            "They were leaving school.",
            "They were tired.",
            "They wanted lunch."
        ],

        explanation:
            "People usually clap loudly when they enjoy a performance.",

        difficulty: 1,
        correctAnswer: "They enjoyed the play.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-010",
        skillId: "inference",
        question:
            "What does inference mean when reading?",
        stage: "recognise",
        options: [
            "Using clues to work out information that is not directly stated",
            "Copying words from the text",
            "Looking up words in a dictionary",
            "Reading aloud"
        ],

        explanation:
            "Inference means using clues from the text together with what you already know.",

        difficulty: 1,
        correctAnswer: "Using clues to work out information that is not directly stated",
        estimatedSeconds: 20,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-011",
        skillId: "inference",
        question:
            "Read the passage:\n\nMaya carefully carried the birthday cake with both hands and walked very slowly.\n\nWhy did Maya walk slowly?",
        stage: "recognise",
        options: [
            "She did not want to drop the cake.",
            "She had hurt her foot.",
            "She was looking for her shoes.",
            "She was talking on the phone."
        ],

        explanation:
            "Carrying a cake carefully suggests she wanted to avoid dropping it.",

        difficulty: 2,
        correctAnswer: "She did not want to drop the cake.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-012",
        skillId: "inference",
        question:
            "Read the passage:\n\nOliver closed the curtains and switched on the lamp.\n\nWhat can you infer?",
        stage: "recognise",
        options: [
            "It was becoming dark.",
            "It was lunchtime.",
            "It was raining heavily.",
            "It was very noisy."
        ],

        explanation:
            "People usually switch on a lamp when it is getting dark.",

        difficulty: 2,
        correctAnswer: "It was becoming dark.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-013",
        skillId: "inference",
        question:
            "Read the passage:\n\nThe children were wearing sun hats and drinking plenty of water during their walk.\n\nWhat can you infer?",
        stage: "recognise",
        options: [
            "It was a hot day.",
            "It was snowing.",
            "It was very windy.",
            "It was night-time."
        ],

        explanation:
            "Sun hats and drinking water are clues that the weather is hot.",

        difficulty: 2,
        correctAnswer: "It was a hot day.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-014",
        skillId: "inference",
        question:
            "Read the passage:\n\nRuby's hands were shaking before she walked onto the stage.\n\nHow was Ruby probably feeling?",
        stage: "recognise",
        options: [
            "Nervous",
            "Sleepy",
            "Relaxed",
            "Bored"
        ],

        explanation:
            "Shaking hands before a performance often show that someone is nervous.",

        difficulty: 2,
        correctAnswer: "Nervous",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-015",
        skillId: "inference",
        question:
            "Read the passage:\n\nDad swept up the broken pieces of a plate from the kitchen floor.\n\nWhat probably happened earlier?",
        stage: "recognise",
        options: [
            "The plate was dropped.",
            "The plate was washed.",
            "The plate was put away.",
            "The plate was bought."
        ],

        explanation:
            "Broken pieces on the floor suggest the plate had been dropped.",

        difficulty: 2,
        correctAnswer: "The plate was dropped.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-016",
        skillId: "inference",
        question:
            "Read the passage:\n\nThe classroom was silent while everyone bent over their papers.\n\nWhat were the children probably doing?",
        stage: "recognise",
        options: [
            "Taking a test",
            "Playing football",
            "Eating lunch",
            "Singing songs"
        ],

        explanation:
            "A quiet classroom with everyone focused on papers suggests they are taking a test.",

        difficulty: 2,
        correctAnswer: "Taking a test",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-017",
        skillId: "inference",
        question:
            "Read the passage:\n\nAmir packed a towel, swimming costume and goggles into his bag.\n\nWhere is Amir probably going?",
        stage: "recognise",
        options: [
            "Swimming",
            "Cycling",
            "Shopping",
            "Camping"
        ],

        explanation:
            "These items are all clues that Amir is going swimming.",

        difficulty: 2,
        correctAnswer: "Swimming",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-018",
        skillId: "inference",
        question:
            "Read the passage:\n\nThe leaves fell from the trees and children kicked through them.\n\nWhich season is it most likely to be?",
        stage: "recognise",
        options: [
            "Autumn",
            "Spring",
            "Summer",
            "Winter"
        ],

        explanation:
            "Falling leaves are a clue that it is autumn.",

        difficulty: 2,
        correctAnswer: "Autumn",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-019",
        skillId: "inference",
        question:
            "Read the passage:\n\nThe puppy hid under the table when it heard the thunder.\n\nWhy did the puppy hide?",
        stage: "recognise",
        options: [
            "It was frightened.",
            "It was hungry.",
            "It wanted to sleep.",
            "It was looking for food."
        ],

        explanation:
            "Hiding during thunder suggests the puppy felt frightened.",

        difficulty: 2,
        correctAnswer: "It was frightened.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    },

    {
        id: "eng-inf-020",
        skillId: "inference",
        question:
            "When answering an inference question, what should you do?",
        stage: "recognise",
        options: [
            "Use clues from the text and what you already know.",
            "Only copy words from the passage.",
            "Guess without reading.",
            "Ignore the passage."
        ],

        explanation:
            "Good readers combine clues from the text with their own knowledge to make sensible inferences.",

        difficulty: 2,
        correctAnswer: "Use clues from the text and what you already know.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "inference"]
    }

    ]

};


export default inference;

export {

    inference

};
