import { SkillContent, MultipleChoiceActivity } from "../content/types";

export class LearningEngine {

    constructor(
        private readonly skill: SkillContent
    ) {}

    getCurrentActivity(): MultipleChoiceActivity {

        return this.skill.activities[0];
    }

}