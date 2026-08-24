/*==================================================
  SIA'S ADVENTURE

  GENERATE INDEX FILES

  Automatically creates index.ts files for
  the content folder.

==================================================*/

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

/*==================================================
  CONSTANTS
==================================================*/

const __filename =

    fileURLToPath(

        import.meta.url

    );

const __dirname =

    path.dirname(

        __filename

    );

const PROJECT_ROOT =

    path.resolve(

        __dirname,

        "../.."

    );

const CONTENT_ROOT = path.join(

    PROJECT_ROOT,

    "src",

    "content"

);

const INDEX_FILE = "index.ts";
const MIN_GENERATED_DEPTH = 2;

/*==================================================
  SUBJECT
==================================================*/

function getSubject(relativePath: string): string {

    const topLevelFolder = relativePath.split(path.sep)[0];

    switch (topLevelFolder) {

        case "mathematics":
            return "Mathematics";

        case "english":
            return "English";

        case "science":
            return "Science";

        case "history":
            return "History";

        case "geography":
            return "Geography";

        case "verbalReasoning":
            return "Verbal Reasoning";

        case "nonVerbalReasoning":
            return "Non-Verbal Reasoning";

        case "verbalSkills":
            return "Verbal Skills";

        default:
            return "Unknown";

    }

}

function getSkillId(filePath: string): string {

    const source = fs.readFileSync(
        filePath,
        "utf8"
    );

    const match = source.match(
        /skillId:\s*"([^"]+)"/
    );

    if (!match) {

        throw new Error(
            `Unable to find skillId in ${filePath}`
        );

    }

    return match[1];

}
/*==================================================
  TYPES
==================================================*/

interface DirectoryContents {

    directories: string[];

    typescriptFiles: string[];

}

interface GeneratedSkillMetadata {

    skillId: string;

    subject: string;

    yearGroup: string;

    strand: string;

    sourcePath: string;

}

const generatedSkillMetadata: GeneratedSkillMetadata[] = [];

/*==================================================
  READ DIRECTORY
==================================================*/

function getDirectoryContents(

    directory: string

): DirectoryContents {

    const entries = fs.readdirSync(

        directory,

        {

            withFileTypes: true

        }

    );

    const directories: string[] = [];

    const typescriptFiles: string[] = [];

    for (

        const entry

        of entries

    ) {

        if (

            entry.name.startsWith(".")

        ) {

            continue;

        }

        if (

            entry.isDirectory()

        ) {

            directories.push(

                entry.name

            );

            continue;

        }

        if (

            !entry.isFile()

        ) {

            continue;

        }

        if (

            !entry.name.endsWith(".ts")

        ) {

            continue;

        }

        if (

            entry.name === INDEX_FILE

        ) {

            continue;

        }

        if (

            entry.name.endsWith(".test.ts")

        ) {

            continue;

        }

        if (

            entry.name.endsWith(".spec.ts")

        ) {

            continue;

        }

        if (

            entry.name.endsWith(".d.ts")

        ) {

            continue;

        }

        typescriptFiles.push(

            entry.name

        );

    }

    directories.sort();

    typescriptFiles.sort();

    return {

        directories,

        typescriptFiles

    };

}

/*==================================================
  GENERATE INDEX
==================================================*/

function generateIndex(

    directory: string,

    contents: DirectoryContents

): string | null {

    /*==============================================
      TOPIC FOLDER

      Example:

      shapeOddOneOut/

          recognise.ts
          understand.ts

    ==============================================*/

    if (

        contents.typescriptFiles.length > 0

        &&

        contents.directories.length === 0

    ) {

        return generateQuestionIndex(

            contents.typescriptFiles

        );

    }

    /*==============================================
      COLLECTION FOLDER

      Example:

      year3/

          addition/

          subtraction/

    ==============================================*/

    if (

    contents.directories.length > 0

    &&

    contents.typescriptFiles.length === 0

) {

        return generateCollectionIndex(

            directory,

            contents.directories

        );

    }

    return null;

}

/*==================================================
  QUESTION INDEX
==================================================*/

function generateQuestionIndex(

    files: string[]

): string {

    /*==============================================
      ONE QUESTION FILE

      shapeOddOneOut.ts

    ==============================================*/

    if (

        files.length === 1

    ) {

        const name =

            path.basename(

                files[0],

                ".ts"

            );

            return `/*==================================================
  GENERATED FILE

  DO NOT EDIT MANUALLY

==================================================*/

export { default } from "./${name}";
`;
    }

    /*==============================================
      MULTIPLE QUESTION FILES

    ==============================================*/

    const imports: string[] = [];

    const exports: string[] = [];

    for (

        const file

        of files

    ) {

        const name =

            path.basename(

                file,

                ".ts"

            );

        imports.push(

            `import ${name} from "./${name}";`

        );

        exports.push(

            `    ${name}`

        );

    }

    return `/*==================================================
  GENERATED FILE

  DO NOT EDIT MANUALLY

==================================================*/

${imports.join("\n")}

export default [

${exports.join(",\n")}

];
`;

}
/*==================================================
  COLLECTION INDEX
==================================================*/

