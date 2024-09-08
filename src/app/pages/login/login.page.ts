import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';  // Firebase

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email!: string;
  password!: string;
  welcomeMessage: string = 'Bienvenido!';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private auth: Auth  // Firebase
  ) {}

  async validateLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      
      if (userCredential.user) {
        // Autenticación exitosa
        let extras: NavigationExtras = {
          state: {
            user: this.email
          }
        };
        this.toastMessage('Usuario autenticado correctamente', 'success');
        this.router.navigate(['/home'], extras);
      }
    } catch (error: any) {
      // Error en la autenticación
      this.toastMessage('Error al autenticar: ' + error.message, 'danger');
    }
  }

  async toastMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color,
    });
    toast.present();
  }

  redirect(){
    this.router.navigate(['/reset-password']);
  }

}
