import { Injectable } from "@angular/core";

@Injectable()
export class GridService {
//public tiles: Tile[]; Tile should be just a ts class with coordinate x,y, color, val ...
public size: number;
constructor(gridSize: number) { 
    this.size = gridSize;
   // this.tiles = [];
}
getSize(): number {
    return this.size;
}

createEmptyBoard(): void{

}

}