import { Component } from '@angular/core';
import { LoginService } from '../services/login'; // Importa la classe esportata dal servizio
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div style="text-align: center; margin-top: 50px;">
      <h2>Pagina di Login</h2>
      <input [(ngModel)]="credentials.username" placeholder="Username" style="display: block; margin: 10px auto;">
      <input [(ngModel)]="credentials.password" type="password" placeholder="Password" style="display: block; margin: 10px auto;">
      <button (click)="onLogin()">Accedi</button>
    </div>
  `,
})
export class LoginComponent { // Deve esserci 'export'
  credentials = { username: '', password: '' };

  constructor(private loginService: LoginService) {}

  onLogin() {
    this.loginService.login(this.credentials).subscribe({
      next: (res: any) => {
        this.loginService.saveToken(res.token);
        alert('Login effettuato!');
      },
      error: (err) => alert('Errore: ' + err.error)
    });
  }
}
