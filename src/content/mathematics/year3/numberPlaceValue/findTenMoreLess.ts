import { SkillContent } from "../../../types";

const findTenMoreLess: SkillContent = {
    skillId: "find-ten-more-less",

    title: "Find Ten More or Ten Less",

    description:
        "Find ten more or ten less than numbers up to 1000.",

    version: 1,

    activities: [
        {
            id: "find-ten-more-less-001",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 more than 246?",

            hint: "Adding 10 changes the tens digit by one while the ones digit stays 6.",

            options: [
                "256",
                "247",
                "236",
                "346"
            ],

            correctAnswer: "256",

            explanation:
                "Adding 10 increases the tens digit by 1."
        },

        {
            id: "find-ten-more-less-002",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 less than 583?",

            hint: "Take away one group of ten. The ones digit stays 3.",

            options: [
                "573",
                "593",
                "582",
                "483"
            ],

            correctAnswer: "573",

            explanation:
                "Subtracting 10 decreases the tens digit by 1."
        },

        {
            id: "find-ten-more-less-003",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 more than 399?",

            hint: "Nine tens plus one more ten makes a new hundred, but the ones digit stays 9.",

            options: [
                "409",
                "400",
                "499",
                "389"
            ],

            correctAnswer: "409",

            explanation:
                "399 + 10 = 409."
        },

        {
            id: "find-ten-more-less-004",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 less than 700?",

            hint: "Subtract one ten from 700. The hundreds stay the same.",

            options: [
                "690",
                "699",
                "600",
                "710"
            ],

            correctAnswer: "690",

            explanation:
                "700 - 10 = 690."
        },

        {
            id: "find-ten-more-less-005",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 more than 990?",

            hint: "Adding one more ten to ninety tens creates one thousand.",

            options: [
                "991",
                "1000",
                "999",
                "1090"
            ],

            correctAnswer: "1000",

            explanation:
                "990 + 10 = 1000."
        },

        {
            id: "find-ten-more-less-006",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 less than 401?",

            hint: "Remove one ten. The ones digit remains 1.",

            options: [
                "391",
                "400",
                "411",
                "301"
            ],

            correctAnswer: "391",

            explanation:
                "401 - 10 = 391."
        },

        {
            id: "find-ten-more-less-007",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 more than 850?",

            hint: "Move forward by one ten without changing the hundreds or ones.",

            options: [
                "851",
                "860",
                "950",
                "840"
            ],

            correctAnswer: "860",

            explanation:
                "850 + 10 = 860."
        },

        {
            id: "find-ten-more-less-008",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 less than 320?",

            hint: "Count back one ten. The number of ones stays at 0.",

            options: [
                "319",
                "310",
                "220",
                "330"
            ],

            correctAnswer: "310",

            explanation:
                "320 - 10 = 310."
        },

        {
            id: "find-ten-more-less-009",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 more than 109?",

            hint: "Keep the 9 ones the same and increase the tens by one.",

            options: [
                "119",
                "110",
                "209",
                "99"
            ],

            correctAnswer: "119",

            explanation:
                "109 + 10 = 119."
        },

        {
            id: "find-ten-more-less-010",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 less than 560?",

            hint: "Subtract one group of ten. The ones digit does not change.",

            options: [
                "550",
                "559",
                "460",
                "570"
            ],

            correctAnswer: "550",

            explanation:
                "560 - 10 = 550."
        },

        {
            id: "find-ten-more-less-011",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 more than 675?",

            hint: "Only the tens place increases by one because you're adding exactly 10.",

            options: [
                "685",
                "676",
                "775",
                "665"
            ],

            correctAnswer: "685",

            explanation:
                "675 + 10 = 685."
        },

        {
            id: "find-ten-more-less-012",

            skillId: "find-ten-more-less",

            stage: "recognise",

            question: "What is 10 less than 142?",

            hint: "Think of taking away one ten while leaving the 2 ones untouched.",

            options: [
                "132",
                "141",
                "152",
                "42"
            ],

            correctAnswer: "132",

            explanation:
                "142 - 10 = 132."
        },

        {
            id: "find-ten-more-less-013",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "Which digit usually changes when you add 10?",

            hint: "Adding one ten affects the tens place unless it rolls over into the hundreds.",

            options: [
                "Ones",
                "Tens",
                "Hundreds",
                "Thousands"
            ],

            correctAnswer: "Tens",

            explanation:
                "Adding 10 usually changes the tens digit while the ones digit stays the same."
        },

        {
            id: "find-ten-more-less-014",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "Why does 295 become 305 when you add 10?",

            hint: "Nine tens plus one more ten cannot stay in the tens column.",

            options: [
                "The tens roll over and increase the hundreds.",
                "The ones increase.",
                "The hundreds decrease.",
                "Nothing changes."
            ],

            correctAnswer: "The tens roll over and increase the hundreds.",

            explanation:
                "Nine tens plus one more ten makes ten tens, which is exchanged for one hundred."
        },

        {
            id: "find-ten-more-less-015",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "What stays the same when you add 10 to 347?",

            hint: "Adding a multiple of ten does not change how many ones there are.",

            options: [
                "The ones digit",
                "The tens digit",
                "The whole number",
                "Every digit"
            ],

            correctAnswer: "The ones digit",

            explanation:
                "347 becomes 357, so the ones digit remains 7."
        },

        {
            id: "find-ten-more-less-016",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "Which number is 10 more than 478?",

            hint: "Increase the tens digit by one but keep the 8 ones the same.",

            options: [
                "488",
                "479",
                "578",
                "468"
            ],

            correctAnswer: "488",

            explanation:
                "Adding 10 changes the tens digit from 7 to 8."
        },

        {
            id: "find-ten-more-less-017",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "Which number is 10 less than 623?",

            hint: "Move back by one ten while keeping the ones digit unchanged.",

            options: [
                "613",
                "622",
                "523",
                "633"
            ],

            correctAnswer: "613",

            explanation:
                "Subtracting 10 changes the tens digit from 2 to 1."
        },

        {
            id: "find-ten-more-less-018",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "What happens when you add 10 to 990?",

            hint: "Think of 990 as 99 tens. One more ten makes a new thousand.",

            options: [
                "It becomes 991.",
                "It becomes 1000.",
                "It becomes 1090.",
                "It becomes 999."
            ],

            correctAnswer: "It becomes 1000.",

            explanation:
                "Nine hundreds and nine tens plus one more ten equals 1000."
        },

        {
            id: "find-ten-more-less-019",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "Which place value changes first when subtracting 10?",

            hint: "Subtracting exactly one ten affects the tens column before any exchanging happens.",

            options: [
                "Ones",
                "Tens",
                "Hundreds",
                "Thousands"
            ],

            correctAnswer: "Tens",

            explanation:
                "Subtracting 10 affects the tens first."
        },

        {
            id: "find-ten-more-less-020",

            skillId: "find-ten-more-less",

            stage: "understand",

            question: "Which calculation crosses into the next hundred?",

            hint: "Look for a number with 9 tens that becomes 10 tens after adding 10.",

            options: [
                "495 + 10",
                "482 + 10",
                "643 - 10",
                "271 + 10"
            ],

            correctAnswer: "495 + 10",

            explanation:
                "495 + 10 = 505, which crosses into the next hundred."
        },

        {
            id: "find-ten-more-less-021",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "A shop sold 246 toys this week. It sells 10 more next week. How many toys does it sell?",

            hint: "Next week's sales are one group of ten higher. Increase the tens digit but keep the ones digit the same.",

            options: [
                "256",
                "247",
                "236",
                "346"
            ],

            correctAnswer: "256",

            explanation:
                "246 + 10 = 256."
        },

        {
            id: "find-ten-more-less-022",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "A library has 415 books on one shelf. Ten books are moved away. How many books remain?",

            hint: "Removing 10 means taking away exactly one ten. The 5 ones stay unchanged.",

            options: [
                "405",
                "414",
                "315",
                "425"
            ],

            correctAnswer: "405",

            explanation:
                "415 - 10 = 405."
        },

        {
            id: "find-ten-more-less-023",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "Sam scored 580 points. He earns 10 more. What is his new score?",

            hint: "Add one ten to the score without changing the hundreds or ones digits.",

            options: [
                "590",
                "581",
                "680",
                "570"
            ],

            correctAnswer: "590",

            explanation:
                "580 + 10 = 590."
        },

        {
            id: "find-ten-more-less-024",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "A farmer has 703 sheep. Ten sheep are moved to another field. How many sheep are left?",

            hint: "Take away one ten from 703. The 3 ones remain the same.",

            options: [
                "693",
                "702",
                "603",
                "713"
            ],

            correctAnswer: "693",

            explanation:
                "703 - 10 = 693."
        },

        {
            id: "find-ten-more-less-025",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "A toy shop has 990 toy cars. Ten more arrive. How many toy cars are there now?",

            hint: "Ninety-nine tens plus one more ten makes one hundred tens, which equals one thousand.",

            options: [
                "1000",
                "991",
                "1090",
                "980"
            ],

            correctAnswer: "1000",

            explanation:
                "990 + 10 = 1000."
        },

        {
            id: "find-ten-more-less-026",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "Ben has 364 stickers. He receives 10 more. How many stickers does he have now?",

            hint: "Receiving 10 more stickers increases only the tens place by one.",

            options: [
                "374",
                "365",
                "354",
                "464"
            ],

            correctAnswer: "374",

            explanation:
                "364 + 10 = 374."
        },

        {
            id: "find-ten-more-less-027",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "There are 842 people at a concert. Ten people leave. How many people remain?",

            hint: "Count back one ten. The hundreds and ones digits do not change.",

            options: [
                "832",
                "841",
                "742",
                "852"
            ],

            correctAnswer: "832",

            explanation:
                "842 - 10 = 832."
        },

        {
            id: "find-ten-more-less-028",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "A train carries 689 passengers. Ten more passengers get on. How many passengers are on the train?",

            hint: "Adding 10 changes the 8 tens into 9 tens while the 9 ones stay the same.",

            options: [
                "699",
                "690",
                "789",
                "679"
            ],

            correctAnswer: "699",

            explanation:
                "689 + 10 = 699."
        },

        {
            id: "find-ten-more-less-029",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "There are 530 apples in storage. Ten apples are taken away. How many apples remain?",

            hint: "Subtract one group of ten. The number of ones remains zero.",

            options: [
                "520",
                "529",
                "430",
                "540"
            ],

            correctAnswer: "520",

            explanation:
                "530 - 10 = 520."
        },

        {
            id: "find-ten-more-less-030",

            skillId: "find-ten-more-less",

            stage: "apply",

            question: "A game score is 175. You score 10 more points. What is the new score?",

            hint: "Increase the tens digit by one while keeping the 5 ones unchanged.",

            options: [
                "185",
                "176",
                "165",
                "275"
            ],

            correctAnswer: "185",

            explanation:
                "175 + 10 = 185."
        },

        {
            id: "find-ten-more-less-031",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Complete the pattern: 340, 350, ___",

            hint: "Look at the difference between the first two numbers, then repeat it once more.",

            options: [
                "351",
                "360",
                "440",
                "330"
            ],

            correctAnswer: "360",

            explanation:
                "The pattern increases by 10 each time."
        },

        {
            id: "find-ten-more-less-032",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Complete the pattern: 615, 605, ___",

            hint: "The sequence is counting backwards by one ten each step.",

            options: [
                "595",
                "606",
                "600",
                "5950"
            ],

            correctAnswer: "595",

            explanation:
                "The pattern decreases by 10 each time."
        },

        {
            id: "find-ten-more-less-033",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Which number is 10 more than 458?",

            hint: "Add one ten, keeping the 8 ones exactly the same.",

            options: [
                "468",
                "459",
                "558",
                "448"
            ],

            correctAnswer: "468",

            explanation:
                "458 + 10 = 468."
        },

        {
            id: "find-ten-more-less-034",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Which number is 10 less than 730?",

            hint: "Move back by one ten. Only the tens place changes.",

            options: [
                "720",
                "729",
                "630",
                "740"
            ],

            correctAnswer: "720",

            explanation:
                "730 - 10 = 720."
        },

        {
            id: "find-ten-more-less-035",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Fill the gap: 970, 980, 990, ___",

            hint: "Each number is one ten more than the last. After 990, another ten creates a new thousand.",

            options: [
                "991",
                "1000",
                "999",
                "1010"
            ],

            correctAnswer: "1000",

            explanation:
                "Adding 10 to 990 gives 1000."
        },

        {
            id: "find-ten-more-less-036",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Fill the gap: 430, 420, 410, ___",

            hint: "The pattern counts backwards by one ten each time. Keep following the same rule.",

            options: [
                "400",
                "401",
                "390",
                "440"
            ],

            correctAnswer: "400",

            explanation:
                "The numbers decrease by 10 each time."
        },

        {
            id: "find-ten-more-less-037",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "What is 10 more than 781?",

            hint: "Add one ten while leaving the hundreds digit and the 1 one unchanged.",

            options: [
                "791",
                "782",
                "881",
                "771"
            ],

            correctAnswer: "791",

            explanation:
                "781 + 10 = 791."
        },

        {
            id: "find-ten-more-less-038",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "What is 10 less than 1000?",

            hint: "Think of 1000 as 100 tens. Taking away one ten leaves 99 tens.",

            options: [
                "990",
                "999",
                "900",
                "1010"
            ],

            correctAnswer: "990",

            explanation:
                "1000 - 10 = 990."
        },

        {
            id: "find-ten-more-less-039",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Which pair differs by 10?",

            hint: "Compare the distance between each pair. Only one pair is exactly one group of ten apart.",

            options: [
                "615 and 625",
                "615 and 616",
                "615 and 635",
                "615 and 6050"
            ],

            correctAnswer: "615 and 625",

            explanation:
                "625 is exactly 10 more than 615."
        },

        {
            id: "find-ten-more-less-040",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Which statement is true?",

            hint: "Test each statement by mentally adding or subtracting one ten from 690.",

            options: [
                "10 more than 690 is 700.",
                "10 more than 690 is 691.",
                "10 less than 690 is 689.",
                "10 less than 690 is 6800."
            ],

            correctAnswer: "10 more than 690 is 700.",

            explanation:
                "690 + 10 = 700."
        },

        {
            id: "find-ten-more-less-041",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Complete the pattern: 128, 138, 148, ___",

            hint: "The ones digit never changes. Only the tens increase by one each step.",

            options: [
                "149",
                "158",
                "248",
                "118"
            ],

            correctAnswer: "158",

            explanation:
                "The pattern increases by 10."
        },

        {
            id: "find-ten-more-less-042",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Complete the pattern: 904, 894, 884, ___",

            hint: "Each number is one ten smaller than the previous one while the ones digit stays 4.",

            options: [
                "874",
                "894",
                "904",
                "8840"
            ],

            correctAnswer: "874",

            explanation:
                "The pattern decreases by 10."
        },

        {
            id: "find-ten-more-less-043",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "10 more than 239 is:",

            hint: "Increase the tens digit by one without changing the 9 ones.",

            options: [
                "249",
                "240",
                "339",
                "229"
            ],

            correctAnswer: "249",

            explanation:
                "239 + 10 = 249."
        },

        {
            id: "find-ten-more-less-044",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "10 less than 812 is:",

            hint: "Move back one ten. The hundreds and ones digits stay the same.",

            options: [
                "802",
                "811",
                "712",
                "822"
            ],

            correctAnswer: "802",

            explanation:
                "812 - 10 = 802."
        },

        {
            id: "find-ten-more-less-045",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Which number comes 10 after 576?",

            hint: "Count forward by one ten while keeping the 6 ones unchanged.",

            options: [
                "586",
                "577",
                "676",
                "566"
            ],

            correctAnswer: "586",

            explanation:
                "576 + 10 = 586."
        },

        {
            id: "find-ten-more-less-046",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Which number comes 10 before 401?",

            hint: "Subtract one ten but leave the 1 one exactly where it is.",

            options: [
                "391",
                "400",
                "301",
                "411"
            ],

            correctAnswer: "391",

            explanation:
                "401 - 10 = 391."
        },

        {
            id: "find-ten-more-less-047",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Find the missing number: 756, ___, 776",

            hint: "The numbers increase by ten each step, so the missing number is halfway through the pattern.",

            options: [
                "757",
                "766",
                "775",
                "786"
            ],

            correctAnswer: "766",

            explanation:
                "The numbers increase by 10."
        },

        {
            id: "find-ten-more-less-048",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "Find the missing number: 502, 492, ___",

            hint: "Keep subtracting one ten each time. Notice that the ones digit stays 2.",

            options: [
                "482",
                "493",
                "491",
                "480"
            ],

            correctAnswer: "482",

            explanation:
                "The numbers decrease by 10."
        },

        {
            id: "find-ten-more-less-049",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "What is 10 more than 89?",

            hint: "Adding one ten to 89 changes the tens but not the 9 ones.",

            options: [
                "99",
                "90",
                "109",
                "79"
            ],

            correctAnswer: "99",

            explanation:
                "89 + 10 = 99."
        },

        {
            id: "find-ten-more-less-050",

            skillId: "find-ten-more-less",

            stage: "master",

            question: "What is 10 less than 300?",

            hint: "Take away one ten from three hundred. Think of 300 as 30 tens.",

            options: [
                "290",
                "299",
                "200",
                "310"
            ],

            correctAnswer: "290",

            explanation:
                "300 - 10 = 290."
        }
    ]
};

export default findTenMoreLess;

export {
    findTenMoreLess
};