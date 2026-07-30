import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const sequencing: SkillContent = {

    skillId: "sequencing",

    title: "Sequencing Events",

    description:
        "Learn how to identify the order of events in a text using sequencing clues such as first, next, then and finally.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-seq-001",

        question:
            "Read the sentences:\n\n1. Mia put on her coat.\n2. Mia left the house.\n3. Mia picked up her school bag.\n\nWhat happened first?",

        options: [
            "Mia put on her coat.",
            "Mia left the house.",
            "Mia picked up her school bag.",
            "Mia arrived at school."
        ],

        answer: 0,

        explanation:
            "Putting on her coat happened before leaving the house.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-002",

        question:
            "Read the sentences:\n\nFirst, Tom planted a seed.\nNext, he watered it.\nFinally, the plant grew.\n\nWhat happened second?",

        options: [
            "Tom watered the seed.",
            "The plant grew.",
            "Tom picked a flower.",
            "Tom removed the plant."
        ],

        answer: 0,

        explanation:
            "The word 'Next' tells us what happened after planting the seed.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-003",

        question:
            "Which word often tells us something happened at the beginning?",

        options: [
            "First",
            "Finally",
            "After",
            "Last"
        ],

        answer: 0,

        explanation:
            "'First' introduces the beginning of a sequence.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-004",

        question:
            "Which word often tells us something happened at the end?",

        options: [
            "Finally",
            "Before",
            "Next",
            "First"
        ],

        answer: 0,

        explanation:
            "'Finally' usually introduces the last event.",

        difficulty: 1,

        estimatedSeconds: 15,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-005",

        question:
            "Read the sentences:\n\n1. Jake ate his breakfast.\n2. Jake woke up.\n3. Jake brushed his teeth.\n\nWhich order is correct?",

        options: [
            "Wake up → eat breakfast → brush teeth",
            "Brush teeth → wake up → eat breakfast",
            "Eat breakfast → brush teeth → wake up",
            "Wake up → brush teeth → eat breakfast"
        ],

        answer: 0,

        explanation:
            "Usually Jake wakes up before eating breakfast and brushing his teeth.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-006",

        question:
            "What does sequencing mean?",

        options: [
            "Putting events in the correct order",
            "Finding words that rhyme",
            "Counting sentences",
            "Learning spellings"
        ],

        answer: 0,

        explanation:
            "Sequencing means arranging events in the order they happen.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-007",

        question:
            "Read the sentences:\n\nFirst, Ella mixed the ingredients.\nThen, she baked the cake.\nFinally, she ate a slice.\n\nWhat happened last?",

        options: [
            "Ella ate a slice.",
            "Ella mixed the ingredients.",
            "Ella baked the cake.",
            "Ella bought a cake."
        ],

        answer: 0,

        explanation:
            "'Finally' shows the last event.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-008",

        question:
            "Which word could replace 'then' in a sequence?",

        options: [
            "Next",
            "Yesterday",
            "Never",
            "Because"
        ],

        answer: 0,

        explanation:
            "'Next' and 'then' both show what happens afterwards.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-009",

        question:
            "Read the sentences:\n\n1. The alarm rang.\n2. Sam got out of bed.\n3. Sam went downstairs.\n\nWhat happened last?",

        options: [
            "Sam went downstairs.",
            "The alarm rang.",
            "Sam got out of bed.",
            "Sam went back to sleep."
        ],

        answer: 0,

        explanation:
            "Going downstairs happened after waking up.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-010",

        question:
            "Why is sequencing important when reading?",

        options: [
            "It helps us understand what happened and when.",
            "It makes every story shorter.",
            "It changes the ending.",
            "It helps us spell every word."
        ],

        answer: 0,

        explanation:
            "Knowing the order of events helps us understand stories and instructions.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-011",

        question:
            "Read the passage:\n\nFirst, Lily filled a bowl with flour. Next, she added eggs. Then, she mixed everything together.\n\nWhat did Lily do after adding eggs?",

        options: [
            "She mixed everything together.",
            "She filled the bowl with flour.",
            "She ate the mixture.",
            "She washed the bowl."
        ],

        answer: 0,

        explanation:
            "'Then' tells us mixing happened after adding eggs.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-012",

        question:
            "Put these events in order:\n\nA. The seed became a plant.\nB. The seed was planted.\nC. The seed was watered.",

        options: [
            "B → C → A",
            "A → B → C",
            "C → A → B",
            "B → A → C"
        ],

        answer: 0,

        explanation:
            "A seed must be planted, watered and then it can grow.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-013",

        question:
            "Read the passage:\n\nAfter school, Noah finished his homework. Later, he played football.\n\nWhat did Noah do first?",

        options: [
            "Finished his homework.",
            "Played football.",
            "Went to school.",
            "Went shopping."
        ],

        answer: 0,

        explanation:
            "'After school' and 'later' show the order of events.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-014",

        question:
            "Which word shows something happened before something else?",

        options: [
            "Before",
            "Finally",
            "Next",
            "Then"
        ],

        answer: 0,

        explanation:
            "'Before' tells us an event happened earlier.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-015",

        question:
            "Read the passage:\n\nThe fox woke up. It searched for food. It returned to its den.\n\nWhat happened in the middle?",

        options: [
            "The fox searched for food.",
            "The fox woke up.",
            "The fox returned to its den.",
            "The fox went swimming."
        ],

        answer: 0,

        explanation:
            "The middle event happens between waking up and returning home.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-016",

        question:
            "Which sequence word means the same as 'after that'?",

        options: [
            "Then",
            "First",
            "Before",
            "Beginning"
        ],

        answer: 0,

        explanation:
            "'Then' tells us what happens after something else.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-017",

        question:
            "Read the passage:\n\nFirst, the children built a den. Next, they decorated it. Finally, they played inside it.\n\nWhat happened before decorating the den?",

        options: [
            "They built the den.",
            "They played inside it.",
            "They destroyed the den.",
            "They cleaned the garden."
        ],

        answer: 0,

        explanation:
            "'First' tells us what happened before the decoration.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-018",

        question:
            "Why do authors use words like first, next and finally?",

        options: [
            "To show the order of events",
            "To make words rhyme",
            "To add characters",
            "To change the setting"
        ],

        answer: 0,

        explanation:
            "Sequencing words guide the reader through the order of events.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-019",

        question:
            "Read the passage:\n\nMum cooked dinner. Before eating, the family washed their hands.\n\nWhat happened first?",

        options: [
            "Mum cooked dinner.",
            "The family ate dinner.",
            "The family washed their hands.",
            "The family went shopping."
        ],

        answer: 0,

        explanation:
            "Cooking dinner happened before washing hands and eating.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-020",

        question:
            "When sequencing a story, what should you look for?",

        options: [
            "Clues that show when events happen",
            "Only the longest sentence",
            "The first letter of every word",
            "The number of characters"
        ],

        answer: 0,

        explanation:
            "Time words and events help readers put a story in order.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    }

    ]

};