import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ac-input-message',
    templateUrl: 'input-message.component.html'
})
export class InputMessageComponent{
    
    @Input() message: string;
    
    @Input()
    fail: string = null;
}