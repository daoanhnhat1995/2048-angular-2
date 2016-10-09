/// <reference path="../../typings/globals/jquery/index.d.ts" />
export class Tile {
    x: number;
    y: number;
    color: string;
    newVal: number;
    newFromPos: number;
    newToPos: number;
    val: number;
    animatedState: string;

    constructor(X: number, Y: number, Val: number) {
        this.x = X, this.y = Y, this.val = Val;
        this.setColor();
    }
    public setColor(): Tile {
        this.color = this.val != null ? "tile-" + this.val : "empty-tile";
        return this;
    }

    public setAnimation(fromTileLoc: number, toTileLoc: number): Tile {
        let scalar = 115;

        let from_x = Math.floor(fromTileLoc / 4);
        let from_y = fromTileLoc % 4;

        let to_x = Math.floor(toTileLoc / 4);
        let to_y = toTileLoc % 4;

        let toTile = document.getElementById(to_x + '_' + to_y);
        let fromTile = document.getElementById(from_x + '_' + from_y);
        console.log(toTile, fromTile);

        $(toTile).css('z-index' , '10');

        //vector diff
        let diff_x = to_x - from_x;
        let diff_y = to_y - from_y;

        //determine tile direction
        // let direction;
        // if (diff_x != 0) {
        //     direction = 'top';
        // }
        // else if (diff_y != 0) {
        //     direction = 'left';
        // }

        // let moveTile = {};
        // moveTile[direction] = ((diff_x || diff_y) * scalar) + 'px';

        // $(toTile).delay(125).animate({ 'scale': .7 }, 0, function () {
        //     $(toTile).animate({ 'scale': 1 }, { duration: 125 })
        // });
        // $(fromTile).animate(moveTile, 250);
        this.animatedState = 'tile' + diff_x + diff_y;
        this.newFromPos = fromTileLoc;
        this.newToPos = toTileLoc;
        return this;
    }

    public setVal(newVal: number): Tile {
        this.val = newVal;
        this.setColor();
        return this;
    }

     public setNewVal(newVal: number): Tile {
        this.newVal = newVal;
        return this;
    }

}