import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ListepostservService } from '../listepostserv.service';
import { PostultireeService } from '../postultiree.service';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-details-listes',
  templateUrl: './details-listes.component.html',
  styleUrls: ['./details-listes.component.css']
})


export class DetailsListesComponent implements OnInit {
   id: number=0;
   detailliste:any;
   posttirer:any;

  constructor(private route:ActivatedRoute,private router: Router, private service: TirageService, private postultires: PostultireeService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.service.getToutTirage(this.id).subscribe(data=> {
      this.detailliste=data;
      console.log(data)
    })

    this.id = this.route.snapshot.params['id']
    this.service.getToutTirage(this.id).subscribe(data=>{
      this.posttirer=data;
      console.log(data)
    })
  }

  gotoVoirplus(id:number){
    console.log(id);
    return this.router.navigate(['/voirplus',id])
  }

}
