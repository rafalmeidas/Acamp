import { Component, Input } from '@angular/core';

@Component({
    selector: 'ac-col',
    templateUrl: './grid-item.component.html'
})
export class GridItemComponent {

    @Input() class: string = 'col';
    @Input() text: string = '';
}