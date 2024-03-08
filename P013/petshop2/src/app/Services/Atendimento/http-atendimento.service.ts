import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento } from '../../Models/Atendimento';

@Injectable({
  providedIn: 'root'
})
export class HttpAtendimentoService {

  constructor( private http: HttpClient) { }

  getAtendimentos() {
    return this.http.get('');
  }

  postAtendimento(atendimento: Atendimento) {
    return this.http.post('', atendimento);
  }
}
