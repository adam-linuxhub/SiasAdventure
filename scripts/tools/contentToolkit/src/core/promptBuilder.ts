/*==================================================
  SIA CONTENT TOOLKIT

  Prompt Builder

==================================================*/

import { ToolkitQuestion } from "../types";

export function buildHintPrompt(
    question: ToolkitQuestion
): string {

    return `
Write ONE hint for this primary school question.

Rules

- Do not reveal the answer.
- Do not mention option letters.
- Maximum 20 words.
- Encourage thinking.
- British English.
- Return ONLY the hint.

Question:
${question.question}

Correct Answer:
${question.correctAnswer}

Explanation:
${question.explanation}
`.trim();

}