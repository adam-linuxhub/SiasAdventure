import { PlayerStorage } from "./storage";
import { Dashboard } from "./dashboard";

/*==================================================
  LOAD PLAYER & LEARNING DATA
==================================================*/

PlayerStorage.loadLearning();

const player =
    PlayerStorage.load();

/*==================================================
  HELPERS
==================================================*/

function byId<T extends HTMLElement>(id: string): T {

    const element =
        document.getElementById(id);

    if (!element) {

        throw new Error(
            `Missing element: ${id}`
        );

    }

    return element as T;

}

/*==================================================
  TAB NAVIGATION
==================================================*/

function initialiseTabs(): void {

    const buttons =
        document.querySelectorAll<HTMLButtonElement>(
            ".tab-button"
        );

    const panels =
        document.querySelectorAll<HTMLElement>(
            ".tab-panel"
        );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const selected =
                button.dataset.tab;

            buttons.forEach(button =>

                button.classList.remove(
                    "active"
                )

            );

            panels.forEach(panel =>

                panel.classList.remove(
                    "active"
                )

            );

            button.classList.add(
                "active"
            );

            byId<HTMLElement>(
                `${selected}-tab`
            ).classList.add(
                "active"
            );

        });

    });

}

/*==================================================
  LOAD DASHBOARD
==================================================*/

initialiseTabs();

Dashboard.renderSummary(player);

Dashboard.renderOverview(player);

Dashboard.renderStatistics(player);

Dashboard.renderSkillsReport();

Dashboard.renderRecommendations();