import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const nouns: SkillContent = {

    skillId: "nouns",

    title: "Nouns",

    description:
        "Learn to identify common nouns, proper nouns and collective nouns.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-nouns-001",
        skillId: "nouns",
        question: "Which word is a noun?",
        stage: "recognise",
        options: [
            "dog",
            "run",
            "quickly",
            "happy"
        ],

        explanation:
            "A noun is a naming word. 'Dog' is the name of an animal.",

        difficulty: 1,
        correctAnswer: "dog",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "nouns"]
    },

    {
        id: "eng-nouns-002",
        skillId: "nouns",
        question: "Which word names a person?",
        stage: "recognise",
        options: [
            "teacher",
            "jump",
            "slowly",
            "blue"
        ],

        explanation:
            "'Teacher' is a noun because it names a person.",

        difficulty: 1,
        correctAnswer: "teacher",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "nouns"]
    },

    {
        id: "eng-nouns-003",
        skillId: "nouns",
        question: "Which word names a place?",
        stage: "recognise",
        options: [
            "school",
            "sing",
            "carefully",
            "bright"
        ],

        explanation:
            "'School' is a noun because it names a place.",

        difficulty: 1,
        correctAnswer: "school",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "nouns"]
    },

    {
        id: "eng-nouns-004",
        skillId: "nouns",
        question: "Which word names an object?",
        stage: "recognise",
        options: [
            "book",
            "read",
            "quickly",
            "soft"
        ],

        explanation:
            "'Book' is a noun because it names a thing.",

        difficulty: 1,
        correctAnswer: "book",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "nouns"]
    },

    {
        id: "eng-nouns-005",
        skillId: "nouns",
        question: "Which word is a proper noun?",
        stage: "recognise",
        options: [
            "London",
            "city",
            "river",
            "country"
        ],

        explanation:
            "'London' is the name of a particular place, so it is a proper noun.",

        difficulty: 1,
        correctAnswer: "London",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "proper-nouns"]
    },

    {
        id: "eng-nouns-006",
        skillId: "nouns",
        question: "How should a proper noun begin?",
        stage: "recognise",
        options: [
            "With a capital letter",
            "With a full stop",
            "With a question mark",
            "With a comma"
        ],

        explanation:
            "Proper nouns always begin with a capital letter.",

        difficulty: 1,
        correctAnswer: "With a capital letter",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "proper-nouns"]
    },

    {
        id: "eng-nouns-007",
        skillId: "nouns",
        question: "Which word is a common noun?",
        stage: "recognise",
        options: [
            "cat",
            "England",
            "Monday",
            "Emma"
        ],

        explanation:
            "'Cat' names any cat, not a particular one, so it is a common noun.",

        difficulty: 1,
        correctAnswer: "cat",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "common-nouns"]
    },

    {
        id: "eng-nouns-008",
        skillId: "nouns",
        question: "Which word is a proper noun?",
        stage: "recognise",
        options: [
            "Emma",
            "girl",
            "friend",
            "child"
        ],

        explanation:
            "'Emma' is the name of a particular person.",

        difficulty: 1,
        correctAnswer: "Emma",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "proper-nouns"]
    },

    {
        id: "eng-nouns-009",
        skillId: "nouns",
        question: "Which word is a noun?",
        stage: "recognise",
        options: [
            "tree",
            "green",
            "climb",
            "quickly"
        ],

        explanation:
            "'Tree' names a living thing, so it is a noun.",

        difficulty: 1,
        correctAnswer: "tree",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "nouns"]
    },

    {
        id: "eng-nouns-010",
        skillId: "nouns",
        question: "Which sentence contains a proper noun?",
        stage: "recognise",
        options: [
            "Jack played football.",
            "The boy played football.",
            "The child laughed.",
            "A dog barked."
        ],

        explanation:
            "'Jack' is the name of a particular person, making it a proper noun.",

        difficulty: 1,
        correctAnswer: "Jack played football.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "proper-nouns"]
    },

    {
        id: "eng-nouns-011",
        skillId: "nouns",
        question: "Which pair contains only nouns?",
        stage: "recognise",
        options: [
            "bird, river",
            "run, jump",
            "happy, blue",
            "quickly, slowly"
        ],

        explanation:
            "'Bird' and 'river' both name things, so they are nouns.",

        difficulty: 2,
        correctAnswer: "bird, river",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "nouns"]
    },

    {
        id: "eng-nouns-012",
        skillId: "nouns",
        question: "Which sentence uses a proper noun correctly?",
        stage: "recognise",
        options: [
            "We visited Scotland.",
            "We visited scotland.",
            "We visited country.",
            "We visited village."
        ],

        explanation:
            "'Scotland' is a proper noun and must begin with a capital letter.",

        difficulty: 2,
        correctAnswer: "We visited Scotland.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "proper-nouns"]
    },

    {
        id: "eng-nouns-013",
        skillId: "nouns",
        question: "Which word is NOT a noun?",
        stage: "recognise",
        options: [
            "quickly",
            "teacher",
            "garden",
            "rabbit"
        ],

        explanation:
            "'Quickly' is an adverb, not a noun.",

        difficulty: 2,
        correctAnswer: "quickly",
        estimatedSeconds: 20,

        tags: ["english", "grammar"]
    },

    {
        id: "eng-nouns-014",
        skillId: "nouns",
        question: "Which word is a collective noun?",
        stage: "recognise",
        options: [
            "team",
            "player",
            "kick",
            "fast"
        ],

        explanation:
            "'Team' is a collective noun because it names a group of people.",

        difficulty: 2,
        correctAnswer: "team",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "collective-nouns"]
    },

    {
        id: "eng-nouns-015",
        skillId: "nouns",
        question: "Which sentence contains two nouns?",
        stage: "recognise",
        options: [
            "The dog chased the ball.",
            "Run quickly now.",
            "Jump carefully today.",
            "Very quietly please."
        ],

        explanation:
            "'Dog' and 'ball' are both nouns.",

        difficulty: 2,
        correctAnswer: "The dog chased the ball.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "nouns"]
    },

    {
        id: "eng-nouns-016",
        skillId: "nouns",
        question: "Which word is a proper noun?",
        stage: "recognise",
        options: [
            "Friday",
            "week",
            "day",
            "month"
        ],

        explanation:
            "The days of the week are proper nouns and begin with capital letters.",

        difficulty: 2,
        correctAnswer: "Friday",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "proper-nouns"]
    },

    {
        id: "eng-nouns-017",
        skillId: "nouns",
        question: "Which noun names a place?",
        stage: "recognise",
        options: [
            "museum",
            "write",
            "carefully",
            "kind"
        ],

        explanation:
            "'Museum' is the name of a place.",

        difficulty: 2,
        correctAnswer: "museum",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "places"]
    },

    {
        id: "eng-nouns-018",
        skillId: "nouns",
        question: "Why does 'Lucy' begin with a capital letter?",
        stage: "recognise",
        options: [
            "It is a proper noun.",
            "It is a verb.",
            "It is an adjective.",
            "It is an adverb."
        ],

        explanation:
            "'Lucy' is the name of a particular person, so it is a proper noun.",

        difficulty: 2,
        correctAnswer: "It is a proper noun.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "proper-nouns"]
    },

    {
        id: "eng-nouns-019",
        skillId: "nouns",
        question: "Which sentence contains a collective noun?",
        stage: "recognise",
        options: [
            "The class went outside.",
            "The teacher smiled.",
            "The child laughed.",
            "The bird flew."
        ],

        explanation:
            "'Class' is a collective noun because it names a group of pupils.",

        difficulty: 2,
        correctAnswer: "The class went outside.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "collective-nouns"]
    },

    {
        id: "eng-nouns-020",
        skillId: "nouns",
        question: "Which sentence uses nouns correctly?",
        stage: "recognise",
        options: [
            "Oliver visited London on Monday.",
            "oliver visited london on monday.",
            "Oliver visited london on monday.",
            "oliver visited London on monday."
        ],

        explanation:
            "Proper nouns such as 'Oliver', 'London' and 'Monday' all begin with capital letters.",

        difficulty: 2,
        correctAnswer: "Oliver visited London on Monday.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "nouns", "proper-nouns"]
    }

    ]

};