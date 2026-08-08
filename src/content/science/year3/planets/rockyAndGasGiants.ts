import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const rockyAndGasGiants: SkillContent = {

    skillId: "rocky-and-gas-giants",

    title: "Rocky and Gas Giant Planets",

    description:
        "Learn which planets are rocky planets and which are giant planets.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-planets-types-001",
        skillId: "rocky-and-gas-giants",
        question: "Which of these is a rocky planet?",
        stage: "recognise",
        options: [
            "Earth",
            "Jupiter",
            "Saturn",
            "Neptune"
        ],

        hint:
            "Rocky planets have solid surfaces. Three of these choices are giant planets.",

        explanation:
            "Earth is a rocky planet with a solid surface.",

        difficulty: 1,
        correctAnswer: "Earth",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "rocky-planets",
            "earth"
        ]
    },

    {
        id: "sci-planets-types-002",
        skillId: "rocky-and-gas-giants",
        question: "Which of these is a giant planet?",
        stage: "recognise",
        options: [
            "Jupiter",
            "Earth",
            "Mars",
            "Venus"
        ],

        hint:
            "Only one option belongs to the group of the four giant outer planets.",

        explanation:
            "Jupiter is the largest of the four giant planets.",

        difficulty: 1,
        correctAnswer: "Jupiter",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "giant-planets",
            "jupiter"
        ]
    },

    {
        id: "sci-planets-types-003",
        skillId: "rocky-and-gas-giants",
        question: "Which rocky planet do we live on?",
        stage: "recognise",
        options: [
            "Earth",
            "Mars",
            "Mercury",
            "Venus"
        ],

        hint:
            "Choose the rocky planet that is home to people, animals and plants.",

        explanation:
            "Earth is one of the four rocky planets and is our home.",

        difficulty: 1,
        correctAnswer: "Earth",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "earth",
            "rocky-planets"
        ]
    },

    {
        id: "sci-planets-types-004",
        skillId: "rocky-and-gas-giants",
        question: "Which of these is a giant planet?",
        stage: "recognise",
        options: [
            "Saturn",
            "Mercury",
            "Earth",
            "Mars"
        ],

        hint:
            "Three choices are rocky planets. Look for the famous ringed planet.",

        explanation:
            "Saturn is a giant planet best known for its bright rings.",

        difficulty: 1,
        correctAnswer: "Saturn",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "saturn",
            "giant-planets"
        ]
    },

    {
        id: "sci-planets-types-005",
        skillId: "rocky-and-gas-giants",
        question: "Which of these is a rocky planet?",
        stage: "recognise",
        options: [
            "Mars",
            "Uranus",
            "Neptune",
            "Jupiter"
        ],

        hint:
            "The rocky planets are the four closest planets to the Sun.",

        explanation:
            "Mars is a rocky planet with mountains, valleys and dusty deserts.",

        difficulty: 1,
        correctAnswer: "Mars",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "mars",
            "rocky-planets"
        ]
    },

    {
        id: "sci-planets-types-006",
        skillId: "rocky-and-gas-giants",
        question: "Which of these is a giant planet?",
        stage: "recognise",
        options: [
            "Neptune",
            "Venus",
            "Earth",
            "Mercury"
        ],

        hint:
            "Only one choice is one of the four outer giant planets.",

        explanation:
            "Neptune is one of the four giant planets.",

        difficulty: 1,
        correctAnswer: "Neptune",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "neptune",
            "giant-planets"
        ]
    },

    {
        id: "sci-planets-types-007",
        skillId: "rocky-and-gas-giants",
        question: "Which group contains only rocky planets?",
        stage: "recognise",
        options: [
            "Mercury, Venus, Earth and Mars",
            "Earth, Mars, Jupiter and Saturn",
            "Mercury, Jupiter, Saturn and Neptune",
            "Venus, Earth, Uranus and Neptune"
        ],

        hint:
            "A correct group cannot include any of the four giant planets.",

        explanation:
            "The rocky planets are Mercury, Venus, Earth and Mars.",

        difficulty: 1,
        correctAnswer: "Mercury, Venus, Earth and Mars",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "rocky-planets"
        ]
    },

    {
        id: "sci-planets-types-008",
        skillId: "rocky-and-gas-giants",
        question: "Which group contains only giant planets?",
        stage: "recognise",
        options: [
            "Jupiter, Saturn, Uranus and Neptune",
            "Mercury, Venus, Earth and Mars",
            "Earth, Jupiter, Saturn and Neptune",
            "Mars, Jupiter, Saturn and Venus"
        ],

        hint:
            "Check that every planet listed belongs to the outer giant group.",

        explanation:
            "Jupiter, Saturn, Uranus and Neptune are the four giant planets.",

        difficulty: 1,
        correctAnswer: "Jupiter, Saturn, Uranus and Neptune",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "giant-planets"
        ]
    },

    {
        id: "sci-planets-types-009",
        skillId: "rocky-and-gas-giants",
        question: "How many rocky planets are there?",
        stage: "recognise",
        options: [
            "4",
            "3",
            "5",
            "8"
        ],

        hint:
            "Count Mercury, Venus, Earth and Mars.",

        explanation:
            "There are four rocky planets in our Solar System.",

        difficulty: 1,
        correctAnswer: "4",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "rocky-planets"
        ]
    },

    {
        id: "sci-planets-types-010",
        skillId: "rocky-and-gas-giants",
        question: "How many giant planets are there?",
        stage: "recognise",
        options: [
            "4",
            "3",
            "5",
            "8"
        ],

        hint:
            "Count Jupiter, Saturn, Uranus and Neptune.",

        explanation:
            "There are four giant planets in our Solar System.",

        difficulty: 1,
        correctAnswer: "4",
        estimatedSeconds: 12,

        tags: [
            "science",
            "space",
            "giant-planets"
        ]
    },

    {
        id: "sci-planets-types-011",
        skillId: "rocky-and-gas-giants",
        question: "Which rocky planet is closest to the Sun?",
        stage: "recognise",
        options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
        ],

        hint:
            "Think of the first planet in the Solar System—it is also rocky.",

        explanation:
            "Mercury is the closest planet to the Sun and it is a rocky planet.",

        difficulty: 2,
        correctAnswer: "Mercury",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "mercury",
            "rocky-planets"
        ]
    },

    {
        id: "sci-planets-types-012",
        skillId: "rocky-and-gas-giants",
        question: "Which giant planet is closest to the Sun?",
        stage: "recognise",
        options: [
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune"
        ],

        hint:
            "The giant planets begin immediately after the four rocky planets.",

        explanation:
            "Jupiter is the first giant planet as you travel away from the Sun.",

        difficulty: 2,
        correctAnswer: "Jupiter",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "jupiter",
            "giant-planets"
        ]
    },

    {
        id: "sci-planets-types-013",
        skillId: "rocky-and-gas-giants",
        question: "Which rocky planet is farthest from the Sun?",
        stage: "recognise",
        options: [
            "Mars",
            "Earth",
            "Venus",
            "Mercury"
        ],

        hint:
            "Choose the last planet before the giant planets begin.",

        explanation:
            "Mars is the fourth and last rocky planet.",

        difficulty: 2,
        correctAnswer: "Mars",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "mars",
            "rocky-planets"
        ]
    },

    {
        id: "sci-planets-types-014",
        skillId: "rocky-and-gas-giants",
        question: "Which giant planet is farthest from the Sun?",
        stage: "recognise",
        options: [
            "Neptune",
            "Uranus",
            "Saturn",
            "Jupiter"
        ],

        hint:
            "Pick the giant planet that is also the last planet in the Solar System.",

        explanation:
            "Neptune is the last giant planet and the last planet in our Solar System.",

        difficulty: 2,
        correctAnswer: "Neptune",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "neptune",
            "giant-planets"
        ]
    },

    {
    id: "sci-planets-types-015",
    skillId: "rocky-and-gas-giants",
    question: "Ella says, 'Earth is a giant planet.' Is she correct?",
    stage: "recognise",
    options: [
        "No, Earth is a rocky planet.",
        "Yes, Earth is a giant planet.",
        "No, Earth is a star.",
        "No, Earth is a moon."
    ],

    hint:
        "Think about whether Earth has a solid rocky surface or belongs with the four giant outer planets.",

    explanation:
        "Earth has a solid, rocky surface, so it is a rocky planet.",

    difficulty: 2,
    correctAnswer: "No, Earth is a rocky planet.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "earth",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-016",
    skillId: "rocky-and-gas-giants",
    question: "Ben says, 'Jupiter is a rocky planet.' Is Ben correct?",
    stage: "recognise",
    options: [
        "No, Jupiter is a giant planet.",
        "Yes, Jupiter is a rocky planet.",
        "No, Jupiter is a star.",
        "No, Jupiter is a moon."
    ],

    hint:
        "Jupiter belongs to the same group as Saturn, Uranus and Neptune.",

    explanation:
        "Jupiter is the largest giant planet. It does not have a solid rocky surface like Earth.",

    difficulty: 2,
    correctAnswer: "No, Jupiter is a giant planet.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "jupiter",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-017",
    skillId: "rocky-and-gas-giants",
    question: "Which pair contains two rocky planets?",
    stage: "recognise",
    options: [
        "Earth and Mars",
        "Earth and Jupiter",
        "Saturn and Neptune",
        "Jupiter and Uranus"
    ],

    hint:
        "Both planets in the correct answer must have solid surfaces.",

    explanation:
        "Earth and Mars are both rocky planets with solid surfaces.",

    difficulty: 2,
    correctAnswer: "Earth and Mars",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-018",
    skillId: "rocky-and-gas-giants",
    question: "Which pair contains two giant planets?",
    stage: "recognise",
    options: [
        "Jupiter and Saturn",
        "Earth and Mars",
        "Mercury and Venus",
        "Mars and Jupiter"
    ],

    hint:
        "The correct pair should both come from the four outer giant planets.",

    explanation:
        "Jupiter and Saturn are both giant planets.",

    difficulty: 2,
    correctAnswer: "Jupiter and Saturn",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-019",
    skillId: "rocky-and-gas-giants",
    question: "Which planet belongs with Earth because they are both rocky planets?",
    stage: "recognise",
    options: [
        "Venus",
        "Saturn",
        "Jupiter",
        "Neptune"
    ],

    hint:
        "Choose another planet from the inner rocky group, not one of the giant planets.",

    explanation:
        "Venus and Earth are both rocky planets with solid surfaces.",

    difficulty: 2,
    correctAnswer: "Venus",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "rocky-planets",
        "venus"
    ]
},

