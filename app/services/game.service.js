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
var core_1 = require('@angular/core');
var grid_service_1 = require('./grid.service');
var GameService = (function () {
    function GameService(gService) {
        this.gService = gService;
        this.newGame();
    }
    GameService.prototype.newGame = function () {
        this.currentScore = 0;
        this.bestScore = 100;
        this.gService.buildEmptyBoard();
        this.tiles = this.gService.tiles;
    };
    GameService.prototype.buildSample = function () {
        this.gService.buildSampleBoard();
        this.tiles = this.gService.tiles;
    };
    GameService.prototype.setVal = function () {
        var x = Math.floor(Math.random() * 4) + 1;
        var y = Math.floor(Math.random() * 4) + 1;
        console.log(x, y);
        var emptyList = this.gService.emptyCells();
        if (emptyList.length != 0) {
            var randIndex = Math.floor(Math.random() * emptyList.length);
            var randTile = emptyList[randIndex];
            this.gService.setTileAt(randTile.x, randTile.y, 2);
            this.updateScore(2);
        }
        else {
        }
    };
    GameService.prototype.updateScore = function (newVal) {
        this.currentScore += newVal;
        this.bestScore = Math.max(this.currentScore, this.bestScore);
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [grid_service_1.GridService])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map