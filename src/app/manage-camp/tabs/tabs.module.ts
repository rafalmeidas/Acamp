import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { AddCampComponent } from './add-camp/add-camp.component';
import { ReactiveFormsModule } from '@angular/forms';



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
    ReactiveFormsModule
  ]
})
export class TabsModule { }
