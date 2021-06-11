import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
})
export class BgColorDirective implements OnInit {
  @Input('appBgColor') colorHEX = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      this.colorHEX
    );
  }
}
