import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth'; // Importa Firebase Auth
import { User } from 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  email: string | null = null; // Variable para almacenar el email

  constructor(private auth: Auth) {} // Inyecta el servicio Auth

  ngOnInit() {
    const user: User | null = this.auth.currentUser; // Obtiene el usuario actual
    if (user) {
      this.email = user.email; // Asigna el email del usuario logueado
    }
  }
}
