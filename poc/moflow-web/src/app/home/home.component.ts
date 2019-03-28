import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';
import { MoFlowItem } from '../model/mo-flow-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  groupsData: Array<MoFlowItem> = [{
    id: 1,
    style: '',
    items: [
      {
        data: {title: 'Bronze age'}
      },
      {
        data: {title: 'Iron age'}
      },
      {
        data: {title: 'Middle ages'}
      },
      {
        data: {title: 'Early modern period'}
      },
      {
        data: {title: 'Long nineteenth century'}
      }]
  }, {
    id: 2,
    style: '',
    items: [{
      type: 'card',
      item: 'aff',
      data: {
        title: 'hello',
        content: 'content'
      }
    }, {
      type: 'card',
      value: '',
      data: {
        title: 'hello',
        content: 'content'
      }
    }]
  }];

  constructor() {
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

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    let hasWidthHeight = event.rectangle.width && event.rectangle.height;
    if (hasWidthHeight && (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX)) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent, group): void {
    group.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
}
