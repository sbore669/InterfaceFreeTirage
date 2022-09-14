import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
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

  detailListe!: Listepostu[];
  constructor( private listepostserv : ListepostservService) {
   /* this.dataSource = new ListeposDataSource(); */
  }
/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  ELEMENT_DATA!: Listepostu[];
  displayedColumns: string[] = ['id_listepostulants', 'libele','date','actions'];
  dataSource = new MatTableDataSource<Listepostu>(this.ELEMENT_DATA);
  
  
  ngOnInit(): void {
    this.listepostserv.getListepostu().subscribe((data: Listepostu[]) =>{
      console.log(data)
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
