import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Components
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
		AppComponent,
		GridComponent
	],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
