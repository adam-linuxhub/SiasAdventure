import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const planetNames: SkillContent = {

    skillId: "planet-names",

    title: "Planet Names",

    description:
        "Learn to recognise and name the eight planets in our Solar System.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

{
    id: "sci-planets-names-001",
    skillId: "planet-names",
    question: "Which of these is a planet?",
    stage: "recognise",
    options: [
        "Earth",
        "Moon",
        "Sun",
        "Comet"
    ],

    hint:
        "Only one option is one of the eight major planets in our Solar System.",

    explanation:
        "Earth is one of the eight planets in our Solar System.",

    difficulty: 1,
    correctAnswer: "Earth",
    estimatedSeconds: 10,

    tags: [
        "science",
        "space",
        "planet",
        "earth"
    ]
},

{
    id: "sci-planets-names-002",
    skillId: "planet-names",
    question: "Which planet do we live on?",
    stage: "recognise",
    options: [
        "Earth",
        "Mars",
        "Venus",
        "Jupiter"
    ],

    hint:
        "Choose the planet that is home to all known life.",

    explanation:
        "Earth is our home planet. It is the only planet known to support life.",

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
    id: "sci-planets-names-003",
    skillId: "planet-names",
    question: "Which of these is Mercury?",
    stage: "recognise",
    options: [
        "Mercury",
        "Moon",
        "Sun",
        "Comet"
    ],

    hint:
        "Only one option is the name of a planet.",

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
    id: "sci-planets-names-004",
    skillId: "planet-names",
    question: "Which of these is Venus?",
    stage: "recognise",
    options: [
        "Venus",
        "Moon",
        "Star",
        "Asteroid"
    ],

    hint:
        "Look for the only planet name in the list.",

    explanation:
        "Venus is the second planet from the Sun.",

    difficulty: 1,
    correctAnswer: "Venus",
    estimatedSeconds: 10,

    tags: [
        "science",
        "space",
        "venus"
    ]
},

{
    id: "sci-planets-names-005",
    skillId: "planet-names",
    question: "Which of these is Earth?",
    stage: "recognise",
    options: [
        "Earth",
        "Sun",
        "Galaxy",
        "Comet"
    ],

    hint:
        "A galaxy contains many stars. Which option is actually a planet?",

    explanation:
        "Earth is the third planet from the Sun and our home.",

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
    id: "sci-planets-names-006",
    skillId: "planet-names",
    question: "Which of these is Mars?",
    stage: "recognise",
    options: [
        "Mars",
        "Moon",
        "Star",
        "Asteroid"
    ],

    hint:
        "Only one answer is the name of the Red Planet.",

    explanation:
        "Mars is often called the Red Planet.",

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
    id: "sci-planets-names-007",
    skillId: "planet-names",
    question: "Which of these is Jupiter?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Sun",
        "Comet",
        "Galaxy"
    ],

    hint:
        "Choose the only option that is a planet.",

    explanation:
        "Jupiter is the largest planet in our Solar System.",

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
    id: "sci-planets-names-008",
    skillId: "planet-names",
    question: "Which of these is Saturn?",
    stage: "recognise",
    options: [
        "Saturn",
        "Moon",
        "Asteroid",
        "Star"
    ],

    hint:
        "Find the only option that is one of the eight planets.",

    explanation:
        "Saturn is famous for its bright rings.",

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
    id: "sci-planets-names-009",
    skillId: "planet-names",
    question: "Which of these is Uranus?",
    stage: "recognise",
    options: [
        "Uranus",
        "Sun",
        "Comet",
        "Moon"
    ],

    hint:
        "Three options are not planets. Pick the one that is.",

    explanation:
        "Uranus is a large icy planet that spins on its side.",

    difficulty: 1,
    correctAnswer: "Uranus",
    estimatedSeconds: 10,

    tags: [
        "science",
        "space",
        "uranus"
    ]
},

