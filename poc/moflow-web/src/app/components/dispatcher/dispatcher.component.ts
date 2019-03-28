import { Component, Input, OnInit } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.scss']
})
export class DispatcherComponent implements OnInit {
  @Input() component: any;

  private componentPortal: ComponentPortal<any>;

  constructor() {
    this.componentPortal = new ComponentPortal(HeaderComponent);
  }

  ngOnInit() {
  }

}
