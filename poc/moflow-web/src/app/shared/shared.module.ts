import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ElementsModule } from '../elements/elements.module';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    ElementsModule
  ]
})
export class SharedModule {

}
