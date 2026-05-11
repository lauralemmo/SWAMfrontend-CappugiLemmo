import { Component } from '@angular/core';
import { InserimentoEsercizioComponent } from './inserimento-esercizio/inserimento-esercizio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InserimentoEsercizioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'SWAMfrontend-CappugiLemmo';
}
