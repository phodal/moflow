import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PortalModule } from '@angular/cdk/portal';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { CommonModule } from '@angular/common';
import { MocardComponent } from './mocard/mocard.component';
import { MatCardModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { MolistComponent } from './molist/molist.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HeaderComponent,
    DispatcherComponent,
    MocardComponent,
    MolistComponent
  ],
  entryComponents: [HeaderComponent, MocardComponent, MolistComponent],
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    MatCardModule,
    VirtualScrollerModule,
    InfiniteScrollModule,
  ],
  exports: [
    HeaderComponent,
    DispatcherComponent,
    MocardComponent,
    MolistComponent
  ]
})
export class ElementsModule {
}
