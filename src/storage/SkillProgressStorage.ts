/*==================================================
  SIA'S ADVENTURE

  SKILL PROGRESS STORAGE

==================================================*/

export interface SkillProgress {

    skillId: string;

    difficulty: 1 | 2 | 3 | 4 | 5;

}

const STORAGE_KEY =
    "sias-adventure-skill-progress";

export const SkillProgressStorage = {

    progress:
        new Map<string, SkillProgress>(),

    /*==============================================
      LOAD
    ==============================================*/

    load(): void {

        this.progress.clear();

        const json =
            localStorage.getItem(STORAGE_KEY);

        if (!json) {

            return;

        }

        const data =
            JSON.parse(json) as SkillProgress[];

        data.forEach(progress => {

            this.progress.set(

                progress.skillId,

                progress

            );

        });

    },

    /*==============================================
      SAVE
    ==============================================*/

    save(): void {

        localStorage.setItem(

            STORAGE_KEY,

            JSON.stringify(

                [...this.progress.values()]

            )

        );

    },

    /*==============================================
      GET
    ==============================================*/

    get(

        skillId: string

    ): SkillProgress {

        let progress =

            this.progress.get(

                skillId

            );

        if (!progress) {

            progress = {

                skillId,

                difficulty: 1

            };

            this.progress.set(

                skillId,

                progress

            );

        }

        return progress;

    },

    /*==============================================
      SET DIFFICULTY
    ==============================================*/

    setDifficulty(

        skillId: string,

        difficulty: 1 | 2 | 3 | 4 | 5

    ): void {

        const progress =

            this.get(

                skillId

            );

        progress.difficulty =

            difficulty;

        this.save();

    },

    /*==============================================
    ADVANCE DIFFICULTY
    ==============================================*/

    advanceDifficulty(

        skillId: string

    ): void {

        const progress =

            this.get(

                skillId

            );

        if (

            progress.difficulty < 5

        ) {

            progress.difficulty++;

            this.save();

        }

    },

    /*==============================================
      GET CURRENT DIFFICULTY
    ==============================================*/

    getDifficulty(

        skillId: string

    ): 1 | 2 | 3 | 4 | 5 {

        return this.get(

            skillId

        ).difficulty;

    }

};