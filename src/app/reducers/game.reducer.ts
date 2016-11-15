import { Action, ActionReducer } from '@ngrx/store';
import { IGame, ITile } from './../interfaces';

let initialState: IGame ={
  currentScore: 0,
  bestScore: parseInt(localStorage.getItem('highScore')) || 0,
  isWinner: false,
  isGameOver: false,
  tiles: []
};

let addScore = (state: IGame, score: number): IGame => {
    return Object.assign({}, state, {
        currentScore: state.currentScore + score,
        bestScore: Math.max(state.currentScore + score,state.bestScore)
    });
};


let newGame = (state: IGame, newTiles: ITile[]): IGame =>{
    return Object.assign({}, state, { 
        tiles: newTiles, 
        bestScore: Math.max(state.bestScore, state.currentScore),
        currentScore: 0
    });
};
let updateScore = (state: IGame, newVal: number): IGame => {
    let newScore: number = newVal + state.currentScore;
    return Object.assign({}, state, { currentScore: newScore});
};
let updateValue = (state: IGame, newTiles: ITile[]): IGame => {
    console.log(state.tiles)
    console.log('inside updateValue reducer', newTiles, state);
    return Object.assign({}, state, { tiles: newTiles, 
        bestScore: state.bestScore,
        currentScore: state.currentScore});
};
export const gameReducer: ActionReducer<any> = (state = initialState, action: Action) => {
    console.log(state , action)
   switch(action.type){
       case 'NEW_GAME':
            return newGame(state, action.payload.tiles);
       case 'UPDATE_SCORE':
            return updateScore(state,action.payload.newVal);
       case 'ADD_SCORE':
            return addScore(state,action.payload.score);
       case 'SET_VALUE':
            return updateValue(state, action.payload.tiles);
        default:
            return state;

   }
}
