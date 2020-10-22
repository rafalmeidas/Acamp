import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[acLabelRequired]'
})
export class LabelRequiredDirective {

    color: string = '#dc3545';

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ){}


    @HostListener('mouseover') 
    teste(){
        console.log('aqui');
        this.render.setStyle(this.el.nativeElement, 'content', ' *');
        this.render.setStyle(this.el.nativeElement, 'color', this.color);
    }
} 

