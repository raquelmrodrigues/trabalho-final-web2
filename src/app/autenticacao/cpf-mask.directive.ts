import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCpfMask]'
})
export class CpfMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');
    if (value.length <= 11) {
      input.value = this.formatCpf(value);
    } else {
      input.value = value.slice(0, 11);
    }
  }

  private formatCpf(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
}
