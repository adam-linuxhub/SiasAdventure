import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const electricalAppliances: SkillContent = {

    skillId: "electricalAppliances",

    title: "Electrical Appliances",

    description:
        "Learn to recognise everyday electrical appliances and understand whether they use mains electricity or batteries.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-electricity-001",

        question: "Which of these is an electrical appliance?",

        options: [
            "Television",
            "Book",
            "Chair",
            "Pencil"
        ],

        answer: 0,

        explanation:
            "A television uses electricity to work.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-002",

        question: "Which appliance usually runs on batteries?",

        options: [
            "Torch",
            "Toaster",
            "Kettle",
            "Washing machine"
        ],

        answer: 0,

        explanation:
            "Most torches are powered by batteries.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-003",

        question: "Which appliance is usually plugged into a wall socket?",

        options: [
            "Kettle",
            "Remote control",
            "Toy car",
            "Torch"
        ],

        answer: 0,

        explanation:
            "A kettle normally uses mains electricity from a wall socket.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-004",

        question: "What provides electricity to many homes?",

        options: [
            "The mains electricity supply",
            "The Moon",
            "The wind only",
            "Rainwater"
        ],

        answer: 0,

        explanation:
            "Most homes receive electricity through the mains supply.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-005",

        question: "Which item is most likely to use batteries?",

        options: [
            "TV remote",
            "Electric cooker",
            "Dishwasher",
            "Microwave"
        ],

        answer: 0,

        explanation:
            "TV remotes are usually powered by batteries.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-006",

        question: "Which of these needs electricity to work?",

        options: [
            "Laptop",
            "Notebook",
            "Wooden ruler",
            "Scissors"
        ],

        answer: 0,

        explanation:
            "A laptop is an electrical appliance.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-electricity-007",

        question: "Which appliance helps keep food cold?",

        options: [
            "Fridge",
            "Toaster",
            "Hairdryer",
            "Television"
        ],

        answer: 0,

        explanation:
            "A fridge uses electricity to keep food cold.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-008",

        question: "Which appliance is commonly found in a kitchen?",

        options: [
            "Toaster",
            "Torch",
            "Laptop",
            "Radio"
        ],

        answer: 0,

        explanation:
            "A toaster is a common kitchen appliance.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "kitchen"]
    },

    {
        id: "sci-electricity-009",

        question: "What do batteries provide?",

        options: [
            "Electrical energy",
            "Water",
            "Heat only",
            "Light only"
        ],

        answer: 0,

        explanation:
            "Batteries provide electrical energy to appliances.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-010",

        question: "Which statement is true?",

        options: [
            "Some appliances use batteries and others use mains electricity.",
            "All appliances use batteries.",
            "All appliances plug into a wall socket.",
            "No appliances need electricity."
        ],

        answer: 0,

        explanation:
            "Different electrical appliances use different sources of electricity.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-electricity-011",

        question: "Why is a television usually plugged into a wall socket?",

        options: [
            "It needs mains electricity.",
            "It needs water.",
            "It needs sunlight.",
            "It needs magnets."
        ],

        answer: 0,

        explanation:
            "Televisions normally use mains electricity because they need a continuous supply of power.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-012",

        question: "Which pair both usually use batteries?",

        options: [
            "Torch and remote control",
            "Kettle and toaster",
            "Fridge and washing machine",
            "Microwave and television"
        ],

        answer: 0,

        explanation:
            "Torches and remote controls are commonly battery-powered.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-013",

        question: "Which appliance is most suitable to take camping without mains electricity?",

        options: [
            "Battery-powered torch",
            "Electric oven",
            "Washing machine",
            "Dishwasher"
        ],

        answer: 0,

        explanation:
            "A battery-powered torch works without a mains supply.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-014",

        question: "What do a kettle, toaster and microwave have in common?",

        options: [
            "They usually use mains electricity.",
            "They all use batteries.",
            "They work without electricity.",
            "They are outdoor appliances."
        ],

        answer: 0,

        explanation:
            "These kitchen appliances are normally plugged into wall sockets.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-015",

        question: "Why do many portable appliances use batteries?",

        options: [
            "They can be used away from wall sockets.",
            "They never need electricity.",
            "They are always cheaper.",
            "They produce their own light."
        ],

        answer: 0,

        explanation:
            "Batteries allow appliances to be carried and used without being plugged in.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "portable"]
    },

    {
        id: "sci-electricity-016",

        question: "Which appliance would probably stop working if there was a power cut?",

        options: [
            "Fridge",
            "Battery torch",
            "Battery radio",
            "Remote control"
        ],

        answer: 0,

        explanation:
            "A fridge normally depends on mains electricity.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-017",

        question: "Which group contains only electrical appliances?",

        options: [
            "Laptop, kettle and television",
            "Book, pencil and ruler",
            "Chair, table and cupboard",
            "Ball, skipping rope and kite"
        ],

        answer: 0,

        explanation:
            "All three appliances require electricity to operate.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-018",

        question: "Why does a remote control need batteries?",

        options: [
            "To provide electrical energy.",
            "To keep it cool.",
            "To make it waterproof.",
            "To make it lighter."
        ],

        answer: 0,

        explanation:
            "The batteries provide the electricity needed for the remote to work.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-019",

        question: "Which appliance is least likely to be portable?",

        options: [
            "Washing machine",
            "Torch",
            "Remote control",
            "Battery radio"
        ],

        answer: 0,

        explanation:
            "Washing machines are large appliances that usually stay in one place.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-020",

        question: "Which sentence best describes electrical appliances?",

        options: [
            "Electrical appliances need electricity, which may come from batteries or the mains supply.",
            "Every appliance uses batteries.",
            "Electrical appliances work without electricity.",
            "Every appliance must be plugged into a wall socket."
        ],

        answer: 0,

        explanation:
            "Some appliances use batteries while others use mains electricity, but all require electrical energy to operate.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["science", "electricity", "appliances", "mains", "batteries"]
    }

    ]

};