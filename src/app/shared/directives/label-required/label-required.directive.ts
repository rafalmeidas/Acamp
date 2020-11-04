import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[acLabelRequired]'
})
export class LabelRequiredDirective {

    color: string = '#dc3545';

    constructor(
        private el: ElementRef,
        private render: Renderer2
    ){}


    @HostListener('click') 
    teste(){
        console.log('aqui');
        this.render.setStyle(this.el.nativeElement, 'position', 'fixed');
        this.render.setStyle(this.el.nativeElement, 'width', '100%');
        this.render.setStyle(this.el.nativeElement, 'height', '100%');
    }
}