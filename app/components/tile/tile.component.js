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
var tile_1 = require('../../models/tile');
var TileComponent = (function () {
    function TileComponent() {
        this.fontSize = "ja";
    }
    TileComponent.prototype.ngOnInit = function () {
        if (this.tile.val.toString().length < 3) {
            this.fontSize = "55px";
        }
        else if (this.tile.val.toString().length == 3) {
            this.fontSize = "45px";
        }
        else if (this.tile.val.toString().length == 4) {
            this.fontSize = "35px";
        }
    };
    TileComponent.prototype.toggleState = function () {
        if (this.shown != "tile21")
            this.shown = "tile21";
        else
            this.shown = "tile31";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tile_1.Tile)
    ], TileComponent.prototype, "tile", void 0);
    TileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Tile',
            templateUrl: 'tile.component.html',
            styleUrls: ['tile.component.css'],
            animations: [
                core_1.trigger('movementSlides', [
                    core_1.state('tile10', core_1.style({ top: 0, left: 115 })),
                    core_1.state('tile21', core_1.style({ top: 115, left: 230 })),
                    core_1.state('tile31', core_1.style({ top: 115, left: 345 })),
                    core_1.transition('* => *', core_1.animate('.25s'))
                ]),
                core_1.trigger('enterAnimation', [
                    core_1.state('in', core_1.style({ transform: 'scale(1,1)' })),
                    core_1.transition('void => *', [
                        core_1.style({ transform: 'scale(0,0)' }),
                        core_1.animate(300)
                    ])
                ]),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TileComponent);
    return TileComponent;
}());
exports.TileComponent = TileComponent;
//# sourceMappingURL=tile.component.js.map