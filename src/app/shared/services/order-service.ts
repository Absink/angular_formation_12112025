import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  private api = "http://localhost:3000/orders";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(this.api).pipe(
      map(datas => datas.map(
        data => new Order(data)
      ))
    );
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

  public add(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.api}`, order).pipe(
      map(order => new Order(order))
    );
  }
}
