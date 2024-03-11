import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

import { PetsComponent } from './Pages/pets/pets.component';
import { EditComponent } from './Pages/pets/edit/edit.component';
import { CriarComponent } from './Pages/pets/criar/criar.component';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'pets/criar', component: CriarComponent
    },
    {
        path: 'pets/edit/:id', component: EditComponent
    },
    {
        path: 'pets', component: PetsComponent
    }
];
