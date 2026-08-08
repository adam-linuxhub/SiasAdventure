/*==================================================
  SIA CONTENT TOOLKIT

  Hint Importer

==================================================*/

import fs from "node:fs";
import path from "node:path";

import {
    Node,
    ObjectLiteralExpression,
    Project,
    PropertyAssignment,
    SyntaxKind
} from "ts-morph";

import { CONFIG } from "../config";

import { insertHint } from "./hintEditor";
import { saveFile } from "./writer";

interface ImportedHint {

    id: string;

    hint: string;

}

export async function importHints(): Promise<void> {

    fs.mkdirSync(
        CONFIG.outputDirectory,
        {
            recursive: true
        }
    );

    const batchFiles =
        fs.readdirSync(
            CONFIG.outputDirectory
        )
        .filter(file =>
            file.endsWith("-hints.txt")
        )
        .sort();

    if (batchFiles.length === 0) {

        console.log("");
        console.log("No completed hint batches found.");
        console.log("");

        return;

    }

    //----------------------------------------------
    // Read all hint files
    //----------------------------------------------

    const hintMap =
        new Map<string, string>();

    let duplicateHints = 0;

    for (const file of batchFiles) {

        const hints =
            parseHintFile(
                path.join(
                    CONFIG.outputDirectory,
                    file
                )
            );

        for (const hint of hints) {

            if (
                hintMap.has(
                    hint.id
                )
            ) {

                duplicateHints++;

                console.warn(
                    `Duplicate QUESTION ID ignored: ${hint.id}`
                );

                continue;

            }

            hintMap.set(
                hint.id,
                hint.hint
            );

        }

    }

    //----------------------------------------------
    // Load question bank
    //----------------------------------------------

    const project =
        new Project({
            tsConfigFilePath:
                path.resolve(
                    process.cwd(),
                    "../../../tsconfig.json"
                )
        });

    project.addSourceFilesAtPaths(
        path.join(
            CONFIG.contentRoot,
            "**/*.ts"
        )
    );

    let inserted = 0;
    let skipped = 0;
    let matched = 0;

    for (const sourceFile of project.getSourceFiles()) {

        let modified = false;

        const objects =
            sourceFile.getDescendantsOfKind(
                SyntaxKind.ObjectLiteralExpression
            );

        for (const object of objects) {

            const id =
                getString(
                    object,
                    "id"
                );

            if (
                id === "" ||
                !hintMap.has(id)
            ) {

                continue;

            }

            matched++;

            if (
                object.getProperty(
                    "hint"
                )
            ) {

                skipped++;

                continue;

            }

            const hint =
                hintMap.get(id);

            if (
                !hint ||
                hint.trim() === ""
            ) {

                continue;

            }

            insertHint(
                object,
                hint
            );

            inserted++;

            modified = true;

        }

        if (modified) {

            await saveFile(
                sourceFile
            );

            console.log(
                `✓ ${sourceFile.getBaseName()}`
            );

        }

    }

    //----------------------------------------------
    // Summary
    //----------------------------------------------

    console.log("");
    console.log("==============================================");
    console.log(" Hint Import Summary");
    console.log("==============================================");
    console.log("");

    console.log(
        `Hint files      : ${batchFiles.length}`
    );

    console.log(
        `Imported hints  : ${hintMap.size}`
    );

    console.log(
        `Matched IDs     : ${matched}`
    );

    console.log(
        `Hints inserted  : ${inserted}`
    );

    console.log(
        `Skipped         : ${skipped}`
    );

    console.log(
        `Duplicates      : ${duplicateHints}`
    );

    console.log("");

}

function parseHintFile(
    filename: string
): ImportedHint[] {

    const text =
        fs.readFileSync(
            filename,
            "utf8"
        );

    const results: ImportedHint[] = [];

    const regex =
        /QUESTION ID\s*([\s\S]*?)\s*Hint\s*([\s\S]*?)(?=QUESTION ID|$)/g;

    let match:
        RegExpExecArray | null;

    while (
        (match = regex.exec(text)) !== null
    ) {

        const id =
            match[1].trim();

        const hint =
            match[2].trim();

        if (
            id === "" ||
            hint === ""
        ) {

            continue;

        }

        results.push({

            id,

            hint

        });

    }

    return results;

}

function getProperty(
    object: ObjectLiteralExpression,
    propertyName: string
): PropertyAssignment | undefined {

    const property =
        object.getProperty(
            propertyName
        );

    if (!property)
        return undefined;

    if (!Node.isPropertyAssignment(property))
        return undefined;

    return property;

}

function getString(
    object: ObjectLiteralExpression,
    propertyName: string
): string {

    const property =
        getProperty(
            object,
            propertyName
        );

    if (!property)
        return "";

    const initializer =
        property.getInitializer();

    if (!initializer)
        return "";

    if (
        Node.isStringLiteral(initializer) ||
        Node.isNoSubstitutionTemplateLiteral(initializer)
    ) {

        return initializer.getLiteralText();

    }

    return initializer.getText();

}