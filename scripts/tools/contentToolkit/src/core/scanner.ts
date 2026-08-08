/*==================================================
  SIA CONTENT TOOLKIT

  Scanner

==================================================*/

import path from "node:path";

import { ToolkitFile } from "../types";
import { CONFIG } from "../config";

import { parseQuestions } from "./questionParser";

import { createProject } from "../utils/project";
import { getContentFiles } from "../utils/fileWalker";

function humanize(
    text: string
): string {

    return text
        .replace(
            /([a-z])([A-Z])/g,
            "$1 $2"
        )
        .replace(
            /[-_]/g,
            " "
        )
        .replace(
            /\b\w/g,
            c => c.toUpperCase()
        );

}

export async function scanContent(): Promise<ToolkitFile[]> {

    const files =
        await getContentFiles();

    const project =
        createProject();

    project.addSourceFilesAtPaths(
        files
    );

    const output: ToolkitFile[] = [];

    for (const sourceFile of project.getSourceFiles()) {

        //------------------------------------------
        // Relative path from content root
        //------------------------------------------

        const relative =
            path.relative(
                CONFIG.contentRoot,
                sourceFile.getFilePath()
            );

        const parts =
            relative.split(path.sep);

        if (parts.length < 3)
            continue;

        //------------------------------------------
        // Parse questions
        //------------------------------------------

        const questions =
            parseQuestions(
                sourceFile
            );

        //------------------------------------------
        // Ignore empty files
        //------------------------------------------

        if (questions.length === 0)
            continue;

        //------------------------------------------
        // Build result
        //------------------------------------------

        output.push({

            sourceFile,

            filePath:
                sourceFile.getFilePath(),

            relativePath:
                relative,

            subject:
                humanize(
                    parts[0]
                ),

            year:
                humanize(
                    parts[1]
                ),

            topic:
                humanize(
                    parts
                        .slice(2, -1)
                        .join(" ")
                ),

            skill:
                humanize(
                    path.basename(
                        parts[parts.length - 1],
                        ".ts"
                    )
                ),

            questions

        });

    }

    //------------------------------------------
    // Stable ordering
    //------------------------------------------

    output.sort(
        (a, b) =>
            a.relativePath.localeCompare(
                b.relativePath
            )
    );

    return output;

}