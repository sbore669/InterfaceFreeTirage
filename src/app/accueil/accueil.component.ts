import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {PostulantsService} from '../postulants.service'
import { TirageService } from '../tirage.service';
import { ListepostservService } from '../listepostserv.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{
  content!: string

  nbre!:number;
  //declaration d'une variable pour nombre total de postulant
  nombre: any;
  nombreTirage: any;
  nombreListeTire: any;
  //declaration variatible total liste
  totalListe: any;

  constructor(private breakpointObserver: BreakpointObserver,
    private service: PostulantsService,
    //total liste
    private serviceTirage: TirageService,
    private serviceListeTire: ListepostservService
    ) {}

    ngOnInit(): void {
        this.service.NombrePostulant().subscribe(data=>{
          this.nombre = data;
          console.log(data);
        })

        this.serviceTirage.NombreTirage().subscribe(data=>{
          this.nombreTirage = data;
          console.log(data);
        })
        //totalListe
       
        this.serviceTirage.getTotalListe().subscribe(data=>{
          this.totalListe = data;
          console.log(data);
        })
        
    }


  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total liste Postulants', cols: 1, rows: 1,content: this.totalListe, },
          { title: 'Total Tirage effectuer', cols: 1, rows: 1, content: this.nombreTirage },
          
        ];
      }

      return [
        { title: 'Total liste Postulants', cols: 1, rows: 1,content:this.totalListe, },
        //appel du nombre tirage pour l'affiche
        { title: 'Total Tirage effectuer', cols: 1, rows: 1,content: this.nombreTirage },
      
      ];
    })
  );

}
