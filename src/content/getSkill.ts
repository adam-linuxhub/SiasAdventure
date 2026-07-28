import { getAllSkills } from "./index";
import { SkillContent, SkillId } from "./types";

export function getSkill(skillId: SkillId): SkillContent | undefined {

    return getAllSkills().find(
        skill => skill.skillId === skillId
    );
}