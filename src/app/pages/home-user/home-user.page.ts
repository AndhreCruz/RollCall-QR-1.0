import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import {CourseServiceService} from '../../services/course-service.service'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {


  email: string | null = null;
  courses: any[] = [];

  constructor(
    private router: Router,
    private toastController: ToastController,
    private auth: Auth ,
    private courseService: CourseServiceService,
  ) {}

  ngOnInit() {
    const user: User | null = this.auth.currentUser;

    if (user) {
      this.email = user.email;
    }

    this.courses = this.courseService.getCourses();

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

  logout(){
    this.toastMessage('Se ha cerrado su sesión', 'success');
    this.router.navigate(['/login']);
  }
}
