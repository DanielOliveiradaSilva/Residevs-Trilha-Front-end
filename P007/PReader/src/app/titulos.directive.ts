import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitulos]'
})
export class TitulosDirective {

  constructor(private elemente: ElementRef) { }
  ngOnInit(): void {
    this.elemente.nativeElement.style.backgroundColor = '#FD3A2D';
    this.elemente.nativeElement.style.color = 'White';
    this.elemente.nativeElement.style.wheght = '400';
    this.elemente.nativeElement.style.border ='none';
    this.elemente.nativeElement.style.padding = '5px 16px';
  }

}
