import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PReadComponent } from './Components/pread/pread.component';
import { WikiApiComponent } from './Components/wiki-api/wiki-api.component';
import { UescAppComponent } from './Components/uesc-app/uesc-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PReadComponent,
    WikiApiComponent,
    UescAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
