import {
    MultipleChoiceActivity,
    SkillContent
} from "../../types";

export const storyWriting: SkillContent = {

    skillId: "storyWriting",

    title: "Story Writing",

    description:
        "Learn how to plan and write stories using characters, settings, problems and endings.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-sw-001",

        question:
            "What are the main parts of a story?",

        options: [
            "Beginning, middle and ending",
            "Title, picture and page number",
            "Question, answer and mark",
            "Start and stop only"
        ],

        answer: 0,

        explanation:
            "Most stories have a beginning, middle and ending.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-002",

        question:
            "What is a character in a story?",

        options: [
            "A person or animal in the story",
            "The place where the story happens",
            "The title of the story",
            "The punctuation used"
        ],

        answer: 0,

        explanation:
            "Characters are the people, animals or creatures that take part in a story.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-003",

        question:
            "What is the setting of a story?",

        options: [
            "Where and when the story happens",
            "The main character",
            "The ending",
            "The problem"
        ],

        answer: 0,

        explanation:
            "The setting tells the reader the place and time of the story.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-004",

        question:
            "What usually happens at the beginning of a story?",

        options: [
            "Characters and setting are introduced",
            "The problem is solved",
            "The story ends",
            "All characters disappear"
        ],

        answer: 0,

        explanation:
            "The beginning introduces who, where and when.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-005",

        question:
            "Why do stories often have a problem?",

        options: [
            "It creates something for the characters to solve",
            "It makes the story shorter",
            "It removes the characters",
            "It stops the story beginning"
        ],

        answer: 0,

        explanation:
            "Problems create excitement and move the story forward.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-006",

        question:
            "Which is a good story opening?",

        options: [
            "Ella opened the mysterious door and stepped inside.",
            "The end.",
            "A sentence with no meaning.",
            "Because the rain."
        ],

        answer: 0,

        explanation:
            "A good opening introduces action and makes the reader interested.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-007",

        question:
            "What makes a character interesting?",

        options: [
            "Their actions, thoughts and feelings",
            "Only their name",
            "Only their colour",
            "The number of letters in their name"
        ],

        answer: 0,

        explanation:
            "Details about characters help readers understand them.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-008",

        question:
            "Which detail helps describe a setting?",

        options: [
            "The dark forest with tall trees",
            "The character's name only",
            "The story title only",
            "A punctuation mark"
        ],

        answer: 0,

        explanation:
            "Descriptions help readers imagine where the story happens.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-009",

        question:
            "What should happen in the middle of a story?",

        options: [
            "Events happen and characters face challenges",
            "Only the title is shown",
            "Nothing happens",
            "The ending is explained first"
        ],

        answer: 0,

        explanation:
            "The middle usually contains the main events and problem.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-010",

        question:
            "Why do writers plan stories before writing?",

        options: [
            "To organise ideas and structure the story",
            "To avoid having characters",
            "To remove all descriptions",
            "To make stories confusing"
        ],

        answer: 0,

        explanation:
            "Planning helps writers organise their ideas.",

        difficulty: 1,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-011",

        question:
            "Which sentence creates the best atmosphere?",

        options: [
            "The cold wind howled through the empty forest.",
            "The forest was there.",
            "A tree existed.",
            "It happened."
        ],

        answer: 0,

        explanation:
            "Descriptive language helps create atmosphere.",

        difficulty: 2,

        estimatedSeconds: 25,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-012",

        question:
            "Which sentence shows a character's feelings?",

        options: [
            "Lily trembled because she was nervous.",
            "Lily walked.",
            "Lily had a name.",
            "Lily was there."
        ],

        answer: 0,

        explanation:
            "The sentence explains Lily's emotion.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-013",

        question:
            "What is a resolution in a story?",

        options: [
            "How the problem is solved",
            "The name of the character",
            "The place where it happens",
            "The first sentence"
        ],

        answer: 0,

        explanation:
            "The resolution explains how the story problem is finished.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-014",

        question:
            "Which would improve a story?",

        options: [
            "Adding details about characters and settings",
            "Removing all descriptions",
            "Using the same sentence repeatedly",
            "Having no ending"
        ],

        answer: 0,

        explanation:
            "Details make stories more interesting for readers.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-015",

        question:
            "Which word helps show the order of events in a story?",

        options: [
            "Suddenly",
            "Blue",
            "Chair",
            "Because"
        ],

        answer: 0,

        explanation:
            "'Suddenly' helps show when something unexpected happens.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-016",

        question:
            "A strong story ending should:",

        options: [
            "Finish the events and give the reader closure",
            "Introduce a new main character",
            "Start a different story",
            "Ignore the problem"
        ],

        answer: 0,

        explanation:
            "A good ending resolves the story.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-017",

        question:
            "Which sentence uses imagination?",

        options: [
            "The dragon guarded a hidden cave beneath the mountain.",
            "The table was brown.",
            "The book was closed.",
            "The pencil was sharp."
        ],

        answer: 0,

        explanation:
            "Creative details help build an imaginative story world.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-018",

        question:
            "Why do writers use dialogue in stories?",

        options: [
            "To show what characters say and think",
            "To remove characters",
            "To avoid writing sentences",
            "To change the setting"
        ],

        answer: 0,

        explanation:
            "Dialogue helps readers understand characters.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-019",

        question:
            "Before writing a story, it is useful to decide:",

        options: [
            "Who, where, what happens and how it ends",
            "Only the last word",
            "Only the title",
            "Nothing at all"
        ],

        answer: 0,

        explanation:
            "Planning key ideas helps create a structured story.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-020",

        question:
            "A successful story usually has:",

        options: [
            "Interesting characters, a setting, events and an ending",
            "Only one sentence",
            "No characters",
            "No clear ideas"
        ],

        answer: 0,

        explanation:
            "Stories need structure and ideas that keep the reader interested.",

        difficulty: 2,

        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    }

    ]

};