{
    id: "sci-planets-names-010",
    skillId: "planet-names",
    question: "Which of these is Neptune?",
    stage: "recognise",
    options: [
        "Neptune",
        "Galaxy",
        "Star",
        "Asteroid"
    ],

    hint:
        "Only one choice is the name of a planet.",

    explanation:
        "Neptune is the eighth and farthest planet from the Sun.",

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
    id: "sci-planets-names-011",
    skillId: "planet-names",
    question: "How many planets are there in our Solar System?",
    stage: "recognise",
    options: [
        "8",
        "7",
        "9",
        "10"
    ],

    hint:
        "Pluto is no longer counted as a planet, so think of the current total.",

    explanation:
        "There are eight planets in our Solar System.",

    difficulty: 1,
    correctAnswer: "8",
    estimatedSeconds: 12,

    tags: [
        "science",
        "space",
        "solar-system"
    ]
},

{
    id: "sci-planets-names-012",
    skillId: "planet-names",
    question: "Which planet is called the Red Planet?",
    stage: "recognise",
    options: [
        "Mars",
        "Earth",
        "Mercury",
        "Venus"
    ],

    hint:
        "Its reddish colour comes from iron-rich dust covering its surface.",

    explanation:
        "Mars is called the Red Planet because its dusty surface looks red.",

    difficulty: 2,
    correctAnswer: "Mars",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "mars"
    ]
},

{
    id: "sci-planets-names-013",
    skillId: "planet-names",
    question: "Which planet is famous for its rings?",
    stage: "recognise",
    options: [
        "Saturn",
        "Earth",
        "Venus",
        "Mars"
    ],

    hint:
        "Several planets have rings, but one is especially well known for them.",

    explanation:
        "Saturn has the most famous rings of all the planets.",

    difficulty: 2,
    correctAnswer: "Saturn",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "saturn"
    ]
},

{
    id: "sci-planets-names-014",
    skillId: "planet-names",
    question: "Which is the largest planet?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Earth",
        "Neptune",
        "Mars"
    ],

    hint:
        "Think of the giant planet with the Great Red Spot.",

    explanation:
        "Jupiter is the largest planet in our Solar System.",

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
    id: "sci-planets-names-015",
    skillId: "planet-names",
    question: "Which planet is closest to the Sun?",
    stage: "recognise",
    options: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars"
    ],

    hint:
        "Think of the first planet in order from the Sun.",

    explanation:
        "Mercury is the closest planet to the Sun.",

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
    id: "sci-planets-names-016",
    skillId: "planet-names",
    question: "Which planet is farthest from the Sun?",
    stage: "recognise",
    options: [
        "Neptune",
        "Uranus",
        "Saturn",
        "Jupiter"
    ],

    hint:
        "Choose the eighth and final planet in the Solar System.",

    explanation:
        "Neptune is the eighth and most distant planet from the Sun.",

    difficulty: 2,
    correctAnswer: "Neptune",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "neptune"
    ]
},

{
    id: "sci-planets-names-017",
    skillId: "planet-names",
    question: "Which planet do astronauts launch from?",
    stage: "recognise",
    options: [
        "Earth",
        "Mars",
        "Mercury",
        "Venus"
    ],

    hint:
        "Think about the planet where all space agencies and launch sites are found.",

    explanation:
        "All astronauts begin their journeys into space from Earth.",

    difficulty: 2,
    correctAnswer: "Earth",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "earth"
    ]
},

{
    id: "sci-planets-names-018",
    skillId: "planet-names",
    question: "Which answer contains only planets?",
    stage: "recognise",
    options: [
        "Earth, Mars, Saturn",
        "Earth, Moon, Mars",
        "Sun, Venus, Earth",
        "Mars, Jupiter, Comet"
    ],

    hint:
        "Remove any answer that contains a moon, a star or a comet.",

    explanation:
        "Earth, Mars and Saturn are all planets. The other answers include objects that are not planets.",

    difficulty: 2,
    correctAnswer: "Earth, Mars, Saturn",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planets"
    ]
},

