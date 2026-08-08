/*==================================================
  SIA CONTENT TOOLKIT

  Banner

==================================================*/

import { heading, info } from "./logger";

export function showBanner(
    command: string
): void {

    heading("Sia Content Toolkit");

    info(`Command : ${command}`);

    info("");

}