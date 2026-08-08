import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const sunSafety: SkillContent = {

    skillId: "sunSafety",

    title: "Sun Safety",

    description:
        "Learn why the Sun can be dangerous and how to protect your eyes and skin when spending time outdoors.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "sci-sunsafety-001",
        skillId: "sunSafety",
        question: "Why should you never look directly at the Sun?",
        stage: "recognise",
        options: [
            "It can damage your eyes",
            "It makes your hair wet",
            "It changes your eye colour",
            "It makes you taller"
        ],

        hint: "Think about which part of your body bright sunlight can permanently harm.",

        explanation:
            "Looking directly at the Sun can seriously damage your eyes.",

        difficulty: 1,
        correctAnswer: "It can damage your eyes",
        estimatedSeconds: 15,

        tags: ["science", "light", "sun", "safety"]
    },

    {
        id: "sci-sunsafety-002",
        skillId: "sunSafety",
        question: "What should you wear to help protect your eyes on a sunny day?",
        stage: "recognise",
        options: [
            "Sunglasses",
            "Slippers",
            "Gloves",
            "Scarf"
        ],

        hint: "Choose the item that covers your eyes, not your hands or feet.",

        explanation:
            "Sunglasses help protect your eyes from bright sunlight.",

        difficulty: 1,
        correctAnswer: "Sunglasses",
        estimatedSeconds: 15,

        tags: ["science", "sun", "safety"]
    },

    {
        id: "sci-sunsafety-003",
        skillId: "sunSafety",
        question: "Which item helps protect your face from the Sun?",
        stage: "recognise",
        options: [
            "A wide-brimmed hat",
            "A ruler",
            "A pencil",
            "A backpack"
        ],

        hint: "Look for something you can wear that creates shade over your face.",

        explanation:
            "A wide-brimmed hat helps shade your face and eyes.",

        difficulty: 1,
        correctAnswer: "A wide-brimmed hat",
        estimatedSeconds: 15,

        tags: ["science", "sun", "safety"]
    },

    {
        id: "sci-sunsafety-004",
        skillId: "sunSafety",
        question: "What should you put on your skin before spending time in strong sunshine?",
        stage: "recognise",
        options: [
            "Sunscreen",
            "Soap",
            "Paint",
            "Glue"
        ],

        hint: "Choose the product made to protect skin from the Sun's rays.",

        explanation:
            "Sunscreen helps protect your skin from the Sun's harmful rays.",

        difficulty: 1,
        correctAnswer: "Sunscreen",
        estimatedSeconds: 15,

        tags: ["science", "sun", "safety"]
    },

    {
        id: "sci-sunsafety-005",
        skillId: "sunSafety",
        question: "Where is a good place to stay on a very sunny day?",
        stage: "recognise",
        options: [
            "In the shade",
            "On a hot roof",
            "In the middle of a road",
            "Next to a bonfire"
        ],

        hint: "Pick the place where less direct sunlight reaches you.",

        explanation:
            "Staying in the shade helps reduce your exposure to strong sunlight.",

        difficulty: 1,
        correctAnswer: "In the shade",
        estimatedSeconds: 15,

        tags: ["science", "sun", "shade"]
    },

    {
        id: "sci-sunsafety-006",
        skillId: "sunSafety",
        question: "Which of these is safe to do?",
        stage: "recognise",
        options: [
            "Wear a hat in bright sunshine",
            "Stare at the Sun",
            "Look at the Sun through binoculars",
            "Look at the Sun through a telescope"
        ],

        hint: "Three options involve looking directly at the Sun in some way.",

        explanation:
            "A hat helps protect your face and eyes from bright sunlight.",

        difficulty: 1,
        correctAnswer: "Wear a hat in bright sunshine",
        estimatedSeconds: 15,

        tags: ["science", "sun", "safety"]
    },

    {
        id: "sci-sunsafety-007",
        skillId: "sunSafety",
        question: "Why do people wear sunglasses on sunny days?",
        stage: "recognise",
        options: [
            "To help protect their eyes",
            "To keep their ears warm",
            "To make it rain",
            "To help them hear better"
        ],

        hint: "Think about which body part sunglasses cover.",

        explanation:
            "Sunglasses reduce the amount of bright sunlight reaching your eyes.",

        difficulty: 1,
        correctAnswer: "To help protect their eyes",
        estimatedSeconds: 15,

        tags: ["science", "sun", "eyes"]
    },

    {
        id: "sci-sunsafety-008",
        skillId: "sunSafety",
        question: "What can happen if your skin gets too much Sun?",
        stage: "recognise",
        options: [
            "It can become sunburnt",
            "It turns into stone",
            "It becomes waterproof",
            "It changes colour forever"
        ],

        hint: "Think about the painful red skin people can get after too much sunshine.",

        explanation:
            "Too much sunlight can cause painful sunburn.",

        difficulty: 1,
        correctAnswer: "It can become sunburnt",
        estimatedSeconds: 20,

        tags: ["science", "sun", "skin"]
    },

    {
        id: "sci-sunsafety-009",
        skillId: "sunSafety",
        question: "Which activity is safest on a very hot sunny day?",
        stage: "recognise",
        options: [
            "Playing in the shade",
            "Looking at the Sun",
            "Removing your hat",
            "Ignoring sunscreen"
        ],

        hint: "Choose the activity that reduces your time in direct sunshine.",

        explanation:
            "Playing in shaded areas reduces exposure to strong sunlight.",

        difficulty: 1,
        correctAnswer: "Playing in the shade",
        estimatedSeconds: 20,

        tags: ["science", "sun", "shade"]
    },

    {
        id: "sci-sunsafety-010",
        skillId: "sunSafety",
        question: "Which statement is true?",
        stage: "recognise",
        options: [
            "The Sun can damage your eyes if you look at it directly.",
            "It is safe to stare at the Sun.",
            "The Sun cannot harm your skin.",
            "You only need sun protection in winter."
        ],

        hint: "Look for the statement that matches good sun safety advice.",

        explanation:
            "Looking directly at the Sun can seriously damage your eyesight.",

        difficulty: 1,
        correctAnswer: "The Sun can damage your eyes if you look at it directly.",
        estimatedSeconds: 20,

        tags: ["science", "sun", "safety"]
    },
{
    id: "sci-sunsafety-011",
    skillId: "sunSafety",
    question: "Why is shade cooler than standing in direct sunlight?",
    stage: "recognise",
    options: [
        "Less sunlight reaches you",
        "There is no air",
        "The Sun disappears",
        "The ground becomes colder"
    ],

    hint: "Think about what a tree or umbrella blocks before it reaches you.",

    explanation:
        "Shade blocks direct sunlight, helping you stay cooler.",

    difficulty: 2,
    correctAnswer: "Less sunlight reaches you",
    estimatedSeconds: 20,

    tags: ["science", "sun", "shade"]
},

