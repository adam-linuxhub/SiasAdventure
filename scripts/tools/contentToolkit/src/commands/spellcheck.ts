/*==================================================
  SIA CONTENT TOOLKIT

  British English Spell Checker

==================================================*/

import fg from "fast-glob";
import { Project, Node, SyntaxKind } from "ts-morph";

import { CONFIG } from "../config";

const AMERICAN_TO_BRITISH: Record<string, string> = {

    color: "colour",
    colors: "colours",

    center: "centre",
    centers: "centres",

    organize: "organise",
    organized: "organised",
    organizing: "organising",
    organization: "organisation",

    analyze: "analyse",
    analyzed: "analysed",
    analyzing: "analysing",

    favorite: "favourite",

    traveled: "travelled",
    traveling: "travelling",
    traveler: "traveller",

    meter: "metre",
    liters: "litres",
    liter: "litre"

};

export async function runSpellcheck(): Promise<void> {

    console.log("");
    console.log("==============================================");
    console.log(" Sia Content Toolkit");
    console.log(" British English Checker");
    console.log("==============================================");
    console.log("");

    const project = new Project();

    const files = await fg("**/*.ts", {
        cwd: CONFIG.contentRoot,
        absolute: true
    });

    project.addSourceFilesAtPaths(files);

    let issues = 0;

    for (const sourceFile of project.getSourceFiles()) {

        const strings = sourceFile.getDescendantsOfKind(
            SyntaxKind.StringLiteral
        );

        for (const stringLiteral of strings) {

            const text = stringLiteral.getLiteralText();

            for (const [american, british] of Object.entries(
                AMERICAN_TO_BRITISH
            )) {

                const regex = new RegExp(
                    `\\b${american}\\b`,
                    "i"
                );

                if (!regex.test(text))
                    continue;

                console.log(
                    `${sourceFile.getBaseName()}`
                );

                console.log(
                    `  "${american}" → "${british}"`
                );

                console.log(
                    `  ${text}`
                );

                console.log("");

                issues++;

            }

        }

    }

    console.log("----------------------------------------------");
    console.log(`Issues found : ${issues}`);
    console.log("----------------------------------------------");
    console.log("");

}