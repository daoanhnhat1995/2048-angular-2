import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { gameReducer } from './reducers/game.reducer';
// Import Components
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { TileComponent } from './tile/tile.component';

// Import Services
import { GameService } from './services/game.service';

@NgModule({
  imports: [ 
    BrowserModule,
    StoreModule.provideStore({ game: gameReducer })

  ],
  declarations: [ 
		AppComponent,
    GridComponent,
    TileComponent
	],
  entryComponents: [AppComponent],
  bootstrap: [ AppComponent]
})

export class AppModule { }
