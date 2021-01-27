import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
    selector: '[acDarkenOnHover]'
})
export class DarkenOnHoverDirective {

    @Input()
    brightness = '80%';

    constructor( 
        private el: ElementRef,
        private render: Renderer2
        ) {}

    @HostListener('mouseover')
    darkenOn (){
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
    }

    @HostListener('mouseleave')
    darkenOff(){
        this.render.setStyle(this.el.nativeElement, 'filter', `brightness(100%)`);
    }

}