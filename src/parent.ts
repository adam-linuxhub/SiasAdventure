import { PlayerStorage } from "./storage";
import { Worlds } from "./worlds";
import { Dashboard } from "./dashboard";


const player = PlayerStorage.load();


function byId<T extends HTMLElement>(id: string): T {

    const element =
        document.getElementById(id);

    if (!element) {

        throw new Error(`Missing element: ${id}`);

    }

    return element as T;

}


/*==================================================
  OVERALL PROGRESS
==================================================*/

function updateOverallProgress(): void {

    const world =
        Worlds.getWorld(player.world);


    byId<HTMLDivElement>("overall-progress").innerHTML = `

        <div class="progress-summary">

            <p>

                ⭐ <strong>Stars:</strong>

                ${player.stars}

            </p>


            <p>

                🏅 <strong>Rank:</strong>

                ${player.levelName}

            </p>


            <p>

                🌍 <strong>World:</strong>

                ${
                    world
                        ? world.name
                        : player.world
                }

            </p>


            <p>

                💰 <strong>Treasure:</strong>

                ${player.treasureChests}

            </p>


            <p>

                🌟 <strong>Worlds Completed:</strong>

                ${player.worldsCompleted}

            </p>


        </div>

    `;

}


/*==================================================
  LOAD DASHBOARD
==================================================*/

updateOverallProgress();


Dashboard.renderStatistics(player);

Dashboard.renderTreasureGallery(player);

Dashboard.renderSkillsReport();

Dashboard.renderNeedsPractice();

Dashboard.renderStrongestSkills();

Dashboard.renderAchievements(player);