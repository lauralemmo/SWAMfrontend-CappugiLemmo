import { Routes } from '@angular/router';
import { InserimentoEsercizioComponent } from './inserimento-esercizio/inserimento-esercizio';
import { HomeComponent } from './home-page/home-page';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // Usa LoginComponent qui
  { path: 'inserimento-esercizio', component: InserimentoEsercizioComponent },
  { path: '**', redirectTo: '' }
];
