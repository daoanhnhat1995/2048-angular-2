"use strict";
var Tile = (function () {
    function Tile(X, Y, Val) {
        this.x = X, this.y = Y, this.val = Val;
        this.setColor();
    }
    Tile.prototype.setColor = function () {
        this.color = this.val != null ? "tile-" + this.val : "empty-tile";
    };
    Tile.prototype.setAnimation = function () {
        this.animatedState = 'tile12';
    };
    Tile.prototype.setVal = function (newVal) {
        this.val = newVal;
        this.setColor(); // match color with new value;
        this.setAnimation();
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map