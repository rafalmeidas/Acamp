import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAcampComponent } from './my-acamp.component';



@NgModule({
  declarations: [
    MyAcampComponent
  ],
  exports: [
    MyAcampComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyAcampModule { }
