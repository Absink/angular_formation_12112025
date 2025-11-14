import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageGeneric } from '../../../shared/components/page-generic/page-generic';
import { OrderService } from '../../../shared/services/order-service';
import { Order } from '../../../shared/models/order.model';
import { StateOrder } from '../../../shared/enums/state-order';

@Component({
  selector: 'app-page-add-order',
  imports: [FormsModule, PageGeneric],
  templateUrl: './page-add-order.html',
  styleUrl: './page-add-order.scss',
})
export class PageAddOrder {

  private orderService = inject(OrderService);

  public order: Order = new Order();
  public states = Object.values(StateOrder);

  public add(): void {
    this.orderService.add(this.order).subscribe({
      next: data => console.log(data)
    });
  }
}
