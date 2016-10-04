import { Injectable } from "@angular/core";

@Injectable()
export class GameControllerService {
    constructor() {
    }

    public static attachController(): void {
        document.addEventListener("keydown", this.processKeyPress);
    }

    public static detachController(): void {
        document.removeEventListener("keydown", this.processKeyPress);
    }

    private static processKeyPress(evt: KeyboardEvent): void {
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

    }
}

//GameControllerHelper
class h {

    public static processLeftArrow(): void {
        alert("left was clicked");
    }

    public static processUpArrow(): void {
        alert("up was clicked");
    }

    public static processRightArrow(): void {
        alert("right was clicked");
    }

    public static processDownArrow(): void {
        alert("down was clicked");
    }
}
