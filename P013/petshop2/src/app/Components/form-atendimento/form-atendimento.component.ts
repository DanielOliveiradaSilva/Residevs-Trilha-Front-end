import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpPetService } from '../../Services/Pet/http-pet.service';
import { CommonModule } from '@angular/common';
import { Pet } from '../../Models/Pet';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-form-atendimento',
  templateUrl: './form-atendimento.component.html',
  styleUrls: ['./form-atendimento.component.css'],
})
export class FormAtendimentoComponent implements OnInit {
  PetForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,private _petService: HttpPetService ) {}

  ngOnInit(): void {
    this.PetForm = this.formBuilder.group({
      PetId: [0, Validators.required],
      Nome: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.PetForm.valid) {
      console.log(this.PetForm.value); 
      const pet:Pet = this.PetForm.value; 
      // console.log(this._petService.postPet(pet));
    }
  }
}
