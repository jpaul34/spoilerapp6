import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PeliculaBannerComponent } from './peliculas/pelicula-banner/pelicula-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
