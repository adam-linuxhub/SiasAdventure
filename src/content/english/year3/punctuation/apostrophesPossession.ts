import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const apostrophesPossession: SkillContent = {

    skillId: "apostrophesPossession",

    title: "Apostrophes for Possession",

    description:
        "Learn how apostrophes show that something belongs to someone or something.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "eng-aposposs-001",
        skillId: "apostrophesPossession",
        question: "What does an apostrophe for possession show?",

        options: [
            "That something belongs to someone",
            "That a sentence is a question",
            "That letters are missing",
            "That a sentence has ended"
        ],

        explanation:
            "A possessive apostrophe shows ownership.",

        difficulty: 1,
        correctAnswer: "That something belongs to someone",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-002",
        skillId: "apostrophesPossession",
        question: "Which sentence shows that the bone belongs to the dog?",

        options: [
            "The dog's bone.",
            "The dogs bone.",
            "The dog's' bone.",
            "The dogs bone."
        ],

        explanation:
            "The apostrophe before the 's' shows the bone belongs to the dog.",

        difficulty: 1,
        correctAnswer: "The dog's bone.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-003",
        skillId: "apostrophesPossession",
        question: "Which sentence is correct?",

        options: [
            "Sophie's bag is blue.",
            "Sophies bag is blue.",
            "Sophie's' bag is blue.",
            "Sophies bag is blue."
        ],

        explanation:
            "The bag belongs to Sophie, so we write 'Sophie's bag'.",

        difficulty: 1,
        correctAnswer: "Sophie's bag is blue.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-004",
        skillId: "apostrophesPossession",
        question: "Which phrase means the tail belongs to the cat?",

        options: [
            "The cat's tail",
            "The cats tail",
            "The cat tail",
            "The cat's' tail"
        ],

        explanation:
            "The apostrophe shows the tail belongs to the cat.",

        difficulty: 1,
        correctAnswer: "The cat's tail",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-005",
        skillId: "apostrophesPossession",
        question: "Where does the apostrophe go in 'Ben book'?",

        options: [
            "Ben's book",
            "Bens' book",
            "Bens book",
            "Ben book'"
        ],

        explanation:
            "The book belongs to Ben, so add apostrophe + s.",

        difficulty: 1,
        correctAnswer: "Ben's book",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-006",
        skillId: "apostrophesPossession",
        question: "Which phrase is correct?",

        options: [
            "The bird's nest",
            "The birds nest",
            "The birds' nest",
            "The bird nest"
        ],

        explanation:
            "The nest belongs to one bird, so use apostrophe + s.",

        difficulty: 1,
        correctAnswer: "The bird's nest",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-007",
        skillId: "apostrophesPossession",
        question: "Which sentence is correct?",

        options: [
            "The teacher's desk is tidy.",
            "The teachers desk is tidy.",
            "The teacher desk is tidy.",
            "The teacher's' desk is tidy."
        ],

        explanation:
            "The desk belongs to one teacher.",

        difficulty: 1,
        correctAnswer: "The teacher's desk is tidy.",
        estimatedSeconds: 15,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-008",
        skillId: "apostrophesPossession",
        question: "What belongs to Emma in 'Emma's coat'?",

        options: [
            "The coat",
            "Emma",
            "The apostrophe",
            "The sentence"
        ],

        explanation:
            "The apostrophe shows the coat belongs to Emma.",

        difficulty: 1,
        correctAnswer: "The coat",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-009",
        skillId: "apostrophesPossession",
        question: "Which sentence needs a possessive apostrophe?",

        options: [
            "The girl hat is red.",
            "The girl is happy.",
            "The hat is red.",
            "The girl ran home."
        ],

        explanation:
            "The hat belongs to the girl, so write 'The girl's hat'.",

        difficulty: 1,
        correctAnswer: "The girl hat is red.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-010",
        skillId: "apostrophesPossession",
        question: "What does 'Jack's bike' mean?",

        options: [
            "The bike belongs to Jack.",
            "Jack is riding a bike.",
            "Jack likes bikes.",
            "Jack bought a bike."
        ],

        explanation:
            "The apostrophe shows ownership.",

        difficulty: 1,
        correctAnswer: "The bike belongs to Jack.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-011",
        skillId: "apostrophesPossession",
        question: "Which sentence is written correctly?",

        options: [
            "The rabbit's ears are long.",
            "The rabbits ears are long.",
            "The rabbit ears are long.",
            "The rabbit's' ears are long."
        ],

        explanation:
            "The ears belong to one rabbit.",

        difficulty: 2,
        correctAnswer: "The rabbit's ears are long.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-012",
        skillId: "apostrophesPossession",
        question: "Which phrase shows the toy belongs to Mia?",

        options: [
            "Mia's toy",
            "Mias toy",
            "Mias' toy",
            "Mia toy"
        ],

        explanation:
            "The apostrophe + s shows that the toy belongs to Mia.",

        difficulty: 2,
        correctAnswer: "Mia's toy",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-013",
        skillId: "apostrophesPossession",
        question: "Which sentence uses a possessive apostrophe correctly?",

        options: [
            "The lion's roar was loud.",
            "The lions roar was loud.",
            "The lion roar was loud.",
            "The lion's' roar was loud."
        ],

        explanation:
            "The roar belongs to the lion.",

        difficulty: 2,
        correctAnswer: "The lion's roar was loud.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-014",
        skillId: "apostrophesPossession",
        question: "Which sentence is correct?",

        options: [
            "Oliver's pencil is sharp.",
            "Olivers pencil is sharp.",
            "Oliver pencil is sharp.",
            "Oliver's' pencil is sharp."
        ],

        explanation:
            "The pencil belongs to Oliver.",

        difficulty: 2,
        correctAnswer: "Oliver's pencil is sharp.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-015",
        skillId: "apostrophesPossession",
        question: "What does the apostrophe show in 'the baby's blanket'?",

        options: [
            "The blanket belongs to the baby.",
            "The baby is missing letters.",
            "The sentence is a question.",
            "The sentence has finished."
        ],

        explanation:
            "A possessive apostrophe shows ownership.",

        difficulty: 2,
        correctAnswer: "The blanket belongs to the baby.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-016",
        skillId: "apostrophesPossession",
        question: "Choose the correctly written phrase.",

        options: [
            "The farmer's tractor",
            "The farmers tractor",
            "The farmer tractor",
            "The farmer's' tractor"
        ],

        explanation:
            "The tractor belongs to one farmer.",

        difficulty: 2,
        correctAnswer: "The farmer's tractor",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-017",
        skillId: "apostrophesPossession",
        question: "Which sentence shows ownership?",

        options: [
            "The pirate's treasure was hidden.",
            "The pirate found treasure.",
            "The pirate sailed away.",
            "The pirate is brave."
        ],

        explanation:
            "The treasure belongs to the pirate.",

        difficulty: 2,
        correctAnswer: "The pirate's treasure was hidden.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-018",
        skillId: "apostrophesPossession",
        question: "Which phrase is correct?",

        options: [
            "The queen's crown",
            "The queens crown",
            "The queen crown",
            "The queen's' crown"
        ],

        explanation:
            "The crown belongs to the queen.",

        difficulty: 2,
        correctAnswer: "The queen's crown",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-019",
        skillId: "apostrophesPossession",
        question: "Why do writers use possessive apostrophes?",

        options: [
            "To show ownership",
            "To ask questions",
            "To end sentences",
            "To separate lists"
        ],

        explanation:
            "Possessive apostrophes tell readers who owns something.",

        difficulty: 2,
        correctAnswer: "To show ownership",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    },

    {
        id: "eng-aposposs-020",
        skillId: "apostrophesPossession",
        question: "Which sentence is completely correct?",

        options: [
            "Sophie's cat chased Ben's ball.",
            "Sophies cat chased Ben's ball.",
            "Sophie's cat chased Bens ball.",
            "Sophies cat chased Bens ball."
        ],

        explanation:
            "Both 'Sophie's' and 'Ben's' correctly use apostrophes to show ownership.",

        difficulty: 2,
        correctAnswer: "Sophie's cat chased Ben's ball.",
        estimatedSeconds: 20,

        tags: ["english", "punctuation", "apostrophes", "possession"]
    }

    ]

};