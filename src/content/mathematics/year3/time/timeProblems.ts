import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

/*==================================================
  TIME PROBLEMS
==================================================*/

const timeProblems: SkillContent = {
    skillId: "time-problems",

    title: "Time Problems",

    description:
        "Solve Year 3 problems involving durations, start and finish times, and time intervals.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "tp-001",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A lesson starts at 9:00 and finishes at 10:00. How long is the lesson?",

            hint: "Count the hours from the start time to the finish time.",

            options: [
                "30 minutes",
                "1 hour",
                "1 hour 30 minutes",
                "2 hours"
            ],

            correctAnswer: "1 hour",

            explanation:
                "The lesson runs from 9:00 to 10:00, which is 1 hour."
        },

        {
            id: "tp-002",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia starts reading at 3:00 and stops at 3:30. How long does she read for?",

            hint: "Count the minutes between the two times.",

            options: [
                "15 minutes",
                "20 minutes",
                "30 minutes",
                "45 minutes"
            ],

            correctAnswer: "30 minutes",

            explanation:
                "3:30 is 30 minutes after 3:00, so Sia reads for 30 minutes."
        },

        {
            id: "tp-003",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A game starts at 2:15 and lasts 15 minutes. What time does it finish?",

            hint: "Add 15 minutes to 2:15.",

            options: [
                "2:20",
                "2:30",
                "2:35",
                "2:45"
            ],

            correctAnswer: "2:30",

            explanation:
                "2:15 + 15 minutes = 2:30."
        },

        {
            id: "tp-004",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A club starts at 4:00 and lasts 30 minutes. What time does it finish?",

            hint: "Add half an hour to 4:00.",

            options: [
                "4:15",
                "4:30",
                "4:45",
                "5:00"
            ],

            correctAnswer: "4:30",

            explanation:
                "4:00 + 30 minutes = 4:30."
        },

        {
            id: "tp-005",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A film starts at 5:30 and finishes at 6:30. How long is the film?",

            hint: "Count from 5:30 to 6:30.",

            options: [
                "30 minutes",
                "45 minutes",
                "1 hour",
                "1 hour 30 minutes"
            ],

            correctAnswer: "1 hour",

            explanation:
                "The film runs from 5:30 to 6:30, which is 1 hour."
        },

        {
            id: "tp-006",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia starts a puzzle at 10:00 and works for 20 minutes. What time does she finish?",

            hint: "Add 20 minutes to 10:00.",

            options: [
                "10:10",
                "10:20",
                "10:30",
                "10:40"
            ],

            correctAnswer: "10:20",

            explanation:
                "10:00 + 20 minutes = 10:20."
        },

        {
            id: "tp-007",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A lesson begins at 11:15 and lasts 45 minutes. What time does it finish?",

            hint: "Add 45 minutes to 11:15.",

            options: [
                "11:45",
                "12:00",
                "12:15",
                "12:30"
            ],

            correctAnswer: "12:00",

            explanation:
                "11:15 + 45 minutes = 12:00."
        },

        {
            id: "tp-008",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A bus leaves at 8:30 and arrives at 9:00. How long is the journey?",

            hint: "Count the minutes from 8:30 to 9:00.",

            options: [
                "15 minutes",
                "20 minutes",
                "30 minutes",
                "45 minutes"
            ],

            correctAnswer: "30 minutes",

            explanation:
                "From 8:30 to 9:00 is 30 minutes."
        },

        {
            id: "tp-009",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "Sia goes swimming at 2:00 and stays for 1 hour. What time does she leave?",

            hint: "Add 1 hour to 2:00.",

            options: [
                "2:30",
                "3:00",
                "3:30",
                "4:00"
            ],

            correctAnswer: "3:00",

            explanation:
                "2:00 + 1 hour = 3:00."
        },

        {
            id: "tp-010",
            skillId: "time-problems",
            stage: "recognise",
            difficulty: 1,

            question: "A party starts at 1:30 and ends at 2:15. How long does the party last?",

            hint: "Count from 1:30 to 2:00, then to 2:15.",

            options: [
                "30 minutes",
                "40 minutes",
                "45 minutes",
                "1 hour"
            ],

            correctAnswer: "45 minutes",

            explanation:
                "From 1:30 to 2:00 is 30 minutes, then another 15 minutes makes 45 minutes."
        },
                {
            id: "tp-011",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "A lesson starts at 9:15 and lasts 30 minutes. What time does it finish?",

            hint: "Add 30 minutes to 9:15.",

            options: [
                "9:35",
                "9:45",
                "10:00",
                "10:15"
            ],

            correctAnswer: "9:45",

            explanation:
                "9:15 + 30 minutes = 9:45."
        },

        {
            id: "tp-012",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia starts reading at 2:20 and reads for 40 minutes. What time does she finish?",

            hint: "Add 40 minutes to 2:20.",

            options: [
                "2:50",
                "3:00",
                "3:10",
                "3:20"
            ],

            correctAnswer: "3:00",

            explanation:
                "2:20 + 40 minutes = 3:00."
        },

        {
            id: "tp-013",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "A football match starts at 3:30 and lasts 1 hour. What time does it finish?",

            hint: "Add 1 hour to 3:30.",

            options: [
                "4:00",
                "4:15",
                "4:30",
                "5:30"
            ],

            correctAnswer: "4:30",

            explanation:
                "3:30 + 1 hour = 4:30."
        },

        {
            id: "tp-014",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "A train leaves at 10:20 and arrives at 11:05. How long is the journey?",

            hint: "Count from 10:20 to 11:00, then add the remaining minutes.",

            options: [
                "35 minutes",
                "40 minutes",
                "45 minutes",
                "50 minutes"
            ],

            correctAnswer: "45 minutes",

            explanation:
                "From 10:20 to 11:00 is 40 minutes. Another 5 minutes makes 45 minutes."
        },

        {
            id: "tp-015",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia arrives at school at 8:35. School starts at 9:00. How long does she wait?",

            hint: "Find the difference between 8:35 and 9:00.",

            options: [
                "15 minutes",
                "20 minutes",
                "25 minutes",
                "30 minutes"
            ],

            correctAnswer: "25 minutes",

            explanation:
                "From 8:35 to 9:00 is 25 minutes."
        },

        {
            id: "tp-016",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "A swimming lesson begins at 4:15 and finishes at 5:00. How long is the lesson?",

            hint: "Count from 4:15 to 5:00.",

            options: [
                "30 minutes",
                "40 minutes",
                "45 minutes",
                "50 minutes"
            ],

            correctAnswer: "45 minutes",

            explanation:
                "From 4:15 to 5:00 is 45 minutes."
        },

        {
            id: "tp-017",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "A film begins at 6:30 and lasts 1 hour 15 minutes. What time does it finish?",

            hint: "Add 1 hour, then add 15 minutes.",

            options: [
                "7:30",
                "7:45",
                "8:00",
                "8:15"
            ],

            correctAnswer: "7:45",

            explanation:
                "6:30 + 1 hour = 7:30. Adding 15 minutes gives 7:45."
        },

        {
            id: "tp-018",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "Sia starts her homework at 4:40 and works for 35 minutes. What time does she finish?",

            hint: "Add 35 minutes to 4:40.",

            options: [
                "5:05",
                "5:15",
                "5:25",
                "5:35"
            ],

            correctAnswer: "5:15",

            explanation:
                "From 4:40 to 5:00 is 20 minutes. Another 15 minutes gives 5:15."
        },

        {
            id: "tp-019",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "A bus leaves at 12:10 and arrives at 12:50. How long is the journey?",

            hint: "Find the difference between 12:10 and 12:50.",

            options: [
                "30 minutes",
                "40 minutes",
                "50 minutes",
                "1 hour"
            ],

            correctAnswer: "40 minutes",

            explanation:
                "12:50 − 12:10 = 40 minutes."
        },

        {
            id: "tp-020",
            skillId: "time-problems",
            stage: "apply",
            difficulty: 2,

            question: "A party starts at 2:45 and lasts 1 hour 30 minutes. What time does it finish?",

            hint: "Add 1 hour, then add 30 minutes.",

            options: [
                "3:45",
                "4:00",
                "4:15",
                "4:30"
            ],

            correctAnswer: "4:15",

            explanation:
                "2:45 + 1 hour = 3:45. Adding 30 minutes gives 4:15."
        },
                {
            id: "tp-021",
            skillId: "time-problems",
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
            id: "tp-022",
            skillId: "time-problems",
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
            id: "tp-023",
            skillId: "time-problems",
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
            id: "tp-024",
            skillId: "time-problems",
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
            id: "tp-025",
            skillId: "time-problems",
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
            id: "tp-026",
            skillId: "time-problems",
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
            id: "tp-027",
            skillId: "time-problems",
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
            id: "tp-028",
            skillId: "time-problems",
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
        },

        {
            id: "tp-029",
            skillId: "time-problems",
            stage: "master",
            difficulty: 3,

            question: "A train leaves at 11:35 and arrives at 12:50. How long is the journey?",

            hint: "Count from 11:35 to 12:00, then from 12:00 to 12:50.",

            options: [
                "1 hour 5 minutes",
                "1 hour 15 minutes",
                "1 hour 25 minutes",
                "1 hour 35 minutes"
            ],

            correctAnswer: "1 hour 15 minutes",

            explanation:
                "From 11:35 to 12:00 is 25 minutes. From 12:00 to 12:50 is 50 minutes. 25 + 50 = 75 minutes, which is 1 hour 15 minutes."
        },

        {
            id: "tp-030",
            skillId: "time-problems",
            stage: "master",
            difficulty: 3,

            question: "Sia starts baking at 14:10. The recipe takes 1 hour 25 minutes. What time should the baking finish?",

            hint: "Add 1 hour, then add 25 minutes.",

            options: [
                "15:25",
                "15:35",
                "15:45",
                "16:05"
            ],

            correctAnswer: "15:35",

            explanation:
                "14:10 + 1 hour = 15:10. Adding 25 minutes gives 15:35."
        }

    ]
};

export default timeProblems;

export {
    timeProblems
};