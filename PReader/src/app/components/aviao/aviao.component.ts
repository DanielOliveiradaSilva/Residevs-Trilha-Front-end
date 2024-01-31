import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-aviao',
  templateUrl: './aviao.component.html',
  styleUrl: './aviao.component.css'
})

export class AviaoComponent {

  @Input() Avioes: any;
  @Output() AviaoSelecionado = new EventEmitter<String>();

  NomeBarco: Array<string> = [];

  selecionarAviao(barco: any): void {
    this.AviaoSelecionado.emit("Aviões");
  }
}
