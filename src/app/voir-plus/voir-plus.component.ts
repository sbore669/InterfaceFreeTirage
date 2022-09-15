import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostultireeService } from '../postultiree.service';

@Component({
  selector: 'app-voir-plus',
  templateUrl: './voir-plus.component.html',
  styleUrls: ['./voir-plus.component.css']
})
export class VoirPlusComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router, private postultires: PostultireeService) { }

  id: number=0;
  voirpluss:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.postultires.getPostTire(this.id).subscribe(data=> {
      this.voirpluss=data;
      console.log(data)
    })
  }

  
}
