import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Components
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { TileComponent } from './components/tile/tile.component';

// Import Services
import { GameService } from './services/game.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
		AppComponent,
		GridComponent,
		TileComponent
	],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
