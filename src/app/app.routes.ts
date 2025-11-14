import { Routes } from '@angular/router';
import { PageHome } from './features/others/page-home/page-home';
import { PageNotFound } from './features/others/page-not-found/page-not-found';
import { authGuard } from './core/auth-guard';
import { PageLogin } from './features/others/page-login/page-login';
import { roleAdminGuard } from './core/role-admin-guard';

export const routes: Routes = [
  { path: 'login', component: PageLogin },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: PageHome, canActivate: [authGuard] },
  { path: 'orders', 
    loadChildren: () => import("./features/orders/orders-module").then(m => m.OrdersModule),
    canActivate: [authGuard]
  },
  { path: 'clients',
    loadChildren: () => import("./features/clients/clients-module").then(m => m.ClientsModule),
    canActivate: [authGuard]
  },
  { path: 'users',
    loadChildren: () => import("./features/users/users-module").then(m => m.UsersModule),
    canActivate: [authGuard, roleAdminGuard]
  },
  { path: '**', component: PageNotFound }
];
