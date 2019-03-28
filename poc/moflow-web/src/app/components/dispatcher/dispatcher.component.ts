import { Component, Input, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HeaderComponent } from '../header/header.component';
import { MocardComponent } from '../mocard/mocard.component';

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.scss']
})
export class DispatcherComponent implements OnInit {
  @Input() component: any;
  componentType: string;

  componentPortal: ComponentPortal<any>;
  cardComponentPortal: ComponentPortal<MocardComponent>;

  constructor() {

  }

  ngOnInit() {
    this.componentType = this.component ? this.component.type : '';

    this.createComponents();
  }

  private createComponents() {
    if (this.componentType === 'card') {
      this.cardComponentPortal = new ComponentPortal(MocardComponent);
    } else {
      this.componentPortal = new ComponentPortal(HeaderComponent);
    }
  }
}
