/*==================================================
  SIA CONTENT TOOLKIT

  Hint Batch Exporter

==================================================*/

import fs from "node:fs";
import path from "node:path";

import { CONFIG } from "../config";
import { ToolkitFile } from "../types";

export async function exportHintBatches(
    files: ToolkitFile[]
): Promise<number> {

    fs.mkdirSync(
        CONFIG.outputDirectory,
        {
            recursive: true
        }
    );

    //----------------------------------------------
    // Remove previous batches
    //----------------------------------------------

    for (const file of fs.readdirSync(CONFIG.outputDirectory)) {

        if (file.startsWith("batch-")) {

            fs.unlinkSync(
                path.join(
                    CONFIG.outputDirectory,
                    file
                )
            );

        }

    }

    let batchNumber = 1;

    const header =
        buildPromptHeader();

    let currentCharacters =
        header.length;
    let questionsInBatch = 0;

    let currentBatch: string[] = [
        header
    ];

    for (const file of files) {

        const missingQuestions =
            file.questions.filter(
                question => !question.hasHint
            );

        if (missingQuestions.length === 0)
            continue;

        for (const question of missingQuestions) {

            const block =
                createQuestionBlock(
                    file,
                    question
                );

            if (

                currentBatch.length > 1 &&

                (

                    currentCharacters +
                    block.length >
                    CONFIG.batchCharacterLimit

                    ||

                    questionsInBatch >=
                    CONFIG.maxQuestionsPerBatch

                )

            ) {
                writeBatch(
                    batchNumber,
                    currentBatch
                );

                batchNumber++;

                const newHeader =
                    buildPromptHeader();

                currentBatch = [
                    newHeader
                ];

                currentCharacters =
                    newHeader.length;
                questionsInBatch = 0;

            }

            currentBatch.push(
                block
            );

            currentCharacters +=
                block.length;
            questionsInBatch++;

        }

    }

    if (currentBatch.length > 1) {

        writeBatch(
            batchNumber,
            currentBatch
        );

    }

    return currentBatch.length > 1
        ? batchNumber
        : batchNumber - 1;

}

function buildPromptHeader(): string {

    return [

        "========================================================",
        "SIA CONTENT TOOLKIT",
        "QUESTION DATA",
        "========================================================",
        "",
        "This file contains question data only.",
        "Use it together with the matching prompt file.",
        "",
        "========================================================",
        ""

    ].join("\n");

}

function buildPrompt(): string {

    return [

        "############################################################",
        "# SIA CONTENT TOOLKIT",
        "# EDUCATIONAL HINT GENERATION",
        "############################################################",
        "",
        "You are an experienced UK primary school teacher.",
        "",
        "You are about to receive ONE document containing multiple",
        "questions from Sia's Adventure.",
        "",
        "When you receive the document:",
        "",
        "- Read the ENTIRE document before replying.",
        "- Generate ONE educational hint for EVERY QUESTION ID.",
        "- Do NOT ask questions.",
        "- Do NOT explain what you are doing.",
        "- Do NOT rewrite the questions.",
        "- Do NOT rewrite the document.",
        "- Do NOT stop until EVERY QUESTION ID has a hint.",
        "",
        "Each hint must:",
        "",
        "- use British English",
        "- suit the specified year group",
        "- contain no more than 20 words",
        "- never reveal or strongly imply the correct answer",
        "- never eliminate incorrect options",
        "- encourage the child to think",
        "- guide the child towards the key concept",
        "- avoid repeating wording from the question",
        "- sound friendly and encouraging",
        "",
        "Use the explanation and answer options ONLY",
        "to understand the concept.",
        "",
        "Never reveal information from them.",
        "",
        "Return EXACTLY this format:",
        "",
        "QUESTION ID",
        "<id>",
        "",
        "Hint",
        "<hint>",
        "",
        "Return NOTHING except QUESTION ID and Hint pairs.",
        ""

    ].join("\n");

}

function createQuestionBlock(
    file: ToolkitFile,
    question: ToolkitFile["questions"][number]
): string {

    return [

        "",

        "FILE",
        file.relativePath,
        "",

        "Subject",
        file.subject,
        "",

        "Year",
        file.year,
        "",

        "Topic",
        file.topic,
        "",

        "Skill",
        file.skill,
        "",

        "QUESTION ID",
        question.id,
        "",

        "Question",
        question.question,
        "",

        "Options",
        ...question.options,
        "",

        "Correct Answer",
        question.correctAnswer,
        "",

        "Explanation",
        question.explanation,
        "",

        "--------------------------------------------------------",
        ""

    ].join("\n");

}

function writeBatch(
    batchNumber: number,
    lines: string[]
): void {

    const batch =
        String(batchNumber).padStart(
            3,
            "0"
        );

    const dataFilename =
        path.join(
            CONFIG.outputDirectory,
            `batch-${batch}.txt`
        );

    const promptFilename =
        path.join(
            CONFIG.outputDirectory,
            `batch-${batch}-prompt.txt`
        );

    fs.writeFileSync(
        dataFilename,
        lines.join("\n"),
        "utf8"
    );

    fs.writeFileSync(
        promptFilename,
        buildPrompt(),
        "utf8"
    );

    console.log(
        `✓ ${path.basename(dataFilename)}`
    );

    console.log(
        `✓ ${path.basename(promptFilename)}`
    );

}