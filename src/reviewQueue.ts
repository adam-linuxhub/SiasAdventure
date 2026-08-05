/*==================================================
  SIA'S ADVENTURE

  REVIEW QUEUE

==================================================*/

interface ReviewQuestion {

    questionId: string;

    dueAtQuestion: number;

    repeatedThisAdventure: boolean;

}

export const ReviewQueue = {

    queue: [] as ReviewQuestion[],

    /*==============================================
      RESET ADVENTURE
    ==============================================*/

    resetAdventure(): void {

        this.queue.forEach(question => {

            question.repeatedThisAdventure = false;

        });

    },

    /*==============================================
      ADD QUESTION
    ==============================================*/

    add(

        questionId: string,

        currentQuestionNumber: number

    ): void {

        const existing =

            this.queue.find(

                question =>

                    question.questionId === questionId

            );

        if (existing) {

            return;

        }

        this.queue.push({

            questionId,

            dueAtQuestion:

                currentQuestionNumber + 5,

            repeatedThisAdventure: false

        });

    },

    /*==============================================
      GET DUE QUESTION
    ==============================================*/

    getDueQuestionId(

        currentQuestionNumber: number

    ): string | null {

        const due =

            this.queue.find(

                question =>

                    question.dueAtQuestion <= currentQuestionNumber &&

                    !question.repeatedThisAdventure

            );

        if (!due) {

            return null;

        }

        due.repeatedThisAdventure = true;

        return due.questionId;

    },

    /*==============================================
      REMOVE QUESTION
    ==============================================*/

    remove(

        questionId: string

    ): void {

        this.queue =

            this.queue.filter(

                question =>

                    question.questionId !== questionId

            );

    }

};