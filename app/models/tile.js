"use strict";
var Tile = (function () {
    function Tile(X, Y, Val) {
        this.x = X, this.y = Y, this.val = Val;
        this.setColor();
    }
    Tile.prototype.setColor = function () {
        this.color = this.val != null ? "tile-" + this.val : "empty-tile";
    };
    Tile.prototype.setVal = function (newVal) {
        this.val = newVal;
        this.setColor(); // match color with new value;
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map