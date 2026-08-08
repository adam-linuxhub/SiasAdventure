/*==================================================
  SIA CONTENT TOOLKIT

  Export Hint Batches

==================================================*/

import { scanContent } from "../core/scanner";
import { exportHintBatches } from "../core/exporter";

export async function runHintsExport(): Promise<void> {

    console.log("");
    console.log("==============================================");
    console.log(" Sia Content Toolkit");
    console.log(" Export Hint Batches");
    console.log("==============================================");
    console.log("");

    const files =
        await scanContent();

    const batches =
        await exportHintBatches(
            files
        );

    console.log("");

    if (batches === 0) {

        console.log("✓ No missing hints found.");
        console.log("");

        return;

    }

    console.log("----------------------------------------------");
    console.log(`Batches created : ${batches}`);
    console.log("----------------------------------------------");
    console.log("");

}