import {
    getNvrTestQuestion,
    checkNvrTestAnswer
} from "./nvrTestMode";

const question = getNvrTestQuestion();

console.log(
    "[NVR TEST] Question:",
    question.id
);

console.log(
    "[NVR TEST] Correct answer:",
    question.answer
);

console.log(
    "[NVR TEST] Correct selection:",
    checkNvrTestAnswer(
        question,
        question.answer.row,
        question.answer.column
    )
);

console.log(
    "[NVR TEST] Wrong selection:",
    checkNvrTestAnswer(
        question,
        999,
        999
    )
);