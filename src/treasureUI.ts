import type { Player } from "./types";
import { Treasure } from "./treasure";

function byId<T extends HTMLElement>(id: string): T {

    const element = document.getElementById(id);

    if (!element) {

        throw new Error(`Missing element: ${id}`);

    }

    return element as T;

}

/*==================================================
    TREASURE GALLERY
==================================================*/

export function renderTreasureGallery(
    player: Player
): void {

    const gallery =
        byId<HTMLDivElement>("treasure-gallery");

    gallery.innerHTML = "";

    for (const relicId of player.relics) {

        let relic = null;

        for (const world of Treasure.worlds) {

            const found =
                world.relics.find(
                    r => r.id === relicId
                );

            if (found) {

                relic = found;
                break;

            }

        }

        if (!relic) {

            continue;

        }

        const card =
            document.createElement("div");

        card.className = "treasure-card";

        card.innerHTML = `

            <img
                src="images/relics/world${relic.world}/${relic.image}"
                alt="${relic.item}"
                class="treasure-image">

            <div class="treasure-name">

                ${relic.item}

            </div>

        `;

        gallery.appendChild(card);

    }

}

/*==================================================
    TREASURE UI
==================================================*/

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

        treasureCollection.classList.remove("hidden");

    });

    closeButton.addEventListener("click", () => {

        treasureCollection.classList.add("hidden");

        gameContent.classList.remove("hidden");

        helperPanel.classList.remove("hidden");

        statsPanel.classList.remove("hidden");

        treasureButton.classList.remove("hidden");

    });

}