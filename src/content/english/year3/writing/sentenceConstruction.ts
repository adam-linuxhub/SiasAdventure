import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const sentenceConstruction: SkillContent = {

    skillId: "sentenceConstruction",

    title: "Sentence Construction",

    description:
        "Learn how to build complete sentences using subjects, verbs and correct sentence structure.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-sc-001",

        question:
            "Which is a complete sentence?",

        options: [
            "The dog barked.",
            "The big dog.",
            "Running through the park.",
            "Because it was raining."
        ],

        answer: 0,

        explanation:
            "A complete sentence needs to make sense on its own and include a subject and a verb.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-002",

        question:
            "What does every complete sentence need?",

        options: [
            "A subject and a verb",
            "A question mark",
            "A long word",
            "A capital letter only"
        ],

        answer: 0,

        explanation:
            "A sentence needs someone or something doing something.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-003",

        question:
            "Which word is the subject in this sentence?\n\nThe rabbit jumped over the log.",

        options: [
            "rabbit",
            "jumped",
            "over",
            "log"
        ],

        answer: 0,

        explanation:
            "The subject is who or what the sentence is about.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-004",

        question:
            "Which word is the verb in this sentence?\n\nThe rabbit jumped over the log.",

        options: [
            "jumped",
            "rabbit",
            "log",
            "the"
        ],

        answer: 0,

        explanation:
            "Jumped is the action being carried out.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-005",

        question:
            "Which sentence is written correctly?",

        options: [
            "The bird flew away.",
            "the bird flew away",
            "The bird flew away",
            "the Bird flew Away."
        ],

        answer: 0,

        explanation:
            "A sentence should begin with a capital letter and end with punctuation.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-006",

        question:
            "Which is a sentence fragment?",

        options: [
            "Because I was tired",
            "I went to bed early.",
            "The cat slept.",
            "The sun was shining."
        ],

        answer: 0,

        explanation:
            "A fragment does not make complete sense on its own.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-007",

        question:
            "Choose the best way to complete the sentence:\n\nThe children ______ in the garden.",

        options: [
            "played",
            "happy",
            "garden",
            "quick"
        ],

        answer: 0,

        explanation:
            "A verb is needed to show what the children did.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-008",

        question:
            "Which sentence has a clear subject?",

        options: [
            "The teacher explained the lesson.",
            "Explained the lesson.",
            "Walking quickly.",
            "After the game."
        ],

        answer: 0,

        explanation:
            "The teacher is the person doing the action.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-009",

        question:
            "Which sentence has a verb?",

        options: [
            "The puppy barked loudly.",
            "The fluffy puppy.",
            "A sunny day.",
            "The red ball."
        ],

        answer: 0,

        explanation:
            "Barked is the action word.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-010",

        question:
            "Why do writers need complete sentences?",

        options: [
            "They help readers understand ideas clearly.",
            "They make writing longer.",
            "They remove the need for punctuation.",
            "They make every word the same."
        ],

        answer: 0,

        explanation:
            "Complete sentences communicate clear ideas.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-011",

        question:
            "Which sentence is the strongest?",

        options: [
            "The excited dog raced across the field.",
            "The dog went.",
            "Dog field.",
            "The dog."
        ],

        answer: 0,

        explanation:
            "The sentence includes a subject, verb and extra detail.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-012",

        question:
            "Improve this sentence:\n\nThe boy ran.",

        options: [
            "The young boy ran quickly home.",
            "Boy.",
            "The ran.",
            "The boy."
        ],

        answer: 0,

        explanation:
            "Adding detail makes the sentence clearer and more interesting.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-013",

        question:
            "Which sentence uses the correct word order?",

        options: [
            "The cat chased the mouse.",
            "The cat the mouse chased.",
            "Chased the mouse cat the.",
            "Mouse the chased cat the."
        ],

        answer: 0,

        explanation:
            "English sentences usually follow a clear word order.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-014",

        question:
            "Choose the complete sentence.",

        options: [
            "Although it was raining, we played football.",
            "Although it was raining.",
            "Playing football.",
            "Because the rain."
        ],

        answer: 0,

        explanation:
            "The sentence contains a complete idea.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-015",

        question:
            "Which sentence has the correct punctuation?",

        options: [
            "Where are you going?",
            "Where are you going.",
            "where are you going?",
            "Where are you going"
        ],

        answer: 0,

        explanation:
            "Questions need a question mark and a capital letter.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-016",

        question:
            "Which sentence is a command?",

        options: [
            "Close the door quietly.",
            "The door is closed.",
            "Is the door closed?",
            "The door was wooden."
        ],

        answer: 0,

        explanation:
            "Commands tell someone what to do.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-017",

        question:
            "Which sentence uses the correct tense?",

        options: [
            "Yesterday, I walked to school.",
            "Yesterday, I walk to school.",
            "Yesterday, I walking to school.",
            "Yesterday, I walks to school."
        ],

        answer: 0,

        explanation:
            "The word 'yesterday' shows the action happened in the past.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-018",

        question:
            "What makes a sentence easier to understand?",

        options: [
            "Clear word order and correct punctuation",
            "Using random words",
            "Removing verbs",
            "Making every sentence one word"
        ],

        answer: 0,

        explanation:
            "Good sentence structure helps readers understand meaning.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-019",

        question:
            "Which sentence contains both a subject and a verb?",

        options: [
            "The children laughed.",
            "The happy children.",
            "Running outside.",
            "After lunch."
        ],

        answer: 0,

        explanation:
            "Children is the subject and laughed is the verb.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-020",

        question:
            "Before finishing a piece of writing, you should check that:",

        options: [
            "Your sentences make sense",
            "Every word is the same length",
            "There are no full stops",
            "You have removed all details"
        ],

        answer: 0,

        explanation:
            "Checking sentences helps make writing clear and accurate.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    }

    ]

};