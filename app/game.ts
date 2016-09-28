export class Game {
    public bestScore: number;
    public currentScore: number;
    constructor(bScore: number, cScore :number){
        this.bestScore = bScore;
        this.currentScore = cScore;
    }
}