import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const pushesAndPulls: SkillContent = {

    skillId: "pushesAndPulls",

    title: "Pushes and Pulls",

    description:
        "Learn that forces are pushes and pulls and investigate how they make objects start moving, stop moving or change direction.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-pushpull-001",
        skillId: "pushesAndPulls",
        question: "What is a force?",
        stage: "recognise",
        options: [
            "A push or a pull",
            "A type of magnet",
            "A kind of energy drink",
            "A heavy object"
        ],

        hint: "Think about the two basic ways you can make an object move with your hands.",

        explanation:
            "A force is simply a push or a pull acting on an object.",

        difficulty: 1,
        correctAnswer: "A push or a pull",
        estimatedSeconds: 15,

        tags: ["science", "forces", "push", "pull"]
    },

    {
        id: "sci-pushpull-002",
        skillId: "pushesAndPulls",
        question: "Which action is a push?",
        stage: "recognise",
        options: [
            "Closing a door",
            "Opening a drawer",
            "Pulling a rope",
            "Picking up a bag"
        ],

        hint: "A push moves something away from your body rather than towards you.",

        explanation:
            "Closing a door usually means pushing it away from you.",

        difficulty: 1,
        correctAnswer: "Closing a door",
        estimatedSeconds: 15,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-003",
        skillId: "pushesAndPulls",
        question: "Which action is a pull?",
        stage: "recognise",
        options: [
            "Opening a drawer",
            "Kicking a football",
            "Closing a window by pushing it",
            "Pushing a trolley"
        ],

        hint: "A pull brings an object closer to you.",

        explanation:
            "You pull a drawer towards you to open it.",

        difficulty: 1,
        correctAnswer: "Opening a drawer",
        estimatedSeconds: 15,

        tags: ["science", "forces", "pull"]
    },

    {
        id: "sci-pushpull-004",
        skillId: "pushesAndPulls",
        question: "What can a force do?",
        stage: "recognise",
        options: [
            "Make an object move",
            "Change the weather",
            "Create light",
            "Change the time"
        ],

        hint: "Think about what happens when you push a toy car sitting still.",

        explanation:
            "A force can make an object start moving.",

        difficulty: 1,
        correctAnswer: "Make an object move",
        estimatedSeconds: 15,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-005",
        skillId: "pushesAndPulls",
        question: "Which object are you pushing?",
        stage: "recognise",
        options: [
            "A shopping trolley",
            "A kite string",
            "A drawer handle",
            "A bucket by its handle"
        ],

        hint: "Choose the object that normally moves in front of you as you walk.",

        explanation:
            "A shopping trolley moves because you push it.",

        difficulty: 1,
        correctAnswer: "A shopping trolley",
        estimatedSeconds: 15,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-006",
        skillId: "pushesAndPulls",
        question: "Which object are you pulling?",
        stage: "recognise",
        options: [
            "A suitcase with wheels",
            "A football",
            "A door you are closing",
            "A toy car you are pushing"
        ],

        hint: "Think about something that usually rolls behind you when travelling.",

        explanation:
            "A wheeled suitcase is usually pulled behind you.",

        difficulty: 1,
        correctAnswer: "A suitcase with wheels",
        estimatedSeconds: 15,

        tags: ["science", "forces", "pull"]
    },

    {
        id: "sci-pushpull-007",
        skillId: "pushesAndPulls",
        question: "What can a force do to a moving object?",
        stage: "recognise",
        options: [
            "Stop it",
            "Make it disappear",
            "Change its colour",
            "Turn it into water"
        ],

        hint: "Think about what happens when you catch a rolling ball.",

        explanation:
            "A force can slow down or stop a moving object.",

        difficulty: 1,
        correctAnswer: "Stop it",
        estimatedSeconds: 15,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-008",
        skillId: "pushesAndPulls",
        question: "What can a force do besides start or stop movement?",
        stage: "recognise",
        options: [
            "Change the direction of movement",
            "Change the weather",
            "Create shadows",
            "Make sound disappear"
        ],

        hint: "Imagine a football being kicked to the side while it is already rolling.",

        explanation:
            "A force can change the direction an object is moving.",

        difficulty: 1,
        correctAnswer: "Change the direction of movement",
        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

    {
        id: "sci-pushpull-009",
        skillId: "pushesAndPulls",
        question: "Kicking a football is mainly which type of force?",
        stage: "recognise",
        options: [
            "A push",
            "A pull",
            "A magnet",
            "Gravity"
        ],

        hint: "Your foot sends the ball away from you.",

        explanation:
            "Your foot pushes the football away.",

        difficulty: 1,
        correctAnswer: "A push",
        estimatedSeconds: 20,

        tags: ["science", "forces", "push"]
    },

    {
        id: "sci-pushpull-010",
        skillId: "pushesAndPulls",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Forces are pushes and pulls.",
            "Forces only happen with magnets.",
            "Forces only work on heavy objects.",
            "Forces cannot make objects move."
        ],

        hint: "Remember the simple definition of a force that you've learned throughout this activity.",

        explanation:
            "Every force is a push, a pull or a combination of both.",

        difficulty: 1,
        correctAnswer: "Forces are pushes and pulls.",
        estimatedSeconds: 20,

        tags: ["science", "forces"]
    },

 {
    id: "sci-pushpull-011",
    skillId: "pushesAndPulls",
    question: "A toy car is standing still. What could make it move?",
    stage: "recognise",
    options: [
        "Pushing it",
        "Watching it",
        "Painting it",
        "Measuring it"
    ],

    hint: "A stationary object needs a force to start moving.",

    explanation:
        "A push is a force that can make the toy car move.",

    difficulty: 2,
    correctAnswer: "Pushing it",
    estimatedSeconds: 20,

    tags: ["science", "forces", "push"]
},

