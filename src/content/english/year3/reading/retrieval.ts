import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const retrieval: SkillContent = {

    skillId: "retrieval",

    title: "Retrieval",

    description:
        "Learn how to find information that is directly stated in a text.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-ret-001",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nSam rode his blue bike to the park.\n\nWhat colour was Sam's bike?",
        stage: "recognise",
        options: [
            "Blue",
            "Red",
            "Green",
            "Yellow"
        ],

        explanation:
            "The passage tells us directly that Sam's bike was blue.",

        difficulty: 1,
        correctAnswer: "Blue",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-002",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nLucy packed an apple, a sandwich and a bottle of water.\n\nWhat fruit did Lucy pack?",
        stage: "recognise",
        options: [
            "An apple",
            "A banana",
            "An orange",
            "Some grapes"
        ],

        explanation:
            "The passage says Lucy packed an apple.",

        difficulty: 1,
        correctAnswer: "An apple",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-003",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nBen's football match started at 10 o'clock.\n\nWhat time did the match begin?",
        stage: "recognise",
        options: [
            "10 o'clock",
            "9 o'clock",
            "11 o'clock",
            "12 o'clock"
        ],

        explanation:
            "The answer is stated directly in the passage.",

        difficulty: 1,
        correctAnswer: "10 o'clock",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-004",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nThe rabbit hid under a bush when it started to rain.\n\nWhere did the rabbit hide?",
        stage: "recognise",
        options: [
            "Under a bush",
            "In a tree",
            "Inside a house",
            "Behind a fence"
        ],

        explanation:
            "The passage tells us the rabbit hid under a bush.",

        difficulty: 1,
        correctAnswer: "Under a bush",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-005",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nMrs Green read a story to the class before lunch.\n\nWho read the story?",
        stage: "recognise",
        options: [
            "Mrs Green",
            "Sam",
            "The headteacher",
            "The children"
        ],

        explanation:
            "Mrs Green is named as the person who read the story.",

        difficulty: 1,
        correctAnswer: "Mrs Green",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-006",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nElla's favourite animal is the dolphin.\n\nWhat is Ella's favourite animal?",
        stage: "recognise",
        options: [
            "Dolphin",
            "Whale",
            "Penguin",
            "Horse"
        ],

        explanation:
            "The passage states that Ella's favourite animal is the dolphin.",

        difficulty: 1,
        correctAnswer: "Dolphin",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-007",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nTom wore a woolly hat because it was snowing.\n\nWhat did Tom wear?",
        stage: "recognise",
        options: [
            "A woolly hat",
            "A helmet",
            "A cap",
            "A scarf"
        ],

        explanation:
            "The answer is directly given in the text.",

        difficulty: 1,
        correctAnswer: "A woolly hat",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-008",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nThe class visited the museum on Tuesday.\n\nWhen did the class visit the museum?",
        stage: "recognise",
        options: [
            "Tuesday",
            "Monday",
            "Wednesday",
            "Friday"
        ],

        explanation:
            "The passage clearly says Tuesday.",

        difficulty: 1,
        correctAnswer: "Tuesday",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-009",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nThe cake had chocolate icing.\n\nWhat flavour was the icing?",
        stage: "recognise",
        options: [
            "Chocolate",
            "Vanilla",
            "Strawberry",
            "Lemon"
        ],

        explanation:
            "The passage tells us the icing was chocolate.",

        difficulty: 1,
        correctAnswer: "Chocolate",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-010",
        skillId: "retrieval",
        question:
            "What does retrieval mean when reading?",
        stage: "recognise",
        options: [
            "Finding information that is written in the text",
            "Making up your own ending",
            "Guessing what might happen",
            "Learning how to spell words"
        ],

        explanation:
            "Retrieval means finding information that is directly stated.",

        difficulty: 1,
        correctAnswer: "Finding information that is written in the text",
        estimatedSeconds: 20,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-011",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nAva planted sunflower seeds in April. By July, the flowers were taller than she was.\n\nWhat did Ava plant?",
        stage: "recognise",
        options: [
            "Sunflower seeds",
            "Beans",
            "Potatoes",
            "Tulips"
        ],

        explanation:
            "The first sentence tells us exactly what Ava planted.",

        difficulty: 2,
        correctAnswer: "Sunflower seeds",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-012",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nThe library opens at 9 o'clock every weekday and closes at 5 o'clock.\n\nWhat time does the library close?",
        stage: "recognise",
        options: [
            "5 o'clock",
            "4 o'clock",
            "6 o'clock",
            "9 o'clock"
        ],

        explanation:
            "The closing time is given directly.",

        difficulty: 2,
        correctAnswer: "5 o'clock",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-013",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nOscar found a shiny shell while walking along the beach with his grandparents.\n\nWhat did Oscar find?",
        stage: "recognise",
        options: [
            "A shiny shell",
            "A crab",
            "A feather",
            "A pebble"
        ],

        explanation:
            "The passage states that Oscar found a shiny shell.",

        difficulty: 2,
        correctAnswer: "A shiny shell",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-014",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nThe baby panda drank milk before falling asleep.\n\nWhat did the panda drink?",
        stage: "recognise",
        options: [
            "Milk",
            "Water",
            "Juice",
            "Soup"
        ],

        explanation:
            "The answer can be found directly in the passage.",

        difficulty: 2,
        correctAnswer: "Milk",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-015",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nNoah finished his homework before playing football with his friends.\n\nWhat did Noah do after finishing his homework?",
        stage: "recognise",
        options: [
            "Played football",
            "Went to bed",
            "Read a book",
            "Ate dinner"
        ],

        explanation:
            "The second part of the sentence tells us exactly what Noah did next.",

        difficulty: 2,
        correctAnswer: "Played football",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-016",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nThe train to York leaves from Platform 3.\n\nWhich platform does the train leave from?",
        stage: "recognise",
        options: [
            "Platform 3",
            "Platform 1",
            "Platform 2",
            "Platform 4"
        ],

        explanation:
            "The platform number is stated directly.",

        difficulty: 2,
        correctAnswer: "Platform 3",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-017",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nEmily borrowed three books about dinosaurs from the library.\n\nHow many books did Emily borrow?",
        stage: "recognise",
        options: [
            "Three",
            "Two",
            "Four",
            "Five"
        ],

        explanation:
            "The passage says Emily borrowed three books.",

        difficulty: 2,
        correctAnswer: "Three",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-018",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nThe red kite flew high above the trees on a windy afternoon.\n\nWhat colour was the kite?",
        stage: "recognise",
        options: [
            "Red",
            "Blue",
            "Green",
            "Yellow"
        ],

        explanation:
            "The colour is directly stated.",

        difficulty: 2,
        correctAnswer: "Red",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-019",
        skillId: "retrieval",
        question:
            "Read the passage:\n\nAfter brushing his teeth, Leo packed his school bag.\n\nWhat did Leo do first?",
        stage: "recognise",
        options: [
            "Brushed his teeth",
            "Packed his school bag",
            "Had lunch",
            "Walked to school"
        ],

        explanation:
            "The order of events is clearly written in the passage.",

        difficulty: 2,
        correctAnswer: "Brushed his teeth",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    },

    {
        id: "eng-ret-020",
        skillId: "retrieval",
        question:
            "What should you do first when answering a retrieval question?",
        stage: "recognise",
        options: [
            "Look back at the text to find the answer",
            "Guess the answer",
            "Skip the question",
            "Ask someone else"
        ],

        explanation:
            "Retrieval questions are answered by finding information in the text.",

        difficulty: 2,
        correctAnswer: "Look back at the text to find the answer",
        estimatedSeconds: 25,

        tags: ["english", "reading", "retrieval"]
    }

    ]

};


export default retrieval;

export {

    retrieval

};
