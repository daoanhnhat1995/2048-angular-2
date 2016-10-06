export class Tile {
    x: number;
    y: number;
    color: string;
    val: number;
    animatedState: string;

    constructor(X: number, Y: number, Val: number){
        this.x = X, this.y = Y, this.val = Val;
        this.setColor();
    }
    public setColor(): void{
        this.color = this.val != null ? "tile-"+this.val : "empty-tile"; 
    }

    public setAnimation(): void{
        this.animatedState = 'tile12'; //setting up for animation logic
    }

    public setVal(newVal : number){
        this.val = newVal;
        this.setColor(); // match color with new value;
        this.setAnimation();
    }
    
}