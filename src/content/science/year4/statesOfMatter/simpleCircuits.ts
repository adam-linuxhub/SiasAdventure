import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const simpleCircuits: SkillContent = {

    skillId: "simpleCircuits",

    title: "Simple Circuits",

    description:
        "Learn the parts of a simple electrical circuit and how electricity flows around a complete circuit.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-circuit-001",
        skillId: "simpleCircuits",
        question: "What is needed for a simple electrical circuit to work?",
        stage: "recognise",
        options: [
            "A complete circuit",
            "Only a battery",
            "Only a bulb",
            "Only wires"
        ],

        explanation:
            "Electricity can only flow when the circuit is complete.",

        difficulty: 1,
        correctAnswer: "A complete circuit",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "circuits"]
    },

    {
        id: "sci-circuit-002",
        skillId: "simpleCircuits",
        question: "Which component provides electrical energy in a simple circuit?",
        stage: "recognise",
        options: [
            "Battery",
            "Bulb",
            "Wire",
            "Switch"
        ],

        explanation:
            "The battery supplies the electrical energy.",

        difficulty: 1,
        correctAnswer: "Battery",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "battery"]
    },

    {
        id: "sci-circuit-003",
        skillId: "simpleCircuits",
        question: "What do wires do in a circuit?",
        stage: "recognise",
        options: [
            "Connect the components",
            "Store electricity",
            "Produce light",
            "Turn the circuit off"
        ],

        explanation:
            "Wires connect the parts of a circuit so electricity can flow.",

        difficulty: 1,
        correctAnswer: "Connect the components",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "wires"]
    },

    {
        id: "sci-circuit-004",
        skillId: "simpleCircuits",
        question: "What does a bulb do in a circuit?",
        stage: "recognise",
        options: [
            "Produces light",
            "Stores electricity",
            "Connects wires",
            "Provides energy"
        ],

        explanation:
            "A bulb lights up when electricity flows through it.",

        difficulty: 1,
        correctAnswer: "Produces light",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "bulb"]
    },

    {
        id: "sci-circuit-005",
        skillId: "simpleCircuits",
        question: "What is a switch used for?",
        stage: "recognise",
        options: [
            "To open or close the circuit",
            "To make electricity",
            "To hold the battery",
            "To brighten the bulb"
        ],

        explanation:
            "A switch controls whether electricity can flow.",

        difficulty: 1,
        correctAnswer: "To open or close the circuit",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "switch"]
    },

    {
        id: "sci-circuit-006",
        skillId: "simpleCircuits",
        question: "What happens when a circuit is complete?",
        stage: "recognise",
        options: [
            "Electricity flows",
            "The battery disappears",
            "The wires melt",
            "Nothing happens"
        ],

        explanation:
            "Electricity flows around a complete circuit.",

        difficulty: 1,
        correctAnswer: "Electricity flows",
        estimatedSeconds: 15,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-007",
        skillId: "simpleCircuits",
        question: "What happens if there is a gap in a circuit?",
        stage: "recognise",
        options: [
            "Electricity cannot flow",
            "The bulb gets brighter",
            "The battery gets bigger",
            "The wires glow"
        ],

        explanation:
            "A gap creates an incomplete circuit, stopping the flow of electricity.",

        difficulty: 1,
        correctAnswer: "Electricity cannot flow",
        estimatedSeconds: 15,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-008",
        skillId: "simpleCircuits",
        question: "Which component can turn a bulb on and off without removing the battery?",
        stage: "recognise",
        options: [
            "Switch",
            "Wire",
            "Battery",
            "Bulb"
        ],

        explanation:
            "Opening or closing the switch controls the circuit.",

        difficulty: 1,
        correctAnswer: "Switch",
        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-circuit-009",
        skillId: "simpleCircuits",
        question: "Which of these is part of a simple circuit?",
        stage: "recognise",
        options: [
            "Battery",
            "Book",
            "Scissors",
            "Ruler"
        ],

        explanation:
            "A battery is one of the basic circuit components.",

        difficulty: 1,
        correctAnswer: "Battery",
        estimatedSeconds: 20,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-circuit-010",
        skillId: "simpleCircuits",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "A bulb lights when the circuit is complete.",
            "A bulb lights with only one wire.",
            "A battery works without a circuit.",
            "A switch produces electricity."
        ],

        explanation:
            "The bulb lights only when electricity can flow around a complete circuit.",

        difficulty: 1,
        correctAnswer: "A bulb lights when the circuit is complete.",
        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-011",
        skillId: "simpleCircuits",
        question: "Why does a bulb not light if one wire becomes disconnected?",
        stage: "recognise",
        options: [
            "The circuit is incomplete.",
            "The battery becomes empty immediately.",
            "The bulb becomes too cold.",
            "The switch becomes magnetic."
        ],

        explanation:
            "Electricity cannot flow if the circuit is broken.",

        difficulty: 2,
        correctAnswer: "The circuit is incomplete.",
        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-012",
        skillId: "simpleCircuits",
        question: "Why is a battery important in a simple circuit?",
        stage: "recognise",
        options: [
            "It provides electrical energy.",
            "It connects the wires.",
            "It makes the bulb.",
            "It opens the switch."
        ],

        explanation:
            "The battery supplies the energy that makes electricity flow.",

        difficulty: 2,
        correctAnswer: "It provides electrical energy.",
        estimatedSeconds: 20,

        tags: ["science", "battery"]
    },

    {
        id: "sci-circuit-013",
        skillId: "simpleCircuits",
        question: "A switch is opened. What happens?",
        stage: "recognise",
        options: [
            "The circuit is broken and the bulb goes out.",
            "The bulb becomes brighter.",
            "The battery becomes larger.",
            "The wires disappear."
        ],

        explanation:
            "An open switch creates a gap in the circuit.",

        difficulty: 2,
        correctAnswer: "The circuit is broken and the bulb goes out.",
        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-circuit-014",
        skillId: "simpleCircuits",
        question: "Which group contains only circuit components?",
        stage: "recognise",
        options: [
            "Battery, bulb, wire and switch",
            "Battery, pencil and ruler",
            "Wire, chair and bulb",
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
        id: "sci-circuit-015",
        skillId: "simpleCircuits",
        question: "Why must all the wires be connected properly?",
        stage: "recognise",
        options: [
            "So electricity can flow around the circuit.",
            "To make the battery heavier.",
            "To cool the bulb.",
            "To stop the switch moving."
        ],

        explanation:
            "Every connection is needed to complete the circuit.",

        difficulty: 2,
        correctAnswer: "So electricity can flow around the circuit.",
        estimatedSeconds: 20,

        tags: ["science", "wires"]
    },

    {
        id: "sci-circuit-016",
        skillId: "simpleCircuits",
        question: "Which change would stop a working circuit?",
        stage: "recognise",
        options: [
            "Removing one wire",
            "Using the same battery",
            "Keeping the switch closed",
            "Connecting the bulb"
        ],

        explanation:
            "Removing a wire creates a gap in the circuit.",

        difficulty: 2,
        correctAnswer: "Removing one wire",
        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-017",
        skillId: "simpleCircuits",
        question: "What is the purpose of a complete circuit?",
        stage: "recognise",
        options: [
            "To allow electricity to flow from the battery through the components and back again.",
            "To keep the battery warm.",
            "To make wires stronger.",
            "To stop electricity moving."
        ],

        explanation:
            "Electricity flows in a complete loop.",

        difficulty: 2,
        correctAnswer: "To allow electricity to flow from the battery through the components and back again.",
        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-018",
        skillId: "simpleCircuits",
        question: "Which component controls the flow of electricity?",
        stage: "recognise",
        options: [
            "Switch",
            "Bulb",
            "Wire",
            "Battery holder"
        ],

        explanation:
            "The switch opens or closes the circuit.",

        difficulty: 2,
        correctAnswer: "Switch",
        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-circuit-019",
        skillId: "simpleCircuits",
        question: "Why does the bulb light when the switch is closed?",
        stage: "recognise",
        options: [
            "Closing the switch completes the circuit.",
            "The bulb creates electricity.",
            "The wires become batteries.",
            "The switch glows."
        ],

        explanation:
            "Closing the switch allows electricity to flow.",

        difficulty: 2,
        correctAnswer: "Closing the switch completes the circuit.",
        estimatedSeconds: 20,

        tags: ["science", "circuits", "switch"]
    },

    {
        id: "sci-circuit-020",
        skillId: "simpleCircuits",
        question: "Which sentence best describes a simple electrical circuit?",
        stage: "recognise",
        options: [
            "A complete loop of connected components that allows electricity to flow from a battery through devices such as a bulb.",
            "A collection of electrical appliances.",
            "A battery on its own.",
            "A wire without a battery."
        ],

        explanation:
            "A simple circuit is a complete loop containing connected electrical components.",

        difficulty: 2,
        correctAnswer: "A complete loop of connected components that allows electricity to flow from a battery through devices such as a bulb.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "circuits", "battery", "bulb"]
    }

    ]

};