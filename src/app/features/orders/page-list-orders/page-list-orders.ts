import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../shared/models/order.model';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../shared/services/order-service';

@Component({
  selector: 'app-page-list-orders',
  imports: [CommonModule],
  templateUrl: './page-list-orders.html',
  styleUrl: './page-list-orders.scss',
})
export class PageListOrders implements OnInit {
  
  private route = inject(ActivatedRoute);
  private orderService = inject(OrderService);

  public id = this.route.snapshot.params['idOrder'];
  public orders: Order[] = [];

  ngOnInit(): void {
    this.orderService.getAll().subscribe({
      next: (x) => (this.orders = x),
      error: (err) => console.log(err)
    });
  }

}
