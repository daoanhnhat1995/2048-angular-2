import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { GridService } from './services/grid.service';
@Component({
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [GridService, GameService ]
})

export class AppComponent { 
	constructor(private game: GameService) {
		this.createNewGame();
	}

	public createNewGame(): void {
		console.log("Starting new game....!");
		this.game.newGame();
	}
	public insertRandomValue(): void {
		console.log("Clicked");
		this.game.setVal();
	}
	public createSampleBoard(): void {
		this.game.buildSample();
	}
	
	
}