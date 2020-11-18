import { Component, Input } from '@angular/core';

@Component({
    selector: 'ac-item-carousel',
    templateUrl: './carousel-item.component.html',
})
export class CarouselItemComponent {

    @Input() src = '';
    @Input() alt = '';
}