import { Injectable,input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StreamService  {
  private dados: any = [];

  setData(data: any[]) {
    this.dados = data;
    console.log(this.dados);
  }
  getData() {
    return this.dados
  }
 
}
