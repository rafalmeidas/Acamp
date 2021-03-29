import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ImageModule } from '../image/image.module';


@NgModule({
  declarations: [
    CardComponent, 
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ImageModule
  ]
})
export class CardModule { }