{
    id: "sci-pushpull-012",
    skillId: "pushesAndPulls",
    question: "A football is rolling. What could stop it more quickly?",
    stage: "recognise",
    options: [
        "A force acting against it",
        "More sunlight",
        "A louder whistle",
        "A bigger goal"
    ],

    hint: "Think about what happens when something pushes against a moving ball.",

    explanation:
        "A force can slow down or stop a moving object.",

    difficulty: 2,
    correctAnswer: "A force acting against it",
    estimatedSeconds: 20,

    tags: ["science", "forces"]
},

{
    id: "sci-pushpull-013",
    skillId: "pushesAndPulls",
    question: "Which activity uses both a push and a pull?",
    stage: "recognise",
    options: [
        "Using a swing",
        "Reading a book",
        "Watching television",
        "Drawing a picture"
    ],

    hint: "Think about an activity where you move forwards and backwards.",

    explanation:
        "When using a swing, you may push away and pull yourself back.",

    difficulty: 2,
    correctAnswer: "Using a swing",
    estimatedSeconds: 20,

    tags: ["science", "forces"]
},

{
    id: "sci-pushpull-014",
    skillId: "pushesAndPulls",
    question: "Why does a bicycle change direction when you turn the handlebars?",
    stage: "recognise",
    options: [
        "A force changes its direction",
        "The wheels stop moving",
        "The bicycle becomes lighter",
        "The pedals disappear"
    ],

    hint: "Turning the handlebars changes where the front wheel points.",

    explanation:
        "Turning the handlebars applies forces that change the bicycle's direction.",

    difficulty: 2,
    correctAnswer: "A force changes its direction",
    estimatedSeconds: 20,

    tags: ["science", "forces"]
},

{
    id: "sci-pushpull-015",
    skillId: "pushesAndPulls",
    question: "Which force is used to open a fridge door?",
    stage: "recognise",
    options: [
        "A pull",
        "A push",
        "Light",
        "Sound"
    ],

    hint: "Think about what you do with the handle to bring the door towards you.",

    explanation:
        "Most fridge doors are opened by pulling the handle.",

    difficulty: 2,
    correctAnswer: "A pull",
    estimatedSeconds: 20,

    tags: ["science", "forces", "pull"]
},

{
    id: "sci-pushpull-016",
    skillId: "pushesAndPulls",
    question: "A child pushes a toy car harder. What usually happens?",
    stage: "recognise",
    options: [
        "It moves faster",
        "It disappears",
        "It becomes smaller",
        "It changes colour"
    ],

    hint: "A bigger force usually has a bigger effect on how something moves.",

    explanation:
        "A stronger push usually makes the toy car move faster.",

    difficulty: 2,
    correctAnswer: "It moves faster",
    estimatedSeconds: 20,

    tags: ["science", "forces", "push"]
},

{
    id: "sci-pushpull-017",
    skillId: "pushesAndPulls",
    question: "Which of these is an example of pulling?",
    stage: "recognise",
    options: [
        "Pulling a curtain closed",
        "Kicking a ball",
        "Pushing a chair",
        "Closing a cupboard with your hand"
    ],

    hint: "Choose the action where something is moved towards you.",

    explanation:
        "Pulling a curtain towards you is an example of a pull.",

    difficulty: 2,
    correctAnswer: "Pulling a curtain closed",
    estimatedSeconds: 20,

    tags: ["science", "forces", "pull"]
},

{
    id: "sci-pushpull-018",
    skillId: "pushesAndPulls",
    question: "What can forces change?",
    stage: "recognise",
    options: [
        "The speed and direction of an object",
        "The colour of the sky",
        "The time of day",
        "The weather"
    ],

    hint: "Think about what happens when you kick a moving football from the side.",

    explanation:
        "Forces can make objects speed up, slow down or change direction.",

    difficulty: 2,
    correctAnswer: "The speed and direction of an object",
    estimatedSeconds: 20,

    tags: ["science", "forces"]
},

{
    id: "sci-pushpull-019",
    skillId: "pushesAndPulls",
    question: "Which investigation would help you learn about pushes?",
    stage: "recognise",
    options: [
        "Rolling a toy car with different pushes",
        "Watching clouds",
        "Growing a plant",
        "Melting ice"
    ],

    hint: "Choose the activity where you can change the force you apply and observe the result.",

    explanation:
        "Changing how hard you push a toy car is a simple investigation into forces.",

    difficulty: 2,
    correctAnswer: "Rolling a toy car with different pushes",
    estimatedSeconds: 20,

    tags: ["science", "forces", "working-scientifically"]
},

{
    id: "sci-pushpull-020",
    skillId: "pushesAndPulls",
    question: "Which sentence best describes a force?",
    stage: "recognise",
    options: [
        "A force is a push or pull that can change how an object moves.",
        "A force is something only magnets have.",
        "A force is a type of light.",
        "A force only works on heavy objects."
    ],

    hint: "Pick the definition that includes both pushes and pulls and their effect on movement.",

    explanation:
        "Forces are pushes and pulls that can start, stop, speed up, slow down or change the direction of objects.",

    difficulty: 2,
    correctAnswer: "A force is a push or pull that can change how an object moves.",
    estimatedSeconds: 20,

    tags: ["science", "forces", "push", "pull"]
}

]

};


export default pushesAndPulls;

export {

    pushesAndPulls

};
