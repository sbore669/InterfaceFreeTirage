import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostultireeService {

  constructor(private http: HttpClient) { }

  url="http://localhost:8080/PostulantTrie/posttire"
  getPostTire(id: number): Observable<object>{
    return this.http.get(`${this.url}/${id}`);
  }
}
