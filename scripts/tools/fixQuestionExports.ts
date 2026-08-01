/*==================================================
  SIA'S ADVENTURE

  FIX QUESTION EXPORTS

  Converts old named exports into compatible
  default + named exports.

==================================================*/

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";


/*==================================================
  PATH SETUP
==================================================*/

const __filename =

    fileURLToPath(

        import.meta.url

    );


const __dirname =

    path.dirname(

        __filename

    );


/*==================================================
  CONSTANTS
==================================================*/

const PROJECT_ROOT =

    path.resolve(

        __dirname,

        "../.."

    );


const CONTENT_ROOT =

    path.join(

        PROJECT_ROOT,

        "src",

        "content"

    );


/*==================================================
  PROCESS FILE
==================================================*/

function processFile(

    filePath: string

): void {


    const filename =

        path.basename(

            filePath

        );


    /*
        Ignore generated indexes
    */

    if (

        filename === "index.ts"

    ) {

        return;

    }


    /*
        Ignore type files
    */

    if (

        filename.endsWith(".d.ts")

    ) {

        return;

    }


    if (

        filename.includes("types")

    ) {

        return;

    }


    const content =

        fs.readFileSync(

            filePath,

            "utf8"

        );


    /*
        Already fixed
    */

    if (

        content.includes(

            "export default"

        )

    ) {

        return;

    }


    /*
        Find:

        export const questionName:

    */

    const match =

        content.match(

            /export const (\w+)\s*:/


        );


    if (

        !match

    ) {

        return;

    }


    const variableName =

        match[1];


    console.log(

        "Fixing:",

        path.relative(

            PROJECT_ROOT,

            filePath

        )

    );


    /*
        Replace named export

        export const foo:

        becomes

        const foo:
    */

    let updated =

        content.replace(

            `export const ${variableName}`,

            `const ${variableName}`

        );


    updated =

        updated.trimEnd();


    /*
        Add compatibility exports
    */

    updated += `


export default ${variableName};

export {

    ${variableName}

};
`;


    fs.writeFileSync(

        filePath,

        updated,

        "utf8"

    );

}


/*==================================================
  WALK DIRECTORY
==================================================*/

function walkDirectory(

    directory: string

): void {


    const entries =

        fs.readdirSync(

            directory,

            {

                withFileTypes: true

            }

        );


    for (

        const entry

        of entries

    ) {


        const fullPath =

            path.join(

                directory,

                entry.name

            );


        if (

            entry.isDirectory()

        ) {


            walkDirectory(

                fullPath

            );


            continue;

        }


        if (

            entry.isFile()

            &&

            entry.name.endsWith(".ts")

        ) {


            processFile(

                fullPath

            );

        }

    }

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

        "Fixing question exports..."

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


    walkDirectory(

        CONTENT_ROOT

    );


    console.log();

    console.log(

        "Done."

    );

}


main();