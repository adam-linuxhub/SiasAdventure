import {
MultipleChoiceActivity,
SkillContent
} from "../../../types";

const whatPlantsNeed: SkillContent = {

skillId: "what-plants-need",

title: "What Plants Need",

description:
    "Learn what plants need to grow healthy and strong.",

version: 1,

activities: <MultipleChoiceActivity[]>[

{
    id: "sci-plants-need-001",
    skillId: "what-plants-need",
    question: "Which of these do plants need to grow?",
    stage: "recognise",
    options: [
        "Water",
        "Chocolate",
        "Plastic",
        "Glass"
    ],

    explanation:
        "Plants need water to stay healthy and grow.",

    hint:
        "Think about what a plant absorbs through its roots to stay alive.",

    difficulty: 1,
    correctAnswer: "Water",
    estimatedSeconds: 10,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

{
    id: "sci-plants-need-002",
    skillId: "what-plants-need",
    question: "Which of these do plants need to make food?",
    stage: "recognise",
    options: [
        "Sunlight",
        "Television",
        "Sand",
        "Paper"
    ],

    explanation:
        "Plants use sunlight to make their own food.",

    hint:
        "Plants use energy from something that comes from the Sun to make food.",

    difficulty: 1,
    correctAnswer: "Sunlight",
    estimatedSeconds: 10,

    tags: [
        "science",
        "plants",
        "sunlight"
    ]
},

{
    id: "sci-plants-need-003",
    skillId: "what-plants-need",
    question: "Where do plants usually get water from?",
    stage: "recognise",
    options: [
        "The soil",
        "The Moon",
        "The clouds only",
        "Rocks"
    ],

    explanation:
        "Roots absorb water from the soil.",

    hint:
        "Look at the part of the plant that grows underground and think about what it touches.",

    difficulty: 1,
    correctAnswer: "The soil",
    estimatedSeconds: 10,

    tags: [
        "science",
        "plants",
        "water",
        "roots"
    ]
},

{
    id: "sci-plants-need-004",
    skillId: "what-plants-need",
    question: "Which gas do plants need from the air?",
    stage: "recognise",
    options: [
        "Carbon dioxide",
        "Helium",
        "Hydrogen",
        "Nitrogen"
    ],

    explanation:
        "Plants take in carbon dioxide from the air to make food.",

    hint:
        "Think about the gas plants use during photosynthesis to help make food.",

    difficulty: 1,
    correctAnswer: "Carbon dioxide",
    estimatedSeconds: 15,

    tags: [
        "science",
        "plants",
        "air"
    ]
},

{
    id: "sci-plants-need-005",
    skillId: "what-plants-need",
    question: "Which part of the plant uses sunlight to make food?",
    stage: "recognise",
    options: [
        "Leaves",
        "Roots",
        "Flowers",
        "Seeds"
    ],

    explanation:
        "Leaves use sunlight, water and carbon dioxide to make food.",

    hint:
        "Which part of the plant is usually green and collects sunlight?",

    difficulty: 1,
    correctAnswer: "Leaves",
    estimatedSeconds: 15,

    tags: [
        "science",
        "plants",
        "leaves"
    ]
},

{
    id: "sci-plants-need-006",
    skillId: "what-plants-need",
    question: "What happens if a plant does not get enough water?",
    stage: "recognise",
    options: [
        "It may wilt and stop growing.",
        "It grows much faster.",
        "It turns into a tree.",
        "Nothing happens."
    ],

    explanation:
        "Without enough water, plants become weak and may wilt.",

    hint:
        "Imagine a plant becoming dry because it cannot get the water it needs.",

    difficulty: 1,
    correctAnswer: "It may wilt and stop growing.",
    estimatedSeconds: 15,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

{
    id: "sci-plants-need-007",
    skillId: "what-plants-need",
    question: "Why do plants need sunlight?",
    stage: "recognise",
    options: [
        "To make food",
        "To make noise",
        "To grow roots in the air",
        "To produce rocks"
    ],

    explanation:
        "Plants use sunlight to make the food they need to live.",

    hint:
        "Sunlight gives plants the energy they need for making their own food.",

    difficulty: 1,
    correctAnswer: "To make food",
    estimatedSeconds: 15,

    tags: [
        "science",
        "plants",
        "sunlight"
    ]
},

 {
    id: "sci-plants-need-015",
    skillId: "what-plants-need",
    question: "Which sentence is correct?",
    stage: "recognise",
    options: [
        "Plants need water, sunlight, air and nutrients to grow.",
        "Plants only need water.",
        "Plants only need sunlight.",
        "Plants do not need air."
    ],

    explanation:
        "Healthy plants need several things to survive and grow well.",

    hint:
        "Think about the different resources a plant needs, not just one thing.",

    difficulty: 2,
    correctAnswer: "Plants need water, sunlight, air and nutrients to grow.",
    estimatedSeconds: 20,

    tags: [
        "science",
        "plants"
    ]
},

{
    id: "sci-plants-need-016",
    skillId: "what-plants-need",
    question: "Which gas do plants take in from the air to help make food?",
    stage: "recognise",
    options: [
        "Carbon dioxide",
        "Oxygen",
        "Helium",
        "Hydrogen"
    ],

    explanation:
        "Plants use carbon dioxide from the air, together with water and sunlight, to make food.",

    hint:
        "Plants use a gas from the air during photosynthesis to help create food.",

    difficulty: 2,
    correctAnswer: "Carbon dioxide",
    estimatedSeconds: 20,

    tags: [
        "science",
        "plants",
        "air",
        "carbon-dioxide"
    ]
},

{
    id: "sci-plants-need-017",
    skillId: "what-plants-need",
    question: "What gives a plant the energy it needs to make food?",
    stage: "recognise",
    options: [
        "Sunlight",
        "Rain",
        "Wind",
        "Soil"
    ],

    explanation:
        "Sunlight provides the energy plants need to make their own food.",

    hint:
        "Look for the thing that comes from the Sun and provides energy.",

    difficulty: 2,
    correctAnswer: "Sunlight",
    estimatedSeconds: 20,

    tags: [
        "science",
        "plants",
        "sunlight"
    ]
},

{
    id: "sci-plants-need-018",
    skillId: "what-plants-need",
    question: "Where do plants get most of their minerals?",
    stage: "recognise",
    options: [
        "The soil",
        "The sky",
        "The Sun",
        "The Moon"
    ],

    explanation:
        "Plants absorb minerals from the soil through their roots.",

    hint:
        "Roots are underground, so think about what they are surrounded by.",

    difficulty: 2,
    correctAnswer: "The soil",
    estimatedSeconds: 20,

    tags: [
        "science",
        "plants",
        "soil",
        "minerals"
    ]
},

{
    id: "sci-plants-need-019",
    skillId: "what-plants-need",
    question: "Which part of the plant absorbs water from the soil?",
    stage: "recognise",
    options: [
        "Roots",
        "Leaves",
        "Flowers",
        "Stem"
    ],

    explanation:
        "Roots absorb water and minerals from the soil.",

    hint:
        "Think about the plant part that grows below the ground.",

    difficulty: 2,
    correctAnswer: "Roots",
    estimatedSeconds: 20,

    tags: [
        "science",
        "plants",
        "roots"
    ]
},

{
    id: "sci-plants-need-020",
    skillId: "what-plants-need",
    question: "Which part of the plant uses sunlight to make food?",
    stage: "recognise",
    options: [
        "Leaves",
        "Roots",
        "Flowers",
        "Seeds"
    ],

    explanation:
        "Leaves use sunlight, water and carbon dioxide to make food for the plant.",

    hint:
        "The part that is usually wide, flat and green collects sunlight.",

    difficulty: 2,
    correctAnswer: "Leaves",
    estimatedSeconds: 20,

    tags: [
        "science",
        "plants",
        "leaves"
    ]
},

{
    id: "sci-plants-need-021",
    skillId: "what-plants-need",
    question: "Emma waters her plant every day but keeps it in a dark cupboard. What will probably happen?",
    stage: "recognise",
    options: [
        "It will struggle to grow.",
        "It will grow perfectly.",
        "It will grow more flowers.",
        "It will become a tree."
    ],

    explanation:
        "Plants need sunlight as well as water to make food and grow.",

    hint:
        "Water alone is not enough. What does the plant need to make food?",

    difficulty: 3,
    correctAnswer: "It will struggle to grow.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "sunlight"
    ]
},

{
    id: "sci-plants-need-022",
    skillId: "what-plants-need",
    question: "Jack puts a plant in a sunny place but never waters it. What will probably happen?",
    stage: "recognise",
    options: [
        "It will wilt.",
        "It will grow faster.",
        "It will produce more seeds.",
        "Nothing will happen."
    ],

    explanation:
        "Plants need water as well as sunlight to stay healthy.",

    hint:
        "A plant in the Sun still needs water to stop it becoming dry.",

    difficulty: 3,
    correctAnswer: "It will wilt.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

{
    id: "sci-plants-need-023",
    skillId: "what-plants-need",
    question: "Which combination gives a plant the best chance of growing well?",
    stage: "recognise",
    options: [
        "Water, sunlight, air and nutrients",
        "Chocolate, water and paper",
        "Only sunlight",
        "Only water"
    ],

    explanation:
        "Plants need several things to grow well, including water, sunlight, air and nutrients.",

    hint:
        "Choose the option that includes everything a plant needs to survive and grow.",

    difficulty: 3,
    correctAnswer: "Water, sunlight, air and nutrients",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants"
    ]
},

{
    id: "sci-plants-need-024",
    skillId: "what-plants-need",
    question: "Why is air important for plants?",
    stage: "recognise",
    options: [
        "It contains carbon dioxide for making food.",
        "It keeps the leaves dry.",
        "It gives plants minerals.",
        "It turns flowers into seeds."
    ],

    explanation:
        "Plants use carbon dioxide from the air when making food.",

    hint:
        "Think about which part of the air plants use during photosynthesis.",

    difficulty: 3,
    correctAnswer: "It contains carbon dioxide for making food.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "air"
    ]
},

{
    id: "sci-plants-need-025",
    skillId: "what-plants-need",
    question: "Which statement is true?",
    stage: "recognise",
    options: [
        "Plants need water throughout their lives.",
        "Plants only need water when they are seeds.",
        "Plants never need sunlight.",
        "Plants only need air at night."
    ],

    explanation:
        "Plants continue to need water as they grow.",

    hint:
        "Plants do not stop needing water after they begin growing.",

    difficulty: 3,
    correctAnswer: "Plants need water throughout their lives.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

{
    id: "sci-plants-need-026",
    skillId: "what-plants-need",
    question: "A healthy plant needs nutrients. Where do these usually come from?",
    stage: "recognise",
    options: [
        "The soil",
        "The Moon",
        "Clouds",
        "The wind"
    ],

    explanation:
        "Nutrients are usually absorbed from the soil by the roots.",

    hint:
        "Roots collect nutrients from the place where they grow.",

    difficulty: 3,
    correctAnswer: "The soil",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "soil",
        "nutrients"
    ]
},

{
    id: "sci-plants-need-027",
    skillId: "what-plants-need",
    question: "Why do plants need water?",
    stage: "recognise",
    options: [
        "To help them make food and grow",
        "To change colour",
        "To make noise",
        "To produce light"
    ],

    explanation:
        "Water is needed for making food and for healthy growth.",

    hint:
        "Water helps plants carry out important processes needed for staying alive.",

    difficulty: 3,
    correctAnswer: "To help them make food and grow",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

 {
    id: "sci-plants-need-028",
    skillId: "what-plants-need",
    question: "Which of these would most likely stop a plant growing well?",
    stage: "recognise",
    options: [
        "No sunlight",
        "Fresh air",
        "Water",
        "Healthy soil"
    ],

    explanation:
        "Without sunlight, plants cannot make enough food to grow properly.",

    hint:
        "Think about what plants need to make their own food.",

    difficulty: 3,
    correctAnswer: "No sunlight",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "sunlight"
    ]
},

{
    id: "sci-plants-need-029",
    skillId: "what-plants-need",
    question: "Which sentence is correct?",
    stage: "recognise",
    options: [
        "Plants make their own food using sunlight.",
        "Plants eat insects to survive.",
        "Plants drink milk to grow.",
        "Plants get food from the Moon."
    ],

    explanation:
        "Plants use sunlight to make their own food.",

    hint:
        "Plants do not eat like animals. They create food using energy from the Sun.",

    difficulty: 3,
    correctAnswer: "Plants make their own food using sunlight.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "food"
    ]
},

{
    id: "sci-plants-need-030",
    skillId: "what-plants-need",
    question: "Which statement best explains why plants need roots?",
    stage: "recognise",
    options: [
        "Roots absorb water and nutrients from the soil.",
        "Roots make food using sunlight.",
        "Roots catch insects.",
        "Roots produce flowers."
    ],

    explanation:
        "Roots collect the water and nutrients that plants need to survive.",

    hint:
        "Roots are below the ground. Think about what they collect from the soil.",

    difficulty: 3,
    correctAnswer: "Roots absorb water and nutrients from the soil.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "roots",
        "nutrients"
    ]
},

