import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

const estimateOnNumberLine: SkillContent = {
    skillId: "estimate-on-number-line",

    title: "Estimate on a Number Line",

    description: "Estimate where numbers belong on a number line.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "enl-001",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number is halfway between 0 and 100?",

            options: [
                "50",
                "25",
                "75",
                "100"
            ],

            correctAnswer: "50",

            hint: "Halfway means the same distance from both ends. Think about the number that is 50 away from both 0 and 100.",

            explanation:
                "50 is halfway between 0 and 100."

        },

        {
            id: "enl-002",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number is halfway between 100 and 200?",

            options: [
                "150",
                "125",
                "175",
                "250"
            ],

            correctAnswer: "150",

            hint: "Imagine folding the section of the number line between 100 and 200 in half. Where would the fold land?",

            explanation:
                "150 is exactly halfway."

        },

        {
            id: "enl-003",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "370 is between which two hundreds?",

            options: [
                "300 and 400",
                "200 and 300",
                "400 and 500",
                "500 and 600"
            ],

            correctAnswer: "300 and 400",

            hint: "Look at the hundreds digit. Then check whether the number has reached the next hundred yet.",

            explanation:
                "370 is greater than 300 but less than 400."

        },

        {
            id: "enl-004",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "625 is between which two hundreds?",

            options: [
                "600 and 700",
                "500 and 600",
                "700 and 800",
                "400 and 500"
            ],

            correctAnswer: "600 and 700",

            hint: "625 has passed one full hundred but hasn't reached the next. Identify those two hundreds.",

            explanation:
                "625 lies between 600 and 700."

        },

        {
            id: "enl-005",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number is closest to the middle of 400 and 500?",

            options: [
                "450",
                "420",
                "480",
                "500"
            ],

            correctAnswer: "450",

            hint: "The middle point splits the distance into two equal parts. Count halfway through the hundred.",

            explanation:
                "450 is halfway between 400 and 500."

        },

        {
            id: "enl-006",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number belongs between 700 and 800?",

            options: [
                "750",
                "650",
                "850",
                "900"
            ],

            correctAnswer: "750",

            hint: "Only one option is greater than 700 but still smaller than 800.",

            explanation:
                "750 is between 700 and 800."

        },

        {
            id: "enl-007",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number is closest to 300?",

            options: [
                "298",
                "350",
                "360",
                "410"
            ],

            correctAnswer: "298",

            hint: "Compare how far each number is from 300. The smallest difference is the closest point on the number line.",

            explanation:
                "298 is only 2 away from 300."

        },

        {
            id: "enl-008",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number is closest to 700?",

            options: [
                "698",
                "650",
                "740",
                "780"
            ],

            correctAnswer: "698",

            hint: "Think about the distance from each option to 700 rather than whether it is above or below.",

            explanation:
                "698 is only 2 away from 700."

        },

        {
            id: "enl-009",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number would be nearest the end of a number line from 0 to 500?",

            options: [
                "490",
                "250",
                "100",
                "40"
            ],

            correctAnswer: "490",

            hint: "The end of this number line is 500. Choose the number that would be plotted closest to that end.",

            explanation:
                "490 is closest to 500."

        },

        {
            id: "enl-010",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number would be nearest the start of a number line from 0 to 500?",

            options: [
                "15",
                "120",
                "260",
                "420"
            ],

            correctAnswer: "15",

            hint: "The start of the number line is 0. Pick the value with the shortest distance from 0.",

            explanation:
                "15 is closest to 0."

        },

        {
            id: "enl-011",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number is between 200 and 300?",

            options: [
                "245",
                "195",
                "310",
                "180"
            ],

            correctAnswer: "245",

            hint: "A number between 200 and 300 must be larger than 200 but not yet reach 300.",

            explanation:
                "245 is greater than 200 and less than 300."

        },

        {
            id: "enl-012",
            skillId: "estimate-on-number-line",
            stage: "recognise",

            question: "Which number is between 800 and 900?",

            options: [
                "860",
                "790",
                "910",
                "760"
            ],

            correctAnswer: "860",

            hint: "Check each option against both boundaries. Only one fits between 800 and 900.",

            explanation:
                "860 lies between 800 and 900."

        },

        {
            id: "enl-013",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "Which number is closest to the halfway point between 500 and 600?",

            options: [
                "550",
                "525",
                "590",
                "600"
            ],

            correctAnswer: "550",

            hint: "Halfway across a hundred is always fifty more than the smaller hundred.",

            explanation:
                "550 is halfway between 500 and 600."

        },

        {
            id: "enl-014",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "425 is between which two hundreds?",

            options: [
                "400 and 500",
                "300 and 400",
                "500 and 600",
                "200 and 300"
            ],

            correctAnswer: "400 and 500",

            hint: "Find the previous hundred first, then identify the next hundred that comes after it.",

            explanation:
                "425 is greater than 400 and less than 500."

        },

        {
            id: "enl-015",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "Which number is nearest the middle of 200 and 300?",

            options: [
                "250",
                "225",
                "280",
                "300"
            ],

            correctAnswer: "250",

            hint: "The midpoint is exactly halfway through the 100-number interval.",

            explanation:
                "250 is halfway between 200 and 300."

        },

        {
            id: "enl-016",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "365 is between which two hundreds?",

            options: [
                "300 and 400",
                "200 and 300",
                "400 and 500",
                "500 and 600"
            ],

            correctAnswer: "300 and 400",

            hint: "365 has not yet reached 400, so identify the hundred it has already passed.",

            explanation:
                "365 is greater than 300 but less than 400."

        },

        {
            id: "enl-017",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "Which number is closest to the middle of 700 and 800?",

            options: [
                "750",
                "725",
                "790",
                "700"
            ],

            correctAnswer: "750",

            hint: "The middle of any hundred interval is always 50 more than the lower hundred.",

            explanation:
                "750 is halfway between 700 and 800."

        },

        {
            id: "enl-018",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "Which number is closest to 500?",

            options: [
                "497",
                "460",
                "545",
                "580"
            ],

            correctAnswer: "497",

            hint: "Work out how many away from 500 each option is. The smallest gap wins.",

            explanation:
                "497 is only 3 away from 500."

        },

        {
            id: "enl-019",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "845 is between which two hundreds?",

            options: [
                "800 and 900",
                "700 and 800",
                "900 and 1000",
                "600 and 700"
            ],

            correctAnswer: "800 and 900",

            hint: "Look at the hundreds digit, then decide whether the number has crossed into the next hundred yet.",

            explanation:
                "845 lies between 800 and 900."

        },
                {
            id: "enl-020",
            skillId: "estimate-on-number-line",
            stage: "understand",

            question: "Which number is nearest the middle of 900 and 1000?",

            options: [
                "950",
                "925",
                "980",
                "1000"
            ],

            correctAnswer: "950",

            hint: "The midpoint is exactly halfway between the two end numbers. Count 50 on from 900 or 50 back from 1000.",

            explanation:
                "950 is halfway between 900 and 1000."

        },

        {
            id: "enl-021",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "A road is 1,000 metres long. About halfway along is...",

            options: [
                "500 metres",
                "250 metres",
                "750 metres",
                "900 metres"
            ],

            correctAnswer: "500 metres",

            hint: "Imagine walking from one end of the road to the other. The halfway point splits the distance into two equal parts.",

            explanation:
                "Halfway between 0 and 1,000 is 500."

        },

        {
            id: "enl-022",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "A runner has completed 420 metres of a 500 metre race. Between which hundreds is 420?",

            options: [
                "400 and 500",
                "300 and 400",
                "500 and 600",
                "200 and 300"
            ],

            correctAnswer: "400 and 500",

            hint: "Ignore the race distance for a moment. Decide which hundred comes before 420 and which hundred comes after it.",

            explanation:
                "420 is greater than 400 but less than 500."

        },

        {
            id: "enl-023",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "A library has 680 books. Which hundred is it closest to?",

            options: [
                "700",
                "600",
                "500",
                "800"
            ],

            correctAnswer: "700",

            hint: "Compare the distance to 600 and to 700. Whichever is fewer numbers away is the closer hundred.",

            explanation:
                "680 is closer to 700 than to 600."

        },

        {
            id: "enl-024",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "A lift has travelled 260 metres. Between which hundreds is it?",

            options: [
                "200 and 300",
                "100 and 200",
                "300 and 400",
                "400 and 500"
            ],

            correctAnswer: "200 and 300",

            hint: "Think about the last full hundred the lift has passed and the next hundred it has not yet reached.",

            explanation:
                "260 lies between 200 and 300."

        },

        {
            id: "enl-025",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "Which child estimated closest to 400?",

            options: [
                "398",
                "365",
                "450",
                "472"
            ],

            correctAnswer: "398",

            hint: "Work out how far each number is from 400. The smallest difference shows the closest estimate.",

            explanation:
                "398 is only 2 away from 400."

        },

        {
            id: "enl-026",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "Which number is nearest the end of a number line from 0 to 900?",

            options: [
                "890",
                "630",
                "470",
                "150"
            ],

            correctAnswer: "890",

            hint: "The end of the number line is 900. Choose the value that would be plotted nearest that endpoint.",

            explanation:
                "890 is closest to 900."

        },

        {
            id: "enl-027",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "Which number is nearest the start of a number line from 0 to 800?",

            options: [
                "18",
                "140",
                "260",
                "390"
            ],

            correctAnswer: "18",

            hint: "The start of the number line is zero. Pick the number with the shortest distance from zero.",

            explanation:
                "18 is closest to 0."

        },

        {
            id: "enl-028",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "Which number belongs between 500 and 600?",

            options: [
                "575",
                "475",
                "620",
                "490"
            ],

            correctAnswer: "575",

            hint: "A correct answer must be greater than 500 but still less than 600. Check both conditions.",

            explanation:
                "575 is greater than 500 and less than 600."

        },

        {
            id: "enl-029",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "Which number is closest to the middle of 100 and 200?",

            options: [
                "150",
                "120",
                "190",
                "100"
            ],

            correctAnswer: "150",

            hint: "The middle is the point that is exactly the same distance from both 100 and 200.",

            explanation:
                "150 is halfway between 100 and 200."

        },

        {
            id: "enl-030",
            skillId: "estimate-on-number-line",
            stage: "apply",

            question: "Which number is between 900 and 1000?",

            options: [
                "975",
                "875",
                "1005",
                "850"
            ],

            correctAnswer: "975",

            hint: "Check whether each option is larger than 900 and still smaller than 1000 before choosing.",

            explanation:
                "975 lies between 900 and 1000."

        },

        {
            id: "enl-031",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is closest to 600?",

            options: [
                "602",
                "625",
                "570",
                "648"
            ],

            correctAnswer: "602",

            hint: "Don't just look at whether a number is above or below 600. Compare how many away each option is.",

            explanation:
                "602 is only 2 away from 600."

        },

        {
            id: "enl-032",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "735 is between which two hundreds?",

            options: [
                "700 and 800",
                "600 and 700",
                "800 and 900",
                "500 and 600"
            ],

            correctAnswer: "700 and 800",

            hint: "Locate the hundreds digit first, then decide whether the number has crossed into the next hundred.",

            explanation:
                "735 is greater than 700 but less than 800."

        },

        {
            id: "enl-033",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is nearest the middle of 300 and 400?",

            options: [
                "350",
                "330",
                "380",
                "400"
            ],

            correctAnswer: "350",

            hint: "Halfway across any 100-number interval is always 50 more than the lower hundred.",

            explanation:
                "350 is halfway between 300 and 400."

        },

        {
            id: "enl-034",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which child estimated closest to 900?",

            options: [
                "899",
                "860",
                "940",
                "825"
            ],

            correctAnswer: "899",

            hint: "Find the distance from each number to 900. Even being just one away is better than being several tens away.",

            explanation:
                "899 is only 1 away from 900."

        },

        {
            id: "enl-035",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number belongs between 100 and 200?",

            options: [
                "175",
                "95",
                "205",
                "250"
            ],

            correctAnswer: "175",

            hint: "A number between 100 and 200 must be greater than 100 but not reach 200. Check both limits before choosing.",

            explanation:
                "175 is greater than 100 and less than 200."

        },

        {
            id: "enl-036",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "A hiker has walked 760 metres. Between which hundreds is this distance?",

            options: [
                "700 and 800",
                "600 and 700",
                "800 and 900",
                "500 and 600"
            ],

            correctAnswer: "700 and 800",

            hint: "Think about the last hundred the hiker has passed and the next hundred still ahead.",

            explanation:
                "760 lies between 700 and 800."

        },

        {
            id: "enl-037",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is closest to the end of a number line from 0 to 1,000?",

            options: [
                "995",
                "820",
                "650",
                "430"
            ],

            correctAnswer: "995",

            hint: "The end of this number line is 1,000. Choose the value with the smallest distance to that endpoint.",

            explanation:
                "995 is closest to 1,000."

        },

        {
            id: "enl-038",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is closest to the start of a number line from 0 to 1,000?",

            options: [
                "8",
                "120",
                "240",
                "380"
            ],

            correctAnswer: "8",

            hint: "Imagine standing at 0. Which number would you reach first as you move along the number line?",

            explanation:
                "8 is closest to 0."

        },

        {
            id: "enl-039",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is closest to 250?",

            options: [
                "248",
                "225",
                "280",
                "300"
            ],

            correctAnswer: "248",

            hint: "Compare how many away each option is from 250. The smallest gap identifies the closest number.",

            explanation:
                "248 is only 2 away from 250."

        },

        {
            id: "enl-040",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is halfway between 800 and 900?",

            options: [
                "850",
                "825",
                "875",
                "900"
            ],

            correctAnswer: "850",

            hint: "Halfway between two consecutive hundreds is always 50 more than the lower hundred.",

            explanation:
                "850 is exactly halfway."

        },

        {
            id: "enl-041",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is between 400 and 500?",

            options: [
                "455",
                "395",
                "510",
                "350"
            ],

            correctAnswer: "455",

            hint: "Check that the number is larger than 400 and still smaller than 500. Only one option satisfies both.",

            explanation:
                "455 lies between 400 and 500."

        },

        {
            id: "enl-042",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "A train has travelled 515 kilometres. Between which hundreds is this distance?",

            options: [
                "500 and 600",
                "400 and 500",
                "600 and 700",
                "300 and 400"
            ],

            correctAnswer: "500 and 600",

            hint: "Identify the hundred already passed by 515, then the next hundred it has not yet reached.",

            explanation:
                "515 is greater than 500 but less than 600."

        },

        {
            id: "enl-043",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which estimate is closest to 700?",

            options: [
                "703",
                "675",
                "740",
                "650"
            ],

            correctAnswer: "703",

            hint: "Instead of looking at the numbers themselves, compare each one's distance from 700.",

            explanation:
                "703 is only 3 away from 700."

        },

        {
            id: "enl-044",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number belongs between 900 and 1,000?",

            options: [
                "950",
                "890",
                "1005",
                "850"
            ],

            correctAnswer: "950",

            hint: "The correct choice must be greater than 900 but must not go past 1,000.",

            explanation:
                "950 lies between 900 and 1,000."

        },

        {
            id: "enl-045",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is nearest the middle of 0 and 200?",

            options: [
                "100",
                "50",
                "150",
                "200"
            ],

            correctAnswer: "100",

            hint: "The midpoint is exactly the same distance from both ends of the interval.",

            explanation:
                "100 is halfway between 0 and 200."

        },

        {
            id: "enl-046",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is closest to 100?",

            options: [
                "99",
                "125",
                "140",
                "160"
            ],

            correctAnswer: "99",

            hint: "Find the difference between each option and 100. The smallest difference is the best estimate.",

            explanation:
                "99 is only 1 away from 100."

        },

        {
            id: "enl-047",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is between 250 and 350?",

            options: [
                "300",
                "240",
                "360",
                "200"
            ],

            correctAnswer: "300",

            hint: "Imagine the interval starting at 250 and ending at 350. Only one option falls inside it.",

            explanation:
                "300 lies between 250 and 350."

        },

        {
            id: "enl-048",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which child gave the best estimate for the middle of 600 and 700?",

            options: [
                "650",
                "620",
                "680",
                "700"
            ],

            correctAnswer: "650",

            hint: "Work out the midpoint yourself before looking at the children's answers. The correct choice should be equally distant from both hundreds.",

            explanation:
                "650 is halfway between 600 and 700."

        },

        {
            id: "enl-049",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is closest to 800?",

            options: [
                "798",
                "760",
                "845",
                "730"
            ],

            correctAnswer: "798",

            hint: "Measure the distance from each option to 800. The nearest point has the smallest difference.",

            explanation:
                "798 is only 2 away from 800."

        },

        {
            id: "enl-050",
            skillId: "estimate-on-number-line",
            stage: "master",

            question: "Which number is nearest the middle of 400 and 600?",

            options: [
                "500",
                "450",
                "550",
                "600"
            ],

            correctAnswer: "500",

            hint: "The interval from 400 to 600 is 200 wide. Half of 200 is 100, so move that far from either end.",

            explanation:
                "500 is halfway between 400 and 600."

        }
    ]
};

export default estimateOnNumberLine;

export {
    estimateOnNumberLine
};