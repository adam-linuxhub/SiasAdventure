import { createProject } from "./utils";

import { AnswerToCorrectAnswerMigration } from "./migrations/001-answer-to-correctAnswer";
import { AddSkillIdMigration } from "./migrations/002-add-skillId";
import { AddStageMigration } from "./migrations/003-add-stage";

async function main() {

    const project = createProject();

    const migrations = [
        new AnswerToCorrectAnswerMigration(),
        new AddSkillIdMigration(),
        new AddStageMigration()
    ];

    for (const migration of migrations) {

        console.log(`Running ${migration.name}...`);

        await migration.run(project);
    }

    await project.save();

    console.log("All migrations complete.");
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});