import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrders } from './page-list-orders/page-list-orders';
import { PageAddOrder } from './page-add-order/page-add-order';
import { PageAddOrderV2 } from './page-add-order-v2/page-add-order-v2';

const routes: Routes = [
  { path: '', component: PageListOrders },
  { path: ':idOrder', component: PageListOrders },
  { path: 'new/add', component: PageAddOrder },
  { path: 'new/addV2', component: PageAddOrderV2 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
