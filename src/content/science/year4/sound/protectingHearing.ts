import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const protectingHearing: SkillContent = {

    skillId: "protectingHearing",

    title: "Protecting Hearing",

    description:
        "Learn how loud sounds can affect hearing and discover simple ways to protect your ears.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-hearing-001",
        skillId: "protectingHearing",
        question: "Which part of your body is used for hearing?",
        stage: "recognise",
        options: [
            "Ears",
            "Eyes",
            "Hands",
            "Feet"
        ],

        explanation:
            "Your ears detect sound vibrations and allow you to hear.",

        difficulty: 1,
        correctAnswer: "Ears",
        estimatedSeconds: 15,

        tags: ["science", "sound", "hearing"]
    },

    {
        id: "sci-hearing-002",
        skillId: "protectingHearing",
        question: "Very loud sounds can...",
        stage: "recognise",
        options: [
            "Damage your hearing",
            "Improve your eyesight",
            "Change your hair colour",
            "Make you taller"
        ],

        explanation:
            "Very loud sounds can damage the delicate parts of your ears.",

        difficulty: 1,
        correctAnswer: "Damage your hearing",
        estimatedSeconds: 15,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-003",
        skillId: "protectingHearing",
        question: "Which activity is most likely to be very loud?",
        stage: "recognise",
        options: [
            "Watching fireworks",
            "Reading a book",
            "Drawing a picture",
            "Planting seeds"
        ],

        explanation:
            "Fireworks produce very loud sounds that can affect hearing.",

        difficulty: 1,
        correctAnswer: "Watching fireworks",
        estimatedSeconds: 15,

        tags: ["science", "hearing"]
    },

    {
        id: "sci-hearing-004",
        skillId: "protectingHearing",
        question: "What can you wear to protect your hearing in a very noisy place?",
        stage: "recognise",
        options: [
            "Ear defenders",
            "Sunglasses",
            "Gloves",
            "A scarf"
        ],

        explanation:
            "Ear defenders reduce the amount of loud sound reaching your ears.",

        difficulty: 1,
        correctAnswer: "Ear defenders",
        estimatedSeconds: 15,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-005",
        skillId: "protectingHearing",
        question: "If music is too loud through headphones, you should...",
        stage: "recognise",
        options: [
            "Turn the volume down",
            "Turn the volume up",
            "Shake the headphones",
            "Cover your eyes"
        ],

        explanation:
            "Keeping the volume lower helps protect your hearing.",

        difficulty: 1,
        correctAnswer: "Turn the volume down",
        estimatedSeconds: 15,

        tags: ["science", "hearing", "headphones"]
    },

    {
        id: "sci-hearing-006",
        skillId: "protectingHearing",
        question: "Which sound is usually safer for your ears?",
        stage: "recognise",
        options: [
            "A quiet conversation",
            "A jet taking off nearby",
            "A loud concert speaker",
            "A firework exploding beside you"
        ],

        explanation:
            "Quieter sounds are much less likely to damage hearing.",

        difficulty: 1,
        correctAnswer: "A quiet conversation",
        estimatedSeconds: 15,

        tags: ["science", "hearing"]
    },

    {
        id: "sci-hearing-007",
        skillId: "protectingHearing",
        question: "Why should you move away from a very loud sound if possible?",
        stage: "recognise",
        options: [
            "The sound becomes quieter.",
            "The sound becomes higher-pitched.",
            "The sound disappears.",
            "Your ears become stronger."
        ],

        explanation:
            "Sound becomes quieter as you move farther from the source.",

        difficulty: 1,
        correctAnswer: "The sound becomes quieter.",
        estimatedSeconds: 15,

        tags: ["science", "hearing", "distance"]
    },

    {
        id: "sci-hearing-008",
        skillId: "protectingHearing",
        question: "Which action helps protect your hearing?",
        stage: "recognise",
        options: [
            "Taking breaks from loud noise",
            "Standing next to loud speakers",
            "Turning music to maximum volume",
            "Listening to loud sounds for many hours"
        ],

        explanation:
            "Giving your ears regular breaks helps protect them.",

        difficulty: 1,
        correctAnswer: "Taking breaks from loud noise",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-009",
        skillId: "protectingHearing",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Your hearing is important and should be protected.",
            "Loud sounds can never damage hearing.",
            "Only adults need to protect their hearing.",
            "Ears cannot be damaged."
        ],

        explanation:
            "Looking after your hearing is important at every age.",

        difficulty: 1,
        correctAnswer: "Your hearing is important and should be protected.",
        estimatedSeconds: 20,

        tags: ["science", "hearing"]
    },

    {
        id: "sci-hearing-010",
        skillId: "protectingHearing",
        question: "What should you do if a sound feels painfully loud?",
        stage: "recognise",
        options: [
            "Move away or protect your ears",
            "Stay where you are",
            "Listen for longer",
            "Turn it up even more"
        ],

        explanation:
            "Moving away or using hearing protection reduces the risk of damage.",

        difficulty: 1,
        correctAnswer: "Move away or protect your ears",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-011",
        skillId: "protectingHearing",
        question: "Why are ear defenders useful?",
        stage: "recognise",
        options: [
            "They reduce the amount of sound reaching your ears.",
            "They make sounds higher-pitched.",
            "They stop all sounds completely.",
            "They improve your eyesight."
        ],

        explanation:
            "Ear defenders reduce loud sounds to help protect hearing.",

        difficulty: 2,
        correctAnswer: "They reduce the amount of sound reaching your ears.",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-012",
        skillId: "protectingHearing",
        question: "Why is standing farther from a loudspeaker safer?",
        stage: "recognise",
        options: [
            "The sound is quieter farther away.",
            "The speaker stops working.",
            "The pitch becomes lower.",
            "The music ends."
        ],

        explanation:
            "As distance increases, the sound reaching your ears becomes quieter.",

        difficulty: 2,
        correctAnswer: "The sound is quieter farther away.",
        estimatedSeconds: 20,

        tags: ["science", "distance", "hearing"]
    },

    {
        id: "sci-hearing-013",
        skillId: "protectingHearing",
        question: "Which situation is best for protecting your hearing?",
        stage: "recognise",
        options: [
            "Listening to music at a sensible volume",
            "Using maximum volume every day",
            "Standing beside fireworks",
            "Putting your ear next to a loudspeaker"
        ],

        explanation:
            "Keeping music at a sensible volume helps protect your ears.",

        difficulty: 2,
        correctAnswer: "Listening to music at a sensible volume",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "headphones"]
    },

    {
        id: "sci-hearing-014",
        skillId: "protectingHearing",
        question: "Why should workers on noisy building sites wear ear protection?",
        stage: "recognise",
        options: [
            "To reduce the risk of hearing damage",
            "To improve their eyesight",
            "To help them lift heavy objects",
            "To make sounds louder"
        ],

        explanation:
            "Construction equipment can produce sounds loud enough to damage hearing.",

        difficulty: 2,
        correctAnswer: "To reduce the risk of hearing damage",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-015",
        skillId: "protectingHearing",
        question: "What is the safest choice when using headphones for a long time?",
        stage: "recognise",
        options: [
            "Keep the volume low and take breaks",
            "Use the highest possible volume",
            "Wear only one headphone at full volume",
            "Increase the volume every hour"
        ],

        explanation:
            "Lower volume and regular breaks help protect your hearing.",

        difficulty: 2,
        correctAnswer: "Keep the volume low and take breaks",
        estimatedSeconds: 20,

        tags: ["science", "headphones", "hearing"]
    },

    {
        id: "sci-hearing-016",
        skillId: "protectingHearing",
        question: "Which of these is most likely to damage hearing?",
        stage: "recognise",
        options: [
            "Listening to loud music for a long time",
            "Talking quietly with a friend",
            "Reading silently",
            "Watching fish in a pond"
        ],

        explanation:
            "Long periods of loud sound increase the risk of hearing damage.",

        difficulty: 2,
        correctAnswer: "Listening to loud music for a long time",
        estimatedSeconds: 20,

        tags: ["science", "hearing"]
    },

    {
        id: "sci-hearing-017",
        skillId: "protectingHearing",
        question: "What should you do before using noisy machinery?",
        stage: "recognise",
        options: [
            "Wear suitable hearing protection if needed.",
            "Cover your eyes.",
            "Take off your shoes.",
            "Speak more loudly."
        ],

        explanation:
            "Hearing protection helps reduce the amount of loud sound reaching your ears.",

        difficulty: 2,
        correctAnswer: "Wear suitable hearing protection if needed.",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-018",
        skillId: "protectingHearing",
        question: "Why are regular quiet breaks useful in noisy places?",
        stage: "recognise",
        options: [
            "They give your ears time to recover.",
            "They make sounds louder.",
            "They increase the pitch of sounds.",
            "They stop sound travelling."
        ],

        explanation:
            "Reducing your exposure to loud sounds helps protect your hearing.",

        difficulty: 2,
        correctAnswer: "They give your ears time to recover.",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-019",
        skillId: "protectingHearing",
        question: "Which advice is best for looking after your hearing?",
        stage: "recognise",
        options: [
            "Avoid loud sounds when possible and use ear protection when needed.",
            "Always listen at full volume.",
            "Stand close to loudspeakers.",
            "Ignore painfully loud noises."
        ],

        explanation:
            "Limiting exposure to loud sounds is the best way to protect your hearing.",

        difficulty: 2,
        correctAnswer: "Avoid loud sounds when possible and use ear protection when needed.",
        estimatedSeconds: 20,

        tags: ["science", "hearing", "safety"]
    },

    {
        id: "sci-hearing-020",
        skillId: "protectingHearing",
        question: "Which sentence best explains how to protect your hearing?",
        stage: "recognise",
        options: [
            "Keep sounds at a sensible volume, move away from very loud noises and wear hearing protection when needed.",
            "Listen to loud sounds for as long as possible.",
            "Only protect your hearing indoors.",
            "Hearing protection is never needed."
        ],

        explanation:
            "Simple choices such as reducing volume, increasing distance and wearing ear defenders help keep your hearing healthy.",

        difficulty: 2,
        correctAnswer: "Keep sounds at a sensible volume, move away from very loud noises and wear hearing protection when needed.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "hearing", "safety"]
    }

    ]

};


export default protectingHearing;

export {

    protectingHearing

};