{
    id: "sci-planets-types-020",
    skillId: "rocky-and-gas-giants",
    question: "Which planet belongs with Jupiter because they are both giant planets?",
    stage: "recognise",
    options: [
        "Saturn",
        "Earth",
        "Mercury",
        "Mars"
    ],

    hint:
        "Look for another member of the four giant outer planets.",

    explanation:
        "Jupiter and Saturn are both giant planets.",

    difficulty: 2,
    correctAnswer: "Saturn",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "giant-planets",
        "saturn"
    ]
},

{
    id: "sci-planets-types-021",
    skillId: "rocky-and-gas-giants",
    question: "Which answer contains only rocky planets?",
    stage: "recognise",
    options: [
        "Mercury, Earth and Mars",
        "Earth, Jupiter and Mars",
        "Mercury, Saturn and Venus",
        "Earth, Uranus and Neptune"
    ],

    hint:
        "If a list includes Jupiter, Saturn, Uranus or Neptune, it cannot be correct.",

    explanation:
        "Mercury, Earth and Mars are all rocky planets.",

    difficulty: 2,
    correctAnswer: "Mercury, Earth and Mars",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-022",
    skillId: "rocky-and-gas-giants",
    question: "Which answer contains only giant planets?",
    stage: "recognise",
    options: [
        "Saturn, Uranus and Neptune",
        "Earth, Mars and Jupiter",
        "Mercury, Venus and Earth",
        "Mars, Jupiter and Saturn"
    ],

    hint:
        "Every planet in the correct list should be one of the four outer planets.",

    explanation:
        "Saturn, Uranus and Neptune are all giant planets.",

    difficulty: 2,
    correctAnswer: "Saturn, Uranus and Neptune",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-023",
    skillId: "rocky-and-gas-giants",
    question: "Which planet is NOT a rocky planet?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Earth",
        "Mars",
        "Venus"
    ],

    hint:
        "Three choices have solid rocky surfaces. One belongs to the giant planets.",

    explanation:
        "Jupiter is a giant planet. Earth, Mars and Venus are rocky planets.",

    difficulty: 2,
    correctAnswer: "Jupiter",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "jupiter"
    ]
},

