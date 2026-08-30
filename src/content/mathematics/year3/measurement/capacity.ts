import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  CAPACITY
==================================================*/

const capacity: SkillContent = {
    skillId: "capacity",

    title: "Capacity",

    description:
        "Measure, compare and calculate capacity using millilitres and litres.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "cap-001",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which unit would be most suitable for measuring the amount of water in a small glass?",

            hint: "Think about the size of a glass.",

            options: [
                "millilitres",
                "litres",
                "kilograms",
                "metres"
            ],

            correctAnswer: "millilitres",

            explanation:
                "A small glass holds a relatively small amount of liquid, so millilitres are a suitable unit."
        },

        {
            id: "cap-002",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which unit would be most suitable for measuring the amount of water in a large bottle?",

            hint: "Think about whether the amount of liquid is small or large.",

            options: [
                "millilitres",
                "litres",
                "grams",
                "centimetres"
            ],

            correctAnswer: "litres",

            explanation:
                "A large bottle can hold a large amount of liquid, so litres are a suitable unit."
        },

        {
            id: "cap-003",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "How many millilitres are in 1 litre?",

            hint: "Remember the relationship between litres and millilitres.",

            options: [
                "10",
                "100",
                "500",
                "1,000"
            ],

            correctAnswer: "1,000",

            explanation:
                "1 litre is equal to 1,000 millilitres."
        },

        {
            id: "cap-004",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which holds more: 1 litre or 500 millilitres?",

            hint: "Change both measurements into millilitres.",

            options: [
                "1 litre",
                "500 millilitres",
                "They are equal",
                "It cannot be worked out"
            ],

            correctAnswer: "1 litre",

            explanation:
                "1 litre is 1,000 millilitres, so it holds more than 500 millilitres."
        },

        {
            id: "cap-005",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which holds less: 250 millilitres or 1 litre?",

            hint: "Remember that 1 litre is 1,000 millilitres.",

            options: [
                "250 millilitres",
                "1 litre",
                "They are equal",
                "They cannot be compared"
            ],

            correctAnswer: "250 millilitres",

            explanation:
                "1 litre is 1,000 millilitres, so 250 millilitres is less."
        },

        {
            id: "cap-006",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which would most likely hold about 1 litre of liquid?",

            hint: "Think about the size of the container.",

            options: [
                "a teaspoon",
                "a large bottle",
                "an egg cup",
                "a small medicine spoon"
            ],

            correctAnswer: "a large bottle",

            explanation:
                "A large bottle can hold around 1 litre of liquid, whereas the other containers are much smaller."
        },

        {
            id: "cap-007",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which would most likely be measured in millilitres?",

            hint: "Choose the container holding a small amount of liquid.",

            options: [
                "a cup of medicine",
                "a swimming pool",
                "a bath",
                "a water tank"
            ],

            correctAnswer: "a cup of medicine",

            explanation:
                "A small amount of medicine is usually measured in millilitres."
        },

        {
            id: "cap-008",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which capacity is greatest?",

            hint: "Change litres into millilitres where needed.",

            options: [
                "400 ml",
                "750 ml",
                "1 litre",
                "900 ml"
            ],

            correctAnswer: "1 litre",

            explanation:
                "1 litre is 1,000 millilitres, so it is greater than 400 ml, 750 ml and 900 ml."
        },

        {
            id: "cap-009",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "Which capacity is smallest?",

            hint: "Compare all four measurements in millilitres.",

            options: [
                "2 litres",
                "1,500 ml",
                "900 ml",
                "1 litre"
            ],

            correctAnswer: "900 ml",

            explanation:
                "900 millilitres is less than 1 litre, 1,500 millilitres and 2 litres."
        },

        {
            id: "cap-010",
            skillId: "capacity",
            stage: "recognise",
            difficulty: 1,

            question: "How many millilitres are in 2 litres?",

            hint: "There are 1,000 millilitres in each litre.",

            options: [
                "200 ml",
                "1,000 ml",
                "2,000 ml",
                "20,000 ml"
            ],

            correctAnswer: "2,000 ml",

            explanation:
                "2 × 1,000 = 2,000, so 2 litres is equal to 2,000 millilitres."
        },
                {
            id: "cap-011",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A bottle holds 2 litres of water. How many millilitres is this?",

            hint: "There are 1,000 millilitres in 1 litre.",

            options: [
                "200 ml",
                "1,200 ml",
                "2,000 ml",
                "20,000 ml"
            ],

            correctAnswer: "2,000 ml",

            explanation:
                "2 litres = 2 × 1,000 ml = 2,000 ml."
        },

        {
            id: "cap-012",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A jug contains 750 ml of water. Another jug contains 250 ml. How much water is there altogether?",

            hint: "Add the two capacities.",

            options: [
                "900 ml",
                "1,000 ml",
                "1,100 ml",
                "1,250 ml"
            ],

            correctAnswer: "1,000 ml",

            explanation:
                "750 ml + 250 ml = 1,000 ml, which is equal to 1 litre."
        },

        {
            id: "cap-013",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A bottle contains 1 litre of juice. Sia drinks 300 ml. How much juice is left?",

            hint: "Change 1 litre into millilitres before subtracting.",

            options: [
                "500 ml",
                "600 ml",
                "700 ml",
                "800 ml"
            ],

            correctAnswer: "700 ml",

            explanation:
                "1 litre = 1,000 ml. 1,000 ml − 300 ml = 700 ml."
        },

        {
            id: "cap-014",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "Sia fills 4 cups with 250 ml of water in each cup. How much water does she use?",

            hint: "Find 4 groups of 250 millilitres.",

            options: [
                "500 ml",
                "750 ml",
                "1 litre",
                "1 litre 250 ml"
            ],

            correctAnswer: "1 litre",

            explanation:
                "4 × 250 ml = 1,000 ml. 1,000 ml is equal to 1 litre."
        },

        {
            id: "cap-015",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A container holds 1 litre 200 ml. Another container holds 500 ml. What is their total capacity?",

            hint: "Add the millilitres and regroup if needed.",

            options: [
                "1 litre 500 ml",
                "1 litre 700 ml",
                "2 litres",
                "2 litres 200 ml"
            ],

            correctAnswer: "1 litre 700 ml",

            explanation:
                "1 litre 200 ml + 500 ml = 1 litre 700 ml."
        },

        {
            id: "cap-016",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A tank contains 2 litres of water. Sia uses 750 ml. How much water remains?",

            hint: "Change 2 litres into millilitres first.",

            options: [
                "1 litre 150 ml",
                "1 litre 250 ml",
                "1 litre 350 ml",
                "1 litre 500 ml"
            ],

            correctAnswer: "1 litre 250 ml",

            explanation:
                "2 litres = 2,000 ml. 2,000 ml − 750 ml = 1,250 ml, which is 1 litre 250 ml."
        },

        {
            id: "cap-017",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A small bottle holds 200 ml. How much liquid will 3 such bottles hold?",

            hint: "Multiply 200 ml by 3.",

            options: [
                "400 ml",
                "500 ml",
                "600 ml",
                "800 ml"
            ],

            correctAnswer: "600 ml",

            explanation:
                "3 × 200 ml = 600 ml."
        },

        {
            id: "cap-018",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A shop has 3 bottles, each holding 400 ml. What is their total capacity?",

            hint: "Find 3 groups of 400 millilitres.",

            options: [
                "800 ml",
                "1 litre",
                "1 litre 200 ml",
                "1 litre 400 ml"
            ],

            correctAnswer: "1 litre 200 ml",

            explanation:
                "3 × 400 ml = 1,200 ml. 1,200 ml is 1 litre 200 ml."
        },

        {
            id: "cap-019",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "A jug holds 2 litres of juice. Sia pours out 500 ml. How much juice remains?",

            hint: "Change 2 litres into millilitres before subtracting.",

            options: [
                "1 litre",
                "1 litre 250 ml",
                "1 litre 500 ml",
                "1 litre 750 ml"
            ],

            correctAnswer: "1 litre 500 ml",

            explanation:
                "2 litres = 2,000 ml. 2,000 ml − 500 ml = 1,500 ml, which is 1 litre 500 ml."
        },

        {
            id: "cap-020",
            skillId: "capacity",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 2 litres of water. She uses 600 ml to fill a container. How much water is left?",

            hint: "Change 2 litres into millilitres before subtracting.",

            options: [
                "1 litre 200 ml",
                "1 litre 300 ml",
                "1 litre 400 ml",
                "1 litre 600 ml"
            ],

            correctAnswer: "1 litre 400 ml",

            explanation:
                "2 litres = 2,000 ml. 2,000 ml − 600 ml = 1,400 ml, which is 1 litre 400 ml."
        },
                {
            id: "cap-021",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "A tank contains 2 litres 500 ml of water. Another container contains 750 ml. How much liquid is there altogether?",

            hint: "Add the millilitres and regroup when you reach 1,000 ml.",

            options: [
                "3 litres",
                "3 litres 250 ml",
                "3 litres 500 ml",
                "4 litres 250 ml"
            ],

            correctAnswer: "3 litres 250 ml",

            explanation:
                "2 litres 500 ml + 750 ml = 3 litres 250 ml."
        },

        {
            id: "cap-022",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "A jug contains 3 litres of juice. Sia pours out 1 litre 750 ml. How much juice remains?",

            hint: "Change both amounts into millilitres before subtracting.",

            options: [
                "1 litre",
                "1 litre 150 ml",
                "1 litre 250 ml",
                "1 litre 750 ml"
            ],

            correctAnswer: "1 litre 250 ml",

            explanation:
                "3 litres = 3,000 ml. 3,000 ml − 1,750 ml = 1,250 ml, which is 1 litre 250 ml."
        },

        {
            id: "cap-023",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "Three identical bottles each hold 750 ml. What is their total capacity?",

            hint: "Multiply 750 ml by 3.",

            options: [
                "1 litre 500 ml",
                "2 litres",
                "2 litres 250 ml",
                "2 litres 500 ml"
            ],

            correctAnswer: "2 litres 250 ml",

            explanation:
                "750 ml × 3 = 2,250 ml. This is 2 litres 250 ml."
        },

        {
            id: "cap-024",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "A jug holds 1 litre 400 ml. Another jug holds 900 ml. What is their combined capacity?",

            hint: "Add 1,400 ml and 900 ml.",

            options: [
                "2 litres",
                "2 litres 100 ml",
                "2 litres 300 ml",
                "2 litres 400 ml"
            ],

            correctAnswer: "2 litres 300 ml",

            explanation:
                "1 litre 400 ml = 1,400 ml. 1,400 ml + 900 ml = 2,300 ml, which is 2 litres 300 ml."
        },

        {
            id: "cap-025",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "Sia has 4 cups containing 250 ml each. She also has a bottle containing 500 ml. What is the total amount of liquid?",

            hint: "Find the amount in the four cups first.",

            options: [
                "1 litre",
                "1 litre 250 ml",
                "1 litre 500 ml",
                "2 litres"
            ],

            correctAnswer: "1 litre 500 ml",

            explanation:
                "4 × 250 ml = 1,000 ml. Adding 500 ml gives 1,500 ml, which is 1 litre 500 ml."
        },

        {
            id: "cap-026",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "A container holds 2 litres 200 ml. A second container holds 1 litre 300 ml. How much greater is the capacity of the first container?",

            hint: "Subtract the second capacity from the first.",

            options: [
                "700 ml",
                "800 ml",
                "900 ml",
                "1 litre"
            ],

            correctAnswer: "900 ml",

            explanation:
                "2 litres 200 ml = 2,200 ml and 1 litre 300 ml = 1,300 ml. 2,200 ml − 1,300 ml = 900 ml."
        },

        {
            id: "cap-027",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "A large bottle holds 3 containers of 600 ml each. How much liquid do they hold altogether?",

            hint: "Find 3 groups of 600 millilitres.",

            options: [
                "1 litre 200 ml",
                "1 litre 800 ml",
                "2 litres",
                "2 litres 200 ml"
            ],

            correctAnswer: "1 litre 800 ml",

            explanation:
                "3 × 600 ml = 1,800 ml, which is 1 litre 800 ml."
        },

        {
            id: "cap-028",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "A shop has 5 bottles containing 400 ml each. It sells 2 bottles. How much liquid is left in the remaining bottles?",

            hint: "Find how many bottles remain, then calculate their total capacity.",

            options: [
                "1 litre",
                "1 litre 200 ml",
                "1 litre 400 ml",
                "2 litres"
            ],

            correctAnswer: "1 litre 200 ml",

            explanation:
                "5 − 2 = 3 bottles remain. 3 × 400 ml = 1,200 ml, which is 1 litre 200 ml."
        },

        {
            id: "cap-029",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "A tank contains 4 litres of water. Three bottles, each holding 500 ml, are filled from the tank. How much water remains?",

            hint: "Find the total amount poured into the bottles first.",

            options: [
                "2 litres 250 ml",
                "2 litres 500 ml",
                "3 litres",
                "3 litres 500 ml"
            ],

            correctAnswer: "2 litres 500 ml",

            explanation:
                "3 × 500 ml = 1,500 ml. 4 litres = 4,000 ml. 4,000 ml − 1,500 ml = 2,500 ml, which is 2 litres 500 ml."
        },

        {
            id: "cap-030",
            skillId: "capacity",
            stage: "master",
            difficulty: 3,

            question: "Sia has 2 litres of juice. She pours it equally into 4 bottles. How much juice goes into each bottle?",

            hint: "Change 2 litres into millilitres, then divide equally.",

            options: [
                "250 ml",
                "500 ml",
                "750 ml",
                "1 litre"
            ],

            correctAnswer: "500 ml",

            explanation:
                "2 litres = 2,000 ml. 2,000 ml ÷ 4 = 500 ml, so each bottle gets 500 ml."
        }

    ]
};

export default capacity;

export {
    capacity
};
