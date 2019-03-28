import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PortalModule } from '@angular/cdk/portal';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    DispatcherComponent
  ],
  entryComponents: [HeaderComponent],
  imports: [
    CommonModule,
    PortalModule,
  ],
  exports: [
    HeaderComponent,
    DispatcherComponent
  ]
})
export class ComponentsModule {
}
