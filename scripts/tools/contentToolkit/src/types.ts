/*==================================================
  SIA CONTENT TOOLKIT

  Shared Types

==================================================*/

import { SourceFile } from "ts-morph";

export interface ToolkitQuestion {

    //----------------------------------------------
    // Required question data
    //----------------------------------------------

    id: string;

    skillId: string;

    question: string;

    options: string[];

    correctAnswer: string;

    explanation: string;

    //----------------------------------------------
    // Optional content
    //----------------------------------------------

    hint?: string;

    hasHint: boolean;

    difficulty?: number;

    estimatedSeconds?: number;

    tags: string[];

}

export interface ToolkitFile {

    //----------------------------------------------
    // Source
    //----------------------------------------------

    sourceFile: SourceFile;

    filePath: string;

    relativePath: string;

    //----------------------------------------------
    // Metadata
    //----------------------------------------------

    subject: string;

    year: string;

    topic: string;

    skill: string;

    //----------------------------------------------
    // Questions
    //----------------------------------------------

    questions: ToolkitQuestion[];

}

export interface ScanResult {

    files: ToolkitFile[];

    totalFiles: number;

    totalQuestions: number;

    totalMissingHints: number;

}

export interface ValidationIssue {

    file: string;

    questionId: string;

    message: string;

}

export interface StatisticsResult {

    totalFiles: number;

    totalQuestions: number;

    totalHints: number;

    totalMissingHints: number;

}

export interface DuplicateQuestion {

    firstId: string;

    secondId: string;

    question: string;

}