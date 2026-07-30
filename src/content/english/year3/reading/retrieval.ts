import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const retrieval: SkillContent = {

    skillId: "retrieval",

    title: "Retrieval",

    description:
        "Learn how to find information that is directly stated in a text.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-ret-001",

        question:
            "Read the passage:\n\nSam rode his blue bike to the park.\n\nWhat colour was Sam's bike?",

        options: [
            "Blue",
            "Red",
            "Green",
            "Yellow"
        ],

        answer: 0,

        explanation:
            "The passage tells us directly that Sam's bike was blue.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-002",

        question:
            "Read the passage:\n\nLucy packed an apple, a sandwich and a bottle of water.\n\nWhat fruit did Lucy pack?",

        options: [
            "An apple",
            "A banana",
            "An orange",
            "Some grapes"
        ],

        answer: 0,

        explanation:
            "The passage says Lucy packed an apple.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-003",

        question:
            "Read the passage:\n\nBen's football match started at 10 o'clock.\n\nWhat time did the match begin?",

        options: [
            "10 o'clock",
            "9 o'clock",
            "11 o'clock",
            "12 o'clock"
        ],

        answer: 0,

        explanation:
            "The answer is stated directly in the passage.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-004",

        question:
            "Read the passage:\n\nThe rabbit hid under a bush when it started to rain.\n\nWhere did the rabbit hide?",

        options: [
            "Under a bush",
            "In a tree",
            "Inside a house",
            "Behind a fence"
        ],

        answer: 0,

        explanation:
            "The passage tells us the rabbit hid under a bush.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-005",

        question:
            "Read the passage:\n\nMrs Green read a story to the class before lunch.\n\nWho read the story?",

        options: [
            "Mrs Green",
            "Sam",
            "The headteacher",
            "The children"
        ],

        answer: 0,

        explanation:
            "Mrs Green is named as the person who read the story.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-006",

        question:
            "Read the passage:\n\nElla's favourite animal is the dolphin.\n\nWhat is Ella's favourite animal?",

        options: [
            "Dolphin",
            "Whale",
            "Penguin",
            "Horse"
        ],

        answer: 0,

        explanation:
            "The passage states that Ella's favourite animal is the dolphin.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-007",

        question:
            "Read the passage:\n\nTom wore a woolly hat because it was snowing.\n\nWhat did Tom wear?",

        options: [
            "A woolly hat",
            "A helmet",
            "A cap",
            "A scarf"
        ],

        answer: 0,

        explanation:
            "The answer is directly given in the text.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-008",

        question:
            "Read the passage:\n\nThe class visited the museum on Tuesday.\n\nWhen did the class visit the museum?",

        options: [
            "Tuesday",
            "Monday",
            "Wednesday",
            "Friday"
        ],

        answer: 0,

        explanation:
            "The passage clearly says Tuesday.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-009",

        question:
            "Read the passage:\n\nThe cake had chocolate icing.\n\nWhat flavour was the icing?",

        options: [
            "Chocolate",
            "Vanilla",
            "Strawberry",
            "Lemon"
        ],

        answer: 0,

        explanation:
            "The passage tells us the icing was chocolate.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-010",

        question:
            "What does retrieval mean when reading?",

        options: [
            "Finding information that is written in the text",
            "Making up your own ending",
            "Guessing what might happen",
            "Learning how to spell words"
        ],

        answer: 0,

        explanation:
            "Retrieval means finding information that is directly stated.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-011",

        question:
            "Read the passage:\n\nAva planted sunflower seeds in April. By July, the flowers were taller than she was.\n\nWhat did Ava plant?",

        options: [
            "Sunflower seeds",
            "Beans",
            "Potatoes",
            "Tulips"
        ],

        answer: 0,

        explanation:
            "The first sentence tells us exactly what Ava planted.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-012",

        question:
            "Read the passage:\n\nThe library opens at 9 o'clock every weekday and closes at 5 o'clock.\n\nWhat time does the library close?",

        options: [
            "5 o'clock",
            "4 o'clock",
            "6 o'clock",
            "9 o'clock"
        ],

        answer: 0,

        explanation:
            "The closing time is given directly.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-013",

        question:
            "Read the passage:\n\nOscar found a shiny shell while walking along the beach with his grandparents.\n\nWhat did Oscar find?",

        options: [
            "A shiny shell",
            "A crab",
            "A feather",
            "A pebble"
        ],

        answer: 0,

        explanation:
            "The passage states that Oscar found a shiny shell.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-014",

        question:
            "Read the passage:\n\nThe baby panda drank milk before falling asleep.\n\nWhat did the panda drink?",

        options: [
            "Milk",
            "Water",
            "Juice",
            "Soup"
        ],

        answer: 0,

        explanation:
            "The answer can be found directly in the passage.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-015",

        question:
            "Read the passage:\n\nNoah finished his homework before playing football with his friends.\n\nWhat did Noah do after finishing his homework?",

        options: [
            "Played football",
            "Went to bed",
            "Read a book",
            "Ate dinner"
        ],

        answer: 0,

        explanation:
            "The second part of the sentence tells us exactly what Noah did next.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-016",

        question:
            "Read the passage:\n\nThe train to York leaves from Platform 3.\n\nWhich platform does the train leave from?",

        options: [
            "Platform 3",
            "Platform 1",
            "Platform 2",
            "Platform 4"
        ],

        answer: 0,

        explanation:
            "The platform number is stated directly.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-017",

        question:
            "Read the passage:\n\nEmily borrowed three books about dinosaurs from the library.\n\nHow many books did Emily borrow?",

        options: [
            "Three",
            "Two",
            "Four",
            "Five"
        ],

        answer: 0,

        explanation:
            "The passage says Emily borrowed three books.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-018",

        question:
            "Read the passage:\n\nThe red kite flew high above the trees on a windy afternoon.\n\nWhat colour was the kite?",

        options: [
            "Red",
            "Blue",
            "Green",
            "Yellow"
        ],

        answer: 0,

        explanation:
            "The colour is directly stated.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-019",

        question:
            "Read the passage:\n\nAfter brushing his teeth, Leo packed his school bag.\n\nWhat did Leo do first?",

        options: [
            "Brushed his teeth",
            "Packed his school bag",
            "Had lunch",
            "Walked to school"
        ],

        answer: 0,

        explanation:
            "The order of events is clearly written in the passage.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-020",

        question:
            "What should you do first when answering a retrieval question?",

        options: [
            "Look back at the text to find the answer",
            "Guess the answer",
            "Skip the question",
            "Ask someone else"
        ],

        answer: 0,

        explanation:
            "Retrieval questions are answered by finding information in the text.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    }

    ]

};