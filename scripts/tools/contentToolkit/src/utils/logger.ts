/*==================================================
  SIA CONTENT TOOLKIT

  Logger

==================================================*/

import chalk from "chalk";

export function heading(title: string): void {

    console.log("");

    console.log(chalk.cyan("=============================================="));
    console.log(chalk.cyan(` ${title}`));
    console.log(chalk.cyan("=============================================="));

    console.log("");

}

export function success(message: string): void {

    console.log(
        chalk.green(`✓ ${message}`)
    );

}

export function warning(message: string): void {

    console.log(
        chalk.yellow(`⚠ ${message}`)
    );

}

export function error(message: string): void {

    console.log(
        chalk.red(`✗ ${message}`)
    );

}

export function info(message: string): void {

    console.log(message);

}