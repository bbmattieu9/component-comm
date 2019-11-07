import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  @Input() activeList;
  completedList =  ['Gym', 'Cook', 'Scrub Feet'];
  @Output() completed = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
    this.completed.emit(this.completedList);
  }


  onAdd(i) {
    let removedItem = this.completedList.splice(i, 1);
    this.activeList.push(removedItem);
  }

  onDelete(i) {
    this.completedList.splice(i, 1);
   }

}
