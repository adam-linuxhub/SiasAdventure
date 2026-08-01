import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const mountainFormation: SkillContent = {

    skillId: "mountainFormation",

    title: "How Mountains Form",

    description:
        "Learn how mountains are created through movements in the Earth's crust, volcanoes and natural processes.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-mf-001",
        skillId: "mountainFormation",
        question:
            "How are many mountains formed?",
        stage: "recognise",
        options: [
            "By movements of the Earth's crust",
            "By people building them",
            "By rivers only",
            "By weather alone"
        ],

        explanation:
            "Many mountains form when sections of the Earth's crust move and push upwards.",

        difficulty: 1,
        correctAnswer: "By movements of the Earth's crust",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "formation"]
    },

    {
        id: "geo-mf-002",
        skillId: "mountainFormation",
        question:
            "What is the Earth's crust?",
        stage: "recognise",
        options: [
            "The outer layer of the Earth",
            "The centre of the Earth",
            "A type of cloud",
            "A river feature"
        ],

        explanation:
            "The crust is the thin outer layer of the Earth where we live.",

        difficulty: 1,
        correctAnswer: "The outer layer of the Earth",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-003",
        skillId: "mountainFormation",
        question:
            "What are tectonic plates?",
        stage: "recognise",
        options: [
            "Large pieces of the Earth's crust that move",
            "Types of mountain animals",
            "Layers of clouds",
            "Ocean waves"
        ],

        explanation:
            "Tectonic plates are large sections of the Earth's crust that slowly move.",

        difficulty: 2,
        correctAnswer: "Large pieces of the Earth's crust that move",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "tectonic-plates"]
    },

    {
        id: "geo-mf-004",
        skillId: "mountainFormation",
        question:
            "What can happen when tectonic plates push together?",
        stage: "recognise",
        options: [
            "Land can be pushed upwards to form mountains",
            "The Earth becomes flat",
            "All rivers disappear",
            "Weather stops"
        ],

        explanation:
            "Pressure from moving plates can create mountain ranges.",

        difficulty: 2,
        correctAnswer: "Land can be pushed upwards to form mountains",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-005",
        skillId: "mountainFormation",
        question:
            "What is a volcano?",
        stage: "recognise",
        options: [
            "An opening in the Earth's crust where magma can escape",
            "A type of river",
            "A mountain path",
            "A weather event"
        ],

        explanation:
            "Volcanoes allow hot material from inside Earth to reach the surface.",

        difficulty: 1,
        correctAnswer: "An opening in the Earth's crust where magma can escape",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "volcanoes"]
    },

    {
        id: "geo-mf-006",
        skillId: "mountainFormation",
        question:
            "How can volcanoes create mountains?",
        stage: "recognise",
        options: [
            "Layers of lava can build up over time",
            "They remove all land",
            "They flatten the Earth",
            "They create rivers only"
        ],

        explanation:
            "Repeated volcanic eruptions can build volcanic mountains.",

        difficulty: 2,
        correctAnswer: "Layers of lava can build up over time",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains", "volcanoes"]
    },

    {
        id: "geo-mf-007",
        skillId: "mountainFormation",
        question:
            "What is magma?",
        stage: "recognise",
        options: [
            "Hot melted rock beneath the Earth's surface",
            "Cold water underground",
            "A type of soil",
            "A mountain animal"
        ],

        explanation:
            "Magma is melted rock found beneath the Earth's surface.",

        difficulty: 2,
        correctAnswer: "Hot melted rock beneath the Earth's surface",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "volcanoes"]
    },

    {
        id: "geo-mf-008",
        skillId: "mountainFormation",
        question:
            "What is lava?",
        stage: "recognise",
        options: [
            "Magma that reaches the Earth's surface",
            "Frozen water",
            "A type of cloud",
            "A river feature"
        ],

        explanation:
            "When magma escapes from a volcano, it is called lava.",

        difficulty: 2,
        correctAnswer: "Magma that reaches the Earth's surface",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "volcanoes"]
    },

    {
        id: "geo-mf-009",
        skillId: "mountainFormation",
        question:
            "What is an earthquake?",
        stage: "recognise",
        options: [
            "A shaking of the Earth's surface",
            "A type of mountain",
            "A weather pattern",
            "A river movement"
        ],

        explanation:
            "Earthquakes happen when energy is released inside the Earth.",

        difficulty: 1,
        correctAnswer: "A shaking of the Earth's surface",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-010",
        skillId: "mountainFormation",
        question:
            "Why do earthquakes happen?",
        stage: "recognise",
        options: [
            "Because tectonic plates can move suddenly",
            "Because rivers stop flowing",
            "Because clouds become heavy",
            "Because mountains disappear"
        ],

        explanation:
            "Movement of tectonic plates can cause earthquakes.",

        difficulty: 2,
        correctAnswer: "Because tectonic plates can move suddenly",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "tectonic-plates"]
    },

    {
        id: "geo-mf-011",
        skillId: "mountainFormation",
        question:
            "Are mountains formed quickly?",
        stage: "recognise",
        options: [
            "Usually no, they form over millions of years",
            "Always in one day",
            "Only during storms",
            "They are built by people"
        ],

        explanation:
            "Mountain formation is usually a very slow process.",

        difficulty: 1,
        correctAnswer: "Usually no, they form over millions of years",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-012",
        skillId: "mountainFormation",
        question:
            "What can wear mountains down over time?",
        stage: "recognise",
        options: [
            "Weathering and erosion",
            "Traffic lights",
            "Buildings",
            "Sunlight only"
        ],

        explanation:
            "Wind, water and ice can slowly wear away mountains.",

        difficulty: 2,
        correctAnswer: "Weathering and erosion",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-013",
        skillId: "mountainFormation",
        question:
            "What is erosion?",
        stage: "recognise",
        options: [
            "The wearing away and movement of rock and soil",
            "The creation of clouds",
            "The freezing of water",
            "The growth of plants"
        ],

        explanation:
            "Erosion changes landscapes by moving material.",

        difficulty: 2,
        correctAnswer: "The wearing away and movement of rock and soil",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "erosion"]
    },

    {
        id: "geo-mf-014",
        skillId: "mountainFormation",
        question:
            "How can glaciers change mountains?",
        stage: "recognise",
        options: [
            "By moving ice that cuts and shapes the land",
            "By creating buildings",
            "By stopping all weather",
            "By making rivers disappear"
        ],

        explanation:
            "Moving ice can carve valleys and reshape mountains.",

        difficulty: 2,
        correctAnswer: "By moving ice that cuts and shapes the land",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-015",
        skillId: "mountainFormation",
        question:
            "What is a mountain range?",
        stage: "recognise",
        options: [
            "A group of mountains formed together",
            "A single river",
            "A type of volcano only",
            "A flat area"
        ],

        explanation:
            "Mountain ranges contain groups of connected mountains.",

        difficulty: 1,
        correctAnswer: "A group of mountains formed together",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-016",
        skillId: "mountainFormation",
        question:
            "Why do scientists study how mountains form?",
        stage: "recognise",
        options: [
            "To understand how Earth changes",
            "To build mountains",
            "To stop all earthquakes",
            "To change the weather"
        ],

        explanation:
            "Studying mountains helps us understand Earth's processes.",

        difficulty: 2,
        correctAnswer: "To understand how Earth changes",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-017",
        skillId: "mountainFormation",
        question:
            "What happens when lava cools?",
        stage: "recognise",
        options: [
            "It becomes solid rock",
            "It becomes water",
            "It disappears",
            "It becomes clouds"
        ],

        explanation:
            "Cooling lava hardens into rock.",

        difficulty: 2,
        correctAnswer: "It becomes solid rock",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "volcanoes"]
    },

    {
        id: "geo-mf-018",
        skillId: "mountainFormation",
        question:
            "Which natural process can change mountains?",
        stage: "recognise",
        options: [
            "Erosion",
            "Shopping",
            "Building roads",
            "Painting"
        ],

        explanation:
            "Natural processes such as erosion slowly reshape mountains.",

        difficulty: 1,
        correctAnswer: "Erosion",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "mountains"]
    },

    {
        id: "geo-mf-019",
        skillId: "mountainFormation",
        question:
            "Why are tectonic plates important?",
        stage: "recognise",
        options: [
            "Their movement helps shape Earth's surface",
            "They create rivers directly",
            "They stop earthquakes",
            "They are made by humans"
        ],

        explanation:
            "Plate movement creates many changes to Earth's surface.",

        difficulty: 2,
        correctAnswer: "Their movement helps shape Earth's surface",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "tectonic-plates"]
    },

    {
        id: "geo-mf-020",
        skillId: "mountainFormation",
        question:
            "Which sentence best describes mountain formation?",
        stage: "recognise",
        options: [
            "Mountains form through natural processes such as plate movement and volcanoes",
            "Mountains are built by people",
            "Mountains appear overnight",
            "Mountains never change"
        ],

        explanation:
            "Mountains form and change through natural Earth processes.",

        difficulty: 2,
        correctAnswer: "Mountains form through natural processes such as plate movement and volcanoes",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "mountains"]
    }

    ]

};


export default mountainFormation;

export {

    mountainFormation

};
