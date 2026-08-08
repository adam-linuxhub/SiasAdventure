import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const planetOrder: SkillContent = {

    skillId: "planet-order",

    title: "Planet Order",

    description:
        "Learn the order of the eight planets from the Sun.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-planets-order-001",
        skillId: "planet-order",
        question: "Which planet is closest to the Sun?",
        stage: "recognise",
        options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
        ],

        hint:
            "Think about which planet starts the Solar System's sequence from the Sun.",

        explanation:
            "Mercury is the first planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Mercury",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "mercury"
        ]
    },

    {
        id: "sci-planets-order-002",
        skillId: "planet-order",
        question: "Which planet is second from the Sun?",
        stage: "recognise",
        options: [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
        ],

        hint:
            "Start with Mercury, then choose the planet that comes next.",

        explanation:
            "Venus is the second planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Venus",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "venus"
        ]
    },

    {
        id: "sci-planets-order-003",
        skillId: "planet-order",
        question: "Which planet is third from the Sun?",
        stage: "recognise",
        options: [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],

        hint:
            "Count: Mercury first, Venus second. Which planet is next?",

        explanation:
            "Earth is the third planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Earth",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "earth"
        ]
    },

    {
        id: "sci-planets-order-004",
        skillId: "planet-order",
        question: "Which planet is fourth from the Sun?",
        stage: "recognise",
        options: [
            "Mars",
            "Earth",
            "Jupiter",
            "Venus"
        ],

        hint:
            "Think of the first four planets in order and pick the last of those four.",

        explanation:
            "Mars is the fourth planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Mars",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "mars"
        ]
    },

    {
        id: "sci-planets-order-005",
        skillId: "planet-order",
        question: "Which planet is fifth from the Sun?",
        stage: "recognise",
        options: [
            "Jupiter",
            "Saturn",
            "Mars",
            "Neptune"
        ],

        hint:
            "After the four small rocky planets comes the first giant planet.",

        explanation:
            "Jupiter is the fifth planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Jupiter",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "jupiter"
        ]
    },

    {
        id: "sci-planets-order-006",
        skillId: "planet-order",
        question: "Which planet is sixth from the Sun?",
        stage: "recognise",
        options: [
            "Saturn",
            "Jupiter",
            "Uranus",
            "Neptune"
        ],

        hint:
            "Find Jupiter first, then choose the planet that comes immediately after it.",

        explanation:
            "Saturn is the sixth planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Saturn",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "saturn"
        ]
    },

    {
        id: "sci-planets-order-007",
        skillId: "planet-order",
        question: "Which planet is seventh from the Sun?",
        stage: "recognise",
        options: [
            "Uranus",
            "Neptune",
            "Saturn",
            "Jupiter"
        ],

        hint:
            "There are only two planets beyond Saturn. Which one comes first?",

        explanation:
            "Uranus is the seventh planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Uranus",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "uranus"
        ]
    },

    {
        id: "sci-planets-order-008",
        skillId: "planet-order",
        question: "Which planet is eighth from the Sun?",
        stage: "recognise",
        options: [
            "Neptune",
            "Uranus",
            "Saturn",
            "Jupiter"
        ],

        hint:
            "Think of the planet that is farthest from the Sun in today's Solar System.",

        explanation:
            "Neptune is the eighth and farthest planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Neptune",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "planet-order",
            "neptune"
        ]
    },

    {
        id: "sci-planets-order-009",
        skillId: "planet-order",
        question: "Which planet comes immediately after Mercury?",
        stage: "recognise",
        options: [
            "Venus",
            "Earth",
            "Mars",
            "Jupiter"
        ],

        hint:
            "Picture the planets lined up from the Sun and move forward one place from Mercury.",

        explanation:
            "Venus comes immediately after Mercury.",

        difficulty: 1,
        correctAnswer: "Venus",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "planet-order"
        ]
    },

    {
        id: "sci-planets-order-010",
        skillId: "planet-order",
        question: "Which planet comes immediately after Venus?",
        stage: "recognise",
        options: [
            "Earth",
            "Mars",
            "Mercury",
            "Jupiter"
        ],

        hint:
            "Don't restart the list—just move one step forward from Venus.",

        explanation:
            "Earth comes immediately after Venus.",

        difficulty: 1,
        correctAnswer: "Earth",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "planet-order"
        ]
    },

    {
        id: "sci-planets-order-011",
        skillId: "planet-order",
        question: "Which planet comes immediately after Earth?",
        stage: "recognise",
        options: [
            "Mars",
            "Jupiter",
            "Venus",
            "Mercury"
        ],

        hint:
            "Earth is third from the Sun. Which planet is fourth?",

        explanation:
            "Mars comes immediately after Earth.",

        difficulty: 1,
        correctAnswer: "Mars",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "planet-order"
        ]
    },

    {
        id: "sci-planets-order-012",
        skillId: "planet-order",
        question: "Which planet comes immediately after Mars?",
        stage: "recognise",
        options: [
            "Jupiter",
            "Saturn",
            "Earth",
            "Neptune"
        ],

        hint:
            "Mars is the last rocky planet before the largest gas giant.",

        explanation:
            "Jupiter comes immediately after Mars.",

        difficulty: 1,
        correctAnswer: "Jupiter",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "planet-order"
        ]
    },

    {
        id: "sci-planets-order-013",
        skillId: "planet-order",
        question: "Which planet comes immediately after Jupiter?",
        stage: "recognise",
        options: [
            "Saturn",
            "Uranus",
            "Neptune",
            "Mars"
        ],

        hint:
            "Jupiter is the fifth planet. Think about which planet is sixth.",

        explanation:
            "Saturn comes immediately after Jupiter.",

        difficulty: 1,
        correctAnswer: "Saturn",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "planet-order"
        ]
    },

    {
        id: "sci-planets-order-014",
        skillId: "planet-order",
        question: "Which planet comes immediately after Saturn?",
        stage: "recognise",
        options: [
            "Uranus",
            "Neptune",
            "Jupiter",
            "Mars"
        ],

        hint:
            "Only two planets come after Saturn. Choose the nearer one.",

        explanation:
            "Uranus comes immediately after Saturn.",

        difficulty: 1,
        correctAnswer: "Uranus",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "planet-order"
        ]
    },

    {
    id: "sci-planets-order-015",
    skillId: "planet-order",
    question: "Which planet comes immediately after Uranus?",
    stage: "recognise",
    options: [
        "Neptune",
        "Saturn",
        "Jupiter",
        "Earth"
    ],

    hint:
        "Uranus is the second-to-last planet. Which planet comes after it?",

    explanation:
        "Neptune is the last planet in the Solar System.",

    difficulty: 1,
    correctAnswer: "Neptune",
    estimatedSeconds: 12,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-016",
    skillId: "planet-order",
    question: "Which planet comes immediately before Earth?",
    stage: "recognise",
    options: [
        "Venus",
        "Mercury",
        "Mars",
        "Jupiter"
    ],

    hint:
        "Earth is the third planet. Think about which planet is second.",

    explanation:
        "Venus is the second planet, so it comes immediately before Earth.",

    difficulty: 2,
    correctAnswer: "Venus",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-017",
    skillId: "planet-order",
    question: "Which planet comes immediately before Mars?",
    stage: "recognise",
    options: [
        "Earth",
        "Venus",
        "Jupiter",
        "Mercury"
    ],

    hint:
        "Mars is fourth in the Solar System. Which planet is third?",

    explanation:
        "Earth is the third planet and Mars is the fourth.",

    difficulty: 2,
    correctAnswer: "Earth",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-018",
    skillId: "planet-order",
    question: "Which planet comes immediately before Jupiter?",
    stage: "recognise",
    options: [
        "Mars",
        "Earth",
        "Saturn",
        "Venus"
    ],

    hint:
        "Jupiter is the fifth planet. Move back one place in the sequence.",

    explanation:
        "Mars is the fourth planet and Jupiter is the fifth.",

    difficulty: 2,
    correctAnswer: "Mars",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-019",
    skillId: "planet-order",
    question: "Which planet comes immediately before Saturn?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mars",
        "Uranus",
        "Neptune"
    ],

    hint:
        "Saturn follows the largest planet in the Solar System.",

    explanation:
        "Jupiter is the fifth planet and Saturn is the sixth.",

    difficulty: 2,
    correctAnswer: "Jupiter",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-020",
    skillId: "planet-order",
    question: "Which planet comes immediately before Uranus?",
    stage: "recognise",
    options: [
        "Saturn",
        "Jupiter",
        "Neptune",
        "Mars"
    ],

    hint:
        "Uranus comes after the planet with the famous rings.",

    explanation:
        "Saturn comes immediately before Uranus.",

    difficulty: 2,
    correctAnswer: "Saturn",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-021",
    skillId: "planet-order",
    question: "Which planet comes immediately before Neptune?",
    stage: "recognise",
    options: [
        "Uranus",
        "Saturn",
        "Jupiter",
        "Earth"
    ],

    hint:
        "Neptune is the last planet. Which planet is just before the last?",

    explanation:
        "Uranus is the seventh planet and Neptune is the eighth.",

    difficulty: 2,
    correctAnswer: "Uranus",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-022",
    skillId: "planet-order",
    question: "Which planet is between Mercury and Earth?",
    stage: "recognise",
    options: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
    ],

    hint:
        "Think of the first three planets in order. Which one is in the middle?",

    explanation:
        "Venus is between Mercury and Earth.",

    difficulty: 2,
    correctAnswer: "Venus",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-023",
    skillId: "planet-order",
    question: "Which planet is between Earth and Jupiter?",
    stage: "recognise",
    options: [
        "Mars",
        "Venus",
        "Saturn",
        "Mercury"
    ],

    hint:
        "Earth is third and Jupiter is fifth. Which planet is fourth?",

    explanation:
        "Mars comes after Earth and before Jupiter.",

    difficulty: 2,
    correctAnswer: "Mars",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-024",
    skillId: "planet-order",
    question: "Which planet is between Jupiter and Uranus?",
    stage: "recognise",
    options: [
        "Saturn",
        "Mars",
        "Neptune",
        "Earth"
    ],

    hint:
        "List these three in order: Jupiter, ?, Uranus.",

    explanation:
        "Saturn is between Jupiter and Uranus.",

    difficulty: 2,
    correctAnswer: "Saturn",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-025",
    skillId: "planet-order",
    question: "Which planet is between Saturn and Neptune?",
    stage: "recognise",
    options: [
        "Uranus",
        "Jupiter",
        "Mars",
        "Earth"
    ],

    hint:
        "There is only one planet separating Saturn from Neptune.",

    explanation:
        "Uranus is between Saturn and Neptune.",

    difficulty: 2,
    correctAnswer: "Uranus",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-026",
    skillId: "planet-order",
    question: "Which two planets come before Earth?",
    stage: "recognise",
    options: [
        "Mercury and Venus",
        "Venus and Mars",
        "Mars and Jupiter",
        "Mercury and Mars"
    ],

    hint:
        "Earth is third, so think about the first and second planets.",

    explanation:
        "Mercury is first and Venus is second, so both come before Earth.",

    difficulty: 3,
    correctAnswer: "Mercury and Venus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-027",
    skillId: "planet-order",
    question: "Which two planets come after Saturn?",
    stage: "recognise",
    options: [
        "Uranus and Neptune",
        "Jupiter and Uranus",
        "Mars and Jupiter",
        "Earth and Mars"
    ],

    hint:
        "Saturn is sixth. Name the seventh and eighth planets.",

    explanation:
        "The two planets after Saturn are Uranus and Neptune.",

    difficulty: 3,
    correctAnswer: "Uranus and Neptune",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-028",
    skillId: "planet-order",
    question: "Which planet is exactly in the middle of the eight planets?",
    stage: "recognise",
    options: [
        "There isn't one.",
        "Earth",
        "Mars",
        "Jupiter"
    ],

    hint:
        "Ask yourself whether an even number of objects can have one single middle item.",

    explanation:
        "There are eight planets, so there is no single middle planet. Mars is fourth and Jupiter is fifth.",

    difficulty: 3,
    correctAnswer: "There isn't one.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order",
        "reasoning"
    ]
},

