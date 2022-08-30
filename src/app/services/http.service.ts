import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../business/client';

import { Annonce } from 'src/app/business/annonce';
import { Tarif } from '../business/tarif';
import { TrancheHoraire } from '../business/tranchehoraire';
import { Zone } from '../business/zone';
import { AnnonceDto } from '../dto/annoncedto';

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

  getTarifs(): Observable<Tarif[]>{
    return this.client.get<Tarif[]>(`http://localhost:8080/api/tarifs`);
  }

  getZones(): Observable<Zone[]>{
    return this.client.get<Zone[]>(`http://localhost:8080/api/zones`);
  }

  getTrancheHoraires(): Observable<TrancheHoraire[]>{
    return this.client.get<TrancheHoraire[]>(`http://localhost:8080/api/tranchehoraires`);
  }

  ajouterAnnonce(a:AnnonceDto):Observable<Annonce>{
    return this.client.post<Annonce>(`http://localhost:8080/api/annonces`,a);
  }
}

