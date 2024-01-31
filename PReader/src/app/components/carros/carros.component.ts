import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrl: './carros.component.css'
})
export class CarrosComponent {
  @Input() Carros: any;
  @Output() CarroSelecionado = new EventEmitter<String>();

  CarroSelecionados(carro: any): void {
    this.CarroSelecionado.emit("Carros");
  }
}
