/*==================================================
  SIA'S ADVENTURE
  NON-VERBAL REASONING
  SHAPE RENDERER

  Draws a single ShapeItem onto a canvas.

  This renderer knows NOTHING about:
      • questions
      • answers
      • rows
      • hit testing
      • layout

  It only draws shapes.
==================================================*/

import { ShapeItem } from "../content/nonVerbalReasoning/nvrTypes";

export default class ShapeRenderer {

    /*==================================================
      PUBLIC
    ==================================================*/

    public draw(

        ctx: CanvasRenderingContext2D,

        shape: ShapeItem,

        x: number,

        y: number,

        baseSize = 28

    ): void {

        const size = this.getShapeSize(

            shape,

            baseSize

        );

        ctx.save();

        ctx.translate(

            x,

            y

        );

        ctx.rotate(

            ((shape.rotation ?? 0) * Math.PI) / 180

        );

        ctx.scale(

            shape.flippedX ? -1 : 1,

            shape.flippedY ? -1 : 1

        );

        ctx.beginPath();

        switch (shape.shape) {

            case "arrow":

                this.drawArrow(ctx, size);

                break;

            case "circle":

                this.drawCircle(ctx, size);

                break;

            case "cross":

                this.drawCross(ctx, size);

                break;

            case "diamond":

                this.drawDiamond(ctx, size);

                break;

            case "heart":

                this.drawHeart(ctx, size);

                break;

            case "hexagon":

                this.drawPolygon(ctx, size, 6);

                break;

            case "line":

                this.drawLine(ctx, size);

                break;

            case "octagon":

                this.drawPolygon(ctx, size, 8);

                break;

            case "oval":

                this.drawOval(ctx, size);

                break;

            case "pentagon":

                this.drawPolygon(ctx, size, 5);

                break;

            case "rectangle":

                this.drawRectangle(ctx, size);

                break;

            case "square":

                this.drawSquare(ctx, size);

                break;

            case "star":

                this.drawStar(ctx, size);

                break;

            case "triangle":

                this.drawTriangle(ctx, size);

                break;

            default:

                console.warn(

                    `Unknown shape: ${shape.shape}`

                );

                ctx.restore();

                return;

        }

        this.applyStyle(

            ctx,

            shape

        );

        ctx.restore();

    }


    /*==================================================
      STYLE
    ==================================================*/

    private applyStyle(

        ctx: CanvasRenderingContext2D,

        shape: ShapeItem

    ): void {

        ctx.lineWidth = 2;

        ctx.fillStyle =

            shape.colour ??

            "black";

        ctx.strokeStyle =

            shape.colour ??

            "black";

        switch (shape.fill) {

            case "outline":

                ctx.stroke();

                break;

            case "striped":

                ctx.fill();

                ctx.stroke();

                this.drawStripes(ctx);

                break;

            case "dotted":

                ctx.fill();

                ctx.stroke();

                this.drawDots(ctx);

                break;

            default:

                ctx.fill();

                ctx.stroke();

        }

    }


    /*==================================================
      SIZE
    ==================================================*/

    private getShapeSize(

        shape: ShapeItem,

        baseSize: number

    ): number {

        switch (shape.size) {

            case "small":

                return baseSize * 0.75;

            case "large":

                return baseSize * 1.30;

            default:

                return baseSize;

        }

    }


    /*==================================================
      BASIC SHAPES
    ==================================================*/

    private drawCircle(

        ctx: CanvasRenderingContext2D,

        r: number

    ): void {

        ctx.arc(

            0,

            0,

            r,

            0,

            Math.PI * 2

        );

    }


    private drawSquare(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.rect(

            -s,

            -s,

            s * 2,

            s * 2

        );

    }


    private drawRectangle(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.rect(

            -s * 1.4,

            -s * 0.8,

            s * 2.8,

            s * 1.6

        );

    }


    private drawTriangle(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.moveTo(

            0,

            -s

        );

        ctx.lineTo(

            s,

            s

        );

        ctx.lineTo(

            -s,

            s

        );

        ctx.closePath();

    }


    private drawDiamond(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.moveTo(

            0,

            -s

        );

        ctx.lineTo(

            s,

            0

        );

        ctx.lineTo(

            0,

            s

        );

        ctx.lineTo(

            -s,

            0

        );

        ctx.closePath();

    }