{
    id: "sci-plants-need-031",
    skillId: "what-plants-need",
    question: "Which of these helps a plant make its own food?",
    stage: "recognise",
    options: [
        "Sunlight",
        "Chocolate",
        "Plastic",
        "Glass"
    ],

    explanation:
        "Plants use energy from sunlight to make their own food.",

    hint:
        "Plants need a source of energy for photosynthesis. Which option comes from nature and the sky?",

    difficulty: 3,
    correctAnswer: "Sunlight",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "sunlight"
    ]
},

{
    id: "sci-plants-need-032",
    skillId: "what-plants-need",
    question: "Which of these does a healthy plant need from the soil?",
    stage: "recognise",
    options: [
        "Water and minerals",
        "Sugar",
        "Salt",
        "Paper"
    ],

    explanation:
        "Plants absorb water and minerals from the soil through their roots.",

    hint:
        "Roots collect the useful substances plants need from where they grow.",

    difficulty: 3,
    correctAnswer: "Water and minerals",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "soil",
        "roots"
    ]
},

{
    id: "sci-plants-need-033",
    skillId: "what-plants-need",
    question: "A plant has water and air but no sunlight. What is most likely to happen?",
    stage: "recognise",
    options: [
        "It will not grow well.",
        "It will grow perfectly.",
        "It will grow much faster.",
        "It will produce lots of fruit."
    ],

    explanation:
        "Without sunlight, plants cannot make enough food to grow properly.",

    hint:
        "A plant needs more than water and air. What helps it make food?",

    difficulty: 4,
    correctAnswer: "It will not grow well.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "sunlight"
    ]
},

