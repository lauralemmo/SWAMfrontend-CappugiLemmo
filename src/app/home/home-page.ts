import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink], // Necessario per far funzionare il collegamento alla pagina di login
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'] // (o il tuo file di stile)

})
export class HomeComponent {}
