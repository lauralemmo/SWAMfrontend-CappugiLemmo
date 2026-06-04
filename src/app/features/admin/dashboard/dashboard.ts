import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../services/course';
import { PersonalTrainerService } from '../services/personal-trainer';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  private fb = inject(FormBuilder);
  private courseService = inject(CourseService);
  private ptService = inject(PersonalTrainerService);

  // Form speculare al CourseRequestDTO del backend
  courseForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    numMax: [10, [Validators.required, Validators.min(1)]], // <-- CORRETTO: numMax
    numMembers: [0], // <-- Aggiunto per il DTO
    idPersonalTrainer: [1]  });

  // NUOVO FORM PER IL PERSONAL TRAINER (Campi reali di PersonalTrainerRequestDTO)
  ptForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    salary: [1200, [Validators.required, Validators.min(0)]] // Campo specifico del PT nel tuo DB
  });

  onCourseSubmit() {
    if (this.courseForm.valid) {
      this.courseService.createCourse(this.courseForm.value).subscribe({
        next: (res) => {
          alert(`Corso "${res.name}" inserito con successo con ID: ${res.idCourse}`);
          this.courseForm.reset({ maxMembers: 10 }); // Resetta il form impostando il default
        },
        error: (err) => {
          console.error(err);
          alert('Errore durante l\'inserimento del corso: ' + (err.error || 'Verifica i permessi JWT.'));
        }
      });
    }
  }
  onPtSubmit() {
    if (this.ptForm.valid) {
      this.ptService.createPersonalTrainer(this.ptForm.value).subscribe({
        next: (res) => {
          // Il tuo backend restituisce l'oggetto creato col suo ID unico
          alert(`Personal Trainer "${res.name} ${res.surname}" registrato con successo!\nPrendi nota del suo ID generato: ${res.id}`);
          this.ptForm.reset({ salary: 1200 });
        },
        error: (err) => {
          console.error(err);
          alert('Errore registrazione PT: ' + (err.error || 'Username o Email già esistenti.'));
        }
      });
    }
  }
  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
