import { Component, importProvidersFrom } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyCounterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx';
}
