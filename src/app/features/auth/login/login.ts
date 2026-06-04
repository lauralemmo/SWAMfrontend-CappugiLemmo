import { Component } from '@angular/core';
import { LoginService } from '../services/login'; // Importa la classe esportata dal servizio
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';  // ← aggiungere
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NgIf],  // ← aggiungere NgIf
  templateUrl: './login.html',   // ← usare file esterno
  styleUrl: './login.css'
})
export class LoginComponent { // Deve esserci 'export'
  credentials = { username: '', password: '' };
  errorMessage = '';

  constructor(private loginService: LoginService,
              private router: Router
              ) {}
  //
  // onLogin() {
  //   this.loginService.login(this.credentials).subscribe({
  //     next: (res: any) => {
  //       this.loginService.saveToken(res.token);
  //       alert('Login effettuato!');
  //     },
  //     error: (err) => alert('Errore: ' + err.error)
  //   });
  // }
  onLogin() {
    this.errorMessage = '';  // reset errore ad ogni tentativo
    this.loginService.login(this.credentials).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('username', res.username);
        localStorage.setItem('idUser', res.idUser.toString());

        if (res.role === 'ADMIN') {
          this.router.navigate(['/admin/dashboard']); // Rotta Admin
        } else if (res.role === 'ATHLETE') {
          this.router.navigate(['/athlete/dashboard']); // Rotta Atleta
        } else if (res.role === 'PT'){
          this.router.navigate(['/pt/dashboard']); // Rotta PT
        }else {
          this.router.navigate(['/inserimento-esercizio']); // Default (PER ORA) -------- DA MODIFICARE!
        }
      },
      error: (err) => {
      console.error('Login fallito', err);
      alert('Credenziali non valide o errore del server');
    }
    });
}
}
