import { IPosition } from './interfaces';

export const VECTORS = {
    LEFT: <IPosition>{ x: -1, y: 0},
    RIGHT: <IPosition>{x: 1, y: 0},
    UP: <IPosition>{x:0, y: -1},
    DOWN: <IPosition>{x: 0, y: 1}
};

export const ADD_SCORE = "ADD_SCORE";
export const NEW_GAME = "NEW_GAME";
export const SET_VALUE = "SET_VALUE";
export const UPDATE_SCORE = "UPDATE_SCORE";