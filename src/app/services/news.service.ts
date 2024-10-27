import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = ''; // Aquí pones la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener las noticias
  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
