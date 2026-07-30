import {
    ArrayLiteralExpression,
    Node,
    ObjectLiteralExpression,
    Project,
    PropertyAssignment,
    SyntaxKind
} from "ts-morph";

import { Migration } from "../migration";
import { createProject } from "../utils";

export class AnswerToCorrectAnswerMigration implements Migration {

    readonly name = "001-answer-to-correctAnswer";

    async run(): Promise<void> {

        const project = createProject();

        let changedFiles = 0;
        let changedQuestions = 0;

        for (const file of project.getSourceFiles("src/content/**/*.ts")) {

            let fileChanged = false;

            const objects =
                file.getDescendantsOfKind(
                    SyntaxKind.ObjectLiteralExpression
                );

            for (const object of objects) {

                if (!this.isQuestion(object)) {
                    continue;
                }

                const answerProperty =
                    object.getProperty("answer");

                if (!Node.isPropertyAssignment(answerProperty)) {
                    continue;
                }

                const optionsProperty =
                    object.getProperty("options");

                if (!Node.isPropertyAssignment(optionsProperty)) {
                    continue;
                }

                const index =
                    Number(answerProperty.getInitializer()?.getText());

                if (Number.isNaN(index)) {
                    throw new Error(
                        `Invalid answer index in ${file.getBaseName()}`
                    );
                }

                const options =
                    optionsProperty.getInitializerIfKind(
                        SyntaxKind.ArrayLiteralExpression
                    );

                if (!options) {
                    throw new Error(
                        `Options is not an array in ${file.getBaseName()}`
                    );
                }

                const option =
                    options.getElements()[index];

                if (!option) {
                    throw new Error(
                        `Answer index ${index} out of range in ${file.getBaseName()}`
                    );
                }

                const answerText = option.getText();

                object.insertPropertyAssignment(
                    answerProperty.getChildIndex(),
                    {
                        name: "correctAnswer",
                        initializer: answerText
                    }
                );

                answerProperty.remove();

                changedQuestions++;
                fileChanged = true;
            }

            if (fileChanged) {

                await file.save();

                changedFiles++;
            }
        }

        console.log(
            `Updated ${changedQuestions} questions in ${changedFiles} files.`
        );
    }

    private isQuestion(
        object: ObjectLiteralExpression
    ): boolean {

        return !!object.getProperty("question")
            && !!object.getProperty("options")
            && !!object.getProperty("answer");
    }
}