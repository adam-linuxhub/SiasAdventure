import { SkillContent } from "../../../types";

const findOneMoreLess: SkillContent = {
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

            hint: "Count forward by just one. Only the ones digit changes because the number doesn't end in 9.",

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

            hint: "Move back by one. The tens and hundreds stay the same because the ones digit isn't 0.",

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

            hint: "Adding one to a number ending in 99 makes both 9s roll over to 0 and increases the hundreds.",

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

            hint: "Go back one from a whole hundred. Think about what comes immediately before 700.",

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

            hint: "After the largest three-digit number comes the first four-digit number.",

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

            hint: "Count back one. The ones digit goes from 1 to 0 without changing any other place value.",

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

            hint: "Only the ones digit increases because the number doesn't end in 9.",

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

            hint: "There are no ones to take away, so exchange one ten into ten ones before subtracting one.",

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

            hint: "Adding one to 9 ones creates another ten.",

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

            hint: "Because there are 0 ones, borrow one ten before taking away one.",

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

            hint: "Think about what happens when 9 ones become 10 ones.",

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

            hint: "The number doesn't end in 9, so no carrying is needed.",

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

            hint: "The number before a whole hundred always ends with 99.",

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

            hint: "Start adding from the smallest place value on the right.",

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

            hint: "Both the ones and tens are already 9, so each place value carries into the next.",

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

            hint: "Choose the number that doesn't end in 9, so no carrying happens.",

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

            hint: "You can't take one away from zero ones without borrowing from the tens.",

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

            hint: "Subtraction starts with the smallest place value on the right.",

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

            hint: "Look for the number ending in 99. Adding one makes the next complete hundred.",

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

            hint: "Only a number ending with three 9s will roll over into the next thousand when you add one.",

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

            hint: "Finding one more means counting forward by a single number.",

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

            hint: "The number just before a whole hundred always ends in 99.",

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

            hint: "Adding one to a number ending in 9 creates another full ten.",

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

            hint: "One sheep leaves, so count back by exactly one.",

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

            hint: "After the largest three-digit number comes the first four-digit number.",

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

            hint: "Add just one, so only the ones digit changes.",

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

            hint: "Because there are 0 ones, borrow one ten before taking away one.",

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

            hint: "Adding one to 689 makes the 9 ones become another ten.",

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

            hint: "Think about the number immediately before 900.",

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

            hint: "Nine ones become a new ten when you add one.",

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

            hint: "The pattern counts forward one at a time, so continue with the very next number.",

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

            hint: "The numbers are counting backwards by one each step.",

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

            hint: "Adding one to a number ending in 9 creates the next multiple of ten.",

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

            hint: "The number before a multiple of ten always ends with 9.",

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

            hint: "The sequence counts forward by one. After the largest three-digit number comes the first four-digit number.",

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

            hint: "The numbers are counting backwards one at a time. Continue to the number immediately before 401.",

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

            hint: "The ones digit is 0, so only it increases to 1. No carrying is needed.",

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

            hint: "The number just before 1000 is the greatest three-digit number.",

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

            hint: "Look for two consecutive numbers with no numbers between them.",

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

            hint: "Adding one to a number ending in 99 creates the next hundred.",

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

            hint: "The pattern increases by one each time, so choose the next counting number.",

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

            hint: "Keep counting backwards by one without skipping any numbers.",

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

            hint: "Adding one to 9 ones makes another complete ten.",

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

            hint: "To subtract one from a number ending in 0, exchange one ten into ten ones first.",

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

            hint: "The word 'immediately' means the very next number, not the next multiple of 10.",

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

            hint: "Count back just one step from 401.",

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

            hint: "The missing number is exactly between 756 and 758 when counting in ones.",

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

            hint: "Continue counting backwards by one from 501.",

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

            hint: "Adding one to a number ending in 9 makes the next multiple of ten.",

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

            hint: "The number immediately before a whole hundred always ends with 99.",

            explanation:
                "300 - 1 = 299."

        }

    ]
};

export default findOneMoreLess;

export {
    findOneMoreLess
};