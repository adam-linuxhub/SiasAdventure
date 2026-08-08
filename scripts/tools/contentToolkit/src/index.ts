#!/usr/bin/env ts-node

/*==================================================
  SIA CONTENT TOOLKIT

  Entry Point

==================================================*/

import { Command } from "commander";

const program = new Command();

program
    .name("content")
    .description("Sia's Adventure Content Toolkit")
    .version("1.0.0");

program
    .command("scan")
    .description("Scan the question bank")
    .action(async () => {

        const { runScan } =
            await import("./commands/scan");

        await runScan();

    });

program
    .command("validate")
    .description("Validate question files")
    .action(async () => {

        const { runValidate } =
            await import("./commands/validate");

        await runValidate();

    });

program
    .command("stats")
    .description("Display statistics")
    .action(async () => {

        const { runStats } =
            await import("./commands/stats");

        await runStats();

    });

program
    .command("duplicates")
    .description("Find duplicate questions")
    .action(async () => {

        const { runDuplicates } =
            await import("./commands/duplicates");

        await runDuplicates();

    });

program
    .command("spellcheck")
    .description("Check British English spelling")
    .action(async () => {

        const { runSpellcheck } =
            await import("./commands/spellcheck");

        await runSpellcheck();

    });

program
    .command("hints-export")
    .description("Export missing hints into ChatGPT batches")
    .action(async () => {

        const { runHintsExport } =
            await import("./commands/hintsExport");

        await runHintsExport();

    });

program
    .command("hints-import")
    .description("Import completed hint batches")
    .action(async () => {

        const { runHintsImport } =
            await import("./commands/hintsImport");

        await runHintsImport();

    });

program
    .command("fix")
    .description("Automatically fix common issues")
    .action(async () => {

        const { runFix } =
            await import("./commands/fix");

        await runFix();

    });

program
    .parseAsync(process.argv)
    .catch(error => {

        console.error("");
        console.error("==============================================");
        console.error(" Toolkit Error");
        console.error("==============================================");
        console.error("");

        if (error instanceof Error) {

            console.error(error.message);

        } else {

            console.error(error);

        }

        console.error("");

        process.exit(1);

    });