import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'Tile',
	templateUrl: 'tile.component.html',
	styleUrls: ['tile.component.css']
})

export class TileComponent { 
	@Input() tileColor:string;
}
