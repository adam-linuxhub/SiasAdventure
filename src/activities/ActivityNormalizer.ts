import {
    AnyActivity,
    MultipleChoiceActivity
} from "./Activity";

export function normaliseActivity(
    activity: AnyActivity
): MultipleChoiceActivity {

    // Already modern
    if ("correctAnswer" in activity) {
        return activity;
    }

    // Legacy answers/correct
    if ("answers" in activity) {

        return {
            ...activity,
            options: activity.answers,
            correctAnswer: activity.answers[activity.correct]
        };
    }

    // Transitional options/answer

    return {
        ...activity,
        correctAnswer: activity.options[activity.answer]
    };
}