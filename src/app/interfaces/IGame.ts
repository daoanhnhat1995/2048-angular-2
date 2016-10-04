import { ITile } from './ITile';
export interface IGame {
    currentScore: number;
    bestScore: number;
    isGameOver: boolean;
    isWinner: boolean;
    tiles: ITile[];
}