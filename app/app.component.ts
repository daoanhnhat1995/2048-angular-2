import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { Game } from './game';

@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [GameService]
})

export class AppComponent { 
	public currentGame: Game;
	constructor(private game: GameService) {
		this.createNewGame();
	}

	public createNewGame(): void {
		console.log("Starting new game....!");
		this.game.newGame();
		this.currentGame = this.game.getCurrentGame();
	}
	
	
}