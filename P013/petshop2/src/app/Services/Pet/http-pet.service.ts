import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Pet } from '../../Models/Atendimento';
import { HttpClient } from '@angular/common/http';
import { PetViewModel } from '../../Models/View/PetViewModel';

@Injectable({
  providedIn: 'root',

})

export class HttpPetService {
  private urlapi = 'https://residencia-d2bff-default-rtdb.firebaseio.com/';

  private pets: Pet[] = [];
  constructor(private http: HttpClient) { }
  

  getPets(): Observable<PetViewModel[]> {
    return this.http.get<{ [key: string]: { Id: string; Nome: string } }>(`${this.urlapi}/pets.json`).pipe(
      map((resposta) => {
        console.log('Resposta do Firebase:', resposta);

        const pets: PetViewModel[] = [];
        for (const key in resposta) {
          if (resposta.hasOwnProperty(key)) {
            
            pets.push({ ...resposta[key], Id: key });
          }
        }
        return pets;
      })
    );
  }

  getPetPorId(id: string) {
    return this.http.get<Pet>(`${this.urlapi}/pets/${id}.json`);
  }
  AdicionarPet(pet: PetViewModel): Observable<any>{
   
    console.log(pet);
    return this.http.post(`${this.urlapi}/pets.json`, pet).pipe(
      map((resposta) => {
        console.log('Retorno do post', resposta);
        return resposta;
      })
    )
  }

  alterarPet(pet: PetViewModel){
    this.http.put(this.urlapi + 'pets/' + pet.Id + '.json' , pet).subscribe(
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
