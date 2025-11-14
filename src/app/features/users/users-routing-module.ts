import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListUsers } from './page-list-users/page-list-users';
import { PageViewUser } from './page-view-user/page-view-user';

const routes: Routes = [
  { path: '', component: PageListUsers },
  { path: 'view/:id', component: PageViewUser }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
