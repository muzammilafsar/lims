import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddbookComponent } from './addbook/addbook.component';
import {  Routes, RouterModule } from '@angular/router';
import { CustomepipesModule } from '../customepipes/customepipes.module';
import { AllborrowedComponent } from './allborrowed/allborrowed.component';

const routes: Routes = [
  {
    path: 'addbook',
    component: AddbookComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CustomepipesModule
  ],
  declarations: [HomeComponent, AddbookComponent, AllborrowedComponent]
})
export class AdminModule { }
