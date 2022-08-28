import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from './inscription/client';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private client:HttpClient) {

  }
      ajouterClient(c: Client): Observable<Object> {
        return this.client.post(`http://localhost:8080/api/utilisateurs`, c);
   }
}
