import { SkillContent } from "../../../types";

const findOneHundredMoreLess: SkillContent = {
    skillId: "find-one-hundred-more-less",

    title: "Find One Hundred More or One Hundred Less",

    description:
        "Find one hundred more or one hundred less than numbers up to 1000.",

    version: 1,

    activities: [

        {
            id: "find-one-hundred-more-less-001",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 more than 246?",

            options: [
                "346",
                "256",
                "446",
                "245"
            ],

            correctAnswer: "346",

            hint: "Adding 100 increases the hundreds by one while keeping 46 exactly the same.",

            explanation:
                "Adding 100 increases the hundreds digit by 1."

        },

        {
            id: "find-one-hundred-more-less-002",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 less than 583?",

            options: [
                "483",
                "573",
                "593",
                "583"
            ],

            correctAnswer: "483",

            hint: "Take away one hundred but leave the 83 unchanged.",

            explanation:
                "Subtracting 100 decreases the hundreds digit by 1."

        },

        {
            id: "find-one-hundred-more-less-003",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 more than 399?",

            options: [
                "499",
                "409",
                "400",
                "299"
            ],

            correctAnswer: "499",

            hint: "The 99 at the end stays the same because only one hundred is being added.",

            explanation:
                "399 + 100 = 499."

        },

        {
            id: "find-one-hundred-more-less-004",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 less than 700?",

            options: [
                "600",
                "690",
                "699",
                "800"
            ],

            correctAnswer: "600",

            hint: "Move back exactly one hundred from 700 without changing any tens or ones.",

            explanation:
                "700 - 100 = 600."

        },

        {
            id: "find-one-hundred-more-less-005",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 more than 890?",

            options: [
                "900",
                "990",
                "1000",
                "980"
            ],

            correctAnswer: "990",

            hint: "Only the hundreds change. The 90 stays as 90.",

            explanation:
                "890 + 100 = 990."

        },

        {
            id: "find-one-hundred-more-less-006",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 less than 401?",

            options: [
                "301",
                "400",
                "501",
                "391"
            ],

            correctAnswer: "301",

            hint: "Subtract one whole hundred while keeping the final 01 unchanged.",

            explanation:
                "401 - 100 = 301."

        },

        {
            id: "find-one-hundred-more-less-007",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 more than 850?",

            options: [
                "860",
                "950",
                "900",
                "750"
            ],

            correctAnswer: "950",

            hint: "Adding 100 doesn't change the 50 at the end.",

            explanation:
                "850 + 100 = 950."

        },

        {
            id: "find-one-hundred-more-less-008",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 less than 320?",

            options: [
                "220",
                "310",
                "300",
                "420"
            ],

            correctAnswer: "220",

            hint: "Take away one hundred and keep the 20 unchanged.",

            explanation:
                "320 - 100 = 220."

        },

        {
            id: "find-one-hundred-more-less-009",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 more than 109?",

            options: [
                "209",
                "119",
                "200",
                "309"
            ],

            correctAnswer: "209",

            hint: "The last two digits stay as 09 when adding exactly one hundred.",

            explanation:
                "109 + 100 = 209."

        },

        {
            id: "find-one-hundred-more-less-010",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 less than 560?",

            options: [
                "460",
                "550",
                "560",
                "360"
            ],

            correctAnswer: "460",

            hint: "Only one hundred is removed, so the 60 stays the same.",

            explanation:
                "560 - 100 = 460."

        },

        {
            id: "find-one-hundred-more-less-011",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 more than 675?",

            options: [
                "775",
                "685",
                "575",
                "675"
            ],

            correctAnswer: "775",

            hint: "Increase the hundreds by one while leaving 75 untouched.",

            explanation:
                "675 + 100 = 775."

        },

        {
            id: "find-one-hundred-more-less-012",

            skillId: "find-one-hundred-more-less",

            stage: "recognise",

            question: "What is 100 less than 142?",

            options: [
                "42",
                "132",
                "142",
                "242"
            ],

            correctAnswer: "42",

            hint: "Removing one hundred from 142 leaves only the remaining 42.",

            explanation:
                "142 - 100 = 42."

        },

        {
            id: "find-one-hundred-more-less-013",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "Which digit usually changes when you add 100?",

            options: [
                "Ones",
                "Tens",
                "Hundreds",
                "Thousands"
            ],

            correctAnswer: "Hundreds",

            hint: "Think about which place is worth exactly one hundred.",

            explanation:
                "Adding 100 usually changes the hundreds digit."

        },

        {
            id: "find-one-hundred-more-less-014",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "What stays the same when you add 100 to 347?",

            options: [
                "The tens and ones digits",
                "Only the hundreds digit",
                "Everything",
                "Nothing"
            ],

            correctAnswer: "The tens and ones digits",

            hint: "347 becomes 447. Compare each digit to see which ones have not changed.",

            explanation:
                "347 becomes 447, so the tens and ones digits stay the same."

        },

        {
            id: "find-one-hundred-more-less-015",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "Which calculation gives 705?",

            options: [
                "605 + 100",
                "715 - 100",
                "705 + 100",
                "805 - 10"
            ],

            correctAnswer: "605 + 100",

            hint: "Test which calculation ends exactly at 705 after adding or subtracting.",

            explanation:
                "605 plus 100 equals 705."

        },

        {
            id: "find-one-hundred-more-less-016",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "Which number is 100 more than 478?",

            options: [
                "578",
                "488",
                "478",
                "378"
            ],

            correctAnswer: "578",

            hint: "Only the hundreds increase. The 78 stays exactly the same.",

            explanation:
                "478 + 100 = 578."

        },

        {
            id: "find-one-hundred-more-less-017",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "Which number is 100 less than 623?",

            options: [
                "523",
                "613",
                "623",
                "723"
            ],

            correctAnswer: "523",

            hint: "Subtract one hundred but keep the final 23 unchanged.",

            explanation:
                "623 - 100 = 523."

        },

        {
            id: "find-one-hundred-more-less-018",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "What happens when you add 100 to 900?",

            options: [
                "It becomes 910.",
                "It becomes 1000.",
                "It becomes 990.",
                "It becomes 901."
            ],

            correctAnswer: "It becomes 1000.",

            hint: "Nine hundreds plus one more hundred makes a new thousand.",

            explanation:
                "900 + 100 = 1000."

        },

        {
            id: "find-one-hundred-more-less-019",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "Which place value changes first when subtracting 100?",

            options: [
                "Ones",
                "Tens",
                "Hundreds",
                "Thousands"
            ],

            correctAnswer: "Hundreds",

            hint: "One hundred affects the place worth 100, not the tens or ones.",

            explanation:
                "Subtracting 100 changes the hundreds digit."

        },

        {
            id: "find-one-hundred-more-less-020",

            skillId: "find-one-hundred-more-less",

            stage: "understand",

            question: "Which calculation crosses into the next thousand?",

            options: [
                "900 + 100",
                "425 + 100",
                "670 - 100",
                "315 + 100"
            ],

            correctAnswer: "900 + 100",

            hint: "Only one calculation reaches four digits. Think about what happens after 999.",

            explanation:
                "900 + 100 = 1000."

        },

        {
            id: "find-one-hundred-more-less-021",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A school has 245 pupils. One hundred new pupils join. How many pupils are there now?",

            options: [
                "345",
                "255",
                "445",
                "145"
            ],

            correctAnswer: "345",

            hint: "Adding 100 changes the number of hundreds but leaves the 45 pupils unchanged.",

            explanation:
                "245 + 100 = 345."

        },

        {
            id: "find-one-hundred-more-less-022",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A library has 682 books. One hundred books are removed. How many books remain?",

            options: [
                "582",
                "672",
                "782",
                "482"
            ],

            correctAnswer: "582",

            hint: "Take away one full hundred while keeping the 82 books the same.",

            explanation:
                "682 - 100 = 582."

        },

        {
            id: "find-one-hundred-more-less-023",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A farmer has 318 sheep. He buys 100 more. How many sheep does he have now?",

            options: [
                "418",
                "328",
                "518",
                "218"
            ],

            correctAnswer: "418",

            hint: "Buying 100 more means adding exactly one hundred, not changing the 18.",

            explanation:
                "318 + 100 = 418."

        },

        {
            id: "find-one-hundred-more-less-024",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A museum had 950 visitors yesterday. Today there are 100 fewer visitors. How many visitors are there today?",

            options: [
                "850",
                "860",
                "1050",
                "940"
            ],

            correctAnswer: "850",

            hint: "A hundred fewer visitors means the 50 stays the same while one hundred is removed.",

            explanation:
                "950 - 100 = 850."

        },

        {
            id: "find-one-hundred-more-less-025",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A toy shop has 890 toys. One hundred more toys arrive. How many toys are there now?",

            options: [
                "990",
                "900",
                "980",
                "1000"
            ],

            correctAnswer: "990",

            hint: "Adding one hundred keeps the final 90 unchanged.",

            explanation:
                "890 + 100 = 990."

        },

        {
            id: "find-one-hundred-more-less-026",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "Ben has 465 football cards. He gives away 100 cards. How many cards does he have left?",

            options: [
                "365",
                "455",
                "565",
                "265"
            ],

            correctAnswer: "365",

            hint: "Giving away exactly 100 cards leaves the final 65 cards unchanged.",

            explanation:
                "465 - 100 = 365."

        },

        {
            id: "find-one-hundred-more-less-027",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A zoo welcomed 712 visitors before lunch. Another 100 visitors arrive. How many visitors have arrived altogether?",

            options: [
                "812",
                "722",
                "912",
                "612"
            ],

            correctAnswer: "812",

            hint: "The extra visitors add one hundred, so the 12 stays exactly the same.",

            explanation:
                "712 + 100 = 812."

        },

        {
            id: "find-one-hundred-more-less-028",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A warehouse stores 634 boxes. One hundred boxes are delivered. How many boxes remain?",

            options: [
                "534",
                "624",
                "734",
                "434"
            ],

            correctAnswer: "534",

            hint: "If boxes are delivered away, subtract one hundred while keeping the 34 unchanged.",

            explanation:
                "634 - 100 = 534."

        },

        {
            id: "find-one-hundred-more-less-029",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A runner has completed 401 laps over several weeks. She completes another 100 laps. How many laps has she completed altogether?",

            options: [
                "501",
                "411",
                "601",
                "301"
            ],

            correctAnswer: "501",

            hint: "Adding 100 changes 401 into a number with five hundreds but still ends in 01.",

            explanation:
                "401 + 100 = 501."

        },

        {
            id: "find-one-hundred-more-less-030",

            skillId: "find-one-hundred-more-less",

            stage: "apply",

            question: "A builder has 560 bricks. He uses 100 bricks. How many bricks are left?",

            options: [
                "460",
                "550",
                "660",
                "360"
            ],

            correctAnswer: "460",

            hint: "Using 100 bricks removes one whole hundred while leaving the 60 unchanged.",

            explanation:
                "560 - 100 = 460."

        },

        {
            id: "find-one-hundred-more-less-031",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Complete the pattern: 240, 340, ___",

            options: [
                "350",
                "440",
                "540",
                "241"
            ],

            correctAnswer: "440",

            hint: "Each step adds exactly one hundred, so the ending 40 never changes.",

            explanation:
                "The pattern increases by 100 each time."

        },

        {
            id: "find-one-hundred-more-less-032",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Complete the pattern: 815, 715, ___",

            options: [
                "615",
                "705",
                "814",
                "515"
            ],

            correctAnswer: "615",

            hint: "The sequence goes back by one hundred each time, keeping the final 15.",

            explanation:
                "The pattern decreases by 100 each time."

        },

        {
            id: "find-one-hundred-more-less-033",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Which number is 100 more than 458?",

            options: [
                "558",
                "468",
                "548",
                "358"
            ],

            correctAnswer: "558",

            hint: "Increase the hundreds by one and leave the 58 unchanged.",

            explanation:
                "458 + 100 = 558."

        },

        {
            id: "find-one-hundred-more-less-034",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Which number is 100 less than 730?",

            options: [
                "630",
                "720",
                "730",
                "830"
            ],

            correctAnswer: "630",

            hint: "Subtract one hundred but keep the 30 exactly the same.",

            explanation:
                "730 - 100 = 630."

        },
        {
            id: "find-one-hundred-more-less-035",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Fill the gap: 700, 800, 900, ___",

            options: [
                "910",
                "1000",
                "990",
                "1100"
            ],

            correctAnswer: "1000",

            hint: "Each number is one hundred more than the last. After nine hundreds comes one thousand.",

            explanation:
                "Adding 100 to 900 gives 1000."

        },

        {
            id: "find-one-hundred-more-less-036",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Fill the gap: 640, 540, 440, ___",

            options: [
                "340",
                "430",
                "540",
                "240"
            ],

            correctAnswer: "340",

            hint: "Subtract one hundred each time, but notice the 40 at the end never changes.",

            explanation:
                "The pattern decreases by 100 each time."

        },

        {
            id: "find-one-hundred-more-less-037",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "What is 100 more than 781?",

            options: [
                "881",
                "791",
                "880",
                "681"
            ],

            correctAnswer: "881",

            hint: "Adding 100 changes the hundreds digit while the 81 stays exactly the same.",

            explanation:
                "781 + 100 = 881."

        },

        {
            id: "find-one-hundred-more-less-038",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "What is 100 less than 1000?",

            options: [
                "900",
                "990",
                "999",
                "800"
            ],

            correctAnswer: "900",

            hint: "Think of 1000 as ten hundreds. Taking away one hundred leaves nine hundreds.",

            explanation:
                "1000 - 100 = 900."

        },

        {
            id: "find-one-hundred-more-less-039",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Which pair differs by 100?",

            options: [
                "615 and 715",
                "615 and 625",
                "615 and 5150",
                "615 and 705"
            ],

            correctAnswer: "615 and 715",

            hint: "Look for the pair where the last two digits match and only one extra hundred has been added.",

            explanation:
                "715 is exactly 100 more than 615."

        },

        {
            id: "find-one-hundred-more-less-040",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Which statement is true?",

            options: [
                "100 more than 600 is 700.",
                "100 more than 600 is 610.",
                "100 less than 600 is 590.",
                "100 less than 600 is 5000."
            ],

            correctAnswer: "100 more than 600 is 700.",

            hint: "Adding 100 means increasing the number of hundreds by one—not adding ten or changing thousands.",

            explanation:
                "600 + 100 = 700."

        },

        {
            id: "find-one-hundred-more-less-041",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Complete the pattern: 128, 228, 328, ___",

            options: [
                "338",
                "428",
                "328",
                "228"
            ],

            correctAnswer: "428",

            hint: "Each step adds exactly one hundred, so the ending 28 stays unchanged.",

            explanation:
                "The pattern increases by 100."

        },

        {
            id: "find-one-hundred-more-less-042",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Complete the pattern: 904, 804, 704, ___",

            options: [
                "604",
                "694",
                "804",
                "504"
            ],

            correctAnswer: "604",

            hint: "Each number is one hundred less than the previous one while the 04 stays the same.",

            explanation:
                "The pattern decreases by 100."

        },

        {
            id: "find-one-hundred-more-less-043",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "100 more than 239 is:",

            options: [
                "339",
                "249",
                "239",
                "439"
            ],

            correctAnswer: "339",

            hint: "Increase the hundreds by one but leave the 39 untouched.",

            explanation:
                "239 + 100 = 339."

        },

        {
            id: "find-one-hundred-more-less-044",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "100 less than 812 is:",

            options: [
                "712",
                "802",
                "812",
                "912"
            ],

            correctAnswer: "712",

            hint: "Take away one hundred while keeping the last two digits as 12.",

            explanation:
                "812 - 100 = 712."

        },

        {
            id: "find-one-hundred-more-less-045",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Which number comes 100 after 576?",

            options: [
                "676",
                "586",
                "576",
                "476"
            ],

            correctAnswer: "676",

            hint: "Move forward by one hundred, not by ten or one. The 76 stays the same.",

            explanation:
                "576 + 100 = 676."

        },

        {
            id: "find-one-hundred-more-less-046",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Which number comes 100 before 401?",

            options: [
                "301",
                "400",
                "391",
                "501"
            ],

            correctAnswer: "301",

            hint: "Go back one hundred while leaving the final 01 unchanged.",

            explanation:
                "401 - 100 = 301."

        },

        {
            id: "find-one-hundred-more-less-047",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Find the missing number: 756, ___, 956",

            options: [
                "856",
                "766",
                "846",
                "956"
            ],

            correctAnswer: "856",

            hint: "The numbers increase by one hundred each step, so the middle number sits exactly halfway.",

            explanation:
                "The numbers increase by 100."

        },

        {
            id: "find-one-hundred-more-less-048",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "Find the missing number: 502, 402, ___",

            options: [
                "302",
                "392",
                "412",
                "202"
            ],

            correctAnswer: "302",

            hint: "Subtract one hundred again while keeping the final 02 unchanged.",

            explanation:
                "The numbers decrease by 100."

        },

        {
            id: "find-one-hundred-more-less-049",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "What is 100 more than 89?",

            options: [
                "189",
                "99",
                "180",
                "90"
            ],

            correctAnswer: "189",

            hint: "Adding 100 to a two-digit number creates a three-digit number ending in 89.",

            explanation:
                "89 + 100 = 189."

        },

        {
            id: "find-one-hundred-more-less-050",

            skillId: "find-one-hundred-more-less",

            stage: "master",

            question: "What is 100 less than 300?",

            options: [
                "200",
                "290",
                "299",
                "100"
            ],

            correctAnswer: "200",

            hint: "Three hundreds take away one hundred leaves two hundreds.",

            explanation:
                "300 - 100 = 200."

        }
    ]
};

export default findOneHundredMoreLess;

export {
    findOneHundredMoreLess
};