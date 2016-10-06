import { Action, ActionReducer } from '@ngrx/store';
import { IGame } from './../interfaces/IGame';
import { ITile } from './../interfaces/ITile';

let initialState: IGame ={
  currentScore: 0,
  bestScore: parseInt(localStorage.getItem('highScore')) || 0,
  isWinner: false,
  isGameOver: false,
  tiles: []
};

let newGame = (state: IGame, newTiles: ITile[]) =>{
    return Object.assign({}, state, { 
        tiles: newTiles, 
        bestScore: Math.max(state.bestScore, state.currentScore),
        currentScore: 0
    });
};
let updateScore = (state: IGame, newVal: number) => {
    let newScore: number = newVal + state.currentScore;
    return Object.assign({}, state, { currentScore: newScore});
};
export const gameReducer: ActionReducer<any> = (state = initialState, action: Action) => {
   switch(action.type){
       case 'NEW_GAME':
            return newGame(state, action.payload.tiles);
       case 'UPDATE_SCORE':
            return updateScore(state,action.payload.newVal);
        default:
            return state;

   }
}
