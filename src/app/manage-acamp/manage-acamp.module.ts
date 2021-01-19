import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAcampComponent } from './manage-acamp.component';
import { ContainerModule } from '../shared/container/container.module';
import { RouterModule } from '@angular/router';
import { AddAcampComponent } from './add-acamp/add-acamp.component';
import { ContainerFluidModule } from '../shared/container-fluid/container-fluid.module';
import { AcampsComponent } from './acamps/acamps.component';



@NgModule({
  declarations: [
    ManageAcampComponent,
    AddAcampComponent,
    AcampsComponent
  ],
  exports: [
    ManageAcampComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    ContainerFluidModule
  ]
})
export class ManageAcampModule { }
