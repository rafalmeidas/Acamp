import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAcampComponent } from './manage-acamp.component';
import { ContainerModule } from '../shared/components/container/container.module';
import { RouterModule } from '@angular/router';
import { AddAcampComponent } from './add-acamp/add-acamp.component';
import { ContainerFluidModule } from '../shared/components/container-fluid/container-fluid.module';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { AcampsModule } from './acamps/acamps.module';



@NgModule({
  declarations: [
    ManageAcampComponent,
    AddAcampComponent,
    MenuLeftComponent
  ],
  exports: [
    ManageAcampComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    ContainerFluidModule,
    AcampsModule
  ]
})
export class ManageAcampModule { }
