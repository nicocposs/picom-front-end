import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularEditorComponent, AngularEditorConfig } from '@kolkov/angular-editor';
import { TrancheHoraire } from '../business/tranchehoraire';
import { Zone } from '../business/zone';

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
  erreurexpiration:string = "";
  erreurcode:string = "";
  tarif:number = 0;
  htmlContent:string = "";
  titre:string = "";
  zones:Zone[] = [];
  zonesSaved:Zone[] = [];
  trancheshoraire:TrancheHoraire[] = [];
  trancheshoraireSaved:TrancheHoraire[] = [];
  datedebut:Date = new Date();
  datefin:Date = new Date();
  carte:string = "";
  expiration:string = "";
  code:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  verification(formAnnonce:NgForm){
    console.log(formAnnonce.value);
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
