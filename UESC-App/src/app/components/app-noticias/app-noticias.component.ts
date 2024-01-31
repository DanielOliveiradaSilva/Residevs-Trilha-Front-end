import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Serviços/NewServicos';

@Component({
  selector: 'app-app-noticias',
  templateUrl: './app-noticias.component.html',
  styleUrls: ['./app-noticias.component.css']
})
export class AppNoticiasComponent implements OnInit {
 
  articles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }
 
  loadNews() {
    const searchTerm = 'Noticias Editais Universidade Estadual de Santa Cruz ';
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
