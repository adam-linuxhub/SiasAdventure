import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const usingContext: SkillContent = {

    skillId: "usingContext",

    title: "Using Context Clues",

    description:
        "Learn how to use the words around an unfamiliar word to work out its meaning.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-context-001",

        question: "Tom wrapped a scarf around his neck because it was freezing. What does 'freezing' most likely mean?",

        options: [
            "Very cold",
            "Very hot",
            "Very noisy",
            "Very dark"
        ],

        answer: 0,

        explanation:
            "The clue 'wrapped a scarf around his neck' tells us it must be very cold.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-002",

        question: "Ella whispered so quietly that nobody else could hear her. What does 'whispered' mean?",

        options: [
            "Spoke very softly",
            "Shouted loudly",
            "Sang happily",
            "Laughed loudly"
        ],

        answer: 0,

        explanation:
            "The clue 'nobody else could hear her' tells us she spoke very softly.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-003",

        question: "The puppy was exhausted after running all afternoon. What does 'exhausted' most likely mean?",

        options: [
            "Very tired",
            "Very excited",
            "Very hungry",
            "Very playful"
        ],

        answer: 0,

        explanation:
            "Running all afternoon is a clue that the puppy was very tired.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-004",

        question: "The glass slipped from Ben's hands and shattered into tiny pieces. What does 'shattered' mean?",

        options: [
            "Broke into many pieces",
            "Became cleaner",
            "Turned blue",
            "Fell asleep"
        ],

        answer: 0,

        explanation:
            "The clue 'into tiny pieces' tells us the glass broke apart.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-005",

        question: "Mia smiled because her teacher praised her work. What does 'praised' mean?",

        options: [
            "Said something nice",
            "Gave homework",
            "Asked a question",
            "Closed a book"
        ],

        answer: 0,

        explanation:
            "Smiling is the clue that the teacher said something positive.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-006",

        question: "The muddy boots left dirty marks across the clean floor. What does 'muddy' mean?",

        options: [
            "Covered in mud",
            "Very shiny",
            "Very dry",
            "Made of wood"
        ],

        answer: 0,

        explanation:
            "The dirty marks tell us the boots were covered in mud.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-007",

        question: "The lion is fierce, so the other animals stay away. What does 'fierce' most likely mean?",

        options: [
            "Dangerous",
            "Tiny",
            "Sleepy",
            "Friendly"
        ],

        answer: 0,

        explanation:
            "The clue that other animals stay away suggests the lion is dangerous.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-008",

        question: "Sam hurried because he did not want to miss the bus. What does 'hurried' mean?",

        options: [
            "Moved quickly",
            "Sat down",
            "Fell asleep",
            "Started singing"
        ],

        answer: 0,

        explanation:
            "Wanting to catch the bus is the clue that Sam moved quickly.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-009",

        question: "The giant tree was enormous. It was taller than every other tree in the park. What does 'enormous' mean?",

        options: [
            "Very large",
            "Very small",
            "Very old",
            "Very thin"
        ],

        answer: 0,

        explanation:
            "Being taller than every other tree tells us it is very large.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-010",

        question: "What are context clues?",

        options: [
            "Words around an unfamiliar word that help explain its meaning",
            "Letters at the end of a word",
            "Words that rhyme",
            "Capital letters"
        ],

        answer: 0,

        explanation:
            "Context clues are the surrounding words and sentences that help us understand new vocabulary.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-011",

        question: "The path was narrow, so only one person could walk along it at a time. What does 'narrow' mean?",

        options: [
            "Not very wide",
            "Very long",
            "Very steep",
            "Very rough"
        ],

        answer: 0,

        explanation:
            "Only one person fitting is the clue that the path is not very wide.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-012",

        question: "The baby was delighted when she opened her birthday present. What does 'delighted' mean?",

        options: [
            "Very pleased",
            "Very sleepy",
            "Very cross",
            "Very worried"
        ],

        answer: 0,

        explanation:
            "Opening a birthday present happily is the clue that she was very pleased.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-013",

        question: "The cave was gloomy because hardly any sunlight reached inside. What does 'gloomy' most likely mean?",

        options: [
            "Dark",
            "Warm",
            "Colourful",
            "Busy"
        ],

        answer: 0,

        explanation:
            "Hardly any sunlight is the clue that the cave is dark.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-014",

        question: "The soup was steaming, so Lily waited before taking a sip. What does 'steaming' mean?",

        options: [
            "Very hot",
            "Very cold",
            "Very sweet",
            "Very thick"
        ],

        answer: 0,

        explanation:
            "Waiting before drinking is the clue that the soup is very hot.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-015",

        question: "Jack was nervous before the school play because lots of people were watching. What does 'nervous' mean?",

        options: [
            "Worried",
            "Hungry",
            "Proud",
            "Calm"
        ],

        answer: 0,

        explanation:
            "Performing in front of many people is a clue that Jack felt worried.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-016",

        question: "The rabbit crept quietly through the long grass so the fox would not see it. What does 'crept' mean?",

        options: [
            "Moved slowly and quietly",
            "Jumped high",
            "Ran very fast",
            "Fell over"
        ],

        answer: 0,

        explanation:
            "Trying not to be seen is the clue that it moved slowly and quietly.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-017",

        question: "The classroom was silent during the test. What does 'silent' mean?",

        options: [
            "Very quiet",
            "Very noisy",
            "Very bright",
            "Very busy"
        ],

        answer: 0,

        explanation:
            "During a test everyone stays quiet, which explains the word.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-018",

        question: "The thirsty hikers quickly drank all their water. What does 'thirsty' mean?",

        options: [
            "Needing a drink",
            "Feeling cold",
            "Feeling sleepy",
            "Feeling excited"
        ],

        answer: 0,

        explanation:
            "Drinking all their water tells us they needed a drink.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-019",

        question: "The football crowd cheered because their team had won. What does 'cheered' mean?",

        options: [
            "Shouted happily",
            "Cried sadly",
            "Went home",
            "Fell asleep"
        ],

        answer: 0,

        explanation:
            "Winning the match is the clue that the crowd shouted happily.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    },

    {
        id: "eng-context-020",

        question: "What is the best way to work out the meaning of an unfamiliar word while reading?",

        options: [
            "Read the words around it for clues",
            "Skip the word every time",
            "Guess without reading the sentence",
            "Only look at the first letter"
        ],

        answer: 0,

        explanation:
            "The surrounding words and sentences often provide helpful clues about a word's meaning.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "vocabulary", "context-clues"]
    }

    ]

};