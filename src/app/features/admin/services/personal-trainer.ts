import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonalTrainerService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl; // es. http://localhost:8080/.../api

  // Mappa l'endpoint POST /personaltrainer del tuo backend
  createPersonalTrainer(ptData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/personaltrainer`, ptData);
  }
}
