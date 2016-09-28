import { Component } from '@angular/core';
import { GameService } from './services/game.service';
@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [GameService]
})

export class AppComponent { 
	constructor(public game: GameService) {
		this.createNewGame();
	}

	public createNewGame(): void {
		console.log("Starting new game....!");
		this.game.newGame();
	}

}