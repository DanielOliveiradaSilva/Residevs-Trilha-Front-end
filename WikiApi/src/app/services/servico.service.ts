import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  constructor(private http: HttpClient) {}

  // Método para buscar resultados na Wikipedia com base no termo de busca
  search(termo: string): Observable<any> {
    // Parâmetros da API da Wikipedia
    const params = new HttpParams()
      .set('action', 'query')
      .set('format', 'json')
      .set('list', 'search')
      .set('origin', '*')
      .set('srsearch', termo);

    // URL da API da Wikipedia
    const apiUrl = 'https://en.wikipedia.org/w/api.php';

    // Fazendo a requisição GET para a API
    return this.http.get(apiUrl, { params });
  }
}