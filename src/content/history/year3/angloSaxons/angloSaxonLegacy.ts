import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const angloSaxonLegacy: SkillContent = {

    skillId: "angloSaxonLegacy",

    title: "The Legacy of the Anglo-Saxons",

    description:
        "Learn about how the Anglo-Saxons influenced Britain through language, place names, laws and culture.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[

    {
        id: "hist-asl-001",
        skillId: "angloSaxonLegacy",
        question:
            "What does 'legacy' mean?",
        stage: "recognise",
        options: [
            "Something from the past that still affects us today",
            "Something that will happen tomorrow",
            "A type of building",
            "A farming tool"
        ],

        explanation:
            "A legacy is something passed down from the past that continues to influence people.",

        difficulty: 1,
        correctAnswer: "Something from the past that still affects us today",
        estimatedSeconds: 20,
        hint: "Think about what continues long after people are gone.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-002",
        skillId: "angloSaxonLegacy",
        question:
            "What language did the Anglo-Saxons help develop?",
        stage: "recognise",
        options: [
            "English",
            "French",
            "Latin only",
            "Egyptian"
        ],

        explanation:
            "Old English spoken by the Anglo-Saxons helped develop the English language.",

        difficulty: 1,
        correctAnswer: "English",
        estimatedSeconds: 20,
        hint: "Consider which language you speak every day.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-003",
        skillId: "angloSaxonLegacy",
        question:
            "Why are some English place names linked to the Anglo-Saxons?",
        stage: "recognise",
        options: [
            "They named many settlements",
            "They built modern cities",
            "They replaced all languages",
            "They created computers"
        ],

        explanation:
            "Many place names have Anglo-Saxon origins.",

        difficulty: 1,
        correctAnswer: "They named many settlements",
        estimatedSeconds: 20,
        hint: "Place names can preserve clues from early settlers.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-004",
        skillId: "angloSaxonLegacy",
        question:
            "Which ending in a place name can come from Anglo-Saxon words?",
        stage: "recognise",
        options: [
            "-ham",
            "-city",
            "-airport",
            "-station"
        ],

        explanation:
            "The Anglo-Saxon word 'ham' meant village or settlement.",

        difficulty: 1,
        correctAnswer: "-ham",
        estimatedSeconds: 20,
        hint: "Some word endings reveal how places began.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-005",
        skillId: "angloSaxonLegacy",
        question:
            "Why do historians study Anglo-Saxon artefacts?",
        stage: "recognise",
        options: [
            "To learn about how people lived in the past",
            "To predict the future",
            "To create new technology",
            "To change history"
        ],

        explanation:
            "Artefacts provide evidence about past societies.",

        difficulty: 1,
        correctAnswer: "To learn about how people lived in the past",
        estimatedSeconds: 20,
        hint: "Objects can tell stories without using words.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-006",
        skillId: "angloSaxonLegacy",
        question:
            "What did Anglo-Saxons contribute to British culture?",
        stage: "recognise",
        options: [
            "Language, traditions and place names",
            "Modern computers",
            "Cars and roads",
            "Electricity"
        ],

        explanation:
            "Anglo-Saxon culture influenced many parts of Britain.",

        difficulty: 1,
        correctAnswer: "Language, traditions and place names",
        estimatedSeconds: 20,
        hint: "Think beyond inventions to lasting cultural ideas.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-007",
        skillId: "angloSaxonLegacy",
        question:
            "What evidence helps historians understand Anglo-Saxon life?",
        stage: "recognise",
        options: [
            "Buildings, objects and writings",
            "Modern films only",
            "Future inventions",
            "Computer games"
        ],

        explanation:
            "Historians use evidence from the past to learn about people.",

        difficulty: 1,
        correctAnswer: "Buildings, objects and writings",
        estimatedSeconds: 20,
        hint: "Historians combine different kinds of clues.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-008",
        skillId: "angloSaxonLegacy",
        question:
            "How did Anglo-Saxon settlements influence Britain?",
        stage: "recognise",
        options: [
            "Some became towns and villages that still exist today",
            "They disappeared without evidence",
            "They became Roman cities immediately",
            "They moved underwater"
        ],

        explanation:
            "Many settlements developed into places that still exist today.",

        difficulty: 1,
        correctAnswer: "Some became towns and villages that still exist today",
        estimatedSeconds: 20,
        hint: "Some villages have existed for hundreds of years.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-009",
        skillId: "angloSaxonLegacy",
        question:
            "Why are old English words important?",
        stage: "recognise",
        options: [
            "They show how the English language developed",
            "They replaced all languages",
            "They were modern inventions",
            "They are not studied"
        ],

        explanation:
            "Language changes over time and Anglo-Saxon words influenced English.",

        difficulty: 2,
        correctAnswer: "They show how the English language developed",
        estimatedSeconds: 20,
        hint: "Languages grow by borrowing and changing.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-010",
        skillId: "angloSaxonLegacy",
        question:
            "Which statement about Anglo-Saxon influence is true?",
        stage: "recognise",
        options: [
            "Their language and culture still influence Britain today",
            "They had no impact",
            "They lived in modern times",
            "They replaced all history"
        ],

        explanation:
            "Anglo-Saxon influence can still be seen today.",

        difficulty: 2,
        correctAnswer: "Their language and culture still influence Britain today",
        estimatedSeconds: 20,
        hint: "Look for something still visible today.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-011",
        skillId: "angloSaxonLegacy",
        question:
            "Why do place names help historians?",
        stage: "recognise",
        options: [
            "They give clues about people who lived there",
            "They show future events",
            "They are only modern labels",
            "They have no meaning"
        ],

        explanation:
            "Place names can reveal information about the past.",

        difficulty: 2,
        correctAnswer: "They give clues about people who lived there",
        estimatedSeconds: 20,
        hint: "Names often reveal who lived somewhere first.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-012",
        skillId: "angloSaxonLegacy",
        question:
            "What did monasteries preserve?",
        stage: "recognise",
        options: [
            "Books and written knowledge",
            "Cars",
            "Computers",
            "Modern machines"
        ],

        explanation:
            "Monasteries helped preserve important written records.",

        difficulty: 2,
        correctAnswer: "Books and written knowledge",
        estimatedSeconds: 20,
        hint: "Writing was precious before printing existed.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-013",
        skillId: "angloSaxonLegacy",
        question:
            "Why is Old English important?",
        stage: "recognise",
        options: [
            "It helped form the English language used today",
            "It was a Roman weapon",
            "It was a type of building",
            "It stopped language changing"
        ],

        explanation:
            "Old English was an early form of the English language.",

        difficulty: 2,
        correctAnswer: "It helped form the English language used today",
        estimatedSeconds: 20,
        hint: "Today's English has very old roots.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-014",
        skillId: "angloSaxonLegacy",
        question:
            "What can coins and jewellery tell historians?",
        stage: "recognise",
        options: [
            "Information about people and their lives",
            "Future inventions",
            "Modern technology",
            "Weather forecasts"
        ],

        explanation:
            "Objects can provide clues about past societies.",

        difficulty: 2,
        correctAnswer: "Information about people and their lives",
        estimatedSeconds: 20,
        hint: "Small objects can reveal big historical clues.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-015",
        skillId: "angloSaxonLegacy",
        question:
            "Why is the Anglo-Saxon period important?",
        stage: "recognise",
        options: [
            "It helped shape England before the Norman invasion",
            "It happened recently",
            "It had no effect",
            "It came before the Stone Age"
        ],

        explanation:
            "The Anglo-Saxon period was an important part of English history.",

        difficulty: 2,
        correctAnswer: "It helped shape England before the Norman invasion",
        estimatedSeconds: 20,
        hint: "Think about England before 1066.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-016",
        skillId: "angloSaxonLegacy",
        question:
            "What is one way Anglo-Saxons influenced Britain?",
        stage: "recognise",
        options: [
            "Through language and settlements",
            "Through modern technology",
            "Through space travel",
            "Through cars"
        ],

        explanation:
            "Language and settlements are important examples of Anglo-Saxon influence.",

        difficulty: 2,
        correctAnswer: "Through language and settlements",
        estimatedSeconds: 20,
        hint: "Influence can be cultural as well as physical.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-017",
        skillId: "angloSaxonLegacy",
        question:
            "Why do historians use many different sources?",
        stage: "recognise",
        options: [
            "To get a clearer picture of the past",
            "To avoid evidence",
            "To make guesses only",
            "To ignore history"
        ],

        explanation:
            "Different sources help historians understand events more accurately.",

        difficulty: 2,
        correctAnswer: "To get a clearer picture of the past",
        estimatedSeconds: 20,
        hint: "One source rarely tells the whole story.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-018",
        skillId: "angloSaxonLegacy",
        question:
            "Which is an example of Anglo-Saxon influence today?",
        stage: "recognise",
        options: [
            "Words and place names",
            "Modern computers",
            "Air travel",
            "Electric cars"
        ],

        explanation:
            "Anglo-Saxon words and place names remain part of Britain today.",

        difficulty: 2,
        correctAnswer: "Words and place names",
        estimatedSeconds: 20,
        hint: "Not every influence is a building or invention.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-019",
        skillId: "angloSaxonLegacy",
        question:
            "What does history help us understand?",
        stage: "recognise",
        options: [
            "How people and societies changed over time",
            "Only the future",
            "Modern inventions only",
            "Nothing about people"
        ],

        explanation:
            "History helps us understand changes in human societies.",

        difficulty: 2,
        correctAnswer: "How people and societies changed over time",
        estimatedSeconds: 20,
        hint: "History explains change across generations.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    },

    {
        id: "hist-asl-020",
        skillId: "angloSaxonLegacy",
        question:
            "Which sentence best describes the Anglo-Saxon legacy?",
        stage: "recognise",
        options: [
            "Anglo-Saxons influenced Britain's language, culture and settlements",
            "Anglo-Saxons had no influence",
            "They only built roads",
            "They lived in modern times"
        ],

        explanation:
            "Anglo-Saxon influence remains visible in Britain today.",

        difficulty: 2,
        correctAnswer: "Anglo-Saxons influenced Britain's language, culture and settlements",
        estimatedSeconds: 25,
        hint: "Think about ideas that remain, not disappear.",

        tags: ["history", "year3", "anglo-saxons", "legacy"]
    }

    ]

};


export default angloSaxonLegacy;

export {

    angloSaxonLegacy

};