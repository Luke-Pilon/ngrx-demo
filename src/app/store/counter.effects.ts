//Effects are for anything that is not directly related to updating the UI
//HTTP requests, accessing localStorage, logging, etc

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, set } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selector";
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {
    loadCount = createEffect(() => this.actions$.pipe(
        ofType(init),
        switchMap(() => {
            const storedCounter = localStorage.getItem('count')
            if(storedCounter){
                return of(set({value: +storedCounter}))
            }
            return of(set({value:0}))
        })
    ))
    
    saveCount = createEffect(() => this.actions$.pipe(
        //Filter action types 
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        //Could trigger other actions here, for example to send an http request
        tap(([action, counter]) => {
            localStorage.setItem('count', counter.toString())
        })
    ), { dispatch: false });



    constructor(private actions$: Actions, private store: Store<{counter: number}>) {

    }
}