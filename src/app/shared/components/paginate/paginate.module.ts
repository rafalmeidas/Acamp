import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from './paginate.component';



@NgModule({
  declarations: [
    PaginateComponent
  ],
  exports:[
    PaginateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginateModule { }
