import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Annonce } from '../business/annonce';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {

  idAnnonce:number = 0;
  annonce:Annonce = new Annonce(0,"",new Date(),new Date());

  constructor(private service:HttpService,private router: Router,private route: ActivatedRoute,private user: UserService) { }

  ngOnInit(): void {
    if(this.user.getUser() == null){
      this.router.navigate(['']);
    }
    let strVal = this.route.snapshot.paramMap.get('id');
    if(strVal != null){
      this.idAnnonce = +strVal;
    }
    this.getAnnonce(this.idAnnonce);

  }

  getAnnonce(idAnnonce:number){
    this.service.getAnnonce(idAnnonce).subscribe(a => this.annonce = a,
      () => this.router.navigate(['annonces'])
      );
  }

  retour(){
    this.router.navigate(['annonces']);
  }
}
