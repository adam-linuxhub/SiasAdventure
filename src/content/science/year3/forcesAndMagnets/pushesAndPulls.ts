import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const pushesAndPulls: SkillContent = {

    skillId: "pushesAndPulls",

    title: "Pushes and Pulls",

    description:
        "Learn that forces are pushes and pulls and investigate how they make objects start moving, stop moving or change direction.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-pushpull-001",

        question: "What is a force?",

        options: [
            "A push or a pull",
            "A type of magnet",
            "A kind of energy drink",
            "A heavy object"
        ],

        answer: 0,

        explanation:
            "A force is simply a push or a pull acting on an object.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "forces", "push", "pull"]
    },

    {
        id: "sci-pushpull-002",

        question: "Which action is a push?",

        options: [
            "Closing a door",
            "Opening a drawer",
            "Pulling a rope",
            "Picking up a bag"
        ],

        answer: 0,

        explanation:
            "Closing a door usually means pushing it away from you.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-003",

        question: "Which action is a pull?",

        options: [
            "Opening a drawer",
            "Kicking a football",
            "Closing a window by pushing it",
            "Pushing a trolley"
        ],

        answer: 0,

        explanation:
            "You pull a drawer towards you to open it.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "forces", "pull"]
    },

    {
        id: "sci-pushpull-004",

        question: "What can a force do?",

        options: [
            "Make an object move",
            "Change the weather",
            "Create light",
            "Change the time"
        ],

        answer: 0,

        explanation:
            "A force can make an object start moving.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-005",

        question: "Which object are you pushing?",

        options: [
            "A shopping trolley",
            "A kite string",
            "A drawer handle",
            "A bucket by its handle"
        ],

        answer: 0,

        explanation:
            "A shopping trolley moves because you push it.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-006",

        question: "Which object are you pulling?",

        options: [
            "A suitcase with wheels",
            "A football",
            "A door you are closing",
            "A toy car you are pushing"
        ],

        answer: 0,

        explanation:
            "A wheeled suitcase is usually pulled behind you.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "forces", "pull"]
    },

    {
        id: "sci-pushpull-007",

        question: "What can a force do to a moving object?",

        options: [
            "Stop it",
            "Make it disappear",
            "Change its colour",
            "Turn it into water"
        ],

        answer: 0,

        explanation:
            "A force can slow down or stop a moving object.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-008",

        question: "What can a force do besides start or stop movement?",

        options: [
            "Change the direction of movement",
            "Change the weather",
            "Create shadows",
            "Make sound disappear"
        ],

        answer: 0,

        explanation:
            "A force can change the direction an object is moving.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-009",

        question: "Kicking a football is mainly which type of force?",

        options: [
            "A push",
            "A pull",
            "A magnet",
            "Gravity"
        ],

        answer: 0,

        explanation:
            "Your foot pushes the football away.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-010",

        question: "Which statement is true?",

        options: [
            "Forces are pushes and pulls.",
            "Forces only happen with magnets.",
            "Forces only work on heavy objects.",
            "Forces cannot make objects move."
        ],

        answer: 0,

        explanation:
            "Every force is a push, a pull or a combination of both.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-011",

        question: "A toy car is standing still. What could make it move?",

        options: [
            "Pushing it",
            "Watching it",
            "Painting it",
            "Measuring it"
        ],

        answer: 0,

        explanation:
            "A push is a force that can make the toy car move.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-012",

        question: "A football is rolling. What could stop it more quickly?",

        options: [
            "A force acting against it",
            "More sunlight",
            "A louder whistle",
            "A bigger goal"
        ],

        answer: 0,

        explanation:
            "A force can slow down or stop a moving object.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-013",

        question: "Which activity uses both a push and a pull?",

        options: [
            "Using a swing",
            "Reading a book",
            "Watching television",
            "Drawing a picture"
        ],

        answer: 0,

        explanation:
            "When using a swing, you may push away and pull yourself back.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-014",

        question: "Why does a bicycle change direction when you turn the handlebars?",

        options: [
            "A force changes its direction",
            "The wheels stop moving",
            "The bicycle becomes lighter",
            "The pedals disappear"
        ],

        answer: 0,

        explanation:
            "Turning the handlebars applies forces that change the bicycle's direction.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-015",

        question: "Which force is used to open a fridge door?",

        options: [
            "A pull",
            "A push",
            "Light",
            "Sound"
        ],

        answer: 0,

        explanation:
            "Most fridge doors are opened by pulling the handle.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces", "pull"]
    },

    {
        id: "sci-pushpull-016",

        question: "A child pushes a toy car harder. What usually happens?",

        options: [
            "It moves faster",
            "It disappears",
            "It becomes smaller",
            "It changes colour"
        ],

        answer: 0,

        explanation:
            "A stronger push usually makes the toy car move faster.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-017",

        question: "Which of these is an example of pulling?",

        options: [
            "Pulling a curtain closed",
            "Kicking a ball",
            "Pushing a chair",
            "Closing a cupboard with your hand"
        ],

        answer: 0,

        explanation:
            "Pulling a curtain towards you is an example of a pull.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces", "pull"]
    },

    {
        id: "sci-pushpull-018",

        question: "What can forces change?",

        options: [
            "The speed and direction of an object",
            "The colour of the sky",
            "The time of day",
            "The weather"
        ],

        answer: 0,

        explanation:
            "Forces can make objects speed up, slow down or change direction.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-019",

        question: "Which investigation would help you learn about pushes?",

        options: [
            "Rolling a toy car with different pushes",
            "Watching clouds",
            "Growing a plant",
            "Melting ice"
        ],

        answer: 0,

        explanation:
            "Changing how hard you push a toy car is a simple investigation into forces.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces", "working-scientifically"]
    },

    {
        id: "sci-pushpull-020",

        question: "Which sentence best describes a force?",

        options: [
            "A force is a push or pull that can change how an object moves.",
            "A force is something only magnets have.",
            "A force is a type of light.",
            "A force only works on heavy objects."
        ],

        answer: 0,

        explanation:
            "Forces are pushes and pulls that can start, stop, speed up, slow down or change the direction of objects.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "forces", "push", "pull"]
    }

    ]

};