import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageModule } from '../image/image.module';
import { DarkenOnHoverModule } from '../../directives/darken-on-hover/darken-on-hover.module';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list.component';




@NgModule({
  declarations: [
    CardComponent, 
    CardListComponent
  ],
  exports: [
    CardComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    DarkenOnHoverModule,
    ImageModule
  ]
})
export class CardModule { }
