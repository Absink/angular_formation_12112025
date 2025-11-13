import { Component, inject } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { RoleUser } from '../../../shared/enums/role-user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  imports: [],
  templateUrl: './page-login.html',
  styleUrl: './page-login.scss',
})
export class PageLogin {

  private router = inject(Router);

  public users: User[] = [
    new User({
      id: 1, username: 'Joe', password: 'Joe', role: RoleUser.ADMIN
    }),
    new User({
      id: 2, username: 'Abdel', password: 'Abdel', role: RoleUser.USER
    }),
  ];


  login(id: number): void {
    let userConnected: User | null;
    switch(id) {
      case 1:
        userConnected = this.users[0];
        break;
      case 2:
        userConnected = this.users[1];
        break;
      default:
        userConnected = null;
    }

    // Save in Storage
    localStorage.setItem('userFormation', JSON.stringify(userConnected));
    this.router.navigateByUrl('/home');
  }

}
