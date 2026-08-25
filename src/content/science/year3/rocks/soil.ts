import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const soil: SkillContent = {

    skillId: "soil",

    title: "Soil",

    description:
        "Learn how soil is formed, the different types of soil and why soil is important for plants and living things.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

        {
            id: "sci-soil-001",
            skillId: "soil",
            question: "What is soil?",
            stage: "recognise",
            options: [
                "A mixture of rock, air, water and dead matter",
                "A layer made entirely from tiny pieces of rock",
                "A soft material made mostly from loose sand",
                "A natural layer containing water but no air"
            ],

            explanation:
                "Soil is a mixture containing rock particles, air, water and decayed living matter.",

            hint:
                "Think about what you might find between the spaces in soil, as well as the solid material itself.",

            difficulty: 1,
            correctAnswer: "A mixture of rock, air, water and dead matter",
            estimatedSeconds: 15,

            tags: ["science", "rocks", "soil"]
        },

        {
            id: "sci-soil-002",
            skillId: "soil",
            question: "Where do most plants grow?",
            stage: "recognise",
            options: [
                "In soil",
                "On high clouds",
                "On thick sheets of ice",
                "Deep beneath the sea"
            ],

            explanation:
                "Most plants grow in soil because it supports their roots and provides water and nutrients.",

            hint:
                "Think about where a plant's roots are found and what holds the plant in place.",

            difficulty: 1,
            correctAnswer: "In soil",
            estimatedSeconds: 15,

            tags: ["science", "soil", "plants"]
        },

        {
            id: "sci-soil-003",
            skillId: "soil",
            question: "What helps to make soil over a long time?",
            stage: "recognise",
            options: [
                "Rocks breaking apart",
                "Plastic slowly wearing down",
                "Glass being buried underground",
                "Metal objects becoming smaller"
            ],

            explanation:
                "Soil can form as rocks slowly break down into smaller particles over many years.",

            hint:
                "Think about which natural material can slowly break apart and become tiny particles.",

            difficulty: 1,
            correctAnswer: "Rocks breaking apart",
            estimatedSeconds: 15,

            tags: ["science", "soil", "rocks"]
        },

        {
            id: "sci-soil-004",
            skillId: "soil",
            question: "Which of these is a type of soil?",
            stage: "recognise",
            options: [
                "Clay",
                "Concrete",
                "Brick",
                "Plastic"
            ],

            explanation:
                "Clay is a type of soil made from very small mineral particles.",

            hint:
                "One of these materials occurs naturally as a type of soil rather than being manufactured.",

            difficulty: 1,
            correctAnswer: "Clay",
            estimatedSeconds: 15,

            tags: ["science", "soil", "clay"]
        },

        {
            id: "sci-soil-005",
            skillId: "soil",
            question: "Which soil is made of large grains?",
            stage: "recognise",
            options: [
                "Sandy soil",
                "Fine clay soil",
                "Rich compost soil",
                "Heavy waterlogged soil"
            ],

            explanation:
                "Sandy soil contains relatively large particles, so the grains can usually be felt easily.",

            hint:
                "Think about the type of soil whose individual grains feel rough and easy to notice.",

            difficulty: 1,
            correctAnswer: "Sandy soil",
            estimatedSeconds: 15,

            tags: ["science", "soil", "sand"]
        },

        {
            id: "sci-soil-006",
            skillId: "soil",
            question: "Which soil feels sticky when it is wet?",
            stage: "recognise",
            options: [
                "Clay soil",
                "Loose sandy soil",
                "Dry gravelly soil",
                "Soil containing large stones"
            ],

            explanation:
                "Wet clay soil can feel sticky because its very small particles hold together when mixed with water.",

            hint:
                "Think about the soil that can be shaped easily when wet and is also used to make pottery.",

            difficulty: 1,
            correctAnswer: "Clay soil",
            estimatedSeconds: 20,

            tags: ["science", "soil", "clay"]
        },

        {
            id: "sci-soil-007",
            skillId: "soil",
            question: "Why is soil important?",
            stage: "recognise",
            options: [
                "It helps plants grow",
                "It makes the Sun shine",
                "It causes clouds to form",
                "It makes solid rocks float"
            ],

            explanation:
                "Soil supports plants and provides their roots with water and nutrients.",

            hint:
                "Think about what plants need from the ground to stay alive and grow.",

            difficulty: 1,
            correctAnswer: "It helps plants grow",
            estimatedSeconds: 20,

            tags: ["science", "soil", "plants"]
        },

        {
            id: "sci-soil-008",
            skillId: "soil",
            question: "Which living thing might live in soil?",
            stage: "recognise",
            options: [
                "Earthworm",
                "Ocean dolphin",
                "Large blue whale",
                "Great white shark"
            ],

            explanation:
                "Earthworms live in soil and help improve it by making tunnels as they move through the ground.",

            hint:
                "Look for the animal that is adapted to moving through soil rather than swimming in water.",

            difficulty: 1,
            correctAnswer: "Earthworm",
            estimatedSeconds: 20,

            tags: ["science", "soil", "living-things"]
        },

        {
            id: "sci-soil-009",
            skillId: "soil",
            question: "What can be found in healthy soil?",
            stage: "recognise",
            options: [
                "Tiny living organisms",
                "Only pieces of broken rock",
                "Only water between the soil particles",
                "Only grains of sand with nothing living"
            ],

            explanation:
                "Healthy soil contains many tiny living organisms, including microscopic creatures and other small forms of life.",

            hint:
                "Healthy soil is more than just dirt. Think about whether tiny living things could make their home there.",

            difficulty: 1,
            correctAnswer: "Tiny living organisms",
            estimatedSeconds: 20,

            tags: ["science", "soil", "living-things"]
        },

        {
            id: "sci-soil-010",
            skillId: "soil",
            question: "Why do roots grow into soil?",
            stage: "recognise",
            options: [
                "To take in water and nutrients",
                "To reach the clouds above the plant",
                "To help flowers float above the ground",
                "To find sunlight hidden underneath the soil"
            ],

            explanation:
                "Plant roots take in water and nutrients from the soil, while also helping to anchor the plant.",

            hint:
                "Roots are underground because they need to collect important resources from the soil.",

            difficulty: 1,
            correctAnswer: "To take in water and nutrients",
            estimatedSeconds: 20,

            tags: ["science", "soil", "plants"]
        },

        {
            id: "sci-soil-011",
            skillId: "soil",
            question: "What is humus?",
            stage: "recognise",
            options: [
                "Decayed plant and animal material",
                "A hard layer of solid rock",
                "A type of plastic found underground",
                "Water trapped beneath the soil surface"
            ],

            explanation:
                "Humus is made from dead plant and animal material that has decomposed and become part of the soil.",

            hint:
                "Think about what happens to fallen leaves and other dead living material after a long time.",

            difficulty: 2,
            correctAnswer: "Decayed plant and animal material",
            estimatedSeconds: 20,

            tags: ["science", "soil", "humus", "decomposition"]
        },

        {
            id: "sci-soil-012",
            skillId: "soil",
            question: "Which soil usually lets water drain through it quickly?",
            stage: "recognise",
            options: [
                "Sandy soil",
                "Heavy clay soil",
                "Very compact soil",
                "Soil packed tightly with tiny particles"
            ],

            explanation:
                "Sandy soil has relatively large spaces between its particles, so water can drain through it quickly.",

            hint:
                "Think about which soil has larger gaps between its grains, allowing water to pass through more easily.",

            difficulty: 2,
            correctAnswer: "Sandy soil",
            estimatedSeconds: 25,

            tags: ["science", "soil", "sand", "water"]
        },

        {
            id: "sci-soil-013",
            skillId: "soil",
            question: "Why can soil contain air?",
            stage: "recognise",
            options: [
                "There are spaces between soil particles",
                "Plants create all the air underground",
                "Rain changes completely into air inside soil",
                "Rocks produce air whenever they become wet"
            ],

            explanation:
                "Small spaces between soil particles can contain air, which provides oxygen needed by plant roots and soil organisms.",

            hint:
                "Soil particles do not fit together perfectly. Think about what can fill the gaps between them.",

            difficulty: 2,
            correctAnswer: "There are spaces between soil particles",
            estimatedSeconds: 25,

            tags: ["science", "soil", "air", "plants"]
        },

        {
            id: "sci-soil-014",
            skillId: "soil",
            question: "What happens when dead leaves decompose in soil?",
            stage: "recognise",
            options: [
                "They add organic matter to the soil",
                "They turn instantly into solid rock",
                "They remove every nutrient from the ground",
                "They permanently stop water moving through the soil"
            ],

            explanation:
                "As dead leaves decompose, they break down and add organic matter and nutrients to the soil.",

            hint:
                "Think about how dead leaves can eventually become part of the soil instead of staying as leaves.",

            difficulty: 2,
            correctAnswer: "They add organic matter to the soil",
            estimatedSeconds: 25,

            tags: ["science", "soil", "decomposition", "organic-matter"]
        },
                {
            id: "sci-soil-015",
            skillId: "soil",
            question: "Which soil would be best for a cactus?",
            stage: "recognise",
            options: [
                "Sandy soil",
                "Clay soil that holds water",
                "Very wet soil with poor drainage",
                "Heavy soil packed tightly together"
            ],

            explanation:
                "Cacti are adapted to dry conditions, so sandy soil that drains water well is usually best.",

            hint:
                "Cacti need water, but their roots should not stay wet for too long. Think about which soil drains well.",

            difficulty: 2,
            correctAnswer: "Sandy soil",
            estimatedSeconds: 20,

            tags: ["science", "soil", "sand", "plants"]
        },

        {
            id: "sci-soil-016",
            skillId: "soil",
            question: "What do earthworms do that helps soil?",
            stage: "recognise",
            options: [
                "They mix and loosen it",
                "They turn the soil into solid rock",
                "They remove useful nutrients from the ground",
                "They make the soil completely dry"
            ],

            explanation:
                "Earthworms make tunnels as they move through soil, helping to mix and loosen it so air and water can move through.",

            hint:
                "Imagine an earthworm moving through the ground and leaving small tunnels behind it.",

            difficulty: 2,
            correctAnswer: "They mix and loosen it",
            estimatedSeconds: 20,

            tags: ["science", "soil", "earthworms"]
        },

        {
            id: "sci-soil-017",
            skillId: "soil",
            question: "Why is air in soil important?",
            stage: "recognise",
            options: [
                "Plant roots need air to stay healthy",
                "It makes underground rocks grow larger",
                "It changes ordinary soil into sand",
                "It means plants never need water"
            ],

            explanation:
                "Plant roots need oxygen from the air in spaces between soil particles to stay healthy and grow properly.",

            hint:
                "Roots are living parts of plants. Like other living things, they need oxygen.",

            difficulty: 2,
            correctAnswer: "Plant roots need air to stay healthy",
            estimatedSeconds: 20,

            tags: ["science", "soil", "plants"]
        },

        {
            id: "sci-soil-018",
            skillId: "soil",
            question: "Which statement about soil is true?",
            stage: "recognise",
            options: [
                "Different soils have different properties",
                "Every type of soil has exactly the same properties",
                "Soil is made entirely from pieces of rock",
                "Plants can never grow successfully in soil"
            ],

            explanation:
                "Different soils have different properties. For example, sandy soil drains quickly while clay soil holds more water.",

            hint:
                "Compare sandy soil with clay soil. Do they behave in exactly the same way when water is added?",

            difficulty: 2,
            correctAnswer: "Different soils have different properties",
            estimatedSeconds: 20,

            tags: ["science", "soil", "properties"]
        },

        {
            id: "sci-soil-019",
            skillId: "soil",
            question: "Why is healthy soil important for farming?",
            stage: "recognise",
            options: [
                "It helps crops grow well",
                "It makes rain fall directly onto every crop",
                "It creates sunlight for plants to use",
                "It prevents seeds from developing into plants"
            ],

            explanation:
                "Healthy soil provides crops with support, water, nutrients and suitable conditions for their roots.",

            hint:
                "Farmers need healthy plants to produce crops. Think about what the roots need from the soil.",

            difficulty: 2,
            correctAnswer: "It helps crops grow well",
            estimatedSeconds: 20,

            tags: ["science", "soil", "farming"]
        },

        {
            id: "sci-soil-020",
            skillId: "soil",
            question: "Which sentence best describes soil?",
            stage: "recognise",
            options: [
                "It is a mixture that supports plants and many living things",
                "It is made only from broken pieces of rock",
                "It is simply water found underneath the ground",
                "It is a natural material that contains no living things"
            ],

            explanation:
                "Soil contains rock particles, air, water and organic matter. It supports plants and provides a habitat for many living organisms.",

            hint:
                "Choose the answer that describes both what soil is made of and why it is important.",

            difficulty: 2,
            correctAnswer: "It is a mixture that supports plants and many living things",
            estimatedSeconds: 20,

            tags: ["science", "soil", "plants", "living-things"]
        }

    ]
};

export default soil;

export {
    soil
};