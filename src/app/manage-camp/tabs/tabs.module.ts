import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs.component';
import { AddCampComponent } from './add-camp/add-camp.component';
import { UtilFormModule } from 'src/app/shared/components/util-form/util-form.module';
import { AddAttractionComponent } from './attractions/add-attraction/add-attraction.component';
import { ImageModule } from 'src/app/shared/components/image/image.module';
import { ComboboxModule } from 'src/app/shared/components/combobox/combobox.module';
import { AttractionsComponent } from './attractions/attractions.component';
import { ContainerFluidModule } from 'src/app/shared/components/container-fluid/container-fluid.module';
import { CardModule } from 'src/app/shared/components/card/card.module';

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
    CardModule,
    RouterModule
  ]
})
export class TabsModule { }
