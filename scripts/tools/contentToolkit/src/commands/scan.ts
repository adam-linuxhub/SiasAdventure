/*==================================================
  SIA CONTENT TOOLKIT

  Scan Command

==================================================*/

import fg from "fast-glob";
import path from "node:path";

import { Project } from "ts-morph";

import { CONFIG } from "../config";

export async function runScan(): Promise<void> {

    console.log("");
    console.log("==============================================");
    console.log(" Sia Content Toolkit");
    console.log(" Scan");
    console.log("==============================================");
    console.log("");

    const files = await fg("**/*.ts", {
        cwd: CONFIG.contentRoot,
        absolute: true
    });

    const project = new Project({
        tsConfigFilePath: path.resolve(
            CONFIG.contentRoot,
            "../../tsconfig.json"
        )
    });

    project.addSourceFilesAtPaths(files);

    let totalQuestions = 0;
    let totalMissingHints = 0;

    for (const sourceFile of project.getSourceFiles()) {

        const text = sourceFile.getFullText();

        const questions =
            (text.match(/question\s*:/g) ?? []).length;

        const hints =
            (text.match(/hint\s*:/g) ?? []).length;

        totalQuestions += questions;
        totalMissingHints += Math.max(
            0,
            questions - hints
        );

    }

    console.log(`Files scanned     : ${files.length}`);
    console.log(`Questions found   : ${totalQuestions}`);
    console.log(`Missing hints     : ${totalMissingHints}`);
    console.log("");
}