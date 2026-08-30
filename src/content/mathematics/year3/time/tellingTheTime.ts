import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  TELLING THE TIME
==================================================*/

const tellingTheTime: SkillContent = {
    skillId: "telling-the-time",

    title: "Telling the Time",

    description:
        "Read and interpret times using analogue and digital clocks, including Roman numerals and 12-hour and 24-hour notation.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "time-001",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "How many minutes are in 1 hour?",

            hint: "Think about how many minutes pass between one o'clock and two o'clock.",

            options: [
                "30",
                "45",
                "60",
                "100"
            ],

            correctAnswer: "60",

            explanation:
                "There are 60 minutes in 1 hour."
        },

        {
            id: "time-002",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "How many hours are in 1 day?",

            hint: "Think about the number of hours from midnight to midnight.",

            options: [
                "12",
                "18",
                "24",
                "60"
            ],

            correctAnswer: "24",

            explanation:
                "There are 24 hours in 1 day."
        },

        {
            id: "time-003",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "How many seconds are in 1 minute?",

            hint: "Think about the number of seconds shown on a clock face during one minute.",

            options: [
                "30",
                "60",
                "100",
                "120"
            ],

            correctAnswer: "60",

            explanation:
                "There are 60 seconds in 1 minute."
        },

        {
            id: "time-004",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "Which time is the same as half past 3?",

            hint: "Half past means 30 minutes after the hour.",

            options: [
                "3:15",
                "3:20",
                "3:30",
                "4:30"
            ],

            correctAnswer: "3:30",

            explanation:
                "Half past 3 is 30 minutes after 3 o'clock, so the time is 3:30."
        },

        {
            id: "time-005",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "Which time is the same as quarter past 5?",

            hint: "A quarter of an hour is 15 minutes.",

            options: [
                "5:05",
                "5:15",
                "5:30",
                "5:45"
            ],

            correctAnswer: "5:15",

            explanation:
                "Quarter past 5 means 15 minutes after 5 o'clock, so it is 5:15."
        },

        {
            id: "time-006",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "Which time is the same as quarter to 8?",

            hint: "Quarter to means 15 minutes before the hour.",

            options: [
                "7:15",
                "7:30",
                "7:45",
                "8:15"
            ],

            correctAnswer: "7:45",

            explanation:
                "Quarter to 8 is 15 minutes before 8 o'clock, so it is 7:45."
        },

        {
            id: "time-007",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "What time is 20 minutes after 4:00?",

            hint: "Count forward 20 minutes from 4 o'clock.",

            options: [
                "4:10",
                "4:20",
                "4:30",
                "4:40"
            ],

            correctAnswer: "4:20",

            explanation:
                "20 minutes after 4:00 is 4:20."
        },

        {
            id: "time-008",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "What time is 10 minutes before 6:00?",

            hint: "Count backwards 10 minutes from 6 o'clock.",

            options: [
                "5:40",
                "5:50",
                "6:10",
                "6:50"
            ],

            correctAnswer: "5:50",

            explanation:
                "10 minutes before 6:00 is 5:50."
        },

        {
            id: "time-009",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "Which digital time means 7 o'clock in the morning?",

            hint: "Morning times use a.m. in 12-hour notation.",

            options: [
                "7:00 a.m.",
                "7:00 p.m.",
                "17:00",
                "19:00"
            ],

            correctAnswer: "7:00 a.m.",

            explanation:
                "7 o'clock in the morning is written as 7:00 a.m."
        },

        {
            id: "time-010",
            skillId: "telling-the-time",
            stage: "recognise",
            difficulty: 1,

            question: "Which 24-hour time means 6 o'clock in the evening?",

            hint: "For evening times after midday, add 12 to the hour.",

            options: [
                "06:00",
                "12:06",
                "16:00",
                "18:00"
            ],

            correctAnswer: "18:00",

            explanation:
                "6 o'clock in the evening is 18:00 in 24-hour notation."
        },
                {
            id: "time-011",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "What time is 25 minutes after 2:00?",

            hint: "Count forward 25 minutes from 2 o'clock.",

            options: [
                "2:15",
                "2:25",
                "2:35",
                "2:45"
            ],

            correctAnswer: "2:25",

            explanation:
                "25 minutes after 2:00 is 2:25."
        },

        {
            id: "time-012",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "What time is 35 minutes after 1:00?",

            hint: "Count forward 35 minutes from 1 o'clock.",

            options: [
                "1:25",
                "1:30",
                "1:35",
                "1:45"
            ],

            correctAnswer: "1:35",

            explanation:
                "35 minutes after 1:00 is 1:35."
        },

        {
            id: "time-013",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "What time is 20 minutes before 5:00?",

            hint: "Count backwards 20 minutes from 5 o'clock.",

            options: [
                "4:20",
                "4:30",
                "4:40",
                "4:50"
            ],

            correctAnswer: "4:40",

            explanation:
                "20 minutes before 5:00 is 4:40."
        },

        {
            id: "time-014",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "What time is 45 minutes after 3:00?",

            hint: "Count forward 45 minutes from 3 o'clock.",

            options: [
                "3:35",
                "3:40",
                "3:45",
                "4:15"
            ],

            correctAnswer: "3:45",

            explanation:
                "45 minutes after 3:00 is 3:45."
        },

        {
            id: "time-015",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "What time is 15 minutes before 9:00?",

            hint: "Quarter of an hour before 9 o'clock is quarter to 9.",

            options: [
                "8:15",
                "8:30",
                "8:45",
                "9:15"
            ],

            correctAnswer: "8:45",

            explanation:
                "15 minutes before 9:00 is 8:45, or quarter to 9."
        },

        {
            id: "time-016",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "A lesson starts at 10:15 and lasts 30 minutes. What time does it finish?",

            hint: "Add 30 minutes to 10:15.",

            options: [
                "10:30",
                "10:45",
                "11:00",
                "11:15"
            ],

            correctAnswer: "10:45",

            explanation:
                "10:15 + 30 minutes = 10:45."
        },

        {
            id: "time-017",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "A film starts at 2:30 and lasts 1 hour. What time does it finish?",

            hint: "Add one hour to 2:30.",

            options: [
                "3:00",
                "3:15",
                "3:30",
                "4:30"
            ],

            correctAnswer: "3:30",

            explanation:
                "2:30 + 1 hour = 3:30."
        },

        {
            id: "time-018",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "A club starts at 4:20 and finishes at 5:00. How long does it last?",

            hint: "Count the minutes from 4:20 to 5:00.",

            options: [
                "20 minutes",
                "30 minutes",
                "40 minutes",
                "50 minutes"
            ],

            correctAnswer: "40 minutes",

            explanation:
                "From 4:20 to 5:00 is 40 minutes."
        },

        {
            id: "time-019",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "Sia starts reading at 6:15 and reads for 45 minutes. What time does she finish?",

            hint: "Add 45 minutes to 6:15.",

            options: [
                "6:45",
                "7:00",
                "7:15",
                "7:30"
            ],

            correctAnswer: "7:00",

            explanation:
                "6:15 + 45 minutes = 7:00."
        },

        {
            id: "time-020",
            skillId: "telling-the-time",
            stage: "apply",
            difficulty: 2,

            question: "Which 24-hour time means 3:30 p.m.?",

            hint: "For an afternoon time, add 12 to the hour.",

            options: [
                "03:30",
                "12:30",
                "15:30",
                "18:30"
            ],

            correctAnswer: "15:30",

            explanation:
                "3:30 p.m. is 15:30 in 24-hour notation."
        },
                {
            id: "time-021",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "Sia starts a puzzle at 3:25 and works on it for 50 minutes. What time does she finish?",

            hint: "Add 50 minutes to 3:25. You will cross the next hour.",

            options: [
                "4:05",
                "4:15",
                "4:25",
                "4:35"
            ],

            correctAnswer: "4:15",

            explanation:
                "From 3:25 to 4:00 is 35 minutes. There are 15 minutes left, so the puzzle finishes at 4:15."
        },

        {
            id: "time-022",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "A train leaves at 9:40 and arrives at 10:25. How long is the journey?",

            hint: "Count from 9:40 to 10:00, then from 10:00 to 10:25.",

            options: [
                "35 minutes",
                "40 minutes",
                "45 minutes",
                "55 minutes"
            ],

            correctAnswer: "45 minutes",

            explanation:
                "From 9:40 to 10:00 is 20 minutes. From 10:00 to 10:25 is 25 minutes. 20 + 25 = 45 minutes."
        },

        {
            id: "time-023",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "Sia starts homework at 4:35 and finishes at 5:20. How long does she spend on homework?",

            hint: "Count forward from 4:35 to 5:20.",

            options: [
                "35 minutes",
                "40 minutes",
                "45 minutes",
                "50 minutes"
            ],

            correctAnswer: "45 minutes",

            explanation:
                "From 4:35 to 5:00 is 25 minutes. From 5:00 to 5:20 is 20 minutes. 25 + 20 = 45 minutes."
        },

        {
            id: "time-024",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "A lesson starts at 10:45 and lasts 1 hour 20 minutes. What time does it finish?",

            hint: "Add 1 hour first, then add 20 minutes.",

            options: [
                "11:55",
                "12:05",
                "12:15",
                "12:25"
            ],

            correctAnswer: "12:05",

            explanation:
                "10:45 + 1 hour = 11:45. Adding 20 minutes gives 12:05."
        },

        {
            id: "time-025",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "A film starts at 6:20 p.m. and lasts 1 hour 30 minutes. What time does it finish?",

            hint: "Add 1 hour, then add 30 minutes.",

            options: [
                "7:20 p.m.",
                "7:40 p.m.",
                "7:50 p.m.",
                "8:00 p.m."
            ],

            correctAnswer: "7:50 p.m.",

            explanation:
                "6:20 p.m. + 1 hour = 7:20 p.m. Adding 30 minutes gives 7:50 p.m."
        },

        {
            id: "time-026",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "Which 24-hour time is 7:45 p.m.?",

            hint: "For evening times, add 12 to the hour.",

            options: [
                "17:45",
                "18:45",
                "19:45",
                "20:45"
            ],

            correctAnswer: "19:45",

            explanation:
                "7:45 p.m. is 19:45 in 24-hour notation."
        },

        {
            id: "time-027",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "A swimming lesson starts at 14:30 and lasts 45 minutes. What time does it finish?",

            hint: "Add 45 minutes to 14:30.",

            options: [
                "15:05",
                "15:15",
                "15:25",
                "15:30"
            ],

            correctAnswer: "15:15",

            explanation:
                "14:30 + 45 minutes = 15:15."
        },

        {
            id: "time-028",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "Sia needs to leave home at 8:15. It takes her 35 minutes to get ready. What time should she start getting ready?",

            hint: "Count backwards 35 minutes from 8:15.",

            options: [
                "7:30",
                "7:40",
                "7:50",
                "8:00"
            ],

            correctAnswer: "7:40",

            explanation:
                "35 minutes before 8:15 is 7:40."
        },

        {
            id: "time-029",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "A bus leaves at 16:20. Sia arrives at the bus stop at 16:05. How many minutes does she wait?",

            hint: "Find the difference between 16:05 and 16:20.",

            options: [
                "10 minutes",
                "15 minutes",
                "20 minutes",
                "25 minutes"
            ],

            correctAnswer: "15 minutes",

            explanation:
                "16:20 − 16:05 = 15 minutes."
        },

        {
            id: "time-030",
            skillId: "telling-the-time",
            stage: "master",
            difficulty: 3,

            question: "A party starts at 13:45 and finishes at 15:15. How long does the party last?",

            hint: "Count from 13:45 to 14:00, then from 14:00 to 15:15.",

            options: [
                "1 hour",
                "1 hour 15 minutes",
                "1 hour 30 minutes",
                "1 hour 45 minutes"
            ],

            correctAnswer: "1 hour 30 minutes",

            explanation:
                "From 13:45 to 14:00 is 15 minutes. From 14:00 to 15:15 is 1 hour 15 minutes. Altogether, the party lasts 1 hour 30 minutes."
        }

    ]
};

export default tellingTheTime;

export {
    tellingTheTime
};