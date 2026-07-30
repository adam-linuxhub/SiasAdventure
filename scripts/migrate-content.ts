import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.resolve("src/content");

function walk(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
        const full = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            return walk(full);
        }

        return entry.name.endsWith(".ts") ? [full] : [];
    });
}

function migrate(file: string): boolean {

    let text = fs.readFileSync(file, "utf8");

    const skillMatch = text.match(/skillId:\s*"([^"]+)"/);

    if (!skillMatch) {
        return false;
    }

    const skillId = skillMatch[1];

    let changed = false;

    // Find every activity object
    text = text.replace(
        /{([\s\S]*?)}/g,
        (objectText) => {

            // Skip the SkillContent object
            if (objectText.includes("activities:")) {
                return objectText;
            }

            let obj = objectText;

            if (!obj.includes("skillId:")) {

                obj = obj.replace(
                    /id:\s*"([^"]+)"/,
                    match => `${match},\n\n        skillId: "${skillId}"`
                );

                changed = true;
            }

            if (!obj.includes("stage:")) {

                obj = obj.replace(
                    /skillId:[^\n]+/,
                    match => `${match},\n\n        stage: "recognise"`
                );

                changed = true;
            }

            const answerMatch =
                obj.match(/answer:\s*(\d+)/);

            const optionsMatch =
                obj.match(/options:\s*\[([\s\S]*?)\]/);

            if (answerMatch && optionsMatch) {

                const index =
                    Number(answerMatch[1]);

                const options =
                    optionsMatch[1]
                        .split(",")
                        .map(x => x.trim())
                        .filter(Boolean);

                const answer =
                    options[index];

                obj = obj.replace(
                    /answer:\s*\d+,?/,
                    `correctAnswer: ${answer},`
                );

                changed = true;
            }

            return obj;
        }
    );

    if (changed) {

        fs.writeFileSync(file, text);

        console.log("Updated", file);

    }

    return changed;
}

const files = walk(CONTENT_DIR);

let total = 0;

for (const file of files) {

    if (migrate(file)) {

        total++;

    }

}

console.log(`\nUpdated ${total} files.`);