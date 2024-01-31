// formatar-texto.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarTexto'
})
export class FormatarTextoPipe implements PipeTransform {
  transform(value: string): string {
    // Adicione aqui a lógica desejada para formatar o texto
    return `<strong>${value}</strong>`;
  }
}
