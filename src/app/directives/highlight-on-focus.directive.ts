import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input('highlightOnFocus') focusColor = 'lightblue';

  private originalBorder: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('focus')
  onFocus() {
    this.originalBorder = this.el.nativeElement.style.border;
    this.el.nativeElement.style.border = `5px solid ${this.focusColor}`;
  }

  @HostListener('blur')
  onBlur() {
    this.el.nativeElement.style.border = this.originalBorder;
  }
}
