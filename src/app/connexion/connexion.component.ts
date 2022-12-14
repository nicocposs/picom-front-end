import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../business/utilisateur';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  imageSrc = 'assets/logo.png';

  constructor(private service: HttpService, private user:UserService, private router:Router) { }

  ngOnInit(): void {
    if(this.user.getUser() != null){
      this.router.navigate(['annonces']);
    }
  }

  connexion(email:HTMLInputElement, mdp:HTMLInputElement): boolean {
    this.service.utilisateurConnexion(email.value, mdp.value).subscribe({
      next: (u)=>{
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
      this.user.setUser(utilisateur);
      if(this.user.getUser()?.role == 'client'){
        this.router.navigate(['annonces']);
      }
    },
      error: ()=>alert("Identifiants invalides")}
      );

    return false;
  }

  redirectionInscription(){
    this.router.navigate(["inscription"]);
  }

}
