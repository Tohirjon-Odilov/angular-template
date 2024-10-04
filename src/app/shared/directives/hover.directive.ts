import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Kursor element ustiga keltirilganda rang o'zgaradi
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('lightblue');
  }

  // Kursor elementdan chiqib ketganda rang qayta tiklanadi
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }

  // Elementning background-color uslubini o'zgartirish uchun funksiya
  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
