import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AviaoComponent } from './components/aviao/aviao.component';
import { InputComponent } from './components/input/input.component';
import { DestaqueDirective } from './destaque.directive';

import { AnimaDirective } from './anima.directive';
import { CarrosComponent } from './components/carros/carros.component';
import { BarcosComponent } from './components/barcos/barcos.component';
import { TitulosDirective } from './titulos.directive';


@NgModule({
  declarations: [
    AppComponent,
    AviaoComponent,
    InputComponent,
    DestaqueDirective,
    AnimaDirective,
    CarrosComponent,
    BarcosComponent,
    TitulosDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
