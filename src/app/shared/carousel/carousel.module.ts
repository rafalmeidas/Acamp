import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
    declarations: [
        CarouselComponent,
        CarouselItemComponent
    ],
    exports: [
        CarouselComponent,
        CarouselItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CarouselModule { }