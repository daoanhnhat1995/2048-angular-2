"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var tile_1 = require('../models/tile');
var GridService = (function () {
    function GridService() {
        this.size = 4;
        this.tiles = [];
        this.buildEmptyBoard();
        console.log(this.tiles);
    }
    /**
     * Init/create new board size 4*4 with null values
     */
    GridService.prototype.buildEmptyBoard = function () {
        this.tiles = [];
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.tiles.push(new tile_1.Tile(i, j, 0));
            }
        }
    };
    GridService.prototype.buildSampleBoard = function () {
        this.tiles = [];
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.tiles.push(new tile_1.Tile(i, j, Math.pow(2, j + 1)));
            }
        }
    };
    /**
     *  @return {Array} list of empty cells which need to be filled in
     */
    GridService.prototype.emptyCells = function () {
        return this.tiles.filter(function (t) { return t.val == 0; });
    };
    /**
     * @return (None) update value of a cell at position with new value
     */
    GridService.prototype.setTileAt = function (x, y, newVal) {
        this.tiles[x * this.size + y].setVal(newVal);
        this.printBoard();
    };
    /**
     * Check if a position is within grid range;
     */
    GridService.prototype.isInGrid = function (x, y) {
        return x < this.size && x >= 0 &&
            y < this.size && y >= 0;
    };
    // Test util, print out board values
    GridService.prototype.printBoard = function () {
        var vals = this.tiles.map(function (t) { return t.val; });
        console.log(vals);
    };
    GridService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GridService);
    return GridService;
}());
exports.GridService = GridService;
//# sourceMappingURL=grid.service.js.map