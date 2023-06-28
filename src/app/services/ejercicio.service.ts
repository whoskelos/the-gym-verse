import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  url = 'http://localhost:3000/api/ejercicios/';

  constructor(private http: HttpClient) { }

  obtenerEjercicios(): Observable<any> {
    return this.http.get(this.url);
  }
}
