import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const howSoundsAreMade: SkillContent = {

    skillId: "howSoundsAreMade",

    title: "How Sounds Are Made",

    description:
        "Learn how sounds are made by vibrations and how those vibrations travel to our ears.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-sound-001",
        skillId: "howSoundsAreMade",
        question: "What causes a sound to be made?",

        options: [
            "Vibrations",
            "Light",
            "Heat",
            "Magnets"
        ],

        explanation:
            "Sounds are made when an object vibrates.",

        difficulty: 1,
        correctAnswer: "Vibrations",
        estimatedSeconds: 15,

        tags: ["science", "sound", "vibrations"]
    },

    {
        id: "sci-sound-002",
        skillId: "howSoundsAreMade",
        question: "What happens when you hit a drum?",

        options: [
            "The drum skin vibrates.",
            "The drum melts.",
            "The air freezes.",
            "The drum becomes magnetic."
        ],

        explanation:
            "The vibrating drum skin makes the sound.",

        difficulty: 1,
        correctAnswer: "The drum skin vibrates.",
        estimatedSeconds: 15,

        tags: ["science", "sound", "drum"]
    },

    {
        id: "sci-sound-003",
        skillId: "howSoundsAreMade",
        question: "Which object is vibrating when a guitar is played?",

        options: [
            "The strings",
            "The tuning pegs",
            "The bridge",
            "The body"
        ],

        explanation:
            "The strings vibrate to produce sound.",

        difficulty: 1,
        correctAnswer: "The strings",
        estimatedSeconds: 15,

        tags: ["science", "sound", "guitar"]
    },

    {
        id: "sci-sound-004",
        skillId: "howSoundsAreMade",
        question: "What do vibrations travel through to reach your ears?",

        options: [
            "The air",
            "Sunlight",
            "Shadows",
            "Magnets"
        ],

        explanation:
            "Sound usually travels through the air as vibrations.",

        difficulty: 1,
        correctAnswer: "The air",
        estimatedSeconds: 15,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-005",
        skillId: "howSoundsAreMade",
        question: "Which of these makes sound by vibrating?",

        options: [
            "A bell",
            "A shadow",
            "A mirror",
            "A magnet"
        ],

        explanation:
            "A bell vibrates when it is struck.",

        difficulty: 1,
        correctAnswer: "A bell",
        estimatedSeconds: 15,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-006",
        skillId: "howSoundsAreMade",
        question: "What part of your body detects sound?",

        options: [
            "Ears",
            "Eyes",
            "Hands",
            "Nose"
        ],

        explanation:
            "Your ears detect sound vibrations.",

        difficulty: 1,
        correctAnswer: "Ears",
        estimatedSeconds: 15,

        tags: ["science", "hearing"]
    },

    {
        id: "sci-sound-007",
        skillId: "howSoundsAreMade",
        question: "What happens when an object stops vibrating?",

        options: [
            "The sound stops.",
            "The sound gets louder.",
            "The sound becomes light.",
            "The object disappears."
        ],

        explanation:
            "No vibrations means no sound is produced.",

        difficulty: 1,
        correctAnswer: "The sound stops.",
        estimatedSeconds: 15,

        tags: ["science", "vibrations"]
    },

    {
        id: "sci-sound-008",
        skillId: "howSoundsAreMade",
        question: "Which musical instrument makes sound using vibrating strings?",

        options: [
            "Violin",
            "Drum",
            "Triangle",
            "Tambourine"
        ],

        explanation:
            "A violin makes sound when its strings vibrate.",

        difficulty: 1,
        correctAnswer: "Violin",
        estimatedSeconds: 20,

        tags: ["science", "sound", "instruments"]
    },

    {
        id: "sci-sound-009",
        skillId: "howSoundsAreMade",
        question: "Which statement is true?",

        options: [
            "Sound is made by vibrations.",
            "Sound is made by light.",
            "Sound is made by colour.",
            "Sound is made by shadows."
        ],

        explanation:
            "All sounds begin with vibrations.",

        difficulty: 1,
        correctAnswer: "Sound is made by vibrations.",
        estimatedSeconds: 20,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-010",
        skillId: "howSoundsAreMade",
        question: "What carries sound from a ringing bell to your ears?",

        options: [
            "Vibrations travelling through the air",
            "Light rays",
            "Magnets",
            "Electricity"
        ],

        explanation:
            "The vibrations travel through the air to your ears.",

        difficulty: 1,
        correctAnswer: "Vibrations travelling through the air",
        estimatedSeconds: 20,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-011",
        skillId: "howSoundsAreMade",
        question: "Why can you hear someone clapping their hands?",

        options: [
            "The clapping makes vibrations that travel through the air.",
            "The hands produce light.",
            "The air changes colour.",
            "The sound comes from the floor."
        ],

        explanation:
            "The clap creates vibrations that travel through the air.",

        difficulty: 2,
        correctAnswer: "The clapping makes vibrations that travel through the air.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "vibrations"]
    },

    {
        id: "sci-sound-012",
        skillId: "howSoundsAreMade",
        question: "What is vibrating when someone speaks?",

        options: [
            "Their vocal cords",
            "Their teeth",
            "Their nose",
            "Their eyes"
        ],

        explanation:
            "Vocal cords vibrate to produce sound when we speak.",

        difficulty: 2,
        correctAnswer: "Their vocal cords",
        estimatedSeconds: 20,

        tags: ["science", "sound", "human-body"]
    },

    {
        id: "sci-sound-013",
        skillId: "howSoundsAreMade",
        question: "Which object would make a sound if it vibrated?",

        options: [
            "A ruler hanging over the edge of a table",
            "A painted wall",
            "A photograph",
            "A sheet of paper lying flat"
        ],

        explanation:
            "A ruler can vibrate when it is flicked, making a sound.",

        difficulty: 2,
        correctAnswer: "A ruler hanging over the edge of a table",
        estimatedSeconds: 20,

        tags: ["science", "vibrations"]
    },

    {
        id: "sci-sound-014",
        skillId: "howSoundsAreMade",
        question: "Why is a drum quieter after you place your hand on it?",

        options: [
            "Your hand stops the drum vibrating.",
            "The drum becomes colder.",
            "The air disappears.",
            "The drum gets heavier."
        ],

        explanation:
            "Stopping the vibrations stops the sound.",

        difficulty: 2,
        correctAnswer: "Your hand stops the drum vibrating.",
        estimatedSeconds: 20,

        tags: ["science", "drum", "vibrations"]
    },

    {
        id: "sci-sound-015",
        skillId: "howSoundsAreMade",
        question: "Which sentence explains how sound reaches your ears?",

        options: [
            "Vibrations travel through the air to your ears.",
            "Light carries sound.",
            "Heat carries sound.",
            "Shadows carry sound."
        ],

        explanation:
            "Sound is made of vibrations travelling through a material such as air.",

        difficulty: 2,
        correctAnswer: "Vibrations travel through the air to your ears.",
        estimatedSeconds: 20,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-016",
        skillId: "howSoundsAreMade",
        question: "Why does plucking a guitar string make a sound?",

        options: [
            "The string vibrates.",
            "The string melts.",
            "The string changes colour.",
            "The string becomes magnetic."
        ],

        explanation:
            "The vibrating string pushes nearby air, creating sound waves.",

        difficulty: 2,
        correctAnswer: "The string vibrates.",
        estimatedSeconds: 20,

        tags: ["science", "guitar", "vibrations"]
    },

    {
        id: "sci-sound-017",
        skillId: "howSoundsAreMade",
        question: "Which activity would produce the loudest sound?",

        options: [
            "Hitting a drum firmly",
            "Touching a drum gently without moving it",
            "Looking at a drum",
            "Holding a drum still"
        ],

        explanation:
            "A stronger hit makes larger vibrations and a louder sound.",

        difficulty: 2,
        correctAnswer: "Hitting a drum firmly",
        estimatedSeconds: 20,

        tags: ["science", "sound", "drum"]
    },

    {
        id: "sci-sound-018",
        skillId: "howSoundsAreMade",
        question: "What must happen before any sound can be heard?",

        options: [
            "Something must vibrate.",
            "Something must glow.",
            "Something must melt.",
            "Something must freeze."
        ],

        explanation:
            "Every sound begins with vibrations.",

        difficulty: 2,
        correctAnswer: "Something must vibrate.",
        estimatedSeconds: 20,

        tags: ["science", "vibrations"]
    },

    {
        id: "sci-sound-019",
        skillId: "howSoundsAreMade",
        question: "Why can people hear a school bell from across the playground?",

        options: [
            "The sound vibrations travel through the air.",
            "The bell sends out light.",
            "The playground shakes.",
            "The wind makes the bell invisible."
        ],

        explanation:
            "Sound travels through the air from the bell to people's ears.",

        difficulty: 2,
        correctAnswer: "The sound vibrations travel through the air.",
        estimatedSeconds: 20,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-020",
        skillId: "howSoundsAreMade",
        question: "Which sentence best describes how sounds are made?",

        options: [
            "Sounds are made when objects vibrate and the vibrations travel through a material to our ears.",
            "Sounds are made by light travelling through the air.",
            "Sounds are made only by musical instruments.",
            "Sounds happen without anything moving."
        ],

        explanation:
            "All sounds begin with vibrations that travel through materials such as air before reaching our ears.",

        difficulty: 2,
        correctAnswer: "Sounds are made when objects vibrate and the vibrations travel through a material to our ears.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "vibrations", "hearing"]
    }

    ]

};