{
    id: "sci-plants-need-034",
    skillId: "what-plants-need",
    question: "Why do plants need minerals from the soil?",
    stage: "recognise",
    options: [
        "To help them grow healthily",
        "To change colour",
        "To make noise",
        "To produce sunshine"
    ],

    explanation:
        "Minerals help plants grow strong and healthy.",

    hint:
        "Minerals are nutrients that support the plant as it develops.",

    difficulty: 4,
    correctAnswer: "To help them grow healthily",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "minerals"
    ]
},

{
    id: "sci-plants-need-035",
    skillId: "what-plants-need",
    question: "Which plant part takes in most of the water a plant needs?",
    stage: "recognise",
    options: [
        "Roots",
        "Leaves",
        "Flowers",
        "Seeds"
    ],

    explanation:
        "Roots absorb water from the soil and send it through the plant.",

    hint:
        "Look for the plant part that is hidden underground and touches the soil.",

    difficulty: 4,
    correctAnswer: "Roots",
    estimatedSeconds: 20,

    tags: [
        "science",
        "plants",
        "roots"
    ]
},

{
    id: "sci-plants-need-036",
    skillId: "what-plants-need",
    question: "Which statement is true?",
    stage: "recognise",
    options: [
        "Plants need air as well as water and sunlight.",
        "Plants only need sunlight.",
        "Plants only need water.",
        "Plants do not need air."
    ],

    explanation:
        "Plants need air because they use carbon dioxide to make food.",

    hint:
        "Plants use a gas from the air when making food, so air is important too.",

    difficulty: 4,
    correctAnswer: "Plants need air as well as water and sunlight.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "air"
    ]
},

