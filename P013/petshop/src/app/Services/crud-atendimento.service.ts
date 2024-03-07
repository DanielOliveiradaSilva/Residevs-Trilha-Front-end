import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Atendimento } from '../Models/Atendimento';

@Injectable({
  providedIn: 'root'
})
export class CRUDAtendimentoService {

  constructor(private http: HttpClient) { }

  public getAtendimentos() {
    var Atendimentos = this.http.get<Atendimento>("http://localhost:3000/atendimentos");
    return Atendimentos;
  }

  public postAtendimento(atendimento: Atendimento) {
    var post = JSON.stringify(atendimento);
    console.log(post);
    return this.http.post("http://localhost:3000/atendimentos", post);
  }
  public deleteAtendimento(id: number) {
    return this.http.delete("http://localhost:3000/atendimentos/" + id);
  }
  //put
  public putAtendimento(id: number, atendimento: Atendimento) {
    var put = JSON.stringify(atendimento);
    return this.http.put("http://localhost:3000/atendimentos/" + id, put);
  }
}
