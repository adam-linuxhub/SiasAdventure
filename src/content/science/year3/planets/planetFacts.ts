import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const planetFacts: SkillContent = {

    skillId: "planet-facts",

    title: "Planet Facts",

    description:
        "Learn interesting facts about each of the eight planets in our Solar System.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-planet-facts-001",

        question: "Which planet is closest to the Sun?",

        options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
        ],

        explanation:
            "Mercury is the closest planet to the Sun.",

        difficulty: 1,
        correctAnswer: "Mercury",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "mercury"
        ]
    },

    {
        id: "sci-planet-facts-002",

        question: "Which planet is our home?",

        options: [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],

        explanation:
            "Earth is the planet where all known life exists.",

        difficulty: 1,
        correctAnswer: "Earth",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "earth"
        ]
    },

    {
        id: "sci-planet-facts-003",

        question: "Which planet is known as the Red Planet?",

        options: [
            "Mars",
            "Mercury",
            "Venus",
            "Saturn"
        ],

        explanation:
            "Mars looks red because of rusty iron-rich dust covering its surface.",

        difficulty: 1,
        correctAnswer: "Mars",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "mars"
        ]
    },

    {
        id: "sci-planet-facts-004",

        question: "Which planet is the largest in our Solar System?",

        options: [
            "Jupiter",
            "Saturn",
            "Earth",
            "Neptune"
        ],

        explanation:
            "Jupiter is the largest planet in the Solar System.",

        difficulty: 1,
        correctAnswer: "Jupiter",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "jupiter"
        ]
    },

    {
        id: "sci-planet-facts-005",

        question: "Which planet is famous for its bright rings?",

        options: [
            "Saturn",
            "Jupiter",
            "Mars",
            "Earth"
        ],

        explanation:
            "Saturn's beautiful rings make it one of the easiest planets to recognise.",

        difficulty: 1,
        correctAnswer: "Saturn",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "saturn"
        ]
    },

    {
        id: "sci-planet-facts-006",

        question: "Which planet spins on its side?",

        options: [
            "Uranus",
            "Neptune",
            "Saturn",
            "Mars"
        ],

        explanation:
            "Uranus rotates almost on its side compared with the other planets.",

        difficulty: 1,
        correctAnswer: "Uranus",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "uranus"
        ]
    },

    {
        id: "sci-planet-facts-007",

        question: "Which planet is the farthest from the Sun?",

        options: [
            "Neptune",
            "Uranus",
            "Saturn",
            "Jupiter"
        ],

        explanation:
            "Neptune is the eighth and most distant planet from the Sun.",

        difficulty: 1,
        correctAnswer: "Neptune",
        estimatedSeconds: 10,

        tags: [
            "science",
            "space",
            "neptune"
        ]
    },

    {
        id: "sci-planet-facts-008",

        question: "Which planet is the hottest?",

        options: [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
        ],

        explanation:
            "Venus is the hottest planet because its thick atmosphere traps heat.",

        difficulty: 2,
        correctAnswer: "Venus",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "venus"
        ]
    },

    {
        id: "sci-planet-facts-009",

        question: "Which planet has one large moon called Earth's Moon?",

        options: [
            "Earth",
            "Mars",
            "Venus",
            "Mercury"
        ],

        explanation:
            "Earth has one natural satellite, usually called the Moon.",

        difficulty: 2,
        correctAnswer: "Earth",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "earth",
            "moon"
        ]
    },

    {
        id: "sci-planet-facts-010",

        question: "Which planet has the Great Red Spot, a giant storm?",

        options: [
            "Jupiter",
            "Saturn",
            "Neptune",
            "Mars"
        ],

        explanation:
            "The Great Red Spot is a huge storm that has been raging on Jupiter for many years.",

        difficulty: 2,
        correctAnswer: "Jupiter",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "jupiter",
            "storms"
        ]
    },

    {
        id: "sci-planet-facts-011",

        question: "Which planet has the shortest year?",

        options: [
            "Mercury",
            "Earth",
            "Mars",
            "Neptune"
        ],

        explanation:
            "Mercury travels around the Sun faster than any other planet.",

        difficulty: 2,
        correctAnswer: "Mercury",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "mercury",
            "orbit"
        ]
    },

    {
        id: "sci-planet-facts-012",

        question: "Which planet has the longest year?",

        options: [
            "Neptune",
            "Saturn",
            "Jupiter",
            "Uranus"
        ],

        explanation:
            "Neptune takes about 165 Earth years to travel once around the Sun.",

        difficulty: 2,
        correctAnswer: "Neptune",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "neptune",
            "orbit"
        ]
    },

    {
        id: "sci-planet-facts-013",

        question: "Which planet is covered by thick yellowish clouds?",

        options: [
            "Venus",
            "Earth",
            "Mars",
            "Mercury"
        ],

        explanation:
            "Thick clouds completely cover Venus, hiding its surface.",

        difficulty: 2,
        correctAnswer: "Venus",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "venus"
        ]
    },

    {
        id: "sci-planet-facts-014",

        question: "Which planet has Olympus Mons, the largest volcano in the Solar System?",

        options: [
            "Mars",
            "Earth",
            "Mercury",
            "Venus"
        ],

        explanation:
            "Olympus Mons on Mars is the largest known volcano in the Solar System.",

        difficulty: 2,
        correctAnswer: "Mars",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "mars",
            "volcanoes"
        ]
    },

    {
        id: "sci-planet-facts-015",

        question: "Which planet is sometimes called Earth's twin because it is a similar size?",

        options: [
            "Venus",
            "Mars",
            "Mercury",
            "Saturn"
        ],

        explanation:
            "Venus is almost the same size as Earth, although the two planets are very different.",

        difficulty: 2,
        correctAnswer: "Venus",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "venus",
            "earth"
        ]
    },
        {
        id: "sci-planet-facts-016",

        question: "Which planet has no moons?",

        options: [
            "Mercury and Venus",
            "Earth and Mars",
            "Jupiter and Saturn",
            "Uranus and Neptune"
        ],

        explanation:
            "Mercury and Venus are the only planets in our Solar System with no known moons.",

        difficulty: 2,
            correctAnswer: "Mercury and Venus",
            estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "mercury",
            "venus",
            "moons"
        ]
    },

    {
        id: "sci-planet-facts-017",

        question: "Which planet has one moon?",

        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ],

        explanation:
            "Earth has one natural satellite called the Moon.",

        difficulty: 2,
        correctAnswer: "Earth",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "earth",
            "moon"
        ]
    },

    {
        id: "sci-planet-facts-018",

        question: "Which planet is famous for having the biggest ring system?",

        options: [
            "Saturn",
            "Jupiter",
            "Uranus",
            "Neptune"
        ],

        explanation:
            "Although all four giant planets have rings, Saturn's rings are by far the largest and brightest.",

        difficulty: 2,
        correctAnswer: "Saturn",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "saturn",
            "rings"
        ]
    },

    {
        id: "sci-planet-facts-019",

        question: "Which planet is the smallest in the Solar System?",

        options: [
            "Mercury",
            "Mars",
            "Venus",
            "Earth"
        ],

        explanation:
            "Mercury is the smallest of the eight planets.",

        difficulty: 2,
        correctAnswer: "Mercury",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "mercury"
        ]
    },

    {
        id: "sci-planet-facts-020",

        question: "Which planet is the biggest in the Solar System?",

        options: [
            "Jupiter",
            "Saturn",
            "Neptune",
            "Earth"
        ],

        explanation:
            "Jupiter is bigger than every other planet in the Solar System.",

        difficulty: 2,
        correctAnswer: "Jupiter",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "jupiter"
        ]
    },

    {
        id: "sci-planet-facts-021",

        question: "Which planet takes about one Earth year to travel around the Sun?",

        options: [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],

        explanation:
            "One Earth year is the time Earth takes to orbit the Sun.",

        difficulty: 3,
        correctAnswer: "Earth",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "earth",
            "orbit"
        ]
    },

    {
        id: "sci-planet-facts-022",

        question: "Which planet is often called the Blue Planet because of its oceans?",

        options: [
            "Earth",
            "Neptune",
            "Uranus",
            "Venus"
        ],

        explanation:
            "Earth is often called the Blue Planet because most of its surface is covered by water.",

        difficulty: 3,
        correctAnswer: "Earth",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "earth",
            "oceans"
        ]
    },

    {
        id: "sci-planet-facts-023",

        question: "Which planet has two small moons called Phobos and Deimos?",

        options: [
            "Mars",
            "Earth",
            "Mercury",
            "Venus"
        ],

        explanation:
            "Mars has two tiny moons called Phobos and Deimos.",

        difficulty: 3,
        correctAnswer: "Mars",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "mars",
            "moons"
        ]
    },

    {
        id: "sci-planet-facts-024",

        question: "Which planet is famous for its extremely strong winds?",

        options: [
            "Neptune",
            "Earth",
            "Mercury",
            "Mars"
        ],

        explanation:
            "Neptune has some of the fastest winds found anywhere in the Solar System.",

        difficulty: 3,
        correctAnswer: "Neptune",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "neptune",
            "weather"
        ]
    },

    {
        id: "sci-planet-facts-025",

        question: "Which planet is second from the Sun?",

        options: [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
        ],

        explanation:
            "Venus is the second planet from the Sun.",

        difficulty: 2,
        correctAnswer: "Venus",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "venus",
            "planet-order"
        ]
    },

    {
        id: "sci-planet-facts-026",

        question: "Which planet is fourth from the Sun?",

        options: [
            "Mars",
            "Earth",
            "Jupiter",
            "Venus"
        ],

        explanation:
            "Mars is the fourth planet from the Sun.",

        difficulty: 2,
        correctAnswer: "Mars",
        estimatedSeconds: 15,

        tags: [
            "science",
            "space",
            "mars",
            "planet-order"
        ]
    },

    {
        id: "sci-planet-facts-027",

        question: "Which planet comes immediately before Saturn?",

        options: [
            "Jupiter",
            "Mars",
            "Earth",
            "Uranus"
        ],

        explanation:
            "Jupiter is the fifth planet and Saturn is the sixth.",

        difficulty: 3,
        correctAnswer: "Jupiter",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "planet-order",
            "jupiter"
        ]
    },

    {
        id: "sci-planet-facts-028",

        question: "Which planet comes immediately after Saturn?",

        options: [
            "Uranus",
            "Neptune",
            "Jupiter",
            "Mars"
        ],

        explanation:
            "Uranus is the seventh planet from the Sun.",

        difficulty: 3,
        correctAnswer: "Uranus",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "planet-order",
            "uranus"
        ]
    },

    {
        id: "sci-planet-facts-029",

        question: "Which planet is closest in size to Earth?",

        options: [
            "Venus",
            "Mars",
            "Mercury",
            "Neptune"
        ],

        explanation:
            "Venus is very similar in size to Earth, although the planets are very different.",

        difficulty: 3,
        correctAnswer: "Venus",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "venus",
            "earth"
        ]
    },

    {
        id: "sci-planet-facts-030",

        question: "Which planet has the most famous giant storm called the Great Red Spot?",

        options: [
            "Jupiter",
            "Saturn",
            "Neptune",
            "Uranus"
        ],

        explanation:
            "The Great Red Spot is a huge storm on Jupiter that has lasted for many years.",

        difficulty: 3,
        correctAnswer: "Jupiter",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "jupiter",
            "storms"
        ]
    },
        {
        id: "sci-planet-facts-031",

        question: "Which planet is called an ice giant?",

        options: [
            "Uranus",
            "Earth",
            "Mars",
            "Venus"
        ],

        explanation:
            "Uranus is one of the two ice giants in our Solar System.",

        difficulty: 3,
            correctAnswer: "Uranus",
            estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "uranus",
            "ice-giant"
        ]
    },

    {
        id: "sci-planet-facts-032",

        question: "Which planet is also an ice giant?",

        options: [
            "Neptune",
            "Jupiter",
            "Saturn",
            "Mercury"
        ],

        explanation:
            "Neptune is the second ice giant in our Solar System.",

        difficulty: 3,
        correctAnswer: "Neptune",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "neptune",
            "ice-giant"
        ]
    },

    {
        id: "sci-planet-facts-033",

        question: "Which planet is the second largest in the Solar System?",

        options: [
            "Saturn",
            "Jupiter",
            "Neptune",
            "Earth"
        ],

        explanation:
            "Jupiter is the largest planet, making Saturn the second largest.",

        difficulty: 3,
        correctAnswer: "Saturn",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "saturn"
        ]
    },

    {
        id: "sci-planet-facts-034",

        question: "Which planet has the most noticeable rings?",

        options: [
            "Saturn",
            "Jupiter",
            "Uranus",
            "Neptune"
        ],

        explanation:
            "Saturn's rings are much brighter and easier to see than the rings of the other giant planets.",

        difficulty: 3,
        correctAnswer: "Saturn",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "saturn",
            "rings"
        ]
    },

    {
        id: "sci-planet-facts-035",

        question: "Which planet is known for being very cold because it is far from the Sun?",

        options: [
            "Neptune",
            "Venus",
            "Mercury",
            "Earth"
        ],

        explanation:
            "Neptune is so far from the Sun that it is one of the coldest planets.",

        difficulty: 3,
        correctAnswer: "Neptune",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "neptune"
        ]
    },

    {
        id: "sci-planet-facts-036",

        question: "Which planet is the third planet from the Sun?",

        options: [
            "Earth",
            "Venus",
            "Mars",
            "Mercury"
        ],

        explanation:
            "Earth is the third planet from the Sun.",

        difficulty: 4,
        correctAnswer: "Earth",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "earth",
            "planet-order"
        ]
    },

    {
        id: "sci-planet-facts-037",

        question: "Which planet is the seventh planet from the Sun?",

        options: [
            "Uranus",
            "Neptune",
            "Saturn",
            "Jupiter"
        ],

        explanation:
            "Uranus is the seventh planet from the Sun.",

        difficulty: 4,
        correctAnswer: "Uranus",
        estimatedSeconds: 20,

        tags: [
            "science",
            "space",
            "uranus",
            "planet-order"
        ]
    },

    {
        id: "sci-planet-facts-038",

        question: "Which planet has a thick atmosphere that makes it the hottest planet?",

        options: [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
        ],

        explanation:
            "Venus is hotter than Mercury because its thick atmosphere traps heat.",

        difficulty: 4,
        correctAnswer: "Venus",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "venus",
            "atmosphere"
        ]
    },

    {
        id: "sci-planet-facts-039",

        question: "Which planet is famous for its huge volcano called Olympus Mons?",

        options: [
            "Mars",
            "Earth",
            "Venus",
            "Mercury"
        ],

        explanation:
            "Olympus Mons on Mars is the largest known volcano in the Solar System.",

        difficulty: 4,
        correctAnswer: "Mars",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "mars",
            "volcanoes"
        ]
    },

    {
        id: "sci-planet-facts-040",

        question: "Which planet has no natural moons and is closest to the Sun?",

        options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
        ],

        explanation:
            "Mercury is the closest planet to the Sun and has no known moons.",

        difficulty: 4,
        correctAnswer: "Mercury",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "mercury",
            "moons"
        ]
    },

    {
        id: "sci-planet-facts-041",

        question: "Which planet has no natural moons and is the hottest planet?",

        options: [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
        ],

        explanation:
            "Venus has no known moons and is the hottest planet in our Solar System.",

        difficulty: 4,
        correctAnswer: "Venus",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "venus",
            "moons"
        ]
    },

    {
        id: "sci-planet-facts-042",

        question: "Which planet is larger than Earth and famous for its rings?",

        options: [
            "Saturn",
            "Mars",
            "Mercury",
            "Venus"
        ],

        explanation:
            "Saturn is much larger than Earth and is famous for its spectacular ring system.",

        difficulty: 4,
        correctAnswer: "Saturn",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "saturn",
            "rings"
        ]
    },

    {
        id: "sci-planet-facts-043",

        question: "Which planet rotates almost on its side?",

        options: [
            "Uranus",
            "Neptune",
            "Saturn",
            "Jupiter"
        ],

        explanation:
            "Uranus has a very unusual tilt and spins almost on its side.",

        difficulty: 4,
        correctAnswer: "Uranus",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "uranus"
        ]
    },

    {
        id: "sci-planet-facts-044",

        question: "Which planet has the fastest known winds in the Solar System?",

        options: [
            "Neptune",
            "Jupiter",
            "Earth",
            "Mars"
        ],

        explanation:
            "Neptune's winds can blow at over 2,000 kilometres per hour.",

        difficulty: 4,
        correctAnswer: "Neptune",
        estimatedSeconds: 30,

        tags: [
            "science",
            "space",
            "neptune",
            "weather"
        ]
    },

    {
        id: "sci-planet-facts-045",

        question: "Which planet is famous for the Great Red Spot?",

        options: [
            "Jupiter",
            "Saturn",
            "Neptune",
            "Uranus"
        ],

        explanation:
            "The Great Red Spot is a giant storm on Jupiter.",

        difficulty: 4,
        correctAnswer: "Jupiter",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "jupiter",
            "storms"
        ]
    },
        {
        id: "sci-planet-facts-046",

        question: "Which statement about Mercury is true?",

        options: [
            "It is the closest planet to the Sun.",
            "It has large rings.",
            "It is the largest planet.",
            "It has two moons."
        ],

        explanation:
            "Mercury is the closest planet to the Sun and has no known moons.",

        difficulty: 4,
            correctAnswer: "It is the closest planet to the Sun.",
            estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "mercury"
        ]
    },

    {
        id: "sci-planet-facts-047",

        question: "Which statement about Venus is true?",

        options: [
            "It is the hottest planet.",
            "It has beautiful rings.",
            "It is the largest planet.",
            "It is the farthest planet from the Sun."
        ],

        explanation:
            "Venus is the hottest planet because its thick atmosphere traps heat.",

        difficulty: 4,
        correctAnswer: "It is the hottest planet.",
        estimatedSeconds: 25,

        tags: [
            "science",
            "space",
            "venus"
        ]
    },

    {
        id: "sci-planet-facts-048",

        question: "Which statement about Earth is true?",

        options: [
            "It is the only known planet with life.",
            "It has no atmosphere.",
            "It is the largest planet.",
            "It has bright rings."
        ],

        explanation:
            "Earth is the only planet where life is known to exist.",

        difficulty: 5,
        correctAnswer: "It is the only known planet with life.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "space",
            "earth"
        ]
    },

    {
        id: "sci-planet-facts-049",

        question: "Which statement about Jupiter is true?",

        options: [
            "It is the largest planet in the Solar System.",
            "It is the smallest planet.",
            "It is a rocky planet.",
            "It is the hottest planet."
        ],

        explanation:
            "Jupiter is the largest planet in our Solar System and is a giant planet.",

        difficulty: 5,
        correctAnswer: "It is the largest planet in the Solar System.",
        estimatedSeconds: 30,

        tags: [
            "science",
            "space",
            "jupiter"
        ]
    },

    {
        id: "sci-planet-facts-050",

        question: "Which summary correctly describes the eight planets?",

        options: [
            "Mercury is closest to the Sun, Venus is the hottest, Earth is our home, Mars is the Red Planet, Jupiter is the largest, Saturn has the best-known rings, Uranus spins on its side and Neptune is the farthest planet.",
            "Jupiter is closest to the Sun, Earth has rings and Mars is the largest planet.",
            "Mercury is the hottest, Venus has rings and Neptune is the smallest planet.",
            "All eight planets are the same size and have the same features."
        ],

        explanation:
            "Each planet has its own unique features that help us identify it.",

        difficulty: 5,
        correctAnswer: "Mercury is closest to the Sun, Venus is the hottest, Earth is our home, Mars is the Red Planet, Jupiter is the largest, Saturn has the best-known rings, Uranus spins on its side and Neptune is the farthest planet.",
        estimatedSeconds: 35,

        tags: [
            "science",
            "space",
            "planet-facts"
        ]
    }

    ]

};