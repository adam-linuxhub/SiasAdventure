/*==================================================
  SIA'S ADVENTURE
  NON-VERBAL REASONING

  CORE TYPES

==================================================*/

/*==================================================
  ENUM TYPES
==================================================*/

export type ShapeType =
    | "arrow"
    | "circle"
    | "cross"
    | "diamond"
    | "heart"
    | "hexagon"
    | "line"
    | "octagon"
    | "oval"
    | "pentagon"
    | "rectangle"
    | "square"
    | "star"
    | "triangle";

export type ColourType =
    | "black"
    | "blue"
    | "brown"
    | "green"
    | "grey"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "white"
    | "yellow";

export type FillType =
    | "solid"
    | "outline"
    | "striped"
    | "dotted";

export type SizeType =
    | "small"
    | "medium"
    | "large";

export type StageType =
    | "recognise"
    | "understand"
    | "master";


/*==================================================
  SHAPE
==================================================*/

export interface ShapeItem {

    shape: ShapeType;

    colour: ColourType;

    fill: FillType;

    size?: SizeType;

    rotation?: number;

    flippedX?: boolean;

    flippedY?: boolean;

}


/*==================================================
  CELL
==================================================*/

export interface NvrCell {

    shapes: ShapeItem[];

}

export type NvrRow = NvrCell[];


/*==================================================
  ANSWER
==================================================*/

export interface NvrAnswer {

    row: number;

    column: number;

}


/*==================================================
  QUESTION
==================================================*/

export interface NvrQuestion {

    id: string;

    skillId: string;

    stage: StageType;

    difficulty: 1 | 2 | 3 | 4 | 5;

    question: string;

    hint: string;

    figures: NvrRow[];

    answer: NvrAnswer;

    /**
     * The reasoning rule.
     * Example:
     * "All figures are outlined blue circles."
     */
    rule?: string;

    explanation: string;

    tags: string[];

}


/*==================================================
  SHAPE CONSTANTS

  Gives autocomplete and avoids typos.
==================================================*/

export const Shapes = {

    arrow: "arrow",
    circle: "circle",
    cross: "cross",
    diamond: "diamond",
    heart: "heart",
    hexagon: "hexagon",
    line: "line",
    octagon: "octagon",
    oval: "oval",
    pentagon: "pentagon",
    rectangle: "rectangle",
    square: "square",
    star: "star",
    triangle: "triangle"

} as const;


/*==================================================
  COLOURS
==================================================*/

export const Colours = {

    black: "black",
    blue: "blue",
    brown: "brown",
    green: "green",
    grey: "grey",
    orange: "orange",
    pink: "pink",
    purple: "purple",
    red: "red",
    white: "white",
    yellow: "yellow"

} as const;


/*==================================================
  FILLS
==================================================*/

export const Fills = {

    solid: "solid",
    outline: "outline",
    striped: "striped",
    dotted: "dotted"

} as const;


/*==================================================
  SIZES
==================================================*/

export const Sizes = {

    small: "small",
    medium: "medium",
    large: "large"

} as const;


/*==================================================
  STAGES
==================================================*/

export const Stages = {

    recognise: "recognise",
    understand: "understand",
    master: "master"

} as const;