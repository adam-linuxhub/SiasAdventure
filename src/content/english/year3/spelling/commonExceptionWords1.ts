import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const commonExceptionWords1: SkillContent = {

    skillId: "commonExceptionWords1",

    title: "Common Exception Words 1",

    description:
        "Learn to read and spell common exception words that do not always follow normal spelling rules.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-cew1-001",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "because",
            "becuse",
            "becaus",
            "becose"
        ],

        explanation:
            "'Because' is the correct spelling.",

        difficulty: 1,
        correctAnswer: "because",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-002",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "people",
            "peeple",
            "peple",
            "peopl"
        ],

        explanation:
            "'People' is the correct spelling.",

        difficulty: 1,
        correctAnswer: "people",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-003",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "friend",
            "freind",
            "frend",
            "freiend"
        ],

        explanation:
            "Remember: 'friend' has 'ie' in the middle.",

        difficulty: 1,
        correctAnswer: "friend",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-004",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "busy",
            "bisy",
            "busie",
            "bussy"
        ],

        explanation:
            "'Busy' is spelled with a 'u'.",

        difficulty: 1,
        correctAnswer: "busy",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-005",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "beautiful",
            "beutiful",
            "beautifull",
            "butiful"
        ],

        explanation:
            "'Beautiful' begins with 'beau-'.",

        difficulty: 1,
        correctAnswer: "beautiful",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-006",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "every",
            "evry",
            "everey",
            "evrey"
        ],

        explanation:
            "'Every' is the correct spelling.",

        difficulty: 1,
        correctAnswer: "every",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-007",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "again",
            "agen",
            "againe",
            "aginn"
        ],

        explanation:
            "'Again' is spelled a-g-a-i-n.",

        difficulty: 1,
        correctAnswer: "again",
        estimatedSeconds: 15,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-008",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "great",
            "grate",
            "grete",
            "greatt"
        ],

        explanation:
            "'Great' uses the letters 'ea'.",

        difficulty: 1,
        correctAnswer: "great",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-009",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "door",
            "dor",
            "doar",
            "dooor"
        ],

        explanation:
            "'Door' contains a double 'o'.",

        difficulty: 1,
        correctAnswer: "door",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-010",
        skillId: "commonExceptionWords1",
        question: "Which is the correct spelling?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "floor",
            "flor",
            "floar",
            "floorr"
        ],

        explanation:
            "'Floor' has a double 'o'.",

        difficulty: 1,
        correctAnswer: "floor",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-011",
        skillId: "commonExceptionWords1",
        question: "Complete the sentence: 'I like to play with my ______.'",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "friend",
            "freind",
            "frend",
            "freiend"
        ],

        explanation:
            "'Friend' is the correct spelling.",

        difficulty: 2,
        correctAnswer: "friend",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-012",
        skillId: "commonExceptionWords1",
        question: "Complete the sentence: 'Thank you ______ helping me.'",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "for",
            "four",
            "fore",
            "fur"
        ],

        explanation:
            "'For' is the correct word in this sentence.",

        difficulty: 2,
        correctAnswer: "for",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-013",
        skillId: "commonExceptionWords1",
        question: "Which sentence contains the correctly spelled word?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "The beautiful butterfly landed on a flower.",
            "The beutiful butterfly landed on a flower.",
            "The beautifull butterfly landed on a flower.",
            "The butiful butterfly landed on a flower."
        ],

        explanation:
            "'Beautiful' is spelled b-e-a-u-t-i-f-u-l.",

        difficulty: 2,
        correctAnswer: "The beautiful butterfly landed on a flower.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-014",
        skillId: "commonExceptionWords1",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "Because it was raining, we stayed inside.",
            "Becuse it was raining, we stayed inside.",
            "Becaus it was raining, we stayed inside.",
            "Becose it was raining, we stayed inside."
        ],

        explanation:
            "'Because' is a common exception word that must be learned.",

        difficulty: 2,
        correctAnswer: "Because it was raining, we stayed inside.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-015",
        skillId: "commonExceptionWords1",
        question: "Which word is spelled correctly?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "people",
            "peaple",
            "peeple",
            "pepol"
        ],

        explanation:
            "'People' is the correct spelling.",

        difficulty: 2,
        correctAnswer: "people",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-016",
        skillId: "commonExceptionWords1",
        question: "Which word completes the sentence? 'The shop is over ______.'",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "there",
            "thair",
            "thare",
            "ther"
        ],

        explanation:
            "'There' tells us where something is.",

        difficulty: 2,
        correctAnswer: "there",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-017",
        skillId: "commonExceptionWords1",
        question: "Which spelling is correct?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "parents",
            "parrents",
            "parants",
            "parents'"
        ],

        explanation:
            "'Parents' is the correct spelling.",

        difficulty: 2,
        correctAnswer: "parents",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-018",
        skillId: "commonExceptionWords1",
        question: "Which word is spelled correctly?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "everybody",
            "everyboddy",
            "everybodi",
            "everybodyy"
        ],

        explanation:
            "'Everybody' is one word.",

        difficulty: 2,
        correctAnswer: "everybody",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-019",
        skillId: "commonExceptionWords1",
        question: "Which sentence is correct?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "The door was open.",
            "The dor was open.",
            "The doar was open.",
            "The dooor was open."
        ],

        explanation:
            "'Door' contains two 'o's.",

        difficulty: 2,
        correctAnswer: "The door was open.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    },

    {
        id: "eng-cew1-020",
        skillId: "commonExceptionWords1",
        question: "Which sentence contains only correctly spelled words?",
        stage: "recognise",
        hint: "Say the word carefully and picture its correct spelling.",
        options: [
            "My friend is busy because we have homework.",
            "My freind is busy becuse we have homework.",
            "My friend is bisy becaus we have homework.",
            "My frend is bussy becose we have homework."
        ],

        explanation:
            "All the common exception words are spelled correctly in the first sentence.",

        difficulty: 2,
        correctAnswer: "My friend is busy because we have homework.",
        estimatedSeconds: 20,

        tags: ["english", "spelling", "common-exception-words"]
    }

    ]

};


export default commonExceptionWords1;

export {

    commonExceptionWords1

};