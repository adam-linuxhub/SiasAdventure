import { PlayerStorage } from "./storage";
import { Worlds } from "./worlds";
import { Dashboard } from "./dashboard";

const player = PlayerStorage.load();

function byId<T extends HTMLElement>(id: string): T {

    const element = document.getElementById(id);

    if (!element) {

        throw new Error(`Missing element: ${id}`);

    }

    return element as T;

}

function updateOverallProgress(): void {

    const world =
        Worlds.getWorld(player.world);

    byId<HTMLDivElement>("overall-progress").innerHTML = `

        <p>

            <strong>Stars:</strong>

            ${player.stars}

        </p>

        <p>

            <strong>Level:</strong>

            ${player.level}
            ${player.levelName}

        </p>

        <p>

            <strong>World:</strong>

            ${
                world
                    ? `${player.world}: ${world.name}`
                    : player.world
            }

        </p>

        <p>

            <strong>Adventure Points:</strong>

            ${player.adventurePoints}

        </p>

        <p>

            <strong>Worlds Completed:</strong>

            ${player.worldsCompleted}

        </p>

    `;

}

updateOverallProgress();

Dashboard.renderStatistics(player);

Dashboard.renderTreasureGallery(player);

Dashboard.renderSkillsReport();

Dashboard.renderNeedsPractice();