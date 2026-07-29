function byId<T extends HTMLElement>(id: string): T {

    const element = document.getElementById(id);

    if (!element) {

        throw new Error(`Missing element: ${id}`);

    }

    return element as T;

}


export function initialiseTreasureUI(): void {

    const treasureButton =
        byId<HTMLDivElement>("treasure-button");


    const treasureCollection =
        byId<HTMLDivElement>("treasure-collection");


    const closeButton =
        byId<HTMLButtonElement>("close-treasure");


    const gameContent =
        byId<HTMLDivElement>("game-content");


    const helperPanel =
        byId<HTMLDivElement>("helper-panel");


    const statsPanel =
        byId<HTMLDivElement>("stats-panel");


    treasureButton.addEventListener("click", () => {

        gameContent.classList.add("hidden");

        helperPanel.classList.add("hidden");

        statsPanel.classList.add("hidden");

        treasureButton.classList.add("hidden");


        treasureCollection.classList.add("visible");

    });


    closeButton.addEventListener("click", () => {

        treasureCollection.classList.remove("visible");


        gameContent.classList.remove("hidden");

        helperPanel.classList.remove("hidden");

        statsPanel.classList.remove("hidden");

        treasureButton.classList.remove("hidden");

    });

}