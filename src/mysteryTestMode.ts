/*==================================================
  SIA'S ADVENTURE

  MYSTERY TEST MODE

  This test mode must never modify the
  player's real game or learning progress.
==================================================*/

let mysteryTestActive = false;
let mysteryTestKeyFound = false;

/*==================================================
  START TEST
==================================================*/

export function startMysteryTest(): void {

    mysteryTestActive = true;
    mysteryTestKeyFound = false;

}

/*==================================================
  TEST STATE
==================================================*/

export function isMysteryTestActive(): boolean {

    return mysteryTestActive;

}

export function isMysteryTestKeyFound(): boolean {

    return mysteryTestKeyFound;

}

/*==================================================
  TEST KEY FOUND
==================================================*/

export function completeMysteryTest(): void {

    if (!mysteryTestActive) {
        return;
    }

    mysteryTestKeyFound = true;

}

/*==================================================
  RESET TEST
==================================================*/

export function resetMysteryTest(): void {

    mysteryTestActive = false;
    mysteryTestKeyFound = false;

}