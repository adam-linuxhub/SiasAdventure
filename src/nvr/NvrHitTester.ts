/*==================================================
  SIA'S ADVENTURE
  NON-VERBAL REASONING

  HIT TESTER

  Converts canvas coordinates into
  selected NVR cells.
==================================================*/

import { LayoutCell } from "./NvrLayout";

/*==================================================
  CLASS
==================================================*/

export default class NvrHitTester {

    private layout: LayoutCell[] = [];

    /*==================================================
      PUBLIC
    ==================================================*/

    public setLayout(

        layout: LayoutCell[]

    ): void {

        this.layout = layout;

    }

    public getCell(

        x: number,

        y: number

    ): LayoutCell | null {

        for (const cell of this.layout) {

            if (

                x >= cell.x &&

                x <= cell.x + cell.width &&

                y >= cell.y &&

                y <= cell.y + cell.height

            ) {

                return cell;

            }

        }

        return null;

    }

    public getAnswer(

        x: number,

        y: number

    ): { row: number; column: number } | null {

        const cell = this.getCell(

            x,

            y

        );

        if (!cell) {

            return null;

        }

        return {

            row: cell.row,

            column: cell.column

        };

    }

    public clear(): void {

        this.layout = [];

    }

}