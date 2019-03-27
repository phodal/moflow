import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    DragDropModule,
    RouterModule.forChild([
      {
        path: '**',
        component: HomeComponent,
        data: { title: 'Home' }
      }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule {

}
