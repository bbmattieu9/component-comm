import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  completed = 'data from parent component';

  onCompleted(item) {
    this.completed = item;
  }
}
