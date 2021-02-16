import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { AddCampComponent } from './add-camp/add-camp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilFormModule } from 'src/app/shared/components/util-form/util-form.module';



@NgModule({
  declarations: [
    TabsComponent,
    AddCampComponent
  ],
  exports: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UtilFormModule
  ]
})
export class TabsModule { }
