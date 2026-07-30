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

        question: "What is the job of a switch in a circuit?",

        options: [
            "To open or close the circuit",
            "To make electricity",
            "To produce light",
            "To store electricity"
        ],

        answer: 0,

        explanation:
            "A switch controls whether electricity can flow around a circuit.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "switch"]
    },

    {
        id: "sci-switches-002",

        question: "Which component provides electrical energy?",

        options: [
            "Battery",
            "Bulb",
            "Wire",
            "Switch"
        ],

        answer: 0,

        explanation:
            "The battery supplies electrical energy to the circuit.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "battery", "electricity"]
    },

    {
        id: "sci-switches-003",

        question: "Which component lights up when electricity flows?",

        options: [
            "Bulb",
            "Battery",
            "Wire",
            "Switch"
        ],

        answer: 0,

        explanation:
            "The bulb changes electrical energy into light.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "bulb", "electricity"]
    },

    {
        id: "sci-switches-004",

        question: "What do wires do in a circuit?",

        options: [
            "Join the components together",
            "Store electricity",
            "Produce sound",
            "Make light"
        ],

        answer: 0,

        explanation:
            "Wires connect components so electricity can flow.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "wires", "circuits"]
    },

    {
        id: "sci-switches-005",

        question: "What happens when a switch is closed?",

        options: [
            "The circuit is complete.",
            "The battery is removed.",
            "The wires disappear.",
            "The bulb breaks."
        ],

        answer: 0,

        explanation:
            "Closing the switch completes the circuit and allows electricity to flow.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "switch", "circuits"]
    },

    {
        id: "sci-switches-006",

        question: "What happens when a switch is open?",

        options: [
            "The circuit is broken.",
            "The bulb becomes brighter.",
            "The battery doubles in size.",
            "The wires heat up."
        ],

        answer: 0,

        explanation:
            "An open switch creates a gap so electricity cannot flow.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "switch"]
    },

    {
        id: "sci-switches-007",

        question: "Which component is designed to control the flow of electricity?",

        options: [
            "Switch",
            "Battery",
            "Bulb",
            "Wire"
        ],

        answer: 0,

        explanation:
            "A switch allows you to turn a circuit on and off.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "switch"]
    },

    {
        id: "sci-switches-008",

        question: "Which component is most likely to glow in a simple circuit?",

        options: [
            "Bulb",
            "Battery",
            "Wire",
            "Switch"
        ],

        answer: 0,

        explanation:
            "The bulb lights when electricity flows through it.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "bulb"]
    },

    {
        id: "sci-switches-009",

        question: "Which item is NOT usually part of a simple electrical circuit?",

        options: [
            "Book",
            "Battery",
            "Bulb",
            "Wire"
        ],

        answer: 0,

        explanation:
            "A book is not an electrical component.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-switches-010",

        question: "Which statement is true?",

        options: [
            "A switch can turn a bulb on and off.",
            "A switch makes electricity.",
            "A bulb stores electricity.",
            "A battery is a wire."
        ],

        answer: 0,

        explanation:
            "Switches control the flow of electricity through the circuit.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "switch", "electricity"]
    },

    {
        id: "sci-switches-011",

        question: "Why does opening a switch make the bulb go out?",

        options: [
            "It breaks the circuit.",
            "It removes the battery.",
            "It cools the bulb.",
            "It makes the bulb invisible."
        ],

        answer: 0,

        explanation:
            "An open switch creates a gap so electricity cannot flow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "switch", "circuits"]
    },

    {
        id: "sci-switches-012",

        question: "Why is a battery needed in a simple circuit?",

        options: [
            "It provides electrical energy.",
            "It connects the wires.",
            "It opens the switch.",
            "It makes the bulb."
        ],

        answer: 0,

        explanation:
            "Without a battery, there is no electrical energy to power the circuit.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "battery"]
    },

    {
        id: "sci-switches-013",

        question: "Which set contains only electrical components?",

        options: [
            "Battery, bulb, wire and switch",
            "Battery, pencil and ruler",
            "Bulb, chair and wire",
            "Switch, book and battery"
        ],

        answer: 0,

        explanation:
            "These are all common parts of a simple electrical circuit.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-switches-014",

        question: "What is the purpose of connecting wires between components?",

        options: [
            "To create a complete path for electricity",
            "To make the battery heavier",
            "To make the bulb brighter without electricity",
            "To stop the circuit working"
        ],

        answer: 0,

        explanation:
            "The wires create a path for electrical current to flow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "wires"]
    },

    {
        id: "sci-switches-015",

        question: "Which change would allow a bulb to light after the switch has been left open?",

        options: [
            "Close the switch.",
            "Remove the bulb.",
            "Disconnect a wire.",
            "Take away the battery."
        ],

        answer: 0,

        explanation:
            "Closing the switch completes the circuit.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-switches-016",

        question: "Why is every component connected in a complete circuit?",

        options: [
            "So electricity can travel all the way around the circuit.",
            "To make the battery larger.",
            "To stop the bulb glowing.",
            "To increase the weight of the circuit."
        ],

        answer: 0,

        explanation:
            "Electricity needs a complete loop to flow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-switches-017",

        question: "What happens when you close a switch in a working circuit?",

        options: [
            "Electricity begins flowing through the components.",
            "The battery disappears.",
            "The wires melt.",
            "The circuit breaks."
        ],

        answer: 0,

        explanation:
            "Closing the switch completes the path for electricity.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "switch", "circuits"]
    },

    {
        id: "sci-switches-018",

        question: "Which component changes electrical energy into light?",

        options: [
            "Bulb",
            "Battery",
            "Wire",
            "Switch"
        ],

        answer: 0,

        explanation:
            "A bulb uses electrical energy to produce light.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "bulb"]
    },

    {
        id: "sci-switches-019",

        question: "Why is a switch useful in a torch?",

        options: [
            "It lets you turn the light on and off without removing the battery.",
            "It makes the batteries larger.",
            "It changes the colour of the light.",
            "It stores electricity."
        ],

        answer: 0,

        explanation:
            "A switch controls the flow of electricity without changing the other components.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "switch", "torch"]
    },

    {
        id: "sci-switches-020",

        question: "Which sentence best describes the purpose of electrical components?",

        options: [
            "Each component has a different job, and together they form a complete circuit that allows electricity to flow.",
            "Every component produces electricity.",
            "Switches are the only important part of a circuit.",
            "A battery works without any other components."
        ],

        answer: 0,

        explanation:
            "Each component has a specific role in helping a circuit work correctly.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "components", "switch", "circuits"]
    }

    ]

};