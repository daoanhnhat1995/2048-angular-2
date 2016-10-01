import { Injectable } from "@angular/core";
import { Tile } from '../models/tile';
@Injectable()
export class GridService {
    public tiles: Tile[];
    public size: number = 4;
    constructor(){
        this.tiles = [];
        this.buildEmptyBoard();
        console.log(this.tiles);
     }
    /**
     * Init/create new board size 4*4 with null values
     */
    public buildEmptyBoard(): void {
        this.tiles = [];
        for (let i =0; i < this.size; i++){
            for (let j=0; j < this.size; j++){
                this.tiles.push(new Tile(i,j,0)); 
            }
        }
    }

    public buildSampleBoard(): void {
        this.tiles = [];
        for (let i=0; i < this.size; i++){
            for (let j=0; j < this.size; j++){
                this.tiles.push(new Tile(i,j,Math.pow(2,j+1)));
            }
        }
    }
    /**
     *  @return {Array} list of empty cells which need to be filled in
     */
    public emptyCells(): Tile[]{
        return this.tiles.filter(t => t.val == 0);
    }
    /**
     * @return (None) update value of a cell at position with new value
     */
    public setTileAt(x: number, y: number, newVal: number): void{
        this.tiles[x*this.size + y].setVal(newVal);
        this.printBoard();
    }

    /**
     * Check if a position is within grid range;
     */
    private isInGrid(x: number, y: number): boolean{
        return x < this.size && x >= 0 &&
                y < this.size && y >= 0;
    }

    // Test util, print out board values
    public printBoard(): void{
        const vals = this.tiles.map(t => t.val);
        console.log(vals);
    }
    

}