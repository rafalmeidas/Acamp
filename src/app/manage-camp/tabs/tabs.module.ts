import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { AddCampComponent } from './add-camp/add-camp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilFormModule } from 'src/app/shared/components/util-form/util-form.module';
import { NgxMaskModule } from 'ngx-mask';
import { AddAttractionComponent } from './add-attraction/add-attraction.component';
import { ImageModule } from 'src/app/shared/components/image/image.module';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TabsComponent,
    AddCampComponent,
    AddAttractionComponent
  ],
  exports: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UtilFormModule,
    NgxMaskModule.forChild(),
    ImageModule,
    ImmediateClickModule,
    RouterModule
  ]
})
export class TabsModule { }
