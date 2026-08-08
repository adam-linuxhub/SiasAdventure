import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const solveOneStepAdditionAndSubtractionProblems: SkillContent = {
    skillId: "solve-one-step-addition-and-subtraction-problems",

    title: "Solve One-Step Addition and Subtraction Problems",

    description: "Solve one-step word problems involving addition and subtraction.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "osp-001",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "Sam has 24 stickers. He gets 13 more. How many stickers does he have now?",

            options: [
                "37",
                "35",
                "36",
                "38"
            ],

            correctAnswer: "37",

            hint: "The words 'gets 13 more' mean the total increases, so combine both amounts.",

            explanation:
                "Add the stickers together: 24 + 13 = 37."
        },

        {
            id: "osp-002",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "A shelf has 42 books. Seven books are borrowed. How many books are left?",

            options: [
                "35",
                "34",
                "36",
                "37"
            ],

            correctAnswer: "35",

            hint: "Borrowed books are no longer on the shelf, so take them away from the total.",

            explanation:
                "Subtract the books borrowed: 42 − 7 = 35."
        },

        {
            id: "osp-003",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "Ella has 31 marbles. Her friend gives her 8 more. How many marbles does she have?",

            options: [
                "39",
                "38",
                "40",
                "37"
            ],

            correctAnswer: "39",

            hint: "Receiving more marbles makes the collection bigger, so add the two numbers.",

            explanation:
                "31 + 8 = 39."
        },

        {
            id: "osp-004",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "A bus has 56 passengers. Twelve passengers get off. How many passengers remain?",

            options: [
                "44",
                "45",
                "43",
                "46"
            ],

            correctAnswer: "44",

            hint: "Passengers getting off means the number on the bus becomes smaller.",

            explanation:
                "56 − 12 = 44."
        },

        {
            id: "osp-005",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "Lily saves 45 cents. She saves another 20 cents. How much does she have altogether?",

            options: [
                "65 cents",
                "60 cents",
                "55 cents",
                "70 cents"
            ],

            correctAnswer: "65 cents",

            hint: "The word 'altogether' tells you to find the combined amount.",

            explanation:
                "45 + 20 = 65 cents."
        },

        {
            id: "osp-006",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "There are 63 apples in a box. Fifteen are taken out. How many apples are left?",

            options: [
                "48",
                "47",
                "49",
                "46"
            ],

            correctAnswer: "48",

            hint: "Apples taken out are no longer in the box, so subtract them.",

            explanation:
                "63 − 15 = 48."
        },

        {
            id: "osp-007",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "Tom scores 18 points in one game and 25 points in the next. How many points does he score altogether?",

            options: [
                "43",
                "42",
                "44",
                "45"
            ],

            correctAnswer: "43",

            hint: "You need Tom's total score across both games, so add both scores together.",

            explanation:
                "18 + 25 = 43."
        },

        {
            id: "osp-008",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "A baker made 70 cakes. She sold 26 cakes. How many cakes are left?",

            options: [
                "44",
                "45",
                "43",
                "46"
            ],

            correctAnswer: "44",

            hint: "Selling cakes reduces how many remain.",

            explanation:
                "70 − 26 = 44."
        },

        {
            id: "osp-009",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "A class collects 27 cans on Monday and 19 on Tuesday. How many cans do they collect altogether?",

            options: [
                "46",
                "45",
                "47",
                "48"
            ],

            correctAnswer: "46",

            hint: "The cans from both days need to be combined into one total.",

            explanation:
                "27 + 19 = 46."
        },

        {
            id: "osp-010",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "A jar holds 52 sweets. Nine sweets are eaten. How many sweets are left?",

            options: [
                "43",
                "42",
                "44",
                "41"
            ],

            correctAnswer: "43",

            hint: "Eating sweets means some are gone, so find what remains.",

            explanation:
                "52 − 9 = 43."
        },

        {
            id: "osp-011",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "Which operation should you use? Mia has 34 shells and finds 16 more.",

            options: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division"
            ],

            correctAnswer: "Addition",

            hint: "Ask yourself whether Mia ends up with more shells or fewer shells.",

            explanation:
                "The number of shells increases, so use addition."
        },

        {
            id: "osp-012",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "recognise",

            question: "Which operation should you use? Ben has 58 balloons. Twenty are given away.",

            options: [
                "Subtraction",
                "Addition",
                "Multiplication",
                "Division"
            ],

            correctAnswer: "Subtraction",

            hint: "Giving something away leaves you with less than you started with.",

            explanation:
                "The number decreases, so use subtraction."
        },

        {
            id: "osp-013",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "A zoo has 46 penguins. Eight more penguins arrive. How many penguins are there now?",

            options: [
                "54",
                "53",
                "55",
                "52"
            ],

            correctAnswer: "54",

            hint: "Arriving penguins increase the total number in the zoo.",

            explanation:
                "46 + 8 = 54."
        },

        {
            id: "osp-014",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "There are 91 birds in a park. Thirty-two fly away. How many birds remain?",

            options: [
                "59",
                "58",
                "60",
                "57"
            ],

            correctAnswer: "59",

            hint: "Flying away means the birds leave the park, so remove them from the total.",

            explanation:
                "91 − 32 = 59."
        },

        {
            id: "osp-015",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "A train has 48 passengers. Seventeen more get on. How many passengers are on the train now?",

            options: [
                "65",
                "64",
                "66",
                "63"
            ],

            correctAnswer: "65",

            hint: "Getting on the train makes the passenger count go up.",

            explanation:
                "48 + 17 = 65."
        },

        {
            id: "osp-016",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "A football team scored 28 goals before Christmas and 17 goals after Christmas. How many goals did they score altogether?",

            options: [
                "45",
                "44",
                "46",
                "47"
            ],

            correctAnswer: "45",

            hint: "You need one total from two different time periods.",

            explanation:
                "28 + 17 = 45."
        },

        {
            id: "osp-017",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "A farmer picked 83 apples. He sold 29 apples. How many apples were left?",

            options: [
                "54",
                "53",
                "55",
                "52"
            ],

            correctAnswer: "54",

            hint: "Sold apples are no longer with the farmer, so subtract them from what he picked.",

            explanation:
                "83 − 29 = 54."
        },

        {
            id: "osp-018",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "Which operation should you use? There were 64 birds in a tree. Nineteen flew away.",

            options: [
                "Subtraction",
                "Addition",
                "Multiplication",
                "Division"
            ],

            correctAnswer: "Subtraction",

            hint: "When something leaves, the amount becomes smaller.",

            explanation:
                "The number becomes smaller, so subtract."
        },

        {
            id: "osp-019",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "Which operation should you use? A shop sold 36 toys on Saturday and 24 on Sunday.",

            options: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division"
            ],

            correctAnswer: "Addition",

            hint: "You are finding the total sold over two days.",

            explanation:
                "Find the total by adding."
        },

        {
            id: "osp-020",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "understand",

            question: "Which answer is correct? Emma had 52 stickers and received 19 more.",

            options: [
                "71",
                "70",
                "72",
                "69"
            ],

            correctAnswer: "71",

            hint: "Receiving more stickers increases the total. Add 52 and 19 carefully.",

            explanation:
                "52 + 19 = 71."
        },

        {
            id: "osp-021",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "A swimming pool had 94 visitors. Thirty-six visitors went home. How many visitors were still there?",

            options: [
                "58",
                "57",
                "59",
                "60"
            ],

            correctAnswer: "58",

            hint: "People going home means the number at the pool gets smaller, so subtract from 94.",

            explanation:
                "94 − 36 = 58."
        },

        {
            id: "osp-022",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "Lucy read 34 pages on Monday and 28 pages on Tuesday. How many pages did she read altogether?",

            options: [
                "62",
                "61",
                "63",
                "64"
            ],

            correctAnswer: "62",

            hint: "The word 'altogether' tells you to combine the pages from both days.",

            explanation:
                "34 + 28 = 62."
        },

        {
            id: "osp-023",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "A toy shop had 67 kites. It sold 18 kites. How many kites were left?",

            options: [
                "49",
                "48",
                "50",
                "51"
            ],

            correctAnswer: "49",

            hint: "Selling kites leaves fewer behind. Work out what remains after taking 18 away.",

            explanation:
                "67 − 18 = 49."
        },

        {
            id: "osp-024",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "There are 45 boys and 39 girls in a sports event. How many children are taking part?",

            options: [
                "84",
                "83",
                "85",
                "86"
            ],

            correctAnswer: "84",

            hint: "You need the total number of children, so combine both groups.",

            explanation:
                "45 + 39 = 84."
        },

        {
            id: "osp-025",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "A baker made 95 loaves of bread. She sold 47. How many loaves were left?",

            options: [
                "48",
                "47",
                "49",
                "46"
            ],

            correctAnswer: "48",

            hint: "The loaves that were sold are gone, so subtract them from the amount baked.",

            explanation:
                "95 − 47 = 48."
        },

        {
            id: "osp-026",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "Jack collected 27 conkers in the morning and 35 in the afternoon. How many conkers did he collect?",

            options: [
                "62",
                "61",
                "63",
                "64"
            ],

            correctAnswer: "62",

            hint: "Count everything Jack collected across both parts of the day.",

            explanation:
                "27 + 35 = 62."
        },

        {
            id: "osp-027",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "A library had 80 storybooks. Twenty-six were borrowed. How many storybooks remained?",

            options: [
                "54",
                "53",
                "55",
                "56"
            ],

            correctAnswer: "54",

            hint: "Borrowed books are no longer on the shelves, so find what is left.",

            explanation:
                "80 − 26 = 54."
        },

        {
            id: "osp-028",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "Which child is correct?",

            options: [
                "Ella: 46 + 18 = 64",
                "Ben: 46 + 18 = 63",
                "Sam: 46 + 18 = 65",
                "Leo: 46 + 18 = 62"
            ],

            correctAnswer: "Ella: 46 + 18 = 64",

            hint: "Work out the addition yourself before checking which child matches your answer.",

            explanation:
                "46 + 18 = 64."
        },

        {
            id: "osp-029",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "Which child is correct?",

            options: [
                "Ben: 73 − 29 = 44",
                "Ella: 73 − 29 = 45",
                "Sam: 73 − 29 = 43",
                "Leo: 73 − 29 = 42"
            ],

            correctAnswer: "Ben: 73 − 29 = 44",

            hint: "Solve the subtraction first, then choose the child whose answer matches yours.",

            explanation:
                "73 − 29 = 44."
        },

        {
            id: "osp-030",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "apply",

            question: "Which question should be solved using subtraction?",

            options: [
                "A class had 68 pencils and lost 15.",
                "A class had 68 pencils and received 15 more.",
                "Tom read 18 pages and then another 12 pages.",
                "Lucy found 14 shells and then found 7 more."
            ],

            correctAnswer: "A class had 68 pencils and lost 15.",

            hint: "Look for words that mean the amount decreases rather than increases.",

            explanation:
                "When something is taken away or lost, use subtraction."
        },

        {
            id: "osp-031",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A cinema sold 126 tickets in the morning and 58 tickets in the afternoon. How many tickets were sold altogether?",

            options: [
                "184",
                "174",
                "194",
                "182"
            ],

            correctAnswer: "184",

            hint: "Both ticket sales count towards one total, so add the morning and afternoon amounts.",

            explanation:
                "126 + 58 = 184."
        },

        {
            id: "osp-032",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A garden centre had 215 plants. It sold 67 plants. How many plants were left?",

            options: [
                "148",
                "158",
                "138",
                "149"
            ],

            correctAnswer: "148",

            hint: "Selling plants reduces the stock. Start with 215 and take away 67.",

            explanation:
                "215 − 67 = 148."
        },

        {
            id: "osp-033",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A school raised £175 on Monday and £86 on Tuesday. How much money did it raise altogether?",

            options: [
                "£261",
                "£251",
                "£271",
                "£259"
            ],

            correctAnswer: "£261",

            hint: "Money raised on both days needs to be combined into one amount.",

            explanation:
                "175 + 86 = 261."
        },

        {
            id: "osp-034",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A museum welcomed 302 visitors. By lunchtime, 148 visitors had left. How many visitors remained?",

            options: [
                "154",
                "164",
                "144",
                "152"
            ],

            correctAnswer: "154",

            hint: "Visitors who left are no longer in the museum, so subtract them from the starting number.",

            explanation:
                "302 − 148 = 154."
        },

        {
            id: "osp-035",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which operation should you use? Mia has 138 stamps and receives another 46 stamps.",

            options: [
                "Addition",
                "Subtraction",
                "Multiplication",
                "Division"
            ],

            correctAnswer: "Addition",

            hint: "Receiving more stamps increases the collection, so think about which operation makes a total bigger.",

            explanation:
                "Receiving more means the total increases."
        },

        {
            id: "osp-036",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which operation should you use? A library has 284 books and 97 are borrowed.",

            options: [
                "Subtraction",
                "Addition",
                "Multiplication",
                "Division"
            ],

            correctAnswer: "Subtraction",

            hint: "Borrowed books leave the library, so the number on the shelves becomes smaller.",

            explanation:
                "Borrowed books are taken away, so subtract."
        },

        {
            id: "osp-037",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which child is correct?",

            options: [
                "Ella: 154 + 39 = 193",
                "Ben: 154 + 39 = 183",
                "Sam: 154 + 39 = 194",
                "Leo: 154 + 39 = 192"
            ],

            correctAnswer: "Ella: 154 + 39 = 193",

            hint: "Add the tens first, then the ones, before choosing the matching answer.",

            explanation:
                "154 + 39 = 193."
        },

        {
            id: "osp-038",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which child is correct?",

            options: [
                "Ben: 243 − 68 = 175",
                "Ella: 243 − 68 = 165",
                "Sam: 243 − 68 = 185",
                "Leo: 243 − 68 = 174"
            ],

            correctAnswer: "Ben: 243 − 68 = 175",

            hint: "Subtract carefully by working through hundreds, tens and ones, then compare with each child's answer.",

            explanation:
                "243 − 68 = 175."
        },

        {
            id: "osp-039",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A baker made 187 muffins. She sold 95. How many muffins were left?",

            options: [
                "92",
                "93",
                "91",
                "94"
            ],

            correctAnswer: "92",

            hint: "Sold muffins are no longer available, so subtract the amount sold from the amount made.",

            explanation:
                "187 − 95 = 92."
        },

        {
            id: "osp-040",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A class collected 96 cans one week and 108 the next week. How many cans did they collect altogether?",

            options: [
                "204",
                "194",
                "214",
                "202"
            ],

            correctAnswer: "204",

            hint: "The word 'altogether' means combine both weekly totals into one answer.",

            explanation:
                "96 + 108 = 204."
        },

        {
            id: "osp-041",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which answer is reasonable? A bus has 124 passengers. Forty-six get off.",

            options: [
                "78",
                "170",
                "46",
                "124"
            ],

            correctAnswer: "78",

            hint: "If passengers get off, the answer must be smaller than 124 but not as small as 46.",

            explanation:
                "124 − 46 = 78."
        },

        {
            id: "osp-042",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which answer is reasonable? There are 139 children at a concert and 58 more arrive.",

            options: [
                "197",
                "81",
                "139",
                "255"
            ],

            correctAnswer: "197",

            hint: "More children arrive, so the total should be greater than 139 but not unreasonably large.",

            explanation:
                "139 + 58 = 197."
        },

        {
            id: "osp-043",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A football stadium has 412 seats. Two hundred and twenty-seven are filled. How many seats are still empty?",

            options: [
                "185",
                "195",
                "175",
                "184"
            ],

            correctAnswer: "185",

            hint: "Find the empty seats by taking the filled seats away from the total number of seats.",

            explanation:
                "412 − 227 = 185."
        },

        {
            id: "osp-044",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A charity received £248 in donations on Friday and £167 on Saturday. How much did it receive altogether?",

            options: [
                "£415",
                "£405",
                "£425",
                "£414"
            ],

            correctAnswer: "£415",

            hint: "Both days' donations contribute to one total amount.",

            explanation:
                "248 + 167 = 415."
        },

        {
            id: "osp-045",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which question should be solved using addition?",

            options: [
                "A train carries 156 passengers, then 49 more get on.",
                "A train carries 156 passengers, then 49 get off.",
                "A train starts with 156 passengers and finishes its journey.",
                "A train has 156 seats."
            ],

            correctAnswer: "A train carries 156 passengers, then 49 more get on.",

            hint: "Look for the situation where the number of passengers increases.",

            explanation:
                "When more passengers get on, the total increases."
        },

        {
            id: "osp-046",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which question should be solved using subtraction?",

            options: [
                "A shop has 265 balloons and sells 84.",
                "A shop has 265 balloons and receives 84.",
                "A shop buys 84 balloons.",
                "A shop displays 265 balloons."
            ],

            correctAnswer: "A shop has 265 balloons and sells 84.",

            hint: "Choose the situation where the starting amount becomes smaller.",

            explanation:
                "Selling balloons means taking them away."
        },

        {
            id: "osp-047",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which statement is true?",

            options: [
                "Words like 'altogether' usually mean add.",
                "Words like 'left' usually mean add.",
                "'More' always means subtract.",
                "'Remain' means multiply."
            ],

            correctAnswer: "Words like 'altogether' usually mean add.",

            hint: "Think about the clue words you look for before deciding which operation to use.",

            explanation:
                "'Altogether' usually tells us to find a total by adding."
        },

        {
            id: "osp-048",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "Which statement is true?",

            options: [
                "Words like 'left' or 'remain' usually mean subtract.",
                "'Left' means add.",
                "'More' means divide.",
                "'Altogether' means subtract."
            ],

            correctAnswer: "Words like 'left' or 'remain' usually mean subtract.",

            hint: "When you are finding what is left over, you usually remove something from the starting amount.",

            explanation:
                "When something is left or remains, something has been taken away."
        },

        {
            id: "osp-049",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "A school library had 356 books. It bought 79 more books. How many books does it have now?",

            options: [
                "435",
                "425",
                "445",
                "434"
            ],

            correctAnswer: "435",

            hint: "Buying more books increases the collection, so combine both numbers.",

            explanation:
                "356 + 79 = 435."
        },

        {
            id: "osp-050",
            skillId: "solve-one-step-addition-and-subtraction-problems",
            stage: "master",

            question: "What is the most important first step when solving a one-step word problem?",

            options: [
                "Decide whether to add or subtract.",
                "Guess the answer.",
                "Always add the numbers.",
                "Always subtract the numbers."
            ],

            correctAnswer: "Decide whether to add or subtract.",

            hint: "Before calculating anything, identify what the question is asking the numbers to do.",

            explanation:
                "Read the problem carefully and choose the correct operation before calculating."
        }

    ]
};

export default solveOneStepAdditionAndSubtractionProblems;

export {
    solveOneStepAdditionAndSubtractionProblems
};