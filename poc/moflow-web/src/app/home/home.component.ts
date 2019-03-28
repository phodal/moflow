import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  verticalLayoutItem = [
    'hello',
    'second'
  ];

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  dropVerticalLayout(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  dropBasicItem(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.verticalLayoutItem, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit() {

  }

}
