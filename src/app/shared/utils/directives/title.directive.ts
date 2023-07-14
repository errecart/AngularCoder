import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2 ) { 
    this.renderer2.setStyle(this.element.nativeElement, 'font-size', '20px');
  }
}

// ElementRef: seria la referencia al elemento donde ponemos la directiva
// renderer2: es para que se haga el cambio visual
// nativeElement: es el elemento
