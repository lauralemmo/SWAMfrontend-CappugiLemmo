import { Component } from '@angular/core';
import { LoginService } from '../services/login'; // Importa la classe esportata dal servizio
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // ← aggiungere
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],  // ← aggiungere NgIf
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
        this.loginService.saveToken(res.token);
        this.router.navigate(['/inserimento-esercizio']);  // ← redirect dopo login
      },
      error: () => {
        this.errorMessage = 'Username o password non validi.';  // ← niente alert()
      }
    });
  }
}