{
    id: "sci-planets-order-029",
    skillId: "planet-order",
    question: "If you travel away from the Sun, which planet do you reach after Neptune?",
    stage: "recognise",
    options: [
        "No planet",
        "Mercury",
        "Pluto",
        "Earth"
    ],

    hint:
        "Neptune is the last of the eight planets. The question is asking about planets only.",

    explanation:
        "Neptune is the eighth and last planet in our Solar System.",

    difficulty: 3,
    correctAnswer: "No planet",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-030",
    skillId: "planet-order",
    question: "If you travel from Mercury towards Neptune, which planet do you visit second?",
    stage: "recognise",
    options: [
        "Venus",
        "Earth",
        "Mars",
        "Jupiter"
    ],

    hint:
        "Begin at Mercury, then count the planets you visit—not including where you started.",

    explanation:
        "After Mercury, the next planet is Venus.",

    difficulty: 3,
    correctAnswer: "Venus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-031",
    skillId: "planet-order",
    question: "What is the correct order of the first three planets?",
    stage: "recognise",
    options: [
        "Mercury, Venus, Earth",
        "Mercury, Earth, Venus",
        "Venus, Mercury, Earth",
        "Earth, Venus, Mercury"
    ],

    hint:
        "Think about the first, second and third planets from the Sun without skipping any.",

    explanation:
        "The first three planets are Mercury, Venus and Earth.",

    difficulty: 3,
    correctAnswer: "Mercury, Venus, Earth",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-032",
    skillId: "planet-order",
    question: "What is the correct order of the last three planets?",
    stage: "recognise",
    options: [
        "Saturn, Uranus, Neptune",
        "Jupiter, Uranus, Neptune",
        "Saturn, Neptune, Uranus",
        "Uranus, Saturn, Neptune"
    ],

    hint:
        "Start at the sixth planet and continue to the end of the Solar System.",

    explanation:
        "The last three planets are Saturn, Uranus and Neptune.",

    difficulty: 3,
    correctAnswer: "Saturn, Uranus, Neptune",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-033",
    skillId: "planet-order",
    question: "Which planet is four places after Mercury?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mars",
        "Saturn",
        "Earth"
    ],

    hint:
        "Move forward one planet at a time from Mercury until you've moved four places.",

    explanation:
        "Starting at Mercury: Venus (1), Earth (2), Mars (3), Jupiter (4).",

    difficulty: 4,
    correctAnswer: "Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order",
        "counting"
    ]
},

