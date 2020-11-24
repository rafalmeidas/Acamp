import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAcampComponent } from './manage-acamp.component';



@NgModule({
  declarations: [
    ManageAcampComponent
  ],
  exports: [
    ManageAcampComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManageAcampModule { }
