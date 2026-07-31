/*==================================================
  SIA'S ADVENTURE
  NON-VERBAL REASONING

  LAYOUT ENGINE

  Calculates where every NVR cell should
  appear on the canvas.

==================================================*/

import {

    NvrCell,
    NvrQuestion

} from "../content/nonVerbalReasoning/nvrTypes";


/*==================================================
  TYPES
==================================================*/

export interface LayoutCell {

    row: number;

    column: number;

    x: number;

    y: number;

    width: number;

    height: number;

    cell: NvrCell;

}


/*==================================================
  CLASS
==================================================*/

export default class NvrLayout {

    public build(

        question: NvrQuestion,

        canvasWidth: number,

        canvasHeight: number

    ): LayoutCell[] {

        const layout: LayoutCell[] = [];

        const rows =

            question.figures.length;

        const columns =

            Math.max(

                ...question.figures.map(

                    row => row.length

                )

            );

        const padding = 30;

        const gap = 20;

        const availableWidth =

            canvasWidth -

            padding * 2 -

            gap * (columns - 1);

        const availableHeight =

            canvasHeight -

            padding * 2 -

            gap * (rows - 1);

        const cellWidth =

            availableWidth /

            columns;

        const cellHeight =

            availableHeight /

            rows;

        question.figures.forEach(

            (

                row,

                rowIndex

            ) => {

                row.forEach(

                    (

                        cell,

                        columnIndex

                    ) => {

                        layout.push({

                            row: rowIndex,

                            column: columnIndex,

                            x:

                                padding +

                                columnIndex *

                                (

                                    cellWidth +

                                    gap

                                ),

                            y:

                                padding +

                                rowIndex *

                                (

                                    cellHeight +

                                    gap

                                ),

                            width: cellWidth,

                            height: cellHeight,

                            cell

                        });

                    }

                );

            }

        );

        return layout;

    }

}