{
    id: "sci-plants-need-037",
    skillId: "what-plants-need",
    question: "What happens inside the leaves when a plant has sunlight, water and carbon dioxide?",
    stage: "recognise",
    options: [
        "The plant makes food.",
        "The plant makes rocks.",
        "The plant makes plastic.",
        "The plant stops growing."
    ],

    explanation:
        "Leaves use sunlight, water and carbon dioxide to make food for the plant.",

    hint:
        "Leaves are the plant's food-making area. What do they create using these ingredients?",

    difficulty: 4,
    correctAnswer: "The plant makes food.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "leaves",
        "food"
    ]
},

{
    id: "sci-plants-need-038",
    skillId: "what-plants-need",
    question: "Which plant would probably grow the healthiest?",
    stage: "recognise",
    options: [
        "A plant with water, sunlight, air and healthy soil",
        "A plant with only sunlight",
        "A plant with only water",
        "A plant kept in a dark cupboard"
    ],

    explanation:
        "Plants grow best when they have all the things they need.",

    hint:
        "Choose the plant that has a complete set of resources for growth.",

    difficulty: 4,
    correctAnswer: "A plant with water, sunlight, air and healthy soil",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants"
    ]
},

{
    id: "sci-plants-need-039",
    skillId: "what-plants-need",
    question: "Which sentence best explains why sunlight is important?",
    stage: "recognise",
    options: [
        "It provides the energy plants need to make food.",
        "It gives plants water.",
        "It helps roots absorb soil.",
        "It makes flowers colourful."
    ],

    explanation:
        "Sunlight provides the energy needed for photosynthesis.",

    hint:
        "Sunlight does not feed plants directly. It gives them energy to create their own food.",

    difficulty: 4,
    correctAnswer: "It provides the energy plants need to make food.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "sunlight",
        "photosynthesis"
    ]
},

 {
    id: "sci-plants-need-040",
    skillId: "what-plants-need",
    question: "Which statement is correct?",
    stage: "recognise",
    options: [
        "Plants cannot survive without water.",
        "Plants can survive without water forever.",
        "Plants only need water once.",
        "Plants do not use water."
    ],

    explanation:
        "All plants need water throughout their lives.",

    hint:
        "Think about what happens when a living thing does not get the water it needs.",

    difficulty: 4,
    correctAnswer: "Plants cannot survive without water.",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

{
    id: "sci-plants-need-041",
    skillId: "what-plants-need",
    question: "Which statement about healthy plants is true?",
    stage: "recognise",
    options: [
        "They need water, sunlight, air and nutrients.",
        "They only need sunlight.",
        "They only need water.",
        "They only need air."
    ],

    explanation:
        "Healthy plants need several different things to survive and grow.",

    hint:
        "A healthy plant needs a combination of resources, not just one thing.",

    difficulty: 4,
    correctAnswer: "They need water, sunlight, air and nutrients.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants"
    ]
},

