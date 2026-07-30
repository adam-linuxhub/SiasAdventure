import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const seedDispersal: SkillContent = {

    skillId: "seed-dispersal",

    title: "Seed Dispersal",

    description:
        "Learn how seeds are spread away from the parent plant.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-seed-dispersal-001",
        skillId: "seed-dispersal",
        question: "What is seed dispersal?",
        stage: "recognise",
        options: [
            "The spreading of seeds away from the parent plant",
            "The growing of new leaves",
            "The making of flowers",
            "The absorption of water"
        ],

        explanation:
            "Seed dispersal is the movement of seeds away from the parent plant.",

        difficulty: 1,
        correctAnswer: "The spreading of seeds away from the parent plant",
        estimatedSeconds: 10,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-002",
        skillId: "seed-dispersal",
        question: "Why do plants disperse their seeds?",
        stage: "recognise",
        options: [
            "To help new plants grow in different places",
            "To make flowers bigger",
            "To make leaves greener",
            "To help roots grow faster"
        ],

        explanation:
            "Seeds spread away from the parent plant so new plants have space, light and water to grow.",

        difficulty: 1,
        correctAnswer: "To help new plants grow in different places",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-003",
        skillId: "seed-dispersal",
        question: "Which of these can carry seeds to new places?",
        stage: "recognise",
        options: [
            "Wind",
            "A chair",
            "A pencil",
            "A book"
        ],

        explanation:
            "Many light seeds are carried away by the wind.",

        difficulty: 1,
        correctAnswer: "Wind",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "wind"
        ]
    },

    {
        id: "sci-seed-dispersal-004",
        skillId: "seed-dispersal",
        question: "Which animals can help disperse seeds?",
        stage: "recognise",
        options: [
            "Birds",
            "Tables",
            "Cars",
            "Clouds"
        ],

        explanation:
            "Birds and other animals can carry or eat seeds and spread them to new places.",

        difficulty: 1,
        correctAnswer: "Birds",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-005",
        skillId: "seed-dispersal",
        question: "Which force can blow light seeds through the air?",
        stage: "recognise",
        options: [
            "Wind",
            "Gravity",
            "Sunlight",
            "Rain"
        ],

        explanation:
            "Wind can carry light seeds far from the parent plant.",

        difficulty: 1,
        correctAnswer: "Wind",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-006",
        skillId: "seed-dispersal",
        question: "Some seeds float along rivers and streams. What is spreading them?",
        stage: "recognise",
        options: [
            "Water",
            "Leaves",
            "Sunlight",
            "Soil"
        ],

        explanation:
            "Some seeds are dispersed by water.",

        difficulty: 1,
        correctAnswer: "Water",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "water",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-007",
        skillId: "seed-dispersal",
        question: "Which method helps seeds stick to an animal's fur?",
        stage: "recognise",
        options: [
            "Animal dispersal",
            "Wind dispersal",
            "Water dispersal",
            "Gravity only"
        ],

        explanation:
            "Some seeds have hooks that catch onto animal fur.",

        difficulty: 1,
        correctAnswer: "Animal dispersal",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-008",
        skillId: "seed-dispersal",
        question: "Why is it useful for seeds to land away from the parent plant?",
        stage: "recognise",
        options: [
            "There is less competition for light, water and space.",
            "They grow into flowers immediately.",
            "They never need water.",
            "They become roots first."
        ],

        explanation:
            "Growing away from the parent plant reduces competition for resources.",

        difficulty: 1,
        correctAnswer: "There is less competition for light, water and space.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-009",
        skillId: "seed-dispersal",
        question: "Which of these is a way seeds can be dispersed?",
        stage: "recognise",
        options: [
            "Wind",
            "Electricity",
            "Television",
            "Magnets"
        ],

        explanation:
            "Wind is one of the common ways that plants spread their seeds.",

        difficulty: 1,
        correctAnswer: "Wind",
        estimatedSeconds: 15,

        tags: [
            "science",
            "plants",
            "wind"
        ]
    },

    {
        id: "sci-seed-dispersal-010",
        skillId: "seed-dispersal",
        question: "What is the main purpose of seed dispersal?",
        stage: "recognise",
        options: [
            "To spread seeds so new plants can grow",
            "To make flowers colourful",
            "To help leaves make food",
            "To help roots absorb sunlight"
        ],

        explanation:
            "Seed dispersal helps plants reproduce by spreading seeds to suitable places.",

        difficulty: 1,
        correctAnswer: "To spread seeds so new plants can grow",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },
        {
        id: "sci-seed-dispersal-011",
            skillId: "seed-dispersal",
            question: "Which of these is most likely to be carried by the wind?",
            stage: "recognise",
            options: [
            "A light seed with fluffy hairs",
            "A heavy stone",
            "A thick tree trunk",
            "A large branch"
        ],

        explanation:
            "Light seeds with fluffy hairs or wings are easily carried by the wind.",

        difficulty: 2,
            correctAnswer: "A light seed with fluffy hairs",
            estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-012",
        skillId: "seed-dispersal",
        question: "Why do some seeds have hooks?",
        stage: "recognise",
        options: [
            "To stick to animal fur",
            "To catch sunlight",
            "To absorb water",
            "To grow roots faster"
        ],

        explanation:
            "Hooks allow seeds to attach to animals and be carried to new places.",

        difficulty: 2,
        correctAnswer: "To stick to animal fur",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-013",
        skillId: "seed-dispersal",
        question: "How can birds help disperse seeds?",
        stage: "recognise",
        options: [
            "By carrying or eating seeds and dropping them elsewhere",
            "By planting them in the ground",
            "By watering them",
            "By making them lighter"
        ],

        explanation:
            "Birds can carry seeds or eat fruit and later drop the seeds in a different place.",

        difficulty: 2,
        correctAnswer: "By carrying or eating seeds and dropping them elsewhere",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "birds",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-014",
        skillId: "seed-dispersal",
        question: "Which seeds are most likely to be spread by water?",
        stage: "recognise",
        options: [
            "Seeds that float",
            "Very heavy seeds",
            "Seeds with hooks",
            "Seeds with sharp points"
        ],

        explanation:
            "Floating seeds can travel along rivers, streams and the sea.",

        difficulty: 2,
        correctAnswer: "Seeds that float",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "water",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-015",
        skillId: "seed-dispersal",
        question: "What is one advantage of seeds landing far from the parent plant?",
        stage: "recognise",
        options: [
            "There is less competition for resources.",
            "They never need sunlight.",
            "They grow instantly.",
            "They cannot be eaten."
        ],

        explanation:
            "Growing away from the parent plant gives seedlings a better chance of getting light, water and space.",

        difficulty: 2,
        correctAnswer: "There is less competition for resources.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-016",
        skillId: "seed-dispersal",
        question: "Which method of seed dispersal depends on rivers or streams?",
        stage: "recognise",
        options: [
            "Water dispersal",
            "Wind dispersal",
            "Animal dispersal",
            "Gravity dispersal"
        ],

        explanation:
            "Some seeds float and are carried by moving water.",

        difficulty: 2,
        correctAnswer: "Water dispersal",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "water",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-017",
        skillId: "seed-dispersal",
        question: "What happens after a seed is dispersed to a suitable place?",
        stage: "recognise",
        options: [
            "It may germinate and grow.",
            "It immediately becomes a flower.",
            "It turns into fruit.",
            "It disappears."
        ],

        explanation:
            "If conditions are right, the dispersed seed can germinate into a new plant.",

        difficulty: 2,
        correctAnswer: "It may germinate and grow.",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "germination",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-018",
        skillId: "seed-dispersal",
        question: "Which seed is most likely to be spread by animals?",
        stage: "recognise",
        options: [
            "A seed with tiny hooks",
            "A seed with wings",
            "A floating seed",
            "A seed buried underground"
        ],

        explanation:
            "Hooks help seeds cling to animal fur and be carried away.",

        difficulty: 2,
        correctAnswer: "A seed with tiny hooks",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-019",
        skillId: "seed-dispersal",
        question: "Which of these is NOT a common method of seed dispersal?",
        stage: "recognise",
        options: [
            "Electricity",
            "Wind",
            "Water",
            "Animals"
        ],

        explanation:
            "Plants commonly disperse seeds using wind, water and animals, not electricity.",

        difficulty: 2,
        correctAnswer: "Electricity",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-020",
        skillId: "seed-dispersal",
        question: "Why do light seeds often have wings or hairs?",
        stage: "recognise",
        options: [
            "To help the wind carry them",
            "To absorb more water",
            "To grow roots faster",
            "To make food"
        ],

        explanation:
            "Wings and hairs help keep seeds in the air so the wind can carry them further.",

        difficulty: 2,
        correctAnswer: "To help the wind carry them",
        estimatedSeconds: 20,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-021",
        skillId: "seed-dispersal",
        question: "A dandelion seed floats through the air. Which method of dispersal is this?",
        stage: "recognise",
        options: [
            "Wind dispersal",
            "Water dispersal",
            "Animal dispersal",
            "Gravity dispersal"
        ],

        explanation:
            "Dandelion seeds are specially adapted to be carried by the wind.",

        difficulty: 3,
        correctAnswer: "Wind dispersal",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-022",
        skillId: "seed-dispersal",
        question: "A burr sticks to a dog's fur during a walk. How is the seed being dispersed?",
        stage: "recognise",
        options: [
            "By animals",
            "By water",
            "By wind",
            "By sunlight"
        ],

        explanation:
            "Seeds with hooks can attach to animal fur and travel long distances.",

        difficulty: 3,
        correctAnswer: "By animals",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-023",
        skillId: "seed-dispersal",
        question: "Why do plants benefit when seeds are spread over a wide area?",
        stage: "recognise",
        options: [
            "More seedlings can find space and resources.",
            "The seeds become flowers immediately.",
            "The parent plant grows taller.",
            "The seeds no longer need water."
        ],

        explanation:
            "Spreading seeds over a wide area reduces competition and increases the chance of survival.",

        difficulty: 3,
        correctAnswer: "More seedlings can find space and resources.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-024",
        skillId: "seed-dispersal",
        question: "A coconut floats across the sea before growing on a beach. Which method of dispersal is this?",
        stage: "recognise",
        options: [
            "Water dispersal",
            "Wind dispersal",
            "Animal dispersal",
            "Gravity dispersal"
        ],

        explanation:
            "Coconuts can float on water, allowing them to travel long distances.",

        difficulty: 3,
        correctAnswer: "Water dispersal",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "water",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-025",
        skillId: "seed-dispersal",
        question: "What must happen after seed dispersal for a new plant to grow?",
        stage: "recognise",
        options: [
            "The seed must germinate.",
            "The seed must become a flower first.",
            "The seed must dry out completely.",
            "The seed must change into fruit."
        ],

        explanation:
            "After dispersal, a seed must germinate before it can grow into a new plant.",

        difficulty: 3,
        correctAnswer: "The seed must germinate.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "germination",
            "seed-dispersal"
        ]
    },
        {
        id: "sci-seed-dispersal-026",
            skillId: "seed-dispersal",
            question: "Which type of seed is best suited for wind dispersal?",
            stage: "recognise",
            options: [
            "A light seed with wings",
            "A heavy seed with a hard shell",
            "A seed covered in sticky juice",
            "A seed buried underground"
        ],

        explanation:
            "Light seeds with wings or hairs can be carried long distances by the wind.",

        difficulty: 3,
            correctAnswer: "A light seed with wings",
            estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-027",
        skillId: "seed-dispersal",
        question: "Why do some fruits taste sweet?",
        stage: "recognise",
        options: [
            "To encourage animals to eat them and spread the seeds",
            "To help seeds float on water",
            "To make the plant grow taller",
            "To attract sunlight"
        ],

        explanation:
            "Many fruits attract animals, which eat the fruit and help disperse the seeds.",

        difficulty: 3,
        correctAnswer: "To encourage animals to eat them and spread the seeds",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-028",
        skillId: "seed-dispersal",
        question: "What is most likely to happen if every seed falls beside the parent plant?",
        stage: "recognise",
        options: [
            "The seedlings will compete for light, water and space.",
            "Every seed will grow into a healthy plant.",
            "The parent plant will grow faster.",
            "The seeds will not need water."
        ],

        explanation:
            "Seeds growing too close together compete for the same resources.",

        difficulty: 3,
        correctAnswer: "The seedlings will compete for light, water and space.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "competition",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-029",
        skillId: "seed-dispersal",
        question: "Which method of seed dispersal depends on animals moving from place to place?",
        stage: "recognise",
        options: [
            "Animal dispersal",
            "Wind dispersal",
            "Water dispersal",
            "Gravity dispersal"
        ],

        explanation:
            "Animals transport seeds as they travel, helping plants spread.",

        difficulty: 3,
        correctAnswer: "Animal dispersal",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-030",
        skillId: "seed-dispersal",
        question: "Why is seed dispersal an important part of a plant's life cycle?",
        stage: "recognise",
        options: [
            "It helps new plants grow in suitable places.",
            "It makes flowers brighter.",
            "It helps leaves absorb water.",
            "It stops seeds from germinating."
        ],

        explanation:
            "Dispersal increases the chance that seeds will find good places to grow.",

        difficulty: 3,
        correctAnswer: "It helps new plants grow in suitable places.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "plants",
            "life-cycle",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-031",
        skillId: "seed-dispersal",
        question: "Which seed would travel the furthest in a strong wind?",
        stage: "recognise",
        options: [
            "A tiny seed with fluffy hairs",
            "A large acorn",
            "A heavy coconut",
            "A seed buried in soil"
        ],

        explanation:
            "Tiny, lightweight seeds with fluffy hairs stay in the air for longer.",

        difficulty: 4,
        correctAnswer: "A tiny seed with fluffy hairs",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-032",
        skillId: "seed-dispersal",
        question: "Which adaptation helps a seed float on water?",
        stage: "recognise",
        options: [
            "A waterproof outer layer",
            "Sharp hooks",
            "Fluffy hairs",
            "Sticky juice"
        ],

        explanation:
            "Some seeds have waterproof coverings that allow them to float for long distances.",

        difficulty: 4,
        correctAnswer: "A waterproof outer layer",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "water",
            "adaptations"
        ]
    },

    {
        id: "sci-seed-dispersal-033",
        skillId: "seed-dispersal",
        question: "A squirrel buries an acorn and forgets where it is. How has the seed been dispersed?",
        stage: "recognise",
        options: [
            "By an animal",
            "By the wind",
            "By water",
            "By gravity only"
        ],

        explanation:
            "Animals such as squirrels help spread seeds by carrying and burying them.",

        difficulty: 4,
        correctAnswer: "By an animal",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-034",
        skillId: "seed-dispersal",
        question: "Why do floating seeds often travel a long way?",
        stage: "recognise",
        options: [
            "Water carries them over long distances.",
            "They can fly like birds.",
            "They grow roots while floating.",
            "They are pushed by sunlight."
        ],

        explanation:
            "Rivers and oceans can carry floating seeds many kilometres.",

        difficulty: 4,
        correctAnswer: "Water carries them over long distances.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "water",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-035",
        skillId: "seed-dispersal",
        question: "Which statement best explains why different plants use different methods of seed dispersal?",
        stage: "recognise",
        options: [
            "Different seeds are adapted to different ways of travelling.",
            "All plants grow in different colours.",
            "Some plants do not produce seeds.",
            "Every seed travels by wind."
        ],

        explanation:
            "Seeds have different adaptations that help them spread by wind, water or animals.",

        difficulty: 4,
        correctAnswer: "Different seeds are adapted to different ways of travelling.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "adaptations",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-036",
        skillId: "seed-dispersal",
        question: "A plant grows beside a river. Which method of seed dispersal is most likely to help its seeds travel furthest?",
        stage: "recognise",
        options: [
            "Water dispersal",
            "Gravity dispersal",
            "Underground dispersal",
            "Leaf dispersal"
        ],

        explanation:
            "Flowing water can carry seeds a long distance downstream.",

        difficulty: 4,
        correctAnswer: "Water dispersal",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "water",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-037",
        skillId: "seed-dispersal",
        question: "Why are hooks useful on some seeds?",
        stage: "recognise",
        options: [
            "They help seeds attach to passing animals.",
            "They help seeds float.",
            "They help seeds make food.",
            "They help seeds absorb sunlight."
        ],

        explanation:
            "Hooks allow seeds to cling to fur or feathers and be carried away.",

        difficulty: 4,
        correctAnswer: "They help seeds attach to passing animals.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "animals",
            "adaptations"
        ]
    },

    {
        id: "sci-seed-dispersal-038",
        skillId: "seed-dispersal",
        question: "Which of these would be the poorest method of dispersal for a very heavy seed?",
        stage: "recognise",
        options: [
            "Wind",
            "Animals",
            "Water",
            "Gravity"
        ],

        explanation:
            "Heavy seeds are generally too heavy to be carried by the wind.",

        difficulty: 4,
        correctAnswer: "Wind",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-039",
        skillId: "seed-dispersal",
        question: "Which adaptation is most useful for a seed spread by the wind?",
        stage: "recognise",
        options: [
            "Large wings or fluffy hairs",
            "A thick waterproof shell",
            "Sharp hooks",
            "Sweet fruit"
        ],

        explanation:
            "Wings and fluffy hairs help wind keep seeds in the air.",

        difficulty: 4,
        correctAnswer: "Large wings or fluffy hairs",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "wind",
            "adaptations"
        ]
    },

    {
        id: "sci-seed-dispersal-040",
        skillId: "seed-dispersal",
        question: "Which statement best explains why seed dispersal increases a plant's chances of survival?",
        stage: "recognise",
        options: [
            "Seeds can grow where there is less competition.",
            "Seeds never need water afterwards.",
            "Seeds immediately become flowers.",
            "Parent plants grow larger."
        ],

        explanation:
            "Seeds growing away from the parent plant have a better chance of finding enough light, water and space.",

        difficulty: 4,
        correctAnswer: "Seeds can grow where there is less competition.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "competition",
            "seed-dispersal"
        ]
    },
        {
        id: "sci-seed-dispersal-041",
            skillId: "seed-dispersal",
            question: "A seed with wings spins as it falls from a tree. Why is this useful?",
            stage: "recognise",
            options: [
            "The wind can carry it further from the parent plant.",
            "It helps the seed make food.",
            "It helps the seed absorb water.",
            "It makes the seed grow immediately."
        ],

        explanation:
            "Winged seeds spin slowly, giving the wind more time to carry them away.",

        difficulty: 5,
            correctAnswer: "The wind can carry it further from the parent plant.",
            estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "wind",
            "adaptations"
        ]
    },

    {
        id: "sci-seed-dispersal-042",
        skillId: "seed-dispersal",
        question: "Which method of seed dispersal is most likely for a fruit that animals enjoy eating?",
        stage: "recognise",
        options: [
            "Animal dispersal",
            "Wind dispersal",
            "Water dispersal",
            "Gravity dispersal"
        ],

        explanation:
            "Animals eat the fruit and help spread the seeds to different places.",

        difficulty: 5,
        correctAnswer: "Animal dispersal",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "animals",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-043",
        skillId: "seed-dispersal",
        question: "Which adaptation would be least useful for a seed that is dispersed by water?",
        stage: "recognise",
        options: [
            "Fluffy hairs for flying",
            "A waterproof outer layer",
            "The ability to float",
            "A light weight"
        ],

        explanation:
            "Fluffy hairs are useful for wind dispersal, not for travelling on water.",

        difficulty: 5,
        correctAnswer: "Fluffy hairs for flying",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "water",
            "adaptations"
        ]
    },

    {
        id: "sci-seed-dispersal-044",
        skillId: "seed-dispersal",
        question: "Why is it helpful if seeds are carried a long distance from the parent plant?",
        stage: "recognise",
        options: [
            "The new plants are less likely to compete for resources.",
            "The seeds no longer need sunlight.",
            "The parent plant grows more flowers.",
            "The seeds become fruit more quickly."
        ],

        explanation:
            "Growing further away reduces competition for light, water, nutrients and space.",

        difficulty: 5,
        correctAnswer: "The new plants are less likely to compete for resources.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "competition",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-045",
        skillId: "seed-dispersal",
        question: "Which statement best explains why different plants have different seed shapes?",
        stage: "recognise",
        options: [
            "Different shapes help seeds spread in different ways.",
            "Different shapes help leaves grow.",
            "Different shapes make flowers colourful.",
            "Different shapes stop germination."
        ],

        explanation:
            "Seed shapes are adaptations that help them disperse by wind, water or animals.",

        difficulty: 5,
        correctAnswer: "Different shapes help seeds spread in different ways.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "adaptations",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-046",
        skillId: "seed-dispersal",
        question: "Which pair is matched correctly?",
        stage: "recognise",
        options: [
            "Hooks → Animal dispersal",
            "Hooks → Water dispersal",
            "Wings → Underground dispersal",
            "Floating shell → Wind dispersal"
        ],

        explanation:
            "Hooks attach to animal fur, allowing seeds to be carried to new places.",

        difficulty: 5,
        correctAnswer: "Hooks → Animal dispersal",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "adaptations",
            "animals"
        ]
    },

    {
        id: "sci-seed-dispersal-047",
        skillId: "seed-dispersal",
        question: "A seed lands in a sunny field far from the parent plant. Why does this improve its chance of survival?",
        stage: "recognise",
        options: [
            "It has more access to light, water and space.",
            "It no longer needs roots.",
            "It can make food immediately.",
            "It will never need rain."
        ],

        explanation:
            "Having plenty of space and resources gives the seedling a better chance of growing well.",

        difficulty: 5,
        correctAnswer: "It has more access to light, water and space.",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "competition",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-048",
        skillId: "seed-dispersal",
        question: "Which method of seed dispersal depends on moving air?",
        stage: "recognise",
        options: [
            "Wind dispersal",
            "Animal dispersal",
            "Water dispersal",
            "Gravity dispersal"
        ],

        explanation:
            "Wind carries lightweight seeds to new locations.",

        difficulty: 5,
        correctAnswer: "Wind dispersal",
        estimatedSeconds: 30,

        tags: [
            "science",
            "plants",
            "wind",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-049",
        skillId: "seed-dispersal",
        question: "Which statement best describes the purpose of seed dispersal?",
        stage: "recognise",
        options: [
            "To help plants reproduce successfully by spreading seeds.",
            "To make flowers grow faster.",
            "To help roots absorb more water.",
            "To stop seeds from germinating."
        ],

        explanation:
            "Seed dispersal increases the chance that new plants will grow in suitable places.",

        difficulty: 5,
        correctAnswer: "To help plants reproduce successfully by spreading seeds.",
        estimatedSeconds: 35,

        tags: [
            "science",
            "plants",
            "reproduction",
            "seed-dispersal"
        ]
    },

    {
        id: "sci-seed-dispersal-050",
        skillId: "seed-dispersal",
        question: "Which summary best describes seed dispersal?",
        stage: "recognise",
        options: [
            "Seeds are spread by methods such as wind, water and animals so they can grow away from the parent plant.",
            "Seeds always fall beside the parent plant.",
            "All seeds travel by the wind.",
            "Seeds do not need to be dispersed to grow."
        ],

        explanation:
            "Different plants use different methods of seed dispersal to improve the chances of their seeds surviving and growing into new plants.",

        difficulty: 5,
        correctAnswer: "Seeds are spread by methods such as wind, water and animals so they can grow away from the parent plant.",
        estimatedSeconds: 40,

        tags: [
            "science",
            "plants",
            "seed-dispersal",
            "adaptations",
            "reproduction"
        ]
    }

    ]

};