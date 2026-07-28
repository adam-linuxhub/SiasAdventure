import {
    MultipleChoiceActivity,
    SkillContent
} from "../../../types";

export const partitionNumbers: SkillContent = {
    skillId: "partition-numbers",

    title: "Partition Numbers",

    description: "Partition three-digit numbers into hundreds, tens and ones.",

    version: 1,

    activities: <MultipleChoiceActivity[]>[
        {
            id: "pn-001",
            skillId: "partition-numbers",
            stage: "recognise",

            question: "Which is the correct partition of 345?",

            options: [
                "300 + 40 + 5",
                "30 + 40 + 5",
                "300 + 4 + 5",
                "345 + 0 + 0"
            ],

            correctAnswer: "300 + 40 + 5",

            explanation:
                "345 has 3 hundreds, 4 tens and 5 ones."
        }
    ]
};