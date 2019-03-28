import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  entryComponents: [ HeaderComponent, ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
