import { Injectable } from '@angular/core';
import { Utilisateur } from './business/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user?: Utilisateur = new Utilisateur(0, "", "");

  constructor() { }

  setUser(u?:Utilisateur){
    this.user = u;
  }

  getUser() {
    if(this.user?.id == 0){
      return null;
    }
    else {
      return this.user;
    }
  }

}
