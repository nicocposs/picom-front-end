import { getLocaleTimeFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Annonce } from './annonce';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  @Input() clientId:number = 0;
  annoncesPassees:Annonce[] = [];
  annoncesFutures:Annonce[] = [];

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getAnnonces();

  }

  getAnnonces() {
    this.service.getAnnonces(this.clientId).subscribe(annonces => {
      for(let a of annonces){
        let today = new Date();
        if(new Date(a.dateHeureDebut).getTime() > today.getTime()){
          let annPassee = new Annonce(a.id,a.contenu,new Date(a.dateHeureDebut),new Date(a.dateHeureFin));
          this.annoncesFutures.push(annPassee);
        }else if(new Date(a.dateHeureFin).getTime() < today.getTime()){
          let annFuture = new Annonce(a.id,a.contenu,new Date(a.dateHeureDebut),new Date(a.dateHeureFin));
          this.annoncesPassees.push(annFuture);
        }
        console.log(a);
      }

    });
  }

}
