import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Client } from './client';

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

  constructor(private service: HttpService) {}

  ngOnInit(): void {}

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

    if (mdp.value !== confirmeMdp.value) {
      this.erreurconfirmemdp = "Les deux mots de passe ne correspondent pas"
    }
      let c: Client = new Client(
        nom.value,
        prenom.value,
        email.value,
        mdp.value,
        num.value
      );
      let response = this.service.ajouterClient(c);
      response.subscribe(
        (res) => console.log('HTTP response', res),
        (err) => this.gererErreurs(err),
        () => console.log('HTTP request completed.')
      );
    return false;
  }

  gererErreurs(err: HttpErrorResponse): void {
    for (const [key, value] of Object.entries(err.error)) {
      this.changerErreur(key, value);
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

}