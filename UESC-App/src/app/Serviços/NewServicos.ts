import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  
  private apiKey = 'AIzaSyA1S50SUg-23-RIVJOB6LNUxXUtc9DrUPM';
  private searchEngineId = '973d1c28d919e45f4';
  private apiUrl = 'https://www.googleapis.com/customsearch/v1';

  constructor(private http: HttpClient) {}

  getNews(searchTerm: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&cx=${this.searchEngineId}&q=${searchTerm}`;
    return this.http.get<any>(url);
  }
}
