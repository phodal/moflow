import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerComponent } from './picker/picker.component';
import { MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [PickerComponent],
  entryComponents: [PickerComponent],
  exports: [PickerComponent],
  imports: [
    MatGridListModule,
    CommonModule
  ]
})
export class ComponentsModule { }
