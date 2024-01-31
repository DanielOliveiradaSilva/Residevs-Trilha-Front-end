import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  
  @Output() objetoJson: any  = new EventEmitter<any>();

  carregarJson(event: any): void {
    const files = event.target.files;

    if (files && files.length > 0) {
      const arquivo = files[0];
      const leitor = new FileReader();

      leitor.onload = () => {
        const conteudo = leitor.result as string;

        // Emite o conteúdo do arquivo como um objeto JSON
        try {
          const objeto = JSON.parse(conteudo);
          this.objetoJson.emit(objeto);
        } catch (erro) {
          console.error('Erro ao analisar JSON:', erro);
        }
      };

      // Inicia a leitura do arquivo como texto
      leitor.readAsText(arquivo);
    }
  }

}