{
    id: "sci-planets-order-034",
    skillId: "planet-order",
    question: "Which planet is two places after Earth?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mars",
        "Saturn",
        "Venus"
    ],

    hint:
        "The first step after Earth is Mars. Take one more step.",

    explanation:
        "After Earth comes Mars, then Jupiter.",

    difficulty: 4,
    correctAnswer: "Jupiter",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order",
        "counting"
    ]
},

{
    id: "sci-planets-order-035",
    skillId: "planet-order",
    question: "Which planet is three places before Neptune?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mars",
        "Saturn",
        "Earth"
    ],

    hint:
        "Work backwards from Neptune, counting one planet at a time.",

    explanation:
        "Counting backwards from Neptune: Uranus (1), Saturn (2), Jupiter (3).",

    difficulty: 4,
    correctAnswer: "Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order",
        "counting"
    ]
},

{
    id: "sci-planets-order-036",
    skillId: "planet-order",
    question: "Mercury, Venus, Earth, ____, Jupiter. Which planet is missing?",
    stage: "recognise",
    options: [
        "Mars",
        "Saturn",
        "Neptune",
        "Uranus"
    ],

    hint:
        "Look for the one planet that fits naturally between Earth and Jupiter.",

    explanation:
        "Mars comes between Earth and Jupiter.",

    difficulty: 4,
    correctAnswer: "Mars",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-037",
    skillId: "planet-order",
    question: "Mercury, Venus, Earth, Mars, Jupiter, ____, Uranus. Which planet is missing?",
    stage: "recognise",
    options: [
        "Saturn",
        "Neptune",
        "Earth",
        "Mercury"
    ],

    hint:
        "Find the planet that comes immediately after Jupiter and before Uranus.",

    explanation:
        "Saturn comes after Jupiter and before Uranus.",

    difficulty: 4,
    correctAnswer: "Saturn",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-038",
    skillId: "planet-order",
    question: "Earth is the third planet. What number is Mars?",
    stage: "recognise",
    options: [
        "Fourth",
        "Second",
        "Fifth",
        "Sixth"
    ],

    hint:
        "Mars comes immediately after Earth, so increase the position by one.",

    explanation:
        "Mars comes immediately after Earth, making it the fourth planet.",

    difficulty: 4,
    correctAnswer: "Fourth",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-039",
    skillId: "planet-order",
    question: "Jupiter is the fifth planet. What number is Saturn?",
    stage: "recognise",
    options: [
        "Sixth",
        "Fourth",
        "Seventh",
        "Eighth"
    ],

    hint:
        "Saturn comes straight after Jupiter, so its position is one higher.",

    explanation:
        "Saturn comes immediately after Jupiter, so it is the sixth planet.",

    difficulty: 4,
    correctAnswer: "Sixth",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-040",
    skillId: "planet-order",
    question: "Which statement is correct?",
    stage: "recognise",
    options: [
        "Earth comes before Mars.",
        "Mars comes before Earth.",
        "Jupiter comes before Mercury.",
        "Neptune comes before Saturn."
    ],

    hint:
        "Compare the positions of Earth and Mars in the Solar System before checking the other statements.",

    explanation:
        "Earth is the third planet and Mars is the fourth, so Earth comes first.",

    difficulty: 4,
    correctAnswer: "Earth comes before Mars.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-041",
    skillId: "planet-order",
    question: "Which statement is correct?",
    stage: "recognise",
    options: [
        "Saturn comes after Jupiter.",
        "Saturn comes before Jupiter.",
        "Saturn comes after Neptune.",
        "Saturn is the last planet."
    ],

    hint:
        "Remember the order around these planets: Jupiter, Saturn, Uranus.",

    explanation:
        "Jupiter is fifth and Saturn is sixth, so Saturn comes after Jupiter.",

    difficulty: 5,
    correctAnswer: "Saturn comes after Jupiter.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-042",
    skillId: "planet-order",
    question: "Which statement is correct?",
    stage: "recognise",
    options: [
        "Uranus comes before Neptune.",
        "Neptune comes before Uranus.",
        "Earth comes after Jupiter.",
        "Venus comes before Mercury."
    ],

    hint:
        "Focus on the final two planets in the Solar System.",

    explanation:
        "Uranus is the seventh planet and Neptune is the eighth.",

    difficulty: 5,
    correctAnswer: "Uranus comes before Neptune.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-043",
    skillId: "planet-order",
    question: "Which pair of planets are next to each other?",
    stage: "recognise",
    options: [
        "Mars and Jupiter",
        "Earth and Jupiter",
        "Venus and Mars",
        "Saturn and Neptune"
    ],

    hint:
        "Look for the pair with no planet between them in the Solar System.",

    explanation:
        "Mars is immediately followed by Jupiter.",

    difficulty: 5,
    correctAnswer: "Mars and Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-044",
    skillId: "planet-order",
    question: "Which pair of planets are NOT next to each other?",
    stage: "recognise",
    options: [
        "Earth and Jupiter",
        "Mercury and Venus",
        "Venus and Earth",
        "Saturn and Uranus"
    ],

    hint:
        "Check whether another planet sits between the two names.",

    explanation:
        "Mars sits between Earth and Jupiter, so they are not next to each other.",

    difficulty: 5,
    correctAnswer: "Earth and Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-045",
    skillId: "planet-order",
    question: "Starting at Mercury and moving away from the Sun, which planet is fifth?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mars",
        "Saturn",
        "Earth"
    ],

    hint:
        "Count Mercury as first, then continue the sequence carefully.",

    explanation:
        "Counting from the Sun gives Mercury, Venus, Earth, Mars and then Jupiter.",

    difficulty: 5,
    correctAnswer: "Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-046",
    skillId: "planet-order",
    question: "Which planet is immediately before the last planet?",
    stage: "recognise",
    options: [
        "Uranus",
        "Saturn",
        "Jupiter",
        "Mars"
    ],

    hint:
        "First identify the last planet, then move back one place.",

    explanation:
        "Neptune is the last planet, so Uranus comes immediately before it.",

    difficulty: 5,
    correctAnswer: "Uranus",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-047",
    skillId: "planet-order",
    question: "Which planet is immediately after the first planet?",
    stage: "recognise",
    options: [
        "Venus",
        "Earth",
        "Mars",
        "Mercury"
    ],

    hint:
        "The first planet is Mercury. Which planet follows it straight away?",

    explanation:
        "Mercury is first and Venus comes immediately after it.",

    difficulty: 5,
    correctAnswer: "Venus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-order-048",
    skillId: "planet-order",
    question: "Which list shows all eight planets in the correct order?",
    stage: "recognise",
    options: [
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Mercury, Earth, Venus, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Mercury, Venus, Earth, Jupiter, Mars, Saturn, Uranus, Neptune",
        "Mercury, Venus, Earth, Mars, Saturn, Jupiter, Uranus, Neptune"
    ],

    hint:
        "Check each list from left to right and stop as soon as you spot a pair of planets in the wrong order.",

    explanation:
        "The correct order from the Sun is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.",

    difficulty: 5,
    correctAnswer: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
    estimatedSeconds: 30,

    tags: [
        "science",
        "space",
        "planet-order",
        "mastery"
    ]
},

