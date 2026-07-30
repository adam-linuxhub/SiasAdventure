import {
    ArrayLiteralExpression,
    Node,
    ObjectLiteralExpression,
    Project,
    SyntaxKind
} from "ts-morph";

export function createProject(): Project {

    return new Project({
        tsConfigFilePath: "tsconfig.json"
    });
}

export function forEachActivity(
    project: Project,
    callback: (
        activity: ObjectLiteralExpression,
        skillContent: ObjectLiteralExpression,
        fileChanged: () => void
    ) => void
): number {

    let changedFiles = 0;

    for (const file of project.getSourceFiles("src/content/**/*.ts")) {

        let modified = false;

        const contents = file
            .getVariableDeclarations()
            .map(v => v.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression))
            .filter((o): o is ObjectLiteralExpression => o !== undefined);

        for (const content of contents) {

            const skillIdProperty = content.getProperty("skillId");
            const titleProperty = content.getProperty("title");
            const activitiesProperty = content.getProperty("activities");

            if (
                !Node.isPropertyAssignment(skillIdProperty) ||
                !Node.isPropertyAssignment(titleProperty) ||
                !Node.isPropertyAssignment(activitiesProperty)
            ) {
                continue;
            }

            const initializer = activitiesProperty.getInitializer();

            let activities: ArrayLiteralExpression | undefined =
                initializer?.asKind(SyntaxKind.ArrayLiteralExpression);

            if (!activities) {
                activities = initializer
                    ?.asKind(SyntaxKind.TypeAssertionExpression)
                    ?.getExpressionIfKind(
                        SyntaxKind.ArrayLiteralExpression
                    );
            }

            if (!activities) {
                continue;
            }

            for (const element of activities.getElements()) {

                if (!Node.isObjectLiteralExpression(element)) {
                    continue;
                }

                callback(
                    element,
                    content,
                    () => {
                        modified = true;
                    }
                );
            }
        }

        if (modified) {
            changedFiles++;
        }
    }

    return changedFiles;
}