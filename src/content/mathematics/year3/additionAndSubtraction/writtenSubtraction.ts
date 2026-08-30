import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  WRITTEN SUBTRACTION
==================================================*/

const writtenSubtraction: SkillContent = {
    skillId: "written-subtraction",

    title: "Written Subtraction",

    description: "Use the written column method to subtract two and three-digit numbers accurately.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ws-001",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 37 - 12?",

            hint: "Subtract the ones first, then the tens.",

            options: [
                "24",
                "25",
                "26",
                "27"
            ],

            correctAnswer: "25",

            explanation:
                "7 - 2 = 5 and 3 - 1 = 2. So 37 - 12 = 25."
        },

        {
            id: "ws-002",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 48 - 25?",

            hint: "Keep the tens and ones in their correct columns.",

            options: [
                "21",
                "22",
                "23",
                "24"
            ],

            correctAnswer: "23",

            explanation:
                "8 - 5 = 3 and 4 - 2 = 2. Therefore, 48 - 25 = 23."
        },

        {
            id: "ws-003",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 65 - 23?",

            hint: "Subtract the ones and then the tens.",

            options: [
                "40",
                "41",
                "42",
                "43"
            ],

            correctAnswer: "42",

            explanation:
                "5 - 3 = 2 and 6 - 2 = 4. So 65 - 23 = 42."
        },

        {
            id: "ws-004",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 79 - 34?",

            hint: "Subtract 4 from 9, then 3 from 7.",

            options: [
                "44",
                "45",
                "46",
                "47"
            ],

            correctAnswer: "45",

            explanation:
                "9 - 4 = 5 and 7 - 3 = 4. Therefore, 79 - 34 = 45."
        },

        {
            id: "ws-005",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 86 - 42?",

            hint: "Subtract the ones column first.",

            options: [
                "42",
                "43",
                "44",
                "45"
            ],

            correctAnswer: "44",

            explanation:
                "6 - 2 = 4 and 8 - 4 = 4. So 86 - 42 = 44."
        },

        {
            id: "ws-006",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 94 - 31?",

            hint: "Subtract 1 from 4, then subtract 3 tens from 9 tens.",

            options: [
                "61",
                "62",
                "63",
                "64"
            ],

            correctAnswer: "63",

            explanation:
                "4 - 1 = 3 and 9 - 3 = 6. Therefore, 94 - 31 = 63."
        },

        {
            id: "ws-007",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 58 - 16?",

            hint: "Subtract the ones, then the tens.",

            options: [
                "40",
                "41",
                "42",
                "43"
            ],

            correctAnswer: "42",

            explanation:
                "8 - 6 = 2 and 5 - 1 = 4. So 58 - 16 = 42."
        },

        {
            id: "ws-008",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 73 - 21?",

            hint: "Subtract each place-value column separately.",

            options: [
                "50",
                "51",
                "52",
                "53"
            ],

            correctAnswer: "52",

            explanation:
                "3 - 1 = 2 and 7 - 2 = 5. Therefore, 73 - 21 = 52."
        },

        {
            id: "ws-009",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 126 - 23?",

            hint: "Line up the hundreds, tens and ones before subtracting.",

            options: [
                "101",
                "102",
                "103",
                "104"
            ],

            correctAnswer: "103",

            explanation:
                "6 - 3 = 3, 2 - 2 = 0, and the 1 hundred remains. So 126 - 23 = 103."
        },

        {
            id: "ws-010",
            skillId: "written-subtraction",
            stage: "recognise",
            difficulty: 1,

            question: "What is 157 - 34?",

            hint: "Subtract the ones, then the tens, then the hundreds.",

            options: [
                "121",
                "122",
                "123",
                "124"
            ],

            correctAnswer: "123",

            explanation:
                "7 - 4 = 3, 5 - 3 = 2, and the 1 hundred remains. Therefore, 157 - 34 = 123."
        },
                {
            id: "ws-011",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 52 - 27?",

            hint: "You cannot subtract 7 ones from 2 ones, so exchange one ten for 10 ones.",

            options: [
                "24",
                "25",
                "26",
                "27"
            ],

            correctAnswer: "25",

            explanation:
                "Exchange one ten: 52 becomes 4 tens and 12 ones. 12 - 7 = 5 and 4 - 2 = 2. The answer is 25."
        },

        {
            id: "ws-012",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 63 - 28?",

            hint: "Exchange one ten so that you can subtract 8 ones from the ones column.",

            options: [
                "34",
                "35",
                "36",
                "37"
            ],

            correctAnswer: "35",

            explanation:
                "Exchange one ten: 63 becomes 5 tens and 13 ones. 13 - 8 = 5 and 5 - 2 = 3. The answer is 35."
        },

        {
            id: "ws-013",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 71 - 36?",

            hint: "Exchange one ten from 71 to make the ones column large enough.",

            options: [
                "34",
                "35",
                "36",
                "37"
            ],

            correctAnswer: "35",

            explanation:
                "Exchange one ten: 71 becomes 6 tens and 11 ones. 11 - 6 = 5 and 6 - 3 = 3. So 71 - 36 = 35."
        },

        {
            id: "ws-014",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 84 - 47?",

            hint: "Exchange one ten for 10 ones before subtracting.",

            options: [
                "36",
                "37",
                "38",
                "39"
            ],

            correctAnswer: "37",

            explanation:
                "84 becomes 7 tens and 14 ones. 14 - 7 = 7 and 7 - 4 = 3. The answer is 37."
        },

        {
            id: "ws-015",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 92 - 58?",

            hint: "Exchange one ten so you can subtract 8 ones from 2 ones.",

            options: [
                "32",
                "33",
                "34",
                "35"
            ],

            correctAnswer: "34",

            explanation:
                "92 becomes 8 tens and 12 ones. 12 - 8 = 4 and 8 - 5 = 3. Therefore, 92 - 58 = 34."
        },

        {
            id: "ws-016",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 145 - 27?",

            hint: "Exchange one ten from the tens column before subtracting the ones.",

            options: [
                "116",
                "117",
                "118",
                "119"
            ],

            correctAnswer: "118",

            explanation:
                "145 becomes 13 tens and 15 ones. 15 - 7 = 8 and 13 - 2 = 11 tens. The answer is 118."
        },

        {
            id: "ws-017",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 162 - 48?",

            hint: "You need to exchange from the tens column so you can subtract 8 ones.",

            options: [
                "112",
                "113",
                "114",
                "115"
            ],

            correctAnswer: "114",

            explanation:
                "162 becomes 15 tens and 12 ones. 12 - 8 = 4 and 15 - 4 = 11 tens. So 162 - 48 = 114."
        },

        {
            id: "ws-018",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 203 - 56?",

            hint: "There are zero tens, so you need to exchange through the hundreds column.",

            options: [
                "146",
                "147",
                "148",
                "149"
            ],

            correctAnswer: "147",

            explanation:
                "Exchange 1 hundred for 10 tens, then 1 ten for 10 ones. This gives 19 tens and 13 ones. 13 - 6 = 7, 9 - 5 = 4, and 1 hundred remains. The answer is 147."
        },

        {
            id: "ws-019",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "What is 250 - 75?",

            hint: "Exchange from the hundreds because there are zero ones and tens to begin with.",

            options: [
                "165",
                "170",
                "175",
                "180"
            ],

            correctAnswer: "175",

            explanation:
                "250 - 75 = 175. After exchanging, subtract 5 from 10 and 7 tens from 14 tens."
        },

        {
            id: "ws-020",
            skillId: "written-subtraction",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 134 magical stars and gives away 58. How many stars does she have left?",

            hint: "Set out 134 - 58 in columns and exchange where necessary.",

            options: [
                "74",
                "75",
                "76",
                "77"
            ],

            correctAnswer: "76",

            explanation:
                "134 - 58 = 76. Sia has 76 magical stars left."
        },
                {
            id: "ws-021",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 347 - 128?",

            hint: "Work from the ones column. Exchange when the top digit is too small.",

            options: [
                "218",
                "219",
                "220",
                "221"
            ],

            correctAnswer: "219",

            explanation:
                "7 - 8 requires an exchange, giving 17 - 8 = 9. Then 3 tens - 2 tens = 1 ten, and 3 hundreds - 1 hundred = 2 hundreds. The answer is 219."
        },

        {
            id: "ws-022",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 425 - 176?",

            hint: "Exchange from the tens when necessary, then continue across the columns.",

            options: [
                "248",
                "249",
                "250",
                "251"
            ],

            correctAnswer: "249",

            explanation:
                "425 - 176 = 249. Exchange one ten to make 15 ones, then exchange one hundred to make enough tens."
        },

        {
            id: "ws-023",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 512 - 238?",

            hint: "You need to exchange from the hundreds through the tens column.",

            options: [
                "273",
                "274",
                "275",
                "276"
            ],

            correctAnswer: "274",

            explanation:
                "512 - 238 = 274. After exchanging, subtract 8 from 12, 3 from 10, and 2 from 4."
        },

        {
            id: "ws-024",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 603 - 257?",

            hint: "The zero in the tens column means you must exchange through the hundreds.",

            options: [
                "344",
                "345",
                "346",
                "347"
            ],

            correctAnswer: "346",

            explanation:
                "603 - 257 = 346. Exchange from the hundreds through the tens column so the subtraction can be completed."
        },

        {
            id: "ws-025",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "What is 700 - 285?",

            hint: "Exchange through the zero tens column before subtracting the ones.",

            options: [
                "414",
                "415",
                "416",
                "417"
            ],

            correctAnswer: "415",

            explanation:
                "700 - 285 = 415. Exchange from the hundreds to create tens and ones, then subtract each column."
        },

        {
            id: "ws-026",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "A library has 425 books. It lends 178 books to pupils. How many books remain?",

            hint: "Set out 425 - 178 in columns and exchange where necessary.",

            options: [
                "247",
                "248",
                "249",
                "250"
            ],

            correctAnswer: "247",

            explanation:
                "425 - 178 = 247, so 247 books remain in the library."
        },

        {
            id: "ws-027",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "Sia has 500 points and spends 236 points. How many points does she have left?",

            hint: "Exchange through the zero tens column carefully.",

            options: [
                "264",
                "265",
                "266",
                "267"
            ],

            correctAnswer: "264",

            explanation:
                "500 - 236 = 264, so Sia has 264 points left."
        },

        {
            id: "ws-028",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "A farmer has 632 apples and sells 247. How many apples are left?",

            hint: "Subtract 247 from 632 using the column method.",

            options: [
                "384",
                "385",
                "386",
                "387"
            ],

            correctAnswer: "385",

            explanation:
                "632 - 247 = 385, so 385 apples remain."
        },

        {
            id: "ws-029",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "Which calculation gives the same answer as 542 - 178?",

            hint: "Work out 542 - 178 first, then compare the choices.",

            options: [
                "550 - 186",
                "540 - 174",
                "530 - 166",
                "520 - 154"
            ],

            correctAnswer: "550 - 186",

            explanation:
                "542 - 178 = 364. Also, 550 - 186 = 364, so the two calculations have the same answer."
        },

        {
            id: "ws-030",
            skillId: "written-subtraction",
            stage: "master",
            difficulty: 3,

            question: "A magical shop has 725 gems. It sells 348 gems during the week. How many gems remain?",

            hint: "Use the written subtraction method and exchange carefully.",

            options: [
                "376",
                "377",
                "378",
                "379"
            ],

            correctAnswer: "377",

            explanation:
                "725 - 348 = 377, so 377 gems remain in the shop."
        }

    ]
};

export default writtenSubtraction;

export {
    writtenSubtraction
};