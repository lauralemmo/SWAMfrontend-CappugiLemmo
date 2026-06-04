import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importante per usare [formGroup] nell'HTML
  templateUrl: './register.html',
  styleUrls: ['./register.css'] // (o .scss se usi sass)
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private registerService = inject(RegisterService);
  private router = inject(Router);

  // Creazione del form con i nomi ESATTI del DTO Java
  registerForm: FormGroup = this.fb.group({
    tax_code: ['', [Validators.required, Validators.maxLength(16)]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    phone_number: [''],
    birth_date: ['', Validators.required], // Formato yyyy-MM-dd
    height: [''],
    weight: [''],
    // L'abbonamento viene creato in automatico dal controller, servono questi campi:
    subscriptionType: ['MONTHLY', Validators.required],
    startDate: [new Date().toISOString().split('T')[0], Validators.required] // Data di oggi di default
  });

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerService.registerAthlete(this.registerForm.value).subscribe({
        next: (response) => {
          alert('Registrazione completata con successo! Ora puoi fare il login.');
          this.router.navigate(['/login']); // Riporta l'utente al login
        },
        error: (err) => {
          console.error(err);
          // err.error contiene il messaggio lanciato dalle IllegalArgumentException del tuo backend
          alert('Errore durante la registrazione: ' + (err.error || 'Verifica i dati inseriti.'));
        }
      });
    } else {
      // Segna tutti i campi come "toccati" per mostrare gli errori nell'HTML
      this.registerForm.markAllAsTouched();
    }
  }
}
