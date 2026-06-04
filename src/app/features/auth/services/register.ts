import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  registerAthlete(athleteData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/athletes/register`, athleteData);
  }
}