{
    id: "sci-planets-names-019",
    skillId: "planet-names",
    question: "Which of these is NOT a planet?",
    stage: "recognise",
    options: [
        "Moon",
        "Mars",
        "Earth",
        "Saturn"
    ],

    hint:
        "Three choices orbit the Sun directly. One travels around Earth instead.",

    explanation:
        "The Moon travels around Earth. It is a natural satellite, not a planet.",

    difficulty: 2,
    correctAnswer: "Moon",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "moon"
    ]
},

{
    id: "sci-planets-names-020",
    skillId: "planet-names",
    question: "Which planet's name begins with the letter V?",
    stage: "recognise",
    options: [
        "Venus",
        "Mercury",
        "Mars",
        "Jupiter"
    ],

    hint:
        "Look for the only option that starts with the letter 'V'.",

    explanation:
        "Venus is the only planet whose name begins with the letter V.",

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
    id: "sci-planets-names-021",
    skillId: "planet-names",
    question: "Ella says, 'We live on Mars.' Is she correct?",
    stage: "recognise",
    options: [
        "No, we live on Earth.",
        "Yes, we live on Mars.",
        "No, we live on Venus.",
        "No, we live on Jupiter."
    ],

    hint:
        "Think about the planet where every person on Earth lives today.",

    explanation:
        "People live on Earth. Mars is an exciting planet to explore, but nobody lives there.",

    difficulty: 2,
    correctAnswer: "No, we live on Earth.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "earth",
        "mars"
    ]
},

{
    id: "sci-planets-names-022",
    skillId: "planet-names",
    question: "Ben says, 'The Sun is a planet.' Is Ben correct?",
    stage: "recognise",
    options: [
        "No, the Sun is a star.",
        "Yes, the Sun is a planet.",
        "No, the Sun is a moon.",
        "No, the Sun is an asteroid."
    ],

    hint:
        "Planets travel around the Sun. What kind of object is the Sun itself?",

    explanation:
        "The Sun is a star. The eight planets travel around it.",

    difficulty: 2,
    correctAnswer: "No, the Sun is a star.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "sun",
        "star"
    ]
},

{
    id: "sci-planets-names-023",
    skillId: "planet-names",
    question: "Which planet comes straight after Earth as you travel away from the Sun?",
    stage: "recognise",
    options: [
        "Mars",
        "Venus",
        "Jupiter",
        "Mercury"
    ],

    hint:
        "Remember the order: Mercury, Venus, Earth, then...",

    explanation:
        "The order begins Mercury, Venus, Earth, Mars.",

    difficulty: 2,
    correctAnswer: "Mars",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order",
        "mars"
    ]
},

{
    id: "sci-planets-names-024",
    skillId: "planet-names",
    question: "Which planet comes just before Earth?",
    stage: "recognise",
    options: [
        "Venus",
        "Mars",
        "Mercury",
        "Jupiter"
    ],

    hint:
        "Earth is the third planet. Which one is second?",

    explanation:
        "Venus is the second planet and Earth is the third.",

    difficulty: 2,
    correctAnswer: "Venus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order",
        "venus"
    ]
},

{
    id: "sci-planets-names-025",
    skillId: "planet-names",
    question: "Which answer is the name of a planet?",
    stage: "recognise",
    options: [
        "Neptune",
        "Galaxy",
        "Comet",
        "Asteroid"
    ],

    hint:
        "Only one option is one of the eight planets.",

    explanation:
        "Neptune is the eighth planet in our Solar System.",

    difficulty: 2,
    correctAnswer: "Neptune",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "neptune"
    ]
},

{
    id: "sci-planets-names-026",
    skillId: "planet-names",
    question: "Which answer is NOT the name of a planet?",
    stage: "recognise",
    options: [
        "Comet",
        "Mercury",
        "Venus",
        "Saturn"
    ],

    hint:
        "Three choices are planets. One is a small icy object that travels around the Sun.",

    explanation:
        "A comet is a small icy object that travels around the Sun. It is not a planet.",

    difficulty: 2,
    correctAnswer: "Comet",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "comet"
    ]
},