{
    id: "sci-plants-need-042",
    skillId: "what-plants-need",
    question: "Lily forgets to water her sunflower for two weeks. What is the most likely result?",
    stage: "recognise",
    options: [
        "The sunflower will wilt.",
        "The sunflower will grow taller.",
        "The sunflower will grow another flower immediately.",
        "Nothing will happen."
    ],

    explanation:
        "Without enough water, plants become weak and wilt.",

    hint:
        "Without water, a plant cannot keep its cells full and supported.",

    difficulty: 5,
    correctAnswer: "The sunflower will wilt.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

{
    id: "sci-plants-need-043",
    skillId: "what-plants-need",
    question: "Which of these does NOT help a plant grow?",
    stage: "recognise",
    options: [
        "Plastic toys",
        "Sunlight",
        "Water",
        "Air"
    ],

    explanation:
        "Plants do not need toys. They need water, sunlight, air and nutrients.",

    hint:
        "Look for the object that is not a natural resource a plant could use.",

    difficulty: 5,
    correctAnswer: "Plastic toys",
    estimatedSeconds: 25,

    tags: [
        "science",
        "plants"
    ]
},

{
    id: "sci-plants-need-044",
    skillId: "what-plants-need",
    question: "A plant has water, sunlight and minerals but no air. What will happen?",
    stage: "recognise",
    options: [
        "It will not grow properly.",
        "It will grow perfectly.",
        "It will grow faster.",
        "It will become a tree."
    ],

    explanation:
        "Plants need carbon dioxide from the air to make food.",

    hint:
        "One important ingredient for making food comes from the air.",

    difficulty: 5,
    correctAnswer: "It will not grow properly.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "air"
    ]
},

