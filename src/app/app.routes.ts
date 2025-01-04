import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { AuthGuard } from './auth.guard';
import { SpeciesPageComponent } from './layouts/species-page/species-page.component';
import { ResultPageComponent } from './layouts/result-page/result-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'


  },
  {
    path: 'home',
    component: HomePageComponent ,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'speices',
    component: SpeciesPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'results',
    component: ResultPageComponent,
    canActivate: [AuthGuard],
  }
];



