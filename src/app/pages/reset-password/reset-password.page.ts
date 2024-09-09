import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email!: string;

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  resetPassword() {
    if (!this.email) {
      this.toastMessage("Por favor ingresa tu correo", 'danger');
      return;
    }

    const auth = getAuth();
    sendPasswordResetEmail(auth, this.email)
      .then(() => {
        this.toastMessage("Correo de recuperación enviado", 'success');
        this.router.navigate(['/login']); 
      })
      .catch((error) => {
        this.toastMessage("Error al enviar el correo: " + error.message, 'danger');
      });
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
}