{
    id: "sci-sunsafety-012",
    skillId: "sunSafety",
    question: "Which combination gives the best protection on a sunny day?",
    stage: "recognise",
    options: [
        "Hat, sunglasses and sunscreen",
        "Hat only",
        "Sunglasses only",
        "Shoes only"
    ],

    hint: "The best answer protects both your skin and your eyes.",

    explanation:
        "Using several types of protection helps keep both your skin and eyes safer.",

    difficulty: 2,
    correctAnswer: "Hat, sunglasses and sunscreen",
    estimatedSeconds: 20,

    tags: ["science", "sun", "safety"]
},

{
    id: "sci-sunsafety-013",
    skillId: "sunSafety",
    question: "Why should children follow sun safety advice?",
    stage: "recognise",
    options: [
        "To protect their eyes and skin",
        "To make the Sun brighter",
        "To stop shadows forming",
        "To make plants grow"
    ],

    hint: "Sun safety is about preventing harm to your body, not changing the Sun.",

    explanation:
        "Sun safety helps prevent damage caused by strong sunlight.",

    difficulty: 2,
    correctAnswer: "To protect their eyes and skin",
    estimatedSeconds: 20,

    tags: ["science", "sun", "safety"]
},

{
    id: "sci-sunsafety-014",
    skillId: "sunSafety",
    question: "Which action is NOT safe?",
    stage: "recognise",
    options: [
        "Looking directly at the Sun",
        "Wearing sunscreen",
        "Staying in the shade",
        "Wearing sunglasses"
    ],

    hint: "Three choices help protect you from the Sun. One does the opposite.",

    explanation:
        "You should never look directly at the Sun.",

    difficulty: 2,
    correctAnswer: "Looking directly at the Sun",
    estimatedSeconds: 20,

    tags: ["science", "sun", "eyes"]
},

