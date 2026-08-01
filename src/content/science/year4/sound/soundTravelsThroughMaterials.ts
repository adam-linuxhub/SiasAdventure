import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const soundTravelsThroughMaterials: SkillContent = {

    skillId: "soundTravelsThroughMaterials",

    title: "Sound Travels Through Materials",

    description:
        "Learn how sound travels through solids, liquids and gases, and how the distance from a sound source affects what we hear.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-sound-materials-001",
        skillId: "soundTravelsThroughMaterials",
        question: "What does sound need to travel through?",
        stage: "recognise",
        options: [
            "A material",
            "Only light",
            "Nothing at all",
            "A shadow"
        ],

        explanation:
            "Sound travels through materials such as air, water and solids.",

        difficulty: 1,
        correctAnswer: "A material",
        estimatedSeconds: 15,

        tags: ["science", "sound", "materials"]
    },

    {
        id: "sci-sound-materials-002",
        skillId: "soundTravelsThroughMaterials",
        question: "Which material does sound usually travel through when people are talking?",
        stage: "recognise",
        options: [
            "Air",
            "Glass",
            "Metal",
            "Plastic"
        ],

        explanation:
            "Most everyday sounds travel through the air to our ears.",

        difficulty: 1,
        correctAnswer: "Air",
        estimatedSeconds: 15,

        tags: ["science", "sound", "air"]
    },

    {
        id: "sci-sound-materials-003",
        skillId: "soundTravelsThroughMaterials",
        question: "Can sound travel through water?",
        stage: "recognise",
        options: [
            "Yes",
            "No",
            "Only if the water is warm",
            "Only if the water is frozen"
        ],

        explanation:
            "Sound can travel through liquids such as water.",

        difficulty: 1,
        correctAnswer: "Yes",
        estimatedSeconds: 15,

        tags: ["science", "sound", "water"]
    },

    {
        id: "sci-sound-materials-004",
        skillId: "soundTravelsThroughMaterials",
        question: "Can sound travel through solid objects?",
        stage: "recognise",
        options: [
            "Yes",
            "No",
            "Only through wood",
            "Only through glass"
        ],

        explanation:
            "Sound can travel through solids as well as liquids and gases.",

        difficulty: 1,
        correctAnswer: "Yes",
        estimatedSeconds: 15,

        tags: ["science", "sound", "solids"]
    },

    {
        id: "sci-sound-materials-005",
        skillId: "soundTravelsThroughMaterials",
        question: "Which of these is a material that carries sound?",
        stage: "recognise",
        options: [
            "Air",
            "Light",
            "Darkness",
            "A shadow"
        ],

        explanation:
            "Air is a material through which sound travels.",

        difficulty: 1,
        correctAnswer: "Air",
        estimatedSeconds: 15,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-materials-006",
        skillId: "soundTravelsThroughMaterials",
        question: "What happens to a sound as you move farther away from it?",
        stage: "recognise",
        options: [
            "It becomes quieter.",
            "It becomes higher-pitched.",
            "It becomes brighter.",
            "It changes colour."
        ],

        explanation:
            "Sounds usually become quieter as the distance from the source increases.",

        difficulty: 1,
        correctAnswer: "It becomes quieter.",
        estimatedSeconds: 15,

        tags: ["science", "sound", "distance"]
    },

    {
        id: "sci-sound-materials-007",
        skillId: "soundTravelsThroughMaterials",
        question: "Which is most likely to sound louder?",
        stage: "recognise",
        options: [
            "A bell beside you",
            "The same bell 200 metres away",
            "A picture of a bell",
            "A silent bell"
        ],

        explanation:
            "Sounds are louder when you are closer to their source.",

        difficulty: 1,
        correctAnswer: "A bell beside you",
        estimatedSeconds: 15,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-materials-008",
        skillId: "soundTravelsThroughMaterials",
        question: "Which material can carry sound?",
        stage: "recognise",
        options: [
            "Water",
            "Only air",
            "Only wood",
            "Only metal"
        ],

        explanation:
            "Sound can travel through water as well as many other materials.",

        difficulty: 1,
        correctAnswer: "Water",
        estimatedSeconds: 20,

        tags: ["science", "sound", "materials"]
    },

    {
        id: "sci-sound-materials-009",
        skillId: "soundTravelsThroughMaterials",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Sound can travel through solids, liquids and gases.",
            "Sound only travels through air.",
            "Sound only travels through water.",
            "Sound only travels through solids."
        ],

        explanation:
            "Sound can travel through many different materials.",

        difficulty: 1,
        correctAnswer: "Sound can travel through solids, liquids and gases.",
        estimatedSeconds: 20,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-materials-010",
        skillId: "soundTravelsThroughMaterials",
        question: "What carries the sound from a ringing phone to your ears?",
        stage: "recognise",
        options: [
            "The air",
            "Light",
            "Heat",
            "Magnets"
        ],

        explanation:
            "The sound vibrations travel through the air.",

        difficulty: 1,
        correctAnswer: "The air",
        estimatedSeconds: 20,

        tags: ["science", "sound", "air"]
    },

    {
        id: "sci-sound-materials-011",
        skillId: "soundTravelsThroughMaterials",
        question: "Why can you hear someone knocking on the other side of a wooden door?",
        stage: "recognise",
        options: [
            "Sound travels through the door and the air.",
            "The door becomes transparent.",
            "The sound changes into light.",
            "The wood creates electricity."
        ],

        explanation:
            "Sound vibrations can travel through solid materials like wood.",

        difficulty: 2,
        correctAnswer: "Sound travels through the door and the air.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "solids"]
    },

    {
        id: "sci-sound-materials-012",
        skillId: "soundTravelsThroughMaterials",
        question: "A diver hears another diver tapping a metal tank underwater. What does this show?",
        stage: "recognise",
        options: [
            "Sound can travel through water.",
            "Water blocks all sound.",
            "Only fish can hear underwater.",
            "Sound only travels through air."
        ],

        explanation:
            "Water carries sound vibrations.",

        difficulty: 2,
        correctAnswer: "Sound can travel through water.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "water"]
    },

    {
        id: "sci-sound-materials-013",
        skillId: "soundTravelsThroughMaterials",
        question: "Why is a nearby ambulance easier to hear than one far away?",
        stage: "recognise",
        options: [
            "The sound becomes quieter as distance increases.",
            "The ambulance changes pitch.",
            "The sound stops vibrating.",
            "The air becomes thicker."
        ],

        explanation:
            "Sound spreads out, making it quieter as you move farther away.",

        difficulty: 2,
        correctAnswer: "The sound becomes quieter as distance increases.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "distance"]
    },

    {
        id: "sci-sound-materials-014",
        skillId: "soundTravelsThroughMaterials",
        question: "Which investigation would show that sound travels through solids?",
        stage: "recognise",
        options: [
            "Listening through a table while someone taps it",
            "Looking at a torch",
            "Watching a shadow",
            "Measuring the temperature of water"
        ],

        explanation:
            "You can often hear tapping clearly through a solid object.",

        difficulty: 2,
        correctAnswer: "Listening through a table while someone taps it",
        estimatedSeconds: 20,

        tags: ["science", "working-scientifically", "sound"]
    },

    {
        id: "sci-sound-materials-015",
        skillId: "soundTravelsThroughMaterials",
        question: "Which material below can carry sound?",
        stage: "recognise",
        options: [
            "Metal",
            "Only air",
            "Only liquids",
            "None of these"
        ],

        explanation:
            "Metal is a solid, and sound travels through solids.",

        difficulty: 2,
        correctAnswer: "Metal",
        estimatedSeconds: 20,

        tags: ["science", "materials"]
    },

    {
        id: "sci-sound-materials-016",
        skillId: "soundTravelsThroughMaterials",
        question: "What happens to sound vibrations as they travel farther from the source?",
        stage: "recognise",
        options: [
            "They become weaker, so the sound is quieter.",
            "They always become higher-pitched.",
            "They stop being vibrations.",
            "They turn into light."
        ],

        explanation:
            "As sound spreads out, it usually becomes quieter.",

        difficulty: 2,
        correctAnswer: "They become weaker, so the sound is quieter.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "distance"]
    },

    {
        id: "sci-sound-materials-017",
        skillId: "soundTravelsThroughMaterials",
        question: "Why can you hear a train through the railway tracks before it arrives?",
        stage: "recognise",
        options: [
            "Sound travels through the metal rails.",
            "The rails glow.",
            "The train sends out light.",
            "The tracks produce electricity."
        ],

        explanation:
            "Sound vibrations can travel through solid metal.",

        difficulty: 2,
        correctAnswer: "Sound travels through the metal rails.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "solids"]
    },

    {
        id: "sci-sound-materials-018",
        skillId: "soundTravelsThroughMaterials",
        question: "Which statement correctly describes sound?",
        stage: "recognise",
        options: [
            "Sound needs a material to travel through.",
            "Sound travels without any material.",
            "Sound only travels through air.",
            "Sound cannot travel through water."
        ],

        explanation:
            "Sound travels through solids, liquids and gases.",

        difficulty: 2,
        correctAnswer: "Sound needs a material to travel through.",
        estimatedSeconds: 20,

        tags: ["science", "sound"]
    },

    {
        id: "sci-sound-materials-019",
        skillId: "soundTravelsThroughMaterials",
        question: "Why is someone easier to hear when they are standing next to you than across a field?",
        stage: "recognise",
        options: [
            "The sound has less distance to travel.",
            "Their voice changes pitch.",
            "The air becomes warmer.",
            "Your ears become larger."
        ],

        explanation:
            "Sounds are generally louder when the source is nearby.",

        difficulty: 2,
        correctAnswer: "The sound has less distance to travel.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "distance"]
    },

    {
        id: "sci-sound-materials-020",
        skillId: "soundTravelsThroughMaterials",
        question: "Which sentence best describes how sound travels?",
        stage: "recognise",
        options: [
            "Sound travels as vibrations through solids, liquids and gases, becoming quieter as the distance from the source increases.",
            "Sound only travels through air.",
            "Sound travels as light.",
            "Sound becomes louder the farther it travels."
        ],

        explanation:
            "Sound needs a material to travel through and usually becomes quieter as it spreads out.",

        difficulty: 2,
        correctAnswer: "Sound travels as vibrations through solids, liquids and gases, becoming quieter as the distance from the source increases.",
        estimatedSeconds: 20,

        tags: ["science", "sound", "materials", "distance"]
    }

    ]

};


export default soundTravelsThroughMaterials;

export {

    soundTravelsThroughMaterials

};
