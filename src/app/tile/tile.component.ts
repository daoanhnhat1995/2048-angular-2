import {
	Component,
	Input,
	OnInit,
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/core';
import { Tile } from '../tile';
import {GameControllerService} from '../services/gamecontroller.service';

@Component({
	selector: 'tile',
	templateUrl: 'tile.component.html',
	styleUrls: ['tile.component.css'],
	animations: [
		trigger('movementSlides', 
		GameControllerService.makeAnimations()
		),
		trigger('enterAnimation', [
			state('in', style({ transform: 'scale(1,1)' })),
			transition('void => *', [
				style({ transform: 'scale(0,0)' }),
				animate(300)
			])
		]),
	]
})
export class TileComponent implements OnInit {
	@Input() tile: Tile;
	fontSize: string = "ja";

	constructor() {
	}
	ngOnInit() {
		if (this.tile.val.toString().length < 3) {
			this.fontSize = "55px";
		}
		else if (this.tile.val.toString().length == 3) {
			this.fontSize = "45px"
		}
		else if (this.tile.val.toString().length == 4) {
			this.fontSize = "35px"
		}
	}
}
