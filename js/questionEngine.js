/*==================================================
  QUESTION ENGINE
==================================================*/

const QuestionEngine = {

    questionQueue: [],
    currentIndex: 0,

    initialise(questions) {

        this.questionQueue = [...questions];

        // Fisher-Yates shuffle
        for (let i = this.questionQueue.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [this.questionQueue[i], this.questionQueue[j]] =
            [this.questionQueue[j], this.questionQueue[i]];
        }

        this.currentIndex = 0;

    },

    getRandomQuestion(player, questions) {

        if (this.questionQueue.length === 0) {
            this.initialise(questions);
        }

        if (this.currentIndex >= this.questionQueue.length) {
            this.initialise(questions);
        }

        return this.questionQueue[this.currentIndex++];
    }

};