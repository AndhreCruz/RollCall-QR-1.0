import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignaturesAPIService {

  private apiUrl = 'http://localhost:3000/news'; // Aquí pones la URL de tu API

  constructor(private http: HttpClient) { }

  // Método para obtener las noticias
  getSignatures(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
