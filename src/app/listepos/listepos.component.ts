import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ListepostservService } from '../listepostserv.service';
import { Listepostu } from '../listepostu';
import { ListeposDataSource, ListeposItem } from './listepos-datasource';

@Component({
  selector: 'app-listepos',
  templateUrl: './listepos.component.html',
  styleUrls: ['./listepos.component.css']
})
export class ListeposComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ListeposItem>;
 
  listepos : any;
  id: number =0
  detailListe!: Listepostu[];
  constructor( private listepostserv : ListepostservService, private router: Router, private route:ActivatedRoute) {
   /* this.dataSource = new ListeposDataSource(); */
  }
/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  ELEMENT_DATA!: Listepostu[];
  displayedColumns: string[] = ['id_listepostulants', 'libele','date','actions'];
  dataSource = new MatTableDataSource<Listepostu>(this.ELEMENT_DATA);
  
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.listepostserv.getListepostu().subscribe((data: Listepostu[]) =>{
      console.log(data)
      this.dataSource.data = data;
    })
  }
 

  goToDetailliste(id:number){
    console.log(id);
    return this.router.navigate(['/detailsliste',id])
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
