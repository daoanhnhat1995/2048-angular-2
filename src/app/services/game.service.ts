import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { GridService } from './grid.service';
import { ITile } from './../interfaces/ITile';
import { IGame } from './../interfaces/IGame';
import { DIRECTIONS } from './../enums/directions';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {
	public tiles: Observable<ITile[]>;
	public currentScore: Observable<number>;
	public bestScore: Observable<number>;
	public isGameOver: Observable<boolean>;

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

	newGame(): void {
		this._gService.buildEmptyBoard();
		this._gService.initBoard();
		this._store.dispatch({type: 'NEW_GAME', payload: {tiles : this._gService.tiles}});
	}
	
	updateScore(newVal : number){
		this._store.dispatch({type: 'UPDATE_SCORE', payload: { newVal: 2 }});
	}
	merge(key: string): void{
		let score = 0;
		if(key == "LEFT"){
			score = this._gService.moveLeft();
		} else if ( key == "RIGHT"){
			score = this._gService.moveRight();
		} else if ( key == "UP"){
			score = this._gService.moveUp();
		} else if ( key == "DOWN"){
			score = this._gService.moveDown();
		} else {

		}
		if (score){
			this._store.dispatch({type: 'ADD_SCORE', payload: {score: score}});
		}
		if (this._gService.getEmptyCells().length){
			this._gService.fillRandom();
		}
	}

	postAnimationTileUpdates(newFromPos: number, newToPos: number, newVal: number): void{
		console.log('before: ',this._gService.tiles, newFromPos, newToPos, newVal)
			this._gService.tiles[newFromPos].setVal(0);
			this._gService.tiles[newToPos].setVal(newVal);
	}

}
