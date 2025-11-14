import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClients } from './page-list-clients/page-list-clients';
import { PageDetailsClient } from './page-details-client/page-details-client';
import { PageAddClient } from './page-add-client/page-add-client';

const routes: Routes = [
  { path: '', component: PageListClients },
  { path: ':id', component: PageDetailsClient },
  { path: 'add/new', component: PageAddClient }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
