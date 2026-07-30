import { createProject } from "./utils";

import { AddSkillIdMigration } from "./migrations/002-add-skillId";

async function main() {

    const project = createProject();

    await new AddSkillIdMigration().run(project);

    await project.save();
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});