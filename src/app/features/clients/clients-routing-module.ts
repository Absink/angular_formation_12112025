import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClients } from './page-list-clients/page-list-clients';

const routes: Routes = [
  { path: '', component: PageListClients }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
