import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const mountainFormation: SkillContent = {

    skillId: "mountainFormation",

    title: "How Mountains Form",

    description:
        "Learn how mountains are created through movements in the Earth's crust, volcanoes and natural processes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-mf-001",

        question:
            "How are many mountains formed?",

        options: [
            "By movements of the Earth's crust",
            "By people building them",
            "By rivers only",
            "By weather alone"
        ],

        answer: 0,

        explanation:
            "Many mountains form when sections of the Earth's crust move and push upwards.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "formation"]
    },

    {
        id: "geo-mf-002",

        question:
            "What is the Earth's crust?",

        options: [
            "The outer layer of the Earth",
            "The centre of the Earth",
            "A type of cloud",
            "A river feature"
        ],

        answer: 0,

        explanation:
            "The crust is the thin outer layer of the Earth where we live.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-003",

        question:
            "What are tectonic plates?",

        options: [
            "Large pieces of the Earth's crust that move",
            "Types of mountain animals",
            "Layers of clouds",
            "Ocean waves"
        ],

        answer: 0,

        explanation:
            "Tectonic plates are large sections of the Earth's crust that slowly move.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "tectonic-plates"]
    },

    {
        id: "geo-mf-004",

        question:
            "What can happen when tectonic plates push together?",

        options: [
            "Land can be pushed upwards to form mountains",
            "The Earth becomes flat",
            "All rivers disappear",
            "Weather stops"
        ],

        answer: 0,

        explanation:
            "Pressure from moving plates can create mountain ranges.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-005",

        question:
            "What is a volcano?",

        options: [
            "An opening in the Earth's crust where magma can escape",
            "A type of river",
            "A mountain path",
            "A weather event"
        ],

        answer: 0,

        explanation:
            "Volcanoes allow hot material from inside Earth to reach the surface.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "volcanoes"]
    },

    {
        id: "geo-mf-006",

        question:
            "How can volcanoes create mountains?",

        options: [
            "Layers of lava can build up over time",
            "They remove all land",
            "They flatten the Earth",
            "They create rivers only"
        ],

        answer: 0,

        explanation:
            "Repeated volcanic eruptions can build volcanic mountains.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "volcanoes"]
    },

    {
        id: "geo-mf-007",

        question:
            "What is magma?",

        options: [
            "Hot melted rock beneath the Earth's surface",
            "Cold water underground",
            "A type of soil",
            "A mountain animal"
        ],

        answer: 0,

        explanation:
            "Magma is melted rock found beneath the Earth's surface.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "volcanoes"]
    },

    {
        id: "geo-mf-008",

        question:
            "What is lava?",

        options: [
            "Magma that reaches the Earth's surface",
            "Frozen water",
            "A type of cloud",
            "A river feature"
        ],

        answer: 0,

        explanation:
            "When magma escapes from a volcano, it is called lava.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "volcanoes"]
    },

    {
        id: "geo-mf-009",

        question:
            "What is an earthquake?",

        options: [
            "A shaking of the Earth's surface",
            "A type of mountain",
            "A weather pattern",
            "A river movement"
        ],

        answer: 0,

        explanation:
            "Earthquakes happen when energy is released inside the Earth.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-010",

        question:
            "Why do earthquakes happen?",

        options: [
            "Because tectonic plates can move suddenly",
            "Because rivers stop flowing",
            "Because clouds become heavy",
            "Because mountains disappear"
        ],

        answer: 0,

        explanation:
            "Movement of tectonic plates can cause earthquakes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "tectonic-plates"]
    },

    {
        id: "geo-mf-011",

        question:
            "Are mountains formed quickly?",

        options: [
            "Usually no, they form over millions of years",
            "Always in one day",
            "Only during storms",
            "They are built by people"
        ],

        answer: 0,

        explanation:
            "Mountain formation is usually a very slow process.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-012",

        question:
            "What can wear mountains down over time?",

        options: [
            "Weathering and erosion",
            "Traffic lights",
            "Buildings",
            "Sunlight only"
        ],

        answer: 0,

        explanation:
            "Wind, water and ice can slowly wear away mountains.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-013",

        question:
            "What is erosion?",

        options: [
            "The wearing away and movement of rock and soil",
            "The creation of clouds",
            "The freezing of water",
            "The growth of plants"
        ],

        answer: 0,

        explanation:
            "Erosion changes landscapes by moving material.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "erosion"]
    },

    {
        id: "geo-mf-014",

        question:
            "How can glaciers change mountains?",

        options: [
            "By moving ice that cuts and shapes the land",
            "By creating buildings",
            "By stopping all weather",
            "By making rivers disappear"
        ],

        answer: 0,

        explanation:
            "Moving ice can carve valleys and reshape mountains.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-015",

        question:
            "What is a mountain range?",

        options: [
            "A group of mountains formed together",
            "A single river",
            "A type of volcano only",
            "A flat area"
        ],

        answer: 0,

        explanation:
            "Mountain ranges contain groups of connected mountains.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-016",

        question:
            "Why do scientists study how mountains form?",

        options: [
            "To understand how Earth changes",
            "To build mountains",
            "To stop all earthquakes",
            "To change the weather"
        ],

        answer: 0,

        explanation:
            "Studying mountains helps us understand Earth's processes.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-017",

        question:
            "What happens when lava cools?",

        options: [
            "It becomes solid rock",
            "It becomes water",
            "It disappears",
            "It becomes clouds"
        ],

        answer: 0,

        explanation:
            "Cooling lava hardens into rock.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "volcanoes"]
    },

    {
        id: "geo-mf-018",

        question:
            "Which natural process can change mountains?",

        options: [
            "Erosion",
            "Shopping",
            "Building roads",
            "Painting"
        ],

        answer: 0,

        explanation:
            "Natural processes such as erosion slowly reshape mountains.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-019",

        question:
            "Why are tectonic plates important?",

        options: [
            "Their movement helps shape Earth's surface",
            "They create rivers directly",
            "They stop earthquakes",
            "They are made by humans"
        ],

        answer: 0,

        explanation:
            "Plate movement creates many changes to Earth's surface.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["geography", "year3", "tectonic-plates"]
    },

    {
        id: "geo-mf-020",

        question:
            "Which sentence best describes mountain formation?",

        options: [
            "Mountains form through natural processes such as plate movement and volcanoes",
            "Mountains are built by people",
            "Mountains appear overnight",
            "Mountains never change"
        ],

        answer: 0,

        explanation:
            "Mountains form and change through natural Earth processes.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["geography", "year3", "mountains"]
    }

    ]

};