import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) { }

  async validateLogin(email: string, password: string): Promise<void> {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);

      if (userCredential.user) {
        const extras: NavigationExtras = {
          state: { user: email }
        };

        await this.router.navigate(['/home-user'], extras);
        this.showToast('Usuario autenticado correctamente', 'success');
      }
    } catch (error: any) {
      this.showToast('Error al autenticar: ' + error.message, 'danger');
    }
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      color,
      duration: 2000
    });
    await toast.present();
  }
}
