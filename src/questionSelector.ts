/*==================================================
  SIA'S ADVENTURE

  QUESTION SELECTOR

==================================================*/

import type { Question } from "./questionEngine";

export const QuestionSelector = {

    /*==========================================
      SELECTION HISTORY
    ==========================================*/

    recentSubjects: [] as string[],

    recentCategoriesBySubject:
        new Map<string, string[]>(),

    recentSkillsByCategory:
        new Map<string, string[]>(),

    recentQuestionIdsBySkill:
        new Map<string, string[]>(),

    maxRecentSubjects: 7,

    maxRecentCategories: 33,

    maxRecentSkills: 33,

    maxRecentQuestions: 10,

    /*==========================================
      CATEGORY KEY
    ==========================================*/

    getCategoryKey(question: Question): string {

        return [
            question.category?.subject ?? "unknown",
            question.category?.subSubject ?? "unknown"
        ].join("::");

    },

    /*==========================================
      GROUP BY CATEGORY
    ==========================================*/

    groupByCategory(
        questions: Question[]
    ): Map<string, Question[]> {

        const groups =
            new Map<string, Question[]>();

        for (const question of questions) {

            const key =
                this.getCategoryKey(question);

            const group =
                groups.get(key);

            if (group) {

                group.push(question);

            }
            else {

                groups.set(
                    key,
                    [question]
                );

            }

        }

        return groups;

    },

    /*==========================================
      GROUP BY SUBJECT
    ==========================================*/

    groupBySubject(
        questions: Question[]
    ): Map<string, Question[]> {

        const groups =
            new Map<string, Question[]>();

        for (const question of questions) {

            const subject =
                question.category?.subject ??
                "unknown";

            const group =
                groups.get(subject);

            if (group) {

                group.push(question);

            }
            else {

                groups.set(
                    subject,
                    [question]
                );

            }

        }

        return groups;

    },

    /*==========================================
      GROUP BY SKILL
    ==========================================*/

    groupBySkill(
        questions: Question[]
    ): Map<string, Question[]> {

        const groups =
            new Map<string, Question[]>();

        for (const question of questions) {

            const skillId =
                question.skillId ??
                "unknown";

            const group =
                groups.get(skillId);

            if (group) {

                group.push(question);

            }
            else {

                groups.set(
                    skillId,
                    [question]
                );

            }

        }

        return groups;

    },

    /*==========================================
      RECORD SELECTION
    ==========================================*/

    recordSelection(
        question: Question
    ): void {

        const subject =
            question.category?.subject ??
            "unknown";

        const category =
            this.getCategoryKey(question);

        const skill =
            question.skillId ??
            "unknown";

        /*======================================
          SUBJECT HISTORY
        ======================================*/

        this.recentSubjects.push(
            subject
        );

        if (
            this.recentSubjects.length >
            this.maxRecentSubjects
        ) {

            this.recentSubjects.shift();

        }

        /*======================================
          CATEGORY HISTORY
        ======================================*/

        const subjectCategories =
            this.recentCategoriesBySubject.get(
                subject
            ) ?? [];

        subjectCategories.push(
            category
        );

        if (
            subjectCategories.length >
            this.maxRecentCategories
        ) {

            subjectCategories.shift();

        }

        this.recentCategoriesBySubject.set(
            subject,
            subjectCategories
        );

        /*======================================
          SKILL HISTORY
        ======================================*/

        const categorySkills =
            this.recentSkillsByCategory.get(
                category
            ) ?? [];

        categorySkills.push(
            skill
        );

        if (
            categorySkills.length >
            this.maxRecentSkills
        ) {

            categorySkills.shift();

        }

        this.recentSkillsByCategory.set(
            category,
            categorySkills
        );

        /*======================================
          QUESTION HISTORY
        ======================================*/

        const recentQuestions =
            this.recentQuestionIdsBySkill.get(
                skill
            ) ?? [];

        recentQuestions.push(
            question.id
        );

        if (
            recentQuestions.length >
            this.maxRecentQuestions
        ) {

            recentQuestions.shift();

        }

        this.recentQuestionIdsBySkill.set(
            skill,
            recentQuestions
        );

    },

    /*==========================================
      FIND LEAST-USED SUBJECTS
    ==========================================*/

    getLeastRecentSubjects(
        questions: Question[]
    ): string[] {

        const groups =
            this.groupBySubject(questions);

        if (groups.size === 0) {

            return [];

        }

        const usage =
            new Map<string, number>();

        for (const subject of groups.keys()) {

            usage.set(
                subject,
                this.recentSubjects.filter(
                    recentSubject =>
                        recentSubject === subject
                ).length
            );

        }

        const minimum =
            Math.min(
                ...usage.values()
            );

        return [
            ...usage.entries()
        ]
            .filter(
                ([, count]) =>
                    count === minimum
            )
            .map(
                ([subject]) =>
                    subject
            );

    },

    /*==========================================
      FIND LEAST-USED CATEGORIES
    ==========================================*/

    getLeastRecentCategories(
        questions: Question[]
    ): string[] {

        const groups =
            this.groupByCategory(questions);

        if (groups.size === 0) {

            return [];

        }

        const firstQuestion =
            questions[0];

        const subject =
            firstQuestion?.category?.subject ??
            "unknown";

        const recentCategories =
            this.recentCategoriesBySubject.get(
                subject
            ) ?? [];

        const usage =
            new Map<string, number>();

        for (const category of groups.keys()) {

            usage.set(
                category,
                recentCategories.filter(
                    recentCategory =>
                        recentCategory === category
                ).length
            );

        }

        const minimum =
            Math.min(
                ...usage.values()
            );

        return [
            ...usage.entries()
        ]
            .filter(
                ([, count]) =>
                    count === minimum
            )
            .map(
                ([category]) =>
                    category
            );

    },

    /*==========================================
      FIND LEAST-USED SKILLS
    ==========================================*/

    getLeastRecentSkills(
        questions: Question[]
    ): string[] {

        const groups =
            this.groupBySkill(questions);

        if (groups.size === 0) {

            return [];

        }

        const firstQuestion =
            questions[0];

        const category =
            firstQuestion
                ? this.getCategoryKey(
                    firstQuestion
                )
                : "unknown";

        const recentSkills =
            this.recentSkillsByCategory.get(
                category
            ) ?? [];

        const usage =
            new Map<string, number>();

        for (const skillId of groups.keys()) {

            usage.set(
                skillId,
                recentSkills.filter(
                    recentSkill =>
                        recentSkill === skillId
                ).length
            );

        }

        const minimum =
            Math.min(
                ...usage.values()
            );

        return [
            ...usage.entries()
        ]
            .filter(
                ([, count]) =>
                    count === minimum
            )
            .map(
                ([skillId]) =>
                    skillId
            );

    },

    /*==========================================
      SELECT
    ==========================================*/

    select(

        availableQuestions: Question[],

        preferredQuestionId?: string

    ): Question {

        /*==========================================
          PREFERRED QUESTION
        ==========================================*/

        if (preferredQuestionId) {

            const preferredQuestion =

                availableQuestions.find(

                    question =>

                        question.id === preferredQuestionId

                );

            if (preferredQuestion) {

                return preferredQuestion;

            }

        }

        /*==========================================
          NO QUESTIONS
        ==========================================*/

        if (

            availableQuestions.length === 0

        ) {

            throw new Error(

                "QuestionSelector received no available questions."

            );

        }

        /*==========================================
          SELECT SUBJECT
        ==========================================*/

        const leastRecentSubjects =
            this.getLeastRecentSubjects(
                availableQuestions
            );

        const subjectQuestions =
            availableQuestions.filter(
                question =>
                    leastRecentSubjects.includes(
                        question.category?.subject ??
                        "unknown"
                    )
            );

        const subjectPool =
            subjectQuestions.length > 0
                ? subjectQuestions
                : availableQuestions;

        /*==========================================
          SELECT CATEGORY
        ==========================================*/

        const leastRecentCategories =
            this.getLeastRecentCategories(
                subjectPool
            );

        const categoryQuestions =
            subjectPool.filter(
                question =>
                    leastRecentCategories.includes(
                        this.getCategoryKey(question)
                    )
            );

        const categoryPool =
            categoryQuestions.length > 0
                ? categoryQuestions
                : subjectPool;

        /*==========================================
          SELECT SKILL
        ==========================================*/

        const leastRecentSkills =
            this.getLeastRecentSkills(
                categoryPool
            );

        const skillQuestions =
            categoryPool.filter(
                question =>
                    leastRecentSkills.includes(
                        question.skillId ??
                        "unknown"
                    )
            );

        const skillPool =
            skillQuestions.length > 0
                ? skillQuestions
                : categoryPool;

        /*==========================================
          AVOID RECENT QUESTIONS
        ==========================================*/

        const selectedSkill =
            skillPool[0]?.skillId ??
            "unknown";

        const recentQuestionIds =
            this.recentQuestionIdsBySkill.get(
                selectedSkill
            ) ?? [];

        const freshQuestions =
            skillPool.filter(
                question =>
                    !recentQuestionIds.includes(
                        question.id
                    )
            );

        const selectionPool =
            freshQuestions.length > 0
                ? freshQuestions
                : skillPool;

        /*==========================================
          RANDOM QUESTION
        ==========================================*/

        const selectedQuestion =
            selectionPool[
                Math.floor(
                    Math.random() *
                    selectionPool.length
                )
            ];

        this.recordSelection(
            selectedQuestion
        );

        return selectedQuestion;

    }

};
