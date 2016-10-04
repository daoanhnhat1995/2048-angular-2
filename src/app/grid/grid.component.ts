import * as console from 'console';
import { Component, OnInit, Input,
	trigger,
	state,
	style,
	transition,
	animate } from '@angular/core';
	import { Tile } from './../tile';
	import { GameControllerService } from "../services/gamecontroller.service"

	@Component({
		selector: 'grid',
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
