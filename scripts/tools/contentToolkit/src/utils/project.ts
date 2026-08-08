/*==================================================
  SIA CONTENT TOOLKIT

  Project Factory

==================================================*/

import path from "node:path";

import { Project } from "ts-morph";

import { CONFIG } from "../config";

export function createProject(): Project {

    const project = new Project({

        tsConfigFilePath: path.resolve(
            CONFIG.contentRoot,
            "../../tsconfig.json"
        )

    });

    return project;

}