{
    id: "sci-sunsafety-015",
    skillId: "sunSafety",
    question: "A child is going to the beach on a sunny day. What should they take?",
    stage: "recognise",
    options: [
        "A hat and sunscreen",
        "A torch",
        "An umbrella for rain only",
        "A blanket to cover their eyes"
    ],

    hint: "Choose the items designed to protect someone from strong sunshine.",

    explanation:
        "A hat and sunscreen help protect against strong sunlight.",

    difficulty: 2,
    correctAnswer: "A hat and sunscreen",
    estimatedSeconds: 20,

    tags: ["science", "sun", "safety"]
},

{
    id: "sci-sunsafety-016",
    skillId: "sunSafety",
    question: "Why shouldn't you look at the Sun through binoculars or a telescope?",
    stage: "recognise",
    options: [
        "It can cause even more damage to your eyes",
        "The Sun becomes smaller",
        "The binoculars melt",
        "The Sun disappears"
    ],

    hint: "These tools make distant objects look bigger by focusing the light entering your eyes.",

    explanation:
        "Binoculars and telescopes concentrate sunlight, making it even more dangerous for your eyes.",

    difficulty: 2,
    correctAnswer: "It can cause even more damage to your eyes",
    estimatedSeconds: 20,

    tags: ["science", "sun", "eyes", "safety"]
},

{
    id: "sci-sunsafety-017",
    skillId: "sunSafety",
    question: "What is the safest choice during very strong sunshine?",
    stage: "recognise",
    options: [
        "Play in a shaded area",
        "Look towards the Sun",
        "Remove your hat",
        "Stay outside all day without protection"
    ],

    hint: "Choose the option that reduces the amount of direct sunlight reaching you.",

    explanation:
        "Shaded areas help reduce exposure to the Sun.",

    difficulty: 2,
    correctAnswer: "Play in a shaded area",
    estimatedSeconds: 20,

    tags: ["science", "sun", "shade"]
},

{
    id: "sci-sunsafety-018",
    skillId: "sunSafety",
    question: "Why do teachers remind children to wear hats outside in summer?",
    stage: "recognise",
    options: [
        "To help protect them from the Sun",
        "To make them taller",
        "To keep their shoes clean",
        "To help them run faster"
    ],

    hint: "Think about what a hat shades when you're outside.",

    explanation:
        "Hats help protect children's faces and heads from strong sunlight.",

    difficulty: 2,
    correctAnswer: "To help protect them from the Sun",
    estimatedSeconds: 20,

    tags: ["science", "sun", "school", "safety"]
},

{
    id: "sci-sunsafety-019",
    skillId: "sunSafety",
    question: "Which statement about the Sun is correct?",
    stage: "recognise",
    options: [
        "It is our main natural source of light, but it can also damage our eyes.",
        "It is safe to stare at whenever you want.",
        "It gives no light.",
        "It only shines in summer."
    ],

    hint: "Look for the answer that includes both a useful fact and an important safety warning.",

    explanation:
        "The Sun provides light but can damage our eyes if we look at it directly.",

    difficulty: 2,
    correctAnswer: "It is our main natural source of light, but it can also damage our eyes.",
    estimatedSeconds: 20,

    tags: ["science", "sun", "light", "safety"]
},

{
    id: "sci-sunsafety-020",
    skillId: "sunSafety",
    question: "Which sentence best explains good sun safety?",
    stage: "recognise",
    options: [
        "Protect your eyes and skin by wearing sunscreen, a hat, sunglasses and staying in the shade.",
        "Look at the Sun for a few seconds each day.",
        "Only protect yourself on cold days.",
        "Sun safety is only important for adults."
    ],

    hint: "The best answer includes several ways to protect yourself, not just one.",

    explanation:
        "Good sun safety means protecting both your skin and your eyes whenever the sunlight is strong.",

    difficulty: 2,
    correctAnswer: "Protect your eyes and skin by wearing sunscreen, a hat, sunglasses and staying in the shade.",
    estimatedSeconds: 20,

    tags: ["science", "sun", "safety", "light"]
}

]
};

export default sunSafety;

export {
    sunSafety
};