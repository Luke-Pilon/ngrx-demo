import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { CounterService } from '../counter.service';
import { Store } from '@ngrx/store';
import { counterReducer } from '../store/counter.reducer';
import { selectCount, selectDoubleCount } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  imports: [AsyncPipe],
  standalone: true,
})
export class CounterOutputComponent {
  //set up observables whose values will come from the store
  count$: Observable<number>
  doubleCount$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    //subscribe to the observables 
    this.count$ = store.select(selectCount)
    this.doubleCount$ = store.select(selectDoubleCount);
  }
}
