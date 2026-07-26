/*==================================================
  QUESTION ENGINE
==================================================*/

const QuestionEngine = {

    shuffledQuestions: [],
    currentIndex: 0,

    initialise(questions) {

        this.shuffledQuestions = [...questions];

        // Fisher-Yates shuffle
        for (let i = this.shuffledQuestions.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [
                this.shuffledQuestions[i],
                this.shuffledQuestions[j]
            ] =
            [
                this.shuffledQuestions[j],
                this.shuffledQuestions[i]
            ];

        }

        this.currentIndex = 0;

    },

    getRandomQuestion(player, questions) {

        if (this.shuffledQuestions.length === 0) {

            this.initialise(questions);

        }

        if (this.currentIndex >= this.shuffledQuestions.length) {

            this.initialise(questions);

        }

        return this.shuffledQuestions[this.currentIndex++];

    }

};