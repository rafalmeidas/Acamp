import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox.component';



@NgModule({
  declarations: [
    ComboboxComponent
  ],
  exports: [
    ComboboxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComboboxModule { }
