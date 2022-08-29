import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';
import { Client } from '../business/client';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  erreurnom: string = '';
  erreurprenom: string = '';
  erreuremail: string = '';
  erreurmdp: string = '';
  erreurconfirmemdp: string = '';
  erreurnum: string = '';

  constructor(private service: HttpService, private router:Router, private user: UserService) {}

  ngOnInit(): void {
    if(this.user.getUser() != null){
      this.router.navigate(['annonces']);
    }else if(this.user.getUser() != null){
      //TODO rediriger vers tarifs
      this.router.navigate(['annonces']);
    }

  }

  verification(
    nom: HTMLInputElement,
    prenom: HTMLInputElement,
    email: HTMLInputElement,
    mdp: HTMLInputElement,
    confirmeMdp: HTMLInputElement,
    num: HTMLInputElement
  ): boolean {
    this.erreurnom = "";
    this.erreurprenom = "";
    this.erreuremail = "";
    this.erreurmdp = "";
    this.erreurconfirmemdp = "";
    this.erreurnum = "";

      let c: Client = new Client(
        nom.value,
        prenom.value,
        email.value,
        mdp.value,
        num.value
      );
      let response = this.service.ajouterClient(c);
      response.subscribe(
        () => this.router.navigate(['']),
        (err: HttpErrorResponse) => this.gererErreurs(err,mdp,confirmeMdp),
        () => console.log('HTTP request completed.')
      );
    return false;
  }

  gererErreurs(err: HttpErrorResponse,mdp:HTMLInputElement,confirmeMdp:HTMLInputElement): void {
    for (const [key, value] of Object.entries(err.error)) {
      this.changerErreur(key, value);
    }
    if(mdp.value != confirmeMdp.value){
      this.erreurconfirmemdp = "Les deux mots de passes ne sont pas identiques";
    }
  }

  changerErreur(k: string, v: any) {
    switch(k) {
      case 'nom':
        this.erreurnom = v;
        break;
      case 'prenom':
        this.erreurprenom = v;
        break;
      case 'email':
        this.erreuremail = v;
        break;
      case 'motDePasse':
        this.erreurmdp = v;
        break;
      case 'numeroDeTelephone':
        this.erreurnum = v;
        break;
    }


  }
  redirectionConnexion(){
    this.router.navigate(['connexion']);
  }

}
