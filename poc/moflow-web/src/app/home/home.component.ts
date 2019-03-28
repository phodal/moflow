import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  verticalLayoutItems = [
    'hello',
    'second'
  ];

  timePeriods = [[
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ], [
    'Bronze age',
    'Early modern period',
    'Long nineteenth century'
  ]];

  constructor() { }

  ngOnInit() {

  }

  dropVerticalLayout(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.verticalLayoutItems, event.previousIndex, event.currentIndex);
  }

  dropBasicItem(event: CdkDragDrop<string[]>, index: number) {
    moveItemInArray(this.timePeriods[index], event.previousIndex, event.currentIndex);
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }
}
