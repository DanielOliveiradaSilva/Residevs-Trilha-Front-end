import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Pet } from '../../Models/Atendimento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})

export class HttpPetService {
  private urlapi = 'https://residencia-d2bff-default-rtdb.firebaseio.com/';

  private pets: Pet[] = [];
  constructor(private http: HttpClient) { }

 
  getPets(): Observable<Pet[]> {
    return this.http.get<{ [key: string]: { id: string; nome: string } }>(`${this.urlapi}/pets.json`).pipe(
      map((resposta) => {
        console.log('Resposta do Firebase:', resposta);

        const pets: Pet[] = [];
        for (const key in resposta) {
          if (resposta.hasOwnProperty(key)) {
            const { id, nome } = resposta[key];
            pets.push({ id: id.toString(), nome });
          }
        }

        console.log('Pets mapeados:', pets);
        return pets;
      })
    );
  }
  AdicionarPet(pet: Pet){
    return this.http.post(`${this.urlapi}/pets.json`, pet).subscribe(
      resultado => {
        console.log('Retorno do post', resultado)
      },
      erro =>{
        if(erro.status == 400){
          console.log(erro);
        }
      }
    );
  }
  getPetPorId(id:string){
    this.http.get<Pet>(this.urlapi + 'pets/' + id +'.json');
  }

  alterarPet(pet: Pet){
    this.http.put(this.urlapi + 'pets/' + pet.id , pet).subscribe(
      resultado => {
        console.log('Retorno do put', resultado)
      },
      erro =>{
        switch(erro.status) {
          case 400:
            console.log(erro.error.mensagem);
            break;
          case 404:
            console.log('Produto não localizado.');
            break;
        }
      }
    );
  }
  deletePet(id: string): Observable<any> {
    const url = `${this.urlapi}/pets/${id}.json`;
  
    return this.http.delete<any>(url).pipe(
      tap(() => {
        console.log('Pet excluído com sucesso!');
      }),
      catchError((error) => {
        console.error('Erro ao excluir o pet:', error);
        return throwError(error);
      })
    );
  }
  
}
