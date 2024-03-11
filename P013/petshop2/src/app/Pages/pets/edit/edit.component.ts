import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../../../Models/Pet';
import { HttpPetService } from '../../../Services/Pet/http-pet.service';
import { PetViewModel } from '../../../Models/View/PetViewModel';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  petId!: string;
  pet!:any;
  constructor(private route:ActivatedRoute,private _servicePet:HttpPetService){}
  ngOnInit(): void {
    //obter o id da rota
    const idParam =  this.route.snapshot.paramMap.get('id');
    if(idParam !== null){
      this.petId = idParam;
    }
    this.pet = this._servicePet.getPetPorId(this.petId)
  }
}
