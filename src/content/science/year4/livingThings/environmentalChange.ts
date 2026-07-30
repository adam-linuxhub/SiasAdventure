import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const environmentalChange: SkillContent = {

    skillId: "environmentalChange",

    title: "Environmental Change",

    description:
        "Learn how changes to habitats can help or harm living things and what people can do to protect the environment.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-environment-001",
        skillId: "environmentalChange",
        question: "What is an environment?",

        options: [
            "The surroundings where living things live",
            "Only the weather",
            "A type of animal",
            "A kind of plant"
        ],

        explanation:
            "An environment includes everything around a living thing.",

        difficulty: 1,
        correctAnswer: "The surroundings where living things live",
        estimatedSeconds: 15,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-002",
        skillId: "environmentalChange",
        question: "Which change could harm a woodland habitat?",

        options: [
            "Cutting down many trees",
            "Planting wildflowers",
            "Building bird boxes",
            "Cleaning a stream"
        ],

        explanation:
            "Removing many trees destroys homes for woodland plants and animals.",

        difficulty: 1,
        correctAnswer: "Cutting down many trees",
        estimatedSeconds: 15,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-environment-003",
        skillId: "environmentalChange",
        question: "Which action helps wildlife?",

        options: [
            "Planting trees",
            "Dropping litter",
            "Polluting rivers",
            "Destroying nests"
        ],

        explanation:
            "Planting trees creates habitats for many living things.",

        difficulty: 1,
        correctAnswer: "Planting trees",
        estimatedSeconds: 15,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-004",
        skillId: "environmentalChange",
        question: "What is pollution?",

        options: [
            "Harmful waste in the environment",
            "A healthy habitat",
            "A type of animal",
            "A weather forecast"
        ],

        explanation:
            "Pollution can damage habitats and harm living things.",

        difficulty: 1,
        correctAnswer: "Harmful waste in the environment",
        estimatedSeconds: 15,

        tags: ["science", "pollution"]
    },

    {
        id: "sci-environment-005",
        skillId: "environmentalChange",
        question: "Why do animals need clean water?",

        options: [
            "To survive",
            "To change colour",
            "To grow wings",
            "To become plants"
        ],

        explanation:
            "Clean water is essential for the survival of many living things.",

        difficulty: 1,
        correctAnswer: "To survive",
        estimatedSeconds: 15,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-006",
        skillId: "environmentalChange",
        question: "Which activity can damage a pond habitat?",

        options: [
            "Throwing rubbish into it",
            "Watching frogs",
            "Drawing pictures nearby",
            "Taking photographs"
        ],

        explanation:
            "Rubbish pollutes the water and can harm wildlife.",

        difficulty: 1,
        correctAnswer: "Throwing rubbish into it",
        estimatedSeconds: 15,

        tags: ["science", "pond"]
    },

    {
        id: "sci-environment-007",
        skillId: "environmentalChange",
        question: "Which action helps bees?",

        options: [
            "Growing flowers",
            "Cutting every flower",
            "Removing all plants",
            "Pouring chemicals onto flowers"
        ],

        explanation:
            "Flowers provide nectar and pollen for bees.",

        difficulty: 1,
        correctAnswer: "Growing flowers",
        estimatedSeconds: 15,

        tags: ["science", "plants", "bees"]
    },

    {
        id: "sci-environment-008",
        skillId: "environmentalChange",
        question: "What should you do with litter?",

        options: [
            "Put it in a bin",
            "Leave it on the ground",
            "Throw it into a river",
            "Hide it under leaves"
        ],

        explanation:
            "Putting litter in bins helps keep habitats clean.",

        difficulty: 1,
        correctAnswer: "Put it in a bin",
        estimatedSeconds: 20,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-009",
        skillId: "environmentalChange",
        question: "Which living thing may lose its home if trees are cut down?",

        options: [
            "Squirrel",
            "Shark",
            "Whale",
            "Octopus"
        ],

        explanation:
            "Many woodland animals depend on trees for shelter.",

        difficulty: 1,
        correctAnswer: "Squirrel",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-environment-010",
        skillId: "environmentalChange",
        question: "Which statement is true?",

        options: [
            "People can help protect habitats.",
            "Habitats never change.",
            "Pollution helps wildlife.",
            "Animals do not need habitats."
        ],

        explanation:
            "People can protect habitats by caring for the environment.",

        difficulty: 1,
        correctAnswer: "People can help protect habitats.",
        estimatedSeconds: 20,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-011",
        skillId: "environmentalChange",
        question: "Why is planting trees good for wildlife?",

        options: [
            "Trees provide food and shelter.",
            "Trees stop all rain.",
            "Trees scare away every animal.",
            "Trees make rivers disappear."
        ],

        explanation:
            "Trees create habitats for many different species.",

        difficulty: 2,
        correctAnswer: "Trees provide food and shelter.",
        estimatedSeconds: 20,

        tags: ["science", "trees", "habitats"]
    },

    {
        id: "sci-environment-012",
        skillId: "environmentalChange",
        question: "Why can pollution be dangerous for fish?",

        options: [
            "It can make the water unsafe.",
            "It makes fish grow wings.",
            "It turns water into ice.",
            "It helps fish breathe."
        ],

        explanation:
            "Pollution can reduce water quality and harm aquatic life.",

        difficulty: 2,
        correctAnswer: "It can make the water unsafe.",
        estimatedSeconds: 20,

        tags: ["science", "pollution"]
    },

    {
        id: "sci-environment-013",
        skillId: "environmentalChange",
        question: "A new road is built through a woodland. What could happen?",

        options: [
            "Some animals may lose their habitat.",
            "Every animal becomes larger.",
            "Trees grow faster.",
            "The woodland becomes an ocean."
        ],

        explanation:
            "Building roads can destroy or divide habitats.",

        difficulty: 2,
        correctAnswer: "Some animals may lose their habitat.",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-environment-014",
        skillId: "environmentalChange",
        question: "Why should people recycle?",

        options: [
            "It helps reduce waste.",
            "It makes habitats smaller.",
            "It creates pollution.",
            "It stops plants growing."
        ],

        explanation:
            "Recycling reduces the amount of rubbish that can harm habitats.",

        difficulty: 2,
        correctAnswer: "It helps reduce waste.",
        estimatedSeconds: 20,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-015",
        skillId: "environmentalChange",
        question: "Which action would best help birds in a garden?",

        options: [
            "Putting up a bird feeder",
            "Removing every tree",
            "Leaving plastic waste outside",
            "Covering the grass with concrete"
        ],

        explanation:
            "Bird feeders provide food, especially when food is scarce.",

        difficulty: 2,
        correctAnswer: "Putting up a bird feeder",
        estimatedSeconds: 20,

        tags: ["science", "birds"]
    },

    {
        id: "sci-environment-016",
        skillId: "environmentalChange",
        question: "Why is protecting habitats important?",

        options: [
            "Living things depend on them for survival.",
            "Habitats are only for plants.",
            "Animals can live anywhere.",
            "Habitats never change."
        ],

        explanation:
            "Without suitable habitats, many plants and animals cannot survive.",

        difficulty: 2,
        correctAnswer: "Living things depend on them for survival.",
        estimatedSeconds: 20,

        tags: ["science", "habitats"]
    },

    {
        id: "sci-environment-017",
        skillId: "environmentalChange",
        question: "Which activity is most environmentally friendly?",

        options: [
            "Joining a litter pick",
            "Throwing rubbish into a river",
            "Damaging bird nests",
            "Breaking young trees"
        ],

        explanation:
            "Litter picks help keep habitats clean and safe.",

        difficulty: 2,
        correctAnswer: "Joining a litter pick",
        estimatedSeconds: 20,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-018",
        skillId: "environmentalChange",
        question: "How can gardeners help insects?",

        options: [
            "Grow a variety of flowers",
            "Remove every flowering plant",
            "Cover gardens with concrete",
            "Spray unnecessary chemicals everywhere"
        ],

        explanation:
            "Flowers provide nectar and pollen for many insects.",

        difficulty: 2,
        correctAnswer: "Grow a variety of flowers",
        estimatedSeconds: 20,

        tags: ["science", "plants", "insects"]
    },

    {
        id: "sci-environment-019",
        skillId: "environmentalChange",
        question: "Which change is most likely to improve a habitat?",

        options: [
            "Cleaning up litter",
            "Pouring oil into a stream",
            "Cutting down every tree",
            "Destroying wildflowers"
        ],

        explanation:
            "Removing litter helps make habitats safer for wildlife.",

        difficulty: 2,
        correctAnswer: "Cleaning up litter",
        estimatedSeconds: 20,

        tags: ["science", "environment"]
    },

    {
        id: "sci-environment-020",
        skillId: "environmentalChange",
        question: "Which sentence best explains environmental change?",

        options: [
            "Changes to habitats can help or harm living things.",
            "Habitats never change.",
            "Only weather changes environments.",
            "Living things are never affected by change."
        ],

        explanation:
            "Environmental changes can affect whether plants and animals are able to survive and reproduce.",

        difficulty: 2,
        correctAnswer: "Changes to habitats can help or harm living things.",
        estimatedSeconds: 20,

        tags: ["science", "environment", "habitats"]
    }

    ]

};