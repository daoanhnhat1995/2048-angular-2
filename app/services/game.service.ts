import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameService {
	public currentScore: Observable<number>;
	public bestScore: Observable<number>;
	public isGameOver: Observable<boolean>;
	public isWinner: Observable<boolean>;

	constructor() { }

	newGame(): void {
		console.log("new Game " + this.dummy);
	}
}
