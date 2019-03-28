import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PortalModule } from '@angular/cdk/portal';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { CommonModule } from '@angular/common';
import { MocardComponent } from './mocard/mocard.component';
import { MatCardModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    HeaderComponent,
    DispatcherComponent,
    MocardComponent
  ],
  entryComponents: [HeaderComponent, MocardComponent],
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    DispatcherComponent,
    MocardComponent
  ]
})
export class ComponentsModule {
}
