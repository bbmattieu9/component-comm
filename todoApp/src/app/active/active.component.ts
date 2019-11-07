import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {

  activeList = ['Pray', 'Read', 'Work'];
  @Input() completedList;

  constructor() { }

  ngOnInit() {
  }

  onDelete(i) {
    this.activeList.splice(i, 1);
  }

  onCheckOff(itemIndex) {
    let removedItem = this.activeList.splice(itemIndex, 1);
    this.completedList.push(removedItem);
  }

}
