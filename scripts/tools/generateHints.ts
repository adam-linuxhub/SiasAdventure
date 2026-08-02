#!/usr/bin/env ts-node

/*==================================================
  SIA'S ADVENTURE
  Missing Hint Report
==================================================*/

import fs from "node:fs";
import path from "node:path";

import {
    Node,
    ObjectLiteralExpression,
    Project,
    PropertyAssignment,
    SourceFile,
    SyntaxKind
} from "ts-morph";

/*==================================================
  CONFIGURATION
==================================================*/

const CONTENT_ROOT = "src/content";

const OUTPUT_FILE = "missing-hints.txt";

const project = new Project({
    tsConfigFilePath: "tsconfig.json"
});
/*==================================================
  TYPES
==================================================*/

interface MissingHintFile {

    sourceFile: SourceFile;

    relativePath: string;

    subject: string;

    year: string;

    topic: string;

    skill: string;

    missingHints: number;

}
/*==================================================
  AST HELPERS
==================================================*/

function getProperty(
    object: ObjectLiteralExpression,
    propertyName: string
): PropertyAssignment | undefined {

    const property = object.getProperty(propertyName);

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

    const property = getProperty(
        object,
        propertyName
    );

    if (!property)
        return "";

    const initializer = property.getInitializer();

    if (!initializer)
        return "";

    if (Node.isStringLiteral(initializer))
        return initializer.getLiteralText();

    if (Node.isNoSubstitutionTemplateLiteral(initializer))
        return initializer.getLiteralText();

    return initializer.getText();

}

function hasArrayProperty(
    object: ObjectLiteralExpression,
    propertyName: string
): boolean {

    const property = getProperty(
        object,
        propertyName
    );

    if (!property)
        return false;

    const initializer = property.getInitializer();

    return (
        initializer !== undefined &&
        Node.isArrayLiteralExpression(initializer)
    );

}

function hasProperty(
    object: ObjectLiteralExpression,
    propertyName: string
): boolean {

    return getProperty(
        object,
        propertyName
    ) !== undefined;

}

function isQuestion(
    object: ObjectLiteralExpression
): boolean {

    return (

        getString(object, "id") !== "" &&

        getString(object, "question") !== "" &&

        hasArrayProperty(object, "options") &&

        getString(object, "correctAnswer") !== "" &&

        getString(object, "explanation") !== ""

    );

}
/*==================================================
  HELPERS
==================================================*/

function humanize(
    text: string
): string {

    return text

        .replace(/([a-z])([A-Z])/g, "$1 $2")

        .replace(/[-_]/g, " ")

        .replace(/\b\w/g, c => c.toUpperCase());

}
/*==================================================
  SCAN CONTENT
==================================================*/

function scanContent(): MissingHintFile[] {

    const report: MissingHintFile[] = [];

    const sourceFiles = project.addSourceFilesAtPaths(
        `${CONTENT_ROOT}/**/*.ts`
    );

    for (const sourceFile of sourceFiles) {

        //------------------------------------------
        // Build path information
        //------------------------------------------

        const relativePath = path.relative(
            CONTENT_ROOT,
            sourceFile.getFilePath()
        );

        const parts = relativePath.split(path.sep);

        if (parts.length < 3)
            continue;

        const subject = humanize(parts[0]);

        const year = humanize(parts[1]);

        const topic =
            parts.length > 3
                ? humanize(
                    parts
                        .slice(2, -1)
                        .join(" ")
                )
                : "";

        const skill = humanize(
            path.basename(
                parts[parts.length - 1],
                ".ts"
            )
        );

        //------------------------------------------
        // Count missing hints
        //------------------------------------------

        let missingHints = 0;

        const objects =
            sourceFile.getDescendantsOfKind(
                SyntaxKind.ObjectLiteralExpression
            );

        for (const object of objects) {

            if (!isQuestion(object))
                continue;

            if (hasProperty(object, "hint"))
                continue;

            missingHints++;

        }

        //------------------------------------------
        // Ignore completed files
        //------------------------------------------

        if (missingHints === 0)
            continue;

        report.push({

            sourceFile,

            relativePath,

            subject,

            year,

            topic,

            skill,

            missingHints

        });

    }

    //------------------------------------------
    // Sort alphabetically
    //------------------------------------------

    report.sort((a, b) =>
        a.relativePath.localeCompare(
            b.relativePath
        )
    );

    return report;

}
/*==================================================
  WRITE REPORT
==================================================*/

function writeReport(
    report: MissingHintFile[]
): void {

    const lines: string[] = [];

    let totalQuestions = 0;

    console.log("");
    console.log("==============================================");
    console.log(" Sia's Adventure Missing Hint Report");
    console.log("==============================================");
    console.log("");

    for (const file of report) {

        totalQuestions += file.missingHints;

        const title =
            `${file.subject} / ${file.year}` +
            (file.topic ? ` / ${file.topic}` : "") +
            ` / ${file.skill}`;

        console.log(title);
        console.log(`   Missing hints : ${file.missingHints}`);
        console.log(`   File          : ${file.relativePath}`);
        console.log("");

        lines.push(
            `${file.relativePath}|${file.missingHints}`
        );

    }

    fs.writeFileSync(
        OUTPUT_FILE,
        lines.join("\n"),
        "utf8"
    );

    console.log("----------------------------------------------");
    console.log(`Files needing hints : ${report.length}`);
    console.log(`Questions missing   : ${totalQuestions}`);
    console.log("----------------------------------------------");
    console.log("");
    console.log(`Report written to ${OUTPUT_FILE}`);
    console.log("");

}

/*==================================================
  MAIN
==================================================*/

function main(): void {

    console.log("");
    console.log("Scanning question bank...");
    console.log("");

    const report = scanContent();

    if (report.length === 0) {

        console.log("✓ Every question already has a hint.");
        console.log("");

        return;

    }

    writeReport(report);

}

main();