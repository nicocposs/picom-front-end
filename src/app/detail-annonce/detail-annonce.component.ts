import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from '../annonces/annonce';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {

  idAnnonce:number = 0;
  annonce:Annonce = new Annonce(0,"",new Date(),new Date());

  constructor(private service:HttpService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let strVal = this.route.snapshot.paramMap.get('id');
    if(strVal != null){
      this.idAnnonce = +strVal;
    }
    this.getAnnonce(this.idAnnonce);

  }

  getAnnonce(idAnnonce:number){
    this.service.getAnnonce(idAnnonce).subscribe(a => this.annonce = a,
      () => this.router.navigate([''])
      );
  }

  retour(){
    this.router.navigate(['']);
  }
}
