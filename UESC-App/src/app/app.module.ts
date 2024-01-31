import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNoticiasComponent } from './components/app-noticias/app-noticias.component';
import { AppDestaquesComponent } from './components/app-destaques/app-destaques.component';
import { AppResultadosComponent } from './components/app-resultados/app-resultados.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { AppServicosComponent } from './components/app-servicos/app-servicos.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNoticiasComponent,
    AppDestaquesComponent,
    AppResultadosComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppServicosComponent,
    CarrosselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
