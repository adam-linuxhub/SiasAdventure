import { Project } from "ts-morph";

export interface Migration {
    readonly name: string;
    run(project: Project): Promise<void>;
}