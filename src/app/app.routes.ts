import { Routes } from '@angular/router';
import { PageHome } from './features/others/page-home/page-home';
import { Exemple } from './shared/components/exemple/exemple';

export const routes: Routes = [
  { path: 'home', component: PageHome },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'orders', loadChildren: () => import("./features/orders/orders-module").then(m => m.OrdersModule)},
  { path: '**', component: Exemple }
];
