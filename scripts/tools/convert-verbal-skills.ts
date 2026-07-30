import {
    Node,
    Project,
    SyntaxKind
} from "ts-morph";

const project = new Project();

// Load all Verbal Skills files
project.addSourceFilesAtPaths(
    "src/content/verbalSkills/**/*.ts"
);

const files = project.getSourceFiles();

console.log(`Found ${files.length} files.`);

let changedFiles = 0;
let changedActivities = 0;

for (const file of files) {

    console.log(`Processing ${file.getBaseName()}...`);

    let fileChanged = false;

    const objects = file.getDescendantsOfKind(
        SyntaxKind.ObjectLiteralExpression
    );

    for (const object of objects) {

        const answersProperty = object.getProperty("answers");
        const correctProperty = object.getProperty("correct");

        if (
            !Node.isPropertyAssignment(answersProperty) ||
            !Node.isPropertyAssignment(correctProperty)
        ) {
            continue;
        }

        const answers = answersProperty.getInitializerIfKind(
            SyntaxKind.ArrayLiteralExpression
        );

        if (!answers) {
            continue;
        }

        const correctIndex = Number(
            correctProperty.getInitializer()?.getText()
        );

        const answerElements = answers.getElements();

        if (
            Number.isNaN(correctIndex) ||
            correctIndex < 0 ||
            correctIndex >= answerElements.length
        ) {
            throw new Error(
                `Invalid correct index in ${file.getFilePath()}`
            );
        }

        const correctAnswer = answerElements[correctIndex].getText();

        // Replace:
        // answers: [...]
        //
        // with:
        // options: [...]
        answersProperty.replaceWithText(
            `options: ${answers.getText()}`
        );

        // Replace:
        // correct: 0
        //
        // with:
        // correctAnswer: "Doctor"
        correctProperty.replaceWithText(
            `correctAnswer: ${correctAnswer}`
        );

        changedActivities++;
        fileChanged = true;
    }

    if (fileChanged) {
        changedFiles++;
    }
}

await project.save();

console.log();
console.log(`Converted ${changedActivities} activities.`);
console.log(`Updated ${changedFiles} files.`);