{
    id: "sci-plants-need-045",
    skillId: "what-plants-need",
    question: "Which list contains everything a healthy plant needs?",
    stage: "recognise",
    options: [
        "Water, sunlight, air and nutrients",
        "Water, toys and sweets",
        "Sunlight and paper",
        "Plastic and water"
    ],

    explanation:
        "Plants need water, sunlight, air and nutrients to stay healthy.",

    hint:
        "Choose the list containing only the things plants use for survival and growth.",

    difficulty: 5,
    correctAnswer: "Water, sunlight, air and nutrients",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants"
    ]
},

{
    id: "sci-plants-need-046",
    skillId: "what-plants-need",
    question: "A plant has sunlight, water and air but no nutrients in the soil. What is most likely to happen?",
    stage: "recognise",
    options: [
        "It may not grow well.",
        "It will grow perfectly.",
        "It will never need watering.",
        "It will produce fruit immediately."
    ],

    explanation:
        "Plants need nutrients from the soil as well as water, air and sunlight to grow healthily.",

    hint:
        "Plants need minerals and nutrients from the soil to build strong growth.",

    difficulty: 5,
    correctAnswer: "It may not grow well.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "nutrients",
        "soil"
    ]
},

{
    id: "sci-plants-need-047",
    skillId: "what-plants-need",
    question: "Which is the best explanation of why plants need sunlight?",
    stage: "recognise",
    options: [
        "It provides the energy needed to make food.",
        "It gives plants minerals.",
        "It replaces water.",
        "It helps roots grow flowers."
    ],

    explanation:
        "Sunlight provides the energy that plants need to make their own food.",

    hint:
        "Sunlight is not food itself; it gives plants the energy to create food.",

    difficulty: 5,
    correctAnswer: "It provides the energy needed to make food.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "sunlight",
        "food"
    ]
},

{
    id: "sci-plants-need-048",
    skillId: "what-plants-need",
    question: "What is the best reason that plants need water?",
    stage: "recognise",
    options: [
        "It helps them make food and stay healthy.",
        "It makes flowers colourful.",
        "It changes leaves into roots.",
        "It gives plants sunlight."
    ],

    explanation:
        "Plants use water when making food and need it to stay healthy and continue growing.",

    hint:
        "Water is used inside the plant for important life processes.",

    difficulty: 5,
    correctAnswer: "It helps them make food and stay healthy.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "water"
    ]
},

{
    id: "sci-plants-need-049",
    skillId: "what-plants-need",
    question: "Which statement best explains why plants need carbon dioxide?",
    stage: "recognise",
    options: [
        "Plants use it with water and sunlight to make food.",
        "Plants use it to absorb minerals.",
        "Plants use it to make roots.",
        "Plants use it to produce flowers."
    ],

    explanation:
        "Carbon dioxide is one of the ingredients plants use to make their own food.",

    hint:
        "Carbon dioxide is a gas from the air used during photosynthesis.",

    difficulty: 5,
    correctAnswer: "Plants use it with water and sunlight to make food.",
    estimatedSeconds: 30,

    tags: [
        "science",
        "plants",
        "carbon-dioxide",
        "air"
    ]
},

{
    id: "sci-plants-need-050",
    skillId: "what-plants-need",
    question: "Which summary best describes everything a healthy plant needs?",
    stage: "recognise",
    options: [
        "Plants need sunlight, water, air and nutrients from the soil to make food and grow.",
        "Plants only need water if they are outdoors.",
        "Plants only need sunlight because they make everything else themselves.",
        "Plants grow well without air as long as they have water."
    ],

    explanation:
        "Healthy plants need sunlight, water, carbon dioxide from the air and nutrients from the soil in order to grow and survive.",

    hint:
        "Choose the answer that includes all the resources needed for photosynthesis and healthy growth.",

    difficulty: 5,
    correctAnswer: "Plants need sunlight, water, air and nutrients from the soil to make food and grow.",
    estimatedSeconds: 35,

    tags: [
        "science",
        "plants",
        "sunlight",
        "water",
        "air",
        "nutrients"
    ]
}

]
};

export default whatPlantsNeed;

export {
    whatPlantsNeed
};