import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { AddCampComponent } from './add-camp/add-camp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilFormModule } from 'src/app/shared/components/util-form/util-form.module';
import { NgxMaskModule } from 'ngx-mask';
import { AddAttractionComponent } from './attractions/add-attraction/add-attraction.component';
import { ImageModule } from 'src/app/shared/components/image/image.module';
import { RouterModule } from '@angular/router';
import { ComboboxModule } from 'src/app/shared/components/combobox/combobox.module';
import { AttractionsComponent } from './attractions/attractions.component';
import { ContainerFluidModule } from 'src/app/shared/components/container-fluid/container-fluid.module';

@NgModule({
  declarations: [
    TabsComponent,
    AddCampComponent,
    AddAttractionComponent,
    AttractionsComponent
  ],
  exports: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    ContainerFluidModule,
    ReactiveFormsModule,
    UtilFormModule,
    NgxMaskModule.forChild(),
    ImageModule,
    ComboboxModule,
    RouterModule
  ]
})
export class TabsModule { }
