/*==================================================
  SIA CONTENT TOOLKIT

  Statistics Command

==================================================*/

import fg from "fast-glob";
import { Project, SyntaxKind } from "ts-morph";

import { CONFIG } from "../config";

export async function runStats(): Promise<void> {

    console.log("");
    console.log("==============================================");
    console.log(" Sia Content Toolkit");
    console.log(" Statistics");
    console.log("==============================================");
    console.log("");

    const project = new Project();

    const files = await fg("**/*.ts", {
        cwd: CONFIG.contentRoot,
        absolute: true
    });

    project.addSourceFilesAtPaths(files);

    let totalFiles = 0;
    let totalQuestions = 0;
    let totalHints = 0;
    let totalExplanations = 0;

    const difficultyCounts = new Map<number, number>();

    for (const sourceFile of project.getSourceFiles()) {

        totalFiles++;

        const objects = sourceFile.getDescendantsOfKind(
            SyntaxKind.ObjectLiteralExpression
        );

        for (const object of objects) {

            if (!object.getProperty("question"))
                continue;

            totalQuestions++;

            if (object.getProperty("hint"))
                totalHints++;

            if (object.getProperty("explanation"))
                totalExplanations++;

            const difficulty =
                object.getProperty("difficulty");

            if (
                difficulty &&
                difficulty.getKindName() === "PropertyAssignment"
            ) {

                const value = Number(
                    difficulty
                        .getFirstDescendantByKind(
                            SyntaxKind.NumericLiteral
                        )
                        ?.getText() ?? "0"
                );

                difficultyCounts.set(
                    value,
                    (difficultyCounts.get(value) ?? 0) + 1
                );

            }

        }

    }

    console.log(`Files              : ${totalFiles}`);
    console.log(`Questions          : ${totalQuestions}`);
    console.log(`Hints             : ${totalHints}`);
    console.log(`Missing Hints     : ${totalQuestions - totalHints}`);
    console.log(`Explanations      : ${totalExplanations}`);

    console.log("");
    console.log("Difficulty");

    [...difficultyCounts.entries()]
        .sort((a, b) => a[0] - b[0])
        .forEach(([difficulty, count]) => {

            console.log(
                `  ${difficulty}: ${count}`
            );

        });

    console.log("");
}