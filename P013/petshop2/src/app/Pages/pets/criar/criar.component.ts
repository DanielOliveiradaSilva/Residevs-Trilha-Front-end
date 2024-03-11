import { Component, OnInit, input } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pet } from '../../../Models/Pet';
import { HttpPetService } from '../../../Services/Pet/http-pet.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.css'
})
export class CriarComponent implements OnInit {
  PetInputModel!: FormGroup; //inputModel
  constructor(private formBuilder: FormBuilder, private _servicePet:HttpPetService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.PetInputModel = this.formBuilder.group({
      Nome: ['', Validators.required],
    });
    
  }
  onSubmit() {
    if (this.PetInputModel.valid) {
      console.log(this.PetInputModel.value['Nome']);
      this._servicePet.AdicionarPet(this.PetInputModel.value).subscribe(
        (resposta) => {
          this.router.navigate(['pets']);
        },
        (erro) => {
          console.log(erro);
        }
      );


    }
  }
}
