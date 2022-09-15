import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulants } from './postulants';

@Injectable({
  providedIn: 'root'
})
export class PostulantsService {

  url = 'http://localhost:8080/postulants/voir';
  //lien pour afficher le nombre total de listes enregistrer dans la base de données. On donne le chemin qu'on a mis 
  //dans cross du controller suivie du chemin d'accès de la methode dans le controleur
  urlNombrePostulants='http://localhost:8080/postulants/NombrePostulant';

  constructor(private http: HttpClient) { }
  //declaration et recuperation
  NombrePostulant(): Observable<Object>{
    return this.http.get(this.urlNombrePostulants);
  }

  getPostulants(): Observable<Postulants[]> {

    return this.http.get<Postulants[]>(`${this.url}`);
    
  }
  
}
