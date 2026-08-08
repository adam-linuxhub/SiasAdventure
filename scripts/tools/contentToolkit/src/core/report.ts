/*==================================================
  SIA CONTENT TOOLKIT

  Report

==================================================*/

import { ToolkitFile } from "../types";

export function printSummary(
    files: ToolkitFile[]
): void {

    const totalFiles =
        files.length;

    const totalQuestions =
        files.reduce(
            (sum, file) =>
                sum + file.questions.length,
            0
        );

    const totalHints =
        files.reduce(
            (sum, file) =>
                sum +
                file.questions.filter(
                    q => q.hasHint
                ).length,
            0
        );

    console.log("");
    console.log("==============================================");
    console.log(" Summary");
    console.log("==============================================");
    console.log("");

    console.log(`Files            : ${totalFiles}`);
    console.log(`Questions        : ${totalQuestions}`);
    console.log(`Hints            : ${totalHints}`);
    console.log(`Missing Hints    : ${totalQuestions - totalHints}`);

    console.log("");

}