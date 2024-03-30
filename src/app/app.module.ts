import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Home1Component } from './home1/home1.component';
import { ConstatComponent } from './constat/constat.component';
import { FormsModule } from '@angular/forms';
import { Ajout1Component } from './ajout1/ajout1.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    Home1Component,
    ConstatComponent,
    Ajout1Component
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
