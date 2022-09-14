import { Component, OnInit } from '@angular/core';
import { ListepostservService } from '../listepostserv.service';
import { Listepostu } from '../listepostu';
import { TirageM } from '../tirage-m';
import { TirageService } from '../tirage.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Importer } from '../importer';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})


//faire un tirage 
export class TirageComponent implements OnInit {

  formulaireTirage!:FormGroup;
  listepostu : any;
  formulairesImp!:FormGroup;
  file!:any;
  importer!:Importer;
  
  

  public tirage: TirageM = new TirageM();

  constructor( private listepostserv : ListepostservService,
    private tirageServ : TirageService, private formB:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.listepostserv.getListepostu().subscribe((data: Listepostu[]) =>{
      console.log(data)
      this.listepostu = data;
  })
  this.formulairesImp=this.formB.group({
    libele:['',Validators.required],
    id_liste:['',Validators.required],
    date:['',Validators.required],
    file:['',Validators.required],
  })

  }
   
  
 
  fileChange(e:any){
    this.file=e.target["files"][0]

  }
  //concernant le formulaire d'insertion

  enregistreDonner(){
    this.importer=this.formulairesImp.value
    this.tirageServ.addliste(this.importer.libele,this.file).subscribe( responsee =>{
        this.formulairesImp.reset()
      }
    )
  }
































  tirageObj:TirageM={
  id_tirage: 0,
	date: new Date,	
  libelle: "",
  }

  id_Tirage: number = 0;

  libelleT!:string;

  date!: Date;

  libelle_liste: string = '';

  nbre: number = 0;

  resetForm(){

    this.libelle_liste="",
    this.libelleT="",
    this.nbre=0
  }

  PosTirage(){

    this.tirageObj.libelle = this.libelleT;

    this.tirageServ.creerTirage(this.tirageObj, this.libelle_liste, this.nbre).subscribe()
    this.resetForm();
  }




}


function fileChange(e: any, any: any) {
  throw new Error('Function not implemented.');
}

