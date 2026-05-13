import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], // Necessario per far funzionare il collegamento alla pagina di login
  template: `
    <div class="welcome-container">
      <h1>Benvenuto nella nostra Palestra!</h1>
      <p>Gestisci i tuoi allenamenti e le tue prenotazioni in modo semplice e veloce.</p>

      <button routerLink="/login" class="login-btn">Accedi al Sistema</button>
    </div>
  `,
  styles: [`
    .welcome-container {
      text-align: center;
      margin-top: 100px;
      font-family: sans-serif;
    }
    .login-btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 1.1rem;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
    }
    .login-btn:hover {
      background: #0056b3;
    }
  `]
})
export class HomeComponent {}
