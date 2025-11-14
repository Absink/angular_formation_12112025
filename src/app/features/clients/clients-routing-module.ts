import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClients } from './page-list-clients/page-list-clients';
import { PageDetailsClient } from './page-details-client/page-details-client';
import { PageAddClient } from './page-add-client/page-add-client';
import { PageAddClientV2 } from './page-add-client-v2/page-add-client-v2';

const routes: Routes = [
  { path: '', component: PageListClients },
  { path: ':id', component: PageDetailsClient },
  { path: 'add/new', component: PageAddClient },
  { path: 'edit/:id', component: PageAddClientV2 },
  { path: 'add/newV2', component: PageAddClientV2 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
