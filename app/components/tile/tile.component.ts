import {
	constructDependencies
} from 'c:/Users/madthad91/My Software/Projects/2048-angular-2/node_modules/@angular/core/src/di/reflective_provider';
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
import { Tile } from '../../models/tile';

@Component({
	moduleId: module.id,
	selector: 'Tile',
	templateUrl: 'tile.component.html',
	styleUrls: ['tile.component.css'],
	animations: [
     trigger('visibilityChanged', [
       state('shown' , style({ opacity: 1 })),
       state('hidden', style({ opacity: 0 })),
       transition('* => *', animate('3s'))
     ])
   ]
})

export class TileComponent implements OnInit {
	@Input() tile: Tile;
	fontSize: string = "ja";
	shown: string = "shown";

	constructor() {
		this.shown = "hai";
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

	toggleState(): void {
		if (this.shown != "shown")
			this.shown = "shown";
		else
			this.shown = "hidden"
	}
}
