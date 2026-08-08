import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const summarising: SkillContent = {

    skillId: "summarising",

    title: "Summarising",

    description:
        "Learn how to identify the most important information in a text and explain it briefly.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-sum-001",
        skillId: "summarising",
        question:
            "Read the passage:\n\nTom woke up early. He brushed his teeth, ate breakfast and walked to school.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Tom got ready for school.",
            "Tom brushed his teeth.",
            "Tom ate breakfast.",
            "Tom walked."
        ],

        explanation:
            "A summary gives the main idea instead of every small detail.",

        difficulty: 1,
        correctAnswer: "Tom got ready for school.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-002",
        skillId: "summarising",
        question:
            "What is a summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "A short explanation of the main points",
            "A copy of every sentence",
            "A list of difficult words",
            "A new story"
        ],

        explanation:
            "A summary gives the important information in fewer words.",

        difficulty: 1,
        correctAnswer: "A short explanation of the main points",
        estimatedSeconds: 15,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-003",
        skillId: "summarising",
        question:
            "Read the passage:\n\nAva planted seeds in her garden. She watered them every day. Soon, colourful flowers grew.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Ava grew flowers by planting and caring for seeds.",
            "Ava used a watering can.",
            "The flowers were colourful.",
            "Ava had a garden."
        ],

        explanation:
            "The summary combines the main events rather than one small detail.",

        difficulty: 1,
        correctAnswer: "Ava grew flowers by planting and caring for seeds.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-004",
        skillId: "summarising",
        question:
            "When writing a summary, which information should you include?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "The most important ideas",
            "Every single detail",
            "Your favourite part only",
            "Only the first sentence"
        ],

        explanation:
            "Summaries focus on the key information.",

        difficulty: 1,
        correctAnswer: "The most important ideas",
        estimatedSeconds: 15,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-005",
        skillId: "summarising",
        question:
            "Read the passage:\n\nThe puppy was hungry. Sam gave it some food and fresh water. The puppy wagged its tail happily.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Sam cared for a hungry puppy.",
            "The puppy wagged its tail.",
            "The puppy drank water.",
            "Sam gave food."
        ],

        explanation:
            "The summary includes the main idea of the whole passage.",

        difficulty: 1,
        correctAnswer: "Sam cared for a hungry puppy.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-006",
        skillId: "summarising",
        question:
            "Which should you remove when writing a summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Unimportant details",
            "The main idea",
            "Important events",
            "Key information"
        ],

        explanation:
            "A summary leaves out details that are not needed.",

        difficulty: 1,
        correctAnswer: "Unimportant details",
        estimatedSeconds: 15,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-007",
        skillId: "summarising",
        question:
            "Read the passage:\n\nThe castle had tall towers, stone walls and a large wooden door. It was built hundreds of years ago.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "The castle was an old building with strong features.",
            "The castle had a wooden door.",
            "The castle had towers.",
            "The castle had stone walls."
        ],

        explanation:
            "The summary combines the important information.",

        difficulty: 1,
        correctAnswer: "The castle was an old building with strong features.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-008",
        skillId: "summarising",
        question:
            "Which word means the same as 'main idea'?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Key point",
            "Tiny detail",
            "Example",
            "Question"
        ],

        explanation:
            "The main idea is the key point of a text.",

        difficulty: 1,
        correctAnswer: "Key point",
        estimatedSeconds: 15,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-009",
        skillId: "summarising",
        question:
            "Read the passage:\n\nBen trained every week for the race. He practised running and improved his speed.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Ben prepared for a race through practice.",
            "Ben ran every week.",
            "Ben improved his speed.",
            "Ben entered a race."
        ],

        explanation:
            "The summary explains the overall idea.",

        difficulty: 1,
        correctAnswer: "Ben prepared for a race through practice.",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-010",
        skillId: "summarising",
        question:
            "Why do readers write summaries?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "To show they understand the important parts of a text",
            "To make the story longer",
            "To copy the whole text",
            "To change the story"
        ],

        explanation:
            "A summary shows understanding of the key information.",

        difficulty: 1,
        correctAnswer: "To show they understand the important parts of a text",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-011",
        skillId: "summarising",
        question:
            "Read the passage:\n\nThe Earth travels around the Sun. It takes one year to complete its journey. This movement causes the seasons.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Earth's movement around the Sun causes seasons.",
            "Earth travels around the Sun.",
            "A year has twelve months.",
            "The Sun is bright."
        ],

        explanation:
            "The summary includes the main idea and important information.",

        difficulty: 2,
        correctAnswer: "Earth's movement around the Sun causes seasons.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-012",
        skillId: "summarising",
        question:
            "Read the passage:\n\nThe rainforest is home to many plants and animals. Some animals cannot be found anywhere else in the world.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Rainforests are important habitats for many living things.",
            "Rainforests have plants.",
            "Rainforests have animals.",
            "Some animals are unusual."
        ],

        explanation:
            "The best summary covers the whole passage.",

        difficulty: 2,
        correctAnswer: "Rainforests are important habitats for many living things.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-013",
        skillId: "summarising",
        question:
            "Which sentence would be least useful in a summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "A tiny detail that does not affect the main idea",
            "The main event",
            "The important message",
            "The key information"
        ],

        explanation:
            "Small details that do not matter should usually be left out.",

        difficulty: 2,
        correctAnswer: "A tiny detail that does not affect the main idea",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-014",
        skillId: "summarising",
        question:
            "Read the passage:\n\nA group of children cleaned a local park. They collected rubbish and planted flowers.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Children improved their local park.",
            "Children collected rubbish.",
            "Children planted flowers.",
            "Children visited a park."
        ],

        explanation:
            "The summary combines both actions into the main idea.",

        difficulty: 2,
        correctAnswer: "Children improved their local park.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-015",
        skillId: "summarising",
        question:
            "A good summary should usually be:",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Shorter than the original text",
            "Longer than the original text",
            "Exactly the same as the text",
            "Only one word"
        ],

        explanation:
            "A summary gives the main points in fewer words.",

        difficulty: 2,
        correctAnswer: "Shorter than the original text",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-016",
        skillId: "summarising",
        question:
            "Read the passage:\n\nThe astronaut put on a spacesuit, entered the rocket and travelled into space.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "An astronaut travelled into space.",
            "The astronaut wore a spacesuit.",
            "The astronaut entered a rocket.",
            "The rocket was large."
        ],

        explanation:
            "The summary gives the main event.",

        difficulty: 2,
        correctAnswer: "An astronaut travelled into space.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-017",
        skillId: "summarising",
        question:
            "What question can help you find the main idea?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "What is this text mostly about?",
            "What is the longest word?",
            "How many letters are there?",
            "Who wrote every sentence?"
        ],

        explanation:
            "Thinking about what the text is mostly about helps identify the main idea.",

        difficulty: 2,
        correctAnswer: "What is this text mostly about?",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-018",
        skillId: "summarising",
        question:
            "Read the passage:\n\nDogs make good pets because they can be friendly, loyal and helpful companions.\n\nWhich is the best summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Dogs can be good companions.",
            "Dogs have fur.",
            "Dogs eat food.",
            "Dogs have tails."
        ],

        explanation:
            "The summary captures the main point about dogs as pets.",

        difficulty: 2,
        correctAnswer: "Dogs can be good companions.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-019",
        skillId: "summarising",
        question:
            "Which skill helps you write a good summary?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "Identifying important information",
            "Memorising every word",
            "Changing the ending",
            "Adding extra details"
        ],

        explanation:
            "Good summaries depend on finding the most important information.",

        difficulty: 2,
        correctAnswer: "Identifying important information",
        estimatedSeconds: 20,

        tags: ["english", "reading", "summarising"]
    },

    {
        id: "eng-sum-020",
        skillId: "summarising",
        question:
            "Which summary is best for a story about a child learning to ride a bike?",
        stage: "recognise",
        hint: "Choose the main idea, not every small detail.",
        options: [
            "A child practised and learned to ride a bike.",
            "The bike had two wheels.",
            "The child wore a helmet.",
            "The child had a blue bike."
        ],

        explanation:
            "The best summary describes the main event rather than small details.",

        difficulty: 2,
        correctAnswer: "A child practised and learned to ride a bike.",
        estimatedSeconds: 25,

        tags: ["english", "reading", "summarising"]
    }

    ]

};


export default summarising;

export {

    summarising

};