import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { Tarif } from '../business/tarif';
import { TrancheHoraire } from '../business/tranchehoraire';
import { Zone } from '../business/zone';
import { AnnonceDto } from '../dto/annoncedto';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css']
})
export class AjouterAnnonceComponent implements OnInit {
  erreurtitre:string = "";
  erreurannonce:string = "";
  erreurzones:string = "";
  erreurtrancheshoraire:string = "";
  erreurdatedebut:string = "";
  erreurdatefin:string = "";
  erreurcarte:string = "";
  erreurmoisexpiration:string = "";
  erreurcode:string = "";
  tarif:number = 0;
  htmlContent:string = "";
  titre:string = "";
  zones:Zone[] = [];
  zonesSaved:Zone[] = [];
  trancheshoraire:TrancheHoraire[] = [];
  trancheshoraireSaved:TrancheHoraire[] = [];
  datedebut?:Date = undefined;
  datefin?:Date = undefined;
  carte:string = "";
  moisexpiration:number = 1;
  anneeexpiration:number = 2022;
  code:string = "";
  anneesValides:number[] = [];
  tarifs:Tarif[] = [];

  constructor(private service:HttpService, private user:UserService, private router:Router) { }

  ngOnInit(): void {
    if(this.user.getUser() == null){
      this.router.navigate(['']);
    }
    let dateAujourdhui = new Date();
    let anneeEnCours = dateAujourdhui.getFullYear();
    for(let i = anneeEnCours; i <= anneeEnCours+10;i++){
      this.anneesValides.push(i);
    }
    this.service.getTarifs().subscribe(
      {
        next: t => {this.tarifs = t}
      }
    );
    this.service.getTrancheHoraires().subscribe(
      {
        next: th => {this.trancheshoraire = th}
      }
    );
    this.service.getZones().subscribe(
      {
        next: z => {this.zones = z}
      }
    );
  }

  verification(formAnnonce:NgForm){
    let infos = formAnnonce.value;
    let idClient:number = this.user.getUser()?.id!;
    console.log(infos);
    let annonceCreee = new AnnonceDto(
      new Date(infos.datedebut),
      new Date(infos.datefin),
      infos.titre,
      infos.htmlContent,
      infos.carte,
      infos.anneeexpiration,
      infos.moisexpiration,
      infos.code,
      this.tarif,
      idClient,
      infos.zonesSaved,
      infos.trancheshoraireSaved
      );
    console.log(annonceCreee);
    this.service.ajouterAnnonce(annonceCreee).subscribe(
      {
        next: () => this.router.navigate(['']),
        error: (err) => this.gererErreurs(err)
      }
    )
  }

  gererErreurs(err: HttpErrorResponse): void {
    for (const [key, value] of Object.entries(err.error)) {
      this.changerErreur(key, value);
    }

  }

  changerErreur(k: string, v: any) {
    switch(k) {
      case 'contenu':
        this.erreurannonce = v;
        break;
      case 'cryptogramme':
        this.erreurcode = v;
        break;
      case 'dateHeureDebut':
        this.erreurdatedebut = v;
        break;
      case 'dateHeureFin':
        this.erreurdatefin = v;
        break;
      case 'numeroCarte':
        this.erreurcarte = v;
        break;
      case 'titre':
        this.erreurtitre = v;
        break;
      case 'trancheHoraires':
        this.erreurtrancheshoraire = v;
        break;
      case 'zones':
        this.erreurzones = v;
        break;
    }


  }

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '300px  ',
      minHeight: '0',
      maxHeight: 'auto',
      width: '500px',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Personnalisez votre annonce !',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['insertImage',
      'insertVideo']
    ]
  };
}
