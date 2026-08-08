/*==================================================
  SIA CONTENT TOOLKIT

  Duplicate Question Detector

==================================================*/

import fg from "fast-glob";
import { Project, Node, SyntaxKind } from "ts-morph";

import { CONFIG } from "../config";

interface QuestionRecord {

    id: string;

    file: string;

    question: string;

}

export async function runDuplicates(): Promise<void> {

    console.log("");
    console.log("==============================================");
    console.log(" Sia Content Toolkit");
    console.log(" Duplicate Question Detector");
    console.log("==============================================");
    console.log("");

    const project = new Project();

    const files = await fg("**/*.ts", {
        cwd: CONFIG.contentRoot,
        absolute: true
    });

    project.addSourceFilesAtPaths(files);

    const questions = new Map<string, QuestionRecord[]>();

    for (const sourceFile of project.getSourceFiles()) {

        const objects = sourceFile.getDescendantsOfKind(
            SyntaxKind.ObjectLiteralExpression
        );

        for (const object of objects) {

            if (!object.getProperty("question"))
                continue;

            const question = getString(
                object,
                "question"
            );

            if (question === "")
                continue;

            const key = question
                .trim()
                .toLowerCase();

            const record: QuestionRecord = {

                id: getString(
                    object,
                    "id"
                ),

                file: sourceFile.getBaseName(),

                question

            };

            if (!questions.has(key)) {

                questions.set(
                    key,
                    []
                );

            }

            questions
                .get(key)!
                .push(record);

        }

    }

    let duplicates = 0;

    for (const records of questions.values()) {

        if (records.length < 2)
            continue;

        duplicates++;

        console.log("----------------------------------------------");

        console.log(records[0].question);

        console.log("");

        for (const record of records) {

            console.log(
                `${record.id} (${record.file})`
            );

        }

        console.log("");

    }

    console.log("----------------------------------------------");
    console.log(`Duplicate questions : ${duplicates}`);
    console.log("----------------------------------------------");
    console.log("");

}

function getString(
    object: Node,
    propertyName: string
): string {

    if (!Node.isObjectLiteralExpression(object))
        return "";

    const property =
        object.getProperty(propertyName);

    if (!property)
        return "";

    if (!Node.isPropertyAssignment(property))
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