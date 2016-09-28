import { Component, Input, OnInit } from '@angular/core';
import { Tile } from './tile';

@Component({
	moduleId: module.id,
	selector: 'Tile',
	templateUrl: 'tile.component.html',
	styleUrls: ['tile.component.css']
})

export class TileComponent implements OnInit{ 
	@Input() tile:Tile;
	fontSize:string="ja";

	ngOnInit(){
		if(this.tile.val.toString().length < 3){
			this.fontSize = "55px";
		}
		else if(this.tile.val.toString().length == 3){
			this.fontSize = "45px"
		}
		else if(this.tile.val.toString().length == 4){
			this.fontSize = "35px"
		}
	}
}
