/*==================================================
  SIA CONTENT TOOLKIT

  Import Hint Batches

==================================================*/

import { importHints } from "../core/importer";

export async function runHintsImport(): Promise<void> {

    console.log("");
    console.log("==============================================");
    console.log(" Sia Content Toolkit");
    console.log(" Import Hint Batches");
    console.log("==============================================");
    console.log("");

    await importHints();

    console.log("");
    console.log("✓ Import complete.");
    console.log("");

}