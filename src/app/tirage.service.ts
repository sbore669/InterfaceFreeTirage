import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TirageM } from './tirage-m';


@Injectable({
  providedIn: 'root'
})
export class TirageService {
  url = 'http://localhost:8080/tirage/voir';
  //adresse du @CrossOrigin de l'api suivie du chemin d'accès de  la fonction dans le controller
  urlNombreListeTire = 'http://localhost:8080/Listepostulants/NombreListeTire';

  constructor(private http: HttpClient) { }
  //Nombre liste tirés
  NombreTirage(): Observable<object>{
    return this.http.get(this.urlNombreListeTire);
  }

  gettirage(): Observable<TirageM[]> {

    return this.http.get<TirageM[]>(`${this.url}`);
  }

  creerTirage(tirage:TirageM,libelle_liste:string, nbre:number):Observable<TirageM>{
    return this.http.post<TirageM>(`http://localhost:8080/tirage/createTirage/${libelle_liste}/${nbre}`,tirage);
  }


  addliste(libele:string,file:any):Observable<void>{
    let data=new FormData()
    data.append("file",file)
    return this.http.post<void>(`http://localhost:8080/postulants/import/excel/${libele}`,data);

  }


getTotalListe():Observable<object>{
  return this.http.get(this.urlNombreListeTire);
}

}