/*==================================================
  SIA CONTENT TOOLKIT

  Question Parser

==================================================*/

import {
    Node,
    ObjectLiteralExpression,
    PropertyAssignment,
    SourceFile,
    SyntaxKind
} from "ts-morph";

import { ToolkitQuestion } from "../types";

function getProperty(
    object: ObjectLiteralExpression,
    propertyName: string
): PropertyAssignment | undefined {

    const property =
        object.getProperty(propertyName);

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

function getNumber(
    object: ObjectLiteralExpression,
    propertyName: string
): number | undefined {

    const property =
        getProperty(
            object,
            propertyName
        );

    if (!property)
        return undefined;

    const initializer =
        property.getInitializer();

    if (!initializer)
        return undefined;

    const value =
        Number(
            initializer.getText()
        );

    return Number.isNaN(value)
        ? undefined
        : value;

}

function getOptions(
    object: ObjectLiteralExpression
): string[] {

    const property =
        getProperty(
            object,
            "options"
        );

    if (!property)
        return [];

    const initializer =
        property.getInitializer();

    if (
        !initializer ||
        !Node.isArrayLiteralExpression(initializer)
    ) {

        return [];

    }

    return initializer
        .getElements()
        .map(element => {

            if (
                Node.isStringLiteral(element)
            ) {

                return element.getLiteralText();

            }

            return "";

        })
        .filter(Boolean);

}

function getTags(
    object: ObjectLiteralExpression
): string[] {

    const property =
        getProperty(
            object,
            "tags"
        );

    if (!property)
        return [];

    const initializer =
        property.getInitializer();

    if (
        !initializer ||
        !Node.isArrayLiteralExpression(initializer)
    ) {

        return [];

    }

    return initializer
        .getElements()
        .map(element => {

            if (
                Node.isStringLiteral(element)
            ) {

                return element.getLiteralText();

            }

            return "";

        })
        .filter(Boolean);

}

function isQuestion(
    object: ObjectLiteralExpression
): boolean {

    return (
        getString(object, "id") !== "" &&
        getString(object, "question") !== "" &&
        getString(object, "correctAnswer") !== "" &&
        getString(object, "explanation") !== ""
    );

}

export function parseQuestions(
    sourceFile: SourceFile
): ToolkitQuestion[] {

    const questions: ToolkitQuestion[] = [];

    const objects =
        sourceFile.getDescendantsOfKind(
            SyntaxKind.ObjectLiteralExpression
        );

    for (const object of objects) {

        if (!isQuestion(object))
            continue;

        const hint =
            getString(
                object,
                "hint"
            );

        questions.push({

            id: getString(
                object,
                "id"
            ),

            skillId: getString(
                object,
                "skillId"
            ),

            question: getString(
                object,
                "question"
            ),

            options: getOptions(
                object
            ),

            correctAnswer: getString(
                object,
                "correctAnswer"
            ),

            explanation: getString(
                object,
                "explanation"
            ),

            hint,

            hasHint:
                hint.trim().length > 0,

            difficulty: getNumber(
                object,
                "difficulty"
            ),

            estimatedSeconds:
                getNumber(
                    object,
                    "estimatedSeconds"
                ),

            tags: getTags(
                object
            )

        });

    }

    return questions;

}