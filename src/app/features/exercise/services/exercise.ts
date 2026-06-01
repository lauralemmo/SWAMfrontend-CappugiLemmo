import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';

export interface ExerciseRequest {
  name: string;
  description: string;
}

export interface ExerciseResponse {
  id: number;
  name: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createExercise(data: ExerciseRequest) {
    return this.http.post<ExerciseResponse>(`${this.apiUrl}/exercise`, data);
  }

  getAllExercises() {
    return this.http.get<ExerciseResponse[]>(`${this.apiUrl}/exercise`);
  }

  getExerciseById(id: number) {
    return this.http.get<ExerciseResponse>(`${this.apiUrl}/exercise/${id}`);
  }

  updateExercise(id: number, data: ExerciseRequest) {
    return this.http.put<ExerciseResponse>(`${this.apiUrl}/exercise/${id}`, data);
  }

  deleteExercise(id: number) {
    return this.http.delete(`${this.apiUrl}/exercise/${id}`);
  }
}
