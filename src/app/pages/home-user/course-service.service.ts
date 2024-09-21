import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  public courses = [
    {
       id: '1',
       title: 'Arquitectura de Software',
       imageURL: 'https://cdn-icons-png.flaticon.com/512/5271/5271007.png',
       details: ['Cursando |', 'ERNESTO LEONIDAS VELASQUEZ VELASQUEZ |', 'Más información'],
    },
    {
       id: '2',
       title: 'Calidad de Software',
       imageURL: 'https://cdn-icons-png.flaticon.com/512/4677/4677559.png',
       details: ['Cursando |', 'DANIEL ENRIQUE RIQUELME RIGOT |', 'Más información'],
    },
    {
       id: '3',
       title: 'Estadistica Descriptiva ',
       imageURL: 'https://cdn-icons-png.flaticon.com/512/432/432796.png',
       details: ['Cursando |', 'MONICA NATHALIA PANES MARTINEZ |', 'Más información'],
    },
    {
       id: '4',
       title: 'Etica Laboral',
       imageURL: 'https://cdn-icons-png.flaticon.com/512/5776/5776927.png',
       details: ['Cursando |', 'LEONARDO OSVALDO MUÑOZ VILLALÓN |', 'Más información'],
    },
    {
       id: '5',
       title: 'Inlges Intermedio',
       imageURL: 'https://images.vexels.com/content/201997/preview/english-book-flat-17d09a.png',
       details: ['Cursando |', 'JOSE SANTOS JARA FUENTES |', 'Más información'],
    },
    {
       id: '6',
       title: 'Programación Aplicaciones Moviles',
       imageURL: 'https://www.svgrepo.com/show/530452/mobile-app.svg',
       details: ['Cursando |', 'CARLOS FERNANDO MARTINEZ SANCHEZ|', 'Más información']
    },

];

constructor() { }


getCourses(){
    return [...this.courses];
}

getCourse(courseId: any){
  return {
    ...this.courses.find( course =>{
      return course.id === courseId
    })
  }
}



}
