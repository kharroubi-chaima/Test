import { NgModule } from '@angular/core';
import {ConstatComponent} from './constat/constat.component';
import {Home1Component} from './home1/home1.component';

import { RouterModule, Routes } from '@angular/router';
import { Ajout1Component } from './ajout1/ajout1.component';
import { Ajout2Component } from './ajout2/ajout2.component';
import { Ajout3Component } from './ajout3/ajout3.component';



const routes: Routes = [
  {path:'', redirectTo:'home1' , pathMatch:'full'},
  {path:'home1', component: Home1Component},
  {path: 'constat', component: ConstatComponent},
  {path:'ajout1',component:Ajout1Component},
  {path:'ajout2',component:Ajout2Component},
  {path:'ajout3',component:Ajout3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
