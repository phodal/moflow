import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-molist',
  templateUrl: './molist.component.html',
  styleUrls: ['./molist.component.scss']
})
export class MolistComponent implements OnInit {
  @ViewChild('scroll') private myScrollContainer: VirtualScrollerComponent;
  @Input() componentData;

  loadingMore: boolean = false;
  hasNext: boolean = false;
  items: Array<any> = [];

  @Output() onClickItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() onScrollUp: EventEmitter<any> = new EventEmitter<any>();
  @Output() onScrollDown: EventEmitter<any> = new EventEmitter<any>();

  scrollRadio = 1;
  styles: string;

  constructor() {}

  ngOnInit() {
    this.loadingMore = this.componentData.loadingMore;
    this.hasNext = this.componentData.hasNext;
    this.items = this.componentData.items;
    this.styles = this.componentData.styles;
  }

  clickItem(event: Event) {
    this.onClickItem.emit(event);
  }

  scrollUp(event) {
    console.log('scrollUp');
    this.updateScrollRatio();
    this.onScrollUp.emit(event);
  }

  scrollDown(event) {
    console.log('scrollDown');
    this.updateScrollRatio();
    this.onScrollDown.emit(event);
  }

  updateScrollRatio() {
    const scrollHeight = (this.myScrollContainer as any).contentElementRef.nativeElement.offsetHeight;
    const totalScrollHeight = (this.myScrollContainer as any).invisiblePaddingElementRef.nativeElement.offsetHeight;
    this.scrollRadio = scrollHeight / totalScrollHeight * 10;
    console.log(this.scrollRadio);
  }

}
