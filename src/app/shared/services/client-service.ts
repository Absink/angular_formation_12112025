import { inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private api = "http://localhost:3000/clients";

  private http = inject(HttpClient);

  public getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.api);
  }
  
}
