// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormatarTextoPipe } from './Pipes/formatar-texto.pipe';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormatarTextoPipe,
    InputComponent,
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
