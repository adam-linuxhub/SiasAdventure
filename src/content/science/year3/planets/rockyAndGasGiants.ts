import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const rockyAndGasGiants: SkillContent = {

    skillId: "rocky-and-gas-giants",

    title: "Rocky and Gas Giant Planets",

    description:
        "Learn which planets are rocky planets and which are giant planets.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-planets-types-001",

        question: "Which of these is a rocky planet?",

        options: [
            "Earth",
            "Jupiter",
            "Saturn",
            "Neptune"
        ],

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

        question: "Which of these is a giant planet?",

        options: [
            "Jupiter",
            "Earth",
            "Mars",
            "Venus"
        ],

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

        question: "Which rocky planet do we live on?",

        options: [
            "Earth",
            "Mars",
            "Mercury",
            "Venus"
        ],

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

        question: "Which of these is a giant planet?",

        options: [
            "Saturn",
            "Mercury",
            "Earth",
            "Mars"
        ],

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

        question: "Which of these is a rocky planet?",

        options: [
            "Mars",
            "Uranus",
            "Neptune",
            "Jupiter"
        ],

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

        question: "Which of these is a giant planet?",

        options: [
            "Neptune",
            "Venus",
            "Earth",
            "Mercury"
        ],

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

        question: "Which group contains only rocky planets?",

        options: [
            "Mercury, Venus, Earth and Mars",
            "Earth, Mars, Jupiter and Saturn",
            "Mercury, Jupiter, Saturn and Neptune",
            "Venus, Earth, Uranus and Neptune"
        ],

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

        question: "Which group contains only giant planets?",

        options: [
            "Jupiter, Saturn, Uranus and Neptune",
            "Mercury, Venus, Earth and Mars",
            "Earth, Jupiter, Saturn and Neptune",
            "Mars, Jupiter, Saturn and Venus"
        ],

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

        question: "How many rocky planets are there?",

        options: [
            "4",
            "3",
            "5",
            "8"
        ],

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

        question: "How many giant planets are there?",

        options: [
            "4",
            "3",
            "5",
            "8"
        ],

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

        question: "Which rocky planet is closest to the Sun?",

        options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
        ],

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

        question: "Which giant planet is closest to the Sun?",

        options: [
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune"
        ],

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

        question: "Which rocky planet is farthest from the Sun?",

        options: [
            "Mars",
            "Earth",
            "Venus",
            "Mercury"
        ],

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

        question: "Which giant planet is farthest from the Sun?",

        options: [
            "Neptune",
            "Uranus",
            "Saturn",
            "Jupiter"
        ],

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

        question: "Ella says, 'Earth is a giant planet.' Is she correct?",

        options: [
            "No, Earth is a rocky planet.",
            "Yes, Earth is a giant planet.",
            "No, Earth is a star.",
            "No, Earth is a moon."
        ],

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

        question: "Ben says, 'Jupiter is a rocky planet.' Is Ben correct?",

        options: [
            "No, Jupiter is a giant planet.",
            "Yes, Jupiter is a rocky planet.",
            "No, Jupiter is a star.",
            "No, Jupiter is a moon."
        ],

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

        question: "Which pair contains two rocky planets?",

        options: [
            "Earth and Mars",
            "Earth and Jupiter",
            "Saturn and Neptune",
            "Jupiter and Uranus"
        ],

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

        question: "Which pair contains two giant planets?",

        options: [
            "Jupiter and Saturn",
            "Earth and Mars",
            "Mercury and Venus",
            "Mars and Jupiter"
        ],

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

        question: "Which planet belongs with Earth because they are both rocky planets?",

        options: [
            "Venus",
            "Saturn",
            "Jupiter",
            "Neptune"
        ],

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

        question: "Which planet belongs with Jupiter because they are both giant planets?",

        options: [
            "Saturn",
            "Earth",
            "Mercury",
            "Mars"
        ],

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

        question: "Which answer contains only rocky planets?",

        options: [
            "Mercury, Earth and Mars",
            "Earth, Jupiter and Mars",
            "Mercury, Saturn and Venus",
            "Earth, Uranus and Neptune"
        ],

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

        question: "Which answer contains only giant planets?",

        options: [
            "Saturn, Uranus and Neptune",
            "Earth, Mars and Jupiter",
            "Mercury, Venus and Earth",
            "Mars, Jupiter and Saturn"
        ],

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

        question: "Which planet is NOT a rocky planet?",

        options: [
            "Jupiter",
            "Earth",
            "Mars",
            "Venus"
        ],

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

        question: "Which planet is NOT a giant planet?",

        options: [
            "Mercury",
            "Jupiter",
            "Saturn",
            "Neptune"
        ],

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

        question: "Which rocky planet is nearest to Jupiter?",

        options: [
            "Mars",
            "Earth",
            "Venus",
            "Mercury"
        ],

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

        question: "Which giant planet is nearest to Mars?",

        options: [
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune"
        ],

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

        question: "How many giant planets are larger than Earth?",

        options: [
            "4",
            "3",
            "2",
            "1"
        ],

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

        question: "How many rocky planets are closer to the Sun than Jupiter?",

        options: [
            "4",
            "3",
            "2",
            "1"
        ],

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

        question: "Which sentence is true?",

        options: [
            "All rocky planets come before the giant planets.",
            "All giant planets come before the rocky planets.",
            "Rocky and giant planets take turns.",
            "There are more rocky planets than giant planets."
        ],

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

        question: "Which statement is correct?",

        options: [
            "There are four rocky planets and four giant planets.",
            "There are five rocky planets and three giant planets.",
            "There are three rocky planets and five giant planets.",
            "Every planet is rocky."
        ],

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

    question: "Which rocky planet is the smallest?",

    options: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars"
    ],

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

    question: "Which giant planet is the largest?",

    options: [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],

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

    question: "Which giant planet is famous for its rings?",

    options: [
        "Saturn",
        "Jupiter",
        "Uranus",
        "Neptune"
    ],

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

    question: "Which rocky planet is known as the Red Planet?",

    options: [
        "Mars",
        "Mercury",
        "Venus",
        "Earth"
    ],

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

    question: "Which giant planet comes immediately after the rocky planets?",

    options: [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ],

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

    question: "Which sentence is true?",

    options: [
        "Mercury is a rocky planet.",
        "Mercury is a giant planet.",
        "Mercury is a star.",
        "Mercury is a moon."
    ],

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

    question: "Which sentence is true?",

    options: [
        "Neptune is a giant planet.",
        "Neptune is a rocky planet.",
        "Neptune is a star.",
        "Neptune is a moon."
    ],

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

    question: "Which list shows only rocky planets?",

    options: [
        "Mercury, Venus, Earth, Mars",
        "Earth, Mars, Jupiter, Saturn",
        "Mercury, Venus, Saturn, Neptune",
        "Mercury, Earth, Uranus, Neptune"
    ],

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

    question: "Which list shows only giant planets?",

    options: [
        "Jupiter, Saturn, Uranus, Neptune",
        "Mars, Jupiter, Saturn, Uranus",
        "Earth, Jupiter, Saturn, Neptune",
        "Mercury, Jupiter, Uranus, Neptune"
    ],

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

    question: "Which planet does NOT belong in this group: Mercury, Venus, Earth, Jupiter?",

    options: [
        "Jupiter",
        "Mercury",
        "Venus",
        "Earth"
    ],

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

    question: "Which planet does NOT belong in this group: Jupiter, Saturn, Uranus, Mars?",

    options: [
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus"
    ],

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

    question: "Which statement is correct?",

    options: [
        "Rocky planets have solid surfaces.",
        "Giant planets have solid rocky surfaces.",
        "Only giant planets travel around the Sun.",
        "Only rocky planets have atmospheres."
    ],

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

    question: "Which statement is correct?",

    options: [
        "Jupiter, Saturn, Uranus and Neptune are giant planets.",
        "Mercury, Venus, Earth and Jupiter are rocky planets.",
        "Mars is a giant planet.",
        "Neptune is a rocky planet."
    ],

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

    question: "Which answer correctly matches the planet to its type?",

    options: [
        "Mars - Rocky planet",
        "Saturn - Rocky planet",
        "Jupiter - Rocky planet",
        "Neptune - Rocky planet"
    ],

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

    question: "Which answer correctly matches the planet to its type?",

    options: [
        "Saturn - Giant planet",
        "Earth - Giant planet",
        "Mercury - Giant planet",
        "Venus - Giant planet"
    ],

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

        question: "How many rocky planets are there before the giant planets begin?",

        options: [
            "4",
            "3",
            "5",
            "2"
        ],

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

        question: "Which planet completes this pattern? Mercury, Venus, Earth, Mars, ___",

        options: [
            "Jupiter",
            "Saturn",
            "Uranus",
            "Neptune"
        ],

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

        question: "Which statement best describes the Solar System's planets?",

        options: [
            "The first four planets are rocky and the last four are giant planets.",
            "The first four planets are giant and the last four are rocky.",
            "Every other planet is rocky.",
            "All eight planets are rocky."
        ],

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

        question: "Sam says, 'Uranus is a rocky planet because it is far from the Sun.' Is Sam correct?",

        options: [
            "No, Uranus is a giant planet.",
            "Yes, Uranus is a rocky planet.",
            "No, Uranus is a star.",
            "No, Uranus is a moon."
        ],

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

        question: "Which summary is correct?",

        options: [
            "Mercury, Venus, Earth and Mars are rocky planets. Jupiter, Saturn, Uranus and Neptune are giant planets.",
            "Mercury, Venus, Earth and Jupiter are rocky planets.",
            "Mars, Jupiter, Saturn and Neptune are rocky planets.",
            "There are five rocky planets and three giant planets."
        ],

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