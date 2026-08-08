/*==================================================
  SIA CONTENT TOOLKIT

  Writer

==================================================*/

import { SourceFile } from "ts-morph";

export async function saveFile(
    sourceFile: SourceFile
): Promise<void> {

    if (!sourceFile.isSaved()) {

        await sourceFile.save();

    }

}

export async function saveFiles(
    sourceFiles: SourceFile[]
): Promise<void> {

    for (const sourceFile of sourceFiles) {

        if (!sourceFile.isSaved()) {

            await sourceFile.save();

        }

    }

}