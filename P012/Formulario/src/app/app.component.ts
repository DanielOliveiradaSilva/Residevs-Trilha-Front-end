import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  FormUser!: FormGroup;

  constructor(private formBuilder: FormBuilder, private formService: FormService) {}

  ngOnInit() {
    this.FormUser = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(12), noSpaceValidator]],
      senha: ['', [Validators.required, Validators.minLength(4), passwordValidator]],
      email: ['', [Validators.required, Validators.email]],
      nomeCompleto: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      endereco: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required, ageValidator]],
      genero: ['', [Validators.required]],
      profissao: ['', [Validators.required]]
    });
    //Iniciando o rastreamento da alteações do formulario
    this.formService.trackFormChanges(this.FormUser);
  }

  onSubmit() {
    if (this.FormUser?.valid) {
      // Lógica para lidar com o envio do formulário
      console.log('Formulário enviado com sucesso!', this.FormUser.value);
    } else {
      console.log('Formulário inválido. Corrija os erros antes de enviar.');
    }
  }
}

// Função de validação personalizada para verificar se há espaços no valor
const noSpaceValidator = (control: FormControl) => {
  if (control.value && control.value.indexOf(' ') >= 0) {
    return { noSpace: true };
  }
  return null;
};

// Função de validação personalizada para senhas
const passwordValidator = (control: FormControl) => {
  const regex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
  return regex.test(control.value) ? null : { invalidPassword: true };
};

// Função de validação personalizada para a idade
const ageValidator = (control: FormControl) => {
  const birthDate = new Date(control.value);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  return age >= 18 ? null : { underage: true };
};
