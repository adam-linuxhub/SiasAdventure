/*==================================================
  SIA'S ADVENTURE
  NON-VERBAL REASONING

  RENDERER

  Orchestrates the NVR engine.

  Responsibilities:

      • Draw question
      • Manage canvas
      • Build layout
      • Handle hit testing

==================================================*/

import ShapeRenderer from "./ShapeRenderer";
import NvrLayout, { LayoutCell } from "./NvrLayout";
import NvrHitTester from "./NvrHitTester";

import {

    NvrQuestion

} from "../content/nonVerbalReasoning/nvrTypes";

export default class NvrRenderer {

    private canvas: HTMLCanvasElement;

    private ctx: CanvasRenderingContext2D;

    private shapeRenderer = new ShapeRenderer();

    private layoutEngine = new NvrLayout();

    private hitTester = new NvrHitTester();

    private currentQuestion?: NvrQuestion;

    private layout: LayoutCell[] = [];


    /*==================================================
      CONSTRUCTOR
    ==================================================*/

    constructor(

        canvas: HTMLCanvasElement

    ) {

        const ctx = canvas.getContext("2d");

        if (!ctx) {

            throw new Error(

                "Unable to create canvas context."

            );

        }

        this.canvas = canvas;

        this.ctx = ctx;

        window.addEventListener(

            "resize",

            () => this.resize()

        );

        this.resize();

    }


    /*==================================================
      PUBLIC
    ==================================================*/

    public render(

        question: NvrQuestion

    ): void {

        this.currentQuestion = question;

        this.clear();

        this.layout = this.layoutEngine.build(

            question,

            this.canvas.width,

            this.canvas.height

        );

        this.hitTester.setLayout(

            this.layout

        );

        this.drawCells();

    }


    public resize(): void {

        const parent = this.canvas.parentElement;

        if (!parent) {

            return;

        }

        this.canvas.width = parent.clientWidth;

        this.canvas.height = parent.clientHeight;

        if (this.currentQuestion) {

            this.render(

                this.currentQuestion

            );

        }

    }


    public attach(

        callback: (

            row: number,

            column: number

        ) => void

    ): void {

        this.canvas.addEventListener(

            "click",

            event => {

                const rect =

                    this.canvas.getBoundingClientRect();

                const x =

                    event.clientX -

                    rect.left;

                const y =

                    event.clientY -

                    rect.top;

                const answer =

                    this.hitTester.getAnswer(

                        x,

                        y

                    );

                if (!answer) {

                    return;

                }

                callback(

                    answer.row,

                    answer.column

                );

            }

        );

    }


    public reset(): void {

        if (

            this.currentQuestion

        ) {

            this.render(

                this.currentQuestion

            );

        }

    }


    /*==================================================
      DRAWING
    ==================================================*/

    private drawCells(): void {

        this.layout.forEach(

            layoutCell => {

                this.drawCell(

                    layoutCell

                );

            }

        );

    }


    private drawCell(

        layoutCell: LayoutCell

    ): void {

        const {

            x,

            y,

            width,

            height,

            cell

        } = layoutCell;

        this.ctx.save();

        this.ctx.fillStyle = "#ffffff";

        this.ctx.strokeStyle = "#cccccc";

        this.ctx.lineWidth = 2;

        this.ctx.beginPath();

        this.ctx.roundRect(

            x,

            y,

            width,

            height,

            12

        );

        this.ctx.fill();

        this.ctx.stroke();

        const centreX =

            x +

            width / 2;

        const centreY =

            y +

            height / 2;

        const spacing =

            Math.min(

                width,

                height

            ) * 0.28;

        const count =

            cell.shapes.length;

        cell.shapes.forEach(

            (

                shape,

                index

            ) => {

                let drawX =

                    centreX;

                let drawY =

                    centreY;

                if (count > 1) {

                    drawX +=

                        (

                            index -

                            (count - 1) / 2

                        ) *

                        spacing;

                }

                this.shapeRenderer.draw(

                    this.ctx,

                    shape,

                    drawX,

                    drawY,

                    Math.min(

                        width,

                        height

                    ) * 0.22

                );

            }

        );

        this.ctx.restore();

    }


    /*==================================================
      HELPERS
    ==================================================*/

    private clear(): void {

        this.ctx.clearRect(

            0,

            0,

            this.canvas.width,

            this.canvas.height

        );

    }

}