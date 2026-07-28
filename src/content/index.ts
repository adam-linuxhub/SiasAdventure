import { year3Content } from "./mathematics/year3";
import { SkillContent } from "./types";

export const content = {
    mathematics: {
        year3: year3Content
    }
};

export function getAllSkills(): SkillContent[] {
    return [
        ...content.mathematics.year3.numberPlaceValue
    ];
}