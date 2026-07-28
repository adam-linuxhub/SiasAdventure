import { SkillContent } from "../../../types";

export const findOneMoreLess: SkillContent = {
    skillId: "find-one-more-less",

    title: "Find One More or One Less",

    description:
        "Find one more or one less than numbers up to 1000.",

    version: 1,

    activities: [
{
    id: "find-one-more-less-001",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one more than 246?",

    options: [
        "245",
        "246",
        "247",
        "256"
    ],

    correctAnswer: "247",

    explanation:
        "One more means add 1. One more than 246 is 247."
},

{
    id: "find-one-more-less-002",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one less than 583?",

    options: [
        "582",
        "584",
        "573",
        "593"
    ],

    correctAnswer: "582",

    explanation:
        "One less means subtract 1. One less than 583 is 582."
},

{
    id: "find-one-more-less-003",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one more than 399?",

    options: [
        "400",
        "390",
        "410",
        "398"
    ],

    correctAnswer: "400",

    explanation:
        "Adding one to 399 gives 400."
},

{
    id: "find-one-more-less-004",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one less than 700?",

    options: [
        "701",
        "699",
        "690",
        "600"
    ],

    correctAnswer: "699",

    explanation:
        "One less than 700 is 699."
},

{
    id: "find-one-more-less-005",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one more than 999?",

    options: [
        "998",
        "1000",
        "909",
        "990"
    ],

    correctAnswer: "1000",

    explanation:
        "Adding one to 999 gives 1000."
},
{
    id: "find-one-more-less-006",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one less than 401?",

    options: [
        "400",
        "410",
        "301",
        "402"
    ],

    correctAnswer: "400",

    explanation:
        "One less than 401 is 400."
},

{
    id: "find-one-more-less-007",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one more than 850?",

    options: [
        "851",
        "860",
        "849",
        "950"
    ],

    correctAnswer: "851",

    explanation:
        "One more than 850 is 851."
},

{
    id: "find-one-more-less-008",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one less than 320?",

    options: [
        "321",
        "310",
        "319",
        "220"
    ],

    correctAnswer: "319",

    explanation:
        "One less than 320 is 319."
},

{
    id: "find-one-more-less-009",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one more than 109?",

    options: [
        "110",
        "119",
        "108",
        "100"
    ],

    correctAnswer: "110",

    explanation:
        "One more than 109 is 110."
},

{
    id: "find-one-more-less-010",

    skillId: "find-one-more-less",

    stage: "recognise",

    question: "What is one less than 560?",

    options: [
        "561",
        "559",
        "550",
        "459"
    ],

    correctAnswer: "559",

    explanation:
        "One less than 560 is 559."
},
{
    id: "find-one-more-less-011",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Why is one more than 249 equal to 250?",

    options: [
        "The ones become 10.",
        "The tens increase by 1 because the ones roll over.",
        "The hundreds increase by 1.",
        "Nothing changes."
    ],

    correctAnswer: "The tens increase by 1 because the ones roll over.",

    explanation:
        "Adding one to 249 makes 9 ones become 10 ones. Ten ones become one extra ten."
},

{
    id: "find-one-more-less-012",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Which digit changes when you add one to 563?",

    options: [
        "Hundreds",
        "Tens",
        "Ones",
        "All three"
    ],

    correctAnswer: "Ones",

    explanation:
        "The ones digit changes because the number does not end in 9."
},

{
    id: "find-one-more-less-013",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "What happens when you subtract one from 400?",

    options: [
        "It becomes 399.",
        "It becomes 390.",
        "It becomes 300.",
        "It becomes 401."
    ],

    correctAnswer: "It becomes 399.",

    explanation:
        "Subtracting one from 400 gives 399."
},

{
    id: "find-one-more-less-014",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Which place value changes first when adding one?",

    options: [
        "Hundreds",
        "Tens",
        "Ones",
        "Thousands"
    ],

    correctAnswer: "Ones",

    explanation:
        "You always add one to the ones first."
},

{
    id: "find-one-more-less-015",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Why does 699 become 700 when you add one?",

    options: [
        "The ones and tens roll over, increasing the hundreds.",
        "Only the hundreds change.",
        "The tens become 10.",
        "Nothing rolls over."
    ],

    correctAnswer: "The ones and tens roll over, increasing the hundreds.",

    explanation:
        "Adding one causes both the ones and tens to roll over, so the hundreds increase by one."
},
{
    id: "find-one-more-less-016",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Which number only changes the ones digit when you add one?",

    options: [
        "248 → 249",
        "259 → 260",
        "399 → 400",
        "999 → 1000"
    ],

    correctAnswer: "248 → 249",

    explanation:
        "248 ends in 8, so only the ones digit changes."
},

{
    id: "find-one-more-less-017",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Why does 560 become 559 when you subtract one?",

    options: [
        "The tens become smaller.",
        "One ten is exchanged into 10 ones.",
        "The hundreds become smaller.",
        "The ones become 10."
    ],

    correctAnswer: "One ten is exchanged into 10 ones.",

    explanation:
        "There are no ones to subtract from, so one ten is exchanged for 10 ones before subtracting one."
},

{
    id: "find-one-more-less-018",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Which place value changes first when subtracting one?",

    options: [
        "Hundreds",
        "Tens",
        "Ones",
        "Thousands"
    ],

    correctAnswer: "Ones",

    explanation:
        "You always subtract one from the ones first."
},

{
    id: "find-one-more-less-019",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Which number becomes the next hundred when you add one?",

    options: [
        "458",
        "399",
        "621",
        "745"
    ],

    correctAnswer: "399",

    explanation:
        "399 + 1 = 400."
},

{
    id: "find-one-more-less-020",

    skillId: "find-one-more-less",

    stage: "understand",

    question: "Which number becomes the next thousand when you add one?",

    options: [
        "899",
        "990",
        "999",
        "909"
    ],

    correctAnswer: "999",

    explanation:
        "999 + 1 = 1000."
},

{
    id: "find-one-more-less-021",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "A squirrel collected 328 acorns. It finds one more. How many acorns does it have now?",

    options: [
        "327",
        "328",
        "329",
        "338"
    ],

    correctAnswer: "329",

    explanation:
        "328 + 1 = 329."
},

{
    id: "find-one-more-less-022",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "A library has 600 books. One book is borrowed. How many books are left?",

    options: [
        "601",
        "599",
        "590",
        "500"
    ],

    correctAnswer: "599",

    explanation:
        "600 - 1 = 599."
},

{
    id: "find-one-more-less-023",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "Sam scored 449 points. He earns one more point. What is his new score?",

    options: [
        "448",
        "450",
        "459",
        "449"
    ],

    correctAnswer: "450",

    explanation:
        "449 + 1 = 450."
},

{
    id: "find-one-more-less-024",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "A farmer has 731 sheep. One sheep leaves the field. How many sheep remain?",

    options: [
        "730",
        "732",
        "721",
        "631"
    ],

    correctAnswer: "730",

    explanation:
        "731 - 1 = 730."
},

{
    id: "find-one-more-less-025",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "A toy shop has 999 toy cars. One more arrives. How many toy cars are there now?",

    options: [
        "1000",
        "998",
        "990",
        "999"
    ],

    correctAnswer: "1000",

    explanation:
        "999 + 1 = 1000."
},

{
    id: "find-one-more-less-026",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "A class counted 215 stickers. They found one more sticker. How many stickers are there now?",

    options: [
        "214",
        "215",
        "216",
        "225"
    ],

    correctAnswer: "216",

    explanation:
        "215 + 1 = 216."
},

{
    id: "find-one-more-less-027",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "Ben has 480 marbles. He loses one marble. How many marbles does he have now?",

    options: [
        "481",
        "479",
        "470",
        "380"
    ],

    correctAnswer: "479",

    explanation:
        "480 - 1 = 479."
},

{
    id: "find-one-more-less-028",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "The train carried 689 passengers. One more passenger gets on. How many passengers are on the train?",

    options: [
        "688",
        "689",
        "690",
        "699"
    ],

    correctAnswer: "690",

    explanation:
        "689 + 1 = 690."
},

{
    id: "find-one-more-less-029",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "There are 900 apples in storage. One apple is taken away. How many apples remain?",

    options: [
        "899",
        "901",
        "890",
        "800"
    ],

    correctAnswer: "899",

    explanation:
        "900 - 1 = 899."
},

{
    id: "find-one-more-less-030",

    skillId: "find-one-more-less",

    stage: "apply",

    question: "A game score is 359. You score one more point. What is the new score?",

    options: [
        "358",
        "350",
        "359",
        "360"
    ],

    correctAnswer: "360",

    explanation:
        "359 + 1 = 360."
},
{
    id: "find-one-more-less-031",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Fill the gap: 438, 439, ___",

    options: [
        "437",
        "440",
        "448",
        "449"
    ],

    correctAnswer: "440",

    explanation:
        "Each number is one more than the previous number."
},

{
    id: "find-one-more-less-032",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Fill the gap: 802, 801, ___",

    options: [
        "803",
        "800",
        "792",
        "811"
    ],

    correctAnswer: "800",

    explanation:
        "Each number is one less than the previous number."
},

{
    id: "find-one-more-less-033",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Which number is one more than 569?",

    options: [
        "568",
        "569",
        "570",
        "579"
    ],

    correctAnswer: "570",

    explanation:
        "569 + 1 = 570."
},

{
    id: "find-one-more-less-034",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Which number is one less than 250?",

    options: [
        "249",
        "251",
        "240",
        "150"
    ],

    correctAnswer: "249",

    explanation:
        "250 - 1 = 249."
},

{
    id: "find-one-more-less-035",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Fill the gap: 997, 998, 999, ___",

    options: [
        "990",
        "1000",
        "1001",
        "9990"
    ],

    correctAnswer: "1000",

    explanation:
        "One more than 999 is 1000."
},

{
    id: "find-one-more-less-036",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Fill the gap: 403, 402, 401, ___",

    options: [
        "400",
        "410",
        "399",
        "404"
    ],

    correctAnswer: "400",

    explanation:
        "The pattern is counting backwards in ones."
},

{
    id: "find-one-more-less-037",

    skillId: "find-one-more-less",

    stage: "master",

    question: "What is one more than 790?",

    options: [
        "791",
        "800",
        "789",
        "780"
    ],

    correctAnswer: "791",

    explanation:
        "790 + 1 = 791."
},

{
    id: "find-one-more-less-038",

    skillId: "find-one-more-less",

    stage: "master",

    question: "What is one less than 1000?",

    options: [
        "999",
        "990",
        "1001",
        "900"
    ],

    correctAnswer: "999",

    explanation:
        "1000 - 1 = 999."
},

{
    id: "find-one-more-less-039",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Which pair differs by one?",

    options: [
        "615 and 616",
        "615 and 617",
        "615 and 625",
        "615 and 605"
    ],

    correctAnswer: "615 and 616",

    explanation:
        "616 is exactly one more than 615."
},

{
    id: "find-one-more-less-040",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Which statement is true?",

    options: [
        "One more than 699 is 700.",
        "One more than 699 is 690.",
        "One less than 699 is 689.",
        "One less than 699 is 600."
    ],

    correctAnswer: "One more than 699 is 700.",

    explanation:
        "Adding one to 699 gives 700."
},

{
    id: "find-one-more-less-041",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Complete the pattern: 145, 146, 147, ___",

    options: [
        "148",
        "149",
        "157",
        "144"
    ],

    correctAnswer: "148",

    explanation:
        "The numbers increase by one each time."
},

{
    id: "find-one-more-less-042",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Complete the pattern: 910, 909, 908, ___",

    options: [
        "907",
        "911",
        "918",
        "900"
    ],

    correctAnswer: "907",

    explanation:
        "The numbers decrease by one each time."
},

{
    id: "find-one-more-less-043",

    skillId: "find-one-more-less",

    stage: "master",

    question: "One more than 129 is:",

    options: [
        "130",
        "120",
        "129",
        "131"
    ],

    correctAnswer: "130",

    explanation:
        "129 + 1 = 130."
},

{
    id: "find-one-more-less-044",

    skillId: "find-one-more-less",

    stage: "master",

    question: "One less than 830 is:",

    options: [
        "831",
        "820",
        "829",
        "730"
    ],

    correctAnswer: "829",

    explanation:
        "830 - 1 = 829."
},

{
    id: "find-one-more-less-045",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Which number comes immediately after 598?",

    options: [
        "597",
        "599",
        "600",
        "608"
    ],

    correctAnswer: "599",

    explanation:
        "The next whole number after 598 is 599."
},

{
    id: "find-one-more-less-046",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Which number comes immediately before 401?",

    options: [
        "400",
        "402",
        "391",
        "301"
    ],

    correctAnswer: "400",

    explanation:
        "The number immediately before 401 is 400."
},

{
    id: "find-one-more-less-047",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Find the missing number: 756, ___, 758",

    options: [
        "755",
        "756",
        "757",
        "759"
    ],

    correctAnswer: "757",

    explanation:
        "The numbers increase by one."
},

{
    id: "find-one-more-less-048",

    skillId: "find-one-more-less",

    stage: "master",

    question: "Find the missing number: 502, 501, ___",

    options: [
        "500",
        "503",
        "499",
        "510"
    ],

    correctAnswer: "500",

    explanation:
        "The numbers decrease by one."
},

{
    id: "find-one-more-less-049",

    skillId: "find-one-more-less",

    stage: "master",

    question: "What is one more than 89?",

    options: [
        "90",
        "80",
        "99",
        "88"
    ],

    correctAnswer: "90",

    explanation:
        "89 + 1 = 90."
},

{
    id: "find-one-more-less-050",

    skillId: "find-one-more-less",

    stage: "master",

    question: "What is one less than 300?",

    options: [
        "301",
        "299",
        "290",
        "200"
    ],

    correctAnswer: "299",

    explanation:
        "300 - 1 = 299."
}


    ]
};