{
    id: "sci-planets-names-027",
    skillId: "planet-names",
    question: "Which planet is bigger than all the others?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Earth",
        "Mars",
        "Mercury"
    ],

    hint:
        "Think of the giant planet with the Great Red Spot.",

    explanation:
        "Jupiter is the biggest planet in our Solar System.",

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
    id: "sci-planets-names-028",
    skillId: "planet-names",
    question: "Which planet is the smallest?",
    stage: "recognise",
    options: [
        "Mercury",
        "Mars",
        "Earth",
        "Neptune"
    ],

    hint:
        "Choose the tiny rocky planet closest to the Sun.",

    explanation:
        "Mercury is the smallest of the eight planets.",

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
    id: "sci-planets-names-029",
    skillId: "planet-names",
    question: "Which planet is known for its beautiful rings?",
    stage: "recognise",
    options: [
        "Saturn",
        "Earth",
        "Mercury",
        "Venus"
    ],

    hint:
        "Think of the planet that is easiest to recognise because of the bright rings around it.",

    explanation:
        "Saturn has rings made mostly of ice with some rock and dust.",

    difficulty: 2,
    correctAnswer: "Saturn",
    estimatedSeconds: 15,

    tags: [
        "science",
        "space",
        "saturn"
    ]
},

{
    id: "sci-planets-names-030",
    skillId: "planet-names",
    question: "Which planet is blue and the farthest from the Sun?",
    stage: "recognise",
    options: [
        "Neptune",
        "Earth",
        "Uranus",
        "Jupiter"
    ],

    hint:
        "Choose the planet that is both the eighth in order and deep blue in colour.",

    explanation:
        "Neptune is a deep blue planet and is the farthest planet from the Sun.",

    difficulty: 2,
    correctAnswer: "Neptune",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "neptune"
    ]
},

{
    id: "sci-planets-names-031",
    skillId: "planet-names",
    question: "Which answer contains only planets?",
    stage: "recognise",
    options: [
        "Mercury, Venus, Earth, Mars",
        "Mercury, Moon, Earth, Mars",
        "Sun, Venus, Earth, Mars",
        "Mercury, Venus, Comet, Mars"
    ],

    hint:
        "Check each list carefully. A moon, the Sun or a comet means the answer cannot be correct.",

    explanation:
        "Mercury, Venus, Earth and Mars are all planets.",

    difficulty: 3,
    correctAnswer: "Mercury, Venus, Earth, Mars",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planets"
    ]
},

{
    id: "sci-planets-names-032",
    skillId: "planet-names",
    question: "Which answer contains NO planets?",
    stage: "recognise",
    options: [
        "Moon, Sun, Comet",
        "Earth, Moon, Sun",
        "Mars, Comet, Moon",
        "Jupiter, Saturn, Sun"
    ],

    hint:
        "Pick the list where every object is something other than a planet.",

    explanation:
        "The Moon, Sun and comets are all space objects, but none of them are planets.",

    difficulty: 3,
    correctAnswer: "Moon, Sun, Comet",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space"
    ]
},

{
    id: "sci-planets-names-033",
    skillId: "planet-names",
    question: "Which of these comes first in the Solar System?",
    stage: "recognise",
    options: [
        "Mercury",
        "Venus",
        "Earth",
        "Mars"
    ],

    hint:
        "Think about the planet closest to the Sun.",

    explanation:
        "Mercury is the first planet from the Sun.",

    difficulty: 3,
    correctAnswer: "Mercury",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-names-034",
    skillId: "planet-names",
    question: "Which planet comes immediately before Neptune?",
    stage: "recognise",
    options: [
        "Uranus",
        "Saturn",
        "Jupiter",
        "Mars"
    ],

    hint:
        "Neptune is eighth. Which planet is seventh?",

    explanation:
        "Uranus is the seventh planet and Neptune is the eighth.",

    difficulty: 3,
    correctAnswer: "Uranus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-names-035",
    skillId: "planet-names",
    question: "Which of these is an icy giant planet?",
    stage: "recognise",
    options: [
        "Uranus",
        "Mercury",
        "Venus",
        "Mars"
    ],

    hint:
        "Only one option is one of the two ice giants in our Solar System.",

    explanation:
        "Uranus is an ice giant. Neptune is the other ice giant in our Solar System.",

    difficulty: 3,
    correctAnswer: "Uranus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "uranus"
    ]
},

