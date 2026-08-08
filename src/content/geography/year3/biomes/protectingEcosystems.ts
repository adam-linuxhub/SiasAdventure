import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const protectingEcosystems: SkillContent = {

    skillId: "protectingEcosystems",

    title: "Protecting Ecosystems",

    description:
        "Learn why ecosystems are important, how humans affect them and how we can protect plants, animals and habitats.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "geo-pe-001",
        skillId: "protectingEcosystems",
        question:
            "What is an ecosystem?",
        stage: "recognise",
        options: [
            "Living things interacting with their environment",
            "Only animals in an area",
            "Only plants in an area",
            "A type of weather"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "An ecosystem includes plants, animals and the non-living environment around them.",

        difficulty: 1,
        correctAnswer: "Living things interacting with their environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-pe-002",
        skillId: "protectingEcosystems",
        question:
            "Why are ecosystems important?",
        stage: "recognise",
        options: [
            "They provide homes and resources for living things",
            "They prevent all life",
            "They only contain rocks",
            "They have no purpose"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Ecosystems support plants, animals and people.",

        difficulty: 1,
        correctAnswer: "They provide homes and resources for living things",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "ecosystems"]
    },

    {
        id: "geo-pe-003",
        skillId: "protectingEcosystems",
        question:
            "What is biodiversity?",
        stage: "recognise",
        options: [
            "The variety of living things in an area",
            "The amount of rainfall",
            "The height of a mountain",
            "The number of roads"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Biodiversity describes the number and variety of plants and animals.",

        difficulty: 1,
        correctAnswer: "The variety of living things in an area",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biodiversity"]
    },

    {
        id: "geo-pe-004",
        skillId: "protectingEcosystems",
        question:
            "Why is biodiversity important?",
        stage: "recognise",
        options: [
            "Different species help keep ecosystems healthy",
            "It stops all plants growing",
            "It removes habitats",
            "It makes environments identical"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "A variety of species helps ecosystems function properly.",

        difficulty: 2,
        correctAnswer: "Different species help keep ecosystems healthy",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "biodiversity"]
    },

    {
        id: "geo-pe-005",
        skillId: "protectingEcosystems",
        question:
            "What is a habitat?",
        stage: "recognise",
        options: [
            "The place where a living thing lives",
            "A type of weather",
            "A map symbol",
            "A mountain peak"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Habitats provide living things with food, water and shelter.",

        difficulty: 1,
        correctAnswer: "The place where a living thing lives",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-pe-006",
        skillId: "protectingEcosystems",
        question:
            "How can humans damage habitats?",
        stage: "recognise",
        options: [
            "By activities such as deforestation and pollution",
            "By protecting nature",
            "By planting trees",
            "By reducing waste"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Some human activities can destroy or change habitats.",

        difficulty: 1,
        correctAnswer: "By activities such as deforestation and pollution",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-pe-007",
        skillId: "protectingEcosystems",
        question:
            "What is deforestation?",
        stage: "recognise",
        options: [
            "The removal of large areas of forest",
            "The planting of trees",
            "The protection of forests",
            "The growth of new plants"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Deforestation occurs when forests are cleared.",

        difficulty: 1,
        correctAnswer: "The removal of large areas of forest",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "forests"]
    },

    {
        id: "geo-pe-008",
        skillId: "protectingEcosystems",
        question:
            "Why can deforestation be harmful?",
        stage: "recognise",
        options: [
            "It can destroy habitats for plants and animals",
            "It creates more habitats",
            "It increases biodiversity",
            "It stops climate change"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Removing forests can reduce habitats and biodiversity.",

        difficulty: 2,
        correctAnswer: "It can destroy habitats for plants and animals",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "forests"]
    },

    {
        id: "geo-pe-009",
        skillId: "protectingEcosystems",
        question:
            "What is pollution?",
        stage: "recognise",
        options: [
            "Harmful substances entering the environment",
            "Clean water",
            "Growing plants",
            "Protecting animals"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Pollution can damage ecosystems and living things.",

        difficulty: 1,
        correctAnswer: "Harmful substances entering the environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "pollution"]
    },

    {
        id: "geo-pe-010",
        skillId: "protectingEcosystems",
        question:
            "How can pollution affect animals?",
        stage: "recognise",
        options: [
            "It can harm their habitats and health",
            "It always helps them",
            "It creates new species",
            "It removes the need for food"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Pollution can make environments unsafe for animals.",

        difficulty: 2,
        correctAnswer: "It can harm their habitats and health",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "animals"]
    },

    {
        id: "geo-pe-011",
        skillId: "protectingEcosystems",
        question:
            "What does conservation mean?",
        stage: "recognise",
        options: [
            "Protecting and caring for the environment",
            "Destroying habitats",
            "Removing wildlife",
            "Creating pollution"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Conservation helps protect nature and ecosystems.",

        difficulty: 1,
        correctAnswer: "Protecting and caring for the environment",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "conservation"]
    },

    {
        id: "geo-pe-012",
        skillId: "protectingEcosystems",
        question:
            "How can people protect ecosystems?",
        stage: "recognise",
        options: [
            "Reduce pollution and protect habitats",
            "Destroy forests",
            "Waste resources",
            "Remove animals"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Careful use of resources helps protect ecosystems.",

        difficulty: 1,
        correctAnswer: "Reduce pollution and protect habitats",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-pe-013",
        skillId: "protectingEcosystems",
        question:
            "What is an endangered species?",
        stage: "recognise",
        options: [
            "A species at risk of becoming extinct",
            "A common animal",
            "A new building",
            "A type of weather"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Endangered species have populations that are becoming very small.",

        difficulty: 2,
        correctAnswer: "A species at risk of becoming extinct",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "animals"]
    },

    {
        id: "geo-pe-014",
        skillId: "protectingEcosystems",
        question:
            "What does extinct mean?",
        stage: "recognise",
        options: [
            "A species no longer exists",
            "A species has moved location",
            "A species is growing",
            "A species is protected"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "An extinct species has completely disappeared from Earth.",

        difficulty: 2,
        correctAnswer: "A species no longer exists",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "animals"]
    },

    {
        id: "geo-pe-015",
        skillId: "protectingEcosystems",
        question:
            "Why are national parks created?",
        stage: "recognise",
        options: [
            "To protect important natural areas",
            "To remove all wildlife",
            "To build more factories",
            "To destroy habitats"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Protected areas help conserve landscapes and wildlife.",

        difficulty: 1,
        correctAnswer: "To protect important natural areas",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "conservation"]
    },

    {
        id: "geo-pe-016",
        skillId: "protectingEcosystems",
        question:
            "Why are trees important in ecosystems?",
        stage: "recognise",
        options: [
            "They provide habitats and help absorb carbon dioxide",
            "They stop all animals living",
            "They create pollution",
            "They remove all water"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Trees support wildlife and play a role in the environment.",

        difficulty: 2,
        correctAnswer: "They provide habitats and help absorb carbon dioxide",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "forests"]
    },

    {
        id: "geo-pe-017",
        skillId: "protectingEcosystems",
        question:
            "How can people reduce pollution?",
        stage: "recognise",
        options: [
            "Recycle, reuse and reduce waste",
            "Throw rubbish into rivers",
            "Destroy habitats",
            "Waste more resources"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Reducing waste helps protect the environment.",

        difficulty: 1,
        correctAnswer: "Recycle, reuse and reduce waste",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "pollution"]
    },

    {
        id: "geo-pe-018",
        skillId: "protectingEcosystems",
        question:
            "Why should habitats be protected?",
        stage: "recognise",
        options: [
            "To help plants and animals survive",
            "To remove biodiversity",
            "To stop ecosystems",
            "To prevent nature"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Habitats are essential for the survival of living things.",

        difficulty: 1,
        correctAnswer: "To help plants and animals survive",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "habitats"]
    },

    {
        id: "geo-pe-019",
        skillId: "protectingEcosystems",
        question:
            "How can communities help the environment?",
        stage: "recognise",
        options: [
            "By working together to protect nature",
            "By increasing pollution",
            "By destroying habitats",
            "By wasting resources"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Community action can help protect local environments.",

        difficulty: 1,
        correctAnswer: "By working together to protect nature",
        estimatedSeconds: 20,

        tags: ["geography", "year3", "environment"]
    },

    {
        id: "geo-pe-020",
        skillId: "protectingEcosystems",
        question:
            "Which sentence best describes protecting ecosystems?",
        stage: "recognise",
        options: [
            "Protecting ecosystems helps keep plants, animals and environments healthy",
            "Ecosystems do not need protection",
            "Humans cannot affect nature",
            "Only cities need protection"
        ],

        hint: "Think about what best protects nature.",
        explanation:
            "Conservation helps maintain healthy ecosystems for the future.",

        difficulty: 2,
        correctAnswer: "Protecting ecosystems helps keep plants, animals and environments healthy",
        estimatedSeconds: 25,

        tags: ["geography", "year3", "ecosystems"]
    }

    ]

};


export default protectingEcosystems;

export {

    protectingEcosystems

};