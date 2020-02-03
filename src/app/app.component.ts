import { Component } from '@angular/core';
import { PwaService } from './core/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  constructor(public pwaService: PwaService) {}
}
