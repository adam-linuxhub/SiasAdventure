import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  LENGTH
==================================================*/

const length: SkillContent = {
    skillId: "length",

    title: "Length",

    description:
        "Measure, compare and calculate lengths using millimetres, centimetres, metres and kilometres.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "len-001",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "Which unit would be most suitable for measuring the length of a pencil?",

            hint: "Think about the size of a pencil.",

            options: [
                "millimetres",
                "centimetres",
                "metres",
                "kilometres"
            ],

            correctAnswer: "centimetres",

            explanation:
                "A pencil is usually measured in centimetres because it is a small object."
        },

        {
            id: "len-002",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "Which unit would be most suitable for measuring the distance between two towns?",

            hint: "Think about a journey over a long distance.",

            options: [
                "millimetres",
                "centimetres",
                "metres",
                "kilometres"
            ],

            correctAnswer: "kilometres",

            explanation:
                "The distance between towns is large, so kilometres are the most suitable unit."
        },

        {
            id: "len-003",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "How many centimetres are in 1 metre?",

            hint: "Remember the relationship between metres and centimetres.",

            options: [
                "10",
                "50",
                "100",
                "1,000"
            ],

            correctAnswer: "100",

            explanation:
                "1 metre is equal to 100 centimetres."
        },

        {
            id: "len-004",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "How many millimetres are in 1 centimetre?",

            hint: "A centimetre is made up of ten smaller units.",

            options: [
                "5",
                "10",
                "50",
                "100"
            ],

            correctAnswer: "10",

            explanation:
                "1 centimetre is equal to 10 millimetres."
        },

        {
            id: "len-005",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "Which is longer: 1 metre or 50 centimetres?",

            hint: "Convert the measurements into the same unit.",

            options: [
                "1 metre",
                "50 centimetres",
                "They are equal",
                "It cannot be worked out"
            ],

            correctAnswer: "1 metre",

            explanation:
                "1 metre is 100 centimetres, so 1 metre is longer than 50 centimetres."
        },

             {
            id: "len-006",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "Which is shorter: 20 centimetres or 300 millimetres?",

            hint: "Convert 300 millimetres into centimetres.",

            options: [
                "20 cm",
                "30 cm",
                "40 cm",
                "50 cm"
            ],

            correctAnswer: "20 cm",

            explanation:
                "300 millimetres is 30 centimetres. Therefore, 20 centimetres is shorter."
        },

        {
            id: "len-007",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "Which unit would be most suitable for measuring the height of a classroom door?",

            hint: "A door is much taller than a pencil but much shorter than the distance between towns.",

            options: [
                "millimetres",
                "centimetres",
                "metres",
                "kilometres"
            ],

            correctAnswer: "metres",

            explanation:
                "A classroom door is a large object, so metres are a suitable unit for its height."
        },

        {
            id: "len-008",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "Which measurement is the greatest?",

            hint: "Compare the measurements after thinking about their units.",

            options: [
                "80 cm",
                "1 m",
                "90 cm",
                "70 cm"
            ],

            correctAnswer: "1 m",

            explanation:
                "1 metre is 100 centimetres, so 1 metre is greater than 80 cm, 90 cm and 70 cm."
        },

        {
            id: "len-009",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "Which measurement is the smallest?",

            hint: "Think about how many centimetres are in each measurement.",

            options: [
                "2 m",
                "150 cm",
                "90 cm",
                "1 m"
            ],

            correctAnswer: "90 cm",

            explanation:
                "90 cm is smaller than 1 m (100 cm), 150 cm and 2 m (200 cm)."
        },

        {
            id: "len-010",
            skillId: "length",
            stage: "recognise",
            difficulty: 1,

            question: "A ruler is 30 centimetres long. How many millimetres long is it?",

            hint: "There are 10 millimetres in every centimetre.",

            options: [
                "30 mm",
                "100 mm",
                "300 mm",
                "3,000 mm"
            ],

            correctAnswer: "300 mm",

            explanation:
                "30 × 10 = 300, so 30 centimetres is equal to 300 millimetres."
        },
                {
            id: "len-011",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A ribbon is 2 metres long. How many centimetres long is it?",

            hint: "There are 100 centimetres in 1 metre.",

            options: [
                "20 cm",
                "100 cm",
                "200 cm",
                "2,000 cm"
            ],

            correctAnswer: "200 cm",

            explanation:
                "2 metres is 2 × 100 = 200 centimetres."
        },

        {
            id: "len-012",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A piece of string is 70 centimetres long. Another piece is 20 centimetres long. How long are they altogether?",

            hint: "Add the two lengths.",

            options: [
                "80 cm",
                "90 cm",
                "100 cm",
                "110 cm"
            ],

            correctAnswer: "90 cm",

            explanation:
                "70 cm + 20 cm = 90 cm."
        },

        {
            id: "len-013",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A pencil is 15 centimetres long. Sia cuts off 5 centimetres. How long is the pencil now?",

            hint: "Subtract the part that was cut off.",

            options: [
                "8 cm",
                "10 cm",
                "12 cm",
                "20 cm"
            ],

            correctAnswer: "10 cm",

            explanation:
                "15 cm − 5 cm = 10 cm."
        },

        {
            id: "len-014",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A path is 1 metre long. A second path is 50 centimetres long. What is their total length in centimetres?",

            hint: "First change 1 metre into centimetres.",

            options: [
                "100 cm",
                "150 cm",
                "200 cm",
                "250 cm"
            ],

            correctAnswer: "150 cm",

            explanation:
                "1 metre = 100 centimetres. 100 cm + 50 cm = 150 cm."
        },

             {
            id: "len-015",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A table is 120 centimetres long. A desk is 80 centimetres long. Which is longer and by how much?",

            hint: "Compare the two measurements and find the difference.",

            options: [
                "The desk by 20 cm",
                "The table by 40 cm",
                "The desk by 40 cm",
                "The table by 30 cm"
            ],

            correctAnswer: "The table by 40 cm",

            explanation:
                "120 cm − 80 cm = 40 cm, so the table is longer by 40 centimetres."
        },

        {
            id: "len-016",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A walking route is 3 kilometres long. How many metres is this?",

            hint: "There are 1,000 metres in 1 kilometre.",

            options: [
                "300 m",
                "3,000 m",
                "30,000 m",
                "300,000 m"
            ],

            correctAnswer: "3,000 m",

            explanation:
                "3 kilometres = 3 × 1,000 = 3,000 metres."
        },

        {
            id: "len-017",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A ribbon is 90 centimetres long. Sia uses 30 centimetres. How much ribbon remains?",

            hint: "Subtract the length used from the original length.",

            options: [
                "50 cm",
                "60 cm",
                "70 cm",
                "120 cm"
            ],

            correctAnswer: "60 cm",

            explanation:
                "90 cm − 30 cm = 60 cm, so 60 centimetres remain."
        },

        {
            id: "len-018",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "A rope is 2 metres long. It is cut into two equal pieces. How long is each piece?",

            hint: "Share 2 metres equally between 2 pieces.",

            options: [
                "50 cm",
                "1 m",
                "1 m 50 cm",
                "2 m"
            ],

            correctAnswer: "1 m",

            explanation:
                "2 metres shared equally between 2 pieces gives 1 metre for each piece."
        },

        {
            id: "len-019",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "Which is longer: 1 metre 20 centimetres or 110 centimetres?",

            hint: "Change the mixed measurement into centimetres.",

            options: [
                "1 m 20 cm",
                "110 cm",
                "They are equal",
                "There is not enough information"
            ],

            correctAnswer: "1 m 20 cm",

            explanation:
                "1 metre 20 centimetres = 120 centimetres. 120 cm is longer than 110 cm."
        },

        {
            id: "len-020",
            skillId: "length",
            stage: "apply",
            difficulty: 2,

            question: "Sia walks 800 metres in the morning and 200 metres in the afternoon. How far does she walk altogether?",

            hint: "Add the two distances.",

            options: [
                "900 m",
                "1,000 m",
                "1,200 m",
                "1,800 m"
            ],

            correctAnswer: "1,000 m",

            explanation:
                "800 m + 200 m = 1,000 m, which is also equal to 1 kilometre."
        },
                {
            id: "len-021",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A ribbon is 2 m 40 cm long. Sia cuts off 80 cm. How much ribbon remains?",

            hint: "Change 2 m 40 cm into centimetres before subtracting.",

            options: [
                "1 m 40 cm",
                "1 m 60 cm",
                "1 m 80 cm",
                "2 m"
            ],

            correctAnswer: "1 m 60 cm",

            explanation:
                "2 m 40 cm = 240 cm. 240 cm − 80 cm = 160 cm, which is 1 m 60 cm."
        },

        {
            id: "len-022",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A path is 1 km long. Sia walks 600 m. How much farther does she need to walk?",

            hint: "Change 1 kilometre into metres, then subtract.",

            options: [
                "300 m",
                "400 m",
                "500 m",
                "600 m"
            ],

            correctAnswer: "400 m",

            explanation:
                "1 km = 1,000 m. 1,000 m − 600 m = 400 m."
        },

        {
            id: "len-023",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "Three pieces of string are 40 cm, 30 cm and 50 cm long. What is their total length?",

            hint: "Add all three lengths together.",

            options: [
                "1 m 10 cm",
                "1 m 20 cm",
                "1 m 30 cm",
                "1 m 40 cm"
            ],

            correctAnswer: "1 m 20 cm",

            explanation:
                "40 cm + 30 cm + 50 cm = 120 cm. 120 cm is 1 m 20 cm."
        },

        {
            id: "len-024",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A 3 m rope is cut into pieces of 1 m each. How many pieces are made?",

            hint: "Think about how many 1 m lengths fit into 3 m.",

            options: [
                "2 pieces",
                "3 pieces",
                "4 pieces",
                "6 pieces"
            ],

            correctAnswer: "3 pieces",

            explanation:
                "3 m divided into 1 m pieces makes 3 equal pieces."
        },

        {
            id: "len-025",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A table is 1 m 50 cm long. A second table is 80 cm long. How much longer is the first table?",

            hint: "Change 1 m 50 cm into centimetres first.",

            options: [
                "50 cm",
                "60 cm",
                "70 cm",
                "80 cm"
            ],

            correctAnswer: "70 cm",

            explanation:
                "1 m 50 cm = 150 cm. 150 cm − 80 cm = 70 cm."
        },

        {
            id: "len-026",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "Sia walks 400 m to a park and then 300 m home. How far does she walk altogether?",

            hint: "Add the two distances.",

            options: [
                "600 m",
                "700 m",
                "800 m",
                "900 m"
            ],

            correctAnswer: "700 m",

            explanation:
                "400 m + 300 m = 700 m."
        },

        {
            id: "len-027",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A 2 m ribbon is cut into 4 equal pieces. How long is each piece?",

            hint: "First change 2 metres into centimetres, then divide equally.",

            options: [
                "25 cm",
                "50 cm",
                "75 cm",
                "1 m"
            ],

            correctAnswer: "50 cm",

            explanation:
                "2 m = 200 cm. 200 cm ÷ 4 = 50 cm, so each piece is 50 cm long."
        },

        {
            id: "len-028",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A journey is 2 km long. Sia has already travelled 1 km 300 m. How much farther does she need to travel?",

            hint: "Change both distances into metres before subtracting.",

            options: [
                "500 m",
                "600 m",
                "700 m",
                "800 m"
            ],

            correctAnswer: "700 m",

            explanation:
                "2 km = 2,000 m. 1 km 300 m = 1,300 m. 2,000 m − 1,300 m = 700 m."
        },

        {
            id: "len-029",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A piece of string is 150 cm long. Another piece is 1 m long. What is their total length in metres and centimetres?",

            hint: "Change 1 metre into centimetres before adding.",

            options: [
                "2 m 20 cm",
                "2 m 40 cm",
                "2 m 50 cm",
                "2 m 60 cm"
            ],

            correctAnswer: "2 m 50 cm",

            explanation:
                "1 m = 100 cm. 150 cm + 100 cm = 250 cm, which is 2 m 50 cm."
        },

        {
            id: "len-030",
            skillId: "length",
            stage: "master",
            difficulty: 3,

            question: "A 4 m rope is cut into two pieces. One piece is 1 m 60 cm long. How long is the other piece?",

            hint: "Change 4 m into centimetres and subtract 1 m 60 cm.",

            options: [
                "2 m 20 cm",
                "2 m 30 cm",
                "2 m 40 cm",
                "2 m 60 cm"
            ],

            correctAnswer: "2 m 40 cm",

            explanation:
                "4 m = 400 cm. 1 m 60 cm = 160 cm. 400 cm − 160 cm = 240 cm, which is 2 m 40 cm."
        }

    ]
};

export default length;

export {
    length
};