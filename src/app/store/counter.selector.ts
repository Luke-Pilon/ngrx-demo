import { createSelector } from "@ngrx/store";

//Selectors define the format that data can be received from the reducer
//Helps keep code clean in components 
export const selectCount = (state: {counter: number}) => state.counter;
export const selectDoubleCount = createSelector(
    selectCount,
    (state: number) => state * 2
)