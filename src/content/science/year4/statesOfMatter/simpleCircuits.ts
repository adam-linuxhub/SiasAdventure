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

        question: "What is needed for a simple electrical circuit to work?",

        options: [
            "A complete circuit",
            "Only a battery",
            "Only a bulb",
            "Only wires"
        ],

        answer: 0,

        explanation:
            "Electricity can only flow when the circuit is complete.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "circuits"]
    },

    {
        id: "sci-circuit-002",

        question: "Which component provides electrical energy in a simple circuit?",

        options: [
            "Battery",
            "Bulb",
            "Wire",
            "Switch"
        ],

        answer: 0,

        explanation:
            "The battery supplies the electrical energy.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "battery"]
    },

    {
        id: "sci-circuit-003",

        question: "What do wires do in a circuit?",

        options: [
            "Connect the components",
            "Store electricity",
            "Produce light",
            "Turn the circuit off"
        ],

        answer: 0,

        explanation:
            "Wires connect the parts of a circuit so electricity can flow.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "wires"]
    },

    {
        id: "sci-circuit-004",

        question: "What does a bulb do in a circuit?",

        options: [
            "Produces light",
            "Stores electricity",
            "Connects wires",
            "Provides energy"
        ],

        answer: 0,

        explanation:
            "A bulb lights up when electricity flows through it.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "bulb"]
    },

    {
        id: "sci-circuit-005",

        question: "What is a switch used for?",

        options: [
            "To open or close the circuit",
            "To make electricity",
            "To hold the battery",
            "To brighten the bulb"
        ],

        answer: 0,

        explanation:
            "A switch controls whether electricity can flow.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "switch"]
    },

    {
        id: "sci-circuit-006",

        question: "What happens when a circuit is complete?",

        options: [
            "Electricity flows",
            "The battery disappears",
            "The wires melt",
            "Nothing happens"
        ],

        answer: 0,

        explanation:
            "Electricity flows around a complete circuit.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-007",

        question: "What happens if there is a gap in a circuit?",

        options: [
            "Electricity cannot flow",
            "The bulb gets brighter",
            "The battery gets bigger",
            "The wires glow"
        ],

        answer: 0,

        explanation:
            "A gap creates an incomplete circuit, stopping the flow of electricity.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-008",

        question: "Which component can turn a bulb on and off without removing the battery?",

        options: [
            "Switch",
            "Wire",
            "Battery",
            "Bulb"
        ],

        answer: 0,

        explanation:
            "Opening or closing the switch controls the circuit.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-circuit-009",

        question: "Which of these is part of a simple circuit?",

        options: [
            "Battery",
            "Book",
            "Scissors",
            "Ruler"
        ],

        answer: 0,

        explanation:
            "A battery is one of the basic circuit components.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-circuit-010",

        question: "Which statement is true?",

        options: [
            "A bulb lights when the circuit is complete.",
            "A bulb lights with only one wire.",
            "A battery works without a circuit.",
            "A switch produces electricity."
        ],

        answer: 0,

        explanation:
            "The bulb lights only when electricity can flow around a complete circuit.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-011",

        question: "Why does a bulb not light if one wire becomes disconnected?",

        options: [
            "The circuit is incomplete.",
            "The battery becomes empty immediately.",
            "The bulb becomes too cold.",
            "The switch becomes magnetic."
        ],

        answer: 0,

        explanation:
            "Electricity cannot flow if the circuit is broken.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-012",

        question: "Why is a battery important in a simple circuit?",

        options: [
            "It provides electrical energy.",
            "It connects the wires.",
            "It makes the bulb.",
            "It opens the switch."
        ],

        answer: 0,

        explanation:
            "The battery supplies the energy that makes electricity flow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "battery"]
    },

    {
        id: "sci-circuit-013",

        question: "A switch is opened. What happens?",

        options: [
            "The circuit is broken and the bulb goes out.",
            "The bulb becomes brighter.",
            "The battery becomes larger.",
            "The wires disappear."
        ],

        answer: 0,

        explanation:
            "An open switch creates a gap in the circuit.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-circuit-014",

        question: "Which group contains only circuit components?",

        options: [
            "Battery, bulb, wire and switch",
            "Battery, pencil and ruler",
            "Wire, chair and bulb",
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
        id: "sci-circuit-015",

        question: "Why must all the wires be connected properly?",

        options: [
            "So electricity can flow around the circuit.",
            "To make the battery heavier.",
            "To cool the bulb.",
            "To stop the switch moving."
        ],

        answer: 0,

        explanation:
            "Every connection is needed to complete the circuit.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "wires"]
    },

    {
        id: "sci-circuit-016",

        question: "Which change would stop a working circuit?",

        options: [
            "Removing one wire",
            "Using the same battery",
            "Keeping the switch closed",
            "Connecting the bulb"
        ],

        answer: 0,

        explanation:
            "Removing a wire creates a gap in the circuit.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-017",

        question: "What is the purpose of a complete circuit?",

        options: [
            "To allow electricity to flow from the battery through the components and back again.",
            "To keep the battery warm.",
            "To make wires stronger.",
            "To stop electricity moving."
        ],

        answer: 0,

        explanation:
            "Electricity flows in a complete loop.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits"]
    },

    {
        id: "sci-circuit-018",

        question: "Which component controls the flow of electricity?",

        options: [
            "Switch",
            "Bulb",
            "Wire",
            "Battery holder"
        ],

        answer: 0,

        explanation:
            "The switch opens or closes the circuit.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "switch"]
    },

    {
        id: "sci-circuit-019",

        question: "Why does the bulb light when the switch is closed?",

        options: [
            "Closing the switch completes the circuit.",
            "The bulb creates electricity.",
            "The wires become batteries.",
            "The switch glows."
        ],

        answer: 0,

        explanation:
            "Closing the switch allows electricity to flow.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "circuits", "switch"]
    },

    {
        id: "sci-circuit-020",

        question: "Which sentence best describes a simple electrical circuit?",

        options: [
            "A complete loop of connected components that allows electricity to flow from a battery through devices such as a bulb.",
            "A collection of electrical appliances.",
            "A battery on its own.",
            "A wire without a battery."
        ],

        answer: 0,

        explanation:
            "A simple circuit is a complete loop containing connected electrical components.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "circuits", "battery", "bulb"]
    }

    ]

};