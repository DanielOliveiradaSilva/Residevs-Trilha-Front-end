import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AdicionarComponent } from './Pages/adicionar/adicionar.component';
import { ListarComponent } from './Pages/listar/listar.component';
import { PetsComponent } from './Pages/pets/pets.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },

    {
        path: 'adicionar', component: AdicionarComponent
    },
    {
        path: 'listar', component: ListarComponent
    },
    {
        path: 'pets', component: PetsComponent
    }
];
