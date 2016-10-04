import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GridService } from './grid.service';
import { Tile } from '../models/tile';
@Injectable()
export class GameService {
	//public currentScore: Observable<number>;
	//public bestScore: Observable<number>;
	//public isGameOver: Observable<boolean>;
	//spublic isWinner: Observable<boolean>;
	public tiles: Tile[];
	public currentScore: number;
	public bestScore: number;

	constructor(private gService: GridService) {
		this.newGame();
	}

	newGame(): void {
		this.currentScore = 0;
		this.bestScore = 100;
		this.gService.buildEmptyBoard();
		this.tiles = this.gService.tiles;
	}
	buildSample(): void {
		this.gService.buildSampleBoard();
		this.tiles = this.gService.tiles;
	}
	setVal(){
		let x : number = Math.floor(Math.random()*4) + 1;
		let y : number = Math.floor(Math.random()*4) + 1;
		console.log(x,y);
		const emptyList = this.gService.emptyCells();
		if (emptyList.length != 0){
			const randIndex : number = Math.floor(Math.random()*emptyList.length);
			const randTile : Tile = emptyList[randIndex]; 
			this.gService.setTileAt(randTile.x,randTile.y,2);
			this.updateScore(2);
		} else {
			//throw new Error("Board is full, u lose");
		}
		
	}
	updateScore(newVal : number){
		this.currentScore += newVal;
		this.bestScore = Math.max(this.currentScore, this.bestScore);
	}

}
