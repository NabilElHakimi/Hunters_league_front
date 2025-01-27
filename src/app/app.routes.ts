import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { AuthGuard } from './guards/auth.guard';
import { SpeciesPageComponent } from './layouts/species-page/species-page.component';
import { ResultPageComponent } from './layouts/result-page/result-page.component';
import { TopThreePageComponent } from './layouts/top-three-page/top-three-page.component';
import { MemberGuard } from './guards/member.guard';
import { DashboardPageComponent } from './admins/views/dashboard-page/dashboard-page.component';
import { CompetitionPageComponent } from './admins/views/competition-page/competition-page.component';
import { AdminGuard } from './guards/admin.guard';
import { UsersPageComponent } from './admins/views/users-page/users-page.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { SpeciesPageAdminComponent } from './admins/views/species-page-admin/species-page-admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomePageComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },

  { path: 'login', component: LoginFormComponent },
  { path: 'register', component: RegisterFormComponent },

  {
    path: 'member',
    canActivate: [AuthGuard, MemberGuard],
    children: [
      { path: 'species', component: SpeciesPageComponent },
      { path: 'results', component: ResultPageComponent },
      { path: 'top-three', component: TopThreePageComponent },
    ],
  },
  {
    path: 'admin',
    component: DashboardPageComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      {path: 'species' , component : SpeciesPageAdminComponent},
      {path: 'competitions' , component : CompetitionPageComponent},
      {path: 'users' , component : UsersPageComponent}
    ],
  },

  { path: '**', redirectTo: 'home' },
];
