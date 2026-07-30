import {
    Node,
    Project,
    SyntaxKind
} from "ts-morph";

import { Migration } from "../migration";

export class AddSkillIdMigration implements Migration {

    readonly name = "002-add-skillId";

    async run(project: Project): Promise<void> {

        let changedFiles = 0;
        let changedActivities = 0;

        for (const file of project.getSourceFiles("src/content/**/*.ts")) {

            let fileChanged = false;

            const contents = file
                .getVariableDeclarations()
                .map(v => v.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression))
                .filter((o): o is NonNullable<typeof o> => o !== undefined);

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

                const skillId = skillIdProperty.getInitializer()?.getText();

                if (!skillId) {
                    continue;
                }

                const initializer = activitiesProperty.getInitializer();

                let activities = initializer?.asKind(
                    SyntaxKind.ArrayLiteralExpression
                );

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

                    if (element.getProperty("skillId")) {
                        continue;
                    }

                    const idProperty = element.getProperty("id");

                    if (!idProperty) {
                        continue;
                    }

                    element.insertPropertyAssignment(
                        idProperty.getChildIndex() + 1,
                        {
                            name: "skillId",
                            initializer: skillId
                        }
                    );

                    changedActivities++;
                    fileChanged = true;
                }
            }

            if (fileChanged) {
                changedFiles++;
            }
        }

        console.log(
            `Added skillId to ${changedActivities} activities in ${changedFiles} files.`
        );
    }
}