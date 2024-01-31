import { Component, Inject } from '@angular/core';
import { ServicoService } from './services/servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WikiApi';
  resultados: any[] = [];
  

  constructor(@Inject(ServicoService) private servico: ServicoService) { }
  consultarPagina($event: string) {
    console.log($event);
    const nomePagina = $event; // Substitua pelo nome da página desejada
   this.servico.search(nomePagina).subscribe((data) => {
    this.resultados = data.query.search;
   })
  }
  getLink(title: string): string {
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
  }

}
