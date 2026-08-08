import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const sequencing: SkillContent = {

    skillId: "sequencing",

    title: "Sequencing Events",

    description:
        "Learn how to identify the order of events in a text using sequencing clues such as first, next, then and finally.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-seq-001",
        skillId: "sequencing",
        question:
            "Read the sentences:\n\n1. Mia put on her coat.\n2. Mia left the house.\n3. Mia picked up her school bag.\n\nWhat happened first?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Mia put on her coat.",
            "Mia left the house.",
            "Mia picked up her school bag.",
            "Mia arrived at school."
        ],

        explanation:
            "Putting on her coat happened before leaving the house.",

        difficulty: 1,
        correctAnswer: "Mia put on her coat.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-002",
        skillId: "sequencing",
        question:
            "Read the sentences:\n\nFirst, Tom planted a seed.\nNext, he watered it.\nFinally, the plant grew.\n\nWhat happened second?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Tom watered the seed.",
            "The plant grew.",
            "Tom picked a flower.",
            "Tom removed the plant."
        ],

        explanation:
            "The word 'Next' tells us what happened after planting the seed.",

        difficulty: 1,
        correctAnswer: "Tom watered the seed.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-003",
        skillId: "sequencing",
        question:
            "Which word often tells us something happened at the beginning?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "First",
            "Finally",
            "After",
            "Last"
        ],

        explanation:
            "'First' introduces the beginning of a sequence.",

        difficulty: 1,
        correctAnswer: "First",
        estimatedSeconds: 15,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-004",
        skillId: "sequencing",
        question:
            "Which word often tells us something happened at the end?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Finally",
            "Before",
            "Next",
            "First"
        ],

        explanation:
            "'Finally' usually introduces the last event.",

        difficulty: 1,
        correctAnswer: "Finally",
        estimatedSeconds: 15,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-005",
        skillId: "sequencing",
        question:
            "Read the sentences:\n\n1. Jake ate his breakfast.\n2. Jake woke up.\n3. Jake brushed his teeth.\n\nWhich order is correct?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Wake up → eat breakfast → brush teeth",
            "Brush teeth → wake up → eat breakfast",
            "Eat breakfast → brush teeth → wake up",
            "Wake up → brush teeth → eat breakfast"
        ],

        explanation:
            "Usually Jake wakes up before eating breakfast and brushing his teeth.",

        difficulty: 1,
        correctAnswer: "Wake up → eat breakfast → brush teeth",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-006",
        skillId: "sequencing",
        question:
            "What does sequencing mean?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Putting events in the correct order",
            "Finding words that rhyme",
            "Counting sentences",
            "Learning spellings"
        ],

        explanation:
            "Sequencing means arranging events in the order they happen.",

        difficulty: 1,
        correctAnswer: "Putting events in the correct order",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-007",
        skillId: "sequencing",
        question:
            "Read the sentences:\n\nFirst, Ella mixed the ingredients.\nThen, she baked the cake.\nFinally, she ate a slice.\n\nWhat happened last?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Ella ate a slice.",
            "Ella mixed the ingredients.",
            "Ella baked the cake.",
            "Ella bought a cake."
        ],

        explanation:
            "'Finally' shows the last event.",

        difficulty: 1,
        correctAnswer: "Ella ate a slice.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-008",
        skillId: "sequencing",
        question:
            "Which word could replace 'then' in a sequence?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Next",
            "Yesterday",
            "Never",
            "Because"
        ],

        explanation:
            "'Next' and 'then' both show what happens afterwards.",

        difficulty: 1,
        correctAnswer: "Next",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-009",
        skillId: "sequencing",
        question:
            "Read the sentences:\n\n1. The alarm rang.\n2. Sam got out of bed.\n3. Sam went downstairs.\n\nWhat happened last?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Sam went downstairs.",
            "The alarm rang.",
            "Sam got out of bed.",
            "Sam went back to sleep."
        ],

        explanation:
            "Going downstairs happened after waking up.",

        difficulty: 1,
        correctAnswer: "Sam went downstairs.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-010",
        skillId: "sequencing",
        question:
            "Why is sequencing important when reading?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "It helps us understand what happened and when.",
            "It makes every story shorter.",
            "It changes the ending.",
            "It helps us spell every word."
        ],

        explanation:
            "Knowing the order of events helps us understand stories and instructions.",

        difficulty: 1,
        correctAnswer: "It helps us understand what happened and when.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-011",
        skillId: "sequencing",
        question:
            "Read the passage:\n\nFirst, Lily filled a bowl with flour. Next, she added eggs. Then, she mixed everything together.\n\nWhat did Lily do after adding eggs?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "She mixed everything together.",
            "She filled the bowl with flour.",
            "She ate the mixture.",
            "She washed the bowl."
        ],

        explanation:
            "'Then' tells us mixing happened after adding eggs.",

        difficulty: 2,
        correctAnswer: "She mixed everything together.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-012",
        skillId: "sequencing",
        question:
            "Put these events in order:\n\nA. The seed became a plant.\nB. The seed was planted.\nC. The seed was watered.",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "B → C → A",
            "A → B → C",
            "C → A → B",
            "B → A → C"
        ],

        explanation:
            "A seed must be planted, watered and then it can grow.",

        difficulty: 2,
        correctAnswer: "B → C → A",
        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-013",
        skillId: "sequencing",
        question:
            "Read the passage:\n\nAfter school, Noah finished his homework. Later, he played football.\n\nWhat did Noah do first?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Finished his homework.",
            "Played football.",
            "Went to school.",
            "Went shopping."
        ],

        explanation:
            "'After school' and 'later' show the order of events.",

        difficulty: 2,
        correctAnswer: "Finished his homework.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-014",
        skillId: "sequencing",
        question:
            "Which word shows something happened before something else?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Before",
            "Finally",
            "Next",
            "Then"
        ],

        explanation:
            "'Before' tells us an event happened earlier.",

        difficulty: 2,
        correctAnswer: "Before",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-015",
        skillId: "sequencing",
        question:
            "Read the passage:\n\nThe fox woke up. It searched for food. It returned to its den.\n\nWhat happened in the middle?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "The fox searched for food.",
            "The fox woke up.",
            "The fox returned to its den.",
            "The fox went swimming."
        ],

        explanation:
            "The middle event happens between waking up and returning home.",

        difficulty: 2,
        correctAnswer: "The fox searched for food.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-016",
        skillId: "sequencing",
        question:
            "Which sequence word means the same as 'after that'?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Then",
            "First",
            "Before",
            "Beginning"
        ],

        explanation:
            "'Then' tells us what happens after something else.",

        difficulty: 2,
        correctAnswer: "Then",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-017",
        skillId: "sequencing",
        question:
            "Read the passage:\n\nFirst, the children built a den. Next, they decorated it. Finally, they played inside it.\n\nWhat happened before decorating the den?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "They built the den.",
            "They played inside it.",
            "They destroyed the den.",
            "They cleaned the garden."
        ],

        explanation:
            "'First' tells us what happened before the decoration.",

        difficulty: 2,
        correctAnswer: "They built the den.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-018",
        skillId: "sequencing",
        question:
            "Why do authors use words like first, next and finally?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "To show the order of events",
            "To make words rhyme",
            "To add characters",
            "To change the setting"
        ],

        explanation:
            "Sequencing words guide the reader through the order of events.",

        difficulty: 2,
        correctAnswer: "To show the order of events",
        estimatedSeconds: 20,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-019",
        skillId: "sequencing",
        question:
            "Read the passage:\n\nMum cooked dinner. Before eating, the family washed their hands.\n\nWhat happened first?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Mum cooked dinner.",
            "The family ate dinner.",
            "The family washed their hands.",
            "The family went shopping."
        ],

        explanation:
            "Cooking dinner happened before washing hands and eating.",

        difficulty: 2,
        correctAnswer: "Mum cooked dinner.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    },

    {
        id: "eng-seq-020",
        skillId: "sequencing",
        question:
            "When sequencing a story, what should you look for?",
        stage: "recognise",
        hint: "Look for the order that events happened.",
        options: [
            "Clues that show when events happen",
            "Only the longest sentence",
            "The first letter of every word",
            "The number of characters"
        ],

        explanation:
            "Time words and events help readers put a story in order.",

        difficulty: 2,
        correctAnswer: "Clues that show when events happen",
        estimatedSeconds: 25,

        tags: ["english", "reading", "sequencing"]
    }

    ]

};


export default sequencing;

export {

    sequencing

};