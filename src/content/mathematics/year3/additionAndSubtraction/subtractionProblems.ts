import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  SUBTRACTION PROBLEMS
==================================================*/

const subtractionProblems: SkillContent = {
    skillId: "subtraction-problems",

    title: "Subtraction Problems",

    description: "Solve one-step and multi-step problems involving subtraction in real-life and mathematical contexts.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "sp-001",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has 35 magical stars and gives 12 away. How many stars does she have left?",

            hint: "The number of stars decreases, so subtract 12 from 35.",

            options: [
                "22",
                "23",
                "24",
                "25"
            ],

            correctAnswer: "23",

            explanation:
                "35 - 12 = 23, so Sia has 23 magical stars left."
        },

        {
            id: "sp-002",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A box contains 48 gems. Sia uses 25 of them. How many gems remain?",

            hint: "Subtract the gems that were used from the total.",

            options: [
                "21",
                "22",
                "23",
                "24"
            ],

            correctAnswer: "23",

            explanation:
                "48 - 25 = 23, so 23 gems remain."
        },

        {
            id: "sp-003",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A wizard has 52 spell cards and gives 17 to a friend. How many spell cards does the wizard have left?",

            hint: "Take 17 away from 52.",

            options: [
                "34",
                "35",
                "36",
                "37"
            ],

            correctAnswer: "35",

            explanation:
                "52 - 17 = 35, so the wizard has 35 spell cards left."
        },

        {
            id: "sp-004",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A library has 63 books on a shelf. Pupils borrow 24. How many books remain on the shelf?",

            hint: "Subtract the borrowed books from the total.",

            options: [
                "38",
                "39",
                "40",
                "41"
            ],

            correctAnswer: "39",

            explanation:
                "63 - 24 = 39, so 39 books remain."
        },

        {
            id: "sp-005",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has 70 points and spends 30 points. How many points does she have left?",

            hint: "Take three tens away from seven tens.",

            options: [
                "30",
                "40",
                "50",
                "60"
            ],

            correctAnswer: "40",

            explanation:
                "70 - 30 = 40, so Sia has 40 points left."
        },

        {
            id: "sp-006",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A farmer has 85 apples and sells 42. How many apples are left?",

            hint: "Subtract the number sold from the number the farmer had.",

            options: [
                "42",
                "43",
                "44",
                "45"
            ],

            correctAnswer: "43",

            explanation:
                "85 - 42 = 43, so 43 apples remain."
        },

        {
            id: "sp-007",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A treasure chest contains 91 coins. Sia takes 16 coins. How many coins are still in the chest?",

            hint: "Subtract 16 from 91.",

            options: [
                "74",
                "75",
                "76",
                "77"
            ],

            correctAnswer: "75",

            explanation:
                "91 - 16 = 75, so 75 coins remain in the chest."
        },

        {
            id: "sp-008",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A magical garden has 76 flowers. 25 flowers are picked. How many flowers are left?",

            hint: "Find the difference between 76 and 25.",

            options: [
                "50",
                "51",
                "52",
                "53"
            ],

            correctAnswer: "51",

            explanation:
                "76 - 25 = 51, so 51 flowers are left."
        },

        {
            id: "sp-009",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A game starts with 100 points. Sia loses 35 points. How many points does she have now?",

            hint: "Subtract 35 from 100.",

            options: [
                "64",
                "65",
                "66",
                "67"
            ],

            correctAnswer: "65",

            explanation:
                "100 - 35 = 65, so Sia has 65 points now."
        },

        {
            id: "sp-010",
            skillId: "subtraction-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A school has 125 pencils. It gives 34 pencils to a class. How many pencils remain?",

            hint: "Subtract the pencils given away from the starting amount.",

            options: [
                "90",
                "91",
                "92",
                "93"
            ],

            correctAnswer: "91",

            explanation:
                "125 - 34 = 91, so 91 pencils remain."
        },
                {
            id: "sp-011",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A school has 146 pupils. 78 pupils go on a trip. How many pupils stay at school?",

            hint: "Subtract the pupils who go on the trip from the total.",

            options: [
                "67",
                "68",
                "69",
                "70"
            ],

            correctAnswer: "68",

            explanation:
                "146 - 78 = 68, so 68 pupils stay at school."
        },

        {
            id: "sp-012",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A treasure hunter has 137 coins and spends 86 of them. How many coins are left?",

            hint: "Subtract 86 from 137.",

            options: [
                "50",
                "51",
                "52",
                "53"
            ],

            correctAnswer: "51",

            explanation:
                "137 - 86 = 51, so 51 coins are left."
        },

        {
            id: "sp-013",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A library has 238 books. Pupils borrow 157. How many books remain?",

            hint: "Take the borrowed books away from the total.",

            options: [
                "80",
                "81",
                "82",
                "83"
            ],

            correctAnswer: "81",

            explanation:
                "238 - 157 = 81, so 81 books remain."
        },

        {
            id: "sp-014",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 125 points and loses 48 points. How many points does she have left?",

            hint: "Subtract 48 from 125.",

            options: [
                "76",
                "77",
                "78",
                "79"
            ],

            correctAnswer: "77",

            explanation:
                "125 - 48 = 77, so Sia has 77 points left."
        },

        {
            id: "sp-015",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A farmer has 276 sheep. 139 sheep are moved to another field. How many sheep remain?",

            hint: "Subtract the sheep that are moved from the original total.",

            options: [
                "136",
                "137",
                "138",
                "139"
            ],

            correctAnswer: "137",

            explanation:
                "276 - 139 = 137, so 137 sheep remain."
        },

        {
            id: "sp-016",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A shop has 184 pencils. It sells 127 pencils. How many pencils are left?",

            hint: "Subtract the number sold from the starting amount.",

            options: [
                "56",
                "57",
                "58",
                "59"
            ],

            correctAnswer: "57",

            explanation:
                "184 - 127 = 57, so 57 pencils are left."
        },

        {
            id: "sp-017",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A train has 235 passengers. At the next station, 48 passengers get off. How many passengers remain?",

            hint: "The number of passengers decreases, so subtract 48.",

            options: [
                "186",
                "187",
                "188",
                "189"
            ],

            correctAnswer: "187",

            explanation:
                "235 - 48 = 187, so 187 passengers remain on the train."
        },

        {
            id: "sp-018",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A magical garden has 325 flowers. 157 are picked. How many flowers remain?",

            hint: "Subtract the flowers that are picked from the total.",

            options: [
                "167",
                "168",
                "169",
                "170"
            ],

            correctAnswer: "168",

            explanation:
                "325 - 157 = 168, so 168 flowers remain."
        },

        {
            id: "sp-019",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "A school collects 423 cans. It sends 178 cans for recycling. How many cans are left?",

            hint: "Subtract the cans sent away from the total collected.",

            options: [
                "244",
                "245",
                "246",
                "247"
            ],

            correctAnswer: "245",

            explanation:
                "423 - 178 = 245, so 245 cans are left."
        },

        {
            id: "sp-020",
            skillId: "subtraction-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 280 stickers. She gives 89 to a friend and then gives 35 to her brother. How many stickers does she have left?",

            hint: "Subtract both amounts from 280.",

            options: [
                "155",
                "156",
                "157",
                "158"
            ],

            correctAnswer: "156",

            explanation:
                "280 - 89 = 191. Then 191 - 35 = 156, so Sia has 156 stickers left."
        },
                {
            id: "sp-021",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A school library has 558 books. It lends 186 books and then lends another 125. How many books remain?",

            hint: "Subtract 186 first, then subtract 125 from what remains.",

            options: [
                "246",
                "247",
                "248",
                "249"
            ],

            correctAnswer: "247",

            explanation:
                "558 - 186 = 372. Then 372 - 125 = 247. So 247 books remain."
        },

        {
            id: "sp-022",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has 600 points. She spends 175 points on one reward and 148 points on another. How many points does she have left?",

            hint: "Subtract both amounts from 600.",

            options: [
                "276",
                "277",
                "278",
                "279"
            ],

            correctAnswer: "277",

            explanation:
                "600 - 175 = 425. Then 425 - 148 = 277. Sia has 277 points left."
        },

        {
            id: "sp-023",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A farmer has 749 apples. He sells 248 in the morning and 175 in the afternoon. How many apples remain?",

            hint: "Find how many apples were sold altogether, then subtract that from 749.",

            options: [
                "325",
                "326",
                "327",
                "328"
            ],

            correctAnswer: "326",

            explanation:
                "248 + 175 = 423. Then 749 - 423 = 326. So 326 apples remain."
        },

        {
            id: "sp-024",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A magical shop has 581 gems. It sells 157 red gems and 138 blue gems. How many gems remain?",

            hint: "Subtract both groups of gems from the total.",

            options: [
                "285",
                "286",
                "287",
                "288"
            ],

            correctAnswer: "286",

            explanation:
                "581 - 157 = 424. Then 424 - 138 = 286. There are 286 gems remaining."
        },

        {
            id: "sp-025",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A theatre has 725 seats. During a performance, 348 seats are occupied. How many seats are empty?",

            hint: "Subtract the occupied seats from the total number of seats.",

            options: [
                "376",
                "377",
                "378",
                "379"
            ],

            correctAnswer: "377",

            explanation:
                "725 - 348 = 377, so 377 seats are empty."
        },

        {
            id: "sp-026",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A school has 640 pencils. It gives 275 pencils to Year 3 and 148 pencils to Year 4. How many pencils remain?",

            hint: "Subtract both groups of pencils from 640.",

            options: [
                "216",
                "217",
                "218",
                "219"
            ],

            correctAnswer: "217",

            explanation:
                "640 - 275 = 365. Then 365 - 148 = 217. So 217 pencils remain."
        },

        {
            id: "sp-027",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has 850 magical tokens. She gives 286 to Hop and 157 to Hootie. How many tokens does she have left?",

            hint: "Subtract both amounts from 850.",

            options: [
                "406",
                "407",
                "408",
                "409"
            ],

            correctAnswer: "407",

            explanation:
                "850 - 286 = 564. Then 564 - 157 = 407. Sia has 407 tokens left."
        },

        {
            id: "sp-028",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A library starts with 900 books. It removes 245 damaged books and then gives 178 books to another school. How many books remain?",

            hint: "Subtract the damaged books first, then subtract the books given away.",

            options: [
                "476",
                "477",
                "478",
                "479"
            ],

            correctAnswer: "477",

            explanation:
                "900 - 245 = 655. Then 655 - 178 = 477. So 477 books remain."
        },

        {
            id: "sp-029",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A game gives Sia 700 points. She uses 185 points for one reward and 236 for another. How many points are left?",

            hint: "Add the points she uses, then subtract that total from 700.",

            options: [
                "278",
                "279",
                "280",
                "281"
            ],

            correctAnswer: "279",

            explanation:
                "185 + 236 = 421. Then 700 - 421 = 279. Sia has 279 points left."
        },

        {
            id: "sp-030",
            skillId: "subtraction-problems",
            stage: "master",
            difficulty: 3,

            question: "A magical academy has 825 pupils. During the year, 176 pupils leave and 89 new pupils join. How many pupils are there now?",

            hint: "First subtract the pupils who leave, then add the pupils who join.",

            options: [
                "737",
                "738",
                "739",
                "740"
            ],

            correctAnswer: "738",

            explanation:
                "825 - 176 = 649. Then 649 + 89 = 738. There are 738 pupils now."
        }

    ]
};

export default subtractionProblems;

export {
    subtractionProblems
};