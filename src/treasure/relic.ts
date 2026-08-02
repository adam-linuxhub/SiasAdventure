/*==================================================
  RELIC
==================================================*/

export interface Relic {

    id: string;

    world: number;

    order: number;

    item: string;

    badge: string;

    description: string;

    icon: string;

    rarity:
        | "Common"
        | "Rare"
        | "Epic"
        | "Legendary";

}