/*==================================================
  SIA'S ADVENTURE

  DEVELOPMENT TEST MODE
==================================================*/

export const TEST_MODE =
    new URLSearchParams(window.location.search)
        .get("nvrtest") === "1";

console.log(
    "[Sia's Adventure] NVR TEST MODE:",
    TEST_MODE
);