import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Serviços/NewServicos';
@Component({
  selector: 'app-app-resultados',
  templateUrl: './app-resultados.component.html',
  styleUrl: './app-resultados.component.css'
})
export class AppResultadosComponent  implements OnInit{
 
  articles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }
 
  loadNews() {
    const searchTerm = 'Resultados Universidade Estadual de Santa Cruz ';
    this.newsService.getNews(searchTerm).subscribe(
      
      (data) => {
        console.log(data);
        this.articles = data.items;
      },
      (error) => {
        console.error('Erro ao buscar notícias:', error);
      }
    );
  }
}