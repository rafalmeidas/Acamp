import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCampComponent } from './manage-camp.component';
import { ContainerModule } from '../shared/components/container/container.module';
import { RouterModule } from '@angular/router';
import { ContainerFluidModule } from '../shared/components/container-fluid/container-fluid.module';
import { AcampsModule } from './camps/camps.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  declarations: [
    ManageCampComponent,
  ],
  exports: [
    ManageCampComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContainerModule,
    ContainerFluidModule,
    AcampsModule,
    TabsModule, 
  ]

})
export class ManageAcampModule { }
