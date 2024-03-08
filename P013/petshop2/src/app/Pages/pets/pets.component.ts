import { Component } from '@angular/core';
import { HttpPetService } from '../../Services/Pet/http-pet.service';
import { Pet } from '../../Models/Pet';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent {
  pets: Pet[] = [];
 pet: Pet = {
   id: "1",
   nome: 'ganiel',
 }
  mensagem: string | undefined;
 
  constructor(private _service: HttpPetService, private router: Router) {}

  ngOnInit(): void {
    // this._service.AdicionarPet(this.pet);
    this.getPets();
  }
  getPets(){
    this._service.getPets().subscribe((resposta) => {
     
      this.pets = resposta;
     
    });
  }
  deletarPet(id: string): void {
    this._service.deletePet(id).subscribe(
      (resposta) => {
        this.mensagem = 'Pet excluído com sucesso!';


        // Adicione lógica adicional conforme necessário
      },
      (erro) => {
        this.mensagem = 'Erro ao excluir o pet.';
      }
      
    );

        // Agora, você pode adicionar lógica para fazer a mensagem desaparecer após alguns segundos (opcional)
      setTimeout(() => {
        this.mensagem = undefined; // Limpa a mensagem após alguns segundos
      }, 5000); // 5000 milissegundos = 5 segundos

      // this.router.navigate(]);
  }
  // deletarPet(id: string){
  // // Se a remoção for bem-sucedida, define a mensagem de sucesso; caso contrário, define a mensagem de erro
  //   this._service.deletePet(id);
  // // if () {
  // //   this.mensagem = 'Removido com sucesso!';
  // // } else {
  // //   this.mensagem = 'Erro ao remover o pet.';
  // // }

  // // // Agora, você pode adicionar lógica para fazer a mensagem desaparecer após alguns segundos (opcional)
  // // setTimeout(() => {
  // //   this.mensagem = ''; // Limpa a mensagem após alguns segundos
  // // }, 5000); // 5000 milissegundos = 5 segundos

  // //  this.router.navigate(['/home']);
    
  // }
  editarPet(id: string){
   
      console.log(id);
  }
}
