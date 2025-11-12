import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { StateClient } from '../enums/state-client';
import { StateOrder } from '../enums/state-order';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  public clients = [
      new Client({
        id: 1,
        tva: 20,
        state: StateClient.Active,
        name: 'Bendoi',
        ca: 8000,
        comment: 'Commande de test sans API'
      }),
      new Client({
        id: 2,
        tva: 20,
        state: StateClient.Active,
        name: 'Joé',
        ca: 120000
      })
    ]


  getClient(id?: number): Observable<Client> {
    let fakeClient;
    if (id == 1)
      fakeClient = this.clients[0];
    else if (id == 2)
      fakeClient = this.clients[1];
    else
      return throwError(() => new Error("Client id n'existe pas !"));

    return of(fakeClient);
  }
  
}
