import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../course-service.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  course:any;

  constructor(private activatedrouter: ActivatedRoute, private coursesdetail: CourseServiceService) { }

  ngOnInit() {
    this.activatedrouter.paramMap.subscribe(paramMap =>{
      //TODO se creara futura validación

      const recipedId = paramMap.get('placeId');
      console.log(recipedId)

      this.course = this.coursesdetail.getCourse(recipedId);
      console.log(this.course)
    })

  }

  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
  
      const imageUrl = image.webPath; 
      console.log('Imagen capturada: ', imageUrl);
  
    } catch (error) {
      console.error('Error al abrir la cámara:', error);
    }
  }

}
