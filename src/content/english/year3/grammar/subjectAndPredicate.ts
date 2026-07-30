import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const subjectAndPredicate: SkillContent = {

    skillId: "subjectAndPredicate",

    title: "Subjects and Predicates",

    description:
        "Learn to identify the subject (who or what the sentence is about) and the predicate (what the subject does or what happens to it).",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-subpred-001",
        skillId: "subjectAndPredicate",
        question: "In the sentence 'The cat slept.', what is the subject?",

        options: [
            "The cat",
            "slept",
            "The",
            "cat slept"
        ],

        explanation:
            "The subject tells us who or what the sentence is about. Here, it is 'The cat'.",

        difficulty: 1,
        correctAnswer: "The cat",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-002",
        skillId: "subjectAndPredicate",
        question: "In the sentence 'The dog barked loudly.', what is the predicate?",

        options: [
            "barked loudly",
            "The dog",
            "dog",
            "loudly"
        ],

        explanation:
            "The predicate tells us what the subject does. Here it is 'barked loudly'.",

        difficulty: 1,
        correctAnswer: "barked loudly",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-003",
        skillId: "subjectAndPredicate",
        question: "Which is the subject in 'Emma painted a picture.'?",

        options: [
            "Emma",
            "painted",
            "a picture",
            "painted a picture"
        ],

        explanation:
            "'Emma' is who the sentence is about, so it is the subject.",

        difficulty: 1,
        correctAnswer: "Emma",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-004",
        skillId: "subjectAndPredicate",
        question: "Which is the predicate in 'Birds sing every morning.'?",

        options: [
            "sing every morning",
            "Birds",
            "every morning",
            "morning"
        ],

        explanation:
            "The predicate explains what the birds do.",

        difficulty: 1,
        correctAnswer: "sing every morning",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-005",
        skillId: "subjectAndPredicate",
        question: "Every complete sentence needs...",

        options: [
            "a subject and a predicate",
            "two verbs",
            "two nouns",
            "a question mark"
        ],

        explanation:
            "A complete sentence tells us who or what it is about and what happens.",

        difficulty: 1,
        correctAnswer: "a subject and a predicate",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-006",
        skillId: "subjectAndPredicate",
        question: "Which is the subject in 'The children laughed.'?",

        options: [
            "The children",
            "laughed",
            "children laughed",
            "The"
        ],

        explanation:
            "'The children' are who the sentence is about.",

        difficulty: 1,
        correctAnswer: "The children",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-007",
        skillId: "subjectAndPredicate",
        question: "Which is the predicate in 'My brother plays football.'?",

        options: [
            "plays football",
            "My brother",
            "football",
            "brother"
        ],

        explanation:
            "The predicate tells us what the brother does.",

        difficulty: 1,
        correctAnswer: "plays football",
        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-008",
        skillId: "subjectAndPredicate",
        question: "Which sentence has both a subject and a predicate?",

        options: [
            "The rabbit hopped.",
            "The rabbit",
            "Hopped quickly",
            "Under the tree"
        ],

        explanation:
            "'The rabbit' is the subject and 'hopped' is the predicate.",

        difficulty: 1,
        correctAnswer: "The rabbit hopped.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-009",
        skillId: "subjectAndPredicate",
        question: "Which is NOT a complete sentence?",

        options: [
            "The tall tree",
            "The tall tree grew.",
            "The bird flew.",
            "The baby smiled."
        ],

        explanation:
            "'The tall tree' has a subject but no predicate.",

        difficulty: 1,
        correctAnswer: "The tall tree",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-010",
        skillId: "subjectAndPredicate",
        question: "In 'Tom ran home.', who is the subject?",

        options: [
            "Tom",
            "ran",
            "home",
            "ran home"
        ],

        explanation:
            "'Tom' is who the sentence is about.",

        difficulty: 1,
        correctAnswer: "Tom",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-011",
        skillId: "subjectAndPredicate",
        question: "In 'The red kite flew high.', what is the predicate?",

        options: [
            "flew high",
            "The red kite",
            "high",
            "red kite"
        ],

        explanation:
            "The predicate tells us what happened to the kite.",

        difficulty: 2,
        correctAnswer: "flew high",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-012",
        skillId: "subjectAndPredicate",
        question: "In 'Our teacher read a story.', what is the subject?",

        options: [
            "Our teacher",
            "read",
            "a story",
            "read a story"
        ],

        explanation:
            "'Our teacher' is who performed the action.",

        difficulty: 2,
        correctAnswer: "Our teacher",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-013",
        skillId: "subjectAndPredicate",
        question: "Which sentence has the subject 'The birds'?",

        options: [
            "The birds built a nest.",
            "Built a nest.",
            "A nest in the tree.",
            "Flying over the lake."
        ],

        explanation:
            "'The birds' are the subject because the sentence is about them.",

        difficulty: 2,
        correctAnswer: "The birds built a nest.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-014",
        skillId: "subjectAndPredicate",
        question: "Which part is the predicate in 'My friends visited the museum.'?",

        options: [
            "visited the museum",
            "My friends",
            "the museum",
            "friends"
        ],

        explanation:
            "The predicate explains what the friends did.",

        difficulty: 2,
        correctAnswer: "visited the museum",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-015",
        skillId: "subjectAndPredicate",
        question: "What does the predicate tell us?",

        options: [
            "What the subject does or what happens",
            "Who the sentence is about",
            "Where the sentence ends",
            "How many nouns there are"
        ],

        explanation:
            "The predicate contains the action or tells us something about the subject.",

        difficulty: 2,
        correctAnswer: "What the subject does or what happens",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-016",
        skillId: "subjectAndPredicate",
        question: "What does the subject tell us?",

        options: [
            "Who or what the sentence is about",
            "What action happened",
            "Where the action happened",
            "When the action happened"
        ],

        explanation:
            "The subject names the person, animal or thing the sentence is about.",

        difficulty: 2,
        correctAnswer: "Who or what the sentence is about",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-017",
        skillId: "subjectAndPredicate",
        question: "Which sentence has a compound subject?",

        options: [
            "Jack and Mia played football.",
            "Jack played football.",
            "Played football.",
            "The football rolled."
        ],

        explanation:
            "'Jack and Mia' are both part of the subject.",

        difficulty: 2,
        correctAnswer: "Jack and Mia played football.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-018",
        skillId: "subjectAndPredicate",
        question: "Which sentence has the predicate 'jumped over the fence'?",

        options: [
            "The horse jumped over the fence.",
            "The horse.",
            "Jumped over the fence.",
            "The fence was tall."
        ],

        explanation:
            "The predicate tells us what the horse did.",

        difficulty: 2,
        correctAnswer: "The horse jumped over the fence.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-019",
        skillId: "subjectAndPredicate",
        question: "Choose the complete sentence.",

        options: [
            "The baby slept peacefully.",
            "The sleepy baby",
            "Sleeping peacefully",
            "Under the blanket"
        ],

        explanation:
            "A complete sentence contains both a subject and a predicate.",

        difficulty: 2,
        correctAnswer: "The baby slept peacefully.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-020",
        skillId: "subjectAndPredicate",
        question: "Why are subjects and predicates important?",

        options: [
            "They help make complete sentences.",
            "They replace punctuation.",
            "They make every sentence longer.",
            "They replace adjectives."
        ],

        explanation:
            "Every complete sentence needs a subject and a predicate so the meaning is clear.",

        difficulty: 2,
        correctAnswer: "They help make complete sentences.",
        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    }

    ]

};