import {
    Injectable,
    AnimationMetadata,
    trigger,
    state, 
    style, 
    transition, 
    animate
} from '@angular/core';

@Injectable()
export class GameControllerService {

    public static makeAnimations(): Array<AnimationMetadata> {
        let list: Array<AnimationMetadata> = [];

        for(var i = 0; i < 3; i++){
                for(var j = 0; j < 3; j++){
                    list.push(
                            state(
                                'tile'+ i.toString() + j.toString(),
                                style({ top: i * 115, left: j * 115 })
                                )
                         );
                }
            }
        // = [
        //     state('tile10', style({ top: 0, left: 115 })),
        //     state('tile21', style({ top: 115, left: 230 })),
        //     state('tile31', style({ top: 115, left: 345 })),
        //     transition('* => *', animate('.25s'))
        // ];
        // list.push(transition('* => pop', animate('.25s')));
        list.push(transition('* => *', animate('2s')));
        return list;
    }

    public static attachController(): void {
        document.addEventListener('keydown', this.processKeyPress);
    }

    public static detachController(): void {
        document.removeEventListener('keydown', this.processKeyPress);
    }

    private static processKeyPress(evt: KeyboardEvent): void {
        switch (evt.keyCode) {
            case 37:
                H.processLeftArrow();
                break;
            case 38:
                H.processUpArrow();
                break;
            case 39:
                H.processRightArrow();
                break;
            case 40:
                H.processDownArrow();
                break;
        }

    }

    constructor() {
    }
}

// GameControllerHelper
class H {

    public static processLeftArrow(): void {
        alert('left was clicked');
    }

    public static processUpArrow(): void {
        alert('up was clicked');
    }

    public static processRightArrow(): void {
        alert('right was clicked');
    }

    public static processDownArrow(): void {
        alert('down was clicked');
    }
}
