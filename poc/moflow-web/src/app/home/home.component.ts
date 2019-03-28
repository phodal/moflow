import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';
import { HeaderComponent } from '../components/header/header.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  groupsData = [{
    id: 1,
    items: [
      'Bronze age',
      'Iron age',
      'Middle ages',
      'Early modern period',
      'Long nineteenth century'
    ]
  }, {
    id: 2,
    items: [
      'Bronze age',
      'Early modern period',
      'Long nineteenth century'
    ]
  }];
  private componentPortal: ComponentPortal<any>;

  constructor() {
    this.componentPortal = new ComponentPortal(HeaderComponent);
  }

  ngOnInit() {

  }

  dropVerticalLayout(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.groupsData, event.previousIndex, event.currentIndex);
  }

  dropBasicItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
  }
}
