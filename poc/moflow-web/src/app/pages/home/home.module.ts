import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';
import { ElementsModule } from '../../elements/elements.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DragDropModule,
    ResizableModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '**',
        component: HomeComponent,
        data: {title: 'Home'}
      }
    ]),
    ElementsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {

}
