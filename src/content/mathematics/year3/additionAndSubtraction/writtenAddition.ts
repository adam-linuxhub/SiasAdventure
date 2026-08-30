import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  WRITTEN ADDITION
==================================================*/

const writtenAddition: SkillContent = {
    skillId: "written-addition",

    title: "Written Addition",

    description: "Use the written column method to add two and three-digit numbers accurately.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "wa-001",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 24 + 13?",

            hint: "Add the ones first, then the tens.",

            options: [
                "36",
                "37",
                "38",
                "39"
            ],

            correctAnswer: "37",

            explanation:
                "Add the ones: 4 + 3 = 7. Add the tens: 2 + 1 = 3. The answer is 37."
        },

        {
            id: "wa-002",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 35 + 22?",

            hint: "Line up the tens and ones, then add each column.",

            options: [
                "55",
                "56",
                "57",
                "58"
            ],

            correctAnswer: "57",

            explanation:
                "5 + 2 = 7 ones and 3 + 2 = 5 tens. So 35 + 22 = 57."
        },

        {
            id: "wa-003",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 41 + 26?",

            hint: "Add the ones column first.",

            options: [
                "65",
                "66",
                "67",
                "68"
            ],

            correctAnswer: "67",

            explanation:
                "1 + 6 = 7 and 4 + 2 = 6. Therefore, 41 + 26 = 67."
        },

        {
            id: "wa-004",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 52 + 34?",

            hint: "Add 2 + 4, then add the tens.",

            options: [
                "84",
                "85",
                "86",
                "87"
            ],

            correctAnswer: "86",

            explanation:
                "2 + 4 = 6 and 5 + 3 = 8. So 52 + 34 = 86."
        },

        {
            id: "wa-005",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 63 + 25?",

            hint: "Add the ones and tens separately.",

            options: [
                "86",
                "87",
                "88",
                "89"
            ],

            correctAnswer: "88",

            explanation:
                "3 + 5 = 8 and 6 + 2 = 8. Therefore, 63 + 25 = 88."
        },

        {
            id: "wa-006",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 71 + 18?",

            hint: "Add the ones first: 1 + 8.",

            options: [
                "88",
                "89",
                "90",
                "91"
            ],

            correctAnswer: "89",

            explanation:
                "1 + 8 = 9 and 7 + 1 = 8. So 71 + 18 = 89."
        },

        {
            id: "wa-007",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 42 + 37?",

            hint: "Add the ones column and then the tens column.",

            options: [
                "77",
                "78",
                "79",
                "80"
            ],

            correctAnswer: "79",

            explanation:
                "2 + 7 = 9 and 4 + 3 = 7. Therefore, 42 + 37 = 79."
        },

        {
            id: "wa-008",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 54 + 35?",

            hint: "Keep the place values lined up.",

            options: [
                "87",
                "88",
                "89",
                "90"
            ],

            correctAnswer: "89",

            explanation:
                "4 + 5 = 9 and 5 + 3 = 8. So 54 + 35 = 89."
        },

        {
            id: "wa-009",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 126 + 43?",

            hint: "Line up the hundreds, tens and ones before adding.",

            options: [
                "167",
                "168",
                "169",
                "170"
            ],

            correctAnswer: "169",

            explanation:
                "6 + 3 = 9 ones, 2 + 4 = 6 tens, and the 1 hundred remains. So the answer is 169."
        },

        {
            id: "wa-010",
            skillId: "written-addition",
            stage: "recognise",
            difficulty: 1,

            question: "What is 215 + 34?",

            hint: "Add the ones, then tens, then hundreds.",

            options: [
                "239",
                "249",
                "259",
                "269"
            ],

            correctAnswer: "249",

            explanation:
                "5 + 4 = 9, 1 + 3 = 4, and the 2 hundreds remains. So 215 + 34 = 249."
        },
                {
            id: "wa-011",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 47 + 28?",

            hint: "Add the ones first. If the total is 10 or more, exchange for one ten.",

            options: [
                "74",
                "75",
                "76",
                "77"
            ],

            correctAnswer: "75",

            explanation:
                "7 + 8 = 15. Write 5 ones and exchange 10 ones for 1 ten. Then 4 + 2 + 1 = 7 tens. The answer is 75."
        },

        {
            id: "wa-012",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 56 + 37?",

            hint: "Add the ones first and remember to exchange if needed.",

            options: [
                "92",
                "93",
                "94",
                "95"
            ],

            correctAnswer: "93",

            explanation:
                "6 + 7 = 13. Write 3 ones and exchange 10 ones for 1 ten. Then 5 + 3 + 1 = 9 tens. The answer is 93."
        },

        {
            id: "wa-013",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 68 + 25?",

            hint: "Add 8 + 5 first, then add the tens including the exchanged ten.",

            options: [
                "91",
                "92",
                "93",
                "94"
            ],

            correctAnswer: "93",

            explanation:
                "8 + 5 = 13. Write 3 and exchange 1 ten. Then 6 + 2 + 1 = 9. The answer is 93."
        },

        {
            id: "wa-014",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 75 + 48?",

            hint: "Add the ones first, then the tens.",

            options: [
                "121",
                "122",
                "123",
                "124"
            ],

            correctAnswer: "123",

            explanation:
                "5 + 8 = 13. Write 3 and exchange 1 ten. Then 7 + 4 + 1 = 12 tens. The answer is 123."
        },

        {
            id: "wa-015",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 126 + 57?",

            hint: "Line up the place values and remember to exchange from the ones column.",

            options: [
                "181",
                "182",
                "183",
                "184"
            ],

            correctAnswer: "183",

            explanation:
                "6 + 7 = 13. Write 3 and exchange 1 ten. Then 2 + 5 + 1 = 8 tens. The 1 hundred remains, giving 183."
        },

        {
            id: "wa-016",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 235 + 48?",

            hint: "Add the ones, then the tens, then the hundreds.",

            options: [
                "281",
                "282",
                "283",
                "284"
            ],

            correctAnswer: "283",

            explanation:
                "5 + 8 = 13. Write 3 and exchange 1 ten. Then 3 + 4 + 1 = 8 tens. The 2 hundreds remains. The answer is 283."
        },

        {
            id: "wa-017",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 314 + 79?",

            hint: "Add the ones first. Then add the exchanged ten to the tens column.",

            options: [
                "392",
                "393",
                "394",
                "395"
            ],

            correctAnswer: "393",

            explanation:
                "4 + 9 = 13. Write 3 and exchange 1 ten. Then 1 + 7 + 1 = 9 tens. The 3 hundreds remains, giving 393."
        },

        {
            id: "wa-018",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 248 + 65?",

            hint: "Keep the hundreds, tens and ones in their correct columns.",

            options: [
                "311",
                "312",
                "313",
                "314"
            ],

            correctAnswer: "313",

            explanation:
                "8 + 5 = 13. Write 3 and exchange 1 ten. Then 4 + 6 + 1 = 11 tens. Write 1 ten and exchange another ten to the hundreds. 2 + 1 = 3 hundreds. The answer is 313."
        },

        {
            id: "wa-019",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "What is 157 + 86?",

            hint: "Start with 7 + 6 and exchange when you reach 10.",

            options: [
                "242",
                "243",
                "244",
                "245"
            ],

            correctAnswer: "243",

            explanation:
                "7 + 6 = 13. Write 3 and exchange 1 ten. Then 5 + 8 + 1 = 14 tens. Write 4 tens and exchange 1 hundred. Finally, 1 + 1 = 2 hundreds. The answer is 243."
        },

        {
            id: "wa-020",
            skillId: "written-addition",
            stage: "apply",
            difficulty: 2,

            question: "Sia collects 168 magical stones and then finds 75 more. How many stones does she have altogether?",

            hint: "Set out 168 + 75 in columns and add from the ones column.",

            options: [
                "241",
                "242",
                "243",
                "244"
            ],

            correctAnswer: "243",

            explanation:
                "168 + 75 = 243. Sia has 243 magical stones altogether."
        },
                {
            id: "wa-021",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 347 + 126?",

            hint: "Add the ones, then tens, then hundreds. Exchange when a column reaches 10 or more.",

            options: [
                "472",
                "473",
                "474",
                "475"
            ],

            correctAnswer: "473",

            explanation:
                "7 + 6 = 13, so write 3 and exchange 1 ten. 4 + 2 + 1 = 7 tens. 3 + 1 = 4 hundreds. The answer is 473."
        },

        {
            id: "wa-022",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 258 + 167?",

            hint: "Work from the ones column and exchange where necessary.",

            options: [
                "424",
                "425",
                "426",
                "427"
            ],

            correctAnswer: "425",

            explanation:
                "8 + 7 = 15. Write 5 and exchange 1 ten. 5 + 6 + 1 = 12, so write 2 tens and exchange 1 hundred. 2 + 1 + 1 = 4 hundreds. The answer is 425."
        },

        {
            id: "wa-023",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 376 + 248?",

            hint: "Remember that an exchange from one column is added to the next column.",

            options: [
                "614",
                "624",
                "634",
                "644"
            ],

            correctAnswer: "624",

            explanation:
                "6 + 8 = 14. Write 4 and exchange 1 ten. 7 + 4 + 1 = 12, so write 2 and exchange 1 hundred. 3 + 2 + 1 = 6. The answer is 624."
        },

        {
            id: "wa-024",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 485 + 237?",

            hint: "Add each place-value column carefully, starting with the ones.",

            options: [
                "712",
                "722",
                "732",
                "742"
            ],

            correctAnswer: "722",

            explanation:
                "5 + 7 = 12. Write 2 and exchange 1 ten. 8 + 3 + 1 = 12, so write 2 and exchange 1 hundred. 4 + 2 + 1 = 7. The answer is 722."
        },

        {
            id: "wa-025",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "What is 329 + 184?",

            hint: "Add the ones and exchange, then do the same with the tens.",

            options: [
                "503",
                "513",
                "523",
                "533"
            ],

            correctAnswer: "513",

            explanation:
                "9 + 4 = 13. Write 3 and exchange 1 ten. 2 + 8 + 1 = 11, so write 1 and exchange 1 hundred. 3 + 1 + 1 = 5. The answer is 513."
        },

        {
            id: "wa-026",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "A library receives 275 new books in September and 168 more in October. How many new books does it receive altogether?",

            hint: "Add 275 and 168 using the column method.",

            options: [
                "433",
                "443",
                "453",
                "463"
            ],

            correctAnswer: "443",

            explanation:
                "275 + 168 = 443. The library receives 443 new books altogether."
        },

        {
            id: "wa-027",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "Sia earns 286 points in one game and 159 points in another. What is her total score?",

            hint: "Set out the two numbers in columns and exchange when needed.",

            options: [
                "435",
                "445",
                "455",
                "465"
            ],

            correctAnswer: "445",

            explanation:
                "286 + 159 = 445. Sia's total score is 445 points."
        },

        {
            id: "wa-028",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "A farmer collects 347 apples in the morning and 286 in the afternoon. How many apples does the farmer collect altogether?",

            hint: "Add the ones, tens and hundreds columns, remembering each exchange.",

            options: [
                "623",
                "633",
                "643",
                "653"
            ],

            correctAnswer: "633",

            explanation:
                "347 + 286 = 633. The farmer collects 633 apples altogether."
        },

        {
            id: "wa-029",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "Which calculation gives the same answer as 264 + 138?",

            hint: "First work out the original calculation.",

            options: [
                "250 + 152",
                "260 + 142",
                "270 + 132",
                "280 + 122"
            ],

            correctAnswer: "250 + 152",

            explanation:
                "264 + 138 = 402. Also, 250 + 152 = 402, so they have the same answer."
        },

        {
            id: "wa-030",
            skillId: "written-addition",
            stage: "master",
            difficulty: 3,

            question: "A magical shop has 238 blue gems, 176 green gems and 145 red gems. How many gems are there altogether?",

            hint: "Add two numbers first, then add the third. You can use the column method for accuracy.",

            options: [
                "549",
                "559",
                "569",
                "579"
            ],

            correctAnswer: "559",

            explanation:
                "238 + 176 = 414. Then 414 + 145 = 559. There are 559 gems altogether."
        }

    ]
};

export default writtenAddition;

export {
    writtenAddition
};