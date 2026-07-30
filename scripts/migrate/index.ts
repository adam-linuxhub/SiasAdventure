import { AnswerToCorrectAnswerMigration } from "./migrations/001-answer-to-correctAnswer";

async function main() {

    const migrations = [

        new AnswerToCorrectAnswerMigration()

    ];

    for (const migration of migrations) {

        console.log(`Running ${migration.name}...`);

        await migration.run();

    }

}

main();