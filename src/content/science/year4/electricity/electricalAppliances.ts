import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const electricalAppliances: SkillContent = {

    skillId: "electricalAppliances",

    title: "Electrical Appliances",

    description:
        "Learn to recognise everyday electrical appliances and understand whether they use mains electricity or batteries.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-electricity-001",
        skillId: "electricalAppliances",
        question: "Which of these is an electrical appliance?",
        stage: "recognise",
        options: [
            "Television",
            "Book",
            "Chair",
            "Pencil"
        ],

        explanation:
            "A television uses electricity to work.",

        difficulty: 1,
        correctAnswer: "Television",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-002",
        skillId: "electricalAppliances",
        question: "Which appliance usually runs on batteries?",
        stage: "recognise",
        options: [
            "Torch",
            "Toaster",
            "Kettle",
            "Washing machine"
        ],

        explanation:
            "Most torches are powered by batteries.",

        difficulty: 1,
        correctAnswer: "Torch",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-003",
        skillId: "electricalAppliances",
        question: "Which appliance is usually plugged into a wall socket?",
        stage: "recognise",
        options: [
            "Kettle",
            "Remote control",
            "Toy car",
            "Torch"
        ],

        explanation:
            "A kettle normally uses mains electricity from a wall socket.",

        difficulty: 1,
        correctAnswer: "Kettle",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-004",
        skillId: "electricalAppliances",
        question: "What provides electricity to many homes?",
        stage: "recognise",
        options: [
            "The mains electricity supply",
            "The Moon",
            "The wind only",
            "Rainwater"
        ],

        explanation:
            "Most homes receive electricity through the mains supply.",

        difficulty: 1,
        correctAnswer: "The mains electricity supply",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-005",
        skillId: "electricalAppliances",
        question: "Which item is most likely to use batteries?",
        stage: "recognise",
        options: [
            "TV remote",
            "Electric cooker",
            "Dishwasher",
            "Microwave"
        ],

        explanation:
            "TV remotes are usually powered by batteries.",

        difficulty: 1,
        correctAnswer: "TV remote",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-006",
        skillId: "electricalAppliances",
        question: "Which of these needs electricity to work?",
        stage: "recognise",
        options: [
            "Laptop",
            "Notebook",
            "Wooden ruler",
            "Scissors"
        ],

        explanation:
            "A laptop is an electrical appliance.",

        difficulty: 1,
        correctAnswer: "Laptop",
        estimatedSeconds: 15,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-electricity-007",
        skillId: "electricalAppliances",
        question: "Which appliance helps keep food cold?",
        stage: "recognise",
        options: [
            "Fridge",
            "Toaster",
            "Hairdryer",
            "Television"
        ],

        explanation:
            "A fridge uses electricity to keep food cold.",

        difficulty: 1,
        correctAnswer: "Fridge",
        estimatedSeconds: 15,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-008",
        skillId: "electricalAppliances",
        question: "Which appliance is commonly found in a kitchen?",
        stage: "recognise",
        options: [
            "Toaster",
            "Torch",
            "Laptop",
            "Radio"
        ],

        explanation:
            "A toaster is a common kitchen appliance.",

        difficulty: 1,
        correctAnswer: "Toaster",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "kitchen"]
    },

    {
        id: "sci-electricity-009",
        skillId: "electricalAppliances",
        question: "What do batteries provide?",
        stage: "recognise",
        options: [
            "Electrical energy",
            "Water",
            "Heat only",
            "Light only"
        ],

        explanation:
            "Batteries provide electrical energy to appliances.",

        difficulty: 1,
        correctAnswer: "Electrical energy",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-010",
        skillId: "electricalAppliances",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "Some appliances use batteries and others use mains electricity.",
            "All appliances use batteries.",
            "All appliances plug into a wall socket.",
            "No appliances need electricity."
        ],

        explanation:
            "Different electrical appliances use different sources of electricity.",

        difficulty: 1,
        correctAnswer: "Some appliances use batteries and others use mains electricity.",
        estimatedSeconds: 20,

        tags: ["science", "electricity"]
    },

    {
        id: "sci-electricity-011",
        skillId: "electricalAppliances",
        question: "Why is a television usually plugged into a wall socket?",
        stage: "recognise",
        options: [
            "It needs mains electricity.",
            "It needs water.",
            "It needs sunlight.",
            "It needs magnets."
        ],

        explanation:
            "Televisions normally use mains electricity because they need a continuous supply of power.",

        difficulty: 2,
        correctAnswer: "It needs mains electricity.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-012",
        skillId: "electricalAppliances",
        question: "Which pair both usually use batteries?",
        stage: "recognise",
        options: [
            "Torch and remote control",
            "Kettle and toaster",
            "Fridge and washing machine",
            "Microwave and television"
        ],

        explanation:
            "Torches and remote controls are commonly battery-powered.",

        difficulty: 2,
        correctAnswer: "Torch and remote control",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-013",
        skillId: "electricalAppliances",
        question: "Which appliance is most suitable to take camping without mains electricity?",
        stage: "recognise",
        options: [
            "Battery-powered torch",
            "Electric oven",
            "Washing machine",
            "Dishwasher"
        ],

        explanation:
            "A battery-powered torch works without a mains supply.",

        difficulty: 2,
        correctAnswer: "Battery-powered torch",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-014",
        skillId: "electricalAppliances",
        question: "What do a kettle, toaster and microwave have in common?",
        stage: "recognise",
        options: [
            "They usually use mains electricity.",
            "They all use batteries.",
            "They work without electricity.",
            "They are outdoor appliances."
        ],

        explanation:
            "These kitchen appliances are normally plugged into wall sockets.",

        difficulty: 2,
        correctAnswer: "They usually use mains electricity.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-015",
        skillId: "electricalAppliances",
        question: "Why do many portable appliances use batteries?",
        stage: "recognise",
        options: [
            "They can be used away from wall sockets.",
            "They never need electricity.",
            "They are always cheaper.",
            "They produce their own light."
        ],

        explanation:
            "Batteries allow appliances to be carried and used without being plugged in.",

        difficulty: 2,
        correctAnswer: "They can be used away from wall sockets.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "portable"]
    },

    {
        id: "sci-electricity-016",
        skillId: "electricalAppliances",
        question: "Which appliance would probably stop working if there was a power cut?",
        stage: "recognise",
        options: [
            "Fridge",
            "Battery torch",
            "Battery radio",
            "Remote control"
        ],

        explanation:
            "A fridge normally depends on mains electricity.",

        difficulty: 2,
        correctAnswer: "Fridge",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "mains"]
    },

    {
        id: "sci-electricity-017",
        skillId: "electricalAppliances",
        question: "Which group contains only electrical appliances?",
        stage: "recognise",
        options: [
            "Laptop, kettle and television",
            "Book, pencil and ruler",
            "Chair, table and cupboard",
            "Ball, skipping rope and kite"
        ],

        explanation:
            "All three appliances require electricity to operate.",

        difficulty: 2,
        correctAnswer: "Laptop, kettle and television",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-018",
        skillId: "electricalAppliances",
        question: "Why does a remote control need batteries?",
        stage: "recognise",
        options: [
            "To provide electrical energy.",
            "To keep it cool.",
            "To make it waterproof.",
            "To make it lighter."
        ],

        explanation:
            "The batteries provide the electricity needed for the remote to work.",

        difficulty: 2,
        correctAnswer: "To provide electrical energy.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "batteries"]
    },

    {
        id: "sci-electricity-019",
        skillId: "electricalAppliances",
        question: "Which appliance is least likely to be portable?",
        stage: "recognise",
        options: [
            "Washing machine",
            "Torch",
            "Remote control",
            "Battery radio"
        ],

        explanation:
            "Washing machines are large appliances that usually stay in one place.",

        difficulty: 2,
        correctAnswer: "Washing machine",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "appliances"]
    },

    {
        id: "sci-electricity-020",
        skillId: "electricalAppliances",
        question: "Which sentence best describes electrical appliances?",
        stage: "recognise",
        options: [
            "Electrical appliances need electricity, which may come from batteries or the mains supply.",
            "Every appliance uses batteries.",
            "Electrical appliances work without electricity.",
            "Every appliance must be plugged into a wall socket."
        ],

        explanation:
            "Some appliances use batteries while others use mains electricity, but all require electrical energy to operate.",

        difficulty: 2,
        correctAnswer: "Electrical appliances need electricity, which may come from batteries or the mains supply.",
        estimatedSeconds: 20,

        tags: ["science", "electricity", "appliances", "mains", "batteries"]
    }

    ]

};


export default electricalAppliances;

export {

    electricalAppliances

};
