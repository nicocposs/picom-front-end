import { getLocaleTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UserService } from '../user.service';
import { Annonce } from './annonce';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  @Input() clientId?:number = 0;
  annoncesPassees:Annonce[] = [];
  annoncesFutures:Annonce[] = [];

  constructor(private service:HttpService,private router: Router, private user:UserService) { }

  ngOnInit(): void {
    if(this.user.getUser() == null){
      this.router.navigate(['']);
    }
    this.clientId = this.user.getUser()?.id;
    this.getAnnonces();

  }

  getAnnonces() {
    this.service.getAnnonces(this.clientId).subscribe(annonces => {
      for(let a of annonces){
        let today = new Date();
        if(new Date(a.dateHeureDebut).getTime() > today.getTime()){
          let annPassee = new Annonce(a.id,a.titre,new Date(a.dateHeureDebut),new Date(a.dateHeureFin));
          let strJour = new Date(a.dateHeureDebut).toLocaleDateString("fr-FR",{weekday:'short', year: 'numeric', month: 'numeric', day: 'numeric' });
          let newStr = strJour[0].toUpperCase() + strJour.slice(1,strJour.length);
          annPassee.dateDebutSimple = newStr;
          let strJour2 = new Date(a.dateHeureFin).toLocaleDateString("fr-FR",{weekday:'short', year: 'numeric', month: 'numeric', day: 'numeric' });
          let newStr2 = strJour2[0].toUpperCase() + strJour2.slice(1,strJour2.length);
          annPassee.dateFinSimple = newStr2;
          this.annoncesFutures.push(annPassee);
        }else if(new Date(a.dateHeureFin).getTime() < today.getTime()){
          let annFuture = new Annonce(a.id,a.titre,new Date(a.dateHeureDebut),new Date(a.dateHeureFin));
          let strJour = new Date(a.dateHeureDebut).toLocaleDateString("fr-FR",{weekday:'short', year: 'numeric', month: 'numeric', day: 'numeric' });
          let newStr = strJour[0].toUpperCase() + strJour.slice(1,strJour.length);
          annFuture.dateDebutSimple = newStr;
          let strJour2 = new Date(a.dateHeureFin).toLocaleDateString("fr-FR",{weekday:'short', year: 'numeric', month: 'numeric', day: 'numeric' });
          let newStr2 = strJour2[0].toUpperCase() + strJour2.slice(1,strJour2.length);
          annFuture.dateFinSimple = newStr2;
          this.annoncesPassees.push(annFuture);
        }
      }
    });
  }

  click(id:number){
    this.router.navigate(['annonce',id]);
  }

  deconnexion(){
    this.user.setUser(undefined);
    this.router.navigate(['']);
  }

}
