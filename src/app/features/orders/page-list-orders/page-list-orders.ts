import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  imports: [],
  templateUrl: './page-list-orders.html',
  styleUrl: './page-list-orders.scss',
})
export class PageListOrders {

  private route = inject(ActivatedRoute);

  public id = this.route.snapshot.params['idOrder'];

}
