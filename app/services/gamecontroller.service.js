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
var GameControllerService = (function () {
    function GameControllerService() {
    }
    GameControllerService.attachController = function () {
        document.addEventListener("keydown", this.processKeyPress);
    };
    GameControllerService.detachController = function () {
        document.removeEventListener("keydown", this.processKeyPress);
    };
    GameControllerService.processKeyPress = function (evt) {
        switch (evt.keyCode) {
            case 37:
                h.processLeftArrow();
                break;
            case 38:
                h.processUpArrow();
                break;
            case 39:
                h.processRightArrow();
                break;
            case 40:
                h.processDownArrow();
                break;
        }
    };
    GameControllerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameControllerService);
    return GameControllerService;
}());
exports.GameControllerService = GameControllerService;
//GameControllerHelper
var h = (function () {
    function h() {
    }
    h.processLeftArrow = function () {
        alert("left was clicked");
    };
    h.processUpArrow = function () {
        alert("up was clicked");
    };
    h.processRightArrow = function () {
        alert("right was clicked");
    };
    h.processDownArrow = function () {
        alert("down was clicked");
    };
    return h;
}());
//# sourceMappingURL=gamecontroller.service.js.map