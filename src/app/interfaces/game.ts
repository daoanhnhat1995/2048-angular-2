import { ITile } from './tile';
export interface IGame {
    currentScore: number;
    bestScore: number;
    isGameOver: boolean;
    isWinner: boolean;
    tiles: ITile[];
}