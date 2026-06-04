import { Routes } from '@angular/router';
import { InserimentoEsercizioComponent } from './features/exercise/inserimento-esercizio/inserimento-esercizio';
import { HomeComponent } from './home/home-page';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { DashboardComponent as AdminDashboard } from './features/admin/dashboard/dashboard'; // Importa quello Admin
import { adminGuard } from './core/guards/admin';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Usa LoginComponent qui
  {
    path: 'admin/dashboard',
    component: AdminDashboard,
    canActivate: [adminGuard] // Il guard bloccherà chiunque non sia ADMIN
  },
  { path: 'register', component: RegisterComponent },
  { path: 'inserimento-esercizio', component: InserimentoEsercizioComponent },
  { path: '**', redirectTo: '' }
];
