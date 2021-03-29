import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampComponent } from './camp.component';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { CardModule } from '../shared/components/card/card.module';



@NgModule({
  declarations: [
    CampComponent
  ],
  exports: [
    CampComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class CampModule { }