function generateCollectionIndex(

    directory: string,

    directories: string[]

): string {

    const folderName =

        path.basename(

            directory

        );

    const variableName =

        `${folderName}Content`;

    const imports: string[] = [];

    const exports: string[] = [];

    for (

        const child

        of directories

    ) {

        imports.push(

            `import ${child} from "./${child}";`

        );

        exports.push(

            `    ${child}`

        );

    }

    return `/*==================================================
  GENERATED FILE

  DO NOT EDIT MANUALLY

==================================================*/

${imports.join("\n")}

export const ${variableName} = {

${exports.join(",\n")}

};

export default ${variableName};
`;

}
/*==================================================
  DIRECTORY DEPTH

  content/                     = 0
  content/mathematics/         = 1
  content/mathematics/year3/   = 2

==================================================*/

function getContentDepth(

    directory: string

): number {

    const relative =

        path.relative(

            CONTENT_ROOT,

            directory

        );

    if (

        relative === ""

    ) {

        return 0;

    }

    return relative.split(

        path.sep

    ).length;

}
/*==================================================
  WRITE INDEX
==================================================*/

const GENERATED_MARKER =

    "GENERATED FILE";

function shouldOverwrite(

    indexPath: string

): boolean {

    if (

        !fs.existsSync(

            indexPath

        )

    ) {

        return true;

    }

    const existing =

        fs.readFileSync(

            indexPath,

            "utf8"

        );

    return existing.includes(

        GENERATED_MARKER

    );

}

function writeIndex(

    directory: string,

    contents: DirectoryContents

): void {

    if (

    getContentDepth(

        directory

    ) < MIN_GENERATED_DEPTH

) {

    return;

}
    const source =

        generateIndex(

            directory,

            contents

        );

    if (

        !source

    ) {

        return;

    }

    const indexPath =

        path.join(

            directory,

            INDEX_FILE

        );

    if (

        !shouldOverwrite(

            indexPath

        )

    ) {

        console.log(

            "Skipping:",

            path.relative(

                CONTENT_ROOT,

                indexPath

            ),

            "(manual file)"

        );

        return;

    }

    fs.writeFileSync(

        indexPath,

        source,

        "utf8"

    );

    console.log(

        "Generated:",

        path.relative(

            CONTENT_ROOT,

            indexPath

        )

    );

}

/*==================================================
  PROCESS DIRECTORY
==================================================*/

function processDirectory(

    directory: string

): void {

    const contents =

        getDirectoryContents(

            directory

        );

    /*==============================================
  COLLECT SKILL METADATA
==============================================*/

if (
    contents.typescriptFiles.length > 0 &&
    contents.directories.length === 0
) {

    const relativeDirectory = path.relative(
        CONTENT_ROOT,
        directory
    );

    const parts = relativeDirectory.split(path.sep);

    if (parts.length >= 3) {

        const yearGroup = parts[1];
        const strand = parts[2];

        for (const file of contents.typescriptFiles) {

                generatedSkillMetadata.push({

                    skillId: getSkillId(
                        path.join(directory, file)
                    ),

                    subject: getSubject(relativeDirectory),

                    yearGroup,

                    strand,

                    sourcePath: path.join(relativeDirectory, file)

                });

            }

        }

    }

    for (

        const child

        of contents.directories

    ) {

        processDirectory(

            path.join(

                directory,

                child

            )

        );

    }

    writeIndex(

        directory,

        contents

    );

}

function writeSkillMetadata(): void {

    const outputPath = path.join(
        CONTENT_ROOT,
        "generatedSkillMetadata.ts"
    );

    const entries =

            Array.from(

                new Map(

                    generatedSkillMetadata.map(

                        metadata => [

                            metadata.skillId,

                            metadata

                        ]

                    )

                ).values()

            )

            .sort(

                (a, b) =>

                    a.skillId.localeCompare(

                        b.skillId

                    )

            )

            .map(

                metadata => `    "${metadata.skillId}": {
                skillId: "${metadata.skillId}",
                subject: "${metadata.subject}",
                yearGroup: "${metadata.yearGroup}",
                strand: "${metadata.strand}",
                sourcePath: "${metadata.sourcePath}"
            }`

            )

            .join(

                ",\n\n"

            );

    const source = `/*==================================================
  GENERATED FILE

  DO NOT EDIT MANUALLY

==================================================*/

export interface SkillMetadata {

    skillId: string;

    subject: string;

    yearGroup: string;

    strand: string;

    sourcePath: string;

}

export const skillMetadata: Record<string, SkillMetadata> = {

${entries}

};

export default skillMetadata;
`;

    fs.writeFileSync(
        outputPath,
        source,
        "utf8"
    );

    console.log(
        "Generated:",
        path.relative(PROJECT_ROOT, outputPath)
    );

}

/*==================================================
  MAIN
==================================================*/

function main(): void {

    console.log();

    console.log(

        "======================================"

    );

    console.log(

        "Generating content indexes..."

    );

    console.log(

        "======================================"

    );

    console.log();

    if (

        !fs.existsSync(

            CONTENT_ROOT

        )

    ) {

        throw new Error(

            `Content folder not found: ${CONTENT_ROOT}`

        );

    }

    const contents =

        getDirectoryContents(

            CONTENT_ROOT

        );

    /*==============================================
      IMPORTANT

      We deliberately DO NOT generate
      src/content/index.ts

      That remains the public API.

    ==============================================*/

    for (

        const child

        of contents.directories

    ) {

        processDirectory(

            path.join(

                CONTENT_ROOT,

                child

            )

        );

    }

    writeSkillMetadata();

    console.log();

    console.log(

        "Done."

    );

}

/*==================================================
  SKILL METADATA
==================================================*/




main();