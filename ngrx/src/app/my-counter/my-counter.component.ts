import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  imports: [AsyncPipe],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css'
})
export class MyCounterComponent {
  count$: Observable<number> | undefined;

  constructor() {

  }

  increment() {

  }

  decrement() {

  }

  reset() {

  }

}
