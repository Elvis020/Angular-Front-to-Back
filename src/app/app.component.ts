import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CorrectLoady = 'recipe';


  Navigator(Loady: string) {
    this.CorrectLoady = Loady;

  }
}
