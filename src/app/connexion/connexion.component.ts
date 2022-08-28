import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../business/utilisateur';
import { HttpService } from '../http.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  constructor(private service: HttpService, private user:UserService) { }

  ngOnInit(): void {
  }

  connexion(email:HTMLInputElement, mdp:HTMLInputElement): boolean {
    this.service.utilisateurConnexion(email.value, mdp.value).subscribe(u=>{
      let id;
      let mail;
      let role;
      for (const [key, value] of Object.entries(u)) {
        if (key == "id") {
          id = value;
        } else if (key == "email") {
          mail = value;
        } else {
          role = value;
        }
      }
      let utilisateur = new Utilisateur(id, mail, role)
      this.user.setUser(utilisateur)},
      ()=>alert("Identifiants invalide"))
      return false;
  }

}
