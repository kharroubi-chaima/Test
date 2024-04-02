import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Home1Component } from './home1/home1.component';
import { ConstatComponent } from './constat/constat.component';
import { FormsModule } from '@angular/forms';
import { Ajout1Component } from './ajout1/ajout1.component';
import { Ajout2Component } from './ajout2/ajout2.component';
import { Ajout3Component } from './ajout3/ajout3.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Home1Component,
    ConstatComponent,
    Ajout1Component,
    Ajout2Component,
    Ajout3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule // Ajouter ReactiveFormsModule dans les imports

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
