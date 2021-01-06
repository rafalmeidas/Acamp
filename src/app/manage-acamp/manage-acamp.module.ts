import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAcampComponent } from './manage-acamp.component';
import { ContainerFluidModule } from '../shared/container-fluid/container-fluid.module';



@NgModule({
  declarations: [
    ManageAcampComponent
  ],
  exports: [
    ManageAcampComponent
  ],
  imports: [
    CommonModule,
    ContainerFluidModule
  ]
})
export class ManageAcampModule { }
