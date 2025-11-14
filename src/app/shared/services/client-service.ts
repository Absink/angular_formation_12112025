import { inject, Injectable } from '@angular/core';
import { map, Observable, } from 'rxjs';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  private api = "http://localhost:3000/clients";

  private http = inject(HttpClient);

  public getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.api).pipe(
      map(datas => datas.map(
        data => new Client(data)
      ))
    );
  }

  public getById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.api}/${id}`).pipe(
      map(data => new Client(data)));
  }

  public deleteById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.api}`, client).pipe(
      map(client => new Client(client))
    );
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.api}/${client.id}`, client).pipe(
      map(client => new Client(client))
    );
  }
  
}
