/*==================================================
  SIA'S ADVENTURE

  STANDARD QUESTION RENDERER

  Renders Maths, English and
  Verbal Reasoning questions.

==================================================*/

import type { Question } from "../questionEngine";

function byId<T extends HTMLElement>(id: string): T {

    const element = document.getElementById(id);

    if (!element) {

        throw new Error(`Missing element: ${id}`);

    }

    return element as T;

}

export function renderStandardQuestion(

    question: Question

): void {

    byId<HTMLElement>("question-text").textContent =
        question.question;

    byId<HTMLElement>("hint-text").textContent =
        question.hint;

    const answers =
        byId<HTMLDivElement>("answers");

    answers.innerHTML = "";

    question.answers.forEach(

        (

            answer,

            index

        ) => {

            const label =
                document.createElement("label");

            label.className =
                "answer-option";

            label.innerHTML = `
<input
type="radio"
name="answer"
value="${index}">
${answer}
`;

            label
                .querySelector<HTMLInputElement>("input")!
                .addEventListener(

                    "change",

                    () => {

                        document
                            .querySelectorAll<HTMLElement>(
                                ".answer-option"
                            )
                            .forEach(

                                option =>

                                    option.classList.remove(
                                        "selected"
                                    )

                            );

                        label.classList.add(
                            "selected"
                        );

                    }

                );

            answers.appendChild(label);

        }

    );

}