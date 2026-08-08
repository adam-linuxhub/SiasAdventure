/*==================================================
  SIA CONTENT TOOLKIT

  Configuration

==================================================*/

import path from "node:path";

const TOOLKIT_ROOT =
    process.cwd();

export const CONFIG = {

    //----------------------------------------------
    // Project
    //----------------------------------------------

    contentRoot: path.resolve(
        TOOLKIT_ROOT,
        "../../../src/content"
    ),

    //----------------------------------------------
    // Output
    //----------------------------------------------

    outputDirectory: path.resolve(
        TOOLKIT_ROOT,
        "output"
    ),

    reportDirectory: path.resolve(
        TOOLKIT_ROOT,
        "reports"
    ),

    cacheDirectory: path.resolve(
        TOOLKIT_ROOT,
        ".cache"
    ),

    //----------------------------------------------
    // Hint Export
    //----------------------------------------------

    batchCharacterLimit: 50000,

    maxQuestionsPerBatch: 50,

    //----------------------------------------------
    // Files
    //----------------------------------------------

    supportedExtensions: [
        ".ts"
    ],

    reportFile: "content-report.json"

} as const;