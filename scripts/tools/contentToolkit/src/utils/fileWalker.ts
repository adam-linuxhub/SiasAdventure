/*==================================================
  SIA CONTENT TOOLKIT

  File Walker

==================================================*/

import fg from "fast-glob";

import { CONFIG } from "../config";

export async function getContentFiles(): Promise<string[]> {

    return await fg(
        "**/*.ts",
        {
            cwd: CONFIG.contentRoot,
            absolute: true
        }
    );

}