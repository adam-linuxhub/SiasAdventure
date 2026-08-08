/*==================================================
  SIA CONTENT TOOLKIT

  Hint Editor

==================================================*/

import {
    Node,
    ObjectLiteralExpression,
    PropertyAssignment,
    StructureKind
} from "ts-morph";

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

export function hasHint(
    object: ObjectLiteralExpression
): boolean {

    return (
        getProperty(
            object,
            "hint"
        ) !== undefined
    );

}

export function insertHint(
    object: ObjectLiteralExpression,
    hint: string
): void {

    if (hasHint(object))
        return;

    const explanation =
        getProperty(
            object,
            "explanation"
        );

    if (!explanation)
        return;

    const explanationIndex =
        object
            .getProperties()
            .indexOf(
                explanation
            );

    if (explanationIndex === -1)
        return;

    object.insertProperty(
        explanationIndex + 1,
        {
            kind: StructureKind.PropertyAssignment,
            name: "hint",
            initializer: JSON.stringify(hint)
        }
    );

}