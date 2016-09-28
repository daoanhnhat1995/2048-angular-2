import { Component, Input } from '@angular/core';
import { Tile } from './tile';
@Component({
	moduleId: module.id,
	selector: 'Tile',
	templateUrl: 'tile.component.html'
})

export class TileComponent {
	@Input() tile: Tile;
 }
