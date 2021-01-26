import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAcampComponent } from './manage-acamp.component';
import { ContainerModule } from '../shared/components/container/container.module';
import { RouterModule } from '@angular/router';
import { AddCampComponent } from './add-acamp/add-camp.component';
import { ContainerFluidModule } from '../shared/components/container-fluid/container-fluid.module';
import { MenuLeftComponent } from './menu-left/menu-left.component';
import { AcampsModule } from './acamps/acamps.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from '../core/auth/request-interceptor';



@NgModule({
  declarations: [
    ManageAcampComponent,
    AddCampComponent,
    MenuLeftComponent
  ],
  exports: [
    ManageAcampComponent,
    MenuLeftComponent
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
