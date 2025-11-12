import { Routes } from '@angular/router';
import { PageHome } from './features/others/page-home/page-home';
import { PageNotFound } from './features/others/page-not-found/page-not-found';
import { authGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: 'home', component: PageHome },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'orders', 
    loadChildren: () => import("./features/orders/orders-module").then(m => m.OrdersModule),
    canActivate: [authGuard]
  },
  { path: 'clients',
    loadChildren: () => import("./features/clients/clients-module").then(m => m.ClientsModule),
    canActivate: [authGuard]
  },
  { path: '**', component: PageNotFound }
];
