import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { GridService } from './grid.service';
import { ITile } from './../interfaces/ITile';
import { IGame } from './../interfaces/IGame';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
	public tiles: Observable<ITile[]>;
	public currentScore: Observable<number>;
	public bestScore: Observable<number>;

	constructor(
		private _gService: GridService,
		private _store: Store<any>
		) {
		this._loadGame();
	}
	private _loadGame(): void {
		
		const store$ = this._store.select<IGame>('game');
		this.currentScore = store$.map(({currentScore}: IGame) => currentScore);
		this.bestScore = store$.map(({bestScore} : IGame) => bestScore );
		this.tiles = store$.map(({tiles}: IGame) => tiles);
	}

	public newGame(): void {
		this._gService.buildEmptyBoard();
		this._store.dispatch({type: 'NEW_GAME', payload: {tiles : this._gService.tiles}});
	}
	buildSample(): void {
		this._gService.buildSampleBoard();
	}
	setVal(){
		let x : number = Math.floor(Math.random()*4) + 1;
		let y : number = Math.floor(Math.random()*4) + 1;
		console.log(x,y);
		const emptyList = this._gService.emptyCells();
		if (emptyList.length != 0){
			const randIndex : number = Math.floor(Math.random()*emptyList.length);
			const randTile : ITile = emptyList[randIndex]; 
			this._gService.setTileAt(randTile.x,randTile.y,2);
			this.updateScore(2);
		} else {
			//throw new Error("Board is full, u lose");
		}
		
	}
	updateScore(newVal : number){
		this._store.dispatch({type: 'UPDATE_SCORE', payload: { newVal: 2 }});
	}

}
