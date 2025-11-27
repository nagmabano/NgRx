import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from "../counter.reducer"
import { decrement, increment, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  imports: [AsyncPipe],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  count$: Observable<number> | undefined;

  constructor(private store: Store<{count: number}>) {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }

}
