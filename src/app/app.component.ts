import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { GridService } from './services/grid.service';
import { DIRECTIONS } from './enums/directions';
@Component({
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	providers: [GridService, GameService ],
	host: {
        '(window:keydown)': 'handleKeyboardEvents($event)'
    }
})

export class AppComponent { 
	constructor(public game: GameService) {
		this.createNewGame();
	}

	createNewGame(): void {
		console.log("Starting new game....!");
		this.game.newGame();
	}

	handleKeyboardEvents(event: KeyboardEvent) {
        let key = event.which || event.keyCode;
		if (key){
			event.preventDefault();
			this.game.merge(DIRECTIONS[key]);
		}
    }
	
}