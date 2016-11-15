/// <reference path="../../typings/globals/jquery/index.d.ts" />
import { GridService } from './services/grid.service';

export class Tile {
    x: number;
    y: number;
    color: string;
    val: number;


    constructor(X: number, Y: number, Val: number) {
        this.x = X, this.y = Y, this.val = Val;
        this.setColor();
    }
    public setColor(): Tile {
        this.color = this.val != null ? "tile-" + this.val : "empty-tile";
        return this;
    }


    public setVal(newVal: number): Tile {
        this.val = newVal;
        this.setColor();
        return this;
    }


}