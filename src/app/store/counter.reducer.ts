import { createReducer, on } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";

//Reducers are responsible for storing values

//Sets the initial value of the reducer
const initialState: number = 0;

//Define how reducer should change its value in response to actions
export const counterReducer = createReducer(
    initialState,
    on(increment, (state,action) => state + action.value),
    on(decrement, (state,action) => state - action.value),
    on(set, (state,action) => action.value)
)