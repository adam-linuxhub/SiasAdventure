import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const livingOrDead: SkillContent = {

    skillId: "livingOrDead",

    title: "Living or Dead",

    description:
        "Learn how to identify living things, dead things and things that have never been alive.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-living-dead-001",
        skillId: "livingOrDead",
        question: "Which of these is a living thing?",

        options: [
            "A rabbit",
            "A rock",
            "A toy car",
            "A spoon"
        ],

        explanation:
            "A rabbit is alive because it grows, breathes and reproduces.",

        difficulty: 1,
        correctAnswer: "A rabbit",
        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-002",
        skillId: "livingOrDead",
        question: "Which of these has never been alive?",

        options: [
            "A brick",
            "A leaf",
            "A tree stump",
            "A feather"
        ],

        explanation:
            "A brick has never been alive. The other items came from living things.",

        difficulty: 1,
        correctAnswer: "A brick",
        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-003",
        skillId: "livingOrDead",
        question: "Which of these is dead?",

        options: [
            "A fallen leaf",
            "A growing flower",
            "A fish",
            "A bird"
        ],

        explanation:
            "A fallen leaf is no longer living but once was alive.",

        difficulty: 1,
        correctAnswer: "A fallen leaf",
        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-004",
        skillId: "livingOrDead",
        question: "Which of these grows?",

        options: [
            "A seedling",
            "A plastic cup",
            "A pencil",
            "A coin"
        ],

        explanation:
            "Growing is one of the characteristics of living things.",

        difficulty: 1,
        correctAnswer: "A seedling",
        estimatedSeconds: 15,

        tags: ["science", "growth"]
    },

    {
        id: "sci-living-dead-005",
        skillId: "livingOrDead",
        question: "Which is a sign that something is living?",

        options: [
            "It grows",
            "It is shiny",
            "It is hard",
            "It is heavy"
        ],

        explanation:
            "Living things grow during their lives.",

        difficulty: 1,
        correctAnswer: "It grows",
        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-006",
        skillId: "livingOrDead",
        question: "Which of these is alive?",

        options: [
            "An oak tree",
            "A table",
            "A glass bottle",
            "A football"
        ],

        explanation:
            "Trees are living plants.",

        difficulty: 1,
        correctAnswer: "An oak tree",
        estimatedSeconds: 15,

        tags: ["science", "plants"]
    },

    {
        id: "sci-living-dead-007",
        skillId: "livingOrDead",
        question: "Which object has never been alive?",

        options: [
            "A plastic ruler",
            "A feather",
            "A log",
            "An egg shell"
        ],

        explanation:
            "Plastic rulers are made from manufactured materials.",

        difficulty: 1,
        correctAnswer: "A plastic ruler",
        estimatedSeconds: 15,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-008",
        skillId: "livingOrDead",
        question: "Living things need...",

        options: [
            "Food or nutrients",
            "Paint",
            "Metal",
            "Glass"
        ],

        explanation:
            "Living things need food or nutrients to survive.",

        difficulty: 1,
        correctAnswer: "Food or nutrients",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-009",
        skillId: "livingOrDead",
        question: "Which of these can reproduce?",

        options: [
            "A cat",
            "A chair",
            "A ball",
            "A book"
        ],

        explanation:
            "Reproduction is a characteristic of living things.",

        difficulty: 1,
        correctAnswer: "A cat",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-010",
        skillId: "livingOrDead",
        question: "Which statement is true?",

        options: [
            "All living things grow.",
            "All rocks grow.",
            "Cars reproduce.",
            "Plastic bottles breathe."
        ],

        explanation:
            "Growing is one of the life processes.",

        difficulty: 1,
        correctAnswer: "All living things grow.",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-011",
        skillId: "livingOrDead",
        question: "A wooden chair is made from a tree. Which is true?",

        options: [
            "The chair has never been alive, but it came from something that was.",
            "The chair is still alive.",
            "The chair is growing.",
            "The chair breathes."
        ],

        explanation:
            "Wood comes from trees, but the chair itself is not living.",

        difficulty: 2,
        correctAnswer: "The chair has never been alive, but it came from something that was.",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-012",
        skillId: "livingOrDead",
        question: "Why is a mushroom considered living?",

        options: [
            "It grows and reproduces.",
            "It is brown.",
            "It grows in soil.",
            "It has no leaves."
        ],

        explanation:
            "Fungi are living organisms because they carry out life processes.",

        difficulty: 2,
        correctAnswer: "It grows and reproduces.",
        estimatedSeconds: 20,

        tags: ["science", "fungi"]
    },

    {
        id: "sci-living-dead-013",
        skillId: "livingOrDead",
        question: "Which item is dead rather than never alive?",

        options: [
            "A dry twig",
            "A metal spoon",
            "A plastic cup",
            "A glass marble"
        ],

        explanation:
            "The twig came from a living tree.",

        difficulty: 2,
        correctAnswer: "A dry twig",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-014",
        skillId: "livingOrDead",
        question: "Why is a rock not living?",

        options: [
            "It does not carry out life processes.",
            "It is heavy.",
            "It is hard.",
            "It is grey."
        ],

        explanation:
            "Rocks do not grow, reproduce or need food.",

        difficulty: 2,
        correctAnswer: "It does not carry out life processes.",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-015",
        skillId: "livingOrDead",
        question: "Which group contains only living things?",

        options: [
            "Dog, oak tree, butterfly",
            "Rock, bird, flower",
            "Plastic bottle, fish, cat",
            "Brick, tree, worm"
        ],

        explanation:
            "Every item in the first group is living.",

        difficulty: 2,
        correctAnswer: "Dog, oak tree, butterfly",
        estimatedSeconds: 20,

        tags: ["science", "classification"]
    },

    {
        id: "sci-living-dead-016",
        skillId: "livingOrDead",
        question: "Which life process helps make more of the same species?",

        options: [
            "Reproduction",
            "Sleeping",
            "Rolling",
            "Shining"
        ],

        explanation:
            "Living things reproduce to create offspring.",

        difficulty: 2,
        correctAnswer: "Reproduction",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-017",
        skillId: "livingOrDead",
        question: "A shell washed onto the beach belonged to a snail. The shell is...",

        options: [
            "Dead",
            "Living",
            "Growing",
            "Never alive"
        ],

        explanation:
            "The shell came from a living animal, so it is not something that has never been alive.",

        difficulty: 2,
        correctAnswer: "Dead",
        estimatedSeconds: 20,

        tags: ["science", "living-things"]
    },

    {
        id: "sci-living-dead-018",
        skillId: "livingOrDead",
        question: "Which feature helps scientists decide if something is living?",

        options: [
            "Whether it carries out life processes",
            "Its colour",
            "Its size",
            "Its shape"
        ],

        explanation:
            "Scientists look for life processes such as growth and reproduction.",

        difficulty: 2,
        correctAnswer: "Whether it carries out life processes",
        estimatedSeconds: 20,

        tags: ["science", "working-scientifically"]
    },

    {
        id: "sci-living-dead-019",
        skillId: "livingOrDead",
        question: "A seed is alive because it can...",

        options: [
            "Grow into a new plant",
            "Roll downhill",
            "Float forever",
            "Turn into a rock"
        ],

        explanation:
            "Seeds are living because they can germinate and grow.",

        difficulty: 2,
        correctAnswer: "Grow into a new plant",
        estimatedSeconds: 20,

        tags: ["science", "plants"]
    },

    {
        id: "sci-living-dead-020",
        skillId: "livingOrDead",
        question: "Which sentence best describes living things?",

        options: [
            "Living things carry out life processes such as growing, reproducing and needing food.",
            "Living things are always green.",
            "Living things never move.",
            "Living things are always animals."
        ],

        explanation:
            "All living things carry out life processes, whether they are plants, animals or fungi.",

        difficulty: 2,
        correctAnswer: "Living things carry out life processes such as growing, reproducing and needing food.",
        estimatedSeconds: 20,

        tags: ["science", "living-things", "life-processes"]
    }

    ]

};