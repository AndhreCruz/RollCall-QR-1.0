import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { User } from 'firebase/auth';
import {CourseServiceService} from './course-service.service'


@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.page.html',
  styleUrls: ['./home-user.page.scss'],
})
export class HomeUserPage implements OnInit {


  email: string | null = null;
  courses: any[] = [];

  constructor(private auth: Auth , private courseService: CourseServiceService) {

   }

  ngOnInit() {
    const user: User | null = this.auth.currentUser;

    if (user) {
      this.email = user.email;
    }

    this.courses = this.courseService.getCourses();

  }

}
