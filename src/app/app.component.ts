import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Euroscoreboard Official Website';
  _currentYear: number;
  get currentYear(): number {
    this._currentYear = (new Date(Date.now())).getFullYear();
    return this._currentYear;
  }

}