{
    id: "sci-planets-types-024",
    skillId: "rocky-and-gas-giants",
    question: "Which planet is NOT a giant planet?",
    stage: "recognise",
    options: [
        "Mercury",
        "Jupiter",
        "Saturn",
        "Neptune"
    ],

    hint:
        "Three options are giant planets. Find the small rocky one.",

    explanation:
        "Mercury is one of the four rocky planets.",

    difficulty: 2,
    correctAnswer: "Mercury",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "mercury"
    ]
},

{
    id: "sci-planets-types-025",
    skillId: "rocky-and-gas-giants",
    question: "Which rocky planet is nearest to Jupiter?",
    stage: "recognise",
    options: [
        "Mars",
        "Earth",
        "Venus",
        "Mercury"
    ],

    hint:
        "Jupiter is the first giant planet. Which rocky planet comes immediately before it?",

    explanation:
        "Mars is the last rocky planet before the giant planets begin with Jupiter.",

    difficulty: 3,
    correctAnswer: "Mars",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "rocky-planets",
        "mars"
    ]
},

{
    id: "sci-planets-types-026",
    skillId: "rocky-and-gas-giants",
    question: "Which giant planet is nearest to Mars?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],

    hint:
        "Move one step outward from Mars into the giant planets.",

    explanation:
        "Jupiter comes immediately after Mars.",

    difficulty: 3,
    correctAnswer: "Jupiter",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "giant-planets",
        "jupiter"
    ]
},

