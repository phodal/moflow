import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    CommonModule,
    ComponentsModule
  ]
})
export class SharedModule {

}
