import * as console from 'console';
import { Component, OnInit, Input,
	trigger,
	state,
	style,
	transition,
	animate } from '@angular/core';
import { Tile } from '../../models/tile';
import { GameControllerService } from "../../services/gamecontroller.service"

@Component({
	moduleId: module.id,
	selector: 'Grid',
	templateUrl: 'grid.component.html',
	styleUrls: ['grid.component.css'],
	providers: [GameControllerService]
	
})
export class GridComponent implements OnInit {
	@Input() tiles:Tile[];

	constructor() { }
	// Create empty board
	ngOnInit(): void {
		GameControllerService.attachController();
	}

	ngOnDestroy() {
        GameControllerService.detachController();
    }
}
