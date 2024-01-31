import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

    @Output() onSeache = new EventEmitter();
  OnSeacher(){
    var texto = document.getElementById("input") as HTMLInputElement;
    this.onSeache.emit(texto.value);
  }
}
