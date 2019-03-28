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

  private componentPortal: ComponentPortal<any>;
  private cardComponentPortal: ComponentPortal<MocardComponent>;

  constructor() {
    this.componentPortal = new ComponentPortal(HeaderComponent);
    this.cardComponentPortal = new ComponentPortal(MocardComponent);
  }

  ngOnInit() {
    console.log(this.component);
    this.componentType = this.component ? this.component.type : ''
  }

}
