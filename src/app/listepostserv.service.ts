import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Listepostu } from './listepostu';
@Injectable({
  providedIn: 'root'
})
export class ListepostservService {
  url = 'http://localhost:8080/Listepostulants/voir';

  constructor(private http: HttpClient) { }

  getListepostu(): Observable<Listepostu[]> {

    return this.http.get<Listepostu[]>(`${this.url}`);
  }
}
