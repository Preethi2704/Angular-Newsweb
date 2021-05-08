import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {BusinessnewsComponent} from './businessnews/businessnews.component';

const routes: Routes = [
{path:'' , component:TopheadingComponent},//Home
{path:'tech' , component:TechnewsComponent},//Technews
{path:'business' , component:BusinessnewsComponent}//Businessnews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
