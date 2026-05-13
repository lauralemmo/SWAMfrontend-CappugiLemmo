import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ExerciseService } from '../services/exercise';

@Component({
  selector: 'app-inserimento-esercizio',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './inserimento-esercizio.html',
  styleUrl: './inserimento-esercizio.css'
})
export class InserimentoEsercizioComponent {

  exercise = { name: '', description: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private exerciseService: ExerciseService) {}

  salvaEsercizio(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.exercise.name.trim()) {
      this.errorMessage = 'Inserisci un nome per l\'esercizio!';
      return;
    }

    this.exerciseService.createExercise(this.exercise).subscribe({
      next: () => {
        this.successMessage = 'Esercizio salvato!';
        this.exercise = { name: '', description: '' };
      },
      error: (err) => {
        switch (err.status) {
          case 404:
            this.errorMessage = err.error;
            break;
          case 500:
            this.errorMessage = 'Errore interno del server, riprova più tardi.';
            break;
          default:
            this.errorMessage = 'Errore sconosciuto.';
        }
      }
    });
  }
}
