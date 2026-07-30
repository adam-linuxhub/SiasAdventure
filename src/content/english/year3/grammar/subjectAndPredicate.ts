import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const subjectAndPredicate: SkillContent = {

    skillId: "subjectAndPredicate",

    title: "Subjects and Predicates",

    description:
        "Learn to identify the subject (who or what the sentence is about) and the predicate (what the subject does or what happens to it).",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-subpred-001",

        question: "In the sentence 'The cat slept.', what is the subject?",

        options: [
            "The cat",
            "slept",
            "The",
            "cat slept"
        ],

        answer: 0,

        explanation:
            "The subject tells us who or what the sentence is about. Here, it is 'The cat'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-002",

        question: "In the sentence 'The dog barked loudly.', what is the predicate?",

        options: [
            "barked loudly",
            "The dog",
            "dog",
            "loudly"
        ],

        answer: 0,

        explanation:
            "The predicate tells us what the subject does. Here it is 'barked loudly'.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-003",

        question: "Which is the subject in 'Emma painted a picture.'?",

        options: [
            "Emma",
            "painted",
            "a picture",
            "painted a picture"
        ],

        answer: 0,

        explanation:
            "'Emma' is who the sentence is about, so it is the subject.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-004",

        question: "Which is the predicate in 'Birds sing every morning.'?",

        options: [
            "sing every morning",
            "Birds",
            "every morning",
            "morning"
        ],

        answer: 0,

        explanation:
            "The predicate explains what the birds do.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-005",

        question: "Every complete sentence needs...",

        options: [
            "a subject and a predicate",
            "two verbs",
            "two nouns",
            "a question mark"
        ],

        answer: 0,

        explanation:
            "A complete sentence tells us who or what it is about and what happens.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-006",

        question: "Which is the subject in 'The children laughed.'?",

        options: [
            "The children",
            "laughed",
            "children laughed",
            "The"
        ],

        answer: 0,

        explanation:
            "'The children' are who the sentence is about.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-007",

        question: "Which is the predicate in 'My brother plays football.'?",

        options: [
            "plays football",
            "My brother",
            "football",
            "brother"
        ],

        answer: 0,

        explanation:
            "The predicate tells us what the brother does.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-008",

        question: "Which sentence has both a subject and a predicate?",

        options: [
            "The rabbit hopped.",
            "The rabbit",
            "Hopped quickly",
            "Under the tree"
        ],

        answer: 0,

        explanation:
            "'The rabbit' is the subject and 'hopped' is the predicate.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-009",

        question: "Which is NOT a complete sentence?",

        options: [
            "The tall tree",
            "The tall tree grew.",
            "The bird flew.",
            "The baby smiled."
        ],

        answer: 0,

        explanation:
            "'The tall tree' has a subject but no predicate.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-010",

        question: "In 'Tom ran home.', who is the subject?",

        options: [
            "Tom",
            "ran",
            "home",
            "ran home"
        ],

        answer: 0,

        explanation:
            "'Tom' is who the sentence is about.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-011",

        question: "In 'The red kite flew high.', what is the predicate?",

        options: [
            "flew high",
            "The red kite",
            "high",
            "red kite"
        ],

        answer: 0,

        explanation:
            "The predicate tells us what happened to the kite.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-012",

        question: "In 'Our teacher read a story.', what is the subject?",

        options: [
            "Our teacher",
            "read",
            "a story",
            "read a story"
        ],

        answer: 0,

        explanation:
            "'Our teacher' is who performed the action.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-013",

        question: "Which sentence has the subject 'The birds'?",

        options: [
            "The birds built a nest.",
            "Built a nest.",
            "A nest in the tree.",
            "Flying over the lake."
        ],

        answer: 0,

        explanation:
            "'The birds' are the subject because the sentence is about them.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-014",

        question: "Which part is the predicate in 'My friends visited the museum.'?",

        options: [
            "visited the museum",
            "My friends",
            "the museum",
            "friends"
        ],

        answer: 0,

        explanation:
            "The predicate explains what the friends did.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-015",

        question: "What does the predicate tell us?",

        options: [
            "What the subject does or what happens",
            "Who the sentence is about",
            "Where the sentence ends",
            "How many nouns there are"
        ],

        answer: 0,

        explanation:
            "The predicate contains the action or tells us something about the subject.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-016",

        question: "What does the subject tell us?",

        options: [
            "Who or what the sentence is about",
            "What action happened",
            "Where the action happened",
            "When the action happened"
        ],

        answer: 0,

        explanation:
            "The subject names the person, animal or thing the sentence is about.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-017",

        question: "Which sentence has a compound subject?",

        options: [
            "Jack and Mia played football.",
            "Jack played football.",
            "Played football.",
            "The football rolled."
        ],

        answer: 0,

        explanation:
            "'Jack and Mia' are both part of the subject.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-018",

        question: "Which sentence has the predicate 'jumped over the fence'?",

        options: [
            "The horse jumped over the fence.",
            "The horse.",
            "Jumped over the fence.",
            "The fence was tall."
        ],

        answer: 0,

        explanation:
            "The predicate tells us what the horse did.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-019",

        question: "Choose the complete sentence.",

        options: [
            "The baby slept peacefully.",
            "The sleepy baby",
            "Sleeping peacefully",
            "Under the blanket"
        ],

        answer: 0,

        explanation:
            "A complete sentence contains both a subject and a predicate.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    },

    {
        id: "eng-subpred-020",

        question: "Why are subjects and predicates important?",

        options: [
            "They help make complete sentences.",
            "They replace punctuation.",
            "They make every sentence longer.",
            "They replace adjectives."
        ],

        answer: 0,

        explanation:
            "Every complete sentence needs a subject and a predicate so the meaning is clear.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "grammar", "subject", "predicate"]
    }

    ]

};