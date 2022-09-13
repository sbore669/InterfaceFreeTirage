import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulants } from './postulants';

@Injectable({
  providedIn: 'root'
})
export class PostulantsService {

  url = 'http://localhost:8080/postulants/voir';

  constructor(private http: HttpClient) { }

  getPostulants(): Observable<Postulants[]> {

    return this.http.get<Postulants[]>(`${this.url}`);
  }
}
