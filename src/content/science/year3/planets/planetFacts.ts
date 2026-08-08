import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const planetFacts: SkillContent = {

    skillId: "planet-facts",

    title: "Planet Facts",

    description:
        "Learn interesting facts about each of the eight planets in our Solar System.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-planet-facts-001",
        skillId: "planet-facts",
        question: "Which planet is closest to the Sun?",
        stage: "recognise",
        options: [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
        ],

        hint:
            "Think about the order of the planets starting from the Sun.",

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
        skillId: "planet-facts",
        question: "Which planet is our home?",
        stage: "recognise",
        options: [
            "Earth",
            "Mars",
            "Venus",
            "Jupiter"
        ],

        hint:
            "Choose the planet where humans, animals and plants all live.",

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
        skillId: "planet-facts",
        question: "Which planet is known as the Red Planet?",
        stage: "recognise",
        options: [
            "Mars",
            "Mercury",
            "Venus",
            "Saturn"
        ],

        hint:
            "Its nickname comes from the rusty red colour of its surface.",

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
        skillId: "planet-facts",
        question: "Which planet is the largest in our Solar System?",
        stage: "recognise",
        options: [
            "Jupiter",
            "Saturn",
            "Earth",
            "Neptune"
        ],

        hint:
            "Look for the giant gas planet that is bigger than every other planet.",

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
        skillId: "planet-facts",
        question: "Which planet is famous for its bright rings?",
        stage: "recognise",
        options: [
            "Saturn",
            "Jupiter",
            "Mars",
            "Earth"
        ],

        hint:
            "Although several planets have rings, one planet's rings are much easier to see.",

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
        skillId: "planet-facts",
        question: "Which planet spins on its side?",
        stage: "recognise",
        options: [
            "Uranus",
            "Neptune",
            "Saturn",
            "Mars"
        ],

        hint:
            "Most planets spin upright, but one is tilted so much it looks like it is rolling.",

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
        skillId: "planet-facts",
        question: "Which planet is the farthest from the Sun?",
        stage: "recognise",
        options: [
            "Neptune",
            "Uranus",
            "Saturn",
            "Jupiter"
        ],

        hint:
            "Think about the very last planet in the Solar System.",

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
        skillId: "planet-facts",
        question: "Which planet is the hottest?",
        stage: "recognise",
        options: [
            "Venus",
            "Mercury",
            "Earth",
            "Mars"
        ],

        hint:
            "Being closest to the Sun doesn't automatically make a planet the hottest.",

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
        skillId: "planet-facts",
        question: "Which planet has one large moon called Earth's Moon?",
        stage: "recognise",
        options: [
            "Earth",
            "Mars",
            "Venus",
            "Mercury"
        ],

        hint:
            "Think about the planet you live on and the Moon you see in the night sky.",

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
        skillId: "planet-facts",
        question: "Which planet has the Great Red Spot, a giant storm?",
        stage: "recognise",
        options: [
            "Jupiter",
            "Saturn",
            "Neptune",
            "Mars"
        ],

        hint:
            "The Great Red Spot is a huge storm on the largest planet in the Solar System.",

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
    id: "sci-planet-facts-015",
    skillId: "planet-facts",
    question: "Which planet is sometimes called Earth's twin because it is a similar size?",
    stage: "recognise",
    options: [
        "Venus",
        "Mars",
        "Mercury",
        "Saturn"
    ],

    hint:
        "Look for the planet that is almost the same size as Earth, even though its conditions are very different.",

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
        skillId: "planet-facts",
        question: "Which planet has no moons?",
        stage: "recognise",
        options: [
        "Mercury and Venus",
        "Earth and Mars",
        "Jupiter and Saturn",
        "Uranus and Neptune"
    ],

    hint:
        "Only two of the rocky inner planets have no natural satellites.",

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
    skillId: "planet-facts",
    question: "Which planet has one moon?",
    stage: "recognise",
    options: [
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn"
    ],

    hint:
        "Think about the planet whose natural satellite is simply called 'the Moon'.",

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
    skillId: "planet-facts",
    question: "Which planet is famous for having the biggest ring system?",
    stage: "recognise",
    options: [
        "Saturn",
        "Jupiter",
        "Uranus",
        "Neptune"
    ],

    hint:
        "Several planets have rings, but one has rings that are wide, bright and easy to spot.",

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
    skillId: "planet-facts",
    question: "Which planet is the smallest in the Solar System?",
    stage: "recognise",
    options: [
        "Mercury",
        "Mars",
        "Venus",
        "Earth"
    ],

    hint:
        "Choose the tiny rocky planet closest to the Sun.",

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
    skillId: "planet-facts",
    question: "Which planet is the biggest in the Solar System?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Neptune",
        "Earth"
    ],

    hint:
        "Think of the giant planet that is so large all the other planets could fit inside it many times over.",

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
    skillId: "planet-facts",
    question: "Which planet takes about one Earth year to travel around the Sun?",
    stage: "recognise",
    options: [
        "Earth",
        "Mars",
        "Venus",
        "Jupiter"
    ],

    hint:
        "A year is named after the time this planet takes to complete one orbit around the Sun.",

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
    skillId: "planet-facts",
    question: "Which planet is often called the Blue Planet because of its oceans?",
    stage: "recognise",
    options: [
        "Earth",
        "Neptune",
        "Uranus",
        "Venus"
    ],

    hint:
        "Choose the planet whose surface is mostly covered by liquid water.",

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
    skillId: "planet-facts",
    question: "Which planet has two small moons called Phobos and Deimos?",
    stage: "recognise",
    options: [
        "Mars",
        "Earth",
        "Mercury",
        "Venus"
    ],

    hint:
        "Phobos and Deimos orbit the planet famous for its red appearance.",

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
    skillId: "planet-facts",
    question: "Which planet is famous for its extremely strong winds?",
    stage: "recognise",
    options: [
        "Neptune",
        "Earth",
        "Mercury",
        "Mars"
    ],

    hint:
        "Look for the planet farthest from the Sun, where winds can blow faster than a racing car.",

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
    skillId: "planet-facts",
    question: "Which planet is second from the Sun?",
    stage: "recognise",
    options: [
        "Venus",
        "Mercury",
        "Earth",
        "Mars"
    ],

    hint:
        "Mercury comes first. Which planet comes immediately after it?",

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
    skillId: "planet-facts",
    question: "Which planet is fourth from the Sun?",
    stage: "recognise",
    options: [
        "Mars",
        "Earth",
        "Jupiter",
        "Venus"
    ],

    hint:
        "Count the planets in order: Mercury, Venus, Earth, then...", 

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
    skillId: "planet-facts",
    question: "Which planet comes immediately before Saturn?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mars",
        "Earth",
        "Uranus"
    ],

    hint:
        "Saturn is the sixth planet. Think about which planet is fifth.",

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
    skillId: "planet-facts",
    question: "Which planet comes immediately after Saturn?",
    stage: "recognise",
    options: [
        "Uranus",
        "Neptune",
        "Jupiter",
        "Mars"
    ],

    hint:
        "Saturn is the sixth planet from the Sun. Which planet is seventh?",

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
    skillId: "planet-facts",
    question: "Which planet is closest in size to Earth?",
    stage: "recognise",
    options: [
        "Venus",
        "Mars",
        "Mercury",
        "Neptune"
    ],

    hint:
        "Think about the planet often nicknamed Earth's twin because of its size.",

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
    skillId: "planet-facts",
    question: "Which planet has the most famous giant storm called the Great Red Spot?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Neptune",
        "Uranus"
    ],

    hint:
        "The Great Red Spot is found on the largest planet in the Solar System.",

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
        skillId: "planet-facts",
        question: "Which planet is called an ice giant?",
        stage: "recognise",
        options: [
        "Uranus",
        "Earth",
        "Mars",
        "Venus"
    ],

    hint:
        "There are two ice giants. Choose the one that spins almost on its side.",

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
    skillId: "planet-facts",
    question: "Which planet is also an ice giant?",
    stage: "recognise",
    options: [
        "Neptune",
        "Jupiter",
        "Saturn",
        "Mercury"
    ],

    hint:
        "The other ice giant is the farthest planet from the Sun.",

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
    skillId: "planet-facts",
    question: "Which planet is the second largest in the Solar System?",
    stage: "recognise",
    options: [
        "Saturn",
        "Jupiter",
        "Neptune",
        "Earth"
    ],

    hint:
        "Jupiter is the largest. Which planet comes next in size?",

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
    skillId: "planet-facts",
    question: "Which planet has the most noticeable rings?",
    stage: "recognise",
    options: [
        "Saturn",
        "Jupiter",
        "Uranus",
        "Neptune"
    ],

    hint:
        "Choose the planet whose bright rings can easily be seen through a small telescope.",

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
    skillId: "planet-facts",
    question: "Which planet is known for being very cold because it is far from the Sun?",
    stage: "recognise",
    options: [
        "Neptune",
        "Venus",
        "Mercury",
        "Earth"
    ],

    hint:
        "Think about which planet receives the least sunlight because it is the most distant.",

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
    skillId: "planet-facts",
    question: "Which planet is the third planet from the Sun?",
    stage: "recognise",
    options: [
        "Earth",
        "Venus",
        "Mars",
        "Mercury"
    ],

    hint:
        "Count in order: Mercury, Venus, then...", 

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
    skillId: "planet-facts",
    question: "Which planet is the seventh planet from the Sun?",
    stage: "recognise",
    options: [
        "Uranus",
        "Neptune",
        "Saturn",
        "Jupiter"
    ],

    hint:
        "It comes immediately after Saturn and before Neptune.",

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
    skillId: "planet-facts",
    question: "Which planet has a thick atmosphere that makes it the hottest planet?",
    stage: "recognise",
    options: [
        "Venus",
        "Mercury",
        "Earth",
        "Mars"
    ],

    hint:
        "Don't pick the closest planet to the Sun. Think about which atmosphere traps the most heat.",

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
    skillId: "planet-facts",
    question: "Which planet is famous for its huge volcano called Olympus Mons?",
    stage: "recognise",
    options: [
        "Mars",
        "Earth",
        "Venus",
        "Mercury"
    ],

    hint:
        "Olympus Mons stands on the planet known as the Red Planet.",

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
    skillId: "planet-facts",
    question: "Which planet has no natural moons and is closest to the Sun?",
    stage: "recognise",
    options: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars"
    ],

    hint:
        "Only two planets have no moons. Choose the one that is nearest the Sun.",

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
    skillId: "planet-facts",
    question: "Which planet has no natural moons and is the hottest planet?",
    stage: "recognise",
    options: [
        "Venus",
        "Mercury",
        "Earth",
        "Mars"
    ],

    hint:
        "Don't choose the closest planet to the Sun. Think about the one whose thick atmosphere traps heat.",

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
    skillId: "planet-facts",
    question: "Which planet is larger than Earth and famous for its rings?",
    stage: "recognise",
    options: [
        "Saturn",
        "Mars",
        "Mercury",
        "Venus"
    ],

    hint:
        "Look for the giant planet best known for its spectacular ring system.",

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
    skillId: "planet-facts",
    question: "Which planet rotates almost on its side?",
    stage: "recognise",
    options: [
        "Uranus",
        "Neptune",
        "Saturn",
        "Jupiter"
    ],

    hint:
        "This planet has such a large tilt that it looks as if it rolls around the Sun.",

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
    skillId: "planet-facts",
    question: "Which planet has the fastest known winds in the Solar System?",
    stage: "recognise",
    options: [
        "Neptune",
        "Jupiter",
        "Earth",
        "Mars"
    ],

    hint:
        "Choose the icy blue planet at the edge of the Solar System.",

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
    skillId: "planet-facts",
    question: "Which planet is famous for the Great Red Spot?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Neptune",
        "Uranus"
    ],

    hint:
        "The Great Red Spot is a giant storm on the largest planet.",

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
        skillId: "planet-facts",
        question: "Which statement about Mercury is true?",
        stage: "recognise",
        options: [
        "It is the closest planet to the Sun.",
        "It has large rings.",
        "It is the largest planet.",
        "It has two moons."
    ],

    hint:
        "Eliminate the impossible answers—Mercury is a small rocky planet with no rings or moons.",

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
    skillId: "planet-facts",
    question: "Which statement about Venus is true?",
    stage: "recognise",
    options: [
        "It is the hottest planet.",
        "It has beautiful rings.",
        "It is the largest planet.",
        "It is the farthest planet from the Sun."
    ],

    hint:
        "Only one option matches a real fact about Venus. Remember why it is hotter than Mercury.",

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
    skillId: "planet-facts",
    question: "Which statement about Earth is true?",
    stage: "recognise",
    options: [
        "It is the only known planet with life.",
        "It has no atmosphere.",
        "It is the largest planet.",
        "It has bright rings."
    ],

    hint:
        "Rule out statements that clearly describe other planets or are obviously false.",

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
    skillId: "planet-facts",
    question: "Which statement about Jupiter is true?",
    stage: "recognise",
    options: [
        "It is the largest planet in the Solar System.",
        "It is the smallest planet.",
        "It is a rocky planet.",
        "It is the hottest planet."
    ],

    hint:
        "Jupiter is a gas giant, not a rocky planet. Which remaining fact is correct?",

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
    skillId: "planet-facts",
    question: "Which summary correctly describes the eight planets?",
    stage: "recognise",
    options: [
        "Mercury is closest to the Sun, Venus is the hottest, Earth is our home, Mars is the Red Planet, Jupiter is the largest, Saturn has the best-known rings, Uranus spins on its side and Neptune is the farthest planet.",
        "Jupiter is closest to the Sun, Earth has rings and Mars is the largest planet.",
        "Mercury is the hottest, Venus has rings and Neptune is the smallest planet.",
        "All eight planets are the same size and have the same features."
    ],

    hint:
        "Check each statement carefully. The correct answer is the only one where every planet fact is accurate.",

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

export default planetFacts;

export {

    planetFacts

};