import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDestaque]'
})
export class DestaqueDirective {

  constructor(private elemente: ElementRef) { }

  ngOnInit(): void {
    this.elemente.nativeElement.style.backgroundColor = '#9EA1CA';
    this.elemente.nativeElement.style.color = 'White';
    this.elemente.nativeElement.style.border ='none';
    this.elemente.nativeElement.style.padding = '5px 16px';
  }
  
}
