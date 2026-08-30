import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  ADDITION PROBLEMS
==================================================*/

const additionProblems: SkillContent = {
    skillId: "addition-problems",

    title: "Addition Problems",

    description: "Solve one-step and multi-step problems involving addition in real-life and mathematical contexts.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "ap-001",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has 24 magical stars and finds 13 more. How many stars does she have altogether?",

            hint: "Add the two amounts together.",

            options: [
                "36",
                "37",
                "38",
                "39"
            ],

            correctAnswer: "37",

            explanation:
                "Sia has 24 + 13 = 37 magical stars altogether."
        },

        {
            id: "ap-002",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A box contains 35 blue gems and 22 green gems. How many gems are there altogether?",

            hint: "Add the blue gems and green gems.",

            options: [
                "55",
                "56",
                "57",
                "58"
            ],

            correctAnswer: "57",

            explanation:
                "35 + 22 = 57, so there are 57 gems altogether."
        },

        {
            id: "ap-003",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 41 pupils in two groups. One group has 26 pupils. How many pupils are in the other group?",

            hint: "This problem asks for a missing part of the total.",

            options: [
                "14",
                "15",
                "16",
                "17"
            ],

            correctAnswer: "15",

            explanation:
                "The total is 41 and one group has 26. 41 - 26 = 15, so the other group has 15 pupils."
        },

        {
            id: "ap-004",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A wizard collects 32 spell cards and then receives 17 more. How many spell cards does the wizard have?",

            hint: "Find the total by adding the two amounts.",

            options: [
                "48",
                "49",
                "50",
                "51"
            ],

            correctAnswer: "49",

            explanation:
                "32 + 17 = 49, so the wizard has 49 spell cards."
        },

        {
            id: "ap-005",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A treasure chest has 45 coins. Sia puts 18 more coins into it. How many coins are in the chest now?",

            hint: "The number of coins increases, so add.",

            options: [
                "61",
                "62",
                "63",
                "64"
            ],

            correctAnswer: "63",

            explanation:
                "45 + 18 = 63, so there are 63 coins in the chest."
        },

        {
            id: "ap-006",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A library has 52 storybooks and buys 25 more. How many storybooks does it have now?",

            hint: "Add the books it already has to the books it buys.",

            options: [
                "76",
                "77",
                "78",
                "79"
            ],

            correctAnswer: "77",

            explanation:
                "52 + 25 = 77, so the library now has 77 storybooks."
        },

        {
            id: "ap-007",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia walks 28 metres and then walks another 15 metres. How far does she walk altogether?",

            hint: "Combine the two distances.",

            options: [
                "42 metres",
                "43 metres",
                "44 metres",
                "45 metres"
            ],

            correctAnswer: "43 metres",

            explanation:
                "28 + 15 = 43, so Sia walks 43 metres altogether."
        },

        {
            id: "ap-008",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A farmer collects 63 apples in the morning and 24 in the afternoon. How many apples does the farmer collect altogether?",

            hint: "Add the morning and afternoon amounts.",

            options: [
                "86",
                "87",
                "88",
                "89"
            ],

            correctAnswer: "87",

            explanation:
                "63 + 24 = 87, so the farmer collects 87 apples altogether."
        },

        {
            id: "ap-009",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A game gives Sia 36 points in the first round and 27 points in the second round. What is her total score?",

            hint: "Add the scores from both rounds.",

            options: [
                "62",
                "63",
                "64",
                "65"
            ],

            correctAnswer: "63",

            explanation:
                "36 + 27 = 63, so Sia's total score is 63 points."
        },

        {
            id: "ap-010",
            skillId: "addition-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A magical garden has 125 red flowers and 34 yellow flowers. How many flowers are there altogether?",

            hint: "Add the two numbers of flowers.",

            options: [
                "157",
                "158",
                "159",
                "160"
            ],

            correctAnswer: "159",

            explanation:
                "125 + 34 = 159, so there are 159 flowers altogether."
        },
                {
            id: "ap-011",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A school has 146 pupils in one building and 78 in another. How many pupils are there altogether?",

            hint: "Add the two groups of pupils.",

            options: [
                "222",
                "223",
                "224",
                "225"
            ],

            correctAnswer: "224",

            explanation:
                "146 + 78 = 224, so there are 224 pupils altogether."
        },

        {
            id: "ap-012",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A treasure hunter finds 137 gold coins and then finds 86 silver coins. How many coins does the hunter find altogether?",

            hint: "Add 137 and 86 using a suitable written or mental method.",

            options: [
                "222",
                "223",
                "224",
                "225"
            ],

            correctAnswer: "223",

            explanation:
                "137 + 86 = 223, so the treasure hunter finds 223 coins altogether."
        },

        {
            id: "ap-013",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A library has 238 fiction books and 157 non-fiction books. How many books are there altogether?",

            hint: "Add the two groups of books.",

            options: [
                "394",
                "395",
                "396",
                "397"
            ],

            correctAnswer: "395",

            explanation:
                "238 + 157 = 395, so the library has 395 books altogether."
        },

        {
            id: "ap-014",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia earns 125 points on Monday and 148 points on Tuesday. How many points does she earn altogether?",

            hint: "Add the scores from the two days.",

            options: [
                "271",
                "272",
                "273",
                "274"
            ],

            correctAnswer: "273",

            explanation:
                "125 + 148 = 273, so Sia earns 273 points altogether."
        },

        {
            id: "ap-015",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A farmer has 276 sheep in one field and 139 sheep in another. How many sheep are there altogether?",

            hint: "Combine the two groups.",

            options: [
                "414",
                "415",
                "416",
                "417"
            ],

            correctAnswer: "415",

            explanation:
                "276 + 139 = 415, so there are 415 sheep altogether."
        },

        {
            id: "ap-016",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A shop sells 184 blue pencils and 127 red pencils. How many pencils does it sell altogether?",

            hint: "Add the numbers of blue and red pencils.",

            options: [
                "310",
                "311",
                "312",
                "313"
            ],

            correctAnswer: "311",

            explanation:
                "184 + 127 = 311, so the shop sells 311 pencils altogether."
        },

        {
            id: "ap-017",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A train carries 235 passengers. At the next station, 48 more passengers get on. How many passengers are on the train now?",

            hint: "The number of passengers increases, so add 48 to 235.",

            options: [
                "282",
                "283",
                "284",
                "285"
            ],

            correctAnswer: "283",

            explanation:
                "235 + 48 = 283, so there are 283 passengers on the train."
        },

        {
            id: "ap-018",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A magical garden has 168 blue flowers and 157 purple flowers. How many flowers are there altogether?",

            hint: "Add the two groups of flowers.",

            options: [
                "324",
                "325",
                "326",
                "327"
            ],

            correctAnswer: "325",

            explanation:
                "168 + 157 = 325, so there are 325 flowers altogether."
        },

        {
            id: "ap-019",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "A school collects 245 cans in one week and 178 cans the next week. How many cans are collected altogether?",

            hint: "Add the two weekly totals.",

            options: [
                "421",
                "422",
                "423",
                "424"
            ],

            correctAnswer: "423",

            explanation:
                "245 + 178 = 423, so the school collects 423 cans altogether."
        },

        {
            id: "ap-020",
            skillId: "addition-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 156 stickers. Her friend gives her 89 more. She then finds 35 more in a drawer. How many stickers does she have altogether?",

            hint: "Add all three amounts together.",

            options: [
                "279",
                "280",
                "281",
                "282"
            ],

            correctAnswer: "280",

            explanation:
                "156 + 89 = 245. Then 245 + 35 = 280, so Sia has 280 stickers altogether."
        },
                {
            id: "ap-021",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A school library has 247 fiction books and 186 non-fiction books. It then receives 125 new books. How many books does the library have now?",

            hint: "Add the first two amounts, then add the new books.",

            options: [
                "557",
                "558",
                "559",
                "560"
            ],

            correctAnswer: "558",

            explanation:
                "247 + 186 = 433. Then 433 + 125 = 558. The library now has 558 books."
        },

        {
            id: "ap-022",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia collects 135 magical stones on Monday, 178 on Tuesday and 96 on Wednesday. How many stones does she collect altogether?",

            hint: "Add the three amounts together.",

            options: [
                "408",
                "409",
                "410",
                "411"
            ],

            correctAnswer: "409",

            explanation:
                "135 + 178 = 313. Then 313 + 96 = 409. Sia collects 409 stones altogether."
        },

        {
            id: "ap-023",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A theatre has 238 seats downstairs and 175 seats upstairs. For a special event, 47 extra seats are added. How many seats are available altogether?",

            hint: "First add the two existing groups of seats, then add the extra seats.",

            options: [
                "459",
                "460",
                "461",
                "462"
            ],

            correctAnswer: "460",

            explanation:
                "238 + 175 = 413. Then 413 + 47 = 460. There are 460 seats available altogether."
        },

        {
            id: "ap-024",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A farmer collects 326 apples in the morning and 248 in the afternoon. The next day, the farmer collects another 175. How many apples are collected altogether?",

            hint: "Add all three amounts carefully.",

            options: [
                "748",
                "749",
                "750",
                "751"
            ],

            correctAnswer: "749",

            explanation:
                "326 + 248 = 574. Then 574 + 175 = 749 apples altogether."
        },

        {
            id: "ap-025",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A magical shop sells 157 red gems, 286 blue gems and 138 green gems. How many gems does it sell altogether?",

            hint: "Add two amounts first, then add the third.",

            options: [
                "580",
                "581",
                "582",
                "583"
            ],

            correctAnswer: "581",

            explanation:
                "157 + 286 = 443. Then 443 + 138 = 581. The shop sells 581 gems altogether."
        },

        {
            id: "ap-026",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A school raises £245 at a fair and £178 at a cake sale. Parents then donate another £125. How much money is raised altogether?",

            hint: "Add the three amounts.",

            options: [
                "548",
                "549",
                "550",
                "551"
            ],

            correctAnswer: "548",

            explanation:
                "245 + 178 = 423. Then 423 + 125 = 548. The school raises £548 altogether."
        },

        {
            id: "ap-027",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has 186 points. She earns 95 points in one challenge and 127 points in another. What is her new total?",

            hint: "Add all three scores.",

            options: [
                "407",
                "408",
                "409",
                "410"
            ],

            correctAnswer: "408",

            explanation:
                "186 + 95 = 281. Then 281 + 127 = 408. Sia's new total is 408 points."
        },

        {
            id: "ap-028",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A library has 315 books. It receives 148 new books in one delivery and 137 in another. How many books does it have now?",

            hint: "Find the total number of new books first, then add it to 315.",

            options: [
                "599",
                "600",
                "601",
                "602"
            ],

            correctAnswer: "600",

            explanation:
                "148 + 137 = 285. Then 315 + 285 = 600. The library now has 600 books."
        },

        {
            id: "ap-029",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A coach records 126 points for one team, 189 for another and 157 for a third. What is the total number of points?",

            hint: "Add the three scores together.",

            options: [
                "471",
                "472",
                "473",
                "474"
            ],

            correctAnswer: "472",

            explanation:
                "126 + 189 = 315. Then 315 + 157 = 472. The total is 472 points."
        },

        {
            id: "ap-030",
            skillId: "addition-problems",
            stage: "master",
            difficulty: 3,

            question: "A magical academy has 275 pupils. 86 new pupils join in September and 49 more join later in the year. How many pupils are there altogether now?",

            hint: "Add the two groups of new pupils first, then add them to the original number.",

            options: [
                "409",
                "410",
                "411",
                "412"
            ],

            correctAnswer: "410",

            explanation:
                "86 + 49 = 135. Then 275 + 135 = 410. There are 410 pupils altogether now."
        }

    ]
};

export default additionProblems;

export {
    additionProblems
};