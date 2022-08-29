import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../business/client';

import { Annonce } from 'src/app/business/annonce';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private client: HttpClient) {

  }

  ajouterClient(c: Client): Observable<Object> {
    return this.client.post(`http://localhost:8080/api/utilisateurs`, c);
  }

  utilisateurConnexion(email: string, motDePasse: string): Observable<Object> {
    return this.client.post(`http://localhost:8080/api/utilisateurs/connexion/${email}/${motDePasse}`, null);
  }

  getAnnonces(clientId?: number): Observable<Annonce[]> {
    return this.client.get<Annonce[]>(`http://localhost:8080/api/annonces/${clientId}`);
  }

  getAnnonce(annonceId: number): Observable<Annonce> {
    return this.client.get<Annonce>(`http://localhost:8080/api/annonces/annonce/${annonceId}`);
  }

}

