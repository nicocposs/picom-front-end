import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {Annonce} from 'src/app/annonces/annonce';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client:HttpClient) { }

  getAnnonces(clientId:number):Observable<Annonce[]>{
    return this.client.get<Annonce[]>(`http://localhost:8080/api/annonces/${clientId}`);
  }

  getAnnonce(annonceId:number):Observable<Annonce>{
    return this.client.get<Annonce>(`http://localhost:8080/api/annonces/annonce/${annonceId}`);
  }



}

