import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const find100MoreLess: SkillContent = {
    skillId: "find-100-more-less",

    title: "Find 100 More or Less",

    description: "Find numbers that are 100 more or 100 less.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "fhl-001",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "What is 100 more than 200?",

            options: [
                "300",
                "250",
                "400",
                "100"
            ],

            correctAnswer: "300",

            hint: "Adding 100 increases the hundreds digit by 1 while the tens and ones stay the same.",

            explanation:
                "Add 100 to 200 to get 300."

        },

        {
            id: "fhl-002",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "What is 100 less than 500?",

            options: [
                "400",
                "300",
                "600",
                "450"
            ],

            correctAnswer: "400",

            hint: "Taking away 100 means moving back exactly one hundred without changing any tens or ones.",

            explanation:
                "Subtract 100 from 500."

        },

        {
            id: "fhl-003",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "What is 100 more than 700?",

            options: [
                "800",
                "900",
                "750",
                "600"
            ],

            correctAnswer: "800",

            hint: "Only the number of hundreds changes when you add exactly 100.",

            explanation:
                "700 + 100 = 800."

        },

        {
            id: "fhl-004",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "What is 100 less than 300?",

            options: [
                "200",
                "100",
                "400",
                "250"
            ],

            correctAnswer: "200",

            hint: "Count back one group of one hundred from 300.",

            explanation:
                "300 − 100 = 200."

        },

        {
            id: "fhl-005",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "Which number is 100 more than 600?",

            options: [
                "700",
                "650",
                "800",
                "500"
            ],

            correctAnswer: "700",

            hint: "The answer should have one more hundred than 600 but the same tens and ones.",

            explanation:
                "Add 100 to 600."

        },

        {
            id: "fhl-006",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "Which number is 100 less than 900?",

            options: [
                "800",
                "700",
                "1000",
                "850"
            ],

            correctAnswer: "800",

            hint: "Subtracting 100 moves from 9 hundreds to 8 hundreds.",

            explanation:
                "Subtract 100 from 900."

        },

        {
            id: "fhl-007",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "100 more than 100 is...",

            options: [
                "200",
                "300",
                "150",
                "0"
            ],

            correctAnswer: "200",

            hint: "Imagine adding another block of 100 to the one you already have.",

            explanation:
                "100 + 100 = 200."

        },

        {
            id: "fhl-008",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "100 less than 800 is...",

            options: [
                "700",
                "600",
                "900",
                "750"
            ],

            correctAnswer: "700",

            hint: "Go back one hundred from 800—not one ten or one one.",

            explanation:
                "800 − 100 = 700."

        },

        {
            id: "fhl-009",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "Which answer is 100 more than 400?",

            options: [
                "500",
                "450",
                "600",
                "300"
            ],

            correctAnswer: "500",

            hint: "Look for the option with one extra hundred and no other digits changed.",

            explanation:
                "400 + 100 = 500."

        },

        {
            id: "fhl-010",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "Which answer is 100 less than 200?",

            options: [
                "100",
                "0",
                "300",
                "150"
            ],

            correctAnswer: "100",

            hint: "Removing one hundred from two hundreds leaves one hundred.",

            explanation:
                "200 − 100 = 100."

        },

        {
            id: "fhl-011",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "Which pair shows a difference of exactly 100?",

            options: [
                "500 and 600",
                "500 and 550",
                "500 and 700",
                "500 and 650"
            ],

            correctAnswer: "500 and 600",

            hint: "Compare how many hundreds apart each pair is. Ignore pairs that differ by 50, 150 or 200.",

            explanation:
                "600 is exactly 100 more than 500."

        },

        {
            id: "fhl-012",
            skillId: "find-100-more-less",
            stage: "recognise",

            question: "Which number is 100 less than 1000?",

            options: [
                "900",
                "800",
                "950",
                "1100"
            ],

            correctAnswer: "900",

            hint: "Think of 1000 as ten hundreds. Taking away one hundred leaves nine hundreds.",

            explanation:
                "1000 − 100 = 900."

        },

        {
            id: "fhl-013",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "Sam says, '100 more than 350 is 450.' Is Sam correct?",

            options: [
                "Yes",
                "No, it is 400",
                "No, it is 550",
                "No, it is 300"
            ],

            correctAnswer: "Yes",

            hint: "Check whether only the hundreds digit increases while 50 stays unchanged.",

            explanation:
                "Adding 100 to 350 gives 450."

        },

        {
            id: "fhl-014",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "Which number is 100 less than 640?",

            options: [
                "540",
                "740",
                "440",
                "600"
            ],

            correctAnswer: "540",

            hint: "The 40 at the end stays the same because you're only removing one hundred.",

            explanation:
                "Subtract 100 from 640."

        },

        {
            id: "fhl-015",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "Complete the sentence: 820 is 100 more than...",

            options: [
                "720",
                "920",
                "620",
                "800"
            ],

            correctAnswer: "720",

            hint: "Work backwards. If one number is 100 more, the missing number must be 100 less.",

            explanation:
                "720 + 100 = 820."

        },

        {
            id: "fhl-016",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "What is 100 more than 480?",

            options: [
                "580",
                "500",
                "380",
                "680"
            ],

            correctAnswer: "580",

            hint: "The 80 doesn't change—only the hundreds increase by one.",

            explanation:
                "480 + 100 = 580."

        },

        {
            id: "fhl-017",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "What is 100 less than 910?",

            options: [
                "810",
                "900",
                "710",
                "1010"
            ],

            correctAnswer: "810",

            hint: "Keep the 10 at the end exactly the same while reducing the hundreds by one.",

            explanation:
                "910 − 100 = 810."

        },

        {
            id: "fhl-018",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "Which number is 100 more than 235?",

            options: [
                "335",
                "325",
                "435",
                "135"
            ],

            correctAnswer: "335",

            hint: "Adding 100 changes 2 hundreds into 3 hundreds, while 35 stays unchanged.",

            explanation:
                "Add 100 to 235."

        },

        {
            id: "fhl-019",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "Which number is 100 less than 768?",

            options: [
                "668",
                "868",
                "758",
                "568"
            ],

            correctAnswer: "668",

            hint: "Subtract one hundred without changing the 68 at the end.",

            explanation:
                "Subtract 100 from 768."

        },

        {
            id: "fhl-020",
            skillId: "find-100-more-less",
            stage: "understand",

            question: "Which child is correct?",

            options: [
                "Ava says 100 more than 612 is 712.",
                "Ben says 100 more than 612 is 622.",
                "Ella says 100 more than 612 is 702.",
                "Leo says 100 more than 612 is 812."
            ],

            correctAnswer: "Ava says 100 more than 612 is 712.",

            hint: "Adding 100 changes 6 hundreds into 7 hundreds, but the 12 at the end stays exactly the same.",

            explanation:
                "Only Ava has added exactly 100."

        },

        {
            id: "fhl-021",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "A zoo has 425 visitors. Another 100 arrive. How many visitors are there now?",

            options: [
                "525",
                "500",
                "625",
                "325"
            ],

            correctAnswer: "525",

            hint: "An extra 100 visitors means adding one whole hundred while keeping the 25 visitors unchanged.",

            explanation:
                "425 + 100 = 525."

        },

        {
            id: "fhl-022",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "A shop has 860 toys. It sells 100 toys. How many are left?",

            options: [
                "760",
                "960",
                "850",
                "660"
            ],

            correctAnswer: "760",

            hint: "Selling 100 removes one complete group of a hundred, not just a few toys.",

            explanation:
                "860 − 100 = 760."

        },

        {
            id: "fhl-023",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "A runner has completed 340 metres. After another 100 metres, how far has the runner travelled?",

            options: [
                "440 metres",
                "430 metres",
                "540 metres",
                "240 metres"
            ],

            correctAnswer: "440 metres",

            hint: "The runner adds another full 100 metres, so only the hundreds part of the distance changes.",

            explanation:
                "340 + 100 = 440."

        },

        {
            id: "fhl-024",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "A farmer picked 705 apples. He gave away 100 apples. How many apples remain?",

            options: [
                "605",
                "805",
                "695",
                "505"
            ],

            correctAnswer: "605",

            hint: "Giving away exactly 100 apples leaves the 5 ones untouched.",

            explanation:
                "705 − 100 = 605."

        },

        {
            id: "fhl-025",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "Which pair of numbers are 100 apart?",

            options: [
                "472 and 572",
                "472 and 522",
                "472 and 672",
                "472 and 482"
            ],

            correctAnswer: "472 and 572",

            hint: "Check which pair has identical tens and ones digits but differs by exactly one hundred.",

            explanation:
                "572 is exactly 100 more than 472."

        },

        {
            id: "fhl-026",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "Mia says, '100 less than 503 is 403.' Is she correct?",

            options: [
                "Yes",
                "No, it is 503",
                "No, it is 303",
                "No, it is 603"
            ],

            correctAnswer: "Yes",

            hint: "Subtract one hundred and check whether the 03 at the end has stayed the same.",

            explanation:
                "503 − 100 = 403."

        },

        {
            id: "fhl-027",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "Complete the number sentence: 648 + 100 = ?",

            options: [
                "748",
                "658",
                "848",
                "548"
            ],

            correctAnswer: "748",

            hint: "The 48 stays the same because adding 100 only affects the hundreds.",

            explanation:
                "Adding 100 increases the hundreds by 1."

        },

        {
            id: "fhl-028",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "Complete the number sentence: 932 − 100 = ?",

            options: [
                "832",
                "932",
                "822",
                "732"
            ],

            correctAnswer: "832",

            hint: "Move back one hundred while keeping the final 32 unchanged.",

            explanation:
                "Subtract 100 from 932."

        },

        {
            id: "fhl-029",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "Which number belongs in the box? □ + 100 = 681",

            options: [
                "581",
                "781",
                "671",
                "481"
            ],

            correctAnswer: "581",

            hint: "Work backwards by taking 100 away from the total to find the missing starting number.",

            explanation:
                "581 + 100 = 681."

        },

        {
            id: "fhl-030",
            skillId: "find-100-more-less",
            stage: "apply",

            question: "Which number belongs in the box? □ − 100 = 254",

            options: [
                "354",
                "154",
                "264",
                "454"
            ],

            correctAnswer: "354",

            hint: "If subtracting 100 gives 254, the missing number must be one hundred greater than 254.",

            explanation:
                "354 − 100 = 254."

        },

        {
            id: "fhl-031",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which number is 100 more than 618?",

            options: [
                "718",
                "628",
                "818",
                "518"
            ],

            correctAnswer: "718",

            hint: "Increase the hundreds digit by one and leave the 18 unchanged.",

            explanation:
                "618 + 100 = 718."

        },

        {
            id: "fhl-032",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which number is 100 less than 941?",

            options: [
                "841",
                "931",
                "741",
                "1041"
            ],

            correctAnswer: "841",

            hint: "Only one hundred is removed, so the 41 at the end should stay exactly the same.",

            explanation:
                "941 − 100 = 841."

        },

        {
            id: "fhl-033",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which calculation is correct?",

            options: [
                "372 + 100 = 472",
                "372 + 100 = 382",
                "372 + 100 = 572",
                "372 + 100 = 462"
            ],

            correctAnswer: "372 + 100 = 472",

            hint: "A correct answer changes the hundreds only—72 should remain unchanged.",

            explanation:
                "Adding 100 increases the hundreds digit by one."

        },

        {
            id: "fhl-034",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which calculation is correct?",

            options: [
                "815 − 100 = 715",
                "815 − 100 = 805",
                "815 − 100 = 615",
                "815 − 100 = 705"
            ],

            correctAnswer: "815 − 100 = 715",

            hint: "After subtracting 100, the 15 should still be 15 because only the hundreds change.",

            explanation:
                "Subtracting 100 decreases the hundreds digit by one."

        },

        {
            id: "fhl-035",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which number belongs in the box? 438 + □ = 538",

            options: [
                "100",
                "10",
                "1",
                "200"
            ],

            correctAnswer: "100",

            hint: "Compare the two numbers. Only the hundreds digit has changed, so find the amount that makes that happen.",

            explanation:
                "438 + 100 = 538."

        },

        {
            id: "fhl-036",
            skillId: "find-100-more-less",
            stage: "master",

            question: "A train has travelled 682 miles. It travels another 100 miles. How far has it travelled now?",

            options: [
                "782 miles",
                "692 miles",
                "882 miles",
                "582 miles"
            ],

            correctAnswer: "782 miles",

            hint: "The extra journey is exactly one hundred miles, so only the hundreds part of 682 changes.",

            explanation:
                "682 + 100 = 782."

        },

        {
            id: "fhl-037",
            skillId: "find-100-more-less",
            stage: "master",

            question: "A baker made 956 cakes. He sold 100 cakes. How many cakes are left?",

            options: [
                "856",
                "956",
                "846",
                "756"
            ],

            correctAnswer: "856",

            hint: "Selling 100 cakes removes one full hundred, while the 56 cakes remain unchanged.",

            explanation:
                "956 − 100 = 856."

        },

        {
            id: "fhl-038",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which child is correct?",

            options: [
                "Lily says 100 less than 684 is 584.",
                "Sam says 100 less than 684 is 674.",
                "Noah says 100 less than 684 is 484.",
                "Eva says 100 less than 684 is 694."
            ],

            correctAnswer: "Lily says 100 less than 684 is 584.",

            hint: "Subtracting 100 should keep the last two digits, 84, exactly the same.",

            explanation:
                "Subtracting 100 from 684 gives 584."

        },

        {
            id: "fhl-039",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which pair of numbers are exactly 100 apart?",

            options: [
                "729 and 829",
                "729 and 739",
                "729 and 929",
                "729 and 779"
            ],

            correctAnswer: "729 and 829",

            hint: "Look for the pair where the tens and ones digits match and only one extra hundred has been added.",

            explanation:
                "829 is exactly 100 more than 729."

        },

        {
            id: "fhl-040",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which statement is true?",

            options: [
                "100 less than 540 is 440.",
                "100 less than 540 is 530.",
                "100 less than 540 is 340.",
                "100 less than 540 is 450."
            ],

            correctAnswer: "100 less than 540 is 440.",

            hint: "Removing 100 changes five hundreds into four hundreds while leaving the 40 unchanged.",

            explanation:
                "540 − 100 = 440."

        },

        {
            id: "fhl-041",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Complete the pattern: 175, 275, 375, ___",

            options: [
                "475",
                "385",
                "575",
                "375"
            ],

            correctAnswer: "475",

            hint: "Each step adds one hundred, so the ending 75 should never change.",

            explanation:
                "Each number is 100 more than the last."

        },

        {
            id: "fhl-042",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Complete the pattern: 962, 862, 762, ___",

            options: [
                "662",
                "852",
                "752",
                "562"
            ],

            correctAnswer: "662",

            hint: "The sequence moves back by exactly one hundred each time while keeping 62 at the end.",

            explanation:
                "Each number is 100 less than the previous one."

        },

        {
            id: "fhl-043",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which number should replace the ★? ★ + 100 = 914",

            options: [
                "814",
                "904",
                "714",
                "1014"
            ],

            correctAnswer: "814",

            hint: "To find the missing number, undo the +100 by subtracting 100 from 914.",

            explanation:
                "814 + 100 = 914."

        },

        {
            id: "fhl-044",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which number should replace the ★? ★ − 100 = 637",

            options: [
                "737",
                "537",
                "627",
                "837"
            ],

            correctAnswer: "737",

            hint: "Reverse the subtraction. The missing number must be 100 greater than 637.",

            explanation:
                "737 − 100 = 637."

        },

        {
            id: "fhl-045",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Alex says, '100 more than 999 is 1099.' Is Alex correct?",

            options: [
                "Yes",
                "No, it is 1000",
                "No, it is 1999",
                "No, it is 999"
            ],

            correctAnswer: "Yes",

            hint: "Adding 100 means adding ten tens, not just increasing the last digit.",

            explanation:
                "999 + 100 = 1099."

        },

        {
            id: "fhl-046",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which number is 100 less than 1000?",

            options: [
                "900",
                "990",
                "800",
                "1100"
            ],

            correctAnswer: "900",

            hint: "Think of 1000 as ten hundreds. Taking away one hundred leaves nine hundreds.",

            explanation:
                "1000 − 100 = 900."

        },

        {
            id: "fhl-047",
            skillId: "find-100-more-less",
            stage: "master",

            question: "A school has 518 pupils. Next year there will be 100 more pupils. How many pupils will there be?",

            options: [
                "618",
                "528",
                "718",
                "418"
            ],

            correctAnswer: "618",

            hint: "An extra 100 pupils means the 18 stays the same while the hundreds increase by one.",

            explanation:
                "518 + 100 = 618."

        },

        {
            id: "fhl-048",
            skillId: "find-100-more-less",
            stage: "master",

            question: "A factory made 843 toys. It shipped 100 toys. How many toys remain?",

            options: [
                "743",
                "843",
                "733",
                "943"
            ],

            correctAnswer: "743",

            hint: "Shipping away 100 toys removes one complete hundred, but the 43 toys remain.",

            explanation:
                "843 − 100 = 743."

        },

        {
            id: "fhl-049",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which number is 100 more than 899?",

            options: [
                "999",
                "909",
                "1000",
                "799"
            ],

            correctAnswer: "999",

            hint: "Add one hundred while keeping the final 99 unchanged.",

            explanation:
                "899 + 100 = 999."

        },

        {
            id: "fhl-050",
            skillId: "find-100-more-less",
            stage: "master",

            question: "Which statement is correct?",

            options: [
                "100 more than 456 is 556.",
                "100 more than 456 is 466.",
                "100 more than 456 is 656.",
                "100 more than 456 is 546."
            ],

            correctAnswer: "100 more than 456 is 556.",

            hint: "A correct answer adds one hundred only, so the last two digits should still be 56.",

            explanation:
                "Adding 100 to 456 gives 556."

        }
    ]
};

export default find100MoreLess;

export {
    find100MoreLess
};