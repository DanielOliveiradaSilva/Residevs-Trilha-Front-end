import { Component, OnInit } from '@angular/core';
import { HttpPetService } from '../../Services/Pet/http-pet.service';
import { Pet } from '../../Models/Pet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-atendimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-atendimentos.component.html',
  styleUrl: './listar-atendimentos.component.css'
})
export class ListarAtendimentosComponent{
  pets: Pet[] = [];
  
}

