import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl; // es. http://localhost:8080/SWAM-Cappugi-Lemmo/api

  // Mappa l'endpoint POST /courses/register del tuo backend
  createCourse(courseData: { name: string; maxMembers: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/courses/register`, courseData);
  }
}