{
    id: "sci-planets-types-027",
    skillId: "rocky-and-gas-giants",
    question: "How many giant planets are larger than Earth?",
    stage: "recognise",
    options: [
        "4",
        "3",
        "2",
        "1"
    ],

    hint:
        "Think about every giant planet—are any of them smaller than Earth?",

    explanation:
        "All four giant planets are much larger than Earth.",

    difficulty: 3,
    correctAnswer: "4",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "giant-planets"
    ]
},

 {
    id: "sci-planets-types-028",
    skillId: "rocky-and-gas-giants",
    question: "How many rocky planets are closer to the Sun than Jupiter?",
    stage: "recognise",
    options: [
        "4",
        "3",
        "2",
        "1"
    ],

    hint:
        "Jupiter is the first giant planet. Count every rocky planet before it.",

    explanation:
        "The four rocky planets all come before Jupiter.",

    difficulty: 3,
    correctAnswer: "4",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-029",
    skillId: "rocky-and-gas-giants",
    question: "Which sentence is true?",
    stage: "recognise",
    options: [
        "All rocky planets come before the giant planets.",
        "All giant planets come before the rocky planets.",
        "Rocky and giant planets take turns.",
        "There are more rocky planets than giant planets."
    ],

    hint:
        "Think about the order of the planets from the Sun rather than their names.",

    explanation:
        "The first four planets are rocky. The last four are giant planets.",

    difficulty: 3,
    correctAnswer: "All rocky planets come before the giant planets.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "rocky-planets",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-030",
    skillId: "rocky-and-gas-giants",
    question: "Which statement is correct?",
    stage: "recognise",
    options: [
        "There are four rocky planets and four giant planets.",
        "There are five rocky planets and three giant planets.",
        "There are three rocky planets and five giant planets.",
        "Every planet is rocky."
    ],

    hint:
        "There are eight planets altogether. How are they split into the two groups?",

    explanation:
        "The eight planets are divided into four rocky planets and four giant planets.",

    difficulty: 3,
    correctAnswer: "There are four rocky planets and four giant planets.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "rocky-planets",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-031",
    skillId: "rocky-and-gas-giants",
    question: "Which rocky planet is the smallest?",
    stage: "recognise",
    options: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars"
    ],

    hint:
        "Choose the tiny rocky planet that is closest to the Sun.",

    explanation:
        "Mercury is the smallest of the four rocky planets.",

    difficulty: 3,
    correctAnswer: "Mercury",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "mercury",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-032",
    skillId: "rocky-and-gas-giants",
    question: "Which giant planet is the largest?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],

    hint:
        "Think of the biggest planet in the entire Solar System.",

    explanation:
        "Jupiter is the largest giant planet and the largest planet in our Solar System.",

    difficulty: 3,
    correctAnswer: "Jupiter",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "jupiter",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-033",
    skillId: "rocky-and-gas-giants",
    question: "Which giant planet is famous for its rings?",
    stage: "recognise",
    options: [
        "Saturn",
        "Jupiter",
        "Uranus",
        "Neptune"
    ],

    hint:
        "All giant planets have rings, but one planet's rings are especially easy to see.",

    explanation:
        "All four giant planets have rings, but Saturn's are the brightest and easiest to see.",

    difficulty: 3,
    correctAnswer: "Saturn",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "saturn",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-034",
    skillId: "rocky-and-gas-giants",
    question: "Which rocky planet is known as the Red Planet?",
    stage: "recognise",
    options: [
        "Mars",
        "Mercury",
        "Venus",
        "Earth"
    ],

    hint:
        "Its reddish colour comes from iron-rich dust covering its surface.",

    explanation:
        "Mars is called the Red Planet because of the rusty dust covering its surface.",

    difficulty: 3,
    correctAnswer: "Mars",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "mars",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-035",
    skillId: "rocky-and-gas-giants",
    question: "Which giant planet comes immediately after the rocky planets?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],

    hint:
        "The giant planets begin straight after Mars.",

    explanation:
        "Jupiter comes immediately after Mars, the last rocky planet.",

    difficulty: 3,
    correctAnswer: "Jupiter",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "jupiter",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-036",
    skillId: "rocky-and-gas-giants",
    question: "Which sentence is true?",
    stage: "recognise",
    options: [
        "Mercury is a rocky planet.",
        "Mercury is a giant planet.",
        "Mercury is a star.",
        "Mercury is a moon."
    ],

    hint:
        "Mercury is one of the four inner planets with a solid surface.",

    explanation:
        "Mercury has a solid rocky surface, so it is a rocky planet.",

    difficulty: 4,
    correctAnswer: "Mercury is a rocky planet.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "mercury",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-037",
    skillId: "rocky-and-gas-giants",
    question: "Which sentence is true?",
    stage: "recognise",
    options: [
        "Neptune is a giant planet.",
        "Neptune is a rocky planet.",
        "Neptune is a star.",
        "Neptune is a moon."
    ],

    hint:
        "Neptune belongs to the same group as Jupiter, Saturn and Uranus.",

    explanation:
        "Neptune is one of the four giant planets.",

    difficulty: 4,
    correctAnswer: "Neptune is a giant planet.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "neptune",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-038",
    skillId: "rocky-and-gas-giants",
    question: "Which list shows only rocky planets?",
    stage: "recognise",
    options: [
        "Mercury, Venus, Earth, Mars",
        "Earth, Mars, Jupiter, Saturn",
        "Mercury, Venus, Saturn, Neptune",
        "Mercury, Earth, Uranus, Neptune"
    ],

    hint:
        "A single giant planet in a list makes that answer incorrect.",

    explanation:
        "Mercury, Venus, Earth and Mars are the four rocky planets.",

    difficulty: 4,
    correctAnswer: "Mercury, Venus, Earth, Mars",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-039",
    skillId: "rocky-and-gas-giants",
    question: "Which list shows only giant planets?",
    stage: "recognise",
    options: [
        "Jupiter, Saturn, Uranus, Neptune",
        "Mars, Jupiter, Saturn, Uranus",
        "Earth, Jupiter, Saturn, Neptune",
        "Mercury, Jupiter, Uranus, Neptune"
    ],

    hint:
        "Check that none of the inner rocky planets appear in the list.",

    explanation:
        "Jupiter, Saturn, Uranus and Neptune are the four giant planets.",

    difficulty: 4,
    correctAnswer: "Jupiter, Saturn, Uranus, Neptune",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-040",
    skillId: "rocky-and-gas-giants",
    question: "Which planet does NOT belong in this group: Mercury, Venus, Earth, Jupiter?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mercury",
        "Venus",
        "Earth"
    ],

    hint:
        "Three planets in the list have solid rocky surfaces. One is much larger and belongs to the giant planets.",

    explanation:
        "Jupiter is a giant planet. The other three are rocky planets.",

    difficulty: 4,
    correctAnswer: "Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "classification"
    ]
},

