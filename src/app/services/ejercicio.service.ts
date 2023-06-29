import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEjercicio } from '../models/ejercicio.interface';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  url = 'http://localhost:3000/api/ejercicios/';

  constructor(private http: HttpClient) { }

  obtenerEjercicios(): Observable<any> {
    return this.http.get(this.url);
  }

  obtenerEjercicio(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
