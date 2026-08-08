import {
MultipleChoiceActivity,
SkillContent
} from "../../../types";

const lifeCycleOfFloweringPlants: SkillContent = {

skillId: "life-cycle-of-flowering-plants",

title: "Life Cycle of Flowering Plants",

description:
    "Learn how flowering plants grow, reproduce and make new plants.",

version: 1,

activities: <MultipleChoiceActivity[]>[

{
    id: "sci-plant-life-001",
    skillId: "life-cycle-of-flowering-plants",
    question: "What does a seed grow into?",
    stage: "recognise",
    options: [
        "A new plant",
        "A rock",
        "A cloud",
        "A mushroom"
    ],

    explanation:
        "A seed can grow into a new plant when it has the right conditions.",

    difficulty: 1,
    correctAnswer: "A new plant",
    estimatedSeconds: 10,

    hint: "Think about what happens when a seed is planted in soil and starts to grow.",

    tags: [
        "science",
        "plants",
        "life-cycle",
        "seeds"
    ]
},

{
    id: "sci-plant-life-002",
    skillId: "life-cycle-of-flowering-plants",
    question: "What is the first stage in the life cycle of a flowering plant?",
    stage: "recognise",
    options: [
        "Seed",
        "Flower",
        "Fruit",
        "Leaf"
    ],

    explanation:
        "The life cycle of a flowering plant begins with a seed.",

    difficulty: 1,
    correctAnswer: "Seed",
    estimatedSeconds: 10,

    hint: "The plant must start somewhere before it can grow roots, leaves and flowers.",

    tags: [
        "science",
        "plants",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-003",
    skillId: "life-cycle-of-flowering-plants",
    question: "What is it called when a seed begins to grow?",
    stage: "recognise",
    options: [
        "Germination",
        "Pollination",
        "Photosynthesis",
        "Hibernation"
    ],

    explanation:
        "Germination is when a seed starts to grow into a new plant.",

    difficulty: 1,
    correctAnswer: "Germination",
    estimatedSeconds: 15,

    hint: "This process happens when a seed wakes up and starts growing into a young plant.",

    tags: [
        "science",
        "plants",
        "germination"
    ]
},

{
    id: "sci-plant-life-004",
    skillId: "life-cycle-of-flowering-plants",
    question: "What usually grows out of a seed first?",
    stage: "recognise",
    options: [
        "Roots",
        "Flowers",
        "Fruit",
        "Petals"
    ],

    explanation:
        "The first root grows down into the soil to absorb water.",

    difficulty: 1,
    correctAnswer: "Roots",
    estimatedSeconds: 15,

    hint: "The first growth helps the plant get water from underground.",

    tags: [
        "science",
        "plants",
        "roots",
        "germination"
    ]
},

 {
    id: "sci-plant-life-015",
    skillId: "life-cycle-of-flowering-plants",
    question: "What develops from the flower after successful pollination and fertilisation?",
    stage: "recognise",
    options: [
        "Seeds",
        "Roots",
        "Leaves",
        "Branches"
    ],

    explanation:
        "After pollination and fertilisation, seeds begin to develop.",

    difficulty: 2,
    correctAnswer: "Seeds",
    estimatedSeconds: 20,

    hint: "Think about what the flower needs to make so a new plant can start growing.",

    tags: [
        "science",
        "plants",
        "seeds"
    ]
},

{
    id: "sci-plant-life-016",
    skillId: "life-cycle-of-flowering-plants",
    question: "What can happen after seeds are spread away from the parent plant?",
    stage: "recognise",
    options: [
        "They can grow into new plants.",
        "They become flowers straight away.",
        "They turn into leaves.",
        "They disappear."
    ],

    explanation:
        "If conditions are right, dispersed seeds can germinate and grow into new plants.",

    difficulty: 2,
    correctAnswer: "They can grow into new plants.",
    estimatedSeconds: 20,

    hint: "Seeds do not stay seeds forever; they can begin the life cycle again.",

    tags: [
        "science",
        "plants",
        "seed-dispersal"
    ]
},

{
    id: "sci-plant-life-017",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage comes just before a flowering plant produces seeds?",
    stage: "recognise",
    options: [
        "Flowering",
        "Seed",
        "Root growth",
        "Germination"
    ],

    explanation:
        "Flowers are produced before seeds develop.",

    difficulty: 2,
    correctAnswer: "Flowering",
    estimatedSeconds: 20,

    hint: "Seeds are made by a special part of the plant that appears when it is mature.",

    tags: [
        "science",
        "plants",
        "flowers",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-018",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage comes after a seedling?",
    stage: "recognise",
    options: [
        "Adult plant",
        "Seed",
        "Fruit",
        "Pollination"
    ],

    explanation:
        "A healthy seedling grows into an adult flowering plant.",

    difficulty: 2,
    correctAnswer: "Adult plant",
    estimatedSeconds: 20,

    hint: "A seedling is still young. Think about what a young plant grows into.",

    tags: [
        "science",
        "plants",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-019",
    skillId: "life-cycle-of-flowering-plants",
    question: "What is the purpose of seeds in the plant life cycle?",
    stage: "recognise",
    options: [
        "To grow into new plants",
        "To absorb sunlight",
        "To carry water",
        "To make leaves green"
    ],

    explanation:
        "Seeds allow new plants to grow, continuing the life cycle.",

    difficulty: 2,
    correctAnswer: "To grow into new plants",
    estimatedSeconds: 20,

    hint: "Seeds contain what is needed for the next generation of plants to begin growing.",

    tags: [
        "science",
        "plants",
        "seeds"
    ]
},

{
    id: "sci-plant-life-020",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which sequence is correct?",
    stage: "recognise",
    options: [
        "Seed → Germination → Seedling → Adult plant",
        "Flower → Seed → Root → Seedling",
        "Adult plant → Seedling → Seed",
        "Seed → Flower → Germination → Root"
    ],

    explanation:
        "A seed germinates, becomes a seedling and then grows into an adult plant.",

    difficulty: 2,
    correctAnswer: "Seed → Germination → Seedling → Adult plant",
    estimatedSeconds: 25,

    hint: "Start with the seed and follow the stages as the plant grows larger.",

    tags: [
        "science",
        "plants",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-021",
    skillId: "life-cycle-of-flowering-plants",
    question: "Ella plants a seed and waters it. A small root grows first. What stage has begun?",
    stage: "recognise",
    options: [
        "Germination",
        "Pollination",
        "Seed dispersal",
        "Flowering"
    ],

    explanation:
        "The first root appearing is part of germination.",

    difficulty: 3,
    correctAnswer: "Germination",
    estimatedSeconds: 25,

    hint: "A seed starting to grow and produce its first root has entered the growing stage.",

    tags: [
        "science",
        "plants",
        "germination"
    ]
},

{
    id: "sci-plant-life-022",
    skillId: "life-cycle-of-flowering-plants",
    question: "Why is it important for plants to make seeds?",
    stage: "recognise",
    options: [
        "So new plants can grow",
        "So roots grow faster",
        "So leaves become bigger",
        "So flowers stay colourful"
    ],

    explanation:
        "Seeds allow plants to reproduce and continue their life cycle.",

    difficulty: 3,
    correctAnswer: "So new plants can grow",
    estimatedSeconds: 25,

    hint: "Seeds are not just part of the plant; they are the beginning of future plants.",

    tags: [
        "science",
        "plants",
        "seeds",
        "reproduction"
    ]
},

{
    id: "sci-plant-life-023",
    skillId: "life-cycle-of-flowering-plants",
    question: "What happens after an adult flowering plant produces seeds?",
    stage: "recognise",
    options: [
        "The seeds can be dispersed and grow into new plants.",
        "The plant becomes a seedling.",
        "The roots disappear.",
        "The leaves turn into flowers."
    ],

    explanation:
        "Seeds are dispersed and may grow into new plants, beginning the cycle again.",

    difficulty: 3,
    correctAnswer: "The seeds can be dispersed and grow into new plants.",
    estimatedSeconds: 25,

    hint: "The life cycle starts again when the seeds leave the parent plant and grow.",

    tags: [
        "science",
        "plants",
        "seed-dispersal"
    ]
},

{
    id: "sci-plant-life-024",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage happens only after a plant has grown into an adult?",
    stage: "recognise",
    options: [
        "Flowering",
        "Germination",
        "Seedling growth",
        "Root sprouting"
    ],

    explanation:
        "Plants usually flower after reaching adulthood.",

    difficulty: 3,
    correctAnswer: "Flowering",
    estimatedSeconds: 25,

    hint: "Young plants need time to mature before they can make flowers.",

    tags: [
        "science",
        "plants",
        "flowers"
    ]
},

{
    id: "sci-plant-life-025",
    skillId: "life-cycle-of-flowering-plants",
    question: "Why is the life cycle called a cycle?",
    stage: "recognise",
    options: [
        "Because it repeats again and again.",
        "Because plants grow in circles.",
        "Because flowers are round.",
        "Because roots curl up."
    ],

    explanation:
        "New seeds grow into new plants, repeating the same stages over and over.",

    difficulty: 3,
    correctAnswer: "Because it repeats again and again.",
    estimatedSeconds: 25,

    hint: "A cycle is something that returns to the beginning after completing all its stages.",

    tags: [
        "science",
        "plants",
        "life-cycle"
    ]
},

 {
    id: "sci-plant-life-029",
    skillId: "life-cycle-of-flowering-plants",
    question: "A seed grows into a seedling. What does the seedling eventually become?",
    stage: "recognise",
    options: [
        "An adult flowering plant",
        "A fruit",
        "A root",
        "A seed again"
    ],

    explanation:
        "With the right conditions, a seedling grows into an adult flowering plant.",

    difficulty: 3,
    correctAnswer: "An adult flowering plant",
    estimatedSeconds: 25,

    hint: "A seedling is a young plant. Think about the stage it reaches when it is fully grown.",

    tags: [
        "science",
        "plants",
        "seedling",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-030",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage completes the life cycle before it begins again?",
    stage: "recognise",
    options: [
        "New seeds are produced.",
        "The leaves fall off.",
        "The roots stop growing.",
        "The stem gets taller."
    ],

    explanation:
        "When new seeds are produced, they can grow into new plants and the life cycle starts again.",

    difficulty: 3,
    correctAnswer: "New seeds are produced.",
    estimatedSeconds: 25,

    hint: "The cycle can only restart when the plant has created the next generation.",

    tags: [
        "science",
        "plants",
        "seeds",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-031",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage happens immediately before seeds are produced?",
    stage: "recognise",
    options: [
        "Flowering",
        "Germination",
        "Seedling growth",
        "Root growth"
    ],

    explanation:
        "Seeds are produced after the plant flowers and pollination and fertilisation have taken place.",

    difficulty: 4,
    correctAnswer: "Flowering",
    estimatedSeconds: 30,

    hint: "Look for the stage where the plant makes the part needed for reproduction.",

    tags: [
        "science",
        "plants",
        "flowers"
    ]
},

{
    id: "sci-plant-life-032",
    skillId: "life-cycle-of-flowering-plants",
    question: "Why is seed dispersal useful for plants?",
    stage: "recognise",
    options: [
        "It helps new plants grow away from the parent plant.",
        "It helps leaves make food.",
        "It makes flowers brighter.",
        "It helps roots absorb sunlight."
    ],

    explanation:
        "Seed dispersal reduces competition for space, water and light by spreading seeds away from the parent plant.",

    difficulty: 4,
    correctAnswer: "It helps new plants grow away from the parent plant.",
    estimatedSeconds: 30,

    hint: "Imagine many seeds growing in the same small space. Think about why spreading them out helps.",

    tags: [
        "science",
        "plants",
        "seed-dispersal"
    ]
},

{
    id: "sci-plant-life-033",
    skillId: "life-cycle-of-flowering-plants",
    question: "A flower produces seeds. What is the next stage in the life cycle?",
    stage: "recognise",
    options: [
        "The seeds are dispersed and may germinate.",
        "The plant becomes a seedling.",
        "The roots disappear.",
        "The leaves become flowers."
    ],

    explanation:
        "Seeds are spread away from the parent plant and can later germinate.",

    difficulty: 4,
    correctAnswer: "The seeds are dispersed and may germinate.",
    estimatedSeconds: 30,

    hint: "After seeds are made, they need to leave the parent plant before a new plant can begin.",

    tags: [
        "science",
        "plants",
        "seed-dispersal",
        "germination"
    ]
},

{
    id: "sci-plant-life-034",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which sequence is correct?",
    stage: "recognise",
    options: [
        "Seed → Germination → Seedling → Adult plant → Flower → Seeds",
        "Seed → Flower → Germination → Adult plant",
        "Flower → Seedling → Seed → Roots",
        "Adult plant → Seed → Flower → Seedling"
    ],

    explanation:
        "This is the correct order of the life cycle of a flowering plant.",

    difficulty: 4,
    correctAnswer: "Seed → Germination → Seedling → Adult plant → Flower → Seeds",
    estimatedSeconds: 30,

    hint: "Start with the beginning of a plant's life and follow the growth stages in order.",

    tags: [
        "science",
        "plants",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-035",
    skillId: "life-cycle-of-flowering-plants",
    question: "Why do flowering plants reproduce?",
    stage: "recognise",
    options: [
        "To produce new plants of the same kind",
        "To make bigger leaves",
        "To grow taller stems",
        "To absorb more sunlight"
    ],

    explanation:
        "Reproduction allows plants to produce seeds that grow into new plants.",

    difficulty: 4,
    correctAnswer: "To produce new plants of the same kind",
    estimatedSeconds: 30,

    hint: "Reproduction is about creating the next generation, not just helping the current plant grow.",

    tags: [
        "science",
        "plants",
        "reproduction"
    ]
},

{
    id: "sci-plant-life-036",
    skillId: "life-cycle-of-flowering-plants",
    question: "What is the job of a seed?",
    stage: "recognise",
    options: [
        "To grow into a new plant",
        "To make food",
        "To absorb water",
        "To attract insects"
    ],

    explanation:
        "A seed contains a young plant that can grow when conditions are right.",

    difficulty: 4,
    correctAnswer: "To grow into a new plant",
    estimatedSeconds: 30,

    hint: "A seed is like a tiny starting point for another plant's life.",

    tags: [
        "science",
        "plants",
        "seeds"
    ]
},

{
    id: "sci-plant-life-037",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage lasts the longest in most flowering plants?",
    stage: "recognise",
    options: [
        "Growing into an adult plant",
        "Being a seed",
        "Flowering",
        "Making seeds"
    ],

    explanation:
        "Most of a plant's life is spent growing before it flowers and produces seeds.",

    difficulty: 4,
    correctAnswer: "Growing into an adult plant",
    estimatedSeconds: 30,

    hint: "Think about the time needed for a tiny seedling to become a mature plant.",

    tags: [
        "science",
        "plants",
        "growth"
    ]
},

{
    id: "sci-plant-life-038",
    skillId: "life-cycle-of-flowering-plants",
    question: "A seed lands in dry soil with no water. What is most likely to happen?",
    stage: "recognise",
    options: [
        "It will not germinate.",
        "It will flower immediately.",
        "It will become a seedling straight away.",
        "It will produce fruit."
    ],

    explanation:
        "Seeds need suitable conditions, including water, before germination can begin.",

    difficulty: 4,
    correctAnswer: "It will not germinate.",
    estimatedSeconds: 30,

    hint: "Remember the conditions a seed needs before it can start growing.",

    tags: [
        "science",
        "plants",
        "germination"
    ]
},

{
    id: "sci-plant-life-039",
    skillId: "life-cycle-of-flowering-plants",
    question: "What is the purpose of the adult plant stage?",
    stage: "recognise",
    options: [
        "To grow, flower and produce seeds",
        "To become a seed again",
        "To stop growing",
        "To produce rocks"
    ],

    explanation:
        "Adult plants produce flowers and eventually make seeds to continue the life cycle.",

    difficulty: 4,
    correctAnswer: "To grow, flower and produce seeds",
    estimatedSeconds: 30,

    hint: "An adult plant is the stage where it is mature enough to reproduce.",

    tags: [
        "science",
        "plants",
        "adult-plant"
    ]
},

 {
    id: "sci-plant-life-040",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which statement best describes the life cycle of a flowering plant?",
    stage: "recognise",
    options: [
        "It repeats as each new seed grows into another plant.",
        "It only happens once for all plants.",
        "It ends when flowers appear.",
        "It starts with leaves."
    ],

    explanation:
        "The life cycle repeats because each generation produces new seeds that grow into new plants.",

    difficulty: 4,
    correctAnswer: "It repeats as each new seed grows into another plant.",
    estimatedSeconds: 30,

    hint: "Think about what happens after a plant makes seeds and whether the process can start again.",

    tags: [
        "science",
        "plants",
        "life-cycle"
    ]
},
{
    id: "sci-plant-life-041",
    skillId: "life-cycle-of-flowering-plants",
    question: "A plant has produced seeds. What must happen before one of the seeds grows into a new plant?",
    stage: "recognise",
    options: [
        "The seed must germinate.",
        "The seed must produce flowers.",
        "The seed must grow fruit.",
        "The seed must become a leaf."
    ],

    explanation:
        "Before a seed can grow into a new plant, it must germinate under the right conditions.",

    difficulty: 5,
    correctAnswer: "The seed must germinate.",
    estimatedSeconds: 30,

    hint: "The first step in a seed becoming a plant is when it starts to grow.",

    tags: [
        "science",
        "plants",
        "germination",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-042",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage happens immediately after an adult plant flowers?",
    stage: "recognise",
    options: [
        "Seeds develop.",
        "The plant becomes a seedling.",
        "The roots stop growing.",
        "The leaves fall off."
    ],

    explanation:
        "After flowering, pollination and fertilisation can lead to seeds developing.",

    difficulty: 5,
    correctAnswer: "Seeds develop.",
    estimatedSeconds: 30,

    hint: "Flowers are the part of the plant that helps create the next generation.",

    tags: [
        "science",
        "plants",
        "flowers",
        "seeds"
    ]
},

{
    id: "sci-plant-life-043",
    skillId: "life-cycle-of-flowering-plants",
    question: "Why is seed dispersal important in a plant's life cycle?",
    stage: "recognise",
    options: [
        "It gives seeds a chance to grow in new places.",
        "It helps flowers make food.",
        "It makes roots absorb more water.",
        "It changes seedlings into flowers."
    ],

    explanation:
        "Seed dispersal spreads seeds to new places where they may have enough space, light and water to grow.",

    difficulty: 5,
    correctAnswer: "It gives seeds a chance to grow in new places.",
    estimatedSeconds: 30,

    hint: "Imagine every seed falling beside the parent plant. What problem might this cause?",

    tags: [
        "science",
        "plants",
        "seed-dispersal"
    ]
},

{
    id: "sci-plant-life-044",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which sequence correctly completes the life cycle?",
    stage: "recognise",
    options: [
        "Adult plant → Flower → Seeds → Germination → Seedling",
        "Adult plant → Seedling → Flower → Seed",
        "Flower → Root → Seedling → Seeds",
        "Seedling → Seeds → Flower → Adult plant"
    ],

    explanation:
        "Adult plants produce flowers, flowers produce seeds, seeds germinate and grow into seedlings.",

    difficulty: 5,
    correctAnswer: "Adult plant → Flower → Seeds → Germination → Seedling",
    estimatedSeconds: 35,

    hint: "Follow the order from a mature plant making seeds to the beginning of the next plant's growth.",

    tags: [
        "science",
        "plants",
        "life-cycle"
    ]
},

{
    id: "sci-plant-life-045",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which statement best explains why flowering plants make seeds every year?",
    stage: "recognise",
    options: [
        "To produce the next generation of plants",
        "To make more leaves",
        "To absorb more sunlight",
        "To grow taller stems"
    ],

    explanation:
        "Seeds allow flowering plants to reproduce and continue their life cycle.",

    difficulty: 5,
    correctAnswer: "To produce the next generation of plants",
    estimatedSeconds: 35,

    hint: "Seeds are linked to reproduction. Think about what they allow a plant to create.",

    tags: [
        "science",
        "plants",
        "reproduction",
        "seeds"
    ]
},

{
    id: "sci-plant-life-046",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which stage comes directly before germination?",
    stage: "recognise",
    options: [
        "A seed",
        "A flower",
        "A seedling",
        "An adult plant"
    ],

    explanation:
        "A seed exists before it germinates and begins to grow.",

    difficulty: 5,
    correctAnswer: "A seed",
    estimatedSeconds: 30,

    hint: "Germination is the moment a seed starts growing, so think about what must exist first.",

    tags: [
        "science",
        "plants",
        "germination",
        "seeds"
    ]
},

{
    id: "sci-plant-life-047",
    skillId: "life-cycle-of-flowering-plants",
    question: "A seed has enough water and warmth but is damaged. What is most likely?",
    stage: "recognise",
    options: [
        "It may not grow into a healthy plant.",
        "It will become a flower immediately.",
        "It will skip the seedling stage.",
        "It will produce seeds straight away."
    ],

    explanation:
        "A damaged seed may not be able to germinate successfully, even if conditions are suitable.",

    difficulty: 5,
    correctAnswer: "It may not grow into a healthy plant.",
    estimatedSeconds: 35,

    hint: "Seeds need both the right conditions and a healthy structure to begin growing.",

    tags: [
        "science",
        "plants",
        "germination"
    ]
},

{
    id: "sci-plant-life-048",
    skillId: "life-cycle-of-flowering-plants",
    question: "What is the main purpose of the flowering stage?",
    stage: "recognise",
    options: [
        "To allow the plant to reproduce by making seeds",
        "To absorb water from the soil",
        "To make food for the plant",
        "To grow new roots"
    ],

    explanation:
        "The flowering stage allows pollination and the production of seeds for the next generation.",

    difficulty: 5,
    correctAnswer: "To allow the plant to reproduce by making seeds",
    estimatedSeconds: 35,

    hint: "Flowers are not mainly for decoration; they help the plant make new plants.",

    tags: [
        "science",
        "plants",
        "flowers",
        "reproduction"
    ]
},

{
    id: "sci-plant-life-049",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which statement best describes the relationship between seeds and adult plants?",
    stage: "recognise",
    options: [
        "Seeds grow into adult plants, which produce more seeds.",
        "Adult plants grow into seeds.",
        "Seeds only produce flowers.",
        "Adult plants never make seeds."
    ],

    explanation:
        "This repeating pattern is what makes the life cycle a cycle.",

    difficulty: 5,
    correctAnswer: "Seeds grow into adult plants, which produce more seeds.",
    estimatedSeconds: 35,

    hint: "Think of the connection between the beginning and end of the plant's life cycle.",

    tags: [
        "science",
        "plants",
        "life-cycle",
        "seeds"
    ]
},

{
    id: "sci-plant-life-050",
    skillId: "life-cycle-of-flowering-plants",
    question: "Which summary best describes the life cycle of a flowering plant?",
    stage: "recognise",
    options: [
        "A seed germinates into a seedling, grows into an adult plant, produces flowers, makes seeds and the cycle begins again.",
        "A flower grows into a root, then a leaf, then a seed.",
        "A seed becomes a flower without growing.",
        "Plants only complete the life cycle once."
    ],

    explanation:
        "Flowering plants repeat the same life cycle as each new generation grows from seeds and produces more seeds.",

    difficulty: 5,
    correctAnswer: "A seed germinates into a seedling, grows into an adult plant, produces flowers, makes seeds and the cycle begins again.",
    estimatedSeconds: 40,

    hint: "Choose the option that includes every main stage: seed, growth, flowering and making new seeds.",

    tags: [
        "science",
        "plants",
        "life-cycle",
        "germination",
        "flowers",
        "seeds"
    ]
}

]

};

export default lifeCycleOfFloweringPlants;

export {

    lifeCycleOfFloweringPlants

};