import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inserimento-esercizio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inserimento-esercizio.html',
  styleUrl: './inserimento-esercizio.css'
})
export class InserimentoEsercizioComponent {

  nomeEsercizio: string = '';

  salvaEsercizio(): void {
    if (!this.nomeEsercizio.trim()) {
      alert('Inserisci un nome per l\'esercizio!');
      return;
    }

    console.log('Esercizio da salvare:', this.nomeEsercizio);
    // Qui dopo chiameremo il backend
    alert('Esercizio salvato: ' + this.nomeEsercizio);
    this.nomeEsercizio = ''; // svuota il campo
  }
}
