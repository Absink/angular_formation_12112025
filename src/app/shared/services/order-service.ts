import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { StateOrder } from '../enums/state-order';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  getOrder(id?: number): Observable<Order> {

    if (id == 0) {
      return throwError(() => new Error("Fake Error !"));
    }

    const fakeOrder = new Order({
      id: 50,
      typePresta: 'Formation Angular',
      client: '',
      date: new Date(),
      tjmHT: 550,
      nbJours: 2,
      state: StateOrder.CONFIRMED
    });

    return of(fakeOrder);
  }
  
}