{
    id: "sci-planets-names-036",
    skillId: "planet-names",
    question: "Which of these is an ice giant planet?",
    stage: "recognise",
    options: [
        "Neptune",
        "Mercury",
        "Venus",
        "Earth"
    ],

    hint:
        "The other ice giant is Uranus. Choose its partner.",

    explanation:
        "Neptune is an ice giant. Uranus is the other ice giant.",

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
    id: "sci-planets-names-037",
    skillId: "planet-names",
    question: "Which planet is second from the Sun?",
    stage: "recognise",
    options: [
        "Venus",
        "Mercury",
        "Earth",
        "Mars"
    ],

    hint:
        "Mercury is first. Which planet comes next?",

    explanation:
        "Venus is the second planet from the Sun, between Mercury and Earth.",

    difficulty: 3,
    correctAnswer: "Venus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order",
        "venus"
    ]
},

{
    id: "sci-planets-names-038",
    skillId: "planet-names",
    question: "Which planet is third from the Sun?",
    stage: "recognise",
    options: [
        "Earth",
        "Venus",
        "Mars",
        "Jupiter"
    ],

    hint:
        "Count: Mercury, Venus, then the correct answer.",

    explanation:
        "Earth is the third planet from the Sun.",

    difficulty: 3,
    correctAnswer: "Earth",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order",
        "earth"
    ]
},

{
    id: "sci-planets-names-039",
    skillId: "planet-names",
    question: "Which planet is fifth from the Sun?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Mars",
        "Saturn",
        "Neptune"
    ],

    hint:
        "Count the planets from the Sun until you reach number five.",

    explanation:
        "Jupiter is the fifth planet from the Sun.",

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
    id: "sci-planets-names-040",
    skillId: "planet-names",
    question: "Which planet is sixth from the Sun?",
    stage: "recognise",
    options: [
        "Saturn",
        "Jupiter",
        "Uranus",
        "Neptune"
    ],

    hint:
        "Count the planets from the Sun until you reach number six.",

    explanation:
        "Saturn is the sixth planet from the Sun.",

    difficulty: 3,
    correctAnswer: "Saturn",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order",
        "saturn"
    ]
},

{
    id: "sci-planets-names-041",
    skillId: "planet-names",
    question: "Which list shows the first four planets in the correct order?",
    stage: "recognise",
    options: [
        "Mercury, Venus, Earth, Mars",
        "Mercury, Earth, Venus, Mars",
        "Venus, Mercury, Earth, Mars",
        "Earth, Venus, Mercury, Mars"
    ],

    hint:
        "Start with the planet closest to the Sun and check that each planet follows in the correct sequence.",

    explanation:
        "The first four planets are Mercury, Venus, Earth and Mars.",

    difficulty: 4,
    correctAnswer: "Mercury, Venus, Earth, Mars",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-names-042",
    skillId: "planet-names",
    question: "Which list shows the last four planets in the correct order?",
    stage: "recognise",
    options: [
        "Jupiter, Saturn, Uranus, Neptune",
        "Saturn, Jupiter, Uranus, Neptune",
        "Jupiter, Uranus, Saturn, Neptune",
        "Jupiter, Saturn, Neptune, Uranus"
    ],

    hint:
        "After Mars comes the four giant planets. Make sure they stay in the right order.",

    explanation:
        "The last four planets are Jupiter, Saturn, Uranus and Neptune.",

    difficulty: 4,
    correctAnswer: "Jupiter, Saturn, Uranus, Neptune",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "planet-order"
    ]
},

{
    id: "sci-planets-names-043",
    skillId: "planet-names",
    question: "Which planet comes between Venus and Mars?",
    stage: "recognise",
    options: [
        "Earth",
        "Mercury",
        "Jupiter",
        "Saturn"
    ],

    hint:
        "Think of the first four planets: Mercury, Venus, Earth, Mars.",

    explanation:
        "Earth is between Venus and Mars in the Solar System.",

    difficulty: 4,
    correctAnswer: "Earth",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planet-order",
        "earth"
    ]
},

