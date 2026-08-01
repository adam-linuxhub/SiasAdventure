import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const storyWriting: SkillContent = {

    skillId: "storyWriting",

    title: "Story Writing",

    description:
        "Learn how to plan and write stories using characters, settings, problems and endings.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-sw-001",
        skillId: "storyWriting",
        question:
            "What are the main parts of a story?",
        stage: "recognise",
        options: [
            "Beginning, middle and ending",
            "Title, picture and page number",
            "Question, answer and mark",
            "Start and stop only"
        ],

        explanation:
            "Most stories have a beginning, middle and ending.",

        difficulty: 1,
        correctAnswer: "Beginning, middle and ending",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-002",
        skillId: "storyWriting",
        question:
            "What is a character in a story?",
        stage: "recognise",
        options: [
            "A person or animal in the story",
            "The place where the story happens",
            "The title of the story",
            "The punctuation used"
        ],

        explanation:
            "Characters are the people, animals or creatures that take part in a story.",

        difficulty: 1,
        correctAnswer: "A person or animal in the story",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-003",
        skillId: "storyWriting",
        question:
            "What is the setting of a story?",
        stage: "recognise",
        options: [
            "Where and when the story happens",
            "The main character",
            "The ending",
            "The problem"
        ],

        explanation:
            "The setting tells the reader the place and time of the story.",

        difficulty: 1,
        correctAnswer: "Where and when the story happens",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-004",
        skillId: "storyWriting",
        question:
            "What usually happens at the beginning of a story?",
        stage: "recognise",
        options: [
            "Characters and setting are introduced",
            "The problem is solved",
            "The story ends",
            "All characters disappear"
        ],

        explanation:
            "The beginning introduces who, where and when.",

        difficulty: 1,
        correctAnswer: "Characters and setting are introduced",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-005",
        skillId: "storyWriting",
        question:
            "Why do stories often have a problem?",
        stage: "recognise",
        options: [
            "It creates something for the characters to solve",
            "It makes the story shorter",
            "It removes the characters",
            "It stops the story beginning"
        ],

        explanation:
            "Problems create excitement and move the story forward.",

        difficulty: 1,
        correctAnswer: "It creates something for the characters to solve",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-006",
        skillId: "storyWriting",
        question:
            "Which is a good story opening?",
        stage: "recognise",
        options: [
            "Ella opened the mysterious door and stepped inside.",
            "The end.",
            "A sentence with no meaning.",
            "Because the rain."
        ],

        explanation:
            "A good opening introduces action and makes the reader interested.",

        difficulty: 1,
        correctAnswer: "Ella opened the mysterious door and stepped inside.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-007",
        skillId: "storyWriting",
        question:
            "What makes a character interesting?",
        stage: "recognise",
        options: [
            "Their actions, thoughts and feelings",
            "Only their name",
            "Only their colour",
            "The number of letters in their name"
        ],

        explanation:
            "Details about characters help readers understand them.",

        difficulty: 1,
        correctAnswer: "Their actions, thoughts and feelings",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-008",
        skillId: "storyWriting",
        question:
            "Which detail helps describe a setting?",
        stage: "recognise",
        options: [
            "The dark forest with tall trees",
            "The character's name only",
            "The story title only",
            "A punctuation mark"
        ],

        explanation:
            "Descriptions help readers imagine where the story happens.",

        difficulty: 1,
        correctAnswer: "The dark forest with tall trees",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-009",
        skillId: "storyWriting",
        question:
            "What should happen in the middle of a story?",
        stage: "recognise",
        options: [
            "Events happen and characters face challenges",
            "Only the title is shown",
            "Nothing happens",
            "The ending is explained first"
        ],

        explanation:
            "The middle usually contains the main events and problem.",

        difficulty: 1,
        correctAnswer: "Events happen and characters face challenges",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-010",
        skillId: "storyWriting",
        question:
            "Why do writers plan stories before writing?",
        stage: "recognise",
        options: [
            "To organise ideas and structure the story",
            "To avoid having characters",
            "To remove all descriptions",
            "To make stories confusing"
        ],

        explanation:
            "Planning helps writers organise their ideas.",

        difficulty: 1,
        correctAnswer: "To organise ideas and structure the story",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-011",
        skillId: "storyWriting",
        question:
            "Which sentence creates the best atmosphere?",
        stage: "recognise",
        options: [
            "The cold wind howled through the empty forest.",
            "The forest was there.",
            "A tree existed.",
            "It happened."
        ],

        explanation:
            "Descriptive language helps create atmosphere.",

        difficulty: 2,
        correctAnswer: "The cold wind howled through the empty forest.",
        estimatedSeconds: 25,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-012",
        skillId: "storyWriting",
        question:
            "Which sentence shows a character's feelings?",
        stage: "recognise",
        options: [
            "Lily trembled because she was nervous.",
            "Lily walked.",
            "Lily had a name.",
            "Lily was there."
        ],

        explanation:
            "The sentence explains Lily's emotion.",

        difficulty: 2,
        correctAnswer: "Lily trembled because she was nervous.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-013",
        skillId: "storyWriting",
        question:
            "What is a resolution in a story?",
        stage: "recognise",
        options: [
            "How the problem is solved",
            "The name of the character",
            "The place where it happens",
            "The first sentence"
        ],

        explanation:
            "The resolution explains how the story problem is finished.",

        difficulty: 2,
        correctAnswer: "How the problem is solved",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-014",
        skillId: "storyWriting",
        question:
            "Which would improve a story?",
        stage: "recognise",
        options: [
            "Adding details about characters and settings",
            "Removing all descriptions",
            "Using the same sentence repeatedly",
            "Having no ending"
        ],

        explanation:
            "Details make stories more interesting for readers.",

        difficulty: 2,
        correctAnswer: "Adding details about characters and settings",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-015",
        skillId: "storyWriting",
        question:
            "Which word helps show the order of events in a story?",
        stage: "recognise",
        options: [
            "Suddenly",
            "Blue",
            "Chair",
            "Because"
        ],

        explanation:
            "'Suddenly' helps show when something unexpected happens.",

        difficulty: 2,
        correctAnswer: "Suddenly",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-016",
        skillId: "storyWriting",
        question:
            "A strong story ending should:",
        stage: "recognise",
        options: [
            "Finish the events and give the reader closure",
            "Introduce a new main character",
            "Start a different story",
            "Ignore the problem"
        ],

        explanation:
            "A good ending resolves the story.",

        difficulty: 2,
        correctAnswer: "Finish the events and give the reader closure",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-017",
        skillId: "storyWriting",
        question:
            "Which sentence uses imagination?",
        stage: "recognise",
        options: [
            "The dragon guarded a hidden cave beneath the mountain.",
            "The table was brown.",
            "The book was closed.",
            "The pencil was sharp."
        ],

        explanation:
            "Creative details help build an imaginative story world.",

        difficulty: 2,
        correctAnswer: "The dragon guarded a hidden cave beneath the mountain.",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-018",
        skillId: "storyWriting",
        question:
            "Why do writers use dialogue in stories?",
        stage: "recognise",
        options: [
            "To show what characters say and think",
            "To remove characters",
            "To avoid writing sentences",
            "To change the setting"
        ],

        explanation:
            "Dialogue helps readers understand characters.",

        difficulty: 2,
        correctAnswer: "To show what characters say and think",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-019",
        skillId: "storyWriting",
        question:
            "Before writing a story, it is useful to decide:",
        stage: "recognise",
        options: [
            "Who, where, what happens and how it ends",
            "Only the last word",
            "Only the title",
            "Nothing at all"
        ],

        explanation:
            "Planning key ideas helps create a structured story.",

        difficulty: 2,
        correctAnswer: "Who, where, what happens and how it ends",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    },

    {
        id: "eng-sw-020",
        skillId: "storyWriting",
        question:
            "A successful story usually has:",
        stage: "recognise",
        options: [
            "Interesting characters, a setting, events and an ending",
            "Only one sentence",
            "No characters",
            "No clear ideas"
        ],

        explanation:
            "Stories need structure and ideas that keep the reader interested.",

        difficulty: 2,
        correctAnswer: "Interesting characters, a setting, events and an ending",
        estimatedSeconds: 20,

        tags: ["english", "writing", "story-writing"]
    }

    ]

};


export default storyWriting;

export {

    storyWriting

};