    private drawPolygon(

        ctx: CanvasRenderingContext2D,

        radius: number,

        sides: number

    ): void {

        for (

            let i = 0;

            i < sides;

            i++

        ) {

            const angle =

                (Math.PI * 2 * i) /

                sides -

                Math.PI / 2;

            const x =

                Math.cos(angle) *

                radius;

            const y =

                Math.sin(angle) *

                radius;

            if (i === 0) {

                ctx.moveTo(

                    x,

                    y

                );

            } else {

                ctx.lineTo(

                    x,

                    y

                );

            }

        }

        ctx.closePath();

    }


    private drawStar(

        ctx: CanvasRenderingContext2D,

        radius: number

    ): void {

        const inner = radius * 0.45;

        for (

            let i = 0;

            i < 10;

            i++

        ) {

            const r =

                i % 2 === 0

                    ? radius

                    : inner;

            const angle =

                i *

                Math.PI /

                5 -

                Math.PI / 2;

            const x =

                Math.cos(angle) *

                r;

            const y =

                Math.sin(angle) *

                r;

            if (i === 0) {

                ctx.moveTo(

                    x,

                    y

                );

            } else {

                ctx.lineTo(

                    x,

                    y

                );

            }

        }

        ctx.closePath();

    }
        /*==================================================
      CROSS
    ==================================================*/

    private drawCross(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        const arm = s * 0.35;

        ctx.rect(

            -arm,

            -s,

            arm * 2,

            s * 2

        );

        ctx.rect(

            -s,

            -arm,

            s * 2,

            arm * 2

        );

    }


    /*==================================================
      ARROW
    ==================================================*/

    private drawArrow(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.moveTo(

            -s,

            -s * 0.35

        );

        ctx.lineTo(

            0,

            -s * 0.35

        );

        ctx.lineTo(

            0,

            -s

        );

        ctx.lineTo(

            s,

            0

        );

        ctx.lineTo(

            0,

            s

        );

        ctx.lineTo(

            0,

            s * 0.35

        );

        ctx.lineTo(

            -s,

            s * 0.35

        );

        ctx.closePath();

    }


    /*==================================================
      HEART
    ==================================================*/

    private drawHeart(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.moveTo(

            0,

            s

        );

        ctx.bezierCurveTo(

            -s,

            s * 0.25,

            -s,

            -s * 0.60,

            0,

            -s * 0.20

        );

        ctx.bezierCurveTo(

            s,

            -s * 0.60,

            s,

            s * 0.25,

            0,

            s

        );

    }


    /*==================================================
      OVAL
    ==================================================*/

    private drawOval(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.ellipse(

            0,

            0,

            s * 1.4,

            s,

            0,

            0,

            Math.PI * 2

        );

    }


    /*==================================================
      LINE
    ==================================================*/

    private drawLine(

        ctx: CanvasRenderingContext2D,

        s: number

    ): void {

        ctx.moveTo(

            -s,

            0

        );

        ctx.lineTo(

            s,

            0

        );

    }


    /*==================================================
      STRIPED FILL
    ==================================================*/

    private drawStripes(

        ctx: CanvasRenderingContext2D

    ): void {

        ctx.save();

        ctx.clip();

        ctx.strokeStyle =

            "rgba(255,255,255,0.75)";

        ctx.lineWidth = 1;

        for (

            let i = -100;

            i <= 100;

            i += 8

        ) {

            ctx.beginPath();

            ctx.moveTo(

                i,

                -100

            );

            ctx.lineTo(

                i + 100,

                100

            );

            ctx.stroke();

        }

        ctx.restore();

    }


    /*==================================================
      DOTTED FILL
    ==================================================*/

    private drawDots(

        ctx: CanvasRenderingContext2D

    ): void {

        ctx.save();

        ctx.clip();

        ctx.fillStyle =

            "rgba(255,255,255,0.80)";

        for (

            let x = -40;

            x <= 40;

            x += 8

        ) {

            for (

                let y = -40;

                y <= 40;

                y += 8

            ) {

                ctx.beginPath();

                ctx.arc(

                    x,

                    y,

                    1.2,

                    0,

                    Math.PI * 2

                );

                ctx.fill();

            }

        }

        ctx.restore();

    }

}