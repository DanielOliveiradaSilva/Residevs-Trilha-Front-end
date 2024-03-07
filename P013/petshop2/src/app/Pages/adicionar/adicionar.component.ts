import { Component } from '@angular/core';
import { FormAtendimentoComponent } from "../../Components/form-atendimento/form-atendimento.component";

@Component({
    selector: 'app-adicionar',
    standalone: true,
    templateUrl: './adicionar.component.html',
    styleUrl: './adicionar.component.css',
    imports: [FormAtendimentoComponent]
})
export class AdicionarComponent {

}
