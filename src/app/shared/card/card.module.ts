import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardTextComponent } from './card-text/card-text.component';

@NgModule({
  declarations: [
    CardComponent, 
    CardBodyComponent, 
    CardTextComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CardModule { }
