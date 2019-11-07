import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  completedList =  ['Gym', 'Cook', 'Scrub Feet'];
  @Output() completed = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
    this.completed.emit(this.completedList);
  }

}
