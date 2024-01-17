import { Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PReader';
  Categoria: any = [];
  Nome:string = '';
  NomeDescricao:string = '';
  CategoriaSelecionada: any = [];
  NomeSelecionadoDecricao: Array<string> = [];


  ReceberObjetoJson(objeto: any) {
    this.Categoria = objeto;
  }
  ExibirCategorias($event: any) {
    let titulo = document.getElementsByClassName("titulo");
    (titulo[0] as HTMLElement).style.display = "flex";
    this.Nome = $event;
    
    if ($event === "Aviões") {
        this.CategoriaSelecionada = this.Categoria.Avioes;
        console.log(this.Categoria.Aviao[0].Nome);
        

    }else if ($event === "Carros") {
      this.CategoriaSelecionada = this.Categoria.Carros;
      console.log(this.Categoria.Aviao[0].Nome);

    }else if ($event === "Barcos") {
      this.CategoriaSelecionada = this.Categoria.Barcos;
      
    }
  }
  ExbirEspecificacao(nome:string) {
    this.NomeDescricao = nome;
    let descricao = document.getElementsByClassName("descricao");
    (descricao[0] as HTMLElement).style.display = "flex";

    this.Categoria.Avioes.forEach((element: {
      Teto: string;
      Alcance: string;
      Autonomia: string;
      Engine: string;
      Model: string; Name: string; 
      }) => {

      if(element.Name === nome){
        this.NomeSelecionadoDecricao = [];
        this.NomeSelecionadoDecricao.push(element.Model);
        this.NomeSelecionadoDecricao.push(element.Engine);
        this.NomeSelecionadoDecricao.push(element.Autonomia);
        this.NomeSelecionadoDecricao.push(element.Alcance);
        this.NomeSelecionadoDecricao.push(element.Teto);
      }
    });

    this.Categoria.Carros.forEach((element: {
      Teto: string;
      Alcance: string;
      Autonomia: string;
      Engine: string;
      Model: string; Name: string; 
}) => {
      if(element.Name === nome){
        this.NomeSelecionadoDecricao = [];
        this.NomeSelecionadoDecricao.push(element.Model);
        this.NomeSelecionadoDecricao.push(element.Engine);
        this.NomeSelecionadoDecricao.push(element.Autonomia);
        this.NomeSelecionadoDecricao.push(element.Alcance);
        this.NomeSelecionadoDecricao.push(element.Teto);
      }
    });
 
    this.Categoria.Barcos.forEach((element: {
      Teto: string;
      Alcance: string;
      Autonomia: string;
      Engine: string;
      Model: string; Name: string; 
      }) => {
      if(element.Name === nome){
        this.NomeSelecionadoDecricao = [];
        this.NomeSelecionadoDecricao.push(element.Model);
        this.NomeSelecionadoDecricao.push(element.Engine);
        this.NomeSelecionadoDecricao.push(element.Autonomia);
        this.NomeSelecionadoDecricao.push(element.Alcance);
        this.NomeSelecionadoDecricao.push(element.Teto);
      }
    });
  }
}
