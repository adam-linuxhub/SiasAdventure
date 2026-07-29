/*==================================================
  SKILL REGISTRY
==================================================*/

export type Subject =

    | "Maths"
    | "English"
    | "Verbal Reasoning"
    | "Non-Verbal Reasoning";

export interface SkillDefinition {

    id: string;

    name: string;

    subject: Subject;

}

export const Skills: SkillDefinition[] = [

    /*==============================================
      MATHS
    ==============================================*/

    {

        id: "solve-one-step-addition-and-subtraction-problems",

        name: "One-Step Addition & Subtraction",

        subject: "Maths"

    }

    // Add more skills here as your question bank grows.
    //
    // Example:
    //
    // {
    //
    //     id: "multiply-two-digit-numbers",
    //
    //     name: "Two-Digit Multiplication",
    //
    //     subject: "Maths"
    //
    // },

];

export const SkillRegistry = {

    get(
        id: string
    ): SkillDefinition | undefined {

        return Skills.find(
            skill => skill.id === id
        );

    },

    getName(
        id: string
    ): string {

        return this.get(id)?.name ?? id;

    },

    getSubject(
        id: string
    ): Subject | "Unknown" {

        return this.get(id)?.subject ?? "Unknown";

    },

    exists(
        id: string
    ): boolean {

        return this.get(id) !== undefined;

    },

    getBySubject(
        subject: Subject
    ): SkillDefinition[] {

        return Skills.filter(
            skill => skill.subject === subject
        );

    },

    getAll(): SkillDefinition[] {

        return [...Skills];

    }

};