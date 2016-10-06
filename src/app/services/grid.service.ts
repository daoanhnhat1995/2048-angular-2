import { Injectable } from "@angular/core";
import { Tile } from './../tile';
@Injectable()
export class GridService {
    public tiles: Tile[];
    public size: number = 4;
    constructor(){
        this.tiles = [];
        this.buildEmptyBoard();
        console.log(this.tiles);
     }
    
    public buildEmptyBoard(): void {
        this.tiles = [];
        for (let i =0; i < this.size; i++){
            for (let j=0; j < this.size; j++){
                this.tiles.push(new Tile(i,j,0)); 
            }
        }
    }

    
    public getEmptyCells(): Tile[]{
        return this.tiles.filter(t => t.val == 0);
    }
    
    private setTileAt(x: number, y: number, newVal: number): void{
        this.tiles[x*this.size + y].setVal(newVal);
    }

    
    
    public initBoard(): void{
        let randPosX: number = Math.floor(Math.random()*16);
        let randPosY: number = Math.floor(Math.random()*16);
        while (randPosY == randPosX){
            randPosY = Math.floor(Math.random()*16);
        }
        this.tiles[randPosX].setVal((Math.floor(Math.random()*2) + 1)*2);
        this.tiles[randPosY].setVal((Math.floor(Math.random()*2) + 1)*2);
    }

    public fillRandom(): void {
        const emptyList = this.getEmptyCells();
        const len = emptyList.length;
        const randPos = Math.floor(Math.random()*len);
        console.log(len);
        this.setTileAt(emptyList[randPos].x,emptyList[randPos].y, 2);
    }


    public moveRight(): void {
        for (let i=0; i < 4; i++){
            const base = i*4;
            let right = base + 3;
            let left = right - 1;
            let merge = right;
            while ( left < right && left >= base){
                while (right >= base && !this.tiles[right].val){
                    right--;
                }
                if ( right < base){
                    break;
                } 

                left = right - 1;
                while ( left >= base && !this.tiles[left].val){
                    left --;
                }
                if ( left < base) {
                    const tmp = this.tiles[right].val;
                    this.tiles[right].setVal(0);
                    this.tiles[merge].setVal(tmp);
                    break;
                }
                const leftVal = this.tiles[left].val;
                const rightVal = this.tiles[right].val;
                if ( leftVal == rightVal ){
                    this.tiles[left].setVal(0);
                    this.tiles[right].setVal(0);
                    this.tiles[merge].setVal(2*leftVal);
                    right = left-1;
                    left = right-1;
                    merge--;
                } else {
                    this.tiles[right].setVal(0);
                    this.tiles[merge].setVal(rightVal);
                    right = left;
                    left = right - 1;
                    merge --;
                }
            }
            
        }
    }
    public moveLeft(): void {
        //Iterate rows
        for (let i=0; i < 4; i++){
            // Iterate columns
            const base = i*4;
            let left = base;
            let right = base + 1;
            let merge = left;
            while ( left < right && right < base + 4){
                while ( left < base + 4 && !this.tiles[left].val){
                    left++;
                }
                if (left == base+4) {
                    break;
                }

                right = left + 1;
                while ( right < base + 4 && !this.tiles[right].val){
                    right ++;
                }
                if ( right == base+4){
                    const tmp = this.tiles[left].val;
                    this.tiles[left].setVal(0);
                    this.tiles[merge].setVal(tmp);
                    break;
                }
                const leftVal = this.tiles[left].val;
                const rightVal = this.tiles[right].val;
                
                if ( leftVal == rightVal ){
                    this.tiles[left].setVal(0);
                    this.tiles[right].setVal(0);
                    this.tiles[merge].setVal( 2 * leftVal);
                    left = right + 1;
                    right = left + 1;
                    merge ++;
                } else {
                    this.tiles[left].setVal(0);
                    this.tiles[merge].setVal(leftVal);
                    left = right;
                    right = left + 1;
                    merge ++;
                }
            }
        }
    }

    

}