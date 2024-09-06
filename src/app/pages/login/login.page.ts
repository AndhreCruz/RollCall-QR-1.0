import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';  // Importa Auth y signInWithEmailAndPassword

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username!: string;
  password!: string;
  welcomeMessage: string = 'Bienvenido!';

  constructor(
    private router: Router,
    private toastController: ToastController,
    private auth: Auth  // Usa Auth en lugar de AngularFireAuth
  ) {}

  async validateLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.username, this.password);
      
      if (userCredential.user) {
        // Autenticación exitosa
        let extras: NavigationExtras = {
          state: {
            user: this.username
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

  recoverPassword(){
    
  }

}
