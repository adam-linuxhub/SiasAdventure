import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const verbs: SkillContent = {

    skillId: "verbs",

    title: "Verbs",

    description:
        "Learn to identify verbs, which are action and doing words.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-verbs-001",
        skillId: "verbs",
        question: "Which word is a verb?",
        stage: "recognise",
        hint: "Look for the action word.",
        options: [
            "run",
            "dog",
            "blue",
            "quickly"
        ],

        explanation:
            "'Run' is a verb because it is an action.",

        difficulty: 1,
        correctAnswer: "run",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-002",
        skillId: "verbs",
        question: "Which word tells what someone is doing?",
        stage: "recognise",
        hint: "Which word tells what someone is doing?",
        options: [
            "jump",
            "table",
            "happy",
            "slowly"
        ],

        explanation:
            "Verbs tell us what someone or something does.",

        difficulty: 1,
        correctAnswer: "jump",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-003",
        skillId: "verbs",
        question: "Which word is a verb?",
        stage: "recognise",
        hint: "A verb is something you can do.",
        options: [
            "eat",
            "apple",
            "green",
            "garden"
        ],

        explanation:
            "'Eat' is an action, so it is a verb.",

        difficulty: 1,
        correctAnswer: "eat",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-004",
        skillId: "verbs",
        question: "Which word is a verb?",
        stage: "recognise",
        hint: "Think about which word shows an action.",
        options: [
            "sleep",
            "bed",
            "soft",
            "night"
        ],

        explanation:
            "'Sleep' is something that people do.",

        difficulty: 1,
        correctAnswer: "sleep",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-005",
        skillId: "verbs",
        question: "Which word is a verb?",
        stage: "recognise",
        hint: "Which word tells what someone does?",
        options: [
            "laugh",
            "child",
            "funny",
            "loud"
        ],

        explanation:
            "'Laugh' is an action.",

        difficulty: 1,
        correctAnswer: "laugh",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-006",
        skillId: "verbs",
        question: "Which word is a verb?",
        stage: "recognise",
        hint: "Find the doing word.",
        options: [
            "write",
            "pencil",
            "paper",
            "yellow"
        ],

        explanation:
            "'Write' tells us what someone is doing.",

        difficulty: 1,
        correctAnswer: "write",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-007",
        skillId: "verbs",
        question: "Which sentence contains a verb?",
        stage: "recognise",
        hint: "Look for the sentence with an action.",
        options: [
            "The bird sings.",
            "The noisy bird.",
            "A blue bird.",
            "The small bird."
        ],

        explanation:
            "'Sings' is the verb because it tells us the action.",

        difficulty: 1,
        correctAnswer: "The bird sings.",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-008",
        skillId: "verbs",
        question: "Which word is the verb?",
        stage: "recognise",
        hint: "Which word is something you can do?",
        options: [
            "swim",
            "river",
            "water",
            "fish"
        ],

        explanation:
            "'Swim' is the action word.",

        difficulty: 1,
        correctAnswer: "swim",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-009",
        skillId: "verbs",
        question: "Which sentence contains an action verb?",
        stage: "recognise",
        hint: "Find the action in the sentence.",
        options: [
            "The cat climbed the tree.",
            "The tall tree.",
            "The green grass.",
            "A happy cat."
        ],

        explanation:
            "'Climbed' is the action in the sentence.",

        difficulty: 1,
        correctAnswer: "The cat climbed the tree.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-010",
        skillId: "verbs",
        question: "Which word is NOT a verb?",
        stage: "recognise",
        hint: "Three words are actions. One is a naming word.",
        options: [
            "house",
            "dance",
            "read",
            "walk"
        ],

        explanation:
            "'House' is a noun because it names a place.",

        difficulty: 1,
        correctAnswer: "house",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-011",
        skillId: "verbs",
        question: "Which pair contains only verbs?",
        stage: "recognise",
        hint: "Choose the pair where both words are actions.",
        options: [
            "run, jump",
            "dog, cat",
            "red, blue",
            "quickly, slowly"
        ],

        explanation:
            "'Run' and 'jump' are both action words.",

        difficulty: 2,
        correctAnswer: "run, jump",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-012",
        skillId: "verbs",
        question: "Which sentence contains two verbs?",
        stage: "recognise",
        hint: "Can you spot two action words?",
        options: [
            "Sam ran and laughed.",
            "The happy dog.",
            "A blue car.",
            "The tall tree."
        ],

        explanation:
            "'Ran' and 'laughed' are both verbs.",

        difficulty: 2,
        correctAnswer: "Sam ran and laughed.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-013",
        skillId: "verbs",
        question: "Which word is NOT a verb?",
        stage: "recognise",
        hint: "Three words are actions. One names a place.",
        options: [
            "garden",
            "sing",
            "climb",
            "draw"
        ],

        explanation:
            "'Garden' is a noun.",

        difficulty: 2,
        correctAnswer: "garden",
        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-verbs-014",
        skillId: "verbs",
        question: "In the sentence 'The rabbit hopped away.', what is the verb?",
        stage: "recognise",
        hint: "Ask what the rabbit did.",
        options: [
            "hopped",
            "rabbit",
            "the",
            "away"
        ],

        explanation:
            "'Hopped' tells us what the rabbit did.",

        difficulty: 2,
        correctAnswer: "hopped",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-015",
        skillId: "verbs",
        question: "Which sentence uses a verb correctly?",
        stage: "recognise",
        hint: "Look for the sentence with a clear action.",
        options: [
            "The children played outside.",
            "The children outside.",
            "Happy children outside.",
            "The children playground."
        ],

        explanation:
            "'Played' is the verb that tells us the action.",

        difficulty: 2,
        correctAnswer: "The children played outside.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-016",
        skillId: "verbs",
        question: "Which word completes the sentence? 'The baby ____.'",
        stage: "recognise",
        hint: "The missing word should tell what the baby did.",
        options: [
            "cried",
            "cot",
            "tiny",
            "blanket"
        ],

        explanation:
            "'Cried' is the action that completes the sentence.",

        difficulty: 2,
        correctAnswer: "cried",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-017",
        skillId: "verbs",
        question: "Which sentence contains the verb 'read'?",
        stage: "recognise",
        hint: "Find the sentence where 'read' is the action.",
        options: [
            "We read a story.",
            "The story book.",
            "An exciting story.",
            "The old library."
        ],

        explanation:
            "'Read' tells us what 'we' did.",

        difficulty: 2,
        correctAnswer: "We read a story.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-018",
        skillId: "verbs",
        question: "Which word is the verb in 'Dad cooked dinner.'?",
        stage: "recognise",
        hint: "Which word tells what Dad did?",
        options: [
            "cooked",
            "Dad",
            "dinner",
            "the"
        ],

        explanation:
            "'Cooked' is the action in the sentence.",

        difficulty: 2,
        correctAnswer: "cooked",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-019",
        skillId: "verbs",
        question: "Which sentence contains only one verb?",
        stage: "recognise",
        hint: "Count the action words in each sentence.",
        options: [
            "The girl smiled.",
            "The girl smiled and waved.",
            "The happy girl.",
            "The smiling girl and boy."
        ],

        explanation:
            "'Smiled' is the only verb in the sentence.",

        difficulty: 2,
        correctAnswer: "The girl smiled.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    },

    {
        id: "eng-verbs-020",
        skillId: "verbs",
        question: "Which sentence uses verbs correctly?",
        stage: "recognise",
        hint: "Look for the sentence with two actions.",
        options: [
            "Oliver opened the door and waved.",
            "Oliver the door.",
            "The open door.",
            "Oliver happy door."
        ],

        explanation:
            "'Opened' and 'waved' are both verbs that describe Oliver's actions.",

        difficulty: 2,
        correctAnswer: "Oliver opened the door and waved.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "verbs"]
    }

    ]

};

export default verbs;

export {

    verbs

};