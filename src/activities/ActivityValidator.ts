import { MultipleChoiceActivity } from "./Activity";

export function validateActivity(
    activity: MultipleChoiceActivity
): string[] {

    const errors: string[] = [];

    if (!activity.question.trim()) {
        errors.push("Missing question");
    }

    if (activity.options.length < 2) {
        errors.push("Must have at least two options");
    }

    if (!activity.options.includes(activity.correctAnswer)) {
        errors.push("Correct answer is not in options");
    }

    if (!activity.explanation.trim()) {
        errors.push("Missing explanation");
    }

    return errors;
}