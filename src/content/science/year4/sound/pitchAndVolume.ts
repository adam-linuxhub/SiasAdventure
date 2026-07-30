import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const pitchAndVolume: SkillContent = {

    skillId: "pitchAndVolume",

    title: "Pitch and Volume",

    description:
        "Learn how the size and speed of vibrations affect the pitch and volume of sounds.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-pitch-volume-001",
        skillId: "pitchAndVolume",
        question: "What is pitch?",
        stage: "recognise",
        options: [
            "How high or low a sound is",
            "How loud or quiet a sound is",
            "How long a sound lasts",
            "How fast sound travels"
        ],

        explanation:
            "Pitch describes whether a sound is high or low.",

        difficulty: 1,
        correctAnswer: "How high or low a sound is",
        estimatedSeconds: 15,

        tags: ["science", "sound", "pitch"]
    },

    {
        id: "sci-pitch-volume-002",
        skillId: "pitchAndVolume",
        question: "What is volume?",
        stage: "recognise",
        options: [
            "How loud or quiet a sound is",
            "How high or low a sound is",
            "The colour of a sound",
            "The speed of light"
        ],

        explanation:
            "Volume describes how loud or quiet a sound is.",

        difficulty: 1,
        correctAnswer: "How loud or quiet a sound is",
        estimatedSeconds: 15,

        tags: ["science", "sound", "volume"]
    },

    {
        id: "sci-pitch-volume-003",
        skillId: "pitchAndVolume",
        question: "Which animal usually makes a high-pitched sound?",
        stage: "recognise",
        options: [
            "Mouse",
            "Elephant",
            "Cow",
            "Lion"
        ],

        explanation:
            "Small animals like mice usually make higher-pitched sounds.",

        difficulty: 1,
        correctAnswer: "Mouse",
        estimatedSeconds: 15,

        tags: ["science", "pitch"]
    },

    {
        id: "sci-pitch-volume-004",
        skillId: "pitchAndVolume",
        question: "Which animal usually makes a low-pitched sound?",
        stage: "recognise",
        options: [
            "Elephant",
            "Mouse",
            "Robin",
            "Cricket"
        ],

        explanation:
            "Large animals often produce lower-pitched sounds.",

        difficulty: 1,
        correctAnswer: "Elephant",
        estimatedSeconds: 15,

        tags: ["science", "pitch"]
    },

    {
        id: "sci-pitch-volume-005",
        skillId: "pitchAndVolume",
        question: "What usually happens if you hit a drum harder?",
        stage: "recognise",
        options: [
            "The sound becomes louder.",
            "The pitch becomes higher.",
            "The drum changes colour.",
            "The sound disappears."
        ],

        explanation:
            "A harder hit creates bigger vibrations, making the sound louder.",

        difficulty: 1,
        correctAnswer: "The sound becomes louder.",
        estimatedSeconds: 15,

        tags: ["science", "volume", "drum"]
    },

    {
        id: "sci-pitch-volume-006",
        skillId: "pitchAndVolume",
        question: "Which sound has the highest pitch?",
        stage: "recognise",
        options: [
            "A whistle",
            "A bass drum",
            "Thunder",
            "A tuba"
        ],

        explanation:
            "Whistles usually produce very high-pitched sounds.",

        difficulty: 1,
        correctAnswer: "A whistle",
        estimatedSeconds: 15,

        tags: ["science", "pitch"]
    },

    {
        id: "sci-pitch-volume-007",
        skillId: "pitchAndVolume",
        question: "Which sound is likely to be the loudest?",
        stage: "recognise",
        options: [
            "A firework exploding",
            "A whisper",
            "A ticking clock",
            "A quiet hum"
        ],

        explanation:
            "Fireworks create very large vibrations, producing loud sounds.",

        difficulty: 1,
        correctAnswer: "A firework exploding",
        estimatedSeconds: 15,

        tags: ["science", "volume"]
    },

    {
        id: "sci-pitch-volume-008",
        skillId: "pitchAndVolume",
        question: "Which instrument can make both high and low notes?",
        stage: "recognise",
        options: [
            "Piano",
            "Triangle",
            "Drum",
            "Tambourine"
        ],

        explanation:
            "A piano has strings that produce many different pitches.",

        difficulty: 1,
        correctAnswer: "Piano",
        estimatedSeconds: 20,

        tags: ["science", "pitch", "instruments"]
    },

    {
        id: "sci-pitch-volume-009",
        skillId: "pitchAndVolume",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Pitch and volume describe different features of sound.",
            "Pitch means loudness.",
            "Volume means high or low.",
            "Pitch and volume are always the same."
        ],

        explanation:
            "Pitch describes high or low sounds, while volume describes loud or quiet sounds.",

        difficulty: 1,
        correctAnswer: "Pitch and volume describe different features of sound.",
        estimatedSeconds: 20,

        tags: ["science", "pitch", "volume"]
    },

    {
        id: "sci-pitch-volume-010",
        skillId: "pitchAndVolume",
        question: "What kind of sound is a whisper?",
        stage: "recognise",
        options: [
            "Quiet",
            "Loud",
            "Always high-pitched",
            "Always low-pitched"
        ],

        explanation:
            "A whisper has a low volume.",

        difficulty: 1,
        correctAnswer: "Quiet",
        estimatedSeconds: 20,

        tags: ["science", "volume"]
    },

    {
        id: "sci-pitch-volume-011",
        skillId: "pitchAndVolume",
        question: "Why does a small bell usually make a higher-pitched sound than a large bell?",
        stage: "recognise",
        options: [
            "It vibrates more quickly.",
            "It is heavier.",
            "It vibrates more slowly.",
            "It makes louder sounds."
        ],

        explanation:
            "Smaller objects usually vibrate faster, producing higher pitches.",

        difficulty: 2,
        correctAnswer: "It vibrates more quickly.",
        estimatedSeconds: 20,

        tags: ["science", "pitch", "vibrations"]
    },

    {
        id: "sci-pitch-volume-012",
        skillId: "pitchAndVolume",
        question: "Why does a large drum usually make a lower-pitched sound than a small drum?",
        stage: "recognise",
        options: [
            "Its larger vibrating surface vibrates more slowly.",
            "It is always louder.",
            "It contains more air.",
            "It is made from wood."
        ],

        explanation:
            "Larger vibrating objects usually produce lower pitches.",

        difficulty: 2,
        correctAnswer: "Its larger vibrating surface vibrates more slowly.",
        estimatedSeconds: 20,

        tags: ["science", "pitch", "drum"]
    },

    {
        id: "sci-pitch-volume-013",
        skillId: "pitchAndVolume",
        question: "What happens when you pluck a guitar string more gently?",
        stage: "recognise",
        options: [
            "The sound is quieter.",
            "The pitch changes completely.",
            "The string stops vibrating.",
            "The sound becomes an echo."
        ],

        explanation:
            "Gentler vibrations produce a quieter sound.",

        difficulty: 2,
        correctAnswer: "The sound is quieter.",
        estimatedSeconds: 20,

        tags: ["science", "volume", "guitar"]
    },

    {
        id: "sci-pitch-volume-014",
        skillId: "pitchAndVolume",
        question: "Which change makes a sound louder?",
        stage: "recognise",
        options: [
            "Making bigger vibrations",
            "Stopping the vibrations",
            "Cooling the instrument",
            "Making the object heavier"
        ],

        explanation:
            "Larger vibrations produce louder sounds.",

        difficulty: 2,
        correctAnswer: "Making bigger vibrations",
        estimatedSeconds: 20,

        tags: ["science", "volume", "vibrations"]
    },

    {
        id: "sci-pitch-volume-015",
        skillId: "pitchAndVolume",
        question: "Which instrument is most likely to produce a low-pitched note?",
        stage: "recognise",
        options: [
            "Tuba",
            "Whistle",
            "Piccolo",
            "Recorder"
        ],

        explanation:
            "Tubas are designed to produce low-pitched sounds.",

        difficulty: 2,
        correctAnswer: "Tuba",
        estimatedSeconds: 20,

        tags: ["science", "pitch", "instruments"]
    },

    {
        id: "sci-pitch-volume-016",
        skillId: "pitchAndVolume",
        question: "A violin string is tightened before being played. What usually happens?",
        stage: "recognise",
        options: [
            "The pitch becomes higher.",
            "The sound becomes silent.",
            "The volume always increases.",
            "The pitch becomes lower."
        ],

        explanation:
            "A tighter string vibrates faster, producing a higher pitch.",

        difficulty: 2,
        correctAnswer: "The pitch becomes higher.",
        estimatedSeconds: 20,

        tags: ["science", "pitch", "strings"]
    },

    {
        id: "sci-pitch-volume-017",
        skillId: "pitchAndVolume",
        question: "Why does shouting sound louder than whispering?",
        stage: "recognise",
        options: [
            "Shouting creates bigger vibrations.",
            "Shouting creates higher pitch.",
            "Whispering has no vibrations.",
            "Shouting travels faster than sound."
        ],

        explanation:
            "Louder sounds are produced by larger vibrations.",

        difficulty: 2,
        correctAnswer: "Shouting creates bigger vibrations.",
        estimatedSeconds: 20,

        tags: ["science", "volume", "vibrations"]
    },

    {
        id: "sci-pitch-volume-018",
        skillId: "pitchAndVolume",
        question: "Which pair is correctly matched?",
        stage: "recognise",
        options: [
            "Pitch – high or low",
            "Pitch – loud or quiet",
            "Volume – high or low",
            "Volume – fast or slow"
        ],

        explanation:
            "Pitch describes high or low sounds.",

        difficulty: 2,
        correctAnswer: "Pitch – high or low",
        estimatedSeconds: 20,

        tags: ["science", "pitch", "volume"]
    },

    {
        id: "sci-pitch-volume-019",
        skillId: "pitchAndVolume",
        question: "What mainly affects whether a sound is loud or quiet?",
        stage: "recognise",
        options: [
            "The size of the vibrations",
            "The colour of the object",
            "The temperature of the room",
            "The shape of the room"
        ],

        explanation:
            "Bigger vibrations make louder sounds.",

        difficulty: 2,
        correctAnswer: "The size of the vibrations",
        estimatedSeconds: 20,

        tags: ["science", "volume", "vibrations"]
    },

    {
        id: "sci-pitch-volume-020",
        skillId: "pitchAndVolume",
        question: "Which sentence best describes pitch and volume?",
        stage: "recognise",
        options: [
            "Pitch describes how high or low a sound is, while volume describes how loud or quiet it is.",
            "Pitch and volume both describe loudness.",
            "Volume changes the speed of sound.",
            "Pitch only applies to musical instruments."
        ],

        explanation:
            "Pitch and volume are different properties of sound and are affected by different kinds of vibrations.",

        difficulty: 2,
        correctAnswer: "Pitch describes how high or low a sound is, while volume describes how loud or quiet it is.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "pitch", "volume"]
    }

    ]

};