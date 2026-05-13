import { Routes } from '@angular/router';
import { InserimentoEsercizioComponent } from './features/exercise/inserimento-esercizio/inserimento-esercizio';
import { HomeComponent } from './home/home-page';
import { LoginComponent } from './features/auth/login/login';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Usa LoginComponent qui
  { path: 'inserimento-esercizio', component: InserimentoEsercizioComponent },
  { path: '**', redirectTo: '' }
];
