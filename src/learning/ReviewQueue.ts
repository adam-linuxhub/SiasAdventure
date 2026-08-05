/*==================================================
  SIA'S ADVENTURE

  REVIEW QUEUE

==================================================*/

interface ReviewItem {

    questionId: string;

    dueQuestionNumber: number;

}

export const ReviewQueue = {

    queue: [] as ReviewItem[],

    /*==============================================
      RESET
    ==============================================*/

    reset(): void {

        this.queue = [];

    },

    /*==============================================
      ADD
    ==============================================*/

    add(

        questionId: string,

        currentQuestionNumber: number

    ): void {

        const exists =

            this.queue.some(

                item =>

                    item.questionId === questionId

            );

        if (exists) {

            return;

        }

        this.queue.push({

            questionId,

            dueQuestionNumber:

                currentQuestionNumber + 5

        });

    },

    /*==============================================
      REMOVE
    ==============================================*/

    remove(

        questionId: string

    ): void {

        this.queue =

            this.queue.filter(

                item =>

                    item.questionId !== questionId

            );

    },

    /*==============================================
      GET DUE QUESTION
    ==============================================*/

    getDueQuestionId(

        currentQuestionNumber: number

    ): string | null {

        const review =

            this.queue.find(

                item =>

                    item.dueQuestionNumber <=

                    currentQuestionNumber

            );

        return review

            ? review.questionId

            : null;

    }

};