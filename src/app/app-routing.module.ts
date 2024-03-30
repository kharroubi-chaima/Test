import { NgModule } from '@angular/core';
import {ConstatComponent} from './constat/constat.component';
import {Home1Component} from './home1/home1.component';

import { RouterModule, Routes } from '@angular/router';
import { Ajout1Component } from './ajout1/ajout1.component';

const routes: Routes = [
  {path:'', redirectTo:'home1' , pathMatch:'full'},
  {path:'home1', component: Home1Component},
  {path: 'constat', component: ConstatComponent},
  {path:'ajout1',component:Ajout1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
