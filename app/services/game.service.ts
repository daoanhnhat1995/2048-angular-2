import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Game } from '../game';

@Injectable()
export class GameService {
	//public currentScore: Observable<number>;
	//public bestScore: Observable<number>;
	//public isGameOver: Observable<boolean>;
	//spublic isWinner: Observable<boolean>;
	private game: Game;
	constructor() { }

	newGame(): void {
		if (this.game === undefined){
			this.game = new Game(100,0);
		} else {
			this.game.currentScore = this.game.currentScore +  10;
		}
		
	}
	getCurrentGame(): Game {
		return this.game;
	}

}