{
    id: "sci-planets-names-044",
    skillId: "planet-names",
    question: "Which planet comes between Saturn and Neptune?",
    stage: "recognise",
    options: [
        "Uranus",
        "Jupiter",
        "Mars",
        "Earth"
    ],

    hint:
        "The final three planets are Saturn, then one more, then Neptune.",

    explanation:
        "Uranus is the seventh planet and lies between Saturn and Neptune.",

    difficulty: 4,
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
    id: "sci-planets-names-045",
    skillId: "planet-names",
    question: "Which planet is both the largest planet and a gas giant?",
    stage: "recognise",
    options: [
        "Jupiter",
        "Saturn",
        "Earth",
        "Mars"
    ],

    hint:
        "Choose the biggest planet in the Solar System, famous for the Great Red Spot.",

    explanation:
        "Jupiter is the largest planet and is one of the four giant planets.",

    difficulty: 4,
    correctAnswer: "Jupiter",
    estimatedSeconds: 25,

    tags: [
        "science",
        "space",
        "jupiter"
    ]
},

{
    id: "sci-planets-names-046",
    skillId: "planet-names",
    question: "Which pair contains two planets?",
    stage: "recognise",
    options: [
        "Mercury and Venus",
        "Sun and Earth",
        "Moon and Mars",
        "Comet and Jupiter"
    ],

    hint:
        "Remove any pair that includes a star, moon or comet.",

    explanation:
        "Mercury and Venus are both planets. The other pairs include objects that are not planets.",

    difficulty: 4,
    correctAnswer: "Mercury and Venus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "planets"
    ]
},

{
    id: "sci-planets-names-047",
    skillId: "planet-names",
    question: "Which answer contains one planet and one star?",
    stage: "recognise",
    options: [
        "Earth and the Sun",
        "Earth and Mars",
        "Moon and Mars",
        "Comet and Venus"
    ],

    hint:
        "The Sun is the only star in these options.",

    explanation:
        "Earth is a planet and the Sun is a star.",

    difficulty: 4,
    correctAnswer: "Earth and the Sun",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "sun",
        "earth"
    ]
},

{
    id: "sci-planets-names-048",
    skillId: "planet-names",
    question: "Which planet's name comes last in the alphabet?",
    stage: "recognise",
    options: [
        "Venus",
        "Uranus",
        "Saturn",
        "Neptune"
    ],

    hint:
        "Compare the first letters of each planet name alphabetically.",

    explanation:
        "Venus comes after all the other planet names alphabetically.",

    difficulty: 4,
    correctAnswer: "Venus",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "venus"
    ]
},

{
    id: "sci-planets-names-049",
    skillId: "planet-names",
    question: "Which planet's name comes first in the alphabet?",
    stage: "recognise",
    options: [
        "Earth",
        "Jupiter",
        "Mars",
        "Mercury"
    ],

    hint:
        "Alphabetical order starts with A, then B, C and D before E.",

    explanation:
        "Earth is the first planet alphabetically.",

    difficulty: 4,
    correctAnswer: "Earth",
    estimatedSeconds: 20,

    tags: [
        "science",
        "space",
        "earth"
    ]
},

{
    id: "sci-planets-names-050",
    skillId: "planet-names",
    question: "Which answer contains all eight planets?",
    stage: "recognise",
    options: [
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Pluto, Neptune",
        "Mercury, Venus, Earth, Moon, Jupiter, Saturn, Uranus, Neptune",
        "Mercury, Venus, Earth, Mars, Saturn, Uranus, Neptune"
    ],

    hint:
        "Check for every one of the eight planets. Watch out for a missing planet or an extra object that isn't a planet.",

    explanation:
        "The eight planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune.",

    difficulty: 5,
    correctAnswer: "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
    estimatedSeconds: 30,

    tags: [
        "science",
        "space",
        "planets",
        "planet-order",
        "mastery"
    ]
}

]
};

export default planetNames;

export {
    planetNames
};