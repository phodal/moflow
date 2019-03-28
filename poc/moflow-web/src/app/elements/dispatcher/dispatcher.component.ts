import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Inject,
  InjectionToken,
  Injector,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { HeaderComponent } from '../header/header.component';
import { MocardComponent } from '../mocard/mocard.component';
import { MolistComponent } from '../molist/molist.component';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Component({
  selector: 'app-dispatcher',
  templateUrl: './dispatcher.component.html',
  styleUrls: ['./dispatcher.component.scss']
})
export class DispatcherComponent implements OnInit, AfterViewInit {
  @Inject(CONTAINER_DATA) public componentData: any;
  @Input() public component: any;
  @ViewChild('host') hostElementRef: ElementRef;

  componentType: string;
  defaultComponentPortal: ComponentPortal<any>;
  cardComponentPortal: ComponentPortal<MocardComponent>;
  molistComponentPortal: ComponentPortal<any>;
  portalHost: DomPortalHost;

  constructor(private appRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }

  ngOnInit() {
    this.componentType = this.component ? this.component.type : '';
  }

  ngAfterViewInit() {
    this.createComponents();
  }

  private createComponents() {
    switch (this.componentType) {
      case 'card':
        this.cardComponentPortal = new ComponentPortal(MocardComponent);
        this.attachData(this.cardComponentPortal);
        break;
      case 'molist':
        this.molistComponentPortal = new ComponentPortal(MolistComponent);
        this.attachData(this.molistComponentPortal);
        break;
      default:
        this.defaultComponentPortal = new ComponentPortal(HeaderComponent);
        this.attachData(this.defaultComponentPortal);
        break;
    }
  }

  private attachData(portal: ComponentPortal<MocardComponent>) {
    this.portalHost = new DomPortalHost(
      this.hostElementRef.nativeElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    const componentRef = this.portalHost.attach(portal);
    componentRef.instance.componentData = this.component.content;
    componentRef.changeDetectorRef.detectChanges();
  }
}
