export interface Migration {

    readonly name: string;

    run(): Promise<void>;

}