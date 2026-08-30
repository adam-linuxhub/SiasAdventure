import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  MASS
==================================================*/

const mass: SkillContent = {
    skillId: "mass",

    title: "Mass",

    description:
        "Measure, compare and calculate mass using grams and kilograms.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "mass-001",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which unit would be most suitable for measuring the mass of a small apple?",

            hint: "Think about the size of an apple.",

            options: [
                "grams",
                "kilograms",
                "metres",
                "litres"
            ],

            correctAnswer: "grams",

            explanation:
                "An apple is a fairly light object, so grams are a suitable unit for measuring its mass."
        },

        {
            id: "mass-002",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which unit would be most suitable for measuring the mass of a child?",

            hint: "Think about whether the mass would be measured in a small or large unit.",

            options: [
                "grams",
                "kilograms",
                "centimetres",
                "millilitres"
            ],

            correctAnswer: "kilograms",

            explanation:
                "A child's mass is relatively large, so kilograms are a suitable unit."
        },

        {
            id: "mass-003",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "How many grams are in 1 kilogram?",

            hint: "Remember the relationship between kilograms and grams.",

            options: [
                "10",
                "100",
                "500",
                "1,000"
            ],

            correctAnswer: "1,000",

            explanation:
                "1 kilogram is equal to 1,000 grams."
        },

        {
            id: "mass-004",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which is heavier: 1 kilogram or 500 grams?",

            hint: "Change both measurements into grams.",

            options: [
                "1 kilogram",
                "500 grams",
                "They are equal",
                "It cannot be worked out"
            ],

            correctAnswer: "1 kilogram",

            explanation:
                "1 kilogram is 1,000 grams, so it is heavier than 500 grams."
        },

        {
            id: "mass-005",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which is lighter: 200 grams or 1 kilogram?",

            hint: "Remember that 1 kilogram is 1,000 grams.",

            options: [
                "200 grams",
                "1 kilogram",
                "They are equal",
                "They cannot be compared"
            ],

            correctAnswer: "200 grams",

            explanation:
                "1 kilogram is 1,000 grams, so 200 grams is lighter."
        },

        {
            id: "mass-006",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which object would most likely have a mass of about 1 kilogram?",

            hint: "Think about objects that are fairly light but not tiny.",

            options: [
                "a pencil",
                "a school bag",
                "a car",
                "a grain of rice"
            ],

            correctAnswer: "a school bag",

            explanation:
                "A school bag can have a mass of around 1 kilogram, depending on what is inside it."
        },

        {
            id: "mass-007",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which object would most likely be measured in grams?",

            hint: "Choose the smaller object.",

            options: [
                "a small toy",
                "a car",
                "a person",
                "a large suitcase"
            ],

            correctAnswer: "a small toy",

            explanation:
                "A small toy has a relatively small mass, so grams are a suitable unit."
        },

        {
            id: "mass-008",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which mass is greatest?",

            hint: "Change kilograms into grams where needed.",

            options: [
                "400 g",
                "750 g",
                "1 kg",
                "900 g"
            ],

            correctAnswer: "1 kg",

            explanation:
                "1 kilogram is 1,000 grams, so it is greater than 400 g, 750 g and 900 g."
        },

        {
            id: "mass-009",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "Which mass is smallest?",

            hint: "Compare all four measurements in grams.",

            options: [
                "2 kg",
                "1,500 g",
                "900 g",
                "1 kg"
            ],

            correctAnswer: "900 g",

            explanation:
                "900 grams is less than 1 kilogram, 1,500 grams and 2 kilograms."
        },

        {
            id: "mass-010",
            skillId: "mass",
            stage: "recognise",
            difficulty: 1,

            question: "How many grams are in 2 kilograms?",

            hint: "There are 1,000 grams in each kilogram.",

            options: [
                "200 g",
                "1,000 g",
                "2,000 g",
                "20,000 g"
            ],

            correctAnswer: "2,000 g",

            explanation:
                "2 × 1,000 = 2,000, so 2 kilograms is 2,000 grams."
        },
                {
            id: "mass-011",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A bag of flour has a mass of 2 kg. How many grams is this?",

            hint: "There are 1,000 grams in 1 kilogram.",

            options: [
                "200 g",
                "1,200 g",
                "2,000 g",
                "20,000 g"
            ],

            correctAnswer: "2,000 g",

            explanation:
                "2 kg = 2 × 1,000 g = 2,000 g."
        },

        {
            id: "mass-012",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A parcel has a mass of 750 g. Another parcel has a mass of 250 g. What is their total mass?",

            hint: "Add the two masses.",

            options: [
                "900 g",
                "1,000 g",
                "1,100 g",
                "1,250 g"
            ],

            correctAnswer: "1,000 g",

            explanation:
                "750 g + 250 g = 1,000 g, which is equal to 1 kg."
        },

        {
            id: "mass-013",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A box weighs 1 kg. A toy weighing 300 g is taken out. What is the mass left?",

            hint: "Change 1 kilogram into grams before subtracting.",

            options: [
                "500 g",
                "600 g",
                "700 g",
                "800 g"
            ],

            correctAnswer: "700 g",

            explanation:
                "1 kg = 1,000 g. 1,000 g − 300 g = 700 g."
        },

        {
            id: "mass-014",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 4 bags that each have a mass of 500 g. What is their total mass?",

            hint: "Find 4 groups of 500 grams.",

            options: [
                "1 kg",
                "1 kg 500 g",
                "2 kg",
                "2 kg 500 g"
            ],

            correctAnswer: "2 kg",

            explanation:
                "4 × 500 g = 2,000 g. 2,000 g is equal to 2 kg."
        },

        {
            id: "mass-015",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A parcel has a mass of 1 kg 200 g. Another parcel has a mass of 500 g. What is their total mass?",

            hint: "Add the grams first, then regroup if needed.",

            options: [
                "1 kg 500 g",
                "1 kg 700 g",
                "2 kg",
                "2 kg 200 g"
            ],

            correctAnswer: "1 kg 700 g",

            explanation:
                "1 kg 200 g + 500 g = 1 kg 700 g."
        },

        {
            id: "mass-016",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A bag has a mass of 2 kg. Sia uses 750 g. How much mass remains?",

            hint: "Change 2 kg into grams first.",

            options: [
                "1 kg 150 g",
                "1 kg 250 g",
                "1 kg 350 g",
                "1 kg 500 g"
            ],

            correctAnswer: "1 kg 250 g",

            explanation:
                "2 kg = 2,000 g. 2,000 g − 750 g = 1,250 g, which is 1 kg 250 g."
        },

        {
            id: "mass-017",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A box contains 3 toys. Each toy has a mass of 200 g. What is the total mass of the toys?",

            hint: "Multiply 200 g by 3.",

            options: [
                "400 g",
                "500 g",
                "600 g",
                "800 g"
            ],

            correctAnswer: "600 g",

            explanation:
                "3 × 200 g = 600 g."
        },

        {
            id: "mass-018",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A shop has 3 packets, each with a mass of 400 g. What is their total mass?",

            hint: "Find 3 groups of 400 grams.",

            options: [
                "800 g",
                "1 kg",
                "1 kg 200 g",
                "1 kg 400 g"
            ],

            correctAnswer: "1 kg 200 g",

            explanation:
                "3 × 400 g = 1,200 g. 1,200 g is 1 kg 200 g."
        },

        {
            id: "mass-019",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "A suitcase has a mass of 3 kg. Sia removes 1 kg 500 g. What is the mass of the suitcase now?",

            hint: "Change both measurements into grams before subtracting.",

            options: [
                "1 kg",
                "1 kg 500 g",
                "2 kg",
                "2 kg 500 g"
            ],

            correctAnswer: "1 kg 500 g",

            explanation:
                "3 kg = 3,000 g. 1 kg 500 g = 1,500 g. 3,000 g − 1,500 g = 1,500 g, which is 1 kg 500 g."
        },

        {
            id: "mass-020",
            skillId: "mass",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 2 kg of clay. She uses 600 g to make a model. How much clay is left?",

            hint: "Change 2 kg into grams before subtracting.",

            options: [
                "1 kg 200 g",
                "1 kg 300 g",
                "1 kg 400 g",
                "1 kg 600 g"
            ],

            correctAnswer: "1 kg 400 g",

            explanation:
                "2 kg = 2,000 g. 2,000 g − 600 g = 1,400 g, which is 1 kg 400 g."
        },
                {
            id: "mass-021",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "A box has a mass of 2 kg 500 g. Another box has a mass of 750 g. What is their total mass?",

            hint: "Add the grams first and regroup when you reach 1,000 grams.",

            options: [
                "3 kg",
                "3 kg 250 g",
                "3 kg 500 g",
                "4 kg 250 g"
            ],

            correctAnswer: "3 kg 250 g",

            explanation:
                "2 kg 500 g + 750 g = 3 kg 250 g."
        },

        {
            id: "mass-022",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "A bag has a mass of 3 kg. Sia removes 1 kg 750 g. What mass remains?",

            hint: "Change both masses into grams before subtracting.",

            options: [
                "1 kg",
                "1 kg 150 g",
                "1 kg 250 g",
                "1 kg 750 g"
            ],

            correctAnswer: "1 kg 250 g",

            explanation:
                "3 kg = 3,000 g. 3,000 g − 1,750 g = 1,250 g, which is 1 kg 250 g."
        },

        {
            id: "mass-023",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "Three identical bags each have a mass of 750 g. What is their total mass?",

            hint: "Multiply 750 g by 3.",

            options: [
                "1 kg 500 g",
                "2 kg",
                "2 kg 250 g",
                "2 kg 500 g"
            ],

            correctAnswer: "2 kg 250 g",

            explanation:
                "750 g × 3 = 2,250 g. This is 2 kg 250 g."
        },

        {
            id: "mass-024",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "A parcel weighs 1 kg 400 g. Another parcel weighs 900 g. What is their combined mass?",

            hint: "Add 1,400 g and 900 g.",

            options: [
                "2 kg",
                "2 kg 100 g",
                "2 kg 300 g",
                "2 kg 400 g"
            ],

            correctAnswer: "2 kg 300 g",

            explanation:
                "1 kg 400 g = 1,400 g. 1,400 g + 900 g = 2,300 g, which is 2 kg 300 g."
        },

        {
            id: "mass-025",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "Sia has 4 packets weighing 250 g each. She also has a 500 g packet. What is the total mass?",

            hint: "Find the mass of the four equal packets first.",

            options: [
                "1 kg",
                "1 kg 250 g",
                "1 kg 500 g",
                "2 kg"
            ],

            correctAnswer: "1 kg 500 g",

            explanation:
                "4 × 250 g = 1,000 g. Adding 500 g gives 1,500 g, which is 1 kg 500 g."
        },

        {
            id: "mass-026",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "A box has a mass of 2 kg 200 g. A second box has a mass of 1 kg 300 g. How much greater is the mass of the first box?",

            hint: "Subtract the second mass from the first.",

            options: [
                "700 g",
                "800 g",
                "900 g",
                "1 kg"
            ],

            correctAnswer: "900 g",

            explanation:
                "2 kg 200 g = 2,200 g and 1 kg 300 g = 1,300 g. 2,200 g − 1,300 g = 900 g."
        },

        {
            id: "mass-027",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "A crate contains 3 bags weighing 600 g each. The empty crate weighs 200 g. What is the total mass?",

            hint: "Find the mass of the three bags, then add the crate.",

            options: [
                "1 kg 800 g",
                "2 kg",
                "2 kg 100 g",
                "2 kg 200 g"
            ],

            correctAnswer: "2 kg",

            explanation:
                "3 × 600 g = 1,800 g. Adding the 200 g crate gives 2,000 g, which is 2 kg."
        },

        {
            id: "mass-028",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "A shop has 5 packets weighing 400 g each. It sells 2 packets. What mass of packets remains?",

            hint: "Work out how many packets remain, then find their total mass.",

            options: [
                "1 kg",
                "1 kg 200 g",
                "1 kg 400 g",
                "2 kg"
            ],

            correctAnswer: "1 kg 200 g",

            explanation:
                "5 − 2 = 3 packets remain. 3 × 400 g = 1,200 g, which is 1 kg 200 g."
        },

        {
            id: "mass-029",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "A suitcase has a mass of 4 kg. Three books, each weighing 500 g, are removed. What is the new mass?",

            hint: "Find the total mass of the three books first.",

            options: [
                "2 kg 250 g",
                "2 kg 500 g",
                "3 kg",
                "3 kg 500 g"
            ],

            correctAnswer: "2 kg 500 g",

            explanation:
                "3 × 500 g = 1,500 g. 4 kg = 4,000 g. 4,000 g − 1,500 g = 2,500 g, which is 2 kg 500 g."
        },

        {
            id: "mass-030",
            skillId: "mass",
            stage: "master",
            difficulty: 3,

            question: "Sia has 2 kg of clay. She uses 3 pieces weighing 250 g each. How much clay remains?",

            hint: "Find the mass used, then subtract it from 2 kg.",

            options: [
                "1 kg 150 g",
                "1 kg 250 g",
                "1 kg 500 g",
                "1 kg 750 g"
            ],

            correctAnswer: "1 kg 250 g",

            explanation:
                "3 × 250 g = 750 g. 2 kg = 2,000 g. 2,000 g − 750 g = 1,250 g, which is 1 kg 250 g."
        }

    ]
};

export default mass;

export {
    mass
};