{
    id: "sci-planets-types-041",
    skillId: "rocky-and-gas-giants",
    question: "Which planet does NOT belong in this group: Jupiter, Saturn, Uranus, Mars?",
    stage: "recognise",
    options: [
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus"
    ],

    hint:
        "Three are giant planets. Look for the only planet with a solid rocky surface.",

    explanation:
        "Mars is a rocky planet. The other three are giant planets.",

    difficulty: 4,
    correctAnswer: "Mars",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "classification"
    ]
},

{
    id: "sci-planets-types-042",
    skillId: "rocky-and-gas-giants",
    question: "Which statement is correct?",
    stage: "recognise",
    options: [
        "Rocky planets have solid surfaces.",
        "Giant planets have solid rocky surfaces.",
        "Only giant planets travel around the Sun.",
        "Only rocky planets have atmospheres."
    ],

    hint:
        "Think about what makes rocky planets different from giant planets, not where they travel.",

    explanation:
        "Rocky planets have solid surfaces that are made of rock and metal.",

    difficulty: 4,
    correctAnswer: "Rocky planets have solid surfaces.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-043",
    skillId: "rocky-and-gas-giants",
    question: "Which statement is correct?",
    stage: "recognise",
    options: [
        "Jupiter, Saturn, Uranus and Neptune are giant planets.",
        "Mercury, Venus, Earth and Jupiter are rocky planets.",
        "Mars is a giant planet.",
        "Neptune is a rocky planet."
    ],

    hint:
        "Only one answer groups together all four outer planets.",

    explanation:
        "The four giant planets are Jupiter, Saturn, Uranus and Neptune.",

    difficulty: 4,
    correctAnswer: "Jupiter, Saturn, Uranus and Neptune are giant planets.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-044",
    skillId: "rocky-and-gas-giants",
    question: "Which answer correctly matches the planet to its type?",
    stage: "recognise",
    options: [
        "Mars - Rocky planet",
        "Saturn - Rocky planet",
        "Jupiter - Rocky planet",
        "Neptune - Rocky planet"
    ],

    hint:
        "Only one planet listed belongs to the four inner rocky planets.",

    explanation:
        "Mars is one of the four rocky planets.",

    difficulty: 4,
    correctAnswer: "Mars - Rocky planet",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "mars",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-045",
    skillId: "rocky-and-gas-giants",
    question: "Which answer correctly matches the planet to its type?",
    stage: "recognise",
    options: [
        "Saturn - Giant planet",
        "Earth - Giant planet",
        "Mercury - Giant planet",
        "Venus - Giant planet"
    ],

    hint:
        "Three answers wrongly call rocky planets 'giant'. Find the real giant planet.",

    explanation:
        "Saturn is one of the four giant planets.",

    difficulty: 4,
    correctAnswer: "Saturn - Giant planet",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "saturn",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-046",
    skillId: "rocky-and-gas-giants",
    question: "How many rocky planets are there before the giant planets begin?",
    stage: "recognise",
    options: [
        "4",
        "3",
        "5",
        "2"
    ],

    hint:
        "List the planets from the Sun until you reach Jupiter.",

    explanation:
        "The first four planets—Mercury, Venus, Earth and Mars—are all rocky planets.",

    difficulty: 4,
    correctAnswer: "4",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "rocky-planets"
    ]
},

