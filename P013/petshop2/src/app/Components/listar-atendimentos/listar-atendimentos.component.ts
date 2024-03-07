import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listar-atendimentos',
  standalone: true,
  imports: [],
  templateUrl: './listar-atendimentos.component.html',
  styleUrl: './listar-atendimentos.component.css'
})
export class ListarAtendimentosComponent {
  @Input() atendimentos: any[] = [];
  title = 'petshop2';
  editarAtendimento(atendimento: any): void {
    // Implemente a lógica para a edição aqui
    console.log('Editar atendimento', atendimento);
  }

  removerAtendimento(numeroAtendimento: number): void {
    // Implemente a lógica para a remoção aqui
    console.log('Remover atendimento', numeroAtendimento);
  }
}
