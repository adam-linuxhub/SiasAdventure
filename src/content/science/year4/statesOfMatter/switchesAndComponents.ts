import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const switchesAndComponents: SkillContent = {

    skillId: "switchesAndComponents",

    title: "Switches and Components",

    description:
        "Learn the names and jobs of common electrical components and how switches control a circuit.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-switches-001",
        skillId: "switchesAndComponents",
        question: "What is the job of a switch in a circuit?",
        stage: "recognise",
        options: [
            "To open or close the circuit",
            "To make electricity",
            "To produce light",
            "To store electricity"
        ],

        explanation:
            "A switch controls whether electricity can flow around a circuit.",

        difficulty: 1,
        correctAnswer: "To open or close the circuit",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "switch"]
    },

    {
        id: "sci-switches-002",
        skillId: "switchesAndComponents",
        question: "Which component provides electrical energy?",
        stage: "recognise",
        options: [
            "Battery",
            "Bulb",
            "Wire",
            "Switch"
        ],

        explanation:
            "The battery supplies electrical energy to the circuit.",

        difficulty: 1,
        correctAnswer: "Battery",
        estimatedSeconds: 15,

        tags: ["science", "battery", "electricity"]
    },

    {
        id: "sci-switches-003",
        skillId: "switchesAndComponents",
        question: "Which component lights up when electricity flows?",
        stage: "recognise",
        options: [
            "Bulb",
            "Battery",
            "Wire",
            "Switch"
        ],

        explanation:
            "The bulb changes electrical energy into light.",

        difficulty: 1,
        correctAnswer: "Bulb",
        estimatedSeconds: 15,

        tags: ["science", "bulb", "electricity"]
    },

    {
        id: "sci-switches-004",
        skillId: "switchesAndComponents",
        question: "What do wires do in a circuit?",
        stage: "recognise",
        options: [
            "Join the components together",
            "Store electricity",
            "Produce sound",
            "Make light"
        ],

        explanation:
            "Wires connect components so electricity can flow.",

        difficulty: 1,
        correctAnswer: "Join the components together",
        estimatedSeconds: 15,

        tags: ["science", "wires", "circuits"]
    },

    {
        id: "sci-switches-005",
        skillId: "switchesAndComponents",
        question: "What happens when a switch is closed?",
        stage: "recognise",
        options: [
            "The circuit is complete.",
            "The battery is removed.",
            "The wires disappear.",
            "The bulb breaks."
        ],

        explanation:
            "Closing the switch completes the circuit and allows electricity to flow.",

        difficulty: 1,
        correctAnswer: "The circuit is complete.",
        estimatedSeconds: 15,

        tags: ["science", "switch", "circuits"]
    },

    {
        id: "sci-switches-006",
        skillId: "switchesAndComponents",
        question: "What happens when a switch is open?",
        stage: "recognise",
        options: [
            "The circuit is broken.",
            "The bulb becomes brighter.",
            "The battery doubles in size.",
            "The wires heat up."
        ],

        explanation:
            "An open switch creates a gap so electricity cannot flow.",

        difficulty: 1,
        correctAnswer: "The circuit is broken.",
        estimatedSeconds: 15,

        tags: ["science", "switch"]
    },

    {
        id: "sci-switches-007",
        skillId: "switchesAndComponents",
        question: "Which component is designed to control the flow of electricity?",
        stage: "recognise",
        options: [
            "Switch",
            "Battery",
            "Bulb",
            "Wire"
        ],

        explanation:
            "A switch allows you to turn a circuit on and off.",

        difficulty: 1,
        correctAnswer: "Switch",
        estimatedSeconds: 15,

        tags: ["science", "switch"]
    },

    {
        id: "sci-switches-008",
        skillId: "switchesAndComponents",
        question: "Which component is most likely to glow in a simple circuit?",
        stage: "recognise",
        options: [
            "Bulb",
            "Battery",
            "Wire",
            "Switch"
        ],

        explanation:
            "The bulb lights when electricity flows through it.",

        difficulty: 1,
        correctAnswer: "Bulb",
        estimatedSeconds: 20,

        tags: ["science", "bulb"]
    },

    {
        id: "sci-switches-009",
        skillId: "switchesAndComponents",
        question: "Which item is NOT usually part of a simple electrical circuit?",
        stage: "recognise",
        options: [
            "Book",
            "Battery",
            "Bulb",
            "Wire"
        ],

        explanation:
            "A book is not an electrical component.",

        difficulty: 1,
        correctAnswer: "Book",
        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-switches-010",
        skillId: "switchesAndComponents",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "A switch can turn a bulb on and off.",
            "A switch makes electricity.",
            "A bulb stores electricity.",
            "A battery is a wire."
        ],

        explanation:
            "Switches control the flow of electricity through the circuit.",

        difficulty: 1,
        correctAnswer: "A switch can turn a bulb on and off.",
        estimatedSeconds: 20,

        tags: ["science", "switch", "electricity"]
    },

    {
        id: "sci-switches-011",
        skillId: "switchesAndComponents",
        question: "Why does opening a switch make the bulb go out?",
        stage: "recognise",
        options: [
            "It breaks the circuit.",
            "It removes the battery.",
            "It cools the bulb.",
            "It makes the bulb invisible."
        ],

        explanation:
            "An open switch creates a gap so electricity cannot flow.",

        difficulty: 2,
        correctAnswer: "It breaks the circuit.",
        estimatedSeconds: 20,

        tags: ["science", "switch", "circuits"]
    },

    {
        id: "sci-switches-012",
        skillId: "switchesAndComponents",
        question: "Why is a battery needed in a simple circuit?",
        stage: "recognise",
        options: [
            "It provides electrical energy.",
            "It connects the wires.",
            "It opens the switch.",
            "It makes the bulb."
        ],

        explanation:
            "Without a battery, there is no electrical energy to power the circuit.",

        difficulty: 2,
        correctAnswer: "It provides electrical energy.",
        estimatedSeconds: 20,

        tags: ["science", "battery"]
    },

    {
        id: "sci-switches-013",
        skillId: "switchesAndComponents",
        question: "Which set contains only electrical components?",
        stage: "recognise",
        options: [
            "Battery, bulb, wire and switch",
            "Battery, pencil and ruler",
            "Bulb, chair and wire",
            "Switch, book and battery"
        ],

        explanation:
            "These are all common parts of a simple electrical circuit.",

        difficulty: 2,
        correctAnswer: "Battery, bulb, wire and switch",
        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-switches-014",
        skillId: "switchesAndComponents",
        question: "What is the purpose of connecting wires between components?",
        stage: "recognise",
        options: [
            "To create a complete path for electricity",
            "To make the battery heavier",
            "To make the bulb brighter without electricity",
            "To stop the circuit working"
        ],

        explanation:
            "The wires create a path for electrical current to flow.",

        difficulty: 2,
        correctAnswer: "To create a complete path for electricity",
        estimatedSeconds: 20,

        tags: ["science", "wires"]
    },

    {
        id: "sci-switches-015",
        skillId: "switchesAndComponents",
        question: "Which change would allow a bulb to light after the switch has been left open?",
        stage: "recognise",
        options: [
            "Close the switch.",
            "Remove the bulb.",
            "Disconnect a wire.",
            "Take away the battery."
        ],

        explanation:
            "Closing the switch completes the circuit.",

        difficulty: 2,
        correctAnswer: "Close the switch.",
        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-switches-016",
        skillId: "switchesAndComponents",
        question: "Why is every component connected in a complete circuit?",
        stage: "recognise",
        options: [
            "So electricity can travel all the way around the circuit.",
            "To make the battery larger.",
            "To stop the bulb glowing.",
            "To increase the weight of the circuit."
        ],

        explanation:
            "Electricity needs a complete loop to flow.",

        difficulty: 2,
        correctAnswer: "So electricity can travel all the way around the circuit.",
        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-switches-017",
        skillId: "switchesAndComponents",
        question: "What happens when you close a switch in a working circuit?",
        stage: "recognise",
        options: [
            "Electricity begins flowing through the components.",
            "The battery disappears.",
            "The wires melt.",
            "The circuit breaks."
        ],

        explanation:
            "Closing the switch completes the path for electricity.",

        difficulty: 2,
        correctAnswer: "Electricity begins flowing through the components.",
        estimatedSeconds: 20,

        tags: ["science", "switch", "circuits"]
    },

    {
        id: "sci-switches-018",
        skillId: "switchesAndComponents",
        question: "Which component changes electrical energy into light?",
        stage: "recognise",
        options: [
            "Bulb",
            "Battery",
            "Wire",
            "Switch"
        ],

        explanation:
            "A bulb uses electrical energy to produce light.",

        difficulty: 2,
        correctAnswer: "Bulb",
        estimatedSeconds: 20,

        tags: ["science", "bulb"]
    },

    {
        id: "sci-switches-019",
        skillId: "switchesAndComponents",
        question: "Why is a switch useful in a torch?",
        stage: "recognise",
        options: [
            "It lets you turn the light on and off without removing the battery.",
            "It makes the batteries larger.",
            "It changes the colour of the light.",
            "It stores electricity."
        ],

        explanation:
            "A switch controls the flow of electricity without changing the other components.",

        difficulty: 2,
        correctAnswer: "It lets you turn the light on and off without removing the battery.",
        estimatedSeconds: 20,

        tags: ["science", "switch", "torch"]
    },

    {
        id: "sci-switches-020",
        skillId: "switchesAndComponents",
        question: "Which sentence best describes the purpose of electrical components?",
        stage: "recognise",
        options: [
            "Each component has a different job, and together they form a complete circuit that allows electricity to flow.",
            "Every component produces electricity.",
            "Switches are the only important part of a circuit.",
            "A battery works without any other components."
        ],

        explanation:
            "Each component has a specific role in helping a circuit work correctly.",

        difficulty: 2,
        correctAnswer: "Each component has a different job, and together they form a complete circuit that allows electricity to flow.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "components", "switch", "circuits"]
    }

    ]

};