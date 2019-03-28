import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';
import { MoFlowItem } from '../../model/mo-flow-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  elementLists = [{
    type: 'card',
    content: {
      title: 'hello',
      content: 'content'
    }
  }, {
    type: 'content',
    content: {title: 'Bronze age'}
  }, {
    type: 'molist',
    content: {
      title: 'hello',
      styles: {height: '200px'},
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    }
  }];

  groupsData: Array<MoFlowItem> = [
    {
      id: 1,
      style: '',
      blocks: [
        {content: {title: 'Bronze age'}},
        {content: {title: 'Iron age'}},
        {content: {title: 'Middle ages'}},
        {content: {title: 'Early modern period'}}
      ]
    },
    {
      id: 2,
      style: '',
      blocks: [{
        type: 'card',
        content: {
          title: 'hello',
          content: 'content'
        }
      }, {
        type: 'card',
        content: {
          title: 'hello',
          content: 'content'
        }
      }]
    },
    {
      id: 3,
      blocks: [{
        type: 'molist',
        content: {
          title: 'hello',
          styles: {height: '200px'},
          items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        }
      }]
    }];

  constructor() {
  }

  ngOnInit() {

  }

  dropVerticalLayout(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.groupsData, event.previousIndex, event.currentIndex);
    this.showData();
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
    this.showData();
  }

  dropTileItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.showData();
  }

  static validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    let hasWidthHeight = event.rectangle.width && event.rectangle.height;
    return !(hasWidthHeight && (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX));
  }

  onResizeEnd(event: ResizeEvent, group): void {
    group.style = {
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    this.showData();
  }

  showData() {
    console.log(this.groupsData);
  }
}
