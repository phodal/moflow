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
  layoutLists = [{
    type: 'card',
    content: {
      title: 'hello',
      content: 'content'
    }
  }]

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
  private forkElementsList:any;

  constructor() {
  }

  ngOnInit() {
    this.forkElementsList = JSON.parse(JSON.stringify(this.elementLists));
  }

  dropVerticalLayout(event: CdkDragDrop<string[]>) {
    if (event.previousContainer.id === 'source-element-list') {
      return;
    }

    if (event.previousContainer.id === 'source-layout-list') {
      this.transferElementItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      this.mergeNormalEvent(event);
    }
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

  private mergeNormalEvent(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
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

  transferElementItem<T = any>(currentArray: T[],
                               targetArray: T[],
                               currentIndex: number,
                               targetIndex: number): void {
    const from = this.clamp(currentIndex, currentArray.length - 1);
    const to = this.clamp(targetIndex, targetArray.length);

    if (currentArray.length) {
      let forked = JSON.parse(JSON.stringify(currentArray));
      let message = forked.splice(from, 1);
      targetArray.splice(to, 0, this.buildLayout(message));
    }
  }

  private buildLayout(message): any {
    return {
      id: this.elementLists.length + 1,
      blocks: []
    };
  }

  clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
  }

  showData() {
    console.log(this.groupsData);
  }

  getConnectedItem() {
    let results = [];
    for (let i = 0;i < this.groupsData.length;i++) {
      results.push('verticalLayoutItem' + this.groupsData[i]['id']);
    }
    return results;
  }
}