{
    id: "sci-planets-order-049",
    skillId: "planet-order",
    question: "Which sentence is true?",
    stage: "recognise",
    options: [
        "Mars is closer to the Sun than Jupiter.",
        "Jupiter is closer to the Sun than Mars.",
        "Neptune is closer to the Sun than Saturn.",
        "Earth is closer to the Sun than Venus."
    ],

    hint:
        "The planet that appears earlier in the order is closer to the Sun.",

    explanation:
        "Mars is the fourth planet and Jupiter is the fifth, so Mars is closer to the Sun.",

    difficulty: 5,
    correctAnswer: "Mars is closer to the Sun than Jupiter.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order",
        "mastery"
    ]
},

{
    id: "sci-planets-order-050",
    skillId: "planet-order",
    question: "Sofia says the planets are in this order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Is she correct?",
    stage: "recognise",
    options: [
        "Yes, that is the correct order.",
        "No, Earth and Mars should swap places.",
        "No, Saturn should come before Jupiter.",
        "No, Neptune should come before Uranus."
    ],

    hint:
        "Read through Sofia's list one planet at a time and see if every neighbouring pair is in the correct order.",

    explanation:
        "Well done! Sofia has named all eight planets in the correct order from the Sun.",

    difficulty: 5,
    correctAnswer: "Yes, that is the correct order.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "space",
        "planet-order",
        "mastery"
    ]
}

]
};

export default planetOrder;

export {
    planetOrder
};