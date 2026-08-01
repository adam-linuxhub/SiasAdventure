import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const prediction: SkillContent = {

    skillId: "prediction",

    title: "Prediction",

    description:
        "Learn how to predict what is likely to happen next by using clues from a text and your own knowledge.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-pred-001",
        skillId: "prediction",
        question:
            "Read the passage:\n\nDark clouds covered the sky. Mia picked up her umbrella before leaving the house.\n\nWhat will probably happen next?",
        stage: "recognise",
        options: [
            "It will rain.",
            "It will snow.",
            "The sun will shine brightly.",
            "The wind will stop."
        ],

        explanation:
            "Dark clouds and an umbrella are clues that rain is likely.",

        difficulty: 1,
        correctAnswer: "It will rain.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-002",
        skillId: "prediction",
        question:
            "Read the passage:\n\nBen mixed flour, eggs and milk in a bowl.\n\nWhat will Ben probably do next?",
        stage: "recognise",
        options: [
            "Cook the mixture.",
            "Plant flowers.",
            "Ride his bike.",
            "Go to bed."
        ],

        explanation:
            "After mixing ingredients, the next step is usually to cook them.",

        difficulty: 1,
        correctAnswer: "Cook the mixture.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-003",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe school bell rang and the children packed away their books.\n\nWhat will probably happen next?",
        stage: "recognise",
        options: [
            "They will leave the classroom.",
            "They will start another lesson.",
            "They will go to sleep.",
            "They will paint pictures."
        ],

        explanation:
            "Packing away books after the bell usually means the lesson has ended.",

        difficulty: 1,
        correctAnswer: "They will leave the classroom.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-004",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe puppy ran to its bowl and wagged its tail when Sam opened a tin of dog food.\n\nWhat will probably happen next?",
        stage: "recognise",
        options: [
            "The puppy will eat.",
            "The puppy will go swimming.",
            "The puppy will climb a tree.",
            "The puppy will go to sleep."
        ],

        explanation:
            "Opening dog food is a clue that the puppy is about to eat.",

        difficulty: 1,
        correctAnswer: "The puppy will eat.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-005",
        skillId: "prediction",
        question:
            "Read the passage:\n\nLily put on her swimming costume and goggles.\n\nWhat will she probably do next?",
        stage: "recognise",
        options: [
            "Go swimming.",
            "Play football.",
            "Ride a horse.",
            "Bake a cake."
        ],

        explanation:
            "A swimming costume and goggles are clues that she is going swimming.",

        difficulty: 1,
        correctAnswer: "Go swimming.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-006",
        skillId: "prediction",
        question:
            "Read the passage:\n\nJake carefully watered the tiny plant every day.\n\nWhat will probably happen after a few weeks?",
        stage: "recognise",
        options: [
            "The plant will grow.",
            "The plant will disappear.",
            "The plant will turn into a rock.",
            "The plant will fly away."
        ],

        explanation:
            "Plants usually grow when they are watered regularly.",

        difficulty: 1,
        correctAnswer: "The plant will grow.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-007",
        skillId: "prediction",
        question:
            "Read the passage:\n\nTom forgot to charge his tablet before a long journey.\n\nWhat is likely to happen?",
        stage: "recognise",
        options: [
            "The battery may run out.",
            "The tablet will grow bigger.",
            "The tablet will become waterproof.",
            "The battery will charge itself."
        ],

        explanation:
            "If a tablet is not charged, the battery is likely to run out.",

        difficulty: 1,
        correctAnswer: "The battery may run out.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-008",
        skillId: "prediction",
        question:
            "Read the passage:\n\nEmma practised her spelling every evening before the test.\n\nWhat is likely to happen?",
        stage: "recognise",
        options: [
            "She may do well in the test.",
            "She will forget how to read.",
            "She will miss school.",
            "She will lose her pencil."
        ],

        explanation:
            "Practising regularly gives Emma a good chance of doing well.",

        difficulty: 1,
        correctAnswer: "She may do well in the test.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-009",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe football rolled towards the road.\n\nWhat will the children probably do?",
        stage: "recognise",
        options: [
            "Run to stop it safely.",
            "Start eating lunch.",
            "Go to sleep.",
            "Build a sandcastle."
        ],

        explanation:
            "People usually try to stop a ball rolling into the road safely.",

        difficulty: 1,
        correctAnswer: "Run to stop it safely.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-010",
        skillId: "prediction",
        question:
            "What is a prediction?",
        stage: "recognise",
        options: [
            "A sensible guess about what will happen next",
            "A list of difficult words",
            "An exact copy of the story",
            "A way to spell words"
        ],

        explanation:
            "Predictions use clues from the text to make a sensible guess.",

        difficulty: 1,
        correctAnswer: "A sensible guess about what will happen next",
        estimatedSeconds: 20,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-011",
        skillId: "prediction",
        question:
            "Read the passage:\n\nSophie carried wrapping paper, tape and a birthday card into her room.\n\nWhat will Sophie probably do next?",
        stage: "recognise",
        options: [
            "Wrap a present.",
            "Plant a tree.",
            "Wash the dishes.",
            "Play tennis."
        ],

        explanation:
            "Wrapping paper, tape and a card are clues that she will wrap a present.",

        difficulty: 2,
        correctAnswer: "Wrap a present.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-012",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe audience became quiet and the lights dimmed.\n\nWhat will probably happen next?",
        stage: "recognise",
        options: [
            "The show will begin.",
            "Everyone will leave.",
            "The room will be cleaned.",
            "Lunch will be served."
        ],

        explanation:
            "Shows usually begin after the audience becomes quiet and the lights dim.",

        difficulty: 2,
        correctAnswer: "The show will begin.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-013",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe baker placed the tray of biscuits into the oven.\n\nWhat will probably happen next?",
        stage: "recognise",
        options: [
            "The biscuits will bake.",
            "The biscuits will freeze.",
            "The biscuits will melt into water.",
            "The biscuits will grow leaves."
        ],

        explanation:
            "Food placed in an oven is usually baked.",

        difficulty: 2,
        correctAnswer: "The biscuits will bake.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-014",
        skillId: "prediction",
        question:
            "Read the passage:\n\nNoah zipped up his tent as the sky became darker.\n\nWhat will probably happen next?",
        stage: "recognise",
        options: [
            "He will go to sleep.",
            "He will start school.",
            "He will mow the lawn.",
            "He will visit a library."
        ],

        explanation:
            "People often zip up a tent before going to sleep at night.",

        difficulty: 2,
        correctAnswer: "He will go to sleep.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-015",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe referee blew the whistle and pointed to the centre circle.\n\nWhat probably happened?",
        stage: "recognise",
        options: [
            "A goal was scored.",
            "It started snowing.",
            "The match ended before it began.",
            "The football disappeared."
        ],

        explanation:
            "After a goal, play restarts from the centre circle.",

        difficulty: 2,
        correctAnswer: "A goal was scored.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-016",
        skillId: "prediction",
        question:
            "Read the passage:\n\nOlivia checked the recipe one more time before turning on the oven.\n\nWhat will she probably do next?",
        stage: "recognise",
        options: [
            "Start cooking.",
            "Go swimming.",
            "Read a bedtime story.",
            "Fly a kite."
        ],

        explanation:
            "Checking a recipe and turning on the oven are clues that cooking will begin.",

        difficulty: 2,
        correctAnswer: "Start cooking.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-017",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe clouds cleared and the sun came out.\n\nWhat will probably happen to the ground?",
        stage: "recognise",
        options: [
            "It will begin to dry.",
            "It will become snowier.",
            "It will freeze immediately.",
            "It will turn into sand."
        ],

        explanation:
            "Sunshine helps wet ground dry.",

        difficulty: 2,
        correctAnswer: "It will begin to dry.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-018",
        skillId: "prediction",
        question:
            "Read the passage:\n\nThe hamster scratched at the side of its empty food bowl.\n\nWhat will probably happen next?",
        stage: "recognise",
        options: [
            "Someone will feed the hamster.",
            "The hamster will start driving.",
            "The hamster will climb a mountain.",
            "The hamster will take a bath."
        ],

        explanation:
            "An empty food bowl suggests the hamster needs feeding.",

        difficulty: 2,
        correctAnswer: "Someone will feed the hamster.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-019",
        skillId: "prediction",
        question:
            "Which prediction is best supported by clues in a story?",
        stage: "recognise",
        options: [
            "A prediction that matches the evidence in the text",
            "A random guess",
            "The funniest answer",
            "The longest answer"
        ],

        explanation:
            "Good predictions are based on clues from the text, not random guesses.",

        difficulty: 2,
        correctAnswer: "A prediction that matches the evidence in the text",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    },

    {
        id: "eng-pred-020",
        skillId: "prediction",
        question:
            "When making a prediction while reading, what should you use?",
        stage: "recognise",
        options: [
            "Clues from the text and your own knowledge",
            "Only the title",
            "Only the pictures",
            "A lucky guess"
        ],

        explanation:
            "Strong predictions combine evidence from the text with what you already know.",

        difficulty: 2,
        correctAnswer: "Clues from the text and your own knowledge",
        estimatedSeconds: 25,

        tags: ["english", "reading", "prediction"]
    }

    ]

};


export default prediction;

export {

    prediction

};
