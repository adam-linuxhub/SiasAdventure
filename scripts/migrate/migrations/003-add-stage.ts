import {
    Project
} from "ts-morph";

import { Migration } from "../migration";
import { forEachActivity } from "../utils";

export class AddStageMigration implements Migration {

    readonly name = "003-add-stage";

    async run(project: Project): Promise<void> {

        let changedActivities = 0;

        const changedFiles = forEachActivity(
            project,
            (activity, _skillContent, markChanged) => {

                // Already migrated?
                if (activity.getProperty("stage")) {
                    return;
                }

                const skillIdProperty = activity.getProperty("skillId");

                if (!skillIdProperty) {
                    throw new Error(
                        "Activity is missing skillId."
                    );
                }

                activity.insertPropertyAssignment(
                    skillIdProperty.getChildIndex() + 1,
                    {
                        name: "stage",
                        initializer: `"recognise"`
                    }
                );

                changedActivities++;
                markChanged();
            }
        );

        console.log(
            `Added stage to ${changedActivities} activities in ${changedFiles} files.`
        );
    }
}