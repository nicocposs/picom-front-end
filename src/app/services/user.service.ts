import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Utilisateur } from '../business/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _cookieService:CookieService) { }

  setUser(u?:Utilisateur){
    this._cookieService.set("user", "true");
    if(u != undefined){
      this._cookieService.set("user-role",u.role);
      this._cookieService.set("user-id",""+u.id);
      this._cookieService.set("user-email",u.email);
    }
  }

  getUser() {
    if(!this._cookieService.check("user")){
      return null;
    }
    else {
      return new Utilisateur(
        +this._cookieService.get("user-id"),
        this._cookieService.get("user-email"),
        this._cookieService.get("user-role")
      )
    }
  }

  deconnexion(){
    this._cookieService.delete("user");
    this._cookieService.delete("user-role");
    this._cookieService.delete("user-id");
    this._cookieService.delete("user-email");
  }

}
