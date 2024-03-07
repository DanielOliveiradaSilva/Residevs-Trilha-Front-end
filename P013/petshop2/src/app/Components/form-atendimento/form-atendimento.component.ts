import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Atendimento } from '../../Models/Atendimento';

@Component({
  selector: 'app-form-atendimento',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-atendimento.component.html',
  styleUrls: ['./form-atendimento.component.css']})
export class FormAtendimentoComponent {
  atendimentoForm: FormGroup;

  // Opções para o campo sexo
  opcoesSexo: string[] = ['Macho', 'Fêmea'];

  // Opções para o campo status
  opcoesStatus: string[] = ['Em andamento', 'Pendente', 'Finalizado'];
   constructor(private formBuilder: FormBuilder) {
    this.atendimentoForm = this.formBuilder.group({
      Pet: this.formBuilder.group({
        nome: ['', Validators.required],
        tipo: ['', Validators.required],
        raca: ['', Validators.required],
        dataNascimento: [null, Validators.required],
        sexo: ['', Validators.required],
      }),
      Status: ['', Validators.required],
      Descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Inicializações, se necessário
  }

  onSubmit(): void {
    // Lógica para lidar com o envio do formulário
    const formData = this.atendimentoForm.value as Atendimento;
    console.log(formData);
  }
}
