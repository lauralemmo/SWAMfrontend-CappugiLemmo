import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-athlete-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  usernameAthlete: string | null = '';

  ngOnInit(): void {
    // Recupera il nome dell'atleta loggato per personalizzare la pagina
    this.usernameAthlete = localStorage.getItem('username');
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
