import { Project } from "ts-morph";

const project = new Project({
    tsConfigFilePath: "tsconfig.json"
});

let changed = 0;

for (const file of project.getSourceFiles("src/content/**/*.ts")) {

    const imports = file.getImportDeclarations();

    for (const imp of imports) {

        if (imp.getModuleSpecifierValue() === "../../types") {

            imp.setModuleSpecifier("../../../types");
            changed++;
        }
    }
}

project.save().then(() => {
    console.log(`Updated ${changed} imports.`);
});