{
    id: "sci-planets-types-047",
    skillId: "rocky-and-gas-giants",
    question: "Which planet completes this pattern? Mercury, Venus, Earth, Mars, ___",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],

    hint:
        "The missing planet is the first giant planet after the four rocky planets.",

    explanation:
        "Jupiter comes immediately after Mars and is the first giant planet.",

    difficulty: 4,
    correctAnswer: "Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order",
        "jupiter"
    ]
},

{
    id: "sci-planets-types-048",
    skillId: "rocky-and-gas-giants",
    question: "Which statement best describes the Solar System's planets?",
    stage: "recognise",
    options: [
        "The first four planets are rocky and the last four are giant planets.",
        "The first four planets are giant and the last four are rocky.",
        "Every other planet is rocky.",
        "All eight planets are rocky."
    ],

    hint:
        "Think about both the order of the planets and how they are grouped into two equal sets.",

    explanation:
        "The Solar System has four rocky planets followed by four giant planets.",

    difficulty: 5,
    correctAnswer: "The first four planets are rocky and the last four are giant planets.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "space",
        "rocky-planets",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-049",
    skillId: "rocky-and-gas-giants",
    question: "Sam says, 'Uranus is a rocky planet because it is far from the Sun.' Is Sam correct?",
    stage: "recognise",
    options: [
        "No, Uranus is a giant planet.",
        "Yes, Uranus is a rocky planet.",
        "No, Uranus is a star.",
        "No, Uranus is a moon."
    ],

    hint:
        "A planet's distance from the Sun does not decide whether it is rocky or giant.",

    explanation:
        "Distance from the Sun does not make a planet rocky. Uranus is one of the four giant planets.",

    difficulty: 5,
    correctAnswer: "No, Uranus is a giant planet.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "space",
        "uranus",
        "giant-planets"
    ]
},

{
    id: "sci-planets-types-050",
    skillId: "rocky-and-gas-giants",
    question: "Which summary is correct?",
    stage: "recognise",
    options: [
        "Mercury, Venus, Earth and Mars are rocky planets. Jupiter, Saturn, Uranus and Neptune are giant planets.",
        "Mercury, Venus, Earth and Jupiter are rocky planets.",
        "Mars, Jupiter, Saturn and Neptune are rocky planets.",
        "There are five rocky planets and three giant planets."
    ],

    hint:
        "Check that every planet is placed in the correct group and that there are four in each group.",

    explanation:
        "The eight planets are divided into four rocky planets and four giant planets.",

    difficulty: 5,
    correctAnswer: "Mercury, Venus, Earth and Mars are rocky planets. Jupiter, Saturn, Uranus and Neptune are giant planets.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "space",
        "rocky-planets",
        "giant-planets"
    ]
}

]
};

export default rockyAndGasGiants;

export {
    rockyAndGasGiants
};