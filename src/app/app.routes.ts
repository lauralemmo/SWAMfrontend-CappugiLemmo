import { Routes } from '@angular/router';
import { InserimentoEsercizioComponent } from './features/exercise/inserimento-esercizio/inserimento-esercizio';
import { HomeComponent } from './home/home-page';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { DashboardComponent as AdminDashboard } from './features/admin/dashboard/dashboard'; // Importa quello Admin
import { DashboardComponent as AthleteDashboard } from './features/athlete/dashboard/dashboard';
import { adminGuard } from './core/guards/admin';
import { athleteGuard } from './core/guards/athlete';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Usa LoginComponent qui
  {
    path: 'admin/dashboard',
    component: AdminDashboard,
    canActivate: [adminGuard] // Il guard bloccherà chiunque non sia ADMIN
  },
  {
    path: 'athlete/dashboard',
    component: AthleteDashboard,
    canActivate: [athleteGuard]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'inserimento-esercizio', component: InserimentoEsercizioComponent },
  { path: '**', redirectTo: '' }
];
