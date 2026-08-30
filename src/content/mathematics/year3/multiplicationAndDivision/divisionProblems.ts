import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  DIVISION PROBLEMS
==================================================*/

const divisionProblems: SkillContent = {
    skillId: "division-problems",

    title: "Division Problems",

    description: "Solve Year 3 problems involving division using equal groups and sharing.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "dp-001",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 12 apples shared equally between 3 baskets. How many apples go in each basket?",

            hint: "Think about how many groups of 3 make 12.",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "12 ÷ 3 = 4, so each basket gets 4 apples."
        },

        {
            id: "dp-002",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has 20 shells and puts 4 shells in each bag. How many bags can she fill?",

            hint: "Find how many groups of 4 are in 20.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "20 ÷ 4 = 5, so Sia can fill 5 bags."
        },

        {
            id: "dp-003",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A wizard has 24 stars and puts 8 stars on each card. How many cards can he make?",

            hint: "Think about how many groups of 8 are in 24.",

            options: [
                "2",
                "3",
                "4",
                "6"
            ],

            correctAnswer: "3",

            explanation:
                "24 ÷ 8 = 3, so the wizard can make 3 cards."
        },

        {
            id: "dp-004",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 18 pencils shared equally between 3 children. How many pencils does each child get?",

            hint: "Divide 18 into 3 equal groups.",

            options: [
                "5",
                "6",
                "7",
                "9"
            ],

            correctAnswer: "6",

            explanation:
                "18 ÷ 3 = 6, so each child gets 6 pencils."
        },

        {
            id: "dp-005",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A teacher has 28 stickers and gives 4 stickers to each child. How many children can receive stickers?",

            hint: "Find how many groups of 4 are in 28.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "28 ÷ 4 = 7, so 7 children can receive stickers."
        },

        {
            id: "dp-006",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 32 counters placed into groups of 8. How many groups are made?",

            hint: "Count how many groups of 8 fit into 32.",

            options: [
                "3",
                "4",
                "5",
                "6"
            ],

            correctAnswer: "4",

            explanation:
                "32 ÷ 8 = 4, so 4 groups are made."
        },

        {
            id: "dp-007",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia has 21 points and shares them equally between 3 rounds. How many points are in each round?",

            hint: "Divide 21 by 3.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "21 ÷ 3 = 7, so each round has 7 points."
        },

        {
            id: "dp-008",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A shop has 24 books and puts 4 books on each shelf. How many shelves are needed?",

            hint: "Find how many groups of 4 are in 24.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "24 ÷ 4 = 6, so 6 shelves are needed."
        },

        {
            id: "dp-009",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "There are 40 gems shared equally between 8 bags. How many gems go in each bag?",

            hint: "Divide 40 by 8.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "40 ÷ 8 = 5, so each bag gets 5 gems."
        },

        {
            id: "dp-010",
            skillId: "division-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A class has 30 cards and puts 3 cards in each pack. How many packs can they make?",

            hint: "Find how many groups of 3 are in 30.",

            options: [
                "8",
                "9",
                "10",
                "12"
            ],

            correctAnswer: "10",

            explanation:
                "30 ÷ 3 = 10, so the class can make 10 packs."
        },
                {
            id: "dp-011",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "A farmer has 27 carrots and puts 3 carrots in each basket. How many baskets can he fill?",

            hint: "Find how many groups of 3 are in 27.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "27 ÷ 3 = 9, so the farmer can fill 9 baskets."
        },

        {
            id: "dp-012",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "A shop has 32 pencils and packs them into groups of 4. How many packs can be made?",

            hint: "Divide 32 by 4.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "8",

            explanation:
                "32 ÷ 4 = 8, so the shop can make 8 packs."
        },

        {
            id: "dp-013",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 24 magical stones and shares them equally between 8 pouches. How many stones go in each pouch?",

            hint: "Divide 24 into 8 equal groups.",

            options: [
                "2",
                "3",
                "4",
                "6"
            ],

            correctAnswer: "3",

            explanation:
                "24 ÷ 8 = 3, so each pouch gets 3 stones."
        },

        {
            id: "dp-014",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "There are 36 books. They are placed equally on 4 shelves. How many books go on each shelf?",

            hint: "Divide 36 by 4.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "36 ÷ 4 = 9, so each shelf has 9 books."
        },

        {
            id: "dp-015",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "A wizard has 40 stars and puts 8 stars in each box. How many boxes can he fill?",

            hint: "Find how many groups of 8 are in 40.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "40 ÷ 8 = 5, so the wizard can fill 5 boxes."
        },

        {
            id: "dp-016",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "There are 18 apples. Three apples are put into each bag. How many bags are needed?",

            hint: "Find how many groups of 3 are in 18.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "18 ÷ 3 = 6, so 6 bags are needed."
        },

        {
            id: "dp-017",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia has 28 points and puts the same number of points into each of 4 boxes. How many points go in each box?",

            hint: "Divide 28 equally between 4 boxes.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "28 ÷ 4 = 7, so each box gets 7 points."
        },

        {
            id: "dp-018",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "A class has 24 children. They form equal groups of 8. How many groups are there?",

            hint: "Find how many groups of 8 make 24.",

            options: [
                "2",
                "3",
                "4",
                "6"
            ],

            correctAnswer: "3",

            explanation:
                "24 ÷ 8 = 3, so there are 3 groups."
        },

        {
            id: "dp-019",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "A treasure chest has 21 gems. They are shared equally between 3 explorers. How many gems does each explorer get?",

            hint: "Divide 21 by 3.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "21 ÷ 3 = 7, so each explorer gets 7 gems."
        },

        {
            id: "dp-020",
            skillId: "division-problems",
            stage: "apply",
            difficulty: 2,

            question: "A shop has 32 cards. It puts 4 cards into each pack. Then 2 packs are sold. How many packs are left?",

            hint: "First find how many packs can be made.",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "6",

            explanation:
                "32 ÷ 4 = 8 packs. After selling 2 packs, 8 − 2 = 6 packs remain."
        },
                {
            id: "dp-021",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "A library has 48 books. They are shared equally between 8 shelves. How many books go on each shelf?",

            hint: "Divide 48 by 8.",

            options: [
                "5",
                "6",
                "7",
                "8"
            ],

            correctAnswer: "6",

            explanation:
                "48 ÷ 8 = 6, so each shelf gets 6 books."
        },

        {
            id: "dp-022",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has 36 gems. She puts 4 gems into each pouch. How many pouches can she fill?",

            hint: "Find how many groups of 4 are in 36.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "36 ÷ 4 = 9, so Sia can fill 9 pouches."
        },

        {
            id: "dp-023",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "A wizard has 42 stars and shares them equally between 6 cards. How many stars go on each card?",

            hint: "Think about 6 times what makes 42.",

            options: [
                "6",
                "7",
                "8",
                "9"
            ],

            correctAnswer: "7",

            explanation:
                "42 ÷ 6 = 7, so each card gets 7 stars."
        },

        {
            id: "dp-024",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "There are 32 counters. They are put into groups of 4. Then 3 groups are used. How many groups are left?",

            hint: "First find the total number of groups.",

            options: [
                "4",
                "5",
                "6",
                "8"
            ],

            correctAnswer: "5",

            explanation:
                "32 ÷ 4 = 8 groups. If 3 groups are used, 8 − 3 = 5 groups remain."
        },

        {
            id: "dp-025",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "A teacher has 24 stickers. She shares them equally between 3 children. Each child then gives 2 stickers away. How many stickers does each child have left?",

            hint: "First share the stickers equally, then take away 2 from each child's share.",

            options: [
                "4",
                "6",
                "8",
                "10"
            ],

            correctAnswer: "6",

            explanation:
                "24 ÷ 3 = 8, so each child starts with 8 stickers. After giving away 2, each child has 6 stickers left."
        },

        {
            id: "dp-026",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has 40 shells. She puts 8 shells in each bag and then gives 2 bags to a friend. How many bags does she have left?",

            hint: "First find how many bags she can fill.",

            options: [
                "2",
                "3",
                "4",
                "5"
            ],

            correctAnswer: "3",

            explanation:
                "40 ÷ 8 = 5 bags. After giving away 2 bags, 5 − 2 = 3 bags remain."
        },

        {
            id: "dp-027",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "A class has 28 pencils. They share them equally between 4 tables. Each table then receives 2 more pencils. How many pencils does each table have?",

            hint: "First divide the pencils equally, then add 2 to each table.",

            options: [
                "7",
                "8",
                "9",
                "10"
            ],

            correctAnswer: "9",

            explanation:
                "28 ÷ 4 = 7, so each table starts with 7 pencils. Adding 2 gives 9 pencils per table."
        },

        {
            id: "dp-028",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "A treasure room has 48 gems. They are shared equally between 8 explorers. Three explorers leave with their shares. How many gems are left?",

            hint: "Find each explorer's share, then work out how many shares remain.",

            options: [
                "24",
                "30",
                "32",
                "36"
            ],

            correctAnswer: "30",

            explanation:
                "48 ÷ 8 = 6 gems per explorer. If 3 of the 8 explorers leave, 5 shares remain. 5 × 6 = 30 gems."
        },

        {
            id: "dp-029",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "A shop has 36 cards. It puts 4 cards in each pack. It sells 5 packs. How many cards are left?",

            hint: "First find how many packs can be made, then work out how many packs remain.",

            options: [
                "12",
                "16",
                "20",
                "24"
            ],

            correctAnswer: "16",

            explanation:
                "36 ÷ 4 = 9 packs. After selling 5 packs, 4 packs remain. 4 × 4 = 16 cards remain."
        },

        {
            id: "dp-030",
            skillId: "division-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia has 24 crystals. She shares them equally between 3 boxes, then puts 2 more crystals into each box. How many crystals are in each box?",

            hint: "First divide 24 equally between the boxes, then add 2.",

            options: [
                "8",
                "9",
                "10",
                "12"
            ],

            correctAnswer: "10",

            explanation:
                "24 ÷ 3 = 8 crystals in each box. Adding 2 more to each box gives 10 crystals in each box."
        }

    ]
};

export default divisionProblems;

export {
    divisionProblems
};