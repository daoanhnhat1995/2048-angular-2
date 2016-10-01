import * as console from 'console';
import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile/tile';
import { GameControllerService } from "../../services/gamecontroller.service"

@Component({
	moduleId: module.id,
	selector: 'Grid',
	templateUrl: 'grid.component.html',
	styleUrls: ['grid.component.css'],
	providers: [GameControllerService]
	
})
export class GridComponent implements OnInit {
	tiles: Tile[];
	childTitle:string = 'This text is passed to child';
	 
	constructor() {

	 }
	// Create empty board
	ngOnInit(): void {
		GameControllerService.attachController();

		this.tiles = [
			{x:0,y:0,color: "tile-2", val: 2},
			{x:0,y:1,color: "tile-2", val: 2},
			{x:0,y:2,color: "tile-4", val: 4},
			{x:0,y:3,color: "tile-512", val: 512},
			{x:1,y:0,color: "tile-512", val: 512},
			{x:1,y:1,color: "tile-512", val: 512},
			{x:1,y:2,color: "tile-512", val: 512},
			{x:1,y:3,color: "tile-512", val: 512},
			{x:2,y:0,color: "tile-512", val: 512},
			{x:2,y:1,color: "tile-512", val: 512},
			{x:2,y:2,color: "tile-512", val: 512},
			{x:2,y:3,color: "tile-512", val: 512},
			{x:3,y:0,color: "tile-512", val: 512},
			{x:3,y:1,color: "tile-512", val: 512},
			{x:3,y:2,color: "tile-512", val: 512},
			{x:3,y:3,color: "tile-512", val: 512},
		];
		
		//this.keyPressHandler.processRightArrow();
	}

	ngOnDestroy() {
        GameControllerService.detachController();
    }
}
