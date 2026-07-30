import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const sentenceConstruction: SkillContent = {

    skillId: "sentenceConstruction",

    title: "Sentence Construction",

    description:
        "Learn how to build complete sentences using subjects, verbs and correct sentence structure.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-sc-001",
        skillId: "sentenceConstruction",
        question:
            "Which is a complete sentence?",
        stage: "recognise",
        options: [
            "The dog barked.",
            "The big dog.",
            "Running through the park.",
            "Because it was raining."
        ],

        explanation:
            "A complete sentence needs to make sense on its own and include a subject and a verb.",

        difficulty: 1,
        correctAnswer: "The dog barked.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-002",
        skillId: "sentenceConstruction",
        question:
            "What does every complete sentence need?",
        stage: "recognise",
        options: [
            "A subject and a verb",
            "A question mark",
            "A long word",
            "A capital letter only"
        ],

        explanation:
            "A sentence needs someone or something doing something.",

        difficulty: 1,
        correctAnswer: "A subject and a verb",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-003",
        skillId: "sentenceConstruction",
        question:
            "Which word is the subject in this sentence?\n\nThe rabbit jumped over the log.",
        stage: "recognise",
        options: [
            "rabbit",
            "jumped",
            "over",
            "log"
        ],

        explanation:
            "The subject is who or what the sentence is about.",

        difficulty: 1,
        correctAnswer: "rabbit",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-004",
        skillId: "sentenceConstruction",
        question:
            "Which word is the verb in this sentence?\n\nThe rabbit jumped over the log.",
        stage: "recognise",
        options: [
            "jumped",
            "rabbit",
            "log",
            "the"
        ],

        explanation:
            "Jumped is the action being carried out.",

        difficulty: 1,
        correctAnswer: "jumped",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-005",
        skillId: "sentenceConstruction",
        question:
            "Which sentence is written correctly?",
        stage: "recognise",
        options: [
            "The bird flew away.",
            "the bird flew away",
            "The bird flew away",
            "the Bird flew Away."
        ],

        explanation:
            "A sentence should begin with a capital letter and end with punctuation.",

        difficulty: 1,
        correctAnswer: "The bird flew away.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-006",
        skillId: "sentenceConstruction",
        question:
            "Which is a sentence fragment?",
        stage: "recognise",
        options: [
            "Because I was tired",
            "I went to bed early.",
            "The cat slept.",
            "The sun was shining."
        ],

        explanation:
            "A fragment does not make complete sense on its own.",

        difficulty: 1,
        correctAnswer: "Because I was tired",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-007",
        skillId: "sentenceConstruction",
        question:
            "Choose the best way to complete the sentence:\n\nThe children ______ in the garden.",
        stage: "recognise",
        options: [
            "played",
            "happy",
            "garden",
            "quick"
        ],

        explanation:
            "A verb is needed to show what the children did.",

        difficulty: 1,
        correctAnswer: "played",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-008",
        skillId: "sentenceConstruction",
        question:
            "Which sentence has a clear subject?",
        stage: "recognise",
        options: [
            "The teacher explained the lesson.",
            "Explained the lesson.",
            "Walking quickly.",
            "After the game."
        ],

        explanation:
            "The teacher is the person doing the action.",

        difficulty: 1,
        correctAnswer: "The teacher explained the lesson.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-009",
        skillId: "sentenceConstruction",
        question:
            "Which sentence has a verb?",
        stage: "recognise",
        options: [
            "The puppy barked loudly.",
            "The fluffy puppy.",
            "A sunny day.",
            "The red ball."
        ],

        explanation:
            "Barked is the action word.",

        difficulty: 1,
        correctAnswer: "The puppy barked loudly.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-010",
        skillId: "sentenceConstruction",
        question:
            "Why do writers need complete sentences?",
        stage: "recognise",
        options: [
            "They help readers understand ideas clearly.",
            "They make writing longer.",
            "They remove the need for punctuation.",
            "They make every word the same."
        ],

        explanation:
            "Complete sentences communicate clear ideas.",

        difficulty: 1,
        correctAnswer: "They help readers understand ideas clearly.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-011",
        skillId: "sentenceConstruction",
        question:
            "Which sentence is the strongest?",
        stage: "recognise",
        options: [
            "The excited dog raced across the field.",
            "The dog went.",
            "Dog field.",
            "The dog."
        ],

        explanation:
            "The sentence includes a subject, verb and extra detail.",

        difficulty: 2,
        correctAnswer: "The excited dog raced across the field.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-012",
        skillId: "sentenceConstruction",
        question:
            "Improve this sentence:\n\nThe boy ran.",
        stage: "recognise",
        options: [
            "The young boy ran quickly home.",
            "Boy.",
            "The ran.",
            "The boy."
        ],

        explanation:
            "Adding detail makes the sentence clearer and more interesting.",

        difficulty: 2,
        correctAnswer: "The young boy ran quickly home.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-013",
        skillId: "sentenceConstruction",
        question:
            "Which sentence uses the correct word order?",
        stage: "recognise",
        options: [
            "The cat chased the mouse.",
            "The cat the mouse chased.",
            "Chased the mouse cat the.",
            "Mouse the chased cat the."
        ],

        explanation:
            "English sentences usually follow a clear word order.",

        difficulty: 2,
        correctAnswer: "The cat chased the mouse.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-014",
        skillId: "sentenceConstruction",
        question:
            "Choose the complete sentence.",
        stage: "recognise",
        options: [
            "Although it was raining, we played football.",
            "Although it was raining.",
            "Playing football.",
            "Because the rain."
        ],

        explanation:
            "The sentence contains a complete idea.",

        difficulty: 2,
        correctAnswer: "Although it was raining, we played football.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-015",
        skillId: "sentenceConstruction",
        question:
            "Which sentence has the correct punctuation?",
        stage: "recognise",
        options: [
            "Where are you going?",
            "Where are you going.",
            "where are you going?",
            "Where are you going"
        ],

        explanation:
            "Questions need a question mark and a capital letter.",

        difficulty: 2,
        correctAnswer: "Where are you going?",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-016",
        skillId: "sentenceConstruction",
        question:
            "Which sentence is a command?",
        stage: "recognise",
        options: [
            "Close the door quietly.",
            "The door is closed.",
            "Is the door closed?",
            "The door was wooden."
        ],

        explanation:
            "Commands tell someone what to do.",

        difficulty: 2,
        correctAnswer: "Close the door quietly.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-017",
        skillId: "sentenceConstruction",
        question:
            "Which sentence uses the correct tense?",
        stage: "recognise",
        options: [
            "Yesterday, I walked to school.",
            "Yesterday, I walk to school.",
            "Yesterday, I walking to school.",
            "Yesterday, I walks to school."
        ],

        explanation:
            "The word 'yesterday' shows the action happened in the past.",

        difficulty: 2,
        correctAnswer: "Yesterday, I walked to school.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-018",
        skillId: "sentenceConstruction",
        question:
            "What makes a sentence easier to understand?",
        stage: "recognise",
        options: [
            "Clear word order and correct punctuation",
            "Using random words",
            "Removing verbs",
            "Making every sentence one word"
        ],

        explanation:
            "Good sentence structure helps readers understand meaning.",

        difficulty: 2,
        correctAnswer: "Clear word order and correct punctuation",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-019",
        skillId: "sentenceConstruction",
        question:
            "Which sentence contains both a subject and a verb?",
        stage: "recognise",
        options: [
            "The children laughed.",
            "The happy children.",
            "Running outside.",
            "After lunch."
        ],

        explanation:
            "Children is the subject and laughed is the verb.",

        difficulty: 2,
        correctAnswer: "The children laughed.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    },

    {
        id: "eng-sc-020",
        skillId: "sentenceConstruction",
        question:
            "Before finishing a piece of writing, you should check that:",
        stage: "recognise",
        options: [
            "Your sentences make sense",
            "Every word is the same length",
            "There are no full stops",
            "You have removed all details"
        ],

        explanation:
            "Checking sentences helps make writing clear and accurate.",

        difficulty: 2,
        correctAnswer: "Your sentences make sense",
        estimatedSeconds: 20,

        tags: ["english", "writing", "sentences"]
    }

    ]

};