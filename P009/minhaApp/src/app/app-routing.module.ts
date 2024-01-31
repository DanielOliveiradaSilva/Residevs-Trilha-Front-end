import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiApiComponent } from './Components/wiki-api/wiki-api.component';
import { PReadComponent } from './Components/pread/pread.component';
import { UescAppComponent } from './Components/uesc-app/uesc-app.component';

const routes: Routes = [
  {path: 'wikipediat', component: WikiApiComponent},
  {path:'pread', component: PReadComponent},
  {path:'uesc', component: UescAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
