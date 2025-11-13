import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../shared/models/order.model';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../shared/services/order-service';
import { TotalPipe } from '../../../shared/pipes/total.pipe';
import { DaysPipe } from "../../../shared/pipes/days.pipe";
import { ColorState } from '../../../shared/directives/color-state';
import { ColorDays } from "../../../shared/directives/color-days";
import { TableFormation } from '../../../shared/components/table-formation/table-formation';

@Component({
  selector: 'app-page-list-orders',
  imports: [CommonModule, TotalPipe, DaysPipe, ColorState, ColorDays, TableFormation],
  templateUrl: './page-list-orders.html',
  styleUrl: './page-list-orders.scss',
})
export class PageListOrders implements OnInit {
  
  private route = inject(ActivatedRoute);
  private orderService = inject(OrderService);

  public id = this.route.snapshot.params['idOrder'];
  public orders: Order[] = [];
  public enTetes: string[] = ['ID', 'TJM', 'typePresta', 'tva', 'client', 'totalHT', 'totalTTC'];

  ngOnInit(): void {
    this.orderService.getAll().subscribe({
      next: (x) => (this.orders = x),
      error: (err) => console.log(err)
    });
  }

}
