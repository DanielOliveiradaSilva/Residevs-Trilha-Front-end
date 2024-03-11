import { Component, ElementRef, Renderer2 } from '@angular/core';
import { HttpPetService } from '../../Services/Pet/http-pet.service';
import { PetViewModel } from '../../Models/View/PetViewModel';

import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent {
  currentRoute: string | undefined;

  Number(arg0: string) {
    return parseInt(arg0);
  }
  pets: PetViewModel[] = [];
  mensagem: string | undefined;

  constructor(private _service: HttpPetService, private router: Router, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getPets();
    console.log(this.pets[0].Nome);
  }
  getPets() {
    this._service.getPets().subscribe((resposta) => {
      this.pets = resposta;
      console.log(this.pets);
    });
  }
  deletarPet(id: string): void {
    const elementoDeletado = this.el.nativeElement.querySelector('#deleted');
    const elemnteMenssagem = this.el.nativeElement.querySelector('.mensagem');
    this._service.deletePet(id).subscribe(
      (resposta) => {
     
          this.mensagem = 'Pet excluído com sucesso!';
          this.renderer.setStyle(elementoDeletado, 'display', 'none');
       
      },
      (erro) => {
        this.mensagem = 'Erro ao excluir o pet.';

      }
    );

    // Agora, você pode adicionar lógica para fazer a mensagem desaparecer após alguns segundos (opcional)
    setTimeout(() => {
      this.mensagem = undefined; // Limpa a mensagem após alguns segundos
    }, 3000); // 5000 milissegundos = 5 segundos
    
    
  }
  navigateTo(arg0: string) {
    this.currentRoute = arg0;
    this.router.navigate([arg0]);
  }
  editarPet(pet: PetViewModel): void {
    console.log(pet);
    this.router.navigate(['pets/edit/'+ pet.Id]);
  }
}
