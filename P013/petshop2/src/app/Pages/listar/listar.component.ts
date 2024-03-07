import { Component } from '@angular/core';
import { ListarAtendimentosComponent } from "../../Components/listar-atendimentos/listar-atendimentos.component";

@Component({
    selector: 'app-listar',
    standalone: true,
    templateUrl: './listar.component.html',
    styleUrl: './listar.component.css',
    imports: [ListarAtendimentosComponent]
})
export class ListarComponent {

}
