/*==================================================
  SIA CONTENT TOOLKIT

  Validate Command

==================================================*/

import fg from "fast-glob";
import { Project, SyntaxKind, Node } from "ts-morph";

import { CONFIG } from "../config";

export async function runValidate(): Promise<void> {

    console.log("");
    console.log("==============================================");
    console.log(" Sia Content Toolkit");
    console.log(" Validate");
    console.log("==============================================");
    console.log("");

    const project = new Project();

    const files = await fg("**/*.ts", {
        cwd: CONFIG.contentRoot,
        absolute: true
    });

    project.addSourceFilesAtPaths(files);

    let filesChecked = 0;
    let questionsChecked = 0;
    let issues = 0;

    for (const sourceFile of project.getSourceFiles()) {

        filesChecked++;

        const objects = sourceFile.getDescendantsOfKind(
            SyntaxKind.ObjectLiteralExpression
        );

        for (const object of objects) {

            const hasQuestion =
                object.getProperty("question") !== undefined;

            if (!hasQuestion)
                continue;

            questionsChecked++;

            const required = [
                "id",
                "skillId",
                "question",
                "options",
                "correctAnswer",
                "explanation",
                "difficulty",
                "estimatedSeconds",
                "tags"
            ];

            for (const property of required) {

                if (!object.getProperty(property)) {

                    console.log(
                        `✗ ${sourceFile.getBaseName()} : Missing '${property}'`
                    );

                    issues++;

                }

            }

            const optionsProperty =
                object.getProperty("options");

            if (
                optionsProperty &&
                Node.isPropertyAssignment(optionsProperty)
            ) {

                const initializer =
                    optionsProperty.getInitializer();

                if (
                    initializer &&
                    Node.isArrayLiteralExpression(initializer)
                ) {

                    if (
                        initializer.getElements().length < 2
                    ) {

                        console.log(
                            `✗ ${sourceFile.getBaseName()} : Less than two options`
                        );

                        issues++;

                    }

                }

            }

        }

    }

    console.log("");
    console.log("----------------------------------------------");
    console.log(`Files checked     : ${filesChecked}`);
    console.log(`Questions checked : ${questionsChecked}`);
    console.log(`Issues found      : ${issues}`);
    console.log("----------------------------------------------");
    console.log("");

}