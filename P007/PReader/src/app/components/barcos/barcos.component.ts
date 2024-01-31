import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrl: './barcos.component.css'
})
export class BarcosComponent {
  @Input() Barcos: any;
  @Output() BarcoSelecionado = new EventEmitter<String>();

  NomeBarco: Array<string> = [];

  selecionarBarco(barco: any): void {
    this.BarcoSelecionado.emit("Barcos");
  }
}
