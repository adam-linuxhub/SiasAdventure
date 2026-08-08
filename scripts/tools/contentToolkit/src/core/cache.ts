/*==================================================
  SIA CONTENT TOOLKIT

  Hint Cache

==================================================*/

import fs from "node:fs";
import path from "node:path";

import { CONFIG } from "../config";

const CACHE_FILE =
    path.join(
        CONFIG.cacheDirectory,
        "hints.json"
    );

export interface HintCache {

    [questionId: string]: string;

}

export function loadCache(): HintCache {

    if (!fs.existsSync(CACHE_FILE))
        return {};

    return JSON.parse(
        fs.readFileSync(
            CACHE_FILE,
            "utf8"
        )
    );

}

export function saveCache(
    cache: HintCache
): void {

    fs.mkdirSync(
        CONFIG.cacheDirectory,
        {
            recursive: true
        }
    );

    fs.writeFileSync(
        CACHE_FILE,
        JSON.stringify(
            cache,
            null,
            4
        ),
        "utf8"
    );

}